---

layout: post
title: "Yazılımın Kalıcı Olması Gerekiyor mu?"
subtitle: "Yapay Zekâ Çağında Yazılımın Değişen Ekonomisi"
date: 2026-10-20
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- gartner
- disposable-applications
- citizen-development
- platform-engineering
- software-engineering

---

Yazılım mühendisliğinde uzun yıllardır neredeyse sorgulamadan kabul ettiğimiz bazı varsayımlar var. Bunlardan biri de geliştirdiğimiz yazılımın mümkün olduğunca uzun süre kullanılacağı, zaman içerisinde yeni gereksinimlerle genişletileceği ve ekonomik ömrünün sonuna gelene kadar bakımının yapılacağı düşüncesi. Bir yazılım projesine başlarken ölçeklenebilirlik, sürdürülebilirlik, genişletilebilirlik ve bakım kolaylığı gibi kavramlara önem vermemizin arkasında da büyük ölçüde bu varsayım bulunuyor.

Aslında bu yaklaşımın oldukça anlaşılır bir ekonomik gerekçesi var. Yazılım geliştirmek uzun süre pahalı, zaman alan ve önemli miktarda uzmanlık gerektiren bir faaliyet oldu. Gereksinimlerin belirlenmesinden tasarıma, geliştirmeden test ve dağıtıma kadar bütün süreç ciddi bir yatırım anlamına geliyordu. Böyle bir ortamda geliştirilen yazılımı mümkün olduğunca uzun süre kullanmak, başlangıç yatırımını yıllara yaymak ve yeni ihtiyaçları mevcut sistemin üzerine eklemek çoğu zaman rasyonel bir stratejiydi.

Ancak yapay zekâ destekli yazılım geliştirme araçları bu ekonomik denklemi değiştirmeye başladı. Bugün birkaç yıl önce haftalar veya aylar sürebilecek bazı uygulamaları günler, hatta saatler içerisinde geliştirebiliyoruz. Üstelik bu yetenek artık yalnızca profesyonel yazılım geliştiricilerin elinde değil. İş birimleri, teknik bilgisi sınırlı çalışanlar ve citizen developer olarak tanımlanan kullanıcılar da kendi ihtiyaçlarına yönelik yazılımlar üretebiliyor.

Gartner'ın 16 Ekim 2026 tarihinde yayımladığı [*Top Strategic Technology Trends for 2027: Disposable Applications*](https://www.gartner.com/en/documents/8387981) araştırması tam olarak bu dönüşüme odaklanıyor. Araştırmanın en dikkat çekici öngörüsü, 2031 yılına kadar yeni uygulamaların %80'inin disposable, yani belirli bir amaç için geliştirilmiş ve kolaylıkla değiştirilebilir veya kullanımdan kaldırılabilir uygulamalar olacağı yönünde.

{::comment}end-of-excerpt{:/comment}

İlk bakışta oldukça iddialı bir tahmin. Ancak bence asıl önemli olan %80 oranının gerçekleşip gerçekleşmeyeceği değil. Gartner'ın bu öngörüyle yazılımın ekonomik ömrü, sahipliği ve yaşam döngüsü hakkında uzun süredir geçerli olan bir varsayımı sorgulamaya açması.

Belki de önümüzdeki dönemde yazılım mühendisliğinin önemli sorularından biri, geliştirdiğimiz uygulamaları nasıl daha uzun süre yaşatacağımız değil, hangi uygulamaları ne zaman ve nasıl güvenli biçimde ortadan kaldıracağımız olacak.

## Yazılım Kıtlığından Yazılım Bolluğuna

Gartner araştırmasında yazılım dünyasının bir scarcity model'den abundance model'e geçtiğini öne sürüyor. Yani yazılım üretiminin pahalı ve sınırlı bir kapasite olduğu ekonomik modelden, yazılım üretmenin görece ucuz ve yaygın hale geldiği bir modele geçişten söz ediyoruz.

Bu ayrım önemli. Çünkü yazılım üretme kapasitesinin sınırlı olduğu bir dünyada organizasyonlar doğal olarak ellerindeki uygulamalardan mümkün olduğunca fazla değer elde etmeye çalışıyor. Bir iş ihtiyacı ortaya çıktığında yeni bir uygulama geliştirmek yerine mevcut ERP, CRM veya başka bir kurumsal sistemin genişletilmesi tercih ediliyor. Başlangıçta belirli bir problemi çözmek için geliştirilen uygulamalar zamanla birbirinden oldukça farklı iş ihtiyaçlarını karşılayan, karmaşık ve değiştirilmesi zor sistemlere dönüşebiliyor.

