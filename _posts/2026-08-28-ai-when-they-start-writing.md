---

layout: post
title: "AI Ajanlar Yazmaya Başladığında"
subtitle: "Veritabanı, Network ve Storage Dünyası Nasıl Değişecek?"
date: 2026-08-28
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt--> 
published: true
tags:

- ai
- agents
- database
- network
- storage

---

Bugün kullandığımız AI ajanların önemli bir bölümü düşündüğümüz kadar "ajan tabanlı" değil. Repository'yi okuyabiliyor, kod üretebiliyor, dosyaları değiştirebiliyor, test çalıştırabiliyor ve bazı durumlarda pull request açabiliyorlar; fakat production sistemlerinin gerçek durumunu (state) değiştirebilecekleri noktaya geldiğimizde etraflarına oldukça kalın güvenlik duvarları örüyoruz. Bunun iyi bir nedeni var. Bir ajanın yanlış bir SQL sorgusu önermesi ile o sorguyu production veritabanında çalıştırması arasında yalnızca bir yetki farkı yok; iki durumda sahip olduğumuz risk modeli bütünüyle farklı.

<!--end-of-excerpt-->

Bu sınır şimdiden hareket etmeye başladı. GitHub Copilot cloud ajan repository içerisinde branch oluşturup kod yazabiliyor ve pull request açabiliyor, ancak default branch'e doğrudan push edemiyor ve erişimleri sınırlandırılıyor. OpenAI Codex tarafında da benzer bir yaklaşım var: ajan çalışma alanına yazabiliyor fakat network ve daha yüksek riskli işlemler sandbox ve erişim politikalarıyla sınırlandırılıyor. Anthropic'in Claude Code için yayımladığı bilgiler ise bu sınırın neden önemli olduğunu çok somut biçimde gösteriyor; şirket geçmiş ajan davranışları arasında yanlış yorumlanan bir talep sonucunda remote Git branch'lerinin silinmesini, bir authentication token'ının başka bir sisteme yüklenmesini ve production veritabanı üzerinde migration çalıştırılmaya kalkışılmasını örnek veriyor.

Bence asıl ilginç soru tam burada başlıyor:

**Ajanlar okumaktan ve kod yazmaktan çıkıp dünyanın state'ini değiştirmeye başladığında altyapımız nasıl değişecek?**

Bu sorunun cevabı yalnızca AI güvenliği ile ilgili değil. Veritabanı teknolojilerinden network mimarisine, storage sistemlerinden kimlik yönetimine, transaction modellerinden observability'ye kadar oldukça geniş bir alanın yeniden düşünülmesini gerektirebilir.

## Kod yazmak ile state değiştirmek aynı şey değil

Bir kodlama ajanının hatalı bir C# sınıfı üretmesi can sıkıcıdır ama çoğu modern yazılım geliştirme sürecinde geri dönüş yolu bellidir. Değişiklik Git üzerinde görülebilir, diff incelenebilir, CI testleri çalıştırılabilir ve merge edilmemişse production'a hiç ulaşmayabilir. Merge edilmiş olsa bile çoğu durumda önceki commit'e dönmek mümkündür.

Production state için durum çok farklıdır.

Bir ajan `UPDATE customers SET ...` çalıştırdığında Git revert bizi kurtarmaz. Kubernetes üzerinde yanlış deployment yaptığında birkaç saniye içerisinde yüzlerce instance etkilenebilir. Bir firewall kuralını değiştirdiğinde kendisini ve insan operatörleri sistemin dışında bırakabilir. Object storage üzerindeki lifecycle policy'yi yanlış değiştirdiğinde henüz kimsenin fark etmediği veriler silinmeye başlayabilir.

Dolayısıyla ajan tabanlı sistemlerin önündeki temel problem daha iyi SQL veya daha iyi Terraform üretmek olmayabilir. Asıl problem **kontrollü ve geri alınabilir yan etki üretmek** olacaktır.

Bugünkü altyapının önemli bir kısmı insan operatör varsayımıyla tasarlanmıştır. Gelecekte ise hem insan hem de makine operatörlerinin aynı sistem üzerinde çalıştığı bir modele geçiyoruz.

## Veritabanları ajan çağında farklı davranmak zorunda kalabilir

Veritabanı dünyası bu dönüşümün en ilginç alanlarından biri olacak. Bugün bir uygulamaya veya kullanıcıya veritabanına erişim veririz ve yetkiyi çoğunlukla şema, tablo, view veya işlem seviyesinde tanımlarız. Ajan için bunun yeterli olduğunu düşünmüyorum.

