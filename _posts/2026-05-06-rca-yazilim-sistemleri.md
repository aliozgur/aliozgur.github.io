---
layout: post
title: "Yazılım Sistemlerinde Kök Neden Analizi Gerçekten Yapılıyor mu?"
subtitle: "Observability, Teknik Borç ve Operasyonel Dürüstlük"
date: 2026-05-06
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - rca
  - observability
  - devops
  - reliability

---

Kök neden analizi, yani RCA (Root Cause Analysis), endüstride uzun yıllardır kullanılan en önemli iyileştirme araçlarından bir tanesi. Üretimden havacılığa, finanstan enerji sektörüne kadar birçok alanda, yaşanan bir problemin gerçek nedenini bulmak ve aynı problemin tekrar yaşanmasını engellemek için RCA süreçleri uygulanıyor.

Temel mantık oldukça basit. Bir sorun yaşandıysa sadece görünen sonucu değil, o sonucu ortaya çıkaran gerçek nedeni bulmak gerekir. Çünkü semptomları düzeltmek ile problemi çözmek aynı şey değildir.

![Cover]({{ root.url }}/media/rca-yazilim-sistemleri.png)

<!--end-of-excerpt-->

Örneğin bir üretim hattında sürekli motor arızası yaşandığını düşünelim. Eğer sadece motor değiştirilirse sorun geçici olarak ortadan kalkar. Ancak motoru zorlayan yanlış yağlama sistemi, titreşim problemi veya yanlış yük hesabı bulunmazsa aynı arıza tekrar yaşanır.

Bu nedenle iyi bir RCA çalışmasının temel amacı suçlu bulmak değil, sistematik olarak problemi tekrar üretmeyecek şekilde kalıcı iyileştirme sağlamaktır.

Ancak konu yazılım sistemlerine geldiğinde işler çoğu zaman teoride anlatıldığı kadar temiz ilerlemiyor. Özellikle büyük ölçekli dağıtık sistemlerde, yeterli gözlemlenebilirlik altyapısı olmayan yapılarda ve operasyonel baskının yoğun olduğu kurumlarda RCA süreçleri çoğu zaman gerçek kök nedeni bulma faaliyetinden çok, olay sonrası yorum üretme egzersizine dönüşebiliyor.

## Yazılım Sistemlerinde RCA Neden Zor?

Yazılım sistemleri fiziksel sistemlerden farklı olarak çok daha soyut katmanlardan oluşuyor.

Bir performans problemi yaşandığında problem;

- Veritabanından
- Ağ altyapısından
- Disk IO darboğazından
- Cache mekanizmasından
- Yanlış deployment işleminden
- Uygulama kodundan
- Concurrency probleminden
- Üçüncü parti servislerden
- Hatalı konfigürasyondan
- Kaynak tüketiminden
- Hatta izleme araçlarının eksikliğinden

kaynaklanmış olabilir.

Üstelik birçok durumda sorun yaşandığı anda gerekli telemetri, trace, metrik veya log verisi toplanmamışsa, olay geçtikten sonra geriye dönük olarak gerçek nedeni tespit etmek neredeyse imkansız hale gelir. Asıl problem de burada başlıyor.

## Gerçek Hayattan Çok Yaygın Bir Senaryo

Bir veritabanı sunucusunda ciddi performans problemi yaşandığını düşünelim.

Sistem yavaşlıyor.<br/>
API yanıt süreleri yükseliyor.<br/>
Kullanıcılar işlem yapamıyor.<br/>
Üretim duruyor.<br/>
Sipariş akışı kesiliyor.<br/>

Bu sırada sistemde;

- Query trace yok
- Yeterli slow query log yok
- CPU ve IO telemetry eksik
- Wait statistics toplanmıyor
- Application trace correlation yok
- Distributed tracing yok
- Historical metric retention yok

Bu durumda kurumun önünde genellikle iki seçenek kalıyor.

### Seçenek 1: Sistemi Ayağa Kaldırmadan Önce Veri Toplamak

