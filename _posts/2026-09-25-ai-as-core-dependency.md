---

layout: post
title: "AI'sation: Yazılımlarımızı Akıllandırırken Kritik Bir Bağımlılık mı Yaratıyoruz?"
subtitle: "Yapay zekâyı yazılımın merkezine taşırken dayanıklılık, sürdürülebilirlik ve kontrol üzerine yeniden düşünmek"
date: 2026-09-25
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- software-architecture
- resilience
- ai-native
- finops
- software-engineering

---

Yapay zekânın yazılım dünyasındaki rolü hızla değişiyor. Birkaç yıl önce mevcut uygulamalara eklediğimiz yardımcı özellikler olarak gördüğümüz AI yetenekleri, bugün yazılım mimarisinin merkezine doğru ilerliyor. Başlangıçta kullanıcıya öneriler sunan, metin özetleyen veya doğal dilde sorgulama yapabilen bileşenler geliştiriyorduk. Artık iş süreçlerini yöneten, kararlar üreten, araçları çalıştıran ve daha önce deterministik algoritmalarla gerçekleştirdiğimiz bazı işlemleri doğrudan üstlenen AI tabanlı sistemler tasarlıyoruz.

Bu dönüşümü bir tür *AI'sation*, yani yazılımın giderek yapay zekâ merkezli hale gelmesi olarak adlandırabiliriz. Burada yalnızca mevcut yazılıma AI özellikleri eklemekten bahsetmiyorum. Yazılımın temel yeteneklerinin, iş kurallarının ve kullanıcıyla etkileşim biçiminin giderek AI tarafından gerçekleştirildiği daha köklü bir mimari dönüşümden söz ediyorum.

Daha önce [AI-Augmented Software Engineering ve AI-Native Development]({% post_url 2026-04-17-002-ai-sugmented-dev %}) başlıklı yazımda AI ile güçlendirilmiş yazılım geliştirme ile AI-native geliştirme arasındaki farkı ele almıştım. O yazıda esas olarak yazılımı nasıl geliştirdiğimizin değişimine odaklanmıştım. Ancak bugün aynı dönüşümün başka bir boyutunun giderek daha önemli hale geldiğini düşünüyorum: Geliştirdiğimiz yazılımın kendisi AI olmadan ne kadar çalışabilecek?

{::comment}end-of-excerpt{:/comment}

Bu soru ilk bakışta teknolojik ilerlemeye karşı duyulan bir kuşku gibi görünebilir. Oysa benim açımdan mesele AI'ın yetenekli olup olmaması değil, bu yetenekleri yazılımın merkezine yerleştirirken hangi mühendislik ilkelerinden uzaklaşmaya başladığımız.

Çünkü yazılım mühendisliğinde yıllardır sistemlerimizi tekil hata noktalarından (single point of failure), değiştirilemeyen bağımlılıklardan ve kontrol edemediğimiz dış bileşenlerden mümkün olduğunca bağımsız hale getirmeye çalışıyoruz. Dağıtık sistemler tasarlıyor, yedeklilik sağlıyor, hata toleransı geliştiriyor, alternatif servis sağlayıcıları değerlendiriyor ve kritik bileşenler için felaket kurtarma senaryoları hazırlıyoruz.

Şimdi ise giderek daha fazla yazılım yeteneğini, çalışması için dışarıdaki bir AI sağlayıcısına ihtiyaç duyan bileşenlerle değiştirmeye başlıyoruz.

Acaba yazılımı daha akıllı hale getirirken aynı zamanda daha kırılgan hale mi getiriyoruz?

## AI destekli özellikten AI bağımlı yazılıma

Başlangıçta AI entegrasyonlarının önemli bir bölümü mevcut yazılımın üzerine eklenen yardımcı yeteneklerden oluşuyordu. Örneğin bir raporlama uygulamasına doğal dilde rapor oluşturma özelliği eklediğimizde kullanıcı yeni bir kolaylık kazanıyordu. AI servisi erişilemez hale geldiğinde ise geleneksel raporlama ekranları çalışmaya devam ediyordu.

Bu mimari oldukça anlaşılırdı. AI, sistemin temel işlevlerini destekleyen ancak onların çalışması için zorunlu olmayan bir bileşendi.

Bugün ise farklı bir yöne ilerliyoruz. Geleneksel filtreleme ve sorgulama ekranlarını conversational interface'lerle, önceden tanımlanmış iş akışlarını AI agent'larla, kurallara dayalı karar mekanizmalarını model tabanlı değerlendirmelerle değiştirmeyi tartışıyoruz. Hatta bazı durumlarda belirli bir işlevi klasik yazılım yöntemleriyle gerçekleştirmek yerine tamamen bir LLM üzerinden çözmek daha hızlı ve ekonomik görünüyor.

Burada önemli bir ayrım olduğunu düşünüyorum. AI ile güçlendirilmiş bir yazılım ile AI olmadan temel işlevlerini yerine getiremeyen bir yazılım aynı şey değil.

