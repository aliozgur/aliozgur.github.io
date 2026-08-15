---
layout: post
title: "AB Yapay Zekâ Tüzüğü ve Claude'un Metin Filigranı"
subtitle: "SynthID-Text, OpenAI'nin C2PA Yaklaşımı ve Daha Güçlü Bir Yapay Zekâ Köken Doğrulama Modeli Önerisi"
date: 2026-08-15
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - ai
  - security
  - regulation
  - watermark
  - provenance

---

Yapay zekâ tarafından üretilen içeriğin nasıl ayırt edileceği uzun süredir teknik bir tartışma konusuydu. Bir metnin diline, kelime seçimlerine veya cümle yapılarına bakarak "bunu bir yapay zekâ yazmış olabilir" diyen sınıflandırıcılar geliştirildi; görseller için metadata ve görünür filigranlar kullanıldı; kriptografik imzalar ve içerik kökenini izleyen standartlar üzerinde çalışıldı. Ancak Ağustos 2026 itibarıyla konu yalnızca araştırma laboratuvarlarının veya güvenlik ekiplerinin meselesi olmaktan çıktı. Avrupa Birliği'nin Yapay Zekâ Tüzüğü'nün (AI Act) şeffaflığa ilişkin hükümlerinin uygulanmaya başlaması, üretken yapay zekâ sağlayıcılarını doğrudan teknik önlem almaya zorluyor.

<!--end-of-excerpt-->

Bu gelişmenin en somut örneklerinden biri Anthropic'in 14 Ağustos 2026'da duyurduğu Claude metin filigranı. Anthropic, gelecekteki Claude modellerinin ürettiği metinlerde Google DeepMind tarafından geliştirilen SynthID-Text yaklaşımının bir sürümünü kullanacağını açıkladı. Şirket bunu yalnızca gönüllü bir güvenlik özelliği olarak değil, açık biçimde AB Yapay Zekâ Tüzüğü'ne uyum amacıyla yaptığı bir değişiklik olarak tanımlıyor. Bu nokta önemli; çünkü tartışma artık "AI content detector işe yarıyor mu?" sorusundan, sağlayıcı seviyesinde uygulanacak, makine tarafından okunabilir ve doğrulanabilir bir köken sinyalinin nasıl tasarlanması gerektiği sorusuna kayıyor.

> **Terminoloji notu:** Regulation (EU) 2024/1689 Türkiye'de farklı kaynaklarda "Yapay Zekâ Yasası" olarak da anılıyor. Bununla birlikte düzenlemenin hukuki türü bir *Regulation* olduğu ve Türkiye Cumhuriyeti Avrupa Birliği Başkanlığı da yayımlanan metni "(AB) 2024/1689 sayılı Tüzük" olarak tanımladığı için bu yazıda **AB Yapay Zekâ Tüzüğü** ifadesini kullanıyorum. Teknik terimlerde ise yerleşik Türkçesi yeterince açık olmayan kavramların İngilizcelerini parantez içinde koruyacağım.

## AB Yapay Zekâ Tüzüğü neden filigranı gündemin merkezine taşıdı?

AB Yapay Zekâ Tüzüğü'nün 50. maddesi, belirli yapay zekâ sistemleri için şeffaflık yükümlülüklerini düzenliyor. Özellikle Madde 50(2), sentetik ses, görsel, video veya metin üreten yapay zekâ sistemlerinin sağlayıcılarına doğrudan teknik bir yükümlülük getiriyor. Düzenlemenin İngilizce metninde, yapay zekâ sistemlerinin çıktılarının "machine-readable format" içinde işaretlenmesi ve yapay olarak üretildiğinin veya manipüle edildiğinin tespit edilebilir olması gerektiği belirtiliyor. Aynı hüküm, uygulanacak teknik çözümlerin teknik olarak mümkün olduğu ölçüde etkin (*effective*), birlikte çalışabilir (*interoperable*), dayanıklı (*robust*) ve güvenilir (*reliable*) olması gerektiğini de açıkça söylüyor.

Burada kullanılan kelimeler tesadüfi değil. Tüzük yalnızca kullanıcı arayüzüne "AI tarafından üretildi" etiketi koyulmasını istemiyor. Sağlayıcı seviyesinde, içeriğin kendisiyle birlikte yaşayabilen veya içeriğin kökeninin daha sonra teknik olarak sınanmasını mümkün kılan bir işaretleme mekanizması öngörüyor. Düzenlemenin gerekçelerinde filigranlar (*watermarks*), metadata tanımlamaları ve içeriğin kökeni ile özgünlüğünü kanıtlamaya yönelik kriptografik yöntemler açıkça olası teknikler arasında sayılıyor.

