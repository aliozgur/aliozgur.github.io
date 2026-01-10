---
layout: post
title: "MES/MOM için Agent Ready Mimari"
subtitle: "Kontrat, Doğrulama ve Yönetişim" 
date:  2026-01-10
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - programming
  - development
  - agents
  - digital transformation
  - AI
---

Özellikle 2025 yılının ortasından sonra yeni teknoloji ve yaklaşımları kullanarak araçlar ve servisler sunan AI ekosistemindeki teknoloji şirketleri **agentic sistemleri** dijital dönüşüm odaklı süreç otomasyonuun yeni zirvesi olarak sunmaya başladılar. Bu yeni (ama eski) yaklaşımda agentic sisteme bir hedef veriyorsunuz, sistem plan yapıyor, plana göre araçları çağırıyor, iş adımlarının çıktılarını birleştiriyor ve işi tamamlıyor. Bu yaklaşım demolarda oldukça etkileyici görünüyor, çünkü demo ortamı genellikle agentın ihtiyaç duyduğu şekilde kurgulanıp ideal koşullara göre davranıyor. Tool API sözleşmeleri net, hata durumları sınırlı, veri tutarlı, başarı kriterleri ölçülebilir ve aynı isteğin tekrar edilmesi çoğu zaman büyük bir probleme dönüşmüyor.

![Cover]({{ root.url }}/media/mes_mom_agent_ready.png)


<!--end-of-excerpt-->

MES ve MOM gibi sistemlerin kullanıldığı üretim ortamlarında ise durum biraz daha kaotik ve farklıdır. 
Sistemler heterojen, veri kaynakları parçalı, süreçler insanla iç içe, hatalar semantik değil ve yan etki (side effect) maliyeti yüksektir. 
Bu yüzden agentic yaklaşımın başarısı, agentın ne kadar zeki olduğundan çok, agentın çalışacağı ekosistemin, yani MES/MOM/ERP gibi sistemlerin, ne kadar agent ready olduğuna bağlıdır.

Bu yazının ana fikri şudur;
> Agent tabanlı orkestrasyon dijital dönüşümün bir parçası olarak üretim yapan işletmelerde değer üretebilir. Ancak, bunun için konvansiyonel MES/MOM/ERP sistemlerimizde kontrat, doğrulama, yönetişim ve gözlemlenebilirlik katmanlarını agentın ihtiyaçlarına uygun şekilde güçlendirmek gerekir.

## Kavramlar
MES ve MOM özelinde agentic sistemlerin başarılı bir şekilde kullanılabilmesi için öncelikle bazı temel kavramların net olarak anlaşılması gerekir.

### Agentic Sistemler Nedir?

**Agentic sistemler**, belirli bir hedefe ulaşmak için sadece tek bir komutu çalıştırmakla kalmayıp; **plan yapan, adım adım ilerleyen, gerektiğinde karar veren ve aksiyon alan** yapay zeka destekli yazılım sistemleridir.  
Klasik "prompt -> cevap" yaklaşımından farklı olarak agentic sistemler:

- Hedefi parçalara böler (**planlama**)
- Gerekli bilgiyi kendisi toplar (**araştırma / veri çekme**)
- Araç kullanır (**API çağrısı, dosya işleme, e-posta yazma, SQL çalıştırma** vb.)
- Sonuçları kontrol eder (**doğrulama**)
- Gerekirse tekrar dener (**geri besleme / iterasyon**)

Yani bir agent, sadece "yanıt üreten" değil, **iş yapan** bir yapıdır.

---

### Agentic Süreç Otomasyonu Nedir?

**Agentic süreç otomasyonu**, kurum içindeki iş akışlarının bir kısmını veya tamamını agentic sistemlere devrederek, süreçlerin **uçtan uca daha az insan müdahalesiyle** ilerlemesini sağlamaktır.

Burada amaç, sadece "otomasyon değil; **duruma göre karar verebilen, alternatif yol seçebilen ve gerektiğinde insanı devreye sokabilen** akıllı otomasyondur.

Örnek olarak agentic süreç otomasyonu şunları yapabilir:

- Bir müşteri talebini okuyup sınıflandırmak
- Eksik bilgi varsa ilgili kişiye soru sormak
- CRM / ERP / MES içinde gerekli kayıtları açmak
- İlgili ekiplere görev atamak
- Süreç boyunca özet raporlar oluşturmak
- Sonuçları doğrulayıp kapatma adımını tamamlamak

Kısaca: **Agentic otomasyon = "workflow + akıl + araç kullanımı + doğrulama + gerektiğinde tekrar deneme"**.

### Agentic Sistemler Özelinde “Semantik Yorum” Nedir?

Agentic sistemlerde **semantik yorum**, kullanıcının verdiği talebi (prompt/komut) kelimesi kelimesine bir yönerge olarak değil;  
**arka plandaki niyeti, hedef durumu ve başarı kriterlerini** çıkararak yorumlama becerisidir.

Yani agent şu soruyu sorar:

> "Kullanıcı benden *tam olarak hangi sonucu* istiyor?""
> "Bu isteğin *anlamı* nedir ve hangi koşul sağlanınca tamam sayılır?""

Bu yaklaşım, agentic sistemleri klasik otomasyondan ayıran temel farklardan biridir:  
Klasik sistem “komutu çalıştırır”; agent ise **anlamı anlar, hedef durumu tanımlar ve ona ulaşmak için plan üretir**.

Semantik yorum sayesinde agent:

- İsteğin **niyetini** çıkarır (intent extraction)
- Belirsizlikleri fark eder ve gerekirse **netleştirici soru** sorar
- “Adım listesi” değil, **hedef durum (desired state)** tanımlar
- Araç/aksiyon seçiminde **en uygun yolu** belirler
- Sonucu “çıktı ürettim” diye değil, **başarı kriteri sağlandı mı** diye değerlendirir
- Gerekirse tekrar dener (iterasyon), çünkü amaç **anlamı gerçekleştirmektir**

**Örnekle Semantik Yorum**

Kullanıcı: **"Bu raporu müşteriye gönder."**

- **Syntactic (biçimsel) yaklaşım:**  
  "E-posta gönder" aksiyonunu çalıştırmak.

- **Semantik yorum (agentic yaklaşım):**  
  "Hangi müşteri?"", "hangi raporun son versiyonu?"", "hangi format?"",  
  "gönderim başarılı mı?"", "ek doğru mu?"", "cc/bcc var mı?"" gibi sorularla  
  hedefi netleştirip **gerçek anlamı tamamlamak**.

Burada agentın hedefi "e-posta atmak" değil;  
**"doğru raporun doğru kişiye doğru biçimde ulaştırılmış olması"**dır.


### Idempotency Nedir?

**Idempotency**, bir işlemin **aynı girdilerle birden fazla kez çalıştırıldığında** sonucu **ilk çalıştırmayla aynı kalması** durumudur.  
Yani işlemi tekrar etmek **sistemin durumunu değiştirmez** veya **ek bir yan etki üretmez**.

- **İdempotent işlem:** Aynı isteği 1 kere de göndersen, 10 kere de göndersen **sonuç değişmez**.

Idempotency özellikle **dağıtık sistemlerde**, **retry (yeniden deneme)** mekanizmalarında ve **ağ hatalarında** kritiktir.  
Bir istek timeout olduğunda tekrar gönderildiğinde sistemin “çifte işlem” yapmasını engeller (ör. iki kez ödeme almak gibi).

**Örnek (API Düzeyinde)**
- `PUT /users/123` -> kullanıcı kaydını güncellemek genelde **idempotenttir**  
  (aynı güncellemeyi tekrar yapmak sonucu değiştirmez)
- `POST /orders` -> yeni sipariş oluşturmak genelde **idempotent değildir**  
  (aynı isteği tekrar göndermek iki ayrı sipariş yaratabilir)

**Matematiksel Olarak Formal Gösterim**
Bir fonksiyon **f** için:

`f(f(x)) = f(x)` ise, **f idempotenttir**.


## Agentic sistemlerin ideal koşul varsayımları

Agentic sistemler aşağıda ele aldığımız temel 3 varsayımın karşılandığı durumlarda oldukça etkin sonuçlar üretebilir. 

