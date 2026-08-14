---
layout: post
title: "Digital Thread Standartlarını Keşfetmek"
subtitle: "Digital Thread Serisi — Bölüm 2: STEP, ISA-95, QIF, OPC UA, AAS, EPCIS ve DPP Standartları Nasıl Bir Arada Çalışır?"
date: 2026-08-20
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

*Digital Thread serisi — Bölüm 2*

Serinin ilk bölümünde Digital Thread'i ürün yaşam döngüsü boyunca oluşan bilgilerin bağlamını kaybetmeden birbirine bağlanmasını sağlayan dijital süreklilik olarak ele aldık. PLM'deki tasarım verisinden ERP'deki malzeme ve siparişlere, MES/MOM sistemindeki üretim kayıtlarından IIoT verilerine, kalite sonuçlarından servis geçmişine ve Digital Product Passport'a kadar uzanan bu yapı, tek bir sistemin doğal sınırlarını aşıyor. Bu noktada teknik olarak kaçınılmaz bir soru ortaya çıkıyor: Böyle bir Digital Thread oluşturmak istiyorsak hangi standardı kullanacağız?

<!--end-of-excerpt-->

Bu sorunun rahatlatıcı ama aynı zamanda işleri biraz zorlaştıran cevabı şu: **Digital Thread için bütün yaşam döngüsünü tek başına tanımlayan evrensel bir standart yok.** Bunun yerine farklı problem alanlarını çözmek için yıllar içinde gelişmiş STEP, ISA-95, QIF, OPC UA, AutomationML, Asset Administration Shell, EPCIS ve benzeri standartlar var; 2026 itibarıyla bunlara doğrudan Digital Thread'i ele alan ISO 23247-5 ve Digital Product Passport sistem altyapısını tanımlayan yeni Avrupa standartları da eklenmiş durumda.[1][2]

Bu nedenle Digital Thread'i "hangi standardı seçmeliyiz?" sorusuyla değil, "hangi katmanda hangi standardın güçlü olduğu ve bu standartların birbirleriyle nasıl ilişkilendirileceği" sorusuyla incelemek daha doğru. Bir başka ifadeyle ihtiyacımız olan şey tek bir mega standarttan çok, birlikte çalışan bir **Digital Thread standartları yığını**.

## Önce Problemi Katmanlara Ayıralım

Bir ürünün yaşam döngüsünü düşündüğümüzde farklı aşamalarda farklı veri öbekleri ile karşılaşırız. Tasarım aşamasında geometrinin, ürün yapısının ve teknik tanımın paylaşılması gerekirken üretim aşamasında operasyon, ekipman, personel, malzeme ve üretim performansı kavramları öne çıkar. Kalite aşamasında ölçüm karakteristikleri ve kontrol sonuçları önemlidir; tedarik zincirinde ise ürünün nerede olduğu, hangi olaylardan geçtiği, hangi lot veya seriyle ilişkili olduğu ve gözetim zinciri (chain-of-custody) bilgisi belirleyici hale gelir.

Dolayısıyla bir Digital Thread platformunun her şeyi kendi özel veri modeliyle yeniden icat etmeye çalışması tehlikelidir. Bunun yerine endüstrinin zaten ortak dil oluşturduğu alanlarda ilgili standardın semantiğini korumak, standardın çözmediği alanlarda ise açık ve genişletilebilir modeller kullanmak daha sürdürülebilir bir yaklaşımdır. Böyle bir mimari tedarikçi bağımsızlığını da güçlendirir; çünkü entegrasyonlar yalnızca bir üreticinin kendine özgü (çoğunlukla da erişime kapalı) nesne modeline göre tasarlanmaz.

Bu yazıda standartları kabaca yedi katmanda ele alacağım: ürün ve mühendislik tanımı, üretim operasyonları, kalite, makine ve IIoT semantiği, Digital Twin ve asset semantiği, kimlik ve tedarik zinciri izlenebilirliği ve son olarak Digital Product Passport. Bu katmanlar kesin sınırlar değildir; birçok standart birden fazla katmana dokunur. Yine de böyle bir ayrım, Digital Thread mimarisini düşünmek için yararlı bir zihinsel model sağlar.

## 1. Ürün Tanımı ve Mühendislik: ISO 10303 STEP ve AP242

Digital Thread'in en eski ve en olgun problemlerinden biri mühendislik bilgisinin sistemler arasında kaybolmadan aktarılmasıdır. CAD dosyasını bir sistemden başka bir sisteme açabilmek başlangıçta yeterli gibi görünse de, modern üretimde yalnızca geometrinin değil ürün yapısının, Product Manufacturing Information — PMI bilgisinin, toleransların, konfigürasyonun ve model tabanlı mühendislik bağlamının da taşınması gerekir.

ISO 10303 ailesi, yaygın adıyla STEP, bu alandaki en önemli standart ailelerinden biridir. Özellikle **ISO 10303-242:2025, AP242 Edition 4**, "Managed model-based 3D engineering" uygulama protokolü olarak model tabanlı ürün mühendisliği verisinin birlikte çalışabilirliğine odaklanıyor.[3] Digital Thread açısından AP242'nin değeri yalnızca bir CAD değişim formatı olması değil; "as-designed" ürün tanımının farklı mühendislik ve üretim süreçlerinde makine tarafından kullanılabilir biçimde korunmasına yardımcı olmasıdır.

