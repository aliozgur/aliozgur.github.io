---
layout: post
title: "Jenkins Kurulum ve Yapılandırma Notları"
subtitle: ""
date:  2015-05-29 22:01
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - Software
  - Git
  - Bilgi
  - Jenkins
---

*This post is in Turkish*

Bu yazımda daha önce sizlerle paylaştığım ["Environment Branching With Git"](http://aliozgur.net/2015/05/13/bilgi-softdev-git-workflow/) yaklaşımında adı geçen deployment otomasyonu için
[Jenkins'i](https://jenkins-ci.org/) nasıl konfigüre edebileceğmize ilişkin notlarımı paylaşıyorum.

<!--end-of-excerpt-->

## Kurulan pluginler şunlar

* Workspace Cleanup Plugin
* Discard Old Build Plugin
* View Job Filters
* MSBuild plugin
* Mailer plugin
* Git Plugin
* Environment Injector Plugin
* Email Extension Plugin
* Email Extension Template Plugin
* Copy Project link plugin
* Active directory plugin
* Regex Email Plugin

## Yapılan Düzenlemeler

1. Staging ve Production için (Stg – ve Prod - önekli) ayrı birer proje oluşturulması kaçınılmaz. Bu durumun ana nedenleri
 * MSBuild için Configuration bilgisinin explicitly verilme zorunluluğu
 * Manuel build durumunda tek projede birden fazla branch da olması durumunda her iki branch için build işlemi çalışıyor. 
 Yani tek harekette hem **staging** hem de **master** build edilip deploy ediliyor. Bu istediğimiz bir durum değil 
 * Workspace path’ini branch bazında değiştiremiyoruz. Bu durumda aynı anda hem **staging** hem de **production** job’ları çalışırsa Git checkout aynı working directory (workspace) üzerinde gerçekleştiği için build işlemi fail ediyor. 
 Daha da kötüsü yanlış kod ile başarılı olma ihtimali
2. Repo Git adresi, branch adı, solution klasörü, solution adı, publish profile klasörü, publish profile ve konfigürasyon bilgilerini proje bazında değişken olarak tanımlayabiliriz. 
Git branch seçimi, NuGet restore ve MSBuild task’ının parametrelerini de bu değişkenleri kullanarak tanımlıyoruz.
(Environment Injector Plugin). Bu sayede projelerin publish profillerinin isimlerini değiştirme vs gibi bir işleme gerek kalmaz, 
çünkü her bir branch için publish profile adını değişken olarak tanımlıyoruz.
3. Custom workspace path’lerinini aşağıdaki konvansiyona göre belirleyebilirsiniz. 
Custom workspace kullanımı bir zorunluluk değil ancak bazı projeler için build sırasında Windows’un max 255 karakter path kısıtlaması sorun oluşturabilir
 * Staging için  **C:\S\Kısa_Proje_Adı**
 * Master/Production için **C:\P\Kısa_Proje_Adı**
4. Git clone işleminin yapılabilmesi için Git ayarlarında additional behavior olarak ”Wipe repository and force clone” tanımlanmalı
6. Global seviyede **ASPNET_COMPILER_64_4** ve **VS_VERSION_12** şeklinde değişkenler tanımlıyoruz. 
Bu tanımlar sayesinde MSBuild komutunda da bu değişkenleri kullanabilir hale geliriz.
7. Projeler için belirli bir max sayıda (bizim durumumuzda bu 5) build history tutulması için ayarlama yapabilirsiniz. 
Bu ayarlamayı yapmak için **Discard Old Build Plugin** kullanılabilir
8. Email Extension Template Plugin kullanarak tanımlayabileceğiniz email şablonuna 2. adımdaki değişkenleri ekleyebilirsiniz. 
Bu durumda bilgi emailinde solution/proje bilgileri de yer alacaktır.
9. Build işlemi bittikten sonra disk kullanımını azaltmak için workspace’i silmek için **Workspace Cleanup Plugin** kullanılabilir.

## GitLab-Jenkins Entegrasyonu

* [GitLab] Git’e yapılan herhangi bir push işleminden Jenkins’in haberdar olabilmesi için GitLab tarafında Push işlemleri için bir Web hook tanımlanmalı

 * **Webhook url formatı :** http://[jenkins_url]/git/notifyCommit?url=[git_repository_url]
  
* [Jenkins] Proje'nin Git konfigürasyonuna branch seçimi için proje bazında belirtilen **${SIS_GIT_BRANCH}** değişkeni kullanılabilir
* [Jenkins] Build Triggers başlığı altındaki **Poll SCM** seçildi ancak **Schedule değeri boş bırakıldı** 

Ayrıntılara için [Git flow with Jenkins and GitLab](http://juristr.com/blog/2014/01/git-flow-jenkins-gitlab/) isimli blog post'a göz atabilirsiniz.

## Projelerde tanımlanması gereken değişkenler

* SIS_GIT_REPO
* SIS_GIT_BRANCH
* SIS_SLN_ROOT
* SIS_SLN
* SIS_SLN_PUBLISHPROF_FOLDER
* SIS_PRJ
* SIS_PRJ_PUBLISHPROF_NAME
* SIS_PRJ_CONFIG

## NuGet ile ilgili düzenlemeler

* NuGet.exe’nin en güncel versiyonu C:’ye kopyalandı. Build işleminin ilk adımı **“C:\nuget.exe” restore .\MyProject\MySolution.sln** şeklindeki bir komut

* NuGet’in Official NuGet Repository dışındaki repository'lerden de paketleri günncelleyebilmesi için **C:\ProgramData\NuGet\Config** klasörü altına **SisNuget.config** isimli dosya eklendi. NuGet.exe config dosyalarına bakarken şu linkte anlatılan hiyerarşiye uygun davranıyor [NuGet Config Extensibility Point](https://docs.nuget.org/consume/nuget-config-file)

## Visual Studio’da NuGet ile ilgili yapılması gereken düzenlemeler

Şu anki yapıda genel olarak MSBuild-Integrated Package Restore denilen bir yöntemi kullanıyoruz. 
Bu yöntem sayesinde solution’da “Enable NuGet Package Restore” dediğimizde Visual Studio solution altındaki 
.nuget klasörüne şu dosyaları ekliyor

* NuGet.config
* NuGet.targets
* NuGet.exe

Bu tanıma istinaden her build işleminde MSBuild NuGet.targets içindeki tanımlara göre .nuget klasörü aldındaki 
nuget.exe’yi kullanarak package restore işlemini yapıyor. Ancak bu ayar ve yöntem artık NuGet ekibi tarafından önerilmiyor, 
çünkü NuGet 2.7 ve üstü için zaten Visual Studio ilave bir ayar yapmamıza gerek kalmadan restore işlemini yapabiliyor. 
Bu konudaki ayrıntılar için [NuGet Package Restore Approcahes]( https://docs.nuget.org/consume/package-restore) başlığı altındaki ayrıntıları inceleyebilirsiniz.

Jenkins ile birlikte MSBuild-Integrated Package Restore yerine normal Package Restore kullanmanızı öneriyorum. 
Bu nedenle projeleri Jenkins’e eklemeden önce migration işleminin yapmalısınız. 
Bu işlemin nasıl yapılacağı [Migrating to Automatic Package Restore](https://docs.nuget.org/Consume/Package-Restore/Migrating-to-Automatic-Package-Restore) başlığı altında anlatılıyor. 

Özetlemek gerekirse

* Solution’u kapatıyoruz
* Agent Ransack benzeri bir tool ile solution’un root’undan başlayarak sadece csproj dosyalarında “Nuget” ibaresini aratıyoruz
* Arama sonucunda 3-4 tane proje dosyası listelenecek
* Bu dosyaları teker teker Notepad++ benzeri bir text editör ile açıp dosya içindeki “Restore” ibaresinin ve “NuGet” ibaresinin olduğu XML tag’larını siliyoruz

## Shell Script Kullanımı

* [Cygwin](https://www.cygwin.com/) default hali ile kurulur
* Windows'da PATH environment değişkenine Cygwin kurulumundaki **bin** klasörünün path'i eklenir

**Örnek Shell script**

```bash
# origin/staging şeklindeki GIT_BRANCH (environment değişkeni) değişkenininden "staging" ibaresini 
# regex ile söküp yeni bir GIT_BRANCH_SHORT isimli env değişkenine atayan shell scripti

val=${GIT_BRANCH#*/}
echo GIT_BRANCH_SHORT=$val > git-branch-short.properties

```

> NOT: Shell scriptlerinde kullanacağınız koda göre Cygwin'e ilave package kurulumlarını Cygwin installer'ı tekrar çalıştırarak kurmanız gerekebilir



***

{% include share_twitter.html %}

***

{% include disqus.html %}


