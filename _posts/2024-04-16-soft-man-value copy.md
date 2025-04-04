---
layout: post
title: "Yazılım Yöneticileri İçin Değer Odaklı Yönetim İpuçları"
subtitle: ""
date:  2024-04-16 10:00
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - Yazılım
  - Yönetim
---

Bu yazımda Gartner'ın **Software Engineering Practices** kategorisi altında yayınlanan  "Software Engineering Teams Must Learn to Deliver More Value" makalesinde ele alınan konuların bendeki yansımalarını ve makale içinde yer alan bazı görüşleri sizlerle paylaşıyorum.

![Cover]({{ root.url }}/media/soft-man-value/000.png)

<!--end-of-excerpt-->

## Giriş

Yazılım geliştiren teknoloji şirketleri genellikle mühendislik kültürünün ön planda olduğu şirketlerdir. Bu nedenle, belirli bir ölçeğin altındaki yazılım şirketleri kendilerini sahip oldukları mühendislik kültürü ve bu kültürün bir parçası olan mühendislik süreçleri ve üretilen yazılımın teknik yetkinlikler ile tanımlarlar. Bu şirketlerin ölçeği zamanla büyümeye başladığında (kurumsallaşma da diyebiliriz) çeşitlenen paydaşlar ve farklı iş süreçlerinin de etkisi ile gerçek manada üretilen değerin ne olduğu, nasıl ölçüleceği ve değer odaklı mühendislik pratiklerinin ve süreçlerinin oluşturulması ve işletilmesi ihtiyacı doğar.       

Yazılım geliştiren ekipler, mühendislik süreçleri (SDLC - Software Development Life Cycle) ve yazılım geliştirme yaklaşımları (SCRUM, Agile gibi) kapsamında geliştirdikleri ürün için planlama, hata giderme, kod kalitesi, teknik borçlanma, modernizasyon, bakım/destek maliyetleri, test süreçleri, teslimat ve sürüm yayınlama gibi pek çok konuda çoğu ölçülebilir metrikler kullanırlar. Bu metriklerin temel özelliği neredeyse tamamının geliştirilen ürünün teknik anlamdaki değerinin bir bileşeni olmalarıdır. Örneğin, ürün kodunun modernize edilmesi (refactoring, kodun yeniden organize edilmesi, DDD veya Microservice gibi yeni mimari yaklaşımlara geçilmesi) sürüm yayınlama sıklığı, yeni özelliklerin geliştirilme ve teslime hazır hale gelmesi için geçen sürenin azalması, hata giderme faaliyetleri için harcanan eforun azalması, ürünün daha kolay test edilebilir hale gelmesi ve performans artışı gibi oldukça değerli çıktılar üretme potansiyeli olan bir faaliyettir. Ancak, yukarıda da bahsettiğim gibi modernizasyon örneğinin ilk elden ürettiği değerlerin neredeyse tamamı (yazılım ekipleri için refleks olarak en değerli olanları da diyebiliriz) teknik çıktılardır.  Bu çıktılardan tamamı olmasa da maalesef bir kısmı diğer paydaşlar için (son kullanıcı, ürün yönetimi ekipleri, satış, pazarlama ekipleri gibi) gerçekten onların hissedebileceği ve  bir fayda olarak algılayabilecekleri değerler değildir.  

Mühendislik süreçleri ve faaliyetleri kapsamında üretilen değer daha geniş bir perspektiften bakıldığında  maliyet ve riskleri azaltma, rekabet üstünlüğü sağlama, gelir artışı gibi kurumsal çıktıları da besler ve mümkün kılar. Ancak, yazılım ekipleri yazılım yöneticilerinin yetkin olmaması veya kurum genelinde kabul gören ve sağlıklı işletilen  değer tarifi, çıktı takibi ve Değer Geribildirim Döngüsünün olmaması gibi nedenler ile mühendislik süreçlerini bu geniş perspektife göre hizalayarak "değer odaklı" bakış açısı ile zenginleştiremezler. 

Bu noktada, Yazılım geliştirme ekiplerinin "değer odaklı" bakış açısına hizalanmaları için kullanabilecekleri makul birkaç araç, yaklaşım ve yöntemden bahsetmemiz yerinde olacaktır.