NIST'in Digital Thread for Manufacturing programı da STEP/AP242 çalışmalarını Digital Thread altyapısının temel parçaları arasında ele alıyor. NIST özellikle semantic PMI, GUID kullanımı, model tabanlı ürün tanımı ve uygunluk testleri gibi başlıklarda STEP ekosisteminin geliştirilmesini destekliyor; bu da Digital Thread'in yalnızca entegrasyon API'lerinden değil, standardın doğru ve tutarlı uygulanmasından da etkilendiğini gösteriyor.[4]

Buradan önemli bir tasarım ilkesi çıkarabiliriz. Digital Thread platformu CAD geometrisini kendi özel JSON formatına çevirip orijinal ürün semantiğini kaybetmek yerine, mümkün olduğunca kaynak standardın kimliğini ve semantik yapısını korumalıdır. Thread içinde "bu ürün şu AP242 product definition ve şu engineering revision ile ilişkilidir" diyebilmek, ham dosyayı başka yere kopyalamaktan daha değerlidir.

## 2. Üretim Operasyonları: ISA-95 / IEC 62264 ve B2MML

Ürün tanımı üretimin ne üretmesi gerektiğini anlatır, ancak fabrikanın günlük operasyonlarını yönetmek için başka bir semantik katmana ihtiyaç vardır. Kurumsal sistemler (ERP, MRP vb) ile MES (Manufaturing Execution Systems) katmanı arasındaki malzeme, üretim emri, ekipman, personel, proses segmenti ve performans gibi kavramların ortak bir modele sahip olması burada kritik hale gelir.

**ISA-95**, uluslararası tarafta **IEC 62264** ailesiyle uyumlu biçimde, işletme fonksiyonları ile üretim kontrol / üretim operasyon fonksiyonları arasındaki entegrasyon için referans modeller ve bilgi yapıları sunar. ISA, standardın amacını üretim kontrol fonksiyonları ile iş fonksiyonları arasındaki bilgi alışverişi için soyut bir model oluşturmak ve entegrasyon riskini, maliyetini ve hata oranını azaltmak olarak tanımlıyor.[5] Özellikle ISA-95 Part 2'deki nesne modelleri ve Part 3'teki MES aktivite modelleri Digital Thread'in "as-planned" ve "as-executed/as-built" tarafında önemli bir semantik temel sağlar.

Bu standardın pratik dünyadaki tanınmış uygulamalarından biri **B2MML — Business To Manufacturing Markup Language**. MESA International tarafından geliştirilen B2MML, ISA-95 veri modellerinin XML tabanlı uygulaması olarak uzun yıllardır ERP–MES ve benzeri entegrasyonlarda kullanılıyor; Version 7, ISA-95 modellerini uygulayan geniş bir şema seti sunuyor.[6] Günümüzde her yeni entegrasyonu XML ile yapmak zorunda değiliz, fakat B2MML'in esas değeri XML seçimi değil, üzerinde uzlaşılmış üretim kavramlarını somut veri şemalarına dönüştürmüş olmasıdır.

Modern bir Digital Thread platformu ISA-95'in semantiğini kullanırken taşıma formatını REST/JSON, event streaming veya başka mekanizmalarla gerçekleştirebilir. Önemli olan "ProductionOrder", "MaterialLot", "Equipment", "PersonnelClass" veya "OperationsPerformance" gibi kavramların entegrasyonun her noktasında yeniden ve farklı anlamlarla icat edilmemesidir. Standardı protokol ile karıştırmadığımız sürece ISA-95 bugün de Digital Thread için son derece yararlı bir ortak dil sağlar.

Bu alan MES/MOM üreticileri açısından ayrıca önemlidir. PLM'den gelen ürün ve proses tanımı ile ERP'den gelen ticari ve planlama bilgilerini fabrikanın gerçek operasyonlarıyla ilişkilendiren katman çoğu durumda MES/MOM'dur. Dolayısıyla Digital Thread'in "as-designed" dünyasından "as-built" dünyasına geçtiği kritik köprülerden biri burada oluşur.

## 3. Kalite ve Metroloji: QIF / ISO 23952

Ürün gerçekten üretildikten sonra tasarım hedefi ile fiziksel sonucun karşılaştırılması gerekir. Tolerans, ölçüm planı, ölçüm sonucu, denetim raporu ve uygunsuzluk bilgisi ayrı sistemlerde kaldığında Digital Thread'in önemli bir bölümü eksik olur; çünkü "ne tasarlandı?" ile "gerçekte ne üretildi?" arasındaki kanıt zinciri kurulamaz.

**Quality Information Framework — QIF**, bu problem için geliştirilmiş CAD-agnostic, XML tabanlı bir bilgi modelidir ve **ISO 23952:2020** olarak uluslararası standarda dönüşmüştür. ISO standardı QIF'i üretim kalite kayıtları için bütünleşik bir model olarak tanımlar; DMSC ise standardın ürün tanımından denetim planlamasına, yürütme, analiz ve raporlama aşamalarına kadar kalite bilgisini ilişkilendirmeyi amaçladığını belirtir.[7][8]

Digital Thread perspektifinden QIF'in önemi, kalite verisini yalnızca "rapor dosyası" olarak saklamaktan çıkarmasıdır. Belirli bir ölçüm sonucunu ürün tanımındaki belirli bir karakteristik veya özellik ile ilişkilendirebiliyorsak, tasarım ve kalite arasında bir bağlantı oluşur. Bu bağlantı daha sonra kök-neden analizi, tedarikçi kalite, proses yeterliliği ve AI tabanlı kalite analizleri için kullanılabilir.

