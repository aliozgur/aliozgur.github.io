---
layout: post
title: "AI Goal Gradient Loop: Yapay Zeka Yazılım Geliştirme Davranışımızı Değiştiriyor mu?"
subtitle: "Goal Gradient Effect, yapay zeka destekli yazılım geliştirme davranışını nasıl açıklıyor?"
date: 2026-07-12
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:
  - ai
  - psychology
  - software
  - productivity
  - behavior

---

Yapay zekâ, yazılım geliştirme süreçlerini kökten değiştirdi. Artık dakikalar içinde kod üretebiliyor, test senaryoları hazırlayabiliyor, SQL yazabiliyor, dokümantasyon oluşturabiliyor ve mimari alternatifleri tartışabiliyoruz.

Bu değişimin en görünür sonucu üretkenlik artışı oldu. Ancak, bence gözden kaçan başka bir değişim daha yaşanıyor. Yapay zeka yalnızca üretkenliğimizi artırmıyor, yazılım geliştirirken nasıl davrandığımızı da değiştiriyor.

{::comment}end-of-excerpt{:/comment}

Yapay zekâ kullanan geliştiricilerin çalışma alışkanlıklarında dikkat çekici bir ortak davranış görüyorum: **bir problemi çözdükten sonra gerçekten duramıyoruz.** Neredeyse her zaman aynı düşünce ortaya çıkıyor:

> Bir prompt daha yazarsam biraz daha iyi bir sonuç elde edebilirim.

Bu davranışın arkasında ne olabilir? Bu yazıda ortaya attığım düşünce akademik olarak kanıtlanmış yeni bir teori değildir; ancak psikolojide uzun yıllardır bilinen **Goal Gradient Effect** kavramının, yapay zeka destekli yazılım geliştirme davranışlarını açıklamak için oldukça güçlü bir zihinsel model sunduğunu düşünüyorum.

Bir adım daha ileri giderek, bu davranışı açıklamak için **AI Goal Gradient Loop** adını verdiğim kavramsal bir model öneriyorum. Bu modelin amacı yeni bir psikoloji teorisi ortaya koymak değil, geliştiricilerin günlük çalışma davranışlarını açıklayabilecek pratik bir mühendislik modeli sunmaktır.

---

# Goal Gradient Effect Nedir?

Goal Gradient Effect ilk kez Clark Hull tarafından 1930'lu yıllarda tanımlanan psikolojik bir gözlemdir. Temel fikir oldukça basittir: **insanlar bir hedefe yaklaştıklarını hissettikçe daha fazla çaba göstermeye başlarlar.**

En bilinen örnek sadakat kartlarıdır.

```text
□□□□□□□□□□
0 / 10
```

İlk birkaç damga oldukça yavaş ilerler. Ancak kart şu hale geldiğinde davranış değişmeye başlar:

```text
■■■■■■■■■□
9 / 10
```

Artık son damgaya ulaşmak için ekstra çaba gösteririz, çünkü ödül görünür hale gelmiştir.

Aynı davranışı oyunlarda, spor uygulamalarında, eğitim platformlarında ve satış kampanyalarında da görürüz. Normal şartlarda bu mekanizma tek bir hedef üzerinde çalışır: hedef tamamlanır, ödül alınır ve davranış sona erer.

Benim hipotezim ise yapay zekanın bu mekanizmayı sürekli çalışan bir döngüye dönüştürdüğü yönünde.

---

# AI Öncesi Yazılım Geliştirme

Yapay zekadan önce tipik geliştirme döngüsü kabaca şöyleydi.

```text
+---------+     +---------+     +---------+     +---------+     +---------+
| Analiz  | --> | Kod Yaz | --> |  Derle  | --> |  Test   | --> | Debug   |
+---------+     +---------+     +---------+     +---------+     +---------+
                                                                  |
                                                                  v
                                                            Tekrar Dene
```

Bu döngünün önemli bir özelliği vardı: her iterasyon zaman alıyordu ve yeni bir fikir denemenin belirli bir maliyeti vardı. Dolayısıyla her iterasyondan önce doğal olarak şu soruyu soruyorduk.

> Gerçekten buna değer mi?

Çoğu zaman cevap hayır oluyordu, çünkü yeni bir fikri denemenin maliyeti yüksekti. Bir fonksiyonu yeniden yazmak, yeni bir SQL denemek ya da alternatif bir algoritmayı test etmek... bunların hepsi belirli bir zaman yatırımı gerektiriyordu. Bu nedenle "yeterince iyi" kavramı oldukça güçlüydü.

