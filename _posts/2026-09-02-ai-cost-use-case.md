---

layout: post
title: "Vaka Çalışması: AI Destekli Yazılım Geliştirmenin Ekonomisi"
subtitle: "Gerçekleşen maliyet, Türkiye işveren maliyeti ve karşı-olgusal ekip tahmini"
date: 2026-09-02
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- coding
- agents
- economics
- software-engineering

---

> **Not:** Bu yazı kurgusal bir ürün vakası değil. Anlattığım kurumsal yazılım ürününü ekibimizdeki kıdemli bir mühendis geliştirdi. Yazıdaki kapsam, efor, maliyet hesabı ve öğrenimler bu gerçek sürece dayanıyor. Mühendisin kimliği ve bireysel ücret bilgisi gizli tutuluyor.

Yapay zekâ destekli yazılım geliştirme hakkında konuşurken sayılar çok kolay biçimde sloganlara dönüşebiliyor. "On kat daha hızlı", "yirmi kat daha ucuz" veya "bir kişi on kişilik ekibin işini yaptı" gibi ifadeler dikkat çekici olmakla birlikte, çoğu zaman bu sayıların nasıl elde edildiği, hangi varsayımlara dayandığı ve nelerin karşılaştırıldığı yeterince açıklanmıyor.

Bu yazıda bunun tersini yapacağız. Yaklaşık on beş aylık bir dönemde geliştirilen kapsamlı bir kurumsal yazılım ürününü, ürün kapsamından kaynak kodu büyüklüğüne, harcanan insan emeğinden alternatif ekip yapısına ve Türkiye ücret verilerinden işveren maliyetine kadar mümkün olduğunca açık biçimde inceleyeceğiz. Amacımız AI destekli geliştirmenin "daha ucuz" veya "daha hızlı" olduğunu kanıtlamak değil; gerçek bir ürün vakasında ortaya çıkan sıra dışı sonuçların hangi koşullar altında oluştuğunu ve bu sonuçları okurken neden dikkatli olmamız gerektiğini göstermek.

{::comment}end-of-excerpt{:/comment}

Buradaki çalışma bir muhasebe veya bordro denetimi değil, bir **mühendislik rekonstrüksiyonu**. Ürünün geliştirme geçmişi, kaynak kodu, uygulama günlükleri, ürün kapsamı, ücret araştırmaları ve kullanılan geliştirme araçlarının liste fiyatları bir araya getirilerek "Bu ürün geleneksel bir yazılım geliştirme organizasyonuyla gerçekleştirilseydi nasıl bir ekip, ne kadar efor ve yaklaşık ne kadar bütçe gerekirdi?" sorusuna karşı-olgusal bir yanıt aranıyor.

## Önce Ürünün Gerçek Kapsamını Anlamak Gerekiyor

Karşılaştırmanın anlamlı olabilmesi için önce neyin geliştirildiğini doğru tarif etmek gerekiyor. Burada söz konusu olan ürün yalnızca kullanıcının soru sorduğu ve bir büyük dil modelinin cevap verdiği basit bir sohbet uygulaması değil.

Ürün; doğal dilde sorulan soruları kurumsal veri kaynakları üzerinde çalışabilecek sorgulara dönüştüren bir çekirdek motor, farklı veri kaynağı türlerine uyum sağlayan sorgulama katmanı, şema ve örnek soru tabanlı bağlam sağlama, nesne-sütun seviyelerinde yetkilendirme, doküman tabanlı bilgi erişimi, anlamsal arama, knowledgebase destekli sorgulama, gelemeksel raporlama, zamanlanmış analizler, başka web uygulamalarına gömülebilen AI yardımcıları, anonim ve kimlikli kullanıcı senaryoları, uzaktaki veri kaynaklarına erişim, tenant bazlı yetkilendirme ve AI kullanım maliyetlerini izleyen FinOps mekanizmalarını kapsıyor.

Bunlara ek olarak ürünün kendi yönetim arayüzleri, katalog ve şema yönetimi, dokümantasyon alanları, örnek soru yönetimi, erişim denetimi araçları, veri içe aktarma süreçleri, model sağlayıcılarının yönetimi, API istemcileri ve gömülü kullanım ayarları bulunuyor. Arka planda knowledgebase işleme, soru üretme, zamanlanmış sorgular, oturum temizleme, maliyet işlemleri, veri eşitleme ve temizleme gibi işler gerçekleştiren sekiz ayrı worker çalışıyor.

Ürünün ayrıca veri ve AI işlemleri için birkaç yardımcı servis, herkese açık bir ürün web sitesi ve yaklaşık kırk sayfalık ürün dokümantasyonu bulunuyor. Kullanıcı arayüzü yedi dilde çalışıyor ve sağdan sola yazılan diller de destekleniyor. Kısacası karşılaştırılan şey bir prototip değil, ticari kullanıma yönelik geniş yüzeyli bir kurumsal yazılım ürünü.

## Kaynak Kodunun Ölçeği Bize Ne Söylüyor?

1 Eylül 2026 itibarıyla yapılan kaynak kodu envanteri ürünün büyüklüğü hakkında daha somut bir fikir veriyor.


