---

layout: post
title: "Kısıtlar Yapay Zekâyı Determinizme Yaklaştırabilir mi?"
subtitle: "Bölüm 1: Olasılıksal üretimi daraltılmış bir çözüm uzayına hapsetmek"
date: 2026-08-30
author: "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->  
published: true
tags:

- ai
- software-engineering
- coding
- agents
- engineering

---

> **Bu yazı, kısıtlar, davranışsal determinizm ve Formal Spec-Driven Development üzerine iki bölümlük serinin ilk yazısıdır. Bu bölümde yapay zekânın olasılıksal doğasını ortadan kaldırmadan, kabul edilebilir davranış uzayını matematiksel ve yapısal kısıtlarla daraltarak determinizme yaklaştırıp yaklaştıramayacağımızı ele alıyorum. [İkinci bölümde]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) ise aynı fikrin doğal devamına geçiyorum: spesifikasyonun yalnızca rehber olmaktan çıkıp programın kabul edilme koşulu haline gelmesi.**

Üretken yapay zekâ ile yazılım geliştirirken karşılaştığımız temel çelişkilerden biri şu: Giderek daha fazla kodu doğası gereği olasılıksal sistemlere ürettirirken, ortaya çıkan yazılımdan mümkün olduğunca kesin, tekrarlanabilir ve güvenilir davranmasını bekliyoruz. Büyük dil modeli aynı probleme farklı zamanlarda farklı çözümler önerebilir; aynı çözümü üretmesi halinde bile bu çözümün doğru olduğunu üretim sürecinin kendisi garanti etmez. Buna karşılık yazılımın özellikle finans, güvenlik, üretim, altyapı veya fiziksel sistemlerle etkileşime girdiği alanlarda "büyük ihtimalle doğru" olması yeterli değildir.

<!--end-of-excerpt-->

Buradan ilginç bir soru çıkıyor: Yapay zekânın kendisini deterministik hale getiremiyorsak, hareket edebileceği alanı matematiksel ve yapısal kısıtlarla daraltarak sistemin sonucunu determinizme yaklaştırabilir miyiz?

Burada önce determinizmden ne anladığımızı netleştirelim. En genel anlamıyla **determinizm, bir sistemin belirli bir başlangıç durumu ve aynı girdiler altında sonraki durumunun ve sonucunun bütünüyle bu koşullar tarafından belirlenmesi** demektir. Başka bir ifadeyle, aynı koşulları yeniden oluşturduğumuzda sistemin önünde rastlantısal olarak seçebileceği farklı sonuçlar yoktur; aynı nedenler aynı sonucu doğurur. Yazılım açısından bunu, aynı programın aynı durum ve girdiler altında aynı gözlenebilir davranışı üretmesi şeklinde düşünebiliriz. Bu tanım doğruluk iddiası taşımaz: deterministik bir program her seferinde aynı yanlış sonucu da üretebilir. Determinizm bize sonucun doğru olduğunu değil, davranışın verilen koşullar tarafından belirlendiğini söyler.

Buradaki "determinizme yaklaşmak" ifadesini dikkatli kullanmak gerekiyor. Bir LLM'nin olasılıksal doğasını kısıtlar koyarak ortadan kaldırmış olmayız. LLM aynı gereksinim için her tur hâlâ farklı programlar üretebilir. Fakat olası çıktılar kümesini giderek küçültebilir, belirli hata sınıflarını üretim alanının dışına çıkarabilir ve kabul edilebilir sonuçları modelden bağımsız kurallarla tanımlayabiliriz. Böyle bakıldığında asıl mesele modelin ne kadar deterministik olduğu değil, **modelin ürettiği belirsizliğin sistemin geri kalanına ne kadar sızmasına izin verdiğimizdir.**

Bu iki bölümlük dizinin ilk bölümünde bu fikrin matematiksel ve mühendislik açısından ne anlama geldiğine odaklanacağım. İkinci bölümde ise bu düşüncenin doğal devamı olan Formal Spec-Driven Development'a, programla birlikte kanıt üretme fikrine ve AI için tasarlanmış daha kısıtlı bir programlama ortamının nasıl görünebileceğine geçeceğiz.

## Determinizm, tekrarlanabilirlik ve doğruluk aynı şey değil

