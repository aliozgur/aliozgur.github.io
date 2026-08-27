---

layout: post
title: "AI Çağında Junior Geliştiricileri Kaybetmemeliyiz"
subtitle: "Mentörlük Neden Hiç Olmadığı Kadar Önemli?"
date: 2026-08-27
author: "Ali Özgür"
excerpt_separator: 
published: true
tags:

- ai
- mentorship
- junior
- apprenticeship
- engineering

---

Yazılım dünyasında uzun yıllardır oldukça doğal kabul ettiğimiz bir kariyer yolu vardı. Üniversiteden mezun olur, junior geliştirici olarak bir ekibe katılır, küçük hataları düzeltir, nispeten basit geliştirmeler yapar, code review'larda hatalarınızı görür, daha deneyimli geliştiricilerin kodlarını okur ve zaman içinde daha karmaşık problemlerin sorumluluğunu almaya başlardınız. Bu süreç yalnızca kod yazmayı öğretmezdi; bir production sisteminin neden belirli şekilde tasarlandığını, bir teknik kararın hangi sonuçları doğurabileceğini, ne zaman soru sormanız gerektiğini, ne zaman araştırmaya devam etmenin doğru olduğunu ve bazen de çalışan bir çözümün neden iyi bir çözüm olmadığını anlamanızı sağlardı.

![Cover]({{ root.url }}/media/apprenti-junior-devs.png)

Generative AI ve özellikle AI coding agent'larının yükselişi bu modeli hızla değiştiriyor. Bugün deneyimli bir geliştirici, birkaç yıl önce bir junior geliştiriciye vereceği bazı görevleri Copilot, Claude Code, Codex, Cursor veya benzeri araçlarla çok daha kısa sürede tamamlayabiliyor. Boilerplate kod üretmek, temel testleri hazırlamak, bir API endpoint'i geliştirmek, basit refactoring işlemleri yapmak veya mevcut kod üzerinde sınırlı değişiklikler gerçekleştirmek artık büyük ölçüde AI desteğiyle yapılabiliyor. Buradaki problem AI'ın kod yazabiliyor olması değil; asıl problem, bu görevlerin aynı zamanda önceki nesil yazılım geliştiricilerin mesleği öğrendiği işler olması.

Bu konu benim için yalnızca sektörün geleceğine ilişkin soyut bir tartışma da değil. Oğlum 2026 yılında üniversiteye başlayacak. Dolayısıyla "AI çağında yeni bir yazılım geliştirici nasıl yetişmeli?" sorusu benim için hem profesyonel hem de kişisel bir soruya dönüşmüş durumda. Aslında bu yolculuk yeni başlamıyor; bilgisayar bilimi ve yazılım mühendisliği üzerine birlikte düşünmeye başladığımız günler 2018'e kadar uzanıyor.

## Sekiz yıl önce sorulan bir soru

2018 yılında oğlum 10 yaşındayken bilgisayar bilimi ve yazılım mühendisliği üzerine birlikte keşifler yapmaya başlamıştık. O dönem tuttuğum notlardan birinin başlığı bugün geriye dönüp baktığımda daha da anlamlı geliyor: "Kendi programlama dilimi yapsam nasıl çalıştırabilirim?" Bir çocuğun sorabileceği son derece doğal bir soru ama içinde programlama dillerinden derleyicilere, bilgisayar mimarisinden soyutlama kavramına kadar bilgisayar biliminin çok geniş bir alanını barındırıyor.

O gün ona programlama dili tasarımının Bilgisayar Bilimleri'nin çalışma alanlarından biri olduğunu, tasarladığı dili bilgisayarın anlayabileceği komutlara dönüştürecek başka bir programa ihtiyaç duyacağını anlatmıştım. Bu programların adına "derleyici" dediğimizi açıklarken de on yaşındaki bir çocuğun zihninde canlanabilecek bir benzetme kullanmışım: "Derleyici dediğimiz programları makine üretebilen süper makineler gibi de düşünebilirsin."

Bugün aynı soruyu bir AI assistant'a sorduğunuzda saniyeler içinde çok daha ayrıntılı bir cevap alabilirsiniz. Size lexer, parser, AST, intermediate representation, bytecode, virtual machine ve code generation gibi kavramları açıklayabilir; birkaç prompt sonrasında küçük bir programlama dili ve onun interpreter'ını bile oluşturabilir. Bu teknolojik olarak olağanüstü bir gelişme, fakat beni bugün daha çok ilgilendiren soru şu: O cevabı almakla gerçekten öğrenmek aynı şey mi?

On yaşında sorduğu o sorunun değerli tarafı yalnızca derleyicinin ne olduğunu öğrenmek değildi. Bir merakın başka sorular doğurmasıydı; "Bilgisayar yazdığım kelimeyi nasıl anlıyor?", "Bir program başka bir programı nasıl üretebilir?", "Bilgisayarın kendi dili nedir?" gibi yeni soruların ortaya çıkmasıydı. AI bize cevapları çok hızlı verebilir ama öğrenmenin değeri çoğu zaman cevaba ulaşmak için geçirilen sürede, yapılan hatalarda ve bir sorunun başka bir soruya dönüşmesinde ortaya çıkar. Bugün mentörlük hakkında yeniden düşünmemizin nedenlerinden biri de tam olarak bu.