Birincisinde AI erişilebilirliği kullanıcının deneyimini ve üretkenliğini etkilerken, ikincisinde doğrudan yazılımın çalışabilirliğini belirliyor.

Bu ayrımı biraz daha inceltirsek AI bağımlılığını üç seviyede düşünebiliriz:

- **Kolaylık bağımlılığı:** AI erişilemez olduğunda kullanıcı bir kolaylığı kaybeder, ancak iş aynı şekilde yapılabilir. Doğal dilde rapor oluşturma bu türden bir özellik.
- **Süreç bağımlılığı:** AI erişilemez olduğunda belirli bir iş süreci yavaşlar veya manuel işlemlere döner, fakat sistemin temel işlevleri çalışmaya devam eder.
- **Çekirdek bağımlılık:** AI erişilemez olduğunda uygulamanın temel işlevlerinden biri kullanılamaz hale gelir.

Yazının geri kalanında tartışacağım risklerin ağırlığı, bir özelliğin bu seviyelerden hangisinde bulunduğuna göre değişiyor.

Bu fark, özellikle kurumsal yazılım dünyasında oldukça önemli. Üretim yönetimi, finans, lojistik, sağlık veya endüstriyel otomasyon gibi alanlarda bir uygulamanın temel işlevlerinin kullanılamaz hale gelmesi yalnızca kullanıcı deneyiminin bozulması anlamına gelmiyor. Gerçek operasyonların aksamasına, ekonomik kayıplara ve kimi durumlarda güvenlik risklerine neden olabiliyor.

Örneğin üretim verilerini analiz eden bir sistem düşünelim. Geleneksel mimaride veriler toplanıyor, önceden tanımlanmış hesaplamalar yapılıyor ve sonuçlar raporlanıyor. AI entegrasyonu sayesinde kullanıcı artık doğal dille sorular sorabiliyor, sistem anomalileri yorumlayabiliyor ve olası nedenleri açıklayabiliyor.

Bu önemli bir kazanım.

Ancak bir sonraki aşamada geleneksel analiz mekanizmalarını kaldırıp bütün analitik yetenekleri bir AI agent üzerinden sunmaya başlarsak, artık farklı bir sistem inşa ediyoruz: Analitik yetenek kolaylık bağımlılığından çekirdek bağımlılığa geçiyor. Model sağlayıcısına erişim kaybolduğunda yalnızca akıllı analiz özelliğini değil, daha önce bağımsız olarak çalışan temel analitik yeteneklerimizi de kaybedebiliriz.

Burada sorun AI kullanmamız değil. Daha önce kontrolümüzde olan bir yeteneği, erişimi ve davranışı üzerinde tam kontrole sahip olmadığımız bir bağımlılığa dönüştürmemiz.

## Klasik yazılım mühendisliğinin unutmaya başladığımız ilkeleri

Yazılım mühendisliği tarihi bir bakıma bağımlılıkları yönetme çabasının tarihi olarak da okunabilir. Monolitik yapılardan dağıtık sistemlere geçerken, bulut altyapılarını kullanırken veya üçüncü taraf servislerle entegrasyon geliştirirken sürekli olarak aynı sorularla karşılaştık.

Bir servis erişilemez hale gelirse ne olacak? Alternatif sağlayıcıya geçebilir miyiz? Bağımlılığımızın maliyeti beklenmedik şekilde artarsa nasıl hareket edeceğiz? Sistemin kritik yetenekleri, bağımlı olduğu bileşenlerden birinin başarısızlığı karşısında çalışmaya devam edebilecek mi?

Bu soruların tamamına kusursuz cevaplar üretebildiğimizi iddia edemeyiz. Özellikle modern bulut mimarilerinde ciddi tedarikçi bağımlılıkları oluştuğunu biliyoruz. Ancak en azından bu sorunları tanımlayan, ölçen ve azaltmaya çalışan bir mühendislik disiplini geliştirdik.

Örneğin AWS Well-Architected Framework, *graceful degradation* yaklaşımını açık biçimde ele alıyor. Temel fikir, bir sistemin bağımlılıkları erişilemez hale geldiğinde tamamen durmak yerine azaltılmış yeteneklerle çalışmaya devam edebilmesi. Bir bileşenin çalışamaması, her zaman bütün sistemin çalışamaz hale gelmesini gerektirmemeli.

Peki aynı ilkeyi AI-native yazılımlarımız için ne kadar uyguluyoruz?

Bence bugün yeterince tartışmadığımız konulardan biri bu.

AI servislerini çoğu zaman sıradan bir HTTP API bağımlılığı gibi değerlendiriyoruz. Bir abstraction layer tanımlıyor, timeout ve retry mekanizmaları ekliyor, belki bir circuit breaker kullanıyoruz. Bunlar elbette gerekli. Ancak AI bağımlılığının kendine özgü niteliğini tam olarak karşılamıyorlar.

Çünkü geleneksel bir API sağlayıcısını değiştirmekle bir dil modelini değiştirmek aynı şey değil.

