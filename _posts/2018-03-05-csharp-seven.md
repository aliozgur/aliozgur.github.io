---
layout: post
title: "C# 7.0 Yeni Dil Özellikleri"
subtitle: "Daha Basit ve Daha Yüksek Performanslı Kod"
date:  2018-03-05 18:31
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: false
tags: 
  - C#
  - 7.0
  - 7.1
  - 7.2
  - .NET 
  - dotnet
  - Programlama
 
---

İyi bir programcının diller, platformlar, kütüphaneler, metodolojiler veya sembol olmuş kişiler konusunda fanatik olmaması gerektiğini düşünüyorum. Profesyonel kariyerimin ilk gününden bugüne bu fanatikliği sergilediğini düşündüğüm tüm programcı dostlarım ile bu konuyu her platformda sonuna kadar, bazen de aşırı hararetli bir şekilde, tartışmaktan ve bu konudaki görüşlerimi paylaşmaktan çekinmedim ve yorulmadım. Ancak sevgili Microsoft C# için yayınladığı her yeni dil özelliği ile beni de fanatikliğin sınırlarında dolaştırmayı başarıyor. Her yeni versiyon ile birlikte  kafamda "C# sen ne güzel bir programlama dilisin!" şeklinde bir ses duyuyorum ve açıkçası bunu haykırmamak için kendimi zor tutuyorum. Ancak, C# için beslediğim bu duyguların fanatiklik boyutunda olmadığını rahatlıkla söyleyebilirim. 

