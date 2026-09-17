---

layout: post
title: "Yapay Zekâ Korkusu Kimin İşine Yarıyor?"
subtitle: "Frontier AI, güvenlik, sermaye ve yeni teknoloji aristokrasisi üzerine"
date: 2026-09-15
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- safety
- security
- regulation
- anthropic

---

Dario Amodei, Eylül 2026'da yayımladığı *We Must Pace the Frontier* başlıklı yazısında yapay zekâ alanındaki yetenek artışının artık güvenlik çalışmalarının yetişemeyeceği kadar hızlı ilerlediğini ve frontier modellerin geliştirilme hızının bilinçli biçimde düşürülmesi gerektiğini savunuyor. Amodei'nin kaygılarından biri yapay zekânın giderek daha fazla yapay zekâ geliştirmeye başlaması, diğeri ise OpenAI'ın siber güvenlik testleri sırasında yaşanan ve yüzlerce AI ajanının beklenmeyen biçimde iş birliği yaparak [Hugging Face sistemlerine yönelik saldırılara]({% post_url 2026-09-12-ai-huggingface-case %}) katıldığı olay. Ona göre artık yalnızca daha güçlü modeller geliştirmiyoruz; kontrol edilmesi giderek zorlaşabilecek yeni bir teknoloji sınıfının eşiğindeyiz.

{::comment}end-of-excerpt{:/comment}

Bu kaygıları tamamen anlamsız bulmuyorum. Daha önce [AI Safety: Yapay Zekâ Daha Fazla Yetki Kazanırken Güvenliği Nasıl Düşünmeliyiz?]({% post_url 2026-08-13-ai-safety-security %}) başlıklı yazıda da anlatmaya çalıştığım gibi, bir yapay zekânın yanlış cevap vermesi ile gerçek sistemler üzerinde işlem yapabilmesi arasında ciddi bir fark bulunuyor. Bir LLM metin üretirken yaptığı hata ile internete erişebilen, kod çalıştırabilen, veri tabanı sorgulayabilen, başka sistemleri çağırabilen ve uzun süre bağımsız biçimde çalışabilen bir ajan sisteminin hatası aynı risk sınıfında değerlendirilemez. Modelin yeteneği kadar ona verdiğimiz *agency*, yani hareket etme yetkisi ve bunun oluşturduğu *blast radius* da önemlidir.

Buna rağmen son dönemde frontier AI şirketlerinin yöneticilerinden gelen söylemleri dinlerken başka bir soruyu sormadan edemiyorum: Yapay zekânın ne kadar tehlikeli olduğu kadar, yapay zekânın çok tehlikeli olduğuna inanmamız kimin işine yarıyor?

Bu soruyu sormak, AI Safety problemlerini reddetmek anlamına gelmiyor. Tam tersine, bana göre sağlıklı bir güvenlik tartışmasının ön koşulu, riskleri tanımlayan aktörlerin ekonomik ve politik teşviklerini de tartışabilmek. Çünkü bugün yapay zekânın insanlık açısından ne kadar büyük bir fırsat ve ne kadar büyük bir tehdit olduğunu bize anlatan insanların önemli bir bölümü aynı zamanda bu teknolojiyi geliştiren şirketlerin yöneticileri, kurucuları ve yatırımcıları.

Ortada oldukça ilginç bir güç ilişkisi var.

## Hem ateşi üreten hem yangını anlatanlar

Bir teknoloji şirketinin CEO'sunun çıkıp "ürünümüz son derece başarılı" demesi alışılmadık bir şey değildir. Ancak frontier AI şirketlerinin yöneticileri çok daha sıra dışı bir pozisyonda bulunuyorlar. Bir taraftan geliştirdikleri teknolojinin insanlık tarihindeki en büyük ekonomik ve bilimsel dönüşümlerden birini yaratacağını söylüyorlar, diğer taraftan aynı teknolojinin kontrol edilemez hale gelerek insanlık için varoluşsal risk oluşturabileceğini anlatıyorlar.

