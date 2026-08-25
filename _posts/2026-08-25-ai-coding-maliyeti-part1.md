---
layout: post
title: "Kod Yazmak Ucuzlamıyor: AI Coding'in Görünmeyen Maliyeti"
subtitle: "Bölüm 1: Token Ekonomisi, Agent Maliyeti ve AI Engineering FinOps"
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

> **Bu yazı, AI coding ekonomisi ve harness engineering üzerine iki bölümlük serinin ilk yazısıdır.**

AI coding araçları bugüne kadar ağırlıklı olarak verimlilik üzerinden tartışıldı: daha hızlı kod üretmek, daha kısa cycle time, daha az rutin iş ve daha yüksek geliştirici kapasitesi. Ancak bu araçlar olgunlaştıkça ikinci bir soru giderek daha önemli hale geliyor: Bu verimliliğin gerçek maliyeti nedir?

Bu soru özellikle agent tabanlı geliştirmede basit bir lisans maliyeti hesabının çok ötesine geçiyor. Bir agent repository'yi tarıyor, dosyaları context'e alıyor, plan oluşturuyor, kod değiştiriyor, test çalıştırıyor, hataları yorumluyor ve gerektiğinde aynı döngüyü tekrar ediyor. Dolayısıyla maliyet artık yalnızca "hangi aracı kaç geliştirici kullanıyor?" sorusuyla açıklanamıyor; kullanılan model, context büyüklüğü, agent'ın kaç adım çalıştığı ve görevi tamamlamak için kaç kez yeniden denediği doğrudan ekonomik değişken haline geliyor.

Gartner'ın 24 Haziran 2026 tarihli tahmini bu nedenle dikkat çekici. Gartner, token tüketimindeki artış ve AI coding ürünlerinde kullanım bazlı fiyatlandırmanın yaygınlaşmasıyla birlikte, 2028 yılında AI coding maliyetlerinin ortalama bir geliştirici maaşını aşabileceğini öngörüyor. Bu tahmin doğru çıksın ya da çıkmasın, işaret ettiği problem oldukça gerçek: AI destekli yazılım geliştirme artık yalnızca bir developer productivity konusu değil; aynı zamanda yeni bir compute economics, governance ve FinOps problemi.

<!--end-of-excerpt-->

## Asıl mesele model fiyatı değil

Bir IDE eklentisine kullanıcı başına aylık sabit ücret ödemek finansal açıdan kolay anlaşılır bir modeldir. Kaç geliştiriciniz olduğunu bilirsiniz, lisans sayısını çarpar ve yıllık bütçeyi büyük ölçüde öngörebilirsiniz. Agent tabanlı geliştirmede ise maliyet kullanımla birlikte hareket eder. Aynı geliştirici bir gün birkaç kısa görev çalıştırırken başka bir gün uzun süren bir agent oturumunda repository'nin önemli bir bölümünü modele taşıyabilir, test ve düzeltme döngülerini tekrar tekrar çalıştırabilir.

Bu yüzden "bir geliştiricinin AI aracı aylık ne kadar tutuyor?" sorusu zamanla yetersiz kalacak. Daha anlamlı soru, "bir feature, bug fix, pull request veya production'a çıkan değişiklik için ne kadar AI hesaplama kaynağı tükettik?" olacak. Çünkü yazılım organizasyonunda yönetilmesi gereken şey yalnızca harcama değil, harcamanın hangi çıktıya dönüştüğüdür.

Gartner'ın dikkat çektiği tüketim bazlı fiyatlandırma problemi burada ortaya çıkıyor. Vendor'ların token tüketiminin nasıl hesaplandığı ve faturaya nasıl yansıdığı konusunda yeterli görünürlük sağlamaması, kurumların hem bütçe tahmini yapmasını hem de maliyet ile iş değeri arasında ilişki kurmasını zorlaştırıyor. Üstelik Gartner, bugün hafif kullanıcı olan geliştiricilerin kullanım alışkanlığı arttıkça ana akım yoğun kullanıcılara dönüşmesini ve bunun toplam token tüketimini daha da büyütmesini bekliyor.

