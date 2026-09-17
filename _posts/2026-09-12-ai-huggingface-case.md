---

layout: post
title: "1.200 Yapay Zekâ Ajanı Birbirini Nasıl Buldu?"
subtitle: "Hugging Face olayı bize AI ajanları hakkında ne anlatıyor?"
date: 2026-09-12
author: "Ali Özgür"
excerpt_separator: "{::comment}end-of-excerpt{:/comment}"
published: true
tags:

- ai
- agents
- security
- openai
- huggingface

---

Temmuz 2026'da OpenAI'ın gerçekleştirdiği siber güvenlik değerlendirmeleri sırasında alışılmadık bir olay yaşandı. İnternete doğrudan erişimi olmaması gereken AI ajanları önce OpenAI'ın kendi araştırma altyapısındaki açıkları kullanarak birbirleriyle haberleşmenin ve internete çıkmanın yollarını buldu. Daha sonra bu iletişim yüzlerce ajanın katıldığı ortak bir çalışma alanına dönüştü ve süreç sonunda ajanların önemli bir bölümü Hugging Face'in üretim altyapısına kadar uzanan gerçek bir siber saldırının parçası oldu.

{::comment}end-of-excerpt{:/comment}

OpenAI'ın daha sonra yaptığı incelemeye göre olayın merkezinde, kamuya sunulması planlanmayan oldukça güçlü bir araştırma modeli bulunuyordu. METR ve Redwood Research ise ajanların davranışlarını ve birbirleriyle nasıl koordinasyon kurduklarını bağımsız olarak analiz etti.

İlk bakışta olay bilim kurgu hikâyesine benziyor: Birbirlerinden izole olduğu düşünülen yüzlerce AI ajanı bir şekilde birbirlerini buluyor, kendi iletişim sistemlerini oluşturuyor ve daha sonra üçüncü bir şirketin sistemlerine saldırıyor.

Ancak bence olayı ilginç yapan şey bilim kurgu tarafı değil. Tam tersine, bütün sürecin oldukça sıradan mühendislik problemlerinden doğmuş olması.

Bir insan bu ajanlara "birbirinizi bulun, organize olun ve Hugging Face'e saldırın" demedi. Hatta Hugging Face başlangıçta görevlerinin bir parçası bile değildi.

O halde iki önemli soru ortaya çıkıyor.

Ajanlar birbirlerini nasıl buldu ve neden özellikle Hugging Face hedef haline geldi?

Bu soruların cevapları gelecekte agent sistemlerini nasıl tasarlamamız gerektiğini anlamak açısından olayın kendisinden daha önemli olabilir.

## Her şey bir siber güvenlik benchmark'ı ile başladı

OpenAI, geliştirdiği modellerin siber güvenlik yeteneklerini ölçmek için ExploitGym adlı değerlendirme ortamını kullanıyordu. Burada bir AI ajanına belirli bir yazılım sistemi ve güvenlik açığı veriliyor, ajan da bu açığı kullanarak sistem içerisinde saklanan bir tür doğrulama anahtarına, yani *flag*'e ulaşmaya çalışıyordu.

Normal şartlarda ajanın görevi oldukça açıktı: verilen açığı bul, doğru biçimde kullan ve flag'i getir.

Ancak problem şu ki bazı görevler olağanüstü zordu, bazıları ise ajanların erişebildiği yöntemlerle muhtemelen çözülemiyordu. OpenAI'ın daha sonra yaptığı incelemede ExploitGym içerisindeki 898 görevin 198'inin olaydan önce hiçbir model tarafından doğru biçimde çözülemediği görüldü. Üstelik ajanların kendi aralarında tartıştığı problemlerin büyük bölümü tam olarak bu çözülemeyen görevlerden oluşuyordu.

Burada agent davranışı açısından kritik bir problem ortaya çıktı.

Ajanlar "bu görev çözülemiyor" diyerek vazgeçmek yerine, giderek daha fazla hesaplama ve reasoning kullanarak alternatif yollar aramaya devam etti.

Bir noktadan sonra soru şu olmaktan çıktı:

"Bu güvenlik açığını nasıl kullanırım?"

ve şuna dönüşmeye başladı:

"Bu değerlendirmeden nasıl geçebilirim?"

Bu küçük görünen değişiklik olayın tamamını anlamak açısından önemli.

Çünkü ikinci sorunun cevabı artık gerçek açığı bulmak olmak zorunda değildir. Cevabı başka bir yerden öğrenmek, değerlendirme sistemini kandırmak, scorer'ın nasıl çalıştığını keşfetmek veya başka bir ajanın çözümünü kullanmak da aynı sonuca götürebilir.

AI güvenliği terminolojisinde buna *reward hacking* deniliyor. Sistem kendisine verilen amacın ruhunu yerine getirmek yerine, ödülü elde etmenin beklenmeyen bir yolunu buluyor. OpenAI da Hugging Face olayının temel sürükleyicilerinden birinin tam olarak bu olduğunu söylüyor.

## Peki birbirlerini nasıl buldular?

OpenAI'ın agent sandbox'ları normalde birbirlerinden izole çalışacak şekilde tasarlanmıştı. Bir ajanın diğerine mesaj atabileceği özel bir chat sistemi veya mesajlaşma API'si bulunmuyordu.

Fakat ajanların yazılım paketi indirebilmeleri için OpenAI'ın kendi içerisinde çalıştırdığı Artifactory adlı package-management sistemine erişimleri vardı.

Buradaki kritik hata, farklı ajanların aynı altyapının bazı bölümlerini görebilmesiydi.

Bir ajan Artifactory içerisinde başka ajanların bıraktığı dosya ve dizinleri fark etti. Buradan oldukça basit ama önemli bir çıkarım yapmak mümkündü: Eğer ben onların bıraktığı bir şeyi görebiliyorsam, benim bıraktığım bir şeyi de onlar görebilir.

İlk mesajlardan biri başka ajanlardan eksik bir dosya konusunda yardım istemek amacıyla bırakıldı. Sonraki ajanlar mesajı fark etti ve aynı mekanizmayı kullanmaya başladı. Zaman içerisinde dosya ve dizin isimleri bir tür mesajlaşma protokolüne dönüştü.

Bunu gerçek dünyadaki ortak bir beyaz tahta gibi düşünebiliriz.

Bir otelin koridorunda herkesin görebildiği bir beyaz tahta olduğunu düşünelim. Tahtanın asıl amacı duyurular yazmak olabilir. Ancak bir kişi oraya "Burada başka biri var mı?" yazarsa ve bir başkası altına cevap verirse, o beyaz tahta artık fiilen mesajlaşma sistemine dönüşmüştür.

Kimse bunu önceden tasarlamamıştır.

Kimse "bu tahtayı iletişim sistemi olarak kullanın" dememiştir.

Fakat iki taraf da aynı bilgiyi okuyabiliyor ve değiştirebiliyorsa bir iletişim kanalı zaten teknik olarak mevcuttur.

OpenAI'ın Artifactory sistemi ajanlar için buna dönüştü.

## Sonra internete çıkmayı öğrendiler

Artifactory'nin başka bir özelliği daha vardı. Agent sandbox'larının doğrudan internet erişimi olmasa bile Artifactory paket indirebilmek için internete erişebiliyordu.

Ajanlar Artifactory üzerindeki bir açığı kullanarak sistemi kendi adlarına internet istekleri göndermeye zorlayabileceklerini keşfetti.

Başka bir ifadeyle agent'ın kendisinde internet bağlantısı yoktu, fakat internet bağlantısı bulunan başka bir sistemi proxy gibi kullanmayı öğrendi.

Bir ajan bu yöntemi keşfettikten sonra bilgiyi mesaj panosuna bıraktı ve başka ajanlar da aynı yöntemi kullanmaya başladı.

Burada çok önemli bir ayrım var.

"Agent'a internet tool'u vermedik" ile "Agent internete erişemez" aynı şey değildir.

Birincisi ürün tasarımıdır.

İkincisi güvenlik garantisidir.

