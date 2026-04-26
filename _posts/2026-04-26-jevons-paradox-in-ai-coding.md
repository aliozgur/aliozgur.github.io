---
layout: post
title: "Jevons Paradoksu ve AI Destekli Kodlama"
subtitle: "Verimlilik Artışı Neden Her Zaman Daha Az İş Anlamına Gelmez?"
date: 2026-04-26
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - ai
  - coding
  - productivity
  - economics
  - software

---

Jevons Paradoksu, bir kaynağın kullanım verimliliği arttığında o kaynağın toplam tüketiminin azalmak yerine artabileceğini ifade eder. İlk bakışta bu durum sezgisel olarak yanlış gibi görünür. Çünkü yaygın beklenti, verimlilik artışının daha az kaynak tüketimine yol açmasıdır. Ancak ekonomik sistemler çoğu zaman sezgisel beklentilerle değil, teşvikler ve davranışlar üzerinden çalışır.

![Cover]({{ root.url }}/media/jevons-paradox-in-ai-coding.png)



Paradoksun temelinde oldukça basit ama güçlü bir mekanizma vardır. Bir kaynağın daha verimli kullanılması, o kaynağın efektif maliyetini düşürür. Maliyet düştüğünde ise talep artar. 
<!--end-of-excerpt-->
Talep artışı, çoğu durumda verimlilikten elde edilen tasarrufu absorbe eder ve hatta aşar. Bu durumda toplam tüketim azalmak yerine artar (Bkz: 1).

Bu noktada kritik olan kavram "verimlilik" değil, "toplam sistem davranışı"dır. Çünkü verimlilik, tek başına sonucu belirleyen bir değişken değildir.


## Tarihsel Bağlam: Kömürden Gelen Ders

Bu kavram ilk olarak 19. yüzyılda William Stanley Jevons tarafından sistematik olarak ortaya konmuştur. Jevons, İngiltere'de buhar makinelerinin verimliliği arttıkça kömür tüketiminin azalması gerektiği yönündeki yaygın görüşe karşı çıkar. Gerçek veri ise tam tersini göstermektedir.

Buhar makineleri daha verimli hale geldikçe:

- Kömürle üretim daha ucuz hale gelmiştir
- Daha fazla sektör buhar gücünü kullanmaya başlamıştır
- Yeni endüstriyel kullanım alanları ortaya çıkmıştır

Sonuç olarak toplam kömür tüketimi ciddi şekilde artmıştır (Bkz: 2).

Burada görülen şey sadece teknik bir gelişmenin sonucu değildir. Bu, ekonomik genişlemenin doğrudan bir sonucudur. Verimlilik, üretimi optimize etmemiş; üretimin ölçeğini büyütmüştür.

## Geri Tempme Etkisi

Modern literatürde bu etki daha geniş bir çerçevede "rebound effect" (geri tepme etkisi) olarak ele alınır. Verimlilik artışı sonrası beklenen tasarrufun bir kısmı, artan kullanım nedeniyle geri alınır.

Bu etki üç seviyede incelenir:

- **Doğrudan rebound:** Daha ucuz hale gelen şeyin daha fazla kullanılması
- **Dolaylı rebound:** Tasarruf edilen kaynağın başka tüketimlere kaydırılması
- **Makro ekonomik rebound:** Tüm ekonomide büyüme etkisi

Jevons Paradoksu ise bu spektrumun en uç noktasıdır. Yani rebound etkisinin %100'ü aşarak toplam tüketimin net şekilde arttığı durumdur (Bkz: 3).

Bu ayrım önemlidir. Çünkü her verimlilik artışı Jevons Paradoksu'na yol açmaz. Ancak talep elastik ise, yani fiyat düştüğünde kullanım hızla artıyorsa, paradoks ortaya çıkma eğilimindedir.

## Fiziksel Kaynaklardan Dijital Kaynaklara

Bu kavram uzun süre enerji, su, yakıt gibi fiziksel kaynaklarla sınırlı düşünülmüştür. Ancak günümüzde aynı mekanizmanın dijital üretim alanlarında da geçerli olduğu görülmektedir.

