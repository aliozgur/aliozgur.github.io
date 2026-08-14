---
layout: post
title: "Digital Thread Nedir? Dijital Ürün Pasaportu ile İlişkisi Nedir?"
subtitle: "Bölüm 1: PLM, ERP, MES, IIoT ve QMS Arasında Kaybolan Ürün Bağlamını Yeniden Kurmak"
date: 2026-08-19
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - MES
  - PLM
  - Manufacturing
  - Digital Thread
  - DPP

---

*Digital Thread serisi — Bölüm 1*

Üretim teknolojileri dünyasında bazı kavramlar, neyi ifade ettiklerinden çok hangi ürün ailesiyle birlikte kullanıldıkları üzerinden tanınmaya başlıyor. "Digital Thread" da bunlardan biri. Kavramı çoğu zaman PLM, CAD, Digital Twin veya Model-Based Enterprise gibi başlıkların yanında görüyoruz; bu nedenle ilk bakışta bunun esas olarak ürün tasarımı ve PLM dünyasına ait bir yaklaşım olduğu izlenimi oluşabiliyor. Oysa Digital Thread'in anlamı bundan daha geniş ve özellikle üretim şirketlerinin sahip olduğu PLM, ERP, MES/MOM, QMS, IIoT, bakım, lojistik ve servis sistemleri birlikte düşünüldüğünde çok daha değerli bir çerçeve ortaya çıkıyor.

<!--end-of-excerpt-->

Digital Thread'i anlamanın en iyi yolu tanımla değil, üretim şirketlerinin günlük olarak yaşadığı temel bir problemle başlamak. Bir ürünün tasarım verisi PLM sisteminde, malzeme ve sipariş bilgileri ERP'de, nasıl üretileceğine ilişkin operasyon planı MES veya MOM sisteminde, makineden toplanan proses verileri IIoT altyapısında, ölçüm ve kalite sonuçları QMS veya metrology sistemlerinde, bakım ve saha bilgileri ise başka uygulamalarda bulunabiliyor. Her sistem kendi işini doğru yapıyor olsa bile, bu verilerin tamamını "aynı ürünün yaşam öyküsü" olarak ilişkilendirmek çoğu şirkette hâlâ kolay değil.

İşte Digital Thread, en temel anlamıyla, ürünün yaşam döngüsü boyunca oluşan bu dijital bilgilerin bağlamını kaybetmeden birbirine bağlanmasını sağlayan veri sürekliliğini ifade ediyor. NIST'in üretim için Digital Thread çalışmalarında da vurgu yalnızca veriyi sistemler arasında taşımaya değil; tasarım, üretim ve kalite faaliyetlerinde kullanılan ürün tanımlarının standartlara dayalı biçimde birbirine bağlanmasına, güvenilir biçimde izlenmesine ve yaşam döngüsü boyunca kullanılabilmesine yapılıyor. Bu nedenle Digital Thread'i tek bir yazılım ürünü, tek bir veri tabanı veya yeni bir entegrasyon protokolü olarak görmek kavramı gereğinden fazla daraltıyor.[1][2]

## Bir Ürünün Verisi Aslında Tek Bir Sistemde Yaşamıyor

Bir makine parçasının veya nihai ürünün yaşamına tasarım tarafından bakalım. CAD ortamında geometrisi ve toleransları oluşturulan parça, PLM içerisinde belirli bir ürün ağacının ve revizyonun parçası haline geliyor. ERP tarafında aynı ürünün malzeme kartı, tedarik verileri, maliyet bilgileri ve üretim veya satın alma siparişleri bulunuyor. MES tarafına geçtiğimizde ise hangi üretim emrinde, hangi rotada, hangi ekipman ve operatörlerle, hangi malzeme lotları kullanılarak üretildiğini görüyoruz.