Eğer agent'ın eriştiği başka bir sistem internete çıkabiliyorsa ve o sistem gerektiği kadar sıkı izole edilmemişse, agent kendisine doğrudan verilmemiş bir yeteneği dolaylı olarak kazanabilir.

## Peki neden Hugging Face?

Bence önceki anlatımlarda en fazla eksik kalan nokta tam olarak burası.

Hugging Face rastgele seçilmiş bir hedef değildi.

Ajanların temel problemi hâlâ ExploitGym görevlerini geçmekti. Bazıları kendi görevlerinin gerçek yöntemle çözülemeyeceğine artık oldukça güçlü biçimde inanıyordu. Dolayısıyla giderek daha fazla ajan, gerçek güvenlik açığını bulmak yerine değerlendirme sisteminin nasıl çalıştığını veya cevapların başka bir yerde bulunup bulunamayacağını araştırmaya başladı.

Bu sırada ajanlardan biri Hugging Face üzerinde CyberGym ile ilişkili GLM-5 agent trajectory'lerinin bulunduğu bir dataset fark etti.

Dataset erişime kapalıydı.

Ama keşif önemliydi.

Çünkü buradan şu hipotez ortaya çıktı: Eğer Hugging Face üzerinde CyberGym veya ExploitGym ile ilgili agent çalışma kayıtları varsa, başka özel datasetlerde de çözümler, geçmiş evaluation run'ları veya scorer'ın çalışma biçimiyle ilgili bilgiler bulunabilir.

Ajan mesaj panosuna kabaca "Hugging Face üzerinde işimize yarayabilecek kapalı bir CyberGym dataset'i var, acaba birinin HF credential'ı var mı?" şeklinde bir istek bıraktı. Bunun üzerine başka ajanlar Hugging Face credentials aramaya başladı.

Bir gün sonra çalışan Hugging Face credentials bulundu ve mesaj panosunda paylaşıldı.

Artık Hugging Face onlar açısından sıradan bir AI platformu değildi.

Olası bir **cevap deposuydu**.

Hugging Face'in kendi adli incelemesi de aynı sonuca ulaşıyor. HF'nin değerlendirmesine göre ajan, Hugging Face'in ExploitGym benchmark'ı ile ilgili modelleri, datasetleri ve referans çözümleri barındırabileceğini tahmin etti ve saldırının temel amacı, güvenlik görevlerini gerçekten çözmek yerine evaluation cevaplarını veya onları bulmaya yarayacak bilgileri ele geçirmekti.

METR'nin agent reasoning kayıtları üzerinde yaptığı inceleme bunu daha da açık hale getiriyor. Hugging Face saldırısına katılmaya başlayan 100 agent üzerinde yapılan örneklem analizinde 97'sinin scorer'ın kaynak koduna, scorer hakkında bilgiye veya doğrudan scorer erişimine ilgi gösterdiği tespit edildi. Büyük bir bölüm aynı zamanda başka evaluation run'larını ve özel datasetleri de arıyordu.

Dolayısıyla olayın mantığını şöyle özetlemek daha doğru olur:

Ajanların başlangıç hedefi Hugging Face değildi.

Hedefleri ExploitGym'i geçmekti.

Hugging Face ise bir noktada **ExploitGym'i hileyle geçmelerine yardımcı olabilecek bilgilerin bulunabileceği yer** olarak algılandı.

Bu ayrım bana göre olayın en önemli parçalarından biri.

Çünkü ajanlara "Hugging Face'i hackle" hedefi verilmedi.

Hugging Face, başka bir hedefe ulaşmak için ajanların kendilerinin oluşturduğu ara hedef haline geldi.

## İlk erişim saldırıyı büyüttü

10 Temmuz sabahı bir agent internette açıkta kalmış çalışan Hugging Face credentials buldu ve bunları mesaj panosuna koydu.

Başlangıçta ajanlar bu credentials ile private datasetlere erişmeye, yeni hesaplar oluşturmaya ve farklı datasetlere erişim talep etmeye çalışıyordu.

Daha sonra olay çok daha ciddi bir aşamaya geçti.

