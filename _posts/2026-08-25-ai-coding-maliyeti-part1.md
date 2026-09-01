---

layout: post
title: "Kod Yazmak Ucuzlamıyor: AI Destekli Kodlamanın Görünmeyen Maliyeti"
subtitle: "Bölüm 1: Token Ekonomisi, Ajan Maliyeti ve AI Engineering FinOps"
date: 2026-08-25
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt--> 
published: true
tags:

- ai
- coding
- agents
- finops
- economics

---

> **Bu yazı, AI destekli kodlama ekonomisi ve harness engineering üzerine iki bölümlük serinin ilk yazısıdır.**

AI destekli kodlama araçları bugüne kadar ağırlıklı olarak verimlilik üzerinden tartışıldı: daha hızlı kod üretmek, daha kısa cycle time, daha az rutin iş ve daha yüksek geliştirici kapasitesi. Ancak bu araçlar olgunlaştıkça ikinci bir soru giderek daha önemli hale geliyor: Bu verimliliğin gerçek maliyeti nedir?

<!--end-of-excerpt-->

Bu soru özellikle ajan tabanlı geliştirmede basit bir lisans maliyeti hesabının çok ötesine geçiyor. Bir kodlama ajanı repository'yi tarıyor, dosyaları bağlama alıyor, plan oluşturuyor, kod değiştiriyor, test çalıştırıyor, hataları yorumluyor ve gerektiğinde aynı döngüyü tekrar ediyor. Dolayısıyla maliyet artık yalnızca "hangi aracı kaç geliştirici kullanıyor?" sorusuyla açıklanamıyor; kullanılan model, bağlam büyüklüğü, ajanın kaç adım çalıştığı ve görevi tamamlamak için kaç kez yeniden denediği doğrudan ekonomik değişken haline geliyor.

Gartner'ın 24 Haziran 2026 tarihli tahmini bu nedenle dikkat çekici. Gartner, token tüketimindeki artış ve AI destekli kodlama ürünlerinde tüketime göre fiyatlandırmanın yaygınlaşmasıyla birlikte, 2028 yılında AI destekli kodlama maliyetlerinin ortalama bir geliştirici maaşını aşabileceğini öngörüyor. Bu tahmin doğru çıksın ya da çıkmasın, işaret ettiği problem oldukça gerçek: AI destekli yazılım geliştirme artık yalnızca bir developer productivity konusu değil; aynı zamanda yeni bir işlem gücü ekonomisi (compute economics), yönetişim ve FinOps problemi.

## Asıl mesele lisans fiyatı değil

Bir IDE eklentisine kullanıcı başına aylık sabit ücret ödemek finansal açıdan kolay anlaşılır bir modeldir. Kaç geliştiriciniz olduğunu bilirsiniz, lisans sayısını çarpar ve yıllık bütçeyi büyük ölçüde öngörebilirsiniz. Ajan tabanlı geliştirmede ise maliyet kullanımla birlikte değişkendir. Aynı geliştirici bir gün birkaç kısa görev çalıştırırken başka bir gün uzun süren bir ajan oturumunda repository'nin önemli bir bölümünü modele gönderebilir, test ve düzeltme döngülerini tekrar tekrar çalıştırabilir.

Bu yüzden "bir geliştiricinin aylık AI destekli kodlama aracı maliyeti nedir?" sorusu zamanla yetersiz kalacak. Daha anlamlı soru, "bir iş kalemi, pull request veya production'a çıkan değişiklik için ne kadar AI işlem gücü tükettik?" olacak. Çünkü yazılım organizasyonunda yönetilmesi gereken şey yalnızca harcama değil, harcamanın hangi çıktıya dönüştüğüdür.

Gartner'ın dikkat çektiği tüketim bazlı fiyatlandırma problemi burada ortaya çıkıyor. Vendor'ların token tüketiminin nasıl hesaplandığı ve faturaya nasıl yansıdığı konusunda yeterli görünürlük sağlamaması, kurumların hem bütçe tahmini yapmasını hem de maliyet ile iş değeri arasında ilişki kurmasını zorlaştırıyor. Üstelik Gartner, organizasyonların deneyden ölçekli kullanıma geçmesiyle toplam token tüketiminin daha da büyümesini bekliyor.

