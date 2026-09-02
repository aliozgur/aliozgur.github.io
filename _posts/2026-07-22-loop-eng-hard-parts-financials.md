---
layout: post
title: "Loop Engineering Neden Zor?"
subtitle: "Asıl Problem Model Değil, Döngünün Ekonomisidir"
date: 2026-07-22
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:
  - ai
  - agents
  - software
  - automation
  - cost-optimization

---


["Loop Engineering: Kendi Kendini İyileştiren Yapay Zekâ Döngüleri"]({% post_url 2026-06-22-loop-engineering %}) yazımda loop engineering kavramını, yani LLM tabanlı sistemleri tek seferlik cevap üreten araçlar olmaktan çıkarıp kontrollü, doğrulanabilir ve gerektiğinde kendini düzelten süreç bileşenleri haline getirme fikrini ele almıştım.

Orada temel soru şuydu:

> Bir LLM'i hedefe doğru adım adım ilerleyen, hata yaptığında geri dönebilen, sonucu test edebilen ve gerektiğinde kendini iyileştirebilen bir yapıya nasıl dönüştürürüz?


{::comment}end-of-excerpt{:/comment}

Bu yazıda aynı konunun daha az konuşulan ama pratikte en belirleyici tarafına bakmak istiyorum:

> Bu döngüler neden pahalıdır?

Çünkü loop engineering sadece teknik bir problem değildir. Aynı zamanda ciddi bir maliyet ve bütçe problemidir.

Bir LLM'e tek bir soru sormak ile bir loop çalıştırmak aynı şey değildir. Tek bir cevapta genellikle bir prompt, bir context ve bir output vardır. Oysa bir loop içinde planlama, araç kullanımı, doğrulama, hata analizi, yeniden deneme, context güncelleme, loglama, memory yazımı ve bazen insan onayı vardır.

Bu yüzden loop engineering'in zorluğu sadece "model doğru cevap verdi mi?" sorusuyla açıklanamaz.

Asıl soru şudur:

> Model doğru cevaba ulaşana kadar kaç kez düşünecek, kaç kez araç kullanacak, kaç kez hata yapacak, kaç kez düzeltecek ve bütün bunlar ne kadara mal olacak?

---

## Tek Cevap Ucuzdur, Döngü Pahalıdır

Basit bir LLM çağrısı şöyle düşünülebilir:

```text
Kullanıcı sorusu
  -> Model cevabı
```

Bu yapıda maliyet kabaca üç şeyden oluşur:

```text
input token + output token + varsa tool maliyeti
```

Fakat bir loop yapısı böyle çalışmaz.

Örneğin bir coding agent döngüsü şöyle olabilir:

```text
Issue'yu oku
  -> ilgili dosyaları bul
  -> kod tabanını analiz et
  -> değişiklik planı çıkar
  -> kodu değiştir
  -> build al
  -> test çalıştır
  -> hata varsa logları oku
  -> düzeltme yap
  -> tekrar test çalıştır
  -> diff'i özetle
  -> gerekirse memory'ye ders çıkar
```

Burada artık tek bir LLM çağrısı yoktur. Birden fazla çağrı vardır. Üstelik her çağrı aynı maliyette değildir.

Bazı çağrılar kısa ve ucuzdur.  
Bazı çağrılar uzun context taşır.  
Bazı çağrılar çok fazla output üretir.  
Bazı çağrılar tool kullanır.  
Bazı çağrılar başarısız olur ama yine de fatura üretir.

Bu çok önemli bir nokta:

> Başarısız LLM çağrısı da maliyet üretir.

Bir agent yanlış dosyayı okuduğunda, gereksiz test çalıştırdığında, yanlış SQL ürettiğinde, hatalı patch uyguladığında veya hedef dışına çıktığında sadece zaman kaybetmez. Aynı zamanda bütçe tüketir.

Bu nedenle loop engineering'de kalite ve maliyet birbirinden ayrı düşünülemez.

