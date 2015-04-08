---
layout: post
title: "Book Review : JIRA Development Cookbook"
subtitle: ""
date:  2012-02-02 17:07
author:  "Ali Özgür"
published: true
tags: 
  - Book Review
  - Jira
---

Recently we have reorginzed our Jira and implemented a User Request project to get the user requests in a single Jira project with all components in place. With this implementation user requests are assigned to our team managers then they decide how these requests will be mapped to internal projects. We also implemented a custom workflow and at some point (User Test) the user request is assigned to the reporter (our users). When our users complete the tesing and indicate success or failure the request is assigned back to the team managers. This implementation is working pretty well. Our users no longer create issues in our internal projects and the team managers can control the workload and schedule of their teams. With this implementation we can also give to the point reports to the management. In future we plan to be able to dedicate a virtual budget for each department our users work for so that we can calculate a virtual cost and time spent reports for each department.

This implementation has one downside so far; when a user request is created team managers, most of the time, create one or more issues in internal projects. Team managers copy the user entered summary and description while creating issues in our internal projects which are then linked to user requests. When we started this project we were just cloning the user requests and then we were moving the cloned user request to our internal projects. But this usage was braking the continuity of the user request issue numbers. For example; when the original user request with key value of UR-1 is cloned  the cloned user request will have the key value of UR-2. When we move UR-2 to our internal project Jira will not reclaim UR-2 for the next user request instead the next user request will have UR-3 as the key value.

We felt uncomfortable with the discontinued issue numbers so we decided not to use clone/move method and just decided to manually copy user entered summary and description to the issues created in our internal projects. Manual copy/paste is tedious and prone to errors so I cecked out the web to see if Jira has some built in plugin which will allow us to Clone/Copy an issue from one project to another project. Unfortunately I found out that Jira does not have this feature or any plugin to perform this task easily.

The next step was to discover if we could implement this plugin ourselves. The book titled "Jira Development Cookbook" by Jobin Kuruvilla from Packt helped me to grasp the details of Jira plugin development. We will develop our own Issue Copy plugin for Jira, when we have some spare time from daily tasks.

I will share the source code of the plugin from my blog once it is completed, so stay tuned and take a look at ["Jira Development Cookbook" by Jobin Kuruvilla](http://www.packtpub.com/jira-to-develop-customize-plugins-program-workflows-cookbook/book) from Packt if you are interested in Jira development.