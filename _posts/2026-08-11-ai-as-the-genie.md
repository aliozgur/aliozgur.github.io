---
layout: post
title: "Cin Problemi: Yapay Zekâ Çağında Zekâ ve Bilgelik"
subtitle: "Harari'nin Cin Hikâyesi Benzetmesinden Yazılım Mühendisliğine: Doğrulama, Geçerleme ve Specification Gaming"
date: 2026-08-11
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:
  - ai
  - software
  - engineering
  - philosophy
  - agents

---

Yuval Noah Harari'nin yapay zekâ üzerine yaptığı konuşmalarda kullandığı cin hikâyeleri benzetmesini oldukça düşündürücü buluyorum. Harari, dünyanın farklı kültürlerinde farklı biçimlerde karşımıza çıkan cin ve dilek hikâyelerindeki ortak bir noktaya dikkat çekiyor. Bu hikâyelerde temel problem çoğu zaman cinin yeterince güçlü olmaması veya insanın dileğini gerçekleştirememesi değildir. Asıl problem, insanların ne istemeleri gerektiğini bilmemeleri ve yanlış şeyleri dilemeleridir. Cin kendisinden isteneni yapar; hatta bazen dileği kelimesi kelimesine ve kusursuz biçimde gerçekleştirir. İnsan ise istediği şeyi elde ettikten sonra bunun aslında arzuladığı sonuç olmadığını veya dileğinin öngöremediği sonuçlar doğurduğunu fark eder.

{::comment}end-of-excerpt{:/comment}

Harari bu örnek üzerinden **zekâ ile bilgelik arasında önemli bir ayrım** yapıyor. Zekâ, bir problemi çözebilme, bilgiyi işleyebilme, örüntüleri görebilme ve belirlenmiş bir hedefe ulaşmanın etkili yollarını bulabilme kapasitesi olarak düşünülebilir. Bilgelik ise hangi hedeflerin peşinden gitmeye değer olduğunu, ne istememiz gerektiğini ve tercihlerimizin uzun vadeli sonuçlarını değerlendirebilme yeteneğiyle ilgilidir. Başka bir ifadeyle zekâ daha çok "Bunu nasıl yapabilirim?" sorusuyla ilgilenirken bilgelik "Bunu yapmalı mıyım, gerçekten istediğim şey bu mu?" sorularını sorar. Bence yapay zekânın geleceği ve özellikle yazılım geliştirme üzerindeki etkisi açısından asıl ilginç tartışma tam olarak bu ayrımda başlıyor.

## Doğru çalışan yanlış yazılım

Yazılım mühendisleri açısından bu tamamen yeni bir problem değil. Bir yazılım sistemi teknik olarak tamamen doğru çalışabilir ve yine de yanlış bir sistem olabilir. Gereksinimler eksiksiz gerçekleştirilmiş, birim ve entegrasyon testleri başarılı, kod kapsama oranı yüksek, statik analiz sonuçları temiz, CI/CD süreçleri tamamen yeşil ve uygulama üretim ortamına sorunsuz biçimde alınmış olabilir. Bütün bunlar geliştirilen sistemin tanımladığımız beklentilere uygun olduğunu gösterir; fakat tanımladığımız beklentilerin doğru olduğunu göstermez.

Yazılım mühendisliğindeki klasik **doğrulama (verification)** ve **geçerleme (validation)** ayrımı bu nedenle önemlidir. Doğrulama kabaca "Sistemi doğru şekilde geliştirdik mi?" sorusuna cevap ararken geçerleme "Doğru sistemi mi geliştirdik?" sorusunu sorar. Birinci sorunun önemli bir bölümü teknik kapasite ve dolayısıyla zekâ ile ilişkilidir. İkinci soru ise alan bilgisi, muhakeme, deneyim, amaçları ve sonuçları değerlendirme becerisi, yani daha geniş anlamıyla bilgelik gerektirir.

Yapay zekâ birinci sorudaki kapasitemizi olağanüstü ölçüde artırabilir. Kod yazabilir, hataları bulabilir, testler oluşturabilir, yeniden düzenleme yapabilir, performans problemlerini analiz edebilir ve giderek daha karmaşık mühendislik görevlerini gerçekleştirebilir. Ancak yapay zekânın bütün bunları başarıyla yapması, bizim doğru problemi tanımladığımız veya doğru sistemi geliştirmeye karar verdiğimiz anlamına gelmez.

