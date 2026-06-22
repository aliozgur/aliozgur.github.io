---
layout: post
title: "Loop Engineering: Kendi Kendini İyileştiren Yapay Zekâ Döngüleri"
subtitle: "LLM tabanlı sistemlerde kontrollü, doğrulanabilir ve öğrenen çalışma döngüleri"
date: 2026-06-22
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - ai
  - prompt-engineering
  - agents
  - software
  - automation

---

Yapay zekâ ile yazılım geliştirme, veri analizi, dokümantasyon ve iş süreçleri otomasyonu artık tek seferlik "soru-cevap" etkileşimlerinin ötesine geçiyor. Birkaç yıl önce gündemimizde daha çok **prompt engineering** vardı: Modele doğru soruyu nasıl sorarız? Bağlamı nasıl veririz? Beklediğimiz çıktıyı nasıl tarif ederiz?

Bugün ise daha farklı bir noktaya doğru ilerliyoruz. Artık mesele yalnızca iyi prompt yazmak değil; yapay zekâ sistemlerinin bir işi alıp, adım adım ilerleyebileceği, hata yaptığında geri dönebileceği, sonucu test edebileceği, öğrendiğini kaydedebileceği ve bir sonraki denemede daha iyi davranabileceği **kontrollü döngüler** tasarlamak.

Bu yaklaşımı genel olarak **loop engineering** olarak adlandırabiliriz.

Loop engineering, yapay zekâ destekli sistemlerde şu soruya cevap arar:

> Bir LLM'i tek seferlik cevap üreten bir araç olmaktan çıkarıp, hedefe doğru kontrollü şekilde ilerleyen, doğrulanan ve gerektiğinde kendini düzelten bir süreç bileşeni haline nasıl getiririz?

Bu yazıda loop engineering kavramını, self-improving loop yani kendi kendini iyileştiren döngü fikrini, erken benchmark sonuçlarının bu konuda bize ne söylediğini ve bu yaklaşımın yazılım geliştirme ile kurumsal yapay zekâ sistemleri açısından ne anlama geldiğini ele alacağım.

![Cover]({{ root.url }}/media/loop-engineering.png)

<!--end-of-excerpt-->

---

## Prompt Engineering Neyi Çözdü, Neyi Çözemedi?

Prompt engineering, LLM tabanlı sistemlerin ilk yaygın kullanım döneminde oldukça önemliydi. Çünkü modelin davranışını büyük ölçüde verdiğimiz bağlam, talimat ve örneklerle yönlendiriyorduk.

Basit bir prompt akışı şöyle düşünülebilir:

```text
Kullanıcı -> Prompt -> Model -> Cevap
```

Bu yapı birçok senaryo için yeterlidir. Örneğin:

* Bir metni özetlemek
* Bir e-postayı daha profesyonel hale getirmek
* Bir SQL sorgusu önermek
* Bir C# sınıfı üretmek
* Bir dokümandaki bilgiyi açıklamak

Ancak daha karmaşık işlerde bu akış yetersiz kalır. Çünkü gerçek dünyadaki işler çoğu zaman tek adımlı değildir.

Bir yazılım geliştirme görevini düşünelim:

1. Gereksinim anlaşılmalı.
2. Kod tabanı incelenmeli.
3. Uygun dosyalar bulunmalı.
4. Değişiklik yapılmalı.
5. Derleme alınmalı.
6. Testler çalıştırılmalı.
7. Hata varsa düzeltilmeli.
8. Değişiklik gözden geçirilmeli.
9. Gerekirse dokümantasyon güncellenmeli.

Bu süreçte modelin tek seferde doğru cevabı vermesi yeterli değildir. Asıl ihtiyaç, modelin bir **iş akışı içinde** çalışabilmesidir.

İşte loop engineering burada devreye girer.

---

## Loop Engineering Nedir?

Loop engineering, yapay zekâ sistemleri için tekrar eden, gözlemlenebilir ve kontrollü çalışma döngüleri tasarlama disiplinidir.

Basit bir loop şu şekilde ifade edilebilir:

```text
Hedefi al
  -> Plan yap
  -> Bir adım çalış
  -> Sonucu doğrula
  -> Hata varsa düzelt
  -> Gerekirse tekrar dene
  -> Başarı varsa ilerle veya dur
```

Yani artık modelden sadece cevap üretmesini beklemeyiz. Modelin çevresine bir kontrol mekanizması kurarız.

Bu kontrol mekanizmasında genellikle şu bileşenler bulunur:

| Bileşen           | Görevi                                                     |
| ----------------- | ---------------------------------------------------------- |
| Hedef             | Yapılacak işin açık tanımı                                 |
| Planner           | İşi adımlara bölen bölüm                                   |
| Executor          | Kod yazan, araç çağıran veya işlem yapan bölüm             |
| Verifier          | Sonucun doğru olup olmadığını kontrol eden bölüm           |
| Critic / Reviewer | Üretilen çıktıyı eleştiren veya riskleri bulan bölüm       |
| Memory            | Geçmiş deneyimlerden öğrenilen bilgileri tutan bölüm       |
| Stop condition    | Döngünün ne zaman duracağını belirleyen kural              |
| Human-in-the-loop | Riskli veya belirsiz durumda insan onayı isteyen mekanizma |

Bu yapı, LLM'i doğrudan karar veren tek aktör olmaktan çıkarır. Onu daha büyük, denetlenebilir ve sınırları belirlenmiş bir sistemin parçası haline getirir.

---

## Self-Improving Loop Ne Demek?

Self-improving loop, yani kendi kendini iyileştiren döngü, loop engineering yaklaşımının daha gelişmiş bir biçimidir.

Burada sistem sadece bir hatayı düzeltmez. Aynı zamanda hatadan öğrenir ve bu öğrenimi gelecekte kullanır.

Basit bir hata düzeltme döngüsü şöyle olabilir:

```text
Kod üret
  -> Test çalıştır
  -> Test başarısız
  -> Hatayı düzelt
  -> Testi tekrar çalıştır
```

Bu faydalı bir döngüdür ama tam anlamıyla self-improving değildir. Çünkü sadece mevcut çıktıyı iyileştirir.

Self-improving loop ise şunu da yapar:

```text
Hata oluştu
  -> Hatanın sebebi analiz edildi
  -> Tekrarlanmaması için kural çıkarıldı
  -> Bu kural proje hafızasına eklendi
  -> Sonraki görevlerde bu bilgi kullanıldı
```

Örneğin bir kod ajanı her değişiklikten sonra test çalıştırmayı unutuyorsa, sistem şu dersi çıkarabilir:

```text
Bu projede backend kodu değiştirildikten sonra mutlaka dotnet test çalıştırılmalı.
```

Bu bilgi daha sonra proje hafızasına, agent instruction dosyasına, geliştirme playbook'una veya otomatik kontrol listesine yazılabilir.

Bu durumda sistem sadece mevcut işi bitirmemiş olur. Gelecekteki davranışını da iyileştirmiş olur.

---

## Kendi Kendini İyileştirme Seviyeleri

Self-improving loop kavramını tek bir seviye olarak düşünmemek gerekir. Farklı olgunluk seviyeleri vardır.

### 1. Retry Loop

En basit seviye tekrar denemedir.

```text
Dene -> Hata al -> Tekrar dene
```

Bu yapı birçok otomasyon sisteminde zaten vardır. LLM kullanılması şart değildir. Örneğin geçici network hatalarında retry yapmak bu sınıfa girer.

LLM tabanlı sistemlerde ise retry, modelden aynı işi biraz farklı yapmasını istemek anlamına gelebilir. Ancak bu tek başına öğrenme değildir.

---

### 2. Reflection Loop

Bir üst seviyede sistem sadece tekrar denemez, hatanın nedenini açıklamaya çalışır.

```text
Dene -> Hata al -> Nedenini analiz et -> Yeni deneme yap
```

Örneğin:

```text
Derleme hatasının sebebi eksik using ifadesi.
Bir sonraki denemede namespace kontrol edilmeli.
```

