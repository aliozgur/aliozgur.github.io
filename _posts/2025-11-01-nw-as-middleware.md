---
layout: post
title: "Akıllı Üretimin Görünmeyen Kahramanı"
subtitle: "Middleware - Veri Akışını Yöneten Orta Katman" 
date:  2025-11-01
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - MES
  - MOM
  - trex
  - IoT
  - Edge Computing
  - Manufacturing
  - Industry 4.0
  - Digital Transformation
  - Middleware
---

Endüstri 4.0 döneminde dijital dönüşümün gerçek değeri, sadece veriyi toplamakta değil, **veriyi anlamlı hale getirmekte** yatıyor.  

Üretim hatlarında, tesis altyapısında ve kurumsal uygulamalarda oluşan bu veriyi bütünleştirmek; hem teknik hem de operasyonel açıdan ciddi bir mühendislik gerektiriyor.  

İşte tam bu noktada, **trex Digital Manufacturing** tarafından geliştirilen **NightWatch**, sahadan kurumsal sistemlere veri akışını yöneten, **açık**, **standart uyumlu** ve **lisans ücreti gerektirmeyen** bir middleware platformu olarak öne çıkıyor.  

NightWatch, trex MOP (Manufacturing Operations Platform) bileşenleriyle hazır entegrasyona sahip olup, MES, MOM, enerji, bakım ve kalite yönetimi sistemleri arasında veri akışını kolaylaştıran güçlü bir altyapı sunar.  

![Cover]({{ root.url }}/media/nw-as-middleware.png)


<!--end-of-excerpt-->

## Modern Üretimde Middleware Neden Hâlâ Gereklidir?  

Bugün fabrikalar, Endüstri 4.0’a uyumlu makinelerle donatılmış olsa da veri yönetimi hâlâ karmaşıktır:  

- Her makine, sensör veya kontrol ünitesi farklı veri modeline ve protokole sahiptir.  
- Verinin frekansı, biçimi ve bağlamı sistemden sisteme değişir.  
- Bazı sistemler sadece sahaya, bazıları sadece buluta veri gönderir.  
- Bu da işletme genelinde **veri bütünlüğü ve izlenebilirlik** sorunları doğurur.  

NightWatch, bu karmaşayı sadeleştirir.  
Farklı protokollerden gelen veriyi toplar, anlamlandırır, standardize eder ve  
**MES, ERP, bakım, enerji ve analitik sistemlerine** açık, düzenli ve güvenilir biçimde iletir.



## NightWatch: trex Digital Manufacturing Ekosisteminin Açık Veri Omurgası  

NightWatch, trex Digital Manufacturing tarafından geliştirilen bir platformdur ve  
**trex MOP (Manufacturing Operations Platform)** bileşenleriyle tam uyumlu çalışır.  

Bu sayede:  
- trex MES, trex Veri & Görselleştirme ve trex Servis Platformlarıyla **hazır entegrasyonlar** sunar.  
- Üretim verileri doğrudan NightWatch üzerinden trex ekosistemindeki diğer sistemlere aktarılabilir.  
- trex çözümlerinin yanı sıra, üçüncü parti yazılımlarla da kolaylıkla entegre olabilir.  

Bu yapı, NightWatch’u sadece bir “middleware” değil, **trex dijital üretim ekosisteminin merkezi sinir sistemi** haline getirir.



## NightWatch’un “Açık Platform” Yaklaşımı  

NightWatch’un “açık platform” olarak tanımlanmasının nedeni,  
SDK veya modül geliştirme olanağından değil, **veri akışının ve konfigürasyonun şeffaflığından** kaynaklanır.  

**Açık Konfigürasyon**  

NightWatch’un tüm yapılandırması (kaynak, hedef, dönüştürme, hiyerarşi, iş akışı) kullanıcı tarafından açıkça görülebilir, düzenlenebilir ve denetlenebilir.  
Bu yaklaşım, sahada neyin nasıl toplandığını ve hangi sistemlere aktarıldığını tamamen görünür kılar.