## Cin artık kod yazabiliyor

Üretken yapay zekânın yazılım geliştirmedeki ilk kullanım biçimleri ağırlıklı olarak kod tamamlama ve kod üretimi üzerine kuruluydu. Geliştirici bir fonksiyonun ne yapacağını tarif ediyor, model kod üretiyor ve geliştirici ortaya çıkan sonucu değerlendiriyordu. Karar ile uygulama arasındaki mesafe oldukça kısaydı ve kontrol büyük ölçüde geliştiricide kalıyordu.

AI coding agent'ları ile bu model hızla değişiyor. Bugün bir agent kod deposunu inceleyebiliyor, mevcut kodu ve yazılım mimarisini analiz edebiliyor, issue veya gereksinimleri okuyabiliyor, ilgili dosyaları bulabiliyor, birden fazla dosyada değişiklik yapabiliyor, test oluşturabiliyor, testleri çalıştırabiliyor, başarısız sonuçları değerlendirerek çözümünü revize edebiliyor ve sonunda pull request hazırlayabiliyor. Bunun CI/CD sistemlerine, gözlemlenebilirlik platformlarına, issue tracker'lara ve deployment altyapısına doğru genişlemesiyle yapay zekâ yalnızca kod öneren pasif bir araç olmaktan çıkıp belirli bir hedef doğrultusunda çevresini gözlemleyen, araç kullanan ve eyleme geçen bir yazılım aktörüne dönüşüyor.

Bu gelişmelerin önemli bir bölümü yapay zekânın **zekâsını** artırmaya yönelik. Daha iyi akıl yürütme, planlama, araç kullanımı, bellek ve bağlam yönetimi yetenekleri geliştiriyoruz. Bir coding agent'ın karmaşık bir kod deposunda doğru dosyaları bulabilmesi, bir hatanın kök nedenini belirleyebilmesi, mevcut mimariyi anlayabilmesi veya farklı çözüm alternatiflerini değerlendirebilmesi gerçekten önemli teknik ilerlemeler.

Ancak Harari'nin cin örneğinden hareket ettiğimizde burada başka bir soru ortaya çıkıyor: Yapay zekâ verdiğimiz görevi giderek daha iyi yerine getiriyorsa, ona verdiğimiz görevin doğru olması daha mı az, yoksa daha mı önemli hale geliyor? Bence yapay zekânın kapasitesi arttıkça bu sorunun önemi de artıyor. Çünkü yeterince yetenekli bir sistem, yanlış tanımlanmış bir hedefi de son derece başarılı biçimde gerçekleştirebilir.

## Test kapsama oranını %95'e çıkarmak gerçekten istediğimiz şey mi?

Bir AI coding agent'a "Bu projenin test kapsama oranını %95'e çıkar" dediğimizi düşünelim. Bir bilgisayar sistemi açısından bu oldukça iyi tanımlanmış bir hedef: açık, ölçülebilir ve sonucu kolaylıkla doğrulanabilir. Agent kod deposunu analiz edebilir, kapsama raporlarını inceleyebilir, test edilmeyen kodları bulabilir, yeni testler oluşturabilir ve birkaç yineleme sonunda test kapsama oranını %95'e çıkarabilir.

Teknik açıdan görev başarıyla tamamlanmıştır. Ancak gerçekten istediğimiz şey %95 test kapsama oranı mıdır? Agent iş açısından kritik senaryoları doğrulayan kaliteli testler yazabileceği gibi, mevcut kodu yalnızca çalıştıran ve anlamlı davranışları doğrulamayan çok sayıda yüzeysel test de üretebilir. Her iki durumda da gösterge panelinde aynı rakamı görebiliriz: %95.

Buradaki problem, %95 kapsama oranını istememizin arkasında aslında başka bir isteğin bulunmasıdır. Biz esas olarak bir sayı istemiyoruz; yazılım üzerinde değişiklik yaptığımızda kritik davranışların bozulmadığına dair güven istiyoruz. Test kapsama oranı bu güvenin kendisi değil, onu değerlendirmek için kullandığımız göstergelerden yalnızca biridir. Dolayısıyla agent verdiğimiz hedef açısından başarılı olurken bizim gerçek amacımız açısından başarısız olabilir. Cin dileğimizi yanlış anlamamıştır; biz ne istememiz gerektiğini yeterince iyi düşünmemişizdir.

