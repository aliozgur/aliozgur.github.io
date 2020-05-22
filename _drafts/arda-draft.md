---
layout: post
title: "Arda'nın Kodlama Öğrenme Macerası"
subtitle: ""
date:  2018-11-28 16:05
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - Çocuklar
  - Kodlama
  - Yazılım Geliştirme
  - Yazılım 
---

Bu sayfada Arda ile yaptığımız kodlama öğrenme oturumlarındaki çalışmalarımızın notlarını paylaşıyorum.

<!--end-of-excerpt-->

## Başlarken

* Çocuğunuzun az da olsa İngilizce'ye kulak dolgunluğunun olması işinizi kolaylaştıracaktır.
* Çocuklar için tasarlanmış görsel programlama dilleri dışında çok iyi bildiğiniz bir programlama dili seçilmeli. Biz tercihimizi **C#** ve **HTML**'den yana kullandık.
* Uygulamaları çocuğunuzun kullanmaya alışık olduğu bir cihaz ve işletim sistemi kullanılarak yapılmalı. Bu nokta bir önceki maddede belirttiğim dil tercihini de etkileyecektir. Örneğin, çocğunuz iPad üzerinde iOS kullanmaya alışkın ise dil olarak Swift'i seçip uygulamalarınızı Swift Playgrounds ile yapabilirsiniz.

## Bilgisayarların İcadı ve Genel Kavramlar

İlk oturuma Arda'nın bilgisayarlar ve kodlama ile ilgili merak ettiği soruları sormasını isteyerek başladık. Arda'nın ilk aklına gelen sorular şunlardı;

**Soru-1:** Dünyada kaç programlama dili vardır?

**Soru-2:** Yazdığım program farklı bilgisayarlarda nasıl çalışabiliyor? 

**Soru-3:** Yazdığım program bilgisayarı ve diğer cihazları nasıl kontrol edebiliyor?

**Soru-4:** C# İle Web sayfası hazırlayabilir miyim?

**Soru-5:** Kendi programlama dilimi yapsam nasıl çalıştırabilirim?


### Dünyada kaç programlama dili vardır?
Arda bu sorusunu sorarken soruyu daha iyi anlamam için bana "Hani mesela dünyada konuşulan 2600 mü ne dil var ya. O şekilde kaç programlama dili vardır sence?" şeklinde örnek vererek sordu. Bu aslında cevabı zor bir soruydu. Soruyu "herhalde bir o kadar da programlama dili vardır" şeklinde cevapladım. 

Daha sonra dönüp her iki sorunun da cevabına baktım.

