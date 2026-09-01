---
layout: post
title: "AI Safety: Yapay Zekâ Daha Fazla Yetki Kazanırken Güvenliği Nasıl Düşünmeliyiz?"
subtitle: "Modelin Doğruluğundan Sistemin Yetkisine: Agentic AI Çağında Güvenlik Mimarisi"
date: 2026-08-13
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - ai
  - security
  - agents
  - software
  - engineering

---

Yapay zekâ hayatımıza yeni girmedi. On yılı aşkın süredir arama motorlarının sonuçları sıralamasından öneri sistemlerine, kredi kartı işlemlerindeki sahtekârlık tespitinden görüntü işlemeye, talep tahmininden kestirimci bakıma kadar pek çok sistemin arkasında makine öğrenmesi ve yapay zekâ modelleri bulunuyor. Hatta bugün geriye dönüp baktığımızda, günlük hayatımızda kullandığımız birçok ürünün uzun süredir AI destekli olduğunu ancak çoğu zaman bunun farkında bile olmadığımızı söyleyebiliriz.

<!--end-of-excerpt-->

Bugün yaşadığımız değişimin önemli tarafı bu nedenle yapay zekânın hayatımıza girmesi değil, **yapay zekâya verdiğimiz rolün değişmesi**. Geleneksel makine öğrenmesi uygulamalarında model çoğunlukla sınırları önceden belirlenmiş bir problemi çözüyor, bir tahmin veya sınıflandırma üretiyor ve bu sonuç başka bir yazılım tarafından kullanılıyordu. Bir model işlemin fraud olma ihtimalini hesaplıyor, başka bir model bir makinenin arızalanma olasılığını tahmin ediyor, görüntü işleme modeli ürün üzerindeki hatayı sınıflandırıyor veya öneri motoru kullanıcıya gösterilecek ürünleri sıralıyordu. Model önemli bir bileşendi ancak modelin sistem üzerindeki rolü genellikle dar ve önceden tanımlanmıştı.

Generative AI, Large Language Model'lar ve özellikle Agentic AI ile birlikte bu sınır hızla genişliyor. Artık AI sistemlerinden yalnızca tahmin veya metin üretmesini istemiyoruz. Dokümanları incelemesini, verileri analiz etmesini, veri tabanlarını sorgulamasını, API'leri kullanmasını, kod çalıştırmasını, farklı sistemlerden bilgi toplamasını ve bir problemi çözmek için gerekli adımları planlamasını bekliyoruz. Agent mimarileri geliştikçe bu planların belirli bölümlerini kullanıcı adına gerçekleştirme yetkisini de yapay zekâya vermeye başlıyoruz.

Bu dönüşüm AI Safety konusunu geçmiştekinden farklı bir noktaya taşıyor. Çünkü bir sistemin yanlış tahmin üretmesi ile yanlış bir aksiyon gerçekleştirmesi arasında ciddi bir fark var. Bir kestirimci bakım modelinin "bu makinenin önümüzdeki yedi gün içerisinde arızalanma ihtimali yüksek" şeklinde yanlış bir tahmin üretmesi elbette bir risk oluşturur. Fakat aynı sistemin bu değerlendirmeye dayanarak üretimi otomatik olarak durdurabilmesi tamamen farklı bir risk sınıfıdır. Benzer şekilde bir finans uygulamasının "bu işlem şüpheli görünüyor" demesi ile hesabı otomatik olarak bloke etmesi veya kurumsal bir AI asistanının müşteriye gönderilecek cevabı hazırlaması ile cevabı kendi başına göndermesi aynı şey değildir.

Dolayısıyla AI Safety tartışmasının merkezine yalnızca modelin **ne kadar doğru olduğunu** değil, modelin **ne kadar yetkili olduğunu** da koymamız gerekiyor.

## Modelden sisteme doğru genişleyen güvenlik problemi

AI Safety denildiğinde akla çoğu zaman modelin zararlı içerik üretmemesi, yanlış bilgi vermemesi, bias oluşturmaması veya belirli etik sınırların dışına çıkmaması geliyor. Bunların tamamı önemli konular. Ancak kurumsal AI sistemlerinde güvenlik alanı artık çok daha geniş. Bir LLM şirket dokümanlarına, kullanıcı verilerine, ERP veya CRM sistemlerine, üretim verilerine, kaynak kodlarına, e-postalara, REST API'lere veya başka kurumsal servislere erişebiliyorsa güvenlik problemini yalnızca model seviyesinde ele almak mümkün değil.

Bu nedenle modern AI Safety'yi tek başına alignment veya hallucination problemi olarak görmek yerine AI Engineering, Software Architecture, Cybersecurity, Identity and Access Management, Data Governance, Observability ve Risk Management disiplinlerinin kesişiminde değerlendirmek daha doğru olur. Model bu mimarinin merkezindeki önemli bileşenlerden biridir fakat güvenliğin tamamı değildir.

