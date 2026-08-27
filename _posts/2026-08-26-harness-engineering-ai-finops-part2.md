---

layout: post
title: "AI Engineering FinOps'un Eksik Parçası: Harness Engineering"
subtitle: "Bölüm 2: Maliyeti Ölçmek Yetmez, Ajanın Çalışma Biçimini Tasarlamak Gerekir"
date: 2026-08-26
author: "Ali Özgür"
excerpt_separator: 
published: true
tags:

- ai
- coding
- agents
- finops
- harness-engineering

---

> **Bu yazı, AI destekli kodlama ekonomisi ve harness engineering üzerine iki bölümlük serinin ikinci yazısıdır. İlk bölümde AI destekli yazılım geliştirmenin değişen maliyet yapısını ve neden klasik lisans bütçesinden farklı bir FinOps problemi haline geldiğini ele aldım. Bu bölümde ise aynı problemi yürütme katmanından inceliyorum: Maliyeti yalnızca ölçmek yerine, ajanın çalışma biçimini tasarlayarak nasıl kontrol edebiliriz?**

[İlk yazıdaki]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) temel soru şuydu: AI destekli kodlama için ne kadar harcadığımızı biliyor muyuz ve bu harcamayı gerçek mühendislik çıktısıyla ilişkilendirebiliyor muyuz? Bu soruyu biraz daha ileri götürdüğümüzde daha zor bir problem ortaya çıkıyor. Bir kodlama ajanının gereksiz yere yüz binlerce token tükettiğini, aynı repository'yi tekrar tekrar okuduğunu, başarısız bir yaklaşımı defalarca denediğini veya basit bir görev için gereğinden pahalı bir model kullandığını ay sonunda görmek elbette faydalıdır; ancak asıl değer, bu davranışları maliyet ortaya çıkmadan veya büyümeden önce kontrol edebilmektir.

Bu nedenle AI Engineering FinOps'u yalnızca dashboard, fatura analizi veya token raporlama problemi olarak görmenin yetersiz olduğunu düşünüyorum. Gerçek maliyet kontrolü, ajanın nasıl çalıştığını belirleyen katmana kadar inmek zorunda. Hangi modelin seçileceği, hangi dosyaların bağlama gireceği, görevin nasıl parçalanacağı, başarısız bir denemeden sonra ne yapılacağı, kaç denemeye izin verileceği, hangi doğrulama koşullarının sağlanması gerektiği ve ajanın hangi noktada durup insana dönmesi gerektiği doğrudan ekonomik kararlardır. Harness engineering tam da bu kararların sistematik hale getirildiği yer olarak önem kazanıyor.

## Piyasada AI Engineering FinOps var mı? Var, ama parçalı

Bugün AI maliyet görünürlüğü konusunda sıfırdan başlamıyoruz. Langfuse, Helicone, Portkey ve Datadog gibi ürünler LLM çağrılarını izleme, token tüketimini hesaplama, model ve provider bazında maliyet çıkarma, kullanım verisini etiketlerle dağıtma ve belirli eşiklerde alarm üretme konusunda giderek olgunlaşıyor. Langfuse her LLM çağrısının kullanım ve maliyet bilgisini trace seviyesinde tutabiliyor; dashboard, alarm ve Metrics API üzerinden maliyeti model, kullanıcı, uygulama türü veya özel etiketler bazında analiz etmeye imkan veriyor. Helicone ise gateway üzerinden geçen çağrılarda maliyet hesabını merkezi hale getirirken session ve custom property kavramlarıyla tekil request yerine bütün bir iş akışının birim ekonomisine bakmayı öneriyor. Portkey de benzer biçimde gerçek zamanlı maliyet takibi, bütçe limitleri, özel fiyatlama ve gateway seviyesinde kontrol mekanizmaları sunuyor.

Bunların hiçbiri küçümsenecek yetenekler değil. Özellikle birden fazla model sağlayıcısının kullanıldığı organizasyonlarda merkezi fiyatlandırma, token ve maliyet telemetrisi, bütçe alarmı, caching ve routing kabiliyetleri doğrudan operasyonel değer yaratıyor. Ancak bu ürünlerin doğal veri modeli çoğunlukla LLM uygulamaları veya request etrafında şekilleniyor. Yazılım geliştirme dünyasında ise bizim gerçek ekonomik birimimiz request değil; iş kalemi, commit, pull request, review, merge, release veya production değişikliği gibi SDLC nesneleri.