Üretim başladığında veri daha da çeşitleniyor. PLC'lerden, makinelerden ve sensörlerden sıcaklık, basınç, hız, enerji tüketimi, çevrim süresi veya titreşim gibi proses verileri geliyor; kalite sistemleri ölçüm sonuçlarını ve uygunsuzlukları tutuyor; bakım sistemleri ekipmanın ve bazen ürünün servis geçmişini kaydediyor. Ürün fabrikadan çıktıktan sonra lojistik, kullanım, servis, yeniden kullanım, refurbish ve geri dönüşüm süreçleri de yeni bilgiler üretiyor.

Sorun bu verilerin olmaması değil; çoğu zaman verilerin birbirleriyle aynı bağlam içinde ilişkilendirilememesi. Tasarım sistemindeki "Part 4711 Rev C", ERP'deki bir malzeme numarası, MES'teki üretim emri, IIoT platformundaki bir makine tag'i, QMS'deki ölçüm raporu ve sahadaki seri numarası aynı fiziksel ürünün veya aynı ürün ailesinin farklı yüzlerini temsil ediyor olabilir. Digital Thread yaklaşımının amacı, bu farklı temsiller arasında makine tarafından anlaşılabilir, izlenebilir ve sürdürülebilir bağlantılar kurmaktır.

Bu yüzden Digital Thread için yalnızca "sistem entegrasyonu" demek de eksik kalır. İki sistemi API ile birbirine bağlamak veriyi A noktasından B noktasına taşır; Digital Thread ise bu verinin neye ait olduğunu, hangi yaşam döngüsü aşamasında üretildiğini, hangi versiyona veya fiziksel örneğe karşılık geldiğini ve başka hangi bilgilerle ilişkilendirilmesi gerektiğini de korumaya çalışır. Asıl değer, veri transferinin kendisinden çok ürün bağlamının sürekliliğindedir.

## As-Designed'dan As-Recycled'a Uzanan Bir Yaşam Öyküsü

Digital Thread'i somutlaştırmanın yararlı yollarından biri ürünün farklı yaşam döngüsü görünümlerini ayırmaktır. Tasarım dünyasında konuştuğumuz ürün ile üretim hattından gerçekten çıkan ürün aynı şey değildir; aynı şekilde fabrikadan çıkan ürün ile yıllar sonra bakım görmüş veya bazı parçaları değiştirilmiş ürün de artık bire bir aynı durumu temsil etmez.

"As-designed" ürün, mühendislik tarafından tasarlanan ideal veya hedef ürünü ifade eder. CAD modeli, engineering BOM, malzeme tanımları, teknik resimler, toleranslar, ürün gereksinimleri ve revizyon bilgileri bu görünümün parçalarıdır. ISO 10303 ailesi ve özellikle STEP AP242 gibi standartların Digital Thread tartışmalarında sıkça karşımıza çıkmasının nedeni de ürün tanımının sistemler arasında anlamını koruyarak aktarılmasına yönelik bu ihtiyacın çok eski ve temel bir problem olmasıdır.[3]

"As-planned" aşamasında artık "ürün nasıl tasarlandı?" sorusundan "bu ürün nasıl üretilecek?" sorusuna geçilir. Üretim rotası, operasyonlar, kaynak ihtiyaçları, iş merkezleri, gerekli personel yetkinlikleri, malzeme tüketimleri ve üretim talimatları bu aşamada belirginleşir. ERP ile MES/MOM entegrasyonunun ve ISA-95 gibi standartların devreye girdiği alan büyük ölçüde burasıdır.

"As-built" ise gerçekten üretilen fiziksel ürünün dijital kaydıdır. Hangi üretim emrinden çıktığı, kullanılan malzemelerin lot veya seri numaraları, hangi makinede ve hangi zaman aralığında işlendiği, kritik proses parametreleri, operatör bilgileri, rework veya deviation kayıtları ve üretim sırasında oluşan diğer olaylar bu görünümün parçası olabilir. Seri üretim yapan bir işletmede aynı ürün tasarımından binlerce fiziksel örnek üretilebildiği için, Digital Thread'in ürün tipi ile tekil ürün örneğini birbirinden ayırabilmesi kritik hale gelir.

