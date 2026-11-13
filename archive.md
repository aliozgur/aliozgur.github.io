---
layout: page
title: Archive
subtitle: "Blog time machine"
header-img: "img/header-archive.svg"
permalink: /archive/
---


{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}