## Ajan maliyetini kod satırı değil, çalışma döngüsü belirliyor

Bir kodlama ajanının maliyeti yalnızca ürettiği kodun uzunluğuyla ilişkili değildir. Ajan önce görevi anlamaya çalışır, repository içinde arama yapar, ilgili dosyaları okur, bağımlılıkları inceler, bir plan oluşturur, kodu değiştirir, derleme veya test çalıştırır, sonucu değerlendirir ve gerektiğinde yeni bir deneme yapar. Bu adımların her biri yeni model çağrıları doğurabilir ve daha önce kullanılan bağlamın bir bölümünü yeniden taşıyabilir.

Büyük codebase'lerde bu davranış özellikle önem kazanıyor. Bir hata için gerçekten gerekli bilgi birkaç sınıf, ilgili interface'ler ve bir test dosyası olabilir. Fakat ajan çok geniş bir repository bağlamı oluşturuyorsa, uzun logları olduğu gibi modele gönderiyorsa veya sohbet geçmişini sürekli büyütüyorsa, token tüketimi hızla artar. Daha fazla bağlamın otomatik olarak daha iyi sonuç vermediğini de biliyoruz; gereksiz bilgi maliyeti artırırken modelin dikkatini dağıtabilir ve çıktının kalitesini düşürebilir.

Gartner, token israfını azaltmak için bağlam mühendisliğini (context engineering) zorunlu bir pratik haline getirmeyi öneriyor: modele yalnızca ilgili bilgiyi vermek, mümkün olan yerde özetlemek ve gereksiz veriyi elemek. Bence bu öneriyi yalnızca geliştiriciye "daha kısa prompt yaz" demek olarak okumak eksik kalır. Bağlam mühendisliği, bir görevin çözümü için hangi bilginin gerekli olduğunu, bu bilginin modele ne zaman ve hangi biçimde verileceğini sistematik biçimde tasarlama işidir. Repository özetleri, sembol tabanlı arama, RAG, diff odaklı bağlam, tool çıktılarının filtrelenmesi, log özetleme ve conversation compaction gibi mekanizmalar yalnızca model kalitesini değil, doğrudan ekonomik verimliliği de etkiler.

## En güçlü modeli varsayılan yapmak iyi mühendislik değildir

AI destekli kodlama araçlarında sık görülen başka bir varsayım, her görev için mümkün olan en güçlü modeli kullanmaktır. Geliştirici açısından bu davranış anlaşılır; günlük işinde token ekonomisi değil, sonuca ulaşma hızı önemlidir. Fakat organizasyon ölçeğinde aynı yaklaşım pahalı hale gelir. Basit bir unit test üretimi, rename refactoring veya dokümantasyon güncellemesi ile karmaşık bir concurrency hatasının kök neden analizi aynı compute sınıfını gerektirmez.

Gartner bu nedenle model seçiminin görev karmaşıklığıyla eşleştirilmesini öneriyor. Basit ve yüksek hacimli işler daha küçük ve ekonomik modeller tarafından çözülebilirken, yüksek belirsizlik, yüksek risk veya daha derin muhakeme gerektiren görevler frontier modellere yönlendirilebilir. Burada model routing, maliyet kontrol mekanizması olmaktan öte bir engineering platform özelliğine dönüşür. Sistem önce görevin niteliğini değerlendirir, uygun model sınıfını seçer ve ancak ihtiyaç ortaya çıkarsa daha güçlü bir modele eskalasyon yapar.

Bu yaklaşım bana bulut mimarilerindeki compute sınıflarını hatırlatıyor. Her workload'u en pahalı instance üzerinde çalıştırmadığımız gibi, her yazılım geliştirme görevini de en pahalı model üzerinde çalıştırmamız gerekmiyor. Doğru soru "hangi model en iyi?" değil, "bu görev için yeterli kaliteyi en verimli biçimde hangi model sağlıyor?" olmalı.

## AI destekli kodlamanın FinOps anı yaklaşıyor