## 2026 verileri bize ne söylüyor?

Junior geliştiricilerin iş piyasasındaki durumuyla ilgili tartışma artık yalnızca gözlemlere veya birkaç şirketin işe alım politikasına dayanmıyor. 2026 yılında yayımlanan çalışmalar, yazılım mühendisliğinde giriş seviyesi işin kendisinin yeniden tanımlandığına dair daha güçlü kanıtlar sunuyor. IZA@LISER Network tarafından Haziran 2026'da yayımlanan "Generative AI and the Redefinition of Entry-Level Software Work" çalışması, Lightcast'in ABD çevrimiçi iş ilanı verilerini kullanarak ChatGPT sonrasında giriş seviyesi yazılım geliştirici ilanlarının nasıl değiştiğini inceliyor. Araştırma, junior ilanların senior ilanlara göre göreli olarak %14-15 azaldığını gösteriyor. Daha da önemlisi, deneyim beklentisindeki yükselişin yalnızca farklı iş unvanlarının artmasından kaynaklanmadığını; aynı giriş seviyesi rollerin içinde daha fazla deneyim talep edilmeye başlandığını ortaya koyuyor. Kalan junior ilanlarda problem çözme, iletişim ve ayrıntılara gösterilen dikkat gibi yetkinliklerin ağırlığı da artıyor. Başka bir ifadeyle sektör junior rolü tamamen ortadan kaldırmaktan çok, "junior olmak için gereken seviyeyi" yukarı taşıyor.

PwC'nin Haziran 2026 tarihli Global AI Jobs Barometer çalışması da bu resmi daha geniş ölçekte tamamlıyor. Bir milyardan fazla iş ilanını analiz eden çalışma, AI'a yüksek derecede maruz giriş seviyesi pozisyonların muhakeme yeteneği, liderlik, yaratıcılık ve insan etkileşimi gibi geleneksel olarak daha deneyimli çalışanlardan beklenen becerileri isteme olasılığının yedi kat arttığını gösteriyor. PwC bunu giriş seviyesi rollerin "kıdemlileşme" süreci olarak ele alıyor ve AI'ın eskiden kariyerin başında doğal bir çıraklık işlevi gören rutin işleri azaltırken muhakeme, uyum sağlama ve karar verme beklentisini kariyerin çok daha erken aşamalarına taşıdığını vurguluyor.

Bu iki bulgu birlikte düşünüldüğünde problemin yalnızca "daha az junior ilan var" şeklinde tarif edilmesinin yetersiz olduğunu düşünüyorum. Asıl değişiklik, ilk işe girebilmek için gerekli olan mühendislik yetkinliği seviyesinin yükselmesi. AI'ın geliştirici işlerini bütünüyle ortadan kaldırdığı gibi kolaycı bir sonuç çıkarmak doğru değil; fakat AI'ın giriş seviyesi rollerin ekonomik mantığını ve şirketlerin junior'lardan beklediği üretkenlik seviyesini değiştirmediğini düşünmek de gerçekçi değil.

CoderPad'in 2026 State of Tech Hiring araştırması da AI'ın artık geliştirici iş akışının dışında değil tam merkezinde olduğunu gösteriyor. Araştırmaya göre geliştiricilerin %82'si generative AI'ı işlerinde en azından belirli ölçüde yararlı buluyor ve %54'ü AI araçları ortadan kaldırılırsa üretkenliğinin en az %10 düşeceğini söylüyor. Aynı araştırmada sistem tasarımı, hata ayıklama, optimizasyon ve AI tarafından üretilen kodun incelenmesi gibi yetkinliklerin öneminin arttığı; yalnızca yeni kod yazabilmenin ise göreli olarak daha az belirleyici hale geldiği görülüyor.

BairesDev'in Q2 2026 Dev Barometer araştırması ise junior geliştiriciler açısından daha çarpıcı bir boşluğa işaret ediyor. 77 ülkeden 1.569 geliştiriciyle yapılan çalışmada junior geliştiricilerin %85'i AI araçlarının yazılım geliştirme anlayışlarını geliştirdiğini düşünüyor. Fakat aynı junior'larla çalışan senior geliştiricilerin yalnızca %16'sı onların sundukları AI tarafından üretilen kodu tamamen anladığını düşünüyor; %23'ü ise junior'ların bunu nadiren tam olarak anladığını söylüyor. Aynı çalışmada senior geliştiricilerin %70'i gerçek dünya proje deneyimini bir junior'ın işe hazır olduğunun en önemli göstergesi olarak görüyor ve %72'si önümüzdeki yıllarda junior'ların geliştirmesi gereken en kritik yetkinlik olarak eleştirel düşünme becerisine işaret ediyor.

Bu rakamların söylediği şey bence oldukça açık: AI kullanmayı öğrenmek yeterli değil. AI ile çalışırken yaptığı işin sorumluluğunu alabilecek, üretilen çıktıyı sorgulayabilecek ve teknik kararlarının nedenlerini açıklayabilecek bir mühendis olmayı öğrenmek gerekiyor. Tam da bu nedenle mentörlük ve koçluk kavramları bugün eskisinden daha önemli hale geliyor.

## Junior işe almazsak senior geliştiriciler nereden gelecek?