Bu nedenle Digital Thread mimarisinde QIF benzeri standartların yeri yalnızca kalite departmanı değildir. Ölçüm sonucunun ürün revizyonu, kullanılan ekipman, üretim emri, proses parametreleri ve malzeme lotlarıyla ilişkilendirilebilmesi, "as-inspected" görünümünü bütün yaşam döngüsünün parçası haline getirir.

## 4. Otomasyon Mühendisliği: AutomationML / IEC 62714

Üretim şirketlerinde ürünün kendisi kadar, o ürünü üreten üretim sisteminin mühendislik verisi de dağınıktır. Mekanik tasarım, elektrik projeleri, PLC yazılımı, robot programları, ağ topolojisi ve otomasyon ekipmanlarının tanımları farklı mühendislik araçlarında tutulabilir. Digital Thread'i yalnızca ürün thread'i olarak değil, ürün ile onu üreten üretim sistemi arasındaki ilişkiyi de içerecek biçimde ele aldığımızda otomasyon mühendislik verisi önemli hale gelir.

**AutomationML**, **IEC 62714** serisinde standardize edilmiş açık, nötr ve XML tabanlı bir mühendislik veri değişimi yaklaşımıdır. IEC, AutomationML'in heterojen mühendislik araçlarının kullanıldığı ortamlarda veri değişimini desteklemek amacıyla geliştirildiğini belirtirken AutomationML Association standardı şirketler ve disiplinler arası üsretim sistemi planlama bilgisinin aktarımı için konumlandırıyor.[9][10]

AutomationML'in Digital Thread için değeri, örneğin bir üretim hattındaki ekipman topolojisi veya engineering object ile MES'teki ekipman, OPC UA'daki asset ve Digital Twin'deki varlık arasında ilişki kurabilme potansiyelidir. Bu, her projenin AutomationML kullanması gerektiği anlamına gelmez; ancak üretim sistemlerinin mühendislik verisi Digital Thread kapsamına alınacaksa IEC 62714 ailesini görmezden gelmek doğru olmaz.

Burada tekrar aynı ilkeye dönüyoruz: Digital Thread platformu bütün kaynak sistemlerin yerine geçmek zorunda değildir. AutomationML dosyalarının veya engineering repository'nin sahibi başka bir sistem olabilir; thread, gerekli kimlik ve ilişkileri koruyarak bu bilgiyi ürün ve üretim bağlamına bağlayabilir.

## 5. Makine, Asset ve IIoT Semantiği: OPC UA ve Ek Spesifikasyonlar

Digital Thread'in üretim sahasına indiği noktada protokoller hızla gündeme gelir. OPC UA, MQTT, Sparkplug B, REST ve message broker teknolojileri çoğu tartışmada aynı listede yan yana yazılır; fakat bunların çözmeye çalıştığı problemler aynı değildir. Özellikle Digital Thread açısından **transport** ile **semantics** arasındaki ayrım kritik önem taşır.

MQTT son derece verimli bir pub/sub mesajlaşma protokolü olabilir, fakat bir topic altında yayınlanan `42.7` değerinin ne anlama geldiğini tek başına söylemez. OPC UA'nın Digital Thread açısından güçlü yanı ise yalnızca veri alışverişi değil, object-based Information Models ve standartlaştırılabilir semantik yapılar sunmasıdır. OPC Foundation, OPC UA altyapısının field-level cihazlardan kurumsal seviyesine kadar ölçeklenebildiğini ve bilgi modeli katmanının iletişim, bilgiye erişim, keşfedilebilirlik ve güvenlik altyapısının üzerinde çalıştığını açıkça tanımlıyor.[11]

**OPC UA Ek Spesifikasyonlar** burada özellikle önemlidir. Ek Spesifikasyonlar belirli endüstri, cihaz veya kullanım senaryoları için OPC UA üzerinde alana özgü bilgi modelleri tanımlayabilir; bunun makineler tarafından okunabilen temsili UANodeSet dosyalarıyla yayımlanabilir.[11][12] Böylece iki farklı tedarikçinin sistemleri yalnızca aynı protokolü konuşmakla kalmayıp örneğin aynı makine tipindeki spindle, job, material veya status kavramlarını ortak bir semantik model üzerinden temsil edebilir.

Digital Thread platformu açısından OPC UA'nın rolünü "bütün thread OPC UA ile taşınmalıdır" şeklinde yorumlamak yanlış olur. Bunun yerine OPC UA, özellikle üretim sahasındaki asset ve operasyonel bilgi için güçlü bir semantik entegrasyon kaynağı olabilir. Thread platformu OPC UA Information Model içindeki asset kimliklerini MES, PLM veya Digital Twin tarafındaki kimliklerle ilişkilendirdiğinde gerçek değer oluşur.

Sparkplug B gibi MQTT tabanlı yaklaşımlar da edge-to-cloud telemetri ve durum yönetimi açısından yararlı olabilir. Ancak burada da protokol seçimi ile ortak ürün/asset semantiğini ayrı problemler olarak ele almak gerekir. Digital Thread'in başarısı en hızlı mesajlaşma protokolünü seçmekten çok, taşınan olayın ve verinin ürün yaşam döngüsündeki anlamını kaybetmemesine bağlıdır.

## 6. Digital Twin Semantiği: ISO 23247 ve Asset Administration Shell

