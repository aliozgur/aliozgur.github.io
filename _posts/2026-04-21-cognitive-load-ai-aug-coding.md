---
layout: post
title: "AI Destekli Yazılım Geliştirmede Bilişsel Yük"
subtitle: "Gerçekten Azalıyor mu?"
date: 2026-04-21
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - development
  - programming
  - engineering
  - ai

---

Yazılım geliştirme pratiği kökten bir dönüşüm geçiriyor. "Vibe coding", AI-assisted yazılım geliştirme ve agentic sistemler artık günlük iş akışımızın parçası haline geldi.

İlk bakışta tablo oldukça net görünüyor: Daha az kod yazıyoruz, daha hızlı ilerliyoruz, daha az efor harcıyoruz.

Ancak sahadaki deneyim farklı bir şey söylüyor.

Birçok geliştirici şu hissi paylaşıyor:

- Daha hızlı ilerliyorum
- Ama daha çabuk yoruluyorum
- Daha az yazıyorum
- Ama daha fazla düşünüyorum

Bu yazıda bu hissin arkasındaki gerçeği inceleyeceğiz: AI gerçekten bilişsel yükü azaltıyor mu, yoksa sadece yeniden mi dağıtıyor?

![Cover]({{ root.url }}/media/cognitive-load-ai-aug-coding.png)


<!--end-of-excerpt-->

## Bilişsel Yük Nedir ve Neden Önemlidir?

Bilişsel yük, çalışma belleğimizin aynı anda işleyebildiği bilgi miktarını ifade eder. İnsan beyninin bu kapasitesi oldukça sınırlıdır.

Cognitive Load Theory bu yükü üç kategoriye ayırır:

### Intrinsic Load
Problemin doğasından gelen zorluktur. Bir algoritmanın karmaşıklığını anlamak veya concurrency problemlerini çözmek bu kapsamdadır.

### Extraneous Load
Kullanılan araçlardan, ortamdan veya bilgi sunumundan kaynaklanan gereksiz yüktür. Kötü dokümantasyon, karmaşık API'ler veya dağınık loglar buna örnektir.

### Germane Load
Öğrenmeye ve zihinsel model oluşturmaya katkı sağlayan yük türüdür.

Modern yazılım geliştirmede verimlilik büyük ölçüde bu üç yükün nasıl dengelendiğine bağlıdır.


## AI Öncesi ve Sonrası: Zihinsel İş Yükü Nasıl Değişti?

### AI Öncesi Geliştirme

- Kod yazma ağırlıklı bir süreç
- Deterministik akış
- Lokal ve odaklı akıl yürütme
- Adım adım problem çözme

Tipik döngü:

> düşün -> kodla -> test et -> debug et

### AI Destekli Geliştirme

- Kod üretimi ağırlıklı
- Non-deterministic çıktılar
- Global ve daha geniş çerçevede akıl yürütme ihtiyacı
- Sürekli değerlendirme

Yeni döngü:

> düşün -> prompt -> oku -> değerlendir -> düzenle -> re-prompt -> karşılaştır

Bu dönüşüm sadece araç değişimi değildir. Bu, zihinsel iş modelinin değişmesidir.


## AI'nin Gerçekten Azalttığı Yükler

AI araçlarının ciddi şekilde optimize ettiği alanlar vardır.

### 1. Syntax ve Hatırlama Yükü

- Dil özelliklerini ezberleme ihtiyacı azalır
- API ayrıntılarını hatırlama zorunluluğu düşer

### 2. Boilerplate Üretimi

- CRUD işlemleri
- DTO mapping
- Konfigürasyon 

### 3. Başlangıç Maliyeti

Yeni bir teknolojiye başlarken:
- "Nasıl yapılır" sorusu daha hızlı cevaplanır

Bu alanlarda AI net bir kazanım sağlar (Bkz: 1) (Bkz: 2).

---

## Ancak Asıl Hikaye Burada Başlıyor

AI bu yükleri azaltırken yeni ve daha karmaşık yükler üretir.

### Kritik Nokta

Toplam bilişsel yük çoğu zaman azalmaz.

Sadece şu şekilde değişir:

- Alt seviye yük (low level load): AZALIR
- Üst seviye yük (high level load): ARTAR
- Meta-bilişsel yük (meta cognitive load): ÇOK ARTAR


## AI ile Ortaya Çıkan Yeni Bilişsel Yük Türleri

### 1. Doğrulama Yükü (Verification Load)

AI'nin ürettiği kod her zaman doğru değildir.

Geliştirici artık şunları yapmak zorundadır:

- Kodun semantiğini anlamak
- Gizli varsayımları ortaya çıkarmak
- Edge case'leri test etmek
- Güvenlik ve performans etkilerini analiz etmek

Bu süreç çoğu zaman sıfırdan yazmaktan daha zordur çünkü:

- Kod sizin değildir
- Neden o şekilde yazıldığını bilmiyorsunuz

Bu durum ciddi bir zihinsel maliyet oluşturur (Bkz: 3).



### 2. Bağlam Yönetimi (Context Management)

AI ile çalışırken geliştirici sürekli çok katmanlı bir bağlamı yönetir:

- İş gereksinimi
- Sistem mimarisi
- AI prompt'u
- AI çıktısı
- Önceki iterasyonlar

