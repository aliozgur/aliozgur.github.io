---
layout: post
title: "AI Engineering FinOps'un Eksik Parçası: Harness Engineering"
subtitle: "Bölüm 2: Maliyeti Ölçmek Yetmez, Agent'ın Çalışma Biçimini Tasarlamak Gerekir"
date: 2026-08-26
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - ai
  - coding
  - agents
  - finops
  - harness-engineering

---

> **Bu yazı, AI coding ekonomisi ve harness engineering üzerine iki bölümlük serinin ikinci yazısıdır. İlk bölümde AI destekli yazılım geliştirmenin değişen maliyet yapısını ve neden klasik lisans bütçesinden farklı bir FinOps problemi haline geldiğini ele aldım. Bu bölümde ise aynı problemi execution katmanından inceliyorum: Maliyeti yalnızca ölçmek yerine, agent'ın çalışma biçimini tasarlayarak nasıl kontrol edebiliriz?**

[İlk yazıdaki]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) temel soru şuydu: AI coding için ne kadar harcadığımızı biliyor muyuz ve bu harcamayı gerçek mühendislik çıktısıyla ilişkilendirebiliyor muyuz? Bu soruyu biraz daha ileri götürdüğümüzde daha zor bir problem ortaya çıkıyor. Bir agent'ın gereksiz yere yüz binlerce token tükettiğini, aynı repository'yi tekrar tekrar okuduğunu, başarısız bir yaklaşımı defalarca denediğini veya basit bir görev için gereğinden pahalı bir model kullandığını ay sonunda görmek elbette faydalıdır; ancak asıl değer, bu davranışları maliyet ortaya çıkmadan veya büyümeden önce kontrol edebilmektir.

<!--end-of-excerpt-->

Bu nedenle AI Engineering FinOps'u yalnızca dashboard, fatura analizi veya token raporlama problemi olarak görmenin yetersiz olduğunu düşünüyorum. Gerçek maliyet kontrolü, agent'ın nasıl çalıştığını belirleyen katmana kadar inmek zorunda. Hangi modelin seçileceği, hangi dosyaların context'e gireceği, görevin nasıl parçalanacağı, başarısız bir denemeden sonra ne yapılacağı, kaç retry'a izin verileceği, hangi doğrulama koşullarının sağlanması gerektiği ve agent'ın hangi noktada durup insana dönmesi gerektiği doğrudan ekonomik kararlardır. Harness engineering tam da bu kararların sistematik hale getirildiği yer olarak önem kazanıyor.

## Piyasada AI Engineering FinOps var mı? Var, ama parçalı

Bugün AI maliyet görünürlüğü konusunda sıfırdan başlamıyoruz. Langfuse, Helicone, Portkey ve Datadog gibi ürünler LLM çağrılarını izleme, token tüketimini hesaplama, model ve provider bazında maliyet çıkarma, kullanım verisini etiketlerle dağıtma ve belirli eşiklerde alarm üretme konusunda giderek olgunlaşıyor. Langfuse her LLM çağrısının kullanım ve maliyet bilgisini trace seviyesinde tutabiliyor; dashboard, alarm ve Metrics API üzerinden maliyeti model, kullanıcı, uygulama türü veya özel etiketler bazında analiz etmeye imkan veriyor. Helicone ise gateway üzerinden geçen çağrılarda maliyet hesabını merkezi hale getirirken session ve custom property kavramlarıyla tekil request yerine bütün bir workflow'un unit economics'ine bakmayı öneriyor. Portkey de benzer biçimde gerçek zamanlı cost tracking, budget limits, custom pricing ve gateway seviyesinde kontrol mekanizmaları sunuyor.

Bunların hiçbiri küçümsenecek yetenekler değil. Özellikle birden fazla model sağlayıcısının kullanıldığı organizasyonlarda merkezi fiyatlandırma, token ve cost telemetry, budget alarmı, caching ve routing kabiliyetleri doğrudan operasyonel değer yaratıyor. Ancak bu ürünlerin doğal veri modeli çoğunlukla LLM application veya request etrafında şekilleniyor. Yazılım geliştirme dünyasında ise bizim gerçek ekonomik birimimiz request değil; iş kalemi, commit, pull request, review, merge, release veya production değişikliği gibi SDLC nesneleri.

