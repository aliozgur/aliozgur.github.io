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

## Kitaptan Alıntı - F# Tarihçesi
F#, Türkçe **efşarp** olarak telafuz edilen yabancı kaynaklarda da **FSharp** veya **F Sharp** olarak da rastlayabileceğiniz yordamsal (imperative) ve bildirimsel (declarative) yaklaşımlarının her ikisini de (multi-paradigm) destekleyen fonksyionel bir programlama dilidir. 

> **DİKKAT**
>
>"Fonksiyionel programlama dili" ifadesindeki **fonksiyonel** ibaresi ilk etapta "çok faydalı", "işe yarayan" benzeri anlamlar çağırıştırsa da kitapta bu anlamlarda kullanılmamıştır. "Fonksiyonel programlama" ifadesi programlama dilleri tasarımında matematikteki fonksiyonları ve özelliklerini temel alan bir yaklaşımı ifade eder. Bölümün sonunda bu tanım ayrıntılı olarak ele alınmaktadır.

F# programlama dili Microsoft tarafından tasarlanıp geliştirilen açık kaynak kodlu fonksiyonel bir programlama dilidir. Microsoft'un F# gibi bir dili geliştirmesinin altındaki temel motivasyon Microsoft'un geliştirdiği bir platformu olan .NET Framework'ün 90'lı yılların sonundaki temel tasarım amacına kadar uzanır. Microsoft'un .NET Framework'ünü Java'nın sanal ortamına (JVM) benzetebilirsiniz. .NET Framework farklı programlama dilleri ile geliştirilmiş programların MSIL (Microsoft Intermediate Language) adı verilen ara bir dile derlenmesi sonrasında üretilen kodu çalıştıran sanal bir ortam sunar.

## İÇİNDEKİLER

* 1.Bölüm : Giriş
    * 1.1 F# ile Tanışma
    * 1.2 Kısa F# Tarihçesi
    * 1.3 Neden F#?
    * 1.4 Fonksiyonlara Matematiksel Bakış
    * 1.5 Fonksiyonların İlginç Özellikleri
    * 1.6 Fonksiyonel Programlama Nedir?

* 2.Bölüm : F# Geliştirme Platformu 
    * 2.1 FSC - F# Derleyicisi
    * 2.2 FSI - F# Etkileşimli Ortamı (F# Interactive)  
    * 2.3 F# Standard Dosya Uzantıları
    * 2.4 Derleyici ve Etkileşimli Ortam Değişkenleri
    * 2.5 Geliştirme Araçları
    * 2.6 Merhaba F# 

* 3.Bölüm : F# Temelleri
    * 3.1 Söz dizimi kuralları
    * 3.2 Basit Veri Tipleri
    * 3.3 Fonksiyonlar
    * 3.4 Fonksiyonların İleri Seviye Kullanımı
    * 3.5 Temel Veri Tipleri
    * 3.6 Yapısal Eşitlik
    * 3.7 Kod Organizasyonu

* 4.Bölüm : Fonksiyonel Programlama
    * Desen Eşleştirme (Pattern Matching)
    * Küme Teorisi ve F# Tipleri
        * Değişkenler Grubu (Tuple)
        * Ayrışık Bileşim (Discriminated Union)
        * Kayıt (Record) 
    * Gevşek Değerleme (Lazy Evaluation)
    * Sekanslar (Sequences)
    * Sorgu İfadeleri (Query Expressions)
* 5.Bölüm : Genel Amaçlı Programlama
    * Değişken ve Değişmeyen Kavramları (Immutability and Mutability)
    * .NET Bellek Yönetimi
    * Değişken İçeriğini Değiştirme
    * Diziler
    * .NET Yığın Yapıları Kullanımı
    * Döngü Yapıları (For ve While)
    * Koşullu Dallanma Yapıları (If/Else)
    * İstisna Yönetimi (Exceptions)
* 6.Bölüm : Nesne Tabanlı Programlama ve Sınıflar
    * Fonksiyonel Bir Dilde Neden Nesne Tabanlı Programlama Desteği Var?
    * Sınıf Tanımlama
    * Sınıf Özellik ve Üyeleri 
    * Sınıflar Arası Kalıtım 
    * Ara Birim Kullanımı (Interfaces)
* 7.Bölüm : İleri Seviye Fonksiyonel Programlama Yöntemleri
    * Aktif Desenler (Active Patterns)
    * Liste Modülü
    * Kuyruk Özyenilemeli Fonksiyonlar
    * Fonksiyonlar ile Programlama
    * Fonksiyonel Programlama Desenleri
* 8.Bölüm : Asenkron ve Paralel Programlama
    * İşletim Sistemi İplikleri ile Çalışma (Thread)
    * Asenkron Programlama
    * Asenkreon Programlama Kütüphanesi
    * Paralel Programlama
    * Paralel Programlama Kütüphanesi
* 9.Bölüm : Örnek Uygulamalar
    * Veritabanı Uygulaması
    * Veri Ayıklama ve Analiz Uygulaması
    * Web Programlama Uygulaması
    * Finansal Uygulalma : Kredi Puanı Hesaplayıcı
    * UrhoSharp İle Örnek Oyun 