Bulut bilişim yaygınlaşırken benzer bir dönüşüm yaşadık. Fiziksel altyapıda kapasite büyük ölçüde önceden satın alınırken bulut ile birlikte CPU, bellek, disk, network ve managed service tüketimi dinamik hale geldi. İlk dönemde asıl tartışma teknik esneklik ve hızdı; maliyetler büyüdükçe ise FinOps ortaya çıktı. FinOps'un amacı bulutu mümkün olduğunca az kullanmak değil, kullanılan kaynağı görünür kılmak, sorumlulukla ilişkilendirmek ve ortaya çıkan iş değeriyle birlikte optimize etmekti.

AI destekli kodlama da benzer bir noktaya ilerliyor. Önümüzdeki dönemde AI Engineering FinOps diye ayrı bir mühendislik pratiğinin oluşması şaşırtıcı olmayacaktır. Burada takip edeceğimiz veri yalnızca toplam token sayısı olmayacak. Hangi takım, ajan, model ve iş kaleminin ne kadar token/işlem gücü tükettiği; bu tüketimin hangi pull request, review, merge veya release ile ilişkili olduğu; sonunda production'a çıkan ve gerçekten kullanılan bir çıktıya dönüşüp dönüşmediği birlikte değerlendirilecek.

Harcama ile çıktı arasındaki bu fark kritik, çünkü düşük maliyet her zaman verimlilik anlamına gelmez. Bir ajanın 20 dolar harcayarak çözdüğü kritik bir production problemi ekonomik olarak son derece başarılı olabilir. Buna karşılık 2 dolar harcanarak üretilen ancak review sırasında tamamen çöpe atılan bir değişiklik pahalıdır. Dolayısıyla optimizasyon hedefi "token sayısını azaltmak" değil, birim mühendislik değeri başına AI maliyetini iyileştirmek olmalıdır.

## Token'ı değil, token ile üretilen sonucu ölçmek

Kurumsal yazılım geliştirme organizasyonlarında yalnızca model sağlayıcısından gelen usage raporlarına bakmak yeterli olmayacaktır. AI tüketiminin SDLC üzerindeki gerçek çıktılarla ilişkilendirilmesi gerekir. İdeal durumda aşağıdaki zinciri izleyebilmeliyiz:

**bütçe -> takım -> geliştirici/ajan -> iş kalemi -> model -> token/işlem gücü -> maliyet -> commit -> pull request -> review -> merge -> release -> mühendislik veya iş çıktısı**

Bu zincir kurulabildiğinde çok daha anlamlı sorular sormaya başlayabiliriz. Merge edilen pull request başına AI maliyeti nedir? AI yoğun değişikliklerde review süresi gerçekten azalıyor mu? Ajan kullanımının yüksek olduğu repository'lerde hata oranı veya rework oranı nasıl değişiyor? Bir özelliğin cycle time'ı düşerken AI maliyeti ne kadar artıyor? Aynı görev sınıfında küçük bir model ile frontier model arasındaki kalite farkı gerçekten harcama farkını haklı çıkarıyor mu?

Burada AI katkı atfı (contribution attribution) da doğal olarak önem kazanıyor. Bir commit'in yüzde kaçının insan, yüzde kaçının ajan tarafından üretildiğini kusursuz biçimde hesaplamak her zaman mümkün olmayabilir ve zaten çoğu durumda böyle bir kesinlik gerekli değildir. Daha uygulanabilir yaklaşım; ajan kaynaklı değişiklikleri işaretlemek, kullanılan ajan ve model bilgisini commit, pull request veya CI/CD metadata'sına taşımak ve token/maliyet telemetrisini aynı iş kalemiyle ilişkilendirmektir. Böylece organizasyon, AI kullanımını soyut bir yaygınlaşma metriği olarak değil, SDLC içinde gözlenebilir bir üretim girdisi olarak izlemeye başlayabilir.

## Developer-led, developer-with-agent ve fully agent-led aynı şey değil

