---
layout: post
title: Browsers should be commodities
date: 2014-08-03
categories:
- mathjax
- mathml
tags:
- browsers
- Open Web Platform
published: true
permalink: 0166/
---

> I think there is a world market for maybe five browsers  
>  -- not [Thomas J. Watson](http://en.wikipedia.org/wiki/Thomas_J._Watson#Famous_misquote)

As my <del>one</del> two regular readers know, I work for [a project](http://www.mathjax.org) that's all about cross-browser support. It might, therefore, not come as a surprise that I use three browsers when working. That's mostly because I love incognito-modes; not just for the slightly increased privacy beyond ghostery/disconnect/abp but for the convenience of a clean, nowhere-logged-in browsing experience. However, a sense of realism forces me out of incognito-mode, so I spread things out.

On the desktop, I use Chrome for all Googly things (email, docs etc) and all social things (social networks, feed readers etc), Firefox (in privacy mode) for work things (Github etc) , and Chromium (in incognito mode) for other things (aka bouncing around the intertubez). I guess I also sometimes use "Web" (the Gnome browser; weird name) because it's WebKit and every so often I spin up one of Microsoft's testing VMs for IE. On my Android devices I use Chrome and Firefox mobile (I tried Opera and Dolphin as well but never felt like switching). "Manual" browsing I usually do in Chrome incognito tabs, links from other apps get opened in Firefox (because, trust). Maybe I should add the Wikipedia-beta app (which is so much better now) but I'm lucky to be on KitKat on all devices (no more horroribly-ancient-WebKit in apps) so browser-wise, I'm ok. And I feel the need to mention duckduckgo which is simply awesome (w00t! I just found out there's Android app. Gotta try that.)

But then there's an iPad in my home (where I'm only a guest). And of course, there are no choices for browsers: Safari is all you get. (In case you didn't know it already, all browsers on iOS have to use the underlying mobile Safari as a rendering engine because Apple's TOS forbid all browser engines in the app store). I think this needs to change.

* * *

Somebody recently pointed out to me that after the convergence following the browser wars, we seem to be in a phase of (massive) divergence. And it's not going too well. Browser vendors are doing crazy stuff all over the place. Chrome gets a lot of heat (pulling MathML, CSS regions, threatening XSLT), though I find myself defending them more often than not because they are, at least, transparent (and they're also doing cool stuff like the earliest web components implementation, the CSS font loading API, the (failed) WebIntents etc). IE is like Chrome, just without the positive transparency. How crazy is it [to read over at Murray Sargent's blog](http://blogs.msdn.com/b/murrays/archive/2014/04/27/opentype-math-tables.aspx) that IE is using a MathML-capable rendering system yet MathML is "not planned" in the [IE dashboard](http://status.modern.ie/)? Then there's Apple which does things like happily touting MathML support when a) it's still enormously limited and b) it was all done by 3-4 volunteers (not together, mind you, all fighting by themselves, one following when the other burned out); or using the (non-standard) Pages engine in iBooks (only for iBooks Author books but still a heck of a bad practice).

Don't get me wrong, fundamentally, I think that's ok -- divergence needs to follow convergence. But I think it might take the same level of regulation that we saw in the browser wars to ensure we'll see convergence again. Currently, browsers are more like utilities, yet essentially unregulated. While desktop statistics are slightly better (but not actually good), mobile is an alarming monopoly. Safari on iOS, Chrome on Android; that's it. Sure, you can get Firefox for Android etc. but those browsers are at a massive disadvantage. Back in the day, Microsoft was forced to actively help users to install non-IE browsers (well, in the EU at least). The same should be done for all OSs, including mobile, and possibly even more in terms of apps/webview etc. (Granted, for FirefoxOS, this seems impossible; but just because Mozilla is mostly a positive force doesn't mean they can get a free pass.)

In the long run, I think, we need browsers to become commodities. For this they need to become easy to develop, to modify and recombine -- and with regulations to prevent abuse like we saw on Windows and we see on iOS. We need hundreds, maybe thousands of browsers, dozens of layout engines, modular, recombinable etc. I would love to be able to "compile" my own browser -- take some MathML support from one place, CSS modules from another, accessibility features from a third etc. pp. Not in the days-gone-by XML-dreams of modularization but in the "hey, code-for-kids teaches you to write an HTML9 layout engine" or in a [breach](https://github.com/breach/breach_core)-but-for-real way (i.e., not just on top of Chromium), or (let's go crazy) write an HTML rendering engine in TeX or lolcode (what's the difference, really?).

Really, there simply has to be room for more than 5 browsers in the world.

* * *

PS: Yes, this is mostly about "layout engines", not "browsers". To most people the distinction is meaningless.

---

_Comments_

* **Asaf**, 2014/08/03
  You are _two_ regular readers? Who’s the second one? :-)
  I agree that browsers should be more varied. I am surprised that you’re not using your own scripted Uzbl, instead of Chrome+Chromium (which are practically the same thing). I am also surprised that you’re not using Opera which uses its very own engine (unless I’m mistaken), where as Chrome, Chromium, Web and Safari all use the WebKit.
  But the reason is quite simple. Writing a modern browser engine is not a trivial task. It’s no longer a simple regex parser and a tcp socket. The more complex the web becomes, the harder it is to write a reliable rendering engine. So it’s only natural that a handful of competitors are left around.
  * **Peter**, 2014/08/03
    I count as two readers 😉
    I don’t use uzbl out of the same sense of realism I mentioned above. I may have been writing confusingly / been confused (since the comments so far misunderstood what I was trying to say).
    First off, I wouldn’t mind using a single browser. That was not my point. Second, Chrome/Chromium and Safari/Web are now separate. Chrome forked WebKit into Blink last year and both sides have modified their end quite a bit since (especially ripping out components). Opera has given up on its Presto engine last year and is now based on Chromium (not just Blink as a rendering engine). Still, they are obviously quite close.
    Third, I’m aware how difficult writing a layout engine is (well, at least I’ve asked people who actually do that for a living). So is making cheese or building RAM modules; it does not make those products less of a commodity. But yes, my hope is that writing layout engines will eventually be much easier, perhaps easy enough for a typical “your first serious software project” kind of thing. (I’m also not saying this is a realistic hope.)
      * **Asaf Karagila**, 2014/08/04
        Nice, taking cheap shots at an obvious typo. Of course I meant to ask “You have …” and of course you knew that!
        The comparison to cheese is wrong. Cheese is tasty, browser render engines are not. Also some cheese is left in a cave to grow mold, but then again I’m sure that the render engine of links, lynx, and friends are aged like fine scotch. :-)
        Thanks for the update on the world of rendering, I didn’t know all those news. Seems that a lot has been going on since I stopped caring about it. In either case, remember that Xul is the coolest engine of them all, since Xul is the gatekeeper for Gozer. (Okay, fine, it’s Zuul, but Xul has the same nice ring to it.)
        And speaking of Gozer, whenever you call a destructor of an object, you invoke Gozer. Egon is rolling in his early grave. (Need I also mention that a good browser engine should not cross streams? Alright, that’s my last Ghostbusters reference for this comment. I promise!)
        * **Peter**, 2014/08/05
          Funny, I had missed your typo. I was really trying to joke that I count as two readers (crazy like that). Keep the Ghostbusters references coming!