Yapay zekâ destekli geliştirme bu kararın ekonomik gerekçelerini zayıflatıyor. Eğer belirli bir ihtiyacı karşılayan uygulamayı kısa sürede ve makul maliyetle yeniden oluşturabiliyorsak, mevcut uygulamayı yıllarca genişletmeye devam etmek her zaman en iyi seçenek olmayabilir.

Daha önce [Jevons Paradoksu ve AI Destekli Kodlama]({% post_url 2026-04-26-jevons-paradox-in-ai-coding %}) başlıklı yazımda benzer bir dönüşümü farklı bir açıdan ele almıştım. Bir kaynağın kullanım verimliliğinin artması, o kaynağa yönelik toplam talebin azalacağı anlamına gelmiyor. Hatta belirli koşullarda verimlilik artışı toplam tüketimi artırabiliyor.

Yazılım geliştirme açısından bakıldığında da aynı mekanizmayı görebiliyoruz. Yazılım üretmenin maliyeti azaldığında organizasyonların daha az yazılım geliştirmesini beklemek için güçlü bir gerekçe bulunmuyor. Aksine, geçmişte ekonomik bulunmayan çok sayıda küçük iş ihtiyacının artık yazılımla karşılanabilir hale gelmesi oldukça olası.

Ancak burada bir problem ortaya çıkıyor. Yazılım üretim kapasitemiz artarken üretilen yazılımların yaşam döngüsünü yönetme kapasitemiz aynı oranda artıyor mu?

Bir organizasyonda yüzlerce küçük uygulamanın geliştirilmesi teknik olarak mümkün olabilir. Fakat bu uygulamaların kim tarafından geliştirildiği, hangi verilere eriştiği, hangi sistemlerle entegre olduğu, güvenlik güncellemelerinin nasıl yönetileceği ve ne zaman devreden çıkarılacağı belirsizse, başlangıçta elde edilen verimlilik zamanla çok daha büyük bir operasyonel maliyete dönüşebilir.

Dolayısıyla yapay zekâ ile yazılım üretiminin ucuzlaması, yazılım portföyünün yönetiminin de kendiliğinden ucuzlayacağı anlamına gelmiyor. Tam tersine, portföy yönetimi yazılım geliştirme ekonomisinin yeni darboğazlarından biri haline gelebilir.

## Disposable Application Tam Olarak Nedir?

Gartner'ın disposable application tanımı, belirli bir iş amacını gerçekleştirmek üzere geliştirilen ve bu amaç tamamlandığında veya geçerliliğini kaybettiğinde bilinçli olarak kullanımdan kaldırılacak şekilde tasarlanan uygulamaları ifade ediyor.

Burada önemli bir ayrım var. Disposable application, kalitesiz geliştirilmiş, test edilmemiş veya güvenlik gereksinimleri göz ardı edilmiş geçici bir uygulama anlamına gelmiyor.

Gartner özellikle bu uygulamaların da taşıdıkları iş riskiyle orantılı güvenlik, dayanıklılık, mevzuata uyum ve operasyonel standartları karşılaması gerektiğini vurguluyor. Dolayısıyla disposable kavramını bir prototiple veya üzerinde yeterince düşünülmeden geliştirilmiş bir proof of concept ile karıştırmamak gerekiyor.

Örneğin bir şirketin belirli bir birleşme veya satın alma sürecini yönetmek için uygulama geliştirdiğini düşünelim. Bu uygulama belirli sistemlerden veri topluyor, çalışanların bazı süreçleri takip etmesini sağlıyor ve yönetime çeşitli raporlar sunuyor. Süreç tamamlandığında uygulamanın desteklediği iş ihtiyacı da ortadan kalkıyor.

Geleneksel yaklaşımda böyle bir uygulama yıllarca sistem envanterinde kalabilir. Sunucusu çalışmaya devam eder, veritabanı saklanır, erişim yetkileri korunur ve zaman zaman güvenlik güncellemeleri yapılır. Hatta birkaç yıl sonra benzer bir ihtiyaç ortaya çıktığında mevcut uygulamayı yeni sürece uyarlama girişimleri başlayabilir.

Disposable application yaklaşımında ise uygulamanın beklenen ömrü en başından tanımlanır. Süreç tamamlandığında korunması gereken veriler uygun biçimde arşivlenir, entegrasyonlar kaldırılır, erişim yetkileri iptal edilir ve uygulama kontrollü olarak devreden çıkarılır.

Bence bu yaklaşımın önemli tarafı, yazılımın geçici olması değil, geçiciliğin bir tasarım kararı haline gelmesi.

Bugün zaten çok sayıda geçici yazılım geliştiriyoruz. Fark, bunların büyük bölümünü geçici olarak tasarlamamamız. Geçici bir ihtiyacı karşılamak için geliştirilen uygulama, zamanla kurumsal altyapının kalıcı bir parçasına dönüşebiliyor.