| Gösterge                               | Yaklaşık büyüklük                  |
| -------------------------------------- | ---------------------------------- |
| Ürün, test ve araç projeleri           | 36                                 |
| Ana uygulama kaynak kodu               | 118.000 satır / yaklaşık 800 dosya |
| Web sunum katmanı                      | 36.000 satır / 174 dosya           |
| Web isteklerini yöneten ana bileşenler | 49                                 |
| Tenant veri modeli geçişi              | 97                                 |
| Platform veri modeli geçişi            | 16                                 |
| Arka plan servisleri (worker)          | 8                                  |
| AI/veri yardımcı servisleri            | yaklaşık 2.800 satır               |
| Desteklenen arayüz dilleri             | 7                                  |
| Dil başına çeviri anahtarı             | yaklaşık 2.440                     |
| Ürün web sitesi sayfaları              | 51                                 |
| Otomatik test kaynak kodu              | yaklaşık 6.700 satır / 50 dosya    |


Satır sayısı tek başına yazılım kalitesinin veya geliştirme eforunun ölçüsü değildir. Bununla birlikte, yaklaşık 150 bin satara yaklaşan uygulama, web ve yardımcı servis kodu; yüzden fazla veri modeli geçişi; onlarca yönetim ve kullanıcı alanı; çoklu dil desteği ve bağımsız arka plan süreçleri birlikte ele alındığında, karşılaştırılan sistemin küçük bir deneysel uygulama olmadığı açık hale geliyor.

Bu ayrım önemli, çünkü AI ile geliştirme üzerine yapılan pek çok değerlendirmede çok farklı büyüklükteki işler aynı kategori içinde değerlendirilebiliyor. Birkaç günlük bir prototipin ajanlarla hızla oluşturulması ile kurumsal yetkilendirme, veri erişimi, raporlama, maliyet yönetişimi, çoklu dil desteği ve operasyonel süreçleri olan bir ürünün geliştirilmesi aynı mühendislik problemi değil.

## Peki Bu Ürün Nasıl Geliştirildi?

Ürünün ilk geliştirme tarihi 22 Mayıs 2025. 1 Eylül 2026'ya kadar toplam takvim süresi yaklaşık **15,3 ay**. Ürünü ekibimizdeki kıdemli bir mühendis geliştirdi.

Buradaki en sıra dışı nokta, bu mühendisin bu süre boyunca ürün üzerinde tam zamanlı çalışmamış olması. Kendi zaman dağılımına göre ürüne ayırdığı zaman yaklaşık üçte bir düzeyinde.

Basit bir kişi-ay hesabıyla:

**15,3 ay × 1/3 ≈ 5,1 kişi-ay**

Buradaki "kişi-ay", bir kişinin bir ay boyunca tam zamanlı çalışmasına (FTE) karşılık gelen efor birimi. Dolayısıyla 5,1 kişi-ay, ürünün beş ayda tamamlandığı anlamına gelmiyor. Ürün yaklaşık on beş aylık bir takvim boyunca ilerliyor; ancak bu süre içinde ürüne ayırdığı toplam zaman tam zamanlı yaklaşık beş aylık emeğe karşılık geliyor.

İlk ürün dalgası Mayıs 2025 ile 2026 ortaları arasında gerçekleşiyor. İkinci dalgada ise mevcut çekirdek yetenekler korunarak ticari web ürünü, yönetim alanları, güvenlik ve yönetişim özellikleri, gömülebilir kullanım modeli, çoklu dil desteği ve herkese açık ürün sitesi oluşturuluyor.

İkinci dalgadaki ticari web ürünü yaklaşık üç takvim ayında ortaya çıktı. Aynı üçte birlik zaman paylaşımı uygulandığında, bu dönem için ürüne ayırdığı süre yaklaşık **1 kişi-ay** ediyor.

Burada geliştirmenin büyük bölümünde AI ajanları uygulama iş gücü olarak kullanılıyor. İnsan tarafı ürün kararları, mimari, güvenlik yaklaşımı, kabul kriterleri, planlama, kod ve davranış değerlendirmesi ile yön değiştirme kararlarını üstlenirken; ajanlar kullanıcı arayüzünden backend servislerine, veri işlemlerinden dokümantasyona kadar geniş bir uygulama alanında görev alıyor.

Bu nedenle vakayı "AI kendi başına ürün geliştirdi" şeklinde okumak doğru değil. İnsan mühendislik sorumluluğu devam ediyor; fakat insanın yaptığı işin dağılımı, doğrudan uygulama üretmekten uygulamanın yönünü ve doğruluğunu yönetmeye doğru kayıyor.

## Geleneksel Bir Ekip Aynı Ürünü Nasıl Geliştirirdi?

Asıl karşılaştırma burada başlıyor. Aynı ürün kapsamının AI ajanları kullanılmadan, geleneksel bir ürün mühendisliği organizasyonuyla geliştirilmesi durumunda nasıl bir ekip gerekirdi?

Karşı-olgusal ekip yaklaşık olarak şöyle:


| Rol                                   | Tam zaman eşdeğeri |
| ------------------------------------- | ------------------ |
| Mühendislik yöneticisi / teknik lider | 1,0                |
| Principal / kıdemli mimari sorumluluk | 1,0                |
| Kıdemli backend mühendisi             | 2,0                |
| Kıdemli web mühendisi                 | 1,0                |
| Orta seviye full-stack mühendis       | 1,0                |
| Uygulamalı AI / ML mühendisi          | 1,0                |
| Platform / veri mühendisi             | 0,5–1,0            |
| Kalite ve güvenlik mühendisi          | 1,0                |
| Operasyon / dağıtım mühendisi         | 0,5                |
| Ürün yöneticisi                       | 1,0                |
| Ürün tasarımcısı                      | 0,5                |


