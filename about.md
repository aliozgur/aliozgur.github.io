---
layout: page
title: "Ali Özgür"
subtitle: About
nav_title: About
head_title: About
header-img: "img/header-about.svg"
permalink: /about/
---

<style>
  .about-intro::after { content: ""; display: table; clear: both; }
  .about-intro .about-side { float: left; width: 224px; margin: 0 32px 12px 0; }
  .about-intro .about-photo { display: block; width: 224px; height: 224px; border-radius: 50%; margin: 0; }
  .about-intro .about-text p:first-child { margin-top: 0; }
  .about-intro .social-links { justify-content: center; margin: 16px 0 0; }
  .about-intro .social-links a { width: 42px; height: 42px; padding: 0; justify-content: center; }
  .about-intro .social-links .label { display: none; }
  .about-intro .social-links svg { width: 18px; height: 18px; }
  @media (max-width: 767px) {
    .about-intro .about-side { float: none; width: auto; margin: 0 0 24px; }
    .about-intro .about-photo { width: 180px; height: 180px; margin: 0 auto; }
  }
</style>

<div class="about-intro">
  <div class="about-side">
    <img class="about-photo" src="/media/aliozgur-profile.webp" alt="Ali Özgür" width="224" height="224">
    {% include social_links.html %}
  </div>
  <div class="about-text">
    <p>I'm an engineering leader with over 20 years of experience in software development and more than a decade in engineering management.</p>
    <p>I build product-focused engineering organizations: autonomous teams, clear career and performance frameworks, and delivery processes that make outcomes predictable.</p>
    <p>My recent work spans Industry 4.0, where I led IIoT, data collection, monitoring and MES products for global manufacturers, and AI engineering, where I design and build production-grade agentic AI systems.</p>
  </div>
</div>

## Current Focus

My current focus is making AI-assisted and agentic software reliable in production. I write regularly about these topics on this blog:

* **Harness engineering** and **AI engineering FinOps** ([read more]({% post_url 2026-08-26-harness-engineering-ai-finops-part2 %}))
* **Spec-driven development** ([read more]({% post_url 2026-08-31-ai-formal-spec-driven-development %}))
* **Agent safety and governance** ([read more]({% post_url 2026-08-13-ai-safety-security %}))
* **AI engineering provenance** ([read more]({% post_url 2026-08-15-ab-yapay-zeka-tuzugu-claude-watermark-ai-provenance %}))

## Books

I'm particularly interested in the gap between software teams and the rest of the organization, which I explore in my latest book.

* **[Kodun Ötesi: Yazılım Takımları ve Organizasyonel Gerilim](https://kodunotesi.github.io/)** (2026). Why software teams so often end up at the center of organizational conflict, and how to build healthier organizations around them. Free to read online, in Turkish.
* **[Git ile Versiyon Kontrolü](https://www.dikeyeksen.com/products/git-ile-versiyon-kontrolu)**. Printed book, Dikeyeksen.
* **[F# ile Fonksiyonel Programlama](https://www.dikeyeksen.com/products/f-ile-fonksiyonel-programlama)**. Printed book, Dikeyeksen.
* **Git 101**. Open source book in Turkish ([Read Online](https://aliozgur.gitbook.io/git101/) \| [Download PDF](https://www.dropbox.com/s/947k3c4rvid0drr/aliozgur_git101_book.pdf?dl=0)).

## Community

I founded [apprenti.dev](https://apprenti.dev/), an open platform for mentoring junior developers in the AI era. I wrote about why this matters in [AI Çağında Junior Geliştiricileri Kaybetmemeliyiz]({% post_url 2026-08-27-apprenti-junior-devs %}). I also maintain and contribute to a number of [open source projects](https://github.com/aliozgur).

I co-host **Developer Kahvesi**, a Turkish podcast on software development, with Barış Akın and Ertan Tike ([Listen on Spotify](https://open.spotify.com/show/4Sk87o2ftIkOUw3lDNJs7F)).

## Education

* B.Sc. Computer Engineering, Istanbul Technical University
* MBA, Istanbul Bilgi University