**Açık ve Yeniden Kullanılabilir Veri**

Toplanan veriler yalnızca sistem içinde kalmaz, **JSON, MQTT, REST veya SQL gibi açık formatlarda dış sistemlerle paylaşılır.** Bu sayede, MES dışında ERP, enerji izleme, yapay zekâ veya analitik uygulamalar da aynı veriyi kullanabilir.  

**Lisans Ücreti Gerektirmeyen Yapı**

NightWatch, **lisans ücreti gerektirmeyen** bir platformdur. Kullanıcılar, protokol veya modül sayısı fark etmeksizin sistemi özgürce kullanabilir. Bu özellik, NightWatch’un “açıklık” felsefesini yalnızca teknik değil, **ekonomik anlamda da** güçlendirir.  


## Sparkplug B ve UNS (Unified Namespace) Desteği  

NightWatch, **Sparkplug B protokol desteği** sayesinde modern Endüstri 4.0 mimarilerinin temelini oluşturan **UNS (Unified Namespace)** yapısına tam uyumludur.  

- Her veri noktası, UNS yapısına uygun olarak hiyerarşik biçimde organize edilir.  
- MQTT altyapısı üzerinden, tüm sistemler aynı veri uzayına bağlanabilir.  
- MES, ERP veya bakım sistemleri NightWatch’un yayımladığı veriyi doğrudan UNS üzerinden tüketebilir.  

Bu sayede işletme genelinde **tekil veri kaynağı** (Single Source of Truth) yaklaşımı hayata geçirilir.  

Veri artık sistemden sisteme taşınan bir yük değil, kurum çapında paylaşılan bir değer haline gelir.

## Geniş Protokol Desteği: Üretimden Tesis Yönetimine  

NightWatch yalnızca üretim hatlarındaki makinelerden veri toplamakla kalmaz,  
aynı zamanda **tesis altyapısındaki farklı sistemlerden de veri çekebilir.**  

Desteklenen protokoller:  

- **Üretim Katmanı:** OPC UA / DA, Modbus TCP, Siemens S7, Omron, Rockwell, MQTT, Serial (RS-232)  
- **Tesis ve Altyapı Katmanı:** BacNET, SNMP (HVAC, enerji, ağ cihazları, çevresel sensörler)  

Bu sayede NightWatch, hem üretim hattı hem de tesis altyapısındaki veriyi tek çatı altında birleştirir.  

Enerji tüketimi, sıcaklık, titreşim, proses verisi veya ağ durumu fark etmeksizin  
**tüm veriler tek bir veri omurgasında toplanır, anlamlandırılır ve paylaşılır.**



## ISA-95 Uyumluluğu: Veriye Bağlam Kazandırmak  

NightWatch, **ISA-95** standardına uyumlu veri modelini temel alır.  
Bu sayede toplanan her veri noktası, üretim hiyerarşisinde anlamlı bir yere yerleştirilir:  

- Tesis → Üretim Hattı → Ekipman → Operasyon → Değer  
- Her veri noktası bu bağlamla birlikte işlenir ve kaydedilir.  

Bu yapı sayesinde MES ve ERP gibi üst sistemler,  
veriyi sadece “ölçüm değeri” olarak değil, **anlamlı üretim bilgisi** olarak yorumlayabilir. ISA-95 uyumluluğu, NightWatch’un yalnızca teknik değil, **semantik bütünlük** de sağladığının kanıtıdır.  



## NightWatch’un Çalışma Prensipleri  

**Veri Toplama**  
- Farklı kaynaklardan gerçek zamanlı veya periyodik veri toplama  
- Edge veya bulut üzerinde konumlanabilme  
- Çoklu protokol desteği ile heterojen sistemleri tek noktada birleştirme  

**Veri Zenginleştirme**  
- Dönüştürme, filtreleme, hesaplama, koşul bazlı işleme  
- Zaman senkronizasyonu ve veri kalitesi yönetimi  
- Makine, hat ve tesis bazlı hiyerarşik organizasyon  