Digital Thread ve Digital Twin ilişkisinin 2026 itibarıyla en dikkat çekici standart gelişmesi **ISO 23247-5:2026** oldu. ISO 23247 ailesi üretim için Digital Twin framework'ünü ele alıyor ve Part 5 doğrudan **"Digital thread for digital twin"** başlığıyla Haziran 2026'da yayımlandı.[1] Bu standardın varlığı, Digital Thread'in yalnızca tedarikçi pazarlama terminolojisi olmadığı ve üretim Digital Twin mimarilerinde ayrı bir standardizasyon problemi olarak ele alındığı açısından oldukça önemli.

Burada Digital Twin'in thread'in tamamı olmadığını tekrar vurgulamak gerekiyor. Digital Twin belirli bir varlığın veya sistemin dijital temsilini sağlar; Digital Thread ise bu temsil ile tasarım, üretim, kalite, bakım ve diğer yaşam döngüsü bilgilerinin ilişkisini sürdürebilir. Bir makinenin twin'i çalışma verilerini ve konfigürasyonunu gösterebilir, fakat bu makinenin ürettiği belirli bir ürün seri numarasının hangi engineering revision ile ve hangi malzeme lotlarıyla ilişkili olduğunu kurmak daha geniş thread bağlamını gerektirir.

Avrupa ve Industrie 4.0 ekosisteminde **Asset Administration Shell — AAS** bu alandaki en önemli yapı taşlarından biridir. Industrial Digital Twin Association — IDTA tarafından yayımlanan AAS specification seti metamodel, API, data specification, güvenlik ve AASX package format gibi parçalar içeriyor. IDTA, bu spesifikasyonların standartlaştırılmış Digital Twin için yazılım yapısı, arabirimler ve semantik temelini oluşturduğunu açıkça ifade ediyor.[13]

AAS'nin Digital Thread için özellikle güçlü taraflarından biri varlık-merkezli (asset-centric) olması ve bir varlığa bağlı Submodel'ler üzerinden farklı bilgi alanlarını organize edebilmesidir. Asset'in global veya özel tanımlayıcıları, keşif ve kayıt mekanizmaları, asset'e ilişkin standardize Submodel Templates ve URI tabanlı kimlik yaklaşımı farklı sistemler arasında sürdürülebilir bağlantılar kurmak için değerli bir temel sunar. AAS Part 2 API spesifikasyonu da asset kimliği, AAS registry, submodel registry ve keşif ilişkilerini makine tarafından kullanılabilir servisler şeklinde tanımlar.[14]

Ancak AAS'yi de bütün Digital Thread'in yerine koymak doğru olmaz. AAS güçlü bir Digital Twin/asset standardizasyon yaklaşımıdır; ürün yaşam döngüsü yönetimi, üretim operasyonları, tedarik zinciri olay tarihçesi veya DPP'nin bütün ihtiyaçlarını tek başına çözmez. En doğru yaklaşım AAS'yi standartlar yığınının güçlü bir katmanı olarak kullanmak ve diğer alan standartlarıyla ilişkilendirmektir.

## 7. Kimlik ve İzlenebilirlik: GS1 Digital Link ve EPCIS

Digital Thread'in en az konuşulan fakat en kritik bileşeni kimliktir. Eğer bir sistemdeki ürünün başka bir sistemdeki kayıtla aynı ürünü temsil ettiğini bilemiyorsak, mükemmel API'ler ve veri modelleri bile gerçek bir thread oluşturamaz. "Thread" kelimesinin hakkını verebilmek için farklı yaşam döngüsü olaylarının güvenilir biçimde aynı ürün tipi, batch, seri, bileşen, asset veya konum ile ilişkilendirilmesi gerekir.

GS1 standartları özellikle tedarik zinciri ve fiziksel ürün kimliği tarafında güçlü yapı taşları sunuyor. **GS1 Digital Link**, GTIN, GLN, SSCC gibi GS1 tanımlayıcılarının yanı sıra batch ve seri numaraları gibi tanımlayıcılar standart URI yapıları içerisinde ifade edebiliyor ve fiziksel veri taşıyıcısından çevrimiçi bilgilere geçiş sağlayabiliyor.[15] Bu yaklaşım Digital Product Passport açısından da doğal bir kullanım alanı oluşturuyor; çünkü fiziksel ürün üzerindeki 2D kod, yalnızca statik bir URL değil, standardize edilmiş ürün kimliğine açılan bir giriş noktası haline gelebiliyor.

**EPCIS — Electronic Product Code Information Services** ise ürün ve diğer varlıkların yaşamı boyunca gerçekleşen iş olaylarını paylaşmak için geliştirilmiş bir görünürlük standardıdır. GS1, EPCIS'in "ne, ne zaman, nerede, neden ve nasıl" sorularına cevap veren olay verisini şirket içinde ve tedarikçiler arasında paylaşmak üzere tasarlandığını belirtiyor. EPCIS 2.0'ın sensör verisi, sertifikasyon ayrıntıları, JSON/JSON-LD, REST API ve GS1 Digital Link URI desteği gibi yetenekleri, standardı Digital Thread ve DPP bağlamında daha da ilginç hale getiriyor.[16]

Örneğin bir ürünün üretildiği, belirli bir palette birleştirildiği, başka bir konuma sevk edildiği, belirli sıcaklık koşullarında taşındığı veya sahiplik/velayet değişikliği yaşadığı olay zinciri EPCIS ile temsil edilebilir. MES'in ayrıntılı üretim operasyonlarının tamamını EPCIS'e dönüştürmek doğru olmayabilir; ancak şirket sınırlarını aşan izlenebilirlik olayları için EPCIS, Digital Thread'in tedarik zinciri katmanında son derece güçlü bir ortak dil sunabilir.