Bu yükümlülüklerin 2 Ağustos 2026 itibarıyla uygulanmaya başlamasıyla birlikte konu daha da somutlaştı. Avrupa Komisyonu'nun AI-generated Content Transparency Code of Practice çalışması da Madde 50 kapsamındaki sağlayıcı ve yapay zekâ sistemi kullanan tarafların (*deployers*) yükümlülüklerini uygulamaya dönük hale getiriyor. Kod gönüllü bir uyum aracı olsa da Madde 50'deki yükümlülükler gönüllü değil. Bu ayrım önemli; sağlayıcılar kodu imzalamamayı tercih edebilir, fakat yasal şeffaflık gerekliliklerini başka yollarla karşıladıklarını göstermek zorundalar.

Metin söz konusu olduğunda teknik problem özellikle zor. Bir JPEG dosyasına imzalı metadata ekleyebilir, bir PDF içine ek veri alanları koyabilir veya bir medya dosyasında C2PA gibi bir provenance mekanizması kullanabilirsiniz. Fakat düz metin çok kolay şekilde bağlamından kopar. Bir kullanıcı Claude'dan aldığı cevabı tarayıcıdan kopyalayıp e-postaya, Word belgesine, bir CMS editörüne veya başka bir sohbet uygulamasına yapıştırdığında dosya seviyesindeki metadata büyük ihtimalle kaybolur. Dolayısıyla metin için kullanılacak yöntem, mümkünse doğrudan metnin token seçimlerinde yaşayan ve sıradan kopyala-yapıştır işlemleriyle ortadan kalkmayan bir sinyal üretmelidir.

## Anthropic ne yaptı?

Anthropic'in çözümü tam olarak bu probleme odaklanıyor. Şirket, gelecekteki Claude modellerinin metin çıktılarında Google DeepMind'ın 2024'te yayımladığı SynthID-Text yaklaşımının bir sürümünü kullanacağını açıkladı. Buradaki "filigran" sözcüğü klasik anlamıyla düşünülmemeli. Metnin sonuna görünmez bir karakter dizisi eklenmiyor, özel Unicode karakterleri kullanılmıyor, fazladan token üretilmiyor ve kullanıcıya ait bir kimlik bilgisi metne gömülmüyor.

Mekanizma, büyük dil modellerinin token üretme biçimindeki doğal belirsizlikten yararlanıyor. Bir dil modeli her adımda olası bir sonraki token için bir olasılık dağılımı oluşturur. Bazı durumlarda tek bir doğru veya açık biçimde baskın seçenek vardır; fakat özellikle doğal dilde birçok noktada anlam ve kalite açısından birbirine yakın birden fazla aday bulunur. Örneğin bir cümlede iki eş anlamlı sözcükten hangisinin seçileceği okuyucu açısından fazla bir fark yaratmayabilir. Normal örneklemede bu seçimi belirleyen rastlantısallığın kaynağı filigranlama sırasında kontrollü hale getirilebilir.

Anthropic'in açıklamasında bu süreç, gizli bir anahtar ile önceki birkaç sözcüğün kullanılarak bir sonraki seçimdeki rastlantısallığın belirlenmesi şeklinde tarif ediliyor. Metnin içine ayrıca bir veri paketi yerleştirilmiyor; bunun yerine token seçimlerinin bütünü, yalnızca anahtarı bilen bir doğrulayıcının istatistiksel olarak yakalayabileceği bir örüntü oluşturuyor. Dolayısıyla filigran, tek bir karakterde veya belirli bir kelimede değil, metin boyunca biriken token seçimlerinde bulunuyor.

Bunu kavramsal olarak aşağıdaki gibi düşünebiliriz:

```text
önceki tokenlar + gizli watermark anahtarı
                    │
                    ▼
              PRF / keyed hash
                    │
                    ▼
          pseudo-random seçim sinyali
                    │
                    ▼
        modelin token olasılık dağılımı
                    │
                    ▼
              seçilen token
```

Doğrulama tarafında ise aynı anahtar kullanılarak metindeki token geçişleri tekrar değerlendirilir. Amaç "bu metin yapay zekâ gibi mi yazılmış?" sorusuna cevap vermek değildir. Sorulan soru çok daha spesifiktir: "Bu token dizisi, belirli bir gizli anahtar kullanılarak yapılan seçimlerle istatistiksel olarak ne kadar uyumlu?" Anthropic'in yakında sunmayı planladığı watermark detection API'sinin temelinde de bu ayrım bulunuyor.

