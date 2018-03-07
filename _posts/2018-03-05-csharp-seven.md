---
layout: post
title: "C# 7.0 Yeni Dil Özellikleri"
subtitle: "Daha Basit ve Daha Yüksek Performanslı Kod"
date:  2018-03-05 18:31
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - C#
  - 7.0
  - 7.1
  - 7.2
  - .NET 
  - dotnet
  - Programlama
 
---


Microsoft, yayınladığı her majör C# versiyonu için genel bir tema belirliyor ve bu tema çerçevesinde yeni C# dil özelliklerini bizlere sunuyor. C#'ın **Mart 2017**'de yayınlanan 7.0 versiyonun teması aşağıdaki üç konuya odaklanıyor;

* Alışılagelmiş bazı dil yapılarının daha basit kod ile ifade edilebilmesi
* Performans optimizasyonu yapmamıza imkan sağlayacak yapılar
* Mikroservisler ve sunucusuz uygulama (serverless) mimarileri gibi yeni yapılar ile veri alış verişini kolaylaştırmak

Bu yazımda yukarıdaki tema çerçevesinde C# 7.0 ile birlikte gelen yeni dil özelliklerini örnekler ile ele alıyorum.

![C# 7.0]({{ root.url }}/media/csharp7.png)

<!--end-of-excerpt-->


>**DİKKAT !!!**
>
>
>C# 7.0 konusuna gelmeden önce müsadenizle aşağıdaki giriş bölümünde biraz gevezelik yapacağım. Zamanım yok veya gevezelik çekemem diyorsanız doğrudan [Yeni Dil Özellikleri Teması](#yeni-dil-özelliklerinin-teması) kısmından yazıyı okumaya devam edebilirsiniz.
>   

İyi bir programcının diller, platformlar, kütüphaneler, metodolojiler veya sembol olmuş kişiler konusunda fanatik olmaması gerektiğini düşünüyorum. Profesyonel kariyerimin ilk gününden bugüne bu fanatikliği sergilediğini düşündüğüm tüm programcı dostlarım ile bu konuyu her platformda sonuna kadar, bazen de aşırı hararetli bir şekilde, tartışmaktan ve bu konudaki görüşlerimi paylaşmaktan çekinmedim ve yorulmadım. Ancak sevgili Microsoft C# için yayınladığı her yeni dil özelliği ile beni de fanatikliğin sınırlarında dolaştırmayı başarıyor. Her yeni versiyon ile birlikte  kafamda "C# sen ne güzel bir programlama dilisin!" şeklinde bir ses duyuyorum ve açıkçası bunu haykırmamak için kendimi zor tutuyorum. Ancak, C# için beslediğim bu duyguların fanatiklik boyutunda olmadığını rahatlıkla söyleyebilirim. 

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

Tüm bu sorular için olumlu cevap alabileceğimiz bir programlama dilin pratikte var olmadığını rahatlıkla söyleyebiliriz bu nedenle C# ne kadar güzel bir dil olursa olsun tüm işlerimiz için uygun olmayabilir. 

Programlama dilleri ve fanatizm konusunda genel görüşümü kısaca özetledikten sonra gelin şimdi C# 7.0 ile birlikte Microsoft'un bizlere sunduğu yeni yapıları teker teker ele alalım. 

# Bu Yazı Neden Yazıldı?

Bu yazı, İstanbul Bilgi Üniversitesi Yazılım Geliştirme Ekibine önümüzdeki Cuma (09 Mart 2018) veya bir sonraki hafta Cuma günü yapmayı planladığım aşağıdaki sunuma eşlik etmesi amacıyla yazıldı. Sunumda en az bir, en fazla 3 sayfa ve mümkünse kısa kod örnekleri ile görselleştirilen dil özelliklerini bu yazıda biraz daha kapsamlı ve tam örnekler ile aktarmayı hedefliyorum.

<div class="embed-responsive embed-responsive-16by9">
<iframe id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://prezi.com/embed/lnmx5jtyim7k/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI0amliUjN1VWVFVzZ4THlnL1RqQWNEQzVnPT0&amp;landing_sign=olU_ieQo3iUEEvKjARERqzOHPAge87SmALvLtPGyPIE"></iframe>
</div>

# Yeni Dil Özelliklerinin Teması
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

> **BİLGİ**
>
> F#'ı öğrenmek veya incelemek isterseniz [F# ile Fonksiyonel Programlama](https://www.dikeyeksen.com/products/f-ile-fonksiyonel-programlama) kitabına başvurabilirsiniz. 
>
>Kitabın ilk üç bölümününe [şu adresten](http://aliozgur.net/2017/09/09/fsharp_fonksiyonel_prog_preview/) erişebilirsiniz.


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
### Tuple Değerlerin Elemanlarını ( _ ) İle Göz Ardı Etme 

Yukarıdaki örnekte yer alan ```GetPersonInfo(2)``` metod çağırısının döndürdüğü tuple değerin bazı elemanlarının değerlerini göz ardı etmek istersek göz ardı edilecek elemanlar için değişken ismi vermek yerine alt çizgi ( _ ) yer tutucusu kullanılabilir. Bu yer tutucu değere yeni söz diziminde **discard** denilir. Aşağıda tuple dçnüş değerinin sadece **soyad** isimli elemanının değerini söküp diğer elemanların değerlerin _ ile nasıl göz ardı edebileceğimizi görebilirsiniz.

```csharp
(_, string soyad, _) = GetPersonInfo(2);
Console.WriteLine($"Person 2 Soyadı = {soyad}");
// Çıktı : Person 2 Soyadı = Özgür
```

### Sınıflarda Deconstruct metodu 

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

ILSpy ile uygulamamızı decompile ettiğimizde yukarıdaki kod bloğunu IL komutları karşılığı aşağıdaki gibi olur. Bu komutlarda **IL_017b** satırında  ```(string aliAd, _) = ali``` atamasının yerine derleyicinin ```PersonalInfo``` sınıfının ```Decompile``` metoduna çağrı ürettiğini görebilirsiniz.

```csharp
// 	PersonalInfo ali = new PersonalInfo
// 	{
// 		Id = 2,
// 		Ad = "Ali",
// 		Soyad = "Özgür",
// 		Yil = 1976
// 	};
IL_013d: newobj instance void SevenFeatures.PersonalInfo::.ctor()
IL_0142: dup
IL_0143: ldc.i4.2
IL_0144: callvirt instance void SevenFeatures.PersonalInfo::set_Id(int32)
// (no C# code)
IL_0149: nop
IL_014a: dup
IL_014b: ldstr "Ali"
IL_0150: callvirt instance void SevenFeatures.PersonalInfo::set_Ad(string)
IL_0155: nop
IL_0156: dup
IL_0157: ldstr "Özgür"
IL_015c: callvirt instance void SevenFeatures.PersonalInfo::set_Soyad(string)
IL_0161: nop
IL_0162: dup
IL_0163: ldc.i4 1976
IL_0168: newobj instance void valuetype [System.Runtime]System.Nullable`1<int32>::.ctor(!0)
IL_016d: callvirt instance void SevenFeatures.PersonalInfo::set_Yil(valuetype [System.Runtime]System.Nullable`1<int32>)
IL_0172: nop
IL_0173: stloc.s 8
// ali.Deconstruct(out text, out text2);
IL_0175: ldloc.s 8
IL_0177: ldloca.s 10
IL_0179: ldloca.s 11
IL_017b: callvirt instance void SevenFeatures.PersonalInfo::Deconstruct(string&, string&)
// (no C# code)
IL_0180: nop
// string aliAd = text;
IL_0181: ldloc.s 10
IL_0183: stloc.s 9
// Console.WriteLine(string.Format("Person 2 Ad = {0}", aliAd));
IL_0185: ldstr "Person 2 Ad = {0}"
IL_018a: ldloc.s 9
IL_018c: call string [System.Runtime]System.String::Format(string, object)
IL_0191: call void [System.Console]System.Console::WriteLine(string)
```

### Tuple Değerlerin Eşitliği

Tuple değerleri == operatörü ile karşılaştıramazsınız. Karşılatırma işlemi için Equals metodunu kullanmalısınız. Equals metodu tuple değerlerin elemanların sırasının, tipinin ve değerlerinin aynı olup olmadığını test eder. BU şekile yapılan eşitlik kontrolüne  **yapısal eşitlik** (structural equality) kontrolü de denir.

```csharp
var d1 = ("Ali", 1);
var d2 = ("Ali", 1);
var d3 = ("Ali", 2);
var d4 = ("Ali", "Özgür",1);

// Derleyici hatası!
// d1==d2

Console.WriteLine($"d1==d2 => {d1.Equals(d2)}");
// Çıktı d1==d2 => True

Console.WriteLine($"d1==d3 => {d1.Equals(d3)}");
// Çıktı d1==d3 => False

Console.WriteLine($"d1==d4 => {d1.Equals(d4)}");
// Çıktı d1==d4 => False
```

# **ref** Değişkenler ve **ref return**

**ref** tanımlayıcısı da **out** tanımlayıcısına benzer bir şekilde metodlarımıza **by reference** parametreler geçebilmemizi sağlar. **out** ve **ref** arasındaki günlük programlama aktivitelerinde karşımıza çıkan en temel fark **out** parametrelerine metod içinde mutlaka ama mutlaka bir değer atanması zorunluluğudur, **ref** parametreler için böyle bir zorunluluğumuz yok.

Yukarıda **out** parametre kullanarak oluşturduğumuz örnek ```TestByRef``` metodunu **ref** kullanarak aşağıdaki gibi yazabiliriz.

```csharp
// By ref parametreye dokunmadık
public static void TestByRef(ref  int deger)
{
    Console.WriteLine($"Metod içinde değer {deger}");
}

// VEYA aşağıdaki gibi by ref parametrenin değerini değiştirebiliriz
public static void TestByRef(ref int deger)
{
    deger = 42;
    Console.WriteLine($"Metod içinde değer {deger}");
}
```
**ref** kullanımını hızlıca hatırladıktan sonra gelin şimdi **ref değişkenler** ve **return ref** dil özelliğini ele alalım. Aşağıdaki örnek ```StockInfo``` sınıfının ```FindStock``` statik metodu, ilk parametredeki dizi içinden ikinci parametre ile verilen değeri bulup bu değeri **by reference** döndürür.  

```csharp
public class StockInfo
{
    public string Symbol { get; set; }
    public decimal CurrentPrice { get; set; }

    public static ref string FindStock(string[] stocks, string stockSymbol) // (1) <-- !!!
    {
        var idx = Array.IndexOf(stocks, stockSymbol);
        if (idx < 0)
            throw new ApplicationException("Stock nıt found!");

        return ref stocks[idx]; // (2) <-- !!!
    }
}
```

```FindStock``` metodunun imzasında (1) ve değer dönüşü için kullanılan return satırında (2) önceki C# versiyonlarında sadece metod parametreleri için kullanabildiğimiz **ref** tanımlayıcısını C# 7.0 ile birlikte **by reference** metod dönüş değerleri oluşturmak için kullanabiliyoruz. Ancak, referans döndüren metodları kullanırken çok önemli bir noktaya dikkat edilmesi gerekiyor; metod çağırısının ve metod sonucunu tutacak olan değişkenimizin önüne **ref** tanımlayıcısını koymazsak (1) C# derleyicisi referans değer döndüren fonksiyonu normal değer döndüren bir fonksiyon gibi çağıracak şekilde bir kod üretir. 

Örneğimizdeki ```FindStock``` metod çağırısını **ref** tanımlayıcısı kullanamdan yaparsak **stocks** dizisinin eşleşen elemanının değeri kopyalanarak döndürülür. Bu durumda **appleSymbol** değişkenini değerini sonradan değiştirsek (2) bile **stocks** dizisinde ilgili elemanın değeri değişmez (3). 

```csharp
var stocks = new string[4] { "THY", "MSFT", "AAPL", "TSLA" };
var appleSymbol = StockInfo.FindStock(stocks, "AAPL"); // (1) <-- !!! ref kullanmadık

Console.WriteLine($"appleSymbol => {appleSymbol}");
// Çıktı : appleSymbol => AAPL

appleSymbol = "xAAPL"; // (2) <-- 
Console.WriteLine($"appleSymbol => {appleSymbol}, stocks[2] => {stocks[2]}"); // (3) <--
// Çıktı : appleSymbol => xAAPL, stocks[2] => AAPL
```

Yukarıdaki ```FindStock``` metod çağırısını **ref** tanımlayıcısı ile yaparak sonuç değişkenini de **ref** ile tanımlarsak (1) sonuç olarak **stocks** dizisinin eşleşen elemanının referansı döndürülür. Bu durumda **msftSymbol** değişkeninin değerini sonradan değiştirdiğimizde (2)  **stocks** dizisinde ilgili elemanın değeri de değişir (3). 

```csharp
ref var msftSymbol = ref StockInfo.FindStock(stocks, "MSFT"); // (1) <-- !!!

Console.WriteLine($"msftSymbol => {msftSymbol}");
// Çıktı : msftSymbol  => MSFT

msftSymbol = "xMSFT"; // (2) <-- !!!
Console.WriteLine($"msftSymbol => {msftSymbol}, stocks[1] => {stocks[1]}"); // (3) <-- !!!
// Çıktı : msftSymbol => xMSFT, stocks[1] => xMSFT
``` 

# Desen Eşleme ( **is** ve **switch/case** )

Desen eşleme F#'ın en sevdiğim özellikelerinden birisi. F#'daki desen eşleme yapısı (match/with) kabaca C#'daki switch/case yapısına benziyor. Ancak, F# desen eşlemelerinde derleyici marifeti ile basit tipleri eşlemekten daha fazlası da yapılabiliyor. Örneğin C#'ın 7.0'dan önceki versiyonlarında switch/case ile tipe göre eşleme yapmak mümkün değilken F#'da bu tip eşlemeler rahatlıkla yapılabiliyor. 

C# 7.0 ile birlikte switch/case yapısının yeni özelliklerini hemen ele alacağız ancak önce gelin C#'da tip kontrolü yapmak için kullanılan **is** operatöründe yapılan basit ama çok güçlü değişikliği ele alalım.

Örnek ```StockInfo``` sınıfından nesneleri karşılaştırmak için ```Equals``` metodunu aşağıdaki gibi oluşturalım.

```csharp
public class StockInfo
{
    // ...
    // ...
    // ...    
    
    public override bool Equals(object obj)
    {
        if (!(obj is StockInfo)) // (1) <-- !!!
            return false;

        var s = obj as StockInfo; // (2) <--- !!!
        return this.Symbol == s.Symbol && this.CurrentPrice == s.CurrentPrice;
    }
}
```

```Equals``` metodu ```Object``` sınıfından devralınan bir metod ve girdi parametresi olarak **object** tipinden bir değer alıyor. Örneğimizde (1) ile belirtilen satırda **is** operatörü kullanarak gelen parametrenin tipinin ```StockInfo``` olup olmadığını test ediyoruz. Eğer gelen parametre ```StockInfo``` tipinden değilse karşılaştırma işleminin sonucunu **false** olarak dönüyoruz. Gelen parametre ```StockInfo``` tipinden ise (2) ile belirtilen satırda **as** operatörü ile **obj** parametresini ```StockInfo``` tipine cast ediyoruz. Metodun geri kalan satırlarında iki nesnenin özelliklerini karşılaştırıp sonucu hesaplanıyor. Bu örnekteki kullanımda **is** operatörünün kullanım şablonu aşağıdaki gibidir.  

``` <karşılaştırılan-nesne> is <karşılaştırılan-tip>```

C# 7.0 ile birlikte **is** operatörü sadece tip testi yapmıyor aynı aynı zamanda tip testinin başarılı olması durumunda yerinde o tipten bir değişken tanımlamamıza izin veriyor. Yeni hali ile **is** operatörünün şablonu şöyle;

``` <karşılaştırılan-nesne> is <karşılaştırılan-tip> <karşılaştırılan-tipten-değişken>```

Örnek ```Equals``` metodunu **is** operatörünü yukarıdaki yeni şablonuna uygun olarak kullandığımıza aşağıdaki gibi daha sade bir şekilde yazabiliyoruz. Örneğimizde tip testinin doğru olması durumunda **is** sonucu **true** oluyor ve takip eden metod bağlamında kullanabileceğimiz ```StockInfo``` tipinden bir **s** değişkeni oluşturuluyor. 

```csharp
public class StockInfo
{
    // ...
    // ...
    // ...    
    
    public override bool Equals(object obj)
    {
        public override bool Equals(object obj)
        {
            return obj is StockInfo s
                ? this.Symbol == s.Symbol && this.CurrentPrice == s.CurrentPrice 
                : false;
        }
    }
}
```

Örnek kodu ILSpy ile decompile ettiğimizde ```Equals``` metodu içindeki ```obj is StockInfo s``` satırı için C# derleyicisinin ```s = (obj as StockInfo)) != null``` şeklinde bir kod ürettiğini görebiliriz.

```csharp
IL_0000: nop
// return (s = (obj as StockInfo)) != null && this.Symbol == s.Symbol && this.CurrentPrice == s.CurrentPrice;
IL_0001: ldarg.1
IL_0002: isinst SevenFeatures.StockInfo
// (no C# code)
IL_0007: dup
IL_0008: stloc.0
IL_0009: brtrue.s IL_000e

IL_000b: ldc.i4.0
IL_000c: br.s IL_0035
```
**is** operatörünün bu yeni hali genel resme bakıldığında C# derleyicisinin daha önce üretemediği ancak desen eşleme yapılarının dile eklenmesi için gerekli IL kodunu C# 7.0 ile birlikte artık üretebilidiği anlamına geliyor. Gelin şimdi C#'ın ilk gününden beri bazen severek bazen de hiç istemeyerek kullandığımız **switch/case** dil yapısına eklenen yeni özellikleri ele alalım. Örneğimiz için ```Describe``` isimli statik bir metod tanımlayacaığız. Bu metoddan beklentimiz girdi parametresi olarak verilen ```object``` tipinden bir parametrenin tipini ve değerini inceleyerek ```int```, ```StockInfo``` ve ```null``` için tanımlama metni döndürmesi. Bu işlevi kodlamak için switch/case yapısını kullanamayız, çünkü switch/case sadece ```char```, ```bool```, ```string```, ```enum``` ve sayısal tipleri ile basit eşleştirmeler yapabilir. Bu nedenle switch/case yerine if/else yapısı ile metodumuzu aşağıdaki gibi oluşturabiliriz.

```csharp
public static string Describe(object value)
{
    if (value is int)
    {
        return $"Tam sayı, değeri = {(int)value}";
    }
    else if (value is StockInfo)
    {
        return $"StockInfo, fiyatı = {((StockInfo)value).CurrentPrice}";
    }
    else if (value == null)
    {
        return "Değer null";
    }
    else
    {
        return "Tanımsız tip veya değer";
    }
}
```

Önceki C# versiyonlarında, formel olmamakla birlikte, case koşulları aşağıdaki basit formata uygun olarak oluşturuluyordu. Bu formatta \<değer\> ifadesinin yerine ```char```, ```string```, ```bool``` veya nümeric tiplerden değer yazılarak basitçe ```switch(<ifade>)``` ile belirtilen ifadenin değeri ile ```case <değer>``` ifadesindeki değer eşitliği testi yapılması sağlanabiliyor.

```case <değer>``` 

C# 7.0 ile birlikte ```case``` koşullarını aşağıdaki formata, formel olmamakla birlikte, uygun olarak oluşturabiliyoruz.

```case [<değer>] veya [<tip> <değişken>]``` 

Örnek ```Describe``` metodunu yeni case şablonunu kullanarak C# 7.0 ile aşağıdaki gibi yeniden oluşturuabiliriz. 

```csharp
public static string Describe(object value)
{
    switch (value)
    {
        //Şablon => case [<değer>]
        case null: // Eski yönteme benzer null değer eşleme.
            return "Değer null";

        //Şablon => case [<değer>]
        case 42: // Eski yöntem ile değer eşleme.
            return $"Mucize sayımız 42";
        
        //Şablon => case [<tip> <değişken>]
        case int v: // C# 7.0 tip kontrolü ve yerinde değişken tanımı ile desen eşleme. 
            return $"Tam sayı, değeri = {v}";

        //Şablon => case [<tip> <değişken>]
        case StockInfo s: // C# 7.0 tip kontrolü ve yerinde değişken tanımı ile desen eşleme.
            return $"StockInfo, fiyatı = {s.CurrentPrice}";
        default:
            return "Tanımsız tip veya değer";
    }
}
```
Yukarıdaki örnekte yer alan yeni usül ```case int v``` ve ```case StockInfo s``` yazımını daha rahat hatırlayabilmek için kafanızda **is** operatörü ile ```is int v``` ve ```is StockInfo s``` şeklinde moelleyebilirsiniz.  

### **when** ile koşullu eşleme 
Yeni dil özelliklerinden bir diğeri de case koşullarında **when** ile koşul kontrolü yapılabilmesidir. Formel olmamakla birlikte, **when** koşulları da dahil edildiğinde case şablonunun aşağıdaki gibi olduğunu söyleyebiliriz.  

```case <değer> | <tip> <değişken> [ when <koşul-kontrolü> ] ``` 

Şimdi gelin yukarıdaki örneğimizde ```case 42``` şeklinde yer alan eski tarz case eşlemesini **when** ile koşul kontrolü kullanarak yeniden oluşturalım.  

```csharp
public static string Describe(object value)
{
    switch (value)
    {
        //Şablon => case [<değer>]
        case null: // Eski yönteme benzer null değer eşleme.
            return "Değer null";

        //Şablon => case <tip> <değişken> [ when <koşul-kontrolü> ]
        case int v when v == 42: // C# 7.0 when ile koşul kontrolü
            return $"Mucize sayımız 42";
        
        //Şablon => case [<tip> <değişken>]
        case int v: // C# 7.0 tip kontrolü ve yerinde değişken tanımı ile desen eşleme. 
            return $"Tam sayı, değeri = {v}";

        //Şablon => case [<tip> <değişken>]
        case StockInfo s: // C# 7.0 tip kontrolü ve yerinde değişken tanımı ile desen eşleme.
            return $"StockInfo, fiyatı = {s.CurrentPrice}";
        default:
            return "Tanımsız tip veya değer";
    }
}
```

### Desen Önceliği

switch/case dil yapısının bize yansıyan yeni kullanım özelliklerine ilave olarak hatalı kod yazmamızı engelleyen önemli bir düzenleme daha söz konusu. Bu düzenleme ile C# derleyicisi derleme anında case koşullarının birbirini ezip ezmediğine (öncelik testi veya genellilik testi de denilebilir) karar vererek sıralama sorunu tespit etmesi durumunda derleme işleminin başarısız olmasını sağlıyor. Koşulların birbirini ezip ezmeyeceği kontrolünde kullanılan algoritma temelde case ifadelerindeki desenlerin birbirine göre daha genel veya daha spesifik olup olmadığını tespit ediyor. Örneğin **when** ile koşul kontrolü yapılan ifadeler aynı tipten daha genel ```[<tip> <değişken>]``` şablonundaki ifadelerden daha spesifik olup sıralamaya göre daha üst sırada yer almalılar.

Yukarıdaki örneğimizde yer alan ```case int v when v == 42``` ifadesi ile ```case int v``` ifadelerinin sırası aşağıdaki gibi değiştirildiğinde derleyici "CS8120: The switch case has already been handled by a previous case." şeklinde bir hata vererek derleme işlemini durduruyor. 

```csharp
public static string Describe(object value)
{
    switch (value)
    {
        //Şablon => case [<değer>]
        case null: // Eski yönteme benzer null değer eşleme.
            return "Değer null";

        //Şablon => case [<tip> <değişken>]
        case int v: // C# 7.0 tip kontrolü ve yerinde değişken tanımı ile desen eşleme. 
            return $"Tam sayı, değeri = {v}";

        //Şablon => case <tip> <değişken> [ when <koşul-kontrolü> ]
        case int v when v == 42: // C# 7.0 when ile koşul kontrolü
            return $"Mucize sayımız 42";

        //Şablon => case [<tip> <değişken>]
        case StockInfo s: // C# 7.0 tip kontrolü ve yerinde değişken tanımı ile desen eşleme.
            return $"StockInfo, fiyatı = {s.CurrentPrice}";
        default:
            return "Tanımsız tip veya değer";
    }
}
```
 Özetlemek gerekirse eskiden önemli olmayan veya derleyicinin kontrol etmediği case koşullarının sırası C# 7.0 ile birlikte artık önemli ve derleyici tarafından kontrol altına alınmış durumda.

# Yerel Fonksiyonlar/Metodlar

Yerel fonksiyon denildiğinde kafanızda neye ve kime göre yerel şeklinde bir soru oluşabilir. Hemen açıklayalım; C# açısından yerel fonksiyon bir başka fonksiyonun içinde tanımlanabilen fonksiyon anlamına geliyor.BU tür fonksiyonlara nested fonksiyonlar veya metodlar da denilebilir. Yerel fonksiyon tanımı yapma imkanı C# dışındaki bir çok programlama dilinde (örneğin; Pascal, Delphi ve F#) zaten öteden beri olan yapılar.   

Örnek olarak ```ShowOddOrEven``` isimli bir metod oluşturalım. Bu metoddan beklentimiz parametre olarak geçilen sayının tek mi, çift mi veya sıfır mı olduğunu ifade eden bir mesaj döndürmesi olsun. Bu metodun içinde de  ```IsEven``` isimli başka bir metod ile parametre olarak verilen değeri için tek/çift kontrolü yapalım.

```csharp
public static string ShowOddOrEven(int num)
{
    switch(num)
    {
        case 0 :
            return "Sıfır";
        default:
            return IsEven(num) ? "Çift" : "Tek";      
    }
}

public static bool IsEven(int n)
{
    return n % 2 == 0;
}
```

```IsEven``` metodunun ```ShowOddOrEven``` dışında başka hiç bir metod tarafından kullanılmadığını varsayarak ```IsEven``` metodunu yerel bir fonksiyon olarak aşağıdaki gibi  ```ShowOddOrEven``` içine taşıyabiliriz. 

```csharp
public static string ShowOddOrEven(int num)
{
    // Metod içinde metod 
    bool IsEven(int n)
    {
        return n % 2 == 0;
    }

    switch (num)
    {
        case 0:
            return "Sıfır";
        default:
            return IsEven(num) ? "Çift" : "Tek";
    }
}
```

Yerel fonksiyonların tanımlanması çok basit bu nedenle her yerde kullanmak isteyebilirsiniz. Ancak, ben yerel fonksiyonların mutlaka belirli bir politikaya uygun olarak kullanılmasını öneriyorum. Örneğin ```IsEven``` metodu daha karmaşık bir metod olsaydı ve farklı yerlerinden de kullanılma potansiyeli olan bir iş yapsaydı yerel fonksiyon olarak tanımlanması uygun olmazdı. 


```csharp
public static string ShowOddOrEven(int num)
{
    // Metod içinde metod 
    bool IsEven() // (1) <-- !!!
    {
        var yerelMetodDegiskeni = "Yerel metoda ait";
        Console.WriteLine($"anaMetodDegiskeni => {anaMetodDegiskeni}"); // (2) <-- !!!       
        return num % 2 == 0; // (3) <-- !!!        
    }


    var anaMetodDegiskeni = "Ana metoda ait";

    // Console.WriteLine($"yerelMetodDegiskeni => {yerelMetodDegiskeni}"); // (3) <-- !!!    
    switch (num)
    {
        case 0:
            return "Sıfır";
        default:
            return IsEven(num) ? "Çift" : "Tek";
    }
}
```


>**DİKKAT !!!**
>
>Yerel fonksiyon tanımlarında private, public ve protected benzeri access modifierlar kullanılmaz.

### Yerel Fonksiyon Scope Kuralları

Metod içinde tanımlı yerel fonksiyonların ana metod içindeki değerlere ve tam tersi ana metodun yerel fonksiyon içindeki değerlere erişimi ile ilgili çok basit ve temel iki kurala uyulmalıdır

1. Yerel metod, kendi tanımından önce tanımlı tüm ana metod değerlerine erişebilir. Örneğimizde (1) ve (3) ile işaretlediğimiz satırlar bu kurala uygun satırlardır, (2) ile işaretli satır ise bu kurala uygun değildir.
2. Yerel metodun içinde tanımlı değerler ana metod içinden erişilebilir değildir. Örneğimizde (4) ile işaretli olan satır bu kurala uygun olmayan erişim denemesini göstermektedir.

```csharp
public static string ShowOddOrEven(int num)
{
    var anaMetodDegiskeni = "Ana metoda ait";

    // Metod içinde metod 
    bool IsEven() 
    {
        var yerelMetodDegiskeni = "Yerel metoda ait";

        // Ana metod değişkeni. Yerel fonksiyon tanımından önce tanımlanmış dolayısıyla kullanılabilir
        Console.WriteLine($"anaMetodDegiskeni => {anaMetodDegiskeni}"); // (1) <-- !!!       
        
        // Hata ana metod değişkeni ancak yerel fonksiyon tanımından sonra tanımlanmış
        // Console.WriteLine($"anaMetodaAitBaskBirDegisken => {anaMetodaAitBaskBirDegisken}"); // (2) <-- !!!       
        return num % 2 == 0; // (3) <-- !!!        
    }

    var anaMetodaAitBaskBirDegisken = "Ana metoda ait başka bir değişken ";

    // Yerel metod değişkeni, ana metod içinden erişilemez
    // Console.WriteLine($"yerelMetodDegiskeni => {yerelMetodDegiskeni}"); // (4) <-- !!!    
    switch (num)
    {
        case 0:
            return "Sıfır";
        default:
            return IsEven() ? "Çift" : "Tek";
    }
}
```

>**NOT**
>
>Microsoft'un yerel fonksiyonlar ile ilgili dokümanlarında ```yield``` kullanılan ve genelde ```IEnumerable``` ile işlem yapılan metodlarda ve ```Task<T>``` döndüren ```async``` metodlarda asıl işlemin yerel bir fonksiyon içinde yapılması, parametre kontrolleri gibi koşul/geçerlilik kontrollerinin de ana metodun başında yapılması öneriliyor. Yerel fonksiynlar için önerilen ve geçerli kullanım örnekleri tabii ki bu ikisi ile kısıtlı değil.

# **throw** İfadeler

Throw ifadelerin(expression) neden yeni bir dil özelliği olduğunu anlamak için öncelikle çok genel bir fark ve tanım olarak **expression** ve **statement** arasındaki farkı ele almamız gerekiyor.

**Statement**, genel olarak bir dönüş değeri olmayan programlama dili yapılarına denir. Türkçesini **cümle** veya **cümlecik** olarak tanımlayabiliriz.  Statement'ların dönüş değeri olmadığı için başka statementlar veya ifadeler ile birleştirilip yeni değerler döndürecek şekilde kombine edilemezler. 

```csharp
while(true==true); // Bir statement, dönüş değeri yok
throw (new Exception()); // Bir statement, dönüş değeri yok
if(x == 100) return true; else return false; // if/else bir statement, dönüş değeri yok

// Statementlar birbiri ile kombine edilemez
if(x==100) ? throw new Exception() : false;  
```

**Expression** ise bir dönüş değeri olan ve diğer expressionlar ile kombine edilebilen programlama dili yapılarına denir.

```csharp
var sonuc = (x==100) && (y > 100); // x == 100 ve y > 100 expression
var toplam = x + y; // x + y expression
var birArrtirilmisToplam = (x + y)++; 
```

Statement ve expression arasındaki farkı kabaca anladıktan sonra önceki versiyonlarda statement olan **throw**'un C# 7.0 ile birlikte nasıl bir değişikliğe uğradığını basit bir örnek ile ele alalım. Örneğimizi aşağıdaki basit ```ToStr``` metodu üzerinden yapalım; bu metoddan beklentimiz object tipinden verilen girdi parametresinin değeri null değilse ilgili nesnenin ToString() metodunu çağırması ve bunun sonucunu döndürmesidir.   

```csharp
public static string ToStr(object input)
{
    if( input == null)
        throw new Exception();
    else
        return input.ToString();

}
```

```ToStr``` metodunu örneğin ```?:``` (ternary conditional operator) kullanarak daha kısa bir şekilde yazmak isteseydik aşağıdaki gibi bir kullanım mümkün olmazdı. Çünkü, ```?:``` operatörünün her iki dalının da (? ve : dalları) aynı tipten bir sonuç döndürmesi gerekir. Ancak, C# 7.0 öncesinde, **throw** bir statement olduğu için bir dönüş değeri olamaz ve ```?:``` operatörünün beklediği koşul sağlanmaz ve derleme anında hata alınır.

```csharp
public static string ToStr(object input)
{
    return input == null
        ?  throw new Exception() 
        :  input.ToString(); 
}
```

C# 7.0 ile birlikte **throw** bir satatement olarak değil bir expression ele alınıyor ve yukarıdakine benzer yazımlar mümkün hale geliyor. Bu düzenlemenin güzel yanlarından bir diğer eski **throw** kodlarımızın hala aynı şekilde çalışmaya devam etmesi. 

>**BİLGİ**
>
>Microsoft'un C#'a yaptığı tüm eklemeler ve değişiklikler ilk versiyondan bu yana her zaman önceki verisyonlar ile uyumlu olmuştur. Bu nedenle C# versiyonunu yükseltsek bile herhangi bir kod değişikliğine gerek kalmadan projelerimiz sorunsuz derlenir ve ,daha da önemlisi, farklı C# versiyonları arasında ,performans karakterisitikleri dışında (genelde pozitif yönde), çalışma anında beklenmedik bir davranış oluşmaz.  

# Expression Bodied Members

C# 6.0 ile birlikte Microsoft readonly sınıf özelliklerini ve metodlarını ```=>``` ile ifade edilen lambda ifadeler olarak tanımlanabilmesini sağladı. C# 7.0 ile birlikte ```=>``` kullanabileceğimiz yapılara yeni 3 tanesi daha eklendi; constructor, finalizer ve get/set propertyler. Her üç yapının da nasıl kullanıldığını aşağıdaki basit örnek ile görebilirsiniz.

```csharp
public class StockInfo
{
    private decimal _price;
    private string _symbol;

    // Constructor
    StockInfo(string sym) => this._symbol = sym;
    
    //Finalizer (C++ jargonundaki destructor)
    ~StockInfo() => Debug.WriteLine("Finalized.");
   
   // property get ve set
   public decimal Price
   {
      get => this._price;
      set => this._price = value;
   }
   
   // property get ve set
   public string Symbol
   {
      get => this._symbol;
      private set => this._symbol = value;
   }
   
}
```

# Genelleştirilmiş **async** Dönüş Tipleri

C# 5.0 ile birlikte hayatımıza giren asenkron metodların dönüş tipinin ```Task<T>``` olması zorunludur. ```Task<T>``` bir sınıf olduğu için bu tipten nesnelere heap'de üretilir. Value type döndüren asenkron metodlarımızın dönüş değerlerini de ihtiyaç olmadığı halde ```Task<T>``` içine sarmalamamız gerekir. Bu durumda stack'de oluşturulabilecek value type değerleri asenkron metodların kuralları gereği her koşulda heap'de oluşturulan ```Task<T>``` tipinden bir nesne içine alınır. Performans odaklı kod yazıyorsanız stack ve heap kullanımı ile ilgili aşağıdaki genel önerileri dikkate almalısınız

* Stack'de sadece value type değerler yer alır ve erişim çok hızlıdır. Ancak stack kapasitesi sınırlı ve ön tanımlı olduğu için çok fazla sayıda değer tutulamaz.
* Heap'de ise referance type (sınıflar) değerler yer alır ve erişim stack ile kıyaslandığında yavaştır. Ancak, heap için bir kapasite sınır yoktur ve donanımsal olarak varolan belleğin tamamı kullanılabilir

C# 7.0'da, 2. maddedeki yavaş erişim noktası dikkate alınarak çok özel bazı senaryolarda potansiyel performans iyileştirmesi sunabilecek ve aynı zamanda kodlama açısından esneklik de sağlayabilecek bir düzenleme yapıldı. Bu düzenleme ile önceden sadece ```Task<T>``` döndürebilen asenkron metodların ```GetAwaiter``` metodunu (asenkron desenini) destekleyen tüm tiplerden değer döndürmesi sağlanıyor.       

Bu düzenlemeye örnek olması açsından hem de genel olarak asenkron metodlarda value type dönüş değerlerini desteklemek için Microsoft ```System.Threading.Tasks.Extensions``` NuGet paketinin içine ```ValueTask<T>``` tipini eklemiş. ```ValueTask<T>``` tipi özellikle yüksek maliyetli ve value type (int, decimal, float, bool vs)  döndüren asenkron metodların sonuçlarını cachelemek için kullanılabilir.

Aşağıdaki örnek Microsoft'un dokümantasyon sitesinden alınmış bir ```ValueTask<T>``` kullanım örneği. Asıl hesaplama private (dışarıdan erişilemeyen) ```LoadCache``` isimli asenkron metod ile yapılıyor. Bu metodun maliyetinin yüksek olduğunu varsayarak public (dışarıdan erişime açık) ```CachedFunc``` metodu oluşturulmuş. ```CachedFunc``` ilk defa çağırıldığında ```LoadCache``` metodunu çağırır ve  ```Task<int>``` tipinden dönüş değerinden ```ValueTask<int>``` tipinde bir değer oluşturur, sonraki çağırılarda ise doğrudan ```int``` tipinden olan ve cachelenmiş **cacheResult** değişkeninin değerinden ```ValueTask<int>``` oluşturup döndürür.

```csharp
public ValueTask<int> CachedFunc()
{
    return (cache) ? new ValueTask<int>(cacheResult) : new ValueTask<int>(LoadCache());
}

private bool cache = false;
private int cacheResult;

private async Task<int> LoadCache()
{
    // simulate async work:
    await Task.Delay(100);
    cacheResult = 100;
    cache = true;
    return cacheResult;
}
```

# Son Söz

C# 7.0 ile birlikte dile eklenen yeni özellikler benim çok hoşuma gitti. Umarım bu beğenimi ve yeni dil özelliklerini takip edilebilir ve akılda kalıcı örnekler ile size de aktarmayı başarabilmişimdir. C# 7.1 ve 7.2 versiyonları da çokatan yayınlandı ancak, bu minör versiyonlardaki değişiklikleri şimdilik ele almadım. İlerleyen günlerde yeni bir yazı ile veya bu yazının sonuna yapacağım eklemeler ile bu düzenlemeleri de size aktarmayı umuyorum.  
 
***
{% include share_twitter_tr.html %}

***