Buradaki mimari ders açıktır: Kimlik modelini entegrasyon projesinin sonunda çözmeye çalışmamalıyız. Ürün tanımlayıcı, asset tamımlayıcı, batch, seri, konum ve organizasyon kimliklerinin nasıl yönetileceği Digital Thread tasarımının başında belirlenmeli; farklı standartların tanımlayıcı mekanizmaları arasında çözümleme yapılabilmelidir.

## 8. Digital Product Passport: EN 18216, EN 18219, EN 18220, EN 18221, EN 18222, EN 18223, EN 18239 ve EN 18246

Digital Thread standartları tartışmasının 2026 itibarıyla en güncel bölümü Digital Product Passport tarafında yaşanıyor. ESPR — Regulation (EU) 2024/1781 — DPP için hukuki çerçeveyi oluştururken Avrupa Komisyonunun M/604 standardisation request'i doğrultusunda **CEN-CLC/JTC 24 "Digital Product Passport — Framework and System"** teknik komitesi DPP sistem altyapısının temel teknik konuları için ilk sekiz Avrupa standardını geliştirdi.[2][17]

CEN-CENELEC'in Temmuz 2026 duyurusuna göre bu standartlar ürün bağımsız ve çapraz bir çerçeve oluşturuyor. Başka bir ifadeyle standartların görevi bir tekstil ürününde hangi sürdürülebilirlik alanlarının bulunacağını veya bir bataryada hangi kimyasal bilgilerin zorunlu olacağını belirlemek değil; farklı ürün kategorilerindeki DPP'lerin ortak teknik altyapısının birlikte çalışmasını sağlamak.[2]

| Standart | Ana konu |
|---|---|
| **EN 18216** | Digital product passport — Veri değişim protokolleri |
| **EN 18219** | Digital product passport — Eşsiz tanımlayıcılat |
| **EN 18220** | Digital product passport — Veri taşıyıcıları |
| **EN 18221** | Digital product passport — Veri depolama, arşivleme ve kayıt altına alma |
| **EN 18222** | Digital Product Passport — Pasaport yaşam döngüsü yönetimi ve aramalar için API'ler |
| **EN 18223** | Digital Product Passport — Sistemlerin birlikte çalışabilirliği |
| **EN 18239** | Digital Product Passport — Erişim yönetimi, bilgi sistemleri güvenliği ve ticari sır gizliliği |
| **EN 18246** | Digital product passport — Veri doğrulama, veri güvenilirliği ve veri tutarlılığı |

Bu liste Digital Thread mimarisi açısından son derece öğretici. Bir DPP sisteminin yalnızca "ürün verisi için JSON şema"dan ibaret olmadığı açıkça görülüyor; tanımlayıcılar, veri taşıyıcıları, API, veri kaydı, birlikte çalışabilme, erişim kontrolü ve doğrulama ayrı standart konuları haline gelmiş durumda. Digital Thread platformunun DPP üretebilmesi için de aynı problemlerin birçoğunu çözmesi gerekiyor.

Avrupa Komisyonu ayrıca Temmuz 2026'da bu standartlara ilişkin eşgüdüm sürecinde önemli bir adım attı. Commission Implementing Decision (EU) 2026/1736 ile DPP için eşgüdümlü standartlar listesi yayımlandı; CEN-CENELEC aynı dönemde sekiz standardın altısının Official Journal of the European Union'da referanslandığını belirtiyor.[2][18] Bu gelişme, DPP'nin kavramsal bir gelecek projesinden operasyonel standart altyapısına doğru ilerlediğini gösteriyor.

DPP açısından Digital Thread'in kritik rolü burada tekrar ortaya çıkıyor. EN 18219 tekil tanımlayıcıyı, EN 18220 fiziksel-dijital bağlantıyı, EN 18222 API'leri, EN 18223 birlikte çalışabilirliği ve EN 18239 erişim haklarını tanımlarken, üreticinin bu mekanizmalar üzerinden sunacağı gerçek verinin kaynağı yine PLM, ERP, MES, QMS, tedarik zinciri ve servis sistemleri olacaktır. DPP standardı pasaport sistemini tanımlar; Digital Thread ise pasaportu besleyen yaşam döngüsü bağlamını kurabilir.

## Bütün Bunları Bir "Digital Thread Standartlar Yığını" Olarak Görebilir miyiz?

Bu standartları tek bir mimaride düşünmenin yararlı yolu, onları üst üste binmeyen kesin katmanlar gibi değil, belirli problem alanlarında güçlü olan ve bağlantılar üzerinden birlikte çalışan yapı taşları olarak görmektir. Aşağıdaki model bu yaklaşımın sadeleştirilmiş bir temsilidir:

```text
┌─────────────────────────────────────────────────────────────┐
│ DPP / AI / Analytics / Compliance / Traceability / Apps    │
├─────────────────────────────────────────────────────────────┤
│ DPP System Standards                                       │
│ EN 18216 / 18219 / 18220 / 18221 / 18222 / 18223 /       │
│ EN 18239 / EN 18246                                        │
├─────────────────────────────────────────────────────────────┤
│ Digital Twin & Asset Semantics                             │
│ ISO 23247 / Asset Administration Shell                     │
├─────────────────────────────────────────────────────────────┤
│ Product / Manufacturing / Quality / Supply Chain Semantics │
│ STEP AP242 / ISA-95 / QIF / EPCIS                          │
├─────────────────────────────────────────────────────────────┤
│ Industrial & Engineering Information Models                │
│ OPC UA Companion Specifications / AutomationML             │
├─────────────────────────────────────────────────────────────┤
│ Connectivity & Integration                                 │
│ OPC UA / MQTT / REST / Events / Files                      │
├─────────────────────────────────────────────────────────────┤
│ PLM | ERP | MES/MOM | QMS | IIoT | WMS | EAM | Service    │
└─────────────────────────────────────────────────────────────┘
```

Bu diyagramda özellikle iki ayrımı korumak önemli. Birincisi, **connectivity ile semantics aynı şey değildir**; bir REST API'nin varlığı iki sistemin aynı ürün kavramını anladığı anlamına gelmez. İkincisi, **semantic standard ile source system aynı şey değildir**; örneğin MES ISA-95 kavramlarını kullanabilir fakat Digital Thread'in kendisi MES değildir, AAS bir asset'in Digital Twin temsilini sağlayabilir fakat bütün yaşam döngüsü thread'i AAS değildir.

Bu bakış açısı bize yeni bir ürün veya platform tasarlarken büyük bir avantaj sağlar. "Bütün şirketler bizim veri modelimize dönüşsün" demek yerine "mevcut standartlarla konuşabilen, bunlar arasındaki kimlik ve ilişkiyi yöneten bir katman oluşturalım" diyebiliriz. Bu, özellikle farklı tedarikçilerin PLM, ERP, MES, IIoT ve kalite ürünlerini birlikte kullanan üreticiler için çok daha gerçekçi bir yaklaşımdır.

## Yeni Bir "Açık Digital Thread Spesifikasyonu" Gerekir mi?

Burada daha önce tartıştığımız tedarikçi-bağımsız Digital Thread Platform fikri açısından önemli bir soru ortaya çıkıyor. Eğer tek bir Digital Thread standardı yoksa, yeni ve açık bir spesifikasyon oluşturmak gerekir mi?

Bence ilk refleks yeni bir evrensel veri modeli icat etmek olmamalı. ISO 10303 ürün tanımı, ISA-95 üretim operasyonları, QIF kalite, EPCIS tedarik zinciri olayları, OPC UA endüstriyel bilgi modeli, AAS asset semantiği ve yeni EN 182xx serisi DPP sistem mimarisi gibi son derece geniş ve olgun standart alanları varken bunların tamamını tekrar modellemek hem gereksiz hem de birlikte çalışabilirlik açısından zararlı olabilir.

Bununla birlikte mevcut standartlar arasında **bağlantı kurma**, **kimlik çözümleme**, **ilişki semantiği**, **menşei**, **verisyonlama** ve **yaşam döngüsü olaylarını ilişkilendirme** gibi konularda ortak ve açık bir üst katman tanımlamak değerli olabilir. Böyle bir spesifikasyon "ürün nesnesi budur ve bütün sistemler bunu kullanmalıdır" demek yerine "farklı standartlardaki ve kaynak sistemlerdeki nesneleri aynı yaşam döngüsü grafı içinde nasıl tanımlar, ilişkilendirir ve çözümleriz?" sorusunu çözebilir.

Örneğin açık bir Digital Thread link modeli şu tip ilişkileri standardize edebilir: bir PLM mühendislik revizyonu hangi ERP material master ile ilişkilidir, hangi MES product definition bu revision'dan türetilmiştir, hangi üretim emri hangi fiziksel seri ürünü oluşturmuştur, hangi QIF denetim sonucu bu ürüne aittir, hangi EPCIS olayı onun tedarik zinciri hareketini gösterir ve hangi DPP tanımlayıcısı aynı fiziksel ürünü dış dünyada temsil eder. Böyle bir model mevcut standartların yerine geçmez; aralarında bağlantı dokusu oluşturur.

Bu nedenle olası bir "Açık Digital Thread Spesifikasyonu"nun merkezinde dev bir kanınik şema değil, **tanımlayıcı + ilişki + olay + menşei + semantik referans** yaklaşımının bulunması daha doğru olur. Platformun kendisi graf veritabanı kullanabilir, ilişkisel veritabanı kullanabilir veya federated depolar (repository) çalışabilir; spesifikasyonun örneğin veri depolama teknolojisi dayatmasına gerek yoktur. Asıl amaç farklı tedarikçileri aynı thread ilişkilerini anlayabilmesi olmalıdır.

## Digital Thread Bir Knowledge Graph Olmak Zorunda mı?

Ürün, revizyon, malzeme, batch, seri numarası, asset, üretim emri, operasyon, makine, kalite sonucu, tedarikçi, nakliye ve DPP arasındaki çok sayıda ilişkiyi görünce graph yaklaşımı doğal olarak akla geliyor. Gerçekten de Digital Thread'in zihinsel modeli bir tablo koleksiyonundan çok bir graph'a benzer; bir ürün örneğinden başlayıp onun mühendislik tanımına, üretim olaylarına, bileşenlerine, kalite sonuçlarına ve yaşam döngüsü olaylarına doğru gezinebiliriz.