![C# 7.0]({{ root.url }}/media/csharp7.png)

<!--end-of-excerpt-->

Herhangi bir iş için seçilecek programlama dilinin fanatizmden önce aşağıdaki ölçütler dikkate alınarak seçilmesi gerektiğini düşünüyorum;

* Seçilen dil yapılacak işin doğası ile uyumlu mu?
* Varolan bir ekiple ilerleniyorsa ekibin eski alışkanlıkları nelerdir?
* İş gücü piyasasında seçilen dilin tercih durumu nasıl?
* Dilin arkasında kim var ve bu şirket, kurum veya kişinin desteğini devam etmeme ihtimali nedir?
* Benzer projelerde hangi diller tercih edilmiş?
* Dilin standard kütüphanesine ilave olarak açık kaynak veya paralı kütüphane ekosistemi var mı?
* Dilin öğrenilmesi için gereken zaman maliyeti nedir?
* Dilin en iyi desteklediği yapılara ilave olarak çok da iyi başaramadığı yapılar ayağımıza dolanabilir mi? 
* Geliştirme ve çalıştırma platformu yapılacak iş ve ekibin konfigürasyonu ile uyumlu mu?

Tüm bu sorular için olumlu cevap alabileceğimiz bir programlama dilin pratikte var olmadığını rahatlıkla söyleyebiliriz bu nedenle C# da ne kadar güzel bir dil olursa olsun tüm işlerim için ilk tercihim olamaz. 

Programlama dilleri ve fanatizm konusunda genel görüşümü kısaca özetledikten sonra gelin şimdi C# 7.0 ile birlikte Microsoft'un bizlere sunduğu yeni yapıları teker teker ele alalım. 

# Bu Yazı Neden Yazıldı?

Bu yazı, İstanbul Bilgi Üniversitesi Yazılım Geliştirme Ekibine önümüzdeki Cuma (09 Mart 2018) veya bir sonraki hafta Cuma günü yapmayı planladığım aşağıdaki sunuma eşlik etmesi amacıyla yazıldı. Sunumda en az bir, en fazla 3 sayfa ve mümkünse kısa kod örnekleri ile görselleştirilen dil özelliklerini bu yazıda biraz daha kapsamlı ve tam örnekler ile aktarmayı hedefliyorum.

<div class="embed-responsive embed-responsive-16by9">
<iframe id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://prezi.com/embed/lnmx5jtyim7k/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI0amliUjN1VWVFVzZ4THlnL1RqQWNEQzVnPT0&amp;landing_sign=olU_ieQo3iUEEvKjARERqzOHPAge87SmALvLtPGyPIE"></iframe>
</div>

# C# 7.0'ın Teması
Microsoft, yayınladığı her majör C# versiyonu için genel bir tema belirliyor ve bu tema çerçevesinde yeni C# dil özelliklerini bizlere sunuyor. C#'ın **Mart 2017**'de yayınlanan 7.0 versiyonun teması aşağıdaki üç konuya odaklanıyor;

* Alışılagelmiş bazı dil yapılarının daha basit kod ile ifade edilebilmesi
* Performans optimizasyonu yapmamıza imkan sağlayacak yapılar
* Mikroservisler ve sunucusuz uygulama (serverless) mimarileri gibi yeni yapılar ile veri alış verişini kolaylaştırmak

Microsoft, yukarıdaki maddeler ile uyumlu dil özelliklerini tasarlayıp geliştirirken C#'ın 5. ve 6. versiyonlarında olduğu gibi 7. versiyonunda da F# programlama dilinde yer alan bazı dil özelliklerini model olarak kullanıyor. Dolayısıyla, F# biliyorsanız veya en azında F#'ı incelediyseniz, C#'a eklenen dil özelliklerinden bazılarını kullanmak sizin için daha kolay olacaktır. Süregelen F# esintilerine ilave olarak Microsoft bundan önceki C# versiyon güncellemelerinden farklı olarak 5,6 ve 7 gibi majör versiyonlara ilave olarak C#'a 7 versiyonu ile birlikte 7.1 ve 7.2 şeklinde minör versiyonlar ile de yeni dil özelliklerini eklemeye devam edecek. Özetle, bir sonraki yeni dil özellikleri için 1-1.5 yıl beklemek zorunda kalmayacağız.

> Bu yazı yazıldığında çoktan C#'ın 7.1 ve 7.2 versiyonları yayınlanmıştı. Başka bir yazı ile veya bu yazıya ekleme yaparak bu minör verisyonlar ile sunulan dil özelliklerini de ilerleyen zamanlarda ele almaya çalışacağım.

# Yeni Neler Var ve Nasıl Kullanırım?

C# 7.0 ile gelen yeni dil özelliklerini bir çırpıda aşağıdaki gibi özetleyebiliriz. 

* Yerinde **out** değişken tanımlayabilme
* **Tuple\<T\>** için yeni söz dizimi 
* **ref** değişkenler ve **ref return**
* Daha yetenekli **switch/case** ve **is operatörü** ile Desen eşleme (Pattern Matching)
* Yerel fonksiyonlar
* **throw** ifadeler ve yeni kullanım alanları
* **Constructor**, **finalizer**, **property getter** ve **setterları** expression olarak tanımlayabilme
* Genelleştirilmiş **async dönüş tipleri**
* Basamak ayracı olarak alt çizgi **( _ )**

Bu özellikleri kullanmak için temel olarak platform bazında aşağıdaki bileşenlere ihtiyacınız olacak.

* Windows'da çalışıyorsanız
    * .NET Framework 4.6+ veya .NET Core 2.x+ SDK ve
    * Visual Studio 2017 veya Visual Studio Code
* Linux'da çalışıyorsanız
    * .NET Core 2.x+ SDK veya Mono 5.0.0+
    * Visual Studio Code
* OSX'de çalışıyorsanız
    * .NET Core 2.x+ SDK veya Mono 5.0.0+
    * Visual Studio for Mac veya Visual Studio Code

Her üç platformda da C# 7.0 özelliklerinin kullanılabilmesi için Roslyn derlyeci platformu paketlerine ve yeni dil özelliklerini içeren NuGet paketlerine ihtiyaç duyulur. Bu NuGet paketlerden bazılar şöyle;

* Microsoft.Net.Compilers 2.0+
* System.ValueTuple 4.3.0+
* System.Threading.Tasks.Extensions

Bu temel gereksinimlere ilave olarak varolan projelerinizin C# 7.0 özelliklerini kullanabilmesi için proje bazında gelişmiş ayarlar kısmından veya json formatındaki proje konfigürasyonlarınızdan (.NET Core) C# versiyonunu değiştirmeniz gerekecek.

### Visual Studio C# Versiyon Seçimi
Öncelikle Solution Explorer penceresinde projenizi seçip context menu'den Properties seçilir. Açılan Özellik formunda Build seçenekleri sayfası seçilir. Bu sayfada en altlardaki Advanced butonuna basılır.

![Visual Studio Project Properties]({{ root.url }}/media/csharp_7_vs1.png)

Açılan gelişmiş proje derleme seçenkleri penceresinden belirli bir C# versiyonu veya en son majör veya minör versiyon şeklinde seçim yapılır.

![Visual Studio Advanced Project Properties]({{ root.url }}/media/csharp_7_vs2.png)

### Visual Studio Code C# Versiyon Seçimi
Visual Studio Code kullanıyorsanız csproj uzantılı dosyanızı veya .NET Core 2.1 öncesi bir .NET Core versiyonu ile oluşturduğunuz bir proje varsa project.json dosyasını açarak aşağıdaki gibi düzenlemeniz gerekir.

![Visual Studio Code csproj]({{ root.url }}/media/csharp_7_vscode.png)

### Visual Studio for Mac C# Versiyon Seçimi
Solution pad'inden projenizi seçip context menu'den Options seçtikten sonra açılan özellik diyaloğundan Build ana grubu altındaki General seçeneklerini seçerek aşağıdaki ekranda işaretlediğim Language Options seçeneklerinden kullanmak istediğiniz C# versiyonunu seçebilirsiniz.

![Visual Studio for Mac Options]({{ root.url }}/media/csharp_7_vsmac.png)

### CI/CD Kullanımı

C# 7.0 projelerinizi Jenkins veya TeamCity gibi CI/CD platformları ile derliyorsanız MSBuild platform araçlarının 15.x versiyonunu agent CI/CD bilgisayarlarınıza kurmanız gerekir. Bu kurulumların ayrıntılarını kullandığınız CI/CD aracına göre araştırıp ayrıntılarını öğrenebilirsiniz.

***

>Konunun pratik olarak çok da işe yaramayan ancak genel kültürümüzü arttıran kısımları ve basit anlamda kurulum vs konularını hallettiğimize göre artık örnek kodlar ile C# 7.0'ın sunduğu katma değerli yeni dil özelliklerini incelemeye başlayabiliriz


# Yerinde **out** değişkenler

C#'ın **out** tanımlayıcısı metodlarımıza **by reference** parametreler geçmemizi sağlar. Value type tipinden parametreler metodlarımıza varsayılan olarak **by value** geçilir, yani metod çağırısı yaptığımız andaki değeri kopyalanarak çağırılan metoda gönderilir. Bunun pratik olarak karşılığını şöyle de ifade edebiliriz; **out** kullanılmadan geçilen value type parametrelerin değerini metod içinde değiştirseniz bile bu değişiklik metodun çağırıldığı noktada görünür değildir. **out** kullanılarak geçilen value type parametrelerin değerini metod içinde değiştirirseniz bu değşiklik metodun çağırıldığı noktada görünürdür. Şimdi gelin normal **out** kullanımını bir örnek ile görelim

```csharp
public static void TestByValue(int deger)
{
    deger = -1;
    Console.WriteLine($"Metod içinde değer {deger}");
}

public static void TestByRef(out int deger)
{
    deger = -1;
    Console.WriteLine($"Metod içinde değer {deger}");
}
```

Bu iki metodu aşağıdaki gibi basit bir kurgu ile test edebiliriz.


```csharp
var deger = 42;

TestByValue(deger);
Console.WriteLine($"By Value metod sonucunda değer {deger}");
// Çıktı : By Value metod sonucunda değer 42

TestByRef(out deger);
Console.WriteLine($"By Ref metod sonucunda değer {deger}");
// Çıktı : By Value metod sonucunda değer -1

Console.ReadLine();
return 0;
```

Yukarıdaki örnek ile **out** tanımlayıcısının nasıl kullanıldığını ve **by reference** ve **by value** metod parametrelerinin tanımlarının nasıl yapıldığını ve etkilerinin ne olduğunu hızlıca ele aldık. 

**TestByRef** metodunu kullanırken **out** ile parametre geçebilmek için öncelikle **deger** isimli değişkeni metod çağırısı öncesinde tanımlamamız gerekiyor, en azında C# 7.0 öncesi için bu şekilde yapılması gerekiyordu. Bu durumda daha izole bir şekilde aşağıdaki gibi gösterebiliriz.

```csharp
// Değişken tanımı
int yeniDeger = 42;

// Değişkenin out ile by reference metod parametresi olarak kullanımı 
TestByRef(out yeniDeger);
Console.WriteLine($"By Ref metod sonucunda değer {yeniDeger}");
// Çıktı : By Value metod sonucunda değer -1

``` 

C# 7.0 ile birlikte metodlara **out** tanımlayıcısı ile **by reference** parametre geçmek için öncesinde bir değişken tanımlamamıza gerek kalmadan aşağıdaki gibi metod parametresi verilirken yerinde **out değişkenler** tanımlayabiliriz.

```csharp
TestByRef(out int yeniDeger);
Console.WriteLine($"By Ref metod sonucunda değer {yeniDeger}");
// Çıktı : By Value metod sonucunda değer -1
```
**TestByRef** metod çağırısının yapıldığı satırdan sonra aynı scope içinde artık **yeniDeger** değişkenini normal bir değişken gibi kullanabiliriz, örneğin **Console.WriteLine** satırındaki kullanım. Yerinde out değişken olan **yeniDeger** değişkenini tanımlarken tipini doğrudan **int** olarak belirtmeden **var** ile tanımlayıp derleyicinin tipi bizim için çıkarsamasına da izin verebilirdik.

```csharp
TestByRef(out var yeniDeger);
Console.WriteLine($"By Ref metod sonucunda değer {yeniDeger}");
// Çıktı : By Value metod sonucunda değer -1
```

Yerinde **out değişkenler** özellikle ```TryParse``` metodlarını kullanımında kodumuzu daha sade hale getirir. Aşağıdaki örnek kod parçası ile bu tür bir kullanımı görebilirsiniz.

```csharp
var girdi = Console.ReadLine();
if (Int32.TryParse(girdi, out var evreninSırrı) && evreninSırrı == 42)
    Console.WriteLine($"Evrenin sırrı {evreninSırrı}");
else
    Console.WriteLine($"Echo : {girdi}");                       
```

# **Tuple\<T\>** İçin Yeni Söz Dizimi

Tuple denilen veri yapısı özellikle yeni bir sınıf tanımlamaya değmeyecek kadar az (ideali 2 veya 3) ancak birden fazla değeri metodlarımızdan sonuç olarak döndürmek için kullanılır. Aşağıdaki **GetPersonInfo** metodu verilen **personId** değerine göre üç değer barındıran ```Tuple<T0,T1,T2>```generic tipinden sonuç döndürür.

```csharp
public static Tuple<string,string,int> GetPersonInfo(int personId)
{
    switch(personId)
    {
        case 1:
            return new Tuple<string, string, int>("Seniha", "Özgür", 1976);   
        case 2:
            return new Tuple<string, string, int>("Ali", "Özgür", 1975);   
        case 3:
            return new Tuple<string, string, int>("Arda", "Özgür", 2006);   
        default:
            return null;
    }
}
```
C# 6 ve önceki versiyonlarda **tuple** değerleri tanımlamak için ```Tuple<T>``` generic tipine ihtiyaç duyulur. ```Tuple<T>``` tipi, ```string```, ```List<T>``` veya ```Dictionary<K,V>``` benzeri bir tiptir ve C#'da yer alan bir dil yapısı değildir. Ayrıca,```Tuple<T>```ile tanımlanan değerler için elemanlarının tipleri dışında elemanlara isim verilmesi mümkün değildir. Bu nedenle ```Tuple<T>``` kullanımı hem suistimale kapı açar hem de kodun okunmasını, anlaşılmasını ve yorumlanmasını zorlaştırır.

Ancak, C# 7.0 ile birlikte ```Tuple<T>```tipine gerek kalmadan, F#'dakine çok benzer bir söz dizimi ile doğrudan **tuple** değerler tanımlayıp kullanabiliriz.Yeni söz diziminde **tuple** değerleri basitçe iki parantez arasında virgül ile ayrılmış tipler veya değerler olarak aşağıdaki formata uygun olarak tanımlayabiliriz.

* Tip tanımı olarak tuple söz dizimi ```(T0,T1,T2,...)```
* Değer olarak tuple söz dizimi ```(D0,D1,D2,...)``` 

Bu kurallara uygun olarak aşağıdaki gibi yeni bir **GetPersonInfoNew** metodu tanımı yapabiliriz.  

```csharp
public static (string, string, int?)GetPersonInfoNew(int personId)
{
    switch (personId)
    {
        case 1:
            return ("Seniha", "Özgür", 1976);
        case 2:
            return ("Ali", "Özgür", 1975);
        case 3:
            return ("Arda", "Özgür", 2006);
        default:
            return (null, null, null);
    }
}
``` 
İlk satırdaki ```(string, string, int?)``` ifadesi ilk iki elemanı ```string``` üçüncü elemanı da ```ìnt?``` olan tuple dönüş tipini ifade eder. 

Metodun içindeki ```("Ali", "Özgür", 1975)``` şeklindeki tanımlar da tuple değerleri ifade eder. 

```Tuple<T>``` tipi ile yapamadığımız ancak yeni söz dizimi ile yapaldiğimiz işlemlerden birisi de tuple değerleri için isim kullanılabilmesidir. Yukarıdaki **GetPersonInfoNew** metodunda tuple elemanlarına aşağıdaki gibi isimler verip dönüş değerlerini de sıraya uyarak ve isimleri kullanarak oluşturabiliriz.

```csharp
public static (string ad, string soyad, int? yil) GetPersonInfoNew(int personId)
{
    switch (personId)
    {
        case 1:
            return (ad:"Seniha", soyad:"Özgür", yil:1976);
        case 2:
            return ("Ali", soyad:"Özgür", 1975);
        case 3:
            return ("Arda", "Özgür", yil:2006);
        default:
            return (null, null, null);
    }
}
```
İlk satırdaki ```(string ad, string soyad, int? yil)``` ifadesi ile ilk elemanının tipinin string ve isminin **ad** olduğu, ikinci elemanın tipinin string ve isminin **soyad** olduğu ve sonuncu elemanın da tipinin int? ve isminin **yil** olduğunu ifade ediyoruz.

Metodun içindeki ```(ad:"Seniha", soyad:"Özgür", yil:1976)``` şeklindeki tuple değeri tanımında da elemanların değerlerini isimlerini kullanarak tanımlıyoruz. Elemanları isimli tuple değerleri oluştururken eleman isimlerinin hepsini kullanmak veya bir kısmını kullanmak opsiyoneldir. Örneğin ```return ("Ali", soyad:"Özgür", 1975)``` şeklinde oluşturduğumuz tuple değerinde sadece ikinci elemanın değerini ismini de kullanarak (soyad) tanımladık.

>**DİKKAT!!!**
>
>Tip tanımında elemanlarına isim verilen tuple değerleri için elemanların sırası değiştirilemez.

>**BİLGİ**
>
>Tip tanımında elemanlarına isim verilen tuple değerleri oluşturulurken sıralama değiştirilmeden tanımdan farklı isimler kullanılırsa C# derleyicisi hata vermez ancak bir uyarı mesajı üretir.

Yeni söz dizimi ile metod dönüş değeri olarak gelen tuple değerlerini aşağıdaki gibi değişkenlere atayabiliriz.

```csharp
var person1 = GetPersonInfo(1);
Console.WriteLine($"Person 1 {person1}");
// Çıktı : Person 1 (Seniha, Özgür, 1976)

(string ad, string soyad, int? yil) = GetPersonInfo(2);
Console.WriteLine($"Person 2 {ad},{soyad},{yil}");
// Çıktı : Person 2 Ali,Özgür,1975

var person3 = (ad: "Arda", soyad: "Özgür", yil: 2006);
Console.WriteLine($"Person 3 {person3}");
// Çıktı : Person 1 (Arda, Özgür, 2006)
```
## Tuple Değerlerin Elemanlarını ( _ ) İle Göz Ardı Etme 

Yukarıdaki örnekte yer alan ```GetPersonInfo(2)``` metod çağırısının döndürdüğü tuple değerin bazı elemanlarının değerlerini göz ardı etmek istersek göz ardı edilecek elemanlar için değişken ismi vermek yerine alt çizgi ( _ ) yer tutucusu kullanılabilir. Bu yer tutucu değere yeni söz diziminde **discard** denilir. Aşağıda tuple dçnüş değerinin sadece **soyad** isimli elemanının değerini söküp diğer elemanların değerlerin _ ile nasıl göz ardı edebileceğimizi görebilirsiniz.

```csharp
(_, string soyad, _) = GetPersonInfo(2);
Console.WriteLine($"Person 2 Soyadı = {soyad}");
// Çıktı : Person 2 Soyadı = Özgür
```

## Sınıflarda Deconstruct metodu 

C# 7.0 ile birlikte tasarladığımız sınıflardan üretilmiş nesnelerin bazı özelliklerini **tuple** değerler olarak sökülerek kullanılmasını sağlamak için sınıflarımıza ```Deconstruct``` isimli bir metodun eklenmesi yeterlidir. ```Deconstruct``` metodu sadece bir konvansiyondur yani C#'a eklenen yeni bir dil özelliği değildir . C# derleyicisi, konvansiyona uygun olarak sınıflarımıza ekleyeceğimiz ```Deconstruct```metodunun tanımına istinaden değerlerin tuple olarak sökülmesini sağlayan kodu derleme anında bizim için otomatik olarak üretir. 

Aşağıdaki gibi bir ```PersonalInfo```sınıfımızın olduğunu varsayalım. Bu sınfımızın en ilginç özelliği iki tane **out** parametresi olan ve herhangi bir sonuç döndürmeyen ```Deconstruct```metodudur.

```csharp
public class PersonalInfo
{
    public int Id
    {
        get;
        set;
    }

    public string Ad
    {
        get;
        set;
    }

    public string Soyad
    {
        get;
        set;	
    }

    public int? Yil
    {
        get;
        set;
    }

    public void Deconstruct(out string ad, out string soyad)
    {
        ad = this.Ad;
        soyad = this.Soyad;
        yil = this.Yil;
    }
}
```

Dönüş tipi ```void```, adı ```Deconstruct``` ve tüm parametreleri ``out``` ile tanımlı bir metod varsa C# derleyicisi bu tipten nesnelerin özelliklerini aşağıdaki gibi sökülerek kullanılabilmesini sağlayan kodu derleme anıda otomatik olarak üretir.  

```csharp
// PersonalInfo sınıfndan ali isimli nesneyi üret
var ali = new PersonalInfo { Id=2, Ad = "Ali", Soyad = "Özgür", Yil = 1976 };

// ali isimli nesneyi tuple değer olarak kullan
(string aliAd, _) = ali;
Console.WriteLine($"Person 2 Ad = {aliAd}");
// Çıktı : Person 2 Soyadı = Özgür
```


***
{% include share_twitter_tr.html %}

***