GitHub Copilot analytics bu boşluğun diğer tarafından yaklaşıyor. GitHub artık Copilot kullanımını yalnızca aktif kullanıcı veya suggestion acceptance gibi metriklerle sınırlamıyor; enterprise ve organization seviyesinde code generation, agent activity ve pull request lifecycle metriklerini de sunuyor. Böylece AI kullanımının pull request throughput ve time-to-merge gibi mühendislik çıktılarıyla ilişkisini incelemek mümkün hale geliyor. Fakat burada da doğal sınır ortaya çıkıyor: GitHub kendi Copilot ekosistemini ve kendi telemetry'sini iyi biliyor, buna karşılık organizasyon Claude Code, Codex, Cursor veya Gemini gibi farklı coding tool'ları birlikte kullanıyorsa bütün maliyet ve çıktı akışını vendor-neutral biçimde bir araya getirmek hâlâ kurumun kendi entegrasyon problemi oluyor.

Bu nedenle bugün piyasada üç ayrı ürün sınıfı görüyorum. Bir tarafta AI gateway ve LLM observability ürünleri maliyeti ve token tüketimini iyi görüyor. Bir tarafta coding assistant ve source control platformları adoption, agent activity ve pull request çıktısını görüyor. Diğer tarafta Jira, GitLab, CI/CD ve engineering intelligence araçları iş kalemini, build'i, deployment'ı ve release'i biliyor. Fakat şu zinciri uçtan uca sahiplenen belirgin bir kategori henüz oluşmuş değil:

**bütçe -> takım -> geliştirici/agent -> iş kalemi -> model -> token/compute -> maliyet -> commit -> pull request -> review -> merge -> release -> mühendislik veya iş çıktısı**

Bence AI Engineering FinOps için gerçek ürün fırsatı tam olarak bu zincirde yatıyor. Fakat yalnızca bu verileri bir dashboard'da birleştirmek de yeterli değil. Çünkü FinOps'un bir sonraki olgunluk seviyesi, gözlemlediği ekonomik sonucu tekrar execution sistemine geri beslemek olmalı. Harness engineering de tam olarak o execution katmanıdır; eksik olan şey harness'in kendisi değil, ölçüm ile execution arasında kapanan döngüdür.

## Harness engineering neden maliyet hikayesinin içine giriyor?

OpenAI'nin Şubat 2026'da yayımladığı harness engineering yazısındaki en önemli fikirlerden biri, agent-first geliştirmede insanın rolünün yalnızca kod yazmaktan çıkıp agent'ın güvenilir biçimde çalışabileceği ortamı, araçları, kısıtları ve feedback loop'ları tasarlamaya kaymasıdır. OpenAI bu yaklaşımı "humans steer, agents execute" şeklinde özetliyor ve deneyimlerinde asıl darboğazın modelin kod üretememesi değil, ortamın yeterince tanımlı olmaması olduğunu anlatıyor. Büyük hedefleri daha küçük parçalara ayırmak, repository bilgisini agent tarafından okunabilir hale getirmek, mimari kuralları enforce etmek ve doğrulama mekanizmaları oluşturmak bu harness'in parçaları haline geliyor.

Bu çerçeve ilk bakışta reliability ve developer productivity konusu gibi görünüyor. Fakat ekonomik açıdan baktığımızda harness içindeki neredeyse her kararın token tüketimi ve toplam görev maliyeti üzerinde doğrudan etkisi var. Agent'ın yanlış dosyaları okuması daha fazla input token demek. Başarısız bir yaklaşımı aynı context ile tekrar denemesi gereksiz inference maliyeti demek. Basit bir görev için frontier model kullanılması yanlış kaynak sınıfı seçimi demek. Doğrulama kriterlerinin belirsiz olması agent'ın gereğinden uzun çalışması ve ne zaman duracağını bilememesi demek.

Bu yüzden harness engineering'i yalnızca "agent'ı daha iyi çalıştırma" tekniği değil, aynı zamanda **AI compute tüketimini mühendislik kurallarıyla şekillendiren control plane** olarak görmek daha doğru geliyor.

## En ucuz model, en düşük maliyetli görev demek değildir

Maliyet optimizasyonunda ilk refleks genellikle model fiyatlarını karşılaştırmak oluyor. Basit görevler ucuz modele, karmaşık görevler pahalı modele gönderilsin fikri doğru bir başlangıç olsa da, tek başına yeterli değil. Çünkü modelin token fiyatı ile görevin toplam tamamlanma maliyeti aynı şey değildir.