İlk anlatı şirketlerin değerlemelerini destekliyor. İkinci anlatı ise bu şirketlerin politik önemini artırıyor.

İki anlatının ortak noktası aslında aynı: Bu teknoloji olağanüstü derecede önemli ve dolayısıyla bu teknolojiyi geliştiren kurumlar da olağanüstü derecede önemli.

Burada kötü niyetli bir komplodan söz etmiyorum. Dario Amodei'nin gerçekten endişeli olmadığına veya Sam Altman'ın dile getirdiği risklere inanmadığına ilişkin elimizde bir kanıt yok. Büyük ihtimalle söylediklerinin önemli bölümüne gerçekten inanıyorlar. Fakat bir aktörün bir şeye samimiyetle inanması ile o inancın kendisine ekonomik veya politik avantaj sağlaması birbirini dışlayan durumlar değil.

Bir merkez bankası başkanı ekonomiye ilişkin değerlendirmede bulunduğunda söylediği sözlerin piyasayı etkileyebileceğini bilir. Bir savunma şirketi yeni tehditlerden söz ettiğinde bu tehdidin kendi ürünlerine olan talebi artırabileceğini bilir. Frontier AI şirketlerinin yöneticileri de artık benzer bir konumda. Yapay zekânın tehlikeleri hakkında konuştuklarında yalnızca teknolojik bir değerlendirme yapmıyorlar; aynı zamanda dünyanın bu teknolojiyi nasıl yöneteceği konusunda kendilerine bir rol biçiyorlar.

Böylece teknoloji şirketi yöneticisi yavaş yavaş başka bir şeye dönüşüyor: Devletlerin, düzenleyici kurumların ve toplumun danışmak zorunda olduğu bir tür teknolojik otoriteye.

Bir anlamda ateşi üretenlerle, yangının ne kadar tehlikeli olduğunu bize anlatanlar aynı kişiler.

## Regülasyon güvenlik mi getirir, yoksa hendek mi kazıyor?

Amodei'nin önerilerinden biri frontier AI şirketlerinin bağımsız değerlendiriciler tarafından çok daha yakından denetlenmesi. Ayrıca belirli yetenek seviyelerine gelindiğinde model geliştirme hızının azaltılabileceği veya yeni güvenlik koşullarının devreye sokulabileceği bir sistem öneriyor. OpenAI da [Hugging Face olayından]({% post_url 2026-09-12-ai-huggingface-case %}) sonra bazı frontier çalışmalarını yavaşlattığını ve daha güçlü güvenlik, izleme ve izolasyon önlemleri üzerinde çalıştığını açıkladı.

Bunların önemli bir bölümü mühendislik açısından son derece mantıklı. Havacılık, ilaç, enerji veya finans gibi yüksek etkili sektörlerde nasıl test, denetim ve bağımsız doğrulama mekanizmaları kullanıyorsak, gerçek dünyada giderek daha fazla işlem yapabilen AI sistemlerinde de benzer kontrol mekanizmalarına ihtiyaç duymamız kaçınılmaz görünüyor.

Ancak regülasyonun başka bir sonucu daha var: pazara giriş maliyetini yükseltmek.

Bir model geliştirebilmek için artık yalnızca araştırmacılara, GPU'lara ve veri merkezine değil; bağımsız denetimlere, güvenlik ekiplerine, alignment araştırmalarına, adversarial testing altyapısına, kapsamlı raporlamaya ve devlet tarafından zorunlu tutulabilecek sertifikasyon süreçlerine de ihtiyacınız varsa, frontier AI geliştirebilecek şirket sayısı doğal olarak azalır.

OpenAI, Anthropic, Google veya Meta için yüz milyonlarca dolarlık ek uyum maliyetleri can sıkıcı olabilir. Yeni bir girişim için ise aynı maliyetler oyuna hiç girememek anlamına gelebilir.