GitHub Copilot analytics bu boşluğun diğer tarafından yaklaşıyor. GitHub artık Copilot kullanımını yalnızca aktif kullanıcı veya suggestion acceptance gibi metriklerle sınırlamıyor; enterprise ve organization seviyesinde kod üretimi, ajan aktivitesi ve pull request lifecycle metriklerini de sunuyor. Böylece AI kullanımının pull request throughput ve time-to-merge gibi mühendislik çıktılarıyla ilişkisini incelemek mümkün hale geliyor. Fakat burada da doğal sınır ortaya çıkıyor: GitHub kendi Copilot ekosistemini ve kendi telemetrisini iyi biliyor, buna karşılık organizasyon Claude Code, Codex, Cursor veya Gemini gibi farklı kodlama araç ve ortamlarını birlikte kullanılıyorsa bütün maliyet ve çıktı akışını tedarikçi bağımsız bir araya getirmek hâlâ kurumun kendi entegrasyon problemi oluyor.

Bu nedenle bugün piyasada üç ayrı ürün sınıfı görüyorum. Bir tarafta AI gateway ve LLM observability ürünleri maliyeti ve token tüketimini iyi görüyor. Bir tarafta kodlama asistanları ve kaynak kodu kontrol platformları benimseme, ajan aktivitesi ve pull request çıktısını görüyor. Diğer tarafta Jira, GitLab, CI/CD ve engineering intelligence araçları iş kalemini, build'i, deployment'ı ve release'i biliyor. Fakat şu zinciri uçtan uca sahiplenen belirgin bir kategori henüz oluşmuş değil:

**bütçe -> takım -> geliştirici/ajan -> iş kalemi -> model -> token/compute -> maliyet -> commit -> pull request -> review -> merge -> release -> mühendislik veya iş çıktısı**

Bence AI Engineering FinOps için gerçek ürün fırsatı tam olarak bu zincirde yatıyor. Fakat yalnızca bu verileri bir dashboard'da birleştirmek de yeterli değil. Çünkü FinOps'un bir sonraki olgunluk seviyesi, gözlemlediği ekonomik sonucu agent runtime'a geri beslemek olmalı. Harness engineering de tam olarak o yürütme katmanıdır; eksik olan şey harness'in kendisi değil, ölçüm ile yürütme arasında kapanan döngüdür.

## Harness engineering neden maliyet hikayesinin içine giriyor?

OpenAI'nin Şubat 2026'da yayımladığı harness engineering yazısındaki en önemli fikirlerden biri, agent-first geliştirmede insanın rolünün yalnızca kod yazmaktan çıkıp ajanın güvenilir biçimde çalışabileceği ortamı, araçları, kısıtları ve geri bildirim döngüleri tasarlamaya kaymasıdır. OpenAI bu yaklaşımı "humans steer, agents execute" şeklinde özetliyor ve deneyimlerinde asıl darboğazın modelin kod üretememesi değil, ortamın yeterince tanımlı olmaması olduğunu anlatıyor. Büyük hedefleri daha küçük parçalara ayırmak, repository bilgisini ajan tarafından okunabilir hale getirmek, mimari kuralları zorunlu olarak uygulamak ve doğrulama mekanizmaları oluşturmak bu harness'in parçaları haline geliyor.

Bu çerçeve ilk bakışta güvenilirlik ve yazılımcı üretkenliği konusu gibi görünüyor. Fakat ekonomik açıdan baktığımızda harness içindeki neredeyse her kararın token tüketimi ve toplam görev maliyeti üzerinde doğrudan etkisi var. Ajanın yanlış dosyaları okuması daha fazla input token demek. Başarısız bir yaklaşımı aynı bağlam ile tekrar denemesi gereksiz inference maliyeti demek. Basit bir görev için frontier model kullanılması yanlış işlem gücü sınıfı seçimi demek. Doğrulama kriterlerinin belirsiz olması ajanın gereğinden uzun çalışması ve ne zaman duracağını bilememesi demek.

Bu yüzden harness engineering'i yalnızca "ajanı daha iyi çalıştırma" tekniği değil, aynı zamanda **AI işlem gücü tüketimini mühendislik kurallarıyla şekillendiren kontrol katmanı/yüzeyi** olarak görmek daha doğru bir yaklaşım olacaktır.

## En ucuz model, en düşük maliyetli görev demek değildir