Bu özellik, klasik AI detector araçlarından önemli ölçüde farklıdır. Geleneksel dedektörler cümle yapısı, kelime sıklığı, perplexity veya belirli modellerin yazım alışkanlıklarına benzeyen yüzeysel sinyaller üzerinden tahmin yürütür. Bu nedenle hem insan metnini yanlışlıkla AI üretimi olarak sınıflandırabilirler hem de yeniden yazılmış AI metnini kaçırabilirler. Anahtarlı bir watermark sistemi ise modelin üretim sürecine dışarıdan bakmaya çalışmaz; üretim sürecinin içine kontrollü bir istatistiksel sinyal yerleştirir.

## Güçlü tarafı kadar sınırları da önemli

Anthropic'in yaklaşımını değerlendirirken "filigran varsa AI tarafından yazıldığı ispatlanmıştır" gibi ikili bir sonuca gitmemek gerekiyor. Bu tür sistemler kriptografik bir dosya imzası değildir. Sonuç, doğası gereği istatistikseldir ve metin uzadıkça güven düzeyi yükselir. Kısa metinlerde yeterli örnek oluşmayabilir; çok olgusal pasajlarda modelin seçebileceği alternatif token sayısı azaldığı için filigran sinyali seyrekleşebilir. Kod üretiminde de benzer bir problem vardır, çünkü sözdizimi ve program davranışı çoğu noktada modelin seçim özgürlüğünü ciddi biçimde sınırlar.

Aynı nedenle düzeltme veya proof-reading senaryolarında güçlü bir filigran beklemek doğru değildir. Model, insan tarafından yazılmış uzun bir metinde yalnızca birkaç noktalama veya gramer hatasını düzeltiyorsa kendi seçtiği token sayısı azdır. Buna karşılık tamamen Claude tarafından yapılan bir çeviride hemen her token model tarafından seçildiği için filigranın taşınabileceği alan çok daha geniştir.

Bir diğer temel sınırlama yeniden yazımdır. Hafif düzenleme watermark sinyalinin bir bölümünü koruyabilir; ancak metin tamamen yeniden ifade edildiğinde sinyal giderek kaybolur. Bu davranış klasik bir dijital imzadan tamamen farklıdır. Kriptografik imzada tek bir byte bile değiştiğinde doğrulama başarısız olur. İstatistiksel metin filigranında ise "geçerli/geçersiz" şeklinde keskin bir sınır yerine, metin boyunca biriken ve düzenlemelerle zayıflayan bir güven skoru vardır.

Bu nedenle filigran sonucunun "kanıt" değil, güçlü veya zayıf bir **köken göstergesi** (*provenance signal*) olarak değerlendirilmesi daha doğru olur. Anthropic de bunu açıkça sınırlandırıyor: sistem, bir metnin belirli bir noktada Claude tarafından üretilmiş veya önemli ölçüde işlenmiş olma olasılığı hakkında bilgi verebilir; fakat hukuki anlamda yazarlığı, mülkiyeti veya belirli bir kullanıcının kimliğini belirlemez.

## OpenAI aynı probleme farklı bir katmandan yaklaşıyor

Anthropic'in duyurusu özellikle **metin watermarking** açısından dikkat çekici olsa da, AB Yapay Zekâ Tüzüğü'ne uyum ve içerik provenance altyapısı konusunda hareket eden tek büyük sağlayıcı Anthropic değil. OpenAI de 2026 boyunca bu alandaki çalışmalarını belirgin biçimde genişletti ve AB'nin AI-generated content transparency yaklaşımını desteklediğini açıkladı. Ancak OpenAI'nin bugün kamuya açıkladığı teknik mimari, Claude'un metin watermark'ından farklı bir ağırlık merkezine sahip: tek bir sinyale güvenmek yerine **C2PA Content Credentials, SynthID watermark ve doğrulama araçlarını birlikte kullanan çok katmanlı bir provenance modeli**.

OpenAI'nin görsel üretim sistemlerinde ChatGPT, Codex ve API aracılığıyla oluşturulan desteklenen görseller hem **C2PA metadata** hem de **SynthID watermark** taşıyor. C2PA, içeriğe üretici ve işlem geçmişi hakkında daha zengin, kriptografik olarak doğrulanabilir metadata eklerken; SynthID sinyali doğrudan medyanın içine yerleştirildiği için metadata'nın ekran görüntüsü alma, yeniden kaydetme veya farklı platformlara taşıma sırasında kaybolduğu bazı durumlarda yaşamaya devam edebiliyor. OpenAI bu iki yöntemi birbirinin alternatifi değil, birbirini tamamlayan provenance sinyalleri olarak tanımlıyor.

