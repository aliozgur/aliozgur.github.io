---

layout: post
title: "AI Yazılım Üretimini Demokratikleştirirken Yazılım Ekonomisini Merkezileştiriyor mu?"
subtitle: "AI sağlayıcıları altyapı, uygulama, ajan ve dağıtım katmanlarında aynı anda genişlerken bağımsız yazılım şirketlerine ne kalıyor?"
date: 2026-11-13
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- ai-platforms
- ai-agents
- software-economics
- platform-dependency
- software-engineering

---

Yapay zekâ alanındaki gelişmeleri takip ederken dikkatimizin büyük bölümü yeni modellerin yeteneklerine gidiyor. Hangi model daha iyi kod yazıyor, hangisi daha karmaşık problemleri çözebiliyor, context window ne kadar büyüdü, inference maliyetleri ne kadar düştü? Bunların hepsi önemli sorular. Ancak son dönemde dikkatimi çeken başka bir dönüşüm var ve yazılım endüstrisi açısından model performansındaki ilerlemelerden daha kalıcı sonuçlar doğurabileceğini düşünüyorum.

Anthropic, OpenAI, Google, Microsoft ve xAI'ın son aylardaki ürün duyurularına birlikte baktığımızda ortak bir yönelim görüyoruz. Bu şirketler artık yalnızca model geliştirmiyor. AI uygulamalarının geliştirildiği altyapıyı, son kullanıcının işini yaptığı uygulamaları, kullanıcı adına sürekli çalışan ajanları ve bu ajanların dağıtıldığı pazarları da sunuyorlar. Başka bir ifadeyle AI sağlayıcıları yazılım endüstrisinin teknoloji tedarikçisi olmanın ötesine geçip aynı anda uygulama geliştiricisi, altyapı sağlayıcısı ve dağıtım kanalı haline geliyor.

Bu yazıda bu dönüşümün bağımsız yazılım şirketleri için ne anlama geldiğini tartışmak istiyorum. Çünkü burada ilginç bir çelişki görüyorum: Yapay zekâ yazılım üretmeyi hiç olmadığı kadar erişilebilir hale getirirken, yazılımdan elde edilen ekonomik değer az sayıda platformda toplanıyor olabilir.

{::comment}end-of-excerpt{:/comment}

## Yeni Özelliklerden Daha Fazlası