## Değer Üretme ve Gerçekleme 

Öncelikli olarak yazılım yöneticilerinin aşağıda çok anlaşılır bir şekilde görselleştirilen "Değer Üretme ve Gerçekleme Yayları" yaklaşımını özümsemeleri gerekir. Bu görselde yer alan yaylar ile ifade edilen süreçlerde yazılım geliştirme yöneticileri hem liderlik hem de işbirliği manasında aktif olarak rol almalıdırlar. Özellikle büyümekte olan organizasyonlarda yazılım geliştirme yöneticilerinin bu yaylar ile ifade edilen süreçlerin tasarımında ve işletilmesinde belirleyici olma fırsatına sahip olacaklarını ve bu fırsatı iyi kullanmaları gerektiğini düşünüyorum.   

![Değer Üretme ve Gerçekleme Yayları]({{ root.url }}/media/soft-man-value/001.png)

Yazılım yöneticisi gözü ile bu yayların her birini "değer odaklı" bakış açısı yaklaşımını da göz önüne alarak şu şekilde yorumlayabilirsiniz; 

**Develop -> Code -> Operate:** (Geliştir -> Kodla -> İşlet) Bu yay ile teknik anlamdaki yazılım geliştirme süreçlerimizin tümü ifade edilmektedir. Yazılım geliştirme ekipleri olgunluk seviyelerine ve mühendislik kültürlerine bağlı olarak bu yay ile ifade edilen değer üretme reflekslerini zaten sergilemektedir. Bu yay yazılım yöneticisi olarak özümsenmesi en kolay alanı ifade etmektedir. Bu yay aynı zamanda diğer birimler ile minimum seviyede iş birliği yapabileceğiniz alanı ifade eder. 

**Design -> Features -> Use:** (Tasarım -> Özellikler -> Kullanım) Bu yay yazılım geliştirme ekiplerinin ürün yönetimi ekipleri veya doğrudan son kullanıcı ile işbirliği yapması gereken alanı ifade eder. Bu noktada, yazılım geliştirme ekiplerinin ürün yönetimi organizasyonu ile ortak işletmesi gereken süreçleri kurgulaması ve ortak pratikleri benimsemesi önemlidir. Yazılım geliştirme ekiplerinin ürün yönetimi ekiplerinden farklı bir yazılım geliştirme pratiği uygulaması "değer odaklı" bakış açısı yaklaşımı ile uyuşmaz. Bu nedenle, örneğin ürün yönetimi ekipleri Scrum uyguluyorsa yazılım ekiplerinin de Scrum metodolojisini ve süreçlerini uygulaması işinizi kolaylaştıracaktır.  

**Target -> Outcomes -> Improve:** (Hedef -> Çıktılar -> İyileştir) Farklı ekipler ile maksimum seviyede iş birliği yapılması gereken alanı ifade eder. Önceki iki yay ile karşılaştırıldığında bu alan yazılım geliştirme yöneticisi olarak belirleyici ve sürükleyici olmaktan ziyade uyum sağlamanız gereken alanı ifade eder. Örneğin, satış hedeflerinin belirlenmesi, takibi ve iyileştirme ile ilgili konuları satış ekipleri ile uyumlu bir şekilde ve geliştirilen ürüne yansımaları veya ürünün teknik niteliklerinin satış hedeflerine yansımaları gibi konular gündeminizde olacaktır.   