Maliyet optimizasyonunda ilk refleks genellikle model fiyatlarını karşılaştırmak oluyor. Basit görevler ucuz modele, karmaşık görevler pahalı modele gönderilsin fikri doğru bir başlangıç olsa da, tek başına yeterli değil. Çünkü modelin token fiyatı ile görevin toplam tamamlanma maliyeti aynı şey değildir.

Örneğin daha ucuz bir model bir görevi beş denemede çözüyor, her seferinde repository bağlamını yeniden okuyup test çalıştırıyor ve toplamda 1 dolar harcıyorsa; üç kat pahalı başka bir model aynı görevi ilk denemede 60 cent'e tamamlayabilir. Bu durumda request başına pahalı olan model, başarılı görev başına daha ucuzdur. Bu nedenle model routing'in optimizasyon hedefi "en düşük token fiyatı" değil, belirli kalite ve risk sınırları içinde **en düşük doğrulanmış çıktı maliyeti** olmalıdır.

Burada harness'in elinde geliştiriciden daha fazla bağlam olabilir. Görevin türünü, değişecek dosya sayısını, repository'nin büyüklüğünü, önceki benzer görevlerde hangi modelin başarılı olduğunu, testlerin kapsamını, güvenlik veya mimari risk seviyesini ve önceki denemelerin sonucunu görebilir. Bu bilgilerle basit bir statik routing yerine adaptif bir seçim yapılabilir. İlk deneme ekonomik bir modelle başlayabilir, düşük güven veya tekrar eden başarısızlık durumunda daha güçlü modele eskalasyon yapılabilir. Böylece frontier model varsayılan işlem gücü sınıfı değil, gerektiğinde kullanılan pahalı fakat değerli bir mühendislik kaynağı haline gelir.

## Bağlam mühendisliği aynı zamanda maliyet mühendisliğidir

Ajanlarda maliyetin büyük bölümü yalnızca output üretiminden gelmez; input bağlam tekrar tekrar taşındığı için özellikle uzun çalışma döngülerinde ciddi maliyet oluşabilir. Büyük bir repository'de ajanın her adımda yüzlerce dosyayı veya uzun sohbet geçmişini modele göndermesi, aslında yanlış tasarlanmış bir veri erişim stratejisinin faturasını ödemektir.

İyi bir harness repository'yi modele bir bütün olarak vermeye çalışmaz. Önce görevi sınıflandırır, sembol ve bağımlılık bilgisine bakar, ilgili modülleri daraltır, yalnızca gerekli dosyaları açar, test ve log çıktılarını özetler, eski sohbet bağlamını sıkıştırır/özetler ve değişikliğe göre gerektiğinde yeni bilgi getirir. Repository özeti, AST veya sembol indeksi, anlamsal erişim, git diff farkındalığı, bağımlılık ilişkileri, yapısal mimari bilgisi ve tool çıktılarını filtreleme gibi mekanizmalar bu nedenle yalnızca ajan kalitesini artıran özellikler değildir; doğrudan token ekonomisini iyileştirir.

Burada önemli olan "bağlamı küçültmek" değil, **bilgi yoğunluğunu artırmak** olmalı. Gereksiz bağlamı azaltırken kritik mimari bilgiyi kaybetmek ucuz ama yanlış sonuç üretir. İyi harness, modele daha az veri vermeyi değil, doğru zamanda daha yüksek sinyal taşıyan veriyi vermeyi hedefler. Bu da FinOps ile mühendislik kalitesi arasında doğal bir denge yaratır.

## Deneme politikası da finansal bir politikadır

Agentic sistemlerde en pahalı davranışlardan biri aynı problemi farklı bir strateji üretmeden tekrar tekrar denemektir. Bir test başarısız olduğunda ajan aynı dosyaları yeniden okuyup neredeyse aynı patch'i üretirse, token tüketiyoruz ama bilgi durumumuz değişmiyor. Bunu "token thrashing" olarak düşünmek mümkün.

Harness bu döngüyü kontrol edebilir. İlk başarısızlıkta aynı modelle sınırlı bir deneme yapılabilir; aynı failure signature ikinci kez görülürse ajanın yeniden kod yazması yerine diagnostic tool çalıştırması istenebilir. Problem bağlam eksikliğiyse bağlama erişim genişletilebilir, reasoning ihtiyacı varsa daha güçlü modele geçilebilir, belirli bir maliyet veya deneme eşiğinden sonra ise human handoff tetiklenebilir. Böyle bir politika yalnızca maliyeti azaltmaz; başarısız denemelerin birbirinden gerçekten farklı bilgi üretmesini de sağlar.

