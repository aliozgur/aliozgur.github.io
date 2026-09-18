---

layout: post
title: "150'de Donan Stream: Coding Agent ile Bir Production Problemini Debug Etmek"
subtitle: "Üç buçuk saatte feature, dokuz saatte smoke test, asıl sebep gpt-5.6-luna"
date: 2026-09-18
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- coding
- agents
- debugging
- software-engineering

---

Geçtiğimiz günlerde production kullanımını hedefleyen, agent tabanlı bir AI uygulamasının streaming altyapısında oldukça ilginç bir problemle uğraşıyordum.

Sistem uzun süren agent run'larını arka planda yürütüyor, modelden ve kullanılan tool'lardan gelen progress event'lerini kalıcı bir event store'a yazıyor, ardından bunları Server-Sent Events, yani SSE üzerinden kullanıcı arayüzüne iletiyordu. Normal sohbetlerde sistem sorunsuz görünüyordu: cevaplar akıcı biçimde ekrana geliyor, run tamamlandığında provider, model ve token kullanım bilgileri de kullanıcıya gösteriliyordu.

Fakat oldukça yapay görünen bir test, sistemin normal kullanım sırasında kolaylıkla gözden kaçabilecek bir davranışını ortaya çıkardı.

Modele `Count up to 1000 one by one. 20 nums in a row` dediğimde cevap başlangıçta gayet düzgün stream ediliyor, yaklaşık 130-150 arasına geldiğinde ise görünür stream duruyordu. Bir süre hiçbir şey olmuyor, ardından cevabın geri kalanının önemli bir bölümü bir anda ekrana geliyordu.

Testi birkaç kez tekrarladığımda davranışın rastlantısal olmadığını gördüm. Stall noktası küçük farklılıklar gösterse de sürekli aynı bölgede ortaya çıkıyordu.

Gerçek kullanıcıların uygulamadan bine kadar saymasını beklemiyor olmamız bu testi değersiz hale getirmiyordu. Tam tersine, production-grade bir sistemde bir agent'ın yüzlerce küçük progress event'i üretmesi, çok sayıda tool call yapması veya uzun süren bir analiz sırasında binlerce küçük delta göndermesi son derece gerçekçi senaryolardı.

Kullanıcı açısından bunların tamamı aynı semptomu yaratabilirdi: çalışan bir agent'ın aniden donmuş gibi görünmesi.

{::comment}end-of-excerpt{:/comment}

## 64 KB buffer: semptomla örtüşen ilk hikâye

Yaklaşık 150 civarında tekrar eden sınır doğal olarak bizi buffering ihtimaline götürdü. Coding agent repository'yi inceleyerek önce 64 KB civarında bir response buffer sınırı olabileceğini düşündü.

SSE üzerinden taşınan her sayı yalnızca birkaç karakterden ibaret değildi. Event envelope, JSON metadata ve protokol overhead'i de hesaba katıldığında her küçük event'in gerçek boyutu çok daha büyüktü. Yaklaşık event büyüklükleri üzerinden yapılan hesaplar semptomla yeterince uyumlu görünüyordu.

Bu nedenle response buffering, flush davranışı ve proxy üzerinden yapılan stream kopyalamalarıyla ilgili çeşitli değişiklikler yapıldı. Açıklama teknik olarak oldukça makuldü.

Fakat aynı test yeniden çalıştırıldığında cevap yine yaklaşık 130-150 civarında durdu.

İlk önemli ders burada ortaya çıktı: sayısal olarak gözlemle örtüşen ve teknik olarak gayet ikna edici görünen bir açıklama, gerçek sistem onu doğrulamadığı sürece yalnızca iyi bir hipotezdi.

## WriteAsync ve 16 KB'lık ikinci açıklama

İkinci turda araştırma 16 KB civarındaki buffer davranışlarına, `WriteAsync`, `BodyWriter` ve daha düşük seviyeli response write path'ine yöneldi.

String tabanlı write yerine doğrudan byte write, her SSE frame sonrasında açıkça flush edilmesi ve çok küçük model delta'larının belirli ölçülerde coalesce edilmesi gibi değişiklikler yapıldı. Bu açıklama da önceki kadar ikna ediciydi, çünkü küçük event'lerin belirli bir byte sınırına kadar birikmesi görünürdeki donmayı açıklayabilirdi.

