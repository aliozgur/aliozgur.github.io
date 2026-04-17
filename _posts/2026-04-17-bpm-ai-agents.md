---
layout: post
title: "Agentic AI, Süreç Gerçekliği ve Yaklaşan \"Agentic Chaos\" Riski"
subtitle: "BPM Dersleri ve Yapısal Süreç Problemleri"
date:  2026-04-17
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - software
  - development
  - programming
  - engineering
  - ai
  - bpm
  - agents

---
Kurumsal sistemlerde yıllardır tekrar eden bir döngü var: Önce problemi araçla çözmeye çalışıyoruz, sonra aracın neden çalışmadığını tartışıyoruz. BPM araçları, iş akışı (workflow) motorları, entegrasyon platformları derken şimdi aynı refleksi agentic AI ile görüyoruz.

Soru aslında hiç değişmedi: İşletme süreçlerimizi gerçekten biliyor muyuz, yoksa sadece çalışıyor gibi görünen bir operasyonu mu otomatikleştirmeye çalışıyoruz?

Agentic AI bu soruyu ortadan kaldırmaz. Aksine, cevabın eksik olduğu durumlarda problemi büyütür.

Bu yazının temel tezi şudur:

Agentic AI, süreç problemini çözmez. Süreçlerin tanımlı olmadığı ortamlarda kaosu hızlandırır ve büyütür.


![Cover]({{ root.url }}/media/bpm-ai-agents.png)

<!--end-of-excerpt-->


## İşletmelerde Süreç Problemi: Yapısal ve Süreklilik Arz Eden Bir Sorun

İş süreçlerinin modellenmesi yeni bir problem değildir. BPM (Business Process Management), BPR (Business Process Re-engineering), Six Sigma, Lean gibi yaklaşımlar onlarca yıldır kullanılmaktadır.[^1]

Ancak bu metodolojilerin varlığı, problemin çözüldüğü anlamına gelmemektedir. Gerçek hayatta karşılaşılan durum genellikle şu şekildedir:

* Süreçler dokümante edilmemiştir
* Dokümante edilen süreçler güncel değildir
* Gerçek operasyon, dokümante edilen süreçten farklıdır
* Süreçler kişiler üzerinden yürür, sistemler üzerinden değil
* İstisnalar ve manuel müdahaleler, gerçek sürecin ana akışını oluşturur

Bu durumun altında yatan temel sebepler:

### Süreçlerin Dinamik Doğası

İş süreçleri statik değildir. Sürekli değişir:

* Yeni müşteri talepleri
* Operasyonel kısıtlar
* İnsan faktörü
* Sistem entegrasyon problemleri

Bu değişim hızı, klasik süreç modelleme yaklaşımlarının yakalayabileceğinden daha yüksektir.

### Organizasyonel Karmaşıklık

Süreçler sadece teknik değil, aynı zamanda organizasyonel yapılardır:

* Farklı departmanlar
* Çakışan hedefler
* Politik kararlar

Bu nedenle süreç optimizasyonu çoğu zaman teknik bir problem değil, sosyo-teknik bir problemdir.

### Süreç Bakım Maliyeti

Bir süreci tanımlamak bir defalık bir iş değildir. Sürekli güncellenmesi gerekir.

Ancak çoğu organizasyonda:

* Süreç sahipliği net değildir
* Güncelleme disiplini yoktur
* Süreç dokümantasyonu zamanla terk edilir

## BPM Girişimlerinin Neden Başarısız Olduğunu Anlamak

Agentic AI tartışmasını doğru konumlandırmak için BPM'in neden başarısız olduğunu anlamak gerekir.

Araştırmalar, BPM ve BPR projelerinde yüksek başarısızlık oranlarına işaret etmektedir:

* İş süreçlerini yeniden tasarlama (BPR) projelerinin yaklaşık %50 ila %70'i başarısız olur veya beklenen faydayı sağlayamaz[^2]

* BPM girişimlerinin %60 ila %80'i ya başarısız olur ya da ciddi kapsam daraltmaları ile tamamlanır[^3]

Bu oranlar, problemin araçlardan bağımsız olarak yapısal olduğunu göstermektedir.

Bu başarısızlıkların temel sebepleri:

### Aşırı Modelleme Yaklaşımı

Organizasyonlar süreçleri fazla detaylı modellemeye çalışır. Bu durum:

* Modelleme maliyetini artırır
* Uygulamayı geciktirir
* Gerçek hayattan kopuk modeller üretir

### Gerçek Süreç ile Tanımlı Süreç Arasındaki Ayrışma

Dokümante edilen süreç ile sahada yürüyen süreç zamanla farklılaşır.

Sonuç:

* Süreç dokümanları güvenilirliğini kaybeder
* Kimse bu dokümanlara bakmaz

### Araç Odaklı Yaklaşım

Birçok BPM girişimi, problemi yanlış tanımlar:

Problem: süreç yok
Çözüm: BPM aracı satın almak

