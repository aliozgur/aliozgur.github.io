---

layout: post
title: "Ajan Çalışırken Geliştirici Ne Yapıyor?"
subtitle: "Yazılım Geliştirmenin Yeni Bekleme Ekonomisi"
date: 2026-09-08
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- coding
- agents
- productivity
- software-engineering

---

Bir coding agent'a orta büyüklükte bir görev verdiğinizi düşünün. Ajan repository'yi inceliyor, ilgili dosyaları buluyor, değişiklikleri yapıyor, testleri çalıştırıyor ve sonucu değerlendiriyor. Bütün bunlar bazen otuz saniye, bazen beş dakika, bazen de çok daha uzun sürüyor.

Bu sırada geliştirici ne yapıyor?

Sorunun ilk bakışta önemsiz görünmesinin nedeni, beklemeyi yazılım geliştirmede zaten bildiğimiz bir durum olarak görmemiz. Build bekledik, test bekledik, deployment bekledik, CI pipeline bekledik. Fakat coding agent'larla ortaya çıkan durum bunlardan biraz farklı. Çünkü artık beklediğimiz şey çoğu zaman yalnızca bir bilgisayar işleminin tamamlanması değil; bizim yerimize mühendislik işi yapan başka bir aktörün işi bitirmesi.

Bir anlamda yazılım geliştirmeye yeni bir zaman ekseni ekledik: **insan zamanı ve ajan zamanı**.

Bu iki zaman eksenini ne kadar iyi senkronize ettiğimiz, önümüzdeki dönemde AI destekli yazılım geliştirmenin gerçek verimliliğini belirleyen konulardan biri olabilir.

{::comment}end-of-excerpt{:/comment}

Daha önce [AI Destekli Yazılım Geliştirmede Bilişsel Yük]({% post_url 2026-04-21-cognitive-load-ai-aug-coding %}) yazımda context switching, doğrulama yükü ve mental state reconstruction gibi kavramlardan bahsetmiştim. [AI Goal Gradient Loop]({% post_url 2026-07-12-ai-goal-gradient-loop %}) yazısında ise AI ile iterasyon maliyetinin düşmesinin geliştirici davranışını nasıl değiştirebileceğini tartışmıştım. Buradaki problem bunlarla ilişkili olmakla birlikte biraz farklı. Bu kez zihinsel yükün kendisinden çok, **ajan çalışırken boşalan insan zamanının neye dönüştüğünü** anlamaya çalışıyorum.

Çünkü ajanların bizi hızlandırıp hızlandırmadığını yalnızca "bu görevi kaç dakikada tamamladık?" sorusuyla ölçmek giderek yetersiz hale geliyor.

## Bekleme yazılım geliştirmede yeni değil

Bu probleme aslında tamamen yabancı değiliz. Todd Sedano, Paul Ralph ve Cécile Péraire'nin yazılım geliştirmedeki israfları inceleyen araştırmalarında **waiting/multitasking**, yani bekleme ve çoklu görev, ayrı bir software development waste kategorisi olarak tanımlanıyor.

Araştırmadaki ilginç gözlemlerden biri şu: geliştiriciler kısa beklemelerde mola verme eğilimindeyken, daha uzun beklemelerde başka bir işe geçiyor. Fakat başka bir işe geçildiğinde bekleme ortadan kalkmış olmuyor; sadece görünmez hale geliyor. Bunun yerine context switching maliyeti ortaya çıkıyor.

Örneğin bir build bir saat sürüyorsa geliştiricinin o bir saat boyunca ekrana bakmasını beklemeyiz. Başka bir işe başlaması gayet mantıklıdır. Fakat build on dakika sonra beklenmedik biçimde tamamlandığında yeni bir problem ortaya çıkar: geliştirici başladığı ikinci işi bırakıp ilk işe mi dönmelidir, yoksa ikinci işi tamamlayıp asıl işi mi geciktirmelidir?

Coding agent'larla aynı problem çok daha yüksek frekansta karşımıza çıkıyor.

Eskiden günde birkaç kez karşılaştığımız uzun beklemeler, artık onlarca küçük bekleme aralığına dönüşebilir.