Gartner'ın önerdiği şey ise uygulamanın emekliye ayrılmasının başarısızlık veya istisnai bir olay olarak değil, yazılım yaşam döngüsünün planlanmış ve başarılı bir sonucu olarak görülmesi.

Ancak disposable kavramını tartışırken iki farklı durumu birbirinden ayırmak gerekiyor. Birincisi Gartner'ın tanımının merkezindeki durum: İş ihtiyacının kendisi geçicidir. Birleşme süreci tamamlanır, kampanya biter, proje kapanır ve uygulama da onunla birlikte emekliye ayrılır. İkincisi ise ihtiyacın kalıcı olduğu, fakat onu karşılayan uygulamanın kalıcı olması gerekmediği durum: Stok yönetmek veya üretim planlamak gibi bir iş yeteneği devam ederken, onu sunan uygulama bakımı sürdürülmek yerine belirli aralıklarla yeniden oluşturulabilir.

İlkini *geçici ihtiyaç için geçici uygulama*, ikincisini *kalıcı ihtiyaç için yenilenebilir uygulama* olarak düşünebiliriz. Yazının devamında kontrollü emekliye ayırma ve bağımlılıkların temizlenmesi daha çok birinci durumla, yeniden geliştirme ekonomisi ve spesifikasyonların kalıcılığı ise daha çok ikinci durumla ilgili.

## Asıl Mesele Yazılımın Geliştirme Maliyeti Değil

Yapay zekâ destekli yazılım geliştirmeyi tartışırken sıklıkla geliştirme süresine ve maliyetine odaklanıyoruz. Aynı uygulamanın eskiden kaç kişiyle geliştirilebildiği, bugün kaç saat içerisinde oluşturulabildiği veya AI kullanımıyla ne kadar tasarruf sağlandığı temel performans göstergeleri haline geliyor.

Oysa yazılımın geliştirilmesi, toplam sahip olma maliyetinin yalnızca bir bölümü.

Daha önce yayımladığım [Vaka Çalışması: AI Destekli Yazılım Geliştirmenin Ekonomisi]({% post_url 2026-09-02-ai-cost-use-case %}) yazısında, gerçek bir kurumsal yazılım geliştirme sürecini alternatif ekip ve maliyet senaryolarıyla karşılaştırmıştım. Çalışmanın önemli sonuçlarından biri, yapay zekâ destekli geliştirme ile yazılım üretiminin ekonomik yapısının ciddi biçimde değişebileceğiydi. Ancak geliştirme maliyetindeki düşüşün, yazılımın toplam yaşam döngüsü maliyetinde aynı oranda düşüş anlamına gelmediğini de özellikle belirtmiştim.

Disposable application yaklaşımı bu tartışmaya yeni bir boyut ekliyor.

Eğer bir uygulamanın geliştirme maliyeti düşükse fakat bakım, destek, güvenlik, altyapı ve yönetişim maliyetleri zaman içerisinde birikmeye devam ediyorsa, belirli bir noktadan sonra uygulamayı yaşatmak yerine yeniden geliştirmek ekonomik açıdan daha anlamlı hale gelebilir.

Ancak burada da dikkatli olmak gerekiyor. Yapay zekâ ile kod üretmenin ucuzlaması, uygulamayı yeniden geliştirmenin bütün maliyetlerinin aynı oranda düştüğü anlamına gelmiyor. Gereksinimlerin doğrulanması, entegrasyonların test edilmesi, verilerin taşınması, kullanıcıların eğitilmesi ve yeni uygulamanın operasyonel olarak devreye alınması hâlâ önemli maliyet kalemleri.

Dolayısıyla kararın yalnızca ilk geliştirme maliyeti ile bakım maliyetini karşılaştırarak verilmesi doğru olmayacaktır. Yeniden geliştirme maliyetine veri geçişi, doğrulama, entegrasyon ve iş sürekliliği risklerini de eklemek gerekir.

Bence bu noktada yazılım mimarisinde yeni bir ekonomik optimizasyon problemi ortaya çıkıyor. Bir uygulamayı ne kadar süre yaşatmak mantıklı ve hangi koşullarda aynı iş yeteneğini yeni bir uygulamayla karşılamak daha ekonomik?

Bu sorunun her uygulama için aynı cevabı olmayacaktır.

## Her Yazılım Disposable Olabilir mi?

Gartner'ın 2031 için ortaya koyduğu %80 öngörüsünü değerlendirirken en önemli çekincelerimden biri burada başlıyor.

Kurumsal yazılım ekosistemindeki bütün uygulamaların aynı özelliklere sahip olmadığını biliyoruz. Bir departmanın birkaç aylık raporlama ihtiyacını karşılayan uygulama ile üretim hattını yöneten bir MES sisteminin yaşam döngüsü, risk profili ve değiştirilme maliyeti aynı değil.

