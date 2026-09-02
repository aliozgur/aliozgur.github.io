---

layout: post
title: "Spec-Driven Development'tan Formal Spec-Driven Development'a"
subtitle: "Bölüm 2: AI Çağında Spesifikasyon Koddan Daha Önemli Hale Gelebilir"
date: 2026-08-31
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- software-engineering
- coding
- agents
- engineering

---

> **Bu yazı, kısıtlar, davranışsal determinizm ve Formal Spec-Driven Development üzerine iki bölümlük serinin ikinci yazısıdır. [İlk bölümde]({% post_url 2026-08-30-ai-constrained-behavioral-determinism %}) yapay zekânın olasılıksal doğasını ortadan kaldırmadan, kabul edilebilir davranış uzayını matematiksel ve yapısal kısıtlarla daraltarak determinizme yaklaştırıp yaklaştıramayacağımızı ele aldım. Bu bölümde ise aynı fikrin doğal devamına geçiyorum: spesifikasyonun yalnızca rehber olmaktan çıkıp programın kabul edilme koşulu haline gelmesi.**

Yazılım geliştirme uzun süre kod merkezli ilerledi. Gereksinimler bir yerde yazılır, analiz dokümanları hazırlanır, kullanıcı hikâyeleri oluşturulur ve sonunda geliştirici bu belirsizliğin içerisinden çalışan bir program üretmeye çalışırdı. Kod, çoğu zaman sistemin gerçek davranışını tarif eden tek kesin kaynak haline gelirdi.

{::comment}end-of-excerpt{:/comment}

Spec-driven development bu modele önemli bir itiraz getiriyor. Temel fikir basit: Önce sistemin ne yapacağını mümkün olduğunca açık biçimde tanımla, sonra implementasyonu bu spesifikasyon üzerinden üret. Özellikle AI kodlama ajanlarının yaygınlaşmasıyla birlikte bu yaklaşım daha da değer kazandı çünkü agent'ın başarısı büyük ölçüde kendisine verilen bağlamın ve kısıtların kalitesine bağlı.

Ancak bugünkü spec-driven development uygulamalarının önemli bir bölümü hâlâ doğal dil seviyesinde kalıyor. "Bir sipariş yalnızca stok yeterliyse onaylanabilir", "toplam tutar negatif olamaz" veya "başarılı ödeme yalnızca bir kez kaydedilmelidir" gibi ifadeler insan için anlamlı olsa da makine için yeterince kesin değildir. "Stok yeterli" tam olarak ne demektir? Aynı anda iki sipariş gelirse ne olur? Ödeme servisi timeout verir ama işlem karşı tarafta tamamlanmışsa sistem nasıl davranmalıdır? "Bir kez" aynı request, transaction, idempotency key veya business operation anlamına mı gelir?

Doğal dil spesifikasyonu niyeti ifade eder ama çoğu zaman davranışı matematiksel olarak sınırlandırmaz. AI kodlama ajanı çağında spec-driven development'ın bir sonraki adımı burada ortaya çıkabilir: **Spesifikasyon yalnızca koddan önce yazılan doküman olmaktan çıkıp programın kabul edilme koşulu haline gelebilir.**

## Spec-driven development bugün neyi çözüyor?

Spec-driven development'ın önemli katkılarından biri kod üretimini niyetten ayırmasıdır. İnsan doğrudan implementasyon ayrıntılarını tanımlamak yerine davranışı tarif eder. Örneğin bir sipariş API'si için spesifikasyon, geçerli müşteri ve yeterli stok bulunduğunda siparişin kaydedilmesini, stoğun azaltılmasını ve `OrderCreated` olayının yayımlanmasını isteyebilir.

Bu yaklaşım klasik "önce kod yaz, sonra ne yaptığını anlamaya çalış" modelinden daha güçlüdür ve AI açısından da değerlidir; çünkü agent'a görev sınırı verir. Ancak spesifikasyon hâlâ yorumlanabilir. İnsan geliştirici de AI agent da aynı metni farklı biçimde anlayabilir.

Bugünkü model kabaca şöyledir:

```text
İnsan niyeti
      ↓
Spesifikasyon
      ↓
Yorumlama
      ↓
Implementasyon
      ↓
Test
```