İki farklı veritabanı sağlayıcısının SQL uyumluluğu belirli sınırlar içerisinde ölçülebilir. İki farklı mesaj kuyruğu sisteminin teslimat garantilerini, sıralama davranışlarını ve hata senaryolarını karşılaştırabiliriz. Ancak aynı prompt'u iki farklı LLM'e gönderdiğimizde aynı iş sonucunu elde edeceğimizin garantisi yok.

Model değişikliği yalnızca teknik bir entegrasyon değişikliği olmayabilir. Uygulamanın gözlenebilir iş davranışını değiştirebilir.

Bu nedenle AI sağlayıcısına bağımlılık, klasik bir altyapı bağımlılığından daha karmaşık bir problem yaratıyor.

## Ya AI sağlayıcısına erişimimizi kaybedersek?

Bu senaryoyu yalnızca veri merkezi arızası veya geçici servis kesintisi üzerinden düşünmemek gerekiyor. Erişim kaybının farklı nedenleri olabilir.

Bir sağlayıcı belirli bir bölgede hizmet sunmayı durdurabilir. Ticari anlaşmalar değişebilir, hesaplara kısıtlamalar getirilebilir, kullanım kotaları azaltılabilir veya belirli modeller kullanımdan kaldırılabilir. Jeopolitik gelişmeler ve düzenleyici kararlar da sınır ötesi AI hizmetlerine erişimi etkileyebilir.

Bunların her biri her müşteri için aynı olasılığa sahip değil. Ancak kritik bir yazılımın mimarisini tasarlarken yalnızca en olası senaryoları değil, gerçekleştiğinde ciddi sonuçlar doğurabilecek senaryoları da değerlendirmemiz gerekiyor.

Üstelik AI servislerinde kesintiler yalnızca teorik bir risk değil. OpenAI'ın kamuya açık servis durum geçmişinde API hizmetlerini etkileyen hata oranı artışları, gecikmeler ve farklı servis bozulmaları görülebiliyor. Bu durum tek başına AI sağlayıcılarının diğer bulut servislerinden daha güvensiz olduğunu göstermiyor. Ancak AI'ı kritik bir bağımlılığa dönüştürdüğümüzde bu tür olayların etkisi de değişiyor.

Bir başka konu model yaşam döngüsü. Anthropic'in model deprecation dokümantasyonu, modellerin zaman içerisinde kullanımdan kaldırılabildiğini ve eski modellere yapılan isteklerin artık çalışmayabileceğini açık biçimde ortaya koyuyor.

Bu oldukça önemli bir ayrıntı.

Geleneksel yazılımda bağımlı olduğumuz bir kütüphanenin sürümünü sabitleyip belirli bir süre kullanabiliyoruz. Yönetilen AI servislerinde ise modelin yaşam döngüsünü çoğu zaman sağlayıcı belirliyor. Çalışan bir özelliğimiz, kendi kodumuzda hiçbir değişiklik yapmasak bile belirli bir tarihten sonra yeni bir modele taşınmak zorunda kalabiliyor.

Daha da önemlisi, yeni model teknik olarak daha yetenekli olsa bile bizim uygulamamızdaki belirli bir iş akışı için aynı davranışı göstermeyebilir.

Dolayısıyla model değişikliği yalnızca sürüm yükseltme faaliyeti olarak görülmemeli. Gerektiğinde iş kurallarının ve kabul kriterlerinin yeniden doğrulandığı bir yazılım değişikliği olarak ele alınmalı.

## Token maliyeti yeni bir ekonomik bağımlılık yaratıyor

Erişilebilirlik önemli bir konu ancak bence AI'sation sürecinin en az onun kadar önemli başka bir riski daha var: ekonomik sürdürülebilirlik.

Geleneksel bir yazılım özelliğini geliştirdiğimizde başlangıçta bir mühendislik maliyetine katlanıyoruz. Sonrasında elbette işlemci, bellek, depolama, ağ ve bakım maliyetleri oluşuyor. Ancak pek çok deterministik işlevin marjinal çalışma maliyeti oldukça düşük ve ölçekleme davranışı görece öngörülebilir olabiliyor.

AI tabanlı özelliklerde farklı bir ekonomik model ortaya çıkıyor. Özellikle dışarıdan tüketilen LLM servislerinde her işlem bir inference maliyeti yaratıyor. Bu maliyet kullanılan modele, input ve output token miktarına, context büyüklüğüne ve agent'ın kaç kez model çağrısı yaptığına bağlı olarak değişebiliyor.

Bir iş akışı yalnızca tek bir model çağrısından oluşmayabilir. Agent planlama yapabilir, araç çağırabilir, gelen sonuçları yeniden değerlendirebilir, başarısız adımları tekrar deneyebilir ve başka agent'larla iletişime geçebilir. Kullanıcının basit gördüğü bir işlem, arka planda çok sayıda inference çağrısı üretebilir.

Bu durum maliyetin kullanıcı sayısıyla veya işlem sayısıyla doğrusal olarak artacağını varsaymayı da zorlaştırıyor.

FinOps Foundation'ın token ekonomisi üzerine çalışmaları, AI tüketiminin yalnızca token miktarı üzerinden değil, üretilen iş değeriyle birlikte değerlendirilmesi gerektiğini vurguluyor. Bence burada yazılım ürünlerinin geleceğini doğrudan etkileyebilecek bir konu var.