Şirket 31 Temmuz 2026 güncellemesiyle bu yaklaşımı desteklenen **ses içeriklerine** de genişlettiğini ve OpenAI araçlarıyla oluşturulan belirli ses dosyalarına SynthID watermark eklediğini açıkladı. Aynı güncellemede kamuya açık doğrulama aracının ses dosyalarını da desteklemeye başladığı ve geliştiriciler ile kurumların provenance kontrollerini kendi iş akışlarına entegre edebilmesi için API erişimi sunulduğu belirtildi. Bu, sağlayıcı seviyesinde watermark üretmek kadar önemli ikinci bir problemi, yani **watermark'ın daha sonra nasıl doğrulanacağı** problemini doğrudan ele alıyor.

OpenAI'nin kamuya açık doğrulama yaklaşımı kavramsal olarak şöyle özetlenebilir:

```text
             OpenAI tarafından üretilen içerik
                         │
             ┌───────────┴───────────┐
             │                       │
       C2PA Content              SynthID
        Credentials              watermark
             │                       │
             └───────────┬───────────┘
                         │
                         ▼
                  verification tool
                         │
                         ▼
                provenance sonucu
```

Bu mimarinin güçlü yanı, provenance kavramını tek bir watermark algoritmasına indirgememesi. Metadata daha fazla bağlam taşıyabilir fakat kolayca ayrıştırılabilir; watermark daha dayanıklı olabilir fakat genellikle daha az bilgi taşır. İki sinyalin birlikte değerlendirilmesi, özellikle görsel ve ses gibi dosya tabanlı içeriklerde daha güçlü bir sonuç verir. OpenAI'nin C2PA Steering Committee içinde yer alması ve provenance sinyallerinin farklı araçlar tarafından tanınabilmesini açık bir hedef olarak belirtmesi de bu yaklaşımın yalnızca kendi ürünlerine özgü bir özellik olarak düşünülmediğini gösteriyor.

Bununla birlikte Anthropic ile OpenAI arasındaki önemli fark bugün için **metin** tarafında ortaya çıkıyor. Anthropic, gelecekteki Claude modellerinin doğal dil çıktılarında SynthID-Text tabanlı, generation-time statistical watermark kullanacağını açıkça ilan etmiş durumda. OpenAI ise Ağustos 2026 itibarıyla görsel ve ses için SynthID ile C2PA tabanlı provenance mekanizmalarını ayrıntılı biçimde açıklarken, GPT tarafından üretilen düz metinlerde Claude'daki modele benzer anahtarlı istatistiksel bir text watermark kullandığını kamuya açık kaynaklarında aynı açıklıkta belirtmiş değil. Bu nedenle iki sağlayıcının mevcut yaklaşımını aynı şeymiş gibi sunmak doğru olmaz.

Aslında bu fark, sektörün iki farklı yönden aynı probleme yaklaştığını gösteriyor. Anthropic bize düz metnin kendi token seçimleri içine gömülmüş dayanıklı bir sinyalin nasıl oluşturulabileceğini gösterirken, OpenAI bize farklı provenance sinyallerinin **ortak doğrulama araçları ve açık standartlarla birleştirildiği çok katmanlı bir modelin** nasıl kurulabileceğini gösteriyor. Benim önerdiğim mimari ise bu iki yönü bir sonraki seviyede bir araya getirmeyi amaçlıyor: metin için provider/model seviyesinde anahtarlı statistical watermark, dosya tabanlı içerik için C2PA benzeri kriptografik provenance ve bunların üzerinde sağlayıcılar arası çalışan ortak bir registry ile standart verification protokolü.

## Bence eksik kalan nokta: sağlayıcılar arası doğrulanabilirlik

Anthropic'in yaklaşımında asıl eksik gördüğüm taraf watermark algoritmasının kendisi değil, doğrulama mimarisinin sağlayıcıya özgü kalması. Claude'un anahtarına sahip bir doğrulayıcı "Bu metinde Claude'un filigranı var mı?" sorusuna cevap verebilir. Fakat aynı metin için OpenAI, Google, Mistral veya başka bir sağlayıcının farklı algoritma ve anahtarları söz konusu olduğunda ortak bir doğrulama katmanı bulunmazsa internet ölçeğinde parçalı bir yapı ortaya çıkar.

Teorik olarak her sağlayıcı ayrı bir API yayınlayabilir:

```text
                         METİN
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
       Anthropic API   OpenAI API    Google API
             │             │             │
             ▼             ▼             ▼
          skor A          skor B        skor C
```