Bu yaklaşım mevcut görev içinde kaliteyi artırabilir. Ancak öğrenilen bilgi kalıcı değilse, sistem bir sonraki görevde aynı hatayı tekrar yapabilir.

---

### 3. Memory-Based İyileştirme

Bu seviyede sistem deneyimden çıkan bilgiyi kalıcı veya yarı kalıcı hafızaya yazar.

```text
Deneyim -> Ders çıkarımı -> Hafıza -> Gelecek görevlerde kullanım
```

Bu oldukça pratik ve gerçekçi bir self-improvement seviyesidir.

Örneğin bir yazılım projesi için agent memory şunları içerebilir:

```markdown
- Bu projede migration dosyaları manuel düzenlenmemeli.
- PostgreSQL tarafında embedding vektör boyutu 1024 olarak kullanılmalı.
- Servis sınıflarında Dapper CommandDefinition tercih edilmeli.
- Test çalıştırmadan refactoring tamamlanmış sayılmamalı.
```

Bu tür bilgiler sistemin zamanla proje bağlamına daha uyumlu hale gelmesini sağlar.

---

### 4. Tool ve Workflow İyileştirme

Daha gelişmiş seviyede sistem sadece hafızasını değil, kullandığı araçları veya iş akışını da iyileştirebilir.

Örneğin:

* Eksik test script'i oluşturabilir.
* Daha iyi bir lint kuralı önerebilir.
* Sık yapılan kontroller için otomatik doğrulama script'i yazabilir.
* Dokümantasyon şablonunu geliştirebilir.
* Prompt veya agent instruction dosyasını güncelleyebilir.

Bu noktada dikkatli olunmalıdır. Çünkü sistem artık kendi çalışma ortamını da değiştirmeye başlar.

Bu güçlü bir yaklaşımdır ama mutlaka versiyon kontrolü, onay mekanizması, rollback ve insan denetimi ile birlikte tasarlanmalıdır.

---

### 5. Recursive Self-Improvement

En ileri ve en tartışmalı seviye recursive self-improvement'tır.

Bu kavram, yapay zekânın kendi kapasitesini artıracak sistemleri geliştirmesi, sonra bu daha güçlü sistemlerin daha da gelişmiş sistemler üretmesi fikrine dayanır.

Bu konu akademik, etik ve güvenlik açısından oldukça kritiktir. Günümüzde pratik kurumsal uygulamaların büyük bölümü bu seviyede değildir.

Bugün iş dünyası için gerçekçi olan yaklaşım şudur:

> Sınırsız şekilde kendini değiştiren bir yapay zekâ değil; sınırları, testleri, kayıtları ve insan denetimi olan kontrollü iyileştirme döngüleri tasarlamak.

---

## Erken Benchmark Sonuçları Bize Ne Söylüyor?

Loop engineering henüz tek başına olgunlaşmış, standart bir benchmark kategorisine sahip değil. Bugün elimizde "loop engineering benchmark" diye herkesin kabul ettiği tek bir ölçüm seti bulunmuyor.

Ancak farklı araştırma ve benchmark çalışmaları, aynı yöne işaret eden önemli sonuçlar veriyor.

Bu sonuçların ortak mesajı şu:

> Tek seferlik iyi bir prompt, basit görevlerde yeterli olabilir. Ancak görev uzadıkça, araç kullanımı gerektikçe, hata düzeltme ihtimali arttıkça ve doğrulama ihtiyacı doğdukça başarı giderek prompt'un kendisinden çok, modelin etrafındaki döngüye bağlı hale geliyor.

Örneğin **Self-Refine** çalışması, modelin ilk cevabını üretip durması yerine kendi çıktısına geri bildirim vermesi ve bu çıktıyı iteratif olarak iyileştirmesi fikrini test ediyor. Bu yaklaşım; ek supervised training, reinforcement learning veya model ağırlığı güncellemesi gerektirmeden, farklı görevlerde tek adımlı üretime göre anlamlı iyileşmeler sağlıyor. Çalışmada raporlanan ortalama yaklaşık **20 puanlık mutlak performans artışı**, basit bir "generate → feedback → refine" döngüsünün bile bazı görevlerde ciddi fark yaratabileceğini gösteriyor. [1]

