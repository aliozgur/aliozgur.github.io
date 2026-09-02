---
layout: post
title: "Yazılım Geliştirme Standartları Yapay Zekâ Çağına Hazır mı?"
subtitle: "SPICE, ISO 12207, CMMI ve Diğer SDLC Yaklaşımlarında AI Katkısının İzlenebilirliği"
date: 2026-08-09
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:
  - ai
  - software
  - standards
  - governance
  - process

---

Yapay zekânın yazılım geliştirme süreçlerine girişi artık "gelecekte yaşanabilecek" bir dönüşüm değil.

Bugün bir yazılım geliştirici gereksinimi analiz ederken ChatGPT kullanabiliyor, mimari alternatifleri Claude ile tartışabiliyor, Cursor veya GitHub Copilot ile kod yazabiliyor, Codex benzeri bir ajanı bir issue üzerinde çalıştırabiliyor, oluşturulan kodu başka bir LLM'e (Large Language Model — Büyük Dil Modeli) inceletebiliyor ve son olarak ortaya çıkan değişikliği Git üzerinden pull request olarak gönderebiliyor.

{::comment}end-of-excerpt{:/comment}

Birkaç yıl öncesine kadar yazılım geliştirme sürecinin temel varsayımı oldukça basitti:

**İnsan bir mühendislik faaliyeti gerçekleştirir ve bunun sonucunda bir mühendislik çıktısı oluşur:**

```text
İsterler → Tasarım → Kod → Test → Gözden Geçirme → Commit → Build → Release
```

Bugünün gerçekliği ise giderek farklılaşıyor.

Bir gereksinimin ilk taslağını bir LLM oluşturabiliyor. Mimari kararın alternatiflerini başka bir model üretebiliyor. Kodun önemli bir kısmını AI kodlama ajanı yazabiliyor. Unit test'leri başka bir model oluşturabiliyor. Pull request açıklaması otomatik hazırlanabiliyor. Hatta kod incelemesinin ilk aşaması yine bir AI agent tarafından gerçekleştirilebiliyor.

Dolayısıyla mühendislik zinciri artık daha çok şuna benziyor:

```text
İnsan → AI oturumu → context → model → üretilen çıktı → 
insan değişikliği → AI review → insan onayı → commit → build → release
```

Burada ilginç bir problem ortaya çıkıyor.

Yazılım dünyasında yıllardır süreç kalitesini, izlenebilirliği ve denetlenebilirliği ölçmek için kullandığımız oldukça olgun modeller var:

- Automotive SPICE (Software Process Improvement and Capability dEtermination),
- ISO/IEC/IEEE 12207,
- ISO/IEC 330xx,
- CMMI (Capability Maturity Model Integration),
- IEC 62443-4-1,
- NIST (National Institute of Standards and Technology) Secure Software Development Framework,
- ISO/IEC 27001,
- son yıllarda bunlara eklenen ISO/IEC 42001 ve diğer AI standartları.

Peki bu standartlar **AI'nın mühendislik sürecine yaptığı katkıyı** gerçekten görebiliyor mu? Bir başka ifadeyle:

> Bir denetçi, iki yıl sonra belirli bir gereksinimin, mimari kararın, kaynak kod değişikliğinin veya test senaryosunun hangi bölümünün insan tarafından, hangi bölümünün yapay zekâ tarafından üretildiğini ve insanın bu çıktıyı nasıl değerlendirdiğini anlayabilir mi?

Bence önümüzdeki birkaç yılın yazılım mühendisliği yönetişiminde en önemli sorulardan biri bu olacak.

---

# Önce terminolojiyi doğru kuralım: AI sistemi geliştirmek başka, AI ile yazılım geliştirmek başka

Burada çok önemli bir ayrım var: son birkaç yılda standart dünyası yapay zekâ konusunda oldukça hızlı hareket etti.

**ISO/IEC 42001:2023**, AI Management System için uluslararası bir yönetim sistemi standardı oluşturuyor ve kuruluşların AI sistemlerini sorumlu biçimde geliştirmesi, sağlaması veya kullanması için yönetişim, risk ve sürekli iyileştirme mekanizmaları tanımlıyor. ISO, 42001'i dünyanın ilk AI yönetim sistemi standardı olarak tanımlıyor. [1]

**ISO/IEC 5338:2023** ise AI sistemlerinin yaşam döngüsü için süreçler tanımlıyor. Üstelik bunu yaparken **ISO/IEC/IEEE 12207** ve **ISO/IEC/IEEE 15288** yaşam döngüsü modellerini temel alıyor ve bunlara AI'ya özgü süreçler ekliyor. [2]

**ISO/IEC 23894:2023** AI risk yönetimini ele alıyor. [3] **ISO/IEC 42005:2025** ise AI sistemlerinin bireyler, gruplar ve toplum üzerindeki etkilerinin sistematik biçimde değerlendirilmesine yönelik bir etki değerlendirme süreci getiriyor. [4]

**ISO/IEC 25059:2023**, SQuaRE (Systems and software Quality Requirements and Evaluation) ailesini AI sistemlerine doğru genişleterek AI sistem kalitesinin tanımlanması, ölçülmesi ve değerlendirilmesi için bir kalite modeli sağlıyor. [5]

Bunların tamamı önemli, fakat çoğunun cevaplamaya çalıştığı soru şu:

> **Bir AI sistemini nasıl kontrollü, kaliteli, güvenli ve sorumlu biçimde geliştiririz?**

Benim burada tartıştığım soru ise farklı:

> **AI kullanarak başka bir yazılım sistemini geliştiriyorsak bu katkıyı nasıl izleriz?**

İki problem birbirine çok yakın görünüyor ama aslında aynı değiller.

Örneğin bir otomotiv şirketi tamamen klasik deterministik C++ yazılımından oluşan bir ECU (Electronic Control Unit — Elektronik Kontrol Ünitesi) geliştiriyor olabilir; ürünün içerisinde herhangi bir makine öğrenmesi modeli bulunmayabilir. Dolayısıyla geliştirilen ürün bir AI sistemi değildir.

Ama ECU yazılımındaki:

- gereksinimlerin %30'u bir LLM yardımıyla yazılmış,
- mimari alternatiflerin önemli bölümü AI ile değerlendirilmiş,
- kodun %50'si AI kodlama ajanı tarafından üretilmiş,
- unit test'lerin %70'i AI tarafından oluşturulmuş,
- pull request'lerin tamamına AI review etmiş

olabilir.

Bu durumda ürün bir AI ürünü değildir, ama **mühendislik süreci yoğun biçimde AI desteklidir.** Mevcut standartların zorlandığı alan tam olarak burasıdır.

---

# SPICE: AI'yı ürün olarak görüyor, peki mühendis olarak görüyor mu?

Automotive SPICE bu tartışma için özellikle iyi bir örnek; öncelikle küçük ama önemli bir terminolojik tespit yapmak gerekiyor.

Automotive SPICE teknik anlamda klasik bir "sertifikasyon standardı" değildir. Bir **Process Reference Model (PRM) ve Process Assessment Model (PAM)** üzerinden süreç yetkinliğinin değerlendirilmesini sağlar. VDA (Alman Otomotiv Sanayii Birliği) da Automotive SPICE'ın **ISO/IEC 330xx** ailesini temel aldığını ve geliştirme süreçlerinin değerlemdirilmesi (assesment) için PRM/PAM kullandığını açıkça belirtiyor. [6]

Güncel yayımlanmış temel model Automotive SPICE 4.0'dır ve Aralık 2023 sürümü VDA tarafından resmi model olarak yayımlanmıştır. 2026 içerisinde Automotive SPICE 4.1 için önizleme içeriği de yayımlanmıştır. [7]

Automotive SPICE'ın en güçlü yanlarından biri izlenebilirliktir. Kabaca düşündüğümüzde model bizden şu ilişkileri kurmamızı bekler:

```text
Stakeholder Requirement - Paydaş İsterleri
      ↓
System Requirement      - Sistem İsterleri
      ↓
System Architecture     - Sistem Mimarisi
      ↓
Software Requirement    - Yazılımın İsterler
      ↓
Software Architecture   - Yazılım Mimarisi
      ↓
Detailed Design         - Ayrıntılı Tasarım
      ↓
Implementation          - Uygulama/Geliştirme
      ↓
Verification            - Doğrulama
```

Bu zincir modern yazılım mühendisliğinde son derece değerlidir, çünkü bir kod değişikliğinin neden yapıldığını veya belirli bir isterin hangi testlerle doğrulandığını gösterebilirsiniz.