Bu yaklaşım çalışabilir, fakat uzun vadede "interoperable" kelimesinin ruhuna çok uygun değildir. Bir üniversitenin, haber kuruluşunun, denetim otoritesinin veya kurumsal DLP sisteminin her yeni model sağlayıcısı için ayrı watermark entegrasyonu geliştirmesi ölçeklenebilir bir çözüm değildir. Daha güçlü bir mimari, watermark'ı yalnızca modelin içine yerleştirmekle yetinmeyip sağlayıcı, model ailesi ve watermark sürümünü standart bir güven zincirine bağlamalıdır.

## Önerim: anahtarlı, katmanlı ve kayıt sistemiyle desteklenen bir AI provenance altyapısı

Benim tercih edeceğim tasarım, Anthropic/SynthID yaklaşımındaki istatistiksel watermark fikrini korur; fakat bunun üzerine sağlayıcı ve model seviyesinde standartlaştırılmış bir anahtar hiyerarşisi ile doğrulama protokolü ekler. Buradaki temel fikir, CRC benzeri bir "devam eden durum" mantığını kriptografik olarak güvenli bir primitive ile birleştirmektir. CRC ifadesini burada sezgisel bir benzetme olarak kullanıyorum; saldırgana karşı güvenlik gereken gerçek bir sistemde CRC yerine HMAC, keyed hash veya bir PRF (*pseudorandom function*) kullanılmalıdır.

Kavramsal olarak her token üretiminde geçmiş bağlam ve sağlayıcıya ait gizli anahtar üzerinden bir durum üretilebilir:

```text
S₀ = PRF(Kprovider, modelId || watermarkVersion)

Sᵢ = PRF(
    Kprovider,
    Sᵢ₋₁ || contextᵢ || counterᵢ
)

tokenᵢ = Sample(Pᵢ, Sᵢ)
```

Burada 'Pᵢ', modelin normal token olasılık dağılımını temsil eder. 'Sᵢ' ise modeli anlamsız veya düşük olasılıklı bir tokena zorlamak için değil, kalite açısından kabul edilebilir adaylar arasındaki seçimin rastlantısallığını kontrollü hale getirmek için kullanılır. Böylece metnin token dizisi boyunca anahtara bağlı istatistiksel bir iz oluşur. Doğrulayıcı aynı bağlamlarda beklenen sinyali hesaplayıp gerçek token seçimleriyle karşılaştırarak bir skor üretir.

Ancak önerinin asıl farkı anahtarın kendisinden çok **anahtar hiyerarşisi ve kayıt sistemi** olur. Tek bir global watermark anahtarının kullanılması yerine sağlayıcı, model ailesi ve watermark sürümü için türetilmiş anahtarlar kullanılabilir:

```text
AI Watermark Root / Registry
│
├── Anthropic
│   ├── Claude / WM-v1
│   └── Claude / WM-v2
│
├── OpenAI
│   ├── Model Family A / WM-v1
│   └── Model Family B / WM-v2
│
├── Google
│   └── Gemini / WM-vN
│
└── Mistral
    └── Model Family / WM-vN
```

Bu yapı, filigranın içine açık biçimde "Anthropic" veya "Claude" yazmayı gerektirmez. Hatta bunu yapmak çoğu durumda istenmez. Sağlayıcı ve model ailesi, hangi doğrulama profilinin istatistiksel olarak eşleştiğinin belirlenmesi üzerinden anlaşılabilir. Gizli anahtarlar kamuya açılmadan, kayıt sistemi hangi sağlayıcının hangi watermark sürümünü kullandığını ve hangi doğrulama mekanizmasının geçerli olduğunu ilan edebilir.

Bir doğrulama sonucu örneğin şu yapıya sahip olabilir:

```json
{
  "aiInvolvement": "high",
  "provider": "Anthropic",
  "modelFamily": "Claude",
  "watermarkScheme": "WM-v2",
  "confidence": 0.982,
  "evidenceLength": 1847
}
```

Buradaki 'confidence' alanı özellikle önemlidir. Sistem kesin biçimde 'AI=true' dememelidir. Kısa örnekler, yeniden yazım, çok düşük entropili metinler, kod ve farklı modellerden gelen parçaların birleşmesi gibi senaryolarda sonuç olasılıksal kalır. API ve kullanıcı arayüzleri de bu gerçeği saklamamalı; "tespit edildi" gibi kesin bir dil yerine ölçülen güven seviyesini ve kullanılan kanıt miktarını açıkça sunmalıdır.

## Gizli anahtarları merkezi olarak dağıtmak zorunda değiliz

Böyle bir sistem anlatıldığında ilk akla gelen sorun, bütün sağlayıcıların gizli watermark anahtarlarını ortak bir kuruma vermek zorunda kalacağı düşüncesidir. Bu gerekli değil, hatta güvenlik açısından doğru da olmayabilir. Standardizasyonun anahtar paylaşımı değil, **doğrulama protokolü** seviyesinde yapılması daha sağlıklıdır.

