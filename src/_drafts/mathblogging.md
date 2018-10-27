---
layout: post
title: Putting math on the web
date: 2017-05-08
permalink: 0195/
published: true
---


mathblogging.org started almost 7 years ago with the first bunch of emails dating back to Sept 25, 2010. It has been running pretty steadily ever since but is now in its third (or maybe fourth) iteration.

It all stated out as a means to stay in touch with Felix and Fred after leaving Berlin with a PhD under my belt. I had fallen in love with mathematical (and more broadly scientific) blogging during my PhD, devouring them, a perfect means of procrastination. So once I was in Michigan, Fred in Delft and Felix off to San Francisco, I saw the opportunity to stay in touch.

Felix wrote the first incarnation of mathblogging in Django, built on the early Google App Engine. Fred and I were basically bystanders. Gosh it was fun when that page went down pretty much immediately because it got mentioned on Hacker News. We continued to tweak it but eventually Felix moved on an and Fred was taking his thesis more seriously (how dare he, amiright?).

Luckily, I met Sam at the YSTW in Bonn in 2011 and we started Booles' Rings soon thereafter (which is another story, for another time). Around the same time, scienceblogging.org (which mathblogging.org had copied) had been replaced by scienceseeker and back then they were developing an open source basis, subjectseeker. It alls made sense so we customized subjectseeker and switched over. Sadly, scienceseeker ran out of funds around the time ScienceOnline imploded so we had to face that subjectseeker was unmaintained.

Thus the third iteration came to be: a super-simplistic set of NodeJS scripts, piping out content for Jekyll. After all the clever server shenaigans this was trivial, little more than a bash script. And to this day it pretty much remains that way. Earlier year, I took a few hours to do a majore clean-up and recently I rewrote it once again to simplify it further. I guess I'll always be proud and embarrassed when it comes to the code but at barely 500 lines total, maybe that's expected.

Anyway, the latest (maybe call it the fourth?) iteration is now pushing the  and can run on a pitiful old NAS if you need it to. It