Gartner'ın önerdiği kullanışlı çerçevelerden biri geliştirme görevlerini üç çalışma modeline ayırıyor: developer-led, developer-with-agent ve fully agent-led. Bu sınıflandırma yalnızca güvenlik ve yetkilendirme açısından değil, maliyet davranışını anlamak açısından da değerli.

Developer-led bir görevde AI sınırlı destek sunabilir; örneğin kodu açıklayabilir, alternatif önerebilir veya küçük bir kod bloğu üretebilir. Developer-with-agent çalışma modelinde ajan repository üzerinde aktif biçimde çalışır, ancak kritik kararlar ve doğrulama geliştiricide kalır. Fully agent-led çalışma modelinde ise planlama, kod değişikliği, test ve düzeltme döngüsünün önemli bir bölümü ajan tarafından yürütülebilir. Bu üç çalışma modelinin token profili, risk seviyesi ve beklenen ekonomik getirisi doğal olarak aynı değildir.

Bu ayrımı organizasyon politikalarının içine almak, "herkes istediği ajanı istediği şekilde kullansın" yaklaşımından daha sağlıklı olacaktır. Görev sınıfına göre izin verilen otonomi seviyesi, kullanılabilecek model sınıfı, token bütçesi ve eskalasyon politikası tanımlanabilir. Böylece governance, geliştiricinin önüne sürekli onay ekranı çıkaran bürokratik bir mekanizma değil, engineering platform'un görünmez ama tutarlı bir parçası haline gelir.

## Geliştiriciden token ekonomisti olmasını beklemek yanlış

Gartner'ın basın açıklamasındaki en önemli tespitlerden biri, token disiplininin geliştirici tercihiyle kendiliğinden oluşmayacağı yönünde. Geliştiriciler doğal olarak hızı, kullanım kolaylığını ve görevi bitirmeyi optimize ediyor; her prompt veya ajan adımında kaç cent harcandığını hesaplamak onların temel sorumluluğu değil. Eğer bir organizasyon maliyet kontrolünü geliştiricinin sürekli dikkatine bırakıyorsa, aslında platform seviyesinde çözmesi gereken bir problemi bireysel davranışa devretmiş olur.

Daha doğru yaklaşım maliyet farkındalığını araçların ve platformun içine gömmektir. Ajan belirli bir token bütçesine yaklaştığında uyarı verebilir, gereksiz bağlam otomatik olarak compact edilebilir, küçük görevler ekonomik modellere yönlendirilebilir, uzun süren ajan döngüleri durdurulabilir veya daha güçlü bir modele geçmeden önce eskalasyon mekanizması çalıştırılabilir. Gartner'ın yüksek token tüketen iş akışlarının sprint retrospektiflerinde gözden geçirilmesi önerisi de bu nedenle anlamlıdır; amaç geliştiriciyi sorgulamak değil, hangi çalışma kalıplarının gereksiz maliyet ürettiğini görünür kılmaktır.

## Yeni KPI'lar: Accepted Change başına maliyet ve ötesi

AI destekli kodlama döneminde üzerinde düşünmemiz gereken metriklerden biri Accepted Change başına maliyet (Cost per Accepted Change) olabilir. Buradaki accepted, ajanın kod üretmiş olması değil; değişikliğin review'dan geçmiş ve merge edilmiş olmasıdır. Bir sonraki adım Production Outcome başına maliyettir (Cost per Production Outcome): aynı değişikliğin release'e çıkması, production'da hata üretmemesi ve hedeflenen iş sonucunu sağlaması. Aynı yaklaşımı Resolved Issue başına AI maliyeti veya ürün bağlamına göre Feature başına AI maliyeti gibi metriklerle genişletmek de mümkündür.

Bu tür metrikler geliştiricileri bireysel performansını takip etmek için kullanılmamalıdır. Böyle bir kullanım kolayca yanlış teşvikler yaratır ve geliştiriciyi karmaşık problemi çözmek yerine düşük maliyetli görünmeye iter. Buna karşılık aynı takımın zaman içindeki trendlerini, farklı ajan konfigürasyonlarını, bağlam stratejilerini veya model routing politikalarını karşılaştırmak için oldukça değerlidir. Örneğin bağlam optimizasyonundan sonra Accepted Change başına maliyet yüzde 30 düşüyor ve kalite metrikleri aynı kalıyorsa, gerçek bir verimlilik kazanımı vardır.

