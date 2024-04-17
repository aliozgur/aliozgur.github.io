---
layout: post
title: "Merhaba NightWatch!"
subtitle: ""
date:  2023-06-19 10:00
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

NightWatch açık veri toplama platformumuzu çok yakında tüm paydaşlarımızın ücretsiz kullanıma sunacağız. Bu yazı ve devamında paylaşacağımız yazılar ile NightWatch'un tasarımı, geliştirilmesi ve saha testi aşamalarında aktif olarak birlikte çalıştığımız paydaşlarımıza ek olarak endüstriyel alanda ve üretim sahalarında teknolojik çözümler üreten ekiplerin de NightWatch ile ne tür çözümler üretebileceklerini anlatmayı hedefliyoruz.


![Cover]({{ root.url }}/media/nightwatch-001/000.png)

<!--end-of-excerpt-->

## NightWatch Nedir?

NightWatch, üretim sahalarında yer alan makinelerin, analizörlerin ve sensörlerin ürettiği verinin anlık olarak toplanmasını ve toplanan verinin üst modüller ve sistemlere standard bir formatta gönderimini sağlamak için geliştirdiğimiz **açık bir platformdur**. NightWatch kullanım senaryolarında genellikle üretim sahalarından bahsediyoruz, ancak NightWatch ile sunucu odalarınızdaki iklimlendirme verisi, su kuyularından su seviyesi veya su kirliliği gibi veriler de toplanıp daha büyük bir çerçevede farklı sistemler arasında dolaşıma dahil edilebilir. Gelecekte yayınlayacağımız yazılarımızda NightWatch'un açık bir platform olarak kullanılabileceği senaryolardan da bahsedeceğiz.

Özetlemek gerekirse, Nightwatch;

* Açık bir platformdur. Veri toplama ve toplanan veriyi dağıtma problemi olan tüm paydaşlarımız tarafından **ücretsiz** olarak kullanılabilir
* Yaygın olarak kullanılan OPC UA, OPC DA, MTConnect ve MODBUS TCP protokollerini destekler
* Siemens, Mitsubushi, Omron, Rockwell ve Allan-Bradley, Fanuc gibi PLC'lerden doğrudan veri okumayı destekler
* Endüstriyel olmayan BACNet (Tesis İzleme Sistemleri Protokolü) ve SNMP (Ağ donanımları izleme için yaygın kullanımlı bir protokol) protokollerini destekler
* Mert Yazılım'ın kendi donanımı olan IoT Box'ı destekler
* Terazi ve kalite ölçüm cihazları gibi seri port haberleşmesi ile çalışan donanımları destekler
* MQTT ve AMQP gibi mesajlaşma protokollerini kullanan yazılım ve donanımları destekler
* Yeni donanım ve protokol desteğinin kolayca eklenebileceği açık ve esnek bir platform sunar
* Linux ve Windows işletim sistemleri üzerinde çalıştırılabilir
* Sahada makine ve sensörlere en yakın noktada (Edge) endüstriyel bilgisayarların veya gatewaylerin üzerinde çalıştırılabilir
* Bulut kullanımını destekler. Amazon AWS, Microsoft Azure, Google Cloud, Huawei Cloud ve DigitalOcean gibi bulut sağlayacıları üzerinde sanal bilgisayar (VM) ihtiyacı olmadan container servisleri içinde (örneğin, Amazon ECS) çalıştırılabilir

![Cover]({{ root.url }}/media/nightwatch-001/001.png)

## NightWatch ile Veri Toplama