## Agent maliyetini kod satırı değil, çalışma döngüsü belirliyor

Bir coding agent'ın maliyeti yalnızca ürettiği kodun uzunluğuyla ilişkili değildir. Agent önce görevi anlamaya çalışır, repository içinde arama yapar, ilgili dosyaları okur, bağımlılıkları inceler, bir plan oluşturur, kodu değiştirir, derleme veya test çalıştırır, sonucu değerlendirir ve gerektiğinde yeni bir deneme yapar. Bu adımların her biri yeni model çağrıları doğurabilir ve daha önce kullanılan context'in bir bölümünü yeniden taşıyabilir.

Büyük codebase'lerde bu davranış özellikle önem kazanıyor. Bir hata için gerçekten gerekli bilgi birkaç sınıf, ilgili interface'ler ve bir test dosyası olabilir. Fakat agent çok geniş bir repository context'i oluşturuyorsa, uzun logları olduğu gibi modele gönderiyorsa veya konuşma geçmişini sürekli büyütüyorsa, token tüketimi hızla artar. Daha fazla context'in otomatik olarak daha iyi sonuç vermediğini de biliyoruz; gereksiz bilgi maliyeti artırırken modelin dikkatini dağıtabilir ve çıktının kalitesini düşürebilir.

Bu nedenle Gartner'ın "context engineering" önerisini yalnızca prompt yazma tekniği olarak değerlendirmemek gerekir. Context engineering, bir görevin çözümü için hangi bilginin gerekli olduğunu, bu bilginin modele ne zaman ve hangi biçimde verileceğini sistematik biçimde tasarlama işidir. Repository özetleri, sembol tabanlı arama, RAG, diff odaklı context, tool çıktılarının filtrelenmesi, log özetleme ve conversation compaction gibi mekanizmalar yalnızca model kalitesini değil, doğrudan ekonomik verimliliği de etkiler.

## En güçlü modeli varsayılan yapmak iyi mühendislik değildir

AI coding araçlarında sık görülen başka bir varsayım, her görev için mümkün olan en güçlü modeli kullanmaktır. Geliştirici açısından bu davranış anlaşılır; günlük işinde token ekonomisi değil, sonuca ulaşma hızı önemlidir. Fakat organizasyon ölçeğinde aynı yaklaşım pahalı hale gelir. Basit bir unit test üretimi, rename refactoring veya dokümantasyon güncellemesi ile karmaşık bir concurrency hatasının kök neden analizi aynı hesaplama sınıfını gerektirmez.

Gartner bu nedenle model seçiminin görev karmaşıklığıyla eşleştirilmesini öneriyor. Basit ve yüksek hacimli işler daha küçük ve ekonomik modeller tarafından çözülebilirken, yüksek belirsizlik, yüksek risk veya daha derin muhakeme gerektiren görevler frontier modellere yönlendirilebilir. Burada model routing, maliyet kontrol mekanizması olmaktan öte bir engineering platform özelliğine dönüşür. Sistem önce görevin niteliğini değerlendirir, uygun model sınıfını seçer ve ancak ihtiyaç ortaya çıkarsa daha güçlü bir modele escalation yapar.

Bu yaklaşım bana bulut mimarilerindeki compute sınıflarını hatırlatıyor. Her workload'u en pahalı instance üzerinde çalıştırmadığımız gibi, her yazılım geliştirme görevini de en pahalı model üzerinde çalıştırmamız gerekmiyor. Doğru soru "hangi model en iyi?" değil, "bu görev için yeterli kaliteyi en verimli biçimde hangi model sağlıyor?" olmalı.

## AI coding'in FinOps anı yaklaşıyor