"As-inspected" veya "as-measured" görünümünde kalite devreye girer. Tasarımın öngördüğü toleranslarla gerçekten ölçülen değerler arasındaki ilişki kurulabilir; ölçüm planları, CMM sonuçları, inspection raporları, uygunsuzluklar ve kabul kararları ürünün geçmişine eklenebilir. Quality Information Framework, yani QIF'in ISO 23952 olarak standardize edilmiş olması da tasarım ile kalite ölçüm süreçleri arasındaki dijital sürekliliğin neden ayrı bir standart alanı haline geldiğini gösterir.[4]

Yaşam döngüsü fabrikada sona ermez. "As-maintained" görünümü, ürüne veya varlığa yapılan bakım faaliyetlerini, değiştirilen parçaları, firmware veya konfigürasyon değişikliklerini ve servis olaylarını kapsayabilir; "as-used" görünümü ise çalışma koşulları, kullanım süresi veya performans gibi operasyonel bilgileri ekleyebilir. Döngüsel ekonomi perspektifinden baktığımızda "as-reused", "as-refurbished" ve "as-recycled" gibi durumlar da önem kazanır. Böylece ürünün dijital geçmişi, tasarımdan kullanım sonuna kadar uzanan doğrusal olmayan bir yaşam öyküsüne dönüşür.

Digital Thread tam olarak bu görünümleri birbirine bağlayan sürekliliktir. Ama burada önemli bir ayrım yapmak gerekir: Digital Thread, bütün bu verilerin mutlaka tek bir merkezi veri tabanına kopyalanması anlamına gelmez. Veriler kaynak sistemlerinde kalabilir; önemli olan kimliklerin, ilişkilerin, semantiğin, erişim kurallarının ve gerektiğinde veriyi bulma yollarının sürdürülebilir biçimde tanımlanmasıdır.

## Digital Thread Bir PLM Özelliği midir?

Kavramın PLM üreticileri tarafından çok sık kullanılması nedeniyle bu sorunun sorulması son derece doğal. PLM gerçekten de Digital Thread açısından önemli bir başlangıç noktasıdır; çünkü ürün kimliği, ürün ağacı, revizyon yönetimi, mühendislik değişiklikleri ve ürün tanımının önemli bölümü çoğu üretici şirkette PLM tarafından yönetilir. Ancak bundan Digital Thread'in PLM'nin başka bir adı olduğu sonucu çıkmaz.

Bir PLM sistemi "as-designed" dünyasını son derece başarılı yönetebilir, fakat ürünün hangi vardiyada, hangi gerçek proses değerleriyle, hangi malzeme lotlarından üretildiğini MES ve üretim altyapısı bilir. ERP siparişi, maliyeti ve ticari malzeme bağlamını bilir; QMS gerçek kalite kayıtlarını tutar; IIoT katmanı makine ve proses sinyallerine erişir; WMS malzeme hareketlerini, servis sistemi ise saha geçmişini bilir. Ürün yaşam döngüsünün tek bir sistemin doğal sınırlarını aştığı noktada Digital Thread de ürün kategorisinden çok bir mimari yaklaşım haline gelir.

Bu nedenle geleceğin Digital Thread mimarilerinin vendor bağımsız düşünülmesi gerektiğini düşünüyorum. Bir üreticinin Dassault Systèmes veya başka bir sağlayıcının PLM sistemini, SAP ERP'yi, trex MES'i, PTC veya farklı bir IIoT platformunu aynı anda kullanması olağan bir durumdur. Digital Thread'in görevi üreticiyi tek bir yazılım üreticisinin bütün portföyünü satın almaya zorlamak değil; farklı sistemlerde bulunan ürün bilgisinin ortak bir yaşam döngüsü bağlamında çalışmasını sağlayabilmektir.

Buradaki anahtar kelime "interoperability"dir, fakat yalnızca teknik interoperability yeterli değildir. İki sistem JSON alışverişi yapabiliyor olabilir ama "material", "product", "asset", "batch", "operation" veya "quality characteristic" kavramlarından farklı şeyler anlıyorsa gerçek bir semantik bütünlük kurulmuş sayılmaz. Bu nedenle Digital Thread konusu API tasarımından kimlik yönetimine, veri modellerinden ontolojilere, event modellerinden erişim kontrolüne kadar çok katmanlıdır.

