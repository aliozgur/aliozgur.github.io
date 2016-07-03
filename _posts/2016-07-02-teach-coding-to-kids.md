---
layout: post
title: "Hurry! You must teach coding to your kids"
subtitle: "A tough journey you can't resist"
date:  2016-07-02 12:26
author:  "Ali Özgür"
excerpt_separator: <!--end-of-excerpt-->
published: true
tags: 
  - Kids
  - Software
  - Coding
 
---

Within last couple of years teaching how to code to kids has become a very popular topic. Tech guys, educators, schools and governments started to invest more on this topic and they try to sell the idea to the parents. In this post I will share my own experience with my 8 year old son Arda and try to formulate couple of gotchas.

<!--end-of-excerpt-->

**Disclaimer: I'm not a pedagogue and this post is based on my own experience**

## The idea

Here are couple of bullet points to draw a frame for this post

* Coding and software development is not easy
* To get proper coding skills lots of practice is needed
* Do not be aggressive, relax and just observe your kid
* Accompany your kid in his journey instead of being a passive regulator
* Coding is not the only career option for your kid
* Your kid may not get proficient in coding but still can acquire some valuable skills
* Learning by experiment is the key, not just for coding but many other things. Let your kid experiment as much as he can
* Do not expect long hours of sharp concentration from your kid
* Let your kid speak for himself
* Give him the option to give up
* Do not set sharp expectations, remember this is just an experiment and may not lead to a goal


## Who you are and what you do matter

Arda was born in an environment where we had all the computational devices available at that time. I was intensively involved with mobile development for iOS when he was 2 years old. The first computational device he has ever interacted was a Gen 2 iPod I used for testing. He watched me coding and testing things out on that iPad and usually he would get involved and interrupt my flow. Instead of shutting all devices down I let him randomly pound on the keyboard and showed him how pressing a button on a device triggers something on another one. This was no different than controlling the TV with the remote. During these times we have moved to a new apartment and I did some of the cabling by myself. These times were his first interactions with a real screwdriver, pliers and cables. I let him hold them and experiment with the screwdriver and observed him closely. He liked to play with these tools too much, we lived with all the tools in the middle of the sitting room for some time. Holding and experimenting with these tools was not forbidden as long as he followed couple of safety rules.

The morale of the story is; do not hesitate to demonstrate couple of things about your profession and hobbies. Let him watch you and give him a chance to try and experiment under minimal parental guidiance. Be inclusive and assign him simple tasks if possbile. Mostly he will just try and give up but will remember that experience. 

Parents are the first and most inluential role models for their kids, at least until kids get fully social. How you act and behave, how you speak, how you communicate, how you react to events shapes the character of your kids. You are the source of his first confusions, the mom and the dad are very different personalities. Your kid will watch you as you interact with your wife/husband and he will have the first sense of communication, thus confusion. Behave as you are, trust me kids will sense the anomalies and made up behaviors quickly than you can imagine. Do not try to hide your negative attitudes but instead try to control them.

Back to the topic, your profession and hobbies are important factors while teaching your kids coding. If you have coding skills, as a profession or hobby, and wise enough to evaluate yourself you may come up with a smooth and mostly positive teaching path. If you do not have a clue about coding or something similar you may still influence the path, because you have already learnt couple of challanging things in your life. I think the key idea is; in terms of your profession or hobbies, you should first remember how you have learnt what you already know. Some practices you can remember and utilized during your own learning process will definitley be very helpfull. You may not be able to apply the same practices on your kid but you will have more empathy for sure.

If you do not have an idea about coding I would suggest you to learn with your kid. As I stated before, try to accompany your kid in this journey instead of being a passive regulator. This holds true not for coding but generally for everything you want your kid to experiment but you do not have a clue. This can be chess, swimming, skating, some electronic games or playing musical instruments.

If you already have an idea about coding, just relax and align your expectations. Your level of knowledge is not a reference or goal, it is just an example. Do not try to teach him complex things, if he asks questions about some complex stuff just try to find the essence and explain that simple and basic thing and let him find the path to complexity.


## IKEA Manuals

Every person has different modeling, thus learning methods and this is no different for the kids. Some kids learn by watching, some by listening, some by touching and many utilize multiple of these methods. But, do not expect your kid to know how he is learning more effectively. You should be an active observer and understand how your kid is learning. 

My experience with Arda, on being an active observer and understanding his learning style, was triggered by an IKEA bookshelf assembling effort when he was 3 years old. IKEA sells all of the products disassembled, I'm sure that you already know that. What comes out of an IKEA package is couple of simple tools and a manual with numbered illustrations. When you open an IKEA manual you exactly know how many screws you have, all grouped by size and shape, and how does your tools look like and the number of steps to follow. When I first opened the disassembled bookshelf package Arda immediately grabbed an Allen Key and couple of screws and randomly tried to mount the screws on every hole he can spot. I let him experiment with this chaotic method for a while and when he gave up I got him by my side and showed him the manual. First I showed him the page depicting the number and groups of screws. I then instructed and helped him to follow the manual and put the screws grouped by our side, ready for usage. I reasoned about this effort and tried to tell him the time savings we will gain if we do not randomly search for the correct screw but simply pick one from our grouped piles.
 
