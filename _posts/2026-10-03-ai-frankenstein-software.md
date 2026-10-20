---

layout: post
title: "Frankenstein Yazılımlar: Yapay Zekâ ile Üretebildiğimiz Ama Anlayamadığımız Sistemler"
subtitle: "Citizen Development, bilgi borcu ve yazılım mühendisliğinin yeni sorumluluk problemi"
date: 2026-10-03
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- citizen-development
- low-code
- technical-debt
- software-architecture
- software-engineering

---

Yazılım dünyasında Frankenstein benzetmesi yeni değil. Yıllar boyunca birbirine eklenen modüller, farklı ekiplerin geliştirdiği entegrasyonlar, artık neden var olduğu bilinmeyen iş kuralları ve kimsenin dokunmak istemediği kod parçaları için bu benzetmeyi kullandık. Bir sistem çalışmaya devam ederken onu oluşturan parçalar arasındaki ilişkiler giderek anlaşılmaz hale gelebiliyor. Bir noktadan sonra sistemin sahibi var, kullanıcıları var, hatta bakımını üstlenen bir ekip de var; ancak bütün olarak nasıl davrandığını açıklayabilen kimse kalmamış olabiliyor.

Üretken yapay zekâ ile bu metaforun farklı bir anlam kazanabileceğini düşünüyorum. Önümüzdeki dönemde Frankenstein yazılımları oluşturmak için yıllarca teknik borç biriktirmemiz gerekmeyebilir. Karmaşık bir sistemin ortaya çıkması ile o sistemi anlayabilecek mühendislik bilgisinin oluşması arasındaki süre giderek açılıyor. Üstelik bu durum yalnızca yazılım geliştiricileri ilgilendirmiyor. Yazılım geliştirme deneyimi sınırlı olan, hatta hiç olmayan kişilerin doğal dille uygulama oluşturabildiği bir döneme girdik.

Buradaki mesele bence yapay zekânın kötü kod yazması değil. Daha ilginç bir ihtimal var: **Çalışan yazılım üretme kapasitemiz, ürettiğimiz yazılımları anlama ve yönetme kapasitemizden daha hızlı büyüyor olabilir.**

{::comment}end-of-excerpt{:/comment}

## Frankenstein benzetmesini neden yeniden düşünmeliyiz?

Mary Shelley'nin 1818'de yayımlanan *Frankenstein* romanında Victor Frankenstein farklı parçalardan bir varlık yaratır. Hikâyenin çoğu zaman gözden kaçan yönü, yaratılan varlığın yalnızca korkutucu veya kusurlu olması değildir. Asıl mesele, yaratma eylemi ile yaratılan şeyin sorumluluğunu üstlenme arasındaki kopuştur. Victor bir şeyi hayata geçirebilir, fakat sonrasında onunla ne yapacağını ve sonuçlarına nasıl karşılık vereceğini bilemez.

Yazılım mühendisliğinde de benzer bir kopuş yaşayabiliriz. Geleneksel Frankenstein sistemler farklı teknolojilerin, geçici çözümlerin ve mimari tavizlerin yıllar içinde üst üste eklenmesiyle oluşurdu. Bugün ise bir AI coding agent, kimlik doğrulama, veritabanı, API, kullanıcı arayüzü ve üçüncü taraf entegrasyonları içeren bir uygulamayı oldukça kısa sürede geliştirebiliyor. Uygulama çalışabilir, testlerden geçebilir ve kullanıcının istediği ekranları sunabilir. Fakat o uygulamayı talep eden kişinin veri bütünlüğünü, erişim sınırlarını, hata durumlarını veya operasyonel bağımlılıkları anlayabildiğini buradan çıkaramayız.

Frankenstein metaforunu burada bir akademik sınıflandırma olarak değil, iyi bilinen mühendislik sorunlarını yeniden düşünmek için kullanıyorum. Teknik borç, mimari erozyon, shadow IT ve yazılım bakımındaki bilgi kaybı yeni kavramlar değil. Yeni olan, bu sorunları doğurabilecek yazılım üretim kapasitesinin çok daha geniş bir kullanıcı kitlesine açılması.