---

# AI Sonrası Yazılım Geliştirme

Bugün ise aynı süreç çok daha kısa döngüler halinde ilerliyor.

```text
+---------+     +--------+     +-----------+
| Problem | --> | Prompt | --> | AI Sonucu |
+---------+     +--------+     +-----------+
```

Asıl değişim ise bundan sonra başlıyor.

```text
                 +--------------------------------+
                 |                                |
                 |                                v
+-----------+    |    +------------------+    +--------+
| AI Sonucu | -->+--> | Yeni Mikro Hedef | -> | Prompt |
+-----------+         +------------------+    +--------+
                                                  |
                                                  |
                                                  v
                                            +-----------+
                                            | AI Sonucu |
                                            +-----------+
```

Buradaki kritik nokta hız değil, maliyettir. Yeni bir fikir denemenin maliyeti artık yalnızca birkaç saniye: prompt yaz, sonucu bekle, değerlendir, tekrar dene.

Dolayısıyla beynimiz sürekli aynı mesajı almaya başlıyor.

> Bir deneme daha yaparsan daha iyi bir sonuç elde edebilirsin.

Bu yalnızca kod üretirken olmuyor. Aynı davranışı neredeyse bütün bilgi yoğun geliştirme görevlerinde görüyoruz.

- Kod üretimi
- Refactoring
- SQL yazımı
- Unit test oluşturma
- Kod inceleme
- Dokümantasyon
- API tasarımı
- Mimari alternatifler
- Hata analizi

Her başarılı cevap yeni bir ihtimal oluşturuyor, her yeni ihtimal ise yeni bir mikro hedef yaratıyor. İşte Goal Gradient Effect tam burada devreye giriyor; ancak bu kez tek bir hedef için değil, sürekli oluşan yeni hedefler için.

---

# Mikro Hedeflerin Patlaması

Eskiden hedef oldukça büyüktü.

```text
Problemi Çöz
```

Bugün ise aynı problem onlarca küçük hedefe ayrılıyor.

```text
Problemi Çöz
      |
      +--> Fonksiyon okunabilir mi?
      |
      +--> SQL daha hızlı olabilir mi?
      |
      +--> Daha iyi isim bulunabilir mi?
      |
      +--> Başka model ne öneriyor?
      |
      +--> Prompt değişirse ne olur?
      |
      +--> Context artırılırsa?
      |
      +--> Bir örnek daha eklesem?
```

Artık tek bir hedefimiz yok; her cevap yeni hedefler doğuruyor ve her hedef yalnızca birkaç saniye uzağımızda.

# AI Goal Gradient Loop

İşte bu noktada kendi önerdiğim modele geliyoruz: **AI Goal Gradient Loop**, hızlı yapay zeka geri bildiriminin sürekli yeni mikro hedefler üretmesi ve bunun Goal Gradient Effect'i tekrar tekrar tetiklemesi sonucu oluşan davranış döngüsünü tanımlar.

```text
                    AI Goal Gradient Loop

+-----------+
|  Problem  |
+-----------+
      |
      v
+-----------+
|  Prompt   |
+-----------+
      |
      v
+-----------+
| AI Sonucu |
+-----------+
      |
      v
+---------------------------+
| Yeni Mikro Hedef          |
+---------------------------+
      |
      v
+---------------------------+
| Bir Prompt Daha...        |
+---------------------------+
      |
      +----------------------------------+
                                         |
                                         v
                                    +-----------+
                                    |  Prompt   |
                                    +-----------+
```

Bu modelde önemli olan nokta şudur: klasik Goal Gradient Effect tek bir hedef üzerinde çalışır, yapay zekada ise her hedef tamamlandığında sistem yeni bir hedef üretir. Dolayısıyla motivasyon hiçbir zaman tamamen sona ermez.

---

# Sonsuz Progress Bar

Bunu görünmeyen bir progress bar gibi düşünebiliriz.

```text
[%=========> ] 94%
```

Bir prompt daha.

```text
[%=========> ] 95%
```

Biraz daha context.

```text
[%=========> ] 96%
```

Başka model.

```text
[%=========> ] 97%
```

Bir örnek daha.

```text
[%=========> ] 98%
```

Progress bar hiçbir zaman tamamlanmaz, çünkü her cevap yeni bir ihtimal doğurur; her ihtimal yeni bir mikro hedef oluşturur ve her mikro hedef Goal Gradient Effect'i yeniden tetikler.

