---

layout: post
title: "MCP Sihirli Bir Değnek Değil!"
subtitle: "Standart bir protokol, iyi araç tasarımının ve mimarinin yerini tutmaz"
date: 2026-09-05
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- mcp
- architecture
- api
- agents

---

Model Context Protocol, yani MCP, önemli bir standart. Fakat standart olması, mimari problemleri ortadan kaldırdığı anlamına gelmiyor. Hatta tersine, MCP yaygınlaştıkça yıllardır iyi API tasarımı, entegrasyon mimarisi, güvenlik, gözlemlenebilirlik ve yönetişim başlıklarında konuştuğumuz pek çok konu yeniden önümüze geliyor. Tek fark, bu kez tüketici insan geliştirici değil, büyük ölçüde bir dil modeli.

Bu nedenle MCP'ye gereğinden fazla anlam yüklemek kolay. Protokolü sisteme eklediğimizde ajanların araçları güvenilir biçimde kullanacağını, karmaşık iş akışlarını doğru sırada yürüteceğini, güvenlik ve yetkilendirme sorunlarının büyük ölçüde çözüleceğini varsaymak cazip geliyor. Oysa Gartner'ın *Emerging Practices for MCP Servers and Tools* araştırmasının da açık biçimde gösterdiği gibi asıl mesele protokolün kendisi değil; hangi yetenekleri araç olarak sunduğumuz, bu araçların nasıl tanımlandığı, kaç tane oldukları, ne kadar belirgin sınırları bulunduğu, hangi durumlarda LLM'e orkestrasyon bıraktığımız ve hangi durumlarda bu orkestrasyonu deterministik yazılım davranışına çevirdiğimiz. Gartner'ın temel çerçevesi de tam olarak burada başlıyor: MCP standardizasyon getiriyor, ama başarılı uygulama için araç şemalarının, etkileşimlerin, context window kullanımının ve yönetişimin bilinçli biçimde tasarlanması gerekiyor.

{::comment}end-of-excerpt{:/comment}

MCP'yi yalnızca "API'leri modele açmanın yeni yolu" gibi okumak bence en tehlikeli basitleştirme. Çünkü LLM bir API istemcisi değil. İnsan geliştirici belirsiz bir endpoint'i dener, dökümana bakar, hata mesajını yorumlar, gerekirse debug eder. Model ise kendisine verilen tool adı, açıklama, parametre şeması, runtime cevabı ve hata mesajı kadarını bilir. Dolayısıyla yıllardır "dokümantasyonu sonra yazarız" diyebildiğimiz gevşeklik, MCP dünyasında doğrudan davranışsal hataya dönüşüyor. Gartner da tool execution accuracy kavramını tam bu noktaya yerleştiriyor: doğru tool seçilmiş olsa bile belirsiz parametreler, gereksiz derecede büyük cevaplar veya anlamsız hata mesajları modelin yürütmeyi yanlış yapmasına neden olabiliyor.

Buradaki temel çıkarım şu: iyi tasarlanmış araçlar artık yardımcı bir optimizasyon değil, ajan mimarisinin asli bir parçası. Tool adı, açıklaması, parametreleri ve response shape'i bir SDK ayrıntısı değil, modelin karar yüzeyinin bir parçası. Başka bir deyişle interface design artık yalnızca geliştirici deneyimini değil, doğrudan model davranışını şekillendiriyor.

## Bir Endpoint'i Bir Tool'a Dönüştürmek Her Zaman Doğru Değil

MCP ile ilgili en kolay tasarım, mevcut API yüzeyini olduğu gibi tool'lara çevirmek. Her endpoint bir tool olur, model de ihtiyaca göre bunları zincirler. Prototipleme için bu yaklaşım oldukça verimli olabilir; Gartner da tekil ve ayrık operasyonlarda, özellikle erken aşamada, bire bir API-tool eşleşmesini makul bir başlangıç noktası olarak öneriyor. Ancak bu model ölçek büyüdükçe hızla sorun üretmeye başlıyor.

