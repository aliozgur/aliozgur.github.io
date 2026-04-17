---
layout: post
title: "Yapay Zeka Çağında Lehman’ın Evrim Kanunları"
subtitle: "AI ile Üretilmiş Yazılım da Çürür mü?"
date:  2026-04-17
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - development
  - programming
  - engineering
  - ai

---
1970’lerin sonlarında Meir Lehman, büyük ölçekli yazılım sistemlerinin zaman içindeki davranışlarını inceleyerek bir dizi kanun ortaya koydu. Bu kanunlar teorik değil, doğrudan üretim sistemlerinden elde edilen gözlemlere dayanıyordu.

Bugün ise farklı bir kırılma noktasındayız. Yazılım artık sadece insanlar tarafından yazılmıyor, giderek artan oranda AI ile üretiliyor.


![Cover]({{ root.url }}/media/lehmans-law-and-ai.png)

<!--end-of-excerpt-->

Bu durum şu soruyu gündeme getiriyor:

AI ile üretilmiş yazılım, Lehman’ın kanunlarından muaf mı, yoksa bu kanunlar daha sert mi uygulanıyor?

Kısa cevap nettir. Lehman’ın kanunları geçerliliğini korur. Hatta AI bağlamında daha agresif şekilde kendini gösterir.


## Lehman Kanunlarına Kısa Bir Bakış

Tüm kanunlar önemli olmakla birlikte, AI ile üretilmiş sistemler açısından özellikle şu başlıklar kritik hale gelir:

### Kanun-1: Sürekli Değişim

Bir sistem, içinde bulunduğu ortam değiştikçe adapte olmak zorundadır. Aksi takdirde zamanla değerini kaybeder.

### Kanun-2: Artan Karmaşıklık

Bir sistem evrildikçe karmaşıklığı artar. Bu artışı dengelemek için bilinçli sadeleştirme yapılmazsa sistem kontrol edilemez hale gelir.

### Kanun-3: Sürekli Büyüme

Kullanıcı memnuniyetini korumak için sistemin fonksiyonelliği sürekli artmak zorundadır.

### Kanun-4: Azalan Kalite

Aktif bakım yapılmazsa sistemin kalitesi zamanla düşer.

### Kanun-5: Geri Besleme Sistemi

Sistem evrimi, kullanıcılar, operasyonel veriler ve iş ihtiyaçları gibi geri besleme mekanizmaları ile yönlendirilir.

Bu kanunlar insan tarafından geliştirilen sistemler için tanımlanmıştır. Ancak asıl soru şudur: AI ile üretilen sistemlerde ne değişir?



## Yanılsama: AI Kod Yazıyor, O Halde Çürüme Yok

Bugün sahada sık karşılaşılan bir varsayım var:

AI kodu her zaman yeniden üretebilir, bu yüzden uzun vadeli bakım artık kritik değildir.

Bu varsayım hatalıdır.

AI şunları ortadan kaldırmaz:

* Değişen iş ihtiyaçları
* Evrilen API ve bağımlılıklar
* Mimari kararların etkileri
* Operasyonel kısıtlar

AI sadece üretim mekanizmasını değiştirir. Sistem davranışını değil.


## Kanun-1: Sürekli Değişim ve AI Sistemler

AI ile üretilmiş sistemler genellikle şu girdilere dayanır:

* Prompt
* Context
* Model

Ancak gerçek dünya sabit değildir:

* API versiyonları değişir
* Regülasyonlar güncellenir
* İş kuralları evrilir
* Altyapı kısıtları farklılaşır

Kod yeniden üretilebilir. Ancak doğru bağlam olmadan yapılan üretim, evrim değil sapma üretir.

AI değişimi ortadan kaldırmaz. Yönetilmeyen değişimi hızlandırır.


## Kanun-2: Artan Karmaşıklık Artık Gizli

Klasik sistemlerde karmaşıklık şuralarda birikir:

* Kod
* Mimari
* Bağımlılıklar

AI ile üretilmiş sistemlerde yeni bir katman vardır:

* Prompt yapıları
* Context bağımlılıkları
* Model davranış varyasyonu