Ekonomide buna *regulatory moat*, yani regülasyonla oluşan rekabet hendeği deniyor. Düzenleme kamu yararı amacıyla hazırlanmış olabilir; fakat sonuçta mevcut büyük oyuncuların etrafına yeni rakiplerin geçmesini zorlaştıran derin bir hendek de kazabilir.

Bu nedenle "frontier AI mutlaka regüle edilmeli" önerisini duyduğumuzda yalnızca "Bu düzenleme güvenliği artırır mı?" sorusunu değil, "Bu düzenlemenin ardından kimler hâlâ frontier model geliştirebilecek?" sorusunu da sormamız gerekiyor.

## Bir başka sorun: Bu yarışın ekonomisi gerçekten sürdürülebilir mi?

Tartışmanın daha az konuşulan tarafı ise frontier AI ekonomisi.

Bugünkü model geliştirme yarışı olağan yazılım ekonomisine pek benzemiyor. Geleneksel bir yazılım ürünü geliştirildiğinde yapılan yatırım yıllar boyunca amorti edilebilir. Bir veri tabanı motorunun, ERP ürününün veya işletim sisteminin belirli bir sürümü uzun süre gelir üretmeye devam edebilir.

Frontier AI'da ise teknolojik amortisman süresi olağanüstü kısa.

Bir şirket çok büyük bir hesaplama altyapısı ve araştırma bütçesi kullanarak yeni bir model geliştiriyor. Model pazara çıkıyor, API üzerinden satılmaya başlanıyor ve birkaç ay sonra rakip şirket daha güçlü veya daha ucuz bir model yayımlıyor. Bir süre sonra açık modeller aynı yeteneklerin önemli bölümünü çok daha düşük maliyetle sunmaya başlıyor. Bu noktada şirket, daha önce yaptığı devasa yatırımı henüz yeterince paraya dönüştüremeden bir sonraki modele yatırım yapmak zorunda kalıyor.

Ortaya oldukça acımasız bir döngü çıkıyor: daha büyük model, daha fazla compute, daha yüksek sermaye ihtiyacı, daha güçlü rakip, daha kısa ekonomik ömür ve ardından yeniden daha büyük model.

Daha önce [AI Destekli Yazılım Geliştirmenin Ekonomisi]({% post_url 2026-09-02-ai-cost-use-case %}) yazısında üzerinde durduğum noktalardan biri maliyet ile sağlanan ekonomik değer arasındaki farktı. Bir teknolojinin etkileyici olması, ekonomik modelinin otomatik olarak sağlıklı olduğu anlamına gelmiyor.

Frontier AI için de benzer bir problem var. Teknolojik ilerleme tartışılmaz biçimde çok hızlı, fakat bu hızın finansal sürdürülebilirliği aynı derecede açık değil.

Tam bu noktada "frontier'ı biraz yavaşlatalım" fikrinin ilginç bir yan etkisi ortaya çıkıyor.

Eğer büyük şirketlerin tamamı güvenlik gerekçeleriyle model geliştirme döngülerini uzatırsa, mevcut modellerin ekonomik ömrü uzar. Şirketler ellerindeki altyapıyı daha uzun süre kullanabilir, inference maliyetlerini optimize edebilir, kurumsal entegrasyonlara odaklanabilir ve yaptıkları devasa yatırımları daha uzun dönemde amorti edebilirler.

Başka bir ifadeyle güvenlik nedeniyle yavaşlamak, aynı zamanda ekonomiyi rahatlatabilir.

Bu, "Dario Amodei para kazanmak için AI Safety anlatıyor" anlamına gelmez. Böyle bir iddiayı destekleyen bir kanıt yok. Fakat ortaya çıkan teşvik yapısını görmezden gelmek de doğru olmaz. Güvenlik açısından faydalı görünen bir yavaşlama, aynı zamanda büyük AI şirketlerinin sermaye yakma hızını azaltıyor ve aralarındaki pahalı silahlanma yarışını sakinleştiriyorsa, iki farklı çıkar aynı noktada buluşuyor demektir.