Geleneksel bir makine öğrenmesi uygulamasını oldukça basitleştirerek aşağıdaki akışla ifade edebiliriz:

```text
Veri → Model → Tahmin → Uygulama → Aksiyon
```

Burada model tahmin üretir, tahminin ne şekilde kullanılacağına büyük ölçüde uygulama karar verir. Modern bir AI Agent mimarisinde ise model karar mekanizmasının çok daha içerisine girmektedir:

```text
Kullanıcı
   ↓
AI Agent
   ↓
LLM / Akıl Yürütme
   ↓
Araç Seçimi
   ↓
Yetkilendirme
   ↓
Çalıştırma
   ↓
Harici Sistem
```

Bu mimaride LLM yalnızca veri üreten bir bileşen değildir. Hangi aracın kullanılacağına, hangi parametrelerin oluşturulacağına veya görevin hangi adımlarla gerçekleştirileceğine ilişkin karar sürecinin içerisinde yer alabilir. Modelin çevresine RAG, memory, function calling, MCP tabanlı araç entegrasyonları ve başka agent'lar eklendikçe sistemin erişebildiği alan da genişler.

Burada kritik değişken aslında modelin zekâsından çok **agency**, yani sistem adına hareket edebilme kapasitesidir. Modelin yetenekleri arttıkça ona daha fazla agency vermek mümkün hale geliyor; agency arttıkça da olası bir hatanın etkileyebileceği alan genişliyor.

## Hallucination artık yalnızca yanlış cevap değildir

LLM'lerin en çok tartışılan problemlerinden biri hallucination. Model gerçekte var olmayan bir bilgiyi doğruymuş gibi üretebilir, mevcut veriyi yanlış yorumlayabilir veya yeterli bilgiye sahip olmadığı halde oldukça ikna edici bir cevap verebilir. Geleneksel bir chatbot içerisinde bu davranış çoğunlukla bilgi kalitesi ve kullanıcı deneyimi problemi olarak karşımıza çıkar. Kullanıcı yanlış bilgi alır ve kullanım alanına bağlı olarak bunun sonuçları önemli olabilir.

Agentic sistemlerde aynı problem farklı bir boyuta taşınıyor. Model yanlış bir çıkarımdan sonra bir araç çağırabiliyorsa hallucination doğrudan gerçek bir işleme dönüşebilir. Model bir müşterinin borcunun geciktiğini yanlış değerlendirip tahsilat süreci başlatabilir, yanlış SQL üreterek veri değiştirebilir, yanlış kişiye e-posta gönderebilir veya operasyonel bir sistemi hatalı parametrelerle çağırabilir. Böyle bir durumda problem artık yalnızca "AI yanlış cevap verdi" değildir; **olasılıksal çalışan bir sistemin yanlış kararı, deterministik dünyada gerçek bir sonuç üretmiştir.**

Güvenlik mühendisliğinin temel yaklaşımlarından biri hiçbir bileşenin kusursuz olmadığı varsayımıdır. Güvenli bir sistem, içerisindeki bütün bileşenlerin her zaman doğru davranacağı kabulü üzerine kurulmaz. Hataların gerçekleşebileceği kabul edilir ve mimari bu hataların etkisini sınırlayacak şekilde tasarlanır. AI sistemlerinde de modelin her zaman doğru çıkarım yapacağını, bütün talimatları doğru yorumlayacağını veya hiçbir zaman manipüle edilemeyeceğini varsaymak yerine, bunların zaman zaman gerçekleşeceğini kabul etmek daha sağlıklı bir mühendislik yaklaşımıdır.

Bu bakış açısı AI Safety açısından bence en önemli sorulardan birini ortaya çıkarıyor: **Model yanlış karar verdiğinde sistemin geri kalan kısmı bizi nasıl koruyacak?**

## Prompt bir güvenlik sınırı değildir

LLM tabanlı uygulamalarda karşılaştığım en riskli yaklaşımlardan biri güvenlik kurallarının system prompt içerisine yazılmasının yeterli görülmesi. Modele "kullanıcının erişim yetkisi olmayan finansal bilgileri gösterme" demek elbette yararlıdır. Ancak bu talimat bir authorization mekanizması değildir. Benzer şekilde "bu aracı yalnızca yöneticiler kullanabilir" şeklindeki bir prompt da gerçek bir erişim kontrolünün yerini tutmaz.

Bir web uygulamasında frontend üzerindeki bir butonu kullanıcıdan gizlemenin backend authorization yerine geçmediğini biliyoruz. AI sistemlerinde de aynı prensip geçerli olmalı. Modelin bir işlemi yapmaması gerektiğini bilmesi faydalıdır, ancak güvenlik mimarisi modelin bu kurala uymaması durumunda da işlemi engelleyebilmelidir.