Spesifikasyon kod üretimini yönlendirir ama programın gerçekten spesifikasyona uyduğunu ispatlamaz. Bir sonraki aşamayı bu nedenle **Formal Spec-Driven Development** olarak düşünmek mümkün.

## Spesifikasyon rehber olmaktan çıkıp sınır haline gelirse

Biçimsel spesifikasyonda davranış yalnızca doğal dille ifade edilmez. Programın sağlaması gereken özellikler makine tarafından doğrulanabilir ifadelere dönüştürülür:

```text
requires:
    quantity > 0

requires:
    availableStock >= quantity

ensures:
    order.status = Confirmed

ensures:
    newStock = oldStock - quantity
```

Burada spesifikasyon artık yalnızca açıklama değildir; bir doğrulama hedefidir. Agent istediği implementasyonu üretebilir ancak compiler veya verifier bu koşulların sağlandığını doğrulayamıyorsa program kabul edilmez.

Normal spec-driven development kabaca "sistemi böyle geliştir" derken Formal Spec-Driven Development daha güçlü bir şey söyler: **"Bu özellikleri sağladığı doğrulanamayan programı kabul etme."**

Bu ayrım özellikle AI açısından önemlidir. Bugün agent'lara repository talimatları, prompt'lar, coding rule'lar, testler ve sandbox sınırları veriyoruz. "Bu modülü değiştirme", "network'e çıkma", "aynı işlemi iki kere kaydetme" veya "bu invaryant'ı bozma" diyoruz. Bunlar davranış talimatlarıdır ve olasılıksal bir sistem tarafından yorumlanırlar.

Formal modelde aynı sınırlar dilin ve doğrulama sisteminin parçası olabilir:

```text
module Payment

gereksinim duyulan yetenek:
    PaymentGateway.Call
    PaymentDatabase.Write

forbids:
    Filesystem
    Process
    DynamicCode
```

Bu durumda dosya sistemine erişmemek bir prompt tavsiyesi değildir. Programlama dilinin zorladığı bir sınırdır.

## Saf fonksiyonel programlama önemli ama yeterli değil

Bu düşünce bizi doğal olarak saf fonksiyonel programlamaya götürüyor. Haskell gibi dillerin güçlü yanı, referential transparency ve immutable veri yapıları sayesinde program davranışının reasoning açısından daha yönetilebilir olmasıdır. Saf bir fonksiyon aynı girdiler için aynı çıktıyı üretir ve gizli yan etkiler yaratmaz.

Bu AI tarafından üretilen kod açısından değerlidir. Bir fonksiyonun etkilerinin sınırları ne kadar belirginse hem modelin o fonksiyon hakkında reasoning yapması hem de insanın üretilen kodu incelemesi kolaylaşır.

Ancak saflık doğruluk anlamına gelmez:

```text
divide x y = x / y
```

tamamen saf olabilir ve yine de `y = 0` problemi vardır.

Refinement type veya dependent type yaklaşımında daha güçlü bir sözleşme ifade edilebilir:

```text
divide :
    x : Real ->
    y : Real { y != 0 } ->
    r : Real { r * y = x }
```

Artık tip sistemi yalnızca verinin şeklini değil, programın davranışı hakkında matematiksel bir iddiayı da taşır.

Liquid Haskell, F*, Dafny, Idris, Lean ve benzeri sistemler bu düşüncenin farklı parçalarının bugün zaten mümkün olduğunu gösteriyor. Dolayısıyla ihtiyaç duyduğumuz yapı taşlarının önemli bölümü yeni değil. Yeni olan, bunların karşısına program, spesifikasyon ve proof üretme kapasitesi giderek artan AI agent'ların çıkmasıdır.

## Kodun yanında kanıtını da üretmek

Bugünkü kodlama ajanı sürecini basitleştirirsek şöyle gösterebiliriz:

```text
İnsan niyeti
      ↓
Prompt / Spec
      ↓
AI kodlama ajanı
      ↓
Kod
      ↓
Testler
```