Bu yaklaşım klasik dağıtık sistemlerdeki retry mekanizmalarının tasarımına benziyor. Bir servise sonsuz deneme uygulamadığımız gibi, kodlama ajanına da sonsuz deneme hakkı vermemeliyiz. Deneme sayısı, backoff, eskalasyon ve circuit breaker kavramlarının ajan runtime'ında ekonomik karşılıkları oluşmaya başlıyor.

## Doğrulama, ajanın ne zaman duracağını belirler

Ajana "bu özelliği tamamla" dediğimizde tamamlanmanın ne anlama geldiği açık değilse, model kendi heuristikleriyle karar vermek zorunda kalır. Bu da gereksiz reasoning, tekrar ve kontrol çağrılarına neden olabilir. Harness engineering'in en önemli katkılarından biri başarı koşullarını dışsallaştırmasıdır.

Build başarılı mı? Unit ve integration testleri geçiyor mu? Static analysis yeni hata raporluyor mu? Mimari bağımlılık kuralları ihlal edildi mi? Güvenlik kontrolü geçti mi? İstenen acceptance criteria gerçekten doğrulandı mı? Bu kontroller ajana deterministik veya en azından daha ölçülebilir sonlanma/durma koşulları verir. OpenAI'nin harness engineering deneyiminde de repository legibility, mimari enforcement ve geri bildirim döngülerinin kritik hale gelmesinin nedeni budur: modelin yalnızca kod üretmesi değil, çevrenin ona neyin doğru olduğunu hızlı biçimde söylemesi gerekir.

Ekonomik açıdan bakıldığında iyi doğrulama, ajanın arama uzayını küçültür. "Biraz daha iyileştirebilirim" şeklindeki açık uçlu çalışma yerine, gerekli koşullar sağlandığında görev kapanır. Bu nedenle test altyapısı, linting, mimari testler ve CI geri bildirimi, agentic çağda yalnızca kalite yatırımı değil, aynı zamanda işlem gücü maliyet kontrolüdür.

## Görev ayrıştırma/kırılımı maliyeti görünür ve yönetilebilir hale getirir

"Yeni abonelik mimarisini implemente et" gibi büyük bir görevi tek ajan oturumuna vermek teknik olduğu kadar finansal açıdan da risklidir. Görev büyüdükçe bağlam genişler, belirsizlik artar, plan değişiklikleri çoğalır ve başarısızlığın hangi aşamada oluştuğunu anlamak zorlaşır. Büyük görevler aynı zamanda maliyet attribution'ını da bulanıklaştırır.

Harness'in işi yalnızca modeli çalıştırmak değil, işi yürütülebilir ve doğrulanabilir parçalara ayırmak da olabilir. Önce mevcut domain'in analizi, sonra schema değişikliği, migration, domain logic, API, testler ve integration verification gibi alt görevler oluşturulduğunda her parçanın farklı model, bağlam, bütçe ve acceptance criteria'sı olabilir. Bu sayede toplam özellik maliyetini yalnızca tek sayı olarak değil, hangi aşamanın ne kadar AI işlem gücü tükettiğini gösteren bir maliyet ağacı olarak görebiliriz.

Örneğin bir özelliğin AI maliyetinin büyük bölümünün implementasyonda değil, debug/rework aşamasında oluştuğunu fark edebiliriz. Bu durumda çözüm daha ucuz model seçmek olmayabilir; daha iyi test fixture'ları, daha erken architecture check veya daha iyi repository documentation gerekli olabilir. FinOps verisi böylece mühendislik yatırımı kararına dönüşür.

## Bütçe yalnızca dashboard'da değil, runtime'da olmalı

Geleneksel maliyet yönetiminde bütçe çoğu zaman gerçekleşen harcamanın üzerine uygulanan bir raporlama katmanıdır. Agentic iş akışlarında ise bütçe kavramını doğrudan harness içine koymak mümkün. Bir görev için maksimum maliyet, maksimum token, maksimum süre veya maksimum model eskalasyon seviyesi tanımlanabilir. Ajan bütçesinin yüzde 80'ine ulaştığında davranışını değiştirebilir; yeni bağlama erişmeden önce mevcut bağlamı compact edebilir, frontier modele geçmek için ek gerekçe isteyebilir veya doğrulama hâlâ başarısızsa human handoff tetiklenebilir.

Bu yaklaşım FinOps'u retrospective bir faaliyet olmaktan çıkarıp yürütme politikası haline getirir. Ay sonunda "neden bu kadar harcadık?" sorusunu sormak yerine, sistem harcama gerçekleşirken "bu görevin beklenen değeri için daha fazla işlem gücü kullanmak mantıklı mı?" sorusunu sorabilir.