MES ve MOM başta olmak üzere Endüstriyel IoT çözümleri geliştirilirken ilk karşılaşılan problem, makine ve sensör çeşitliliği ve bu çeşitlilik nedeniyle verinin sağlıklı bir şekilde akışının nasıl sağlanacağıdır. Mert Yazılım olarak 20 yılı aşan süredir trexDCAS MES ürünümüzü, IoT Box donanımımızı ve müşterilerimize özel MES'i tamamlayıcı farklı çözümleri geliştiriyoruz. Bu süreçte hiç bir veri üretemeyen çok eski makinelerden tutun da binlerce sensörden topladığı verileri kendi üstünde işleyen makinelere kadar geniş bir yelpazede yer alan makineler ile MES çözümlerimizi başarılı bir şekilde entegre ediyoruz. Bu çalışmalarımız sayesinde veriye dayalı süreç kontrolü, izlenebilirlik, kalite ve OEE gibi konularda müşterilerimize değer katıyoruz. 

Yıllar içinde veri toplama ile ilgili karşılaştığımız temel problemler ve bu problemlerin daha büyük ölçekte neden olduğu sorunları aşağıdaki gibi özetleyebiliriz,

* Veri üretemeyen eski makineler nedeni ile üretim sahalarındaki dijitalleşmenin sekteye uğraması
* Veri üreten makine ve sensörlerin marka, model, protokol ve veri formatı çeşitliliği nedeni ile artan sistem karmaşıklığı ve veri toplama maliyetleri
* Veri birleştirme, ayıklama ve veri zenginleştirme işlemlerinin merkezi olarak yapılamaması nedeni ile kurumsal veri kalitesinin düşük kalması
* Birçok farklı sistemin (MES, ERP, Kalite Uygulamaları v.b.) çalıştığı kurumlarda her bir sistemin makine verisine farklı frekans ve yöntemler ile erişim ihtiyacı nedeni ile sistem bazında tekrar eden çalışmaların neden olduğu yüksek maliyetler ve uzun süren kurulum ve proje çalışmaları 

NightWatch, yukarıda bahsettiğim veri toplama ve dağıtım sorunlarının çözümünü ve bu sorunların neden olduğu daha büyük çerçevedeki aksaklıkları ortadan kaldırmak için geliştirildi. Veri toplama ve dağıtım katmanında NightWatch bize şu avantajları sunar,


* Makinelerden ve sensörlerden okunacak verinin tarifi için makine bağımsız tekil bir konfigürasyon şeması
* Makine grupları, makineler, üretim birimi grupları ve üretim birimlerinden oluşan 4 seviyeli bir veri organizasyon yapısı sunar. 
* Makine ve sensörlerden okunan ham verinin konfigürasyon aşamasında tanımlanabilen gelişmiş scriptler ile birleştirilmesi, ayıklanması ve zenginleştirilebilmesi. * NightWatch içinden basit matematiksel işlemlerin yanı sıra ileri nümerik işlemler, sinyal işleme, coğrafik konum hesaplamaları, koşullu ifadeler ve merin işleme gibi bir çok fonksiyon kullanılabilmektedir
* Okunan ham veri veya gelişmiş scriptler kullanılarak ham veriden üretilen hesaplanmış veri için birden fazla ölçü birimi veya çarpan tanımı yapılabilir. Tanımlanan ölçü birimleri cinsinden değerler otomatik olarak dış bir sisteme ihtiyaç duyulmadan NightWatch içinde ve tek bir merkezden hesaplanarak dolaşıma sokulur. Örneğin, bir makineden santigrat derece cinsinden okunan sıcaklık değeri kolaylıkla Fahrenheit cinsinden de hesaplanarak ham veri ile birlikte dolaşıma sokulabilir.
* Ham verinin scriptler ile işlenebilmesine ilave olarak özellikle Modbus TCP ile veri toplanan enerji ve su analizörleri için herhangi bir formülasyona gerek kalmadan ölçüm değerlerinin tam kısmı ve küsürat kısmı otomatik olarak birleştirilebilir
* Destekleyen protokol ve makineler için subscription ve sorgulama yöntemlerinin her ikisi için veri okuma desteği sunar. Subscription desteklemeyen makine ve protokoller için ise sorgulama yöntemi desteklenir.