"Junior yerine senior geliştirici çalıştırırım ve senior geliştiricinin üretkenliğini AI ile artırırım" yaklaşımı kısa vadede ekonomik açıdan son derece mantıklı görünebilir. Fakat yazılım mühendisliği açısından burada ciddi bir paradoks var: senior geliştiriciler hazır olarak ortaya çıkmıyor.

Bugünün senior geliştiricisi bir zamanlar production sistemini yanlış yapılandıran, kötü SQL yazan, gereksiz soyutlamalar oluşturan, hatalı exception handling yapan, pull request'i code review'dan geri dönen ve bir başka geliştiricinin "Bunu neden böyle yaptın?" sorusuna cevap vermek zorunda kalan junior geliştiriciydi. Ben kendi profesyonel hayatıma baktığımda da öğrendiğim en değerli şeylerin eğitim dokümanları ve kitaplara ek olarak başıma gelen olaylardan olduğunu görüyorum. Hatalı kararlar, production problemleri, başka mühendislerle yapılan tartışmalar, yıllar sonra maliyeti ortaya çıkan mimari tercihler ve zamanında gereksiz görünen bazı disiplinlerin neden gerekli olduğunu yaşayarak görmek bu birikimin önemli bir parçasıydı.

Bu deneyimlerin önemli bölümü ders kitabından öğrenilemiyor. Hatta çoğu zaman cevapların kendisi bile en önemli öğrenme unsuru değil; önemli olan doğru soruların sorulması. "Bu kod çalışıyor mu?" sorusunun zaman içinde "Bu kod neden böyle tasarlandı?", "Bu çözüm production yükü altında nasıl davranacak?", "Bu bağımlılığın operasyonel maliyeti nedir?", "Bu soyutlama gerçekten gerekli mi?", "Bu test bana hangi güvenceyi veriyor?" ve sonunda "Burada aslında hangi problemi çözmeye çalışıyoruz?" sorularına dönüşmesi gerekiyor. Junior'dan senior'a geçiş dediğimiz şey büyük ölçüde bu zihinsel dönüşüm.

AI bu dönüşümü ortadan kaldırmıyor; fakat junior'ın geçmişte bu dönüşümü yaşadığı doğal ortamın bazı parçalarını ortadan kaldırıyor. Eskiden bir geliştiricinin öğrenmek için yapmak zorunda olduğu birçok iş artık bir agent tarafından birkaç saniye içinde tamamlanabiliyor. Bu nedenle çıraklık ve mentörlük süreçlerini artık tesadüfe bırakamayız; öğrenme fırsatlarını bilinçli olarak tasarlamamız gerekiyor.

## AI cevap verebilir, ama doğru soruyu her zaman öğretemez

Bir junior geliştirici bugün birkaç saniye içinde yüzlerce satır çalışan kod üretebilir. Bu muazzam bir imkan ama aynı zamanda önemli bir eğitim problemi yaratıyor. Kodun üretilmesi ile kodun anlaşılması aynı şey değil; bir çözümü çalıştırabilmek ile o çözümün neden doğru olduğunu değerlendirebilmek de aynı şey değil. Bir testin geçmesi, sistemin gerçekten doğru davrandığı anlamına gelmeyebilir.

Bir öğrenci birkaç prompt ile linked list implementasyonu oluşturabilir fakat memory allocation'ın neden önemli olduğunu anlamayabilir. Bir web API geliştirebilir ama concurrency altında ne olacağını düşünmeyebilir. Mikroservisler geliştirebilir fakat neden daha basit bir monolith'in daha doğru tercih olabileceğini değerlendiremeyebilir. AI tarafından üretilmiş ve testleri geçen bir kodu güvenli veya sürdürülebilir zannedebilir. Bunların hiçbiri AI'ın başarısız olduğu anlamına gelmiyor; bunlar eğitimin değişmesi gerektiği anlamına geliyor.

Geleceğin geliştiricisine AI kullanmamasını söylemek, geçmişte geliştiriciye IDE veya internet kullanmamasını söylemek kadar anlamsız olurdu. Asıl mesele junior geliştiriciye AI ile birlikte nasıl düşünüleceğini öğretmek. Bir AI agent'ına verilen görev nasıl parçalanır, üretilen çözüm nasıl sorgulanır, hangi kod kabul edilir, hangisi reddedilir, bir halüsinasyon nasıl fark edilir, AI'ın oluşturduğu soyutlama gerçekten gerekli midir, test kapsamı yeterli midir, kod mevcut mimari ile uyumlu mudur, güvenlik problemi oluşturur mu ve gereksinimin kendisi doğru anlaşılmış mıdır? Bunların hiçbiri yalnızca prompt mühendisliği konusu değil; bunlar yazılım mühendisliği muhakeme konusu ve muhakeme deneyimle gelişiyor.

## Mentörlük artık "olsa da olur" bir şey değil

Mentörlük çoğu şirkette uzun yıllar boyunca kültürel bir artı olarak görüldü. İyi bir senior geliştirici zaman bulursa junior'a yardımcı olur, code review sırasında birkaç açıklama yazar, bazen eşli programlama yapılır ve öğrenmenin büyük bölümünün zaman içinde doğal olarak gerçekleşeceği varsayılırdı. AI sonrası dünyada bunun yeterli olmayacağını düşünüyorum; çünkü artık öğrenme fırsatlarını bilinçli olarak üretmemiz gerekiyor.