Üstelik klasik bir mahkûmlar ikilemi söz konusu. Anthropic tek başına yavaşlarsa OpenAI öne geçebilir. OpenAI yavaşlarsa Google ilerleyebilir. Google yavaşlarsa başka bir oyuncu avantaj elde edebilir. Fakat devlet "hepiniz belirli koşullarda yavaşlayacaksınız" derse hiçbir şirket rekabet nedeniyle cezalandırılmaz.

Regülasyon böylece yalnızca güvenlik mekanizması değil, rekabetin hızını kontrol eden ekonomik mekanizma haline gelir.

## Çin söz konusu olduğunda serbest piyasa neden birden unutuluyor?

Tartışmanın üçüncü ve bana göre en ilginç bölümü Çin.

Amodei bir taraftan frontier AI yarışının tehlikeli olduğunu ve yetenek artışının gerektiğinde yavaşlatılması gerektiğini savunuyor, diğer taraftan Çin'in gelişmiş GPU'lara, yarı iletken üretim teknolojilerine ve Batılı frontier modellerin yeteneklerine erişiminin mümkün olduğunca sınırlandırılmasını istiyor. Ayrıca model ağırlıklarının çalınmasına, yetkisiz distillation'a ve uzaktan compute erişimine karşı daha güçlü önlemler öneriyor.

Burada ortaya çıkan politika basitçe "AI'yı yavaşlatalım" değil.

Daha doğru ifade şu olabilir: Batı teknolojik üstünlüğünü korurken AI gelişimini kontrollü biçimde yavaşlatalım.

Bu artık yalnızca AI Safety değildir; doğrudan jeopolitik stratejidir.

Teknoloji dünyasının serbest piyasa ile ilişkisi de burada ilginçleşiyor. Batılı teknoloji şirketleri kendi ülkelerinde regülasyon tartışıldığında genellikle inovasyonun korunmasından, devlet müdahalesinin azaltılmasından ve rekabetten söz ediyorlar. Fakat Çin konuşulmaya başlandığında aynı çevrelerde ihracat kontrolleri, GPU kısıtlamaları, yarı iletken üretim ekipmanı yasakları, compute erişiminin sınırlandırılması ve teknoloji transferinin engellenmesi gayet kabul edilebilir politikalar haline gelebiliyor.

Demek ki serbest piyasanın da jeopolitik sınırları var.

Buradaki temel problem Çin'in iyi veya kötü niyetli olması değil. Asıl problem, küresel AI regülasyonunun uygulanabilirliği. Nükleer silahların kontrolü bile birbirine güvenmeyen devletler arasında belirli ölçülerde mümkün olabildi; çünkü nükleer programlar fiziksel olarak son derece görünür altyapılar gerektiriyor. Zenginleştirme tesisleri, füzeler veya nükleer denemeler bütünüyle görünmez değil.

AI çok farklı.

Bir model nihayetinde yazılım, ağırlıklar, algoritmalar, veri ve compute birleşiminden oluşuyor. Veri merkezlerini veya gelişmiş GPU sevkiyatlarını izlemek mümkün olabilir, fakat algoritmik bilginin sınırların içerisinde kalmasını sağlamak çok daha zor.

Bu nedenle küresel bir "AI'yı hep birlikte yavaşlatalım" anlaşmasının uygulanabilirliği en az teorik faydası kadar tartışılmalı.

## Komplo değil, çıkarların aynı noktada buluşması

Bütün bunlardan "frontier AI şirketleri dünyayı kandırıyor" sonucu çıkarmak bana fazla basit geliyor.

Daha ilginç senaryo şu: herkes kendi açısından rasyonel davranıyor ve farklı çıkarlar aynı politikayı destekliyor.