Bulut bilişim yaygınlaşırken benzer bir dönüşüm yaşadık. Fiziksel altyapıda kapasite büyük ölçüde önceden satın alınırken cloud ile birlikte CPU, bellek, storage, network ve managed service tüketimi dinamik hale geldi. İlk dönemde asıl tartışma teknik esneklik ve hızdı; maliyetler büyüdükçe ise FinOps ortaya çıktı. FinOps'un amacı cloud'u mümkün olduğunca az kullanmak değil, kullanılan kaynağı görünür kılmak, sorumlulukla ilişkilendirmek ve ortaya çıkan iş değeriyle birlikte optimize etmekti.

AI coding de benzer bir noktaya ilerliyor. Önümüzdeki dönemde "AI Engineering FinOps" veya benzer isimlerle ayrı bir mühendislik pratiğinin oluşması şaşırtıcı olmayacaktır. Burada takip edeceğimiz veri yalnızca toplam token sayısı olmayacak. Hangi ekip, repository, agent, model ve görev türünün ne kadar tüketim yaptığı; bu tüketimin hangi issue, pull request veya release ile ilişkili olduğu; sonunda merge edilen, production'a çıkan ve gerçekten kullanılan bir çıktıya dönüşüp dönüşmediği birlikte değerlendirilecek.

Bu ayrım kritik, çünkü düşük maliyet her zaman verimlilik anlamına gelmez. Bir agent'ın 20 dolar harcayarak çözdüğü kritik bir production problemi ekonomik olarak son derece başarılı olabilir. Buna karşılık 2 dolar harcanarak üretilen ancak review sırasında tamamen çöpe atılan bir değişiklik pahalıdır. Dolayısıyla optimizasyon hedefi "token sayısını azaltmak" değil, birim mühendislik değeri başına AI maliyetini iyileştirmek olmalıdır.

## Token'ı değil, token ile üretilen sonucu ölçmek

Kurumsal yazılım geliştirme organizasyonlarında yalnızca model sağlayıcısından gelen usage raporlarına bakmak yeterli olmayacaktır. AI tüketiminin SDLC üzerindeki gerçek çıktılarla ilişkilendirilmesi gerekir. İdeal durumda aşağıdaki zinciri izleyebilmeliyiz:

**AI harcaması -> agent/model -> geliştirici/repository -> issue veya iş kalemi -> commit/pull request -> merge -> release -> operasyonel veya iş çıktısı**

Bu zincir kurulabildiğinde çok daha anlamlı sorular sormaya başlayabiliriz. Merge edilen pull request başına AI maliyeti nedir? AI yoğun değişikliklerde review süresi gerçekten azalıyor mu? Agent kullanımının yüksek olduğu repository'lerde defect veya rework oranı nasıl değişiyor? Bir feature'ın cycle time'ı düşerken AI maliyeti ne kadar artıyor? Aynı görev sınıfında küçük bir model ile frontier model arasındaki kalite farkı gerçekten harcama farkını haklı çıkarıyor mu?

Burada AI contribution attribution da doğal olarak önem kazanıyor. Bir commit'in yüzde kaçının insan, yüzde kaçının agent tarafından üretildiğini kusursuz biçimde hesaplamak her zaman mümkün olmayabilir ve zaten çoğu durumda böyle bir kesinlik gerekli değildir. Daha uygulanabilir yaklaşım; agent kaynaklı değişiklikleri işaretlemek, kullanılan agent ve model bilgisini commit, pull request veya CI/CD metadata'sına taşımak ve token/cost telemetrisini aynı iş kalemiyle ilişkilendirmektir. Böylece organizasyon, AI kullanımını soyut bir adoption metriği olarak değil, SDLC içinde gözlenebilir bir üretim girdisi olarak izlemeye başlayabilir.

## Developer-led, developer-with-agent ve agent-led aynı şey değil