**Plan -> Strategies -> Achieve:** (Plan -> Stratejiler -> Başarı) Bu yay yazılım yöneticisi olarak en iyi bildiğiniz mühendislik pratiklerine stratejik seviyede bakmanız gereken alanı ifade eder. Yazılım yöneticisi olarak en başarılı yetkinlik sergilediğiniz taktiksel alanlardan daha soyut ve daha bütünsel yaklaşımlar gerektiren bir alanda olduğunuzu özümsemeniz gerekir. Ürün ile ilgili tüm planlarınızın (taktiksel seviye) stratejiler ile uyumlaştırılması ve ürünün stratejik hedeflerine başarılı bir şekilde ulaşıp ulaşmadığını takip etmenizi sağlayacak süreç, araç ve yöntemler ile ilgili yetkinlikleri başarılı bir şekilde sergilemelisiniz. Örneğin, stratejik iş planında yer alan yeni pazarlara açılma hedefini ürünün çoklu dil ve bölge desteği veya spesifik bir pazara yönelik yeni bir özelliğinin planlanması, geliştirilmesi, A/B test planının oluşturulup uygulanması, mühendislik ekibinin bu düzenlemeler ile ilgili OKR benzeri bir yaklaşım ile performansının takip edilmesinin sağlanması gibi bir kısmı taktiksel bir kısmı da süreçler ile ilgili  kararlar verip ilgili yapıları oluşturarak işletildiğini garantilemeniz gerekecektir. Özetle "değer odaklı" yaklaşımın en dışında yer alan bu yay kurumun genel süreçlerini ve yazılım geliştirme süreçlerini daha bütünsel bir yaklaşım ile ele almanızı gerektirir.        

## Üretilen Değerin Ölçümünü Sağlayan Metrikler

Yazılım ürünlerinin son kullanıcıları öncelikli olarak talep ettikleri özelliklerin hızlı bir şekilde teslim edilmesini isterler.  2019 yılında Gartner tarafından yapılan bir araştırmada <sup>1</sup> kullanıcıların %63'ü teslimat hızının ilk öncelikleri olduğu yönünde görüş beyan etmiş. Ancak, yine aynı araştırmada katılımcıların %59'u yazılım ürünlerinin ihtiyaçlarını karşılaması ve gerçek manada iş süreçlerine odaklı değer üretmesinin de önemli olduğu yönünde görüş bildirmiş. 

Bu araştırmanın da gösterdiği gibi son kullanıcılar ihtiyaç duydukları özelliklerin hızlı  ve kendi işlerine yarayan değeri üretecek şekilde teslim edilmesini önemsiyor. Ancak, yazılım geliştirme ekipleri hem hız hem de gerçek değer önermesi noktasında ölçeğinden bağımsız olarak zaman zaman sorunlar yaşayabiliyor. Bu sorunların ilk elden çıktısı da müşteri veya son kullanıcının memnuniyetsizliği olarak yazılım yöneticilerinin ve ürün ekiplerinin sürekli gündemini işgal ediyor. Tam da olması gerektiği gibi!  

Teslimat hızı yazılım geliştirme ekiplerinin neredeyse standartlaşmış metrikler kullanarak büyük oranda takip edebildiği bir göstergedir. Teslimat hızını etkileyen ve SDLC pratikleri veya diğer mühendislik süreçleri ile ilişkilendirilmiş dolaylı metrikler de yine benzer şekilde yazılım yöneticilerinin kullanmayı iyi bildikleri ve mühendislik ekiplerinin de genelde uygulamaktan memnun oldukları göstergelerdir. Örneğin, Cycle Time ve Velocity geliştirme hızı ile doğrudan ilişkilendirebileceğimiz metriklerdir.

Diğer yandan iş ihtiyaçlarını karşılayan değerin üretimi ve son kullanıcı tarafından nasıl algılandığı ile ilgili metriklerin belirlenmesi, ölçümü ve takibi Cycle Time ve Velocity gibi metrikler ile karşılaştırıldığında oldukça zahmetlidir. Bu zorluğu yaratan en önemli etken ise son kullanıcının değer algısının yazılım ürününün özellikleri ve son kullanıcı profiline göre aşırı değişkenlik sergileyen değer algısıdır.

Değer metrikleri zor bir alan olmakla birlikte  yazılım ekipleri için aşağıdaki iki metriğin kullanımının "değer odaklı" yaklaşım sergileyen ekipler tarafından oldukça yaygın kullanıldığını söyleyebiliriz. Nedir bu metrikler?

### Değer Teslimat Temposu

