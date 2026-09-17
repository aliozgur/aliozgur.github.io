---

layout: post
title: "AI ile Küçülmek: Maliyet Azaltırken Kabiliyeti de Kaybediyor muyuz?"
subtitle: "Yapay zekâ verimlilik sağlıyor, fakat verimlilik ile organizasyon kapasitesini aynı şey sanmak pahalı bir hata olabilir"
date: 2026-09-17
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- software-engineering
- strategy
- employment
- gartner

---

Yapay zekânın iş gücüne etkisini tartışırken konu çoğu zaman çok hızlı biçimde aynı denkleme indirgeniyor: Bir çalışan AI ile iki kat üretken hale geliyorsa aynı işi yarı sayıda insanla yapabiliriz. Matematik ilk bakışta ikna edici. Özellikle finansal baskı altındaki bir şirket açısından daha da ikna edici, çünkü AI yatırımı ile maliyet azaltımı arasında yönetim kurulu seviyesinde anlatılması kolay, ölçülmesi kolay ve kısa vadede gelir tablosunda görülmesi kolay bir ilişki kuruyor.

{::comment}end-of-excerpt{:/comment}

Sorun bu ilişkinin tamamen yanlış olması değil. Gerçekten de AI birçok işi hızlandırıyor, bazı görevleri ortadan kaldırıyor ve bazı ekiplerin geçmişte olduğundan daha küçük çalışabilmesini mümkün kılıyor. Sorun, bu verimlilik artışını doğrudan organizasyonun stratejik kapasitesindeki aynı oranda azalmaya çevirdiğimizde ortaya çıkıyor. Çünkü bir işi daha hızlı yapabilmek ile o işi yapan organizasyonel kabiliyete artık ihtiyaç duymamak aynı şey değil.

Haziran ayında [Yapay Zekâ İşten Çıkarma Tuzağı]({% post_url 2026-06-02-ai-layoff-trap %}) yazısında AI ile işten çıkarma kararlarının yalnızca çalışan maliyeti üzerinden okunmasının eksik kalacağını tartışmıştım. O yazıdaki perspektif daha çok ekonominin talep tarafı ve şirketlerin bireysel olarak rasyonel görünen kararlarının kolektif sonuçları üzerineydi. Bugün aynı probleme şirketin içinden, organizasyon tasarımı açısından bakmak istiyorum: AI gerçekten daha az insanla çalışmamızı sağlıyorsa, azaltmamız gereken şey headcount mı, yoksa aynı headcount içinde artık değer üretmeyen iş mi?

## Gartner'ın iki ayrı araştırması aynı yere işaret ediyor

Gartner'ın 5 Mayıs 2026 tarihli *The Future of the Software Engineer Role in the Age of AI* araştırması yazılım mühendisliğindeki dönüşümü dört rol arketipi üzerinden ele alıyor: Product Engineer, AI Engineer, Internal Forward-Deployed Engineer ve Platform Engineer. Buradaki önemli ayrıntı, Gartner'ın bunları yeni iş unvanları olarak değil, geleceğin yazılım mühendisliğinde öne çıkacak sorumluluk kümeleri olarak tanımlaması.

Product Engineer yalnızca kendisine verilen requirement'ı implemente eden geliştirici değil; kullanıcıyı ve iş bağlamını anlayan, ürün niyetini teknik yöne dönüştüren, AI agent'larını orkestre eden ve production-ready sonucun sorumluluğunu taşıyan mühendis. AI Engineer model seçimi, grounding, RAG, evaluation, monitoring ve reliability gibi konuların sahibi. Internal FDE gerçek iş akışına gömülerek legacy sistemler, parçalı veri ve domain kurallarıyla merkezi ürün kabiliyetleri arasındaki boşluğu kapatıyor. Platform Engineer ise bütün bu yapının tekrar kullanılabilir, güvenli, gözlemlenebilir ve ekonomik biçimde ölçeklenmesini sağlayan ortak zemini kuruyor.

