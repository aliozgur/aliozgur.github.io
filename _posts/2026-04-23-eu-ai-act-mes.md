---
layout: post
title: "AB Yapay Zeka Yasası (AI Act) – Geliştiriciler İçin Gerçek Etkisi"
subtitle: "MES/MOM ve IIoT Perspektifinden Teknik Etki"
date: 2026-04-23
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - ai
  - software
  - regulation
  - mes
  - iiot
  - eu-ai-act

---

Yapay zeka son birkaç yılda "hızlı dene – hızlı üret" paradigmasıyla ilerledi. Model seç, prompt yaz, deploy et. Özellikle LLM tabanlı ürünlerde bu yaklaşım neredeyse varsayılan hale geldi. Ancak Avrupa Birliği'nin AI Act düzenlemesi ile birlikte bu dönem kapanıyor. Artık yapay zeka sadece bir yazılım bileşeni değil; regüle edilen bir ürün.

Bu yazıda AI Act'in ne olduğunu anlatmanın ötesine geçip, geliştiriciler ve teknoloji şirketleri için gerçek dünyada neyi değiştirdiğini konuşalım.


![Cover]({{ root.url }}/media/eu-ai-act-mes.png)


<!--end-of-excerpt-->

Kısa bir tarihsel çerçeve çizmek faydalı. AB, yapay zekayı regüle etmeye 2018 civarında "Trustworthy AI" ilkeleri ile başladı. Ardından 2021'de ilk AI Act taslağı yayımlandı. Bu taslak, risk temelli bir yaklaşım öneriyordu. 2023–2024 arasında özellikle generative AI ve foundation model tartışmalarıyla birlikte metin ciddi şekilde güncellendi. Sonuçta ortaya çıkan şey, klasik bir "teknoloji yasası" değil; daha çok CE işareti mantığında, ürün güvenliği perspektifiyle yazılmış bir düzenleme.

Yani mesele şu: AI artık "deploy edilebilir kod" değil, "piyasaya arz edilen bir sistem".

Bu noktada en kritik kavram risk sınıflandırması. AI Act sistemi dört kategoriye ayırıyor ama pratikte geliştirici açısından iki soru yeterli:

1) Bu sistem birine zarar verebilir mi?
2) Bu sistem bir karar sürecini etkiliyor mu?

Eğer cevap evetse, iş ciddileşiyor.

Basit bir örnek verelim. Bir blog yazısı özetleyen AI aracı yazıyorsanız, büyük ihtimalle düşük risk kategorisindesiniz. Ama aynı modeli alıp CV eleme sistemine koyduğunuz anda "high-risk" sınıfına giriyorsunuz. Model aynı, risk tamamen kullanım senaryosundan geliyor.

İşte AI Act'in en önemli kırılımı burada: teknoloji değil, kullanım bağlamı regüle ediliyor.

Bu ne demek? Şu demek: "Ben sadece OpenAI API kullanıyorum" diyerek sorumluluktan kaçamazsınız. Siz o sistemi bir ürün haline getiriyorsanız, regülasyon sizin üzerinizde.

Şirketler tarafında bu durum çok daha net hissedilecek. Çünkü AI Act, yazılım geliştirme süreçlerine yeni bir katman ekliyor: compliance engineering.

Artık bir AI özelliği geliştirirken sadece şunları düşünmek yetmeyecek:
- Doğru çalışıyor mu?
- Hızlı mı?
- Ölçeklenebilir mi?

Bunların yanına şunlar geliyor:
- Risk analizi yaptık mı?
- Kullanıcıya bunu AI olduğunu söyledik mi?
- Sistem kararlarını açıklayabiliyor muyuz?
- İnsan müdahalesi mümkün mü?

Bu sorular özellikle high-risk kategorisinde zorunlu hale geliyor.

Pratik bir senaryo düşünelim. Bir SaaS ürünü geliştiriyorsunuz ve içine "AI destekli öneri motoru" eklediniz. Eğer bu öneriler kullanıcı davranışını ciddi şekilde etkiliyorsa (örneğin finansal kararlar), artık bu sistemi loglamak, açıklamak ve gerektiğinde insan müdahalesine açmak zorundasınız.

Yani logging artık sadece debugging için değil, hukuki bir gereklilik.