Bir AI ajana `UPDATE` yetkisi vermek teknik olarak kolaydır. Zor olan, **hangi amaçla, hangi kapsamda ve hangi sonuç sınırları içerisinde UPDATE yapabileceğini** ifade etmektir.

Örneğin şöyle bir görev düşünelim:

> Son 24 saatte hatalı eşleşmiş faturaları tespit et ve müşteri kayıtlarıyla eşleştir.

Bugünkü yetkilendirme modellerinde ajan ya gerekli tablolara yazabilir ya da yazamaz. Oysa ihtiyaç duyacağımız politika çok daha semantik olabilir: Ajan yalnızca belirli tenant'ın kayıtlarını değiştirebilsin, maksimum 500 satıra dokunabilsin, finansal toplamı değiştiremesin, işlem öncesinde etkilenecek kayıtların snapshot'ını oluştursun ve beklenmeyen bir sonuç oluşursa tüm operasyon otomatik olarak geri alınabilsin.

Bu nedenle geleceğin veritabanı erişim modeli klasik RBAC'in ötesine geçebilir. **Intent-aware authorization (niyet farkındalıklı yetkilendirme)**, işlem bütçeleri, row-level policy, geçici yetkiler ve policy-controlled transactions gibi kavramlar giderek önem kazanabilir.

MongoDB'nin Ağustos 2026'da duyurduğu Atlas Managed MCP Server ve App Connections gibi gelişmeler bunun erken işaretlerinden biri olarak okunabilir; amaç yalnızca AI araçlarının veritabanına ulaşmasını sağlamak değil, hangi uygulamanın hangi cluster'a hangi yetkilerle ulaşabileceğini de yönetebilmek. Ancak uzun vadede bundan daha fazlasına ihtiyacımız olacak.

Veritabanının ajana yalnızca "permission denied" veya "transaction committed" demesi yeterli olmayabilir. Veritabanı bir anlamda ajanın **transaction safety harness**'ının parçası haline gelebilir.

## `BEGIN TRANSACTION` yetmeyecek

Burada klasik transaction kavramının sınırları da ortaya çıkıyor. ACID transaction bir veritabanı içerisindeki değişiklikleri yönetmek için son derece güçlüdür fakat bir ajanın yaptığı iş çoğu zaman tek bir veritabanı transaction'ına sığmaz.

Ajan müşteri kaydını değiştirebilir, ardından CRM API'sini çağırabilir, object storage'a belge yazabilir, bir Kafka event'i publish edebilir ve son olarak müşteriye e-posta gönderebilir.

Veritabanı transaction'ını rollback edebiliriz. Gönderilmiş e-postayı rollback edemeyiz.

Bu nedenle ajan tabanlı sistemlerde **action transaction** veya **intent transaction** diyebileceğimiz daha geniş bir abstraction'a ihtiyaç duyabiliriz. Ajan önce yapmak istediği değişiklikleri bir plan olarak sunar, sistem bu planın potansiyel yan etkilerini hesaplar, kural motoru izin verilen işlemleri belirler ve yürütme katmanı işlemleri kontrollü biçimde uygular.

Burada dağıtık transaction'ların geri dönmesini beklemekten ziyade saga, compensation, event sourcing ve immutable audit log gibi bildiğimiz yaklaşımların ajan dünyasına göre yeniden yorumlanmasını beklemek daha mantıklı. Ajan bir işlem yaptığında sistem yalnızca *ne yaptığını* değil, **neden yaptığını, hangi talimat doğrultusunda yaptığını, hangi araçları kullandığını ve hangi sonuçları gözlemlediğini** de saklamak zorunda kalacak.

Audit log artık yalnızca:

`user_42, invoice_123'ü değiştirdi`

olmayabilir.

Daha çok:

`agent_17, user_42 tarafından verilen amaç doğrultusunda invoice_123 üzerinde değişiklik yaptı; karar sırasında şu kaynakları kullandı, şu politika (policy) kontrollerinden geçti ve şu sonuçları bekliyordu`

şeklinde bir köken ve gerekçe (provenance) kaydına dönüşebilir.

## Network tarafında problem daha da ilginç

Bugünkü network güvenliği büyük ölçüde "kim nereye bağlanabilir?" sorusuna cevap verir. Firewall, ACL, security group, VPN ve zero-trust çözümleri farklı yöntemlerle bu problemi yönetir.

