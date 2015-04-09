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


<!--end-of-excerpt-->

![Migrate Subversion to Git]({{ root.url }}/media/git-migration/migration.png)


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
 
> I confess, I was involved with the installation process and sat by our [system admin's (Karaca Ahmet İnce)](https://www.linkedin.com/pub/karaca-ahmet-ince/2/b55/868) side while he was setting things up. And I also need to mention that we installed GitLab 3 or 4 times until we got it working properly.

### Train The Team

We had couple of people, including myself, who have been using Git, but for the majority Git was new. So I decided to train the team myself since I was the author of the [Git 101 in Turkish](https://www.gitbook.com/book/aliozgur/git101/details) book. The first repository I've created in Git was GitPlayground. I designed 11 practices on GitPlayground using Wiki pages (You can create wiki pages for repositories in GitLab). I covered one concept at a time with enough description, links to other more detailed resources, couple of practices with Git receipts and questions. Then for three weeks, with one day off at most, me and a [colleague (Tolga Kürkçüoğlu)](https://www.linkedin.com/pub/tolga-kurkcuoglu/1/154/90) visited everyone on their desks and spend 10 minutes to cover the current practice.

If you want people to learn and start using as soon as possible keep these points in mind

* Keep your sessions short
* Task oriented short practice sessions are easier to follow
* Train every day until sessions are completed 
* Visit everybody on their desk and walk through the current practice
* Training should happen just before you start the migration. Do not let people forget what they've learned.
* Ask questions and leave them curious 
* Share links to more detailed content
* Compare Subversion and Git concepts to an extent. Too much comparison can raise questions like "So, why we use Git?" and make people resistant to the change
* Be prepared to questions like "Why do we practice with Git CLI instead of a visual client like SourceTree?"


*Below you can see a practice session content (in Turkish)*

![GitPlayground Wiki Sample]({{ root.url }}/media/git-migration/01.png)

### Review Your Subversion Repositories

If you have too many repositories like we do you need to make sure which repositories are in use and which repositories are just for testing and possibly contain nothing but junk. 

You can look at the following items to determine the migration candidates and their priorities

* Inspect last commit times of your Subversion repos
> You can identify repos which you will not migrate or which you will archive in Git after migration 

* Check your service/system/application/module catalog and identifty repositories contain frequently commited code but are still running in production
> Last commit time is not enough by itself to determine the dead repos. You need to know what is running in production 

* Identify projects cancelled due to business priorities but have future potential
> Business changes all the time. They want something one day but forget what they wanted or cancel something just because of strange cooperate politics. 

* Check your release notes, new requests and whatever materia you have to identify hot projects with upcoming releases
> If your team is new to Git you might not want to put another variable in a hot project. Migration will also take time and if you choose a clear cut or all at once migration strategy you will have to make Subversion repos readonly and ask them to stop committing.

* Identify the dependencies between your repositories
> You might have Externals definitions which will change the order and priority of the repositories to be migrated

Besides all these categorization and decisions you have to make sure that your your Subversion tags and branches **do not contain whitespace**. *git svn clone* will fail and stop. If you happen to have whitespaces in your tags or branches, just trim them or copy them under renamed Tags and Branches folder. In our case I created *MigrateTags* and *MigrateBranches* folders and used *svn copy*. Please note you can specify your tags and branches folder names for *git svn clone* command.


### Decide on migration strategy

You need to choose a strategy based on results  of the Subversion Repository Review. Which strategy you will follow matters since the amount of migration work will change based on your strategy. 

* Choose to migrate **all at once** if
 * You do not have any hot projects (may be couple of) in development with tightly scheduled deadline
 * Number of repositories is low or number of revisions in your repositories is relatively low

* Choose **clear cut** if
 * You are already confident with your team's Git skills
 * You have couple of repositories

* Choose to migrate **with transition period** if
 * You are ok with multiple source control systems
 * You are ok with periodical Git-Subversion syncs
 * Your system admins accept to backup two systems instead of one

You might of course mix and match the strategies above. You can migrate most of you repositories with a clear cut strategy but migrate couple of repositories with a grace period. Alternatively you can leave some hot projects in Subversion for a while and migrate them later. But keep in mind what strategu you choose will be specifc to your organization and deeply effected by the result of Subversion repository reviews.

> If you do not care about the commit history of your Subversion repositories you can simply export your Subversion repository, create a local Git repository over the exported one and then simply push your local Git repo to a remote. This strategy might also be handy for repositories with small number of unimportant changes.


So, what we did? We choose *clear cut most of all at once* strategy. We identified 65 repositories to migrate and 6 of them would be archived and couple of them would be merged under a single Git repository. After the migration we ended up with 51 Git repositories. Pretty impressive since we used to have 120 Subversion repositories 

### Migrate from Subversion to Git
This is the most technical part of this blog post. After lots of training, reviews and planning lets see some Git commands which will help you migrate your Subversion repositories with commit history.

**Step-1** 

Extract usernames from your subversion repository with the following command

```bash
$ svn log --quiet <YOUR SVN REPO URL> --username <YOUR SVN USERNAME> | grep -E "r[0-9]+ \| .+ \|" | cut -d'|' -f2 | sed 's/^ //' | sort | uniq
```
The command above will dump the usernames to your terminal screen, you can alternatively pipe the output to a text file. Your text file should contain one line for each Subversion user conforming to the following format

```
username1 = User 1 Full Name <user1@company.com>
username2 = User 2 Full Name <user2@company.com>
username2 = User 3 Full Name <user3@company.com>
```

**Step-2**

Clone your Subversion repository to your local as a Git repository. You can use *git svn* to clone your Subversion repository to your local. But if you do not want to be tackle with all the details required by svn clone you can use [svn2git](https://github.com/nirvdrum/svn2git) which is tiny utility for migrating projects from Subversion to Git while keeping the trunk, branches and tags where they should be. In order to use svn2git make sure that you have Ruby installed then just install the svn2git gem. 

```bash
$ gem install svn2git
```
You now should have svn2git and begin to clone your repository

```bash
$ svn2git <SVN REPO ROOT URL> --username <SVN USERNAME> --authors users.txt --trunk trunk --branches branches --tags tags
```

That is it, now you can grab a cup of cofee and wait while your Subversion repo is being cloned or you can alternatively go and kill some more bugs.

**Step-3**

Create a remote repository on your Git server. Copy the SSH or HTTP address. You will need this address once cloning your Subversion repository is completed.

**Step-4**

Once the clone operation is completed you can add remote for your local Git repository and push to the Git server.

```bash
$ git remote add origin <GIT REMOTE ADDRESS>
```

If you have Subversion ignore definitions you will need to move them to a **.gitignore** before pushing your local to the remote.

```bash
$ git add .gitignore
$ git commit -m ".gitignore added"
```

If you have Externals definitions on your Subversion repository you will need to redefine them as Git submodules. The following command adds a tracking submodule from the specified Git repository to the specified path

```bash
$ git submodule add -b master <GIT REPO ADDRESS> <SUBMODULE PATH>

# update your submodule
# --remote will also fetch and ensure that
# the latest commit from the branch is used
$ git submodule update --remote

$ git add .submodules
$ git commit -m "Submodule added"
```

> After you add the submodule open your projects and make sure to update your references and commit the changes.

Now it is time to push your local Git repository to the remote Git server

```bash
$ git push --set-upstream origin master # push to the remote
$ git push --tags # Optional, if you have tags push them to the remote
$ git push --all # Optional, if you have branched push them to the remote
```
**Step-5**

If you installed GitLab and your team is located in a country with a non English locale you need to verify that your development tools and editors support UTF-8 and this feature is turned on. If you forget this step you might end up with screwed strings and GitLab will not be able to display some characters.

### Enjoy Git

Our migration process was completed within 3 days. As I've mentioned previously we identified 65 repositories to migrate and 6 of them were migrated and then archived on Git and couple of them were merged under a single Git repository. After the migration we ended up with 51 Git repositories. We made all Subversion repositoies readonly. Since then we deployed number of fixes and couple of new versions from Git. We will follow the Centralized Git Workflow which is a natural fit for teams with Subversion background and probably transition to [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) or [GitLab Workflow](https://about.gitlab.com/2014/09/29/gitlab-flow/) later.

***

{% include share_twitter.html %}

***

{% include disqus.html %}