Daha güvenli bir yapı aşağıdaki gibi düşünülebilir:

```text
Kullanıcı
   ↓
Kimlik Doğrulama
   ↓
Yetkilendirme / Politika
   ↓
İzin Verilen Bağlam + İzin Verilen Araçlar
   ↓
LLM
   ↓
Talep Edilen Aksiyon
   ↓
Yetkilendirme / Doğrulama
   ↓
Çalıştırma
```

Bu yapıda iki ayrı kontrol noktası bulunuyor. Öncelikle modelin görebileceği veri ve kullanabileceği araçlar sınırlandırılıyor. Daha sonra modelin oluşturduğu aksiyon gerçekten gerçekleştirilmeden önce yeniden kontrol ediliyor. Kullanıcı bir dokümana normal uygulama üzerinden erişemiyorsa RAG üzerinden de erişememeli; belirli bir API operasyonunu gerçekleştirmeye yetkili değilse LLM'in o API'yi çağırmaya karar vermesi sonucu değiştirmemeli.

Kısacası **prompt bir security boundary değildir**. Modelin bir güvenlik kuralına uymasını istemek ile sistemin o kuralın ihlal edilmesini teknik olarak engellemesi birbirinden farklı şeylerdir.

## Prompt Injection neden bu kadar önemli?

Bu ayrım bizi Prompt Injection problemine getiriyor. Web uygulamalarının yaygınlaşmasıyla SQL Injection nasıl önemli bir saldırı sınıfı haline geldiyse, LLM tabanlı uygulamalarda da Prompt Injection üzerinde uzun süre çalışmamız gereken temel problemlerden biri olmaya aday.

Doğrudan Prompt Injection nispeten kolay anlaşılabilir. Kullanıcı modele önceki talimatlarını görmezden gelmesini veya normalde yapmaması gereken bir şeyi yapmasını söylemeye çalışır. Agentic AI açısından daha ilginç ve tehlikeli problem ise **Indirect Prompt Injection**. Burada kötü niyetli talimat kullanıcıdan doğrudan gelmez; modelin okuduğu bir web sayfasında, PDF dokümanında, e-postada, destek kaydında veya RAG sisteminden getirilen herhangi bir içerikte bulunabilir.

Bir AI Agent'ın internette araştırma yapabildiğini ve ardından kullanıcı adına e-posta gönderebildiğini düşünelim. Agent'ın okuduğu web sayfasının içerisine AI sistemlerini hedefleyen bir talimat yerleştirilmiş olabilir. İnsan açısından bu yalnızca web sayfasındaki bir metindir. LLM açısından ise dışarıdan gelen verinin nerede bittiği ve talimatın nerede başladığı her zaman bizim klasik yazılım sistemlerinde alıştığımız kadar kesin değildir.

Bu durumda tehlikeli bir güven zinciri oluşabilir:

```text
Güvenilmeyen İçerik
        ↓
       LLM
        ↓
    Araç Seçimi
        ↓
   Güvenilir Sistem
        ↓
Gerçek Dünyadaki Aksiyon
```

Sorun aslında oldukça nettir. Güvenilmeyen bir kaynaktan gelen içerik, LLM üzerinden geçerek güvenilir bir sistem üzerinde gerçekleştirilecek aksiyonu etkileyebilmektedir. Bu nedenle Agent güvenliğini yalnızca prompt filtering ile çözmeye çalışmak yeterli değildir. Araç izolasyonu, authorization, girdinin kaynağının izlenmesi, çıktı doğrulama, sandboxing ve risk bazlı çalıştırma politikaları gibi klasik güvenlik mekanizmalarını AI mimarisinin içerisine taşımamız gerekir.

## RAG kullanmak sistemi otomatik olarak güvenli yapmaz

Benzer bir durum Retrieval-Augmented Generation sistemleri için de geçerli. Bir model internete doğrudan erişmiyor ve yalnızca şirket içi knowledge base üzerinden bilgi alıyorsa sistemin doğal olarak güvenli olduğu düşünülebiliyor. Oysa RAG kendi içerisinde yeni bir güven sınırı oluşturuyor ve bu sınırın ayrıca korunması gerekiyor.

Basit bir RAG akışını aşağıdaki gibi düşünebiliriz:

```text
Soru
  ↓
Embedding
  ↓
Vektör Arama
  ↓
Getirilen İçerik Parçaları
  ↓
LLM Bağlamı
  ↓
Cevap
```

Burada modelin bağlamına giren her içerik parçası model davranışını etkileyebilecek bir girdidir. Knowledge base'e kötü niyetli veya manipüle edilmiş bir doküman eklenmesi, yanlış tenant'a ait bir içeriğin retrieval sonucuna girmesi veya authorization uygulanmadan yapılan similarity search, AI katmanı üzerinden veri sızıntısına veya model davranışının değiştirilmesine neden olabilir.