Bu yaklaşım genellikle başarısız olur çünkü problem araç değil, organizasyonel olgunluktur.

## Agentic AI Ne Varsayıyor?

Agentic sistemler örtük olarak aşağıdaki varsayımlarla çalışır:

* Hedefler açık ve ölçülebilirdir
* İşler ayrıştırılabilir ve sıralanabilir
* Süreçler tutarlıdır
* Gerekli veri ve bağlam erişilebilir durumdadır
* Sistemler arası entegrasyon yeterlidir

Bu varsayımlar, teorik olarak doğrudur. Ancak pratikte çoğu organizasyon için geçerli değildir.

Gerçek dünyada:

* Hedefler sürekli değişir
* Süreçler implicit ve kişiye bağlıdır
* Sistemler silo halindedir
* Veri parçalı ve eksiktir

Bu durumda agentic sistem ne yapar?

Süreci kendisi oluşturmak zorunda kalır.

Bu ise sistemin deterministik olmaktan çıkmasına neden olur.

## Agentic Sistemlerde Ortaya Çıkan Failure Pattern'lar

Agentic AI sistemleri, klasik yazılım sistemlerinden farklı failure pattern'lara sahiptir.

### İzlenebilirlik ve Açıklanabilirlik Problemi

Ajanların aldığı kararlar çoğu zaman açık değildir.[^4]

Bu durum özellikle kurumsal ortamlarda şu riskleri doğurur:

* Denetlenemeyen kararlar
* Regülasyon uyumsuzluğu
* Güven kaybı

### Bağlam Yönetimi Problemi

Ajanlar, farklı sistemlerden veri alır ancak bu veriler çoğu zaman eksik veya uyumsuzdur.

Sonuç:

* Yanlış kararlar
* Eksik işlem akışları
* Süreç kopuklukları

### Sessiz Bozulma (Drift)

Agentic sistemler genellikle aniden çökmez. Performansları zaman içinde yavaşça düşer.[^5]

Bu durumun tehlikesi:

* Sorunların geç fark edilmesi
* Kalite kaybının normalleşmesi

### Zincirleme ve Dağıtık Hatalar

Çok ajanlı sistemlerde hatalar sistem içinde yayılabilir.[^6]

Bu durum klasik sistemlerde nadirdir ancak agentic sistemlerde doğal bir sonuçtur.

## Agentic AI Projelerinde Erken Başarısızlık Sinyalleri

Agentic AI projelerinde şu an gözlemlenen durum, geçmiş BPM projeleri ile benzerlik göstermektedir:

* Agentic AI kullanım senaryolarının yalnızca yaklaşık %10 ila %15'i üretim ortamına alınabilmektedir[^7]

* Organizasyonların yaklaşık %70'inden fazlası beklenti ile gerçek sonuçlar arasında ciddi fark olduğunu belirtmektedir[^7]

* Agentic AI projelerinin %40'tan fazlasının önümüzdeki yıllarda iptal edilmesi beklenmektedir[^8]

Ortak problemler:

* Üretime alınan kullanım senaryolarının düşük olması
* Beklenen ROI'nin elde edilememesi
* Güven ve kontrol problemleri

Bu, hype döngüsünün erken fazında olduğumuzu göstermektedir.

## Agentic Chaos: Yeni Bir Kurumsal Risk Sınıfı

Bu noktada "Agentic Chaos" kavramını tanımlamak mümkündür.

Agentic Chaos, tanımlı süreçler ve güçlü yönetişim olmadan çalışan agentic sistemlerin ortaya çıkardığı öngörülemez davranış bütünüdür.

Belirtiler:

* Aynı girdiye farklı çıktılar
* Ajanlar arasında çelişen aksiyonlar
* Süreçlerin tekrar edilemez hale gelmesi
* Operasyonel sahipliğin kaybolması

Akademik çalışmalar da bu yönde sinyaller vermektedir.[^9][^10]

## Temel İçgörü: Agentic AI, Süreç Yokluğunu Daha Tehlikeli Hale Getirir

Buradaki en kritik çıkarım şudur:

Agentic AI, süreç ihtiyacını ortadan kaldırmaz.

Aksine, süreç yokluğunu daha görünmez ve daha tehlikeli hale getirir.

Çünkü:

* Sistem çalışıyor gibi görünür
* Ancak nasıl çalıştığı bilinmez
* Problemler gecikmeli ortaya çıkar

Bu, klasik yazılım hatalarından daha risklidir.

## Doğru Yaklaşım: Süreç Farkındalıklı Agentic Sistemler

Çözüm, agentic AI'dan vazgeçmek değildir.

Çözüm, agentic sistemleri süreç farkındalıklı hale getirmektir.

Bu yaklaşım şu prensipleri içerir:

### Süreç Sınırları

Ajanlar tamamen serbest olmamalıdır. Tanımlı süreç sınırları içinde çalışmalıdır.