Bu yaklaşım göreceli olarak teknik açıdan daha doğrudur. Çünkü gerçek RCA için olay anındaki veriye ihtiyaç vardır. Ancak burada başka bir problem ortaya çıkar.

Sorun devam ettiği sürece:

- Operasyon durabilir
- Kullanıcılar sistemi kullanamaz
- Üretim aksayabilir
- Finansal kayıp büyüyebilir
- SLA ihlalleri oluşabilir
- Müşteri memnuniyetsizliği artabilir

Bu nedenle operasyon ekipleri çoğu zaman "önce sistemi ayağa kaldıralım" baskısı altında kalır.

### Seçenek 2: Sistemi Yeniden Başlatıp Sonra Tahmin Yürütmek

Bu yaklaşım pratikte çok yaygındır.

Sunucu yeniden başlatılır.<br/>
Servisler ayağa kaldırılır.<br/>
Sistem normale döner.<br/>
Ardından toplantılar başlar.<br/>

Ve klasik cümleler gelir:

- Muhtemelen memory leak vardı
- Büyük ihtimalle deadlock oluştu
- Network tarafında anlık problem olmuş olabilir
- Disk latency yükselmiş olabilir
- Garbage collector problemi olabilir
- Bir kullanıcı ağır query çalıştırmış olabilir

Dikkat edilirse burada artık RCA yapılmıyordur. Aslında yapılan şey kontrollü teknik analiz değil, olasılık üretmektir. Çünkü gerçek veri artık yoktur. Dolayısıyla gerçek kök neden çoğu zaman bulunamaz. Sorun geçici olarak ortadan kalkmış görünür. Ancak aynı problem günler, haftalar veya aylar sonra tekrar yaşanabilir. Bu durumda kurum yeniden aynı operasyonel ve finansal kayıplarla karşı karşıya kalır.

## İyi Bir RCA Nasıl Görünür?

Gerçek ve sağlıklı bir RCA süreci birkaç temel özelliğe sahip olmalıdır.

### 1. Veri Temelli Olmalıdır

Varsayımlar üzerinden değil, ölçülebilir teknik veriler üzerinden ilerlemelidir.

Örneğin:

- Trace kayıtları
- Distributed tracing
- Query plan analizleri
- Wait statistics
- CPU flame graph'ları
- GC telemetry
- Thread dump'ları
- Historical metric verileri
- Deployment timeline'ları
- Event correlation kayıtları

olmadan yapılan RCA çalışmaları çoğu zaman eksik kalır.

### 2. Sistematik Olmalıdır

Sadece teknik ekibin hafızasına dayanmamalıdır.

İyi RCA süreçleri genellikle:

- Timeline çıkarır
- Olay akışını sıralar
- Etki alanını belirler
- İlk semptomu tespit eder
- Tetikleyici olayı inceler
- Katmanlar arası ilişki kurar

Böylece semptom ile kök neden birbirine karıştırılmaz.

### 3. Tekrarı Önlemeye Odaklanmalıdır

RCA dokümanının amacı sadece rapor yazmak değildir. Gerçek amaç "Bu problem bir daha nasıl yaşanmaz?" sorusunu cevaplamaktır.

Eğer RCA sonrası:

- Monitoring iyileştirilmediyse
- Alert mekanizmaları güncellenmediyse
- Observability artırılmadıysa
- Teknik borç azaltılmadıysa
- Süreç değişikliği yapılmadıysa

aslında RCA tamamlanmış sayılmaz.

## Yazılım Dünyasında Görülen Bir Diğer Problem

RCA'nın teknik boyutu kadar önemli başka bir boyutu daha var.

**Etik boyut.**

Özellikle dış kaynak kullanılan yapılarda veya kritik sistemlerin danışmanlık şirketleri üzerinden operasyonel olarak yürütüldüğü kurumlarda bu durum daha belirgin hale geliyor. Çünkü burada teknik gerçeklerden bağımsız başka dinamikler devreye girebiliyor:

- Sorumluluktan kaçınma
- Ticari ilişkiyi koruma isteği
- Ceza veya yaptırım korkusu
- Operasyonel başarısızlığın görünmesini engelleme çabası
- Kurumsal imaj kaygısı

Bu durumda bazı RCA raporları teknik analiz dokümanından çok, kontrollü savunma metnine dönüşebiliyor.

## Teknik Olarak Yanlış Ama Kurumsal Olarak Rahatlatıcı RCA'lar

Gerçek hayatta bunun çok farklı örnekleri görülebiliyor.

Örneğin:

### Örnek 1

Gerçek problem kapasite planlaması eksikliği olmasına rağmen "Anlık trafik artışı nedeniyle sistemde kısa süreli yavaşlama yaşanmıştır" şeklinde raporlama yapılabiliyor. Burada kök neden aslında trafik artışı değil.

Kök neden:

- Yetersiz kapasite planlaması
- Eksik yük testi
- Ölçeklenebilirlik eksikliği
- Monitoring zafiyeti

olabilir.

### Örnek 2

Bir deployment sonrası başlayan sistem çökmesi için "Beklenmeyen sistem davranışı gözlemlenmiştir" ifadesi kullanılabiliyor.

Ancak gerçekte:

- Test süreci eksik olabilir
- Rollback planı olmayabilir
- Canary deployment yapılmamış olabilir
- Version compatibility kontrolü eksik olabilir

### Örnek 3

Bir veritabanı kilitlenmesi sonrasında "Database üzerinde anlık yoğunluk oluşmuştur" şeklinde rapor hazırlanabiliyor.

Ancak asıl problem:

- Eksik index tasarımı
- Hatalı transaction yönetimi
- Uzun süren lock yapıları
- ORM kaynaklı yanlış query üretimi
- İzlenemeyen concurrency problemi

olabilir.

Bu tarz RCA'lar kısa vadede organizasyonel olarak rahatlatıcı görünse de uzun vadede teknik çürüme üretir. Çünkü problem gerçekten çözülmez. Sadece daha kabul edilebilir bir dille yeniden tanımlanır.

## Observability Aslında RCA'nın Ön Şartıdır

Bugün modern yazılım mimarilerinde **observability** artık lüks değil, zorunluluktur. Bir sistemin gerçekten yönetilebilir olması için:

- Log
- Metric
- Trace
- Event correlation
- Historical telemetry
- Distributed tracing
- Alerting
- Dependency mapping

katmanlarının doğru tasarlanmış olması gerekir.

Aksi halde yaşanan büyük problemlerde RCA çoğu zaman teknik gerçeklikten uzaklaşı ve organizasyon şu döngüye girer:

- Sorun yaşanır
- Sistem yeniden başlatılır
- Geçici normalleşme oluşur
- Tahmini RCA hazırlanır
- Gerçek neden bulunamaz
- Problem tekrar eder

Bu döngü kırılmadığı sürece operasyonel olgunluk oluşmaz.

## Sonuç

Kök neden analizi sadece bir raporlama faaliyeti değildir. Gerçek RCA teknik doğruluk, yeterli veri, gözlemlenebilirlik altyapısı ve organizasyonel dürüstlük gerektirir. Özellikle yazılım sistemlerinde observability olmadan RCA yapmak çoğu zaman karanlık bir odada tahmin yürütmeye benzer. Daha da önemlisi, RCA'nın amacı suçlu bulmak değil, sistemin tekrar aynı şekilde başarısız olmasını engellemektir.

Eğer bir organizasyonda RCA süreçleri teknik gerçekleri ortaya çıkarmak yerine sadece operasyonel baskıyı azaltmak veya sorumluluğu dağıtmak için kullanılıyorsa, orada artık teknik bir problemden çok kültürel bir problem vardır ve çoğu zaman en zor çözülen problemler teknik olanlar değil, kültürel olanlardır.

***
{% include share_twitter_tr.html %}

***