Artık iki sistem yönetiyorsunuz:

1. Runtime sistem
2. Generation sistemi

Bu ayrım yönetilmezse:

* Pattern tutarsızlığı
* Logic duplikasyonu
* Mimari drift

kaçınılmazdır.

Karmaşıklık azalmaz. Sadece görünmez hale gelir.


## Kanun-3: Sürekli Büyüme ve Feature Enflasyonu

AI ile feature geliştirme maliyeti dramatik şekilde düşer.

Bu, kontrolsüz büyümeyi tetikler.

AI şunları yapar:

* Lokal optimize eder
* Global mimariyi ihmal eder
* Yeniden üretir, soyutlamaz

Sonuç:

* Hızlı büyüme
* Hızlı entropy artışı

Bu noktada büyüme artık değer değil, risk üretir.


## Kanun-4: Azalan Kalite Artık Daha Sinsi

Klasik kalite düşüşü görünürdür:

* Code smell
* Performans problemleri
* Teknik borç

AI ile üretilmiş sistemlerde kalite düşüşü daha sinsi ilerler:

* Semantik drift
* Prompt hassasiyeti
* Sessiz regresyonlar

Üretilen kod:

* Derlenir
* Okunur
* Temiz görünür

Ama sistemle uyumsuz olabilir.

Bu da kalite problemlerini tespit etmeyi zorlaştırır.


## Kanun-5: Geri Besleme Olmadan Evrim Yok

Lehman’ın en kritik noktası geri beslemedir.

AI süreçlerinde çoğunlukla eksik olan da budur:

* Runtime feedback yok
* Prompt adaptasyonu yok
* Otomatik doğrulama yok

Bu durumda sistem doğruyu değil, makul olanı üretir.

Bu evrim değildir. Drift’tir.


## Yeni Bir Kavram: Regenerative Rot

Klasik yazılım çürümesi teknik borç birikimidir.

AI ile yeni bir pattern ortaya çıkar:

Regenerative Rot

Sistem sürekli yeniden üretilir, ama her iterasyonda doğruluktan uzaklaşır.

Sebep:

* Context kaybı
* Non-determinism
* Tarihsel kararların kaybı
* Invariant enforcement eksikliği

Bu ihmal değil. Sistematik bir bozulmadır.


## Mühendislik Perspektifi

AI, mühendisliği ortadan kaldırmaz. Daha kritik hale getirir.

### Mimari

Sınırlar ve kontratlar açık tanımlanmalıdır.

AI bu sınırları kendiliğinden korumaz.

### Sistem Tasarımı

Prompt yeterli değildir.

Gerekli olan:

* Generation pipeline
* Validation layer
* Test automation

### Observability

Şunlar ölçülmelidir:

* Kod değişimi
* Davranış değişimi
* Performans

### Versioning

Artık sadece kod değil:

* Prompt
* Model
* Context

versiyonlanmalıdır.

### İnsan Rolü

Geliştirici rolü değişir:

* Kod yazan değil
* Sistem yöneten
* Doğrulayan


## Sonuç

Lehman’ın kanunları insanlara değil, kompleks sistemlere aittir.

AI bu kanunları bozmaz.

Sadece ihlal edilme hızını artırır.

AI ile üretilmiş yazılım:

* Daha hızlı geliştirilir
* Daha hızlı değişir
* Daha hızlı bozulur

Kontrol edilmezse.

Problem artık kod yazmak değildir.

Problem, kendini üreten sistemleri kontrol etmektir.

***
{% include share_twitter_tr.html %}

***

## Referanslar

1. Lehman, M. M. (1980). "Programs, Life Cycles, and Laws of Software Evolution". Proceedings of the IEEE.
2. Lehman, M. M., & Belady, L. A. (1985). "Program Evolution: Processes of Software Change". Academic Press.
3. Lehman, M. M. (1996). "Laws of Software Evolution Revisited". European Workshop on Software Process Technology.

Not: Bu yazıda kullanılan "Kanun-1" vb. numaralandırma, Lehman’ın orijinal çalışmalarındaki sınıflandırmanın sadeleştirilmiş ve AI bağlamına uyarlanmış halidir.