Bu bağlamın önemli bir kısmı dışsallaştırılmıştır, yani araç içinde dağınık halde bulunur.

Sonuç:

Geliştirici sürekli "mental state reconstruction" (konu ile ilgili son durumu bilinç seviyesine yükleme) yapmak zorunda kalır.



### 3. Dikkat Bölünmesi (Attention Fragmentation)

AI destekli akış sürekli kesintiler içerir:

- Bekleme süreleri
- Yeni çıktıların okunması
- Karşılaştırma yapılması

Bu durum "konsantre ve derin iş yapma" (deep work) kapasitesini düşürür.

Zihinsel odak yerine mikro kararlar devreye girer.



### 4. Karar Yükü (Decision Load)

AI birden fazla alternatif sunar.

Her alternatif için geliştirici:

- Hangisi doğru?
- Hangisi daha performanslı?
- Hangisi maintainable?

sorularını cevaplamak zorundadır.

Bu sürekli karar verme hali zihinsel yorgunluğu artırır.



### 5. Sorumluluk Paradoksu

AI kod üretir.

Ama:

- Production hatasından geliştirici sorumludur
- Teknik borç geliştiriciye kalır

Bu nedenle geliştirici:

- AI'ya güvenmek ister
- Ama güvenemez

Bu ikilem sürekli bir zihinsel gerilim yaratır.

### 6. Öğrenme Erozyonu (Learning Degradation)

AI kullanımı ile birlikte bazı geliştiricilerde:

- Derin düşünme azalır
- Problem çözme kası zayıflar

Agentic sistemlerle yapılan çalışmalarda zamanla bilişsel katılımın düştüğü gözlemlenmiştir (Bkz: 5).

Bu durum özellikle junior geliştiriciler için kritik bir risktir.


## Deneyimli Geliştiriciler Neden Daha Fazla Zorlanıyor?

İlginç bir şekilde bazı araştırmalar deneyimli geliştiricilerin AI araçlarından beklenen verimi alamadığını gösteriyor.

Bunun sebepleri:

### 1. Daha Yüksek Standartlar
Senior geliştirici:
- Edge case düşünür
- Performansı analiz eder
- Mimari uyumunu kontrol eder

### 2. Daha Fazla Doğrulama
AI çıktısını olduğu gibi kabul etmez.

### 3. Mevcut Mental Model ile Çakışma
AI'nin ürettiği çözüm:
- Beklenen pattern'e uymayabilir

Bu da ekstra bilişsel çaba gerektirir.

Bazı çalışmalarda bu nedenle deneyimli geliştiricilerde net üretkenlik artışı görülmemiştir (Bkz: 4).

---

## Vibe Coding Neden Yorucu?

Vibe coding uzaktan bakıldığında ve bize her gün pompalandığı şekli ile (hype) çok akıcı görünür.

Ama aslında şu özelliklere sahiptir:

- Sürekli bağlam değişimi
- Non-deterministic çıktı
- Yüksek doğrulama ihtiyacı
- Yüksek karar frekansı

Bu da şuna yol açar:

Zihinsel olarak hafiften hissedilen ama aslında yüksek frekabslı bilişsel yük üreten bir süreç.


## Yeni Rol: Bilişsel Orkestrasyon

AI çağında geliştirici artık:

Kod yazan kişi değildir.

Şu rolleri üstlenir:

- Problem tanımlayıcı
- Prompt tasarımcısı
- Çözüm değerlendirici
- Sistem entegratörü

Bu rol değişimi şu becerileri öne çıkarır:

- Eleştirel düşünme
- Sistem tasarımı
- Doğrulama ve test
- Belirsizlik yönetimi

Bu beceriler doğal olarak daha yüksek bilişsel yük gerektirir.


## Stratejik Çıkarım

AI destekli geliştirme:

- Mekanik yükü azaltır
- Analitik yükü artırır
- Meta düşünmeyi zorunlu kılar

Bu nedenle gelecekte fark yaratacak geliştiriciler:

- En hızlı kod yazanlar değil
- En iyi düşünenler olacaktır


## Sonuç

AI yazılım geliştirmede bilişsel yükü ortadan kaldırmaz.

Onu yeniden dağıtır ve daha üst seviyeye taşır.

- Low-level yük azalır
- High-level yük artar
- Meta-cognitive yük ortaya çıkar

Bu yüzden geliştiricilerin hissettiği zihinsel yorgunluk gerçek ve sistematik bir durumdur.

Bu yeni dünyada başarı, AI kullanabilmekten değil, AI ile düşünmeyi yönetebilmekten geçer.


***
{% include share_twitter_tr.html %}

***

## Referanslar

1. [Large Language Models Reduce Cognitive Load in Programming Tasks](https://www.nature.com/articles/s41599-025-04471-1)

2. [AI Pair Programming and Its Effects on Learning and Motivation](https://link.springer.com/article/10.1186/s40594-025-00537-3)

3. [Cognitive Load in AI-Assisted Programming Environments](https://arxiv.org/html/2501.02684v1)

4. [Productivity Impacts of AI Coding Tools on Experienced Developers](https://www.businessinsider.com/ai-coding-tools-may-decrease-productivity-experienced-software-engineers-study-2025-7)

5. [Decline in Cognitive Engagement with Agentic AI Coding Systems](https://arxiv.org/abs/2603.14225)