Testler değerlidir fakat seçilmiş örnekleri kontrol eder. Bir testin on bin defa başarılı olması, test edilmemiş bütün girdiler için programın doğru olduğunu matematiksel olarak göstermez.

Formal verification farklı bir soru sorar. Bir sıralama fonksiyonuna yalnızca:

```text
ensures sorted(result)
```

demek yeterli değildir. Fonksiyon her zaman boş liste döndürerek bu koşulu sağlayabilir. Spesifikasyonun ayrıca sonucun girdinin bir permütasyonu olduğunu belirtmesi gerekir:

```text
ensures sorted(result)
ensures permutation(result, input)
```

AI agent'ın görevi artık yalnızca `sort()` implementasyonunu üretmek olmayabilir. Hem programı hem de bu koşulların bütün geçerli girdiler için sağlandığını gösteren proof'u üretmek olabilir.

Workflow böylece değişir:

```text
İnsan niyeti
      ↓
Biçimsel spesifikasyon
      ↓
AI sentezi
      ↓
Program + Kanıt
      ↓
Deterministik doğrulayıcı
      ↓
Çalıştırılabilir program
```

Buradaki kritik fikir, [ilk yazıdaki]({% post_url 2026-08-30-ai-constrained-behavioral-determinism %}) sonuca bağlanır: **Programı üreten sistem olasılıksal olabilir; programı kabul eden sistem deterministic olabilir.**

AI yanlış program veya yanlış kanıt üretebilir. Ancak küçük ve güvenilir bir proof checker kanıtı doğrulamıyorsa program kabul edilmez. Güven modelinin merkezi AI'ın kendisinden doğrulama mekanizmasına taşınır.

## Proof-Carrying Code neden yeniden ilginç?

Bu yaklaşımın tarihsel bir öncülü var. George C. Necula ve Peter Lee'nin 1990'larda geliştirdiği **Proof-Carrying Code (PCC)** fikrinde güvenilmeyen bir kaynaktan gelen kod, belirlenen güvenlik politikasını sağladığını gösteren makine tarafından doğrulanabilir bir kanıtla birlikte taşınır. Kodu alan sistem üreticiye güvenmek zorunda değildir; kanıtı kontrol eder.

O dönemde problem "untrusted mobile code" bağlamında tartışılıyordu. AI kodlama ajanı çağında aynı güven modeli şaşırtıcı derecede güncel görünüyor.

Bugünkü soru şuna dönüşüyor: Ne üreteceğini deterministik biçimde bilemediğimiz bir kodlama ajanının koduna nasıl güvenebiliriz?

PCC'nin cevabı bugün yeniden anlam kazanıyor: **Koda güvenme; kanıtını doğrula.**

## AI formal methods'in ekonomisini değiştirebilir

Formal methods'in ana akım yazılım geliştirmede sınırlı kalmasının önemli nedenlerinden biri maliyetidir. Biçimsel spesifikasyon oluşturmak, invaryant tanımlamak, lemma yazmak ve proof geliştirmek uzmanlık ve zaman gerektirir.

AI burada önemli bir ekonomik değişim yaratabilir. F*, Lean, Dafny, Verus ve diğer proof-oriented ortamlarda LLM ve agent tabanlı proof/program synthesis çalışmaları, modelin yalnızca implementasyon değil spesifikasyon formalizasyonu, invaryant, lemma ve proof üretiminde de rol oynayabileceğini gösteren bir araştırma alanı oluşturuyor. "Vericoding" olarak adlandırılan yaklaşım da doğal dil veya biçimsel spesifikasyondan formel olarak doğrulanmış program üretimini doğrudan hedefliyor.

Kod üretiminin marjinal maliyeti düşerken formalization ve proof üretiminin maliyeti de AI yardımıyla düşerse, geçmişte yalnızca havacılık, savunma, kriptografi veya safety-critical sistemlerde ekonomik olan tekniklerin daha sıradan kurumsal yazılımlarda kullanılabilmesi mümkün hale gelebilir.

Bu durumda AI'ın yazılım mühendisliğine en önemli katkılarından biri daha fazla kod üretmesi olmayabilir. **Formal methods'i ekonomik hale getirmesi olabilir.**

## Spesifikasyon mühendisliği (specification engineering) yeni temel disiplin olabilir