Bugün bir yazılım şirketi, AI destekli yeni bir özelliği pazara sunarken mevcut token fiyatlarını esas alarak fiyatlandırma yapabilir. Peki sağlayıcı fiyatlarını önemli ölçüde artırırsa ne olacak? Ya daha önce belirli bir maliyetle çalışan iş akışı, model değişikliği veya artan context gereksinimleri nedeniyle çok daha pahalı hale gelirse?

Elbette fiyatların mutlaka artacağını söylemiyorum. AI inference maliyetleri teknolojik gelişmeler ve rekabet nedeniyle azalabilir de. Hatta bugüne kadar bazı model sınıflarında ciddi fiyat düşüşleri gördük. Ancak burada kritik olan fiyatların hangi yönde hareket ettiği değil, yazılım ürününün temel maliyet bileşenlerinden birinin şirketin kontrolü dışında belirlenmesi.

Bir yazılım şirketi kendi ürününün geliştirme maliyetlerini yönetebilir, altyapısını optimize edebilir ve müşterilerine uzun vadeli fiyat taahhütleri verebilir. Fakat ürünün kritik yetenekleri sürekli olarak üçüncü taraf AI servisleri tüketiyorsa, ürünün birim ekonomisi giderek bu servislerin ticari koşullarına bağlanır.

Örneğin müşterisine yıllık sabit bedelle yazılım satan bir şirket düşünelim. Kullanıcı sayısı ve işlem hacmi büyüdükçe AI tüketimi de artabilir. Eğer bu tüketim yeterince öngörülemiyorsa şirketin müşteri başına kârlılığı beklenmedik biçimde düşebilir.

Tersi de mümkün. Şirket token maliyetlerini doğrudan müşteriye yansıtabilir. Ancak bu durumda yazılımı kullanan kurum, daha önce öngörülebilir maliyetlerle gerçekleştirdiği işlemleri artık değişken bir maliyet modeliyle yürütmek zorunda kalır.

Dolayısıyla AI'sation yalnızca teknik bir bağımlılık yaratmıyor. Yazılım üreticisi ile müşteri arasındaki ekonomik ilişkiyi de yeniden şekillendiriyor.

Belki de önümüzdeki dönemde daha sık sormamız gereken soru şu olacak: Bir işlevi AI ile gerçekleştirmek mümkün mü değil, o işlevi AI ile gerçekleştirmek uzun vadede ekonomik olarak sürdürülebilir mi?

## Multi-model stratejisi gerçekten bağımsızlık sağlıyor mu?

Bu sorunlara karşı önerilen ilk çözümlerden biri birden fazla AI sağlayıcısını desteklemek. Uygulamayı belirli bir modele doğrudan bağlamak yerine bir model gateway veya abstraction layer kullanıyor, böylece farklı sağlayıcılar arasında geçiş yapabileceğimizi varsayıyoruz.

Bu yaklaşımın değerli olduğunu düşünüyorum. Ancak tek başına yeterli olduğuna inanmıyorum.

Bir sağlayıcının API'si çalışmadığında başka bir sağlayıcının API'sine yönlenmek, entegrasyon düzeyinde bir dayanıklılık sağlayabilir. Fakat farklı modellerin aynı işi aynı doğrulukta, aynı maliyetle ve aynı davranışsal sınırlar içerisinde gerçekleştireceği anlamına gelmez.

Örneğin belirli bir modelle geliştirilmiş doğal dil tabanlı SQL üretim mekanizmasını düşünelim. Prompt yapımızı, tool tanımlarımızı, veri tabanı şeması açıklamalarımızı ve doğrulama süreçlerimizi bu modelin davranışına göre optimize etmiş olabiliriz. Başka bir modele geçtiğimizde aynı sorgunun farklı SQL ifadeleriyle üretildiğini, bazı iş kurallarının farklı yorumlandığını veya daha önce karşılaşmadığımız hata türlerinin ortaya çıktığını görebiliriz.

Aynı durum tool calling, structured output, uzun context kullanımı ve çok adımlı agent davranışları için de geçerli.

Bu nedenle model bağımsızlığı ile model değiştirilebilirliğini birbirinden ayırmak gerekiyor.

Bir sistem farklı modellerle teknik olarak iletişim kurabiliyorsa model bağımsızlığına yönelik bir altyapıya sahip olabilir. Ancak bir modelden diğerine geçtiğinde kabul edilebilir iş davranışını koruyabiliyorsa gerçek anlamda model değiştirilebilirliğine yaklaşmış olur.

İkinci koşul çok daha zor.

Daha önce [Kısıtlar Yapay Zekâyı Determinizme Yaklaştırabilir mi?]({% post_url 2026-08-30-ai-constrained-behavioral-determinism %}) ve [Spec-Driven Development'tan Formal Spec-Driven Development'a]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) yazılarımda, AI'ın olasılıksal doğasını ortadan kaldırmadan sistemin kabul edilebilir davranışlarını kısıtlamayı ele almıştım.