---

## Loop Maliyetini Belirleyen Temel Kalemler

Bir loop'un maliyetini kabaca şu kalemler belirler:

1. **Input token maliyeti**  
   Modele gönderilen sistem promptu, kullanıcı talebi, geçmiş konuşma, doküman, kod, şema, hata logu ve araç sonuçları.

2. **Output token maliyeti**  
   Modelin ürettiği plan, kod, açıklama, SQL, analiz, test yorumu veya rapor.

3. **Cached input maliyeti**  
   Tekrarlayan context parçalarının daha düşük maliyetle tekrar kullanılması.

4. **Tool maliyetleri**  
   Web search, file search, code execution, container, external API çağrıları veya platforma özel araç ücretleri.

5. **Tekrar deneme maliyeti**  
   Hatalı sonuçtan sonra döngünün yeniden çalışması.

6. **Doğrulama maliyeti**  
   Test, build, SQL validasyonu, statik analiz, policy check veya insan onayı.

7. **Memory ve gözlemlenebilirlik maliyeti**  
   Loglama, trace saklama, öğrenilen kuralları yazma, önceki sonuçları geri getirme.

Bu kalemlerden bazıları doğrudan LLM faturasına yansır. Bazıları ise altyapı maliyeti, zaman maliyeti veya operasyonel karmaşıklık olarak ortaya çıkar.

Ama sonuç değişmez:

> Bir loop'un maliyeti, tek bir model çağrısının maliyeti değildir. Döngünün toplam davranışının maliyetidir.

---

## Basit Bir API Maliyet Projeksiyonu

Aşağıdaki örnek tamamen yaklaşık bir senaryodur. Ama loop maliyetini düşünmek için faydalıdır.

Diyelim ki bir kurumsal coding veya veri analizi loop'u ilk çalıştırmada şunları yapıyor:

```text
İlk çalıştırma:
- 100.000 input token
- 25.000 output token
```

Bu ilk çalıştırmada sistem henüz bağlamı öğrenmektedir. Kod tabanını, şemayı, dokümanları, kuralları, hata mesajlarını, tool sonuçlarını ve kullanıcı beklentisini ilk kez işler.

Sonraki çalıştırmalarda ise sistemin önemli bir kısmı tekrar kullanılabilir hale gelir:

```text
Sonraki çalıştırma:
- 70.000 cached input token
- 15.000 normal input token
- 8.000 output token
```

Yani sistem promptu, proje kuralları, bazı doküman parçaları, şema bilgisi veya önceki context parçaları cache avantajı sağlayabilir. Ayrıca loop daha az keşif yapar, daha az açıklama üretir, daha hedefli ilerler.

Aşağıdaki tablo bu varsayımla yaklaşık maliyeti gösterir:

| Sağlayıcı / Model | İlk çalıştırma yaklaşık maliyet | Sonraki çalıştırma yaklaşık maliyet | Neden fark oluşuyor? |
|---|---:|---:|---|
| OpenAI GPT-5.1 | $0.38 | $0.11 | Output fiyatı input'un yaklaşık 8 katı; cache hit fiyatı ise normal input'un onda biri kadar. |
| Anthropic Claude Sonnet 4.6 | $0.68 | $0.19 | İlk çalıştırmada cache henüz oluşmadığı için tüm input standart fiyattan işlenir; sonraki cache hit maliyeti onda bire düşer. |
| DeepSeek R1 | $0.11 | $0.04 | Cache hit / cache miss ayrımı input tarafında büyük fark yaratır. |
| Kimi K2.6 | $0.20 | $0.06 | Uzun context ve otomatik context caching, tekrar eden senaryolarda maliyet avantajı sağlar. |

