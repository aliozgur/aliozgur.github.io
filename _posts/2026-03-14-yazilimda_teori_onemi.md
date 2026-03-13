---
layout: post
title: "Yazılım Geliştirmede Teorinin Önemi"
subtitle: "Gözlem Tek Başına Yeterli Mi?"
date:  2026-03-13
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - development
  - programming
  - coding
  - engineering
  - ai
  - vibe coding

---
Yazılım geliştirme dünyasında sık karşılaşılan bir yaklaşım vardır. Birçok kişi bir teknolojiyi veya yöntemi öğrenmenin en iyi yolunun gözlem yapmak olduğunu düşünür. Çalışan kodları incelemek, başkalarının çözümlerini görmek, örnek projeleri takip etmek ve bunları taklit etmek.

Bu yaklaşımın belirli bir değeri vardır. Gözlem öğrenmenin önemli bir parçasıdır. Ancak tek başına yeterli değildir. Sadece gözleme dayalı bir öğrenme modeli yazılım mühendisliği gibi karmaşık bir disiplinde ciddi sınırlamalara sahiptir.

Teori bu noktada devreye girer. Teori, gözlemlenen davranışların arkasındaki yapıyı anlamayı sağlar.

![Cover]({{ root.url }}/media/theory_in_swe.png)

<!--end-of-excerpt-->

## Gözlem Ne Sağlar?

Gözlem temelli öğrenme çoğunlukla şu şekilde ilerler.

Bir geliştirici çalışan bir sistemi inceler. Belirli bir problemi çözen kodu görür. Bu kodu kendi problemine adapte eder. Eğer sonuç çalışıyorsa yöntem başarılı kabul edilir.

Bu yöntem kısa vadede oldukça etkili görünebilir. Çünkü hızlıdır. Özellikle internet üzerinde çok sayıda örnek kod bulunması bu yaklaşımı daha da yaygın hale getirmiştir.

Ancak burada önemli bir eksik vardır. Gözlem yalnızca sonucun nasıl göründüğünü gösterir. Sonucun neden o şekilde oluştuğunu açıklamaz.

## Gözlemin Sınırı

Sadece gözleme dayalı öğrenmenin en önemli problemi genelleme yapamamasıdır.

Bir geliştirici belirli bir örneği gözlemleyerek bir çözümü öğrenebilir. Ancak problem biraz değiştiğinde aynı yöntemi uygulamak çoğu zaman mümkün olmaz.

Örneğin bir geliştirici concurrency problemlerini ele alalım.

Bir projede `lock` kullanıldığını görür ve bunun concurrency problemlerini çözen doğru yöntem olduğunu düşünebilir. Ancak farklı senaryolarda şu sorular ortaya çıkar.

- Lock contention nasıl oluşur
- Deadlock hangi koşullarda meydana gelir
- Lock free algoritmalar ne zaman tercih edilmelidir
- Memory visibility problemi nasıl çözülür

Bu soruların cevapları gözlemle değil teoriyle açıklanabilir.

Teori olmadan geliştirici yalnızca gördüğü çözümü tekrar eder. Problemin yapısını anlayamaz.

## Yanlış Genelleme Problemi

Gözlem tabanlı öğrenmenin bir diğer sorunu yanlış genellemelerdir.

Bir geliştirici belirli bir çözümü farklı problemlerde de işe yarayan genel bir yöntem olarak kabul edebilir. Oysa bu çözüm yalnızca belirli koşullar altında doğru olabilir.

Örneğin performans optimizasyonu konusunda sık görülen bir durum vardır.

Bir sistemde caching kullanıldığında performansın arttığı gözlemlenir. Bu gözlemden sonra caching her problem için uygun bir çözüm gibi algılanabilir.

Ancak teori şu soruları sorar.

- Cache invalidation nasıl yönetilecek
- Veri tutarlılığı nasıl korunacak
- Memory kullanımının sınırı nedir
- Cache miss oranı ne olacak

Bu sorulara cevap verilmeden yapılan caching uygulamaları çoğu zaman sistemi daha karmaşık hale getirir.

## Teori Ne Sağlar

Teori gözlemden farklı olarak bir model sunar.

Bu model sistemin nasıl çalıştığını açıklayan bir çerçevedir. Bu sayede geliştirici yalnızca belirli bir çözümü değil, çözümün hangi koşullar altında geçerli olduğunu da anlayabilir.

Örneğin algoritma teorisi bir geliştiriciye şu tür soruları sormayı öğretir.

- Bu algoritmanın zaman karmaşıklığı nedir
- Bellek kullanımı nasıl değişir
- Veri büyüklüğü arttığında sistem nasıl davranır

Bu tür sorular gözlemle cevaplanamaz. Çünkü gözlem yalnızca mevcut koşulları gösterir.

Teori ise sistemin farklı koşullar altında nasıl davranacağını öngörmeyi sağlar.

## Teori ve Öngörü Yeteneği

Yazılım mühendisliğinde en değerli becerilerden biri öngörü yapabilmektir.

Bir sistem tasarlanırken şu soruların cevaplanması gerekir.

- Trafik arttığında sistem nasıl davranacak
- Veri büyüklüğü arttığında performans nasıl değişecek
- Eş zamanlı kullanıcı sayısı yükseldiğinde hangi problemler ortaya çıkacak

Bu sorulara cevap verebilmek için teorik modellere ihtiyaç vardır.

Örneğin queueing theory, distributed systems teorisi veya algoritmik analiz bu tür problemlerin anlaşılmasını sağlar.

Sadece gözlem yapan bir geliştirici bu sorulara ancak problem ortaya çıktıktan sonra cevap arar.

Teori bilen bir geliştirici ise problemi oluşmadan önce tahmin edebilir.

