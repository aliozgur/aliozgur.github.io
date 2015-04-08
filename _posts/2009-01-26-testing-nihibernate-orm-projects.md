---
layout: post
title: "Testing NHibernate projects"
subtitle: ""
date:  2009-01-26 09:11
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - C#
  - .NET
  - NHibernate
  - ORM
---

Based on [one of my articles](http://blog.pragmasql.com/post/Writing-NHibernate-Level2-cache-usage-tests.aspx) [Artem Smirnov](http://www.codeproject.com/script/Membership/Profiles.aspx?mid=646967) posted a question about how to test a Repository(DAL) method in a project using Nhibernate as ORM. Here is his question

"I wanted to unit test a similar, but more common, problem: a Repository method. I.e., create a test Order for a particular date, and test that the FetchOrdersByDate method returns this order if the date matches. My guess was that I could just create an Order, attach it to the session without saving it to the database, then somehow stub the database and make NH fetch it from the cache. After doing a lot of search, I discovered that this is impossible, so I had to hit the database for every test. Given that NH looks extremely flexible, i.e., Interfaces everywhere, this is kind of strange.."

Here is my answer

The problem related to testing a Repository method is a very common one and people suggest different solutions to this problem. Here are some of them

* Mock your Repository method by using a Mocking library or by hand. But this suggestion is not valid all of the time. If you have native SQL or use NH Transformers to produce DTO's mocking is not an option.

* Use an in-memory database like SQLite for your tests. But if you have native sql or develop against a legacy database or use part of a legacy database you can not follow this approach 

* Take script of your production database and create an empty test database. Run your tests against the test database. This method also have some drawbacks, to name few, tests take longer to run, you have to keep your test database up to date with the live one, you have to deal with some phantom objects not directly managed by your domain ( for example your domain contains Instructor class just for integrity reasons and you do not have code to deal with Instructor instantiation because you do not actually need this piece of function. But somehow you have to create Instructor objects for testing). You can solve the first two problems with Continuous Integration, but the later can be tricky to solve. However this last approach has one big outcome, that is, you will likely have failing tests if something goes wrong with your database.

I personally tend to follow the last approach for NH specific testing and write pure unit tests otherwise. 