Bu örnek, Harari'nin zekâ ve bilgelik ayrımını yazılım geliştirme açısından oldukça somut hale getiriyor. Zekâ, "Test kapsama oranını %95'e nasıl çıkarabilirim?" sorusunu çözebilir. Bilgelik ise daha önce gelmesi gereken "Biz neden %95 kapsama oranı istiyoruz ve aslında neyi güvence altına almaya çalışıyoruz?" sorusunu sorar.

## Ölçebildiğimiz şey ile istediğimiz şey aynı olmayabilir

Bu problem Goodhart Yasası ile de yakından ilişkili. Basitleştirilmiş haliyle Goodhart Yasası, bir ölçüm hedef haline geldiğinde iyi bir ölçüm olma özelliğini kaybetmeye başladığını söyler. Test kapsama oranı, yazılım kalitesinin kendisi değildir; yazılımın belirli özellikleri hakkında fikir edinmek için kullandığımız bir vekil ölçüttür. Bu ölçütü doğrudan hedef haline getirdiğimizde sistem gerçek amacı değil, ölçebildiğimiz şeyi optimize etmeye başlayabilir.

Aynı problemi yazılım geliştirme organizasyonlarında kullandığımız birçok metrik için düşünmek mümkün. Üretim ortamındaki hata sayısını azaltmak, deployment sıklığını artırmak, teslim süresini düşürmek, API yanıt sürelerini azaltmak, destek maliyetlerini düşürmek veya geliştirici verimliliğini artırmak ilk bakışta oldukça mantıklı hedeflerdir. Ancak üretim ortamındaki hata sayısını azaltmanın en kolay yollarından biri daha az deployment yapmak olabilir. Destek maliyetlerini azaltmanın bir yolu müşterilerin desteğe ulaşmasını zorlaştırmak olabilir. Geliştirici verimliliğini commit sayısıyla ölçersek, daha fazla commit üreten fakat daha fazla iş değeri yaratmayan bir geliştirme organizasyonu oluşturabiliriz.

Bu örneklerde sistemin ölçtüğümüz performansı iyileşirken gerçek sonuç kötüleşebilir. Çünkü metrik ile amaç arasındaki ilişkiyi tersine çevirmiş oluruz. Başlangıçta metriği amaca ne kadar yaklaştığımızı anlamak için kullanırken, bir süre sonra metrik bizzat amaç haline gelir.

Zekâ ile bilgelik arasındaki fark burada yeniden karşımıza çıkar. Zekâ, tanımlanan hedef içerisinde en etkili çözümü arar. Bilgelik ise hedefin kendisini sorgular. Zekâ "Destek maliyetini nasıl %30 azaltırım?" diye sorarken bilgelik "Müşteriler neden bu kadar fazla desteğe ihtiyaç duyuyor ve bizim gerçek amacımız maliyeti azaltmak mı, yoksa müşterinin ürünü daha az desteğe ihtiyaç duyarak kullanabilmesini sağlamak mı?" diye sorar. AI sistemleri daha fazla otonomi kazandıkça bu ayrım felsefi bir tartışma olmaktan çıkıp doğrudan bir mühendislik problemine dönüşüyor.

## Gereksinim ile ihtiyaç arasındaki mesafe

Makine öğrenmesi ve AI safety literatüründe bu problem ailesinin farklı biçimleri **specification gaming** ve **reward hacking** gibi kavramlarla tartışılıyor. Bu terimleri zorla Türkçeleştirmektense ifade ettikleri temel fikre bakmak daha önemli: Bir sisteme bir başarı ölçütü verdiğimizde sistem bizim kafamızdaki amacı değil, kendisine tanımladığımız ölçütü optimize eder.

Yazılım mühendisleri için bu problem oldukça tanıdık. Kullanıcının söylediği şey, kullanıcının istediği şey ve kullanıcının gerçekten ihtiyaç duyduğu şey her zaman aynı değildir. Gereksinim mühendisliğinin varlık nedenlerinden biri zaten bu farktır. İyi bir iş analisti, ürün yöneticisi veya yazılım mühendisi kendisine verilen gereksinimi yalnızca gerçekleştirmekle yetinmez; gereksinimin arkasındaki problemi anlamaya çalışır. "Bu özelliği neden istiyoruz?", "Hangi problemi çözmeye çalışıyoruz?", "Bu davranış hangi koşullarda geçerli?", "Başka hangi süreçleri etkiliyor?" ve "Başarıyı nasıl anlayacağız?" gibi soruların tamamı ifade edilen gereksinim ile gerçek ihtiyaç arasındaki mesafeyi azaltmaya çalışır.