Tersi de mümkündür. Daha pahalı bir model, daha az deneme, daha az review düzeltmesi ve daha düşük hata oranı sayesinde Accepted Change başına maliyeti düşürebilir. Bu yüzden yalnızca input ve output token fiyatlarına bakarak model seçmek de eksik bir optimizasyondur. Maliyeti model çağrısı seviyesinde değil, tamamlanan mühendislik çıktısı seviyesinde değerlendirmek gerekir.

## Yazılım mühendisliği liderlerinin sorumluluk alanı genişliyor

AI destekli kodlamanın ölçeklenmesi yazılım mühendisliği liderlerinin takip ettiği metriklere yeni bir katman ekliyor. Build süreleri, test coverage, cycle time, hata oranı, developer experience ve bulut maliyetlerinin yanına artık model kullanımı, ajan otonomi seviyesi, bağlam verimliliği, token tüketimi ve AI katkısının Accepted Change'e dönüşme oranı da geliyor.

Bu, AI destekli kodlama araçlarını sınırlamak gerektiği anlamına gelmiyor. Tam tersine, ciddi bir üretkenlik potansiyeli taşıyan bu araçların sürdürülebilir biçimde kullanılabilmesi için doğru işletim modelinin kurulması gerekiyor. Bulut maliyetleri yüzünden buluttan vazgeçmediğimiz gibi token maliyetleri yüzünden ajanlardan da vazgeçmeyeceğiz. Fakat "sınırsız bağlam + en güçlü model + maksimum otonomi" kombinasyonunu varsayılan çalışma biçimi haline getirmek de mühendislik açısından savunulabilir görünmüyor.

Buradaki olgunluk göstergesi kaç geliştiricinin AI kullandığı değil, organizasyonun AI kullanımını ne ölçüde görünür, kontrollü ve çıktıyla ilişkili hale getirebildiği olacaktır. Adoption sayıları başlangıçta anlamlı olabilir, ancak ölçek büyüdükçe asıl soru kullanım değil verimlilik, kalite ve ekonomik karşılık olacaktır.

## Sonuç: AI ile daha fazla kod değil, daha fazla değer üretmek

Gartner'ın 2028 öngörüsünü yalnızca "AI destekli kodlama pahalılaşacak" şeklinde okumak bence eksik olur. Daha önemli değişim, AI destekli yazılım geliştirmenin ekonomik modelinin dönüşmesidir. Sabit lisanslardan dinamik compute tüketimine, birkaç prompt'luk etkileşimlerden uzun süre çalışan ajan iş akışlarına ve geliştirici başına maliyetten iş kalemi başına maliyete doğru ilerliyoruz.

Bu nedenle önümüzdeki dönemde olgun organizasyonların sorması gereken sorular da değişecek. Hangi işleri AI'ya veriyoruz? Bu iş için hangi model yeterli? Ne kadar context gerçekten gerekli? Ajan hangi noktada durmalı veya insana dönmeli? Harcadığımız AI bütçesi hangi Accepted Change'e veya Production Outcome'a dönüştü? Cycle time, kalite ve developer experience üzerinde ne kazandık ve bunun karşılığında ne harcadık?

AI destekli kodlama için önümüzdeki birkaç yılın temel problemi token'ları kısmak değil, **AI tüketimini mühendislik değeriyle ilişkilendirmek** olacak. Bunu başaran organizasyonlar AI'ı geliştiricilerin kullandığı pahalı bir araç olarak değil, ölçülebilir, yönlendirilebilir ve optimize edilebilir bir üretim kapasitesi olarak yönetebilecek. Bence asıl rekabet avantajı da burada oluşacak.

## Kaynaklar

1. Gartner, "Gartner Predicts AI Coding Costs Will Surpass Average Developer's Salary by 2028 as Token Consumption Surges", 24 Haziran 2026. [https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges](https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges)

---

{% include share_twitter_tr.html %}

---

