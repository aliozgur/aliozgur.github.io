---
layout: post
title: "Yazılım Şirketlerini Gerçekten Ayakta Tutan Şey Ne?"
subtitle: "Theory Building, Organizasyonel Hafıza ve Modern Yazılım Sistemlerini"
date: 2026-05-26
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - theory-building
  - organizational-memory
  - engineering-management
  - ai

---

Bir cuma akşamı production ortamında kritik bir hata çıktığını düşünün. Sistem çalışıyor ama bazı müşteriler sipariş oluşturamıyor. Loglar temiz. Monitoring sistemleri olağan dışı bir şey göstermiyor. Kodun ilgili kısmına bakan ekip üyeleri mantıksal bir problem göremiyor.

Sonra ekipte biri şöyle diyor:

> "Ah… bu davranış aslında bilerek böyle yapılmıştı."

Herkes dönüp soruyor: **"Bunu kim yaptı?"**

Cevap: **"Üç yıl önce ayrılan bir geliştirici."**

O noktada organizasyon bir gerçekle yüzleşiyor. Kod orada olabilir. Ama sistemi gerçekten anlayan kişi artık organizasyonda değildir.

Bu sahne yazılım sektöründe sanıldığından çok daha yaygındır. Tam olarak bu nedenle Baldur Bjarnason'ın ["Theory-building and why employee churn is lethal to software companies"][baldur-theory-building] yazısı bence yazılım organizasyonları üzerine yazılmış en önemli metinlerden biri.

Çünkü yazının merkezindeki fikir oldukça net:

> Yazılım yalnızca kod değildir.
> Yazılım, ekiplerin zihnindeki kolektif anlayışın çalışan bir dışavurumudur.

Bu yaklaşımın kökeni ise Peter Naur'un yıllar önce ortaya koyduğu ["Programming as Theory Building"][naur-programming-as-theory-building] düşüncesine dayanıyor.

![Cover]({{ root.url }}/media/theory-building-in-software-dev.png)

<!--end-of-excerpt-->

---

## Programlama Aslında Bir "Teori İnşa Etme" Süreci

Geleneksel bakış açısında programlama, bilgisayara komut vermek olarak görülür.

Kod yazılır.
Derlenir.
Çalışır.
Sistem oluşur.

Ancak theory-building yaklaşımı bunun eksik bir bakış açısı olduğunu söyler.

Gerçekte bir yazılım sistemi geliştirilirken ekip zaman içinde görünmeyen bir zihinsel model oluşturur.

Bu model şunları içerir:

- sistem neden bu şekilde tasarlandı,
- hangi kararlar neden alındı,
- hangi edge-case'ler kritik,
- hangi davranışlar bilinçli tercih edildi,
- hangi teknik borçlar bilerek kabul edildi,
- hangi müşteri davranışları mimariyi etkiledi,
- geçmişte hangi çözümler neden başarısız oldu.

İşte bu ortak zihinsel modele "theory" denir.

Kod ise bu teorinin fiziksel çıktısıdır.

Başka bir ifadeyle:

> Kod tek başına sistemi açıklamaz.
> Sistemi gerçekten açıklayan şey insanların zihnindeki bağlamsal bilgidir.

Bu yüzden iki farklı ekip aynı kod tabanını devraldığında aynı hızda ilerleyemez.

Çünkü gerçek farkı yaratan şey syntax bilgisi değil, sistem hakkında oluşmuş kolektif sezgidir.

---

## Gerçek Hayattan Bir Örnek: "Kimsenin Dokunamadığı Servis"

Birçok şirkette şu tarz bir servis vardır:

- yıllardır çalışan,
- kritik iş süreçlerini yöneten,
- herkesin korktuğu,
- kimsenin tam anlayamadığı,
- değiştirilmesi riskli görülen

bir servis.

Genellikle şu cümlelerle tanımlanır:

- "Oraya dokunmayın."
- "Bir şey bozulur."
- "Bu sistemi sadece Ahmet biliyordu."
- "Deploy öncesi dua ediyoruz."

İlginç olan şudur:

Bu sistemler çoğu zaman teknik olarak kötü yazılmış olmak zorunda değildir. Bazen oldukça iyi yazılmış bile olabilirler. Ancak sistemin davranışını açıklayan kolektif teori zamanla kaybolmuştur. Teori kaybolduğunda organizasyonun hareket kabiliyeti de kaybolur.

---

## Dokümantasyon Neden Her Şeyi Çözmüyor?

Kurumsal yapılarda çok yaygın bir varsayım vardır:

> "Her şeyi iyi dokümante edersek bilgi kaybı yaşamayız."

Ne yazık ki karmaşık yazılım sistemlerinde bu çoğu zaman çalışmaz.

Çünkü:

- Dokümantasyon güncelliğini kaybedebilir.
- Davranışsal bağlam çoğu zaman yazıya dökülemez.
- Teknik kararların gerçek nedenleri kaybolabilir.
- Yeni gelen geliştiriciler dokümantasyonu ancak sistemi anlamaya başladıktan sonra faydalı bulur.

Aslında çoğu teknik doküman bir öğrenme aracı değil, bir hatırlatma aracı gibi çalışır.

Gerçek öğrenme genellikle şu süreçlerde oluşur:

- canlı ortamda incident çözme,
- debugging,
- tasarım tartışmaları,
- birlikte çalışma,
- müşteri problemleriyle yüzleşme,
- canlı operasyon deneyimi.

Yani yazılım bilgisi çoğu zaman sosyal bir süreç içinde oluşur. Bu nedenle yalnızca wiki sayfaları oluşturmak organizasyonel hafıza problemi çözmez.

---

## "Bu Kod Bilerek Böyle Yazıldı" Problemi

Modern yazılım sistemlerinde çok sık karşılaşılan başka bir durum daha vardır.

Bir geliştirici kodu refactor eder.

Kod daha temiz görünür.
Daha modern görünür.
Daha okunabilir görünür.

Sonra canlıda bir problem çıkar.

Çünkü eski davranış aslında görünmeyen bir iş kuralını implemente ediyordur.

Örneğin:

- belirli müşteriler için timeout davranışı bilinçli ayarlanmıştır,
- eski ERP sistemiyle uyumluluk için garip bir workaround eklenmiştir,
- belirli bir banka API'sindeki hatalı davranış sistem tarafından tolere edilmektedir,
- yıllar önce yaşanan kritik bir canlı ortam incident'ı sonrası özel bir kontrol eklenmiştir.

Ama bunların hiçbiri kodun kendisinden anlaşılmaz. Çünkü bunlar teoriye aittir ve teori organizasyondaki insanlarda yaşar.

---

## Employee Churn Neden Yazılım Şirketleri İçin Ölümcüldür?

Theory-building yaklaşımının en güçlü argümanı burada ortaya çıkar. Yüksek çalışan devir oranı yalnızca HR problemi değildir. Aslında bu doğrudan teknik sürdürülebilirlik problemidir. Çünkü insanlar ayrıldığında yalnızca çalışan kaybedilmez.

Şunlar da kaybedilir:

- sistem sezgisi,
- mimari hafıza,
- müşteri davranış bilgisi,
- operasyonel refleksler,
- geçmiş hata deneyimleri,
- karar bağlamı.

Bir noktadan sonra organizasyon sistemi gerçekten anlamamaya başlar.

Bu durumda genellikle şu belirtiler görülür:

- değişiklik yapmaktan korkma,
- sürekli regression problemleri,
- yeniden yazma isteği,
- "legacy sistem" paniği,
- deployment korkusu,
- dramatik hız kaybı,
- sürekli teknik borç hissi.