Özellikle endüstriyel yazılım sistemlerinde bu fark oldukça belirgin.

Bir üretim tesisinde çalışan MES, SCADA veya benzeri operasyonel sistemler yalnızca kullanıcı arayüzü ve iş kurallarından oluşmuyor. PLC bağlantıları, saha cihazları, üretim süreçleri, veri toplama mekanizmaları, operasyonel bağımlılıklar ve uzun yıllar içerisinde oluşmuş alan bilgisi bu sistemlerin önemli parçaları.

Bu tür sistemleri yalnızca yapay zekâ ile yeniden kodlanmaları kolaylaştığı için sık sık değiştirmek, elde edilmesi beklenen ekonomik faydadan çok daha büyük operasyonel riskler yaratabilir.

Buna karşılık aynı sistemlerin çevresinde geliştirilen belirli raporlama uygulamaları, geçici veri analiz araçları, proje bazlı entegrasyonlar veya belirli bir iş sürecine yönelik kullanıcı arayüzleri disposable yaklaşımına uygun olabilir.

Bu ayrım bizi mimari açıdan önemli bir sonuca götürüyor. Gelecekte asıl mesele bütün yazılımları disposable hale getirmek değil, kalıcı olması gereken iş yetenekleriyle geçici olabilecek uygulamaları birbirinden ayrıştırabilmek olabilir.

Burada daha önce yaptığım ayrım, yani iş yeteneği ile uygulama arasındaki fark, mimari bir karşılık buluyor. Bir organizasyonun stok yönetme, üretim planlama veya finansal kayıt tutma ihtiyacı kalıcı olabilir. Ancak bu yetenekleri kullanıcılara sunan belirli uygulamaların aynı derecede kalıcı olması gerekmeyebilir.

Dolayısıyla kalıcı iş yetenekleri, güvenilir veri kaynakları, açık entegrasyon sözleşmeleri ve geçici uygulama katmanları üzerine kurulu bir mimari yaklaşım giderek daha anlamlı hale gelebilir.

Bunun için modülerlik, API tasarımı, veri sahipliği, versiyonlama ve sözleşme tabanlı entegrasyonlar gibi uzun süredir bildiğimiz mühendislik prensipleri önemini kaybetmiyor. Aksine, disposable uygulamaların güvenli biçimde geliştirilebilmesi ve kaldırılabilmesi için daha kritik hale geliyor.

## Yazılımı Silmek Kolay, Bağımlılıklarını Ortadan Kaldırmak Zor

Gartner araştırmasının bence yeterince derinleştirmediği noktalardan biri, disposable uygulamaların yarattığı bağımlılıkların teknik ve organizasyonel olarak nasıl yönetileceği.

Bir uygulamayı geliştirmek günler sürerken devreden çıkarmak neden aylar sürebiliyor?

Çünkü uygulamalar çoğu zaman tek başlarına çalışmıyor. Veritabanlarına erişiyor, başka sistemlerden veri okuyor, API çağrıları yapıyor, kullanıcı hesapları oluşturuyor, kimlik doğrulama altyapısıyla bütünleşiyor ve bazı durumlarda diğer uygulamalar tarafından tüketilen servisler sunuyor.

Bir uygulamanın kaynak kodunu veya container'ını silmek, bu bağımlılıkların tamamını ortadan kaldırmıyor.

Uygulamanın oluşturduğu verilerin nerede saklandığı, hangi kayıtların mevzuat nedeniyle korunması gerektiği, hangi servis hesaplarının hâlâ aktif olduğu ve başka uygulamaların hangi entegrasyonlara bağımlı hale geldiği bilinmiyorsa, uygulamanın emekliye ayrılması başlı başına bir mühendislik projesine dönüşebilir.

Dahası, bir uygulamanın iş açısından geçici olması, ürettiği verinin de geçici olduğu anlamına gelmiyor. Finansal kayıtlar, denetim izleri, üretim geçmişi veya sözleşmesel yükümlülükler uygulama ortadan kaldırıldıktan sonra da devam edebilir.

Bu nedenle disposable yaklaşımının başarılı olabilmesi için uygulamanın yaşam döngüsü ile verinin yaşam döngüsünü birbirinden ayırmak gerekiyor.

Gartner'ın önerdiği yaşam döngüsü, ihtiyacın belirlenmesi, tasarım, geliştirme, operasyon, değerlendirme ve emekliye ayırma aşamalarından oluşuyor. Ancak bana göre bu modelin pratikte çalışabilmesi için son aşamanın yalnızca bir operasyon prosedürü değil, daha ilk tasarım aşamasında doğrulanabilir bir gereksinim olması gerekiyor.

Başka bir ifadeyle, bir uygulamanın nasıl kaldırılacağına ilişkin sorular, uygulama canlıya alındıktan sonra değil, geliştirilmeden önce cevaplanmalı.