Önce kavramları ayırmak gerekiyor. Deterministik bir sistem aynı başlangıç koşullarında aynı sonucu üretir. Tekrarlanabilirlik, pratikte aynı girdinin aynı veya çok benzer çıktılara yol açmasıdır. Doğruluk ise sistemin tanımlanan gereksinimi gerçekten karşılamasıdır. Bunlar birbirinin yerine kullanılabilecek özellikler değildir.

Bir program her seferinde aynı yanlış sonucu üretebilir. Böyle bir program deterministiktir ama doğru değildir. Benzer şekilde bir LLM'nin temp katsayısını düşürmek, örnekleme alanını daraltmak veya decoding davranışını daha sabit hale getirmek aynı prompt için daha tekrarlanabilir çıktılar sağlayabilir; fakat semantik doğruluk konusunda herhangi bir matematiksel güvence oluşturmaz.

Kod üretimi açısından yalnızca modeli daha tekrarlanabilir hale getirmek bu nedenle zayıf bir hedeftir. Aynı hatalı kodu her seferinde üretmek, farklı hatalı kodlar üretmekten mühendislik açısından çok daha değerli değildir.

Daha güçlü hedef şudur: **Model hangi adayı üretirse üretsin, yalnızca tanımladığımız kabul edilebilir davranış alanının içindeki programlar sistemden geçebilsin.**

Bu noktada problem model parametrelerinden çıkıp çözüm uzayının geometrisine dönüşür.

## Kod üretimini bir olasılık dağılımı olarak düşünmek

Basitleştirerek bir kodlama ajanının belirli bir gereksinim karşısında üretebileceği bütün programların kümesine (P) diyelim. Model bu kümedeki programları eşit olasılıkla üretmez; eğitim verisi, prompt, bağlam ve decoding parametreleri nedeniyle bazı programlara diğerlerinden daha yüksek olasılık verir.

Bunu kabaca şöyle düşünebiliriz:  
`Spesifikasyon ve context verildiğinde belirli bir programın üretilme olasılığı`

```text
p(program | specification, context)
```

Kodlama ajanının görevi bu dağılımdan yüksek olasılıklı ve makul bir program üretmektir. Fakat "yüksek olasılıklı" ile "doğru" arasında zorunlu bir ilişki yoktur. Model, eğitim verisinde çok sık karşılaştığı bir örüntüyü yüksek güvenle üretirken bizim problemimiz açısından yanlış davranabilir.

Şimdi üretimden sonra deterministik kısıtlar uyguladığımızı düşünelim:

```text
P  = AI'ın üretebileceği programlar

C1 = sözdizimsel olarak geçerli programlar
C2 = tip açısından geçerli programlar
C3 = izin verilen bağımlılıkları kullanan programlar
C4 = tanımlanan güvenlik politikalarına uyan programlar
C5 = belirtilen davranışsal özellikleri sağlayan programlar

A = P ∩ C1 ∩ C2 ∩ C3 ∩ C4 ∩ C5
```

Burada (A), kabul edilebilir programlar kümesidir. Modelin olasılık dağılımını değiştirmesek bile sistemin dışarı çıkarabileceği sonuçları değiştirmiş oluruz. Her kısıt, çözüm uzayının bir bölümünü eler.

Asıl ilginç nokta burada başlıyor. Eğer bir hata sınıfı belirli bir kısıt tarafından tamamen dışlanabiliyorsa, modelin o hatayı üretme ihtimalinin yüzde 10, yüzde 1 veya yüzde 0,001 olması artık önemli değildir. Kabul mekanizması açısından ihtimal fiilen sıfıra indirilmiştir.

Bu, modelin daha akıllı hale gelmesinden farklı bir güven modelidir.

## Olasılığı azaltmak ile olasılığı ortadan kaldırmak arasındaki fark

AI güvenilirliği tartışmalarında çoğu yaklaşım hatalı çıktı olasılığını azaltmaya çalışır. Daha iyi model kullanırız, daha iyi prompt yazarız, daha fazla bağlam veririz, retrieval ekleriz, agent'a repository kurallarını anlatırız veya birkaç kez kendi sonucunu eleştirmesini isteriz. Bunların tamamı değerli olabilir; fakat temel olarak olasılık dağılımını değiştirmeye çalışırlar.

Örneğin belirli bir hata için:

```text
P(hata) = 0.08
```

olan bir sistemi daha iyi model ve daha iyi bağlamla:

```text
P(hata) = 0.01
```

seviyesine indirebiliriz. Bu ciddi bir iyileşmedir, fakat hata hâlâ mümkündür.

Buna karşılık söz konusu hata, derleyici veya doğrulayıcı tarafından ifade edilebilen bir kurala dönüştürülebiliyorsa farklı bir durum oluşur. Örneğin programın belirli bir yetenek olmadan dosya sistemine erişmesi dil seviyesinde imkânsız hale getirilebiliyorsa, modelin bu davranışı üretmeye ne kadar eğilimli olduğunun önemi azalır. Ürettiği aday kabul edilmez.

Bu nedenle AI destekli yazılım geliştirmede kritik ayrım şu olabilir:

**Bir davranışı daha az olası hale getirmek mi istiyoruz, yoksa onu geçerli programlar kümesinden tamamen çıkarmak mı?**

İkinci seçenek, mümkün olduğu durumlarda çok daha güçlü bir yaklaşımdır.

## Kısıtlar çözüm uzayını küçültür

Bunu başka bir açıdan da düşünebiliriz. Genel amaçlı bir programlama dili çok büyük bir ifade alanı sunar. Aynı iş problemi yüzlerce mimariyle, binlerce kütüphane kombinasyonuyla ve neredeyse sınırsız sayıda programla çözülebilir. Bu esneklik insanlar için güçlüdür, fakat olasılıksal bir kod üreticisi açısından aynı zamanda çok büyük bir hata yüzeyi yaratır.

Bir kodlama ajanına "müşterinin bakiyesini güncelleyen bir fonksiyon yaz" dediğimizde yalnızca iş kuralını değil, birçok örtük kararı da ona bırakmış oluruz. Hangi veri yapısı kullanılacak, state nasıl değişecek, hata nasıl temsil edilecek, concurrency nasıl ele alınacak, hangi dış kaynaklara erişilebilecek ve hangi yan etkiler oluşabilecek? Model yalnızca kod üretmez; farkında olmadan çok sayıda tasarım kararı da verir.

Her açık kısıt bu karar alanlarından birini modelin elinden alır.

```text
Serbest üretim alanı
        ↓
Dil kuralları
        ↓
Tip kuralları
        ↓
Effect / yetenek sınırları
        ↓
İş değişmezleri
        ↓
Güvenlik politikaları
        ↓
Doğrulanabilir davranış
```

Burada amaç mümkün olan en küçük programlama dilini yaratmak değildir. Amaç, **problemin gerektirmediği serbestlik derecelerini sistematik olarak ortadan kaldırmaktır.**

Bu fikir mühendislikte yabancı değildir. SQL, genel amaçlı bir dil kadar özgür değildir ve tam da bu nedenle veritabanı motoru sorgu hakkında güçlü varsayımlar yapabilir. Regular expression'lar belirli bir problem alanını son derece sınırlı bir dille ifade eder. Infrastructure-as-code araçları altyapı değişikliklerini serbest shell script'lerine göre daha yapılandırılmış hale getirir. Tip sistemleri, memory-safe diller ve sandbox'lar da aynı temel prensibin farklı biçimleridir: bazı davranışlardan vazgeçerek sistem hakkında daha güçlü şeyler söyleyebilmek.

AI kod üretimi bu değiş tokuşu çok daha değerli hale getirebilir.

## Entropiyi azaltmak iyi bir benzetme mi?

Bu fikri sezgisel olarak "çıktı entropisini azaltmak" şeklinde ifade etmek cazip. Modelin önünde çok sayıda olası program varken kısıtlar ekledikçe kabul edilebilir seçeneklerin sayısı azalır. Ancak bilgi teorisindeki entropi kavramını burada fazla gevşek kullanmamak gerekir.

Kısıtlar modelin kendi token dağılımının Shannon entropisini azaltmaz. Shannon entropisi, bir olasılık dağılımındaki belirsizliğin ölçüsüdür: dağılım ne kadar yayılmış ve öngörülemezse entropi o kadar yüksektir, tek bir sonuca yığılmışsa düşüktür. Burada kastettiğim, modelin token seçimindeki bu belirsizliktir. Model içeride hâlâ çok sayıda geçersiz programı yüksek olasılıkla üretebilir. Azalan şey daha çok **sistemin kabul ettiği davranış uzayıdır**.