Yapay zekâ çağında bu mesafenin önemi azalmak yerine artabilir, çünkü gerçekleştirme maliyeti dramatik biçimde düşüyor. Geçmişte yanlış tanımlanmış büyük bir özelliğin geliştirilmesi haftalar veya aylar sürebiliyordu. Gereksinimlerin netleştirilmesi, mimari değerlendirme, geliştirme, test ve kod inceleme gibi aşamalar doğal bir sürtünme oluşturuyor ve organizasyona defalarca "Biz gerçekten bunu mu istiyoruz?" diye sorma fırsatı veriyordu. AI agent'ların geliştirme süresini günlerden saatlere, bazı görevlerde dakikalara indirdiği bir dünyada bu doğal sürtünmenin bir bölümü ortadan kalkabilir.

Bu elbette çok büyük bir verimlilik artışı yaratabilir. Fakat aynı anda başka bir kapasitemiz de artar: **Yanlış şeyi çok daha hızlı geliştirebilir hale geliriz.** Yapay zekâ yalnızca doğru fikirlerin gerçekleştirilme maliyetini düşürmez; kötü tanımlanmış gereksinimlerin, yanlış varsayımların ve gereksiz özelliklerin gerçekleştirilme maliyetini de düşürür. Dolayısıyla kod üretiminin hızlanması, problem tanımlamanın kalitesini daha az değil, daha önemli hale getirir.

## Prompt mühendisliğinden bağlam ve spesifikasyon mühendisliğine

AI destekli yazılım geliştirmenin ilk dönemlerinde tartışmanın önemli bir bölümü **prompt mühendisliği** etrafında şekillendi. Temel soru, modele istediğimiz sonucu ürettirebilmek için nasıl daha iyi talimat vereceğimizdi. Daha sonra iyi bir prompt'un tek başına yeterli olmadığını gördük ve **bağlam mühendisliği (context engineering)** önem kazanmaya başladı. Çünkü modelin doğru karar verebilmesi için kod deposunun yapısına, alan bilgisine, mimari kararlara, kodlama standartlarına, API sözleşmelerine ve geçmişte alınmış teknik kararlara erişmesi gerekiyor.

Agentic AI ile birlikte bunun bir sonraki aşamasının **spesifikasyon mühendisliği (specification engineering)** olabileceğini düşünüyorum. Buradaki mesele AI'a yalnızca ne yapması gerektiğini söylemek değil; başarının ne anlama geldiğini, hangi kısıtların korunması gerektiğini, hangi davranışların değişmemesi gerektiğini, hangi ödünleşimlerin kabul edilebilir olduğunu ve hangi eylemlerin insan onayı gerektirdiğini de tanımlamak.

Bir coding agent'a yalnızca "Bu hatayı düzelt" demek yerine public API sözleşmelerinin değişmemesi, geriye dönük uyumluluğun korunması, belirli performans eşiklerinin aşılmaması, kimlik doğrulama ve yetkilendirme modelinin değiştirilmemesi, veri tabanı migration'larının mevcut sistemleri bozmaması ve güvenlik açısından kritik değişikliklerin insan onayı gerektirmesi gibi sınırlar tanımlayabiliriz. Böyle bir dünyada spesifikasyon yalnızca istenen sonucu değil, aynı zamanda **izin verilen çözüm alanını** da tarif etmeye başlar.

Ancak burada önemli bir nokta var. Spesifikasyon mühendisliği cin problemini tek başına çözmez. Yanlış bir hedefi son derece başarılı biçimde formalize edebilir, ona mükemmel bağlam sağlayabilir, çok güçlü testlerle doğrulayabilir ve agent'ın yalnızca izin verilen sınırlar içerisinde çalışmasını sağlayabiliriz. Ortaya çıkan sistem spesifikasyona tamamen uygun olabilir ve yine de yanlış olabilir. Çünkü spesifikasyonun teknik kalitesi ile spesifikasyonun arkasındaki amacın doğruluğu aynı şey değildir.