Ajanlarla birlikte soru değişiyor:

**Kim, nereye, hangi görev kapsamında, ne yapmak için ve ne kadar süreyle bağlanabilir?**

Bir kodlama ajanının package repository'ye ulaşması makul olabilir. Aynı ajanın rastgele bir internet adresine veri gönderebilmesi ise kabul edilebilir olmayabilir. OpenAI'nin Codex için kullandığı yaklaşım bunun erken bir örneği: OpenAI kendi kullanımında açık uçlu outbound erişim vermediğini, beklenen destination'ları allowlist ile yönettiğini ve bilinmeyen hedeflerde approval istediğini açıklıyor. Codex'in ürün seviyesindeki network modeli de proje bazında allowlist ve denylist uygulanmasına izin veriyor; çünkü internet erişiminin prompt injection ve kimlik bilgisi leakage gibi yeni riskler oluşturduğu açıkça kabul ediliyor.

Fakat gelecekte domain allowlist bile kaba bir kontrol mekanizması olarak kalabilir.

Ajanın `api.sap.com` adresine ulaşmasına izin vermek başka, orada satın alma siparişi oluşturmasına izin vermek başka şeydir. Network ve application authorization katmanlarının birbirine daha fazla yaklaşması muhtemel. Service mesh, API gateway, workload kimliği ve policy engine teknolojilerinin üzerine **ajan kimliği** ve **görev kimliği** eklenmesi şaşırtıcı olmaz.

Bir request yalnızca "bu request Agent-17'den geliyor" demeyecek; "Agent-17 bu request'i Ali tarafından başlatılmış Task-938 kapsamında, InvoiceReconciliation yetkisiyle ve önümüzdeki 14 dakika için yapıyor" diyebilir.

Başka bir ifadeyle network kimliğinin yanına **delegated intent** (insan tarafından AI ajanına devredilmiş niyet) eklenebilir.

## Ajanın kalıcı kimlik bilgisi olmamalı

Bunun doğal sonucu kimlik bilgisi yönetiminde ortaya çıkıyor. Bir ajana production veritabanı parola vermek, insan kullanıcıya parola vermekten daha problemli olabilir; çünkü ajan aynı kimlik bilgisini farkında olmadan log'a yazabilir, başka bir tool'a gönderebilir veya prompt injection sonucunda kötü niyetli bir hedefe taşıyabilir.

Dolayısıyla ajan tabanlı altyapıda uzun ömürlü secret'ların daha da anlamsız hale gelmesini bekliyorum.

Ajanın sahip olduğu şey bir parola değil, **belirli bir göreve bağlı kısa ömürlü ve göreve özgü sınırlı bir yetki** olabilir.

Bu yetki örneğin şöyle bir anlama gelebilir:

> Bu ajan önümüzdeki 10 dakika boyunca yalnızca Tenant-42 içerisindeki Invoice tablosunda belirlenen 83 kaydı güncelleyebilir.

İş bittiğinde kimlik bilgisi de ortadan kalkar.

Bu yaklaşım servis kimliği, kısa ömürlü kimlik bilgileri, OAuth token exchange ve capability-based security gibi bugün zaten kullandığımız kavramların ajan tabanlı sistemlere uyarlanması anlamına geliyor. Fakat fark önemli: kimlik artık yalnızca çalışan veya uygulama kimliğini değil, **ajan + kullanıcı + görev + amaç zincirini** temsil etmek zorunda kalabilir.

## Storage sistemleri de yalnızca read/write düşünemez

Storage tarafında da benzer bir dönüşüm yaşanacaktır. POSIX erişim yetkileri veya object storage IAM politikalarının klasik `read`, `write`, `delete` modeli ajanlar için fazla geniş olabilir.

Bir ajana bir bucket'a yazma yetkisi verdiğimizi düşünelim. Ajan yanlışlıkla milyonlarca küçük object oluşturabilir. Mevcut dosyaların üzerine yazabilir. Versiyonlama kapalıysa geri dönüşü olmayan bir değişiklik yapabilir. Daha kötüsü, teknik olarak yetkili olduğu için bütün bunlar güvenlik sistemi açısından "başarılı operasyonlar" olarak görülebilir.

Bu nedenle ajan-farkındalığına sahip storage'ın değiştirilemez yazma, otomatik versiyonlama, namespace izolasyonu, yazma kotası ve süreye bağlı veri koruma gibi özellikleri çok daha agresif biçimde kullanması muhtemel.