Örneğin daha ucuz bir model bir görevi beş denemede çözüyor, her seferinde repository context'ini yeniden okuyup test çalıştırıyor ve toplamda 1 dolar harcıyorsa; üç kat pahalı başka bir model aynı görevi ilk denemede 60 cent'e tamamlayabilir. Bu durumda request başına pahalı olan model, successful task başına daha ucuzdur. Bu nedenle model routing'in optimizasyon hedefi "en düşük token fiyatı" değil, belirli kalite ve risk sınırları içinde **en düşük verified outcome maliyeti** olmalıdır.

Burada harness'in elinde geliştiriciden daha fazla bağlam olabilir. Görevin türünü, değişecek dosya sayısını, repository'nin büyüklüğünü, önceki benzer görevlerde hangi modelin başarılı olduğunu, testlerin kapsamını, güvenlik veya mimari risk seviyesini ve önceki retry'ların sonucunu görebilir. Bu bilgilerle basit bir statik routing yerine adaptif bir seçim yapılabilir. İlk deneme ekonomik bir modelle başlayabilir, düşük confidence veya tekrar eden başarısızlık durumunda daha güçlü modele escalation yapılabilir. Böylece frontier model varsayılan compute sınıfı değil, gerektiğinde kullanılan pahalı fakat değerli bir mühendislik kaynağı haline gelir.

## Context engineering aynı zamanda cost engineering'dir

Agent'larda maliyetin büyük bölümü yalnızca output üretiminden gelmez; input context tekrar tekrar taşındığı için özellikle uzun çalışma döngülerinde ciddi maliyet oluşabilir. Büyük bir repository'de agent'ın her adımda yüzlerce dosyayı veya uzun conversation history'yi modele göndermesi, aslında yanlış tasarlanmış bir veri erişim stratejisinin faturasını ödemektir.

İyi bir harness repository'yi modele bir bütün olarak vermeye çalışmaz. Önce görevi sınıflandırır, sembol ve dependency bilgisine bakar, ilgili modülleri daraltır, yalnızca gerekli dosyaları açar, test ve log çıktılarını özetler, eski conversation context'ini compact eder ve değişikliğe göre gerektiğinde yeni bilgi getirir. Repository summary, AST veya symbol index, semantic retrieval, git diff awareness, dependency graph, structured architecture knowledge ve tool output filtering gibi mekanizmalar bu nedenle yalnızca agent kalitesini artıran özellikler değildir; doğrudan token ekonomisini iyileştirir.

Burada önemli olan "context'i küçültmek" değil, **bilgi yoğunluğunu artırmak** olmalı. Gereksiz context'i azaltırken kritik mimari bilgiyi kaybetmek ucuz ama yanlış sonuç üretir. İyi harness, modele daha az veri vermeyi değil, doğru zamanda daha yüksek sinyal taşıyan veriyi vermeyi hedefler. Bu da FinOps ile engineering quality arasında doğal bir denge yaratır.

## Retry politikası da finansal bir politikadır

Agentic sistemlerde en pahalı davranışlardan biri aynı problemi farklı bir strateji üretmeden tekrar tekrar denemektir. Bir test başarısız olduğunda agent aynı dosyaları yeniden okuyup neredeyse aynı patch'i üretirse, token tüketiyoruz ama bilgi durumumuz değişmiyor. Bunu "token thrashing" olarak düşünmek mümkün.

Harness bu döngüyü kontrol edebilir. İlk başarısızlıkta aynı modelle sınırlı bir retry yapılabilir; aynı failure signature ikinci kez görülürse agent'ın yeniden kod yazması yerine diagnostic tool çalıştırması istenebilir. Problem context eksikliğiyse retrieval genişletilebilir, reasoning ihtiyacı varsa daha güçlü modele geçilebilir, belirli bir maliyet veya retry eşiğinden sonra ise human handoff tetiklenebilir. Böyle bir politika yalnızca maliyeti azaltmaz; başarısız denemelerin birbirinden gerçekten farklı bilgi üretmesini de sağlar.

Bu yaklaşım klasik distributed systems retry tasarımına benziyor. Bir servise sonsuz retry uygulamadığımız gibi, coding agent'a da sonsuz retry hakkı vermemeliyiz. Retry count, backoff, escalation ve circuit breaker kavramlarının agent runtime'ında ekonomik karşılıkları oluşmaya başlıyor.