> **Not:** Bu tablodaki rakamlar, yazının yayımlandığı tarihte (Ağustos 2026) sağlayıcıların kendi fiyatlandırma sayfalarında yayımladığı liste fiyatları üzerinden, yukarıdaki token varsayımlarıyla hesaplanmış yaklaşık değerlerdir. Fiyatlar sağlayıcılar tarafından sık sık ve önceden haber verilmeden değiştirilebilir; ayrıca bölge, batch/flex kullanımı, cache süresi (5 dakika / 1 saat) ve tool kullanımı gibi etkenler gerçek maliyeti değiştirir. Güncel ve kesin fiyatlandırma için ilgili sağlayıcının resmi fiyatlandırma sayfasına bakın.

Bu tabloyu kesin bir fiyat listesi gibi okumamak gerekir. Model fiyatları değişir. Context uzunluğu değişir. Output miktarı değişir. Tool kullanımı değişir. Cache davranışı sağlayıcıya göre farklıdır.

Ama tablo önemli bir prensibi gösterir:

> Loop'un ilk çalıştırması çoğu zaman keşif maliyetidir. Sonraki çalıştırmalar ise tekrar kullanım ekonomisine dayanır.

---

## İlk Döngü Neden Pahalıdır?

Bir loop'un ilk çalıştırması genellikle pahalıdır çünkü sistem henüz neyin önemli olduğunu bilmez.

İlk çalıştırmada şu işler yapılır:

```text
Bağlam keşfi
  -> ilgili dosyaları veya dokümanları bulma
  -> domain kurallarını anlama
  -> yanlış yolları eleme
  -> başarılı çalışma sırasını öğrenme
  -> hata türlerini tanıma
  -> doğrulama stratejisini belirleme
  -> kalıcı hale getirilecek bilgileri ayıklama
```

Bu aslında bir tür "ilk yatırım" maliyetidir.

Örneğin bir coding loop düşünelim. İlk kez çalıştığında agent şunları bilmez:

- Proje hangi klasör yapısını kullanıyor?
- Testler nasıl çalıştırılıyor?
- Build komutu nedir?
- Hangi dosyalar değiştirilmemeli?
- Kod standardı nedir?
- Hangi hatalar sık görülüyor?
- Public API kırılmaması için hangi kurallar var?
- Migration gerekiyorsa nasıl oluşturuluyor?
- Hangi testler hızlı, hangileri pahalı?
- Hangi hata mesajı gerçekten kritik?

Bu bilgiler ilk denemede ya prompt'a konur, ya dosyalardan okunur, ya tool çağrılarıyla bulunur, ya da deneme-yanılma ile öğrenilir.

Hepsi token demektir.  
Hepsi zaman demektir.  
Hepsi bütçe demektir.

İlk döngü bu yüzden pahalıdır.

Çünkü ilk döngü sadece işi yapmaz. Aynı zamanda işin nasıl yapılacağını da öğrenir.

---

## Sonraki Döngüler Neden Daha Ucuz Olabilir?

İyi tasarlanmış bir loop, her çalıştırmada sıfırdan başlamaz.

Bazı bilgileri tekrar kullanır:

```text
Sabit sistem promptu
Proje kuralları
Kodlama standartları
Sık kullanılan komutlar
Şema özeti
Yetki kuralları
Test stratejisi
Başarılı plan şablonları
Önceki hatalardan çıkarılmış dersler
```

Bu tekrar kullanım birkaç yoldan maliyeti düşürür.

Birincisi, **context caching** sayesinde tekrar eden input token'ları daha düşük maliyetle işlenebilir.

İkincisi, loop artık daha az keşif yapar. Hangi dosyalara bakacağını, hangi araçları kullanacağını, hangi sırayla ilerleyeceğini daha iyi bilir.

Üçüncüsü, output daha kısa hale gelir. İlk çalıştırmada uzun analizler ve planlar gerekebilir. Sonraki çalıştırmalarda sistem daha net, daha hedefli ve daha az açıklama üretebilir.

Dördüncüsü, başarısız deneme sayısı azalabilir. Eğer loop önceki hatalardan doğru ders çıkardıysa aynı hatayı tekrar etmez.