Sağlayıcı kendi gizli anahtarını HSM veya benzeri güvenli altyapıda tutabilir ve standart bir verification endpoint sağlayabilir. Alternatif olarak güvenilir üçüncü taraf doğrulayıcılar için sınırlı yetkili anahtarlar, threshold cryptography veya başka kontrollü doğrulama modelleri düşünülebilir. Daha ileri tasarımlarda watermark doğrulamasını kamuya açık anahtar materyali ile mümkün kılan asimetrik yapılar araştırılabilir; ancak günümüzde yaygın token watermark tekniklerinin çoğu pratikte gizli anahtarlı istatistiksel doğrulamaya dayanıyor.

Dolayısıyla hedef şu olmamalıdır:

```text
herkes bütün gizli watermark anahtarlarını bilsin
```

Bunun yerine şu model daha anlamlıdır:

```text
standart kayıt sistemi
        │
        ├── sağlayıcı kimliği
        ├── watermark şeması/sürümü
        ├── doğrulama endpoint'i veya yöntemi
        ├── anahtar rotasyon bilgisi
        └── güven zinciri
```

Böyle bir kayıt sistemi DNSSEC, Web PKI veya certificate transparency mantığının birebir kopyası olmak zorunda değildir; fakat benzer bir kurumsal problem çözer. Bir doğrulayıcı, karşılaştığı içerik için hangi sağlayıcıların hangi scheme sürümlerinin geçerli olduğunu keşfedebilir ve sonucu standart bir formatta raporlayabilir.

## Watermark tek başına yeterli değil: hibrit provenance modeli

Metin için istatistiksel watermark önemli bir araçtır, ancak tüm içerik türleri için tek çözüm haline getirilmemelidir. Anthropic'in duyurusunda bence doğru olan ikinci karar da burada ortaya çıkıyor. Şirket, desteklenen PNG, JPG ve SVG gibi dosyalarda C2PA Content Credentials kullanacağını; yani dosyanın metadata alanına kriptografik olarak imzalanmış bir provenance kaydı ekleyeceğini belirtiyor.

Bu iki yöntem farklı güvenlik özelliklerine sahiptir. C2PA benzeri bir kriptografik provenance mekanizması, dosyanın hangi araçla oluşturulduğu veya işlendiği ve sonrasında değişip değişmediği konusunda güçlü bir doğrulama zinciri sağlayabilir. Buna karşılık metadata dosyadan ayrıldığında sinyal de kaybolabilir. İstatistiksel metin watermark'ı ise kopyala-yapıştır sonrasında yaşayabilir; fakat yoğun yeniden yazımla zayıflar ve her zaman olasılıksal kalır.

Bu nedenle daha güçlü yaklaşım bunları rakip teknolojiler olarak değil, **katmanlı provenance sinyalleri** olarak görmektir:

```text
                AI TARAFINDAN ÜRETİLEN İÇERİK
                           │
             ┌─────────────┴─────────────┐
             │                           │
          Düz metin                 Dosya/medya
             │                           │
   İstatistiksel watermark       C2PA / imzalı metadata
             │                           │
             └─────────────┬─────────────┘
                           │
                 Ortak provenance registry
                           │
                           ▼
                 Standart doğrulama sonucu
```

Buna platform seviyesindeki kullanıcıya görünür etiketleme de eklenebilir. Çünkü teknik provenance sinyali ile insana yönelik açıklama aynı şey değildir. Madde 50 de sağlayıcıların teknik işaretleme yükümlülüğü ile belirli durumlarda yapay zekâ sistemini kullanan tarafların içeriğin yapay olarak üretildiğini açıklama yükümlülüğünü birbirinden ayırıyor. Teknik watermark altyapısı denetim ve otomasyon için, görünür disclosure ise içeriği tüketen insan için farklı işlevler görür.

## AB düzenlemesindeki "interoperable" sözcüğü neden kritik?

Madde 50'de benim en önemli bulduğum kelimelerden biri *interoperable*, yani birlikte çalışabilir. Eğer her sağlayıcı yalnızca kendi kapalı watermark algoritmasını, kendi API'sini ve kendi sonuç formatını oluşturursa yasal yükümlülüğün asgari bir yorumu karşılanabilir; fakat internet ölçeğinde güvenilir provenance altyapısı kurulmuş olmaz. Asıl değer, farklı sağlayıcıların ürettiği sinyallerin ortak araçlarla sorgulanabilmesi ve sonuçların aynı semantik model içinde yorumlanabilmesidir.