Yazılım geliştirme tarafında **SWE-bench** önemli bir kırılma noktasıdır. Bu benchmark, modelleri yapay kod soruları üzerinde değil, gerçek GitHub issue'ları üzerinde değerlendirir. Modelden beklenen şey yalnızca kod parçası üretmek değildir; mevcut kod tabanını anlaması, ilgili dosyaları bulması, değişiklik yapması ve testleri geçecek bir patch üretmesidir. İlk SWE-bench çalışmasında en iyi modelin yalnızca **%1.96** başarıya ulaşması, gerçek yazılım geliştirme görevlerinin tek seferlik prompt yaklaşımıyla ne kadar zor çözüldüğünü açıkça göstermiştir. [2]

Daha sonra gelen **SWE-bench Verified** ise 500 insan doğrulamalı örnekten oluşan daha güvenilir bir alt küme sunar. Burada artık sadece model değil, modelin etrafındaki sistem de önemlidir. Leaderboard'da basit agent loop'ları, RAG kullanan sistemler, çoklu deneme yapan yaklaşımlar ve review mekanizmaları olan yapılar birlikte değerlendirilir. Bu da yazılım geliştirme ajanlarında başarının yalnızca model kalitesiyle değil, loop tasarımıyla da ilişkili olduğunu gösterir. [3]

Benzer bir durum web ajanlarında da görülür. **WebArena**, e-ticaret, forum, yazılım geliştirme ve içerik yönetimi gibi gerçekçi web ortamlarında uzun ufuklu görevleri değerlendirir. Çalışmada GPT-4 tabanlı en iyi agent'ın **%14.41** başarı oranına ulaşmasına karşın insan performansının **%78.24** seviyesinde olması, bugün agent sistemlerinin hâlâ ciddi şekilde zorlandığını gösterir. Ancak bu sonuç aynı zamanda neden loop engineering'e ihtiyaç duyduğumuzu da açıklar: web görevleri tek cevap üretme problemi değil; planlama, tıklama, gözlemleme, hata düzeltme ve hedefe doğru ilerleme problemidir. [4]

Kurumsal operasyonlar açısından **τ-bench** özellikle dikkat çekicidir. Bu benchmark, müşteri hizmetleri benzeri senaryolarda bir ajanın kullanıcıyla konuşmasını, şirket politikalarına uymasını ve API araçlarıyla doğru işlemleri yapmasını değerlendirir. Değerlendirme, konuşmanın güzel görünmesine göre değil, görev sonunda veri tabanının doğru hedef duruma gelip gelmediğine göre yapılır. Çalışmada GPT-4o gibi state-of-the-art function calling ajanlarının bile görevlerin **%50'sinden azında** başarılı olduğu ve tekrar denemeler arasında tutarlılık problemleri yaşadığı raporlanır. [5]

Bu benchmark'ların tamamı aynı şeyi söylemiyor; ama aynı yöne işaret ediyor:

```text
Tek cevap üretimi -> sınırlı başarı
İterasyon -> daha iyi çıktı
Araç kullanımı -> daha gerçekçi görevler
Doğrulama -> daha güvenilir sonuç
Hafıza ve geri bildirim -> zaman içinde iyileşme potansiyeli
```

Bu nedenle loop engineering'i "prompt engineering'in yerine geçen moda bir kavram" olarak değil, LLM tabanlı sistemlerin gerçek iş süreçlerine uygulanabilmesi için gerekli bir mühendislik katmanı olarak görmek gerekir.

Benchmark'lar bize iki şeyi aynı anda söylüyor.

Birincisi, döngüler işe yarıyor. Self-refinement, reflection, test çalıştırma, tool-use, RAG, multi-rollout ve review gibi yaklaşımlar birçok görevde tek seferlik üretimden daha güçlü sonuçlar veriyor.