**Veri Standardizasyonu ve Dağıtımı**  
- Sink modülleri: PostgreSQL, SQL Server, MQTT, Redis, RabbitMQ, REST, OPC UA  
- Çoklu hedef sistem desteği ve paralel veri yayını  
- Sparkplug B formatında UNS uyumlu veri dağıtımı  
- Otomatik tamponlama ve yeniden gönderim mekanizması  

**İzleme ve Alarm**  
- Gerçek zamanlı koşul bazlı alarm tanımlamaları  
- REST, MQTT, Slack, e-posta gibi farklı kanallara bildirim  
- Olay geçmişi kaydı ve performans izleme  



## trex MOP ile Hazır Entegrasyonlar  

NightWatch, trex Digital Manufacturing’ın diğer ürün ailesiyle doğal olarak entegre çalışır:  

- **trex MES**: Üretim verilerini doğrudan MES katmanına aktarır, OEE ve üretim analitiği süreçlerini besler.  
- **trex Veri & Görselleştirme**: NightWatch üzerinden toplanan veriler, görsel analiz panellerinde anlık izlenebilir.  
- **trex Servis ve IoT Katmanı**: MQTT ve REST temelli veri paylaşımıyla cihaz ve süreç izleme sağlanır.  

Bu hazır entegrasyonlar, kurum içinde veri akışını hızlandırır, geliştirme maliyetini azaltır ve **“out-of-the-box” Endüstri 4.0 uyumlu bir mimari** oluşturur.



## İşletmelere Sağladığı Somut Faydalar  

- **Lisanssız kullanım:** NightWatch’un açık ve özgür lisans yapısı maliyetleri minimize eder.  
- **Tekil veri modeli:** Sparkplug B ve UNS uyumu ile her sistem aynı veri katmanına bağlanır.  
- **Veri şeffaflığı:** Hem konfigürasyon hem veri akışı tamamen görünürdür.  
- **Hızlı devreye alma:** Konfigürasyon temelli mimariyle entegrasyon süresi kısalır.  
- **Enerji ve tesis verilerinin dahil edilmesi:** BacNET/SNMP desteğiyle üretim dışı veriler de kapsama alınır.  
- **ISA-95 uyumlu bağlamsal veri:** Üretim bilgisinin anlamlandırılması kolaylaşır.  
- **Hazır entegrasyonlar:** trex MOP bileşenleriyle uyumlu, doğrudan kullanılabilir bağlantılar.  



## NightWatch – Açık, Standart ve Lisanssız Endüstri 4.0 Veri Altyapısı  

NightWatch, trex Digital Manufacturing’ın Endüstri 4.0 vizyonunu sahaya taşıyan temel teknolojilerden biridir.  

Kapalı ve tescilli sistemlerin aksine, **verisini saklamaz — görünür, paylaşılabilir ve kullanılabilir hale getirir.**  

Sparkplug B ve ISA-95 uyumluluğu sayesinde modern üretim ortamlarının teknik ve semantik standartlarını destekler.  

BacNET ve SNMP entegrasyonlarıyla tesis altyapısını da dijital dönüşüm zincirine dahil eder.  

Ve tüm bunları, **lisans ücreti gerektirmeden** sunar.  

Kısacası NightWatch:  
- Açık, şeffaf, ekonomik ve birlikte çalışabilir bir veri platformudur.  
- trex MOP ile entegre çalışarak üretim, enerji, bakım ve yönetim sistemleri arasında köprü kurar.  
- Modern fabrikalarda verinin güvenli, standart ve anlamlı akışını sağlar.  

> **NightWatch: Açık veri, lisanssız dönüşüm, anlamlı üretim.**

## Daha Fazla Bilgi İçin
* [NightWatch Web Sitesi](https://docs.nightwatch.com.tr/)
* [NightWatch Dokümantasyon](https://docs.nightwatch.com.tr/)
* [trex İletişim](https://trex.com.tr/tr/iletisim)

***
{% include share_twitter_tr.html %}

***