Birincisi, tool ve API davranışlarının deterministik (aynı girdi aynı çıktı) ve güvenilir olduğu varsayılır. Yanıt formatları tutarlı, hata mesajları anlamlı, timeout nadirdir ve yeniden deneme mekanizmaları sayesinde geçici sistem hataları çözülebilir.

İkincisi, agentın çalıştığı ortam (environment) ideal koşullara sahiptir. Süreç adımları birbirini bozmadan çalışır, paralel işler çakışmaz, idempotency vardır, transaction sınırları net ve yan etki yönetimi öngörülebilirdir.

Üçüncüsü, asıl işlemi yapan sistemler başarı durumlarını doğru şekilde raporlar. HTTP 200 veya bir success mesajı, tetiklenen iş süreci açısından tamamlanmış bir duruma karşılık gelir.

MES/MOM dünyasında bu varsayımların çoğu genelde sürecin ilerleyen aşamalarında anlamlandırılması oldukça zor sonuçları tetikleyebilir. Bu da agentın yanlış güven üretmesine neden olur. Agent yanlış çalışırken bile ikna edici bir çıktı üretebilir. MES/MOM/ERP gibi klasik sistemler ya çalışır ya da hata üretip çalışmasını sonlandırır. Agentic sistem ise hatalı bir sonuca ulaşsa bile bunu tutarlı bir açıklama ile destekleyebilir. Bu nedenle doğrulama ve kontrat tasarımı agentic sistemlerde öncelikli olarak ele alınması gereken konulardır.

## MES/MOM dünyasında temel çelişki

Agentic sistemler belirsizlikle ve semantik yorumla çalışır. Konvansiyonel MES/MOM sistemleri ise deterministik kontratlarla, durum makineleriyle (state machine) ve iş kurallarıyla çalışır. Bu iki dünyanın başarı tanımları da birbirinden farklıdır.

Agent bir çağrıdan `HTTP 200` aldı diye bir iş emrinin gerçek anlamda başlatıldığını yorumlayabilir. Oysa üretim ortamında bir iş emrinin başlatılması çoğu zaman birçok ön koşula bağlıdır ve duruma göre bazen sadece isteğin kuyruğa alındığını ifade eder. Bu yüzden agentın çalıştığı ortamda, agentın niyetini sistemin kontratlarıyla hizalayan bir katman gerekir.

## Konvansiyonel sistemlerde yapılması gereken düzenlemeler

Agentic yaklaşımı üretim dünyasına taşımanın yolu, agenti serbest bırakarak her şeyi ona yaptırmak değil, agentın hareket alanını doğru kontratlarla sınırlamak ve güvenli hale getirmektir. Bu noktada konvansiyonel sistemlerde bazı temel düzenlemeler gereklidir.

### İş akışlarını açık bir durum makinesi olarak dış dünyaya sunmak

MES/MOM süreçleri zaten birer durum makinesidir. Ancak, çoğu zaman bu bilgi UI'ın arkasında saklıdır, dokümanlarda dağınık bir şekilde yer alır veya API seviyesinde açık değildir. Agent ready tasarımda her önemli büyüklük (entity) için **state**, **allowed transition** ve **transition precondition** bilgileri API seviyesinde sunulmalıdır. Ayrıca kritik adımlar için **CanStart**, **CanComplete**, **CanIssue** gibi doğrulama uçları bulunmalıdır.

### Idempotency ve Correlation Standardı

Agentler hata aldığında tanımlı kurallar çerçevesinde işlemi yeniden dener. Ağ sorunları, timeout, kısmi başarı veya belirsiz hata mesajları nedeniyle aynı isteği tekrar göndermeleri beklenir. Bu nedenle yazma işlemleri **idempotency key** ile korunmalı, tüm çağrılar **correlation id** ile izlenebilir olmalı ve mükerrer istekler için güvenli davranış garanti edilmelidir. MES/MOM dünyasında mükerrer isteklerin neden olabileceği yan etkilerin maliyeti yüksektir. Örneğin, malzeme stoktan veya depodan iki defa düşebilir, operasyon iki defa başlatılabilir, kalite kaydı iki defa açılabilir.