Anthropic'in son iki haftadaki duyuruları bu dönüşümü oldukça görünür hale getiriyor. 10 Kasım'da [Claude Sheets, Claude Whiteboards ve Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) duyuruldu. İki gün sonra, 12 Kasım'da ise iki ürün daha geldi. [Claude Meetings](https://claude.com/resources/articles/claude-meetings), Claude'un video görüşmelere görünür bir katılımcı olarak katılmasını, soruları yanıtlamasını, not ve aksiyon maddeleri çıkarmasını ve toplantı sırasında ekip arkadaşlarıyla birlikte doküman veya whiteboard gibi çıktılar oluşturmasını sağlıyor. [Claude for Manufacturing](https://claude.com/resources/articles/claude-for-manufacturing) ise üretim şirketlerine yönelik 17 skill ve Autodesk Fusion, Infor, Microsoft 365 ve Oracle NetSuite için connector'lar sunuyor. Teklif hazırlama, uygunsuzluk sonrası düzeltici faaliyet raporu oluşturma, alternatif tedarikçiden RFQ hazırlayıp teklifleri karşılaştırma ve üretim verilerinden rapor derleme gibi doğrudan endüstriyel iş süreçlerini hedefliyor.

Diğer sağlayıcılarda da benzer bir tablo var. OpenAI'ın Temmuz ayında duyurduğu [ChatGPT Work](https://openai.com/index/chatgpt-for-your-most-ambitious-work/), kullanıcının uygulamaları, dosyaları ve iş akışları üzerinde saatlerce süren işleri yürütüp doküman, tablo, sunum veya rapor gibi bitmiş çıktılar üretmesini hedefliyor. Google ise Nisan'daki Cloud Next '26'da duyurduğu [Gemini Enterprise Agent Platform](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-enterprise-agent-platform/) ile ajan geliştirme, yönetişim ve gözlemlenebilirlik yeteneklerini Gemini Enterprise uygulamasıyla aynı çatı altında topluyor.

Bu gelişmeleri tek tek değerlendirdiğimizde karşımızda yeni bir toplantı özelliği, bir veri analizi aracı veya bir kurumsal entegrasyon var. Birlikte baktığımızda ise daha önce farklı yazılım şirketlerinin ayrı ürünler olarak sunduğu yeteneklerin AI sağlayıcılarının mevcut ürünleri içinde bir araya geldiğini görüyoruz. Bu ürünler de giderek sorularımıza cevap veren uygulamalar olmaktan çıkıp işimizi yaptığımız çalışma ortamlarına dönüşüyor.

## Altyapı da Aynı Platformların Parçası Haline Geliyor

Dönüşüm yalnızca son kullanıcı uygulamalarında yaşanmıyor. [Microsoft Foundry](https://azure.microsoft.com/en-us/products/ai-foundry) bu açıdan iyi bir örnek. Foundry, OpenAI, Anthropic, Meta, Google ve xAI dahil farklı sağlayıcılardan 11.000'i aşkın modele erişim, ajan geliştirme ve orkestrasyon, görev bazında gerçek zamanlı model yönlendirme, SAP, Salesforce ve Dynamics 365 gibi kurumsal sistemlere 1.400'ü aşkın hazır bağlantı, OpenTelemetry tabanlı izleme ve merkezi yönetişim gibi yetenekleri tek bir platformda topluyor. Google'ın Vertex AI'ı Gemini Enterprise Agent Platform altında yeniden konumlandırması da aynı yönelimin bir parçası.

Bir yazılım şirketi kendi AI altyapısını kurmak istediğinde karşılaşacağı problemlerin önemli bir bölümü artık platform seviyesinde yönetilen servisler olarak sunuluyor. Birden fazla model sağlayıcısını desteklemek, ajanların araç kullanmasını sağlamak, çalışma geçmişlerini izlemek, erişim yetkilerini yönetmek veya ajanları kurumsal uygulamalara bağlamak, ayrı ayrı geliştirilmesi gereken bileşenler olmaktan çıkıyor. Bu, geliştirme maliyetini düşürüyor ve ürünlerin daha hızlı pazara çıkmasını sağlıyor. Ama aynı zamanda rahatsız edici bir soruyu da gündeme getiriyor: AI altyapısı geliştiren bağımsız şirketlerin sunduğu yeteneklerin ne kadarı zamanla bulut platformlarının standart servislerine dönüşecek?

Bugün bir girişimin ayrı bir ürün olarak sattığı agent orchestration, memory management, model routing veya observability yeteneği, yarın büyük bir platformun varsayılan bileşeni olabilir. Bu, bütün bağımsız altyapı çözümlerinin ortadan kalkacağı anlamına gelmiyor. Özel güvenlik gereksinimleri, maliyet optimizasyonu, farklı dağıtım modelleri, açık kaynak tercihi veya sektöre özgü ihtiyaçlar bağımsız çözümler için alan bırakmaya devam edecek. Ancak değerini yalnızca mevcut bileşenleri bir araya getirmekten alan ürünlerin rekabet avantajını koruması giderek zorlaşacak. Bir teknolojiyi kullanmanın kolaylaşması ile o teknolojinin üzerinde kalıcı bir iş modeli kurmak aynı şey değil. Foundry gibi platformlar yeni yazılım şirketlerinin kurulmasını kolaylaştırırken, bazı bağımsız altyapı ürünlerinin ekonomik değerini de aşındırabilir.

## Sohbet Asistanlarından Sürekli Çalışan Ajanlara

Üçüncü katman, AI asistanlarının çalışma biçimindeki değişim. OpenAI'ın DevDay 2026'da tanıttığı [dots](https://openai.com/index/introducing-dots/), Anthropic'in Ekim ayında duyurduğu [Claude Duet](https://claude.com/resources/articles/claude-duet) ve xAI'ın [Grok Bot](https://x.ai/news/grok-bot-1-0) ürünü bu dönüşümün farklı örnekleri. Ortak noktaları, kullanıcının soru sormasını bekleyen sohbet uygulamalarının ötesine geçmeleri. Her bir dot kendi bulut bilgisayarı ve tarayıcısıyla çalışıyor ve kullanıcı aktif bir sohbet yürütmezken de işine devam edebiliyor. Claude Duet benzer şekilde kendi sanal makinesinde çalışan, dikkat gerektiren işleri öne çıkaran, görevleri tamamlayan ve mesaj göndermek, ödeme yapmak veya bir şeyi silmek gibi adımlardan önce kullanıcıdan onay isteyen proaktif bir ajan olarak konumlandırılıyor. Grok Bot ise bu yaklaşımı ekip çalışmasına taşıyor. Botlar Slack, Microsoft Teams ve video görüşmelerinde ekiplerle birlikte çalışabiliyor, yapılması gereken işleri fark edip üstlenmeyi önerebiliyor ve yarım kalan görevleri takip edebiliyor.

Bence burada önemli olan, bu ürünlerin bugün hangi işleri yapabildiğinden çok nasıl konumlandırıldıkları. AI artık kullanıcının başvurduğu bir araç olmaktan çıkıp kullanıcının iş devrettiği, sorumluluk verdiği ve sürekli çalışan bir sisteme dönüşüyor. Bu değişim yazılım uygulamalarıyla kurduğumuz ilişkiyi doğrudan etkiliyor. Toplantı planlama, e-posta takibi, proje yönetimi, raporlama veya veri analizi gibi ihtiyaçlar için bugün ayrı uygulamalar kullanıyoruz ve her birinin arayüzünü ayrı ayrı öğreniyoruz. Bu işleri bizim adımıza yapabilen bir ajanımız varsa, yapmak istediğimiz işi ona tarif etmemiz yeterli hale gelebilir. Bu durumda uygulamanın kullanıcı arayüzü ürünün en önemli parçası olmaktan çıkabilir ve kullanıcı ile uygulama arasına yerleşen ajan, hangi uygulamanın kullanılacağına da karar verebilir.

Bunu somutlaştırmak için bir CRM düşünelim. Şirketin satış süreçlerini takip eden ajan CRM'deki verileri okuyabiliyor, müşteri görüşmelerini analiz edebiliyor, teklif hazırlayabiliyor ve takip edilmesi gereken işleri belirleyebiliyorsa, kullanıcı için değer artık CRM'in arayüzünden gelmiyor. CRM müşteri kayıtlarını, ilişkileri, yetkileri ve iş kurallarını yönetmeye devam eden önemli bir sistem olarak kalabilir. Ancak kullanıcının günlük çalışma deneyimi CRM'den ajana taşınabilir. Geoffrey Moore'un 2011'de yaygınlaştırdığı *system of record* ve *system of engagement* ayrımını hatırlarsak, AI ajanları engagement katmanını devralmaya aday görünüyor. Bu da bazı uygulamaların kullanıcının doğrudan çalıştığı ürünler olmaktan çıkıp ajanların kullandığı veri ve işlem servislerine dönüşmesi anlamına geliyor. Böyle bir dönüşümde uygulama sağlayıcısının müşteriye sunduğu değer, fiyatlandırma modeli ve müşteriyle kurduğu ilişkinin niteliği değişir. Kullanıcı arayüzünü temel farklılaşma unsuru olarak gören yazılım şirketleri için bu ciddi bir risk.

Elbette bu, kullanıcı arayüzlerinin tamamen ortadan kalkacağı anlamına gelmiyor. Karmaşık operasyonlarda, görsel analizde ve kritik karar süreçlerinde doğrudan kullanıcı etkileşimi önemini koruyacak. Ama birçok bilgi işleme sürecinde kullanıcı ile uygulama arasına bir ajanın yerleşmesi artık uzak bir olasılık değil, bugün satın alınabilen ürünlerle somutlaşmış bir yönelim.

## Yeni Uygulama Mağazası Ajan Pazarı mı Olacak?

Dördüncü katman dağıtım. Grok Bot'un dikkat çeken bir başka parçası [Bot Marketplace](https://x.ai/bot/marketplace). Bu pazarda mühendislik, satış, pazarlama, tasarım, işe alım, ürün ve operasyon gibi alanlar için hazırlanmış botlar bulunuyor. İdeal müşteri profiline uyan potansiyel müşterileri bulup ilk mesajı hazırlayan, toplantılarda, e-postalarda veya CRM'de verilmiş sözleri ve takip edilmesi gereken işleri yakalayan, canlı ortamda kabul testlerini çalıştırıp sonucu bildiren veya mülakat süreçlerini planlayan botlar kullanılabiliyor.

Bu model geleneksel uygulama mağazalarına benziyor, ancak dağıtılan şey klasik anlamda bir mobil veya masaüstü uygulaması değil. Belirli bir işi yapmak üzere hazırlanmış, modelin ve platformun yeteneklerini kullanan bir ajan. Bugün bir SaaS ürünü geliştiren şirket kullanıcı arayüzü, backend servisleri, kimlik doğrulama, veri saklama, entegrasyonlar, ödeme sistemleri ve operasyonel altyapıyla uğraşmak zorunda. Bir ajan pazarında bunların önemli bir bölümünü platform sağlıyor ve geliştiricinin yalnızca belirli bir iş problemini çözen ajanı, gerekli entegrasyonları ve iş akışlarını hazırlaması yetiyor. Bu, pazara giriş maliyetini ciddi biçimde azaltıyor.

Ancak aynı kolaylık bir çelişkiyi de beraberinde getiriyor. Bir ürünü geliştirmek ve dağıtmak kolaylaştıkça aynı işi yapan alternatiflerin ortaya çıkması da kolaylaşıyor. Üstelik platform sağlayıcısı, pazarda popüler hale gelen bir ajan kategorisini kendi standart ürününün parçası yapabilir. Platform sahibi pazarda hangi kategorilerin talep gördüğünü herkesten önce ve herkesten iyi görüyor. Bu nedenle bot marketplace yaklaşımının bağımsız geliştiriciler için gerçek fırsatlar yaratacağını düşünsem de, bu pazarlarda uzun vadede sürdürülebilir ürünler kurmanın kolaylaşacağından emin değilim.

## Dört Katmanda Aynı Anda Rekabet

Bu katmanları üst üste koyduğumuzda tablo netleşiyor. Foundry ve Gemini Enterprise Agent Platform gibi platformlar AI uygulamalarının geliştirildiği ve çalıştırıldığı altyapıyı sunuyor. ChatGPT, Claude ve Gemini son kullanıcıların işlerini yaptığı çalışma ortamlarına dönüşüyor. dots, Claude Duet ve Grok Bot gibi ajanlar kullanıcının işlerini sürekli takip eden ve farklı uygulamalarla etkileşime giren yeni bir katman oluşturuyor. Bot marketplace ve plugin ekosistemleri de bu ajanların dağıtıldığı pazarları kuruyor. Dolayısıyla AI sağlayıcılarının etkisi tek bir yazılım kategorisiyle sınırlı değil. Altyapı, uygulama, ajan ve dağıtım katmanlarında aynı anda genişleyen bir ekosistemden söz ediyoruz.

Bu şirketlerin hepsi aynı stratejiyi izlemiyor. Microsoft kurumsal altyapı ve mevcut iş uygulamalarıyla entegrasyon tarafında güçlü. OpenAI ve Anthropic kendi ürünlerini kullanıcıların temel çalışma ortamı yapmaya çalışıyor. Google hem altyapıyı hem uygulamayı aynı marka altında topluyor. xAI ise botlar ve bunların dağıtımı üzerine farklı bir yol izliyor. Bu stratejiler zaman zaman kesişiyor da. Örneğin OpenAI, kurumsal dots için Microsoft'un Agent 365 yönetişim kontrolleriyle entegrasyon üzerinde çalıştığını duyurdu. Ama ortaya çıkan tablo benzer: Yazılım şirketlerinin daha önce birbirinden bağımsız olarak değer üretebildiği birçok alan, büyük platformların doğrudan faaliyet gösterdiği alanlara dönüşüyor.

Bu klasik bir dikey entegrasyon eğilimi ve tarihte örnekleri var. Apple'ın 2002'de Sherlock 3 ile bağımsız geliştirici Karelia'nın Watson uygulamasının yaptığı işi doğrudan işletim sistemine eklemesi, sektörde bugün hâlâ [*sherlocking*](https://en.wikipedia.org/wiki/Sherlock_(software)) olarak anılıyor. İşletim sistemleri, mobil uygulama mağazaları ve bulut sağlayıcıları defalarca kendi ekosistemlerindeki geliştiricilerin alanına girdi. Ancak AI platformlarında önemli bir fark var. Geçmişteki platformlar ağırlıklı olarak API'leri, arayüz bileşenlerini veya altyapı servislerini standartlaştırıyordu. AI platformları ise daha önce ayrı yazılımların yaptığı bilgi işleme, analiz, içerik üretme ve karar destek işlerini doğrudan üstlenebiliyor. Üstelik bunu AI sağlayıcılarının geliştirme hızı, sermaye gücü ve mevcut kullanıcı tabanıyla yapıyorlar. Bu yüzden etkinin kapsamı da daha geniş olabilir.

## Bir Özellik Ne Zaman Bağımsız Bir Ürün Olmaktan Çıkar?

Bu dönüşümün en somut sonucu, daha önce bağımsız bir ürün olarak ekonomik değer taşıyan bazı yeteneklerin büyük platformların standart özelliklerine dönüşmesi. Toplantı özetleme iyi bir örnek. Birkaç yıl önce toplantıları kaydeden, metne dönüştüren, özetleyen ve aksiyon maddeleri çıkaran bir uygulama anlamlı bir ürün fikriydi ve bu alanda ciddi şirketler kuruldu. Bugün Claude Meetings ve Grok Bot gibi ürünler bu yeteneği platformun içinde sunuyor. Üstelik iş artık özetle bitmiyor. Toplantıda alınan kararları takip etmek, doküman oluşturmak, ilgili kişilere görev hazırlamak ve sonraki toplantıya kadar gelişmeleri izlemek aynı ajanın işi haline geliyor. Bu durumda rekabet yalnızca özetin kalitesi üzerinden yürümüyor ve kullanıcı neden yalnızca bu iş için ayrı bir uygulamaya ihtiyaç duysun diye sormaya başlıyor. Aynı soruyu doküman oluşturma, sunum hazırlama, veri analizi, araştırma ve proje takibi için de sorabiliriz.

Bağımsız ürünlerin tamamen ortadan kalkacağını söylemiyorum. Ancak bir ürünün sunduğu temel değer, büyük bir AI platformunun kolayca kendi arayüzüne veya ajanlarına ekleyebileceği bir yetenekten ibaretse, o ürünün ekonomik geleceği giderek belirsizleşiyor. **Bir ürünün teknik olarak geliştirilebilir olması ile bağımsız bir yazılım şirketi olarak sürdürülebilir olması artık birbirinden oldukça farklı iki problem.**

Büyük AI sağlayıcılarının avantajı da yalnızca gelişmiş modellere sahip olmaları değil. Kullanıcıya erişim, dağıtım kanalları, mevcut kurumsal ilişkiler ve ürünlerin günlük çalışma alışkanlıklarının parçası haline gelmesi en az model yetenekleri kadar önemli. Gününün önemli bölümünü ChatGPT, Claude veya Gemini içinde geçiren bir kullanıcı, yeni bir ihtiyacını karşılamak için önce aynı ortama bakacaktır. O ortamda geçmiş çalışmalarını ve tercihlerini bilen bir ajan varsa, başka bir uygulamaya geçme ihtiyacı daha da azalır.

## Sektörel Yazılımlar Bu Dönüşümün Dışında mı?

Claude for Manufacturing duyurusunu benim için özellikle önemli kılan nokta burası. Toplantı özetleme veya sunum hazırlama gibi genel amaçlı yeteneklerin AI platformlarına taşınmasını bir ölçüde bekliyorduk. Ancak sektörel bilgi, kurumsal entegrasyon ve operasyonel deneyim gerektiren üretim gibi bir alanda doğrudan çözüm sunulmaya başlanması farklı bir gelişme.

Üretim şirketlerine yazılım geliştirmek uzun yıllardır derin bir alan uzmanlığı gerektiriyor. ERP, MES, kalite yönetimi, bakım yönetimi ve üretim analitiği sistemleri yalnızca veri işleyen uygulamalar değil, gerçek operasyonların, süreçlerin ve iş kurallarının yazılıma dönüştürülmüş halleri. Duyuruyu dikkatli okuduğumuzda da sınırlar oldukça net çiziliyor. Connector'lar ERP, CAD ve ofis araçlarını hedefliyor, MES veya saha sistemlerini değil. Anthropic, ürünün ekipman çalıştırmadığını ve müşteriye ya da tedarikçiye gidecek her çıktının bir insan tarafından incelenip onaylandığını özellikle vurguluyor. Yani üretim sisteminden veri okuyup kalite raporu hazırlamak ile üretim operasyonunu güvenilir biçimde yönetmek arasındaki farkın sağlayıcı da farkında. Gerçek zamanlı veri işleme, fiziksel ekipmanlarla iletişim, süreç güvenliği, operasyonel süreklilik ve tesise özgü iş kuralları hâlâ ciddi mühendislik gereksinimleri oluşturuyor. [MES/MOM için Agent Ready Mimari]({% post_url 2026-01-10-mes_mom_agent_ready %}) yazısında da tartıştığım gibi, bu ortamlarda bir ajanın başarısı kendi zekâsından çok çalışacağı sistemlerin ne kadar "agent ready" olduğuna bağlı.

Ancak bugünkü ürünün bu ihtiyaçları karşılamıyor olması, yönelimi göz ardı etmemiz gerektiği anlamına gelmiyor. Bugün teklif hazırlama ve kalite raporlamayla başlayan bir çözümün yarın hangi süreçlere genişleyebileceğini düşünmek gerekiyor. Burada benim için asıl soru şu: **Sektörel yazılım şirketlerinin sunduğu değerin ne kadarı gerçekten o sektöre özgü mühendislikten, ne kadarı ise mevcut veriyi belirli bir kullanıcı deneyimi üzerinden işleyip sunmaktan oluşuyor?** İkinci gruptaki yeteneklerin büyük platformlar tarafından karşılanması giderek kolaylaşacak. Bu nedenle sektörel uzmanlığın önemli bir avantaj olduğunu düşünsem de tek başına uzun vadeli koruma sağlayacağından emin değilim.

## Platformun Parçası Olmak Çözüm mü?

Bağımsız yazılım şirketleri için akla gelen bir başka seçenek, büyük AI platformlarıyla rekabet etmek yerine onların ekosisteminde yer almak. Bot marketplace, plugin ve connector ekosistemleri bu açıdan gerçek fırsatlar sunuyor. Bir şirket kendi arayüzünü ve bütün altyapısını geliştirmek yerine belirli bir iş problemini çözen uzmanlaşmış ajanlar oluşturup büyük platformların kullanıcılarına çok daha geniş bir pazarda ulaşabilir.

Ancak bu yaklaşım farklı türde bir bağımlılık yaratıyor. Daha önce AI sağlayıcısına yalnızca model ve API seviyesinde bağımlı olan şirket, artık kullanıcıya erişim, dağıtım, kimlik yönetimi, uygulama yaşam döngüsü ve gelir modeli açısından da aynı sağlayıcıya bağımlı hale geliyor. Platformun fiyatlandırması değişirse, belirli bir entegrasyon modeli kaldırılırsa, kullanıcıların ajanınızı keşfetme biçimi değişirse ya da platform sizin geliştirdiğiniz yeteneği doğrudan kendi ürününe eklemeye karar verirse ne olacak?

[AI'sation]({% post_url 2026-09-25-ai-as-core-dependency %}) yazısında AI servislerine olan teknik bağımlılığın yazılım mimarisi açısından yarattığı riskleri tartışmış, multi-model stratejisinin bu riski ancak kısmen azalttığını söylemiştim. Bugün aynı bağımlılık probleminin ticari bir boyutunun da belirginleştiğini düşünüyorum. Bir yazılımın AI sağlayıcısı olmadan çalışamaması teknik bir risk. Bir yazılım şirketinin aynı sağlayıcının ürün ve dağıtım kararlarından bağımsız hareket edememesi ise doğrudan iş modelini ilgilendiren bir risk. Teknik olarak birden fazla modeli desteklemek bu ikinci problemi çözmüyor, çünkü **model bağımsızlığı ile platform bağımsızlığı aynı şey değil.**

## Yazılım Geliştirmek Kolaylaşırken Yazılım Şirketi Kurmak Zorlaşıyor mu?

Yazının başında bahsettiğim çelişkiye burada geri dönmek istiyorum. AI destekli geliştirme araçları sayesinde yazılım üretmenin maliyeti düşüyor. Küçük ekipler, hatta tek başına çalışan geliştiriciler, geçmişte çok daha büyük organizasyonların geliştirebildiği ürünleri oluşturabiliyor. Foundry gibi altyapılar uygulamaların geliştirilmesini ve çalıştırılmasını, bot marketplace'ler ise kullanıcılara ulaştırılmasını kolaylaştırıyor. Bu açıdan yazılım dünyasına girişin hiç bu kadar kolay olmadığını söyleyebiliriz.

[Jevons Paradoksu ve AI Destekli Kodlama]({% post_url 2026-04-26-jevons-paradox-in-ai-coding %}) yazısında, yazılım üretmenin ucuzlamasının daha az değil daha fazla yazılım anlamına geleceğini savunmuştum. Bu yazıdaki tartışma o tespite önemli bir şerh ekliyor. Daha fazla yazılım üretilmesi, o yazılımdan elde edilen değerin daha geniş bir kesime dağılacağı anlamına gelmiyor. Bir ürünün geliştirilmesi birkaç ay yerine birkaç hafta sürüyorsa, rakiplerin benzerini oluşturması da aynı ölçüde kolaylaşıyor. Üstelik rakipleriniz yalnızca diğer girişimler değil, kullandığınız modellerin, altyapının ve dağıtım platformunun sağlayıcıları da olabilir. Bu durumda teknik geliştirme kapasitesinin rekabet avantajı olarak değeri azalırken doğru problemi seçmek, müşteriye ulaşmak, sektörel uzmanlık geliştirmek ve kolayca ikame edilemeyen bir değer sunmak öne çıkıyor.

[Yazılımın Kalıcı Olması Gerekiyor mu?]({% post_url 2026-10-20-ai-disposable-software %}) yazısında ise yazılım üretiminin ucuzlamasının uygulamaların ekonomik ömrünü nasıl kısaltabileceğini tartışmıştım. Bugün bu tartışmaya bir boyut daha eklemek gerekiyor. Kısalan yalnızca geliştirdiğimiz uygulamaların ömrü değil, bazı yazılım ürünlerinin bağımsız bir ticari kategori olarak var olabilecekleri süre de kısalıyor olabilir. Bir girişim bugün gerçek bir müşteri problemini çözen, teknik olarak başarılı ve ticari açıdan anlamlı bir ürün geliştirebilir. Ama altı ay sonra aynı problemin büyük bir AI platformunun standart özelliklerinden biri haline gelme ihtimalini de hesaba katmak zorunda.

## Bağımsız Yazılım Şirketlerine Ne Kalacak?

Bütün bunlardan bağımsız yazılım şirketlerinin ortadan kalkacağı sonucunu çıkarmak doğru olmaz. Yeni platformlar, geçmişte olduğu gibi, daha önce mümkün olmayan ürünlerin ve şirketlerin kurulmasını da sağlayacak. Ancak değer üretilebilecek alanların değiştiğini düşünüyorum. Fiziksel sistemlerle entegrasyon, özel veri kaynakları, düzenleyici gereksinimler, yüksek güvenilirlik ihtiyacı, derin sektörel bilgi, müşteriye özgü süreçleri anlamak ve AI sistemlerini mevcut iş ortamına güvenilir biçimde yerleştirmek öne çıkan farklılaşma alanları olabilir.

Bunların hiçbirini kalıcı ve dokunulmaz avantajlar olarak görmemek gerekiyor. Kurumsal sistemlerle entegrasyon bugün önemli bir mühendislik yeteneği. Ancak MCP gibi standart protokoller ve hazır connector'lar yaygınlaştıkça yalnızca veri kaynağına erişebilmek farklılaşma olmaktan çıkıyor. [MCP Sihirli Bir Değnek Değil!]({% post_url 2026-09-05-ai-mcp-is-not-a-magic-wand %}) yazısında savunduğum gibi, asıl değer protokolde değil, araç tasarımında ve sözleşmede. Benzer şekilde belirli bir iş sürecini AI ile otomatikleştirebilmek de tek başına sürdürülebilir bir avantaj değil, çünkü aynı iş akışını başka bir şirketin, hatta müşterinin kendisinin kurması giderek kolaylaşıyor.

Belki de bağımsız yazılım şirketlerinin rekabet avantajı, belirli bir AI yeteneğine sahip olmaktan çok o yeteneği kullanarak müşterinin işinde sürekli ve ölçülebilir bir sonuç üretmekte ve o sonucun sorumluluğunu almakta oluşacak. AI ile bir rapor oluşturabilmek, o rapora dayanan kararların doğruluğundan sorumluluk almakla aynı şey değil. Bir üretim planı hazırlamak, o planın gerçek üretim ortamındaki kısıtlarla uyumlu olduğunu garanti etmekle aynı şey değil. Bir iş akışını otomatikleştirmek de o iş akışının sürekli, güvenli ve denetlenebilir biçimde çalışmasını sağlamakla aynı şey değil. Claude for Manufacturing'in her çıktıyı insan onayına bırakması da aslında bu sorumluluğun bugün hâlâ müşteride ve onun yanında çalışan uzmanlarda kaldığını gösteriyor. Bağımsız yazılım şirketleri için fırsatlar bu boşlukta yoğunlaşabilir. Ancak burada bile cevap kesin değil, çünkü büyük platformlar zamanla bu sorumluluğu üstlenmeye yönelik yetenekler ve ticari modeller de geliştirebilir.

## Sonuç: Yazılım Üretimi Dağıtık, Yazılım Ekonomisi Merkezi

Önümüzdeki birkaç yıl içinde AI sağlayıcılarının çok daha fazla iş uygulaması yeteneğini doğrudan kendi platformlarına ekleyeceğini düşünüyorum. AI altyapılarının standartlaşması, sürekli çalışan ajanların yaygınlaşması ve ajan pazarlarının gelişmesiyle birlikte yazılımın üretilme ve dağıtılma biçimi de önemli ölçüde değişecek. Bu süreçte çok daha fazla insan ve şirket yazılım geliştirebilecek. Ancak kullanıcıların günlük işlerini yaptığı ortamlar, bu ortamların dağıtım kanalları ve elde edilen ticari değerin önemli bir bölümü az sayıda büyük platformda toplanabilir. Başlıktaki soruya kısa bir cevap vermem gerekirse: Yazılım üretimi dağıtık hale gelirken yazılım ekonomisi merkezileşiyor olabilir.

Bunun kaçınılmaz olduğunu söylemek için erken. Açık kaynak modeller, açık protokoller, bağımsız dağıtım kanalları ve müşterilerin platform bağımlılığına karşı geliştireceği stratejiler bu yoğunlaşmayı sınırlayabilir. Büyük platformların bütün sektörlerdeki iş süreçlerini aynı kalite, güvenilirlik ve maliyetle karşılayabileceğini varsaymak için de yeterli nedenimiz yok. Yine de son dönemdeki duyurular, bağımsız yazılım şirketlerinin stratejilerini yeniden değerlendirmesini gerektirecek kadar güçlü işaretler veriyor.

Belki de artık yeni bir AI ürünü geliştirmeye başlarken yalnızca müşterinin hangi problemini çözeceğimizi ve bunu teknik olarak nasıl yapacağımızı düşünmek yetmeyecek. Kullandığımız AI platformu aynı ürünü doğrudan sunmaya başlarsa, geliştirdiğimiz altyapı platformun standart bir servisine dönüşürse ya da müşterilerimiz uygulamamızı kullanmak yerine aynı işi kendi ajanlarından istemeye başlarsa ne olacağını da sormamız gerekecek. Ve belki de en önemlisi şu soruyu sormalıyız:

**Bugün geliştirdiğimiz ürünün değerini oluşturan şey, AI platformlarının henüz sunmadığı bir özellik mi, yoksa o platformlar aynı özelliği sunduğunda da müşterinin bize ihtiyaç duymasını sağlayacak bir şey mi?**

## Kaynaklar

1. Anthropic, [*Introducing Claude for Manufacturing*](https://claude.com/resources/articles/claude-for-manufacturing), 12 Kasım 2026.
2. Anthropic, [*Introducing Claude Meetings, now in beta*](https://claude.com/resources/articles/claude-meetings), 12 Kasım 2026.
3. Anthropic, [*Introducing Claude Whiteboards, Claude Sheets, and Claude Data*](https://claude.com/resources/articles/sheets-whiteboards-data), 10 Kasım 2026.
4. Anthropic, [*Introducing Claude Duet*](https://claude.com/resources/articles/claude-duet), 21 Ekim 2026.
5. OpenAI, [*ChatGPT is now a partner for your most ambitious work*](https://openai.com/index/chatgpt-for-your-most-ambitious-work/), 9 Temmuz 2026.
6. OpenAI, [*Introducing dots*](https://openai.com/index/introducing-dots/), DevDay 2026.
7. OpenAI Help Center, [*Getting started with your dot*](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot).
8. Google, [*Gemini Enterprise Agent Platform lets you build, govern and optimize your agents*](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/gemini-enterprise-agent-platform/), Google Cloud Next '26, Nisan 2026.
9. Microsoft, [*Microsoft Foundry*](https://azure.microsoft.com/en-us/products/ai-foundry), ürün sayfası.
10. xAI, [*Introducing Grok Bot 1.0*](https://x.ai/news/grok-bot-1-0), 2 Kasım 2026.
11. xAI, [*Grok Bot Marketplace*](https://x.ai/bot/marketplace).
12. Wikipedia, [*Sherlock (software)*](https://en.wikipedia.org/wiki/Sherlock_(software)), "sherlocking" kavramının kökeni.
13. [Ali Özgür - AI'sation: Yazılımlarımızı Akıllandırırken Kritik Bir Bağımlılık mı Yaratıyoruz?]({% post_url 2026-09-25-ai-as-core-dependency %})
14. [Ali Özgür - Yazılımın Kalıcı Olması Gerekiyor mu?]({% post_url 2026-10-20-ai-disposable-software %})
15. [Ali Özgür - Jevons Paradoksu ve AI Destekli Kodlama]({% post_url 2026-04-26-jevons-paradox-in-ai-coding %})
16. [Ali Özgür - MCP Sihirli Bir Değnek Değil!]({% post_url 2026-09-05-ai-mcp-is-not-a-magic-wand %})
17. [Ali Özgür - MES/MOM için Agent Ready Mimari]({% post_url 2026-01-10-mes_mom_agent_ready %})

---

{% include share_twitter_tr.html %}

---