* 2009 yılında yayınlanan bir veriye göre dünyada biribirinden farklı [7000](https://www.linguisticsociety.org/content/how-many-languages-are-there-world) civarında dil varmış. Ancak bu dillerin bir çoğunu konuşan insan sayısı binden az.
* Programlama dilleri tarafında ise sayı farklı kriterlere göre [250 ile 9000](http://codelani.com/posts/how-many-programming-languages-are-there-in-the-world.html) arasında değişiyor.

Arda'nın bu soruyu sormasının nedeni, diğer soruları da göz önüne aldığımda, muhtemelen programlama öğrenmek için ne kadar çaba harcaması gerektiğini anlayabilmekti. 

### Yazdığım program farklı bilgisayarlarda nasıl çalışabiliyor?
Arda'nın farklı bilgisayardan kastı tabii ki işletim sistemi farklı olan bilgisayarlar değil markası farklı olan bilgisayarlar. Arda'ya göre bilgisayarlar HP, MacBook veya Lenovo gibi markalarına göre birbirinden tamamen farklıydı. Bilgisayarlar arasındaki farkları ve benzerlikleri şu şekilde açıklamaya çalıştım;

* Bilgisayarlar bir apartmanın katları gibi birbirinden farklı seviyelerdeki katlardan oluşur. Bu cihazın alt katlarında **donanım** dediğimiz ve elimizle tutabileceğimiz parçalar yer alıyor. Örneğin; klavye ve ekran bir donanımdır. Daha üst katlarında ise **yazılım** dediğimiz ve programlama dilleri kullanılarak oluşturulan programlar yer alıyor. Örneğin; internette gezinmek için kullanılan Chrome ve Cut The Rope oyunu birer yazılımdır. 
* Donanım parçaların çoğu bilgisayarın markası ne olursa olsun genelde 3-5 şirket tarafından üretilir. Örneğin; işlemci (CPU) dediğimiz en önemli parçayı üreten Intel, AMD ve Qualcom gibi şirketler vardır. Bu şirketler temelde benzer şekilde çalışan ve tüm bilgisayar markalarına takılabilecek işlemciler üretiyor.
* Yazılım dediğimiz programlar ise donanıma bir iş yaptırmak, donanımdan gelen komutları yerine getirmek veya hesaplamalar yapmak için programlama dilleri kullanılarak oluşturulur. 
* Donanım ve yazılımlar apartmanın katlarındaki daireler gibi kendi içlerinde de grupanırlar. Örneğin, klavye ve mouse gibi donanım cihazları bilgisayarın çevresi ile olan bilgi ve komut alışverişi için kullanıldığından bunlara "Çevre Birimi" denir.
* Yazılım dediğimiz programlarda ise daha fazla sayıda gruplama vardır. Ancak, bu gruplardan en önemlisi işletim sistemi dediğimiz programlardır. Diğer tüm programlar bu işletim sistemi tarafından çalıştırılır.  
* Örneğin Windows bir işletim sistemi. Windows gibi Linux ve OSX de bir işletim sistemi
* Tablet ve telefonlarda kullanılan iOS ve Android de birer işletim sistemi. 
* Aslında içinde bilgisayar olan tüm cihazlarda (örneğin modem) küçük de olsa bir işletim sistemi bulunur.


### Yazdığım program bilgisayarı ve diğer cihazları nasıl kontrol edebiliyor? 
Yazdığın programın içindeki **komutlar** ile bilgisayarları veya diğer cihazları kontrol edebilirsin. Aslında senin programının komutları elektrik sinyaline dönüştürülür ve bu elektrik sinyalleri farklı cihazların farklı işler yapmasını sağlar. Örneğin, programında ekrana "Arda" yazdırmak için bir komut varsa bu komut önce Windows'un anlayacağı bir şekle dönüştürülür sonra da Windows'un ekranı yöneten yazılımına iletilir. Windows'un ekranı kontrol eden yazılım da ekrana senin komutunda verdiğin "Arda" yazısını nereye yazacağını elektrik sinyali olarak iletir. 

Bilgisayar dışındaki cihazlar için ise örnek olarak buzdoloabını düşünebiliriz. Buzdolabının sıcaklığını -4 dereceye ayarladığında buzdolabının üreten şirketteki programcının yazdığı bir program senin belirttiğin bu sıcaklığı kaydeder ve buzdolabının motoruna elektrik sinyali olarak sıcaklık -4 dereceye gelene kadar çalışması gerektiği komutunu verir. 


### C# İle Web sayfası hazırlayabilir miyim?
C# ile doğrudan web sayfası hazırlayamazsın. Web sayfası hazırlamak için HTML adı verilen farklı bir dil kullanılır. HTML kullanarak Chrome gibi tarayıcıların uygulayacağı kuralları kodlarsın. Chrome'un adres alanına bir sayfanın adresini yazdığında aslında o adreste HTML bir dosya vardır ve Chrome da bu dosyayı indirir. İndirilen HTML dosyasının içinde Chrome'un sayfayı insanlara gösterirken kullanacağı kurallar yer alır. Chrome da bu kurallara göre sayfadaki renkleri, başlığın büyüklüğünü ve hangi yazının nereden gösterileceğine karar verir. 

Doğrudan HTML yazarak web sayfası hazırlayabileceğin gibi C# ile HTML kullanmadan normal yazılardan web sayfası üretebilecek programlar da yazılabilir. Bu durumda doğrudan HTML kullanılmaz ancak C# ile yazdığın program HTML sayfa üretebilir.

Bu açıklamalardan sonra Chrome'da bir sayfa açıp developer tools ile sayfanın HTML kodunu ve bu kodun içindeki kuralların uygulanmasından sonra sayfada gerçekte gördüğümüz şey arasındaki ilişkinin demosunu yaptım. 


### Kendi programlama dilimi yapsam nasıl çalıştırabilirim?
Kendi programlama dilini yapmak için **Bilgisayar Bilimleri** adını verdiğimiz alanda eğitim alman lazım. Bilgisayar bilimi ile uğraşan bilim insanlarının uzmanlık alanlarından birisi de programlama dili tasarımıdır. Programlama dilini tasarladıktan sonra bu dili anlayıp program üreten süper bir program yazman lazım. Programlama dillerini anlayan bu süper programlara derleyici (compiler) denir. Hazırlayacağın derleyici tasarladığın programlama dilini anlamalı ve yazıdan bilgisayarın ekranını kontrol edebilecek veya matematiksel işlemlerin yapılmasını sağlayacak olan komutları üretebilmeli. Derleyici dediğimiz programları makine üretebilen süper makineler gibi de düşünebilirsin. 


***
{% include share_twitter_tr.html %}

***