Buradaki toplam yaklaşık **8–12 tam zaman eşdeğeri**, yani FTE. FTE veya "full-time equivalent", farklı kişilerin kısmi çalışma sürelerini tam zamanlı çalışan sayısına dönüştürerek ifade eden bir planlama birimi.

Bu ekip büyüklüğü yalnızca kaynak kodu miktarından tahmin edilmedi. Ürün ayrı iş akışlarına bölündü ve her iş akışının geleneksel yöntemle kaç kişi-ay gerektirebileceği ayrıca değerlendirildi.


| İş alanı                                                                    | Düşük   | Orta    | Yüksek  |
| --------------------------------------------------------------------------- | ------- | ------- | ------- |
| Doğal dilden veri sorgulama motoru, veri kaynağı farklılıkları, şema işleme | 16      | 20      | 24      |
| Katalog yönetimi, dokümantasyon, örnek sorular                              | 8       | 10      | 12      |
| Kimlik, multi-tenant yetkilendirme ve erişim denetimi                       | 12      | 15      | 18      |
| Sohbet, akış, sonuç gösterimi, iptal işlemleri                              | 12      | 14      | 16      |
| Knoledgebase, içerik işleme, gelişmiş bilgi erişimi                         | 12      | 15      | 18      |
| Raporlama ve klasör yetkilendirmeleri                                       | 8       | 10      | 12      |
| Arka plan işleri, kalıcı iş kuyrukları, veri eşitleme ve temizleme          | 10      | 12      | 14      |
| Uzak veri erişimi                                                           | 4       | 5       | 6       |
| Gömülebilir AI yardımcıları ve anonim kullanım                              | 8       | 10      | 12      |
| AI maliyet kaydı, bütçeler ve finansal yönetişim                            | 10      | 13      | 16      |
| Ürün sitesi, yardım içeriği ve yedi dil desteği                             | 4       | 5       | 6       |
| Üretim paketleme ve dağıtım altyapısı                                       | 4       | 5       | 6       |
| Otomatik testler ve security hardening                                      | 12      | 15      | 18      |
| Ürün yönetimi, tasarım ve entegrasyon yükü                                  | 24      | 30      | 36      |
| **Toplam kişi-ay**                                                          | **144** | **179** | **214** |


Orta tahmin yaklaşık **180 kişi-ay**. Bu da kabaca 10 kişinin 18 ay boyunca çalışmasına karşılık geliyor. Alternatif biçimde sekiz kişilik bir ekibin yaklaşık 22 aylık çalışması da benzer toplam efora ulaşıyor.

Burada dikkat edilmesi gereken önemli bir metodolojik nokta var. 144–214 kişi-ay aralığı gerçekleşmiş bir ikinci projenin verisi değil. Aynı ürün kapsamının iş paketlerine ayrılmasıyla oluşturulmuş bir mühendislik tahmini. Bu nedenle "AI bu projede tam olarak 35 kat verimlilik sağladı" demek bilimsel olarak doğru olmaz.

## Türkiye İçin Maliyet Hesabı Nasıl Yapıldı?

Karşılaştırmanın en hassas kısmı ücret hesabı. Burada tek bir 2026 maaşının bütün döneme uygulanması yerine 2025 ve 2026 ayrı ayrı fiyatlanıyor.

Bunun nedeni basit. Proje Mayıs 2025'te başladı ve 2026'ya devam etti. 2025'te yapılmış bir çalışmayı 2026 maaşlarıyla geriye dönük fiyatlamak, özellikle Türkiye gibi yüksek ücret enflasyonunun bulunduğu bir ortamda maliyeti ciddi biçimde bozabilir.

2025 için kullanılan ana ücret kaynağı **Önceki Yazılımcı — Yazılım Sektörü Maaşları 2025** araştırması. Araştırmada 9.056 katılımcının verisi bulunuyor ve yayınlanan değerler aylık **net TL ortalamaları**.

2026 için aynı çalışmanın kişi bazındaki veri seti kullanılıyor. Veri setinde 5.002 cevap bulunuyor. Yabancı lokasyonlar ve TL dışında ücret bildiren kayıtlar çıkarıldığında Türkiye/TL grubunda **4.571 kayıt** kalıyor. Hesaplama, maaş aralıklarının orta noktaları üzerinden ilgili rol gruplarının medyanlarını kullanıyor.

Bu metodolojinin kendi içinde önemli bir sınırlaması var: 2025 rakamları yayınlanmış **ortalama**, 2026 rakamları ise ham veri üzerinden hesaplanmış **medyan** değerler. Dolayısıyla iki sütun tamamen aynı istatistiksel ölçüyü temsil etmiyor. Bu farkı özellikle belirtmek gerekiyor.

Kullanılan bazı piyasa ücretleri şöyle:


| Planlama rolü                   | 2025 aylık net | 2026 aylık net |
| ------------------------------- | -------------- | -------------- |
| Orta seviye / tasarım referansı | ₺73.500        | ₺97.500        |
| QA / otomasyon                  | ₺102.500       | ₺112.500       |
| Kıdemli yazılım mühendisi       | ₺122.500       | ₺162.500       |
| Ürün yöneticisi                 | ₺117.500       | ₺142.500       |
| Teknik lider                    | ₺152.500       | ₺205.000       |
| Yazılım mimarı                  | ₺182.500       | ₺240.000       |