Bu da yazılım mühendisliğinde test edilebilir yeni bir kalite özelliği olarak *retireability*, yani kontrollü biçimde kullanımdan kaldırılabilirlik kavramını öne çıkarabilir.

Bir uygulamanın kolay geliştirilebilir, ölçeklenebilir ve sürdürülebilir olması kadar, bağımlılıklarını geride bırakmadan ortadan kaldırılabilir olması da mimari bir kalite ölçütüne dönüşebilir.

## Citizen Development ve Yeni Bir Shadow IT Riski

Disposable applications yaklaşımının en önemli itici güçlerinden biri, yazılım geliştirme yeteneğinin profesyonel geliştirme ekiplerinin dışına taşması.

Bu demokratikleşmenin faydalarını ve yarattığı bilgi borcunu [Frankenstein Yazılımlar]({% post_url 2026-10-03-ai-frankenstein-software %}) yazısında ayrıntılı olarak ele almıştım. Burada disposable uygulamalara özgü bir riske odaklanmak istiyorum: geçici olarak başlayan bir uygulamanın, kimse karar vermeden kalıcı hale gelmesi.

Geçmişte Shadow IT olarak tanımladığımız problem çoğu zaman iş birimlerinin BT departmanının bilgisi dışında SaaS uygulamaları kullanması veya kendi sistemlerini kurmasıyla ilişkiliydi. Yapay zekâ destekli geliştirme ise aynı problemi çok daha büyük ölçekte yeniden üretebilir.

Bir çalışanın kendi ihtiyacını karşılamak üzere uygulama oluşturduğunu düşünelim. Uygulama başlangıçta yalnızca birkaç Excel dosyasını işliyor olabilir. Zamanla merkezi veritabanına erişmeye, başka departmanlardan veri toplamaya ve kritik iş kararlarında kullanılmaya başlanabilir.

Uygulama bu noktada hâlâ küçük olabilir. Ancak yarattığı iş bağımlılığı artık küçük değildir.

Burada olan şey, geçici bir ihtiyaç için geliştirilen uygulamanın sessizce kalıcı bir ihtiyacı karşılamaya başlaması. Fakat bu uygulama ne yenilenebilir ne de kontrollü biçimde kaldırılabilir şekilde tasarlanmıştır. Üstelik bu geçiş çoğu zaman bilinçli bir kararla değil, kullanım biriktikçe kendiliğinden gerçekleşir.

Gartner'ın yaklaşımında olumlu bulduğum taraf, bu riske karşı AI araçlarını tamamen yasaklamayı önermemesi. Bunun yerine platformlar, standartlar, otomatik kontroller ve açık sorumluluk mekanizmaları üzerinden yönetilen bir geliştirme modeli öneriyor.

Bence bu doğru yönde bir yaklaşım. Ancak bunun gerçekleşmesi için organizasyonların yalnızca uygulama geliştirme araçlarına yatırım yapması yeterli olmayacaktır.

Uygulamaların envanterini tutan, veri erişimini sınırlandıran, entegrasyonları kayıt altına alan, kullanım maliyetini izleyen, yaşam sürelerini yöneten ve gerektiğinde otomatik olarak devreden çıkarabilen bir platform yeteneği gerekecek.

Burada önemli olan, citizen developer'ların profesyonel yazılım mühendislerine dönüşmesini beklemek değil. Mühendislik kurallarının mümkün olduğunca platform tarafından uygulanmasını sağlamak.

## Teknik Borç Ortadan Kalkıyor mu, Yoksa Biçim mi Değiştiriyor?

Disposable applications kavramını değerlendirirken özellikle dikkat edilmesi gereken konulardan biri teknik borç.

İlk bakışta belirli bir süre sonra kullanımdan kaldırılacak uygulamaların teknik borç biriktirmeyeceği düşünülebilir. Bir uygulamayı sürekli genişletmek yerine ihtiyaca göre yeniden oluşturmak, eski kodun bakım maliyetini azaltabilir.

Ancak bu yaklaşım teknik borcu kendiliğinden ortadan kaldırmaz.

Hatta yanlış uygulandığında teknik borcun kaynağı koddan entegrasyonlara, veri modellerine ve organizasyonel bağımlılıklara kayabilir.

Bir şirketin her departmanı kendi geçici uygulamalarını geliştirmeye başladığında uygulama sayısının artması tek başına problem olmayabilir. Asıl problem, bu uygulamaların birbirine bağımlı hale gelmesi, aynı iş kurallarının farklı biçimlerde uygulanması ve ortak verinin farklı sistemlerde farklı anlamlar kazanmasıdır.