Formal verification'ın sihirli bir çözüm olmadığını burada özellikle vurgulamak gerekiyor. Bir program spesifikasyona kusursuz biçimde uyabilir ve spesifikasyon yanlış olabilir.

Proof checker bize "program istediğin şeyi yapıyor" garantisi vermez. Daha doğru ifade şudur: **Program formal olarak söylediğin şeyi yapıyor.**

Bu ayrım AI çağında son derece önemlidir. Implementasyon üretiminin maliyeti azaldıkça insan yazılım mühendisinin sorumluluğu koddan spesifikasyona doğru kayabilir. Asıl sorular sistemin ne yapması gerektiği, ne yapmaması gerektiği, hangi invaryant'ların her zaman korunacağı, hangi yan etkilerin mümkün olduğu, hangi kaynaklara erişilebileceği ve hangi performans veya güvenlik sınırlarının ihlal edilemeyeceği haline gelir.

Örneğin para transferi şöyle tarif edilebilir:

```text
transfer(from, to, amount)

requires:
    amount > 0

requires:
    balance(from) >= amount

ensures:
    balance(from)' = balance(from) - amount

ensures:
    balance(to)' = balance(to) + amount

invaryant:
    totalMoney' = totalMoney
```

Son satır sistemdeki toplam paranın transfer nedeniyle değişemeyeceğini ifade eder. Bu yalnızca birkaç unit test ile kontrol edilen bir örnek olmaktan çıkar ve programın koruması gereken bir invaryant haline gelir.

Bu nedenle gelecekte code review kadar, hatta bazı sistemlerde ondan daha önemli faaliyet **spec review** olabilir.

## Test-driven development ortadan kalkmaz

Formal verification testlerin gereksiz hale geldiği anlamına gelmez. İkisi farklı soruları cevaplar. Formal verification "program spesifikasyona uyuyor mu?" sorusuna yaklaşırken testler ve çalışma zamanı gözlemleri "gerçek sistem düşündüğümüz ortamda beklediğimiz gibi davranıyor mu?" sorusunu cevaplamaya devam eder.

Donanım davranışı, network gecikmesi, üçüncü taraf servisler, veritabanı implementasyonu, dağıtık sistem failure mode'ları ve kullanıcı deneyimi her zaman theorem prover'ın modelinin tamamı olmayabilir.

Bu nedenle güven zinciri katmanlı olabilir:

```text
Specification
      ↓
Formal verification
      ↓
Implementation
      ↓
Property-based tests
      ↓
Integration tests
      ↓
Runtime verification
      ↓
Production observability
```

Property-based testing özellikle bugünkü dünya ile formal verification arasında doğal bir geçiş katmanı sunar. Klasik unit test belirli bir örneği kontrol ederken property-based testing çok sayıda üretilmiş girdi üzerinde genel özellikleri sınar. Bu matematiksel proof değildir ama düşünme biçimi spesifikasyon merkezlidir.

Her özellik aynı doğrulama seviyesine de ihtiyaç duymaz. Kritik finansal invaryant formal proof gerektirebilirken bir UI davranışı acceptance test ile yeterince doğrulanabilir. Formal Spec-Driven Development'ın amacı her şeyi theorem prover ile kanıtlamak değil, **doğrulama seviyesini risk ve kritikliğiyle uyumlu hale getirmektir.**

## Correctness yalnızca fonksiyonun sonucundan ibaret değildir

Spesifikasyon kavramını yalnızca girdiler ve çıktılar üzerinden düşünmek de fazla dar olur. Güvenlik özellikleri, concurrency kuralları, idempotency, kaynak kullanımı ve zaman sınırları da spesifikasyonun parçası olabilir.

Bir modülün effect ve yetenek sınırları şöyle ifade edilebilir:

```text
gereksinim duyulan yetenek:
    Customer.Read
    Order.Write
    Event.Publish<OrderCreated>

forbids:
    Filesystem
    Process
    DynamicCode
```

Gerçek zamanlı bir sistem için zaman sınırı:

```text
ensures:
    executionTime < 5ms
```

veya algoritmik kaynak sınırı:

```text
ensures:
    memory <= O(n)

ensures:
    time <= O(n log n)
```

gibi özellikler hedeflenebilir. Bunların tamamının genel amaçlı programlarda statik olarak kanıtlanması kolay değildir; bazıları static analysis, model checking, runtime verification veya ölçüm gerektirir. Ancak önemli olan spesifikasyonun yalnızca functional correctness değil, sistemin daha geniş doğruluk kavramını taşımasıdır.

## AI için programlama dili nasıl değişebilir?

Formal Spec-Driven Development bizi programlama dilinin kendisine geri getiriyor. Bugünkü genel amaçlı diller AI agent'lar düşünülerek tasarlanmadı. Agent'a çok geniş bir ifade ve davranış alanı veriyor, ardından bu alanı prompt'lar, sandbox'lar, linter'lar, policy engine'ler, testler ve code review ile yeniden daraltmaya çalışıyoruz.

Belki de tersinden başlamalıyız.

AI-native bir dil şu özelliklerin bir bölümünü varsayılan hale getirebilir:

- pure-by-default ve immutable-by-default çalışma modeli,
- totality'nin mümkün olduğunca varsayılan olması,
- explicit effect system,
- yetenek tabanlı kaynak erişimi,
- refinement type'lar,
- kontrollü dependent type desteği,
- `requires`, `ensures` ve `invaryant` sözleşmeleri,
- SMT-assisted automatic verification,
- gerektiğinde açık proof object'leri,
- deterministic dependency graph,
- kısıtlı veya yasak reflection ve runtime code generation,
- güvenlik ve kaynak kullanım sözleşmeleri,
- küçük ve denetlenebilir bir trusted verification kernel.

Buradaki amaç dünyanın en güçlü programlama dilini yapmak değildir. **AI'ın yanlış program üretebileceği alanı mümkün olduğunca küçültmektir.**

## İnsan kod yazmıyorsa syntax ne için optimize edilmeli?

Programlama dillerinin syntax'ı onlarca yıldır insanların kod yazma ergonomisi düşünülerek optimize edildi. Daha kısa ifadeler, daha az boilerplate ve implicit davranışlar çoğu zaman geliştirici üretkenliğini artırdı.

AI kodun önemli bölümünü üretiyorsa bu optimizasyon değişebilir. AI için beş karakter yerine yirmi karakter üretmenin anlamlı bir maliyeti yoktur. Buna karşılık insan reviewer için explicit davranış çok değerlidir.

Bu nedenle AI-native dil kısa olmak yerine açıklayıcı olabilir. `save(customer)` gibi bağlam gerektiren bir ifade yerine hangi kaynağın hangi yetenek üzerinden değiştirildiğini açıkça gösteren daha ayrıntılı bir yapı tercih edilebilir.

İdeal hedef belki **human-readable, but not human-typing-optimized** bir dil olacaktır. İnsan her satırı yazmak zorunda değildir ama sistemin davranışını gerektiğinde okuyup anlayabilmelidir.

## Vibe coding'den vericoding'e

Bu noktada vibe coding ile vericoding arasındaki fark yalnızca terminolojik değildir. Vibe coding'in uç noktasında insan doğal dille ne istediğini anlatır, AI programı üretir ve çalışan sonuç üzerinden ilerlenir. Vericoding yaklaşımında ise hedef biçimsel spesifikasyondan formel olarak doğrulanmış program üretmektir.

İki modelin güven yaklaşımı farklıdır.

Birinci modelde AI'ın doğru kod üretme ihtimalini yükseltmeye çalışırız.

İkinci modelde AI'ın doğru olduğuna inanmak zorunda olmadığımız bir sistem tasarlarız.

Formal Spec-Driven Development bu nedenle gelecekte şöyle bir zincire dönüşebilir:

```text
İnsan niyeti
        ↓
Doğal dil spesifikasyonu
        ↓
Spesifikasyon mühendisliği
        ↓
Biçimsel spesifikasyon
        ↓
AI Program + Proof Synthesis
        ↓
Deterministik doğrulama
        ↓
İnsan tarafından incelenebilir davranış özeti
        ↓
Executable
        ↓
Runtime verification ve observability
```