Gartner'ın önerdiği kullanışlı çerçevelerden biri geliştirme görevlerini üç çalışma modeline ayırıyor: developer-led, developer-with-agent ve fully agent-led. Bu sınıflandırma yalnızca güvenlik ve yetkilendirme açısından değil, maliyet davranışını anlamak açısından da değerli.

Developer-led bir görevde AI sınırlı destek sunabilir; örneğin kodu açıklayabilir, alternatif önerebilir veya küçük bir snippet üretebilir. Developer-with-agent modelinde agent repository üzerinde aktif biçimde çalışır, ancak kritik kararlar ve doğrulama geliştiricide kalır. Agent-led modelde ise planlama, kod değişikliği, test ve düzeltme döngüsünün önemli bir bölümü agent tarafından yürütülebilir. Bu üç modelin token profili, risk seviyesi ve beklenen ekonomik getirisi doğal olarak aynı değildir.

Bu ayrımı organizasyon politikalarının içine almak, "herkes istediği agent'ı istediği şekilde kullansın" yaklaşımından daha sağlıklı olacaktır. Görev sınıfına göre izin verilen autonomy seviyesi, kullanılabilecek model sınıfı, token bütçesi ve escalation politikası tanımlanabilir. Böylece governance, geliştiricinin önüne sürekli onay ekranı çıkaran bürokratik bir mekanizma değil, engineering platform'un görünmez ama tutarlı bir parçası haline gelir.

## Geliştiriciden token ekonomisti olmasını beklemek yanlış

Gartner'ın basın açıklamasındaki en önemli tespitlerden biri, token disiplininin geliştirici tercihiyle kendiliğinden oluşmayacağı yönünde. Geliştiriciler doğal olarak hızı, kullanım kolaylığını ve görevi bitirmeyi optimize ediyor; her prompt veya agent adımında kaç cent harcandığını hesaplamak onların temel sorumluluğu değil. Eğer bir organizasyon maliyet kontrolünü geliştiricinin sürekli dikkatine bırakıyorsa, aslında platform seviyesinde çözmesi gereken bir problemi bireysel davranışa devretmiş olur.

Daha doğru yaklaşım maliyet farkındalığını tooling ve platform içine gömmektir. Agent belirli bir token bütçesine yaklaştığında uyarı verebilir, gereksiz context otomatik olarak sıkıştırılabilir, küçük görevler ekonomik modellere yönlendirilebilir, uzun süren agent loop'ları durdurulabilir veya daha güçlü bir modele geçmeden önce escalation mekanizması çalıştırılabilir. Gartner'ın yüksek token tüketen workflow'ların sprint retrospektiflerinde gözden geçirilmesi önerisi de bu nedenle anlamlıdır; amaç geliştiriciyi sorgulamak değil, hangi çalışma kalıplarının gereksiz maliyet ürettiğini görünür kılmaktır.

## Yeni KPI'lar: Cost per Accepted Change ve ötesi

AI coding döneminde üzerinde düşünmemiz gereken metriklerden biri "Cost per Accepted Change" olabilir. Buradaki accepted, agent'ın kod üretmiş olması değil; değişikliğin review'dan geçmiş, merge edilmiş ve gerçekten ürünün parçası olmuş olmasıdır. Aynı yaklaşımı "AI Cost per Production Change", "AI Cost per Resolved Issue" veya ürün bağlamına göre "AI Cost per Feature" gibi metriklerle genişletmek mümkündür.

Bu tür metrikler bireysel geliştiricileri sıralamak için kullanılmamalıdır. Böyle bir kullanım kolayca yanlış teşvikler yaratır ve geliştiriciyi karmaşık problemi çözmek yerine düşük maliyetli görünmeye iter. Buna karşılık aynı takımın zaman içindeki trendlerini, farklı agent konfigürasyonlarını, context stratejilerini veya model routing politikalarını karşılaştırmak için oldukça değerlidir. Örneğin context optimizasyonundan sonra accepted change başına token tüketimi yüzde 30 düşüyor ve kalite metrikleri aynı kalıyorsa, gerçek bir verimlilik kazanımı vardır.