Bir mentörün görevi junior'ın yerine problemi çözmek değil, junior'ın çözebileceği doğru büyüklükte problemi seçmesine yardımcı olmak olmalı. Gerektiğinde cevap vermek yerine soru sormalı, junior'ın kararını açıklamasını istemeli, alternatiflerin maliyetlerini tartıştırmalı ve AI'ın ürettiği kodun neden kabul veya reddedildiğini birlikte değerlendirmeli. 2018 yılında oğlumun "Kendi programlama dilimi yapsam nasıl çalıştırabilirim?" sorusuna verdiğim cevabı bugün bir LLM benden çok daha kapsamlı verebilir. Fakat bir mentörün yapabileceği başka bir şey var: "Nasıl bir dil yapmak isterdin?", "Bu dilde hangi komutlar olurdu?", "Bilgisayar yazdığın kelimelerin ne anlama geldiğini nereden bilecek?", "Bir dili başka bir dile çevirmek ne demek?" gibi sorular sorabilir. Bu sorular cevabı geciktirir ama düşünmeyi başlatır.

Mentörlük ile bilgi aktarımı arasındaki farklardan biri burada ortaya çıkıyor. Koçluk da aynı nedenle önem kazanıyor; çünkü amaç yalnızca deneyimi aktarmak değil, kişinin kendi problem çözme ve karar verme kapasitesini geliştirmek. AI'ın çok hızlı cevap üretebildiği bir dünyada geliştiricinin sahip olması gereken en değerli becerilerden biri cevabı almak değil, cevabı değerlendirebilecek zihinsel modeli geliştirmek.

## apprenti.dev'in arkasındaki kişisel hikaye