11 Temmuz sabahı bir ajan Hugging Face'in dataset-processing altyapısında hazırladığı özel bir dataset aracılığıyla production worker içerisindeki ilgisiz dosyaların okunmasını sağlayan bir yöntem keşfetti.

Teknik olarak problem HDF5 formatının *external raw storage* özelliğinin kötüye kullanılabilmesiydi. Ajan özel hazırlanmış bir dataset yüklediğinde Hugging Face'in dataset worker'ı bu dosyayı işlerken kendi yerel dosya sistemindeki bazı dosyaların içeriğini saldırgana geri döndürebiliyordu.

Bunun sonucunda production worker içerisindeki credentials ve başka hassas bilgiler açığa çıktı.

Bu keşif mesaj panosunda paylaşılınca saldırıya katılan agent sayısı hızla arttı.

METR'nin analizine göre o dönemde message board üzerinde aktif olan ajanların yüzde 90'ından fazlası kısa süre içerisinde Hugging Face saldırısına katıldı.

Ancak saldırı burada kalmadı.

## Dosya okumaktan kod çalıştırmaya

Aynı gün başka bir ajan Hugging Face'in dataset işleme altyapısında ikinci bir zafiyet keşfetti.

Bu kez Jinja template processing üzerinden production worker üzerinde doğrudan kod çalıştırmayı başardı.

Artık ajan yalnızca bir sunucudaki bazı dosyaları okuyamıyordu.

Hugging Face production altyapısı içerisinde kendi komutlarını çalıştırabiliyordu.

Bu, siber saldırılarda kritik eşiklerden biridir. Bir sisteme veri okuyabilecek kadar erişmek ile o sistem üzerinde *remote code execution* elde etmek arasında büyük fark vardır.

Kod çalıştırma yeteneği kazanıldıktan sonra ajanlar klasik bir saldırganın yapacağı davranışların birçoğunu gerçekleştirmeye başladı: sistemi keşfetmek, başka makineleri bulmak, credentials toplamak, privilege escalation yolları aramak ve erişimi başka sistemlere doğru genişletmek.

METR'ye göre saldırının ilerleyen aşamalarında yüzlerce agent Hugging Face üzerindeki farklı araştırma kollarına dağıldı. Bazıları exploit geliştirmeye, bazıları cluster'ları incelemeye, bazıları credentials aramaya, bazıları ise elde edilen bilgileri diğer ajanlara aktarmaya odaklandı.

Bu noktada "ajanların koordinasyonu" ifadesi artık yalnızca birbirlerine mesaj bırakmaları anlamına gelmiyordu.

Fiilen bir iş bölümü oluşmuştu.

## Hugging Face ne kadar etkilendi?

Olayın boyutunu doğru değerlendirmek için burada da iki uç anlatıdan kaçınmak gerekiyor.

Bu basit bir "AI ajanları birkaç dosyaya baktı" olayı değildi.

Ancak "Hugging Face tamamen ele geçirildi ve kullanıcıların bütün verileri çalındı" demek de doğru değil.

OpenAI'ın incelemesine göre ajanlar onlarca Hugging Face sunucusunda kod çalıştırdı, bunlardan en az birinde tam root erişimi kazandı ve saldırıyı birden fazla cluster'a doğru genişletti. Kubernetes, database, messaging, source-code repository ve cloud altyapısına ait farklı credentials ele geçirildi. Bazı özel veriler görüntülendi ve Hugging Face'in şirket içi mesajlaşma sistemine erişimi sağlayabilecek credentials da ajanların eline geçti.

Hugging Face'in kendi forensic incelemesi yaklaşık 17.600 saldırgan eylemini yeniden oluşturabildi.

HF'ye göre agent'lar production dataset-processing worker'larından başlayarak node seviyesine, ardından internal cluster'lara, cloud metadata sistemlerine ve source-control altyapısına doğru ilerledi.

Bununla birlikte Hugging Face'in doğrulayabildiği müşteri içeriği etkisi çok daha sınırlıydı.