Burada risk bazlı bütçeleme de mümkün hale geliyor. Kritik production incident'ında maliyet limiti daha yüksek tutulabilir; düşük öncelikli refactoring veya dokümantasyon işinde ise daha sıkı bütçe uygulanabilir. Ekonomik politika böylece mühendislik önceliğiyle aynı düzlemde çalışır.

## Token başına maliyetten Accepted Change başına maliyete

AI Engineering FinOps'un olgunlaşması için ölçüm biriminin de değişmesi gerekiyor. Token ve request sayıları operasyonel olarak faydalıdır, fakat mühendislik değerini doğrudan anlatmaz. [İlk yazıda]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) Accepted Change başına maliyeti (Cost per Accepted Change) bu yüzden önermiştim. Bence asıl yolculuk şu yönde olacak:

**Token başına maliyet -> Task başına maliyet -> Verified Task başına maliyet -> Accepted Change başına maliyet -> Production Outcome başına maliyet**

Accepted Change burada özellikle önemli. Ajanın kod üretmesi tek başına değerli değildir. Kodun review'dan geçmesi ve merge edilmesi gerekir. Production Outcome başına maliyet ise bir sonraki basamaktır: aynı değişikliğin release'e çıkması, production'da hata üretmemesi ve hedeflenen kullanıcı veya iş sonucunu sağlaması.

Bu metriği geliştiricilerin performansını ölçmek için kullanmak son derece yanlış olur. Farklı görevlerin risk ve karmaşıklık profilleri doğal olarak farklıdır. Buna karşılık aynı takımın zaman içindeki trendini, farklı model routing politikalarını, yeni bir bağlam stratejisini veya farklı harness konfigürasyonlarını karşılaştırmak için güçlü bir araç olabilir. Örneğin yeni repository indexing yaklaşımından sonra Accepted Change başına maliyet yüzde 25 düşüyor, review süresi ve hata oranı bozulmuyorsa gerçek bir ekonomik iyileşme elde edilmiş demektir.

## FinOps ile harness arasında kapalı çevrim

Bence asıl ilginç mimari burada ortaya çıkıyor. AI Engineering FinOps yalnızca harness'in ürettiği telemetriyi tüketen pasif bir raporlama katmanı olmamalı. Ölçüm sonuçları tekrar harness'e dönmeli ve sonraki yürütme kararlarını değiştirmeli.

**Measure -> Attribute -> Evaluate Outcome -> Learn -> Route / Constrain -> Execute**

Bir model belirli görev sınıfında ucuz görünmesine rağmen fazla deneme üretiyorsa routing politikası değişebilir. Belirli repository'lerde input token maliyeti yüksekse bağlama erişim stratejisi iyileştirilebilir. Debug aşamasında maliyet artıyorsa test ve observability araçları güçlendirilebilir. Bazı ajan iş akışları sürekli bütçe aşıyorsa görev ayrıştırma/kırılımı veya sonlanma/durma koşulları yeniden tasarlanabilir. FinOps verisi böylece yalnızca CFO veya engineering manager dashboard'una değil, ajan runtime'ın karar mekanizmasına geri döner.

Bu yaklaşım bulut FinOps'tan biraz daha ileri bir noktaya işaret ediyor. Bulut tarafında optimizasyon çoğunlukla instance sizing, reserved capacity veya workload scheduling gibi altyapı kararlarına döner. Agentic software engineering'de ise ekonomik geri besleme doğrudan **muhakeme biçimini ve çalışma stratejisini** değiştirebilir.

## Ürün araştırmasından çıkan boşluk

Bugünkü ürünleri yan yana koyduğumda oldukça net bir tablo görüyorum. Langfuse, Helicone, Portkey ve Datadog gibi platformlar "AI workload bize ne kadar mal oluyor?" sorusunu giderek iyi cevaplıyor. GitHub Copilot analytics gibi ürünler "AI yazılım geliştirme sürecinde nasıl kullanılıyor ve pull request çıktısına nasıl yansıyor?" sorusuna yaklaşıyor. Jira, GitLab, CI/CD ve engineering intelligence araçları iş kalemini, pipeline'ı ve release'i biliyor. Harness engineering ise "ajan bu işi hangi araçlarla, hangi bağlam ile, hangi model ve doğrulama döngüsüyle yürütmeli?" sorusunu çözüyor.