Bu nedenle önümüzdeki dönemde asıl standardizasyon tartışmasının watermark algoritmasının matematiğinden çok doğrulama ekosistemine kayacağını düşünüyorum. Hangi sağlayıcı hangi scheme'i kullanıyor? Anahtar rotasyonu nasıl ilan ediliyor? Bir watermark scheme'i kırıldığında veya yanlış pozitif oranı kabul edilemez hale geldiğinde nasıl geri çekiliyor? Bir metin birden fazla model tarafından sırayla düzenlendiyse birden fazla provenance sinyali raporlanabilir mi? Bir haber kuruluşu veya üniversite, sağlayıcıların ticari API'lerine bağımlı olmadan bağımsız doğrulama yapabilir mi? Bunlar yalnızca teknik ayrıntılar değil; AI-generated content için kurulacak güven altyapısının temel tasarım soruları.

Benzer bir problem yıllar önce HTTPS tarafında da yaşandı. Kriptografi tek başına yeterli değildi; sertifika otoriteleri, root store'lar, sertifika zincirleri, iptal mekanizmaları ve daha sonra Certificate Transparency gibi denetlenebilir ek yapılar gerekti. Yapay zekâ provenance dünyasında birebir aynı mimarinin kullanılacağını söylemek için erken, fakat problem sınıfı şaşırtıcı ölçüde benziyor: Bir içeriğin arkasındaki üretici hakkında, birbirinden bağımsız tarafların doğrulayabileceği güvenilir bir iddia oluşturmak.

## "Bu metni AI yazdı" yerine "Bu sağlayıcının üretime katıldığına dair ne kadar kanıt var?"

Bütün bu teknolojinin doğru kullanılabilmesi için dilimizi de değiştirmemiz gerekiyor. Watermark tespitini bir intihal dedektörü veya mahkeme seviyesinde yazarlık ispatı gibi ele almak ciddi hatalara yol açabilir. Bir insan Claude'dan bir taslak alıp metni yoğun biçimde düzenleyebilir; iki farklı model aynı metin üzerinde çalışabilir; bir model yalnızca çeviri yapmış olabilir; bir başka model sadece başlık önermiş olabilir. Bunların hepsini tek bir "AI-generated = true/false" alanına indirgemek bilgi kaybıdır.

Daha doğru bir model, **AI involvement**, yani yapay zekânın içeriğin üretim sürecine katılımına dair ölçülebilir kanıtı raporlamaktır. Anthropic'in kendi açıklamasında da watermark'ın "Claude bunu kesin yazdı" demediği, Claude'un metnin oluşturulmasına bir aşamada dahil olma olasılığını ölçtüğü özellikle vurgulanıyor. Bu yaklaşım hem teknik gerçekliğe daha yakın hem de hukuki ve etik açıdan daha güvenli.

Gelecekte provenance sonuçlarının yalnızca tek bir skor yerine bir kanıt kümesi üretmesi daha anlamlı olabilir:

```text
Provider watermark      : Anthropic / yüksek güven
C2PA credential         : yok
Visible disclosure      : yok
Metadata provenance     : bilinmiyor
Human editorial review  : beyan edilmiş
Text rewrite indicators : yüksek
```

Böylece tek bir dedektör kararına gereğinden fazla anlam yüklemek yerine farklı provenance kanalları birlikte değerlendirilebilir.

## Anthropic'in duyurusu neden önemli bir dönüm noktası?

Claude'un metin watermark'ı teknik olarak sıfırdan ortaya çıkmış bir fikir değil. SynthID-Text ve ondan önceki akademik çalışmalar uzun süredir token sampling sırasında watermark oluşturulabileceğini gösteriyordu. Buna rağmen Anthropic'in Ağustos 2026 duyurusu farklı bir nedenle önemli: büyük bir model sağlayıcısı bu mekanizmayı doğrudan yasal uyum, özellikle de AB Yapay Zekâ Tüzüğü'nün Madde 50 yükümlülükleriyle ilişkilendiriyor ve bunu global olarak devreye alacağını söylüyor.

Bu, sağlayıcı seviyesinde provenance sinyallerinin önümüzdeki birkaç yıl içinde istisna olmaktan çıkıp altyapının standart bir parçasına dönüşebileceğini gösteriyor. Model API'lerinde bugün 'temperature', 'top_p', token usage veya safety metadata ne kadar doğal görünüyorsa, yakın gelecekte 'watermarkScheme', 'provenance' veya 'verification' kavramlarının da benzer şekilde standart hale gelmesi şaşırtıcı olmayacaktır.

