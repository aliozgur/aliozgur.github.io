---

layout: post
title: "Modeli Çalıştırmadan Önce Kaç Token Tüketeceğini Kesin Olarak Bilebilmeli miyiz?"
subtitle: "AI API'lerinde Eksik Bir Sözleşme: Deterministik Çalıştırma Öncesi Kaynak Muhasebesi"
date: 2026-09-07
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- finops
- tokens
- api
- harness-engineering

---

Yapay zekâ servislerinin maliyetini tartışırken token kavramını çoğu zaman gerçekleşmiş bir tüketimin ölçü birimi olarak ele alıyoruz. Bir model çağrısı yapılıyor, sağlayıcı cevabıyla birlikte kaç input ve output token kullanıldığını bildiriyor, biz de bu bilgiyi maliyet hesabına, observability sistemine veya FinOps katmanına aktarıyoruz. Bu yöntem gerçekleşen maliyeti anlamak için yeterli olabilir, fakat çağrı henüz yapılmadan karar vermek isteyen bir uygulama için önemli bir eksikliği var: Harcamayı gerçekleştirmeden önce ne kadar kaynak tüketeceğimizi gerçekten biliyor muyuz?

Bu soru özellikle birden fazla model ve sağlayıcı arasında seçim yapabilen sistemlerde basit bir maliyet tahmini probleminden daha önemli hale geliyor. Elimizde aynı işi yapabilecek OpenAI, Anthropic, Google veya başka bir sağlayıcının modeli varsa uygulama, isteği göndermeden önce hangi modelin context window'una sığacağını, hangi modelde kaç token oluşturacağını ve bunun yaklaşık değil mümkünse kesin maliyetini bilmek isteyebilir. Hatta bu bilgi yalnızca model seçmek için değil, bağlamı sıkıştırmak, gereksiz RAG sonuçlarını elemek, kullanılmayacak tool tanımlarını kaldırmak veya konuşma geçmişini yeniden düzenlemek için de kullanılabilir.

{::comment}end-of-excerpt{:/comment}