[apprenti.dev](https://apprenti.dev/) bugün yayında ve sitenin kullandığı kısa ifade sistemin ne yapmaya çalıştığını oldukça iyi özetliyor: **"Learn by doing. Grow through mentorship."** Fakat apprenti.dev'in temelindeki düşünceyi yalnızca bu sloganla sınırlamak istemiyorum; benim için sistemin öğrenme modeli "Learn → Build → Prove → Reflect → Review" döngüsüyle daha iyi açıklanıyor.

Apprenti önce konuyu ve yapacağı işin neden önemli olduğunu öğreniyor, ardından kendi geliştirme araçlarıyla gerçek işi yapıyor. Yaptığını yalnızca "tamamlandı" olarak işaretlemek yerine repository, commit, benchmark, test sonucu, demo veya başka somut kanıtlarla ortaya koyuyor. Sonrasında yaptığı iş üzerine düşünüyor; hangi kararları verdiğini, nerede zorlandığını, neyi farklı yapabileceğini değerlendiriyor. Son aşamada mentör yalnızca sonucu değil, üretilen kanıtı ve reflection'ı birlikte inceliyor; gerektiğinde revizyon istiyor veya yeni bir tartışma başlatıyor. Bu sürecin tamamı kalıcı öğrenme geçmişinin bir parçası oluyor.

Bu ayrım benim için önemli çünkü apprenti.dev geleneksel anlamda bir LMS değil. Daha çok Git-native bir çıraklık çalışma ortamı. Oğlum 2026 yılında üniversiteye başlarken benim de önümde birkaç yıllık yeni bir mentörlük süreci var. Üniversitenin vereceği temel önemli olacak. Fakat üniversite eğitiminin tek başına yeterli olacağını düşünmüyorum; yaparak öğrenmenin ve mentörlüğün bu temeli tamamlaması gerekiyor.

İşletim sistemleri, veritabanları, dağıtık sistemler, networking, Git, message broker'lar, web ve mobil geliştirme, yazılım mimarisi, testing, debugging, deployment ve production sistemleri gibi alanlarda gerçek mühendislik tecrübesi ancak yaparak kazanılıyor. Benim önümüzdeki yıllardaki hedefim hazır cevaplardan oluşan bir eğitim vermek değil; karşısına problemler koymak, araştırmasını istemek, küçük sistemler geliştirmesini sağlamak, bazı hataları yapmasına izin vermek, kararlarını açıklamasını istemek ve gerektiğinde kendi deneyimimden yararlanarak yön göstermek. apprenti.dev fikri büyük ölçüde bu ihtiyaçtan doğdu.

## İlk müfredatı da bu düşünceyle oluşturdum

Bu fikri yalnızca uygulama tarafında bırakmak istemedim. AI'ın da yardımıyla [apprenti-dev/software-engineering-base](https://github.com/apprenti-dev/software-engineering-base) repository'sinde forklanabilir açık bir Yazılım Mühendisliği kataloğu oluşturmaya başladım. Bu repository bugün farklı seviyelere ve uzmanlık alanlarına yönelik Türkçe ve İngilizce çok sayıda müfredat içeriyor ve [Curricula Catalog](https://apprenti.dev/curricula/) üzerinden görüntülenebiliyor.

Buradaki amaç tek bir "doğru yazılım mühendisliği müfredatı" tanımlamak değil. Ana Software Engineering Apprenticeship uzun soluklu, temelden başlayıp gerçek mühendislik pratiğine uzanan bir yol sunarken; AI-Native Software Engineering, Backend Engineering, Engineering Foundations for Junior Developers, Software Architecture & System Design, Platform / DevOps Engineering, Distributed Systems Engineering, Data Engineering, Application Security Engineering, Software Quality & Test Engineering, Performance Engineering, Observability & Production Engineering, Open Source Engineering ve Industrial / Edge Software Engineering gibi daha odaklı yollar da farklı ihtiyaçlara cevap veriyor. 

Ben bu kataloğu bitmiş bir içerik kütüphanesi olarak görmüyorum. Daha çok açık ve birlikte geliştirilebilecek bir başlangıç noktası olarak görüyorum. Benim hazırladığım bir müfredatı başka bir mentör aynen kullanmak zorunda değil; fork edebilir, kendi öğrencisine göre değiştirebilir, bazı görevleri çıkarabilir, yeni kaynaklar ekleyebilir veya bambaşka bir uzmanlık oluşturabilir. Aynı şekilde bir şirket kendi teknoloji stack'ine göre yeni mezun mühendisliği müfredatı hazırlayabilir, bir üniversite topluluğu kendi içeriğini paylaşabilir veya başka bir mentör benim hazırladığımdan çok daha iyi bir dağıtık sistemler müfredatı oluşturup ekosisteme kazandırabilir.

## Müfredat bir ürün değil, açık bir bilgi varlığı olmalı

apprenti.dev'in temelindeki en önemli fikirlerden biri müfredatın platform tarafından sahip olunan kapalı bir içerik olmaması. Bir müfredat temelde bir Git repository ve bu nedenle version'lanabilir, fork edilebilir, geliştirilebilir ve tekrar paylaşılabilir. Bu yaklaşım yazılım mühendisliğindeki açık kaynak kültürünün eğitim tarafına taşınması anlamına geliyor.

Bir müfredatı tek bir yazarın değişmeden kalan içeriği olarak görmek yerine yaşayan bir bilgi varlığı olarak düşünmek daha doğru geliyor. Mentörler gerçek deneyimleriyle görevleri iyileştirebilir, yeni kaynaklar ekleyebilir, daha iyi değerlendirme kriterleri tanımlayabilir ve farklı ihtiyaçlar için yeni yollar türetebilir. Böylece müfredat yalnızca bir öğrenme planı olmaktan çıkıp bir topluluk tarafından sürekli geliştirilen ortak mühendislik hafızasına dönüşebilir.

Bu işbirlikçi müfredat oluşturma yaklaşımı apprenti.dev'in temel felsefesinin önemli bir parçası. Açık müfredatlar, mentörlük deneyimini bireysel bir ilişkiden çıkarıp tekrar kullanılabilir ve geliştirilebilir bir ekosisteme dönüştürüyor. Bir mentörün yıllar içinde edindiği deneyim yalnızca kendi apprentice'inde kalmak zorunda değil; görev tasarımlarına, değerlendirme kriterlerine, yansıtma sorularına ve öğrenme yollarına dönüşerek başkalarının da kullanabileceği bir bilgi birikimine dönüşebilir.

## apprenti.dev bir içerik tüketim platformu değil

İnternette zaten olağanüstü miktarda eğitim içeriği var. Üniversite dersleri, YouTube videoları, kitaplar, blog yazıları, interactive coding platformları, bootcamp'ler ve artık istediğiniz konuyu istediğiniz seviyede anlatabilen AI sistemleri var. Eksik olan şey çoğu zaman içerik değil; eksik olan şey yolculuk, uygulama, kanıt ve geri bildirim.

Bu nedenle apprenti.dev quiz score'larından çok yapılan işin gerçek kanıtına önem veriyor. Bir apprenti bir görevi tamamladığında bunun kanıtı bir repository, commit, tag, test sonucu, benchmark, demo, URL veya açıklayıcı bir Markdown dokümanı olabilir. Mentör de öğrencinin yalnızca "tamamladım" demesine değil, ortaya koyduğu gerçek işe bakıyor.

Bu yaklaşım pedagojik açıdan da önemli. "PostgreSQL biliyorum" bir öz değerlendirme olabilir; fakat bir dataset oluşturup farklı index stratejileri için benchmark yapmak, execution plan'ları karşılaştırmak ve neden belirli bir index seçtiğini açıklamak bir kanıttır. "Dağıtık sistemler biliyorum" bir iddia olabilir; fakat partition oluşturarak sistemin nasıl davrandığını gözlemlemek ve consistency trade-off'larını açıklamak bir öğrenme deneyimidir.

BairesDev'in 2026 araştırmasında senior geliştiricilerin %70'inin gerçek dünya proje deneyimini bir junior'ın işe hazır oluşunun en güçlü göstergesi olarak görmesi bu nedenle apprenti.dev'in "build and prove" yaklaşımıyla doğrudan örtüşüyor. Öğrenmenin değerini yalnızca tüketilen içerikle değil, ortaya konan iş ve o işin gerekçesiyle ölçmek gerekiyor.

## Reflection da en az build kadar önemli

Bir şeyi yapmak her zaman o şeyi öğrenmek anlamına gelmiyor. Özellikle AI çağında bu ayrım daha da önemli hale geliyor çünkü bir geliştirici çok kısa sürede çalışan bir sonuç elde edebilir fakat o sonucun neden çalıştığını veya neden iyi bir çözüm olduğunu anlamayabilir. Bu nedenle apprenti.dev öğrenme döngüsünde "Reflect" ayrı bir adım olarak yer alıyor.

Çırak yaptığı işin neden böyle olduğunu, neyin beklediği gibi gitmediğini, hangi alternatifleri değerlendirdiğini ve AI'ı nerede kullandığını düşünmek zorunda. Reflection prompts görevin kendisinden geliyor ve AI reflection coach bu süreci destekleyebiliyor. Ama amaç AI'ın çırak adına reflection yazması değil; kişinin yaptığı işi zihinsel bir modele dönüştürmesine yardımcı olmak.

"Bu kodu neden kabul ettim?", "Agent'ın önerdiği çözümün hangi kısmını doğruladım?", "Ne hata yaptı?", "AI kullanmasaydım bu problemi nasıl çözerdim?", "Bir dahaki sefer neyi farklı yapacağım?" gibi sorular üretkenliği birkaç dakika azaltabilir ama mühendislik muhakemesini geliştirir. Bugünün geliştiricisinin en önemli yetkinliklerinden biri de tam olarak bu: hızlı üretmek kadar yaptığı üretimi sorgulayabilmek.

## AI destekler, asla karar vermez

apprenti.dev içerisinde AI assistant'lar var ve bunlar sistemin önemli bir parçası. Ancak ürünün yaklaşımını özetleyen ifade benim için temel bir tasarım ilkesi: **"AI assists, never decides."** AI açıklama yapabilir, ipucu verebilir, ek kaynak önerebilir, reflection sürecini destekleyebilir veya bir görevin anlaşılmasına yardımcı olabilir; fakat öğrenmenin kendisini ve mentör muhakemesini ikame etmemeli.

Bu nedenle AI bir submission'ı otomatik olarak onaylayan hakem değil. Review sürecinin sonunda insan mentör var. Bu, teknik bir uygulama tercihi değil; ürünün pedagojik duruşu. Bir AI assistant öğrenciye yardımcı olabilir ama çırağın gerçekten öğrendiğine, yaptığı işi anladığına ve bir sonraki adıma hazır olduğuna dair nihai muhakeme mentör tarafından verilmelidir.

Özellikle 2026 verileri ışığında bu ayrım daha önemli hale geliyor. Junior'ların çok büyük bölümü AI'ın kendi anlayışlarını geliştirdiğini düşünürken senior geliştiricilerin çok daha küçük bir bölümü onların AI tarafından üretilen kodu gerçekten anladığını düşünüyor. Bu, "kendini yeterli hissetmek" ile "yeterliliği kanıtlayabilmek" arasındaki farkı ortaya koyuyor. apprenti.dev'in "build → prove → reflect → review" zinciri de tam olarak bu boşluğa cevap vermeyi amaçlıyor.

## Git burada yalnızca teknik bir tercih değil

apprenti.dev Git-native ve offline-first olarak tasarlandı. Müfredat, tasks, reflections, submissions ve mentör reviews merkezi bir uygulama veritabanı satırları değil; kullanıcının kontrol ettiği Git repository'de JSON ve Markdown dosyaları olarak tutuluyor. SQLite cihaz üzerinde hızlı projection ve cache görevi görüyor ve gerektiğinde Git'ten yeniden üretilebiliyor. GitHub ve GitLab ise merkezi platform bağımlılıkları değil, normal Git remote'ları olarak kullanılıyor.

Bunun benim için teknik olduğu kadar felsefi bir anlamı da var. Müfredat sizin, repository sizin, submission'lar sizin, mentör review'ları sizin ve öğrenme geçmişiniz sizin. Bir şirket kapanabilir, bir SaaS ürünü ortadan kalkabilir veya ücretlendirme modeli değişebilir; fakat yıllarca oluşturduğunuz çıraklık geçmişi bir platformun kapalı veritabanındaki hesaba bağımlı olmamalı.

Aynı şekilde müfredat da kilit altında olmamalı. Fork edebilmeli, başka bir mentörle devam edebilmeli, yeni bir müfredat türetebilmeli ve hatta apprenti.dev'i hiç kullanmasanız bile repository'nin içindeki dosyaları okuyabilmelisiniz. Bu nedenle "Git is the source of truth" ifadesi apprenti.dev için yalnızca bir mimari karar değil; açıklık, taşınabilirlik ve kullanıcı sahipliği ilkesi.

## Çırak, mentör ve müfredat yazarı aynı ekosistemin parçaları

apprenti.dev yalnızca öğrenci tarafına bakmıyor. Aynı repository üzerinde çırak, mentör ve müfredat yazarı birlikte çalışıyor. Çırak özenle seçilmiş bir patikayı izliyor, task'ları gerçekleştiriyor, kanıt üretiyor, reflection yazıyor ve mentör geri bildirimi alıyor. Mentör özenle yapılandırabiliyor veya fork edebiliyor, submission'ları değerlendiriyor, revision isteyebiliyor ve yetkinlik gelişimini tamamlanmış gerçek iş üzerinden takip ediyor. Müfredat yazarı ise task, module, resource ve yetkinlik modeli geliştiriyor.

Buradaki önemli kavram iş birliği (collaboration). Mentörlük tek yönlü bilgi aktarımı değil; müfredat da değişmez bir ders planı değil. Çırağın yaptığı iş, mentörün gözden geçirmesi ve müfredat yazarının deneyimi zaman içinde birbirini besleyebilir. Açık kaynak yazılımda repository'lerin nasıl kolektif mühendislik hafızası haline geldiğini biliyoruz; benzer bir modeli yazılım mühendisliği eğitimi için de kurabiliriz.

## Üniversite, AI ve mentörlük birbirinin alternatifi değil

Önümüzdeki birkaç yıl benim açımdan bu düşüncenin gerçek hayattaki bir deneyi de olacak. Üniversite eğitimi akademik bir temel sağlayacak. AI assistant'lar ise geçmiş nesillerin sahip olmadığı kadar güçlü bir kişisel öğrenme ve üretim kapasitesi sunacak.

Mentörün görevi bunlardan herhangi birinin yerini almak değil, bunları birbirine bağlamak. Üniversitede öğrenilen ayrık matematiğin gerçek bir algoritmada nerede karşılık bulduğunu göstermek, işletim sistemleri dersindeki process kavramını çalışan bir Linux sisteminde incelemek, veritabanı teorisini PostgreSQL üzerinde deney yapmakla birleştirmek, AI'ın ürettiği kodun neden bazen kötü olduğunu tartışmak ve bütün bunların sonunda öğrencinin kendi mühendislik muhakemesini oluşturmasına yardımcı olmak gerekiyor.

Ben apprenti.dev'i biraz da bunun için yapıyorum. Önümüzdeki yıllarda kendi oğlumla sürdüreceğim mentörlük sürecinde kullanmak istediğim aracı inşa ediyorum. Software Engineering Apprenticeship müfredatını da bu nedenle uzun soluklu bir yapı olarak tasarladım. Fakat onun yalnızca bir kişi için kalmasını istemiyorum; bugün herhangi bir mentör repo'yu fork edip kendi çırağı için değiştirebilir, yarın başka mentörler çok daha iyi müfredatlar oluşturup aynı ekosisteme ekleyebilir.

Bu bana doğru model gibi geliyor: kendi öğrencim için bir şey geliştirirken başkalarının da kullanabileceği açık bir altyapı oluşturmak ve başkalarının yaptığı iyileştirmelerin bir gün tekrar bizim öğrenme yolculuğumuza dönmesini sağlamak.

## Yazılım sektörünün bir optimizasyon probleminden daha büyük bir sorumluluğu var

Şirketlerin içinde bulunduğu ekonomik gerçekliği görmezden gelmek kolay. Bir ekip aynı işi daha az insanla yapabiliyorsa bunu yapmak isteyecektir. Bir senior mühendis AI araçlarıyla geçmişte birkaç kişinin üretebildiği çıktıyı üretebiliyorsa şirketlerin bunu değerlendirmesi kaçınılmazdır. AI'ın sağladığı verimlilik kazanımlarından vazgeçmeyi savunmak gerçekçi olmaz.

Fakat yalnızca bugünün verimliliğini optimize ettiğimizde yarının insan sermayesini gözden kaçırabiliriz. PwC'nin 2026 raporunda dikkat çektiği gibi AI rutin işleri azaltırken, geçmişte doğal bir çıraklık mekanizması oluşturan işler de azalıyor. Aynı anda muhakeme, uyum sağlama ve liderlik gibi yetkinlikler kariyerin çok daha erken aşamalarında beklenmeye başlanıyor.

Bu ikisi birlikte olduğunda kendiliğinden çözülecek bir problemle karşı karşıya değiliz. Bir tarafta junior'ın öğrenmesini sağlayan basamakları kaldırıyoruz, diğer tarafta junior'dan daha yukarıdaki basamakların yetkinliklerini bekliyoruz. Aradaki boşluğu bir şeyin doldurması gerekiyor. Bunun yalnızca üniversiteler veya yalnızca AI assistant'lar olacağını düşünmüyorum; bu boşluğu yapılandırılmış çıraklık, gerçek proje deneyimi, bilinçli pratik, mentörlük ve koçluk ile doldurmamız gerekiyor.

## Belki de "junior geliştirici" kavramını yeniden düşünmenin zamanı geldi

Geleceğin junior geliştiricisi geçmişin junior geliştiricisiyle aynı olmayacak. Daha ilk gününden AI agent'larıyla çalışacak, çok daha hızlı prototip üretecek ve normalde yıllar sonra karşılaşacağı teknolojilerle kariyerinin çok erken dönemlerinde karşılaşabilecek. Bu çok büyük bir fırsat ve doğru mentörlük modeliyle bugün bir çırağın öğrenme hızı geçmişte mümkün olandan çok daha yüksek olabilir.

Bu yüzden AI'ın junior geliştirici kavramını ortadan kaldıracağını düşünmüyorum; junior geliştiricinin rolünü değiştireceğini düşünüyorum. Bu yeni dünyada mentörün rolü de değişmek zorunda. Mentör artık yalnızca "bu kodu böyle yaz" diyen kişi değil; çırağa AI ile birlikte nasıl mühendislik yapılacağını öğreten kişi olacak. Nasıl soru soracağını, nasıl doğrulayacağını, nasıl şüphe edeceğini, nasıl karar vereceğini, ne zaman AI'a güvenmemesi gerektiğini ve zaman içinde nasıl bağımsız hale geleceğini göstermesi gerekecek.

2018 yılında on yaşındaki oğluma derleyiciyi "makine üretebilen süper bir makine" olarak anlatmıştım. 2026 yılında aynı çocuk üniversiteye başlarken elimizde artık gerçekten program üretebilen makineler var. Sekiz yıl içinde teknoloji, çocukken kullandığımız benzetmeye şaşırtıcı derecede yaklaştı.

Ama değişmeyen bir şey var. Makine ne kadar güçlü olursa olsun, öğrenmek isteyen insanın doğru soruları sormayı, yaptığı işi anlamayı, kararlarının sonuçlarını görmeyi ve zaman içinde kendi muhakemesini oluşturmayı öğrenmesi gerekiyor. AI bilgiye erişimin maliyetini dramatik biçimde düşürüyor ama tecrübenin maliyetini sıfırlamıyor.

apprenti.dev ile çözmeye çalıştığım problem tam olarak bu. Daha fazla içerik üretmek yerine açık ve fork edilebilir müfredatlar oluşturmak, mentörlerin bu müfredatları birlikte geliştirebileceği bir ekosistem kurmak, çıraklara gerçek işler yaptırmak ve yaptıklarını kanıtlamalarını sağlamak istiyorum. AI'ı öğrenmenin yerine değil, öğrenmeyi destekleyen bir araç olarak konumlandırırken bütün bu sürecin merkezinde insan mentörün muhakemesini tutmak da aynı yaklaşımın bir parçası.

**Learn by doing. Grow through mentorship.**

Bugünün junior çırakları yarının senior mühendisleri olacak. Onları yetiştirmeyi bırakırsak, AI'ın bizim için çözemeyeceği bir problemi kendi ellerimizle yaratmış oluruz.

---

## Kaynaklar ve ileri okuma

**Westby, Modestino & Cheng - "Generative AI and the Redefinition of Entry-Level Software Work", IZA Discussion Paper No. 18723, Haziran 2026.** Lightcast'in geniş kapsamlı ABD iş ilanı verilerini kullanarak generative AI sonrasında giriş seviyesi yazılım geliştirici rollerindeki deneyim beklentilerini inceliyor. Junior ilanlarda senior ilanlara göre %14-15 göreli düşüş ve aynı unvanlar içinde yükselen deneyim gereksinimleri buluyor.  
[https://www.iza.org/publications/dp/18723/generative-ai-and-the-redefinition-of-entry-level-software-work](https://www.iza.org/publications/dp/18723/generative-ai-and-the-redefinition-of-entry-level-software-work)

**PwC - 2026 Global AI Jobs Barometer, Haziran 2026.** 27 ülke ve bölgede bir milyardan fazla iş ilanını inceliyor. AI'a yüksek derecede maruz giriş seviyesi rollerin geleneksel olarak senior kabul edilen insan becerilerini isteme olasılığının yedi kat arttığını gösteriyor.  
[https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer.html](https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer.html)

**BairesDev - Dev Barometer Q2 2026: The AI Career Reset.** 77 ülkeden 1.569 geliştiricinin katıldığı araştırma, junior geliştiricilerin AI kullanımına ilişkin algılarıyla senior geliştiricilerin gözlemleri arasındaki farkı; gerçek proje deneyimi ve eleştirel düşünmenin önemini inceliyor.  
[https://www.bairesdev.com/research](https://www.bairesdev.com/research)

**CoderPad - State of Tech Hiring 2026.** 650'den fazla geliştirici ve işe alım uzmanının katıldığı çalışma, generative AI'ın geliştirici iş akışına ne derece yerleştiğini ve hata ayıklama, sistem tasarımı ve AI tarafından üretilen kodun incelenmesi gibi yetkinliklerin artan önemini inceliyor.  
[https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/](https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/)

**Stanford Digital Economy Lab - "Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence", 2025.** AI'a yüksek ölçüde maruz mesleklerde erken kariyer çalışanlarının istihdamındaki değişimi ADP verileri üzerinden analiz ediyor.  
[https://digitaleconomy.stanford.edu/](https://digitaleconomy.stanford.edu/)

**apprenti.dev - Learn by doing. Grow through mentorship.** Git-native, offline-first çıraklık yaklaşımının ürün felsefesi, öğrenme döngüsü, mentör review süreci, AI yaklaşımı ve açık müfredat modeli.  
[https://apprenti.dev/](https://apprenti.dev/)

**apprenti.dev Curricula Catalog.** Açık ve fork edilebilir müfredat repository'lerinin kataloğu.  
[https://apprenti.dev/curricula/](https://apprenti.dev/curricula/)

**apprenti-dev/software-engineering-base.** Software Engineering Apprenticeship, Data Analytics and AI Apprenticeship ile farklı uzmanlık alanlarına yönelik müfredatları içeren reference repository.  
[https://github.com/apprenti-dev/software-engineering-base](https://github.com/apprenti-dev/software-engineering-base)

---

{% include share_twitter_tr.html %}

---