Bir uygulamayı silmek mümkün olabilir. Ancak onunla birlikte oluşturulan veri tutarsızlıklarını, yanlış entegrasyon varsayımlarını ve organizasyonel alışkanlıkları silmek aynı derecede kolay değildir.

Bu açıdan disposable applications yaklaşımı, teknik borcu azaltmak için bir fırsat sunarken başka türden borçlar yaratma potansiyelini de taşıyor.

[Frankenstein Yazılımlar]({% post_url 2026-10-03-ai-frankenstein-software %}) yazısında bunu *bilgi borcu* olarak adlandırmıştım: Kodun ucuzladığı bir ortamda asıl pahalı hale gelen şey, sistemin davranışını anlamak, bağımlılıklarını yönetmek ve değişikliklerin sonuçlarını öngörebilmek. Disposable uygulamalar bu borcu silmez; yalnızca uygulamadan veriye, entegrasyonlara ve organizasyona taşır.

## Spesifikasyonlar Koddan Daha Kalıcı Hale Gelebilir mi?

Disposable applications yaklaşımının benim açımdan en ilginç sonuçlarından biri, yazılımın hangi bölümünün kalıcı olması gerektiği sorusu.

Eğer kodu yeniden üretmenin maliyeti düşüyorsa ve uygulamalar belirli aralıklarla yeniden oluşturulabiliyorsa, bir iş yeteneğinin sürekliliğini sağlayan asıl varlık kaynak kodu olmaktan çıkabilir.

Bu durumda gereksinimler, iş kuralları, veri sözleşmeleri, davranışsal kısıtlar, test senaryoları ve doğrulanabilir spesifikasyonlar daha merkezi bir konuma yerleşebilir.

Daha önce [Spec-Driven Development'tan Formal Spec-Driven Development'a]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) başlıklı yazımda, yapay zekânın ürettiği kodu doğrudan güvenilir kabul etmek yerine, sistem davranışını biçimsel olarak tanımlayan ve üretilen çıktının bu tanıma uygunluğunu doğrulayan bir mühendislik yaklaşımını tartışmıştım.

Disposable applications kavramı bu tartışmaya başka bir gerekçe kazandırıyor.

Bir uygulamanın belirli bir iş amacını karşılamak için yeniden oluşturulabileceğini düşünelim. Eğer o uygulamanın davranışını yeterince açık ve doğrulanabilir biçimde tanımlayamıyorsak, yeniden üretilen uygulamanın öncekiyle işlevsel olarak eşdeğer olduğunu nasıl anlayacağız?

Yalnızca aynı ekranların oluşturulması veya benzer iş akışlarının çalışması yeterli olmayacaktır. Yetkilendirme kuralları, hata durumları, veri bütünlüğü, entegrasyon davranışları ve iş kurallarının sınır koşulları da korunmalıdır.

Bu nedenle gelecekte bazı uygulamaların kaynak kodundan daha uzun ömürlü olan varlıkları, onları tanımlayan spesifikasyonlar olabilir.

Ancak burada da önemli bir sınır var. Spesifikasyonun varlığı tek başına yeniden üretilebilirlik garantisi sağlamaz. Dış sistemlerin davranışı değişmiş, kullanılan API'ler güncellenmiş veya iş kuralları zaman içinde farklılaşmış olabilir. Gerçek anlamda yeniden üretilebilirlik için spesifikasyonların, testlerin, bağımlılık sözleşmelerinin ve gerekli veri geçiş kurallarının birlikte yönetilmesi gerekir.

Belki de gelecekte bazı uygulamaları saklamak yerine, onları güvenilir biçimde yeniden oluşturmayı sağlayan mühendislik varlıklarını saklamak daha anlamlı hale gelecek.

Bu yaklaşım, her uygulama için uygun olmasa bile yazılımın kalıcılığına ilişkin düşünme biçimimizi değiştirebilir.

## Disposable Applications İçin Yeni Bir Platform Mühendisliği İhtiyacı

Gartner, disposable applications yaklaşımını benimseyecek organizasyonlara özel bir platform ekibi oluşturmayı öneriyor. Bence araştırmanın en güçlü önerilerinden biri bu.

Çünkü yazılım üretiminin giderek daha fazla otomatikleştiği bir dünyada her uygulama için aynı operasyonel hazırlıkları tekrar etmek ekonomik açıdan anlamlı olmayacaktır.

Kimlik doğrulama, yetkilendirme, veri erişimi, logging, monitoring, deployment, maliyet izleme, güvenlik kontrolleri ve uygulamanın devreden çıkarılması gibi kabiliyetlerin merkezi bir platform üzerinden sunulması çok daha ölçeklenebilir bir yaklaşım.

Fakat burada yalnızca klasik bir Internal Developer Platform'dan söz etmiyoruz. Disposable applications için geliştirilecek platformların, uygulamaların oluşturulması kadar yaşam sürelerinin yönetilmesini de desteklemesi gerekecek.

