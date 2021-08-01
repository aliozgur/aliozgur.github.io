---
layout: post
title: "Kestirimci Bakım Uygulamaları ve Anomali Tespiti"
subtitle: ""
date:  2021-07-01 18:45
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - MES
  - Predictive Maintenance
  - IoT
  - IIoT
  - Endüstriyel Uygulama
  - Industial IoT
  - Internet of Things
---

İmalat sanayiinde yer alan işletmelerin üretim etkinliklerinin en önemli göstergesi olan [OEE](https://www.oee.com/) değerinin hesaplanmasında dikkate alınan 16 büyük kayıptan en önemli kategori Ekipman Etkinliği başlığı altında ele alınan 8 büyük kayıptır. Bu 8 kayıp içerisinde yer alan arıza kayıpları doğrudan, hatalı ürün kayıpları ise dolaylı olarak kestirimci bakım uygulamaları ile azaltılarak OEE değerlerinde iyileşmeler sağlanabilir. Ekipman bakımlarının arıza oluşmadan tespit edilmesi maliyetlerin kontrol alınması açısından da önem arz etmektedir.

![Kestirimci Bakım Uygulamaları]({{ root.url }}/media/predictive_m.jpg)

<!--end-of-excerpt-->

Kestirimci bakım, üretimde kullanılan ekipmanlarda meydana gelebilecek arızaların önceden tahmin edilerek ekipman bakımlarının herhangi bir kayba neden olmadan planlanmasını hedefleyen proaktif bir yaklaşımdır. Kestirimci bakım uygulamaları ekipman belirtimlerinin tanımlanması, eşik değerlerin tanımlanması veya dinamik tespit edilmesi, sahadan veri toplama, verinin temizlenmesi, verinin zenginleştirilmesi, tahminleme ve bakım aksiyonlarının tetiklenmesi olarak özetleyebileceğimiz aşamaların tamamını veya bir kısmını kapsar. Kestirimci bakım, yazılım sistemleri, manuel süreçler veya her iki yöntem aynı anda kullanılarak uygulanabilir.


Geleneksel kestirimci bakım yaklaşımları, ekipman üreticileri tarafından tanımlanan ve normal çalışma koşullarında geçerli olan limit değerlerin üretim planları ve üretimde kullanılan ekipman eşleştirme yöntemi ile takip edilmesini esas alır. Geleneksel yaklaşımın uygulamadaki zorluklarından biri ekipmanın üretim planlaması veya fiziksel koşullar nedeni ile normal şartlardan daha zorlu koşullarda kullanılmasından kaynaklanmaktadır. Buna bağlı olarak ekipman üreticisinin belirlediği sınır değerler dinamik olarak değişmekte ve bakım ihtiyacı her bir döngüde farklı zamanlarda ortaya çıkmaktadır. Bu yöntemin sağlıklı sonuçlar üretebilmesi için planlanan ve gerçekleşen ekipman kullanımının düzenli bir şekilde takip edilmesi gerekir. Klasik yöntemin doğru sonuç üretmesini engelleyen en önemli faktör ise, ekipmana bağlı olarak, çevresel çalışma koşullarının takip edilmesi ve kayıt altına alınmasındaki zorluklardır. Klasik yöntemi binek otomobil üreticilerinin kilometre veya yıl bazlı önerdikleri bakım rutinlerine benzer bir yöntem olarak düşünebiliriz.


Geleneksel yöntemden bir sonraki aşamaya geçerek daha sağlıklı kestirimci bakım tahminleri yapmak isteyen kurumlar ekipman üzerinde kayıt altına alınan değerleri doğrudan okuyabilen veya harici sensörler ile donatılmış ekipmanlardan ve ekipmanın çalıştığı çevresel koşullara ilişkin veri toplayabilen uygulamalar kullanmayı tercih etmektedir. Sinyalizasyon ile sağlanan ve uzun süreler boyunca kayıt altına alınan ekipman değerleri gün sonunda büyük veri olarak adlandırılan yılları ve milyonlarca veri noktasını barındıran veri yığınının oluşmasını sağlar. Ekipman değerlerine ilişkin bu büyük verinin arıza duruşları ve planlı bakım gibi diğer girdiler ile korelasyonu sağlanarak bir sonraki bakımın ne zaman yapılması gerektiğini ön görmeyi hedefleyen yöntemler ile kestirimci bakım uygulamaları yapılabilmektedir. Bu yöntemin en önemli dezavantajları arasında büyük verinin toplama ve kayıt altına alma maliyetinin yüksek olması, ekipman değerlerinin sahadan toplanan diğer veriler ile korelasyonunun emek yoğun bir süreç olması, kullanılan tahminleme algoritmalarının çalışma koşullarındaki normallerin anlık olarak değişmesine duyarlı olmaması ve en önemlisi de bu yöntem ile tahmin üretmenin kullanılan algoritmaların hassasiyeti arttıkça çok uzun süreler almasıdır.


Ekipman arızalarının çoğunda arıza meydana gelmeden önce ekipmanın kendisinde (titreşim, enerji tüketimi, ses, sıcaklık, akış gibi) veya ekipmanın çalıştığı ortamda anormal sinyaller üretilmeye başlanır. Bu sinyallerin sürekli olarak izlenmesi ve anormal değerlerin tespit edilmesi (anomali tespiti) yeni nesil kestirimci bakım uygulamalarının temelini oluşturur. Bu yöntemde sinyallerin uzun süreler boyunca kayıt altına alınmasına gerek kalmadan, kısıtlı veri kümeleri analiz edilerek ve çalışma koşullarındaki geçici normaller dikkate alınarak yüksek isabet değerlerinde bakım tahminlemesi yapılabilmektedir.


Yukarıda bahsettiğimiz yöntemleri kullanarak kestirimci bakım yapmayı hedefleyen firmaların sağlıklı karar verebilmesi için öncelikle [OEE](https://www.oee.com/) değerlerini doğru bir şekilde hesaplayabilmeleri, ekipman kayıplarının detaylarını iyi analiz etmeleri ve ekipmana bağlı, kalite kayıpları gibi, dolaylı diğer kayıpları da hızlı bir şekilde incelemeleri gerekir. [trexDCAS MES](https://trex.com.tr/) platformunda imalatçıların kestirimci bakım ile ilgili yatırımlarını planlarken sağlıklı karar vermelerini sağlayacak hazır analizler sunulmaktadır. trexDCAS MES platformu ile müşterilerimize, kestirimci bakım uygulamaları için tanımlama, farklı kaynaklardan veri toplama, ekipman verisinin diğer üretim verileri ile ilişkilendirme, büyük veri veya anlık kısıtlı veri kümeleri üzerinde analiz yapma, zengin anomali tespiti ve trend analizi algoritmaları kütüphanesi, zengin aksiyon seçenekleri (bakım iş emri oluşturma, sms, e-post, mobil bildirim gönderimi gibi) sunmaktayız.


> Bu makale [SUBCONTURKEY YAN SANAYİ ve TEDARİKÇİ GAZETESİ, Temmuz 2021 sayısında yayınlanmıştur](https://www.subconturkey.com.tr/kestirimci-bakim-uygulamalari-ve-anomali-tespiti/)

***
{% include share_twitter_tr.html %}

***