## Digital Thread ile Digital Twin Aynı Şey Değil

Digital Thread ile Digital Twin kavramları da sıklıkla birbirinin yerine kullanılıyor. Aralarında güçlü bir ilişki var, ancak aynı şeyi ifade etmiyorlar.

Digital Twin belirli bir fiziksel varlığın, ürünün, ekipmanın, sistemin veya prosesin dijital temsiline odaklanır. Bu temsil yalnızca statik özelliklerden ibaret olmak zorunda değildir; varlığın mevcut durumu, geçmiş verileri, davranış modelleri, simülasyon sonuçları veya geleceğe yönelik tahminleri de twin'in parçası olabilir. Digital Thread ise bu twin'i besleyen ve twin ile diğer yaşam döngüsü bilgileri arasında ilişki kuran süreklilik olarak düşünülebilir.

Bu ilişki 2026 itibarıyla standartlaştırma açısından da daha görünür hale gelmiş durumda. ISO 23247 ailesi üretim için Digital Twin çerçevesini ele alırken, Haziran 2026'da yayımlanan ISO 23247-5:2026 standardı doğrudan "Digital thread for digital twin" başlığını taşıyor.[5] Bunun kendisi bile Digital Thread'in Digital Twin ile aynı kavram olmadığını, fakat Digital Twin mimarisinin yaşam döngüsü verileriyle bağlanması açısından ayrı bir problem alanı oluşturduğunu açıkça gösteriyor.

Pratikte bir Digital Twin'in iyi çalışması için farklı kaynaklardan gelen güvenilir verilere ihtiyacı vardır. Tasarım parametreleri PLM'den, gerçek konfigürasyon MES veya asset management sisteminden, canlı veya tarihsel proses verileri IIoT altyapısından, kalite kayıtları QMS'den gelebilir. Digital Thread bu kaynakların aynı varlık bağlamında bir araya getirilebilmesini sağlayan omurga rolünü üstlenebilir.

## Peki Digital Product Passport Bu Resmin Neresinde?

Digital Product Passport, yani DPP, Digital Thread tartışmasını bugün yeniden önemli hale getiren en güçlü gelişmelerden biri. Avrupa Birliği'nin Ecodesign for Sustainable Products Regulation — ESPR, Regulation (EU) 2024/1781 — çerçevesinde DPP; ürünlere ilişkin sürdürülebilirlik, döngüsellik ve mevzuat uyumu bilgilerinin dijital olarak erişilebilir hale gelmesini sağlayan temel mekanizmalardan biri olarak tanımlanıyor.[6] Avrupa Komisyonu DPP'yi ürünler, bileşenler ve malzemeler için bir dijital kimlik kartı olarak açıklıyor; hangi verilerin zorunlu olacağı ise ürün grubuna ilişkin mevzuat ve yetki devrine dayanan tasarruflar ile belirleniyor.[7]

Burada Digital Thread ile DPP arasında çok önemli fakat sıklıkla karıştırılan bir ayrım var. **Digital Product Passport, Digital Thread'in kendisi değildir.** DPP, bir ürünle ilgili belirlenmiş verilerin belirli paydaşlar tarafından bulunabilir, erişilebilir ve makine tarafından işlenebilir biçimde sunulmasına yönelik bir mekanizmadır; Digital Thread ise bu verilerin ürünün yaşam döngüsü boyunca oluştuğu kaynaklar, olaylar ve bağlamlar arasındaki sürekliliği kurar.