Ancak mimari kavram ile teknoloji seçimini yine birbirinden ayırmak gerekir. Digital Thread'in ilişkisel bir graph modeli olması, mutlaka Neo4j veya belirli bir graph database kullanılması gerektiği anlamına gelmez. İlişkiler PostgreSQL üzerinde, event store içerisinde, semantic RDF graph'ta veya farklı kaynaklara referans veren federated bir index'te de tutulabilir.

Burada esas ihtiyaç "link first" düşüncesidir. Veriyi olduğu gibi merkezi bir data lake'e kopyalamak yerine, her veri nesnesinin kimliğini, kaynağını, semantiğini, zamanını ve diğer nesnelerle ilişkisini birinci sınıf vatandaş haline getirmek gerekir. Bu yaklaşım daha sonra AI ve analitik tarafında da büyük avantaj sağlar; çünkü kullanıcı yalnızca ham sütünlar ile değil, ürün yaşam döngüsünün anlamlı ilişkileriyle çalışabilir.

## Analitik ve AI Neden Bu Mimarinin Üzerine Oturmalı?

Digital Thread platformunun en güçlü taraflarından biri yalnızca entegrasyon yapmak değil, farklı sistemlerin verisini ortak bağlam içinde analiz edilebilir hale getirmektir. Geleneksel analitik projelerinde veri warehouse'a taşınır, tablolar arasında ETL ile bağ kurulur ve belirli raporlar için özel data mart'lar oluşturulur. Bu yaklaşım geçerliliğini korusa da yaşam döngüsü ilişkileri sürekli değişen ve çok sayıda kaynağa yayılan ürün verisinde esneklik sorunu yaratabilir.

Thread üzerinde çalışan analitik, ürün kimliğinden başlayarak gerekli veriyi bağlamıyla birlikte bulabilir. Örneğin belirli bir kalite sorununun yalnızca hangi makinede oluştuğunu değil, hangi mühendislik revizyonu, tredarikçi lotu, araç/ekipman, vardiya, proses penceresi ve denetim karakteristikleri ile birlikte ortaya çıktığını sorgulayabiliriz. Bu tür ilişkiler AI uygulamalarının da daha anlamlı bağlama (context) ulaşmasını sağlar.

LLM tabanlı sistemler açısından bu daha da ilginç hale gelir. Kullanıcı "Son üç ayda sahada yüksek arıza oranı gösteren ürünlerde ortak üretim koşulları var mı?" diye sorduğunda yalnızca tek bir MES tablosuna veya IoT zaman serisi veritabanına bakmak yeterli olmayacaktır. Digital Thread, soruyu 

```text
Ürün örnekleri
    ⬇
Servis olayları 
    ⬇
Üretim emirleri
    ⬇
Ekipman
    ⬇
Proses sinyalleri
    ⬇
Hammadde lotları
    ⬇
Mühendislik revizyonları 
```

yönünde genişletebilecek bir context graph sağlayabilir.

Dolayısıyla AI, Digital Thread'in yerine geçmez; tam tersine iyi bir Digital Thread AI için güvenilir bağlam altyapısı olabilir. Aynı thread DPP üretme, izlenebilirlik, uyum, yaşam döngüsü analitiği, kök-neden analizi ve doğal dil sorgulama gibi çok farklı uygulamaları besleyebilir.

## Tedarikçi Bağımsız Digital Thread Platform Nasıl Konumlanabilir?

Buradan ticari açıdan ilginç bir ürün kategorisi çıkıyor. Bir üretici Dassault PLM, SAP ERP, trex MES, PTC IIoT, farklı bir QMS, özel geliştirilmiş servis uygulamaları ve tedarikçilerin sistemlerini aynı anda kullanıyorsa hiçbir tedarikçi ürün yaşam döngüsünün tamamının doğal sahibi değildir. Her tedarikçi kendi alanındaki veriye ve semantiğe sahiptir.

Tedarikçi bağımsız bir Digital Thread Platform bu sistemlerin yerine geçmeye çalışmak yerine aralarındaki yaşam döngüsü iletişimi  ve semantik çözümleme katmanı olarak konumlanabilir. Platform connector'lar üzerinden kaynak sistemleri tanır, standardize edilmiş modelleri mümkün olduğunca korur, farklı kimlikleri birbirine çözümler, yaşam döngüsü olayları ve ilişkileri oluşturur, menşei bilgisini taşır ve üst katmandaki uygulamalara ortak bir erişim yüzeyi sunar.

Böyle bir platformun uygulama katmanında DPP üretimi doğal bir yetkinlik olur. Aynı veri modeli analitik, AI destekli inceleme, tedarikçi izlenebilirliği, uyum kanıtları, değişiklik etki analizi veya "as-designed vs. as-built" karşılaştırmaları da çalışabilir. Böylece ürünün değeri yalnızca DPP regülasyonuna bağlı kalmaz; DPP platform için önemli ve güncel bir kullanım vakası olurken, Digital Thread daha geniş bir kurumsal veri altyapısı olarak kalır.

## Standartlar Bize Aslında Neyi Söylüyor?

Bütün bu standartlara birlikte baktığımızda ilginç bir sonuç çıkıyor. Endüstri, Digital Thread probleminin parçalarını on yıllardır standardize ediyor: STEP tasarım ve ürün tanımını, ISA-95 üretim operasyonlarını, QIF kaliteyi, AutomationML üretim sistemleri mühendisliğini, OPC UA makine ve asset semantiğini, AAS Digital Twin yapısını, EPCIS tedarik zinciri olaylarını tanımlıyor. 2026'da ISO 23247-5'in doğrudan Digital Thread'i Digital Twin çerçevesinin parçası olarak ele alması ve CEN-CENELEC'in DPP system standards setini yayımlaması, bu ayrı dünyaların birbirine daha fazla yaklaşmaya başladığını gösteriyor.[1][2]