Örneğin kıdemli yazılım mühendisi için kullanılan net referans ücret 2025'te ₺122.500 iken 2026'da ₺162.500. Teknik lider için ₺152.500'den ₺205.000'e, mimar için ise ₺182.500'den ₺240.000'e çıkıyor.

Ancak şirketin maliyeti çalışanın eline geçen net ücret değil. Bu nedenle net ücretlerin işveren maliyetine dönüştürülmesi gerekiyor.

## Net Maaştan İşveren Maliyetine Geçiş

Hesaplama zinciri kabaca şu şekilde ilerliyor:

**Net ücret → tahmini brüt ücret → işveren sosyal güvenlik yükleri → yan haklar → aylık tam işveren maliyeti**

2025 için işveren sosyal güvenlik yükü hesabında ilgili dönemin teşvikli oranları ve **₺195.041 prime esas kazanç tavanı**, 2026 için ise mevzuat değişikliği sonrasında kullanılan oran ve **₺297.270 prime esas kazanç tavanı** dikkate alınıyor. Buna ek olarak yan haklar ve diğer işveren giderlerini temsil etmek üzere **%12** yük ekleniyor.

Hesabı burada paylaşırken önemli bir metodolojik sınırlama da burada bulunuyor. Yüklenmiş işveren maliyetlerini veriyorum fakat netten brüte dönüşümün bütün bordro formülünü satır satır yayınlamıyorum. Dolayısıyla aşağıdaki tutarları hassas bordro hesapları olarak değil, ekip bütçelemesine yönelik **planlama maliyetleri** olarak okumak daha doğru.

Ortaya çıkan bazı değerler şöyle:


| Net planlama ücreti | Yıl  | Aylık toplam işveren maliyeti |
| ------------------- | ---- | ----------------------------- |
| ₺73.500             | 2025 | yaklaşık ₺144.000             |
| ₺122.500            | 2025 | yaklaşık ₺260.000             |
| ₺152.500            | 2025 | yaklaşık ₺312.000             |
| ₺182.500            | 2025 | yaklaşık ₺365.000             |
| ₺97.500             | 2026 | yaklaşık ₺199.000             |
| ₺162.500            | 2026 | yaklaşık ₺361.000             |
| ₺240.000            | 2026 | yaklaşık ₺510.000             |


Bütün ekip rolleri ağırlıklandırıldığında geleneksel ekip için ortalama yüklenmiş maliyet yaklaşık olarak **2025'te ₺253.000/FTE-ay**, **2026'da ₺344.000/FTE-ay** çıkıyor.

Burada FTE-ay, bir tam zamanlı çalışanın bir aylık maliyeti anlamına geliyor.

## Döviz Kurları da Yıllara Göre Ayrıldı

TL ve dolar karşılaştırmasını yaparken de tek bir güncel kur bütün döneme uygulanmadı. 2025 işçilik ve o döneme ait harcamalar için yaklaşık **₺39,58/$**, 2026 hesaplamaları için ise 1 Eylül 2026 tarihi itibarıyla **₺48,27/$** kullanıldı.

Bu ayrım önemli, çünkü Türkiye'deki ücret artışı ile döviz kurundaki değişim aynı oranda gerçekleşmedi. 2025'te yapılmış TL harcamalarını 2026'nın döviz kuruyla dönüştürmek dolar bazındaki karşılaştırmayı da bozabilir.

## Gerçekleşen AI Destekli Geliştirme Maliyeti

Kıdemli mühendisin 15,3 aylık dönem içindeki toplam ürün eforu yaklaşık **5,1 kişi-ay**. Bunun 2025'e düşen bölümü yaklaşık 2,43 kişi-ay, 2026'ya düşen bölümü ise yaklaşık 2,67 kişi-ay.

Hesaplamada mühendisin ücreti ilgili yıl için brütleştiriliyor, işveren yükleri ve %12 yan hak ekleniyor ve yalnızca ürüne ayrılan üçte birlik zaman maliyete dahil ediliyor.

Ortaya çıkan dağılım:


| Kalem                                            | Yaklaşık maliyet            |
| ------------------------------------------------ | --------------------------- |
| Kıdemli mühendis, ürüne ayrılmış 5,1 kişi-ay     | ₺2,1 milyon                 |
| Sınırlı katkı sağlayan diğer geliştiriciler      | ₺0,2–0,4 milyon             |
| İlk dönem AI geliştirme ajanı abonelikleri       | $2.600–3.250                |
| İkinci dönem AI geliştirme ajanı abonelikleri    | yaklaşık $600               |
| Ek model/ajan kullanımı için ayrılan tahmini pay | $2.000–8.000                |
| **Toplam geliştirme maliyeti**                   | **₺2,5–3,5 milyon**         |
| Dolar karşılığı                                  | yaklaşık **$60.000–80.000** |


Buradaki maliyet yalnızca **ürünü geliştirme emeği ve geliştirme araçları** için. Üretimde kullanılan AI servisleri, bulut altyapısı, satış, müşteri başarısı, müşteri desteği, ofis maliyetleri ve ticari yazılım lisansları bu hesaba dahil değil.

Bu ayrım özellikle önemli. Bir yazılımın geliştirilmesinin ₺3 milyon civarında gerçekleşmiş olması, ürünün toplam yaşam döngüsü maliyetinin ₺3 milyon olduğu anlamına gelmiyor.