Özellikle yazılım üretimi bu açıdan dikkat çekici bir örnektir. Çünkü yazılım talebi neredeyse sınırsızdır. Yeni bir özellik, yeni bir ürün, yeni bir entegrasyon ihtiyacı her zaman üretilebilir.

Yazılım üretim maliyetinin düşmesi şu sonuçları doğurur:

- Daha fazla ürün geliştirilir
- Daha fazla özellik eklenir
- Daha kısa sürede daha fazla iterasyon yapılır
- Daha önce yapılmayan fikirler hayata geçirilir

Bu durum, toplam üretimin azalması yerine genişlemesine yol açar.

## Bireysel Verimlilik ve Sistem Verimliliği Ayrımı

Burada çoğu zaman gözden kaçan kritik bir ayrım vardır: bireysel verimlilik ile sistem verimliliği aynı şey değildir.

Bir geliştirici daha hızlı kod yazabiliyor olabilir. Ancak bu, organizasyonun daha az iş yaptığı anlamına gelmez. Aksine çoğu durumda şu etkiler ortaya çıkar:

- Daha fazla kod üretildiği için daha fazla review gerekir
- Test yüzeyi genişler
- Entegrasyon karmaşıklığı artar
- Bakım yükü büyür

Yani iş azalmaz, sadece form değiştirir.

Bu noktada sistemin darboğazı da yer değiştirir. Kod yazma süresi kısalırken, doğrulama ve sürdürülebilirlik süreçleri yeni darboğaz haline gelir.

## Üretim Artışı ve Kalite Gerilimi

Toplam üretim arttığında kaliteyi sabit tutmak zorlaşır. Çünkü kalite, üretim hızından bağımsız bir süreç değildir. Daha fazla çıktı, daha fazla kontrol ihtiyacı doğurur.

Bu durum özellikle şu alanlarda kendini gösterir:

- Kod standardizasyonu
- Mimari tutarlılık
- Teknik borç yönetimi
- Test kapsamı

Eğer bu alanlar aynı hızda ölçeklenmezse, sistem zamanla daha kırılgan hale gelir.

Dolayısıyla verimlilik artışı, doğru yönetilmediğinde kaliteyi düşürebilir. Bu da paradoksun başka bir boyutudur.

## AI Productivity Paradox

Son yıllarda yapılan çalışmalar, yazılım geliştirme süreçlerinde üretkenliğin arttığını açık şekilde göstermektedir. Ancak bu artışın organizasyonel verimliliğe aynı oranda yansımadığı da gözlemlenmektedir.

Bazı çalışmalar geliştiricilerin görevleri %30-50 daha hızlı tamamladığını gösterirken (Bkz: 4), diğer çalışmalar bu artışın toplam iş yükünü azaltmadığını, aksine farklı alanlara kaydırdığını ortaya koymaktadır (Bkz: 5).

Bu durum "AI productivity paradox" olarak adlandırılmaktadır.

Geliştirici seviyesinde:
- Daha hızlı üretim
- Daha fazla çıktı

Sistem seviyesinde:
- Daha fazla kontrol ihtiyacı
- Daha fazla bakım yükü
- Daha fazla koordinasyon maliyeti

Bu tablo, Jevons Paradoksu ile oldukça tutarlıdır.

## Talep Elastikliği: Asıl Belirleyici Faktör

Jevons Paradoksu'nun ortaya çıkıp çıkmayacağını belirleyen en önemli faktör talep elastikliğidir.

Eğer bir alanda talep sınırlıysa, verimlilik artışı gerçekten tüketimi azaltabilir. Ancak yazılım gibi alanlarda talep neredeyse sınırsızdır.

Her zaman:
- Daha fazla rapor
- Daha fazla analiz
- Daha fazla otomasyon
- Daha fazla entegrasyon

isteği vardır.

Bu nedenle yazılım üretiminde verimlilik artışı, neredeyse kaçınılmaz olarak üretim artışına dönüşür.

## Stratejik Perspektif: Asıl Soru Yanlış Olabilir

Genelde sorulan soru şudur, **"Ne kadar verimlilik kazandık?"**. Ancak Jevons perspektifinden bakıldığında doğru soru farklıdır **"Bu verimlilik artışı sistemde neyi tetikledi?"**. Çünkü verimlilik artışı çoğu zaman maliyet düşüşü üzerinden yeni talep yaratır.