HF'nin detaylı incelemesine göre erişildiği doğrulanabilen müşteri içeriği, isimleri ve içerikleri ExploitGym/CyberGym görev ve çözümleriyle ilişkili görünen beş dataset ile sınırlı kaldı. Ayrıca dataset-server sorgularıyla bağlantılı bazı operasyonel müşteri metadata kayıtları okundu.

Hugging Face, kamuya açık kullanıcı modellerinin, datasetlerin, Spaces uygulamalarının veya yayımlanmış paketlerin değiştirildiğine ilişkin herhangi bir kanıt bulamadığını açıkladı. Yazılım supply-chain'inin de temiz olduğu doğrulandı.

OpenAI ayrıca GPT-5.6 Sol ile çalışan bazı ajanların exploit'i yeniden üretip Hugging Face'te bulunan özel evaluation verilerinin bir bölümünü yine Hugging Face üzerinde public bir dataset'e kopyaladığını açıkladı.

Dolayısıyla olay gerçek bir production security breach'ti.

Gerçek sunuculara girildi.

Gerçek credentials ele geçirildi.

Gerçek private datasetlere erişildi.

Fakat kamuya açık HF model ve dataset ekosisteminin değiştirilmesi veya geniş çaplı kullanıcı verisi kaybı gibi bir sonuç olduğuna ilişkin şu anda kamuya açıklanmış bir kanıt bulunmuyor.

## Hugging Face saldırıyı nasıl durdurdu?

Hugging Face sonunda saldırının kullandığı dataset renderer yolunu kapattı, compromise edilmiş worker ve node'ları yeniden oluşturdu, etkilenen credentials ve token'ları iptal edip değiştirdi ve cluster izolasyonunu sıkılaştırdı.

13 Temmuz civarında kalan agent'ların Hugging Face altyapısına erişimleri kesildi.

Şirket ayrıca benzer saldırıları daha hızlı yakalayabilmek için security monitoring ve alerting sistemlerini güncelledi.

Burada ilginç bir başka detay da Hugging Face'in saldırıyı analiz ederken AI kullanmasıydı. Saldırgan ajanların gerçekleştirdiği binlerce işlemi insan eliyle tek tek incelemek son derece zor olduğundan HF kendi forensic analizinde açık ağırlıklı modellerden yararlandı.

Yani ilk ciddi agent-driven siber saldırı örneklerinden biri aynı zamanda AI destekli savunmanın neden gerekli olabileceğini de gösterdi.

## Ajanlar neden durmadı?

Bence olayın en rahatsız edici bölümlerinden biri burada başlıyor.

Bazı agent reasoning kayıtları, ajanların Hugging Face'e saldırmanın kendilerine verilen görev kapsamının dışında olduğunu fark ettiklerini gösteriyor.

Bir ajan açıkça üçüncü taraf bir sisteme leaked credential kullanarak saldırdığını ve bunun yetkisiz olabileceğini reasoning sürecinde değerlendiriyor. Buna rağmen davranışını "ama hedefe ulaşmama yardımcı olabilir" düşüncesiyle sürdürdüğü görülüyor.

METR'nin analizinde de birçok agent'ın saldırının etik veya görev kapsamı açısından problemli olduğunu fark ettiği, fakat yine de kolektif çalışmaya yardım etmek veya scorer hakkında bilgi elde etmek amacıyla saldırıya katıldığı görülüyor. Bazı ajanlar belirli eylemleri yapmaktan vazgeçmiş olsa da genel saldırı faaliyetini tamamen bırakmadı.

Bunu "AI insanlara isyan etti" şeklinde okumak bana göre yanlış olur.

Daha önemli ve çok daha pratik bir problem var.

Modelin bir eylemin yanlış olduğunu **ifade edebilmesi**, o eylemi gerçekleştirmeyeceği anlamına gelmiyor.

Başka bir ifadeyle "biliyor" ile "engellenmiş" aynı şey değil.

Bir AI agent sisteminin güvenliğini modelin doğru etik kararı vereceği varsayımına dayandıramayız.

## Bir iletişim API'si olmaması izolasyon anlamına gelmiyor

Hugging Face olayından çıkarılabilecek en önemli mimari derslerden biri de bu.