## Geleneksel Ekip Senaryosunun TL Maliyeti

Geleneksel ekip senaryosunda projenin yine Mayıs 2025'te başladığı varsayılıyor. İlk yaklaşık 7,3 ay 2025 ücretleriyle, daha sonraki dönem ise 2026 ücretleriyle fiyatlanıyor.

Üç efor senaryosu kullanılıyor:


| Senaryo | Efor        | Yaklaşık doğrudan maliyet | %15 belirsizlik payıyla |
| ------- | ----------- | ------------------------- | ----------------------- |
| Düşük   | 144 kişi-ay | ₺43 milyon                | **₺49 milyon**          |
| Orta    | 180 kişi-ay | ₺55 milyon                | **₺64 milyon**          |
| Yüksek  | 214 kişi-ay | ₺67 milyon                | **₺77 milyon**          |


Dolar bazında belirsizlik payı dahil aralık yaklaşık **$1,12–1,69 milyon**.

%15 ek tutar "AI maliyet farkını büyütmek" amacıyla eklenmiş özel bir kalem değil; geleneksel yazılım projelerinde planlama tahmininin kesin bir maliyet gibi okunmasını engellemek için kullanılan genel bir belirsizlik payı. İstenirse karşılaştırmayı bu pay olmadan da yapmak mümkün ve doğrudan tahmin yine ₺43–67 milyon aralığında kalıyor.

Aynı ekip bugün yalnızca 2026 ücretleriyle yeniden fiyatlansaydı orta senaryo belirsizlik payından önce yaklaşık **₺62 milyon**, %15 pay eklendiğinde ise yaklaşık **₺71 milyon** seviyesine çıkıyor. Ancak geçmişteki bir geliştirme faaliyetini bugünkü ücretlerle değerlendirmek adil olmayacağı için temel karşılaştırmada yıl bazlı ücretler kullanılıyor.

## Peki Uluslararası Bir Ekipten Satın Alınsaydı?

İkinci bir referans noktası olarak uluslararası özel yazılım geliştirme maliyeti de değerlendiriliyor.

150–210 kişi-aylık bir çalışma ve kişi-ay başına **$18.000 karma ekip maliyeti** varsayımıyla:


| Senaryo | Hesaplanan geliştirme maliyeti |
| ------- | ------------------------------ |
| Düşük   | yaklaşık $2,7 milyon           |
| Orta    | yaklaşık $3,2 milyon           |
| Yüksek  | yaklaşık $3,9 milyon           |


Tipik entegratör veya özel yazılım tedarikçisi genel giderleri ve ticari marjlar dahil edildiğinde bu hesap yaklaşık **$3–5,5 milyon** seviyesinde bir dış kaynak ikame maliyeti öngörüyor.

Bu rakam da gerçekleşmiş bir teklif değil. Uluslararası piyasa için oluşturulmuş planlama senaryosu ve bu şekilde okunması gerekiyor.

## O Zaman "21 Kat Daha Ucuz" Demek Doğru mu?

Matematik açısından orta senaryolara bakarsak böyle bir oran gerçekten çıkıyor.

Geleneksel Türkiye senaryosu:

**₺64 milyon**

AI destekli gerçekleşen geliştirme:

**yaklaşık ₺3 milyon**

Sonuç:

**64 / 3 ≈ 21 kat**

Aynı şekilde efor açısından:

**180 kişi-ay / 5,1 kişi-ay ≈ 35 kat**

Uluslararası maliyette yaklaşık $4 milyonluk orta değer ile $70 bin civarındaki gerçekleşen maliyet karşılaştırıldığında oran **50'nin üzerine** çıkıyor.

Fakat bu rakamları "AI yazılım geliştirmeyi 21 kat ucuzlatır" veya "bir AI ajanı geliştiriciyi 35 kat verimli yapar" şeklinde okumak yanlış olur.

Bu oranlar **bu ürünün gerçekleşen geliştirme modeli ile aynı ürün için oluşturulmuş karşı-olgusal ekip tahmininin oranlarıdır**. İki farklı şirket, iki farklı ürün veya iki farklı mühendis için aynı sonucu vermek zorunda değiller.

Dahası, insan tarafındaki beş kişi-ay sıradan beş kişi-ay değil. Ürün vizyonu, alan bilgisi, mimari karar verme, güvenlik değerlendirmesi ve çok sayıda teknik disiplini birlikte yönetme kapasitesi aynı kişide yoğunlaşıyor. Eğer bu bilgi ve deneyim başlangıçta mevcut olmasaydı, organizasyonun bu yetkinliği oluşturması veya farklı kişilerden satın alması gerekebilirdi.

Dolayısıyla 35× rakamı bir **kodlama hızlandırma katsayısı değil**. En fazla, bu özel vakada geleneksel ekip tahmini ile gerçekleşen insan emeği arasındaki farkı tarif ediyor.

## 150 Bin Satır Kod Beş Kişi-Ayda Nasıl Oluşabiliyor?

Burada agentic, yani ajan tabanlı geliştirme biçimi ile klasik "kod tamamlama" araçlarını ayırmak gerekiyor.

Klasik AI kodlama yardımcılarında mühendis kodu kendisi üretmeye devam eder; AI fonksiyonlar, testler, küçük kod parçaları veya öneriler sağlar. Ajan tabanlı geliştirmede ise mühendis önce yapılacak işi tanımlar, mimari sınırları koyar, kabul kriterlerini belirtir ve işin uygulanmasını önemli ölçüde ajana devredebilir.

