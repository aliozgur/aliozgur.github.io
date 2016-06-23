---
layout: post
title: "How is Microsoft doing with .NET Core?"
subtitle: "A short hands on experience with an OSX guy"
date:  2016-06-23 22:01
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
published : true
tags: 
  - Software
  - Microsoft
  - .NET Core
  - C#
 
---

In this blog post I will tell you a story and share my couple of cents on .NET Core, Microsoft's last gig. 

<!--end-of-excerpt-->

## The Story
Today started as just another day at our office in Bilgi University. I got my black coffee 
and walked outdoors to our [beautiful campus](http://www.santralistanbul.org/en/) to chat with couple of colleague developers. When we finished the chat session we headed up to our offices and one nice guy asked me "How can I test C# code on my MacBook Pro?". This was an interesting and unexpected question to me. 

This nice guy is a seasoned software developer with Amiga (you guessed it right he is also an old school demoscener), Classic ASP, Python and Ruby experience. He is also very interested in trying new and different languages, for example to name one Go was in hist list for couple of months. 

I know him for about 12 years and he has since been using some variant of OSX. Recently we had couple of chats with him about [Visual Studio Code](https://code.visualstudio.com) and he was very excited to try something new (event this was from Microsoft, you know OSX guys hate Microsoft :) and I know he liked VS Code. Later I discovered that he was experimenting VS Code with Python for some time.

So back to his question, instead of telling him to Google for .NET Core and use VS Code, I offered him hands on help. We spent an hour and half on his desk and in the rest of this post I will try give you some reflections about this hands on experience.

## Clear communication and easy installation?

Most of the developers I know, ones who are passionate about programming I mean, like to read every kind of documentation and instructoions on the programming languages and platforms they love. But, that is not always the case when they are looking into new programming languages or platforms. Communities, marketing guys, conferences and social media can create a sudden interest around a language or platform and attract developers for a while. But this interest fades away easly if correct message is not delivered when a developer realy wants to experience this new thing. So, to cut this short; complicated instructions, too many steps, hell of dependencies, unorganized forums, early access programs instead of open evaluation and things like that cause developers to shy away from that new and possibly the greatest thing to the date.   

I think Microsoft handles this communication in a very successfull way both for VS Code and [.NET Core](https://www.microsoft.com/net/core). You can download VS Code installer from the home page and then the installation is a breeze. The same is true for .NET Core, a simple four step guide right in the home page and an installer.

So, here is what we did with my colleague

* Go to .NET Core site
* Look into 4 steps quickly
* Download the .NET Core installer
* Install 
* ``` dotnet new ``` , ```dotnet restore```, ```dotnet run``` and boom "Hello world!" was in our terminal

> The installer had only one issue; we could not add dotnet to the PATH variable. But that was a no problem he fixed that manually within seconds. Things like that are no problem for OSX guys as far as I understand :) 

The whole installation experience took 5 minutes, that was it.

## First question first impression
After the installation the first thing my collague asked was "What the hell is ```dotnet restore```". He was curious what is being restored, does he has to do this restore thing every time he makes a change? 

It was the perfect time to introduce him to NuGet. He already knew the notion of package managers I just walked him quickly through NuGet.org site and explained him how packages are built, added to a project, why restore is needed. That was it, he picked up the NuGet idea quickly and we were ready to get into some real C# code.


> I did not mention the versioning issues with NuGet packages and all other negative things raised by the community. I though this was an area he has to explore by himself.

## Editor Support Is a Must!
In order to experiment a new programming language editor support or the overall development environment is an important thing. The time you spend on experimenting new things is your own time. You have the right to spend this time effectively and the editor or editor support of the new language is the number one tool to give you this sensation and let you keep experimenting. 

In my opinion Microsoft did a good job on creating something like VS Code. I think that VS Code has the right ingredients to attract a wide range of developer profiles. Whether you are a newbie, a seasoned developer or a veteran you can find some good thinks you value in an editor. VS Code is a joy to use, simple when you want simplicity or extensible if you need hard core customizations. 

Another thing I value in VS Code is the community. .NET people from various diciplines and other passionate developers from different communities are doing a really great job around VS Code. To be honest, I was a little bit skeptic about the community thing when VS Code was first introduced. I'm still suprised how this great community is contributing to VS Code.

And here is the editor related steps we followed

* Fire up VS Code
* Show him **Shift+Command+P** shortcut to bring up the VS Code command palette
* Type ```ext install csharp``` and install the C# support
* Open the sample .NET Core project folder

## The Fun Part: C\# 
I've been developing C# since the first day. I've been taught C and C++ in my college years, my first professional endeavour was with Java. C# was a natural path to follow for me with this early programming background. Coupled with the best IDE on earth, I mean Visual Studio, most of the pain I felt in college and my early career was gone with C#. Does this mean C# is a perfect languege? May be yes or may be no, but C# served me well through all these years. C# , and Visual Studio of course, evolved too much in time and most of this evaluation was positive. I remember the introduction of [generics](https://msdn.microsoft.com/en-us/library/512aeb7t.aspx), [LINQ](https://msdn.microsoft.com/en-us/library/bb397926.aspx), the [var](https://msdn.microsoft.com/en-us/library/bb383973.aspx) keyword, [async and await](https://msdn.microsoft.com/en-us/library/mt674882.aspx). All these language features are simply great and boost your performance at minimal along with other benefits. The latest [language features introduced with C# 6](https://msdn.microsoft.com/en-us/magazine/dn802602.aspx) and potential [C# 7 features](https://github.com/dotnet/roslyn/issues/2136) discussed by the community realy make me excited. 

> One note on [F#](http://fsharp.org): What I really love about F# is not only the language features but the influence it has on C# in recent years. We will see more features comming from F# to C# and this is just awesome.

So coming back to the original story, my colleagu just got interested in C# and wanted to try the language. His question was call for me to show him something I really love and have passion about.

## A classic, Console and Hellow World!
This is a classic, a console "Hello world" application. That is as simple as it can be

```csharp
using System;
namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
``` 
The suprise for my collage was the VS Code suggestion which asked if we want VS Code to setup some task for us. Simple, Click Yes and you are all set to debug your console application. Hit F5 and you are debugging your app.

My colleague already has working knwoledge of object oriented concepts like classes and access modifiers so the hello world minimal sample was easy to read and digest.

## Couple of language tricks

### LINQ
My collague was primarily interested in LINQ and this interest motivated him to look into a new language. I started to show him the very simple LINQ 

```csharp
using System;
using System.Linq;
namespace ConsoleApplication
{
	/* Program class here */
	
	public class Test
	{
	    public static int[] GiveMeTheOddNumbers1(int[] array)
	    {
	        return array.Where(item => item % 2 == 1).ToArray();
	    }
	
	    public static int[] GiveMeTheOddNumbers2(int[] array)
	    {
	        var result = (from item in array
	                    where item % 2 == 1
	                    select item).ToArray();
	
	        return result;
	    }
	}
}
```
In the very simple LINQ sample above you are actually throwing lots of C# features into the audience. 

* A typical and simple class
* Defining and referencing namespaces
* How you define methods
* Access modifiers and the **static**
* **var** and type inference
* Couple of data types (int and int[])
* Lambdas as in GiveMeTheOddNumbers1
* LINQ syntax as in GiveMeTheOddNumbers2

My colleague liked the LINQ sytntax presented in GiveMeTheOddNumbers2 and I felt that he was really excited with this neat thing. Lambda thing was not strange to him and he mapped lambdas to something he already knows in Ruby.

### Extension methods
My next iteration for the sample Test class was to introduce him with the [extension methods](https://msdn.microsoft.com/en-us//library/bb383977.aspx).Here is the modified Test class


```csharp
public class Test
{
    public static int[] GiveMeTheOddNumbers1(this int[] array)
    {
        return array.Where(item => item % 2 == 1).ToArray();
    }
	
    public static int[] GiveMeTheOddNumbers2(this int[] array)
    {
        var result = (from item in array
                    where item % 2 == 1
                    select item).ToArray();
	
        return result;
    }
}
```
That was simple; just put **this** in front of the parameter with the type you are extending. I showed him both old style and extension style calls

```csharp
// Old style call
Test.GiveMeTheOddNumbers1(_array);

// Extension style call
_array.GiveMeTheOddNumbers1();
``` 
I highlighted him in bold the efforts Microsoft is spending on backward compatibility and how C# enables us to improve our code with new language fatures without breaking old code.

### Generics

Introduction of generics into C# was a big event back in those days. Generics improved our lives and code. I personally think that C# has a very clean generics implementation; to the point with minimal effort.

Here is a simple generic method

```csharp
public static class Test
{
	/* Previously defined extension methods here*/

    public static string[] AllItemsToString<T>(this T[] array)
    {
        var result = (from item in array
                    select item.ToString()).ToArray();

        return result;
    }
}

``` 
I also showed him how C# compiler can infer types in case of generics along with explicitly providing the type.

```csharp

// Type inference for generics 
var result3 = _array.AllItemsToString();

// Explicitly provide the generic type 
var result4 = _array.AllItemsToString<int>();

```

### Constructors and method overloading
Constructors, in some languages called initializers, and method overloading are very basic concepts and easy to grasp features for all languages. My colleague asked how initializers are written in C# and here is the a minimal class with explicit default constructor 

```chsharp
public class Person
{
    public Person()
    {
        
    }
}
```
That was easy for him to grasp and next I showed him a constructor overload along with couple of auto properties and an expression bodied auto property with string interpolation. 

```csharp
public class Person
{
    public string FirstName { get; set; }
    public string LastName {get;set;}
	 public string FullName => $"{FirstName} {LastName}";
    
    public Person()
    {

    }

    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
}
```
Here is how we initialize a person instance, assign values to properties and use properties with string interpolation

```csharp

var person1 = new Person();
person1.FirstName = "Ali";
person1.LastName = "Özgür";

var person2 = new Person("Arda","Özgür");

```

### Variable number of parameters and optional parameters
Variable number of method params and optional params are another great feature in C#. While I was showing my collage the method overloads actually he asked me how he can pass method params as key value pairs. That was the chance and here is what I showed him


```csharp
// Method with optional param
public string SayHelloTo(string who = "Person")
{
    var self = FullName??"a guy who loves C#";
    return $"Hello {who}! Nice to meet you, I'm {FullName}";
}

// Method with variable number of params
public string SayHelloTo(params string[] who)
{
    var self = FullName??"a guy who loves C#";
    var people = String.Join(",",who);

    return $"Hello {people}! Nice to meet you, I'm {FullName}";
}
``` 
And usage

```csharp
var salute1 = person1.SayHelloTo();
var salute2 = person2.SayHelloTo("Utku");
var salute3 = person2.SayHelloTo("Tuna","Utku","Seniha");
```
Here is the answer to his question

```csharp
// Method with a dictionary parameter
public string SayHelloTo(Dictionary<string,string> who)
{
    var self = FullName??"a guy who loves C#";
    var fullNames = from x in who
                    select $"{x.Key} {x.Value}";    
    var people = String.Join(",",fullNames);

    return $"Hello {people}! Nice to meet you, I'm {FullName}";
}
```
And the usage (note the dictionary intiailizer syntax)

```csharp
var salute4 = person2.SayHelloTo(new Dictionary<string,string>{
	{"Utku","Gülfiliz"},
   {"Tuna","Gülfiliz"},
   {"Seniha","Özgür"}
});
```

## Conclusion
This was a great hands on experience. I think Microsoft is on the right track and doing well with VS Code, .NET Core and all other open source efforts. Thank you [Uğur Özyılmazel (aka Vigo)](http://ugur.ozyilmazel.com) asking me that one simple question and letting me walk you through something I'm passionate about. Microsoft guys, especially [Anders Hejlsberg](https://twitter.com/ahejlsberg) also thanks to you for building these great things.

## Some criticisim
Well, there is always room for improvement. Here are couple of things I think need attention

* Default support for NuGet on VS Code can make the experience for newbies more smooth
* NuGet packages for .NET Core are few in numbers. I think this will improve as .NET Core is finalized. I guess we will experience a classical version 1 issue with the .NET Core support for our favourite packages (Humanizer for example)
* Microsoft made lots of things open source and new projects like .NET Core are developed as open soure projects from day one. This is great but also raises some confusion in the community as well as in Microsoft. I think Microsoft shoul take special care on naming and versioning things.
* What will .NET Core bring to enterprises is still a big question. We know ASP.NET and Entity Framework will run on .NET Core but what about enterprise frameworks like WPF, WCF and ADO.NET? 

## One last note on F\# 

F# is a great language and I always felt the joy of coding some F#. I pointed my collague to F# as well. I think Microsoft and C# guys owe a great deal of gratitude to F# community and guys like [Don Syme](https://twitter.com/dsyme).  

## Full Code
Below is the full source code. A naive introduction to .NET and C# on OSX in 123 lines of code.

```csharp
using System;
using System.Linq;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        static int[] _array = new int[5]{1,2,3,4,5}; 
        public static void Main(string[] args)
        {
            // Old style static method
            var result1 = Test.GiveMeTheOddNumbers1(_array);

            // New style extension method
            var result2 = _array.GiveMeTheOddNumbers1();
        
            // Type inference for generics
            var result3 = _array.AllItemsToString();

            // Explicitly provide the generic type 
            var result4 = _array.AllItemsToString<int>();

            var person1 = new Person();
            person1.FirstName = "Ali";
            person1.LastName = "Özgür";
            Console.WriteLine($"First person is : {person1.FullName}");

            var person2 = new Person("Arda","Özgür");
            Console.WriteLine($"Second person is : {person2.FullName}");
            

            var salute1 = person1.SayHelloTo();
            Console.WriteLine($"{salute1}");

            var salute2 = person2.SayHelloTo("Utku");
            Console.WriteLine($"{salute2}");

            var salute3 = person2.SayHelloTo("Tuna","Utku","Seniha");
            Console.WriteLine($"{salute3}");

            var salute4 = person2.SayHelloTo(new Dictionary<string,string>{
                {"Utku","Gülfiliz"},
                {"Tuna","Gülfiliz"},
                {"Seniha","Özgür"}
            });
            Console.WriteLine($"{salute4}");

            Console.WriteLine("Hello World!");
        }
    }

    public static class Test
    {
        public static int[] GiveMeTheOddNumbers1(this int[] array)
        {
            return array.Where(item => item % 2 == 1).ToArray();
        }

        public static int[] GiveMeTheOddNumbers2(this int[] array)
        {
            var result = (from item in array
                        where item % 2 == 1
                        select item).ToArray();

            return result;
        }

        public static string[] AllItemsToString<T>(this T[] array)
        {
            var result = (from item in array
                        select item.ToString()).ToArray();

            return result;
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName {get;set;}
    
        public string FullName => $"{FirstName} {LastName}";

        public Person()
        {

        }

        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        // Method with optional param
        public string SayHelloTo(string who = "Person")
        {
            var self = FullName??"a guy who loves C#";
            return $"Hello {who}! Nice to meet you, I'm {FullName}";
        }

        // Method with variable number of params
        public string SayHelloTo(params string[] who)
        {
            var self = FullName??"a guy who loves C#";
            var people = String.Join(",",who);

            return $"Hello {people}! Nice to meet you, I'm {FullName}";
        }

        // Method with a dictionary parameter
        public string SayHelloTo(Dictionary<string,string> who)
        {
            var self = FullName??"a guy who loves C#";
            var fullNames = from x in who
                            select $"{x.Key} {x.Value}";    
            var people = String.Join(",",fullNames);

            return $"Hello {people}! Nice to meet you, I'm {FullName}";
        }
    }
}

```

{% include share_twitter.html %}

***

{% include disqus.html %}