Bu nedenle metaforu iki farklı anlamda okumak mümkün. Alışık olduğumuz anlamıyla Frankenstein yazılım, yıllar içinde üst üste eklenmiş parçalardan oluşan dağınık bir sistemdir. Bu yazıda ise asıl olarak Shelley'nin hikâyesindeki ikinci anlamla ilgileniyorum: yaratılan şey ile onun sorumluluğunu üstlenebilecek bilgi arasındaki kopukluk. AI çağının Frankenstein'ları, birincisinin aksine, dışarıdan oldukça düzenli görünebilir.

## Citizen development zaten vardı, yapay zekâ neyi değiştiriyor?

Citizen development, profesyonel yazılım geliştiricisi olmayan iş kullanıcılarının kendi ihtiyaçlarını karşılayan uygulamalar geliştirmesini ifade ediyor. Low-code ve no-code platformları bu yaklaşımı uzun süredir mümkün kılıyor. Bir departman kendi onay akışını, raporlama uygulamasını veya veri giriş ekranlarını merkezi yazılım ekibinin geliştirmesini beklemeden hazırlayabiliyor. Bu yaklaşımın gerçek bir değeri var: iş ihtiyacına yakın kişiler, ihtiyaç duydukları çözümleri daha hızlı oluşturabiliyor.

