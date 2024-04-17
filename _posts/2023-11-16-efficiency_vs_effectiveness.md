---
layout: post
title: "Etkinlik vs Verimlilik"
subtitle: ""
date:  2023-11-16 10:00
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - MES
  - MOM
  - Manufacturing Execution System
  - Manufacturing Operations Management
  - Verimlilik
  - Etkinlik
---

Bu kısa yazımızda, MES/MOM ve dijital dönüşüm ekosisteminde OEE kavramı açıklanırken sıklıkla birbirinin yerine kullanılan etkinlik (effectiveness) ve verimlilik (efficiency) kavramları arasındaki farkı ele alıyoruz. 

![Cover]({{ root.url }}/media/efficiency_vs_effectiveness/000.jpg)

<!--end-of-excerpt-->

Dijital dönüşüm motivasyonu ile MES/MOM (Üretim Yürütme Sistemleri/Üretim Operasyon Yönetimi) sistemleri kullanmayı planlayan işletmelerin bu sistemlerden elde etmeyi umdukları en önemli çıktı [OEE](https://www.oee.com/) adı verilen ve üretim ile ilişkili sektörlerde altın standart olarak kabul görmüş bir performans ölçütüdür. 


OEE, Overall Equipment Effectiveness (Toplam Ekipman Etkinliği) kullanılabilirlik (Availability), performans (Performance) ve kalite (Quality) bileşenlerinin çarpımı ile hesaplanır.

## OEE Hesaplama

### Ekipman Kullanılabilirliği (Availability)

* **Toplam Planlanmış Üretim Süresi**, Belirli bir dönem için planlanan üretim süresi (genellikle saat cinsinden) hesaplanır. Örneğin, bir iş gününde 8 saatlik bir çalışma süresi planlandıysa, bu değer toplam planlanmış üretim süresi olur.

* **Makinenin Gerçek Çalışma Süresi**, Makinenin ne kadar süreyle gerçekten üretim yaptığı belirlenir. Arızalar, bakım molası, planlanmamış duruşlar gibi durumlar bu süreyi etkileyebilir. Örneğin, makine 8 saatlik çalışma süresinin sadece 6 saatini üretimde geçirdiyse, gerçek çalışma süresi 6 saat olur.

**Ekipman Kullanılabilirliği**, gerçek çalışma süresini toplam planlanmış üretim süresine bölerek hesaplanır ve yüzde cinsinden ifade edilir.

![Availability Formula]({{ root.url }}/media/efficiency_vs_effectiveness/001.png)

### Performans (Performance)

* **Standart Çalışma Hızı**, Makinenin standart olarak ne kadar hızda çalışması gerektiği belirlenir. Örneğin, bir CNC tezgahının saatte 100 parça işlemesi gerekiyorsa, bu standart çalışma hızı olur.
* **Gerçek Üretim Miktarı**, Makinenin gerçekte ürettiği miktar belirlenir. Örneğin, bir gün boyunca 500 parça işlendi.

**Performans**, gerçek üretim miktarını standart çalışma hızı ile çarparak ve toplam planlanmış üretim süresine bölerek hesaplanır ve yüzde cinsinden ifade edilir. 

![Performance Formula]({{ root.url }}/media/efficiency_vs_effectiveness/002.png)

### Kalite Oranı (Quality)

* **Toplam Üretilen Parça Sayısı**, belirli bir dönemde makinenin ürettiği toplam parça sayısı hesaplanır.
* **Kusurlu Ürün Sayısı**, üretilen parçalar içinde kusurlu veya reddedilen parçaların sayısı belirlenir.

**Kalite Oranı**, kusurlu ürün sayısını toplam üretilen parça sayısına bölerek ve bunu 1'den çıkararak hesaplanır.

![Quality Formula]({{ root.url }}/media/efficiency_vs_effectiveness/003.png)


### OEE 
Son olarak, elde edilen ekipman kullanılabilirliği, performans ve kalite oranı değerleri, her biri yüzde cinsinden ifade edilen bu üç bileşenin çarpılmasıyla OEE değeri elde edilir

![OEE Formula]({{ root.url }}/media/efficiency_vs_effectiveness/004.png)


## Etkinlik mi? Verimlilik mi?

OEE kısaltmasındaki "effectiveness" terimi Türkçeye çoğunlukla "verimlilik" olarak tercüme edilmektedir. Ancak, OEE performans ölçütünün özüne ve hesaplanma yöntemine baktığımızda "effectiveness" teriminin "etkinlik" veya "etkililik" olarak kullanımının daha doğru olduğunu görüyoruz. Çünkü, 

**Verimlilik (Efficiency)** bir işi yaparken ne kadar az kaynak kullanıldığıyla ilgilidir. Verimlilik, belirli bir kaynağı veya kaynakları ne kadar iyi kullanabildiğimizi gösterir. Örneğin, daha az zamanda, emek veya maliyet harcayarak aynı işi yapmak verimlilikle ilgilidir.

**Etkinlik veya Etkililik** ise hedeflenen sonuca ne kadar başarıyla ulaşıldığıyla ilgilidir. Etkinlik, belirlenen hedeflere ulaşma derecesidir. Bir iş veya süreç, istenilen sonucu ne kadar başarıyla gerçekleştiriyorsa, o derecede etkinlik gösterir.

Bir işletme veya süreç hem verimli olabilir (daha az kaynak kullanarak aynı işi yapma) hem de etkili olabilir (hedeflere başarıyla ulaşma). Ancak, biri diğerinden farklı olabilir veya birini artırmak, diğerini artırmakla aynı şey olmayabilir.

Örneğin, bir CNC tezgahının **verimliliği**, belirli bir süre içinde ne kadar ürün işleyebildiğiyle ilgilidir. Tezgahın bir iş günü boyunca sürekli çalışma halinde olması ve bu süre zarfında belirli bir miktar parçayı işlemesi, tezgahın verimli olduğunu gösterir. Verimlilik, girdi ile çıktı arasındaki oranı ifade eder.

Diğer yandan CNC tezgahının **etkinliği** ise, belirli bir hedefe ne kadar başarıyla ulaştığıyla ilgilidir. Örneğin, tezgahın belirli bir zamanda (A - kullanılabilirlik) belirli bir kalitede parçalar üretmesi (P - performans) ve hedeflenen işlemi doğru ve hatasız (Q-kalite) bir şekilde gerçekleştirmesi etkinliği gösterir. Etkinlik, hedeflere ulaşma derecesini ifade eder.

## Sonuç

Ekipmanların verimliliği genelde ekipmanın bir birim iş veya üretim yapmak için tükettiği kaynaklar baz alınarak hesaplanır. Verimlilik temelde girdi/çıktı oranını yansıtan bir metriktir. Örneğin ekipmanın tükettiği enerji (elektrik, gaz, su, fuel oil gibi) verimlilik hesaplamasında kullanılan önemli parametrelerden birisidir. 

Diğer yandan ekipman etkinliği ise ekipmanın hedeflenen sürede hedeflenen kalitede üretim yapabilme kabiliyeti ile ilgilidir. OEE kavramını oluşturan A, P ve Q bileşenleri girdi/çıktı oranının aksine ekipmanın kullanım ve üretim yapabilme kabiliyetini yansıtan metriklerdir.

İşletmelerin OEE değerlerini sağlıklı yorumlayabilmeleri için bu iki kavram arasındaki farkı iyi anlamaları gerekir. Zira hesaplanan OEE değerleri referans alınarak ekipman yenileme/iyileştirme, bakım planlama ve kritik süreç iyileştirme kararları alınmalıdır. Verimlilik artışı için yapılan iyileştirmeler ile etkinlik artışı için yapılan iyileştirmeler hem verimlilik hem de etkinlik açısından fayda üretebilir ancak bu iyileştirmelerin başarılı bir şekilde planlanması ve yürütülebilmesi hedefin verimlilik iyileştirmesi mi yoksa etkinlik artışı mı olduğu net ortaya konulabilmelidir. 

***
{% include share_twitter_tr.html %}

***