Her yeni tool modelin seçmesi gereken yeni bir seçenek demek. Her tool tanımı context window'da yer kaplıyor. Bir iş için üç, dört veya beş tool çağrısı gerekiyorsa latency ve token tüketimi artıyor. Daha önemlisi, her ara adım yeni bir hata yüzeyi yaratıyor. Böyle bir sistemde LLM'den hem kullanıcı niyetini anlamasını hem doğru tool'ları seçmesini hem de operasyon sırasını güvenilir biçimde kurmasını bekliyoruz.

Bu beklenti her durumda anlamlı değil.

Örneğin bir müşteri hesabı açmak için kullanıcı kaydı oluşturmak, yetki atamak, lisans tanımlamak ve başka bir sistemde provisioning yapmak gerekiyorsa bu akışı dört ayrı tool ile modele bırakmak "daha agentic" olabilir ama aynı zamanda daha kırılgan olabilir. Eğer iş akışının sırası değişmemeli, kısmi başarısızlık sistemi tutarsız bırakmamalı ve hata yönetimi belirli kurallara göre yapılmalıysa burada LLM'in orkestrasyon özgürlüğü bir avantaj değil, gereksiz bir risk haline gelir.

Gartner'ın composite tool önerisi tam bu nedenle önemli. LLM kullanıcının ne yapmak istediğini anlayabilir, gerekli parametreleri çıkarabilir; fakat tekrarlanan, deterministik veya transactional özellik taşıyan akışın kendisi klasik yazılım mantığında tutulabilir. Bu ayrım son derece sağlıklı: model niyet ve anlam üzerinde çalışır, yazılım ise sıralama, tutarlılık ve hata yönetimi üzerinde.

Bu, bence MCP tartışmasının en kritik mimari sonuçlarından biri. Her şeyi modele bırakmak zekâ göstergesi değil. Hangi belirsizliği modele bırakacağımızı, hangi davranışı kod ile garanti altına alacağımızı doğru seçmek asıl mühendislik meselesi.

## Tool Sayısı Bir Tasarım Detayı Değil, Bir Bütçe

Bir başka yaygın yanılgı, model context window'u büyüdükçe yüzlerce tool vermenin sorun olmaktan çıkacağı düşüncesi. Gerçekte tool sayısı yalnızca token maliyetiyle ilgili değil. Seçim uzayı büyüdükçe benzer veya örtüşen tool'lar arasındaki ayrım da zorlaşıyor.

Gartner bu nedenle "tool budget" fikrini öne çıkarıyor ve tek bir domain için başlangıçta yaklaşık 5-15 odaklı tool öneriyor. Buradaki sayı katı bir kural değil; asıl fikir, tool set'in ölçülü ve bilinçli tutulması. Çünkü yüzlerce endpoint'i otomatik olarak MCP tool'una çevirmek teknik olarak mümkün olsa bile mimari olarak iyi bir sonuç üretmeyebilir.

Burada eski API tasarım prensipleri tekrar önem kazanıyor. Domain sınırları, isimlendirme, sorumluluk ayrımı, benzer yeteneklerin çakışmaması, doğru granularity ve doğru abstraction seviyesi yeniden belirleyici oluyor. Hatta bazı durumlarda daha önce backend için tasarlanmış bir API yüzeyi, LLM tüketimi için doğrudan uygun olmayabilir.

Bu nedenle MCP tool tasarımında endpoint'ten değil, kullanıcı niyetinden başlamak daha doğru. Gartner'ın da önerdiği gibi tool'ların ne yaptığı kadar hangi durumda kullanılmaması gerektiği de açık olmalı. Örneğin "search_customer_orders" ile "get_order" arasında yalnızca isim farkı değil, kullanım amacı bakımından açık bir sınır bulunmalı. Modelin tahmin etmesini beklemek yerine bu sınırı tanımın içinde vermek gerekiyor.

## API Response'u Olduğu Gibi Modele Vermek İyi Tasarım Değil