Bunu başka bir şekilde ifade edersek, Digital Thread üreticinin iç ve dış veri ekosistemindeki "ürün hikâyesini" kurarken DPP bu hikâyenin belirli amaçlar için dışarı açılan, kuralları tanımlanmış bir görünümü olabilir. DPP'ye ürünün malzeme bileşimi, onarım bilgisi, geri dönüştürülebilirliği, uygunluk bilgileri veya belirli sürdürülebilirlik verileri konulacaksa, bu bilgilerin önemli bir bölümü zaten PLM, ERP, MES, QMS, tedarik zinciri veya servis sistemlerinde oluşuyor olacaktır. Sorun bu bilgiyi bir kere üretmekten çok, ürünle doğru şekilde ilişkilendirmek, güncel tutmak, kaynağını bilmek ve gerektiğinde doğrulayabilmektir.

Bu nedenle basit bir DPP pilotu ile endüstriyel ölçekte çalışan bir DPP altyapısı arasında ciddi fark vardır. Bir pilot projede farklı sistemlerden verileri elle alıp bir JSON dosyasına veya merkezi veri tabanına koyabilirsiniz. Milyonlarca ürün, çok sayıda tedarikçi, seri veya lot bazlı izlenebilirlik, değişen ürün verileri, farklı erişim seviyeleri ve uzun ürün yaşam süreleri söz konusu olduğunda ise kimlik, menşei, veri sahipliği, erişim kontrolü ve yaşam döngüsü olayları temel mimari problemler haline gelir.

CIRPASS tarafından geliştirilen DPP sistem mimarisi çalışmaları da bu problemi ürün merkezli ve dağıtık bir bilgi sistemi perspektifinden ele alıyor. Çalışmada fiziksel bir ürün üzerindeki tanımlayıcıdan hareketle ürün hakkındaki bilginin nasıl bulunacağı; verinin insan veya makine tüketimine nasıl sunulacağı; hangi bilginin açık, hangisinin erişim kontrollü olacağı; verinin merkezi mi yoksa dağıtık mı yönetileceği ve ürün yaşam döngüsü boyunca hangi bilgilerin korunacağı gibi sorular doğrudan mimarinin konusu haline geliyor.[8]

## DPP Oluşturmak İçin Digital Thread Şart mı?

Bu soruya teorik ve pratik olarak iki farklı cevap vermek gerekir. Teorik olarak bir üreticinin DPP oluşturabilmesi için "Digital Thread" adı verilen ayrı bir platform satın alması şart değildir. DPP için gerekli bilgiler farklı sistemlerden alınabilir, dönüştürülebilir ve ilgili DPP altyapısına sunulabilir.

Pratikte ise ölçek büyüdükçe Digital Thread yaklaşımına duyulan ihtiyaç belirginleşir. Çünkü DPP'yi yalnızca bir QR kodun arkasındaki web sayfası olarak değil, yaşayan ürün verisinin güvenilir bir dijital görünümü olarak ele aldığımızda üretim şirketinin ürün kimliği ile PLM, ERP, MES, kalite, tedarik zinciri, IIoT ve servis kayıtları arasında kalıcı ilişkiler kurması gerekir. Bu ilişkiler yoksa DPP üretimi kısa sürede bir veri toplama ve mapping projesine dönüşür.

Digital Thread burada DPP için bir "source of context" sağlayabilir. Ürünün hangi mühendislik revizyonundan üretildiğini, hangi komponentlerden oluştuğunu, belirli malzemelerin hangi tedarikçi veya lotlardan geldiğini, hangi üretim ve kalite süreçlerinden geçtiğini ve sonradan hangi değişikliklerin yapıldığını bilen bir thread varsa DPP bunun belirli bölümlerini kurallara uygun biçimde yayımlayabilir. DPP için gerekli olmayan ticari sırlar veya hassas üretim verileri thread içerisinde kalırken, DPP yalnızca yetkilendirilmiş görünümü sunabilir.

Bu nedenle "DPP için Digital Thread zorunludur" demek teknik olarak fazla iddialı olur; ancak "kurumsal ölçekte sürdürülebilir DPP, Digital Thread problemini görünür hale getirir" demek çok daha doğru olur. Avrupa'daki DPP düzenlemeleri üreticileri yeni veri üretmeye zorladığı kadar, zaten üretmekte oldukları veriyi ürün yaşam döngüsü bağlamında organize etmeye de zorlayacak.