Ajanın yaptığı değişikliklerin önce bir **shadow namespace** içerisinde oluşması da ilginç bir model olabilir.

Git'in çalışma mantığını storage dünyasına taşıdığımızı düşünelim. Ajan doğrudan production dosya sistemini değiştirmek yerine kendi branch'ine yazar. Sistem diff üretir. Kural motoru veya insan bu değişiklikleri değerlendirir ve ardından değişiklikler gerçek namespace'e birleştirilir.

Kodlama dünyasında son derece doğal kabul ettiğimiz:

**branch → diff → review → merge**

modelinin veritabanı, infrastructure ve storage dünyasında farklı biçimlerde karşımıza çıkacağını düşünüyorum.

## Belki de production'ın kendisi branch'lenebilir hale gelecek

Buradan daha radikal bir düşünceye ulaşabiliriz.

Git neden kodlama ajanları için bu kadar uygun bir ortam? Çünkü Git'in veri modeli zaten ajanların ihtiyaç duyduğu birçok güvenlik özelliğine sahip: değişiklikler izole edilebilir, diff alınabilir, provenance korunabilir, review yapılabilir ve geri dönüş mümkündür.

O halde soru şu olabilir:

**Neden production altyapısı Git gibi davranmasın?**

Veritabanı teknolojilerinde copy-on-write clone, point-in-time recovery ve veritabanı branching yaklaşımları zaten var. Storage sistemlerinde snapshot ve versiyonlama yıllardır kullanılıyor. Infrastructure-as-Code bize infrastructure diff kavramını getirdi.

Ajanlar bu teknolojileri uç kullanım olmaktan çıkarıp altyapının merkezine taşıyabilir.

Ajan production veritabanı üzerinde doğrudan migration çalıştırmak yerine birkaç saniyede production'ın branch'ini oluşturabilir. Migration orada çalıştırılır. Schema ve data diff hesaplanır. Invariant'lar test edilir. Beklenen maliyet ve lock süreleri ölçülür. Sonuç kabul edilebilir durumdaysa kontrollü biçimde production'a uygulanır.

Böyle bir dünyada **branchable infrastructure** yalnızca geliştirici deneyimi özelliği olmaktan çıkar; ajan temel güvenlik yapı taşlarından birine dönüşür.

## Observability tarafında "ne oldu?" sorusundan "ajan neden bunu yaptı?" sorusu ön plana çıkacak

Bugünkü observability sistemleri metrik, log ve trace üzerine kurulu. Bunların hiçbiri ortadan kalkmayacak fakat ajanlarla birlikte yeni bir telemetri katmanına ihtiyaç duyacağız.

Bir ajanın yaptığı yüzlerce araç çağrısı içerisinde yalnızca hata veren API çağrısını görmek yeterli değildir. Ajanın hangi hedefe ulaşmaya çalıştığını, hangi planı oluşturduğunu, planın hangi noktasında farklı bir karar aldığını ve hangi dışsal state'in bu kararı tetiklediğini de anlamamız gerekir.

Bu nedenle geleceğin dağıtık trace'i şöyle görünebilir:

**İnsanın Amacı → Ajan Planı → Araç Çağrıları → Infrastructure Değişiklikleri → Business Yan Etkileri**

OpenAI'nin kendi Codex deployment yaklaşımında "ajan-native telemetry" ve audit edilebilir log'lara özellikle vurgu yapması bu ihtiyacın bugünden ortaya çıktığını gösteriyor. Anthropic de enterprise inference hooks ile prompt, tool call response ve dosya içeriklerinin organizasyon politikalarına göre merkezi olarak denetlenebilmesini sağlamaya başlamış durumda.

Bence observability sektörünün önümüzdeki dönemde en ilginç problemlerinden biri tam olarak burada oluşacak: **ajan nedenselliği (agent causality)**.

Bir production olayının kök nedeni artık belirli bir mikroservis olmayabilir. Kök neden, bir insan talimatının ajan tarafından yorumlanmasıyla başlayan ve sekiz farklı sistem üzerinden ilerleyen bir karar zinciri olabilir.

## Human-in-the-loop tek başına çözüm değil

İlk refleks doğal olarak kritik her işlemden önce insan onayı istemek olacaktır. Bugünkü ürünlerin çoğu zaten bunu yapıyor veya yapmaya çalışıyor.

Fakat bunun ölçeklenebilirliği sınırlı.