İkincisi, bu alan hâlâ çözülmüş değil. WebArena ve τ-bench gibi benchmark'larda insan performansı ile ajan performansı arasında hâlâ büyük fark var. Bu fark, yalnızca daha büyük modellerle değil; daha iyi loop tasarımı, daha güçlü doğrulama mekanizmaları, daha temiz memory yönetimi, daha iyi tool-use stratejileri ve doğru human-in-the-loop kararlarıyla kapanacak.

Bu yüzden loop engineering'in bugünkü değeri, "ajanlar artık her şeyi yapabiliyor" iddiası değildir. Tam tersine, bugünkü benchmark'lar bize daha gerçekçi bir mesaj verir:

> Ajanlar karmaşık işleri çözmek için döngülere ihtiyaç duyuyor; fakat bu döngülerin güvenilir, ölçülebilir ve kontrollü şekilde tasarlanması hâlâ ciddi bir mühendislik problemidir.

---

## Yazılım Geliştirmede Loop Engineering

Loop engineering'in en görünür uygulama alanlarından biri yazılım geliştirmedir.

Bir coding agent için örnek döngü şöyle olabilir:

```text
Issue'yu oku
  -> Kod tabanını incele
  -> Değişiklik planı çıkar
  -> Küçük bir değişiklik yap
  -> Derle
  -> Testleri çalıştır
  -> Hata varsa düzelt
  -> Diff'i gözden geçir
  -> Dokümantasyonu güncelle
  -> Pull request hazırla
```

Bu döngüde LLM tek başına hareket etmez. Çevresinde deterministik kontroller vardır.

Örneğin:

* Derleme başarılı mı?
* Unit testler geçti mi?
* Integration testler geçti mi?
* Linter hatası var mı?
* Değişiklik beklenen dosyalarla sınırlı mı?
* Public API kırıldı mı?
* Migration gerekiyorsa oluşturuldu mu?
* Güvenlik açısından riskli bir değişiklik var mı?

Bu kontroller olmadan coding agent kullanımı risklidir. Çünkü model çıktısı ikna edici görünebilir ama teknik olarak hatalı olabilir.

Loop engineering'in en önemli ilkelerinden biri şudur:

> Modelin kendi cevabına güvenme; sonucu bağımsız mekanizmalarla doğrula.

---

## Kurumsal Sistemlerde Loop Engineering

Loop engineering sadece yazılım geliştirme için önemli değildir. Kurumsal yapay zekâ sistemlerinde de kritik hale gelecektir.

Örneğin bir müşteri destek asistanını düşünelim.

Basit yapı:

```text
Müşteri sorusu -> LLM cevabı
```

Daha sağlam loop yapısı:

```text
Müşteri sorusunu al
  -> Niyetini sınıflandır
  -> İlgili dokümanları getir
  -> Cevap taslağı oluştur
  -> Politika kontrolü yap
  -> Güven skoru düşükse insana yönlendir
  -> Cevap ver
  -> Geri bildirimi kaydet
  -> Bilgi tabanında eksik varsa işaretle
```

Bu yapı çok daha güvenilirdir. Çünkü modelin cevabı tek kaynak değildir. RAG, politika kontrolü, güven skoru, insan onayı ve geri bildirim mekanizması birlikte çalışır.

Benzer şekilde üretim, MES/MOM, ERP, CRM, finans veya enerji yönetimi gibi alanlarda da loop engineering önemli olacaktır.

Örneğin bir üretim analizi senaryosunda sistem şu döngüyü izleyebilir:

```text
Kullanıcı sorusunu al
  -> Hangi veri kaynağının uygun olduğunu belirle
  -> Şema ve yetki kontrollerini yap
  -> SQL üret
  -> SQL güvenlik kontrolünden geçir
  -> Sorguyu çalıştır
  -> Sonucu analiz et
  -> Grafik gerekiyorsa üret
  -> Cevabı oluştur
  -> Kullanıcı geri bildirimini kaydet
```

