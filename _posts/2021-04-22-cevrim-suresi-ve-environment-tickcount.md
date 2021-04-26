---
layout: post
title: "MES Uygulamalarında Çevrim Süresi Hesabı"
subtitle: ".NET ile yüksek çözünürlüklü hesaplama"
date:  2021-04-22 13:56
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - C#
  - Programming
  - IoT
  - IIoT
  - Endüstriyel Uygulama
  - Industial IoT
  - Internet of Things
---
Özel olarak MES (Manufacturing Execution System/Üretim Yürütme Sistemi) ve genel olarak IIoT (Industrial IoT) uygulamalarında **çevrim süresi** hesabı  üretim planlaması, üretim optimizasyonu ve verimlilik hesaplama gibi bir çok alanda doğrudan veya dolayılı olarak kullanılan önemli bir kavramdır. 

Bu yazımda .NET ve C# ile bir sinyalin iki ölçümü arasında geçen süreyi ölçmek için kullanabileceğimiz yapıları ele alıyorum.

![C# 7.0]({{ root.url }}/media/cycle-time.jpg)


<!--end-of-excerpt-->
Panel yazılımlarında genel olarak çevrim süresi (cycle time) bilgisinin IO kartlardan veya PLC'den gelmediği durumlarda sayaç değeleri veya input değerlerindeki değişimlere göre `Environment.TickCount` kullanılarak benim `virtual cycle` dediğim bir çevrim süresi hesabı yapılıyor. 

> **Çevrim Süresi Nedir?**: Kabaca, bir sinyalin değerinin iki ölçümü arasında geçen süre olarak tanımlanabilir. Sinyalin ne ifade ettiğine bağlı olarak **birim çevrim süresi** şeklinde bir hesaplama da yapılabilir. Örneğin, sinyalimiz makinadan gelen ve üretim adedini bize bildiren bir sinyal olsun. `T1` anında sinyal değeri `C1=10` ise, `T2` anında da bu değer `C2=20` ise birim çevrim süresi `(C2-C1)/(T2-T1)` şeklinde hesaplanabilir

Ancak, [Microsoft'un dokümanlarında](https://docs.microsoft.com/en-us/dotnet/api/system.environment.tickcount?view=net-5.0) `Environment.TickCount` ile ilgili şöyle bir bilgi söz konusu
>Because the value of the TickCount property value is a 32-bit signed integer, if the system runs continuously, TickCount will increment from zero to Int32.MaxValue for approximately >24.9 days, then jump to Int32.MinValue, which is a negative number, then increment back to zero during the next 24.9 days. You can work around this issue by calling the Windows >GetTickCount function, which resets to zero after approximately 49.7 days, or by calling the GetTickCount64 function.,

Bu dokümanları özetleyecek olursak `Environment.TickCount` değerinin bizim açımızdan dört problemi söz konusu;
1. Environment.TickCount system timer'ın çözünürlüğü ile kısıtlı bir değer sunuyor ve çözünürlük 10-16 milisaniye seviyesinde. Bunun anlamı şu, 10-16 milisaniyeden düşük çevrim sürelerini `Environment.TickCount` ile hesaplamamız mümkün değil yani çevrim sürelerini hep 0 olarak ölçeceğiz.
2. Yukarıdaki bilgi notunda da belirtildiği gibi `Environment.TickCount` 32-bit işaretli integer tipinde. 32-bit işaretli integer tipinin özelliği gereği sistem ayağa kalktıktan 29.7 gün spnra bu değer olası en yüksek miktarına ulaşacak ve sonrasında overflow nedeni ile **negatif** değerlere dönecek ve 29.7 gün daha negatif değerleri bize bilgi olarak verecek ve yaklaşık 49 gün sonra da sıfırlanacaktır.
3. `Environment.TickCount` tipinin 32-bit işaretli integer değer olması nedeni ile çevrim süresi fark hesaplarımızda aşağıdaki sorunlar oluşacaktır
    * +/- veya -/+ geçişlerinde çok büyük veya çok küçük değerler olarak olçülecek
    * Panel yazılımının çalıştığı windows paneli örneğin eğer 35 gündür ayakta ise çevrim süresi hesaplarımız negatif değerler olacaktır. Bu durumda hesap sonucunun mutlak değeri dikkate almalıyız.
4. 50 gün veya üzerinde uptime'a sahip panellerde `Environment.TickCount` değerinin sıfırlanması nedeni ile hatalı çevrim süresi hesaplanabilir.

`Environment.TickCount` kullanmadan çevrim süresi hesabını aşağıdaki alternatif yöntemler ile yapmayı düşünebiliriz;

1. DateTime.Now, yani sistem saatini kullanarak iki ölçüm arasındaki zaman farkını çevrim süresi olarak hesaplayabiliriz. Ancak bu yöntemde, özellikle bazı panel donanımlarımızda, sistem saati panel ayakta iken geri kalabiliyor veya bizim kontrolümüz dışında senkronize edilebiliyor. Bu durumlar çevrim sürelerini doğru hesaplamamızı da engelleyebilir.

2. .NET içindeki Timer sınıflarını kullanabiliriz. Bu kullanımda panel yazılımında ilk çalışma anında global bir Timer nesnesi oluşturup süreyi Tick eventi içinde kendimiz takip edebiliriz. Ancak bu yöntem de çok sağlıklı bir çözüm sunmuyor, çünkü .NET içindeki Timer sınıflarının Tick event'leri işletim sistemi tarafından bazı koşullarda belirlenen interval dışında fırlatılabiliyor. Bunu engellemek için interval yerine DateTime.Now ile geçen süre farkını takip etmeyi düşünebiliriz, ancak bu durumda da ilk maddede belirttiğim sorunların farkında olmamız gerekir.

3. `System.Diagnostics` altında yer alan [`Stopwatch`](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.stopwatch?view=net-5.0) sınıfını ve bu sınıfın bize sunduğu `ElapsedMilliseconds` değerini kullanabiliriz. Stopwatch sınıfı uygulamamızın üzerinde çalıştığı sistemin timer mekanizmasını kullanıyor. Uygulamamızın üzerinde çalıştığı sistem yüksek çözünürlüklü performance counter varsa bu değeri kullanıyor, eğer sistemde yüksek çözünürlüklü performance counter yoksa system timer'ı kullanıyor. Çevrim süresi hesaplamak için **Stopwatch** kullanımı bu özellikleri nedeni ile en güvenilir sonucu veren yöntem olarak düşünülebilir. Bu güvenirliğin yanısıra `Stopwatch` üzerindeki `Frequency` değerini kullanarak çevrim süresini **mikrosaniye** seviyesinde de takip etmemiz mümkün olabiliyor. Bahsettiğim önceki iki mekanizma ile **mikrosaniye** seviyesinde çevrim süresi hesabı yapılması mümkün değil.

## Stopwatch ile çevrim süresi hesabı

Aşağıdaki `DcasEnvironment` static class'ı `Stopwatch` nesnesini enkapsüle etmektedir. Bu class ile ilk kullanım sonrası geçen süreyi takip edebiliriz.
> **DİKKAT:** `DcasEnvironment` class'ının static constructoru bu class'a yapılacak ilk erişim öncesinde çalışacaktır.

```csharp
public static class DcasEnvironment
{
	private static readonly Stopwatch _watch = new Stopwatch();
	private static readonly double _microSecPerTick = 1000000D / Stopwatch.Frequency;
	private static bool _isStopwatchHighRes = false;
	static DcasEnvironment()
	{
		_isStopwatchHighRes = Stopwatch.IsHighResolution;
		_watch.Start();
	}

	public static long ElapsedMiliseconds => ElapsedMicroseconds / 1000;
	
	public static long ElapsedMicroseconds
	{
		get
		{
			return _isStopwatchHighRes
				? (long)(_watch.ElapsedTicks * _microSecPerTick)
				: _watch.ElapsedMilliseconds*1000;
		}
	}

	public static void RestartStopatch()
	{
		_isStopwatchHighRes = Stopwatch.IsHighResolution;
		_watch.Restart();
	}
}
```

Aşağıdaki `CycleTimer` classı ise `DcasEnvironment` class'ını kullanan ve `Reset` ve `Update` methodları ile süre ölçümü yapmamızı sağlayan yardımcı bir class olarak kullanılabilir.


```csharp
public class CycleTimer
{

	private long _prevMeasuredMicroseconds = DcasEnvironment.ElapsedMicroseconds;
	private long _latestMeasuredMicroseconds = DcasEnvironment.ElapsedMicroseconds;

	public long ElapsedMicroseconds => _latestMeasuredMicroseconds - _prevMeasuredMicroseconds;

	public double ElapsedMiliseconds => ElapsedMicroseconds / 1000D;

	public void Reset()
	{
		_prevMeasuredMicroseconds = DcasEnvironment.ElapsedMicroseconds;
		_latestMeasuredMicroseconds = DcasEnvironment.ElapsedMicroseconds;

	}

	public void Update()
	{
		(_prevMeasuredMicroseconds, _latestMeasuredMicroseconds) = (_latestMeasuredMicroseconds, DcasEnvironment.ElapsedMicroseconds);
	}
}
```


## Soru/Cevap

>**Soru:** Ali Hocam, hassas ölçümler için `GetSystemTimePreciseAsFileTime` Win32 API'ını kullanmayı tavsiye ederlerdi. Sizce mevcut senaryoda avantajı/dezavantajı nedir? 
>
> **Cevap:** Stopwatch'ın GetTimestamp şeklinde bir methodu var. Bu method da C# (managed code) tarafında bahsettiğiniz API'yi kullanıyor diye biliyorum. Dolayısıyla mevcut senaryoda ikisi de benim bildiğim ve anladığım kadarıyla aynı şeye denk geliyor. 

----

>**Soru:** RTOS (Realtime Operating System) olmayan işletim sistemlerinde high resolution stopwatch ile senkronizasyon ne derece dogru?
>
>**Cevap:** Realtime OS olmayan Windows gibi sistemlerde de saha verilerinin çevrim süresinin olabildiğince doğru bir şekilde ölçülmesi ihtiyacı var.  Bu nedenle doğru olmasa bile bağıl olarak iki olay arasında geçen süreyi olabildiğince yüksek çözünürlükte ölçebilmek gerekiyor.

----
>**Soru:** Motorun her devrini ölçsek boyle bir çözünürlüğe ihtiyaç olur mu? Bir de bu sinyalleri loglamak konusu var, log yazma süresi o frekansa erişebiliyor mu, frekans aralıklarının ortalamasını alıp loglamak gibi işlemler nasıl yapılıyor?
>
>**Cevap:** Yüksek hızdaki ölçümleri High Speed Counter (HSC) destekleyen IO kartlarımız ile yapıyoruz, yani sayma işlemi kart üzerinde yapılıyor ve yazılıma gönderiliyor. İlave olarak sampling ile belirli genişlikteki bir pencerede ortalama hesaplama, kesit alma ve kesit loglama gibi işlemler yapılıyor.Yüksek hızlı sayımlarda çevrim süresi genellikle HSC'yi yöneten ve üstünde MCU (microcontroller unit) ve gerçek zamanlı saat olan kartlar tarafından hesaplanıp MES yazılımına iletiliyor.


----
>**Soru:** 1 adet HSC 128 milyarı ne kadar sürede sayar?
>
>**Cevap:** Kullanılan HSC sensörüne bağlı olarak desteklenen maksimum pulse değeri değişebilir. HSC sensörlerinin diğer bir özelliği de sayma işlemini yönlü yapabiliyor olmalarıdır. Örneğin, bir motora bağlı bir HSC moturun sağ/sol dönüşlerini pozitif veya negatif değerler olarak sayabilir. Bazı üretim süreçlerinde üretilen parçanın veya yapılan işin specine göre bu dönüş yönleri doğru işlem teyidi için kullanılabilir. 

***
{% include share_twitter_tr.html %}

***