Bu noktada Harari'nin ayrımına yeniden dönüyoruz. Zekâ, giderek daha iyi spesifikasyonları gerçekleştirebilir. Bilgelik ise **spesifikasyona ne yazılması gerektiğini** sorgular.

## Testler çalıştırılabilir spesifikasyona dönüşürken

AI implementation'ı giderek daha hızlı üretebildiğinde testlerin rolü de değişebilir. Test paketi yalnızca geliştiricinin yazdığı kodu kontrol eden bir mekanizma olmaktan çıkıp agent'a verdiğimiz **çalıştırılabilir spesifikasyonun (executable specification)** bir parçası haline gelebilir. Agent çözümü defalarca değiştirebilir, ancak testlerle ifade ettiğimiz değişmezler ve beklenen davranışlar korunur.

Bu yaklaşım AI tarafından üretilen yazılımlar için güçlü bir doğrulama katmanı sağlayabilir. Bir agent'a doğal dilde gereksinim verebilir, gerekli bağlamı sağlayabilir ve kabul edilebilir davranışların önemli bir bölümünü otomatik testlerle sınırlandırabiliriz. Agent farklı çözümler deneyebilir; fakat belirlediğimiz sınırların dışına çıktığında otomatik doğrulama mekanizmaları bunu tespit edebilir.

Yine de aynı paradoks devam eder. Yanlış davranışı tanımlayan mükemmel bir test paketi, yanlış sistemi çok daha güvenilir biçimde üretmemize neden olabilir. Bütün testlerin yeşil olması doğru şeyi test ettiğimiz anlamına gelmez. Testler sistemin tanımladığımız şekilde davrandığını güçlü biçimde gösterebilir, ancak tanımladığımız davranışın gerçekten doğru olup olmadığı başka bir sorudur. Bu nedenle doğrulamanın önemli bir bölümünü otomatikleştirebiliriz; geçerleme ise alan bilgisi ve insan muhakemesine çok daha fazla ihtiyaç duymaya devam eder.

## Yazılım mimarisi aynı zamanda agent'ın sınırlarını belirleyebilir

Agentic AI, yazılım mimarisinin önemini azaltmak yerine farklı bir nedenle artırabilir. Bugün mimariyi sürdürülebilirlik, ölçeklenebilirlik, performans, güvenlik ve karmaşıklığın yönetilmesi gibi nedenlerle tasarlıyoruz. AI agent'ların geliştirme ve operasyon süreçlerinde daha fazla otonomi kazanmasıyla mimari aynı zamanda agent'ın hareket edebileceği sınırları belirleyen bir mekanizmaya dönüşebilir.

Güçlü tip sistemi, sözleşmeler, şema doğrulama, yetkilendirme sınırları, mimari testler, otomatik testler, politika uygulama mekanizmaları, sandboxing ve en az yetki ilkesi gibi bugün zaten kullandığımız birçok yaklaşım AI agent'lar için teknik koruyucu sınırlar haline gelebilir. Örneğin bir agent'ın üretim veri tabanına doğrudan erişmesi yerine yalnızca belirli bir servis arabirimi üzerinden işlem yapmasına izin verebiliriz. Agent deployment hazırlayabilir ancak üretim ortamına geçiş için insan onayı gerekebilir. Veri tabanı migration'ı oluşturabilir fakat veri kaybına yol açabilecek migration'ları otomatik olarak çalıştıramayabilir. Kod üzerinde değişiklik yapabilir fakat güvenlik açısından kritik modüllerde ayrı bir inceleme zorunlu tutulabilir.

Bu sınırlar son derece değerlidir, ancak bilgelik problemini çözmezler. Koruyucu sınırlar bir agent'ın hangi eylemleri gerçekleştiremeyeceğini belirleyebilir; hangi hedeflerin peşinden gitmemiz gerektiğini belirleyemez. Yanlış bir iş hedefini son derece güvenli, izlenebilir ve teknik olarak doğru bir sistem içerisinde optimize etmek mümkündür.

## Gözlemlenebilirlik artık agent'ları da kapsamak zorunda