Araştırmacı gerçekten güvenlik konusunda endişeli olabilir. CEO kontrolsüz bir yarışın tehlikeli olduğuna inanabilir. Finans yöneticisi daha uzun ürün döngülerinin şirket ekonomisini düzelteceğini görebilir. Yatırımcı, yüksek regülasyon maliyetlerinin mevcut şirketin rekabet hendeğini büyüteceğini düşünebilir. Devlet, ulusal teknolojik üstünlüğün korunmasını isteyebilir.

Hepsi aynı anda doğru olabilir.

Sonuçta ortaya "frontier AI'yı kontrollü biçimde yavaşlatalım" politikası çıkar.

Bu nedenle tartışmayı "AI gerçekten tehlikeli mi, yoksa bizi korkutuyorlar mı?" ikiliğine indirgememek gerektiğini düşünüyorum. Gerçek dünya genellikle bu kadar temiz çalışmıyor. Teknoloji gerçekten riskli olabilir ve bu risk anlatısı aynı zamanda bazı aktörlerin ekonomik çıkarlarına hizmet edebilir. Güvenlik regülasyonu gerçekten gerekli olabilir ve aynı regülasyon mevcut şirketlerin rekabet pozisyonunu güçlendirebilir.

Bence kritik soru tam olarak burada başlıyor.

## Yapay zekânın en rahatsız edici geleceği belki de sıradanlaşmasıdır

Bugün frontier AI çevresinde iki büyük gelecek anlatısı dolaşıyor.

Birincisine göre yapay zekâ bilimsel keşifleri hızlandıracak, üretkenliği dramatik biçimde artıracak ve insanlığın ekonomik yapısını değiştirecek. İkincisine göre aynı teknoloji kontrolden çıkabilir, siber saldırılar gerçekleştirebilir, insanların denetleyemediği sistemler oluşturabilir ve hatta varoluşsal risk yaratabilir.

İlginç biçimde iki anlatının ulaştığı sonuç aynı: AI insanlık tarihinin en önemli teknolojisidir.

Belki üçüncü bir ihtimali de daha fazla konuşmalıyız.

Yapay zekâ son derece güçlü, çok faydalı ve yaygın kullanılan bir teknoloji haline gelirken aynı zamanda giderek ucuzlayabilir, modeller birbirine yaklaşabilir, açık modeller farkı azaltabilir ve bugün olağanüstü görünen yetenekler sıradan altyapı bileşenlerine dönüşebilir.

Veri tabanları gibi.

Bulut bilişim gibi.

İnternet gibi.

Böyle bir dünyada yapay zekâ ortadan kaybolmaz; tam tersine her yerde olur. Fakat frontier AI şirketlerinin yöneticileri artık insanlığın geleceğinin bekçileri olarak değil, çok büyük teknoloji altyapı şirketlerinin yöneticileri olarak görülmeye başlanabilir.

Belki de bugünkü dev AI şirketleri açısından ekonomik ve politik olarak en rahatsız edici gelecek senaryolarından biri budur.

Ne yapay zekâ kıyameti.

Ne de yapay zekâ ütopyası.

Sadece çok güçlü, çok kullanışlı, giderek ucuzlayan ve sonunda sıradanlaşan bir teknoloji.

Bu ihtimali akılda tutarak frontier AI yöneticilerini dinlemek, söylediklerini değersizleştirmez. Fakat bize sağlıklı bir mesafe kazandırır.

Çünkü AI Safety konusunda gerçekten ciddi olmamız gerekiyorsa güvenlik politikalarını yalnızca bu teknolojiyi geliştiren şirketlerin dünya görüşüne bırakmamamız gerekir. Bağımsız araştırmacılara, bağımsız denetçilere, mühendislik kanıtlarına ve toplum adına karar verebilecek bağımsız kurumlara ihtiyacımız var.

Aksi halde oldukça tuhaf bir dünyaya varabiliriz: İnsanlığa ateşin ne kadar tehlikeli olduğunu anlatan kişiler, aynı zamanda ateşi üreten, satan ve ateşi kimin kullanabileceğine karar verilmesini isteyen kişiler olur.

---

{% include share_twitter_tr.html %}

---