Yine de koşullu dağılım açısından faydalı bir düşünce modeli kurulabilir. Eğer yalnızca (C) kısıtını sağlayan programları kabul ediyorsak ilgilendiğimiz dağılım artık kabaca şuna dönüşür:

```text
p(program | specification, context, C)
```

Kısıtlar güçlendikçe bu koşulu sağlayan programların alanı küçülür. Eğer spesifikasyon belirli bir problem için yeterince güçlü ve eksiksizse, birbirinden sözdizimsel olarak farklı programlar kalsa bile bunların gözlenebilir davranışları birbirine yaklaşabilir.

İşte "determinizme yaklaşma" fikrinin en güçlü yorumu burada ortaya çıkar. Hedef aynı kaynak kodun üretilmesi değildir. Hedef, **farklı üretilmiş programların izin verilen gözlenebilir davranışlarının giderek aynı sözleşmeye yaklaşmasıdır.**

Kaynak kod düzeyinde çeşitlilik devam ederken davranış düzeyinde belirsizlik azalabilir.

## Davranışsal determinizm daha önemli olabilir

İki farklı implementasyon düşünelim. Biri listeyi merge sort ile, diğeri farklı bir algoritmayla sıralıyor olabilir. Kaynak kodları farklıdır, çalışma süreleri farklı olabilir ve AI bunlardan herhangi birini üretebilir. Fakat spesifikasyon yalnızca doğru sıralama sonucunu tanımlıyorsa, iki programın gözlenebilir iş davranışı aynı kabul edilebilir.

Bu durumda kaynak kodun deterministik olmaması problem değildir.

Asıl istediğimiz şey belirli invaryantlar altında davranışın sınırlandırılmasıdır. Örneğin bir para transferinde hangi algoritmanın veya iç veri yapısının kullanıldığı ikincil olabilir; fakat para yoktan var olmamalı, aynı işlem iki kez uygulanmamalı ve yetkisiz hesaplardan para çekilememelidir.

Bu özellikler garanti altına alınabiliyorsa AI'nın implementasyon düzeyindeki özgürlüğü korunabilir.

Dolayısıyla AI destekli kodlama için daha doğru hedef belki "deterministic code generation" değil, **kısıtlanmış davranışsal üretim** (constrained behavioral generation**)** olacaktır: üretim olasılıksal, implementasyon değişken, fakat kabul edilen davranış alanı kesin sınırlarla çevrili.

## Testler bu alanı ne kadar daraltıyor?

Bugünkü kodlama ajanlarında en yaygın kısıt mekanizması testlerdir. Agent kod üretir, testleri çalıştırır, başarısız olursa kodu değiştirir. Bu aslında kaba biçimiyle bir constraint-solving döngüsüne benzer.

```text
Aday program
     ↓
Test
     ↓
Başarısız → yeni aday
     ↓
Başarılı → kabul
```

Fakat testler çözüm uzayını yalnızca gözlemlediğimiz örnekler üzerinden daraltır. Aynı testing beş bin defa başarılı olması, beş bin birinci durumda hatalı olmayacağını matematiksel olarak göstermez. Property-based testing bu alanı genişletir ve genel özellikler üzerinden çok daha güçlü bir kontrol sağlar; yine de çoğunlukla örnekleme yapar.

Bu nedenle testler çok değerli olmakla birlikte "hata olasılığını sıfırlayan kısıt" ile "bugüne kadar hata görmediğimiz kısıt" arasındaki farkı korumamız gerekir.

Örneğin bir fonksiyon için:

```text
assert transfer(100, 20) == 80
assert transfer(100, 50) == 50
assert transfer(100, 100) == 0
```

yazmak bazı örnekleri kontrol eder. Buna karşılık sistemin değişmezi:

```text
amount > 0
balance >= amount
totalMoney_before = totalMoney_after
```

şeklinde ifade edilip bütün geçerli yürütmeler için doğrulanabiliyorsa çok farklı bir güven düzeyine geçeriz.

[İkinci bölümde]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) tam olarak bu noktadan, spesifikasyonun yalnızca agent'a verilen açıklama değil programın kabul koşulu haline gelmesinden devam edeceğiz.