Kurumsal API'lerin çoğu insanlar veya başka yazılım sistemleri düşünülerek tasarlanmıştır. İç ID'ler, audit metadata, nested nesneler, teknik statüler ve operasyonel ayrıntılar içerirler. Bir model açısından bunların çoğu gürültü olabilir.

Gartner'ın yüksek sinyal, düşük token tüketimi yaklaşımı burada oldukça yerinde. MCP tool response'ları backend cevaplarının doğrudan kopyası olmak zorunda değil. Tam tersine, yalnızca karar vermek için gerekli alanları içeren, mümkün olduğunca sade, structured ve öngörülebilir cevaplar daha iyi sonuç verir. Büyük payload'lar gerekiyorsa pagination, field selection, minimal/full benzeri verbosity seçenekleri veya daha sonra alınabilecek resource referansları kullanılabilir.

Bu noktada önemli bir zihinsel dönüşüm var. Geleneksel API tasarımında zengin response çoğu zaman esneklik olarak görülür. LLM tool tasarımında ise gereksiz zenginlik, reasoning yüzeyini büyüten ve context tüketen bir maliyet olabilir.

Aynı şey hata mesajları için de geçerli. "HTTP 400" veya "Invalid input" bir geliştirici için debug başlangıcı olabilir; model için ise çoğu zaman çıkmaz sokaktır. Gartner'ın önerdiği "what, why, how" yapısı bu yüzden anlamlı: ne yanlış gitti, neden yanlış gitti ve nasıl düzeltilmeli. Eğer hata recoverable ise modelin yeniden denemesine yardımcı olmalı; değilse tekrar denememesi açık biçimde söylenmeli.

Bu ayrıntılar ilk bakışta küçük görünebilir. Fakat ajan sistemlerinde güvenilirliği oluşturan şey tam olarak bu küçük sözleşmelerin toplamı.

## MCP Güvenliği Ayrı Bir Dünya Değil

MCP konuşmalarında bazen güvenlik, protokolün çevresinde çözülecek özel bir problem gibi ele alınıyor. Oysa Gartner'ın yaklaşımı çok daha tanıdık ve daha doğru: remote MCP server'ları production API gibi yönetin.

Bu yaklaşım, kimlik doğrulama, yetkilendirme, rate limiting, policy enforcement, discovery ve observability gibi konuları merkezi bir gateway üzerinden ele almayı öneriyor. Registry ise hangi MCP server'ların kurumsal olarak onaylandığını, hangi tool'ları sunduklarını ve kimlerin bunları kullanabileceğini yönetmek için bir kontrol düzlemi sağlıyor.

Bu tabloya bakınca MCP mimarisinin büyük kısmının aslında yeni olmadığı görülüyor. API gateway, IAM, least privilege, service identity, secret management, telemetry, supply-chain security, containerization ve SAST/SCA gibi pratikler yine geçerli. Yeni olan, bunların LLM tarafından tetiklenen tool kullanımına uygulanması.

Gartner'ın remote-first yaklaşımı da bu nedenle anlamlı. Local MCP server geliştirici için son derece rahat olabilir; fakat kurumsal ölçekte inventory, patching, credential yönetimi ve audit açısından zor bir yüzey oluşturur. Bu yüzden local kullanımın tamamen yasaklanması değil, IDE entegrasyonu, local filesystem erişimi veya browser automation gibi gerçekten gerekli durumlarla sınırlandırılması öneriliyor.

Burada da protokol değil, mimari disiplin belirleyici.

## MCP'nin Kendisi Değil, MCP Etrafında Oluşan Pattern'ler Önemli

Bence Gartner çalışmasının en değerli tarafı MCP için bir "best practice" listesi vermesinden çok, ekosistemin hangi yönde olgunlaştığını göstermesi. Remote-first kullanım, gateway-centric governance, registry, composite tools, dynamic tool exposure, progressive disclosure ve task-based evaluations gibi fikirler henüz nihai standartlar değil; ortaya çıkan tasarım pattern'leri.