Bu nedenle iyi bir loop tasarımında amaç sadece "cevap üretmek" değildir.

Amaç şudur:

> Her çalıştırmadan sonra bir sonraki çalıştırmanın maliyetini ve hata ihtimalini azaltmak.

Bu, self-improving loop kavramının ekonomik tarafıdır.

---

## Cache Her Şeyi Çözmez

Burada dikkatli olmak gerekir. Context caching önemli bir maliyet avantajı sağlayabilir ama sihirli bir çözüm değildir.

Cache'in işe yaraması için tekrar eden context'in gerçekten tekrar etmesi gerekir. Sistem promptu, proje kuralları, referans dokümanları veya sabit şema parçaları sürekli değişiyorsa cache avantajı azalır.

Ayrıca cache genellikle input tarafını ucuzlatır. Output hâlâ pahalı olabilir.

Bu yüzden loop tasarımında sadece "input'u cache'leyelim" demek yeterli değildir.

Şu sorular da sorulmalıdır:

```text
Model her adımda bu kadar uzun cevap vermek zorunda mı?
Her iterasyonda tüm context tekrar gönderilmeli mi?
Tool sonucu özetlenip mi taşınmalı, ham haliyle mi taşınmalı?
Hata logunun tamamı mı gerekli, ilgili kısmı mı?
Her başarısızlıkta aynı model mi kullanılmalı?
Basit adımlar daha ucuz bir modele devredilebilir mi?
Stop condition yeterince net mi?
```

Çünkü bazı loop'larda asıl maliyet input değil output olabilir. Bazılarında tool çağrıları olabilir. Bazılarında ise gereksiz tekrar denemeleridir.

---

## Model Seçimi Bir Mimari Karardır

Loop engineering'de model seçimi sadece kalite tercihi değildir. Aynı zamanda mimari bir karardır.

Her adımda en güçlü modeli kullanmak çoğu zaman ekonomik değildir.

Daha doğru yaklaşım, döngüyü adımlara ayırmaktır:

```text
Basit sınıflandırma -> ucuz model
Doküman özetleme -> orta seviye model
Kritik planlama -> güçlü model
Kod üretimi -> güçlü veya uzman model
Test hatası açıklama -> orta seviye model
Final review -> güçlü model
```

Bu yapı hem maliyeti düşürür hem de sistemi daha kontrol edilebilir hale getirir.

Örneğin bir veri analizi loop'unda şu ayrım yapılabilir:

```text
Kullanıcı niyetini anlama
  -> düşük maliyetli model

İlgili katalog / tablo seçimi
  -> embedding + kurallı filtre + orta model

SQL üretimi
  -> güçlü model

SQL güvenlik kontrolü
  -> deterministik parser + RBAC kontrolü

Sonuç yorumlama
  -> orta veya güçlü model

Cevap özetleme
  -> düşük maliyetli model
```

Böyle bakınca loop engineering, "tek bir büyük model çağırma" problemi olmaktan çıkar.

Daha çok bir orkestrasyon problemine dönüşür.

---

## Stop Condition Maliyet Kontrolüdür

[Bir önceki yazıda]({% post_url 2026-06-22-loop-engineering %}) stop condition yani durma koşulundan bahsetmiştim. Orada bunu güvenilirlik açısından ele almıştım. Ama stop condition aynı zamanda doğrudan maliyet kontrolüdür.

Kötü tasarlanmış bir loop şöyle davranabilir:

```text
Hata aldı
  -> tekrar dene
  -> tekrar hata aldı
  -> daha uzun düşün
  -> tekrar dene
  -> başka dosya oku
  -> tekrar dene
  -> daha fazla context getir
  -> tekrar dene
```

Bu yapı tehlikelidir. Çünkü sistem başarısız oldukça daha pahalı hale gelir.

İyi tasarlanmış bir loop ise şöyle davranmalıdır:

```text
En fazla 3 düzeltme denemesi yap.
Aynı hata iki kez tekrar ederse dur.
Test hatası model tarafından açıklanamıyorsa insana yönlendir.
Token bütçesi aşılırsa raporla.
Beklenen dosya kapsamı dışına çıkılırsa dur.
Güven skoru düşükse otomatik işlem yapma.
```

Bu kurallar sadece güvenlik için değildir. Bütçe için de gereklidir.

> Sonsuz döngü teknik bir hata gibi görünür, ama pratikte fatura problemidir.

---

## İlk Yatırım ve Operasyonel Maliyet Ayrımı

Loop engineering'i ürünleştirmek isteyen ekiplerin en sık yaptığı hata, ilk maliyeti operasyonel maliyetle karıştırmaktır.

İlk çalıştırma pahalı olabilir. Bu normaldir.

Çünkü ilk çalıştırmada sistem bağlamı öğrenir, prompt yapısı oturur, doğru tool sırası bulunur, hata türleri gözlemlenir ve doğrulama mekanizmaları tasarlanır.

Ama bu maliyet kalıcı olarak aynı seviyede kalıyorsa problem vardır.

İyi bir loop mimarisinde şu eğriyi görmek isteriz:

```text
İlk çalıştırma: yüksek maliyet
İlk birkaç iyileştirme: orta maliyet
Olgun döngü: daha düşük ve öngörülebilir maliyet
```

Eğer her çalıştırma hâlâ ilk çalıştırma kadar pahalıysa, sistem öğrenmiyor demektir. Ya context yönetimi kötüdür, ya memory hijyeni yoktur, ya cache kullanılmıyordur, ya da loop her seferinde gereksiz keşif yapıyordur.

Bu yüzden loop sistemlerinde sadece başarı oranı ölçmek yetmez.

Şu metrikler de izlenmelidir:

```text
Ortalama input token
Ortalama output token
Cached token oranı
Tool çağrısı sayısı
Başarısız iterasyon sayısı
İnsan eskalasyonu oranı
İlk çalıştırma maliyeti
Sonraki çalıştırma maliyeti
Görev başına toplam maliyet
Başarılı görev başına maliyet
```

Özellikle son metrik önemlidir:

> Asıl bakılması gereken şey çağrı başına maliyet değil, başarılı görev başına maliyettir.

Ucuz model çok hata yapıyorsa pahalı hale gelebilir. Pahalı model daha az iterasyonla doğru sonuca ulaşıyorsa toplamda daha ekonomik olabilir.

---

## Kurumsal Sistemlerde Bütçe Tasarımı

Kurumsal yapay zekâ sistemlerinde loop engineering yaparken bütçe baştan tasarlanmalıdır.

Örneğin bir müşteri destek loop'u için şu limitler tanımlanabilir:

```text
Maksimum 5 LLM çağrısı
Maksimum 40.000 input token
Maksimum 6.000 output token
Maksimum 2 web search
Maksimum 3 doküman getirme
Güven skoru düşükse insan onayı
```

Bir coding loop için farklı limitler gerekir:

```text
Maksimum 3 patch denemesi
Maksimum 2 build
Maksimum 2 test çalıştırma
Maksimum 150.000 toplam input token
Maksimum 30.000 output token
Aynı hata tekrar ederse dur
Public API değişirse insana sor
```

Bir veri analizi veya SQL üretim loop'u için ise başka limitler gerekir:

```text
Maksimum 2 SQL üretim denemesi
Maksimum 1 gerçek sorgu çalıştırma
Önce dry-run veya explain
RBAC kontrolü zorunlu
SQL AST kontrolü zorunlu
Yüksek maliyetli sorgularda insan onayı
```

Bu limitler sadece teknik koruma değildir. Aynı zamanda bütçe sözleşmesidir.

Bir agent'a "bu işi çöz" demek yeterli değildir.

Şunu da söylemek gerekir:

> Bu işi şu kalite sınırları içinde, şu güvenlik kurallarıyla ve şu bütçeyi aşmadan çöz.

---

## Loop Engineering'in Gerçek Zorluğu

Bugün birçok kişi agent sistemlerine hâlâ tekil model başarısı açısından bakıyor.

"Bu model daha iyi kod yazıyor mu?"  
"Bu model daha iyi SQL üretiyor mu?"  
"Bu model daha iyi akıl yürütüyor mu?"

Bunlar önemli sorular. Ama loop engineering açısından yeterli değiller.

Asıl sorular şunlardır:

```text
Bu model kaç iterasyonda başarıya ulaşıyor?
Başarısız olduğunda ne kadar maliyet üretiyor?
Aynı context'i tekrar tekrar pahalı şekilde mi işliyor?
Output gereksiz uzun mu?
Tool çağrılarını verimli kullanıyor mu?
Hatalardan ders çıkarıyor mu?
Sonraki çalıştırma ucuzluyor mu?
Stop condition gerçekten çalışıyor mu?
```

Çünkü gerçek sistemlerde başarı sadece doğruluk değildir.

Başarı şudur:

```text
Doğru sonuç
+ kabul edilebilir maliyet
+ ölçülebilir süreç
+ güvenli sınırlar
+ tekrar edilebilir davranış
+ zamanla iyileşen ekonomi
```

Bana göre loop engineering'in en zor tarafı tam olarak buradadır.

Tek bir cevabı doğru üretmek başka bir problemdir.  
Doğru cevaba kontrollü, denetlenebilir ve ekonomik bir döngüyle ulaşmak başka bir problemdir.

---

## Sonuç

Loop engineering'in geleceği sadece daha güçlü modellerle belirlenmeyecek. Daha güçlü modeller elbette önemli olacak. Ama asıl farkı, bu modellerin nasıl döngülere yerleştirildiği belirleyecek.

İyi bir loop şu özelliklere sahip olmalı:

```text
Ne zaman başlayacağını bilmeli.
Hangi adımları izleyeceğini bilmeli.
Hangi araçları kullanacağını bilmeli.
Ne zaman duracağını bilmeli.
Hangi bilgiyi tekrar kullanacağını bilmeli.
Hangi bilgiyi unutacağını bilmeli.
Hangi durumda insana soracağını bilmeli.
Ve bütün bunları kabul edilebilir bir maliyetle yapmalı.
```

Bu nedenle loop engineering'i sadece teknik bir agent mimarisi olarak değil, aynı zamanda bir maliyet mühendisliği alanı olarak görmek gerekir.

Çünkü kurumsal dünyada bir sistemin çalışması yetmez.  
Güvenilir çalışması gerekir.  
Ölçülebilir çalışması gerekir.  
Tekrar edilebilir çalışması gerekir.  
Ve ekonomik çalışması gerekir.

Bence en doğru özet şu:

> Loop engineering'in ilk problemi zekâ değildir. Kontrol, doğrulama ve bütçedir.  
> Gerçek değer ise ilk pahalı döngüden sonra her yeni çalıştırmayı daha ucuz, daha güvenilir ve daha öngörülebilir hale getirebilmektir.

---

## Referanslar

- [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing)
- [Anthropic Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [DeepSeek API Pricing Details](https://api-docs.deepseek.com/quick_start/pricing-details-usd/)
- [Kimi API Pricing](https://www.kimi.com/help/kimi-api/api-pricing)
- [Kimi API Platform - Model Inference Pricing Explanation](https://platform.kimi.ai/docs/pricing/chat)
- [Kimi K2.6 API Pricing Guide](https://developer.puter.com/tutorials/kimi-api-pricing/)
- [Loop Engineering: Kendi Kendini İyileştiren Yapay Zekâ Döngüleri](https://aliozgur.net/2026/06/22/loop-engineering/)

***
{% include share_twitter_tr.html %}