## Her şeyi kanıtlayabilir miyiz?

Hayır. Burada teorik sınırları gözden kaçırmamak önemli. Genel amaçlı Turing-complete (1) programların bütün ilginç davranışlarını otomatik olarak analiz edebilecek evrensel bir doğrulayıcı oluşturamayız. Durma problemi, Rice teoremi (2) ve program doğrulamanın genel karmaşıklığı bu hayalin önüne temel sınırlar koyar.

Fakat bu sınırların mühendislik açısından sonucu "formal doğrulama işe yaramaz" değildir. Tam tersine başka bir strateji önerir: **Doğrulamak istediğimiz sistemi doğrulanabilir hale getirecek biçimde tasarlamak.**

Genel problemi çözmek yerine problem alanını daraltabiliriz. Sınırsız döngüler yerine termination'ın gösterilebildiği yapılar, örtük yan etkiler yerine açık etkiler, kontrolsüz global state yerine immutable veri, keyfi kaynak erişimi yerine yetenek sınırları, runtime'da üretilen bilinmeyen kod yerine statik olarak analiz edilebilir bağımlılık grafikleri kullanılabilir.

Burada kısıt bir eksiklik değildir. Kısıt, kanıtlanabilirlik satın almak için ödediğimiz bedeldir.

Ve AI kodu bizim yerimize üretmeye başladıkça bu bedel eskisine göre çok daha ucuz hale gelebilir. İnsan geliştirici için daha kısıtlı ve daha ayrıntılı bir dil rahatsız edici olabilir; fakat kodun büyük bölümünü makine üretiyorsa yazım ergonomisinin önemi azalırken doğrulanabilirliğin değeri artar.  

## Güven modelini tersine çevirmek

Bugünkü AI destekli kodlama yaklaşımında güven çoğu zaman model merkezlidir. Daha güçlü model seçmeye, prompt'u iyileştirmeye, daha fazla repository context sağlamaya ve agent'ın hata yapma ihtimalini azaltmaya çalışıyoruz. Bu yaklaşımın doğal sınırı, en iyi modelin bile olasılıksal olmasıdır.

Alternatif güven modeli ise şu olabilir:

```text
AI'a güven
```

yerine:

```text
AI'ın ürettiğini doğrulayabilen sisteme güven
```

Bu küçük görünen değişiklik aslında büyük bir mimari ayrımdır.

Model yanlış kod üretebilir. Sorun değil; reddedilir.

Model olmayan bir API uydurabilir. Sorun değil; derlenmez.

Model izin verilmeyen bir kaynağa erişmeye çalışabilir. Sorun değil; yetenek kontrolünden geçmez.

Model bir iş invaryantını bozabilir. Eğer bu invaryant doğrulama sisteminin ifade edebildiği bir özellikse program kabul edilmez.

Burada amaç AI'ın hata yapmasını engellemek değildir. **Hatanın kabul edilen yazılıma dönüşmesini engellemektir.**

Bu yaklaşım güvenlik mühendisliğinde uzun süredir kullandığımız **defense-in-depth** düşüncesine de daha yakındır. Tek bir bileşenin kusursuz olmasını beklemek yerine, hatanın sistem boyunca ilerleyebilmesi için aşması gereken bağımsız sınırlar oluştururuz.

## O zaman insanın görevi ne olacak?

Bu düşünce bizi kod üretiminden daha temel bir soruya götürüyor. Eğer AI giderek daha fazla implementasyon üretiyor ve deterministik araçlar bu implementasyonu kontrol ediyorsa insan yazılım mühendisinin temel sorumluluğu nereye kayacak?

Muhtemelen niyetin tanımlanmasına.

Çünkü doğrulayıcı yalnızca kendisine söylediğimiz şeyi doğrulayabilir. Yanlış spesifikasyonun kusursuz implementasyonu hâlâ yanlış bir sistemdir. "Program spesifikasyona uyuyor" ile "program bizim gerçekten istediğimiz şeyi yapıyor" aynı iddia değildir.

Bu nedenle AI çağında en kritik mühendislik faaliyetlerinden biri spesifikasyon mühendisliği (specification engineering) olabilir. Hangi özellikler her zaman doğru olmalı? Hangi durumlar hiçbir zaman oluşmamalı? Hangi kaynaklara erişilebilir? Hangi yan etkiler kabul edilebilir? Hangi iş invaryantları korunmalı? Hangi failure mode'lar tasarımın parçası olmalı?

