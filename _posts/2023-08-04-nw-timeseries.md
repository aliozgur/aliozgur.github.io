---
layout: post
title: "NightWatch ile Zaman Serisi Verisi Toplama"
subtitle: ""
date:  2023-08-04 10:00
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - NightWatch
  - MES
  - MOM
  - Manufacturing Execution System
  - Manufacturing Operations Management
---

Merhaba! Bu yazımızda zaman serilerinin (time series) karakteristik özellikleri ve NightWatch'un zaman serisi verisi toplama özelliklerine ele alıyoruz.

![Cover]({{ root.url }}/media/nightwatch-003/000.png)

<!--end-of-excerpt-->

## Zaman Serisi Nedir?

Zaman serisi, matematiksel bir kavramdır ve zaman ekseninde sıralanmış bir dizi veri noktasını ifade etmek için kullanılır. Bu tanıma göre 2 boyutlu bir nokta grafiğinde veya çizgi grafiğindeki eksenlerden bir tanesi (genelde x ekseni) mutlaka zamanı temsil eder, diğer eksen ise (genelde y ekseni) veri noktasını temsil eder. 

Örneğin, x ekseninda Stres Seviyesi ve y ekseninde Vücüt Performansı yer alan aşağıdaki grafik bir zaman serisi grafiği değildir, çünkü zaman ekseni barındırmaz.

![Time Series]({{ root.url }}/media/nightwatch-003/001.png)

> Allostatic yük, bir birey tekrarlanan veya kronik strese maruz kaldığında biriken "vücuttaki aşınma ve yıpranma" dır

Diğer yandan, x ekseninde 4 Ağustos 2022 - 3 Ağustos 2023 arasındaki takvim günleri, y ekseninde de BİST 100 kapanış endeksi olan aşağıdaki grafik bir zaman serisi grafiğidir, çünkü eksenlerden birisinde (x) zaman yer alır. 

![Time Series Example-Stock]({{ root.url }}/media/nightwatch-003/002.png)

### Veri Noktası

Bir veri noktası (data point) veya gözlem ile ilgili yapılan bir veya daha fazla sayıdaki ölçümü (measurement) ifade eder. Örneğin, bir makinenin çektiği akımın belirli zamanlarda Amper cinsinden yapılan her bir ölçümü bir veri noktasıdır.

![Data Point]({{ root.url }}/media/nightwatch-003/003.png)

İlave olarak, yukarıdaki örneğimizde "makinenin çektiği akım" ölçüm yaptığımız gözlem birimini (unit of observation), "Amper" de veri noktamızın tipini (data type) ifade eder. 

### Zaman Serisi Verisi 

Zaman serisi verisi, genelde eşit zaman aralıklarında tekrarlanan ve ayrık ölçümler veya gözlemler ile toplanan veri noktalarının tümünü ifade eder. Yukarıdaki İMKB BİST 100 Endeksi grafiğinde her biri endeks kapanışı olan gün sonunda (eşit zaman aralığı = gün sonu) yapılan gözlemler ile toplanan veri noktalarında oluşan bir zaman serisi verisidir.

### Zaman Serisi Verisinin İlave Özellikleri
Tanım itibariyle zaman serisi verisi iki temel bileşenden oluşur,

* Zaman ve
* Veri Noktası

Bu yaklaşıma göre zaman serisi verisini oluşturan veri noktaları çok kısıtlı miktarda bilgi barındıran bir kavram olarak algılanabilir. Ancak, pratik uygulamalarda ölçülen veya gözlemlenen veri noktasının veri tipi, gözlem biriminin diğer özellikleri ile ilgili ilave bilgiler (tag) de veri noktası ile ilişkilendirilerek zaman serisi analizlerinin zaman ve değer dışındaki ilave boyutlara (dimension) göre yapılması sağlanmaktadır. 

NightWatch ile toplanan veri noktaları diğer sistemlere dağıtım aşamasında, NightWatch konfigürasyonunda tanımlanan ölçü birimi, organizasyon bilgisi vb tanımdan gelen ilave bilgiler ile zenginleştirilerek dolaşıma sokulur. 

## NightWatch ile Zaman Serisi Verisi Toplama 

NightWatch, tasarım olarak ve sahip olduğu yetkinlikler açısından bir zaman serisi verisis toplama ve dağıtım platformudur. Çünkü, NightWatch Data Collector bileşenlerinin (OPC UA, Modbus, PLC, MTConnect, BACNet, SNMP vb) makinelerden veya sensörlerden okuduğu veri

* Oluşma ve toplama zamanı bilgisi içerir
* Gözlem birimi için (akım, enerji tüketimi, basınç, sıcaklık vb) yapılan bir ölçümün değerini içerir

NightWatch Data Collectorleri tarafından toplanan zaman serisi verisi doğrudan aşağıdaki zaman serisi veri yönetimi veya ilişkisel veri tabanı yönetimi (RDBMS) platformlarına kolay tanımlanabilen ve basit konfigürasyonlar ile kolayca dağıtılabilir 

* [InfluxDb](https://www.influxdata.com/) 
* [TimescaleDb](https://www.timescale.com/) (PostgreSQL üzerinde çalışan eklenti)
* Microsoft SQL Server
* MySQL
* MariaDB
* Oracle 

Yukarıdaki platformlara ilave olarak NightWatch'un MQTT, RabbitMQ ve Redis/Valkey desteği kullanılarak bu mesajlaşma sistemleri üzerinden de dolaylı bir şekilde farklı veri depolama ve işleme sistemlerine zaman serisi verisi dağıtımı mümkündür.

## Kapanış

Zaman serisi verisi oldukça geniş bir kullanım alanına sahiptir. Endüstriyel IoT ve üretim sahaları özelinde birkaç örnek vermek gerekirse,
* Makine ve proses parametrelerinin görselleştirilerek izlenmesi
* Gerçek zamanlı alarm ve uyarılar üretilmesi
* Geçmişe dönük trend analizi ve kök neden analizlerinin yapılması 
* Makine öğrenmesi (ML) modellerinin oluşturulması, eğitilmesi ve test edilmesi

gibi alanlarda zaman serisi verisi ile kurumlar için katma değeri yüksek uygulamalar yapılmaktadır.

Yukarıda bahsettiğimiz uygulamaların ve benzerlerinin en önemli adımları olan veri toplama, veri dağıtımı ve veri depolama adımlarını açık ve konfigüre edilebilen bir platform olan NightWatch ile kolayca, hızlı bir şekilde ve ücretsiz olarak yapabilirsiniz. Gerçek zamanlı alarm ve uyarı uygulamalarını ise önceki yazılarımızda bahsettiğimiz ve NightWatch ile hazır olarak gelen araç ve yöntemler ile ilave geliştirmeler yapmadan doğrudan kullanabilirsiniz.


***
{% include share_twitter_tr.html %}

***