Bu çerçeveyi ilginç yapan şey, "AI daha fazla kod yazacak" sonucundan "dolayısıyla yazılım mühendisliği daha az önemli olacak" sonucuna gitmemesi. Tam tersine, rutin implementasyonun maliyeti düştükçe mühendislik değerinin başka yerlere kaydığını söylüyor. Kod yazmanın kendisi daha ucuz hale gelirken neyin yazılacağını belirlemek, doğru sistemi tasarlamak, AI çıktısını doğrulamak, karmaşık enterprise gerçekliğine entegre etmek ve bütün bunları ölçekleyebilecek platformları kurmak daha önemli hale geliyor.

Bu fikir, [2030'a Giderken Yazılım Mühendisliği: Kod Yazmanın Ötesinde]({% post_url 2026-08-29-ai-future-of-swe-impact-of-ai %}) yazısında tartıştığım daha geniş dönüşümle de örtüşüyor. Kod üretim kapasitesi kıt kaynak olmaktan çıkıyorsa, kıtlık doğru problem seçiminde, alan bilgisinde, teknik muhakemede, sistem düşüncesinde ve güvenilir sonuç üretme kapasitesinde ortaya çıkıyor.

9 Eylül 2026'da Gartner bu kez Future of Work perspektifinden daha sert iki öngörü yayımladı. Gartner'a göre 2029'a kadar AI tarafından ikame edildiği düşünülerek işten çıkarılan çalışanların %30'unun yeniden işe alınması gerekecek ve bu çoğu zaman daha yüksek maliyetle gerçekleşecek. Gartner ayrıca 2027'ye kadar AI verimlilik kazanımlarını ağırlıklı olarak maliyet tasarrufuna dönüştürmeye öncelik veren organizasyonların %75'inin, bu kazanımları inovasyon, modernizasyon ve upskilling'e agresif biçimde yeniden yatıran rakipler tarafından geride bırakılacağını tahmin ediyor.

Bu oranları kesin gelecek sonuçları gibi okumamak gerekiyor; bunlar Gartner'ın öngörüleri. Fakat arkasındaki karar mantığı bence oranlardan daha önemli. AI ile verimlilik kazanmak bir kapasite yaratıyor. Yönetimin önünde daha sonra ikinci bir karar ortaya çıkıyor: Bu kapasiteyi organizasyondan çıkaracak mıyız, yoksa aynı kapasiteyi daha önce ekonomik olmadığı için yapamadığımız işlere mi yönlendireceğiz?

## Maliyet azaltmak ile kabiliyet azaltmak aynı şey değil

Bir şirket finansal baskı altındaysa maliyet azaltması gerekebilir. Bunun romantik bir tarafı yok. Nakit akışı, borç servisi veya kârlılık sorunu varsa yönetimin "önce uzun vadeli vizyonumuzu düşünelim" deyip finansal gerçekliği görmezden gelmesi de strateji değildir. Bazen organizasyon küçülmek zorundadır.

Fakat küçülmenin kendisi ile nereden küçüldüğümüz iki farklı problemdir.

Bordro maliyeti çok görünür bir maliyettir. Bir kişinin yıllık toplam maliyetini hesaplayabilir, organizasyondan çıkardığınızda tasarrufu bütçeye yazabilirsiniz. Kaybettiğiniz kabiliyet ise aynı gün finansal tablolarda görünmez. Bir senior engineer'ın sistemin neden belirli şekilde tasarlandığını bilmesi, yıllar önce yapılan bir entegrasyonun tarihçesini hatırlaması, belirli bir müşteri akışında nerede kırılma olabileceğini sezmesi veya bir mimari kararın hangi yan etkileri doğuracağını tecrübeyle bilmesi muhasebe sisteminde ayrı bir varlık olarak tutulmaz.

Bu bilgi kaybolduğunda maliyeti daha sonra görürüz. Bir incident çözümü günler sürer, roadmap yavaşlar, aynı problem yeniden keşfedilir, daha fazla custom development gerekir, dışarıdan danışmanlık alınır veya birkaç yıl sonra aynı profili daha yüksek ücretle tekrar işe almaya çalışırız.

Bu nedenle özellikle bilgi yoğun organizasyonlarda "kaç kişi azaltıyoruz?" sorusu tek başına zayıf bir optimizasyon fonksiyonudur. Daha doğru soru şudur: Hangi maliyeti azaltıyoruz ve bunun karşılığında hangi kabiliyeti bilinçli olarak bırakıyoruz?

Bu ayrım yapılmadığında kısa vadeli finansal optimizasyon, farkında olmadan uzun vadeli işletim modeli tasarımına dönüşür.

## AI'nın bir görevi hızlandırması o görevin sorumluluğunu ortadan kaldırmıyor

AI coding agent'larıyla çalışan herkes birkaç yıl önce günler sürebilecek bazı işlerin artık saatler içinde yapılabildiğini görüyor. Repository içinde gezinmek, boilerplate üretmek, test yazmak, refactoring yapmak, basit migration'lar hazırlamak veya nispeten sınırlı feature'ları geliştirmek dramatik biçimde hızlandı. Bunu inkâr etmek anlamsız olur.

Fakat yazılım mühendisliğini bu görevlerin toplamı olarak görürsek yanlış noktayı optimize ederiz.

Bir agent kodu üretebilir; ama hangi değişikliğin doğru olduğuna karar vermek, mevcut mimaride neden o sınırların bulunduğunu anlamak, güvenlik ve veri etkisini değerlendirmek, performans riskini görmek, migration sırasını planlamak ve production sorumluluğunu taşımak farklı kabiliyetlerdir. AI bu alanlarda da giderek daha fazla yardımcı olacak, hatta bazı kararları belirli sınırlar içinde kendisi alacak. Ancak bu kez de başka bir mühendislik problemi ortaya çıkacak: Agent hangi araçlara erişebilir, hangi bağlamı görebilir, hangi değişiklikleri kendi başına yapabilir, nasıl doğrulanır, ne zaman durdurulur, ne zaman insana eskale edilir?

[AI Engineering FinOps'un Eksik Parçası: Harness Engineering]({% post_url 2026-08-26-harness-engineering-ai-finops-part2 %}) yazısında bunun maliyet tarafını tartışmıştım. AI ile kod yazmanın ekonomik modeli yalnızca lisans ücretinden ibaret değil; model, token, context, tool execution, sandbox, eval ve observability maliyeti giderek daha büyük bir bütün oluşturuyor. [Kod Yazmak Ucuzlamıyor]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) yazısındaki temel argüman da buradan geliyordu: Modelin birim fiyatı düşebilir, fakat doğru olmayan bir çalışma biçimi toplam engineering maliyetini pekâlâ artırabilir.

Dolayısıyla "AI bir geliştiriciyi kaç kat hızlandırıyor?" sorusundan "AI ile güçlendirilmiş mühendislik sisteminin bir accepted change üretme maliyeti nedir?" sorusuna geçmemiz gerekiyor. Cycle time düşerken production defect artıyorsa, daha çok kod üretilirken incident sayısı büyüyorsa veya daha az insanla çalışırken kritik sistem bilgisi birkaç kişide aşırı yoğunlaşıyorsa kağıt üzerinde verimli görünen sistem gerçekte daha kırılgan hale gelebilir.

## Küçük ekipler olabilir, ama küçük ekip tek başına strateji değildir

AI-native organizasyonlarla ilgili en çekici fikirlerden biri tiny team modeli. Az sayıda, çok yetkin ve alan bilgisi yüksek insanın AI agent'larıyla birlikte geçmişte çok daha büyük ekiplerin yaptığı işi yapabilmesi gerçekten mümkün hale geliyor. Ben de bunun gerçekleşeceğini düşünüyorum.

Ancak tiny team'i yalnızca headcount küçültme yöntemi olarak okumak büyük resmi kaçırıyor. Gartner'ın tarif ettiği küçük ekipler güçlü platform kabiliyetleri üzerinde çalışıyor. Ortak kimlik, güvenlik, deployment, observability, veri erişimi, model erişimi, agent runtime, eval, policy ve cost control gibi konular her küçük ürün ekibinin yeniden çözmesi gereken işler olmaktan çıkarılıyor.

Yani organizasyon aynı anda iki yönde değişiyor: Uca yakın ekipler küçülüyor ve sorumlulukları genişliyor; buna karşılık ortak platform katmanı daha stratejik hale geliyor.

Bunu hesaba katmadan yalnızca ürün ekiplerini küçültmek, platform ve kurumsal bilgi katmanını da zayıflatmak, ardından "AI zaten kod yazıyor" demek tiny team modeli değil. Bu daha az insanla aynı karmaşıklığı taşımaya çalışmak anlamına gelir.

## Asıl risk bir departmanı küçültmek değil, şirket tipini fark etmeden değiştirmek

Bir organizasyonun hangi ekipten ne kadar küçüldüğü zaman içinde şirketin ne tür bir şirket olduğuna da karar verir. Product engineering, platform engineering ve AI engineering kapasitesini azaltıp müşteri operasyonuna yakın insan yoğun işleri koruyan bir şirket giderek service-heavy bir yapıya dönüşebilir. Bunun yanlış olduğunu söylemiyorum; bazı şirketler için son derece doğru bir strateji olabilir.

Ama o zaman bunun bilinçli bir tercih olması gerekir.

Tersi de geçerli. "Biz ürün ve platform şirketiyiz" deyip ürün mimarisi, yazılım mühendisliği ve platform sahipliğini sürekli zayıflatırken müşteri başına manuel operasyonu artırmak uzun vadede ifade ile gerçek işletim modeli arasında bir fark yaratır.

Bu nedenle AI çağında yönetim seviyesinde sorulması gereken soru bana göre "hangi departmanda fazla insan var?" sorusundan önce gelmeli: Şirket hangi ekonomik modelle büyümek istiyor?

Tekrar kullanılabilir ürün ve platformlarla mı, yoksa müşteriye özel insan emeğini ölçekleyerek mi? AI bu iki modelin ikisinde de kullanılabilir, fakat ihtiyaç duyulan organizasyon yapısı aynı değildir.

## Verimlilik kazancının tamamını kasaya yazmak zorunda değiliz

AI verimliliğini konuşurken sanki elimizde yalnızca iki seçenek varmış gibi davranıyoruz: Ya insan sayısını azaltacağız ya da AI yatırımının ekonomik bir getirisi olmayacak. Oysa üçüncü bir seçenek var ve teknoloji tarihindeki büyük sıçramalar çoğu zaman asıl değeri burada üretti: Aynı kaynakla daha önce yapamadığımız şeyleri yapmak.

Bir ekip AI sayesinde %30 daha hızlı hale geldiyse bu %30 kapasiteyi tamamen bordrodan çıkarabiliriz. Ya da teknik borcu azaltabilir, yıllardır ertelenen ürün modernizasyonunu yapabilir, daha küçük müşteri segmentlerine ekonomik biçimde hizmet verebilir, daha fazla deney yapabilir, security ve observability yatırımlarını artırabilir veya yeni ürün alanlarına girebiliriz.

Bu seçeneklerden hangisinin doğru olduğu şirketin finansal durumuna bağlıdır. Nakit krizi yaşayan bir şirket elbette kazanılan kapasitenin önemli bölümünü tasarrufa çevirebilir. Fakat bunun otomatik olarak %100 olması gerektiğine dair teknolojik bir kural yok.

Belki daha doğru yaklaşım bir "AI capacity allocation" modeli kurmaktır. Örneğin verimlilik kazanımının bir kısmı maliyet azaltımına, bir kısmı mevcut ürünlerin modernizasyonuna, bir kısmı yeni ürün ve gelir fırsatlarına, bir kısmı da insanların daha yüksek değerli rollere yeniden beceri kazanmasına ayrılabilir. Böylece AI yalnızca bütçe küçülten bir araç olmaktan çıkıp sermaye tahsis mekanizmasının parçasına dönüşür.

Gartner'ın Eylül 2026'daki %75 öngörüsünü de ben bu açıdan okuyorum. Mesaj "asla maliyet düşürmeyin" değil; maliyet avantajının tamamını organizasyondan çıkarmanın rekabet avantajını da beraberinde çıkarabileceği uyarısıdır.

## Kurumsal hafıza da bir varlıktır, sadece bilançoda görünmez

AI çağında en fazla hafife alınabilecek konulardan biri kurumsal hafıza. Bir model teknik dokümanları okuyabilir, Jira geçmişini tarayabilir, Git repository'yi analiz edebilir ve toplantı kayıtlarından özet çıkarabilir. Bu, kaybolan kurumsal bilginin önemli bölümünü gelecekte geri kazanabilmemizi sağlayacak ve bence son derece değerli bir gelişme.

Ancak kayıtlı bilgi ile bağlamsal muhakeme aynı şey değildir.

"Bu servis neden böyle tasarlandı?" sorusunun cevabı repository'de olmayabilir. O karar üç yıl önce yaşanan bir production incident'ın, belirli bir müşterinin altyapı kısıtının, bir vendor bug'ının ve o gün için makul olan operasyonel bir uzlaşmanın sonucu olabilir. Dokümantasyonda yalnızca nihai tasarımı görürüz; kararın çevresindeki yaşanmış bağlamı her zaman görmeyiz.

Bu nedenle AI'nın kurumsal hafızayı daha erişilebilir hale getirmesi, insan tecrübesinin tamamen ikame edildiği anlamına gelmiyor. Tam tersine, şirketlerin o tecrübeyi yapılandırılmış bilgiye dönüştürmesi, decision record'lar tutması, runbook'ları güncellemesi ve sistemlerin nedenlerini görünür hale getirmesi daha önemli hale geliyor.

İnsan sayısını azaltacaksak bile bilgiyi azaltmak zorunda değiliz. Fakat bunun için küçülmeden önce hangi bilginin nerede yaşadığını bilmemiz gerekiyor.

## Junior geliştiriciler meselesi aynı problemin daha uzun vadeli hali

[AI Çağında Junior Geliştiricileri Kaybetmemeliyiz]({% post_url 2026-08-27-apprenti-junior-devs %}) yazısında, AI'nın başlangıç seviyesindeki görevleri otomatikleştirmesinin junior developer pipeline'ını zayıflatabileceğini tartışmıştım. Bu konu da aslında maliyet ile kabiliyet arasındaki aynı ayrımın daha uzun vadeli versiyonu.

Bugün bir junior geliştiricinin yaptığı işi senior + AI kombinasyonu daha hızlı yapabilir. O halde junior işe almamak kısa vadede ekonomik görünebilir. Fakat senior mühendisler hazır olarak ortaya çıkmıyor. Organizasyon öğrenme hattını birkaç yıl kapattığında bugün tasarruf ettiği maliyet yarının çok daha pahalı hiring problemine dönüşebilir.

Gartner'ın 2029 için yeniden işe alım öngörüsü bu nedenle bana yalnızca "yanlış kişileri işten çıkarabiliriz" uyarısı gibi gelmiyor. Daha genel bir şey söylüyor: İnsan kaynağı bir cloud instance gibi kapatılıp ihtiyaç olduğunda aynı fiyat ve aynı context ile tekrar açılamıyor.

Kurumsal kabiliyet zaman içinde birikir ve yeniden oluşturulmasının bir gecikmesi vardır.

## O zaman küçülmemeli miyiz?

Bu tartışmanın "AI ile işten çıkarmak kötüdür" gibi kolay bir sonuca gitmesini istemiyorum. Şirketlerin finansal gerçekleri var. Bazı roller gerçekten ortadan kalkacak, bazı süreçler tamamen otomatikleşecek, bazı ekipler küçülecek ve geçmişte ekonomik olan bazı organizasyon yapıları AI çağında savunulamaz hale gelecek.

Bence yapılması gereken küçülmeye ahlaki bir evet/hayır cevabı vermek değil, küçülmenin optimizasyon fonksiyonunu değiştirmek.

Önce finansal hedef açık olmalı: Ne kadar maliyeti, hangi zaman ufkunda azaltmamız gerekiyor?

Ardından kabiliyet haritası çıkarılmalı: Hangi ürün, platform, domain, entegrasyon ve kurumsal bilgi kabiliyetleri şirkette kalmalı?

Sonra AI varsayımı görev bazında test edilmeli: Hangi iş gerçekten ortadan kalktı, hangi iş sadece hızlandı, hangi iş başka bir role kaydı ve hangi işin üzerinde yeni bir governance veya platform katmanı oluştu?

Ve son olarak geri dönüş maliyeti hesaba katılmalı: Bugün çıkardığımız kabiliyeti iki yıl sonra tekrar ihtiyaç duyarsak ne kadar sürede ve hangi maliyetle geri kurabiliriz?

Bu sorular cevaplandıktan sonra organizasyon yine küçülebilir. Fakat o zaman küçülme bir refleks değil, tasarlanmış bir karar olur.

## AI çağında gerçek verimlilik belki de daha az insan değil, daha fazla seçenek demektir

Sanayi tarihindeki büyük verimlilik sıçramaları yalnızca aynı ürünü daha az işçiyle üretmekten ibaret olmadı. Birim maliyet düştüğünde daha önce ekonomik olmayan ürünler mümkün hale geldi, yeni pazarlar doğdu ve tüketim biçimleri değişti. Yazılımda da benzer bir ihtimal var.

Kod üretmek ucuzladıkça şirketlerin daha az yazılıma değil, daha fazla yazılıma ihtiyaç duyacağını düşünüyorum. Daha fazla otomasyon, daha fazla entegrasyon, daha fazla kişiselleştirme, daha fazla iç araç, daha fazla AI agent ve daha fazla dijital ürün üretilecek. Bu yüzden AI'nın oluşturduğu kapasiteyi sadece bugünkü backlog'u daha az insanla bitirmek için kullanmak, dönüşümün en dar yorumlarından biri olabilir.

Asıl avantaj, geçmişte "buna kaynak ayıramayız" dediğimiz işleri ekonomik hale getirebilmekte olabilir.

Bu nedenle benim için yönetim seviyesinde sorulması gereken soru giderek değişiyor. "AI sayesinde kaç kişiyi azaltabiliriz?" sorusu kısa vadeli finansal planlama için anlamlı olabilir, ancak strateji için yetersizdir.

Daha zor ama daha değerli soru şu:

AI sayesinde elde ettiğimiz yeni kapasiteyi hangi iş modeline, hangi ürünlere ve hangi kabiliyetlere dönüştüreceğiz?

Bir şirket maliyet azaltmak zorunda kalabilir. Fakat maliyet azaltırken neyi kaybettiğini bilmeden hareket ederse, finansal olarak küçülürken farkında olmadan stratejik olarak da küçülebilir.

AI çağında belki de yönetimin en önemli görevi insanların yerine ne koyacağımıza karar vermek değil; makinelerin ürettiği yeni kapasiteyi nerede büyümeye dönüştüreceğimizi seçmek olacak.

## Kaynaklar

1. Gartner, *The Future of the Software Engineer Role in the Age of AI*, Neha Agarwal, Brian Minning, Luke Parker, Nitish Tyagi, 5 Mayıs 2026, ID G00842471.
2. Gartner, *Gartner Identifies 4 Shifts Shaping the Future of Work*, 9 Eylül 2026. https://www.gartner.com/en/newsroom/press-releases/2026-09-09-gartner-identifies-four-shifts-shaping-the-future-of-work
3. [Ali Özgür - Yapay Zekâ İşten Çıkarma Tuzağı]({% post_url 2026-06-02-ai-layoff-trap %})
4. [Ali Özgür - Kod Yazmak Ucuzlamıyor: AI Destekli Kodlamanın Görünmeyen Maliyeti]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %})
5. [Ali Özgür - AI Engineering FinOps'un Eksik Parçası: Harness Engineering]({% post_url 2026-08-26-harness-engineering-ai-finops-part2 %})
6. [Ali Özgür - AI Çağında Junior Geliştiricileri Kaybetmemeliyiz]({% post_url 2026-08-27-apprenti-junior-devs %})
7. [Ali Özgür - 2030'a Giderken Yazılım Mühendisliği: Kod Yazmanın Ötesinde]({% post_url 2026-08-29-ai-future-of-swe-impact-of-ai %})

> Not: Gartner'ın yüzdeleri ve gelecek tahminleri kendi araştırma ve öngörü kapsamları içinde değerlendirilmelidir. Özellikle anket sonuçları küresel pazarın tamamını temsil eden kesin sonuçlar olarak değil, yön gösteren bulgular olarak okunmalıdır.

---

{% include share_twitter_tr.html %}

---