Fakat yeni bir soru soralım. SWE.3 (Automotive SPICE'ın Software Engineering süreç grubundaki bir süreç kimliği) kapsamında üretilmiş bir ayrıntılı yazılım tasarımı (software detailed design) ve birim geliştirme (unit construction) çıktısına bakıyoruz:

```text
[x] Git geçmişi mevcut
[x] İster bağlantısı mevcut
[x] Jira kaydı mevcut
[x] Review yapılmış
[x] Birim test çalışmış
[x] CI pipeline başarılı
```

Her şey olması gerektiği gibi görünüyor. Ama geliştirmenin büyük bölümünü bir AI kodlama ajanı yaptıysa?

Mevcut izlenebilirlik grafiğimiz bize şunu gösterebilir:

```text
İster → Tasarım  → Kod → Test
```

Fakat şunu göstermeyebilir:

```text
Mühendis → Prompt → Model/Ajan → Değişiklik →
İnsan Müdahalesi → Review → Kod
```

Bu önemli bir fark.

Daha da ilginci Automotive SPICE 4.0'ın Makine Öğrenmesi Mühendislik (Machine Learning Engineering) süreçlerini modele dahil etmiş olmasıdır. MLE süreçleri ve ML Data Management gibi alanlarla Automotive SPICE artık makine öğrenmesi tabanlı fonksiyonların geliştirilmesini de kapsamına alıyor. Resmi PAM, modelin önceki sürümlerine göre ML engineering kapsamını genişletmiş durumda. [8]

Bu çok önemli bir ilerleme, ama yine aynı ayrımla karşılaşıyoruz.

Automotive SPICE artık daha iyi biçimde **"Makine Öğrenmesi içeren bir otomotiv fonksiyonunu nasıl geliştiriyoruz?"** sorusunu soruyor.

Benim aradığım ise **"SWE.1, SWE.2, SWE.3 veya SWE.4 faaliyetlerini yerine getirirken AI kullanıldıysa bunun kanıtı nerede?"** sorusu.

Bunlar aynı problem değil.

---

# ISO/IEC/IEEE 12207:2026 neden özellikle önemli?

Bu yazıyı 2026 yılında yazmanın ilginç yanlarından biri ISO/IEC/IEEE 12207'nin de yeni sürümünün yayımlanmış olması.

ISO/IEC/IEEE 12207:2026, yazılım sistemlerinin, ürünlerinin ve servislerinin kavramsallaştırma (conception) aşamasından geliştirme, işletim, destek ve hizmetten çekilme (retirement) aşamalarına kadar tüm yaşam döngüsünü kapsıyor. Standart; edinim ve tedarik süreçlerini de kapsayacak şekilde kuruluş içi veya harici geliştirme modellerine uygulanabiliyor. [9]

2017 sürümü artık yürürlükten kaldırılmış durumda ve yerini 2026 sürümü almış bulunuyor. [10]

12207'nin önemli özelliği belirli bir geliştirme metodolojisini dayatmaması: waterfall kullanabilirsiniz, agile kullanabilirsiniz, incremental geliştirme yapabilirsiniz, süreçleri paralel, iteratif veya recursive biçimde uygulayabilirsiniz. Bu esneklik AI destekli geliştirmeye uyum sağlamak açısından aslında avantaj.

Standart açısından önemli olan:

- gerekli faaliyetlerin gerçekleştirilmesi,
- gerekli çıktının oluşması,
- kontrolün uygulanması,
- sorumluluğun tanımlanması,
- yaşam döngüsünün yönetilebilmesi.

Ancak burada da yine aynı sorun var: standart bize bir work product'ın yaşam döngüsünü yönetmek için güçlü bir çerçeve sağlıyor. Fakat work product'ın **nasıl üretildiği** artık çok daha karmaşık hale geldi.

Bugünkü yapılandırma yönetimi sistemleri şu bilgiyi son derece iyi tutuyor:

```text
Commit: 87f42ab
Author: ali
Date: ...
Files changed: ...
Parent commit: ...
Pull Request: #1428
```

Fakat gerçek mühendislik geçmişi şöyle olabilir:

```text
Yazılım Geliştirici
   ↓
Issue #421
   ↓
AI Kodlama Ajanı Oturumu #A81F
   ↓
Model X / Versiyon Y
   ↓
Kod Bağlamı
   ↓
Üretilen Değişiklik #1
   ↓
Yazılım Geliştirici Red 40%
   ↓
Üretilen Değişiklik #2
   ↓
Yazılım Geliştirici manuel olarak çıktıyı düzeltir
   ↓
AI Review Ajanı
   ↓
Yazılım Geliştirici Review
   ↓
Commit 87f42ab
```

Git bu zincirin sadece son kısmını biliyor; Jira, AI aracı, IDE ve CI/CD sistemi ise başka kısımlarını biliyor. Dolayısıyla sorun aslında veri eksikliği değil: **sorun, mühendislik sürecine ait menşei takibinin (provenance) parçalanmış olması.**

---

# ISO/IEC 330xx açısından daha da ilginç bir problem var: Ölçemediğimiz süreci ne kadar yönetiyoruz?

SPICE dünyasının temelinde süreç yetkinlik değerlendirmesi bulunuyor.

ISO/IEC TR 33022:2024, ISO/IEC/IEEE 12207 yaşam döngüsü süreçlerini ISO/IEC 33020'nin süreç yetkinliği ölçüm ölçeği ile ilişkilendiriyor ve özellikle yetkinlik seviyesi 1-3 için bir eşleme sağlıyor. [11]

Buradan daha zor bir soru ortaya çıkıyor.

Bir kuruluş:

- AI kullanım oranını bilmiyorsa,
- Hangi süreçlerde AI kullanıldığını bilmiyorsa,
- AI çıktılarının ne kadarının kabul edildiğini bilmiyorsa,
- AI tarafından üretilen değişikliklerin ne kadar yeniden işçilik oluşturduğunu bilmiyorsa,
- AI destekli değişikliklerle insan tarafından gerçekleştirilen değişikliklerin hata karakteristiğini ayıramıyorsa,

AI yoğun bir geliştirme ortamında süreç performansını gerçekten ne kadar ölçüyor?

Bu noktada özellikle dikkat çekici olan yeni çalışmalar, AI sistem yaşam döngüsü süreçlerinin ISO/IEC 330xx ailesindeki yetkinlik ölçüm/değerlendirme yaklaşımıyla ilişkilendirilmeye başlamış olmasıdır.

Bu önemli, çünkü SPICE yaklaşımının AI dünyasına taşındığını gösteriyor.

Ama kapsam tekrar **AI system lifecycle**.

Bizim boşluğumuz ise hâlâ orada duruyor:

> AI sistemi geliştirmiyorum. AI ile yazılım geliştiriyorum. Bu geliştirme faaliyetinin yetkinlik ve menşei takip modelini nasıl kuracağım?

---

# CMMI AIM: Bugün bu probleme en fazla yaklaşan yapılardan biri olabilir

CMMI tarafı 2026 itibarıyla daha da ilginç hale geldi.

CMMI Institute, **CMMI Artificial Intelligence Maturity — CMMI AIM** yaklaşımını duyurdu.

CMMI AIM'in amacı kuruluşların AI yetkinliğini bütünleşik yönetişim, tekrarlanabilir süreçler, ölçülebilir sonuçlar ve sürekli iyileştirme perspektifinden değerlendirebilmek. [12]

CMMI AIM'in yayınlanan materyalleri de AI olgunluğu, gözetim ve kurumsal performans kavramlarını mevcut CMMI yaklaşımıyla ilişkilendiriyor. [13]

Burada CMMI'ın avantajı şu: CMMI'ın zihniyeti zaten yalnızca "çıktı var mı?" sorusuna dayanmaz; kurumsal:

- yetkinlik,
- ölçüm,
- yönetişim,
- tekrarlanabilme,
- kurumsallaştırma

gibi kavramlarla ilgilenir.

Dolayısıyla AI kullanımının organizasyonel bir mühendislik kabiliyeti olarak ele alınması açısından CMMI AIM doğru yönde önemli bir adım.

Fakat yine dikkatli olmamız gerekiyor. "Kuruluş AI'yı olgun biçimde yönetiyor mu?" ile "Bu pull request'in hangi bölümleri hangi AI etkileşimi sonucunda oluştu?" aynı soru değildir.

Bir şirket CMMI AIM açısından oldukça olgun olabilir ve yine de belirli bir kod değişikliğinin AI menşeili olduğunu ortaya koyamayabilir. Bu nedenle benim gözümde CMMI AIM, **AI yönetişim olgunluğu** açısından güçlü bir gelişme; ama AI mühendislik atfı (attribution) açısından tek başına yeterli olduğunu söylemek için henüz erken.

---

# ISO/IEC 42001: AI yönetişimi var, mühendislik menşei takibi ayrı bir konu

ISO/IEC 42001 muhtemelen önümüzdeki yıllarda kurumsal AI yönetişimi açısından en çok karşılaşacağımız standartlardan biri olacak.

Üstelik 42001 bir yönetim sistemi standardıdır ve bağımsız sertifikasyon kuruluşları üzerinden sertifikasyon yapılabilir. [14]

ISO/IEC 42006:2025 ise AI yönetim sistemi sertifikasyonunu  gerçekleştirecek kuruluşların yetkinliği ve denetim disiplinine ilişkin gereksinimleri tanımlayarak bu sertifikasyon ekosistemini tamamlıyor. [15]

ISO 42001 bize şu konularda güçlü bir çerçeve sağlayabilir:

```text
[ ] AI kullanım politikamız var mı?
[ ] Riskleri belirledik mi?
[ ] Sorumlulukları tanımladık mı?
[ ] AI sistemlerinin kullanımını kontrol ediyor muyuz?
[ ] Veri ve güvenlik risklerini değerlendiriyor muyuz?
[ ] AI kullanımında gerekli governance mekanizmalarını oluşturduk mu?
```

Bunların hepsi gerekli.

Örneğin bir AI kodlama asistanı kullanırken:

- kaynak kodunun üçüncü taraf modele gönderilmesi,
- müşteri bilgilerinin prompt içerisine girmesi,
- credential veya secret sızıntısı,
- lisans problemi oluşturabilecek çıktı,
- güvenli olmayan kod üretimi,
- yanlış teknoloji veya API önerileri

gibi çok sayıda risk bulunuyor.

ISO 42001 bu risklerin yönetimini kurumsal perspektiften düşünmemize yardımcı oluyor; ancak atıf (attribution) sorusu başka.

Bir kuruluşun AI kullanım politikası olduğunu bilmek ile belirli bir release içerisindeki AI katkısını kanıtlamak arasında büyük bir mesafe var.

---

# NIST SSDF ve SP 800-218A: Güvenli Yazılım Geliştirme Uygulamaları AI'ya yaklaşıyor

NIST Secure Software Development Framework, yani SP 800-218 SSDF, güvenli yazılım geliştirme uygulamalarının mevcut SDLC modellerine entegre edilebilmesi için üst seviye bir güvenli geliştirme yaklaşımı sunuyor. [16]

NIST 2024 yılında bunu Generative AI dünyasına genişleten **SP 800-218A** dokümanını yayımladı.

218A, SSDF 1.1 içerisindeki uygulamalara GenAI ve dual-use foundation model geliştirmesine özgü ek pratikler, görevler ve öneriler getiriyor. [17]

Bu önemli bir gelişme; ancak burada yine çok tanıdık bir sınır görüyoruz.

218A ağırlıklı olarak **AI modelini nasıl güvenli geliştiririm?** sorusunu genişletiyor.

Bizim problemimiz ise **AI modelini kullanarak başka yazılım geliştirirken kanıt zincirini nasıl korurum?**

Bir güvenlik denetimi açısından bunun önemi oldukça yüksek. Örneğin AI kodlama ajanın ürettiği kod şöyle bir yol izleyebilir:

```text
AI kodlama ajanı SQL injection açığı içeren kod üretir
      ↓
İnsan kodu review eder (açık fark edilmez)
      ↓
Statik analiz açığı yakalamaz
      ↓
Değişiklik production'a çıkar
      ↓
Altı ay sonra açık bulunur
```

Bu noktada yalnızca "commit'i kim yaptı?" sorusunu sormak artık yeterli olmayabilir.

Gerçek kök neden analizi şu soruları da gerektirebilir:

- Kod ilk olarak kim veya ne tarafından oluşturuldu?
- Hangi AI ajanı kullanıldı?
- Aı ajanı hangi bağlama sahipti?
- Güvenlik politikaları AI ajanına aktarılmış mıydı?
- AI ajanının ürettiği kod üzerinde insan ne değiştirdi?
- Hangi review adımları uygulandı?
- Review yapan AI aynı model ailesi miydi?
- İnsan reviewer gerçekten kodu inceledi mi, yoksa AI review sonucunu mı kabul etti?

Bunlar klasik SDLC telemetrisinin dışında kalan yeni sorular.

---

# IEC 62443-4-1: Endüstriyel yazılım açısından problem daha kritik

Endüstriyel yazılım geliştiren şirketler açısından IEC 62443-4-1 ayrıca önemli.

IEC 62443-4-1, Endüstriyel Otomasyon ve Kontrol Sistemleri için geliştirilen ürünlerde güvenli yazılım geliştirme döngüsünün gereksinimlerini ele alıyor.

Kapsamında:

- Güvenlik ister tanımlama (security requirements definition),
- Güvenli tasarım (secure design),
- Güvenli geliştirme (secure implementation),
- Kodlama Yönergeleri (coding guidelines),
- Doğrulama ve Onaylama (verification ve validation),
- Kusur Yönetimi (defect management),
- Yama Yönetimi (patch management),
- Ürün desteğini/kullanımını sonlandırma (product end-of-life)

gibi yazılım geliştirme yaşam döngüsü faaliyetleri bulunuyor. [18]

IEC'nin açıklamalarında 62443-4-1 doğrudan güvenli ürün geliştirme süreci gereksinimlerini tanımlayan standart olarak konumlandırılıyor. [19]

Şimdi bunu gerçek bir IIoT ürünü açısından düşünelim. Bir yazılım geliştirici Modbus TCP, OPC UA veya PLC iletişimi kullanan kritik bir bileşen geliştiriyor ve AI kodlama asistanı ona ağ paketlerini işlemek için kullanılacak kodu öneriyor:

```text
AI kodlama asistanı paket işleme kodu önerir
      ↓
Kod fonksiyonel olarak çalışır, unit test'ler geçer, review yapılır
      ↓
Ancak: bozuk paket senaryolarında kaynakların aşırı kullanımı riski vardır
```

Burada IEC 62443 açısından güvenli kodlama, doğrulama ve güvenlik açığı yönetimi süreçleri hala geçerli; standart yanlış değil.

Ama yeni bir kanıt türü ortaya çıktı:

**AI menşei doğrulaması.**

İleride denetçi yalnızca:

> "Güvenli kodlama yönergeleri uygulandı mı?"

demek yerine şunu da sorabilir:

> "Bu yönergeler AI kodlama aracının bağlamına ve kurallarına nasıl yansıtıldı?"

Bu küçük görünen fark aslında büyük bir paradigma değişikliğidir, çünkü bugünkü yazılım geliştirme kuralları esas olarak **insan davranışını** yönetecek şekilde yazılmıştır.

Yarın aynı kuralın:

- insana,
- IDE içindeki copilot'a,
- repository ajanına,
- otonom kodlama ajanına,
- AI reviewer'a

aynı anda uygulanabilir olması gerekecek.

---

# ISO 27001 burada nerede duruyor?

ISO/IEC 27001:2022 bilgi güvenliği yönetim sistemi ve risk yönetimi açısından önemli olmaya devam ediyor. [20]

Ancak ISO 27001'i bir AI mühendislik atıf standardı olarak görmek doğru olmaz.

ISO 27001 açısından sorulabilecek önemli sorular daha çok şunlardır:

- AI servisine hangi bilgileri gönderiyoruz?
- Kaynak kodumuz bilgi sınıflandırması açısından nasıl ele alınıyor?
- Üçüncü taraf AI sağlayıcısı bir tedarikçi olarak nasıl yönetiliyor?
- Developer kimlik bilgileri AI agent tarafından kullanılabilir mi?
- AI ajanın erişim yetkileri nasıl sınırlandırılıyor?
- Prompt veya konuşma kayıtlarında kişisel ya da ticari sır niteliğinde bilgi tutuluyor mu?
- AI oturum log'ları hangi saklama süresi politikasına tabi?

Bunlar son derece değerli kontroller.

Ama yine:

**güvenlik yönetişimi ≠ mühendislik süreçlerinde atıf**

Bu ayrımı kaybetmemek gerekiyor.

---

# Asıl eksik parça: AI Engineering Provenance

Bence bu tartışmanın sonunda ulaşmamız gereken kavram "AI tarafından üretilen kodun tespit edilmesi" değildir, çünkü kodun AI tarafından üretilip üretilmediğini sonradan kaynak koduna bakarak tahmin etmeye çalışmak zayıf bir yöntemdir.

Bir fonksiyona bakıp:

> "Bu kod %82 ihtimalle AI tarafından yazılmış."

demek mühendislik denetimi değildir.

AI tespiti yaklaşımının temel problemi provenance üretmemesidir. Bizim ihtiyacımız tahmin değil, **telemetry**; yani olay gerçekleşirken güvenilir bir mühendislik izi oluşturmak.

Burada yazılım tedarikçileri dünyası bize iyi bir analoji sunuyor.

SLSA (Supply-chain Levels for Software Artifacts), provenance kavramını bir yazılım çıktısının nerede, ne zaman ve nasıl üretildiğini açıklayan doğrulanabilir bilgi olarak ele alıyor. Güncel SLSA spesifikasyonu build provenance yaklaşımını ayrıntılı biçimde tanımlıyor. [21]

in-toto ise yazılım tedarik zincisi içerisindeki farklı adımlara ilişkin metadata ve beyan üretmek için açık bir yapı sağlıyor. [22]

Bence yazılım geliştirmede AI için ihtiyacımız olan şey bunun bir üst katmanı; adını şimdilik **AI Engineering Telemetry** veya daha spesifik olarak **AI Engineering Provenance** koyabiliriz.

---

# Bir AI Engineering Telemetry kaydı neyi bilmeli?

Burada çok dikkatli olmamız gerekiyor: amaç yazılım geliştiricinin her prompt'unu merkezi bir sisteme kopyalamak olmamalı.

Bu hem mahremiyet hem fikrî mülkiyet hem de güvenlik açısından ciddi problemler yaratabilir.

Bunun yerine atıf için gerekli minimum telemetri oluşturulabilir.

Örneğin:

### Kim?

```text
actor.type = human
actor.id = user-123
```

veya:

```text
actor.type = ai-agent
agent.name = coding-agent
agent.version = ...
```

### Hangi model?

```text
ai.provider
ai.model
ai.model.version
```

### Hangi çalışma bağlamı?

```text
repository
branch
commit-base
workspace
issue-id
requirement-id
```

### AI ne yaptı?

```text
activity.type = code-generation
```

veya:

```text
requirement-generation
architecture-analysis
test-generation
code-review
documentation
refactoring
security-analysis
```

### Hangi dosya etkilendi?

```text
src/Protocol/PacketParser.cs
```

### Ne kadar değişiklik yaptı?

Burada basit "AI % kaç kod yazdı?" metriğinden özellikle kaçınmak gerektiğini düşünüyorum, çünkü 500 satır boilerplate kod ile üç satırlık kritik concurrency değişikliğinin mühendislik değeri aynı değildir.

Bunun yerine AI'ın katkı türü kayıt altına alınabilir:

```text
generated
accepted
modified
rejected
regenerated
reviewed
```

### İnsan sorumluluğu nerede devreye girdi?

Örneğin:

```text
AI üretti
↓
İnsan değiştirdi
↓
İnsan onayladı
```

ile:

```text
AI üretti
↓
Otomatik olarak commit edildi
```

aynı risk profilinde değildir.

Bu fark mutlaka görülebilmelidir.

---

# OpenTelemetry burada ilginç bir aday

Bu konsepti sıfırdan tamamen yeni bir telemetri altyapısı üzerine kurmak gerekmeyebilir.

OpenTelemetry dünyasında GenAI anlamsal kuralları (semantic conventions) üzerinde aktif biçimde çalışılıyor. OpenTelemetry'nin dokümantasyonu GenAI operasyonlarının span, metric ve event seviyesinde gözlemlenmesine yönelik anlamsal kurallar tanımlıyor. [23]

OpenTelemetry'nin genel anlasal kural yaklaşımı zaten:

- trace,
- span,
- event,
- metric,
- resource

gibi kavramlar üzerine kurulu. [24]

Dolayısıyla teorik olarak bir **AI Engineering Semantic Convention** düşünülebilir.

Örneğin:

```text
engineering.session.id
engineering.artifact.id
engineering.activity.type

gen_ai.provider.name
gen_ai.request.model

scm.repository
scm.branch
scm.commit.base

workitem.id
requirement.id

ai.contribution.type
ai.contribution.artifact
ai.contribution.acceptance

review.actor.type
review.result
```

Bu telemetry daha sonra:

```text
Jira → AI Oturumu → Git → Pull Request/Merge Request → CI → Artifact → Release
```

zincirini birbirine bağlayabilir.

Böylece yalnızca yazılımın içindeki akışın izlenebilirliğini değil, geliştirme aktivitelerinin izlenebilirliğini (engineering activity traceability) elde etmeye başlarız.

---

# Atıf neden "AI yüzde kaç kod yazdı?" demek değildir?

Burada özellikle yanlış bir yola sapmamak gerekiyor.

Şirketlerin kısa süre içerisinde şöyle KPI'lar üretmeye başlaması şaşırtıcı olmaz:

> Kodumuzun %40'ını AI yazıyor.

> Yazılım geliştirici başına AI tarafından üretilen kod satırı sayısı %65 arttı.


Bu metriklerin operasyonel anlamı olabilir, ama bunları doğrudan üretkenlik veya kalite metriği olarak kullanmak son derece risklidir.

Bir AI ajanı 300 satır DTO, 200 satır mapping ve 150 satır unit test üretebilir. Bir kıdemli mühendis ise sistemdeki race condition'ı çözmek için 12 satır değiştirmiş olabilir.

Satır sayısına bakarsak AI daha üretken görünür; mühendislik etkisine bakarsak tablo tamamen değişir.

Dolayısıyla attribution'ın amacı **performans puanı üretmek olmamalıdır**.

Attribution'ın amacı:

- menşei takibi,
- hesap verebilirlik (accountability),
- denetlenebilirlik (auditability),
- risk analizi,
- süreç iyileştirme (process improvement),
- olay soruşturması (incident investigation),
- tekrar üretilebilirlik (reproducibility)

olmalıdır.

Bu fark bence kritik.

---

# Bir denetçi gelecekte ne sorabilir?

Bugünkü denetimlerde genellikle şöyle sorular ile karşılaşıyoruz:

- "Bu isterin kaynağı nedir?"
- "Bu değişiklik hangi istere bağlı?"
- "Kim gözden geçirdi?"
- "Test kanıtı nerede?"
- "Yayına alma onayı kim tarafından verildi?"

Birkaç yıl sonra bunlara şu soruların eklenmesini bekliyorum:

- **Bu dosya oluşturulurken AI kullanıldı mı?**
- **Hangi AI yetkinliği kullanıldı?**
- **AI'nın rolü neydi?** Üretmek mı, gözden geçirmek mi, analiz mi, karar destek mi?
- **Çıktı bir insan tarafından gerçekten değerlendirildi mi?**
- **AI ajanı hangi repository ve veri erişimine sahipti?**
- **Hangi organizasyonel kurallara AI ajanına uygulanıyordu?**
- **AI tarafından üretilen değişikliğin menşei kaydı mevcut mu?**
- **Model veya ajan değiştiğinde kullanılan mühendislik kontrolleri tekrar değerlendirildi mi?**
- **AI tarafından oluşturulan kritik değişikliklerde ek gözden geçirme gerekiyor mu?**

Bunlar bugünkü süreç modellerinin temel felsefesine aykırı sorular değil. Tam tersine: SPICE'ın izlenebilirlik, CMMI'ın kurumsallaştırma, ISO 12207'nin yaşam döngüsü kontrolü, IEC 62443'ün güvenli yazılım geliştirme ve ISO 42001'in AI yönetişim yaklaşımlarının doğal devamı.

Sorun mevcut standartların yanlış olması değil: **mühendislik kanıtları modelimizin değişmesi gerekiyor.**

---

# Peki standartlar AI attribution'a hazır mı?

Bugünkü durum için yukarıda ele aldığımız ayrıntıları dikkate aldığımıza manzara kabaca aşağıdaki gibi:

| Yaklaşım | AI Governance | SDLC Kontrolü | AI Sistem Geliştirme | AI Engineering Attribution |
|---|---:|---:|---:|---:|
| Automotive SPICE 4.x | Orta | Çok yüksek | Yüksek | Düşük |
| ISO/IEC/IEEE 12207:2026 | Düşük-Orta | Çok yüksek | Dolaylı | Düşük |
| ISO/IEC 330xx | Düşük | Çok yüksek | Gelişmekte | Düşük |
| CMMI + AIM | Çok yüksek | Çok yüksek | Yüksek | Orta |
| ISO/IEC 42001 | Çok yüksek | Düşük | Orta | Düşük-Orta |
| ISO/IEC 5338 | Yüksek | Yüksek | Çok yüksek | Düşük |
| NIST SSDF / 218A | Yüksek | Yüksek | Yüksek | Orta |
| IEC 62443-4-1 | Düşük | Çok yüksek | Düşük | Düşük |
| ISO/IEC 27001 | Orta | Düşük | Düşük | Düşük |

Bu tablo standartların resmi ratingleri değildir; bu yazıda tartıştığımız **AI katkısı atfı** (AI contribution provenance) perspektifinden benim yaptığım bir değerlendirmedir.

Ve bence sonuç oldukça açık:

> **Mevcut yazılım geliştirme ve güvence standartları AI-aware olmaya başladı; fakat henüz AI-attribution-native değiller.**

AI artık standartlarda görünür hale geliyor, ama çoğunlukla üç rol üzerinden:

- **Ürün olarak AI**
- **Risk olarak AI**
- **Organizasyonel yetkinlik olarak AI**

Henüz yeterince güçlü olmayan dördüncü rol ise **Mühendislik süreçleri paydaşı olarak AI**.

Bence asıl boşluk burada.

---

# Bundan sonra ne olacak?

Burada yeni bir "ISO standardı daha yazalım" demek belki erken.

Belki de ihtiyacımız yeni bir yaşam döngüsü standardı değil; zaten yeterli sayıda standardımız var.

İhtiyacımız olan şey mevcut yaşam döngüsü modellerine bağlanabilecek ortak bir **AI Engineering Attribution / Provenance modelidir.**

Bu model:

- SPICE ile çalışabilmeli.
- ISO 12207 ile çalışabilmeli.
- CMMI ile çalışabilmeli.
- IEC 62443 güvenli geliştirme kanıtına bağlanabilmeli.
- Git sağlayıcıdan bağımsız olmalı.
- IDE'den bağımsız olmalı.
- AI modeli sağlayıcısından bağımsız olmalı.
- Copilot, Claude Code, Codex veya şirket içi Ollama modeli kullanırken de çalışmalı.
- Yarın ortaya çıkacak AI ajan sistemlerinde de çalışmalı.

Ve en önemlisi:

**AI kullanmayı engellemek için değil, AI kullanmayı mühendislik açısından görünür hale getirmek için tasarlanmalı.**

---

# Sonuç: İzlenebilirlik artık ister ile kod arasında bitmiyor

Uzun yıllardır yazılım mühendisliği bize izlenebilirliği önemini öğretti.

İsterin tasarıma, tasarımın koda, kodun teste, testin release'e bağlanmasını istedik.

Bunun çok haklı sebepleri vardı.

Bugün bu zincire yeni bir katman ekleniyor.

Artık yalnızca **"Bu kod neden var?"** sorusunu değil, **"Bu kod nasıl ortaya çıktı?"** sorusunu da cevaplamak zorundayız.

- İnsan bir yazılım geliştirici mı yazdı, bir kodlama asistanı mı tamamladı, yoksa bir otonom ajan mı oluşturdu?
- İnsan çıktı üzerinde ne kadar değişiklik yaptı?
- Kim review etti? Review'ı başka bir AI mı yaptı?
- İnsans hesap verilebilirliği hangi noktada devreye girdi?

Bunların hiçbiri AI kullanımını yasaklamayı gerektirmiyor.

Tam tersine, bence AI'nın profesyonel yazılım mühendisliğinin normal bir parçası haline gelebilmesi için bu soruların cevaplanabilir olması gerekiyor.

Çünkü iyi mühendislikte önemli olan yalnızca bir şeyin çalışması değildir: nasıl üretildiğini bilmek, hangi kontrollerden geçtiğini gösterebilmek, kararın sorumluluğunu tanımlayabilmek ve gerektiğinde geçmişi yeniden oluşturabilmek de mühendisliğin parçasıdır.

Yazılım tedarik zinciri dünyası bize artifact provenance'ın değerini öğretti.

Şimdi muhtemelen sırada **engineering provenance** var.

SPICE, ISO 12207, CMMI, ISO 42001, NIST SSDF ve IEC 62443 gibi mevcut modeller bunun için çok güçlü bir temel sağlıyor.

Ama bir sonraki adımın daha açık olması gerekiyor:

> **İnsan ve AI katkılarının aynı mühendislik yaşam döngüsü içerisinde izlenebilir, denetlenebilir ve birbirleriyle ilişkilendirilebilir hale gelmesi.**

Belki birkaç yıl sonra bir denetimde "AI kullandınız mı?" sorusu anlamsız derecede basit kalacak.

Asıl soru şu olacak:

**"Gösterin."**

---

# Kaynaklar

1. [ISO/IEC 42001:2023 — Artificial intelligence management system](https://www.iso.org/standard/42001.html)
2. [ISO/IEC 5338:2023 — AI system life cycle processes](https://www.iso.org/standard/81118.html)
3. [ISO/IEC 23894:2023 — Artificial intelligence — Guidance on risk management](https://www.iso.org/standard/77304.html)
4. [ISO/IEC 42005:2025 — Artificial intelligence system impact assessment](https://www.iso.org/standard/42005.html)
5. [ISO/IEC 25059:2023 — Quality model for AI systems](https://www.iso.org/standard/80655.html)
6. [VDA QMC — Automotive SPICE](https://vda-qmc.de/en/automotive-spice/)
7. [VDA QMC — Automotive SPICE Publications](https://vda-qmc.de/en/automotive-spice/automotive-spice-veroeffentlichungen/)
8. [Automotive SPICE Process Assessment Model 4.0](https://vda-qmc.de/wp-content/uploads/2023/12/Automotive-SPICE-PAM-v40.pdf)
9. [ISO/IEC/IEEE 12207:2026 — Software life cycle processes](https://www.iso.org/standard/90219.html)
10. [ISO/IEC/IEEE 12207:2017 — Withdrawn edition](https://www.iso.org/standard/63712.html)
11. [ISO/IEC TR 33022:2024 — Process capability assessment for ISO/IEC/IEEE 12207 processes](https://www.iso.org/standard/87306.html)
12. [CMMI Artificial Intelligence Maturity — CMMI AIM](https://cmmiinstitute.com/products/cmmi-artificial-intelligence-maturity)
13. [CMMI AIM Executive Summary](https://cmmiinstitute.com/resource-files/public/cmmi-aim-executive-summary)
14. [ISO — ISO/IEC 42001 explained](https://www.iso.org/home/insights-news/resources/iso-42001-explained-what-it-is.html)
15. [ISO/IEC 42006:2025 — Requirements for bodies auditing and certifying AI management systems](https://www.iso.org/standard/42006.html)
16. [NIST SP 800-218 — Secure Software Development Framework 1.1](https://csrc.nist.gov/pubs/sp/800/218/final)
17. [NIST SP 800-218A — Secure Software Development Practices for Generative AI and Dual-Use Foundation Models](https://csrc.nist.gov/pubs/sp/800/218/a/final)
18. [IEC 62443-4-1 — Secure product development lifecycle requirements](https://webstore.iec.ch/en/publication/33615)
19. [IEC — IEC 62443 cybersecurity guidance](https://syc-se.iec.ch/deliveries/cybersecurity-guidelines/security-standards-and-best-practices/iec-62443/)
20. [ISO/IEC 27001 — Information security management systems](https://www.iso.org/standard/27001.html)
21. [SLSA — Provenance specification](https://slsa.dev/spec/v1.2/provenance)
22. [in-toto Specifications](https://in-toto.io/docs/specs/)
23. [OpenTelemetry — Generative AI observability](https://opentelemetry.io/blog/2026/genai-observability/)
24. [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/)

***
{% include share_twitter_tr.html %}