Burada asıl değer, modelin sadece SQL üretmesinde değildir. Değer, bu sürecin güvenli, tekrar edilebilir ve denetlenebilir bir döngü haline getirilmesindedir.

---

## Loop Engineering İçin Temel Tasarım İlkeleri

Loop engineering yaklaşımında bazı temel ilkeler mutlaka dikkate alınmalıdır.

### 1. Döngünün Amacı Net Olmalı

Her loop açık bir hedefe sahip olmalıdır.

Kötü örnek:

```text
Bu problemi çöz.
```

Daha iyi örnek:

```text
Bu issue için minimum kapsamlı bir kod değişikliği yap, mevcut testleri bozma, yeni davranışı kapsayan en az bir test ekle ve değişiklikleri özetle.
```

Hedef net değilse döngü de sağlıklı çalışmaz.

---

### 2. Stop Condition Tanımlanmalı

Bir loop sonsuza kadar çalışmamalıdır.

Örneğin:

```text
En fazla 3 düzeltme denemesi yap.
Testler hâlâ geçmiyorsa dur ve insana raporla.
```

Stop condition olmayan agent sistemleri maliyet, zaman ve güvenlik riski üretir.

---

### 3. Doğrulama Deterministik Olmalı

LLM'in "bence doğru" demesi yeterli değildir.

Mümkün olan her yerde doğrulama deterministik olmalıdır:

* Test çalıştır
* Build al
* Schema validate et
* JSON parse et
* SQL AST kontrolü yap
* Yetki filtresinden geçir
* Statik analiz uygula
* Dosya diff'ini kontrol et

LLM yorumu faydalıdır ama doğrulamanın tamamı LLM'e bırakılmamalıdır.

---

### 4. Memory Hijyeni Sağlanmalı

Self-improving loop'larda memory çok güçlü ama aynı zamanda riskli bir bileşendir.

Yanlış bir ders kalıcı hale gelirse, sistem aynı hatayı sürekli tekrar edebilir.

Bu nedenle memory'ye yazılacak bilgiler:

* Genellenebilir olmalı
* Doğrulanmış olmalı
* Proje bağlamına uygun olmalı
* Gerektiğinde silinebilir veya güncellenebilir olmalı
* Kişisel veya hassas veri içermemeli
* Çelişkili kurallar üretmemeli

Memory bir çöp kutusu değil, sistemin çalışma bilgeliğidir.

---

### 5. İnsan Denetimi Tasarıma Dahil Edilmeli

Her şeyi otomatikleştirmek doğru hedef değildir.

Bazı durumlarda sistem durup insana sormalıdır:

* Üretim verisi değiştirilecekse
* Kritik güvenlik ayarı etkileniyorsa
* Yetki modeli değişiyorsa
* Finansal sonuç doğuran işlem varsa
* Kullanıcı niyeti belirsizse
* Testler başarısız ama agent çözüm öneremiyorsa
* Model güven skoru düşükse

İyi tasarlanmış loop, ne zaman devam edeceğini bildiği kadar ne zaman duracağını da bilmelidir.

---

## Loop Engineering ve Ajan Mimarileri

Loop engineering, agent kavramıyla yakından ilişkilidir ama aynı şey değildir.

Agent genellikle hedefe ulaşmak için araç kullanabilen LLM tabanlı bileşendir.

Loop engineering ise bu agent'ın nasıl çalışacağını belirleyen mimari disiplindir.

Bir agent şu araçlara sahip olabilir:

* Dosya okuma/yazma
* Terminal komutu çalıştırma
* Web arama
* Veritabanı sorgulama
* API çağırma
* Test çalıştırma
* E-posta taslağı oluşturma
* Takvim kontrolü
* Doküman arama

Ancak bu araçların olması yeterli değildir. Asıl kritik soru şudur:

> Agent bu araçları hangi sırayla, hangi sınırlar içinde, hangi doğrulama mekanizmalarıyla ve hangi durumda durarak kullanacak?

Bu sorunun cevabı loop engineering'in konusudur.

---

## Basit Bir Self-Improving Coding Loop Örneği