Bence aynı düşünce model taşınabilirliği açısından da geçerli.

Modelden bağımsız olmak istiyorsak yalnızca API çağrılarını soyutlamak yeterli değil. İşlevin beklenen davranışını modelden bağımsız biçimde tanımlamamız ve farklı modellerin bu beklentiyi ne ölçüde karşıladığını doğrulayabilmemiz gerekiyor.

Başka bir ifadeyle gerçek bağımsızlığın merkezinde model gateway değil, davranışsal sözleşme bulunmalı.

## Local modeller çözüm olabilir mi?

Dış sağlayıcılara bağımlılığı azaltmanın bir başka yolu modelleri kendi altyapımızda çalıştırmak. Açık ağırlıklı modellerin gelişimi bu açıdan önemli fırsatlar yaratıyor. Özellikle belirli görevler için optimize edilmiş küçük modeller, kontrollü ortamlarda çalışan inference servisleri ve hibrit mimariler üzerinde daha fazla düşünmemiz gerektiğine inanıyorum.

Ancak local modelleri bütün sorunların çözümü olarak görmek de doğru değil.

Öncelikle bir modeli kendi altyapımızda çalıştırabilmek, o modelin ihtiyaç duyduğumuz işlevi kabul edilebilir kalite ve performansla gerçekleştirebileceği anlamına gelmiyor. Özellikle karmaşık muhakeme, uzun bağlamlı işlemler ve çok adımlı agent senaryolarında model kapasitesi önemli bir sınırlama olabilir.

Bunun yanında GPU altyapısı, enerji tüketimi, ölçekleme, model güncellemeleri, güvenlik, gözlemlenebilirlik ve operasyonel bakım gibi sorumluluklar ortaya çıkıyor. Dış sağlayıcıya ödenen token maliyetini ortadan kaldırırken bu kez kendi inference altyapımızın maliyetini ve karmaşıklığını üstleniyoruz.

Local model kullanımı teknik olarak mümkün olsa da her yazılım şirketinin bunu üretim ortamında ekonomik, güvenilir ve ölçeklenebilir biçimde gerçekleştirecek olgunluğa sahip olduğunu varsayamayız. Özellikle küçük ve orta ölçekli yazılım üreticileri açısından bu ciddi bir yatırım gerektirebilir.

Ayrıca bulut servislerinde karşılaştığımız operasyonel sorunların benzerleri kendi altyapımızda da ortaya çıkacaktır. Donanım arızaları, kapasite planlaması, yedeklilik ve sürüm yönetimi ortadan kalkmıyor.

Yine de local modellerin stratejik değerinin yalnızca inference maliyetinde aranmasının eksik olacağını düşünüyorum. Asıl değer, yazılım üreticisine belirli bir düzeyde operasyonel bağımsızlık sağlayabilmesinde olabilir.

Bir dış sağlayıcıya erişim kaybolduğunda kritik işlevlerin bir bölümünü daha düşük kapasiteyle de olsa kendi altyapısında sürdürebilen bir sistem, bütün yetenekleri dış servislerin erişilebilirliğine bağlı olan bir sistemden farklı bir dayanıklılık profiline sahip olacaktır.

Burada hedef her modeli local çalıştırmak değil, hangi işlevlerin dış bağımlılık olmadan sürdürülebilmesi gerektiğini önceden belirlemek olmalı.

## AI-native olmak, AI olmadan çalışamamak anlamına gelmeli mi?

Sanırım bu dönüşümle ilgili en önemli mimari sorulardan biri burada ortaya çıkıyor.

AI-native sistemler tasarlarken AI'ı merkezî bir yetenek olarak kabul ediyoruz. Ancak AI'ın merkezde olması, sistemin bütün kritik işlevlerinin AI erişimine zorunlu olarak bağlanması anlamına gelmek zorunda mı?

Bence gelmemeli.

Bir yazılımın bazı yeteneklerinin doğası gereği AI olmadan gerçekleştirilemeyeceğini kabul ediyorum. Karmaşık doğal dil anlama, açık uçlu muhakeme ve belirli üretken işlevlerin geleneksel algoritmalarla eşdeğer biçimde gerçekleştirilmesi mümkün olmayabilir veya ekonomik olarak anlamlı olmayabilir.

Ancak bu durum, sistemdeki bütün işlevlerin aynı bağımlılık düzeyine sahip olması gerektiği anlamına gelmez.

Örneğin bir üretim yönetim sisteminde operatörün üretim emrini başlatması, gerçekleşen üretim miktarını kaydetmesi, makine durumlarını izlemesi veya belirli iş kurallarını uygulaması için genel amaçlı bir LLM'e bağımlı olmamız gerekmiyor. AI bu süreçleri daha akıllı, daha kolay ve daha verimli hale getirebilir. Fakat temel işlemlerin tamamını AI üzerinden yürütmek her zaman doğru mimari karar olmayabilir.

Bu noktada *AI degradation* veya daha genel anlamıyla *graceful degradation* yaklaşımının AI-native yazılımlar için önemli bir tasarım ilkesi haline gelmesi gerektiğini düşünüyorum.

