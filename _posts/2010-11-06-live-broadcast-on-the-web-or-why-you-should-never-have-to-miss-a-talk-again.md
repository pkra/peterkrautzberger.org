---
layout: post
title: Live broadcast on the web or why you should never have to miss a talk again
date: 2010-11-06 09:00:00.000000000 +01:00
categories: []
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _wpas_skip_5613678: '1'
  _wpas_skip_5613660: '1'
author:
  login: admin
  email: peter.krautzberger@gmx.net
  display_name: admin
  first_name: ''
  last_name: ''
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

I haven’t written anything in ages but so many posts are almost finished and then there’s my secret new project that I can get all excited about but it’s not yet time… Anyway, I just read [this question on mathoverflow](http://mathoverflow.net/questions/45037/should-there-be-a-true-model-of-set-theory) and it finally triggered this post. You see, if you read that post, you will stumble upon [this workshop](http://www.phil.upenn.edu/Workshop+on+Set+Theory+and+the+Philosophy+of+Mathematics) and, if you’re me, you’ll wonder why you cannot watch a recording of those lectures and, hopefully, the debates that came with it. Now, as puny a set theorist as I might be, I have strong feelings about this — and with Hugh Woodin’s visit to the UofM I was thinking about this stuff a lot all week anyway. So why did I have to miss those talks?

What is so annoying is, that it is soooooo easy to not just record a lecture, but broadcast it live these days. All you need is a decent internet connection and some free tools. Everybody can do it and any larger university should feel obliged to do this. For example, there aren’t many departments in the world that can compete with the math department at the University of Michigan. As I have come to understand our seminar culture is renowned — you can almost double book your entire afternoon everyday with seminars here. But there are a lot of places who cannot offer this for many different reasons. As a public institution (but really, as center of education) we should feel obligated to make this available to anyone. Up until recently, this was not feasible. Today, it is almost trivial. With ability, I believe, comes obligation. (Yes, I almost wrote “with great power comes great responsibility”, fanboys)

### Broadcasting live — the tools.

So what do you need?

*   1 decent internet connection (good starts at cable/<span class="caps">DSL</span> level, any ‘western’ university connection should do)
*   1 computer (possibly laptop for flexibility)
*   1 camcorder (a webcam might do, but picture and audio quality is usually higher with a proper camcorder; don’t forget a tripod…)

You probably have access to the first two things if you’re in academia. A decent camcorder is expensive but you can look for older models that are affordable. You don’t have to be super picky about the camcorder since only a limited amount of quality will survive the compression of the broadcast anyway. The only thing that’s **important** is that you can hook it up to your computer as an external camera.

## The free (not libre) software

I have been trying out several things over the last couple of months and the following set up is what I use at the moment.

*   [justin.tv](www.justin.tv)
*   [flash media live encoder](http://www.adobe.com/products/flashmediaserver/flashmediaencoder/)
*   windows or mac os (ok, not so free)

Before I get to the how…

### What’s the deal?

You will usually not have a connection good enough to be your own streaming server. That’s where justin.tv comes in (of course, there are competitors like ustream, but I ended up using that one). They give you the webserver for free (with ads you can pay to get rid of). If you have friends in the IT department, you could try installing the free developer version of [Adobe’s streaming server](http://www.adobe.com/products/flashmediaserver/) for up to 10 viewers — and if you’re rich you can buy a full licence… That’s the thing about the free live encoder from Adobe — it’s free, but it needs their media server (which justin.tv gives you); if you’re like me, you’ll like that justin.tv also supports vlc (see below).

### How to

The main initial “effort” is to get your justin.tv account going — any search engine will help you find info on that but it’s just your average web service. I just want to point out that you should check out the privacy controls as well as [their fme guide](http://de.justin.tv/p/fme) to, once and for all, find the basic settings that work for your connection.

Once you have made yourself acquainted with a justin.tv account, you only need to do the following for your regular broadcast.

*   Hook up your camcorder
*   Launch the live media encoder and press start

### The somewhat libre variant

If you’re a little bit more engaged (and, like me, an <span class="caps">OSS</span> fan), you can replace the proprietary Adobe Flash Media Encoder with the fantastic [<span class="caps">VLC</span>](http://www.videolan.org/vlc/) following the [justin.tv api vlc guide](http://apiwiki.justin.tv/mediawiki/index.php/Linux_Broadcasting_API). I don’t yet know a good libre media streaming server that could replace justin.tv though. Vlc’s own server creates a huge lag for me.

### What to do during the broadcast or does the lag allow for live questions?

The whole point of a broadcast is not to just record a video but to allow interaction. I am usually experiencing a three second lag (at home or the department). That’s usually ok for questions and interaction in general. Justin.tv offers chat on the broadcasting site and you can choose to use facebook or twitter as required authentication. Of course, nothing stops you from using any other system on the side. Questions are fastest by chat, but I usually run skype or similar things, so that a short audio or video question is possible as well. Finally, when it comes to mathematics, I have noticed that audio is more important than video (you can hear what is written down) — and used blackboards have [very bad contrast](http://vimeo.com/15475347)…

### Recap — how much time does it really cost?

Of course, to find this solution is the biggest issue and I spent quite some time to arrive at this solution. But once you get going, all you need is someone to lead the camera — setting things up usually takes 5 minutes (unless you run into technical problems of course…).

So go forth and spread your scientific knowledge!!! And afterwards publish the recording on vimeo or youtube or whatever for all digital eternity. And then nobody has to ever miss a talk again.