İlginç olan şu, birçok şirket bu problemi teknolojik sanır. Aslında problem çoğu zaman organizasyonel hafıza kaybıdır.

---

## Mikroservisler Bile Bu Problemi Çözmüyor

Modern mimariler bazen bu problemi çözüyormuş gibi görünür. Özellikle mikroservis yaklaşımı sıklıkla şu vaatle gelir:

- sistemler ayrışacak,
- ekipler bağımsızlaşacak,
- karmaşıklık azalacak.

Ancak gerçek dünyada çoğu zaman başka bir problem oluşur. Teori parçalanır.

Bir süre sonra:

- servisler birbirinin davranışlarını varsaymaya başlar,
- kimse tüm sistemi uçtan uca anlamaz,
- distributed debugging kabusa dönüşür,
- organizasyon yalnızca lokal optimizasyon yapabilir hale gelir.

Sonuçta mikroservis mimarisi bile organizasyonel öğrenme olmadan sürdürülebilir olmaz.

---

## AI Çağında Bu Problem Daha da Büyüyor

Bugün AI destekli geliştirme araçları yazılım üretim hızını dramatik şekilde artırıyor.

Artık:

- boilerplate üretmek,
- CRUD yazmak,
- API client oluşturmak,
- test üretmek

çok daha kolay.

Ancak burada kritik bir risk var:

AI kod üretebilir ama bağlam oluşturamaz.

Şunları otomatik olarak bilemez:

- organizasyonun geçmiş production problemleri,
- müşteri davranışları,
- neden belirli mimari kararların alındığı,
- hangi teknik kompromilerin bilinçli yapıldığı,
- hangi edge-case'lerin kritik olduğu.

Daha da önemlisi:

AI bazen "mantıksal olarak doğru görünen ama organizasyonel olarak yanlış" kod üretebilir.

Örneğin:

Bir AI assistant, performans optimizasyonu amacıyla retry mekanizmasını kaldırabilir.

Ama o retry mekanizması aslında yıllardır sorunlu çalışan üçüncü parti bir sistemin stabil kalmasını sağlıyor olabilir.

Kod daha temiz hale gelir ama sistem kırılır. Çünkü bağlam kaybolmuştur. Bu nedenle gelecekte rekabet avantajı yalnızca AI kullanan şirketlerde olmayacak.

Asıl avantaj:

> Organizasyonel bağlamı koruyabilen şirketlerde olacak.

---

## Rewrite Projeleri Neden Sıklıkla Başarısız Olur?

Theory-building yaklaşımı rewrite projelerine de farklı bakmayı sağlar.

Birçok şirket yıllar sonra şöyle düşünür:

> "Bu sistemi baştan yazalım."

Yeni teknoloji seçilir.
Yeni framework gelir.
Yeni ekip kurulur.

Ama çoğu rewrite projesi ya başarısız olur ya da beklenenden çok daha uzun sürer. Çünkü eski sistemin gerçek değeri yalnızca kodunda değildir. Yıllar içinde oluşmuş görünmeyen teori kaybolmuştur.

Yeni ekip:

- edge-case'leri bilmez,
- müşteri davranışlarını bilmez,
- geçmiş incident'ları bilmez,
- operasyonel workaround'ları bilmez.

Sonuçta, eski sistem teknik olarak kötü görünse bile, organizasyon aslında onun taşıdığı görünmeyen bilgiyi yeniden keşfetmek zorunda kalır. Bu keşif süreci ise bir çok açıdan ciddi maliyet demektir.

---

## Yazılım Şirketleri Aslında Bilgi Organizasyonlarıdır

Theory-building yaklaşımının en önemli sonucu belki de şudur:

Yazılım şirketleri aslında kod üreten organizasyonlar değildir.Onlar bilgi üreten organizasyonlardır. Kod bunun sonucudur.

Başarılı organizasyonlar genellikle:

- bilgi paylaşımını,
- mentoring kültürünü,
- teknik hafızayı,
- bağlam aktarımını,
- kolektif öğrenmeyi