Kurumsal RAG sistemlerinde bu nedenle yalnızca semantic similarity yeterli değildir. Kaynak doğrulama, doküman seviyesinde ve gerektiğinde daha alt seviyede authorization, tenant isolation, metadata filtering, provenance, güvenli ingestion ve auditability tasarımın parçası olmalıdır. Kullanıcının erişmeye yetkili olmadığı bir doküman, embedding uzayında sorusuna çok yakın olduğu için modelin bağlamına dahil edilmemelidir.

Bu bize daha genel bir prensibi gösteriyor: **AI, mevcut authorization modelinin etrafından dolaşan alternatif bir veri erişim kanalı haline gelmemelidir.**

## LLM authorization sistemi değildir

Agent mimarisinde aynı prensip araç kullanımı için de geçerlidir. Bir AI Agent'ın `GetCustomer`, `CreateInvoice`, `SendEmail`, `ExecuteSql` veya `DeleteOrder` gibi araçlara sahip olduğunu düşünelim. LLM'in kullanıcının talebine göre hangi aracın çağrılması gerektiğine karar vermesi oldukça kullanışlıdır. Ancak aynı LLM'in bu işlemin gerçekleştirilmesine izin verilip verilmediğine de karar vermesi güvenlik açısından doğru değildir.

Daha sağlam bir mimaride model bir aksiyon talebi oluşturur. Bu talep deterministik çalışan bir authorization veya policy engine tarafından değerlendirilir, gerekli parametreler doğrulanır ve ancak bundan sonra işlem gerçekleştirilir. Risk seviyesi yüksekse kullanıcı onayı veya farklı bir approval mekanizması da devreye girebilir.

```text
LLM
 ↓
Talep Edilen Aksiyon
 ↓
Politika Motoru
 ↓
Yetkilendirme
 ↓
Doğrulama
 ↓
Onay (gerekiyorsa)
 ↓
Aracın Çalıştırılması
```

Buradaki prensibi oldukça basit ifade edebiliriz: **LLM bir aksiyonu önerebilir ancak kendi kendisine yetki veremez.** Modelin kullanıcının yetkili olduğunu düşünmesi, authorization olarak kabul edilemez. Güvenlik kararı mümkün olduğunca model dışında ve deterministik bir katmanda verilmelidir.

## Least Privilege artık AI Agent'lar için de geçerli

Siber güvenliğin temel prensiplerinden biri olan Principle of Least Privilege, AI Agent mimarilerinde daha da önemli hale geliyor. Bir Agent'ın görevi üretim verilerini okuyup analiz etmekse veri tabanında `INSERT`, `UPDATE`, `DELETE`, `DROP` veya `TRUNCATE` yetkilerine sahip olması için genellikle bir neden yoktur. Model yanlış SQL üretse bile veri tabanı seviyesindeki yetkilendirme işlemi engelleyebilmelidir.

Aynı prensip araç seviyesinde de uygulanabilir. Bir Agent'ın teknik olarak yüz farklı API operasyonuna erişebilmesi, bunların tamamının modele sunulması gerektiği anlamına gelmez. Agent'ın görevi için gerekli minimum araç seti, minimum veri kapsamı ve minimum yetki belirlenmelidir. Böylece model beklenmedik davransa veya Prompt Injection gibi bir saldırıyla manipüle edilse bile ulaşabileceği alan baştan sınırlandırılmış olur.

Bu noktada **AI Agent Identity** kavramının giderek daha önemli hale geleceğini düşünüyorum. Kurumsal sistemlerde kullanıcılar ve servis hesapları için yaptığımız gibi Agent'lar için de kimlik, rol, izin verilen araçlar, veri kaynakları ve operasyon sınırları tanımlamamız gerekecek. Credentials'ın prompt içerisinde veya Agent'ın doğrudan erişebileceği bir yerde tutulması yerine güvenli çalıştırma katmanında yönetilmesi, Agent'ın ise yalnızca yetkili operasyonu talep edebilmesi daha sağlıklı bir mimari oluşturacaktır.

## Blast Radius: Agent tamamen yanlış davranırsa ne olur?

AI Safety açısından siber güvenlikten alabileceğimiz en yararlı kavramlardan biri **blast radius**, yani bir hata veya güvenlik ihlalinin etkileyebileceği alan olabilir. Yalnızca üretim verilerini okuyabilen ve rapor oluşturabilen bir Agent ile üretim planını değiştirebilen, makinelere komut gönderebilen, e-posta gönderebilen ve kod çalıştırabilen bir Agent'ın hata olasılığı aynı olsa bile oluşturdukları risk aynı değildir.

Risk yönetiminde kullandığımız oldukça basit bir yaklaşım burada da işimize yarayabilir:

```text
Risk ≈ Hata Olasılığı × Hatanın Etkisi
```