Benzer bir dönüşüm gözlemlenebilirlik alanında da ortaya çıkabilir. Bugün loglar, metrikler ve trace'ler ağırlıklı olarak çalışan sistemlerin davranışını anlamak, performans sorunlarını incelemek ve üretim ortamındaki hataların kök nedenlerini bulmak için kullanılıyor. Otonom veya yarı otonom agent'ların yazılım yaşam döngüsü içerisinde eylem aldığı bir dünyada yalnızca sistemin ne yaptığını değil, agent'ın ne yaptığını da izleyebilmemiz gerekecek.

Bir değişiklik gerçekleştiğinde "Agent ne yaptı?", "Neden yaptı?", "Hangi bağlama dayanarak karar verdi?", "Hangi araçları kullandı?", "Hangi kısıtları değerlendirdi?", "Hangi sonucu başarı olarak kabul etti?" ve "Hangi noktada insan onayı aldı?" gibi soruların cevaplanabilir olması gerekecek. Dolayısıyla gözlemlenebilirlik altyapısına denetlenebilirlik ve karar izlenebilirliği gibi yeni boyutların eklenmesi gerekeceğini düşünüyorum.

Fakat burada da teknik mekanizmaların doğal sınırına ulaşıyoruz. Çok iyi bir gözlemlenebilirlik altyapısı bize agent'ın ne yaptığını ve nasıl yaptığını gösterebilir; fakat yaptığı şeyin gerçekten yapılması gereken şey olup olmadığını tek başına söyleyemez. Yine "Nasıl?" sorusundan "Neden?" sorusuna geçtiğimiz anda zekâdan bilgelik alanına doğru hareket ediyoruz.

## Yazılım mühendisinin rolü nereye gidiyor?

Bütün bunların yazılım mühendisinin rolünü ortadan kaldırmaktan çok, çalıştığı soyutlama seviyesini değiştireceğini düşünüyorum. Yazılım mühendisliği tarihinde bunun örneklerini daha önce birçok kez gördük. Assembly'den yüksek seviyeli dillere, manuel bellek yönetiminden managed runtime'lara, fiziksel sunuculardan sanallaştırma ve bulut altyapılarına geçerken bazı düşük seviyeli görevler otomatikleşti, fakat mühendislik ortadan kalkmadı. Mühendisin kontrol ettiği soyutlama seviyesi yükseldi ve yeni seviyede farklı problemlerin çözülmesi gerekti.

Üretken yapay zekâ ve coding agent'lar da benzer bir dönüşüm yaratabilir. Kod üretiminin maliyeti dramatik biçimde düştüğünde değer; problem tanımlama, alan modelleme, yazılım mimarisi, spesifikasyon, kısıtların ve değişmezlerin tanımlanması, doğrulama, geçerleme ve ödünleşim analizi gibi alanlara kayabilir. Geleceğin güçlü yazılım mühendisini diğerlerinden ayıran şey yalnızca sözdizimini daha iyi bilmesi veya daha hızlı kod yazabilmesi olmayabilir. Asıl fark, belirsiz bir iş problemini doğru modelleyebilmesi, kullanıcının ifade ettiği gereksinim ile gerçek ihtiyacı arasındaki farkı görebilmesi, doğru soyutlamaları kurabilmesi, AI'a gerekli bağlamı sağlayabilmesi, sistemin sınırlarını tanımlayabilmesi ve ortaya çıkan sonucu eleştirel biçimde değerlendirebilmesi olabilir.

Bu nedenle yazılım mühendisliğinin ağırlık merkezinin zaman içerisinde "Bunu nasıl yapacağız?" sorusundan "Ne yapmalıyız ve neden?" sorusuna doğru kayabileceğini düşünüyorum. İlk soruda yapay zekânın giderek daha başarılı olmasını bekleyebiliriz. İkinci soru ise alan bilgisi, deneyim, muhakeme, sonuçları öngörebilme ve farklı çıkarlar arasında doğru dengeyi kurabilme becerisi gerektiriyor. Başka bir ifadeyle, birinci soru büyük ölçüde zekâ ile çözülebilirken ikinci soru bilgelik gerektiriyor.

## Zekâ ucuzlarken bilgelik daha değerli hale gelebilir