Ajanı başlat.

Bir dakika bekle.

Ajan test çalıştırıyor.

Teams'e bak.

Ajan bir soruyla geri döndü.

Tekrar IDE'ye geç.

Yeni talimat ver.

Ajan repository'de başka bir alanı inceliyor.

Mail'e bak.

Ajan tamamladı.

Şimdi tekrar ne yaptığını hatırla, ürettiği değişiklikleri incele ve devam et.

Bu çalışma gününde teknik olarak çok az "boş zaman" vardır. Hatta geliştirici bütün gün son derece meşgul görünebilir. Fakat meşgul olmak ile verimli olmak aynı şey değildir.

## Asıl tehlike uzun bekleme değil, garip uzunluktaki bekleme

Bence coding agent'ların ortaya çıkardığı en ilginç zaman aralığı saatler süren görevler değil.

Belki de asıl sorun **20 saniye ile birkaç dakika arasındaki beklemeler**.

Otuz saniye yeni bir mühendislik görevine başlamak için çok kısadır. Üç dakika ise hiçbir şey yapmadan oturmak için yeterince uzundur. Beş dakika başka bir işe başlamak için cazip görünür ama çoğu zaman o işi anlamlı biçimde ilerletmek için yeterli değildir.

Bu süreler geliştiriciyi doğal olarak düşük giriş maliyetli aktivitelere iter. Slack veya Teams açmak, e-postaya bakmak, haber okumak, sosyal medyaya göz atmak ya da başka bir açık sekmeye geçmek bunların arasında olabilir.

Buna doğrudan "zaman kaybı" demek de doğru olmaz. Kısa molaların çalışanların yorgunluğunu azaltabildiğini gösteren araştırmalar var. Örneğin 2022'de yayımlanan bir [micro-break meta-analizi](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0272460), kısa molaların canlılık hissini artırıp yorgunluğu azaltabildiğini gösteriyor. Dolayısıyla ajan çalışırken kahve almak veya birkaç dakika gerçekten dinlenmek kötü bir davranış olmak zorunda değil.

Ancak burada başka bir ihtimal daha var: ne gerçek bir mola veriyoruz ne de gerçek bir işe geçiyoruz.

Bunun yerine sürekli küçük dijital uyaranlar arasında dolaşıyoruz.

Bu davranışın çalışma günü boyunca onlarca kez tekrarlandığını düşünürsek ortaya farklı bir problem çıkıyor. Buna **agent-induced micro-fragmentation**, yani ajan kaynaklı mikro parçalanma diyebiliriz.

Geliştiricinin günü büyük çalışma bloklarından oluşmak yerine şu ritme dönüşüyor:

"çalış → delege et → bekle → dikkat dağıt → geri dön → kontrol et → tekrar delege et"

Buradaki kayıp yalnızca beklenen iki dakika değildir. Her geri dönüşte asıl problemin zihinsel durumunun yeniden kurulması gerekir.

## Bir dakikalık kesinti gerçekten bir dakika mı?

Chris Parnin ve Spencer Rugaber'in programcıların kesintilerden sonra işe dönüş davranışlarını inceleyen klasik çalışması bu açıdan hâlâ oldukça önemli. Araştırmacılar 85 geliştiricinin yaklaşık 10.000 programlama oturumunu incelemiş ve kesinti sonrasında oturumların yalnızca yaklaşık yüzde 10'unda bir dakikadan kısa sürede yeniden kod yazılmaya başlandığını gözlemlemişler.

Geliştiriciler çoğu zaman doğrudan kaldıkları satıra dönmüyor. Önce dosyalar arasında dolaşıyor, başka bağlam kaynaklarına bakıyor ve problemin zihinsel modelini yeniden kuruyorlar.