Eksik olan şey yeni bir veri formatı değildir. Büyük fırsat, bu standartların gerçek üretim şirketlerinin heterojen uygulamaların/sistemlerin bulunduğu ortamlarda birlikte çalışmasını sağlayan açık bağlantı katmanını kurmaktır. Başarılı bir Digital Thread platformu "ben yeni master sistemim" demek yerine, ürünün yaşam döngüsü boyunca zaten var olan dijital izlerini güvenilir, anlamlı ve sorgulanabilir bir thread'e dönüştürmelidir.

Bu nedenle Digital Thread'i gelecekte tek bir tedarikçini PLM modülü veya yeni isim verilmiş bir entegrasyon platformu olarak değil, **ürün merkezli bir birlikte çalışabilirlik ve bağlam altyapısı** kategorisi olarak görmek daha doğru olabilir. DPP bu altyapının dış dünyaya açılan önemli uygulamalarından biri, AI ve analitik ise onun üzerinde değer üreten başka uygulamalar olacaktır.

Belki de önümüzdeki dönemin asıl sorusu "Digital Thread için hangi standardı kullanacağız?" olmayacak. Daha önemli soru, **STEP, ISA-95, QIF, OPC UA, AAS, EPCIS, DPP standartları ve şirketlerin mevcut veri modelleri arasında bağlantıları kaybetmeden çalışan açık bir Digital Thread mimarisini kimin kuracağı** olacak.

---

## Kaynaklar

1. **[ISO 23247-5:2026 — Automation systems and integration — Digital twin framework for manufacturing — Part 5: Digital thread for digital twin](https://www.iso.org/standard/87425.html).** International Organization for Standardization.

2. **[CEN-CENELEC — Digital Product Passport, the cornerstone for the implementation of sustainability and circularity on the European Single Market](https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-15-dpp/).** 15 July 2026.

3. **[ISO 10303-242:2025 — Industrial automation systems and integration — Product data representation and exchange — Part 242: Application protocol: Managed model-based 3D engineering](https://www.iso.org/standard/84300.html).** International Organization for Standardization.

4. **[NIST — Digital Thread for Manufacturing](https://www.nist.gov/programs-projects/digital-thread-manufacturing).** National Institute of Standards and Technology.

5. **[ISA — ISA-95 Standard: Enterprise-Control System Integration](https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard).** International Society of Automation.

6. **[MESA International — B2MML / BatchML Version 7](https://members.mesa.org/news/Details/press-release-mesa-announces-version-7-release-of-b2mml-batchml-specifications-55273).** Manufacturing Enterprise Solutions Association.

7. **[ISO 23952:2020 — Automation systems and integration — Quality information framework (QIF) — An integrated model for manufacturing quality information](https://www.iso.org/standard/77461.html).** International Organization for Standardization.

8. **[Digital Metrology Standards Consortium — Quality Information Framework (QIF)](https://qifstandards.org/overview/).**

9. **[IEC 62714-1:2018 — Engineering data exchange format for use in industrial automation systems engineering — Automation markup language — Part 1: Architecture and general requirements](https://webstore.iec.ch/en/publication/32339).** International Electrotechnical Commission.

10. **[AutomationML Association — AutomationML Specifications](https://www.automationml.org/about-automationml/specifications/).**

11. **[OPC Foundation — OPC UA Companion Specifications](https://opcfoundation.org/about/opc-technologies/opc-ua/ua-companion-specifications/).**

12. **[OPC Foundation — UA Modelling Best Practices: How to create a Companion Specification](https://reference.opcfoundation.org/specs/OPC-11030/6).**

13. **[Industrial Digital Twin Association — Asset Administration Shell Specifications](https://industrialdigitaltwin.org/en/content-hub/aasspecifications).**

14. **[IDTA 01002, Version 3.2 — Specification of the Asset Administration Shell, Part 2: Application Programming Interfaces](https://industrialdigitaltwin.org/wp-content/uploads/2026/07/IDTA-01002-3-2_SpecificationAssetAdministrationShell_Part2_API.pdf).** July 2026.

15. **[GS1 — GS1 Digital Link Standard](https://www.gs1.org/standards/gs1-digital-link).**

16. **[GS1 — EPCIS & CBV](https://www.gs1.org/standards/epcis).**

17. **[Regulation (EU) 2024/1781 — Ecodesign for Sustainable Products Regulation (ESPR)](https://eur-lex.europa.eu/eli/reg/2024/1781/oj/eng).** EUR-Lex, European Union.

18. **[European Commission — Digital Product Passport (DPP): Harmonised Standards](https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/digital-product-passport-dpp_en).** Directorate-General for Internal Market, Industry, Entrepreneurship and SMEs.

19. **[CIRPASS — D3.2 DPP System Architecture, Version 1.9](https://cirpassproject.eu/wp-content/uploads/2024/06/D3.2v1.9.pdf).** May 2024.

20. **[NIST — Roadmap to Strengthen the U.S. Manufacturing Supply Chain via Digital Thread Technology](https://doi.org/10.6028/NIST.GCR.24-057).** NIST GCR 24-057, 2024.

***
{% include share_twitter_tr.html %}
***