## Doğrulama, agent'ın ne zaman duracağını belirler

Agent'a "bu özelliği tamamla" dediğimizde tamamlanmanın ne anlama geldiği açık değilse, model kendi heuristikleriyle karar vermek zorunda kalır. Bu da gereksiz reasoning, tekrar ve kontrol çağrılarına neden olabilir. Harness engineering'in en önemli katkılarından biri başarı koşullarını dışsallaştırmasıdır.

Build başarılı mı? Unit ve integration testleri geçiyor mu? Static analysis yeni hata üretiyor mu? Mimari bağımlılık kuralları ihlal edildi mi? Güvenlik kontrolü geçti mi? İstenen acceptance criteria gerçekten doğrulandı mı? Bu kontroller agent'a deterministik veya en azından daha ölçülebilir stop conditions verir. OpenAI'nin harness engineering deneyiminde de repository legibility, mimari enforcement ve feedback loop'ların kritik hale gelmesinin nedeni budur: modelin yalnızca kod üretmesi değil, çevrenin ona neyin doğru olduğunu hızlı biçimde söylemesi gerekir.

Ekonomik açıdan bakıldığında iyi doğrulama, agent'ın search space'ini küçültür. "Biraz daha iyileştirebilirim" şeklindeki açık uçlu çalışma yerine, gerekli koşullar sağlandığında görev kapanır. Bu nedenle test altyapısı, linting, architecture tests ve CI feedback, agentic çağda yalnızca kalite yatırımı değil, aynı zamanda compute maliyet kontrolüdür.

## Task decomposition maliyeti görünür ve yönetilebilir hale getirir

"Yeni abonelik mimarisini implemente et" gibi büyük bir görevi tek agent oturumuna vermek teknik olduğu kadar finansal açıdan da risklidir. Görev büyüdükçe context genişler, belirsizlik artar, plan değişiklikleri çoğalır ve başarısızlığın hangi aşamada oluştuğunu anlamak zorlaşır. Büyük görevler aynı zamanda maliyet attribution'ını da bulanıklaştırır.

Harness'in işi yalnızca modeli çalıştırmak değil, işi yürütülebilir ve doğrulanabilir parçalara ayırmak da olabilir. Önce mevcut domain'in analizi, sonra schema değişikliği, migration, domain logic, API, testler ve integration verification gibi alt görevler oluşturulduğunda her parçanın farklı model, context, budget ve acceptance criteria'sı olabilir. Bu sayede toplam feature maliyetini yalnızca tek sayı olarak değil, hangi aşamanın ne kadar AI compute tükettiğini gösteren bir maliyet ağacı olarak görebiliriz.

Örneğin bir feature'ın AI maliyetinin büyük bölümünün implementation'da değil, debug/rework aşamasında oluştuğunu fark edebiliriz. Bu durumda çözüm daha ucuz model seçmek olmayabilir; daha iyi test fixture'ları, daha erken architecture check veya daha iyi repository documentation gerekli olabilir. FinOps verisi böylece engineering investment kararına dönüşür.

## Budget yalnızca dashboard'da değil, runtime'da olmalı

Geleneksel maliyet yönetiminde bütçe çoğu zaman gerçekleşen harcamanın üzerine uygulanan bir raporlama katmanıdır. Agentic workflow'larda ise budget kavramını doğrudan harness içine koymak mümkün. Bir görev için maksimum maliyet, maksimum token, maksimum süre veya maksimum model escalation seviyesi tanımlanabilir. Agent budget'ın yüzde 80'ine ulaştığında davranışını değiştirebilir; yeni retrieval yapmadan önce mevcut context'i compact edebilir, frontier modele geçmek için ek gerekçe isteyebilir veya doğrulama hâlâ başarısızsa human handoff tetiklenebilir.

Bu yaklaşım FinOps'u retrospective bir faaliyet olmaktan çıkarıp execution policy haline getirir. Ay sonunda "neden bu kadar harcadık?" sorusunu sormak yerine, sistem harcama gerçekleşirken "bu görevin beklenen değeri için daha fazla compute kullanmak mantıklı mı?" sorusunu sorabilir.