Fakat test sonucu yine değişmedi.

Burada coding agent ile debugging yapmanın ilginç özelliklerinden biri belirginleşmeye başladı. Agent birkaç dakika içerisinde repository'nin farklı katmanlarını inceleyip birbirinden tamamen farklı ama kendi içinde son derece tutarlı root-cause hikâyeleri oluşturabiliyordu.

Sorun, bunların her birinin doğruymuş gibi görünmesinin doğru oldukları anlamına gelmemesiydi.

## Kontrol deneyi: cevap uzunluğu başka, event yoğunluğu başka

Bu noktada aynı sistemi farklı bir workload ile denemeye karar verdim ve modele `Tell me a joke with at least 500 words` dedim. Amacım fıkranın kendisi değil, mümkün olduğunca uzun bir doğal dil cevabı ürettirmekti.

Sonuç beklediğimden daha değerli bir ipucu verdi. 500 kelimeden uzun cevap baştan sona sorunsuz biçimde stream edildi. Count-to-1000 testindeki stall hiçbir noktada görülmedi.

Bu kontrol deneyi problem uzayını önemli ölçüde daralttı. Artık "uzun cevaplar streaming'i bozuyor" diyemezdik. Toplam output miktarı tek başına problem değildi.

İki test arasındaki daha ilginç fark, output'un nasıl chunk'lara ayrıldığıydı. Count-to-1000 testi yüzlerce hatta binlerce küçük delta ve progress event'i üretirken, uzun doğal dil cevabı daha büyük text chunk'ları halinde ilerliyor, dolayısıyla çok daha az event oluşturabiliyordu.

## HTTP/2, TLS ve proxy

Bu gözlemden sonra araştırma tekrar transport katmanına kaydı. Küçük SSE frame'lerinin socket send buffer, HTTP/2 framing veya TLS record sınırlarında batch ediliyor olabileceği düşünüldü. Hatta HTTP/2 yerine HTTP/1.1 kullanmak gibi daha kapsamlı değişiklikler de denendi.

Teknik olarak bunların hiçbiri saçma değildi. Gerçek sistemlerde HTTP protokolü, TLS katmanı veya reverse proxy davranışı streaming gecikmelerine neden olabilir.

Fakat giderek daha geniş kapsamlı altyapı değişiklikleri yapmamıza rağmen aynı count-to-1000 testi aynı bölgede donmaya devam ediyordu.

Bir noktada development ortamındaki proxy katmanı bile şüpheli hale geldi. Browser'ın doğrudan uygulamaya değil, aradaki orchestration proxy'sine bağlanıyor olması araştırıldı. Bu katmanı bypass etmek de güçlü bir aday gibi görünüyordu.

Fakat o aşamada önceki deneylerin bize öğrettiği bir şey vardı: artık yalnızca makul bir açıklama bulduğumuz için "root cause bulundu" demememiz gerekiyordu.

## Event store'daki race: en ikna edici hikâye

Asıl ilginç ihtimal, streaming pipeline'ına yalnızca HTTP açısından değil uçtan uca baktığımızda ortaya çıktı.

Sistem modelden gelen her delta'yı doğrudan browser'a yazmıyordu. Arka planda çalışan agent önce progress event'lerini kalıcı bir event store'a yazıyor, SSE endpoint'i ise bu event'leri sıralı olarak okuyup kullanıcıya aktarıyordu.

Gerçek pipeline şuydu:

`Agent → Event Store → Watcher → SSE → Browser`

Event store okuması pagination kullanıyor ve watcher her sorguda belirli sayıda event alarak son gördüğü ID üzerinden devam ediyordu. Bu, uzun süren ve reconnect gerektirebilecek production run'larında oldukça makul bir tasarımdı.

Fakat run tamamlandığında başka bir mekanizma devreye giriyordu. Final `complete` event'i yazıldıktan hemen sonra, artık gerekli olmadığı düşünülen `text` ve `status` progress event'leri cleanup ediliyordu.