> Subscription: Abonelik anlamına gelir. Makine protokolleri açısından OPC UA gibi bazı protokoller veri okumak isteyen istemcinin ilgilendiği veri tanımlarına abone olmalarına izin vererek sadece veri değişikliği gerçekleştirdiğinde değişen veriyi istemciye gönderir. İzlenebilirlik gibi, sürekli ölçüm gerektiren veri toplama senaryolarında abonelik yerine periyodik sorgulama yöntemi tercih edilir. Sayaç takibi gibi senaryolarda ise abonelik yöntemi tercih edilebilir.

## NightWatch ile Veri Dağıtımı

NightWatch sadece bir veri toplama platformu değildir. NightWatch aynı zamanda farklı makine ve sensörlerden toplanan ham veri veya zenginleştirilmiş veriyi üst modül veya sistemlere gönderebilme yetenekleri olan esnek ve açık bir platformdur.

Tasarım ve geliştirme çalışmalarının ilk gününden itibaren NightWatch'un,

* Paydaşlarımız ve sektörün kullanımı açısından **açık bir platform** olmasını
* Sistem geliştirme disiplini açısından ise esnek, konfigüre edilebilir, veri toplama ve dağıtımı problemini kolayca ortadan kaldıran görünmez bir **kara kutu** olmasını

hedefleyerek mimarimizin bu iki temel prensibe sadık kalmasına çok önem verdik.

Veri dağıtımı veya benim sıkça kullandığım hali ile ham ve/veya zenginleştirilmiş verinin dolaşıma sokulması ile ilgili NightWatch şu yeteneklere sahiptir

* Veri gönderimi yapılacak hedef sistemlerin genelleştirilmiş ve ortak konfigürasyonlar kullanılarak tanımlanabilmesi
* Toplanan ve hesaplanan verinin, makine ve protokol bağımsız olarak kullanım amacına göre belirlediğimiz 4 farklı standart formatta hedef sistemlere gönderimini sağlanabilmesi
* Eş zamanlı olarak aynı türden veya farklı türden birden çok hedef sisteme veri gönderiminin sağlanabilmesi

NightWatch'un veri dağıtımı yeteneklerinin merkezinde Sink olarak adlandırdığımız kavram yer alır. Sinkler, NightWatch'un veri göndereceği hedef sistem tiplerini ve bu hedef sistemlerin ayarlarını (adres, kullanıcı adı, şifre vb) barındırır. NightWatch toplanan veya üretilen verinin dağıtımı için entegrasyon sinklerini kullanır, veri üzerinde tanımlanan alarm koşullarının gerçekleşmesi durumunda ürettiği alarm verisini dağıtımı için ise alarm sinklerini kullanır. 

NightWatch, bu yazının yazıldığı tarih itibariyle aşağıdaki entegrasyon sinklerini kullanarak dış modül veya sistemlere veri dağıtımı yapabilir,

* İlişkisel veri tabanları (PostgreSQL, Microsoft SQL Server, Oracle, MySQL, MariaDb ve SQLite)
* MQTT protokolünü destekleyen brokerlar (örneğin, Mosquitto)
* AQMP protokolünü destekleyen brokerlar (örneğin, RabbitMQ)
* Redis / Valkey 
* OPC UA protokolünü destekleyen sistemler (örneğin, KepWare)
* Web Hook mekanizması ile REST tabanlı kişiye/müşteriye özel sistemler
* Trex MES Enerji modülü
* Trex MES Operatör Paneli
* Trex MES Proses Verisi Toplama modülü

 ## Kapanış

 Bu yazımızda NightWatch'un temel iki işlevi olan **veri toplama** ve **veri dağıtımını** ele aldık. İlerleyen günlerden NightWatch'ın sunduğu Alarm işlevini, NightWatch'un teknik altyapısı ile ilgili detayları ve NightWatch'un performans karakteristiği gibi konuları ele alacağımız yazılarımızı sizinle paylaşmaya devam edeceğiz. 



***
{% include share_twitter_tr.html %}

***