Tersi de mümkündür. Daha pahalı bir model, daha az retry, daha az review düzeltmesi ve daha düşük defect oranı sayesinde accepted change başına toplam maliyeti düşürebilir. Bu yüzden yalnızca input ve output token fiyatlarına bakarak model seçmek de eksik bir optimizasyondur. Maliyeti model çağrısı seviyesinde değil, tamamlanan mühendislik çıktısı seviyesinde değerlendirmek gerekir.

## Yazılım mühendisliği liderlerinin sorumluluk alanı genişliyor

AI coding'in ölçeklenmesi yazılım mühendisliği liderlerinin takip ettiği metriklere yeni bir katman ekliyor. Build süreleri, test coverage, cycle time, defect oranı, developer experience ve cloud maliyetlerinin yanına artık model kullanımı, agent autonomy seviyesi, context verimliliği, token tüketimi ve AI katkısının kabul edilen çıktıya dönüşme oranı da geliyor.

Bu, AI coding araçlarını sınırlamak gerektiği anlamına gelmiyor. Tam tersine, ciddi bir üretkenlik potansiyeli taşıyan bu araçların sürdürülebilir biçimde kullanılabilmesi için doğru işletim modelinin kurulması gerekiyor. Cloud maliyetleri yüzünden cloud'dan vazgeçmediğimiz gibi token maliyetleri yüzünden agent'lardan da vazgeçmeyeceğiz. Fakat "sınırsız context + en güçlü model + maksimum autonomy" kombinasyonunu varsayılan çalışma biçimi haline getirmek de mühendislik açısından savunulabilir görünmüyor.

Buradaki olgunluk göstergesi kaç geliştiricinin AI kullandığı değil, organizasyonun AI kullanımını ne ölçüde görünür, kontrollü ve çıktıyla ilişkili hale getirebildiği olacaktır. Adoption sayıları başlangıçta anlamlı olabilir, ancak ölçek büyüdükçe asıl soru kullanım değil verimlilik, kalite ve ekonomik karşılık olacaktır.

## Sonuç: AI ile daha fazla kod değil, daha fazla değer üretmek

Gartner'ın 2028 öngörüsünü yalnızca "AI coding pahalılaşacak" şeklinde okumak bence eksik olur. Daha önemli değişim, AI destekli yazılım geliştirmenin ekonomik modelinin dönüşmesidir. Sabit lisanslardan dinamik compute tüketimine, birkaç prompt'luk etkileşimlerden uzun süre çalışan agent workflow'larına ve geliştirici başına maliyetten iş kalemi başına maliyete doğru ilerliyoruz.

Bu nedenle önümüzdeki dönemde olgun organizasyonların sorması gereken sorular da değişecek. Hangi işleri AI'ya veriyoruz? Bu iş için hangi model yeterli? Ne kadar context gerçekten gerekli? Agent hangi noktada durmalı veya insana dönmeli? Harcadığımız AI bütçesi hangi kabul edilmiş değişikliğe, feature'a veya production çıktısına dönüştü? Cycle time, kalite ve developer experience üzerinde ne kazandık ve bunun karşılığında ne harcadık?

AI coding için önümüzdeki birkaç yılın temel problemi token'ları kısmak değil, **AI tüketimini mühendislik değeriyle ilişkilendirmek** olacak. Bunu başaran organizasyonlar AI'ı geliştiricilerin kullandığı pahalı bir araç olarak değil, ölçülebilir, yönlendirilebilir ve optimize edilebilir bir üretim kapasitesi olarak yönetebilecek. Bence asıl rekabet avantajı da burada oluşacak.

## Kaynaklar

1. Gartner, "Gartner Predicts AI Coding Costs Will Surpass Average Developer's Salary by 2028 as Token Consumption Surges", 24 Haziran 2026. https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges

***
{% include share_twitter_tr.html %}
***