Bu modelde AI zincirin en az güvenilir bileşeni olabilir ve bu bir problem değildir. Çünkü güven sınırının merkezinde AI değil, spesifikasyon ve deterministic verification bulunur.

## Spec-driven development'ın doğal devamı bu olabilir

Bugün spec-driven development'ın yükselişini büyük ölçüde kodlama ajanlarının daha iyi bağlama ihtiyaç duyması üzerinden okuyoruz. Daha iyi spesifikasyon verirsek agent daha iyi kod üretiyor. Repository kurallarını daha açık yazarsak daha az hata yapıyor. Acceptance criteria'yı ayrıntılı verirsek sonuç daha öngörülebilir oluyor.

Bunlar önemli gelişmeler ama belki geçiş döneminin pratikleri.

Daha radikal ihtimal, spesifikasyonun AI için iyi bir prompt olmaktan çıkmasıdır.

Spesifikasyon programın matematiksel sözleşmesi haline gelebilir. Agent'ın görevi spesifikasyonu yorumlayarak makul görünen kod üretmek değil, verilen sözleşmeyi sağlayan bir program bulmak ve mümkün olan özellikler için bunun kanıtını üretmek olabilir.

Saf fonksiyonel programlama bu dünyanın önemli yapı taşlarından biridir ama tek başına hedef değildir. Haskell'den saflığı ve referential transparency'yi, Idris ve Lean dünyasından dependent type düşüncesini, Liquid Haskell ve F*'dan refinement'ları, Koka'dan effect tracking'i, Rust'tan compiler-enforced restrictions yaklaşımını, Verus ve Dafny'den program verification modelini, Proof-Carrying Code'dan ise "üreticiye güvenme, kanıtı doğrula" ilkesini alabiliriz.

Bütün bunların üzerinde ise spec-driven development'ın en önemli fikri kalır:

**Önce ne istediğini tanımla, sonra kodu üret.**

AI çağında buna yalnızca küçük ama önemli bir ek yapmamız gerekebilir:

**Önce ne istediğini mümkün olduğunca doğrulanabilir biçimde tanımla; sonra AI'dan yalnızca kodu değil, kodun bu tanıma uyduğuna ilişkin kanıtı da iste.**

Bu değişim gerçekleşirse yazılım mühendisliğinin merkezindeki çıktı yavaş yavaş koddan spesifikasyona kayabilir. İnsan mühendis implementasyonun her satırını yazan kişi olmaktan çıkarak sistemin davranışını, invaryant'larını, güven sınırlarını ve kabul kriterlerini tanımlayan kişi haline gelebilir.

Bugüne kadar programlama dillerine çoğunlukla şu soruyu sorduk:

**Bu dille ne kadar güçlü programlar yazabiliriz?**

AI çağında daha önemli soru bunun tam tersi olabilir:

**Bu spesifikasyon altında yanlış bir program üretmek ne kadar zor?**

Belki daha da önemlisi:

**Program yanlışsa, bunu production'a çıkmadan önce matematiksel olarak anlayabilir miyiz?**

## Kaynaklar ve ileri okuma

- George C. Necula, *Proof-Carrying Code*, POPL, 1997.
- George C. Necula & Peter Lee, *Safe, Untrusted Agents Using Proof-Carrying Code*, 1998.
- F* — proof-oriented programming, refinement/dependent types ve SMT-assisted verification.
- Dafny — program contracts, invaryantlar, termination ve automated verification.
- Lean 4 — theorem proving ve dependent type theory.
- Liquid Haskell — refinement types ve SMT tabanlı doğrulama.
- Idris 2 — dependent types ve totality.
- Verus — Rust için biçimsel spesifikasyon ve verification.
- Koka — effect typing ve algebraic effect handlers.
- Microsoft Research, *Towards Neural Synthesis for SMT-Assisted Proof-Oriented Programming*.
- *A Benchmark for Vericoding*, 2025.
- *Proofs Promptly: An Experience Report on Proof-Oriented Programming with AI Agents*, ICFP 2026.
- *Vero: A Repository-Level Benchmark for Verified Code Generation*, 2026.

---

{% include share_twitter_tr.html %}

---