Bu vakada yazılı planlar, geliştirme günlükleri ve küçük uygulama dilimleri belirleyici rol oynuyor. Örneğin ikinci ürün dalgasında bazı özelliklerin birkaç gün, bazılarının ise bir gün içinde kod tamamlanma aşamasına geldiği kaydedilmiş.

Buradaki kritik ifade **"kod tamamlanma"**. Kodun tamamlanması ile bir özelliğin güvenilir biçimde üretime hazır olması aynı şey değil.

## Tam da Bu Noktada Rakamların Diğer Yarısı Ortaya Çıkıyor

Hızlı uygulama üretiminin ciddi bir yan etkisi bulunuyor: doğrulama faaliyetleri aynı hızla ilerlemek zorunda değil.

Bu üründe yaklaşık 118 bin satır ana uygulama kaynak koduna karşılık otomatik test alanında yaklaşık 6.700 satır ve 50 test dosyası bulunuyor. Bu doğrudan kötü kalite anlamına gelmez; ancak ürün yüzeyinin büyüklüğü dikkate alındığında test yatırımının artırılması gerektiği açık.

Bazı iş akışlarında kod tamamlanmış olmasına rağmen manuel smoke testlerinin henüz açık olması da aynı soruna işaret ediyor. Özellikle harici penetrasyon testi, daha kapsamlı otomatik testler ve AI tarafından oluşturulan veri sorgularının iş açısından doğru olup olmadığını ölçen bir değerlendirme seti henüz tamamlanması gereken alanlar arasında duruyor.

Bu, AI destekli geliştirmenin en önemli derslerinden biri olabilir. **Kod üretme kapasitesini büyütmek, doğrulama kapasitesini otomatik olarak büyütmüyor.**

Bir ekip geçmişte haftada beş özellik geliştirebildiği için kalite ekibi de beş özellik doğruluyorsa, ajanlarla haftada yirmi özellik üretmeye başladığında doğrulama süreci yeni darboğaz haline gelebilir.

## AI Ürünlerinde "Doğru Çalışıyor" Ne Demek?

Geleneksel uygulamalarda test çoğunlukla "Girdi doğruysa beklenen çıktı geliyor mu?" sorusuna indirgenebilir. AI içeren ürünlerde ise buna ikinci bir soru ekleniyor: "Teknik olarak çalışan sistem, iş açısından doğru cevabı mı üretti?"

Örneğin doğal dilde "Geçen çeyrekte en yüksek kayıp hangi üretim hatlarında gerçekleşti?" sorusunun veri sorgusuna dönüştürüldüğünü düşünelim. Sorgu teknik olarak geçerli olabilir, veri tabanında başarıyla çalışabilir ve sonuç döndürebilir. Buna rağmen yanlış tarih alanını, yanlış kayıp tanımını veya yanlış gruplama kullanıyorsa sistem teknik olarak başarılı fakat iş açısından yanlış davranıyor olabilir.

Bu nedenle böyle bir ürün için "golden set" olarak adlandırılabilecek doğrulanmış soru-cevap çiftleri gerekiyor. Bilinen iş soruları, insanlar tarafından doğrulanmış beklenen sonuçlarla birlikte saklanmalı ve AI motorundaki her önemli değişiklik sonrasında yeniden çalıştırılmalı.

Kod üretiminde kazanılan zamanın bir bölümünü bu tür değerlendirme altyapısına aktarmamak, hız avantajını ürün riski olarak geri getirebilir.

## Bir Başka Risk: Bus Factor

Vakanın ekonomik açıdan güçlü görünmesinin nedenlerinden biri çok az insanın çok geniş ürün yüzeyini yönetebilmesi. Aynı özellik organizasyonel açıdan ciddi bir risk oluşturuyor.

Ürün mimarisi, geçmiş kararlar, veri modeli, AI davranışı, güvenlik yaklaşımı ve ürün vizyonunun önemli bölümü tek bir kişide yoğunlaşıyor. Bu, doğrudan bir **"bus factor of one"** problemi.

Buradaki çözüm yeniden on kişilik geliştirme ekibi kurmak olmak zorunda değil. Ancak en azından ikinci bir mühendisin kritik bileşenleri gerçekten anlayacak seviyeye gelmesi, mimari kararların kayıt altına alınması, güvenlik ve kalite süreçlerinde başka insanların aktif rol alması gerekiyor.

AI ajanı bilgi aktarımının yerine geçmiyor. Hatta bir insanın normalden çok daha geniş bir kod yüzeyi oluşturmasına izin verdiği için bilgi yoğunlaşması problemini büyütebiliyor.

## Önümüzdeki 12 Ay İçin Hesap Ne Söylüyor?

Burada yalnızca geçmiş maliyet değil, önümüzdeki ürünleştirme dönemi de tahmin ediliyor.

Planlanan veya tamamlanması gereken başlıca alanlar arasında bağlantı kesintilerine dayanıklı arka plan konuşmaları, gömülü kullanım için kimlik aktarımı, dış araçlarla etkileşim, kalan kullanıcı deneyimi iyileştirmeleri, güvenlik testleri, AI sorgu kalitesi değerlendirme sistemi, yüksek erişilebilirlik ve ikinci mühendise bilgi aktarımı bulunuyor.