Bu metriği hesaplamaktaki amacımız geliştirilen ürüne ve son kullanıcı profiline göre sürdürülebilir bir değer teslimat temposu yakalayabilmektir. Yazılım yöneticileri her  teslimat döngüsünde (sürüm yayınlama olarak da düşünülebilir) ne kadar değer teslim edebildiklerini ölçebilmeli. Pekiyi bu tempo ne kadar öngörülebilir? Aslında bu tempo tarihsel veriler ile zaman içinde belirlenir ve geliştirilen özelliklerin teknik zorluğu, son kullanıcı nezdindeki öncelikleri gibi faktörlerden doğrudan etkilenir. Bu değişkenliği göz önüne alarak yazılım ekiplerinin sürdürmekte zorlanmadığı bir tempoyu hedeflemelisiniz. Yüksek tempoda (kısa zamanda) çok fazla değer üretmek veya düşük tempoda az değer üretmek yazılım ekipleri açısından ve son kullanıcı nezdinde sürdürülebilir olmayacaktır. Bu metriği aşağıdaki gibi bir formül ile ifade edebiliriz.

> **Değer Teslimat Temposu = Teslim Edilen Değer x Teslimat Frekansı**

> Value Delivery Cadence = Anticipated Value Delivered x Delivery Frequency

Formülden de göreceğiniz gibi aslında formülde doğrudan ölçülebilir tek değişkenimiz **Teslimat Frekansı** değişkendir. **Teslim Edilen Değer** değişkeni genelde ürüne ve yazılım geliştirme ekiplerinin değer algılarına göre ölçümlenen göreceli bir değerdir. Örneğin bazı ekipler her Sprint sonunda tamamladıkları özelliklerin sayısını **Teslim Edilen Değer** olarak kullanabilirken, bazı ekipler ise özellik sayısına ilave olarak belirli bir öncelik veya puana sahip özelliklerin sayısını değişken değeri olarak kullanırlar.       

**Değer Teslimat Temposu** yazılım geliştirme ekiplerinizin bakış açısını "değer odaklı" hale getirmek için hızlıca uygulayabileceğiniz bir ilk adımdır. Ancak, optimum **Değer Teslimat Temposu** metriğini belirlemeniz son kullanıcının değer beklentisini gerçekten karşıladığınız anlamına gelmez. Özetle, **Değer Teslimat Temposu** sadece teslim etmeyi öngördüğünüz değerin bir ölçüsüdür, son kullanıcı tarafından algılanan değerin ölçüsü değildir. Son kullanıcının algıladığı değeri (kendisi için faydalı bulduğu işlev ve özellikleri ve bunların fayda çarpanını) ancak ve ancak son kullanıcı gerçek ortamda ürünü kullanmaya başladığında hesaplayabiliriz. Tam da bu noktada **Değer Teslimat Etkinliği** adı verilen başka bir metriği gündeminize almalısınız.

### Değer Teslimat Etkinliği

**Değer Teslimat Etkinliği** , teslim edildiği umulan değer ile sağlanan gerçek değerin oranıdır. 

> **Değer Teslimat Etkinliği = Sağlanan Gerçek Değer / Teslim Edildiği Umulan Değer**

> Value Delivery Effectiveness = Actual Value Delivered / Anticipated Value Delivered

Değer odaklı bakış açısının yazılım geliştirme ekipleri tarafından benimsenmesi ve etkin olarak kullanılması için yukarıda bahsettiğimiz tempo ve etkinlik metrikleri başlangıç için olmazsa olmaz araçlardır. Bu ve benzer araçların gerçek manada ekipleriniz tarafından benimsenmesi için sürekli öğrenmeyi teşvik etmeniz gerekir. Yazılım geliştirme ekipleri son kullanıcılarını, ürünün kullanıldığı iş kollarının ayrıntılarını öğrendikçe bu metrikler için optimum (sürdürülebilir, mühendislik süreçleriniz ile olabildiğince uyumlu, araçlarınız tarafından desteklenen) değerleri belirlemekte daha konforlu davranmaya başlayacaktır.


## Değer Ölçümü Yöntemleri

Tempo ve etkinlik metriklerinin hesaplanabilmesi için bunların belirli yöntemler ile nicel olarak ölçülmesi gerekir. Değer Teslimat Etkinliği oranının **Sağlanan Gerçek Değer** değişkenin hesaplanması oldukça zor olmakla birlikte **Teslim Edildiği Umulan** değişkeni için yukarıda belirttiğimiz yöntemler baz alınarak ve ürün özellikleri planlanırken mühendislik süreçleri ve araçları ile desteklenen yaklaşımlar uygulayabilirsiniz.     