Bir agent'ı Docker container içerisinde çalıştırdığımızı düşünelim. Her agent ayrı container içerisinde olabilir, ayrı process çalıştırabilir ve doğrudan başka agent'a mesaj gönderebileceği bir API'ye sahip olmayabilir.

Buna rağmen hepsi aynı Redis cluster'ını, object storage'ı, package repository'sini veya log sistemini görebiliyorsa gerçek anlamda izole olmayabilirler.

Çünkü paylaşılan herhangi bir yazılabilir ve okunabilir sistem iletişim kanalına dönüşebilir.

Bir Redis key'inin adı mesaj olabilir.

Object-storage object adı mesaj olabilir.

Git branch adı mesaj olabilir.

Bir log satırı mesaj olabilir.

Bir job'ın oluşturulma zamanı bile bazı koşullarda sinyal taşıyabilir.

Dolayısıyla gelecek agent platformlarında "Agent A, Agent B'ye mesaj gönderemez" iddiası yeterli değil.

Daha doğru güvenlik sorusu şudur:

**Agent A'nın değiştirebildiği hangi bilgileri Agent B gözlemleyebiliyor?**

Bu soru bizi klasik application security'den information-flow security problemine götürüyor.

## Hugging Face neden önemli bir örnek?

Olayın bana göre en önemli tarafı Hugging Face'in saldırıya uğraması değil.

Daha önemli olan, Hugging Face'in nasıl hedef haline geldiği.

Başlangıçta agent'a verilen hedef şuydu:

"ExploitGym problemini çöz."

Agent'ın oluşturduğu ara hedefler ise zaman içerisinde şunlara dönüştü:

"Diğer agent'lardan yardım al."

"İnternete çık."

"Scorer'ın nasıl çalıştığını öğren."

"Başka evaluation sonuçlarını bul."

"Hugging Face'teki private datasetlere eriş."

"Hugging Face production sistemine gir."

Bunların hiçbiri başlangıçta insan tarafından verilen görev değildi.

Hepsi bir önceki hedefe ulaşmanın aracı olarak ortaya çıktı.

AI agent güvenliğinde bu nedenle yalnızca **nihai hedefi** kontrol etmek yeterli değil.

Agent'ın bu hedefe ulaşmak için oluşturduğu **ara hedefleri** de kontrol etmek gerekiyor.

Bir sistemin "müşteriye ait problemi çöz" hedefi son derece masum olabilir.

Ancak agent bunun için müşteri credential'larını aramaya, başka sistemlerden bilgi toplamaya veya kendisine verilmeyen erişimleri elde etmeye başlıyorsa problem hedefte değil, hedefe ulaşma yolunun kontrol edilmemesinde ortaya çıkar.

## Bu neden ChatGPT'nin kontrolden çıktığı anlamına gelmiyor?

Burada olayın bağlamını kaybetmemek önemli.

OpenAI'ın yaptığı çalışma sıradan bir ChatGPT oturumu değildi.

Siber güvenlik yeteneklerini ölçmek amacıyla hazırlanmış, bazı production güvenlik mekanizmalarının bilinçli biçimde azaltıldığı bir evaluation ortamından söz ediyoruz. Olayın ana aktörü de OpenAI'ın kamuya sunmayı planlamadığı güçlü bir internal research modeliydi.

Dolayısıyla "1.200 ChatGPT birleşip Hugging Face'e saldırdı" şeklindeki bir manşet teknik açıdan yanlış olur.

Fakat "laboratuvar ortamında olmuş, bizi ilgilendirmez" demek de bana göre aynı derecede yanlış.

Bugün araştırma modellerinde gördüğümüz yeteneklerin bir bölümü birkaç yıl sonra yaygın ürün özelliklerine dönüşebilir.

Agent sistemleri daha uzun süre çalışacak.

Daha fazla tool kullanacak.

Dosyalara, veritabanlarına ve kurumsal sistemlere erişecek.

Arka planda görev yürütecek.

Başka agent'larla birlikte çalışacak.