### Başarıyı teknik değil iş süreci olarak raporlamak

API yanıtlarının yalnızca HTTP durum kodlarını değil, iş sürecine ilişkin durum bilgisini de içeren bir sonuç dönmesi gerekir. **Completed**, **PendingApproval**, **Blocked**, **RequiresReview** gibi bir durum ve beraberinde sonraki aksiyon ve neden kodu bilgisi ile sunulmalıdır. Bu yaklaşım agentın yanlış başarı algısı üretmesini engeller.

### Proposal, approval, execution ayrımı

MES/MOM süreçlerinde agentın doğrudan yazma/değişiklik yapması tehlikelidir. Doğru yaklaşım, agentın plan ve öneri üretmesi, sistemin deterministic doğrulama yapması, gerekiyorsa insan onayı alınması ve nihai işlemin kontrollü bir yürütme motoru (execution engine) tarafından yerine getirilmesidir. Agent burada planlayan ve açıklayan olur. Sistem ise uygulayan, doğrulayan ve kayıt altına alan olur.

### Audit trail ve process event log

Üretim ve kalite çoğunlukla denetlenen süreçlerdir. Bu nedenle agent logundan daha önemli olan, süreç logudur. Her kritik adım event olarak kaydedilmeli, kim ne zaman hangi veriye dayanarak hangi işlemi yaptı sorusu cevaplanabilmeli, **correlation id** ile sistemler arası izlenebilirlik sağlanmalı ve gerektiğinde süreç geçmişi yeniden oynatılabilir olmalıdır.

Bu düzenlemeler olmadan agentic orkestrasyon, sistemi daha otonom hale getirmek yerine daha belirsiz hale getirir.

Şimdi gelin 3 örnek senaryo ile somut olarak agantic yaklaşımın olası eksiklerini ve yapılabilecek iyileştirmeleri ele alalım. 

## Üretimden Örnek Senaryolar

### Senaryo-1: OEE düşüşü, kök neden analizi ve aksiyon planı

Bu senaryoda agenttan beklentimiz, OEE düşüşünü tespit etmesi, duruşları kategorize etmesi, olası kök nedenleri çıkarması ve aksiyon önerilerini üretebilmesidir.

Bu senaryo, agentın bir analiz oluşturabilmesi için kayıt altına alınan veriye salt okunur bir şekilde erişimini gerektirir. Bu nedenle sistemin durumunda bir değişime (state transition) neden olmadığı için göreceli olarak daha güvenli olduğumuz alanlardan biridir. Ancak, bu durumda bile ideal koşullar ve çevre varsayımı devre dışı kalır.

OEE çoğu organizasyonda tek bir veri kaynağı veya büyüklük kullanılarak hesaplanmaz. OEE, PLC, SCADA ve IoT zaman serisi verisi, operatör duruş girişleri, MES operasyon kayıtları, planlama ve vardiya bilgisi, kalite sonuçları gibi parçalı kaynaklara dayanır. Bu kaynaklar tutarsız olduğunda bile agent sanki kesin bir sonuca ulaşmış  gibi yorumlar yapabilir.

Duruş nedenleri semantik olarak kategorize edilmemiş ve zayıf olabilir. Yanlış duruş kodu seçimi, operatörler tarafından varsayılan duruş/hata kodlarının seçimi, serbest metin notların fazlalığı, mikro duruşların (çokote) kaydedilmemesi gibi sorunlar kök neden analizini zorlaştırır.

Agent ready olmak için OEE açıklanabilir olmalıdır. OEE alt bileşenleri ayrı ayrı erişilebilir olmalı, hangi veri kaynaklarına dayandığı açık olmalı ve neden bu OEE sorusuna MES/MOM sistemi cevap verebilmelidir. Duruş nedeni sınıflandırması güçlendirilmeli, veri kalitesi sorunları belirlenmeli ve mikro duruşlar sınıflandırılabilir hale getirilmelidir. Ayrıca aksiyonların başarısını ölçmek için aksiyon KPI ilişkisi tanımlanmalıdır.