Bu iki davranışı yan yana koyduğumuzda, count-to-1000 testindeki semptomu açıklayan çok daha güçlü bir senaryo ortaya çıktı.

Model yüzlerce küçük text event'ini çok hızlı biçimde üretebilirken, watcher bunları örneğin 200'er event'lik page'ler halinde tüketiyordu. Watcher ilk page'i işlerken producer ikinci, üçüncü ve dördüncü page'e yetecek kadar event üretmiş olabiliyor, ardından run tamamlanıyordu.

Completion pipeline'ı final sonucu kaydedip `complete` event'ini ekledikten sonra progress event'lerini hemen cleanup ediyorsa, watcher bir sonraki page'i istediğinde henüz okumadığı text event'leri artık event store'da bulunmuyordu.

Browser açısından bu durum bir network hang'i gibi görünüyordu. Belirli bir noktaya kadar cevap geliyor, sonra stream duruyor. Fakat final `complete` event'i bütün cevabı içerdiği için run tamamlandığında kalan metin bir anda ekranda beliriyordu.

Bu açıklamanın en güçlü tarafı, yalnızca count-to-1000 testini değil, 500+ kelimelik joke testini de açıklayabilmesiydi.

Uzun bir doğal dil cevabı byte olarak daha büyük olabilir. Ancak çok daha az sayıda model delta'sı, dolayısıyla daha az progress event'i üretiyorsa, watcher producer'ın arkasında yüzlerce event biriktirmeden stream'i takip edebilir. Run tamamlandığında cleanup bekleyen okunmamış büyük bir event backlog'u oluşmadığı için problem görünmez.

Buna karşılık count-to-1000 gibi yüksek event yoğunluklu workload'larda producer ile consumer arasındaki fark büyür. Run completion sırasında yapılan erken cleanup gerçek bir race condition'a dönüşebilir.

Böylece başlangıçta bir Kestrel, HTTP veya TLS problemi gibi görünen davranışın, aslında transport katmanına ulaşmadan önce event lifecycle içerisinde oluşmuş olması mümkün hale geliyordu.

Hikâye o kadar güçlüydü ki neredeyse kapanış cümlesini yazmaya hazırdım. Semptomun iki ayrı yüzünü birden kapsıyordu. Çözüm de net görünüyordu: progress event'lerini run tamamlandığı anda sync cleanup yapmamak, belirli bir retention süresi tanımlamak, cleanup'ı bağımsız bir background process'e bırakmak ve pagination'ın backlog gördüğünde sonraki page'leri daha agresif tüketmesini sağlamak.

## En ikna edici düzeltme de işe yaramadı

Hepsini yaptık.

Event lifecycle değişti, erken cleanup kalktı, watcher backlog gördüğünde sonraki page'leri daha hızlı tüketmeye başladı. Teknik olarak "doğru" görünen bir production düzeltmesi uygulanmış oldu.

Sonra aynı acceptance testini çalıştırdık.

Cevap yine yaklaşık 130-150 civarında durdu.

Bu, günün en pahalı dersiydi.

En ikna edici açıklama, semptomun iki ayrı yüzünü birden kapsayan açıklama, uyguladığımızda sistemi düzeltmesi *gereken* açıklama da gerçek sistem tarafından reddedildi.

Event store tasarımında gerçekten bir zayıflık olabilir. Run tamamlanır tamamlanmaz progress event'lerini cleanup etmek başka senaryolarda da sorun yaratabilir. Fakat bizim gördüğümüz donmayı üreten şey o değildi.

Root cause sandığımız şey, yalnızca o ana kadar elenmemiş en iyi hikâyeydi.

## Yedi tur, sonra ölçüm

Donma öğleden sonra netleşti. Saat 13:00'te semptom şuydu: stream yaklaşık 158 civarında donuyor, sonra bütün sayılar bir anda geliyordu.

Aynı günün sabahı, aslında çok daha büyük bir işin smoke test'ine başlamıştık. Coding agent bir önceki akşam yeni agent runtime'ı ve ona bağlı feature set'i yaklaşık **üç buçuk saatte** bitirmişti. Smoke test ise "küçük bir kontrol" diye başlayıp neredeyse **dokuz saate** yayıldı. Stall turları tek başına bunun yaklaşık **altı saatini** yedi.