Bunlar için tahmin:

**AI destekli model: yaklaşık 12–18 insan kişi-ay**

**Geleneksel model: yaklaşık 35–55 kişi-ay**

Maliyet tarafında ise üç ayrı senaryo hesaplanmış:


| Yaklaşım                                                    | 12 aylık tahmini maliyet |
| ----------------------------------------------------------- | ------------------------ |
| Mevcut küçük çekirdek + AI ajanları                         | ₺2,1–2,5 milyon          |
| Aynı çekirdek + tam zamanlı QA/güvenlik + müşteri mühendisi | **₺9–11 milyon**         |
| Geleneksel 6–8 kişilik sürdürülebilir ürün ekibi            | ₺25–33 milyon            |


Burada ilginç olan en düşük maliyetli seçeneğin otomatik olarak önerilmemesi. Buradaki öneri, tek kişilik modeli aynen sürdürmek yerine QA/güvenlik ve müşteri mühendisliği kapasitesi eklemek. Başka bir ifadeyle AI ile elde edilen uygulama avantajının bir bölümünün **kalite, güvenlik ve organizasyonel dayanıklılığa yeniden yatırılması** öneriliyor.

## Hesabın Duyarlılık Testi

Karşı-olgusal 180 kişi-ay tahmininin fazla yüksek olduğunu düşündüğümüzü varsayalım.

Daha muhafazakâr bir senaryoda:

**120 kişi-ay**, yani örneğin sekiz kişilik bir ekibin 15 aylık çalışması.

Bu durumda geleneksel Türkiye maliyeti belirsizlik payı eklenmeden bile yaklaşık **₺36 milyon** düzeyine geliyor. AI destekli gerçekleşen maliyet yaklaşık ₺3 milyon kabul edildiğinde fark hâlâ yaklaşık **12 kat**.

Ters yönde, kaynak kod büyüklüğüne dayalı klasik parametrik yazılım tahmin yöntemleri uygulandığında efor 250 kişi-ayın üzerine çıkabiliyor. Bu rakamlar fazla agresif olduğu için temel senaryoda kullanılmadı.

Bir başka hassasiyet testi de kıdemli mühendisin yalnızca ürüne ayırdığı üçte birlik zaman yerine bütün maaş maliyetinin ürüne yazılması. Böyle yapıldığında AI destekli geliştirme maliyeti yaklaşık **₺7–8 milyon** seviyesine çıkıyor. Bu durumda geleneksel Türkiye senaryosuna göre fark yaklaşık **8 kata** düşüyor.

Dolayısıyla sonuç kullanılan varsayımlara oldukça duyarlı; ancak daha muhafazakâr varsayımlarda bile iki geliştirme modelinin maliyet yapıları arasında önemli bir fark kalıyor.

## Bu Vaka Bize Neyi Söylüyor, Neyi Söylemiyor?

Bu vaka bize deneyimli bir mühendisin ajan tabanlı geliştirme modeliyle çok geniş bir ürün yüzeyini alışılmıştan çok daha az doğrudan insan emeğiyle yönetebileceğini gösteriyor. Aynı zamanda ürün kararları, mimari, güvenlik ve değerlendirme kapasitesinin uygulama üretme kapasitesinden daha kritik hale gelebileceğine dair güçlü bir işaret sunuyor.

Ancak vaka bize herhangi bir yazılım projesinin %90 daha ucuz geliştirilebileceğini söylemiyor. Bir junior geliştiricinin AI kullanarak aynı sonuca ulaşacağını göstermiyor, 180 kişi-aylık alternatif tahmin gerçekleşmiş bir kontrol grubu olmadığı için bilimsel bir "35x üretkenlik" deneyi oluşturmuyor ve ürünün yaşam döngüsü maliyetinin geliştirme maliyeti kadar düşük kalacağını garanti etmiyor.

Üstelik ortaya çıkan sonuçların önemli bölümü belirli koşullara bağlı. Kıdemli mühendisin ürün alanını ve mimariyi bilmesi, karar alma yetkisine sahip olması, çok sayıda disiplinde çalışabilmesi, ürünün uzun süre aynı teknik sahip tarafından yönetilmesi ve ajanların yazılı planlarla yönlendirilmesi bunlardan bazıları.

Bu koşullar ortadan kalktığında sonuçların da değişmesini beklemek gerekir.

## Asıl İlginç Sonuç Maliyet Değil

Bu rakamlar ilk bakışta maliyet hikâyesi gibi görünüyor. Bana göre asıl ilginç sonuç biraz daha farklı.

Geleneksel modelde geniş kapsamlı yeni bir kurumsal ürün fikrini denemek için önce sekiz, on veya daha fazla kişiden oluşan bir ekip kurmak gerekiyorsa, ürün fikrinin daha başlangıç aşamasında önemli bir finansman ve organizasyon kararı almak zorunda kalıyoruz. Böyle bir eşik doğal olarak yalnızca en yüksek güven duyulan fikirlerin denenmesine yol açıyor.

Ajan tabanlı model bu eşiği aşağı çekebilir. Ancak bunu "insanlardan tasarruf etme" aracı olarak değil, **daha küçük mühendislik çekirdeklerinin daha büyük problemleri ekonomik olarak araştırabilmesini sağlayan bir kapasite artışı** olarak değerlendirmek daha sağlıklı olabilir.