iyi yönetir.

Bu nedenle senior mühendislerin değeri yalnızca "iyi kod yazmaları" değildir.

Asıl değerleri:

- organizasyonel teoriyi üzerlerinde taşımaları,
- sistem sezgisi oluşturmaları,
- bağlam aktarımı yapmalarıdır.

---

## Peki Organizasyonlar Ne Yapmalı?

Theory-building yaklaşımı bazı önemli organizasyonel sonuçlar doğuruyor.

### Kritik Bilgiyi Tek Kişide Toplamamak

"Bus factor" hâlâ yazılım dünyasının en büyük risklerinden biri.

Bilginin:

- paylaşılması,
- yayılması,
- ekip içinde dolaşması

stratejik önem taşıyor.

---

### Teknik Hafızayı Koruyan Mekanizmalar Kurmak

Sadece wiki yetmez.

Bunun yanında:

- Architecture Decision Records (ADR),
- incident retrospectives,
- pair programming,
- canlı mentoring,
- teknik tartışma kayıtları,
- sistem davranış dokümantasyonu

gibi mekanizmalar gerekiyor.

---

### Employee Retention'ı Teknik KPI Olarak Görmek

Çalışan devamlılığı yalnızca insan kaynakları metriği değildir.

Aynı zamanda:

- teknik sürdürülebilirlik,
- ürün kalitesi,
- delivery hızı,
- operasyonel güvenilirlik

ile doğrudan ilişkilidir.

---

### AI'ı "Knowledge Amplifier" Olarak Kullanmak

AI ekip bilgisinin yerine geçmemeli.

Onu:

- hızlandıran,
- erişilebilir kılan,
- yaygınlaştıran

bir yardımcı sistem olarak konumlandırmak gerekiyor.

---

## Sonuç

Yazılım dünyasında zaman zaman gözden kaçan önemli bir gerçek var:

> Yazılım sistemleri yalnızca kod tabanları değildir.

Onlar aynı zamanda:

- organizasyonel hafızanın,
- insan bilgisinin,
- ekip sezgisinin,
- kolektif öğrenmenin

çalışan ürünleridir. Bir sistemi sürdürülebilir yapan şey yalnızca teknolojik mimarisi değildir.

Asıl sürdürülebilirlik:

- bağlamın korunması,
- teorinin aktarılması,
- organizasyonel öğrenmenin devam etmesi

ile oluşur.

Teori kaybolduğunda sistem teknik olarak çalışmaya devam etse bile organizasyon aslında hareket kabiliyetini kaybetmeye başlar. Belki de modern yazılım dünyasının en büyük yanılgısı şudur:

Kodun sistem olduğunu düşünmek.

Oysa kod çoğu zaman yalnızca insanların zihnindeki teorinin görünen kısmıdır.

---

###  Referanslar

- [Baldur Bjarnason, "Theory-building and why employee churn is lethal to software companies"][baldur-theory-building]

- [Peter Naur, "Programming as Theory Building"][naur-programming-as-theory-building]

- [Jeremy Keith / Adactio, Baldur Bjarnason yazısına referans ve değerlendirme][adactio-theory-building]

- [TMPDIR Community tartışması ve alıntılar][tmpdir-theory-building]

- [Evan Halley değerlendirmesi][evan-halley-theory-building]

[baldur-theory-building]: https://www.baldurbjarnason.com/2022/theory-building/
[naur-programming-as-theory-building]: https://gwern.net/doc/cs/algorithm/1985-naur.pdf
[adactio-theory-building]: https://adactio.com/links/19643
[tmpdir-theory-building]: https://community.tmpdir.org/t/theory-building-and-why-employee-churn-is-lethal-to-software-companies/840
[evan-halley-theory-building]: https://evanhalley.dev/post/theory-building/


***
{% include share_twitter_tr.html %}

***