Burada risk bazlı bütçeleme de mümkün hale geliyor. Kritik production incident'ında maliyet limiti daha yüksek tutulabilir; düşük öncelikli refactoring veya dokümantasyon işinde ise daha sıkı budget uygulanabilir. Ekonomik politika böylece mühendislik önceliğiyle aynı düzlemde çalışır.

## Cost per Token'dan Cost per Accepted Change'e

AI Engineering FinOps'un olgunlaşması için ölçüm biriminin de değişmesi gerekiyor. Token ve request sayıları operasyonel olarak faydalıdır, fakat mühendislik değerini doğrudan anlatmaz. [İlk yazıda]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) Cost per Accepted Change'i bu yüzden önermiştim. Bence asıl yolculuk şu yönde olacak:

**Cost per Token -> Cost per Task -> Cost per Verified Task -> Cost per Accepted Change -> Cost per Production Outcome**

Accepted Change burada özellikle önemli. Agent'ın kod üretmesi tek başına değer değildir. Kodun review'dan geçmesi ve merge edilmesi gerekir. Cost per Production Outcome ise bir sonraki basamaktır: aynı değişikliğin release'e çıkması, production'da hata üretmemesi ve hedeflenen kullanıcı veya iş sonucunu sağlaması.

Bu metriği geliştiricileri birbirleriyle sıralamak için kullanmak son derece yanlış olur. Farklı görevlerin risk ve karmaşıklık profilleri doğal olarak farklıdır. Buna karşılık aynı takımın zaman içindeki trendini, farklı model routing politikalarını, yeni bir context stratejisini veya farklı harness konfigürasyonlarını karşılaştırmak için güçlü bir araç olabilir. Örneğin yeni repository indexing yaklaşımından sonra Cost per Accepted Change yüzde 25 düşüyor, review süresi ve defect oranı bozulmuyorsa gerçek bir ekonomik iyileşme elde edilmiş demektir.

## FinOps ile harness arasında kapalı çevrim

Bence asıl ilginç mimari burada ortaya çıkıyor. AI Engineering FinOps yalnızca harness'in ürettiği telemetry'yi tüketen pasif bir raporlama katmanı olmamalı. Ölçüm sonuçları tekrar harness'e dönmeli ve sonraki execution kararlarını değiştirmeli.

**Measure -> Attribute -> Evaluate Outcome -> Learn -> Route / Constrain -> Execute**

Bir model belirli görev sınıfında ucuz görünmesine rağmen fazla retry üretiyorsa routing politikası değişebilir. Belirli repository'lerde input token maliyeti yüksekse context retrieval stratejisi iyileştirilebilir. Debug aşamasında maliyet artıyorsa test ve observability tooling güçlendirilebilir. Bazı agent workflow'ları sürekli budget aşıyorsa task decomposition veya stop conditions yeniden tasarlanabilir. FinOps verisi böylece yalnızca CFO veya engineering manager dashboard'una değil, agent runtime'ın karar mekanizmasına geri döner.

Bu yaklaşım cloud FinOps'tan biraz daha ileri bir noktaya işaret ediyor. Cloud tarafında optimizasyon çoğunlukla instance sizing, reserved capacity veya workload scheduling gibi altyapı kararlarına döner. Agentic software engineering'de ise ekonomik geri besleme doğrudan **muhakeme biçimini ve çalışma stratejisini** değiştirebilir.

## Ürün araştırmasından çıkan boşluk

Bugünkü ürünleri yan yana koyduğumda oldukça net bir tablo görüyorum. Langfuse, Helicone, Portkey ve Datadog gibi platformlar "AI workload bize ne kadar mal oluyor?" sorusunu giderek iyi cevaplıyor. GitHub Copilot analytics gibi ürünler "AI yazılım geliştirme sürecinde nasıl kullanılıyor ve pull request çıktısına nasıl yansıyor?" sorusuna yaklaşıyor. Jira, GitLab, CI/CD ve engineering intelligence araçları iş kalemini, pipeline'ı ve release'i biliyor. Harness engineering ise "agent bu işi hangi araçlarla, hangi context ile, hangi model ve doğrulama döngüsüyle yürütmeli?" sorusunu çözüyor.

Fakat kurumsal ölçekte bizi ilgilendiren soru bunların birleşimi:

**AI destekli yazılım geliştirme bize ne kadar mal oldu, bu maliyet hangi takım/ürün/iş kalemine dağıtılmalı, karşılığında hangi Accepted Change veya Production Outcome'u aldık ve bir sonraki benzer görevde harness hangi kararları değiştirerek ekonomiyi iyileştirmeli?**

