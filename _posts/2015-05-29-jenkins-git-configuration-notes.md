---
layout: post
title: "Jenkins Kurulum ve Yapılandırma Notları"
subtitle: "Environment Branching Git Flow için Jenkins konfigürasyonu"
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
 * Manuel build durumunda tek projede birden fazla branch da olması durumunda her iki branch için build işlemi çalışıyor. Yani tek harekette hem staging hem de master build edilip deploy ediliyor. Bu istediğimiz bir durum değil 
 * Workspace path’ini branch bazında değiştiremiyoruz. Bu durumda aynı anda hem stg hem de prod job’ları çalışırsa Git checkout aynı working directory (workspace) üzerinde gerçekleştiği için build işlemi fail ediyor. Daha da kötüsü yanlış kod ile başarılı olma ihtimali
2. Önceki adımda yapılan ayrım ile birlikte bash ile yaptığımız branch belirleme build adımını kaldırdım
3. Repo Git adresi, branch adı, solution folder’ı, solution adı, publish profile folder’ı, publish profile ve konfigürasyon bilgilerini proje bazında değişken olarak tanımladım. Git branch seçimi, NuGet restore ve MS Build task’ının parametrelerini de bu değişkenleri kullanarak tanımladım. (EnvInject plugini ile). Bu sayede projelerin publish profillerinin isimlerini değiştirme vs gibi bir işleme gerek kalmadı, çünkü her bir branch için publish profile adını değişken olarak tanımlıyoruz.
4. Custom workspace path’lerinini aşağıdaki konvansiyona göre belirlenmesi gerektiğine karar verdim. Bunun nedeni bazı projelerde build sırasında Windows’un max 255 karakter path sorunu
 * Staging : C:\S\[Kısa Proje Adı]
 * Production : C:\P\[Kısa Proje Adı]
5. Git clone işleminin yapılabilmesi için Git ayarlarında additional behavior olarak ”Wipeout repository and force clone” ayarlaması yapıldı
6. Proje kopyalama işlemini kolay yapmak için  ilave bir plugin kurdum
7. Global seviyede ASPNET_COMPILER_64_4 ve VS_VERSION_12 şeklinde değişkenler tanımladım. Bu işlem sayesinde MSBuild komutunda da bu değişkenleri kullanabilir hale geldik
8. Projeler için max 5 build history tutulması için ayarlama yaptım. Bu ayarlamayı yapmak için ilave bir plugin kurdum.
9. Ext-email plugini ile gelen template’e 3. Adımdaki proje bazındaki değişkenleri ekledim. Bu durumda bilgi emailinde solution/proje bilgileri de geliyor artık
10. Build işlemi bittikten sonra disk kullanımını azaltmak için workspace’i silen bir plugin kuruldu. 

## GitLab-Jenkins Entegrasyonu

* [GitLab] Git’e yapılan herhangi bir push işleminden Jenkins’in haberdar olabilmesi için GitLab tarafında Push işlemleri için bir Web hook tanımlandı

 * **Webhook url formatı :** http://[jenkins_url]/git/notifyCommit?url=[git_repository_url]
  
* [Jenkins] Proje'nin SCM/Git konfigürasyonuna branch seçimi proje bazında belirtilen **${SIS_GIT_BRANCH}** değişkeni ile yapılacak şekilde tanım yapıldı
* [Jenkins] Build Triggers başlığı altındaki **Poll SCM** seçildi ancak **Schedule değeri boş bırakıldı** 

Ayrıntılara için [Git flow with Jenkins and GitLab](http://juristr.com/blog/2014/01/git-flow-jenkins-gitlab/) isimli blog post'a göz atabilirsiniz.

## Tüm projelerde tanımlanması gereken proje/solution değişkenleri

* SIS_GIT_REPO
* SIS_GIT_BRANCH
* SIS_SLN_ROOT
* SIS_SLN
* SIS_SLN_PUBLISHPROF_FOLDER
* SIS_PRJ
* SIS_PRJ_PUBLISHPROF_NAME
* SIS_PRJ_CONFIG

## NuGet ile ilgili düzenlemeler
* NuGet.exe’nin son versiyonu C:’ye kopyalandı. Build işleminin ilk adımı “C:\nugetexe” restore <Solution> şeklindeki bir komut

* NuGet’in SIS NuGet repository’sini tanıyabilmesi için C:\ProgramData\NuGet\Config klasörü altına SisNuget.config isimli dosya eklendi. NuGet.exe config dosyalarına bakarken şu linkte anlatılan hiyerarşiye uygun davranıyor (NuGet Config Extensibility Point](https://docs.nuget.org/consume/nuget-config-file )

## Visual Studio’da NuGet ile ilgili yapılması gereken düzenlemeler şöyle.
Şu anki yapıda biz MSBuild-Integrated Package Restore denilen bir yöntemi kullanıyoruz. Bu yöntem ile solution’da “Enable Package Restore” dediğimiz anda VS solution altındaki .nuget klasörüne şu dosyaları ekliyor

* NuGet.config
* NuGet.targets
* NuGet.exe

Bu tanıma istinaden her build işleminde MSBuild NuGet.targets içindeki tanımlara göre .nuget klasörü aldındaki nuget.exe’yi kullanarak package restore işlemini yapıyor. Ancak bu ayar ve yöntem artık NuGet ekibi tarafından önerilmiyor, çünkü bu tanımlara gerek kalmadan aslında Visual Studio NuGet 2.7 ve üstü için zaten restore işlemini yapabiliyor. Bu konudaki ayrıntılar için [NuGet Package Restore Approcahes]( https://docs.nuget.org/consume/package-restore) başlığı altındaki ayrıntıları inceleyebilirsiniz.

Jenkins ile birlikte MSBuild-Integrated Package Restore yerine bizim de normal Package Restore kullanır hale gelmemiz lazım. Bu nedenle projeleri Jenkins’e eklemeden önce migration işleminin yapılması lazım. Bu işlemin nasıl yapılacağı  [Migrating to Automatic Package Restore]( https://docs.nuget.org/Consume/Package-Restore/Migrating-to-Automatic-Package-Restore) başlığı altında anlatılıyor. Özetlemek gerekirse

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

**NOT: S**hell scriptlerinde kullanacağınız koda göre Cygwin'e ilave package kurulumlarını Cygwin installer'ı tekrar çalıştırarak kurmanız gerekebilir