AI araştırmalarının önemli bir bölümü denklemin ilk tarafını azaltmaya çalışıyor. Modelleri daha doğru, daha güvenilir, daha iyi aligned ve manipülasyona karşı daha dayanıklı hale getirmek için ciddi çalışmalar yapılıyor. Ancak sistem mühendisliği açısından ikinci taraf da en az bunun kadar önemli. Model hata yaptığında oluşabilecek maksimum etkinin sınırlandırılması, modelin hiçbir zaman hata yapmamasını beklemekten çok daha gerçekçi bir güvenlik stratejisidir.

Bu nedenle bir Agent tasarlanırken yalnızca "bu Agent neler yapabiliyor?" sorusunu sormak yeterli değil. Tasarım aşamasında **"bu Agent tamamen yanlış davranırsa yapabileceği en kötü şey nedir?"** sorusunu da sormamız gerekiyor. Bu sorunun cevabı kabul edilebilir değilse önce modeli biraz daha iyileştirmekten ziyade Agent'ın yetkilerini ve mimarisini yeniden düşünmek daha doğru olabilir.

## Human-in-the-loop her işlem için onay istemek değildir

Bu noktada güvenliği artırmak adına diğer uca gidip AI tarafından gerçekleştirilen her işlem için kullanıcı onayı istemek mümkün. Ancak bu yaklaşım ölçeklenebilir olmadığı gibi Agent kullanımının sağlayacağı otomasyon avantajını da büyük ölçüde ortadan kaldırabilir. Üstelik sürekli onay isteyen sistemlerde kullanıcıların bir süre sonra işlemin içeriğini incelemeden onay vermeye başlaması, güvenlik mekanizmasının kendisini anlamsızlaştırabilir.

Daha sağlıklı yaklaşım aksiyonları oluşturabilecekleri etkiye göre sınıflandırmaktır. Salt okunur veri erişimi veya geri alınması kolay düşük riskli operasyonlar otomatik gerçekleştirilebilirken, finansal sonuç doğuran, dış dünyaya iletişim gönderen, veri değiştiren veya fiziksel süreçleri etkileyen işlemler farklı kontrol seviyelerine tabi tutulabilir. Çok yüksek riskli bazı operasyonların ise AI tarafından hiçbir koşulda doğrudan gerçekleştirilememesi tercih edilebilir.

Dolayısıyla Human-in-the-loop bir aç/kapa seçeneği değil, **risk bazlı bir kontrol mekanizmasıdır**. Amaç her noktada insan onayı istemek değil, insan kararını gerçekten ihtiyaç duyulan noktada devreye sokmaktır.

## AI sistemlerinde observability neden farklı düşünülmeli?

AI sistemlerinin güvenli çalışması yalnızca erişimi sınırlandırmakla mümkün değil; sistemin ne yaptığını sonradan anlayabilmemiz de gerekiyor. Klasik uygulamalarda loglama, metrics ve distributed tracing artık standart mühendislik pratikleri arasında yer alıyor. Agentic AI bu ihtiyacı ortadan kaldırmıyor, aksine daha kapsamlı hale getiriyor.

Bir güvenlik olayı veya beklenmeyen davranış gerçekleştiğinde yalnızca kullanıcının aldığı son cevabı görmek yeterli olmayacaktır. Kullanıcının hangi isteği yaptığı, hangi model ve model versiyonunun kullanıldığı, RAG üzerinden hangi kaynakların bağlama dahil edildiği, modelin hangi aracı seçtiği, hangi parametreleri oluşturduğu, authorization katmanının ne karar verdiği, hangi dış sistemin çağrıldığı ve işlemin sonucunun ne olduğu mümkün olduğunca izlenebilmelidir.

```text
Kullanıcı Talebi
       ↓
Getirilen Bağlam
       ↓
   Model Kararı
       ↓
    Araç Talebi
       ↓
Yetkilendirme Kararı
       ↓
    Çalıştırma
       ↓
    Araç Sonucu
       ↓
    Nihai Cevap
```

Bu zinciri AI uygulamasının **denetim izi**, yani audit trail'i olarak düşünebiliriz. AI observability'yi yalnızca token sayısı, latency ve inference maliyeti ölçmek olarak görürsek sistem davranışının güvenlik açısından en önemli bölümünü kaçırmış oluruz. Amaç modelin iç dünyasını kusursuz biçimde açıklamak değil; en azından hangi girdiler, kaynaklar, kararlar ve araç çağrıları sonucunda gerçek dünyada hangi işlemin gerçekleştiğini yeniden oluşturabilmektir.

## Evaluation artık CI/CD sürecinin parçası olmalı