Bugün bunun parçalarını satın almak mümkün; fakat vendor-neutral biçimde bütün zinciri kapatan, estimation, realization, allocation, outcome attribution ve runtime optimization'ı birlikte ele alan belirgin ve olgun bir ürün kategorisi henüz oluşmuş görünmüyor. Bu da yalnızca yeni bir dashboard fırsatı değil, engineering platform seviyesinde measurement ile execution'ı bağlayan bir control plane ihtiyacı olduğunu düşündürüyor.

## Sonuç: Maliyeti ölçmek yetmez, execution'ı mühendislik etmeliyiz

[İlk yazıda]({% post_url 2026-08-25-ai-coding-maliyeti-part1 %}) AI coding'in giderek değişken bir compute ekonomisine dönüştüğünü ve yalnızca kullanıcı başına lisans maliyetiyle yönetilemeyeceğini tartışmıştım. Bu yazının devamında çıkan sonuç daha ileri gidiyor: token ve model maliyetlerini görmek gerekli, fakat yeterli değil. Çünkü harcamanın önemli bölümü model fiyatından değil, agent'ın nasıl çalıştığından kaynaklanıyor.

Yanlış model routing, gereksiz context, başarısız retry döngüleri, belirsiz stop conditions ve aşırı büyük görevler iyi bir modeli ekonomik olarak kötü bir sisteme dönüştürebilir. Buna karşılık doğru tasarlanmış harness, aynı modelleri daha seçici context, daha kontrollü autonomy, daha iyi doğrulama ve daha akıllı escalation ile kullanarak görev başına gerçek maliyeti düşürebilir.

Bu nedenle önümüzdeki dönemde AI Engineering FinOps ile harness engineering'in birbirinden ayrı disiplinler olarak kalacağını düşünmüyorum. Biri **ne harcadığımızı ve karşılığında ne aldığımızı** ölçerken, diğeri **bir sonraki işi daha ekonomik ve güvenilir biçimde nasıl yaptıracağımızı** belirleyecek. İki katman arasında sürekli çalışan bir feedback loop oluştuğunda ise optimizasyon hedefimiz token tasarrufu olmaktan çıkıp daha anlamlı bir noktaya ulaşacak: **Accepted Change başına AI maliyeti.**

AI coding'in gerçek ekonomik avantajı, en ucuz modeli kullanmaktan değil; doğru görevi, doğru modelle, doğru context içinde, doğru araçlarla ve tam gerektiği kadar çalıştırabilmekten gelecek. Harness engineering'in maliyet hikayesindeki yeri bence tam olarak burada.

## Kaynaklar

1. OpenAI, "Harness engineering: leveraging Codex in an agent-first world", 11 Şubat 2026. [https://openai.com/index/harness-engineering/](https://openai.com/index/harness-engineering/)
2. OpenAI, "Unlocking the Codex harness: how we built the App Server", 4 Şubat 2026. [https://openai.com/index/unlocking-the-codex-harness/](https://openai.com/index/unlocking-the-codex-harness/)
3. GitHub Docs, "GitHub Copilot usage metrics". [https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics](https://docs.github.com/en/copilot/concepts/copilot-usage-metrics/copilot-metrics)
4. Langfuse Docs, "Model Usage & Cost Tracking". [https://langfuse.com/docs/observability/features/token-and-cost-tracking](https://langfuse.com/docs/observability/features/token-and-cost-tracking)
5. Helicone Docs, "Cost Tracking & Optimization". [https://docs.helicone.ai/guides/cookbooks/cost-tracking](https://docs.helicone.ai/guides/cookbooks/cost-tracking)
6. Portkey Docs, "Model Pricing and Cost Management". [https://portkey.ai/docs/product/observability/cost-management](https://portkey.ai/docs/product/observability/cost-management)
7. Gartner, "Gartner Predicts AI Coding Costs Will Surpass Average Developer's Salary by 2028 as Token Consumption Surges", 24 Haziran 2026. [https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges](https://www.gartner.com/en/newsroom/press-releases/2026-06-24-gartner-predicts-ai-coding-costs-will-surpass-average-developer-salary-by-2028-as-token-consumption-surges)

***
{% include share_twitter_tr.html %}
***