Solo geliştiriciler için durum biraz daha ilginç. Çünkü AI Act kimseyi kapsam dışında bırakmıyor. Tek kişilik bir SaaS bile olsanız, eğer ürününüz AB kullanıcılarına ulaşıyorsa bu kurallara tabisiniz.

Ama burada kritik bir rahatlatıcı nokta var: regülasyonun ağırlığı şirket büyüklüğüne göre değil, risk seviyesine göre belirleniyor.

Yani küçük bir geliştirici olarak düşük riskli bir ürün yapıyorsanız neredeyse hiçbir şey değişmeyebilir. Ama aynı geliştirici olarak işe alım yapan bir AI sistemi geliştirirseniz, ciddi yükümlülükler altına girersiniz.

Bu da doğal olarak ürün stratejisini etkiliyor. Artık sadece "ne yapabilirim?" değil, "ne yapmalıyım?" sorusu önemli.

Burada GDPR ile paralellik kurmak kaçınılmaz. GDPR çıktığında benzer bir panik yaşanmıştı. Çerez banner'ları, veri işleme izinleri, veri silme talepleri… Başta ciddi bir maliyet ve karmaşa oluşturdu.

Ancak birkaç yıl içinde şunu gördük:
- Büyük şirketler hızlı adapte oldu
- Yeni araçlar ve SaaS'lar ortaya çıktı (consent management, privacy tooling)
- Standartlar oluştu

Bugün GDPR artık "iş yapmanın doğal bir parçası".

AI Act için de benzer bir yol haritası bekleniyor. İlk etapta maliyetli ve karmaşık olacak. Özellikle küçük ekipler için zorlayıcı olacak. Ama zamanla:
- AI compliance araçları çıkacak
- Açıklanabilirlik (explainability) standartlaşacak
- Model audit süreçleri oturacak

Ve muhtemelen birkaç yıl sonra şunu diyeceğiz:
"Tabii ki AI sistemi loglanır, bu zaten standart."

Bu noktada önemli bir stratejik içgörü var. GDPR nasıl global bir etki yarattıysa (ABD şirketleri bile GDPR uyumlu sistemler geliştirdi), AI Act'in de benzer bir "Brussels effect" yaratması çok olası.

Yani AB dışındaki bir geliştirici bile, global pazara açılmak istiyorsa bu standartlara uymak zorunda kalacak.

Bu da aslında ilginç bir fırsat yaratıyor. Çünkü yeni bir pazar doğuyor:
- AI audit araçları
- Model risk analiz sistemleri
- Explainability katmanları
- Compliance-as-a-service çözümleri

Kısacası, AI Act sadece bir regülasyon değil, aynı zamanda yeni bir ürün kategorisi.

Son olarak bunu çok net söylemek lazım: AI geliştirme dünyası artık "hack & ship" kültüründen "design, validate, comply & ship" kültürüne geçiyor.

Bu değişimi erken anlayan ekipler avantajlı olacak.

---

## MES/MOM ve IIoT Perspektifinden AI Act: Teknik Etki ve Referanslar

AI Act metni doğrudan "MES" veya "IIoT" terimlerini kullanmaz; ancak risk temelli yaklaşımı ve yüksek riskli sistemler için getirdiği yükümlülükler, üretim sistemlerindeki AI kullanımını doğrudan etkiler. Bu etkiyi anlamak için regülasyon metni ile endüstriyel standartları birlikte okumak gerekir.

Öncelikle AI Act'in temel hükümleri:

- **Risk temelli sınıflandırma** (Madde 6, Ek III): Kritik altyapı ve ürün güvenliğiyle ilişkili sistemler yüksek risk kapsamına girer.
- **İnsan gözetimi zorunluluğu** (Madde 14): AI sistemleri insan tarafından denetlenebilir olmalıdır.
- **Kayıt tutma (logging)** (Madde 12): Sistem davranışı yaşam döngüsü boyunca kaydedilmelidir.
- **Veri yönetişimi** (Madde 10): Eğitim/verifikasyon verisi kaliteli, temsil edici ve hatasız olmalıdır.

Bu maddeler, MES/MOM ve IIoT sistemlerinde aşağıdaki teknik sonuçlara yol açar — ve bunları gerçek senaryolar üzerinden düşünmek daha açıklayıcı:

**1) Black-box modellerin sınırlanması**  
Örnek: Bir üretim hattında "defect prediction" modeli kullanıyorsunuz. Model, bir parçanın hatalı çıkacağını %87 olasılıkla söylüyor ama nedenini açıklayamıyor.

AI Act sonrası beklenti:
- Model hangi parametrelerden etkilendiğini gösterebilmeli (örn. sıcaklık + titreşim korelasyonu)
- Feature importance / SHAP gibi tekniklerle açıklama üretilebilmeli

Bu, DARPA XAI ve explainability literatürünün doğrudan endüstriyel sisteme taşınması demek.

**2) Human-in-the-loop mimarisi**  
Örnek: Bir pres hattında AI sistemi, kalıp basıncını otomatik ayarlıyor.

Bugün (tipik):
- AI → otomatik ayar yapar

AI Act sonrası:
- AI → öneri üretir
- Sistem → confidence + risk bilgisi gösterir
- Operatör → onaylar veya reddeder
- Sistem → kararı loglar

Bu model, IEC 61508 ve ISO 13849'daki safety yaklaşımıyla birebir uyumlu.

**3) Logging ve audit trail zorunluluğu**  
Örnek: Bir predictive maintenance sistemi, bir motorun arızalanacağını öngöremedi ve üretim durdu.

Artık şu sorular sorulacak:
- Model o anda hangi versiyondaydı?
- Hangi sensör verisini kullandı?
- Veri eksik miydi?
- Model confidence değeri neydi?

Bu nedenle:
- model versioning
- inference logging
- decision traceability

zorunlu hale gelir.

**4) Veri pipeline'larının yeniden tasarlanması**  
Örnek: IIoT sisteminde sıcaklık sensörü zaman zaman 0 değer gönderiyor (noise / fault).

Bugün:
- Model bunu öğrenir veya ignore eder

AI Act sonrası:
- veri temizleme pipeline'ı gerekir
- sensör güvenilirliği izlenmelidir
- veri kaynağı (lineage) kayıt altına alınmalıdır

Yani "raw data ile model kurmak" yaklaşımı sürdürülebilir değil.

**5) Real-time sistemlerde mimari değişim**  
Örnek: Edge cihazda çalışan anomaly detection sistemi (ms seviyesinde karar veriyor)

Yeni yaklaşım:
- Fast path → inference (gerçek zamanlı)
- Slow path → explainability + logging + audit

Bu, performans ve compliance arasında yeni bir mimari denge yaratır.

**6) Decision support sistemlerinin öne çıkması**  
Örnek: Enerji optimizasyon sistemi, üretim hattında hangi makinelerin ne zaman çalışacağını belirliyor.

Risk:
- yanlış karar → maliyet artışı veya üretim kaybı

Bu yüzden:
- sistem doğrudan aksiyon almak yerine öneri üretir
- insan onayı kritik hale gelir

Bu yaklaşım ISA-95 (IEC 62264) ile de uyumludur: üst seviye sistemler yönlendirir, saha seviyesinde kontrol insan/PLC'dedir.

Bu çıkarımlar aşağıdaki standart ve araştırmalarla desteklenir:

- IEC 61508 – Functional Safety of Electrical/Electronic Systems  
- ISO 13849 – Machinery Safety  
- IEC 62264 (ISA-95) – Enterprise-Control System Integration  
- NIST AI Risk Management Framework (2023)  
- DARPA Explainable AI (XAI) Program  
- Samek et al. – *Explainable AI: Interpreting, Explaining and Visualizing Deep Learning*

Bu çerçevede AI Act'in net etkisi şudur:

> Endüstriyel AI sistemleri artık sadece doğru değil, aynı zamanda açıklanabilir, izlenebilir ve denetlenebilir olmak zorundadır.

***
{% include share_twitter_tr.html %}

***

## Kaynaklar

- [EU Artificial Intelligence Act – Official Regulation Text](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [European Commission – AI Act Overview](https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence)
- [Stanford HAI – AI Index Report](https://aiindex.stanford.edu/report/)
- [GDPR Impact Study – European Commission](https://commission.europa.eu/law/law-topic/data-protection/data-protection-eu_en)
- [The Brussels Effect – Anu Bradford](https://global.oup.com/academic/product/the-brussels-effect-9780190088583)