## Kimlik Olmadan Thread Olmaz

Digital Thread konuşurken entegrasyon teknolojilerine çok hızlı atlıyoruz, fakat çoğu mimarinin en zor problemi çok daha temel: farklı sistemlerdeki kayıtların aynı şeyi temsil ettiğini nasıl bileceğiz? Eğer PLM'deki product ID ile ERP'deki material ID, MES'teki product code, sahadaki serial number ve DPP'deki unique product identifier arasındaki ilişki güvenilir biçimde kurulamazsa elimizde çok sayıda veri vardır ama gerçek anlamda bir thread yoktur.

Bu nedenle kimlik yönetimi Digital Thread'in omurgalarından biridir. Bir ürün tipi ile tekil fiziksel ürün örneğinin, bir batch ile onu oluşturan ürünlerin, bir komponent ile üst ürünün ve bir asset ile o asset'e ait Digital Twin'in ilişkileri açıkça modellenmelidir. Bazı sektörlerde GTIN, GLN, SSCC gibi GS1 tanımlayıcıları; bazı endüstriyel yapılarda URI tabanlı varlık kimlikleri; bazı iç sistemlerde UUID veya kurumsal master data kimlikleri bu problemin farklı parçalarını çözebilir.

GS1 EPCIS'in tedarik zincirinde ürün ve varlıkların "ne, ne zaman, nerede, neden ve nasıl" sorularına cevap veren event bilgisini paylaşmak için geliştirilmiş olması bu açıdan önemlidir. EPCIS 2.0'ın sensör verisi, sertifikasyon bilgisi, JSON/JSON-LD ve REST tabanlı erişim gibi kabiliyetler içermesi, ürün izlenebilirliği ile daha geniş Digital Thread mimarileri arasında doğal bir kesişim yaratıyor.[9] GS1 Digital Link ise GTIN, seri veya batch gibi tanımlayıcıları web üzerindeki bilgilere bağlayabilen standart bir URI yaklaşımı sunarak fiziksel ürün ile dijital bilgi arasındaki bağlantıda önemli bir rol oynayabiliyor.[10]

## Digital Thread'in Gerçek Değeri Nerede?

Digital Thread'in değeri yalnızca "bütün veriyi tek ekranda göstermek" değildir. İyi tasarlanmış bir thread, tasarım kararı ile gerçek üretim sonucunu, üretim sonucu ile kaliteyi, kalite ile saha performansını ve bütün bunlarla ürünün sürdürülebilirlik veya uygunluk bilgisini birbirine bağlayabilir. Böylece bir uygunsuzluğun hangi tasarım revizyonları ve üretim lotlarını etkilediği, bir komponent değişikliğinin hangi ürünlerde kullanıldığı veya belirli proses koşullarının sahadaki performansla ilişkisi çok daha hızlı analiz edilebilir.

Bu yapı analitik ve yapay zekâ açısından da önemli bir fark yaratır. Günümüzde üretimde AI projelerinin önemli sorunlarından biri veri eksikliğinden ziyade bağlam eksikliğidir. Bir modele milyonlarca sensör verisi verebilirsiniz, fakat bu sinyallerin hangi ürün, operasyon, malzeme, kalite sonucu ve bakım olayıyla ilişkili olduğu bilinmiyorsa modelin iş değeri sınırlı kalır. Digital Thread bu bağlamı oluşturarak AI'ın yalnızca "veri üzerinde" değil, ürün yaşam döngüsünün ilişkileri üzerinde çalışabilmesini sağlar.

Aynı durum kök neden analizi için de geçerlidir. Kalite problemi yaşayan bir seri numarasından başlayıp kullanılan malzeme lotuna, üretildiği ekipmana, ilgili proses parametrelerine, ürün revizyonuna ve aynı koşullarda üretilen diğer ürünlere gidebiliyorsak bu yalnızca raporlama değildir; ürünün dijital geçmişi üzerinde gezinmektir. Böyle bir altyapı analitik, AI, izlenebililirlik ve uyum uygulamalarının ortak veri temeli haline gelebilir.

