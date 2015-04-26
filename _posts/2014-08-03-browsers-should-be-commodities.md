---
layout: post
title: Browsers should be commodities
date: 2014-08-03 11:49:05.000000000 +02:00
categories:
- mathjax
- mathml
tags:
- browsers
- Open Web Platform
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _publicize_twitter_user: "@pkrautz"
  _cws_is_markdown_gmt: '2014-08-03 18:49:05'
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

> I think there is a world market for maybe five browsers  
>  -- not [Thomas J. Watson](http://en.wikipedia.org/wiki/Thomas_J._Watson#Famous_misquote)

As my <del>one</del> two regular readers know, I work for [a project](http://www.mathjax.org) that's all about cross-browser support. It might, therefore, not come as a surprise that I use three browsers when working. That's mostly because I love incognito-modes; not just for the slightly increased privacy beyond ghostery/disconnect/abp but for the convenience of a clean, nowhere-logged-in browsing experience. However, a sense of realism forces me out of incognito-mode, so I spread things out.

On the desktop, I use Chrome for all Googly things (email, docs etc) and all social things (social networks, feed readers etc), Firefox (in privacy mode) for work things (Github etc) , and Chromium (in incognito mode) for other things (aka bouncing around the intertubez). I guess I also sometimes use "Web" (the Gnome browser; weird name) because it's WebKit and every so often I spin up one of Microsoft's testing VMs for IE. On my Android devices I use Chrome and Firefox mobile (I tried Opera and Dolphin as well but never felt like switching). "Manual" browsing I usually do in Chrome incognito tabs, links from other apps get opened in Firefox (because, trust). Maybe I should add the Wikipedia-beta app (which is so much better now) but I'm lucky to be on KitKat on all devices (no more horroribly-ancient-WebKit in apps) so browser-wise, I'm ok. And I feel the need to mention duckduckgo which is simply awesome (w00t! I just found out there's Android app. Gotta try that.)

But then there's an iPad in my home (where I'm only a guest). And of course, there are no choices for browsers: Safari is all you get. (In case you didn't know it already, all browsers on iOS have to use the underlying mobile Safari as a rendering engine because Apple's TOS forbid all browser engines in the app store). I think this needs to change.

* * *

Somebody recently pointed out to me that after the convergence following the browser wars, we seem to be in a phase of (massive) divergence. And it's not going too well. Browser vendors are doing crazy stuff all over the place. Chrome gets a lot of heat (pulling MathML, CSS regions, threatening XSLT), though I find myself defending them more often than not because they are, at least, transparent (and they're also doing cool stuff like the earliest web components implementation, the CSS font loading API, the (failed) WebIntents etc). IE is like Chrome, just without the positive transparency. How crazy is it [to read over at Murray Sargent's blog](http://blogs.msdn.com/b/murrays/archive/2014/04/27/opentype-math-tables.aspx) that IE is using a MathML-capable rendering system yet MathML is "not planned" in the [IE dashboard](http://status.modern.ie/)? Then there's Apple which does things like happily touting MathML support when a) it's still enormously limited and b) it was all done by 3-4 volunteers (not together, mind you, all fighting by themselves, one following when the other burned out); or using the (non-standard) Pages engine in iBooks (only for iBooks Author books but still a heck of a bad practice).

Don't get me wrong, fundamentally, I think that's ok -- divergence needs to follow convergence. But I think it might take the same level of regulation that we saw in the browser wars to ensure we'll see convergence again. Currently, browsers are more like utilities, yet essentially unregulated. While desktop statistics are slightly better (but not actually good), mobile is an alarming monopoly. Safari on iOS, Chrome on Android; that's it. Sure, you can get Firefox for Android etc. but those browsers are at a massive disadvantage. Back in the day, Microsoft was forced to actively help users to install non-IE browsers (well, in the EU at least). The same should be done for all OSs, including mobile, and possibly even more in terms of apps/webview etc. (Granted, for FirefoxOS, this seems impossible; but just because Mozilla is mostly a positive force doesn't mean they can get a free pass.)

In the long run, I think, we need browsers to become commodities. For this they need to become easy to develop, to modify and recombine -- and with regulations to prevent abuse like we saw on Windows and we see on iOS. We need hundreds, maybe thousands of browsers, dozens of layout engines, modular, recombinable etc. I would love to be able to "compile" my own browser -- take some MathML support from one place, CSS modules from another, accessibility features from a third etc. pp. Not in the days-gone-by XML-dreams of modularization but in the "hey, code-for-kids teaches you to write an HTML9 layout engine" or in a [breach](http://breach.cc/)-but-for-real way (i.e., not just on top of Chromium), or (let's go crazy) write an HTML rendering engine in TeX or lolcode (what's the difference, really?).

Really, there simply has to be room for more than 5 browsers in the world.

* * *

PS: Yes, this is mostly about "layout engines", not "browsers". To most people the distinction is meaningless.