---

# Davranışımız Neden Değişiyor?

Bence bunun nedeni yalnızca merak değil; iterasyon maliyetinin dramatik şekilde düşmesi. Eskiden bir fikri denemek yarım saat sürebiliyordu, bugün ise on saniye. Dolayısıyla davranışımız doğal olarak değişiyor.

```text
Fikir
  |
  v
Prompt
  |
  v
Sonuç
  |
  v
Yeni Fikir
  |
  v
Prompt
  |
  v
Sonuç
  |
  v
Yeni Fikir
```

Bu davranış tamamen rasyonel, çünkü her iterasyon ucuz. Sorun, toplam iterasyon sayısının çok hızlı artması.

---

# Mental Yük Neden Artıyor?

Bence yapay zekanın oluşturduğu en büyük maliyet kod üretmek değil, karar üretmek. Her cevap yeni kararlar doğuruyor.

```text
Bu yeterince iyi mi?

Prompt'u değiştireyim mi?

Bir örnek daha ekleyeyim mi?

Claude ne der?

GPT ne der?

Başka model deneyeyim mi?

Tool ekleyeyim mi?

MCP kullansam mı?
```

Aslında daha az kod yazıyoruz, ama çok daha fazla mikro karar veriyoruz. Belki de gün sonunda hissettiğimiz zihinsel yorgunluğun nedeni bu.

---

# Jevons Paradoksu ile Benzerlik

Burada ekonomi literatüründeki Jevons Paradoksu ilginç bir benzetme sunuyor: bir süreç daha verimli hale geldiğinde insanlar bazen onu daha az değil, daha fazla kullanmaya başlıyor.

Yapay zekada da benzer bir durum görüyoruz. Prompt üretmek kolaylaştıkça daha fazla prompt üretiyoruz, iterasyon ucuzladıkça daha fazla iterasyon yapıyoruz. Kazandığımız zamanı çoğu zaman dinlenmek için değil, yeni iterasyonlar yapmak için kullanıyoruz.

---

# Bu Bir Hipotez

Tekrar altını çizmek istiyorum: AI Goal Gradient Loop bugün için akademik olarak doğrulanmış bir teori değildir. Goal Gradient Effect ise psikoloji literatüründe uzun yıllardır çalışılan yerleşik bir kavramdır; bu yazıda önerdiğim model, bu psikolojik mekanizmanın yapay zeka destekli yazılım geliştirme davranışlarına uygulanmasına yönelik kavramsal bir çerçevedir.

Bu modelin doğrulanması deneysel çalışmalar gerektirir ve belki gelecekte farklı açıklamalar ortaya çıkacaktır. Ancak bugün elimizdeki gözlemlerle baktığımda, geliştiricilerin davranış değişimini açıklamak için güçlü bir aday olduğunu düşünüyorum.

---

# Sonuç

Yapay zeka bize yalnızca daha hızlı cevap vermiyor, yeni hedefler de üretiyor. Belki de en büyük değişiklik burada: eskiden tek bir problemi çözmeye çalışıyorduk, bugün ise her çözüm yeni problemler ve yeni optimizasyon fırsatları oluşturuyor.

```text
             AI Goal Gradient Loop

      Hızlı AI Geri Bildirimi
               |
               v
      Yeni Mikro Hedef
               |
               v
      Goal Gradient Effect
               |
               v
      Yeni Prompt Yazılır
               |
               v
         Yeni AI Sonucu
               |
               +-------------------------+
```

Belki de geleceğin en önemli mühendislik becerilerinden biri daha iyi prompt yazmak olmayacak; kendi **AI Goal Gradient Loop**'unun farkına varabilmek olacak. Çünkü her zaman daha iyi bir cevap üretmek mümkündür, fakat her zaman daha iyi bir ürün ortaya çıkmayabilir. Bir noktada iterasyonu durdurabilmek de mühendisliğin önemli bir parçasıdır.

---

## Kaynaklar

- Hull, C. L. (1932). *The Goal Gradient Hypothesis and Maze Learning.*
- Kivetz, R., Urminsky, O., & Zheng, Y. (2006). *The Goal-Gradient Hypothesis Resurrected: Purchase Acceleration, Illusionary Goal Progress, and Customer Retention.*
- Jevons, W. S. (1865). *The Coal Question.*
- Hull, C. L. (1943). *Principles of Behavior.*

***
{% include share_twitter_tr.html %}