Anthropic, Claude Code kullanıcılarının yetki  taleplerinin %93'ünü onayladığını söylüyor ve bunun zaman içerisinde **onay yorgunluğu (approval fatigue)** yarattığına dikkat çekiyor. İnsan her 30 saniyede bir "Allow?" düğmesine basıyorsa ortada gerçek bir güvenlik kontrolü olduğunu söylemek güçleşiyor.

Bu yüzden ajan güvenliğinin geleceği yalnızca human-in-the-loop olamaz.

Daha doğru model **policy-in-the-loop, human-on-the-loop** olabilir.

Düşük riskli ve geri alınabilir işlemler kural motoru tarafından otomatik olarak yürütülür. Orta riskli işlemler sandbox veya shadow environment içerisinde uygulanır ve doğrulanır. Yüksek riskli, geri dönüşü zor veya business etkisi yüksek işlemler ise insan onayına sunulur.

İnsan her işlemi onaylayan kişi değil, sistemin **risk escalation** noktası haline gelir.

## Harness engineering'in altyapı karşılığı

Kodlama ajanları konusunda giderek daha fazla konuştuğumuz harness engineering kavramının asıl önemi de burada ortaya çıkıyor. İyi ajan tabanlı yazılım geliştirme yalnızca daha iyi model seçmek veya daha iyi prompt yazmak değildir; ajanın hangi araçları görebildiğini, hangi bağlamı alabildiğini, hangi işlemleri yapabildiğini, sonuçların nasıl doğrulandığını ve hataların nasıl sınırlandırıldığını tasarlamaktır.

Aynı prensip production altyapısına taşındığında çok daha geniş bir kavrama dönüşüyor.

Ajanın veritabanına nasıl erişeceği, hangi transaction sınırları içerisinde çalışacağı, hangi network hedeflerine gidebileceği, hangi storage namespace'ine yazabileceği, kimlik bilgisinin ne kadar yaşayacağı, hangi operasyonların otomatik rollback edileceği ve hangi noktada insana eskalasyon yapılacağı bu harness'ın parçaları olacaktır.

Belki de gelecekte platform engineering ekiplerinin önemli görevlerinden biri insan geliştiriciler için Internal Developer Platform kurmanın yanında **Agent Execution Platform** oluşturmak olacak.

Bu platform model sağlamayacak. Model zaten genel geçer ve kolay erişilebilir hale gelebilir.

Platform güvenli hareket alanını sağlayacak.

## Asıl dönüşüm AI'da değil, altyapıda olabilir

Bugün AI ajan tartışmalarının büyük bölümü model yeteneklerine odaklanıyor. Bir sonraki model daha iyi kod yazabilecek mi, daha uzun görevleri tamamlayabilecek mi, daha az halüsinasyon üretecek mi?

Bunlar önemli sorular fakat bana göre yaklaşmakta olan daha büyük mühendislik problemi başka yerde.

**Ajana ne kadar zekâ verebildiğimizden çok, o zekânın dünyayı ne kadar güvenli değiştirebildiği önemli olacak.**

Read-only ajan dünyasında model hatası çoğunlukla yanlış cevap üretir. Write-capable ajan dünyasında model hatası state değiştirir. Veritabanı kaydı değişir, network route değişir, storage object silinir, cloud resource oluşturulur, para transfer edilir veya müşteriye mesaj gönderilir.

Bu noktadan sonra AI güvenliği yalnızca model üreticilerinin problemi olmaktan çıkar. Veritabanı üreticilerinin, cloud provider'ların, network üreticilerinin, observability platformlarının, IAM sistemlerinin ve bizim gibi yazılım mühendislerinin problemi haline gelir.

Kurduğumuz altyapıları bugün çoğunlukla insanlar ve deterministik yazılım sistemleri kullanıyor.

Yakında üçüncü bir kullanıcı sınıfımız olacak:

**İnsan olmayan, deterministik olmayan fakat gerçek dünyada işlem yapabilen ajanlar.**

Veritabanı, network ve storage teknolojilerinin önümüzdeki yıllardaki en büyük dönüşümlerinden birinin bu yeni kullanıcı sınıfına uyum sağlamak olacağını düşünüyorum. Çünkü ajanların gerçekten faydalı olmasını istiyorsak sonsuza kadar read-only kalamazlar.

Bir noktada onlara yazma yetkisi vereceğiz.

Ve asıl agentic çağ, muhtemelen tam da o gün başlayacak.

---

{% include share_twitter_tr.html %}

---

