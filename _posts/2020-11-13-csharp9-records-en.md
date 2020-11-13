---
layout: post
title: "C# 9 Records"
subtitle: "What is wrong with records?"
date:  2020-11-13 15:21
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags:
  - C#
  - Programming
---

Microsoft released .NET 5 couple of days ago which comes with a new version of C#, namely C# 9. In this blog post I will not rant about the beauties of the record types in C# 9, rather I will try to warn my fellow developers about couple of issues I've noticed about the record types.

<!--end-of-excerpt-->

I guess fair amount of the developers working with ALGOL like object oriented languages heard of [Tony Hoeare's (inventor of null)](https://en.wikipedia.org/wiki/Tony_Hoare) apology about the null reference. Speaking at a software conference in 2009, Tony Hoare apologized for inventing the null reference. He said "I call it my billion-dollar mistake. It was the invention of the null reference in 1965.".

When I started mocking up with the new record types I noticed couple of issues which might not be another billion-dollar mistake but may hurt many of us at the end of the day.

## Problem-1 : Are records really immutable by default?
Microsoft advertises the new record types being immutable by default [[1]](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9). But the truth is; it depends. Let's see why.

### Positional Record Definition

```csharp

// This is how we define a positional record
public record Person(string FirstName, string LastName);

```
When you declare the positional Person record, the C# compiler generates backing `initonly` fields for the `FirstName` and `LastName` properties along with compiler generated `get_FirstName()` and `get_LastName()` property getter methods.

So, it is clear that if you declare positional records there is no way to mutate the properties thus the proposition "records are immutable by default" is true as long as we use positional records.

### Class Like Record Definition
```csharp

// This is an alternative method to define a record
public record Person
{
	public string FirstName{get;set;}
	public string LastName{get;set;}

	public Person(string firstName, string lastName) => (FirstName, LastName) = (firstName, lastName);
}

```

This alternative definition looks like a regular class definition (use `record` keyword instead of `class` ). `FirstName` and `LastName` are defined as regular mutable (hence set) properities.

So, the proposition "records are immutable by default" is true as long as we define our properties as `getter only` properties.

### Conclusion
If "records are immutable by default" I would expect the C# compiler to throw errors for the mutable `FirstName` and `LastName` properties.


### Some C# history on deconstruction
Back in 2017, Microsoft introduced new syntax and some convenience methods for tuples with C# 7. Below is a little reminder for creating tuple values.

```csharp
// create a tuple
var person = (FirstName:"Ali", LastName:"Özgür");
```

Along with the new tuple sysntax we got a convenience method to deconstruct tuples so that we can extract single values of the tuples. Here is an example.

```csharp
// extract FirstName and LastName to firstName and lastName variables
var (firstName, lastName) = person;

// extract FirstName to fn varible, but discard LastName with _
var (fn, _) = person;

// extract LastName to ln varible, but discard FirstName with _
var (_, ln) = person;

// discard all
var (_, _) = person;

```

Deconstruction is not limited to tuples. With C# 7 we could define a specially threated `Deconstruct` method on any type and extract values from an instance with tuple-like deconstructions. Let's remeber how is that possible.

```csharp
public class Person
{
	public string FirstName { get; set; }
	public string LastName { get; set; }

	// This is our specially threated Deconstruct method
	public void Deconstruct(out string firstName, out string lastName)
	{
					firstName = this.FirstName;
					lastName = this.LastName;
	}

	// With the help of Deconstruct method all these usages are possible
}

// Create an instance of Person class
var person = new Person{FirstName="Ali", LastName="Özgür"};

// extract FirstName and LastName to firstName and lastName variables
var (firstName, lastName) = person;

// extract FirstName to fn varible, but discard LastName with _
var (fn, _) = person;

// extract LastName to ln varible, but discard FirstName with _
var (_, ln) = person;

// discard all
var (_, _) = person;

```

## Problem-2: Sysnthesized deconstruct method for records
The C# compiler generates (sythesizes) a `Deconstruct` method for your record types. With this synthesized method tuple-like deconstruction works for our record types auto-magically. Let's see what I mean.

```csharp

// This is our positional record definition
public record Person(string FirstName, string LastName);

// All of the following deconstruction sentences are valid
var (firstName, lastName) = person;
var (fn, _) = person;
var (_, ln) = person;
var (_, _) = person;

```

Let's use deconstruction in action and develop a hypothetical if/else logic which uses the `firstName` variable which holds the value of our `FirstName` property.

```csharp
var (firstName, lastName) = person;
if(firstName == "Ali")
{
	// Do some magic here
}
else
{
	// Another magic here
}

```

No worries up until now, deconstruction provides a nice syntax for extracting propery values from our records. So, lets assume that couple of months pass by and someone changes the order of the properties in our positional record definition.

```csharp

// Modified definition. LastName is now the first property
public record Person(string LastName, string FirstName);

```

This change will not generate any compiler errors and our hypothetical if/else code which depends on the extracted firstName (by deconstructing we assumed firstName is the first property) value will not function as expected.

```csharp
var (firstName, lastName) = person;
if(firstName == "Ali")
{
	// Do some magic here
}
else
{
	// Another magic here
}

```

### Conclusion
Actually, the problem explained above has nothing to do with record types. I think deconstruction is broken from day one when it was first introduced in 2017. We know Microsoft brings some F# langıage features into C# which is good most of the time, but that is not the case for deconstruction.

Here is the same deconstruction example this time in F#. F# does not allow us to extract the record propery/field values to simple types like in C#. That is because F# uses `pattern matching` instead of sytnhesized a `Deconstruct` method which relies on positions of the record properties.

```fsharp
// Define person record type
type Person={FirstName:string;LastName:string;}

// Pattern match and extract person properties/field values to firstName and lastName
let { FirstName=firstName;LastName=lastName } = person

// Pattern match and extract FirstName to firstName, discard LastName
let { FirstName=firstName;LastName=_ } = person

// Pattern match and extract FirstName to firstName, discard LastName
let { FirstName=firstName} = person

```

## Problem-3: Tooling Issues
Personally, I think the tooling around C# language was always best of its breed. What I mean by tooling is not just the IDEs, editors or compilers but other facilities like code inspections, debugger visualizations and refactoring helpers.

"Find References" is one of the tools I use frequently. No need to explain why one needs to find references of a property. Below is our infamous Person record type.

```csharp
public record Person(string FirstName, string LastName);

class Program
{
		static void Main(string[] args)
		{
				var person = new Person("Ali", "Özgür");

				var (firstName, lastName) = person;

				var kid = person with { FirstName = "Arda" };
		}
}
```

On `Visual Studio for Mac` when I select FirstName and try to find references of this property here is what I get.

![C# 9 - Records - Find References]({{ root.url }}/media/
record_csharp9_findrefs.jpg)

But, I would expect `Visual Studio for Mac` to report all the lines which directly or indirectly (deconstruction line) reference the `FirstName` property.


Here is the same code in F# this time.

```fsharp
open System

type Person={FirstName:string;LastName:string}

[<EntryPoint>]
let main argv =
    let person = {Person.FirstName="Ali"; Person.LastName="Özgür"}

    let kid = {person with FirstName="Arda"}

    printfn "%A" kid
    0 // return an integer exit code
```

When I select FirstName and hit find references, here is what `Visual Studio for Mac` gives me.

![F#  - Records - Find References]({{ root.url }}/media/
record_fsharp_findrefs.jpg)



### Conclusion
The issue with Find References might be specific to `Visual Studio for Mac` and that is you to check if it is the same for `Visual Studio`.

## Final Words On Record

I really liked the idea of value based equality coming to C# with record types. But, I would treat

* Deconstruction and
* Class like record type definitions

bad practices which might lead to unexpected results in runtime.


***
{% include share_twitter_tr.html %}

***