Aşağıdaki yapı basit ama gerçekçi bir coding loop örneğidir:

```text
1. Görevi oku.
2. İlgili dosyaları bul.
3. Değişiklik planı oluştur.
4. Küçük bir kod değişikliği yap.
5. Build çalıştır.
6. Testleri çalıştır.
7. Başarısızlık varsa:
   - Hata mesajını analiz et.
   - Düzeltme yap.
   - En fazla 3 kez tekrar dene.
8. Başarı varsa:
   - Diff'i özetle.
   - Öğrenilen kalıcı bir kural varsa memory'ye öner.
9. Kullanıcıya sonuç raporu ver.
```

Bu döngüde self-improvement şu noktalarda gerçekleşebilir:

* Tekrarlayan hata türleri kaydedilir.
* Projeye özgü kurallar öğrenilir.
* Test çalıştırma sırası optimize edilir.
* Kodlama standartları hafızaya alınır.
* Gelecekteki görevler için kontrol listesi güncellenir.

Ancak her öğrenme otomatik olarak kalıcı hale getirilmemelidir. Bazı dersler sadece o göreve özeldir. Kalıcı hafızaya alınacak bilgi dikkatle seçilmelidir.

---

## Loop Engineering'in Riskleri

Loop engineering güçlü bir yaklaşım olsa da riskleri vardır.

### Sonsuz Döngü Riski

Agent sürekli hata alıp tekrar deneyebilir. Bu hem maliyet hem zaman kaybıdır.

Çözüm:

```text
Maksimum deneme sayısı
Zaman limiti
Token limiti
Başarısızlık durumunda insan eskalasyonu
```

---

### Yanlış Başarı Riski

Model bazen işi tamamlamadığı halde tamamladığını söyleyebilir.

Çözüm:

```text
Başarı kriterleri model yorumu değil, ölçülebilir kontroller olmalı.
```

---

### Context Drift Riski

Uzun döngülerde model başlangıç hedefinden sapabilir.

Çözüm:

```text
Her iterasyonda orijinal hedef ve kısıtlar yeniden görünür olmalı.
```

---

### Bad Memory Riski

Yanlış öğrenilen bir kural gelecekte daha büyük hatalara yol açabilir.

Çözüm:

```text
Memory yazımı kontrollü, gözden geçirilebilir ve gerekirse geri alınabilir olmalı.
```

---

### Aşırı Yetki Riski

Agent'a fazla yetki verilirse istemeden kritik değişiklikler yapabilir.

Çözüm:

```text
Least privilege prensibi uygulanmalı.
Üretim ortamı işlemleri insan onayına bağlı olmalı.
```

---

## trex Lens AI Gibi Sistemler İçin Anlamı

Kurumsal yapay zekâ ürünlerinde loop engineering yaklaşımı çok değerli hale gelecektir.

Örneğin trex Lens AI gibi doğal dil ile veri sorgulama, raporlama, analiz ve karar destek kabiliyeti sunan sistemlerde tek amaç "kullanıcının sorusuna cevap vermek" değildir.

Daha doğru hedef şudur:

> Kullanıcının iş niyetini anlayan, doğru veri kaynağını seçen, yetki kontrollerini uygulayan, güvenli sorgu üreten, sonucu doğrulayan, gerekirse görselleştiren ve öğrenilen geri bildirimi sisteme kontrollü şekilde kazandıran bir analiz döngüsü tasarlamak.

Bu bakış açısıyla Lens AI benzeri sistemlerde loop şu adımlardan oluşabilir:

```text
Kullanıcı sorusunu al
  -> Niyeti belirle
  -> Uygun katalog/veri kaynağını seç
  -> RBAC ve RLS kontrollerini uygula
  -> İlgili şema ve doküman bağlamını getir
  -> SQL üret
  -> SQL güvenlik kontrolünden geçir
  -> Sorguyu çalıştır
  -> Sonucu analiz et
  -> Grafik veya rapor gerekiyorsa üret
  -> Kullanıcıya açıklanabilir cevap ver
  -> Geri bildirimi kaydet
  -> Tekrarlayan hata veya eksik bağlam varsa iyileştirme öner
```