Sistem, AI servisleri erişilebilir olduğunda bütün gelişmiş yeteneklerini sunabilir. Erişim kaybolduğunda daha sınırlı bir çalışma moduna geçebilir. Kullanıcıya gelişmiş analizler, doğal dil arayüzleri veya otonom iş akışları sunamayabilir, ancak kritik işlemleri deterministik mekanizmalarla sürdürmeye devam edebilir.

Elbette bu yaklaşım her özellik için mümkün değil. Ayrıca fallback mekanizmalarının da geliştirme ve bakım maliyeti var. Ancak özellikle kritik iş süreçlerinde bu maliyetin, sistemin tamamen durmasının yaratacağı riskle karşılaştırılması gerekiyor.

Burada açıkça kabul etmemiz gereken bir gerilim de var. Yazının başında, bazı işlevleri klasik yöntemler yerine bir LLM üzerinden çözmenin daha hızlı ve ekonomik görünebildiğini söylemiştim. Oysa kritik bir işlev için deterministik bir fallback korumak, aynı yeteneğin iki ayrı uygulamasını geliştirmek, test etmek ve bakımını yapmak anlamına geliyor. Bu durumda AI'a geçişin vaat ettiği tasarrufun önemli bir kısmı ortadan kalkabilir.

Bu nedenle çekirdek işlevler için asıl soru çoğu zaman "AI'a nasıl fallback ekleriz?" değil, "Bu işlevi neden AI'a taşıyoruz?" olmalı. Deterministik olarak iyi çalışan bir çekirdek işlevi yerinde bırakıp AI'ı onun üzerine bir yetenek katmanı olarak eklemek, yani bu bağımlılığı baştan bir kolaylık bağımlılığı olarak tasarlamak, çoğu durumda hem daha dayanıklı hem de daha ekonomik olacaktır. Fallback mekanizmaları ise AI olmadan gerçekleştirilemeyen ama yine de kritik olan işlevler için ayrılmalı.

Burada klasik yazılım mühendisliğinin önemli bir ilkesini yeniden hatırlamakta fayda var: Bir bağımlılığın başarısız olması, mümkün olan her durumda sistemin bütünü için başarısızlık anlamına gelmemeli.

## AI'sation için yeni bir mimari disipline ihtiyacımız olabilir

Bence AI tabanlı özellikleri geliştirirken artık yalnızca model kalitesi, response latency veya token tüketimi gibi metriklerle yetinmemeliyiz. Bunların yanına bağımlılık, taşınabilirlik, davranışsal doğrulama ve operasyonel dayanıklılık metriklerini de eklemeliyiz.

Öncelikle her AI özelliğinin yukarıda tanımladığım kolaylık, süreç ve çekirdek bağımlılık seviyelerinden hangisinde bulunduğunu açık biçimde belirlemeliyiz. Bu ayrım yapılmadan bütün AI entegrasyonlarına aynı mimari yaklaşımı uygulamak doğru görünmüyor.

İkinci olarak model değiştirilebilirliğini gerçek test senaryolarıyla doğrulamamız gerekiyor. Birden fazla sağlayıcıyı desteklediğimizi söylemek yerine, belirli bir modeli devre dışı bıraktığımızda sistemin işlevlerini hangi doğruluk, gecikme ve maliyet seviyesinde sürdürebildiğini ölçmeliyiz. Bir modelin başka bir modelle değiştirilmesi teknik olarak mümkün olsa bile ortaya çıkan iş sonuçları kabul edilebilir olmayabilir.

Üçüncü olarak ekonomik dayanıklılığı değerlendirmeliyiz. Token fiyatlarının veya tüketim miktarının belirli oranlarda artması halinde ürünün birim ekonomisinin nasıl değişeceğini bilmek önemli. Bir özelliğin bugünkü fiyatlarla ekonomik olması, gelecekteki bütün koşullarda ekonomik kalacağını garanti etmiyor. Bu nedenle token budget, maliyet sınırları, model routing ve gerektiğinde işlem kapasitesini azaltma gibi mekanizmalar mimarinin parçası olmalı.

Dördüncü olarak kritik işlevler için AI dışı çalışma seçeneklerini değerlendirmeliyiz. Bazı yetenekler geleneksel algoritmalarla, bazıları daha küçük modellerle, bazıları ise insan onayı veya manuel işlemlerle sürdürülebilir. Burada amaç AI'ın sağladığı kazanımlardan vazgeçmek değil, tek bir bağımlılığın başarısızlığını bütün sistemin başarısızlığına dönüştürmemek.

Son olarak AI sağlayıcısının kaybedilmesini de düzenli olarak test edilen bir hata senaryosu haline getirmemiz gerektiğini düşünüyorum.

Chaos engineering yaklaşımında altyapı bileşenlerinin başarısızlığını bilinçli olarak test ediyoruz. Benzer biçimde bir AI sağlayıcısını devre dışı bıraktığımızda, model yanıtlarını geciktirdiğimizde, kullanım kotasını tükettiğimizde veya maliyet bütçesini aştığımızda sistemin nasıl davrandığını da gözlemleyebilmeliyiz.