| Ne | Süre |
| --- | --- |
| Feature set (yeni runtime + bağlı feature'lar) | **~3.5 saat** |
| Smoke (chrome, leave-page, badge, delete, stall) | **~9 saat** |
| Yalnızca SSE stall turları | **~6 saat** |

| Aşama | Saat |
| --- | --- |
| Feature implementation başladı | 17:35 (bir önceki gün) |
| Agent "V1 complete" dedi | 21:20 |
| Smoke / sign-off başladı | 10:22 |
| İlk `count to 1000` (başka bir bug) | 11:30 |
| SSE stall adlandırıldı | 13:00 |
| Yedi yanlış katman | 13:00-17:43 |
| Instrumentation + OpenAI repro | 17:43 sonrası |

O stall penceresinde yedi ayrı root-cause hikâyesi üretildi, uygulandı ve elendi. Aynı acceptance test'in hâlâ geçmediğini en az **sekiz kez** gördük.

| Tur | Saat | Hipotez | Sonuç |
| --- | --- | --- | --- |
| 1 | 13:00 | Buffering / UI paint | Donma devam etti |
| 2 | 14:21 | Kestrel 64 KB SSE buffer | Düzeltildi dendi; 14:54'te hâlâ donuyor |
| 3 | 14:50 | `DisableBuffering` header timing | 15:15'te hâlâ donuyor |
| 4 | 15:18 | 16 KB / `WriteAsync` / `BodyWriter` | Count testi 15:29'da hâlâ donuyor |
| 5 | 15:37 | HTTP/1.1, TLS, compression, orchestration proxy | HTTP/1.1 de işe yaramadı |
| 6 | 15:59 | Event store race / erken cleanup | Restart sonrası 17:11'de hâlâ donuyor |
| 7 | 17:11 | Outer markdown fence / paint coalescer | Doğrulanmadı; semptomu açıklamıyor |
| 8 | 17:43+ | İlk token'da instrumentation, sonra doğrudan OpenAI Responses | Bizim kodumuz değil; `gpt-5.6-luna` |

Yedinci tur, event store düzeltmesinden sonra ortaya çıktı. Model cevabı bir outer code fence ile wrap ediyorsa, closing fence gelmeden opening fence strip edildiğinde her paint'te pahalı bir markdown rebuild tetiklenebilir diye düşünüldü. Bu gerçek bir bug adayı olabilir. Fakat joke testi ile count testi arasındaki farkı tek başına açıklamıyordu.

Coding agent yorulmuyordu. Repository'yi yeniden tarıyor, başka bir katmanda başka bir tutarlı açıklama kuruyor, yeni bir patch hazırlıyordu. Ben ise aynı count-to-1000 testine bakıyordum ve hâlâ 150 civarında duran aynı stream'i görüyordum.

Asıl semptom belirli bir buffer sınırı veya belirli bir race condition gibi duruyordu. Belirli bir sınıftaki workload'larda sistem sessizce progress kaybediyor, bu network veya SSE gibi görünüyor, her bakışta başka bir katman "asıl neden" oluyordu.

## Asıl sebep bizim kodumuz değildi

Sekizinci turda hipotez üretmeyi kestim. Ölçmeye geçtik.

İlk gözlem noktası, bizim pipeline'ın en başıydı: runtime'dan çıkan raw `delta.Text`, henüz coalesce, event store, Watch, SSE veya browser paint'e girmeden. Count-to-1000 run'ında 318 küçük delta (1-8 karakter) onlarca milisaniye arayla geldi. `delta#318` yaklaşık 20. saniyede. Sonra **35 saniye hiçbir şey yok**. `delta#319` yaklaşık 55. saniyede, tek seferde **3373 karakter**, kalan ~840 sayının tamamı.

Coalescer aynı milisaniyede flush etti. Yani byte elimize geçtiği anda bizim kod gecikme eklemiyordu. 35 saniyelik gap, bizim ilk satırımızdan **önce**, model call'ının içindeydi.

Bunu kilitlemek için pipeline'ı tamamen çıkardık. Standalone bir `HttpClient`, doğrudan `https://api.openai.com/v1/responses`, `stream: true`. Agent Runner yok, event store yok, SSE proxy yok, browser yok. Aynı prompt, org'un kullandığı `gpt-5.6-luna` modeli.

İki count-to-1000 run'ı aynı şekli üretti: ~308 delta düzgün aktı, sonra **10-11 saniyelik gap**, sonra tek bir ~3468 karakterlik delta, sonra complete. Joke testi: 1136 delta, 14.9 saniye, **2 saniyeyi geçen gap yok**.

Semptom gerçekti. Root cause bizim kodumuz değildi. `gpt-5.6-luna`, count-to-1000 gibi düşük entropili, tekrarlayan output'ta token-by-token stream yerine buffer-and-dump'a geçiyor.

Bu yüzden Kestrel, HTTP/1.1, proxy, event store ve markdown fence patch'lerinin hiçbiri 150 noktasını oynatmadı. O nokta bizim buffer sınırımız değil, modelin batch noktasıydı. Joke testi de bu yüzden hiç donmuyordu: yüksek entropili doğal dil, aynı batch davranışını tetiklemiyordu.

UX olarak stream hâlâ 150 civarında duruyor. Acceptance test hâlâ "akıcı sayılsın" diyorsa fail. Fakat fail artık bir uygulama bug'ı değil; provider davranışı. Bundan sonrası app-level bir root-cause avı değil. Ya modeli değiştirmek, ya da uzun inter-token gap'lerde "hâlâ üretiyor" demek.

## Hipotez ucuzladığında geliştiricinin işi

Bütün süreç coding agent ile debugging konusunda da benim için ilginç bir ders oldu.

Agent'ın ilk ürettiği 64 KB buffer açıklaması makuldü. 16 KB send buffer açıklaması makuldü. HTTP/2 ve TLS ihtimali makuldü. Proxy katmanı da makuldü. Event store'daki race de makuldü. Outer fence / paint coalescer de makuldü.

Bunların hiçbiri aptalca tahminler değildi. Aksine her biri gerçek bir production sisteminde benzer semptomlara yol açabilecek mekanizmalardı. Yanlış olan, semptomun bizim kodumuzda olduğu varsayımıydı.

Coding agent'ın gücü de burada ortaya çıkıyor: repository'nin geniş bir bölümünü kısa sürede inceleyebiliyor, birkaç farklı katmanda olası root cause'lar üretebiliyor ve bunlara yönelik patch'leri hızla hazırlayabiliyor.

Fakat hipotez üretme maliyeti bu kadar düştüğünde geliştiricinin görevi ortadan kalkmıyor, yalnızca şekil değiştiriyor. İnsan tarafındaki değer giderek daha fazla doğru kontrol deneyini tasarlamakta, aynı acceptance criterion'ı korumakta ve ikna edici ama yanlış açıklamaları hızla elemekte ortaya çıkıyor.

Bu vaka açısından en değerli deneylerden biri hâlâ 500+ kelimelik joke testi.

Eğer yalnızca count-to-1000 testine bakmaya devam etseydik, byte sınırları ve transport buffering etrafında çok daha uzun süre dolaşabilirdik. Farklı karakterde ama yine uzun bir workload kullanmak "cevap uzunluğu" ile "event yoğunluğu" kavramlarını birbirinden ayırmamızı sağladı.

Debugging sırasında bu tür deneylerin değeri tam da burada yatıyor. İyi bir test yalnızca yeni veri üretmez; olası açıklamaların büyük bölümünü aynı anda ortadan kaldırır.

Coding agent'a "daha derine bak" demek yararlı olabilir. Fakat çok daha güçlü soru genellikle şudur: "Bu hipotez doğruysa, hangi ikinci deney farklı davranmak zorunda?"

Yakın zamanda [Kısıtlar Yapay Zekâyı Determinizme Yaklaştırabilir mi?]({% post_url 2026-08-30-ai-constrained-behavioral-determinism %}) yazısında AI destekli yazılım geliştirmede üretimin olasılıksal olabileceğini, ancak acceptance mekanizmasının mümkün olduğunca deterministik olması gerektiğini tartışmıştım. Bu debugging vakasında da aynı prensibin geçerli olduğunu düşünüyorum.

Agent Kestrel'i, HTTP/2'yi, proxy'yi veya event store'u root cause olarak gösterebilir. Bunların hiçbiri tek başına çözüm değildir. Bu vakada çözüm, kodu bir kez daha patch'lemek değil, ilk token'ın **ne zaman** geldiğini ölçmek ve aynı prompt'u bizim pipeline olmadan OpenAI Responses'a göndermekti.

Bizim acceptance criterion'ımız çok daha basitti: count-to-1000 testi 130-150 civarında uzun süre durmadan 200, 300, 500 ve sonunda 1000'e kadar akmalı, final completion bilgileri eksiksiz görünmeli ve aynı değişiklik daha önce problemsiz çalışan 500+ kelimelik doğal dil streaming testini bozmamalıydı.

Açıklamanın ne kadar sofistike olduğu değil, aynı deney altında sistem davranışının gerçekten değişip değişmediği belirleyici olmalıydı. Event store düzeltmesi de dahil, bizim attığımız hiçbir patch bu criterion'ı karşılamadı. Karşılayamazdı da: `gpt-5.6-luna` aynı prompt'u çıplak `HttpClient` ile de dump ediyordu.

Geriye dönüp baktığımda bütün sürecin en önemli girdilerinden biri aslında oldukça basit bir gözlemdi: "streaming bazen donuyor" demek yerine "streaming sürekli yaklaşık 130-150 civarında donuyor" diyebilmek.

Ardından 500+ kelimelik fıkranın hiç donmadan stream edilmesi ikinci önemli constraint'i ekledi. Problemin toplam output miktarıyla ilgili olmadığını gösterdi.

Bu iki gözlem olası açıklamaların alanını ciddi biçimde daralttı. Fakat daraltılmış bir alan hâlâ birden fazla ikna edici hikâyeyi barındırabiliyor. Alanı kapatan şey bir patch değil, **bizim kodumuzun olmadığı** bir repro oldu.

AI coding agent birçok hikâyeyi son derece hızlı üretebilir. Gerçek sistem ise yalnızca bir davranış gösterir. Debugging'in özü de hâlâ bu ikisi arasındaki farkı sistematik olarak kapatmaktır.

Bu vakada o fark, yedi katmanı eledikten sonra kapandı. Stream bizim SSE'de değil, `gpt-5.6-luna` içinde duruyordu.

Belki coding agent çağında geliştiricinin en değerli yeni becerilerinden biri daha hızlı kod yazmak değil, yanlış açıklamaların hayatta kalamayacağı deneyler tasarlamak olacak.

Agent repository'yi bizden hızlı tarayabilir, daha fazla hipotez üretebilir ve çok daha hızlı patch hazırlayabilir. Fakat hangi hipotezin gerçek dünyayla uyumlu olduğunu belirlemek için gözlem, deney, ölçüm ve acceptance criterion hâlâ vazgeçilmez.

Bu vaka bana bir kez daha şunu hatırlattı: AI ile debugging yapmak root cause bulmayı otomatik hale getirmiyor, fakat hipotez üretme hızını dramatik biçimde artırıyor. Feature üretme hızını da artırıyor. Asıl asimetri orada.

Aynı agent, bir önceki akşam yeni runtime'ı ve ona bağlı feature set'i **üç buçuk saatte** bitirdi. Ertesi gün smoke test'in ince bir dilimi (layout, leave-page, badge, delete ve bu stall) **dokuz saat** sürdü. Stall tek başına **altı saat**. Hipotez ucuz, ölçüm pahalı, yanlış katmanda patch daha da pahalı.

Bu nedenle gelecekte iyi mühendislik, yalnızca AI'a doğru soruyu sormakla değil, AI'ın verdiği cevabı yanlışlayabilecek doğru deneyi kurmakla da ölçülecek.

Bazen o deney, üç buçuk saatlik bir feature set'ten daha uzun sürer. Ve sizi, kendi kodunuzun dışında bırakır.

> Not: Bu yazının hazırlanmasında AI'dan yardım aldım. Debugging vakası, gözlemler ve argüman bana ait.

---

{% include share_twitter_tr.html %}

---