## Merkezi Bir "Mega Database" Kurmak Zorunda Değiliz

Digital Thread deyince bütün sistemlerin verisini kopyaladığımız dev bir merkezi veri gölü hayal etmek kolaydır. Bazı kullanım senaryolarında merkezi veri toplama yararlı olsa da, thread'in temel prensibi verinin tek yerde tutulması değil, veri arasındaki ilişkinin korunmasıdır. Özellikle farklı şirketlere ve tedarik zinciri katmanlarına yayılan bir yaşam döngüsünde bütün verinin tek bir organizasyonun kontrolündeki merkezi sisteme kopyalanması teknik, hukuki ve ticari olarak her zaman mümkün değildir.

Bunun yerine federated veya distributed yaklaşımlar daha doğal olabilir. Digital Thread platformu bir ürünün hangi bilgisine hangi kaynaktan ulaşılacağını, bu bilginin hangi semantiğe sahip olduğunu, kim tarafından üretildiğini ve kimlerin erişebileceğini bilebilir; gerektiğinde kaynağa bağlanarak veriyi çözümleyebilir. Bu yaklaşım veri sahipliğini korurken şirketler ve yazılım üreticileri arasında daha açık bir ekosistem kurulmasını kolaylaştırabilir.

DPP mimarisinin Avrupa'daki gelişimi de merkezi bir "bütün ürün verisi veri tabanı" düşüncesinden daha nüanslıdır. CIRPASS çalışmaları dağıtık ve merkezi olmayan yaklaşımları tartışırken, ESPR kapsamında ürün pasaportlarının ekonomik operatörler veya yetkili hizmet sağlayıcılar tarafından yönetilmesi ve ürün bilgisine tanımlayıcılar üzerinden erişilmesi gibi prensipler öne çıkıyor.[6][8] Avrupa Komisyonu'nun DPP Registry yaklaşımı da pasaportların bütün içeriğini tek yerde toplamak yerine DPP'lerin indekslenmesi ve bulunabilmesi problemine ayrı bir sistem katmanı olarak yaklaşıyor.[11]

## DPP, Digital Thread İçin Güçlü Bir Business Case Yaratıyor

Digital Thread yeni bir fikir değil. NIST'in üretim alanındaki çalışmaları, STEP gibi ürün tanımı standartları, ISA-95'in enterprise ile üretim operasyonları arasındaki modeli veya kalite alanındaki QIF gibi çalışmalar, yıllardır aynı büyük problemin farklı parçalarına çözüm arıyor. Buna rağmen pek çok şirkette Digital Thread, yatırım getirisi kolay anlatılamayan geniş bir dijital dönüşüm vizyonu olarak kalabiliyordu.

DPP bu durumu değiştirebilir. Çünkü sürdürülebilirlik ve döngüsellik verisinin ürün bazında erişilebilir hale gelmesi, şirketlerin yalnızca yeni bir web servisi geliştirmesini değil, ürün verisinin kaynağını ve yaşam döngüsü bağlamını sorgulamasını gerektiriyor. "Bu ürünün içindeki malzeme nereden geldi?", "hangi versiyon gerçekten üretildi?", "ürüne daha sonra ne oldu?", "bu bilginin sahibi kim?", "hangi bilgi tüketiciye, hangisi yetkili kuruma, hangisi tedarik zinciri partnerine gösterilebilir?" gibi sorular Digital Thread'in yıllardır çözmeye çalıştığı sorularla doğrudan kesişiyor.

Bu yüzden DPP'yi Digital Thread'in rakibi veya alternatif adı olarak değil, Digital Thread'in değerini somutlaştıran önemli kullanım senaryolarından biri olarak görüyorum. Aynı thread üzerinde DPP üretilebilir, traceability yapılabilir, kök neden analizi gerçekleştirilebilir, üretim ve saha performansı karşılaştırılabilir, sürdürülebilirlik hesapları beslenebilir ve AI tabanlı analizler çalıştırılabilir. DPP bu uygulamalardan biridir; Digital Thread ise bunların ortak bağlam katmanı olabilir.