Böyle testler yapılmadığında multi-model desteği, fallback mekanizmaları ve AI bağımsızlığı hakkındaki iddialarımız büyük ölçüde mimari varsayımlar olarak kalacaktır.

## Ekonominin ötesinde: Ürün üzerindeki kontrol

Maliyet bölümünde AI'sation'ın yazılım üreticisi ile müşteri arasındaki ekonomik ilişkiyi değiştirdiğini söylemiştim. Bu değişimin yalnızca fiyatla ilgili olmayan bir boyutu daha var: yazılım üreticisinin kendi ürünü üzerindeki kontrolü.

Geleneksel yazılım modelinde şirketler geliştirdikleri yazılımın fikrî mülkiyetine, iş kurallarına ve çalıştırılabilir bileşenlerine belirli ölçülerde sahip olabiliyordu. Ürünün sürekli çalışması için altyapı ve lisans bağımlılıkları elbette vardı. Ancak özellikle on-premise yazılımlarda üreticiden veya dış servislerden bağımsız biçimde çalışabilen sistemler oluşturmak mümkündü.

AI-native dünyada bu denge değişebilir.

Yazılımın kritik değerinin giderek daha büyük bir kısmı, üçüncü taraf modellerin sağladığı muhakeme ve üretim yeteneklerinden gelmeye başladığında yazılım üreticisinin kendi ürünü üzerindeki kontrol alanı daralabilir.

Bu, yazılım şirketlerinin değer üretemeyeceği anlamına gelmiyor. Aksine alan bilgisi, müşteri süreçleri, entegrasyonlar, güvenlik, doğrulama mekanizmaları ve kullanıcı deneyimi daha önemli hale gelebilir.

Bu kontrol kaybının sonuçlarını ise zincirin son halkasındaki müşteri taşıyor.

Özellikle kritik sistemleri uzun yıllar kullanmayı planlayan kurumlar açısından sorulması gereken soruların değişeceğini düşünüyorum. Bir yazılımın AI özelliklerine sahip olması tek başına yeterli olmayacak. Müşteri, AI sağlayıcısı değiştiğinde ne olacağını, model erişimi kesildiğinde hangi işlevlerin çalışacağını, token maliyetlerinin nasıl yönetileceğini ve gerektiğinde başka bir inference altyapısına geçilip geçilemeyeceğini de bilmek isteyecek.

NIST'in Generative AI Risk Management Profile çalışmasında üçüncü taraf bağımlılıkları ve AI değer zinciri boyunca oluşan risklerin ele alınması da bu açıdan anlamlı. AI sistemlerinin risklerini yalnızca model çıktılarının güvenilirliği üzerinden değil, onları mümkün kılan tedarik zinciri ve yönetişim ilişkileri üzerinden de değerlendirmek gerekiyor.

Belki de önümüzdeki yıllarda kurumsal yazılım satın alma süreçlerinde AI bağımlılığı, güvenlik ve veri sahipliği kadar önemli bir değerlendirme kriterine dönüşecek.

## Sonuç: Yazılımın zekâsı artarken kontrolümüz azalmak zorunda değil

AI'ın yazılım dünyasındaki etkisinin geçici bir eğilim olduğunu düşünmüyorum. Aksine önümüzdeki yıllarda geliştirdiğimiz yazılımların daha fazla AI yeteneği içereceğini, bazı geleneksel özelliklerin tamamen ortadan kalkacağını ve bugün kullandığımız birçok kullanıcı etkileşim modelinin değişeceğini düşünüyorum.

Ancak bu dönüşümün kaçınılmaz olması, her mimari kararın doğru olduğu anlamına gelmiyor.

Yazılım mühendisliği tarihinde yeni teknolojileri benimserken kimi zaman daha önce öğrendiğimiz dersleri yeniden öğrenmek zorunda kaldık. Dağıtık sistemlerde ağın güvenilir olmadığını, mikroservislerde servisler arası iletişimin bedelsiz olmadığını, bulut sistemlerinde altyapı bağımlılığının ortadan kalkmadığını zaman içerisinde gördük.

AI-native sistemlerde de benzer bir süreç yaşayabiliriz.

Bugün hız, yetenek ve üretkenlik kazanımlarına odaklanırken AI sağlayıcılarının erişilebilirliğini, ekonomik koşullarını ve model davranışlarını mimarimizin değişmez parçaları gibi kabul ediyor olabiliriz.

Oysa bunların hiçbiri değişmez değil.

Bir model kullanımdan kaldırılabilir, bir sağlayıcı erişilemez hale gelebilir, ticari koşullar değişebilir veya daha önce ekonomik olan bir işlev sürdürülemez hale gelebilir. Bunlar gerçekleştiğinde yazılımın hangi yeteneklerini kaybedeceğimizi bilmemiz gerekiyor.