Olasılıksal sistemler geliştirmek klasik yazılım testlerinden vazgeçmemiz gerektiği anlamına gelmiyor. Tam tersine, test yaklaşımımızı genişletmemiz gerekiyor. Klasik bir fonksiyon için belirli bir girdiye karşılık tam olarak belirli bir çıktı bekleyebiliriz. LLM sistemlerinde ise semantik doğruluğu, güvenilirliği ve güvenlik davranışını çok sayıda senaryo üzerinden ölçmek gerekiyor.

Bir AI uygulamasının değerlendirme seti yalnızca normal kullanıcı sorularından oluşmamalı. Prompt Injection girişimleri, authorization bypass denemeleri, hassas veri talepleri, manipüle edilmiş RAG içerikleri, belirsiz kullanıcı talepleri, yanlış araç kullanımı senaryoları, tenant'lar arası erişim girişimleri ve bilinen hallucination örnekleri de bu setin içerisinde yer alabilir.

Daha önemlisi bu değerlendirmelerin ürün yayınlanmadan önce bir kez gerçekleştirilip unutulmaması gerekiyor. Model değiştiğinde, system prompt güncellendiğinde, yeni bir araç eklendiğinde, RAG pipeline değiştirildiğinde veya Agent'a yeni bir yetenek verildiğinde sistemin davranış yüzeyi de değişir. Dolayısıyla AI evaluation süreçlerinin zaman içerisinde klasik regression testing gibi CI/CD pipeline'larının doğal bir parçası haline gelmesi gerektiğini düşünüyorum.

```text
Model / Prompt / Araç Değişikliği
              ↓
      Değerlendirme Testleri
              ↓
       Kalite + Güvenlik
           ↙        ↘
      BAŞARISIZ    BAŞARILI
          ↓            ↓
 Dağıtımı Engelle    Dağıtım
```

Bu yaklaşım AI Safety'yi yalnızca politika dokümanları ve prensiplerden oluşan soyut bir konu olmaktan çıkararak ölçülebilir ve tekrar edilebilir bir **yazılım mühendisliği pratiğine** dönüştürür.

## Red Teaming: Sistemin çalıştığını değil, nasıl bozulacağını araştırmak

Normal kalite güvence süreçlerinde temel amaç sistemin beklenen şartlarda doğru çalıştığını doğrulamaktır. Red Team yaklaşımında ise soruyu tersine çeviririz ve sistemi beklenmeyen şekilde davranmaya nasıl zorlayabileceğimizi araştırırız. AI sistemlerinde bu yaklaşım özellikle değerlidir çünkü modelin karşılaşabileceği girdilerin tamamını geliştirme sırasında öngörmek mümkün değildir.

AI Red Team faaliyetini yalnızca modele yasaklı bir kelime söyletmeye çalışmak şeklinde düşünmemek gerekir. Authorization bypass edilebilir mi, başka bir kullanıcının verisi retrieval üzerinden alınabilir mi, Agent yetkisi olmayan bir aracı dolaylı şekilde çağırabilir mi, kötü niyetli bir PDF Agent'ın davranışını değiştirebilir mi, bir aracın döndürdüğü içerikteki talimat modele yeni komut olarak kabul ettirilebilir mi veya birbirleriyle iletişim kuran Agent'lar arasında güvenilmeyen veri güvenilir talimat gibi taşınabilir mi gibi sorular gerçek sistem güvenliği açısından çok daha değerlidir.

Bu noktada AI Safety ile cybersecurity arasındaki sınırın giderek bulanıklaştığını düşünüyorum. Saldırgan açısından modelin kendisi, RAG pipeline, tool orchestration katmanı veya API arasında kavramsal bir ayrım yoktur. Sistemi hangi noktadan etkileyebiliyorsa doğal olarak o noktayı kullanacaktır. Dolayısıyla bizim de güvenliği yalnızca model etrafında değil, uçtan uca sistem mimarisi içerisinde düşünmemiz gerekir.

## Peki AI Safety için ne kadar kaynak ayırıyoruz?

OpenAI, Anthropic, Google DeepMind ve diğer frontier AI şirketlerinin alignment, interpretability, model evaluations, safeguards, red teaming ve AI security gibi alanlarda önemli çalışmalar yürüttüğünü biliyoruz. Bununla birlikte bu şirketlerin toplam AI yatırımlarının tam olarak ne kadarını AI Safety'ye ayırdığını tek bir oranla ifade etmek kolay değil. Bunun önemli nedenlerinden biri "AI Safety"nin standart bir muhasebe kalemi olmaması. Cybersecurity, infrastructure security, alignment research, evaluation, privacy, governance ve ürün seviyesindeki güvenlik önlemlerinin hangisinin ne ölçüde AI Safety olarak kabul edileceği bile başlı başına tartışmalı bir konu.

