---
layout: post
title: "XML ve HTML Auto Merge ve Hatalı Conflict Sorunları"
subtitle: "Diff algoritmalarının başımıza açabileceği dertler"
date:  2020-05-22 18:23
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - Git
  - Programlama

---

Aynı proje üzerinde devam eden iş sayısı artınca XML formatında olan resx, csproj ve sln uzantılı dosyalarda auto-merge nedeniyle yapısal hatalar
veya normalde olmaması gereken conflictlerin oluşması ve bunların manul çözülmesi gerekn durumlar ile karşılaşabiliyoruz.
Bu sorunların nedeninin Git olduğunu düşünenler olabilir ama konu tüm VCS sistemlerinin kullandıkları genel kabul görmüş diff algoritmalarının eksikliğinden kaynaklanıyor.

<!--end-of-excerpt-->


Özetlemek gerekirse;
* Tüm VCS sistemleri kod dosyalarındaki farkları etkili bir şekilde çözmeye optimize edilmiş diff algoritmaları kullanıyor
* Kullanılan bu algoritmalar kod dosyalarındaki en küçük ve anlamlı birimin tek bir satır olduğunu varsayıyor.
* Bu varsayım XML veya HTML gibi markup olmayan kaynak kodu dosyalarında etkin ve büyük oranda doğru diff yapılmasını sağlıyor
* Ancak XML ve HTML gibi markup formatlarında en küçük anlamlı birim satır değil tag’lar ile başı ve sonu tanımlanan elemenltler.
* XML ve HTML özelinde işi zorlaştıran konulardan bir diğer de bir element içinde nested diğer tipten elementlerin de olabilmesi

Bu sorunu kökten ve kolay bir şekilde çözebilen bir VCS sistemi (Git de dahil) yok. Bu nedenle sorunu çözmemizi veya sorunun olduğunu anlamamızı sağlayacak bir tooling önerim de olmayacak. Uzun lafın kısası XML veya HTML içerik için yanlış auto mergeler veya conflictler ile karşılaşmaya devam edeceğiz.

Bu problemi merge işlemleri sırasında ortadan kaldıramasak bile staging ve develop merge sonrasında compile time’da resx içindeki hataları derleyici yakalıyor. Derleyicinin yakalayamadığı (aslında derlemediği için yakalayamıyor) hatalar resx’de yapısal olarak sorun olmadığı halde örneğin auto merge ile silinen property kullanan cshtml (razor view) dosyaları içindeki hatalar. Bu hataların staging ve production’a çıkan konfigürasyonlarda yakalanabilmesi için ilgili web projelerinin csproj dosyası içinde aşağıdaki direktifleri eklemek gerekiyor. Bu direktifi (MvcBuildViews) konfigürasyon bağımsız tanımlarsak, özellikle büyük projelerde, derleme zamanı hissedilir miktarda artıyor. Bu nedenle bu konfigürasyonu staging (test) ve release konfigürasyonları ile kısıtlayarak lokalde razor viewlarındaki hataları yakalayamasak bile Jenkins/TeamCity (CI/CD) build aşamasında hataları yakalayıp buildin başarısız olmasını sağlayabiliriz.

```xml
<PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Staging|AnyCPU' ">
    <MvcBuildViews>true</MvcBuildViews>
</PropertyGroup>
<PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' ">
    <MvcBuildViews>true</MvcBuildViews>
</PropertyGroup>
```

Örneğin, yukarıdaki konfigürasyonu web.config transformasyonları kullanan bir projede yaptığımızda transformasyon işleminin yan etkisi olarak web.config validasyonu hataları alınabiliyor.

Özetle, şimdilik bu durumun farkında olup merge işlemleri sırasında auto merge yapılan dosyaları daha dikkatli gözlemlemek dışında yapabileceğimiz fazla birşey yok.

***
{% include share_twitter_tr.html %}

***