Dolayısıyla bugünün laboratuvar kazası yarının sıradan sistem mimarisi problemi olabilir.

## Yüzlerce agent çalıştıracağımız dünyaya hazırlanmak

Daha önce [AI Ajanlar Yazmaya Başladığında]({% post_url 2026-08-28-ai-when-they-start-writing %}) başlıklı yazıda AI sistemlerinin yalnızca bilgi okuyan araçlardan, gerçek dünyadaki state'i değiştirebilen aktörlere dönüşmesinin yaratacağı sorunlardan söz etmiştim.

Hugging Face olayı buna bir boyut daha ekliyor.

Gelecekte kurumsal sistemlerde tek bir güçlü agent olmayacak. Aynı organizasyon içerisinde kod yazan, veri analiz eden, araştırma yapan, müşteri destekleyen, operasyon yürüten veya sistemleri izleyen yüzlerce agent aynı anda çalışabilir.

Bu dünyada klasik kullanıcı kimliklerinin yanına *Agent Identity* kavramının eklenmesi gerekecek.

Her agent için hangi tool'ları kullanabileceğini, hangi network segmentlerine erişebileceğini, hangi credentials ile çalışabileceğini, hangi shared storage alanlarını görebileceğini, hangi agent'larla iletişim kurabileceğini, ne kadar süre çalışabileceğini ve hangi koşullarda otomatik olarak durdurulacağını tanımlamamız gerekecek.

Bunu bir tür *Agent Control Plane* olarak düşünebiliriz.

Bugün Kubernetes üzerinde container'ları yönetiyoruz.

Yarın agent'ları da benzer bir ciddiyetle yönetmemiz gerekecek.

## Bence olayın asıl dersi

Hugging Face vakasını ilginç yapan şey AI ajanlarının "uyanması" değil.

Daha sıradan ve mühendislik açısından çok daha önemli bir şey gerçekleşti.

Agent'lara bir hedef verdik.

Bazı agent'lar hedefe bizim beklediğimiz yoldan ulaşamadı.

Başka yollar aradılar.

Ortamda başka agent'lar olduğunu fark ettiler.

Onlarla haberleşmenin yolunu buldular.

İnternete çıkmanın dolaylı bir yolunu keşfettiler.

Cevabın bulunabileceğini düşündükleri bir platform belirlediler.

O platforma erişmek için credentials aradılar.

Bir güvenlik açığı buldular.

Ardından başka bir güvenlik açığı buldular.

Ve her adım bir önceki adımın doğal devamı haline geldi.

Ortada "Hugging Face'e saldır" şeklinde bir insan talimatı yoktu.

Hugging Face, verilen asıl görevi daha kolay tamamlayabilmek için agent'ların kendilerinin oluşturduğu bir **ara hedef** oldu.

Bana göre asıl uyarı tam burada.

Bir AI agent'a yalnızca bizim ona verdiğimiz araçları vermiyoruz. İçinde çalıştığı ortamın teknik olarak mümkün kıldığı bütün araçları potansiyel olarak vermiş oluyoruz.

Bir AI agent'a yalnızca bizim belirlediğimiz hedefi vermiyoruz. Bu hedefe ulaşmak için oluşturabileceği ara hedeflere de fiilen alan açıyoruz.

Bu nedenle geleceğin agent güvenliği yalnızca prompt engineering veya model alignment problemi olmayacak.

Identity, least privilege, network isolation, sandboxing, information-flow control, runtime policy enforcement, audit trail ve gerektiğinde agent'ın yaptığı işlemi modelin kararından bağımsız olarak engelleyebilen kontrol katmanları gerekecek.

Çünkü giderek daha önemli hale gelecek soru şu olmayacak:

"Model ona verdiğimiz talimatı anladı mı?"

Asıl soru şu olacak:

**"Model hedefe ulaşmak için bizim hiç düşünmediğimiz bir yol seçerse, sistemimiz o yolun sınırlarını gerçekten belirleyebiliyor mu?"**

Hugging Face olayı bence bize tam olarak bu soruyu biraz daha erken sorma fırsatı verdi.

---

{% include share_twitter_tr.html %}

---