Başarılı olan ürünlerde ise bir sonraki yatırımın yine daha fazla özellik geliştirmek yerine kalite güvence, güvenlik, müşteri mühendisliği, değerlendirme sistemleri, operasyon ve bilgi paylaşımı alanlarına yönelmesi gerekebilir.

Bu nedenle geleceğin güçlü yazılım ekiplerinin mutlaka daha küçük olacağını söylemek için henüz erken. Ancak ekiplerin bileşiminin değişmesi oldukça olası görünüyor.

## Kaynaklar ve Hesaplamada Kullanılan Veriler

Ücret verilerinin ana kaynağı **Önceki Yazılımcı — Yazılım Sektörü Maaşları 2025** çalışmasıdır. Çalışma 9.056 katılımcının yayınlanmış aylık net ücret ortalamalarını içeriyor:

[https://oncekiyazilimci.medium.com/yaz%C4%B1l%C4%B1m-sekt%C3%B6r%C3%BC-maa%C5%9Flar%C4%B1-2025-ff4d1e78739c](https://oncekiyazilimci.medium.com/yaz%C4%B1l%C4%B1m-sekt%C3%B6r%C3%BC-maa%C5%9Flar%C4%B1-2025-ff4d1e78739c)

2026 için aynı araştırmanın kişi bazındaki açık veri seti kullanılmıştır. Veri setinde 5.002 kayıt bulunmakta; hesaplamada Türkiye lokasyonunda ve TL cinsinden ücret bildiren 4.571 kayıt kullanılmıştır:

[https://github.com/oncekiyazilimci/2026-yazilim-sektoru-maaslari](https://github.com/oncekiyazilimci/2026-yazilim-sektoru-maaslari)

Türkiye kıdemli yazılım mühendisi toplam ücret seviyelerini karşılaştırmak amacıyla ayrıca Levels.fyi verisi referans olarak değerlendirilmiştir. 1 Eylül 2026 itibarıyla Levels.fyi'de belirtilen medyan toplam yıllık ücret yaklaşık ₺2,16 milyon seviyesindedir:

[https://www.levels.fyi/t/software-engineer/levels/senior/locations/turkey](https://www.levels.fyi/t/software-engineer/levels/senior/locations/turkey)

İşveren maliyeti hesaplamalarında ilgili yılların sosyal güvenlik oranları, prime esas kazanç tavanları ve 2026'da yürürlüğe giren mevzuat değişiklikleri esas alınmıştır. Bu hesapta 2025 için ₺195.041, 2026 için ise ₺297.270 prime esas kazanç tavanı kullanılmış ve işveren maliyetlerine ayrıca %12 yan hak/genel fayda yükü eklenmiştir.

Döviz dönüşümünde 2025 harcamaları için ortalama **₺39,58/$**, 2026 için ise 1 Eylül 2026 tarihindeki yaklaşık **₺48,27/$** kuru kullanılmıştır.

AI geliştirme ajanlarının maliyetleri ilgili dönemlerdeki yayınlanmış abonelik liste fiyatlarından alınmıştır. Hesaplamada ilk geliştirme dönemi için aylık yaklaşık $200–250, ikinci dönem için aylık yaklaşık $200 seviyesinde abonelik maliyeti ve ayrıca $2.000–8.000 aralığında kullanım fazlası/model harcaması için planlama karşılığı bulunmaktadır.

Bütün bu kaynaklar ve varsayımlar birlikte ele alındığında hesaplamanın amacı kesin bir şirket değerlemesi veya bordro hesabı üretmek değil; aynı ürün kapsamının iki farklı mühendislik modeli altında ekonomik büyüklüğünün ne kadar farklılaşabileceğini göstermek.

## Son Söz

Bu vaka yalnızca "AI ile daha hızlı kod yazıldı" hikâyesi değil. Yaklaşık 15,3 aylık bir takvim, kıdemli mühendis açısından yaklaşık 5,1 kişi-aylık ayrılmış insan emeği, yaklaşık ₺2,5–3,5 milyon olarak tahminlediğimiz gerçekleşen geliştirme maliyeti ve aynı ürün kapsamı için yaklaşık 144–214 kişi-aylık geleneksel mühendislik tahmini söz konusu.

Orta senaryolar matematiksel olarak yaklaşık 21 kat maliyet ve 35 kat insan eforu farkı üretiyor. Ancak bu oranları genel AI verimlilik katsayıları olarak kullanmak yerine, belirli bir ürünün, belirli bir mühendisin ve belirli bir çalışma modelinin sonucu olarak okumak gerekiyor.

Bence bu vakadan çıkarılabilecek daha kalıcı ders şu: AI ajanlarının yazılım mühendisliğine etkisini yalnızca kod üretme hızında ararsak konunun önemli bölümünü kaçırabiliriz. Daha temel değişim, uygulama üretmenin giderek daha fazla otomatikleşmesiyle insan mühendislik emeğinin problem tanımlama, mimari kurma, karar verme, değerlendirme, güvenlik ve sorumluluk alanlarına kayması olabilir.

Bu değişim doğru yönetildiğinde çok güçlü sonuçlar doğurabilir. Yanlış yorumlandığında ise aynı sayılar, şirketleri testten, güvenlikten, deneyimli mühendislerden ve gerekli organizasyonel yatırımlardan vazgeçmeye ikna edecek kadar yanıltıcı olabilir.

---

{% include share_twitter_tr.html %}

---