Bu da şu anlama gelir:

- Daha fazla şey yapabilir hale gelirsiniz
- Ve genellikle daha fazla şey yapmaya başlarsınız

## Yazılımcılık Gerçekten Bitecek Mi?

AI destekli kodlama bağlamında Jevons Paradoksu’na yapılan atıf bu yüzden anlamlıdır. Kod üretmenin maliyeti düştükçe yazılım ihtiyacı ortadan kalkmıyor, aksine daha fazla ürün, daha fazla özellik, daha fazla otomasyon ve daha fazla entegrasyon talebi doğuyor. Bu nedenle "AI geliştirici ihtiyacını azaltacak" yorumu tek başına eksik kalıyor; güncel tablo daha karmaşık. 

Bir yandan bazı büyük teknoloji şirketleri AI yatırımları ve verimlilik programlarıyla eş zamanlı olarak işten çıkarmalar yaparken, diğer yandan yazılım geliştirici istihdamı için uzun vadeli büyüme beklentileri devam ediyor ve bazı şirketler yeni mezun/stajyer alımlarını özellikle artırıyor. Bu nedenle son işten çıkarmaları yalnızca "AI geliştiricileri ikame ediyor" diye okumak da, yalnızca "verimsiz yönetimin oluşturduğu verimsiz kadroların temizlenmesi" diye açıklamak da fazla iddialı olur. 

Daha doğru okuma, kötü ölçeklenmiş organizasyonların, düşük kaldıraçlı rollerin ve eski çalışma biçimlerinin tasfiye edildiği, buna karşılık AI ile daha yüksek üretkenlik gösterebilecek yeni nesil geliştirici profiline olan talebin tamamen ortadan kalkmadığıdır. 

Jevons perspektifinden bakıldığında asıl eğilim şudur: AI kod yazmayı ucuzlattıkça yazılım üretiminin toplam hacmi büyüme potansiyeli taşır. Bu da işe alımı bitirmekten çok, hangi geliştiricilerin, hangi becerilerle ve hangi organizasyonel model içinde değer üreteceği sorusunu öne çıkarır. (Bkz-6)

## Sonuç

Jevons Paradoksu, verimlilik artışının her zaman kaynak tasarrufu ile sonuçlanmadığını gösteren güçlü bir çerçevedir. Aksine, birçok durumda verimlilik artışı sistemin ölçeğini büyütür.

Bu nedenle verimlilik artışı tek başına bir hedef olarak ele alınmamalıdır. Asıl odak, bu artışın sistem üzerindeki ikinci ve üçüncü dereceden etkilerini anlamak olmalıdır.

Yazılım dünyasında bu durum oldukça nettir. Daha hızlı üretim, daha az iş anlamına gelmez. Çoğu zaman daha fazla iş, daha fazla karmaşıklık ve daha fazla yönetim ihtiyacı anlamına gelir.

Bu da bizi şu noktaya getirir. Verimlilik artışı, tüketimi azaltmaz. Çoğu zaman genişletir. Jevons Paradoksu'nun özeti tam olarak budur.


***
{% include share_twitter_tr.html %}

***

## Referanslar

1. [Jevons Paradox (Wikipedia)](https://en.wikipedia.org/wiki/Jevons_paradox)
2. Jevons, W. S. (1865). [*The Coal Question*](https://www.econlib.org/library/YPDBooks/Jevons/jvnCQ.html)
3. [Rebound Effect (ScienceDirect)](https://www.sciencedirect.com/topics/earth-and-planetary-sciences/rebound-effect)
4. [The Impact of AI on Developer Productivity: Evidence from GitHub Copilot (arXiv)](https://arxiv.org/abs/2302.06590)
5. [Generative AI at Work (MIT Economics)](https://economics.mit.edu/sites/default/files/inline-files/draft_copilot_experiments.pdf)
6. [Jevons Paradox AI: Why Companies Are Hiring More Developers, Not Fewer](https://www.binarcode.com/blog/the-jevons-paradox-in-ai)