Burada yapay zekâ sadece cevap üreten bir bileşen değildir. Güvenli, denetlenebilir ve kurumsal kurallara bağlı bir veri analiz döngüsünün parçasıdır.

Bu, prompt engineering'den çok daha ileri bir mühendislik problemidir.

---

## Sonuç

Loop engineering, yapay zekâ sistemlerinin olgunlaşmasında önemli bir sonraki adımdır.

Prompt engineering bize modeli nasıl yönlendireceğimizi öğretti. Loop engineering ise modelin bir iş akışı içinde nasıl güvenli, tekrarlanabilir, doğrulanabilir ve zamanla daha iyi hale gelebilir şekilde çalışacağını öğretir.

Self-improving loop kavramı da bu dönüşümün merkezindedir. Ancak burada dikkatli olmak gerekir. Kendi kendini iyileştirme, sınırsız ve kontrolsüz bir otonomi anlamına gelmemelidir.

Erken benchmark sonuçları bu konuda dengeli bir tablo çiziyor. Bir tarafta iteratif iyileştirme, tool-use, test çalıştırma, RAG ve review mekanizmaları gibi yaklaşımların tek seferlik üretimden daha iyi sonuçlar verdiğini görüyoruz. Diğer tarafta ise gerçek web görevleri, yazılım geliştirme görevleri ve müşteri operasyonları gibi alanlarda ajanların hâlâ insan performansının oldukça gerisinde kaldığını görüyoruz.

Bu nedenle kurumsal yazılım sistemleri için en doğru yaklaşım şudur:

> Yapay zekâya sınırsız özgürlük vermek değil; ona net hedefler, güçlü doğrulama mekanizmaları, sınırlı yetkiler, gözlemlenebilir döngüler ve gerektiğinde insan denetimi sağlayan bir çalışma alanı tasarlamak.

Önümüzdeki dönemde iyi yapay zekâ ürünlerini sadece iyi model kullanan ürünler belirlemeyecek. Asıl farkı, bu modellerin etrafına kurulan döngüler, doğrulama mekanizmaları, hafıza yapıları ve güvenli otomasyon mimarileri oluşturacak.

Bu nedenle loop engineering, özellikle yazılım geliştirme, veri analizi, kurumsal otomasyon ve AI agent mimarileri için giderek daha kritik bir mühendislik alanı haline gelecek.

Bana göre en doğru özet şu:

> Gelecek, tek seferlik iyi prompt yazanların değil; güvenilir, ölçülebilir ve kendini kontrollü şekilde iyileştiren yapay zekâ döngüleri tasarlayanların olacak.

---

## Referanslar

[1] Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Shashank Gupta, Bodhisattwa Prasad Majumder, Katherine Hermann, Sean Welleck, Amir Yazdanbakhsh, Peter Clark. [**Self-Refine: Iterative Refinement with Self-Feedback**](https://arxiv.org/abs/2303.17651). arXiv:2303.17651, 2023.

[2] Carlos E. Jimenez, John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, Karthik Narasimhan. [**SWE-bench: Can Language Models Resolve Real-World GitHub Issues?**](https://arxiv.org/abs/2310.06770). arXiv:2310.06770, 2023.

[3] SWE-bench. [**SWE-bench Verified**](https://www.swebench.com/verified.html).

[4] Shuyan Zhou, Frank F. Xu, Hao Zhu, Xuhui Zhou, Robert Lo, Abishek Sridhar, Xianyi Cheng, Tianyue Ou, Yonatan Bisk, Daniel Fried, Uri Alon, Graham Neubig. [**WebArena: A Realistic Web Environment for Building Autonomous Agents**](https://arxiv.org/abs/2307.13854). arXiv:2307.13854, 2023.

[5] Karthik Narasimhan et al. / Sierra Research. [**τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains**](https://arxiv.org/abs/2406.12045). arXiv:2406.12045, 2024.

---

{% include share_twitter_tr.html %}

---
