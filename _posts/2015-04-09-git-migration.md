---
layout: post
title: "Farewell Subversion, Hello Git"
subtitle: "Subversion to Git Migration"
date:  2015-04-09 12:46
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - Software
  - Git
---

At Istanbul Bilgi University Software Development Team we have been using Subversion for nearly 10 years. I was the person who introduced Subversion to the team in 2005. During all those years we have created lots of repositories, to give you the exact number we have 121 repositories. Around 100 of these repositories include source code for different systems, applications or modules. Around 20 of those repositores are just junk. We have a repository per system, application or module. I guess this bit of information is enough to give you an idea about the overall migration work we need to perform.  

**This post is a work in progress**

<!--end-of-excerpt-->

### What is wrong with Subversion ?

Actually, in our environment nothing was seriously wrong with Subversion. We were using [centralized workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow) and most of the time only one or two developers were modifying a single repository. For some repositories we had more than two developers but theye were working on differet parts. Our repositories had the defacto Subversion repository structure (trunk, branches and tags), for some projects we were using application versioning and we were tagging each version, applying bug fixes to tagged versions and merging the fixes back to trunk. For couple of other repositories we used to have branches and merging some new features back to trunk.

But still there were couple of things bothering me. For the last 4 years I was in charge of managing the Platform and Services team which was the team commiting to the majority of the Subversion repositories I've mentioned above. As my daily management task I was in need to see the commits and be notified, browse the repository from web. Actually Subversion was capable of delivering all this information but what I wanted was an environment more or less like GitHub or Bitbucket. During the past 10 years we tried different tools but we were not satsified. The worst part was as Git was becoming popular the effort put on Subversion tools was decreasing.

Before jumping to the migration process I should mention two great Subversion tools [TortoiseSVN](http://tortoisesvn.net/) and [AnkhSVN](https://ankhsvn.open.collab.net/) Visual Studio AddIn. I want to present my special and most sincere gratitudes to the people delivering those great tools.

Thanks Subversion, you served us well for 10 years and it is time for us to move on.

### Migration Plan

All perfect projects need an action plan. Here is a list of actions you should consider before executing the migration.  

* Install Git
* Train the team
* Review Your Subversion Repositories
* Decide on migration strategy (all at once, clear cut or with transition period)
* Migrate from Subversion to Git

### Install Git

This is a system administration kind of task. Our system admins installed Git on a WMWare instance running Gentoo (a Linux distribution). You have to do some capacity and resource planning. Since we wanted to have more than Git itself we based our capacity and resource planning on [GitLab Requirements](https://github.com/gitlabhq/gitlabhq/blob/master/doc/install/requirements.md) document

Here is our final software setup running on Gentoo server

* Git (2.0.5)
* GitLab Community Edition (1.7.8)
 * Apache
 * MySQL
 * Redis
 * SSH and SSL
 * Ruby
 * Ruby on Rails
 

### Train The Team

We had couple of people, including myself, who have been using Git, but for the majority Git was new. So I decided to train the team myself. The first repository I've created in Git was GitPlayground. I designed 11 practices on GitPlayground using Wiki pages (You can create wiki pages for repositories in GitLab). I covered one concept at a time with enough description, links to other more detailed resources, couple of practices with Git receipts and questions. Then for three weeks, with one day off at most, me and a [coleague](https://www.linkedin.com/pub/tolga-kurkcuoglu/1/154/90) visited everyone on their desks and spend 10 minutes to cover the current practice.

If you want people to learn and start using as soon as possible keep these points in mind

* Keep your sessions short
* Task oriented short practice sessions are easier to follow
* Train every day until sessions are completed 
* Visit everybody on their desk and walk through the current practice
* Training should happen just before you start the migration. Do not let people forget what they've learned.
* Ask questions and leave them curious 
* Share links to more detailed content
* Compare Subversion and Git concepts to an extent. Too much comparison can raise questions like "So, why we use Git?" and make people resistant to the change


*Below you can see a practice session content (in Turkish)*

![GitPlayground Wiki Sample]({{ root.url }}/media/git-migration/01.png)

### Review Your Subversion Repositories

### Decide on migration strategy

### Migrate from Subversion to Git