Ancak bu modelin riskleri üretken yapay zekâdan önce de araştırılıyordu. Viljoen ve arkadaşlarının 2024 yılında *MIS Quarterly Executive* dergisinde yayımlanan [Governing Citizen Development to Address Low-Code Platform Challenges](https://doi.org/10.17705/2msqe.00100) çalışması, citizen developer ve low-code platform uzmanlarıyla gerçekleştirilen 30 görüşmeden hareketle yazılım kalitesi, shadow IT ve teknik borç sorunlarını ele alıyor. Araştırmacılar, bu geliştirme biçiminin geleneksel yazılım geliştirmeden farklı yönetişim mekanizmaları gerektirdiğini ve teknik uzmanların bu süreçte önemli bir rolü bulunduğunu vurguluyor.

Yapay zekâ bu sorunları icat etmiyor; ancak sınırlarını değiştirebilir. Low-code platformlarında kullanıcı çoğunlukla platformun sunduğu bileşenlerle ve platformun belirlediği çalışma modeliyle sınırlıydı. Üretken yapay zekâ ise çok daha serbest bir üretim alanı açıyor. Bir kullanıcı doğal dille yeni servisler, veritabanı şemaları, entegrasyonlar, arka plan görevleri ve dağıtım dosyaları oluşturabiliyor. Böylece citizen development, hazır bileşenlerle iş akışı kurmanın ötesine geçip tam teşekküllü yazılım sistemleri üretmeye yaklaşabiliyor.

Bu elbette her citizen developer'ın karmaşık ve kontrolsüz sistemler üreteceği anlamına gelmiyor. Ancak daha önce platformun sınırları içinde kalan bazı mimari kararlar artık kullanıcıyla AI ajanı arasındaki konuşma sırasında alınabiliyor. Kullanıcının bu kararların sonuçlarını değerlendirecek bilgiye sahip olup olmadığı ise ayrı bir soru.

## Çalışan bir uygulama, anlaşılan bir uygulama mıdır?

Örnek olarak üretim yapan bir işletmenin satın alma departmanını düşünelim. Departman, tedarikçi tekliflerini karşılaştırmak, onay süreçlerini yürütmek ve ERP sistemine kayıt göndermek için küçük bir uygulama istiyor. Bir çalışan AI destekli geliştirme ortamında ihtiyacını anlatıyor ve birkaç iterasyon sonunda kullanılabilir bir sistem elde ediyor. Ekranlar çalışıyor, raporlar üretiliyor, ERP entegrasyonu da ilk testlerde doğru sonuç veriyor.

Buraya kadar bakıldığında önemli bir verimlilik kazanımı var. Fakat bir süre sonra aynı siparişin iki kez oluşturulduğunu varsayalım. Sorun yeniden deneme mekanizmasından mı, eşzamanlı işlemlerden mi, mesaj teslim garantilerinden mi, yoksa ERP tarafındaki bir davranıştan mı kaynaklanıyor? Sistemi geliştiren kişi transaction sınırlarını, idempotency kavramını veya dağıtık sistemlerde hata yönetimini bilmiyorsa, uygulamanın başlangıçta çalışmış olması sorunu çözmeye yetmeyecektir.

Yapay zekâdan hatayı düzeltmesini istemek mümkün. Hatta ajan hatayı gerçekten bulup doğru biçimde düzeltebilir. Ancak tam da burada başka bir problem ortaya çıkıyor. Eğer sorunu anlamak, çözümü değerlendirmek ve değişikliğin başka hangi davranışları etkilediğini öngörmek için de tamamen aynı üretim mekanizmasına bağımlıysak, yazılımın sahibi olarak hangi bilgiye gerçekten sahibiz?

[AI Generated vs Human Opinionated]({% post_url 2026-09-06-ai-generated-vs-opinionated %}) başlıklı önceki yazımda üretim ile bir kararı savunabilme ve sonuçlarını üstlenebilme arasındaki farkı tartışmıştım. Aynı ayrım burada da geçerli. Bir çözümü üretebilmek, o çözümün neden doğru olduğunu açıklayabilmek veya yanlış olduğunda sorumluluğunu taşıyabilmekle aynı şey değil.

## Teknik borcun yanında bilgi borcu

Yazılım mühendisliğinde teknik borç, kısa vadede tercih edilen kararların uzun vadede getirdiği ek maliyetleri açıklamak için kullanılıyor. Fakat AI destekli citizen development bağlamında yalnızca kaynak kodunun kalitesini incelemek yetersiz kalabilir. Bir uygulama temiz kod ilkelerine yakın olabilir, modüler bir yapı sunabilir, testlerle desteklenebilir ve yine de onu çalıştıran organizasyon açısından ciddi riskler taşıyabilir.

Çünkü **kaynak kodunun düzenli olması ile organizasyonun o kodu anlayabilmesi aynı şey değil.**

2026 yılında Edona Elshan ve Bart van den Hooff tarafından *Journal of Information Technology* dergisinde yayımlanan [Lost in decentralization? Governing emerging technologies within enterprise architecture](https://doi.org/10.1177/02683962261465434) araştırması bu tartışma için özellikle önemli. Finans, sağlık ve üretim sektörlerindeki organizasyonları inceleyen çalışma, merkezi BT dışına yayılan uygulama geliştirme faaliyetlerinde üç temel yönetişim sorunu tanımlıyor: mimari sapma, roller ve hesap verebilirlik konusundaki belirsizlik, biçimsel ve gayriresmî kontrol mekanizmaları arasındaki gerilim. Çalışma, low-code ve citizen development ekseninde ilerlese de bu çerçevenin AI destekli ve ajan tabanlı yazılım üretimi için de anlamlı olduğunu düşünüyorum.

Burada teknik borcun yanında *knowledge debt*, yani bilgi borcu kavramını da dikkate almak gerekiyor. Bu yazıda bilgi borcunu, bir sistemin davranışını açıklamak, değiştirmek, test etmek ve güvenli biçimde işletmek için gerekli bilginin organizasyon içerisinde yeterince bulunmaması olarak kullanıyorum. Geleneksel yazılım ekiplerinde bu borç, geliştiricilerin kurumdan ayrılması, dokümantasyonun güncelliğini kaybetmesi veya tarihsel kararların unutulmasıyla birikebiliyordu. AI tarafından üretilen yazılımlarda ise bazı kararlar daha en baştan hiçbir insan tarafından yeterince anlaşılmamış olabilir.

Bu önemli bir fark. Geleneksel bir sistemde bir zamanlar bilinen şeyleri kaybedebiliriz. AI tarafından oluşturulan bir sistemde ise bazı bilgileri hiç edinmeden üretime geçmiş olabiliriz.

## Yerel olarak doğru, sistem genelinde yanlış

AI coding agent'ların güçlü olduğu alanlardan biri, açıkça tarif edilmiş bir görevi belirli bir bağlam içinde çözebilmeleri. Bir endpoint ekleyebilir, sorguyu optimize edebilir, yeni bir servis oluşturabilir veya testlerde görülen bir hatayı düzeltebilirler. Ancak yerel düzeyde doğru görünen bir çözümün organizasyonun bütün sistemleri açısından doğru olması garanti değil.

Örneğin farklı departmanlar kendi AI ajanlarıyla müşteri, ürün ve sipariş verilerini kullanan uygulamalar geliştirdiğinde her uygulama kendi veri modelini ve iş kurallarını tanımlayabilir. Her biri ayrı ayrı çalışır. Fakat zaman içinde müşteri tanımı farklılaşabilir, aynı yetkilendirme kuralı birkaç farklı yerde uygulanabilir, verilerin hangi sistemde otoritatif olduğu belirsizleşebilir. Bir uygulamanın testlerden geçmesi bu mimari tutarsızlıkları otomatik olarak ortadan kaldırmaz.

Aslında burada yeni bir problemden çok, bildiğimiz *architectural erosion* sorununun yeni bir üretim hızıyla karşı karşıyayız. Yapay zekâ yalnızca kod miktarını değil, mimari karar alma sıklığını da artırabilir. Daha önce haftalar içinde ortaya çıkacak bağımlılıklar ve servis sınırları, birbirini izleyen prompt'larla çok daha kısa sürede oluşabilir.

[AI Goal Gradient Loop]({% post_url 2026-07-12-ai-goal-gradient-loop %}) yazımda, AI destekli geliştirmenin yeni mikro hedefler yaratarak sürekli iterasyonu teşvik edebileceği üzerine bir hipotez önermiştim. Aynı mekanizmanın mimari bir karşılığı da olabilir. Kullanıcı her başarılı sonuçtan sonra yeni bir özellik talep ederken, sistemin bütünsel tasarımı aynı hızla yeniden değerlendirilmezse işlevsellik artışı ile mimari bütünlük arasında bir mesafe oluşabilir. Bunun kaçınılmaz olduğunu söylemiyorum; fakat üzerinde çalışmaya değer bir ihtimal olduğunu düşünüyorum.

## Araştırmalar AI tarafından üretilen kod hakkında ne söylüyor?

Bu noktada tartışmayı yalnızca benzetmelere dayandırmamak önemli. Aşağıdaki çalışmaların hiçbiri doğrudan citizen developer'ları incelemiyor; genel olarak AI tarafından üretilen kodu ve bu kodun anlaşılmasını ele alıyorlar. Fakat bulgular citizen development bağlamında daha da önem kazanıyor, çünkü profesyonel bir geliştiricinin fark edebileceği bir sorunu, kodu değerlendirecek teknik bilgiye sahip olmayan bir kullanıcının fark etme ihtimali çok daha düşük. Domenico Cotroneo, Cristina Improta ve Pietro Liguori'nin 2025 tarihli [Human-Written vs. AI-Generated Code: A Large-Scale Study of Defects, Vulnerabilities, and Complexity](https://doi.org/10.1109/ISSRE66568.2025.00035) araştırması, Python ve Java dillerinde 500 binden fazla kod örneğini karşılaştırıyor. Çalışmada AI tarafından üretilen kodların genel olarak daha basit ve tekrara yatkın olduğu, buna karşılık bazı gereksiz yapılar ve yüksek riskli güvenlik açıklarının bu örneklerde daha sık görüldüğü bildiriliyor. İnsanlar tarafından yazılan kodlar ise bazı bakım ve yapısal karmaşıklık sorunlarında daha olumsuz bir profil sergiliyor.

Bu bulgudan bütün AI kodlarının insan kodundan daha güvensiz olduğu sonucunu çıkarmamak gerekiyor. Araştırmanın örneklemi, kullanılan modeller ve değerlendirme ölçütleri belirli. Ancak sonuç, işlevsel olarak doğru görünen kodun güvenlik ve bakım açısından ayrıca değerlendirilmesi gerektiğini destekliyor.

2026 yılında Vladislav Belozerov, Peter Barclay ve Ashkan Sami tarafından yayımlanan [Secure coding with AI: From detection to repair](https://doi.org/10.1007/s10664-026-10812-8) çalışması da konunun farklı bir yönünü ele alıyor. Araştırmacılar gerçek geliştirici etkileşimlerinden elde edilen 2.315 kod parçasını inceleyip 48 dosyada 56 güvenlik açığı doğruluyor. Ardından farklı dil modellerinin bu açıkları tespit etme ve giderme başarısını değerlendiriyorlar. Modeller anlamlı sayıda sorunu bulup düzeltebilse de bütün sorunları saptayamıyor ve bazı durumlarda güvenle yanlış bilgi verebiliyor.

Dolayısıyla AI tarafından üretilen kodu başka bir AI modeline inceletmek faydalı bir kontrol katmanı olabilir, ancak tek başına yeterli bir güvence mekanizması değildir. Özellikle inceleme sonucunu değerlendirecek teknik bilgisi olmayan kullanıcılar için bu sınır daha da önemli hale geliyor.

Bir başka araştırma hattı ise doğrudan kodu anlama becerisine odaklanıyor. Yunhan Qiao ve arkadaşlarının 2026 yılında *ACM Transactions on Computing Education* dergisinde yayımladığı [A Systematic Literature Review of the Use of GenAI Assistants for Code Comprehension](https://doi.org/10.1145/3785366), yapay zekâ destekli açıklamaların kod anlama sürecine katkı sağlayabildiğini, ancak açıklama doğruluğu ve özellikle deneyimsiz kullanıcıların bu araçları etkili kullanabilmesi konusunda sınırlılıklar bulunduğunu ortaya koyuyor. Kod üretimi ile kodu kavrama yeteneğini aynı şey olarak değerlendirmememiz gerektiği burada da karşımıza çıkıyor.

Bu araştırmaların hiçbiri AI destekli citizen development'ın uzun vadede mutlaka Frankenstein sistemler oluşturacağını kanıtlamıyor. Fakat bir araya geldiklerinde bu olasılığı araştırmaya değer kılan bir temel sunuyorlar: merkezi olmayan yazılım üretiminde yönetişim sorunları var, AI tarafından üretilen kodun kendine özgü kalite riskleri bulunuyor ve AI yardımı almak teknik kavrayışı kendiliğinden garanti etmiyor.

## Frankenstein Effect: Üretim ile kavrayış arasındaki mesafe

Buradan hareketle *Frankenstein Effect* adını verebileceğimiz bir kavramsal model önermek istiyorum. Bu adla literatürde doğrulanmış yeni bir teori bulunduğunu iddia etmiyorum. Amacım, farklı araştırma alanlarında tartışılan sorunların AI destekli yazılım üretiminde nasıl bir araya gelebileceğini açıklayan bir çerçeve kurmak.

Frankenstein Effect'i, **bir sistemin işlevsel kapasitesinin, o sistemden sorumlu insanların ve organizasyonun sistemi anlama, doğrulama, yönetme ve güvenli biçimde değiştirme kapasitesinden daha hızlı büyümesi** olarak tanımlayabiliriz.

Bu etkiyi doğurabilecek ve birbirini besleyebilecek dört mekanizma görüyorum: mimari kararların AI ile yapılan konuşmaların içinde örtük biçimde alınması, yerel olarak doğru çözümlerin sistem genelinde tutarsızlık yaratması, hızlı iterasyonların sistemin toplam karmaşıklığını bütünsel tasarımdan daha hızlı artırması ve üretilen yazılımın operasyonel sorumluluğunun belirsizleşmesi. Bunların her biri geleneksel yazılım mühendisliğinde farklı biçimlerde zaten görülüyordu. Benim hipotezim, AI destekli citizen development'ın bu mekanizmaları aynı anda ve daha kısa zaman aralıklarında ortaya çıkarabilme ihtimali.

Bu hipotezi sınamak için profesyonel geliştiricilerden oluşan AI destekli bir grupla, AI kullanan citizen developer'lardan oluşan iki grubu karşılaştırmak ilginç olabilir. Citizen developer gruplarından biri sınırlı mühendislik kontrolüyle, diğeri ise mimari şablonlar, test gereksinimleri, bağımsız güvenlik kontrolleri ve açık sorumluluk tanımlarıyla çalışabilir. Gruplara benzer uygulamalar geliştirilip sonrasında bakım, genişletme ve hata giderme görevleri verilebilir. Yalnızca ilk sürüme ulaşma süresini değil, mimari ihlalleri, değişiklik maliyetini, güvenlik bulgularını ve geliştiricilerin AI yardımı olmadan sistemi ne kadar açıklayabildiğini de ölçmek gerekir.

Özellikle son ölçüt önemli. Bir uygulamayı kısa sürede üretmiş olmakla, beklenmeyen bir üretim hatasında sorunun kök nedenini açıklayabilmek farklı beceriler. Eğer teslim edilen işlevsellik büyürken bu beceri aynı ölçüde gelişmiyorsa, ortaya çıkan fark bilgi borcunun ölçülebilir göstergelerinden biri olabilir.

## Çözüm daha az yapay zekâ kullanmak mı?

Bence değil. Frankenstein metaforunu AI veya citizen development karşıtı bir argümana dönüştürmek kolay, fakat böyle bir yaklaşım eksik olur. Profesyonel yazılım ekipleri yıllardır ağır teknik borçlar ve yönetilemeyen sistemler oluşturabiliyor. Citizen developer'lar ise iyi tasarlanmış platformlar, doğru sınırlar ve mühendislik desteğiyle son derece faydalı çözümler geliştirebilirler. AI ajanları da kodu açıklamak, mimari tutarsızlıkları bulmak, test üretmek ve refactoring yapmak için kullanılabilir.

Burada asıl ihtiyaç, üretim kapasitesindeki artışa uygun bir mühendislik ve yönetişim modeli oluşturmak. Her departmanın bütün uygulamalarını merkezi yazılım ekibine geri taşımak çözüm olmayabilir. Bunun yerine hangi uygulamaların hangi risk sınıfına girdiğini, hangi verilere erişebileceğini, hangi entegrasyonların merkezi bileşenlerle yapılacağını, hangi değişikliklerin bağımsız inceleme gerektirdiğini ve bir sistemin yaşam döngüsünden kimin sorumlu olduğunu açıkça belirlemek gerekiyor.

Bu konu [Yazılım Geliştirme Standartları Yapay Zekâ Çağına Hazır mı?]({% post_url 2026-08-09-softdev-standards-ai-readiness %}) yazımda tartıştığım izlenebilirlik problemiyle de ilişkili. Gereksinim, tasarım kararı, kod, test ve onay arasındaki ilişki görünür değilse AI'nin üretkenliği tek başına mühendislik güvencesi sağlamıyor. Benzer şekilde [Spec-Driven Development'tan Formal Spec-Driven Development'a]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) yazısında savunduğum gibi, spesifikasyonun yalnızca kod üretimini yönlendiren bir metin değil, çıktının kabul edilebilirliğini belirleyen bir mekanizma haline gelmesi giderek daha anlamlı olabilir.

Citizen development bağlamında bu yaklaşımın pratik karşılığı, iş kullanıcılarının kendi ihtiyaçlarını karşılayan yazılımlar geliştirmesine izin verirken mimari sınırları, veri erişimini, kimlik doğrulamayı, güvenlik kontrollerini ve dağıtım koşullarını yalnızca prompt'lara bırakmamaktır. AI'nın neler üretebileceğini kısıtlamak kadar, üretilen sistemin hangi koşullarda kabul edileceğini tanımlamak da gerekiyor.

Ancak bu kontroller tek başına bilgi borcunu kapatmıyor. Mimari şablonlar, bağımsız incelemeler ve kabul kriterleri sistemin *ne* üreteceğini sınırlandırır; sistemi *kimin anladığı* sorusunu ise cevaplamaz. Bilgi borcunu azaltmak için anlama kapasitesinin de üretim kapasitesi gibi bilinçli olarak inşa edilmesi gerekiyor.

Bunun pratik karşılıkları çok karmaşık değil. Belirli bir risk sınıfının üzerindeki her uygulamanın, onu talep eden iş biriminin yanında, sistemi teknik olarak açıklayabilen ve adı belli bir mühendislik sahibi olabilir. Önemli mimari kararlar, AI ajanıyla yapılan konuşmaların içinde kaybolmak yerine kısa karar kayıtlarına dönüştürülebilir. Canlıya geçişten önce uygulamanın sahibinden, sistemin veri akışlarını, hata durumlarını ve dış bağımlılıklarını AI yardımı olmadan açıklaması istenebilir. Böylece önceki bölümde önerdiğim ölçüt bir kabul koşuluna dönüşür: **Açıklanamayan bir sistem, çalışıyor olsa bile hazır sayılmamalı.**

## Sonuç: Yazılımın sahibi olmak ne anlama gelecek?

Yazılım geliştirmenin teknik maliyeti düştükçe daha fazla insan yazılım üretebilecek. Bunun olumlu etkilerini küçümsememek gerekiyor. Yıllardır çözüm bekleyen iş problemlerinin daha hızlı ele alınması, küçük ekiplerin daha kapsamlı ürünler geliştirmesi ve teknik becerileri sınırlı kişilerin fikirlerini çalışan uygulamalara dönüştürebilmesi önemli bir ilerleme.

Fakat üretebilmek ile sahiplenebilmek arasındaki farkı kaybetmemeliyiz. Bir uygulamanın kaynak koduna erişmek, onu dağıtabilmek veya yeni bir özellik ekletebilmek tek başına o uygulamanın mühendislik sorumluluğunu üstlenebildiğimiz anlamına gelmiyor. Sistemin neden o şekilde tasarlandığını, hangi varsayımlar altında doğru çalıştığını, nasıl başarısız olabileceğini ve başarısız olduğunda nasıl toparlanacağını da bilmemiz gerekiyor.

Belki de önümüzdeki dönemin Frankenstein yazılımları kötü yazılmış, dağınık ve eski sistemler gibi görünmeyecek. Kodları düzenli, dokümantasyonları kapsamlı, testleri yeşil ve arayüzleri başarılı olabilir. Fakat bütün bunlara rağmen, o sistemlerin nasıl davrandığını gerçekten anlayan ve kararlarının sorumluluğunu taşıyabilen insanlar bulunmayabilir.

Mary Shelley'nin hikâyesindeki sorun yalnızca bir varlığın yaratılması değildi. Yaratılan şeyin sorumluluğunun üstlenilememesiydi. AI çağında yazılım mühendisliği açısından sormamız gereken soru da buna benziyor: **Bir sistemi çalışır hale getirebildiğimizde, onu gerçekten anlayabilecek ve sorumluluğunu üstlenebilecek durumda mıyız?**

Bence yazılım üretiminin demokratikleşmesini tartışırken asıl üzerinde durmamız gereken sorulardan biri bu.

---

## Kaynaklar

1. Viljoen, A., Radić, M., Hein, A., Nguyen, J. & Krcmar, H. (2024). [Governing Citizen Development to Address Low-Code Platform Challenges](https://doi.org/10.17705/2msqe.00100). *MIS Quarterly Executive*, 23(3), 305-324.
2. Elshan, E. & van den Hooff, B. (2026). [Lost in decentralization? Governing emerging technologies within enterprise architecture](https://doi.org/10.1177/02683962261465434). *Journal of Information Technology*, 41(3), 250-273.
3. Cotroneo, D., Improta, C. & Liguori, P. (2025). [Human-Written vs. AI-Generated Code: A Large-Scale Study of Defects, Vulnerabilities, and Complexity](https://doi.org/10.1109/ISSRE66568.2025.00035). *36th IEEE International Symposium on Software Reliability Engineering (ISSRE)*, 252-263.
4. Belozerov, V., Barclay, P. J. & Sami, A. (2026). [Secure coding with AI: From detection to repair](https://doi.org/10.1007/s10664-026-10812-8). *Empirical Software Engineering*, 31, Article 93.
5. Qiao, Y., Shihab, M. I. H. & Hundhausen, C. (2026). [A Systematic Literature Review of the Use of GenAI Assistants for Code Comprehension: Implications for Computing Education Research and Practice](https://doi.org/10.1145/3785366). *ACM Transactions on Computing Education*, 26(2), Article 24.
6. [Ali Özgür - AI Generated vs Human Opinionated]({% post_url 2026-09-06-ai-generated-vs-opinionated %})
7. [Ali Özgür - AI Goal Gradient Loop: Yapay Zeka Yazılım Geliştirme Davranışımızı Değiştiriyor mu?]({% post_url 2026-07-12-ai-goal-gradient-loop %})
8. [Ali Özgür - Yazılım Geliştirme Standartları Yapay Zekâ Çağına Hazır mı?]({% post_url 2026-08-09-softdev-standards-ai-readiness %})
9. [Ali Özgür - Spec-Driven Development'tan Formal Spec-Driven Development'a]({% post_url 2026-08-31-ai-formal-spec-driven-development %})

---

{% include share_twitter_tr.html %}

---
