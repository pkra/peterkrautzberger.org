---
layout: post
title: Thoughts on "the end (tm)" of MathML in Chrome/Chromium
date: 2013-10-29 22:48:08.000000000 +01:00
categories:
- mathjax
tags:
- chrome
- chromium
- mathml
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2013-11-01 15:58:38'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

Today, [a Chromium team member announced](https://code.google.com/p/chromium/issues/detail?id=152430#c43) that Chromium/Chrome does not plan to support MathML. (There's a bit of flaming going on on that thread so please don't fuel the flames.)

First off, this does not come as a surprise. Anyone who followed the topic closely must have come to the conclusion that Chrome does not plan to support MathML.

What is good about this post from the Chrome team is that it is now public and transparent. Instead of security issues or supposed architectural flaws in the WebKit code, the Chrome team makes it clear that they have made the conscious decision not to support MathML. That honesty is worth a lot.

It is important because others are less transparent. Microsoft keeps saying -- absolutely nothing. Apple has not invested in MathML development (save for VoiceOver) and relies on the work of unpaid volunteers -- yet almost brags about having support (not realizing that it is not actually usable in a professional context). While Mozilla technically hasn't paid developers for MathML rendering directly either, they have actively invested in maintaining the code base and helped its unpaid volunteers -- this is extremely important but something different form hiring a developer to work on the rendering.

Personally, I think today's announcement could be a good thing.

Not that Chrome doesn't plan MathML support of course -- MathJax's mission is to push MathML adoption to push browser support so that we can all push math on the web to and beyond MathML 3.0\. But this might help to restart the conversation about how to achieve good math layout in HTML-CSS rendering engines (including how not to). That's a conversation worth having.

What is a slight problem is that the Chrome team has given no actual reasons. It doesn't help to guess the motives of Chrome's management or engineers. However, I can say with a reasonable degree of confidence that it should take no more than two full time developers to start with the WebKit code and push it past Firefox's rendering quality within a year. That's not a huge investment for Google so the problems must lie elsewhere. And perhaps they cannot be discussed publicly; that's ok.

But the flaming on that thread (including the MathJax bashing) reminded me of how little people understand the challenges facing browser (and MathJax) developers. MathJax is perhaps guilty of enabling these misconceptions as it makes mathematical layout look simple -- add one line of JavaScript; done -- hiding the many technical challenges that MathJax solves and that a browser developer would have to solve in more generality. (I will write more about these issues some time soon.)

In any case, I think this is an opportunity to have conversations rather than flaming and a chance to give more people an understanding of what it takes for math and science to succeed on the web.

* * *

Update Nov 1, 2013: I've published a piece on the state of MathML on the web [over at O'Reilly's Programming Blog](http://programming.oreilly.com/2013/11/mathml-forges-on.html). It had been in the making for a while now and is unrelated to the above news.