Bu nedenle "AI geliştiren şirketler bütçelerinin yüzde 1'ini, yüzde 5'ini veya yüzde 10'unu AI Safety için ayırmalıdır" şeklinde genel bir kural koymanın doğru olduğunu düşünmüyorum. İnternete bağlı olmayan ve yalnızca doküman özetleyen bir uygulama ile finansal işlem gerçekleştirebilen, şirket sistemlerinde veri değiştirebilen veya endüstriyel sistemlere komut gönderebilen bir Agent'ın risk profili aynı olmadığı için güvenlik ihtiyaçlarının da aynı olması beklenemez.

Ancak burada **100'de 1** üzerinden basit bir düşünce deneyi yapmak bana ilginç geliyor. AI sistemlerini daha yetenekli hale getirmek için harcadığımız her 100 birim mühendislik çabasının ne kadarını, bu yeteneklerin güvenli kullanılmasını sağlamak için harcıyoruz? Yüz geliştiricinin çalıştığı büyük bir AI organizasyonunda kaç kişinin temel sorumluluğu AI security, evaluation, red teaming veya safety engineering? Yüz yeni AI özelliğinin kaçı production ortamına çıkmadan önce sistematik adversarial testlerden geçiyor ve yüz Agent operasyonunun kaçını başından sonuna kadar denetleyebiliyoruz?

Bu soruların doğru cevabının mutlaka "1" olması gerekmiyor. Düşük riskli bazı sistemlerde çok küçük bir güvenlik yatırımı yeterli olabilirken yüksek etkili sistemlerde çok daha büyük bir mühendislik yatırımı gerekebilir. Buradaki önemli nokta oranı bir kurala dönüştürmek değil, **capability için yaptığımız yatırım ile safety için yaptığımız yatırım arasındaki ilişkiyi görünür hale getirmek**.

## Capability arttıkça Safety aynı yerde kalamaz

AI modellerinin yetenekleri arttıkça güvenlik ihtiyacının aynı kalacağını varsaymak zor. Daha büyük context window'lar, daha başarılı reasoning, multimodal interaction, tool use, persistent memory ve multi-agent orchestration sistemleri AI uygulamalarını ekonomik olarak çok daha değerli hale getiriyor. Ancak aynı özelliklerin her biri modelin erişebildiği, karar verebildiği ve etkileyebildiği alanı da genişletebiliyor.

Bu dönüşümü kabaca şöyle düşünebiliriz:

```text
Tahmin
  ↓
İçerik Üretimi
  ↓
Yardımcı / Copilot
  ↓
Agent
  ↓
Otonom Agent
```

Bu zincirde ilerledikçe yalnızca modelin capability'si artmıyor; uygun mimarilerde **agency ve blast radius** da artıyor. Bu nedenle bir Copilot için yeterli olan güvenlik yaklaşımının otonom bir Agent için yeterli olmasını bekleyemeyiz.

Örneğin yalnızca SQL sorgusu öneren bir Copilot'ta kullanıcı sorguyu çalıştırmadan önce inceleyebilir. Aynı SQL'i kendi başına çalıştıran Agent'ta authorization ve query validation gerekir. Veriyi değiştirebilen bir Agent'ta transaction sınırları, approval ve rollback mekanizmaları gündeme gelirken, birden fazla sistemi koordine eden otonom Agent'ta bunlara identity, policy enforcement, distributed tracing ve merkezi kontrol mekanizmalarının eklenmesi gerekebilir.

Başka bir ifadeyle **AI capability maturity ile AI safety maturity birlikte ilerlemelidir**. Bir sisteme yeni bir capability eklemek yalnızca "artık ne yapabiliyor?" sorusunu değil, "bu yeni yetenek hangi yeni riskleri oluşturdu?" sorusunu da beraberinde getirmelidir.

## Gerektiğinde sistemi gerçekten durdurabiliyor muyuz?

Agent'lar daha uzun süre çalışan ve daha bağımsız sistemlere dönüştükçe oldukça basit görünen ancak kritik bir mühendislik sorusu ortaya çıkıyor: Bir şeyler ters gittiğinde sistemi gerçekten durdurabiliyor muyuz?

Bir Agent beklenmeyen şekilde davranmaya başladığında aktif görevlerini iptal edebiliyor muyuz, kullandığı credentials'ı geçersiz hale getirebiliyor muyuz, belirli araçlara erişimini merkezi olarak kapatabiliyor muyuz ve başka Agent'lara verdiği işleri durdurabiliyor muyuz? Belirli bir model veya model versiyonunda kritik bir güvenlik problemi tespit edildiğinde organizasyon genelinde kullanımını hızlı şekilde engelleyebiliyor muyuz?

Bu ihtiyaçların zaman içerisinde **AI Agent Control Plane** olarak düşünebileceğimiz yeni platform mimarilerini daha önemli hale getireceğini düşünüyorum. Agent kimliği, politika yönetimi, araç yetkileri, secrets, çalışma zamanı izleme, denetim kayıtları, rate limiting ve acil durdurma mekanizmalarının merkezi olarak yönetilmesi, birkaç Agent kullanan uygulamalarda gereğinden fazla mühendislik gibi görünebilir. Ancak yüzlerce veya binlerce Agent'ın farklı kurumsal sistemlerde çalıştığı bir yapıda bunların merkezi olarak yönetilmesi kaçınılmaz hale gelebilir.

