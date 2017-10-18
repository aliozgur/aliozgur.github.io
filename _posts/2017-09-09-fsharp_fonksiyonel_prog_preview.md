---
layout: post
title: "Yeni Bir Kitap Hazırlığı"
subtitle: "F# ile Fonksiyonel Programlama"
date:  2017-09-09 16:50
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - F#
  - FSharp
  - F Sharp
  - Fonksiyonel Programlama
  - Programlama
  - Funcitonal Programming
  - Functional
  - Book
  - Kitap
 
---

Uzun zamandır çok beğendiğim ve kullandığım zaman oldukça keyif aldığım F# programlama dili ile ilgili Türkçe bir kitap hazırlama fikrim vardır. Sonunda bu fikri hayata geçirmek için çalışma fırsatı buldum. Kitabın içeriğine aşağıdaki linkte yer alan ön izleme sürümünden göz atabilirsiniz.
<!--end-of-excerpt-->

Önizleme sürümünde kitabın ilk üç bölümü yer alıyor. Kitap büyük ihtimalle basılı olarak değil elektronik formatta [Dikeyeksen](https://www.dikeyeksen.com) tarafından piyasaya sürülecek. 

## Nasıl Okurum, Nasıl Katkı Sağlarım?

1. Kitabın ön izleme versiyonunu PDF olarak şuradan indirebilirsiniz 
[F# ile Fonksiyonel Programlama - Ön izleme versiyonu]({{ root.url }}/media/fsharp_fonksiyonel_preview.pdf)

2. Kitabı online olarak HTML formatında [aliozgur.net](http://aliozgur.net/fsharp_kitap/) üzerinden de okuyabilirsiniz.

3. Kitap ile ilgili düzeltme ve önerilerinizi [GitHub Deposu](https://github.com/aliozgur/fsharp_kitap) üzerinden **merge requestler** veya satır referans linklerini içeren **issue**lar oluşturarak paylaşabilirsiniz.

<!--
![]({{ root.url }}/media/fsharp_inprogress.jpg)
-->

## Yazım Süreci Bilglendirme  

* 25.09.2017 itibariyle : İlk 3. bölüm tamamlandı
* Ön İzleme versiyonu için GitHub deposu oluşturuldu
* Ön İzleme versiyonu [aliozgur.net](http://aliozgur.net/fsharp_kitap/) üzerinden yayınlandı
* 17.10.2017 : Kitap içeriği tamamlanıp editör ile paylaşıldı
* 17.10.2017 : Kitabın tam versiyonu içeriği dışındaki materyaller GitHub deposuna yüklendi  

## Kitaptan Alıntı - Kısa F# Tarihçesi

F#, Türkçe **efşarp** olarak telafuz edilen, yabancı kaynaklarda **FSharp** olarak da rastlayabileceğiniz, yordamsal (imperative) ve bildirimsel (declarative) programlama yaklaşımlarının her ikisini de destekleyen çok yönlü (multi paradigm) ve fonksyionel bir programlama dilidir. 

> **DİKKAT!**
>
>"Fonksiyionel programlama dili" ifadesindeki **fonksiyonel** ibaresi ilk etapta "çok faydalı", "işe yarayan" benzeri anlamlar çağırıştırsa da kitapta bu anlamlarda kullanılmamıştır. "Fonksiyonel programlama" programlama dilleri sınıflandırmasında matematikteki fonksiyonları ve özelliklerini temel alan yaklaşımı ifade eder.

F#, Microsoft tarafından tasarlanıp geliştirilen açık kaynak kodlu bir dilidir. F#'ın geliştirilmesindeki temel motivasyon Microsoft'un en önemli platformlarından biri olan **.NET**'in tasarım prensiplerine kadar uzanır. .NET , diller, derleyiciler, standard kütüphaneler ve sanal çalışma ortamı gibi yazılım geliştirme ve bu yazılımların çalıştırıldığı bileşenleri içeren bir yapıdır. .NET'i destekleyen programlama dilleri ile geliştirilmiş programlar dillerin kendilerine özel derleyicileri tarafında derlenir. Derleyiciler tarafından MSIL (Microsoft Intermediate Language) olarak isimlendirilen ara bir dile dönüştürülen programlar ortak dil çalışma ortamı olan CLR (Common Language Runtime) tarafından çalıştırılabilir. 

MSIL, işletim sistemi ve CPU mimarisi bağımsız bir dildir. .NET'i destekleyen programalama dillerinin (C#, VB.NET ve F#) derleyicileri MSIL kodu üretirler. Genelde MSIL kodu elle yazılmaz. .NET'i destekleyen herhangi bir dil ile geliştirilen ve MSIL'e derlenen programlar Windows, Linux ve OSX işletim sistemleri üzerinde CLR içinde çalıştırılabilir. 

.NET ilk çıktığında geliştirici araçları ve CLR bileşenleri sadece Windows işletim sistemde çalışıyodu. Kısa bir süre sonra bağımsız bir grup yazılımcı Linux ve OSX'de de çalışabilen **Mono** isimli açık kaynak bir .NET versiyonu geliştirdi. 2015 yılına kadar Mono lisanslama koşulları nedeni ile Microsoft'un orjinal kodunu kullanmadı. Ancak, 2015 yılı itibariyle Microsoft da Mono'ya doğrudan kod katkısı sağlamaya başlamıştır. Buna ilave olarak Microsoft Windows, Linux ve OSX'de çalışan ve .NET Core olarak adlandırılan yeni bir .NET versiyonu geliştirmektedir. 2017 yılında .NET Core 2.0 dağıtımı kullanıma sunulmuştur. 


## İçindekiler

* 1.Bölüm : Giriş
    * 1.1 F# ile Tanışma
    * 1.2 Kısa F# Tarihçesi
    * 1.3 Neden F#?
    * 1.4 Fonksiyonlara Matematiksel Bakış
    * 1.5 Fonksiyonların İlginç Özellikleri
    * 1.6 Fonksiyonel Programlama Nedir?

* 2.Bölüm : F# Geliştirme Platformu 
    * 2.1 Derleyici ve Yorumlayıcı Kavramları
    * 2.2 FSC - F# Derleyicisi
    * 2.3 FSI - F# Etkileşimli Ortamı  
    * 2.4 F# Standard Dosya Uzantıları
    * 2.5 Derleyici ve Etkileşimli Ortam Değişkenleri
    * 2.6 Geliştirme Araçları
    * 2.7 Merhaba F# 

* 3.Bölüm : F# Temelleri
    * 3.1 Söz dizimi kuralları
    * 3.2 Basit Veri Tipleri
    * 3.3 Fonksiyonlar
    * 3.4 Fonksiyonların İleri Seviye Kullanımı
    * 3.5 Temel Veri Tipleri
    * 3.6 Yapısal Eşitlik
    * 3.7 Kod Organizasyonu

* 4.Bölüm : Fonksiyonel Programlama
    * 4.1 Desen Eşleme (Pattern Matching)
    * 4.2 Kayıtlar (Record) 
    * 4.3 Ayrışık Bileşim (Discriminated Union)
    * 4.4 Tiplere Davranış Ekleme
    * 4.5 Tip Genelleme (Generics)
    * 4.6 Sonradan Değerleme (Lazy Evaluation)
    * 4.7 Sekanslar (Sequences)
    * 4.8 yield! (yield bang)
    
* 5.Bölüm : Koleksiyonlar
    * 5.1 Liste (List)
    * 5.2 Dizi (Array)
    * 5.3 Sekans (Sequence)
    * 5.4 yield! (yield bang)
    * 5.5 Küme (Set)
    * 5.6 Anahtar Değer Haritası (Map)
    * 5.7 List Modülü
    * 5.8 Sorgu İfadeleri (Query Expressions)
    
* 6.Bölüm : Genel Amaçlı Programlama
    * 6.1 Değişkenlere Gerçekten İhtiyacımız Var Mı? 
    * 6.2 Değer Tipleri ve Referans Tipleri
    * 6.3 Değişkenler
    * 6.4 .NET Koleksiyonları
    * 6.5 Döngü Yapıları (For ve While)
    * 6.6 Koşullu Dallanma Yapıları (If/Else)
    * 6.7 İstisnalar (Exceptions)
    * 6.8 Ölçü Birimleri

* 7.Bölüm : Nesne Yönelimli Programlama
    * 7.1 Nesne Yönelimli Programlama Nedir?
    * 7.2 Sınıf Tanımlama
    * 7.3 Üye Özellikler
    * 7.4 Üye Metodlar
    * 7.5 Üye Erişim Kısıtlayıcıları
    * 7.6 Kalıtım
    * 7.7 Kontralar/Ara Birimler
    * 7.8 Sınıflar Arası Tip Dönüşümü
    * 7.9 IDisposable Kullanım Desenleri

* 8.Bölüm : Gelişmiş Fonksiyonel Programlama Yöntemleri
    * 8.1 Aktif Desenler 
    * 8.2 Kuyruk Özyenilemeli Fonksiyonlar
    * 8.3 Aktarım Operatörleri
    * 8.4 Fonksiyon Kompozisyonu
    * 8.5 İpuçları

* 9.Bölüm : Asenkron ve Paralel Programlama
    * 9.1 Giriş ve Temel Kavramlar
    * 9.2 Thread Sınıfı
    * 9.3 Asenkron İş Akışları
    * 9.4 Task Sınıfı ve Paralel Programlama
    * 9.5 MailboxProcessor Sınıfı