Yapay zekâ ile birlikte yaşadığımız en önemli dönüşümlerden biri, belirli türde bilişsel kapasitenin maliyetinin hızla düşmesi olabilir. Kod yazmak, alternatif çözümler üretmek, doküman incelemek, veri analiz etmek, büyük miktarda bilgi içerisinde örüntüler bulmak ve karmaşık teknik görevleri gerçekleştirmek giderek ucuzluyor. Bir yazılım geliştirme ekibinin birkaç yıl önce günler sürebilecek bazı işleri bugün birkaç saat içerisinde gerçekleştirmesi mümkün. Agentic AI ile bunun daha ileri gitmesini beklemek de gerçekçi görünüyor.

Bir anlamda belirli alanlarda **zekâ ölçeklenebilir bir kaynağa dönüşüyor**. Aynı probleme daha fazla model, daha fazla agent veya daha fazla hesaplama kapasitesi uygulayabiliyoruz. Ancak zekânın ölçeklenmesi ve ucuzlaması daha iyi kararların da otomatik olarak ölçeklenebileceği anlamına gelmiyor. Aksine yanlış gereksinimleri daha hızlı gerçekleştirebilir, yanlış metrikleri daha etkili optimize edebilir, yanlış mimari kararları daha geniş ölçekte uygulayabilir ve yanlış fikirleri çok daha kısa sürede üretim ortamına taşıyabiliriz.

Bu açıdan bakıldığında yapay zekâ yalnızca doğru şeyi yapma kapasitemizi artırmıyor; **yanlış şeyi çok daha etkili yapma kapasitemizi de artırıyor**. Bu nedenle yazılım geliştirmedeki darboğaz zamanla kod üretmekten problem seçmeye, hedef tanımlamaya ve sonuçları değerlendirmeye kayabilir. Kod üretmek ucuzladıkça doğru kodu istemek, çözüm üretmek kolaylaştıkça doğru problemi seçmek daha değerli hale gelebilir. Zekânın bolluğu bilgelik ihtiyacını azaltmak yerine artırabilir.

Harari'nin cin hikâyeleri üzerinden yaptığı zekâ ve bilgelik ayrımının yapay zekâ çağında bu kadar güçlü olmasının nedeni de bence burada yatıyor. AI tartışmalarında sık sık yapay zekânın bizim yerimize kod yazıp yazamayacağını soruyoruz. Bu soru giderek daha az ilginç hale geliyor; büyük ihtimalle yazacak ve yalnızca kod yazmakla kalmayıp test edecek, analiz edecek, yeniden düzenleyecek, araç kullanacak ve yazılım yaşam döngüsünün giderek daha büyük bir bölümünde aktif rol oynayacak. Daha önemli soru, bütün bunları yapabilen bir zekâya ne yapması gerektiğini söyleyebilecek kadar bilge olup olmadığımız.

Gelecekte bir sistem spesifikasyona tamamen uygun çalışabilir, bütün testler geçebilir, CI/CD süreçleri tamamen yeşil olabilir, bütün kalite kontrolleri başarıyla tamamlanabilir ve ölçtüğümüz KPI'ların tamamı doğru yönde hareket ediyor olabilir. Buna rağmen ortaya çıkan sonuç istemediğimiz bir sonuç olabilir. Böyle bir durumda problem yapay zekânın bizi anlamaması olmayacaktır. Tam tersine, yapay zekâ kendisine söylediğimiz şeyi son derece iyi anlamış ve gerçekleştirmiş olabilir. Cin dileğimizi yanlış anlamamıştır; **biz yanlış şeyi dilemişizdir**.

Belki de yapay zekânın yazılım geliştirme üzerindeki en büyük etkisi daha hızlı kod yazmak olmayacak. Asıl dönüşüm, gerçekleştirmenin giderek otomatikleştiği ve zekânın giderek ucuzladığı bir dünyada insanların neyin gerçekleştirilmesi gerektiği konusunda çok daha dikkatli olmak zorunda kalması olacak. Daha iyi modeller, daha güçlü akıl yürütme yetenekleri, daha uzun bağlam, daha yetenekli agent'lar ve daha fazla otomasyon geliştirmeye devam edeceğiz. Ancak bütün bu teknik ilerlemenin üzerinde çok daha eski ve çok daha insani bir soru kalacak: **Gerçekten ne istemeliyiz?**

Zekâ, istediğimiz şeye nasıl ulaşabileceğimizi bulmamıza yardımcı olabilir. Bilgelik ise neyi istemeye değer olduğunu anlamamızı sağlar.

***
{% include share_twitter_tr.html %}