Fakat güçlü bir ekosistem için yalnızca her model sağlayıcısının kendi filigranını eklemesi yeterli değil. Benim önerdiğim daha ileri model; token üretimi sırasında anahtarlı istatistiksel watermark, sağlayıcı ve model ailesi seviyesinde versiyonlanmış anahtar hiyerarşisi, sağlayıcılar arası ortak bir provenance registry, standart verification API/protokolü ve dosya tabanlı içerikte C2PA gibi kriptografik provenance teknolojilerinin birlikte kullanılmasına dayanıyor.

AB Yapay Zekâ Tüzüğü'nün kullandığı "etkin, birlikte çalışabilir, dayanıklı ve güvenilir" teknik çözüm ifadesini gerçek anlamıyla ele alacaksak, uzun vadede gidilmesi gereken yönün de bu olduğunu düşünüyorum. Watermark'ın kendisi yalnızca ilk katman. Asıl hedef, yapay zekâ tarafından üretilen veya yapay zekânın ciddi biçimde katkı sağladığı içeriğin kökenini internet ölçeğinde, sağlayıcıdan bağımsız araçlarla ve olasılıksal sonuçların sınırlarını saklamadan doğrulayabileceğimiz ortak bir **AI provenance infrastructure** oluşturmak olmalı.

Bu gerçekleşirse "AI detector" kavramından daha anlamlı bir yere geçmiş oluruz. Bir metnin üslubuna bakıp tahmin yürüten sistemlerden, üretim anında oluşturulmuş doğrulanabilir sinyallere; tek sağlayıcının kapalı API'sinden, birlikte çalışabilir bir güven ekosistemine; "AI mi, insan mı?" şeklindeki aşırı basit ikili sınıflandırmadan, içeriğin üretim zincirine ilişkin ölçülebilir provenance kanıtlarına doğru ilerleriz. AB Yapay Zekâ Tüzüğü'nün regülasyon tarafında açtığı kapı ve Anthropic'in Claude üzerinde attığı somut adım, bu dönüşümün artık teorik bir tartışma olmadığını gösteriyor.

---

## Kaynaklar

1. **Regulation (EU) 2024/1689 — Artificial Intelligence Act**, EUR-Lex, özellikle Madde 50 ve gerekçe 133–135.  
   https://eur-lex.europa.eu/eli/reg/2024/1689/oj

2. **European Commission — Code of Practice on Transparency of AI-generated Content.**  
   https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content

3. **European Commission — Quick Facts: Transparency rules for AI systems.**  
   https://digital-strategy.ec.europa.eu/en/factpages/quick-facts-transparency-rules-ai-systems

4. **Anthropic — How Claude's text watermark works**, 14 Ağustos 2026.  
   https://www.anthropic.com/news/claude-text-watermark

5. **Türkiye Cumhuriyeti Avrupa Birliği Başkanlığı — AB Yapay Zeka Yasası Yayımlandı.** Kaynak, düzenlemeyi hukuki türü itibarıyla "(AB) 2024/1689 sayılı Tüzük" olarak tanımlamaktadır.  
   https://www.ab.gov.tr/ab-yapay-zeka-yasasi-yayimlandi_53836.html

6. **Kişisel Verileri Koruma Kurumu — Yapay Zekâ Teknolojilerine Akademik Bakış.** Türkiye'deki güncel hukuk literatüründe "AB Yapay Zekâ Tüzüğü" kullanımına örnek.  
   https://www.kvkk.gov.tr/Icerik/8297/Yapay-Zeka-Teknolojilerine-Akademik-Bakis-Kitabi-

7. **Google DeepMind / Nature — SynthID-Text araştırması**, watermarking yaklaşımının akademik temeli.  
   https://www.nature.com/articles/s41586-024-08025-4

8. **OpenAI — Advancing content provenance for a safer, more transparent AI ecosystem**, 19 Mayıs 2026; 31 Temmuz 2026 güncellemesi. C2PA, SynthID, public verification tool ve verification API yaklaşımı.  
   https://openai.com/index/advancing-content-provenance/

9. **OpenAI Help Center — C2PA and SynthID in OpenAI-generated images.** ChatGPT, Codex ve API tarafından oluşturulan desteklenen görsellerde C2PA metadata ve SynthID watermark kullanımı ile doğrulama yaklaşımı.  
   https://help.openai.com/en/articles/8912793

10. **OpenAI — Advancing responsible AI across Europe**, 2026. AB Yapay Zekâ Tüzüğü bağlamında provenance, C2PA, SynthID ve verification araçlarına ilişkin yaklaşım.  
   https://openai.com/index/advancing-responsible-ai-across-europe/

***
{% include share_twitter_tr.html %}