Örneğin bir iş birimi yeni bir uygulama oluştururken uygulamanın sahibi, beklenen kullanım süresi, erişeceği veri kaynakları, oluşturacağı entegrasyonlar ve kabul edilebilir maliyet sınırları tanımlanabilir. Platform bu bilgileri kullanarak uygun altyapıyı hazırlayabilir, güvenlik politikalarını uygulayabilir ve uygulamanın yaşam döngüsü boyunca gerekli kontrolleri gerçekleştirebilir.

Tanımlanan süre sona erdiğinde veya uygulamanın artık kullanılmadığı belirlendiğinde, platform iş sahibinden karar isteyebilir. Kullanımın devam etmesi gerekiyorsa süre uzatılabilir. Aksi durumda veriler arşivlenerek entegrasyonlar kaldırılabilir ve uygulama güvenli biçimde devreden çıkarılabilir.

Burada özellikle altını çizmek istediğim nokta, emekliye ayırma kararının yalnızca teknik bir otomasyon olarak ele alınmaması gerektiği. Bir uygulamanın düşük kullanım oranına sahip olması, iş açısından değersiz olduğu anlamına gelmeyebilir. Yılda yalnızca birkaç kez kullanılan bir uygulama, kritik bir finansal veya operasyonel sürecin parçası olabilir.

Dolayısıyla platformun görevi uygulamaları rastgele silmek değil, teknik göstergelerle iş değerini bir araya getirerek doğru kararların alınmasını kolaylaştırmak olmalı.

Böyle bir mimaride IT departmanının rolü de değişiyor. Her küçük uygulamanın geliştirilmesini doğrudan üstlenen veya onaylayan organizasyon olmak yerine, güvenli yazılım üretiminin sınırlarını tanımlayan ve bu sınırların uygulanmasını sağlayan organizasyona dönüşebilir.

Bu dönüşüm, yazılım mühendisliğinin ortadan kalktığı anlamına gelmiyor. Mühendislik sorumluluğunun uygulama seviyesinden platform ve sistem seviyesine doğru genişlediği anlamına geliyor.

## %80 Öngörüsüne Ne Kadar Güvenmeliyiz?

Gartner'ın 2031 yılına ilişkin %80 tahminini değerlendirirken bunun doğrulanmış bir gelecek sonucu değil, stratejik planlama varsayımı olduğunu unutmamak gerekiyor.

Üstelik bu oranın nasıl yorumlandığı da önemli. Araştırma yeni uygulamalardan söz ediyor. Kurumsal sistem envanterindeki mevcut uygulamaların %80'inin 2031 yılında ortadan kalkacağı gibi bir sonuç çıkarmak doğru olmayacaktır.

Ayrıca yeni uygulamaların sayısı üzerinden yapılacak bir değerlendirme ile iş kritikliğine, ekonomik değere veya operasyonel etkiye göre yapılacak değerlendirme aynı sonuçları vermeyebilir.

Bir organizasyon yılda yüzlerce küçük ve geçici uygulama geliştirirken, aynı dönemde yalnızca birkaç tane uzun ömürlü stratejik sistem geliştirebilir. Bu durumda yeni uygulamaların büyük çoğunluğunun disposable olması, organizasyonun temel teknoloji mimarisinin de aynı ölçüde geçici hale geldiği anlamına gelmez.

Bir başka belirsizlik de yeniden geliştirme ekonomisiyle ilgili. Yapay zekâ destekli kod üretiminin maliyeti düşmeye devam etse bile doğrulama, güvenlik, entegrasyon ve veri geçiş maliyetlerinin aynı hızda düşeceğini henüz bilmiyoruz.

Dolayısıyla Gartner'ın işaret ettiği eğilimi anlamlı bulmakla birlikte, disposable applications yaklaşımının bütün uygulama sınıflarında baskın model haline geleceği sonucuna şimdiden varmak için yeterli gerekçe görmüyorum.

Bununla birlikte araştırmanın ortaya koyduğu temel sorunun gerçek olduğunu düşünüyorum. Yazılım üretiminin artması, organizasyonların uygulama portföylerini eskisinden farklı şekilde yönetmesini gerektirecek. Yazılım geliştirmeyi hızlandırırken uygulamaların yaşam döngüsünü aynı şekilde yönetmeye devam etmek sürdürülebilir olmayabilir.

## Sonuç: Belki de Geleceğin İyi Yazılımı, Gerektiğinde Ortadan Kalkabilen Yazılımdır