Daha önce [Kısıtlar Yapay Zekâyı Determinizme Yaklaştırabilir mi?]({% post_url 2026-08-30-ai-constrained-behavioral-determinism %}) ve [Formal Spec-Driven Development]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) yazılarımda, programı üreten sistemin olasılıksal olabileceğini, ancak programı kabul eden sistemin deterministik olması gerektiğini savunmuştum. O tartışma AI'ın geliştirme sırasında ürettiği kod üzerineydi; fakat aynı ilke AI'ın çalışma zamanındaki rolü için de geçerli. Modelin cevabı olasılıksal olabilir, sağlayıcısı değişebilir, erişimi kesilebilir. Ancak hangi sonucun kabul edileceğine, hangi işlevin AI olmadan da sürmesi gerektiğine ve sistemin hangi koşullarda daha sınırlı bir moda geçeceğine dair kurallar deterministik olmalı ve bizim kontrolümüzde kalmalı.

Yazılımın zekâsı dışarıdan sağlanabilir. Ancak yazılımın iş sürekliliğinin, kritik kurallarının ve kabul edilebilir davranışlarının kontrolü mümkün olduğunca sistemin kendisinde kalmalı.

AI'sation sürecini yalnızca yazılıma daha fazla AI özelliği eklemek olarak görürsek, kısa vadede çok etkileyici ancak uzun vadede kırılgan ürünler geliştirme riskiyle karşılaşabiliriz.

Buna karşılık AI'ı güçlü fakat değiştirilebilir, sınırlandırılabilir ve gerektiğinde devre dışı bırakılabilir bir bileşen olarak ele alabilirsek, hem dönüşümün sunduğu fırsatlardan yararlanabilir hem de yıllardır geliştirdiğimiz yazılım mühendisliği disiplinini koruyabiliriz.

Sonuçta asıl soru yazılımlarımıza ne kadar yapay zekâ ekleyebileceğimiz değil.

**Yapay zekâya erişimimizi kaybettiğimizde yazılımımızdan geriye ne kalacağı.**

---

## Kaynaklar ve ilgili okumalar

### Önceki yazılarım

1. [AI-Augmented Software Engineering ve AI-Native Development]({% post_url 2026-04-17-002-ai-sugmented-dev %}) - Ali Özgür, 17 Nisan 2026. AI ile güçlendirilmiş yazılım geliştirme ve AI-native yaklaşım arasındaki ayrım.

2. [Kısıtlar Yapay Zekâyı Determinizme Yaklaştırabilir mi?]({% post_url 2026-08-30-ai-constrained-behavioral-determinism %}) - Ali Özgür, 30 Ağustos 2026. Olasılıksal AI davranışlarının kısıtlar ve doğrulama mekanizmalarıyla yönetilmesi.

3. [Spec-Driven Development'tan Formal Spec-Driven Development'a]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) - Ali Özgür, 31 Ağustos 2026. Modelden bağımsız davranışsal sözleşmeler ve deterministik doğrulama yaklaşımı.

4. [Hooks Are Not Extensibility]({% post_url 2026-03-17-ai-coding-tools-extensibility %}) - Ali Özgür, 17 Mart 2026. AI sistemlerinde kontrol, genişletilebilirlik ve deterministik yürütme katmanlarının eksikliği.

### Teknik ve akademik kaynaklar

5. [AWS Well-Architected Framework: Implement Graceful Degradation](https://docs.aws.amazon.com/wellarchitected/2023-04-10/framework/rel_mitigate_interaction_failure_graceful_degradation.html) - Amazon Web Services. Bağımlılıkların başarısızlığı karşısında kritik sistem yeteneklerinin sürdürülebilmesi.

6. [Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)](https://doi.org/10.6028/NIST.AI.600-1) - National Institute of Standards and Technology, 2024. Üretken AI sistemlerinde risk yönetimi, üçüncü taraf bağımlılıkları ve değer zinciri riskleri.

7. [Model Deprecations](https://docs.anthropic.com/en/docs/about-claude/model-deprecations) - Anthropic. Yönetilen AI modellerinin yaşam döngüsü, kullanımdan kaldırılması ve model geçişlerinin gereklilikleri.

8. [OpenAI Status: Incident History](https://status.openai.com/history) - OpenAI. AI servislerinin erişilebilirliği, kesintiler ve operasyonel olayların kamuya açık geçmişi.

9. [Token Economics: The Atomic Unit of AI Value](https://www.finops.org/insights/token-economics-the-atomic-unit-of-ai-value/) - FinOps Foundation, 2026. AI inference tüketiminin ekonomik modeli ve token maliyetlerinin iş değeriyle ilişkilendirilmesi.

10. [Tokenomics: Managing AI Value in SaaS Model Token Costs](https://www.finops.org/wg/token-economics-saas/) - FinOps Foundation. AI API tüketiminde maliyet görünürlüğü, yönetişim ve finansal sürdürülebilirlik.

11. [FinOps Framework: Unit Economics](https://www.finops.org/framework/capabilities/unit-economics/) - FinOps Foundation. Teknoloji harcamalarının müşteri, işlem ve iş çıktıları üzerinden değerlendirilmesi.

---

{% include share_twitter_tr.html %}

---