Kod üretmenin maliyeti düştükçe bu soruların değeri artabilir.

İlginç biçimde AI, yazılım mühendisini matematikten uzaklaştırmak yerine yeniden matematiğe yaklaştırabilir. Çünkü implementasyonun önemli bölümünü makineye devrettiğimizde insanın en değerli katkısı syntax üretmek değil, sistemin doğru davranışını yeterince kesin tanımlamak olabilir.

## Sonuç: AI deterministik olmayabilir

Başlangıçtaki soruya artık daha kesin bir cevap verebiliriz.

Kısıtlar bir büyük dil modelini (LLM) matematiksel anlamda deterministik hale getirmez. Model aynı problem için farklı programlar üretmeye devam edebilir. Fakat iyi tasarlanmış kısıtlar, **kabul edilebilir programların ve özellikle kabul edilebilir davranışların uzayını sistematik olarak küçültebilir.**

Bu nedenle hedefi şöyle ifade etmek daha doğru olabilir:

> AI'ın olasılıksal doğasını ortadan kaldırmak yerine, bu olasılıksallığın yalnızca güvenli ve doğrulanabilir bir alan içinde hareket etmesine izin vermek.

Bu yaklaşımda model arama motorudur; otorite değildir. Yaratıcıdır; fakat karar verici değildir. Farklı adaylar üretir, fakat hangi adayın kabul edileceğini kendisi belirlemez.

Belki de AI destekli yazılım mühendisliğinde en önemli mimari ilke giderek şu hale gelecek:

**Üretim olasılıksal olabilir; kabul deterministic olmalıdır.**

Bu düşünce bizi doğrudan ikinci soruya götürüyor. Eğer gerçekten böyle bir sistem kurmak istiyorsak bugünkü programlama dilleri, doğal dille yazılmış spesifikasyonlar ve test ağırlıklı geliştirme süreçleri yeterli mi? Yoksa AI tarafından üretilecek yazılım için dili, spesifikasyonu ve doğrulama zincirini birlikte yeniden düşünmemiz mi gerekiyor?

Dizinin [ikinci bölümünde]({% post_url 2026-08-31-ai-formal-spec-driven-development %}) bu soruyu **"Spec-Driven Development'tan Formal Spec-Driven Development'a: AI Çağında Spesifikasyon Koddan Daha Önemli Hale Gelebilir"** başlığı altında ele alacağız. Orada saf fonksiyonel programlama, refinement ve dependent type'lar, effect ve yetenek sistemleri, program + proof üretimi, deterministik verifier'lar, Proof-Carrying Code ve AI-native programlama dili fikrini aynı zincirin parçaları olarak değerlendireceğiz.

---

**1) (Turing-completeness)**, bir programlama dilinin veya hesaplama sisteminin, Alan Turing'in teorik bilgisayarı olan "Turing Makinesi"nin çözebileceği her türlü matematiksel problemi ve algoritmayı (yeterli zaman ve hafıza verildiğinde) çözebilme yeteneğidir; yani sistemin evrensel hesaplama gücüne sahip olduğunu ifade eder. Bir sistemin Turing-tam sayılabilmesi için temel koşullu dallanma (if/else) ve sonsuz döngü/hafıza mekanizmalarına sahip olması gerekir; bu durum, Python gibi modern dillerden Minecraft'taki Redstone sistemine veya Excel formüllerine kadar birçok yapının teorik olarak aynı hesaplama kapasitesine sahip olduğu anlamına gelir.

**2) Rice Teoremi**, bir bilgisayar programının davranışı veya çıktısı (semantik özellikleri) hakkındaki **tüm önemsiz olmayan (non-trivial) özelliklerin karar verilemez (undecidable) olduğunu** belirtir.Basitçe ifade etmek gerekirse: Bir programın kaynak koduna bakarak, onun ne yapacağını (hata verip vermeyeceğini, belirli bir çıktıyı üretip üretmeyeceğini veya sonsuz döngüye girip girmeyeceğini) her zaman doğru tahmin eden **genel bir algoritma yazmak matematiksel olarak imkansızdır**.

>

---

{% include share_twitter_tr.html %}

---