Teslim edilmesi umulan ve gerçekten teslim edilen değer metriklerinin her ikisinin ölçümü için de aşağıda bir örneğini paylaştığım **Ağırlıklandırılmış Değer Skorlama** (Weighted Value Scoring) yöntemini kullanabilirsiniz.   

![Değer Ölçümü ve Skorlama]({{ root.url }}/media/soft-man-value/002.png)

Skorlama yönteminde umulan ve gerçekten teslim edilen her ürün özelliği için öncelikle bir dizi skor kartı oluşturmalısınız. Her skor kartında ilgili özelliğin sağlayacağı  tüm değerleri sıralamalısınız. Skor kartındaki her bir satır için öncelikle değer (Element) önermesi belirlemelisiniz. Ardından değer önermesi için ağırlık çarpanı (Weight) ve skor (Score) değerini belirlemelisiniz. Ağırlık ve skor değerlerinin çarpımı ile değer bazında ağırlıklanrırılmış skoru (Weighted) elde edeceksiniz. Özellik bazında oluşturduğunuz skor kartının tüm satırlarının ağırlıklanrırılmış skoru skorlarını topladığınızda ise ilgili özelliğin sunduğu değerin skorunu elde edeceksiniz.

Matematiksel olarak bakıldığında skorlama oldukça uygulanabilir bir yöntemdir. Ancak, ağırlık (weight) ve skor (score) değişkenlerinin tekil özellik bazında belirlenmesi zordur. Örneğin A ve B özelliklerinin her ikisi için de "Yasal uyumluluk nedeni ile X kanunun Y bendinde uyumluluk" şeklinde bir değer önermeniz varsa bu değerin oluşmasına A özelliğinin B özelliğinden 2 kat daha fazla etkisi olup olmayacağını dikkate almalısınız.

İster yukarıda bahsettiğimiz skorlama yöntemini isterseniz farklı bir yöntemi (çok önerilmese de son kullanıcı anketleri) kullanın yazılım geliştirme yöneticisi olarak değer ölçümü için  yazılım geliştirme ekiplerinizin ürününüzü kullanan son kullanıcıyı ve ürünün değer üretmesi beklenen iş süreçlerinin çok iyi anlamasını sağlayacak ortamı öncelikli olarak oluşturmalı ve ilgili süreç ve araçları işletebilmelisiniz. Son kullanıcı ve iş süreçlerinin anlaşılmadığı durumda değer ölçümü yöntemleriniz yanlış sinyaller üreterek stratejik seviyeye kadar sirayet eden ve gerçek değerden uzaklaşmanıza neden olan riskler doğuracaktır. 

Diyelim ki "değer odaklı" yaklaşımı destekleyen süreçleriniz, yöntemleriniz, araçlarınız ve yazılım geliştirme ekipleriniz filizlenmeye başladı. Tam da bu noktada "değer odaklı" yaklaşımınızın sürdürülebilir kalması, her zaman optimum tempo ve etkinliği ölçmenizi sağlaması için sağlıklı bir geribildirim döngüsü kurmanız gerekir. 

## Değer Geribildirim Döngüsü

Değer Geribildirim Döngüsü, temel olarak yazılımınızın tasarımı ile kullanımı arasındaki ilişkiyi kurmanızı sağlamak için kurgulamanız gereken, sürekli iyileştirme pratiği olarak ekiplerinizin özümsemesi ve benimsemesi gereken bir bakış açısıdır.   

![Değer Geribildirim Döngüsü]({{ root.url }}/media/soft-man-value/003.png)

Değer Geribildirim Döngüsü, yazılım ekipleriniz tarafından geliştirilen ürünlerin son kullanıcıya sağladığı gerçek değerin kanıtlanmasını sağlayan bir yaklaşımdır. Bu yaklaşımı kendi organizasyonunuzda uygularken karşılaşacağınız en ciddi güçlük ürünü tasarlayan ekipler ile ürünü kullanan son kullanıcıların etkin bir şekilde bir araya getirilmesi olacaktır. Bu birliktelik etkin bir şekilde sağlanamazsa değer geribildirim döngüsü de etkin bir şekilde işlemeyecektir.