[Resumption Strategies for Interrupted Programming Tasks](https://chrisparnin.me/pdf/parnin-icpc09.pdf) çalışmasının coding agent döneminden çok önce yapılmış olması aslında meseleyi daha ilginç hale getiriyor. İnsan çalışma belleği değişmedi; değişen şey, çalışma gününe eklediğimiz kesinti üretme kapasitesi.

Başka çalışmalar da geliştiricilerin üretken hissettikleri günleri büyük veya anlamlı görevleri fazla kesintiye uğramadan tamamlayabildikleri günlerle ilişkilendirdiğini gösteriyor. Microsoft Research tarafından yapılan [Software Developers' Perceptions of Productivity](https://www.microsoft.com/en-us/research/publication/software-developers-perceptions-of-productivity/) araştırması bu ilişkiyi açıkça ortaya koyuyor.

Dolayısıyla ajan beklerken başka bir şey yapmak matematiksel olarak bedava değildir.

Bir dakikalık ajan süresini başka işle değerlendirdiğimizi düşündüğümüzde kazandığımız bir dakika, geri dönüşte iki dakikalık context reconstruction yaratıyorsa aslında negatif getiri üretmiş olabiliriz.

## Paralel ajanlar problemi çözüyor mu?

Bu problemin doğal cevabı aynı anda daha fazla ajan çalıştırmak gibi görünüyor.

Bir ajan backend üzerinde çalışırken ikinci ajan testleri hazırlayabilir, üçüncü ajan frontend değişikliğini yapabilir, dördüncü ajan dokümantasyonu güncelleyebilir. Böylece insanın beklemesine gerek kalmaz.

Bu düşüncenin artık teorik olmadığını gösteren ilginç bir işaret var. METR, Şubat 2026'da developer productivity deneylerinin metodolojisini değiştirmek zorunda kaldığını açıkladı. Nedenlerden biri, bazı geliştiricilerin [aynı anda birden fazla AI agent kullanması](https://metr.org/blog/2026-02-24-uplift-update/) nedeniyle tek bir görev için harcanan zamanı güvenilir biçimde ölçmenin zorlaşmasıydı.

Bu küçük ayrıntının önemli olduğunu düşünüyorum.

Çünkü yazılım geliştirmede temel çalışma modeli şu yapıdan uzaklaşıyor:

"Geliştirici → Görev → Sonuç"

Yerine giderek şöyle bir yapı geliyor:

```text
                 Agent A ──┐
                 Agent B ──┤
Geliştirici ───► Agent C ──┼──► Review ─► Integration
                 Agent D ──┤
                 Agent E ──┘
```

Bu modelde geliştiricinin temel görevi artık yalnızca kod üretmek değildir. Geliştirici görevleri parçalayan, ajanlara dağıtan, paralel işleri takip eden, sonuçları değerlendiren ve ortaya çıkan değişiklikleri bütünleştiren bir tür **scheduler** haline gelir.

Fakat burada da yeni bir darboğaz ortaya çıkar.

Ajan sayısını iki katına çıkarabiliriz. Compute kapasitesini on katına çıkarabiliriz. Beş farklı modeli aynı anda çalıştırabiliriz. Ancak geliştiricinin bir saatte anlayabileceği, doğrulayabileceği ve güvenle merge edebileceği değişiklik miktarını aynı hızda artırmak mümkün olmayabilir.

Üretim darboğazını ortadan kaldırırken **review darboğazı** yaratmış oluruz.

Bu noktada ilişkinin yönü bile değişebilir. Bugün geliştirici hazır olduğunda ajana yeni bir görev veriyor. Fakat daha olgun bir agentic workflow'da ajan veya onu yöneten orchestration katmanı, yeni bir göreve başlamadan önce **geliştiricinin yeni bir sonuç almaya hazır olup olmadığını** sorgulayabilir.

Bir başka deyişle yalnızca "ajan çalışmaya hazır mı?" sorusunu değil, "insan yeni bir işi teslim almaya hazır mı?" sorusunu da sormaya başlayabiliriz.

Örneğin sistem, geliştiricinin önünde hâlihazırda iki tamamlanmış fakat henüz review edilmemiş değişiklik, çözümlenmemiş bir test hatası ve bekleyen bir merge varken üçüncü veya dördüncü ajanı başlatmayı reddedebilir. Hatta geliştiriciden yeni işi neden şimdi başlatması gerektiğini açıklamasını isteyebilir.

İlk bakışta geliştiricinin coding agent'ı yeni bir göreve hazır olduğuna ikna etmesi biraz ters bir ilişki gibi görünüyor. Fakat distributed systems açısından bakıldığında oldukça tanıdık bir problemle karşı karşıyayız: **backpressure**.

Bir consumer gelen mesajları yeterince hızlı işleyemiyorsa sisteme sınırsız miktarda yeni veri göndermek throughput'u sonsuza kadar artırmaz; yalnızca kuyruğu büyütür. Agentic software engineering'de aynı şeyin insan tarafında gerçekleşmesi mümkün. Ajanlar producer, geliştirici ise sonuçları inceleyen ve bütünleştiren consumer haline geldiğinde sistemin kıt kaynağı inference kapasitesi değil, insanın değerlendirme kapasitesi olabilir.

Bu durumda geliştirici belki de sistemin **slow consumer**'ına dönüşür.

Dolayısıyla geleceğin agent orchestration sistemlerinin yalnızca ajanların ne zaman çalışacağını değil, ne zaman **çalışmaması gerektiğini** de belirlemesi gerekebilir. Yeni görev başlatmak yerine review kuyruğunun boşalmasını beklemek, daha fazla iş üretmekten daha yüksek toplam throughput sağlayabilir.

Böyle bakınca agentic development'taki readiness kavramı tek yönlü olmaktan çıkar. Hem ajan hem de insan yeni bir iş döngüsüne hazır olmalıdır.

## Ajan çıktısının tamamlanması işin tamamlanması değildir

Bu ayrım özellikle önemli.

Bir coding agent'ın "task completed" mesajı vermesi mühendislik görevinin tamamlandığı anlamına gelmez.

Kodun okunması, mimariye uygunluğunun değerlendirilmesi, testlerin kontrol edilmesi, beklenmeyen etkilerin araştırılması ve gerektiğinde çıktının düzeltilmesi gerekir.

2025 Stack Overflow Developer Survey sonuçlarında geliştiricilerin yüzde 66'sının AI çözümlerinin "neredeyse doğru ama tam doğru olmaması" durumunu sorun olarak bildirmesi ve yüzde 45'inin AI tarafından üretilen kodu debug etmenin daha fazla zaman alabildiğini söylemesi bu açıdan dikkat çekici. Buna rağmen AI agent kullanan geliştiricilerin yaklaşık yüzde 70'i belirli geliştirme görevlerinde harcadıkları sürenin azaldığını düşünüyor.

Bu iki bulgu birbiriyle çelişmiyor.

Ajanlar **production throughput** artırırken aynı anda **verification workload** artırabilir.

DORA'nın 2026'da yayımladığı [Balancing AI Tensions](https://dora.dev/insights/balancing-ai-tensions/) değerlendirmesinde de benzer bir durum görülüyor. İlk üretim aşamasında kazanılan zamanın önemli bir bölümünün auditing, verification ve prompting faaliyetlerine yeniden harcanabildiği belirtiliyor.

Dolayısıyla gelecekte "ajan görevi ne kadar hızlı tamamladı?" metriği tek başına giderek daha anlamsız hale gelebilir.

Asıl ölçülmesi gereken uçtan uca insan-ajan sistemidir.

## Kota dolduğunda ne oluyor?

Bekleme probleminin bir de çok daha az araştırılmış bir türü var: **quota reset**.

Bir coding agent birkaç dakika çalışırken geliştirici hâlâ sistemin içindedir. Ancak kullanım kotasına ulaşıldığında durum farklıdır. Tercih edilen model veya araç birkaç saat kullanılamıyorsa geliştirici yalnızca beklemiyor; çalışma biçimini değiştirmek zorunda kalıyor.

Bu durum artık teorik değil. Örneğin Claude Code'un resmi dokümantasyonu bazı abonelik türlerinde kullanımın belirli pencereler içinde sınırlandığını ve limite ulaşıldığında geliştiricinin reset zamanına kadar bekleyebildiğini açıkça [belirtiyor](https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code).

Böyle bir anda geliştirici ne yapıyor?

Manuel kodlamaya mı dönüyor? Başka bir modele mi geçiyor? Başka sağlayıcı kullanmaya mı başlıyor? Aynı görevi yarıda bırakıp başka bir Jira issue'suna mı geçiyor? Code review mu yapıyor? Toplantı ve e-postaları mı öne çekiyor? Yoksa o günün üretken mühendislik akışı fiilen bitiyor mu?

Bu konuda güvenilir ampirik araştırma neredeyse yok.

Oysa kota yalnızca pricing veya FinOps konusu olmayabilir.

[Kod Yazmak Ucuzlamıyor]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) yazısında token ekonomisini AI destekli yazılım geliştirmenin yeni maliyet yapısı açısından ele almıştım. Kota problemi bunun farklı bir boyutunu ortaya çıkarıyor: **compute bütçesi artık insan emeğinin zamanlamasını değiştirebilir.**

Eskiden bilgisayar kaynağı yetersiz olduğunda sistem yavaşlardı.

Şimdi AI kaynağı yetersiz olduğunda insanın çalışma planı değişiyor.

Bu oldukça önemli bir fark.

## Belki de yeni ölçmemiz gereken şey Agent Wait Utilization

Bugün AI coding productivity araştırmalarında ağırlıklı olarak task completion time, acceptance rate, output miktarı veya developer self-report gibi metrikleri kullanıyoruz.

Agentic development yaygınlaştıkça bunlara başka ölçüler eklemek gerekebilir.

Örneğin bir **Agent Wait Utilization** metriği tanımlayabiliriz. Ajanların aktif olduğu fakat insanın doğrudan müdahale etmesine gerek olmayan toplam süre içerisinde geliştiricinin ne kadar anlamlı iş yapabildiğini ölçebiliriz.

Fakat bu oranı yüksek tutmak tek başına hedef olmamalıdır. Çünkü geliştirici ajan çalışırken sürekli başka görevlere atlıyor ve her geri dönüşte ciddi bir yeniden odaklanma maliyeti ödüyorsa yüzde 100 utilization kötü bir sonuç bile olabilir.

Bu nedenle daha anlamlı bir model şu olabilir:

"Net Bekleme Faydası = Üretken Paralel İş − Context Switch Maliyeti − İşe Dönüş Maliyeti − Monitoring Maliyeti"

Burada başka bir kritik metrik de **review queue depth** olabilir. Aynı anda beş ajan çalıştırmak etkileyici görünebilir ama geliştiricinin önünde sürekli tamamlanmış fakat henüz anlaşılmamış beş değişiklik bekliyorsa sistem üretkenliğini değil Work in Progress miktarını artırmış olabilir.

Bu durumda Little's Law veya klasik queueing theory gibi oldukça eski mühendislik fikirlerinin coding agent dünyasında yeniden önem kazanması şaşırtıcı olmaz.

Çünkü problem artık yalnızca kod üretmek değil, akan işin hızını insan doğrulama kapasitesiyle dengelemektir.

## Her bekleme süresini doldurmak zorunda değiliz

Belki de burada sorgulamamız gereken daha temel bir varsayım var.

Endüstriyel üretim düşüncesinden kalan güçlü bir refleksimiz var: insan çalışıyorsa her dakika üretken görünmelidir. Bir geliştiricinin bilgisayar başında üç dakika hiçbir şey yapmaması bize verimsiz görünür.

Fakat software engineering bir montaj hattı işi değildir.

Beş dakikalık bekleme sırasında başka bir issue açıp beynimize yeni bir problem yüklemek yerine ayağa kalkmak, kahve almak veya gerçekten hiçbir şey yapmamak toplam sistem açısından daha verimli olabilir.

Bu nedenle coding agent ürünlerinin gelecekte yalnızca modelleri daha hızlı çalıştırmaya odaklanması yeterli olmayabilir. Kullanıcı deneyiminin önemli bir parçası, geliştiricinin **hangi bekleme süresinde ne yapması gerektiğini bilmesini sağlayan bir çalışma modeli** oluşturmak olabilir.

On saniyelik bir işlemde başka işe geçmenin anlamı yoktur. On dakikalık bir işlemde belki vardır. Bir saatlik görevde paralel çalışma zaten kaçınılmaz hale gelir. Birden fazla uzun ajan görevi söz konusu olduğunda ise geliştiricinin kişisel bir task scheduler gibi çalışması yerine bunun engineering platform tarafından orkestre edilmesi gerekebilir.

Burada çözüm "geliştiriciyi daha meşgul etmek" değildir.

Çözüm insan ve ajan kapasitesini birlikte tasarlamaktır.

## Verimlilik problemi yavaş yavaş bir senkronizasyon problemine dönüşüyor

Coding agent'lar geliştikçe model inference süresi muhtemelen azalacak, araç kullanımı daha verimli hale gelecek ve ajanlar daha uzun görevleri daha bağımsız biçimde tamamlayabilecek.

Fakat bunun bekleme problemini tamamen çözeceğinden emin değilim.

Aksine ajanlar daha fazla işi üstlendikçe insan ile makine arasındaki zamanlama problemi daha görünür hale gelebilir.

Bir ajan çok yavaşsa insan bekler.

Çok fazla ajan aynı anda çalışırsa insan review kuyruğunda boğulur.

Ajanlar çok sık geri bildirim isterse insan sürekli kesilir.

Kota biterse bütün iş akışı başka bir moda geçer.

Ajan çok hızlı kod üretirse doğrulama kapasitesi darboğaz olur.

Bunların hiçbiri yalnızca "model daha iyi olsun" diyerek çözülebilecek problemler değil.

Bu nedenle agentic software engineering'in önemli araştırma alanlarından birinin **human-agent temporal coordination**, yani insan ile ajan arasındaki zamansal koordinasyon olacağını düşünüyorum.

Belki birkaç yıl sonra developer productivity dashboard'larında yalnızca cycle time ve deployment frequency görmeyeceğiz. Agent active time, human active time, review queue depth, productive parallel work, context-switch frequency ve quota-induced displacement gibi kavramları da ölçüyor olacağız.

Çünkü geleceğin temel sorusu muhtemelen "AI geliştiriciyi ne kadar hızlandırdı?" olmayacak.

Daha ilginç soru şu olacak:

**İnsan ve ajan aynı sekiz saatlik çalışma gününü gerçekten ne kadar iyi paylaşabiliyor?**

Bugün bu sorunun cevabını bilmiyoruz.

Daha da ilginci, henüz doğru düzgün ölçmüyoruz.

## Referanslar

1. [Todd Sedano, Paul Ralph, Cécile Péraire — Software Development Waste, ICSE 2017](https://homepages.dcc.ufmg.br/~figueiredo/disciplinas/papers/icse17sedano.pdf)
2. [Todd Sedano — Waiting / Multitasking](https://sedano.org/software-development-wastes/waiting-and-multitasking)
3. [Chris Parnin, Spencer Rugaber — Resumption Strategies for Interrupted Programming Tasks](https://chrisparnin.me/pdf/parnin-icpc09.pdf)
4. [Meyer et al. — Software Developers' Perceptions of Productivity, Microsoft Research](https://www.microsoft.com/en-us/research/publication/software-developers-perceptions-of-productivity/)
5. [Meyer et al. — Today Was a Good Day: The Daily Life of Software Developers](https://www.microsoft.com/en-us/research/publication/today-was-a-good-day-the-daily-life-of-software-developers/)
6. [METR — We are Changing our Developer Productivity Experiment Design, 2026](https://metr.org/blog/2026-02-24-uplift-update/)
7. [DORA — Balancing AI Tensions: Moving from AI Adoption to Effective SDLC Use, 2026](https://dora.dev/insights/balancing-ai-tensions/)
8. [Stack Overflow — 2025 Developer Survey: AI](https://survey.stackoverflow.co/2025/ai)
9. [Albulescu et al. — "Give me a break!" A systematic review and meta-analysis on the efficacy of micro-breaks](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0272460)
10. [Anthropic — Models, Usage, and Limits in Claude Code](https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code)

---

{% include share_twitter_tr.html %}

---