Fakat kurumsal ölçekte bizi ilgilendiren soru bunların birleşimi:

**AI destekli yazılım geliştirme bize ne kadar mal oldu, bu maliyet hangi takım/ürün/iş kalemine dağıtılmalı, karşılığında hangi Accepted Change veya Production Outcome'u aldık ve bir sonraki benzer görevde harness hangi kararları değiştirerek ekonomiyi iyileştirmeli?**

Bugün bunun parçalarını satın almak mümkün; fakat tedarikçi bağımsız bir şekilde bütün zinciri kapatan, tahminleme, gerçekleşme, kullandırma, çıktı atfı ve çalışma anı optimizasyonunu birlikte ele alan belirgin ve olgun bir ürün kategorisi henüz oluşmuş görünmüyor. Bu da yalnızca yeni bir dashboard fırsatı değil, engineering platform seviyesinde ölçüm ile yürütmeyi bağlayan bir kontrol yüzeyine (control plane) ihtiyacı olduğunu düşündürüyor.

## Sonuç: Maliyeti ölçmek yetmez

[İlk yazıda]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) AI destekli kodlamanın giderek değişken bir işlem gücü ekonomisine (compute economics) dönüştüğünü ve yalnızca kullanıcı başına lisans maliyetiyle yönetilemeyeceğini tartışmıştım. Bu yazının devamında çıkan sonuç daha ileri gidiyor: token ve model maliyetlerini görmek gerekli, fakat yeterli değil. Çünkü harcamanın önemli bölümü model fiyatından değil, ajanın nasıl çalıştığından kaynaklanıyor.

Yanlış model routing, gereksiz bağlam, başarısız deneme döngüleri, belirsiz sonlanma/durma koşulları ve aşırı büyük görevler iyi bir modeli ekonomik olarak kötü bir sisteme dönüştürebilir. Buna karşılık doğru tasarlanmış harness, aynı modelleri daha seçici bağlam, daha kontrollü otonomi, daha iyi doğrulama ve daha akıllı eskalasyon ile kullanarak görev başına gerçek maliyeti düşürebilir.

Bu nedenle önümüzdeki dönemde AI Engineering FinOps ile harness engineering'in birbirinden ayrı disiplinler olarak kalacağını düşünmüyorum. Biri **ne harcadığımızı ve karşılığında ne aldığımızı** ölçerken, diğeri **bir sonraki işi daha ekonomik ve güvenilir biçimde nasıl yaptıracağımızı** belirleyecek. İki katman arasında sürekli çalışan bir geri bildirim döngüsü oluştuğunda ise optimizasyon hedefimiz token tasarrufu olmaktan çıkıp daha anlamlı bir noktaya ulaşacak: **Accepted Change başına AI maliyeti.**

AI destekli kodlamanın gerçek ekonomik avantajı, en ucuz modeli kullanmaktan değil; doğru görevi, doğru modelle, doğru bağlam içinde, doğru araçlarla ve tam gerektiği kadar çalıştırabilmekten gelecek. Harness engineering'in maliyet hikayesindeki yeri bence tam olarak burada.

## Kaynaklar

1. OpenAI, "Harness engineering: leveraging Codex in an agent-first world", 11 Şubat 2026. [https://openai.com/index/harness-engineering/](https://openai.com/index/harness-engineering/)
2. OpenAI, "Unlocking the Codex harness: how we built the App Server", 4 Şubat 2026. [https://openai.com/index/unlocking-the-codex-harness/](https://openai.com/index/unlocking-the-codex-harness/)
3. GitHub Docs, "GitHub Copilot usage metrics". [https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics](https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics)
4. Langfuse Docs, "Model Usage & Cost Tracking". [https://langfuse.com/docs/observability/features/token-and-cost-tracking](https://langfuse.com/docs/observability/features/token-and-cost-tracking)
5. Helicone Docs, "Cost Tracking & Optimization". [https://docs.helicone.ai/guides/cookbooks/cost-tracking](https://docs.helicone.ai/guides/cookbooks/cost-tracking)
6. Portkey Docs, "Model Pricing and Cost Management". [https://portkey.ai/docs/product/observability/cost-management](https://portkey.ai/docs/product/observability/cost-management)
7. Gartner, "Gartner Predicts AI Coding Costs Will Surpass Average Developer's Salary by 2028 as Token Consumption Surges", 24 Haziran 2026. [https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges](https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges)

---

{% include share_twitter_tr.html %}

---