## AI Safety inovasyonun karşıtı değil

AI Safety tartışmalarında güvenlik ile inovasyon zaman zaman birbirinin karşıtıymış gibi ele alınıyor. Daha fazla kontrol, daha fazla test ve daha fazla authorization mekanizmasının ürün geliştirmeyi yavaşlatacağı düşünülebilir. Kötü tasarlanmış süreçlerde bunun gerçekleşmesi elbette mümkün; ancak iyi mühendislikte güvenlik yalnızca kısıtlama değildir. Daha yüksek capability seviyelerinin kabul edilebilir riskle kullanılmasını sağlayan altyapının kendisidir.

Otomobillerin daha hızlı gidebilmesini yalnızca daha güçlü motorlar sağlamadı. Daha iyi fren sistemleri, lastikler, yol tutuş teknolojileri, sensörler ve diğer güvenlik sistemleri de yüksek hızın kullanılabilir hale gelmesinde önemli rol oynadı. Freni otomobilin hızlanmasını engelleyen bir teknoloji olarak görmek ne kadar eksikse, AI Safety'yi de yapay zekânın gelişmesini engelleyen bir katman olarak görmek benzer şekilde eksik olacaktır.

Güvenilir authorization mekanizmaları, sandboxing, otomatik değerlendirme sistemleri, red teaming, observability, audit trail, çalışma zamanı politika kontrolleri ve doğru noktalarda kullanılan insan onayı geliştikçe organizasyonlar daha güçlü AI sistemlerine daha fazla sorumluluk verebilir. Bu açıdan safety, capability'nin rakibi değildir; **capability'nin gerçek dünyada güvenilir ve sürdürülebilir biçimde kullanılabilmesini sağlayan mühendislik katmanıdır.**

## Sonuç: Ne kadar akıllı ve ne kadar yetkili?

Önümüzdeki yıllarda yapay zekâ sistemlerinin daha yetenekli hale geleceğini öngörmek zor değil. Modeller daha fazla bağlam işleyecek, daha başarılı akıl yürütecek, farklı veri türlerini birlikte değerlendirecek, daha fazla araç kullanacak ve giderek daha uzun görevleri daha az insan müdahalesiyle tamamlayacak. Bunların tamamı AI'ın ekonomik değerini ve yazılım sistemlerindeki önemini artıracak.

Ancak aynı gelişme bizi farklı bir mühendislik sorusuyla karşı karşıya bırakıyor. Bir AI sistemi yanlış cevap verdiğinde ne olacak, yanlış karar verdiğinde hangi aksiyonları gerçekleştirebilecek, kötü niyetli bir içerik tarafından manipüle edildiğinde hangi sistemlere ulaşabilecek ve bir şeyler ters gittiğinde oluşturabileceği maksimum etki ne kadar olacak? Bana göre önümüzdeki dönemde bu sorulara vereceğimiz cevaplar, modellerin benchmark skorları kadar önemli hale gelecek.

Bu nedenle AI Safety'yi yalnızca modelin uygunsuz cevap vermesini engelleyen filtreler veya şirketlerin hazırladığı etik ilkeler olarak görmemek gerekiyor. Kimlik, yetkilendirme, izolasyon, politika uygulama, evaluation, red teaming, observability, auditability ve gerektiğinde sistemi durdurabilme kabiliyeti modern AI sistemlerinin temel mimari bileşenleri haline gelmeli. Özellikle Agentic AI dünyasında güvenliği yalnızca model katmanında çözmeye çalışmak yeterli olmayacaktır.

"100'de 1" sorusunun asıl değerini de burada görüyorum. Bunun bir bütçe kuralı olması gerekmiyor ve bence olmamalı da. Ancak AI sistemlerini daha akıllı, daha bağımsız ve daha yetenekli hale getirmek için harcadığımız her 100 birim çabanın yanında, bu sistemlerin yanlış davrandığında neler yapabileceğini anlamaya ve bunun etkisini sınırlamaya ne kadar çaba harcadığımızı sorgulamak oldukça değerli.

Belki de önümüzdeki dönemde AI sistemleri için sormamız gereken en önemli iki soru birbirinden ayrı düşünülemeyecek kadar bağlantılı olacak:

**Bu sistem ne kadar akıllı ve bu sisteme ne kadar yetki verdik?**

Birincisini geliştirmek için çok büyük bir hızla ilerliyoruz. İkincisini nasıl yöneteceğimiz ise AI Safety'nin önümüzdeki yıllardaki en önemli mühendislik problemlerinden biri olacak.


{% include share_twitter_tr.html %}