Here is what I've learned about Arda after this experience; visual instructions and numbers attract his attention more than anything. This was an enlightening observation and later proved to be a valuable tool. For example, he had concentration issues when he first started school and I draw him some signs on the stickers to remind him to sit down, he was chatty during the lessons and again some visuals helped him to manage his attitude. For a very long time he chased all the signs found on mall doors, food packages and dresses.

Later, when I decided to show him couple of coding related stuff I knew which tools and materials will benefit him most. Clear, few in number and visually backed instructions were the best fit for him. I explained him the propagation of WiFi signals with a hand drawn diagram, I showed him the prinicpals of human-computer interaction (instructions) by couple of stick men drawings.

An IKEA manual enabled me to see the way how my kid learns but that could be anything. Watch how your kid interacts with the world and you will be able to find couple of patterns soon.

*Note: All kids love visually compelling things and Arda was no exception. If you've ever built a LEGO kit you sould have noticed the step by step numbered instructions.*

## Focus on Principles of Programming

In my understanding and years of experience in software development, being able to code is just a utility. Think about novelists for couple of seconds, everyone knows how to write but that is not the essence of being a novelists. Being able to write couple of words and sentences is just a utility and being able to code is no different. Code is just the seen form of a more complex process, if you look at the code below you may judge that that is simple.  

```csharp
int i = 1;
while(i < 10)
{
    Console.WriteLine($"Printing even numbers. Iteration #{i}:");
    for(int j=0; j<i;j++)
    {
        if( j % 2 == 0)
        {
            Console.WriteLine($"{j} is even");
        }
        else
        {
          // Do nothing
        }
    }
    i = i + 1;
}
```

The code above covers most of the basics of a programming language; you may spot a data type (int), looping constructs (while and for), a conditional construct (if/else), a comment, some operators (=,%,+) and method calls. Most programming languages have limited number of keywords you can just memorize. There are also programming language ecoles and each have their own variant of a similar syntax. As an adult these might totally make sense to you, but kids are different and all these concepts make no sense for them.

Data types, data structures and algorithms are the principles of programming. One should learn these concepts before trying to write any single line of code. Data types and data structures are very abstract for kids, do not try to teach them these concepts. On the other hand algorithms and algorithmic approach is a good candidate for a start. You may not have noticed but at the core of our daily activities lie the algorithms, some of them simple and some very complex. 

You can teach your kids looping and conditional constructs by examplifying simple daily activities. Steps required to prepare for a school day can be a good algorithm sample. Do not be feared by the term "algorithm". If you have no idea about programming. Think algorithms as simple list of steps required to reach a goal with some loops and conditions. That is it!

## Tools and Environments

In this section I will give you pointers to couple of tools and environments you can use.

**LEGO Kits :** If you buy LEGO kits you will get similar manuals like IKEA manuals. While LEGO free form blocks insipire the creativity of your kid, LEGO kits with manuals will teach your kid how to follow a predefined set of assembling instructions. This will also give a sense of algorithmic approach. These LEGO kits will help your kid build skills not only for coding but range of other areas.    

**[LEGO MINDSOTORMS Fix The Factory](https://itunes.apple.com/tr/app/lego-mindstorms-fix-factory/id671493323?mt=8):** This is a cool game. This game will teach your kid basic looping and conditional constructs. 

**[Code.org](http://code.org):** This sites teaches your kid couple of programming concepts by utilizing puzlle like visual instruction blocks. Your kid should already know reading. Code.org is localized for many languages but you should still accompany your kid since some resources are only in English.

**[Scratch](https://scratch.mit.edu):** Scratch is a visual programming environment developed by MIT. Scratch is similar to Code.org but is a more advanced environment. Scratch allows your kid to build complex programs by combining basic computational instructions with more complex background, skins, video and sounds. Scratch offers offline editor with localizations for many languages. 

**[LEGO MINDSTRORMS](http://www.lego.com/en-US/mindstorms/):** LEGO MINSDSTORMS is really fantastic but very complex. This product is for 10+ kids and requires some form of in class education. We have an EV3 version, so far Arda just assmebled and programmed first two models of EV3RSTORM. 

There are couple of other advanced things like Raspberry Pi, Arduino and Netduino boards and DIY open source robotics schemes. These platforms are too complex for a kid but if you are interested to robotics as a hobbysist you can just let your kid help and watch you. I've built [this Robotroller](https://github.com/xamarin/Monkey.Robotics) as a hobby to myself and the [result (video)](https://www.youtube.com/watch?v=yNq5TP0Eik8) was pretty fantastic. I ordered all the parts, waited for couple of months, assembled the chassis, did some soldering. Arda was included all the way down, he helped me while assembling the chassis and the motors, he hold the wire while I was soldering.

## Conclusion

I've been trying different methods, tools and environments to introduce Arda to coding and robotics. So far the result is satisfactory but he has a long way to go. He is not too willing to show progress with Scratch and LEGO MINSTRORMS as these are complex for his age. I will not push him hard but wait for the right moment to put him on the right track. For now he demonstrates some raw analythical thinking skills and deep interest to numbers. But, coding, robotics and that kind of engineering stuff are not the only options for Arda. He can develop interest in music, sports, dancing, medicine, science and lots of other areas. As a responsible parent I will just help him explore, experiment and try different things.      


{% include share_twitter.html %}

***

{% include disqus.html %}