## Bir Sonraki Adım: Hangi Standartları Kullanacağız?

Buraya kadar Digital Thread'i tek bir teknoloji veya ürün olarak değil, yaşam döngüsü boyunca ürün bilgisini bağlayan bir mimari yaklaşım olarak ele aldık. Fakat bu tanım hemen daha zor bir soruyu doğuruyor: PLM, ERP, MES, QMS, IIoT, Digital Twin ve DPP dünyalarını gerçekten birbirine bağlamak istiyorsak hangi veri modellerini ve standartları kullanacağız?

Bu sorunun kısa cevabı şu: Digital Thread için bütün problemi çözen tek bir standart yok. Bunun yerine ürün tanımında STEP/AP242, üretim operasyonlarında ISA-95/IEC 62264, kalitede QIF, endüstriyel semantikte OPC UA Information Models, Digital Twin tarafında ISO 23247 ve Asset Administration Shell, tedarik zinciri izlenebilirliğinde EPCIS, kimlik ve fiziksel-dijital bağlantıda GS1 Digital Link ve DPP tarafında yeni CEN-CENELEC standartları gibi birbirini tamamlayan bir standartlar ekosistemi var.

Serinin ikinci bölümünde tam olarak bu ekosistemi inceleyeceğiz. Asıl soru "Digital Thread standardı hangisi?" değil; mevcut standartları kullanarak vendor bağımsız, ürün merkezli ve zaman içinde sürdürülebilir bir Digital Thread mimarisinin nasıl kurulabileceğidir.

---

## Kaynaklar

1. **[NIST — Digital Thread for Manufacturing](https://www.nist.gov/programs-projects/digital-thread-manufacturing).** National Institute of Standards and Technology.

2. **[Holterman, E. et al. — Roadmap to Strengthen the U.S. Manufacturing Supply Chain via Digital Thread Technology](https://doi.org/10.6028/NIST.GCR.24-057).** NIST GCR 24-057, 2024. ([NIST yayın sayfası](https://www.nist.gov/publications/roadmap-strengthen-us-manufacturing-supply-chain-digital-thread-technology))

3. **[ISO 10303-242:2025 — Industrial automation systems and integration — Product data representation and exchange — Part 242: Application protocol: Managed model-based 3D engineering](https://www.iso.org/standard/84300.html).** International Organization for Standardization.

4. **[ISO 23952:2020 — Automation systems and integration — Quality information framework (QIF) — An integrated model for manufacturing quality information](https://www.iso.org/standard/77461.html).** International Organization for Standardization.

5. **[ISO 23247-5:2026 — Automation systems and integration — Digital twin framework for manufacturing — Part 5: Digital thread for digital twin](https://www.iso.org/standard/87425.html).** International Organization for Standardization.

6. **[Regulation (EU) 2024/1781 — Ecodesign for Sustainable Products Regulation (ESPR)](https://eur-lex.europa.eu/eli/reg/2024/1781/oj/eng).** EUR-Lex, European Union.

7. **[European Commission — Digital Product Passport (DPP)](https://single-market-economy.ec.europa.eu/single-market/digital-product-passport_en).** Directorate-General for Internal Market, Industry, Entrepreneurship and SMEs.

8. **[CIRPASS — D3.2 DPP System Architecture, Version 1.9](https://cirpassproject.eu/wp-content/uploads/2024/06/D3.2v1.9.pdf).** May 2024.

9. **[GS1 — EPCIS & CBV](https://www.gs1.org/standards/epcis).** GS1 Standards.

10. **[GS1 — GS1 Digital Link Standard](https://www.gs1.org/standards/gs1-digital-link).** GS1 Standards.

11. **[European Commission — The DPP Registry](https://single-market-economy.ec.europa.eu/single-market/digital-product-passport/dpp-registry_en).** Directorate-General for Internal Market, Industry, Entrepreneurship and SMEs.

***
{% include share_twitter_tr.html %}
***