### Observability ve Telemetri

Her aksiyon izlenebilir olmalıdır:

* Hangi ajan ne yaptı
* Hangi veriye dayanarak karar verdi
* Hangi araçları kullandı

### Deterministik Çekirdek + Otonom Katman

Kritik süreçler deterministik kalmalıdır.

Agentic katman, bu çekirdeğin üstünde çalışmalıdır.

### İnsan Denetimi

Tam otonomi yerine kontrollü otonomi tercih edilmelidir.

## Human-in-the-Loop, Expert-in-the-Loop ve HARP Yaklaşımı

Agentic sistemlerin güvenli ve sürdürülebilir şekilde çalışabilmesi için insan faktörünün tamamen sistem dışına çıkarılması gerçekçi değildir. Bu noktada Human-in-the-Loop (HITL) ve Expert-in-the-Loop (EITL) yaklaşımları kritik hale gelir.

HITL yaklaşımında belirli karar noktalarında insan onayı devreye girer. EITL ise bu yaklaşımı bir adım ileri taşıyarak, kritik alanlarda domain uzmanlarının sürece dahil edilmesini sağlar. Özellikle üretim, finans ve teknik karar gerektiren alanlarda bu yaklaşım kaçınılmazdır.

Bu yaklaşımlar, agentic sistemlerin tamamen otonom değil, kontrollü otonomi ile çalışmasını sağlar.

Bu noktada [HARP (Human Authorization and Review Protocol)](https://harp-protocol.github.io/) gibi yaklaşımlar ve [Airlock Approver](https://airlockapp.io/) gibi araçlar anlam kazanır.

HARP'ın amacı, agentic sistemlerin kritik aksiyonlarını kontrolsüz şekilde değil, tanımlı yetkilendirme ve gözden geçirme mekanizmaları üzerinden yürütmesini sağlamaktır.

Temel prensipleri şunlardır:

* Ajanların aksiyonlarının yetki sınırları ile belirlenmesi
* Kritik işlemler için insan onay mekanizmalarının devreye alınması
* Risk seviyesine göre farklı kontrol seviyeleri uygulanması
* Tüm aksiyonların izlenebilir ve denetlenebilir olması

Bu tür yaklaşımlar, agentic chaos riskini tamamen ortadan kaldırmaz ancak önemli ölçüde sınırlar.

Özellikle süreçlerin tam olarak tanımlı olmadığı ortamlarda, bu tür kontrol katmanları olmadan agentic sistemlerin sağlıklı çalışması oldukça zordur.

## Sonuç

Agentic AI önemli bir teknolojik gelişmedir. Ancak bu gelişme, işletmelerin temel problemlerini otomatik olarak çözmez.

Süreçlerin tanımlı olmadığı bir ortamda agentic sistemler çözüm değil, çarpan etkisi yaratır.

Doğru soru "Agentic AI kullanmalı mıyız?" değil "Süreçlerimizi gerçekten anlıyor ve yönetebiliyor muyuz?" olmalıdır.

Eğer cevap hayır ise, agentic AI yatırımları büyük ihtimalle karmaşıklığı artıracaktır.

Ve bu durum, yakın gelecekte "agentic chaos" olarak adlandırılacak yeni bir kurumsal problem alanını ortaya çıkaracaktır.


***
{% include share_twitter_tr.html %}

***

## Kaynaklar

[^1]: [Business Process Modeling - Wikipedia](https://en.wikipedia.org/wiki/Business_process_modeling)
[^2]: [Business Process Re-engineering - Wikipedia](https://en.wikipedia.org/wiki/Business_process_re-engineering)
[^3]: [Three Reasons Why BPM Implementations Fail](https://shiftx.com/blog/three-reasons-why-bpm-implementations-fail)
[^4]: [12 Failure Patterns of Agentic AI Systems](https://www.concentrix.com/insights/blog/12-failure-patterns-of-agentic-ai-systems/)
[^5]: [Agentic AI Systems Don't Fail Suddenly, They Drift Over Time](https://www.cio.com/article/4134051/agentic-ai-systems-dont-fail-suddenly-they-drift-over-time.html)
[^6]: [Chaos Engineering AI Agent Systems](https://zylos.ai/research/2026-04-09-chaos-engineering-ai-agent-systems)
[^7]: [Companies Confess Their Agentic AI Goals Aren't Really Working Out](https://www.techradar.com/pro/companies-confess-their-agentic-ai-goals-arent-really-working-out-and-a-lack-of-trust-could-be-why)
[^8]: [Why Agentic AI Projects Fail and How to Set Yours Up for Success](https://hbr.org/2025/10/why-agentic-ai-projects-fail-and-how-to-set-yours-up-for-success)
[^9]: [Agents of Chaos](https://arxiv.org/pdf/2602.20021)
[^10]: [From Failure Modes to Reliability Awareness in Generative and Agentic AI Systems](https://arxiv.org/abs/2511.05511)