Yazılım mühendisliğinde uzun yıllardır iyi bir sistemi sürdürülebilirliği, genişletilebilirliği ve zaman içerisinde değişen ihtiyaçlara uyum sağlayabilmesi üzerinden değerlendirdik. Bu özellikler elbette önemini koruyor. Ancak yapay zekâ ile yazılım üretiminin ekonomik yapısı değiştikçe bu değerlendirme ölçütlerine yenilerinin eklenmesi gerekebilir.

Bir yazılımın iyi tasarlanmış olması, her koşulda uzun süre yaşaması gerektiği anlamına gelmiyor.

Bazı uygulamalar için iyi mühendislik, onları mümkün olduğunca uzun süre ayakta tutmak olabilir. Başka uygulamalar için ise iyi mühendislik, belirli bir iş ihtiyacını güvenli ve ekonomik biçimde karşılamalarını sağlamak ve ihtiyaç ortadan kalktığında geride kontrolsüz bağımlılıklar bırakmadan devreden çıkarabilmek olabilir.

Burada asıl değişen şey yazılımın teknik ömründen çok ekonomik ömrüne yaklaşımımız.

Gartner'ın disposable applications öngörüsünü bu nedenle yalnızca yeni bir teknoloji trendi olarak değil, yazılımın sahipliği ve yaşam döngüsü hakkındaki varsayımlarımızı yeniden değerlendirmemizi gerektiren bir işaret olarak görüyorum.

Ancak bu dönüşümün gerçekleşmesi için AI coding agent'larının daha iyi kod üretmesi tek başına yeterli olmayacaktır. Kurumların uygulama portföylerini yönetme biçimlerini, mimari standartlarını, veri sahipliği modellerini ve yazılım mühendisliği süreçlerini de değiştirmesi gerekecek.

Daha önce [2030'a Giderken Yazılım Mühendisliği: Kod Yazmanın Ötesinde]({% post_url 2026-08-29-ai-future-of-swe-impact-of-ai %}) yazısında değindiğim gibi, kod üretiminin giderek ucuzladığı bir dünyada mühendisliğin değeri başka alanlara kayıyor. Doğru problemi seçmek, sistemin davranışını tanımlamak, güvenilirliğini sağlamak ve değişimin sonuçlarını yönetmek daha önemli hale geliyor.

Disposable applications yaklaşımı buna yeni bir sorumluluk ekliyor: Bir yazılımın ne zaman artık var olmaması gerektiğine karar verebilmek.

Belki de önümüzdeki yıllarda yazılım mühendisliğindeki en önemli dönüşümlerden biri, uygulamaları daha hızlı geliştirmeyi öğrenmemiz değil, onları ne kadar süre yaşatmamız gerektiğini daha iyi anlamamız olacak.

Çünkü yazılımın değerini belirleyen şey ne kadar uzun süre çalıştığı değil, var olduğu süre boyunca hangi iş ihtiyacını ne kadar doğru ve ekonomik biçimde karşıladığıdır.

---

## Kaynaklar ve İlgili Okumalar

1. [Gartner (2026). Gartner's Top Strategic Technology Trends for 2027: Disposable Applications. ID G00855978, 16 October 2026.](https://www.gartner.com/en/documents/8387981)
2. [Ali Özgür (2026). Jevons Paradoksu ve AI Destekli Kodlama.]({% post_url 2026-04-26-jevons-paradox-in-ai-coding %})
3. [Ali Özgür (2026). Vaka Çalışması: AI Destekli Yazılım Geliştirmenin Ekonomisi.]({% post_url 2026-09-02-ai-cost-use-case %})
4. [Ali Özgür (2025). Vibe Coding: Useful Hack or Engineering Hazard?]({% post_url 2025-04-04-vibe-coding %})
5. [Ali Özgür (2026). Spec-Driven Development'tan Formal Spec-Driven Development'a.]({% post_url 2026-08-31-ai-formal-spec-driven-development %})
6. [Ali Özgür (2026). 2030'a Giderken Yazılım Mühendisliği: Kod Yazmanın Ötesinde.]({% post_url 2026-08-29-ai-future-of-swe-impact-of-ai %})
7. [Ali Özgür (2026). Yazılım Geliştirme Standartları Yapay Zekâ Çağına Hazır mı?]({% post_url 2026-08-09-softdev-standards-ai-readiness %})
8. [Ali Özgür (2026). Kod Yazmak Ucuzlamıyor: AI Destekli Kodlamanın Görünmeyen Maliyeti.]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %})
9. [Ali Özgür (2026). AI Engineering FinOps'un Eksik Parçası: Harness Engineering.]({% post_url 2026-08-26-harness-engineering-ai-finops-part2 %})
10. [Ali Özgür (2026). Frankenstein Yazılımlar: Yapay Zekâ ile Üretebildiğimiz Ama Anlayamadığımız Sistemler.]({% post_url 2026-10-03-ai-frankenstein-software %})

---

{% include share_twitter_tr.html %}

---
