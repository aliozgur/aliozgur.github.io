---
layout: page
title: Projects
subtitle: "Couple of things I'm proud of"
#header-img: "img/projects-bg.jpg"
permalink: /projects/
---

This page is intended to provide some background and details for couple of projects I was involved with during my professional career. 
I think these projects, among many others, helped me shape my software development skills. 

If you want to see all the projects I was involved with [please visit my LinkedIn profile](http://linkedin.com/in/aliozgur)

## PragmaSQL
PragmaSQL is a T-SQL editor which I've started developing during summer of 2005. 
The initial name was InfoSQL which was developed with Delphi 6.
In 2007 I've ported InfoSQL to .NET and renamed the project as PragmaSQL.
By the end of 2007 I've implemented tons of features and I published PragmaSQL as a commercial product.

After maintaining PragmaSQL as a commercial product more than for two years I've decided to open source the code.
PragmaSQL is now at version 3 and is still [open source](https://github.com/aliozgur/pragmasql) and maintained.
PragmaSQL got The Code Project's Members Choice Award in General Database Tools category in 2009 and 2010

>Bilgi University Software Development Team still uses PragmaSQL as the main T-SQL editor which provides 
object history tracking and other great features. 

**Tools and Technologies**

* Microsoft SQL Server
* .NET, C#, WinForms and Reflection
* SharepDevelop AddIn support
* SDK for extensibility
* License validation 


## TaksiTV
TaksiTV started around 2009 and it was one of the greates projects I was involved with. The project started with the vision to bring 
credit card payment, advertisements and route display to all cabs in İstanbul/Turkey. The device used on cabs was a 
[series 9000 MDT](http://www.mobile-knowledge.com/products/driver-solutions/series-9008-mdt/) which was running WindowsCE 
and had GPS and 3G capabilities. Communication to the device was possible over a custom TCP protocol which was handled 
by a pre installed C++ application by MobileKnowledge.

I've developed a web content management and distribution system, couple of intelligent map extraction tools for this project.

>TaksiTV was deployed to couple of cabs for testing. Test setup was successfull and the company
was hunting for investors to organize the operations and other business stuff. However, due to some 
financial issues the project was cancelled after 1 year of development and testing by the company. 

**Tools and Technologies**

* Microsoft SQL Server
* ASP.NET
* C++
* Client/Server communication over TCP

## eXpressOto 
eXpressOto is a vehicle repair services and management application developed for 
[İSBAK](http://www.isbak.com.tr/en) which is a public company partially owned by İstanbul Municipality. 

eXpressOto was the first application I've developed with Microsoft Entity Framework as Object Relational Mapper. 
The ORM things was not new to me because I've developed number web applications with NHibernate 
(starting from version 0.5 as far as I can remember), LLBLGen Pro and SubSonic. 
But with eXpressOto I had the chance to explore all those great things offered by EF 
(I admit EF was hard than enough to work with at that time).

>eXpressOto is still in active use and runs the whole repair services process that result in multi million dollar transactions annually.

**Tools and Technologies**

* Microsoft SQL Server
* .NET, C#, WinForms and reflections
* Entity Framework 4
* Developer Express components and reporting tools

## JiraTouch

When I got my first iPod in 2009 I was enlightened with the fact that I could develop apps for this magical device and as a bonus
the app would work on the relatively new but yet very popular smart phone called iPhone. I discussed the idea with couple 
of fellow developers and we decided to create a mobile app for Jira. 

I've been a Jira user for more than 10 years and I've already developed a PragmaSQL addin for Jira. 
I was familiar with SOAP Api so that would be a piece of cake for me and the team to create a mobile app.
We purchased a used MacBook and started developing the app with the first version of MonoTouch. 
It has been a tough journey with lots of unknowns and new things. Platform was new, development tools were new 
and the team was new. The only knowns were Jira and the C# language. By the end of February in 2010 we published
the first version of JiraTouch on Apple AppStore with 9.90$ price tag. JiraTouch was the first mobile app for Jira
with extensive support for workflows, custom fields, file uploads, comments and bunch of other features.

> JiraTouch got thousands of downloads and was mintained by PragmaTouch team until 2013.

**Tools and Technologies**

* MonoTouch and C#
* Jira SOAP API
* iPhone (iOS) SDK


## MoodleTouch and MoodlEZ
After shipping JiraTouch in 3 months and gaining enough experience on mobile application development and MonoTouch we decided to focus on our next big mobile thing. We had couple of brain storming session with the PragmaTouch team and evaluated some ideas for a while. During the evaluation period we have developed couple of business apps and basic games and published them on Apple AppStore. But these free and basic apps had little chance to suceed in terms of number of downloads and generate revenue so that we can continue the PragmaTouch business. 

Team members of PragmaTouch were all employed by Bilgi University and Bilgi was using [Moodle](http://en.wikipedia.org/wiki/Moodle), an open source [Learning Management System](http://en.wikipedia.org/wiki/Learning_management_system) to deliver some online courses. We were all familiar with Moodle and Moodle did not have any mobile application yet. So we decided to create an iPhone app for Moodle. We organized the team so that one member would develop the UI, one would work on the core part of the application and one would manage the project and all other boring advertising and commericial stuff including customer support. But before we started the coding the Core developer had to jump to another project so I was the one to handle all parts other than the UI.

Initial version of MoodleTouch Core was protoyped in 2 weeks. The main diffuculty during this process was the internals of Moodle. Moodle had no SOAP or REST api (current versions have a very limited API) so we had to scrape HTML and manage authentication through cookies. The HTML produced by Moodle was horrible, most of the Core code was developed to extract and organize the HTML as meaningfull chunks of information, the rest was for automating the user interaction (something like a browser with macros).

The first version of mTouch for iPhone was released on April 4 in 2010, that was after 1 month of JiraTouch release. We published mTouch as a paid app with 2.99$ price tag. mTouch received too much attention from the Moodle community, some people liked the app yet some people criticized us for developing a paid app for an open source and free system like Moodle. After the initial release we delivered new versions continuosly based on customer feedback. 

During the summer of 2010 we focused our efforts on an iPad version of mTouch named mTouch+. We developed an iPad optimized UI which was using the same Core as mTouch. mTouch+ was released by the end of September in 2010. Short after this release Moodle announced version 2.0 on November 2010 which introduced fundamental and breaking changes for our apps. We started to work on compatibility issues and within couple of weeks we released Moodle 2.0 compatible versions of our apps. 

During 2011 we developed and released two more Moodle apps, moodlEZ for iPads and mTouch-U for browsers. 2011 was a very productive year for PragmaTouch team.

MoodleTouch was the first mobile Moodle app. We had couple of competitors, including MoodleHQ, but these efforts did not last too long. Today MoodleTouch is the best and most functional native iOS app for Moodle with support for all standard Moodle modules and does not require any server side installation or tweaking. Students or teachers can begin using MoodleTouch right away.

**Tools and Technologies**

My role in this project was to develop the Core, manage the project and handle all commercial stuff including customer support and white labeling agreements.

* MonoTouch and Xamarin for iOS
* .NET, C#
* ASP.NET MVC
* Moodle

> mTouch, mTouch+, moodlEZ and mTouch-U are all in production and used by thousands of students and teachers around the globe. These apps are actively maintained by PragmaTouch and new versions are published regularly. These apps were also white labeled to universities, k12 schools and other educational instututions around the world.

## SUGES
SUGES is a DCU and RTU data collection and control system. Me and my team at PragmaTouch developed SUGES for a natural 
gas and electricity distribution company located in Turkey. The main purpose of the system is to collect and display sensor data from DCU and RTU devices 
and manage the devices installed on the field. SUGES was designed and implemented with horizontal scalability in mind.

> SUGES is still in production and is used by the company to monitor and manage the natural gas collectors. 

**Tools and Technologies**

* .NET and C#
* ASP.NET MVC
* ServiceStack
* Quartz.NET
* Redis
* Microsoft SQL Server
* SuperSockets TCP/IP server

## VoltPMS

VoltPMS is power plant monitoring system developed for [VOLT](http://volt.com.tr/), a leading IT service provider for energy industry. VoltPMS project was completed in 4 months including design and implementation. We developed a high volume data storage model, a web application with management and analytics capabilities, web services and multiplatform mobile applications

[Some VoltPMS mobile app screenshots](https://app.box.com/s/ga8sudzm8hkct7fbpr6iqbhei7k6hfk6)

**Tools and Technologies**
My role in this project was to design the system, develop the Core, web services and the mobile applications

* .NET, C#
* Xamarin Tools (Xamarin Forms)
* ASP.NET MVC and Web API
* Microsoft SQL Server
* Entitiy Framework
* Hangfire

## Laureate LENS


## BilgiCampus