Önceki yazılarımda [Kod Yazmak Ucuzlamıyor](https://aliozgur.net/2026/08/25/ai-coding-maliyeti-part1/) ve [AI Engineering FinOps'un Eksik Parçası: Harness Engineering](https://aliozgur.net/2026/08/26/harness-engineering-ai-finops-part2/) yazılarında, gerçekleşen maliyetin ölçülmesinin yeterli olmadığını ve harness engineering katmanının model seçimi, bağlam yönetimi, retry politikası ve bütçe gibi kararları çalışma anında değiştirebilmesi gerektiğini tartışmıştım. Burada bu düşüncenin bir adım öncesinde duran başka bir sorun var: Harness karar verecekse, kararını hangi kesin bilgiye dayanarak verecek? Model çağrısını yaptıktan sonra gelen token sayısı artık karar girdisi değil, gerçekleşmiş sonucun telemetrisidir.

Bu nedenle asıl problem token saymak değil. Asıl problem, henüz gerçekleşmemiş bir AI işleminin kaynak tüketimini deterministik olarak sorgulayabilmek.

## Tokenizer elimizdeyse neden problem hâlâ çözülmüş değil?

İlk bakışta bu problem çoktan çözülmüş gibi görünebilir. OpenAI ekosisteminde "tiktoken", .NET tarafında SharpToken gibi kütüphaneler var. Açık modellerin önemli bölümünde tokenizer tanımları zaten erişilebilir durumda. Metni elimizdeki tokenizer ile işlediğimizde kaç token oluşacağını deterministik olarak hesaplayabiliyoruz.

Buradaki kritik kelime ise **metin**.

Bir LLM API'sine gönderdiğimiz şey artık çoğu zaman yalnızca kullanıcının yazdığı metin değil. İstek içerisinde system ve developer instructions, konuşma geçmişi, tool veya function tanımları, JSON Schema'lar, structured output kuralları, RAG ile bulunan belgeler, görseller, dosyalar ve sağlayıcının kendi protokolünün gerektirdiği yapısal bilgiler bulunabiliyor. Stateful API'lerde isteğin bir bölümü sunucu tarafında daha önce oluşturulmuş conversation veya response nesnelerine de referans verebiliyor.

OpenAI'nin kendi token dokümantasyonu da düz metnin "tiktoken" ile sayılabileceğini, ancak mesaj yapısı, tool'lar, şemalar, görseller ve dosyalar nedeniyle bunun tam API isteğindeki token sayısıyla aynı olmak zorunda olmadığını özellikle belirtiyor. OpenAI bu nedenle Responses API için mesajlar, görseller, dosyalar, tool'lar ve conversation bilgisi dahil bütün girdiyi değerlendirebilen ayrı bir input token counting mekanizması sunuyor.

Sorunun özü burada ortaya çıkıyor. Bir metnin tokenizer'dan nasıl geçeceğini bilmek başka, sağlayıcının gönderdiğimiz API nesnesini modelin gerçek girdisine nasıl dönüştürdüğünü bilmek başka bir şey.

Uygulamanın gönderdiği istek ile modelin gördüğü token dizisi arasında sağlayıcıya ait bir katman bulunuyor. Mesaj rolleri ve sınırları, tool tanımlarının modele nasıl sunulduğu, structured output bilgilerinin hangi biçimde eklendiği, görsel veya dosyaların nasıl temsil edildiği ve sağlayıcının kendi sistem optimizasyonları bu katmanda devreye girebiliyor. Dolayısıyla sağlayıcının yalnızca "bu model şu tokenizer'ı kullanıyor" demesi, tam isteğin token sayısını her durumda yeniden üretebilmemiz için yeterli değil.

Tokenizer şeffaflığı gerekli olabilir, fakat tek başına yeterli değildir.

## "Tahmin" ile "sayım" aynı şey değil

Burada terminolojinin de sorunlu olduğunu düşünüyorum. Birçok API ve kütüphane token sayımından bahsederken aslında birbirinden oldukça farklı garantiler sunuyor. Bir değer yaklaşık ise buna token count demek teknik olarak kullanışlı olabilir, fakat bu değeri bir bütçe veya routing kararında kullanacak sistem açısından fark önemlidir.

Anthropic bunun iyi bir örneğini veriyor. Claude Token Counting API; system prompt, tool, image ve PDF gibi yapılandırılmış girdileri inference gerçekleştirmeden sayabiliyor ve Anthropic bu özelliğin maliyet yönetimi, rate limit kontrolü ve model routing için kullanılabileceğini açıkça söylüyor. Buna karşın aynı dokümantasyonda dönen token sayısının bir **estimate** olduğu ve gerçek message oluşturulurken kullanılan input token sayısının küçük miktarda farklılaşabileceği de belirtiliyor.

Google Gemini tarafında "models.countTokens" benzer bir mekanizma sunuyor. API modelin tokenizer'ını verilen "Content" üzerinde çalıştırıyor ve system instruction, tool ve medya içeren istekleri de destekliyor. Yani burada da yalnızca kullanıcı metnini tokenize etmekten daha güçlü bir pre-request mekanizması var.

OpenAI'nin güncel yaklaşımı da aynı yönde ilerliyor. Responses girdisinin tamamını model çağrısını gerçekleştirmeden sayabilmek, "tiktoken" kullanarak yalnızca görünür metni saymaktan önemli ölçüde daha güçlü bir primitive sağlıyor. Ancak dokümantasyonda bu sayının daha sonra oluşacak billable input ile her durumda bire bir aynı olduğuna ilişkin AWS'deki kadar açık bir sözleşme görmüyoruz.

Amazon Bedrock ise burada dikkat çekici biçimde daha güçlü bir garanti veriyor. "CountTokens" operasyonu, "InvokeModel" veya "Converse" isteğinde kullanılacak girdiyi kabul ediyor ve AWS dokümantasyonu dönen token sayısının aynı input inference için gönderildiğinde **ücretlendirilecek token sayısıyla eşleşeceğini** açıkça belirtiyor.

Bu fark küçük görünse de mimari açıdan oldukça önemli. Bir tarafta "yaklaşık olarak bu kadar token kullanırsınız" diyen bir servis var, diğer tarafta "bu isteği aynı biçimde gönderirseniz faturalandıracağımız sayı budur" diyen bir sözleşme var.

AI altyapılarının ihtiyaç duyduğu şey ikincisine daha yakın.

## Neden deterministik olmak zorunda?

"Üç beş token farkın ne önemi var?" diye düşünülebilir. Tek bir sohbet uygulamasında gerçekten de çoğu zaman önemi olmayabilir. Fakat AI giderek uygulamaların içine bir servis olarak değil, karar verebilen ve farklı modeller arasında çalışma dağıtabilen bir execution katmanı olarak yerleşiyor.

Bir AI gateway veya harness'in önünde örneğin 100 bin tokenlık bir context oluştuğunu düşünelim. Bunun büyük bölümü kullanıcının sorusundan değil; conversation history, RAG sonuçları, MCP/tool şemaları ve uygulamanın kendi talimatlarından geliyor olabilir. Sistem bu isteği henüz göndermeden önce farklı seçenekleri değerlendirmek isteyebilir.

Bir sağlayıcıda input 92 bin token oluştururken başka bir modelin tokenizer'ında 107 bin token oluşabilir. İkinci modelin context window'u daha büyük olabilir fakat input fiyatı daha yüksek olabilir. Üçüncü model daha ucuzdur fakat mevcut bağlamı taşımak yerine önce conversation compaction gerektiriyordur. Dördüncü seçenek ise uygulamanın lokal bir model kullanarak RAG sonuçlarını sıkıştırması ve ancak ardından güçlü modele gitmesidir.

Böyle bir sistem için token sayısı dashboard'da gösterilen bir telemetri değeri değildir. **Routing algoritmasının girdisidir.**

Routing kararlarının girdisini "tahmini" bir değere dayandırmak elbette mümkündür. Bugün pek çok sistem zaten bunu yapıyor. Fakat kaynak tüketimi teknik olarak deterministik biçimde hesaplanabiliyorsa tahmin kullanmak gereksiz bir belirsizlik yaratıyor.

Burada daha önce [Kısıtlar Yapay Zekâyı Determinizme Yaklaştırabilir mi?](https://aliozgur.net/2026/08/30/ai-constrained-behavioral-determinism/) yazısında ele aldığım determinizm tartışmasıyla ilginç bir paralellik de var. LLM'in üreteceği cevabı deterministik hale getiremeyebiliriz; modelin doğası gereği aynı girdiden farklı sonuçlar çıkabilir. Ancak model çalıştırılmadan önce **bizim hazırladığımız girdinin büyüklüğü** aynı türde olasılıksal bir problem olmak zorunda değil. Model cevabının belirsizliği ile API muhasebesinin belirsizliğini birbirine karıştırmamak gerekiyor.

Çıktı probabilistic olabilir. Girdi muhasebesinin öyle olması için doğal bir neden yok.

## Kullanıcının sorusu çoğu zaman en küçük problemdir

Token optimizasyonu konuşulurken akla gelen önerilerden biri kullanıcıdan daha kısa soru istemek olabilir. Fakat modern AI uygulamalarında bunun çoğu zaman yanlış yere bakmak olduğunu düşünüyorum.

Bir kullanıcının 200 tokenlık sorusu, arkasında 15 bin token conversation history, 30 bin token RAG context, 10 bin token tool ve MCP schema'sı ve birkaç bin token uygulama talimatı ile modele gidiyor olabilir. Böyle bir durumda kullanıcıdan sorusunu yarıya indirmesini istemek 100 token kazandırırken uygulamanın kendi hazırladığı on binlerce token sorgulanmadan kalır.

Dolayısıyla iyi bir pre-request optimizasyon sistemi önce kendi ürettiği bağlama bakmalı. Kaç RAG parçası gerçekten gerekli? Conversation history'nin tamamı taşınmalı mı? Her MCP server'ın bütün tool şemalarının her çağrıda modele verilmesi gerekiyor mu? Structured output şeması gereksiz derecede ayrıntılı mı? Kullanılmayacağı zaten tahmin edilebilen araçlar prompt'a dahil ediliyor mu?

Bu noktada küçük ve ucuz, hatta lokal bir model de ana modele gitmeden önce bağlam sıkıştırma katmanı olarak kullanılabilir. Ancak burada amaç yalnızca metni kısaltmak olmamalı; **bilgi yoğunluğunu artırmak** olmalı. Daha kısa ama kritik bilgiyi kaybetmiş bir prompt ekonomik olarak başarılı değildir. Daha önce [harness engineering](https://aliozgur.net/2026/08/26/harness-engineering-ai-finops-part2/) bağlamında tartıştığım context engineering problemi burada ölçülebilir bir pre-request optimizasyon döngüsüne dönüşüyor.

Fark şu: Önceki durumda bağlamı neden küçültmek gerektiğini gerçekleşen maliyetten öğreniyorduk. Burada daha model çalışmadan alternatif bağlamların gerçek kaynak tüketimini karşılaştırabilmek istiyoruz.

## Token sayısından daha büyük bir kavrama ihtiyacımız var

Bence uzun vadede standartlaştırılması gereken şey yalnızca token counting değil. Çünkü AI servislerinin tamamı aynı ekonomik modele sahip değil ve gelecekte token daha da yetersiz bir ortak payda haline gelebilir.

Bir istek text token, cached token, image, audio süresi, web search, code execution, tool invocation, reasoning effort veya başka hesaplama kaynakları tüketebilir. Yalnızca "kaç token?" sorusunu standardize etmek bugünün faturalandırma modelini geleceğin API sözleşmesine gömmek anlamına gelir.

Daha genel kavram **pre-inference resource introspection**, Türkçede ifade edecek olursak çalıştırma öncesi kaynak görünürlüğü veya kaynak muhasebesi olabilir.

Bir AI sağlayıcısından şuna benzer bir bilgi isteyebilmeliyiz:

```json
{
  "model": "provider/model",
  "model_revision": "...",
  "resources": {
    "input_tokens": 27421,
    "cached_input_tokens": 12000,
    "images": 2,
    "tool_definitions": 18
  },
  "estimated_charge": {
    "currency": "USD",
    "maximum": 0.0427
  },
  "accuracy": "exact",
  "valid_for_request": true
}
```

Burada "accuracy" alanı özellikle önemli. Bütün sağlayıcılar aynı garantiyi veremiyorsa API bunu gizlememeli. "exact", "provider-guaranteed", "deterministic-local", "estimate" veya "unavailable" gibi açık semantiklerin bulunması, orchestration katmanının nasıl davranacağını belirleyebilmesini sağlar.

Böylece "CountTokens" adında iki endpoint'in aslında farklı şeyler garanti etmesi problemi ortadan kalkar.

## Context token ile billable token da aynı şey olmayabilir

Bu standardın başka bir ayrımı daha açık biçimde tanımlaması gerektiğini düşünüyorum: modelin context'inde yer kaplayan kaynak ile müşterinin ücretlendirildiği kaynak aynı kavram değildir.

Prompt caching bunun en basit örneklerinden biri. Cached input hâlâ modelin çalışması açısından bağlamın parçasıdır, ancak fiyatlandırması uncached input'tan farklı olabilir. Bazı sağlayıcılar ayrıca reasoning, cache read/write veya başka kaynak sınıflarını ayrı fiyatlandırabiliyor.

Dolayısıyla iyi bir kaynak sorgulama API'si yalnızca:

"input_tokens = 40.000"

dememeli. En azından context kullanımı ile billable resource arasında ayrım yapabilmeli.

Bu ayrım, özellikle model seçiminin yalnızca context window'a göre değil maliyet açısından da yapılacağı sistemlerde gerekli hale geliyor. Aynı 40 bin token iki model için hem farklı context davranışı hem farklı ekonomik sonuç üretebilir.

## Sağlayıcıları sorgulamak da bedelsiz bir çözüm değil

Bütün sağlayıcılar yarın eksiksiz token counting API'leri sunsa bile başka bir mimari sorun ortaya çıkıyor. Bir isteği OpenAI, Anthropic ve Gemini arasında yönlendirmek için üç sağlayıcıya da bütün prompt'u gönderip yalnızca "bunu çalıştırırsam kaç token olur?" diye sorarsak, henüz model seçmeden kullanıcı verisini üç farklı tarafa göndermiş oluruz.

Bu özellikle kurumsal uygulamalarda istenmeyen bir davranış olabilir.

Ayrıca her request öncesinde bir veya birkaç ek network çağrısı yapmak latency oluşturur. Çağrılar paralel yapılabilir ama sıfır maliyetli değildir.

İdeal çözüm bu nedenle yalnızca server-side token counting API'si değildir. Sağlayıcının aynı zamanda kullandığı tokenizer'ı, request serialization davranışını ve bunların revision bilgisini yeterince açık biçimde yayınlaması gerekir. Uygulama normal durumda deterministic hesabı lokal olarak yapabilir, sağlayıcı endpoint'ini ise doğrulama veya uyumsuzluk durumlarında authoritative source olarak kullanabilir.

Yani ideal model iki katmanlıdır: **lokal olarak yeniden üretilebilir hesaplama ve sağlayıcı tarafından doğrulanabilir sonuç.**

Bu aynı zamanda model güncellemeleri açısından da önemlidir. "GPT ailesi tokenizer'ı" veya "Claude tokenizer'ı" gibi geniş kategoriler yeterli değildir. Model veya tokenizer davranışı değiştiğinde revision bilgisi de değişmeli ve önceki hesapların hangi sürüme ait olduğu bilinmelidir.

OpenRouter'ın güncel dokümantasyonu bu sorunun başka bir yüzünü gösteriyor. Platform gerçekleşen kullanımı modelin native tokenizer'ına göre response içerisinde raporluyor ve farklı sağlayıcıların token sayılarının doğrudan birbirleriyle karşılaştırılamayabileceğini açıkça belirtiyor. Bu post-request accounting için değerli; fakat provider-independent deterministic pre-request accounting ihtiyacını tek başına çözmüyor.

## Burada gerçek bir standart boşluğu var

Bugünkü tabloya baktığımızda problem fark edilmiş durumda. OpenAI tam Responses girdisinin token sayısını alabileceğimiz bir mekanizma sunuyor. Anthropic bunun için ayrı Token Counting API sağlıyor. Gemini "countTokens" sunuyor. Amazon Bedrock ise aynı inference girdisi için hesaplanan sayının ücretlendirilecek token sayısıyla eşleşeceğine kadar giden daha güçlü bir garanti veriyor.

Eksik olan artık özelliğin kendisinden çok **ortak sözleşmesi**.

Bir model API'sinin capability discovery mekanizmasında örneğin şu bilgiler bulunabilirdi: Token veya kaynak sayımı destekleniyor mu? Lokal deterministic hesaplama mümkün mü? Tokenizer ve serialization revision'ı nedir? Server-side preflight endpoint var mı? Dönen değer kesin mi, üst sınır mı, yoksa tahmin mi? Hesap context kullanımını mı, billable kullanımını mı temsil ediyor? Aynı request daha sonra gönderildiğinde hangi koşullarda hesap geçerliliğini koruyor?

Bugün bunların cevabı sağlayıcı dokümantasyonlarında ayrı ayrı aranmak zorunda. Üstelik aynı isimle sunulan özelliklerin garantileri aynı değil.

Bu yüzden konuyu "ortak bir tokenizer standardına ihtiyacımız var" şeklinde tanımlamak bence eksik kalıyor. Asıl ihtiyacımız **provider-independent pre-inference resource accounting contract**.

Modelin nasıl tokenize ettiğini bilmek bunun yalnızca bir uygulama detayı olabilir.

## Düzenlemeler bu noktaya henüz gelmiş değil

Bu konu maliyet şeffaflığı içerdiği için Avrupa Birliği Yapay Zekâ Tüzüğü'nün (AI Act) buna benzer bir zorunluluk getirip getirmediğine de bakmak gerekiyor.

AI Act'in genel amaçlı yapay zekâ modellerine ilişkin 53. maddesi, sağlayıcıların modeli kendi sistemlerine entegre edecek downstream sağlayıcılara modelin kabiliyetlerini ve sınırlamalarını anlayabilecekleri dokümantasyonu sunmasını öngörüyor. Annex XII daha da somutlaşıyor ve input/output modality ve formatlarının yanında bunların azami büyüklüklerinin, örneğin context window length bilgisinin verilmesini istiyor.

Bu önemli bir şeffaflık yükümlülüğü. Ancak bugün itibarıyla metinde tokenizer'ın yayınlanması, request serialization algoritmasının açıklanması veya inference gerçekleştirilmeden önce billable resource miktarını deterministik biçimde döndüren bir API sunulması gibi bir yükümlülük bulunmuyor.

Avrupa Komisyonu'nun GPAI Code of Practice çerçevesi de ağırlıklı olarak model dokümantasyonu, eğitim içeriğine ilişkin şeffaflık, telif hakkı ve sistemik risk taşıyan modeller için safety/security konularına odaklanıyor. Article 50 kapsamında 2 Ağustos 2026'da uygulanmaya başlayan diğer şeffaflık yükümlülükleri ise AI ile etkileşim ve AI tarafından üretilmiş veya manipüle edilmiş içeriğin işaretlenmesi gibi başka bir problemi hedefliyor.

Dolayısıyla düzenleme tarafında da burada açık bir boşluk olduğunu söylemek mümkün. "Şeffaf AI" dediğimizde bugün ağırlıklı olarak modelin nereden geldiğini, hangi verilerle eğitildiğini, neler yapabildiğini, hangi riskleri taşıdığını veya üretilen içeriğin AI kaynaklı olup olmadığını konuşuyoruz. Fakat AI servisinin ekonomik davranışının makine tarafından önceden sorgulanabilir olması henüz aynı şeffaflık tartışmasının güçlü bir parçası değil.

Oysa AI giderek kritik bir işletme gideri haline geldikçe bu durum değişebilir.

## Düzenlenmesi gereken şey "token" olmayabilir

Burada doğrudan "sağlayıcılar tokenizer'larını açıklamak zorunda olmalı" gibi bir düzenlemenin doğru hedef olacağından emin değilim. Çünkü bu yaklaşım teknolojiyi bugünkü uygulama biçimine kilitleyebilir.

Daha kalıcı bir prensip şöyle kurulabilir: **Kullanıma göre ücretlendirilen bir AI servisinin sağlayıcısı, teknik olarak belirlenebilir olduğu ölçüde, bir işlemin gerçekleştirilmesinden önce müşterinin bu işlemin ücretlendirilebilir kaynak tüketimini makine tarafından okunabilir biçimde öğrenebilmesini sağlamalıdır.**

Bu kaynak bugün token olabilir. Yarın compute unit, reasoning budget, image processing unit, tool invocation veya başka bir kavram olabilir.

Böyle bir prensip hem teknolojiden bağımsızdır hem de gerçek kullanıcı ihtiyacına daha yakındır. Çünkü müşterinin bilmek istediği şey tokenizer algoritmasının akademik ayrıntısı değil; "Bu işlemi gerçekleştirirsem hangi kaynakları ne kadar kullanacağım ve bunun ekonomik sonucu ne olacak?" sorusunun cevabıdır.

Bulut servislerinde bir sanal makinenin boyutunu, depolama miktarını veya kullanılacak kaynak sınıfını işlemden önce seçebilmeyi doğal kabul ediyoruz. AI servislerinde ise giderek önemli bir compute harcamasını bazen ancak işlem tamamlandıktan sonra kesin olarak öğreniyoruz.

Bu durum uzun vadede garip görünmeye başlayabilir.

## Pre-request accounting yeni bir control plane yeteneğine dönüşebilir

Buradaki fırsat yalnızca daha doğru fatura tahmini yapmak değil. Deterministik kaynak bilgisi mevcut olduğunda AI platformunun karar mekanizması değişebilir.

Harness önce tam isteği oluşturabilir, ardından olası modeller için kaynak gereksinimini hesaplayabilir. Eğer RAG bağlamı bütçeyi aşıyorsa daha agresif reranking uygulanabilir. Tool tanımları beklenenden büyükse yalnızca bu görevle ilgili tool'lar seçilebilir. Conversation history gereğinden fazla büyümüşse lokal bir modelle semantic compaction yapılabilir. Aynı görev farklı sağlayıcılarda farklı tokenizasyon nedeniyle belirgin biçimde farklı maliyet oluşturuyorsa routing kararı buna göre değişebilir. Context window sınırına çok yaklaşılıyorsa çağrıyı yapıp hata almak yerine önceden başka modele geçilebilir.

Daha sonra gerçek kullanım bilgisi pre-request hesaplamasıyla karşılaştırılarak sürekli bir doğrulama döngüsü de kurulabilir.

Bu durumda ortaya çıkan mimari yaklaşık olarak şu hale gelir:

"Build Context → Count Resources → Optimize → Route → Execute → Verify Actual Usage → Learn"

Bu döngünün önemli tarafı, maliyet optimizasyonunun inference sonrasında değil **inference öncesinde** başlamasıdır.

Önceki [AI Engineering FinOps](https://aliozgur.net/2026/08/25/ai-coding-maliyeti-part1/) ve [harness engineering](https://aliozgur.net/2026/08/26/harness-engineering-ai-finops-part2/) tartışmalarımda "ölç, sonucu değerlendir, öğren ve bir sonraki çalıştırmayı değiştir" yaklaşımını savunmuştum. Burada buna başka bir halka ekleniyor: çalıştırmadan önce gelecekteki tüketimin yeterince kesin bir modelini oluşturabilmek.

Bu, retrospective FinOps'tan predictive FinOps'a geçişten de biraz farklı. Eğer girdinin maliyeti teknik olarak deterministik biçimde hesaplanabiliyorsa aslında tahmin yapmıyoruz; henüz gerçekleşmemiş işlemin **kaynak planını** çıkarıyoruz.

## Sonuç: Olasılıksal model, deterministik sayaç

Büyük dil modellerinin çıktılarında belirsizlikten tamamen kurtulamayacağız. Aynı prompt farklı cevaplar üretebilir, reasoning miktarı değişebilir ve bir agentic workflow'un kaç adımda tamamlanacağını önceden kesin olarak bilmek mümkün olmayabilir.

Fakat bu belirsizliği sistemin her katmanına yaymak zorunda değiliz.

Model çağrısı yapılmadan önce hazırlanmış bir input'un nasıl tokenize edileceği, context içinde ne kadar yer kaplayacağı ve hangi kısmının hangi fiyatlama sınıfına gireceği teknik olarak bilinebilir durumdaysa bunun "yaklaşık" bir telemetry problemi olarak kalması için güçlü bir neden yok.

Bugünkü sağlayıcı API'leri sektörün bu ihtiyacı görmeye başladığını gösteriyor. OpenAI, Anthropic, Gemini ve Bedrock'ın farklı biçimlerde pre-request token counting sunması tesadüf değil. Ancak aralarındaki sözleşme farkları aynı zamanda bir sonraki problemi de görünür hale getiriyor: Bir endpoint'in var olması yeterli değil; **ne garanti ettiği standart ve makine tarafından anlaşılabilir olmalı.**

Bu nedenle uzun vadede ihtiyacımız olan şeyin yeni bir tokenizer kütüphanesi olduğunu düşünmüyorum. İhtiyacımız, AI servisleri için tedarikçiden bağımsız bir çalıştırma öncesi kaynak muhasebesi sözleşmesi.

Belki ileride bir AI gateway'in en temel görevlerinden biri modele request göndermek değil, önce şu sorunun kesin cevabını almak olacak:

**"Bu isteği henüz çalıştırmadan, ne tüketeceğimi ve bunun bana neye mal olacağını biliyor muyum?"**

AI altyapısında gerçek maliyet kontrolü, faturayı daha iyi okumakla değil, bu soruyu çağrıdan önce cevaplayabilmekle başlayabilir.

## Kaynaklar

1. [Ali Özgür — Kod Yazmak Ucuzlamıyor: AI Destekli Kodlamanın Görünmeyen Maliyeti](https://aliozgur.net/2026/08/25/ai-coding-maliyeti-part1/)
2. [Ali Özgür — AI Engineering FinOps'un Eksik Parçası: Harness Engineering](https://aliozgur.net/2026/08/26/harness-engineering-ai-finops-part2/)
3. [Ali Özgür — Kısıtlar Yapay Zekâyı Determinizme Yaklaştırabilir mi?](https://aliozgur.net/2026/08/30/ai-constrained-behavioral-determinism/)
4. [OpenAI — Understanding and counting tokens](https://help.openai.com/en/articles/4936856-understanding-and-counting-tokens)
5. [OpenAI — What are tokens and how to count them?](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count)
6. [Anthropic — Token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting)
7. [Anthropic API — Count tokens in a Message](https://docs.anthropic.com/en/api/messages-count-tokens)
8. [Google Gemini API — Counting tokens](https://ai.google.dev/api/tokens)
9. [Amazon Bedrock — CountTokens API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_CountTokens.html)
10. [Amazon Bedrock — Count tokens before running inference](https://docs.aws.amazon.com/bedrock/latest/userguide/count-tokens.html)
11. [OpenRouter — Usage Accounting](https://openrouter.ai/docs/guides/administration/usage-accounting)
12. [OpenRouter — Models](https://openrouter.ai/docs/guides/overview/models)
13. [European Union — Regulation (EU) 2024/1689, Artificial Intelligence Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)
14. [European Commission — General-Purpose AI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai)
15. [European Commission — Questions and Answers on the General-Purpose AI Code of Practice](https://digital-strategy.ec.europa.eu/en/faqs/questions-and-answers-code-practice-general-purpose-ai)
16. [European Commission — Transparency obligations for providers and deployers of AI systems](https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems)

---

{% include share_twitter_tr.html %}

---