Bu ayrım önemli. Çünkü yeni bir protokol geldiğinde çoğu organizasyon önce protokolü benimsemeye odaklanıyor. SDK seçiliyor, server ayağa kaldırılıyor, birkaç API tool olarak expose ediliyor ve "MCP desteği" tamamlanmış kabul ediliyor. Oysa asıl öğrenme bundan sonra başlıyor.

Hangi tool'lar gerçekten kullanılıyor? Hangileri birbirine karışıyor? Hangi tool dizileri sürekli birlikte çağrılıyor? Nerede LLM gereksiz retry yapıyor? Hangi response'lar fazla token tüketiyor? Hangi akış deterministik hale getirildiğinde daha güvenilir oluyor? Hangi tool set hangi role veya conversation context'e göre dinamik olarak daraltılmalı?

Bu sorulara cevap vermeden MCP implementasyonu teknik bir checkbox olmaktan ileri gitmez.

Gartner'ın task-based evaluation vurgusu bu nedenle protokol kadar önemli. Gerçekçi prompt'larla beklenen tool seçimini, parametre doğruluğunu, task success rate'i, retry oranını, latency'yi ve token maliyetini ölçmeden tool tasarımını iyileştirdiğimizi varsaymak yalnızca sezgiye güvenmek olur. Özellikle tool şemalarında veya orkestrasyonda yapılan her değişikliğin ölçülebilir bir baseline'a karşı test edilmesi gerekiyor.

Bu bakış bizi daha geniş bir sonuca götürüyor: agentic sistemlerde mimari artık yalnızca servislerin birbirine nasıl bağlandığıyla ilgili değil, modelin o servisleri nasıl algıladığı ve nasıl kullandığıyla da ilgili.

## Asıl Değer Protokolde Değil, Sözleşmede

MCP değerli çünkü ortak bir protokol sunuyor. Bir tool katmanının farklı ajanlar, chat istemcileri ve IDE'ler tarafından yeniden kullanılabilmesini kolaylaştırıyor. Tool geliştirme ile agent geliştirmeyi birbirinden ayırıyor ve yönetişim için ortak bir yüzey oluşturuyor. Fakat bunların hiçbiri kötü tasarlanmış tool'ları iyi hale getirmiyor.

Bu nedenle MCP'yi teknolojik bir sıçramadan çok yeni bir sözleşme katmanı olarak görmek daha sağlıklı olabilir. Sözleşmenin kalitesi ise hala bizim mühendislik kararlarımıza bağlı.

İyi isimlendirilmemiş bir tool yine kötü isimlendirilmiş bir interface'tir. Belirsiz bir schema yine belirsiz bir contract'tır. Gereksiz veri döndüren bir tool yine gereksiz coupling yaratır. Yetkileri fazla geniş bir MCP server yine güvenlik riskidir. Transactional bir süreci probabilistic reasoning'e bırakmak yine yanlış abstraction seviyesidir.

MCP bunları çözmez; yalnızca görünür hale getirir.

Belki de bu yüzden MCP'nin yaygınlaşmasıyla API ve entegrasyon mimarisi daha az değil, daha fazla önem kazanacak. Çünkü artık bu interface'leri yalnızca insanlar ve deterministik yazılımlar değil, olasılıksal karar veren modeller de tüketiyor. Bir zamanlar "iyi olsa güzel olur" diye düşündüğümüz açık sözleşmeler, kesin şemalar, küçük ve anlamlı yüzeyler, gözlemlenebilirlik ve doğru güvenlik sınırları artık ajan davranışının temel girdileri haline geliyor.

Aramamız gereken sihirli parça MCP değil. Aramamız gereken şey, LLM'lerin doğasını anlayan yeni entegrasyon ve tool-design pattern'leri ile yıllardır bildiğimiz sağlam yazılım mimarisi ilkelerini doğru yerde birleştirmek.

MCP bu hikâyede önemli bir standart. Ama iyi mimarinin yerini tutan bir kestirme yol değil.

---



## Kaynak

Gartner, *Emerging Practices for MCP Servers and Tools*, Harprit Singh, 2 Aralık 2025, ID G00839452.

---

{% include share_twitter_tr.html %}

---