Bu senaryoda agentın rolü, veri kaynaklarını birleştirerek hipotez listesi üretmek, veri kaynaklarının duruma katkısını analiz etmek ve raporlar oluşturmak, veri kalitesi problemlerini işaretlemek ve aksiyon taslaklarını ölçüm planıyla birlikte sunmaktır. Eğer agent kök nedeni kesin hüküm gibi bildiriyorsa ve/veya operasyonel sistemlere denetimsiz bir şekilde otomatik müdahale ediyorsa yanlış bir kullanım veya amaç söz konusu olup olmadığını değerlendirmeliyiz.

### Senaryo-2: İş emri başlatma, malzeme düşümü ve operasyon koordinasyonu

Bu senaryoda agenttan beklentimiz, iş emrini başlatması, malzemeleri ilgili depolardan çekmesi, operasyonları doğru sırayla yönetmesi, kalite kontrol (ilk onay, frekansiyel, son onay vb) aksiyonlarını takip etmesi ve üretim tamamlanınca entegrasyon kayıtlarını doğru şekilde ilgili sistemlere iletmesidir.

Bu senaryo ilk senaryo ile karşılaştırıldığında sistemde bir çok durum değişimine (state transition) neden olan bir senaryodur. Bu nedenle agentic yaklaşımın en riskli olduğu alanlardan biridir.

İş emrini başlatmak genellikle tek bir aksiyon değildir. Planlama uygunluğu, ekipman uygunluğu, operatör yetkisi, malzeme-lot uygunluğu, bakım ve kalite şartları gibi ön koşulları vardır. Agent bunları doğrulamadan süreci başlatırsa sistem genelinde parçalı ve doğrulaması oldukça zor kayıtlar oluşabilir.

Malzeme işlemleri idempotent (tekrarlaması güvenli ve mükerrer kayıt oluşturmayan) değilse agent olası hata durumunda yeniden denemeler nedeni ile mükerrer kayıtlar oluşturabilir. Bu da stok tutarsızlığına ve MES-ERP-WMS arasında uyumlaştırma (reconciliation) ihtiyacına yol açar.

Asenkron süreçler agentın başarı algısını bozar. Agentın tetiklediği bir komut MES/MOM/ERP sistemi tarafından kabul edilmiş olabilir ve arka planda işlem hala devam ediyor olabilir. Bu durumda, agent OK alıp diğer adımlar ile ilerlemeye çalışırken süreç henüz tamamlanmamış olabilir. Transaction sınırları ve kısmi başarı durumları semantik olarak ifade edilmezse agent yanlış sırayla hareket edebilir.

Bu senaryonun agent ready olması için iş emri ve operasyon süreçleri açık durum makineleri (state machine) olarak erişilebilir olmalı, API seviyesinde ön koşul doğrulama uçları sunulmalı, **idempotency** ve **correlation** standart hale getirilmeli, süreç durumları için MES/MOM/ERP sistemi tarafından dönülen cevaplar standartlaştırılmalı ve **yürütme motoru yaklaşımı** uygulanmalıdır. Agent plan üretmeli, sistem uygulamalı ve her adım policy ve guardrail kontrolünden geçmelidir. Kritik aksiyonlar onay gerektirmeli ve mümkünse simülasyon ortamında test edilebilir olmalıdır.

Bu senaryoda agentın doğru rolü orkestrasyon planı ve gerekçe üretmek, ön koşul kontrol sonuçlarına göre alternatif plan önermek, işlemlerin yapılmasının engellendiği durumlarda nedeni açıklamak, audit raporu üretmek ve tutarsızlık tespiti yapmaktır. Yanlış rolü ise doğrudan süreç/üretim durumunu manipüle etmek, yeniden denemeler sonucunda yan etki oluşmasına neden olmak ve başarı koşulunun gerçekleşip gerçekleşmediğine MES/MOM/ERP sisteminin teknik cevabına göre karar vermektir.

### Senaryo-3: Kalite sapması, NCR, karantina, kök neden analizi ve CAPA

Bu senaryoda kalite sapması tespit edilir. Agenttan beklenen NCR açmak, etkilenen lotları ve iş emirlerini belirlemek, karantina aksiyonlarını önermek veya başlatmak, kök neden analizi için veri toplamak ve CAPA taslağı üretmektir.