Yazılım geliştirme ekipleri ile son kullanıcıyı etkin bir şekilde bir araya getirmek için

* Yazılım geliştirme ekiplerinize Design Thinking eğitimleri aldırarak kullanıcılarınızı ve onların ihtiyaçlarını daha iyi anlamalarını sağlayabilirsiniz
* Sadece belirli kriterlere göre seçilmiş kısıtlı kullanıcı kitlelerine açık veya belirli pazarlara açık prototipler yayınlayarak ürün özelliklerinin son kullanıcıya sunduğu değeri test edebilirsiniz
* Son kullanıcılarınıza var olan özellikleriniz için odaklı veya genel memnuniyet anketleri düzenleyebilirsiniz
* Son kullanıcılarınıza prototip veya tasarım aşamasındaki yeni özellikler için odaklı veya genel anketler düzenleyebilirsiniz

Ancak, yukarıdaki yöntem ve araçların hiç biri canlı ortam kullanımında elde edeceğiniz veriler ile desteklenen, gerçek anlamda bir geribildirim döngüsü inşa etmenizi sağlamayacaktır. Bu nedenle, kod seviyesinde mutlaka ölçüm ve veri toplama ile ilgili düzenlemelerin (instrumentation) yapılmasını da sağlamalısınız. Bu düzenlemeler ile ürün özelliklerinin sağlamasını umduğumuz değeri gerçekten sağlayıp sağlamadığı ile ilgili aşağıdakilere benzer soruların cevaplarına ulaşabiliriz. 

* Son kullanıcılarımız ürün özelliklerini bizim beklediğimiz şekilde kullanıyor mu?
* Son kullanıcılarımız yapılan bir geliştirme neticesinde gerçekten işlerini daha az adımda, daha hızlı ve/veya daha hatasız bir şekilde yapabiliyorlar mı?
* Skor ölçümü çalışmasında belirlediğimiz ağırlıklı skor ile gerçek kullanımdaki skorlar birbiri ile ne kadar uyumlu?

Kod seviyesindeki ölçüm ve veri toplama pratikleri (instrumentation) özelliklerinin değerinin zaman içindeki trendi, yeni sürümlerin trende etkisi gibi soruların cevapları ile ilgili yazılım geliştirme ekiplerinizin daha net bilgiye sahip olmasını da sağlayacaktır.  


## Son Söz

Mühendislik süreçleri manasında yazılım yöneticileri olarak zaman içinde olgunlaşmış, faydası, kullanım alanları, maliyetleri özetle artıları ve eksileri hakkında net fikirler oluşturabildiğimiz oldukça geniş bir yelpazeden faydalanıyoruz. Tüm bu bildiklerimize ve uyguladıklarımıza ilave olarak, ürünlerimizin görünen değerini belirleyen nihai söz son kullanıcılarımızda oluşan değer algısı olduğunu unutmamalıyız. Son kullanıcılarımızın ürünlerimize biçtiği değerin ne olduğunu anlamak için yazılım yöneticisi sınırlarını aşarak ürün seviyesinde ve hatta kurumsal seviyede daha geniş bir perspektiften nasıl daha fazla "değer odaklı" olabileceğimiz, değer üretme manasında sürdürülebilirliği nasıl tesis edebileceğimizi, hangi yöntem ve araçlardan faydalanabileceğimizi ve bu çerçevedeki bireysel ve ekip yetkinliklerimizi nasıl geliştirebileceğimiz düşünmeli, sadece düşünerek yetinmeyerek bulunduğumuz kurumsal yapılara bu bakış açısını yansıtmak için önderlik de yapabilmeliyiz.     

### Kaynakça

<sup>1</sup> The 2019 Gartner Agile in the Enterprise survey was conducted via an online survey from 3 June through 25 June 2019 with 130 Gartner Research Circle Members — a Gartner-managed panel composed of IT and IT-business professionals.

***
{% include share_twitter_tr.html %}

***