## Yazılım Geliştirme: Zanaat ve Mühendisliğin Birleşimi

Yazılım geliştirme bazen yalnızca pratik bir zanaat gibi görülür. Bir araç kullanmayı öğrenmek, bir framework üzerinde çalışmak veya belirli bir programlama diline hakim olmak yeterli kabul edilebilir.

Gerçekten de yazılım geliştirme belirli bir "craftsmanship" boyutuna sahiptir. Deneyim, ustalık, kod kalitesi, sade tasarım ve iyi pratikler bu zanaat tarafının önemli parçalarıdır.

Ancak yazılım geliştirme aynı zamanda bir mühendislik disiplinidir.

Mühendislik disiplinlerinin temelinde her zaman teori bulunur. Elektrik mühendisliği Maxwell denklemlerine dayanır. Makine mühendisliği mekanik ve termodinamik teorilerine dayanır.

Yazılım mühendisliği de veri yapıları, algoritmalar, hesaplama teorisi, dağıtık sistemler ve işletim sistemi prensipleri gibi temel alanlara dayanır.

Craftsmanship yaklaşımı kaliteli üretimi sağlar. Teori ise neden o şekilde üretim yaptığımızı açıklar.

Bu iki yaklaşım birbirinin alternatifi değil, tamamlayıcısıdır.

## Teori ve Pratiğin Dengesi

Elbette teori tek başına da yeterli değildir. Yazılım geliştirme uygulamalı bir alandır ve pratik deneyim büyük önem taşır.

Ancak sağlıklı bir öğrenme modeli şu iki bileşeni birlikte içerir.

- teori
- uygulama

Teori sistemi anlamayı sağlar. Uygulama ise bu bilginin gerçek dünyadaki sınırlarını gösterir.

Sadece teoriye dayalı bir yaklaşım soyut kalabilir. Sadece gözleme dayalı bir yaklaşım ise yüzeysel kalır.

Gerçek ustalık bu iki yaklaşımın birleştiği noktada ortaya çıkar.

## Yapay Zeka Araçları ile Çalışırken Teori Neden Daha Kritik

Yapay zeka tabanlı geliştirme araçlarının yaygınlaşması teorik bilginin önemini azaltmamıştır. Aksine bazı açılardan daha kritik hale getirmiştir.

### Doğru Soruyu Sormadan Doğru Cevabı Almak Zordur

Yapay zeka sistemleri verilen probleme göre çözüm üretir. Ancak problem doğru tanımlanmazsa üretilen çözümün doğruya yakın olması da zorlaşır.

Bir geliştiricinin veri yapıları, algoritmalar, sistem tasarımı veya concurrency gibi konularda yeterli teorik bilgisi yoksa doğru soruyu formüle etmesi de zorlaşır.

Teori burada problemi doğru şekilde tanımlayabilme yeteneği sağlar.

### Üretilen Çıktının Geçerliliğini Değerlendirmek Zorlaşır

AI sistemleri ikna edici fakat yanlış çözümler üretebilir.

Bu durum özellikle şu alanlarda ortaya çıkar:

- concurrency hataları
- transaction sınırları
- güvenlik açıkları
- performans problemleri

Eğer geliştirici bu konuların teorisini bilmiyorsa üretilen kodun doğru olup olmadığını değerlendirmek zorlaşır.

### Üretilen Çıktıyı Yaşayan Bir Sistem Olarak Yönetmek Zorlaşır

AI tarafından üretilen kod bir başlangıç noktasıdır. Ancak gerçek sistemler uzun yıllar yaşar.

Kodun bakımının yapılması gerekir. Refactoring yapılması gerekir. Performans sorunlarının çözülmesi gerekir.

Eğer geliştirici üretilen kodun arkasındaki prensipleri anlamıyorsa sistem zamanla yönetilemez hale gelir.

Teori bu noktada geliştiricinin üretilen sistemi gerçekten sahiplenmesini sağlar.

## AI Araçlarında Teorinin Kısmen Aktarılması

YZ kodlama araçlarında teorinin belirli bir kısmı "skill" ve "rule" mekanizmaları aracılığıyla araçların içine de aktarılabilir. Örneğin belirli tasarım prensipleri, güvenlik kontrolleri veya performans kuralları bu tür mekanizmalarla araçların davranışına dahil edilebilir.

Bu yaklaşım belirli ölçüde faydalıdır. Araçların daha güvenli ve daha doğru çıktılar üretmesine yardımcı olabilir.

Ancak benim görüşüm şu yöndedir.

YZ aracını kullanan yazılım mühendisinin her koşulda üretilen çıktının arkasındaki teoriyi de görebilmesi veya bilmesi hala zorunludur.

Çünkü bir yazılım sistemi yalnızca doğru görünen kod parçalarından oluşmaz. Sistem davranışı, performans karakteristikleri, concurrency modelleri, veri tutarlılığı ve güvenlik gibi birçok unsur teorik prensiplere dayanır.

Bu prensipler anlaşılmadan üretilen kodun uzun vadeli sorumluluğunu almak mümkün değildir.

## Sonuç

Yazılım geliştirmede gözlem önemli bir öğrenme aracıdır. Ancak tek başına yeterli değildir.

Gözlem bize ne olduğunu gösterir. Teori ise neden olduğunu açıklar.

Bir geliştiricinin gerçek anlamda ustalaşabilmesi için yalnızca çalışan kodları görmek değil, o kodların arkasındaki prensipleri anlaması gerekir.

Yazılım mühendisliğini güçlü kılan şey sadece kullanılan araçlar değil, bu araçların arkasındaki teoridir.

***
{% include share_twitter_tr.html %}

***