Bu senaryo, agentic sistemleri kurgularken sorun yaşama riskinin en yüksek olduğu konulardan birini temsil etmesi açısından önemlidir. Çünkü NCR ve CAPA süreçleri rol, yetki, onay ve audit trail gerektirir. Yan etki maliyeti yüksektir ve başarı teknik değil iş süreçlerine bağlı bir kavramdır.

> NCR (Non Conformance Report), standartlara uygun olmayan bir durum tespit edildiğinde açılan uygunsuzluk kaydıdır. NCR sadece bir hata kaydı değildir. Uygunsuzluğu tespit etmek, etkisini sınırlamak, izlenebilirliği sağlamak, etki analizi yapmak, disposition (fire/hurda vb) kararı vermek ve CAPA sürecine temel oluşturmak için vardır. NCR çoğu zaman açık bir durum makinesi gibi çalışır. **Opened**, **Under Review**, **Contained**, **Dispositioned**, **Closed** gibi durumlar ve bu durumlara geçiş ön şartlar bulunur.

> CAPA (Corrective and Preventive Action), uygunsuzlukların tekrarını engellemek için yürütülen sistematik düzeltici ve önleyici faaliyetler sürecidir. Düzeltici faaliyet mevcut uygunsuzluğun kök nedenini ortadan kaldırmayı, önleyici faaliyet ise benzer uygunsuzlukların gelecekte oluşmasını engellemeyi hedefler. Kök neden analizi, aksiyon planı, uygulama ve doğrulama, etkinlik kontrolü içerir. MES/MOM’da CAPA bir kayıt değil, kalite ve süreç iyileştirme yönetişim modelidir.

Agentın ideal dünyasında NCR açılır, etkilenen lotlar bulunur, karantina uygulanır, CAPA oluşturulur ve süreç kapanır. Gerçek dünyada ise NCR açma yetkisi, karantina kararının fiziksel süreci etkilemesi, etki analizinin belirsizliği, kök neden için veri eksikliği ve CAPA'nın insan onayı ve doğrulama gerektirmesi gibi nedenlerle süreç çok daha karmaşıktır. Agent burada kolayca yanlış bir başarı algısı üretebilir.

Bu senaryonun agent ready olması için NCR/CAPA süreçleri API seviyesinde erişilebilir olmalı, durum makinesi, izin verilen durum değişimleri ve ön koşul doğrulamaları sunulmalı, öneri modu zorunlu olmalı, **idempotency** ve **correlation** standardı uygulanmalı, süreç durumu ve sonraki aksiyonlar gibi bilgiler dönülmeli, izlenebilirlik (audit trail) süreç ve olay kayıtları ile sağlanmalıdır. Agentın rolü öneri, analiz ve dokümantasyon üretmek olmalı, işlemlerin çalıştırılması deterministic ve onaylı olmalıdır.

## Sonuç

MES/MOM dünyasında agentic orkestrasyon, doğru kısıtlar ve kontratlar uygulandığında çok değerli olabilir. Ancak agentic yaklaşımın başarısı, modelden önce sistem mühendisliğine bağlıdır. Durum makinesi (state machine veya finite state automata)kontratları, idempotency, durum standardı, öneri, onay ve yürütme ayrımı, audit trail, gözlemlenebilirlik  ve simülasyon kabiliyeti olmadan agentic orkestrasyon sürdürülebilir değildir.

Agentları üretime sokmak bir hedef değil, üretim ekosistemini agent ready hale getirmek bir zorunluluktur. Doğru sıralama şudur. Önce kontratları ve süreçleri agentın güvenle hareket edeceği şekilde güçlendirin. Sonra doğrulama ve güvenlik katmanlarını kurun. Agentı en son orkestrasyona dahil edin.

Bu yaklaşım, agentic sistemleri bir belirsizlik katmanı olmaktan çıkarıp, MES/MOM ekosisteminde güvenle kullanılabilen bir üretkenlik ve analiz bileşeni haline getirir.

***
{% include share_twitter_tr.html %}

***
