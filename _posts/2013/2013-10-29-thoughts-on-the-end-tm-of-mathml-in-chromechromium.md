---
layout: post
title: Thoughts on "the end (tm)" of MathML in Chrome/Chromium
date: 2013-10-29
categories:
- mathjax
tags:
- chrome
- chromium
- mathml
published: true
permalink: 0140/
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

---

_Comments_

* **adam**, 2013/10/30
  Very ironic that the Google engineering empire – full of all those geeky math and numbers nerdy types – won’t build Math support into their own products. I would love to know why. On a cultural level it really just doesn’t make any sense to me. Is it a company culture issue – seemingly going against their famed brainy mathy engineering image and ideology – and what does that signal? or is it a higher level strategic move to block competition (etc) …I don’t get it. So I would love love love to know what is behind this thinking. Very curious.
  But long live MathJax!
  * **Peter**, 2013/10/30
    Thanks, Adam. As I said, I don’t want to speculate anymore (I have done so in the past and it usually makes matters worse). If they are interested in talking then that’s great. If not, well, then that’s that.
* **Alex Milowski**, 2013/10/30
    I wish they would give more information as to why they don’t want to implement MathML. A conversation that is more than “we don’t like the existing code” would be really helpful.
  * **Peter**. 2013/10/30
    Thanks for your comment. I agree, of course. While I understand that they can’t fully disclose their decision making process, I have heard from a number of Chrome developers that they are fundamentally in favor of MathML. We just need to move forward now. I think a third implementation after Gecko and WebKit could be very interesting (though it would seem a bit strange to me). But the basic challenge of reconciling mathematical layout with HTML-CSS remains.
* **Stephen Shankland**. 2013/11/05
    FWIW, if you look at the bug-tracker thread, you can see some further discussion that indicates at least some of Google’s reasoning: 1. persistent security problems and 2. low usage of MathML on real-world Web.
  * **Peter**, 2013/11/05
    Hi Steven. I’m following the thread, but there’s nothing new there. The Chrome team members have repeated their security concerns from back in May; these have all been fixed as Fred Wang pointed out in detail on the thread. I think the Chrome team has given the real reason: Google is not willing to hire a developer to develop MathML. That’s all there is to it (and of course it is their business decision to make). Everything else is a smoke screen.
    As for low usage of MathML on the web, that is a red herring. Yes, there will never be as much MathML on the web as there will be cat pictures. But it is simply a chicken and egg problem. For example, Wikipedia could switch its math content from images to MathML within days if browser support was available. All publishers are waiting to put out MathML on the web, in apps and in ebooks — but they can’t. As for usage today, the MathJax CDN alone sees 75 million monthly visitors (and ironically, the dominant browser is Chrome). So unless someone puts a number as to how much MathML there has to be, this is just misleading. Besides, Browser vendors did not argue that way about RTL or vertical text even though, undoubtedly, there was virtually no bidirectional text before browser support existed.
    Your article on CNet is very nice but you’re off when it comes to the group that would benefit the most. It’s not researchers but education that needs MathML. The educational sector is quickly moving towards web-based and HTML-driven content and MathML is the native, accessible, and reusable way of putting mathematics on the web. It is crucial for not just mathematics but science and technology education. In short, the need for mathematics in human communication is universal and constant even if it will not show up on the majority of websites.
  * **Stephen Shankland**, 2013/11/05
    Yes, it seemed like the "it's not a priority for us" vibe came through better in follow-up comments -- they're not willing to pay somebody to maintain the code -- but also that Google is focusing on performance rather than new features. Perhaps they're sensitive to criticisms about Chrome bloat, for example: http://massivegreatness.com/bloated
    Justin Schuh also said they stopped filing new bugs in the security domain once they decided remove support, so I at least wasn't clear whether all MathML security concerns have been resolved.
    Incidentally, I quoted your thorough O'Reilly write-up of the situation in my MathML story today: http://news.cnet.com/8301-1023_3-57610854-93/google-subtracts-mathml-from-chrome-and-anger-multiplies/
    * **Peter**, 2013/11/05
      If there had been performance issues that were tracked down to the MathML code, then that would have been an interesting discussion to have. Thanks for referencing my piece at O’Reilly, but out of context and in your context it sounds like Safari is holding back MathML while it is actually pushing it forward. As I point out in my conclusion, WebKit is in a good place from a development perspective and could quickly catch up to Firefox — most of the hard work is done.
    * **Stephen Shankland**, 2013/11/05
      Thanks. I updated the story to address that concern.
    * **Peter**, 2013/11/05
      Thanks, Stephen.
* **John Savar**, 2014/01/14
  MathML is verbose, and somewhat difficult to prepare manually. But some means of specifying mathematics should have been part of HTML 1.0, or at the least HTML 1.1, given that the WWW was originally designed at CERN specifically for the purpose of allowing researchers to present their work online.
  MathJax and jsMath before it are cumbersome solutions; ultimately, equations should be as much a normal part of text markup on web pages as italics and boldface. So I do agree that Firefox and Safari are doing the right thing, and Chrome appears to have taken a step backwards.
  But performance and security are important characteristics of a browser. If there really is something about the design of MathML that makes it difficult to meet those goals and support MathML at the same time (which, I have to admit, I find hard to understand) maybe another standard, like using TeX or AsciiMath, or something more like HTML, like MathML, only simpler, would be the way to go.
  * **Peter**, 2014/01/28
    I don’t find MathML more verbose than HTML tables or SVG. Sure it’s not as short as asciimath but that’s comparing apples and oranges (or wikitext and HTML). It’s not meant to be manually authored (just like most contemporary HTML) and it’s not supposed to replace any authoring tool.
    As for performance and security, there is no sign that MathML is particularly prone to negatively influence either. The problem is really quite simple: an absence of developers working on it. Looking at how much progress lone-wolf volunteers have made in the past, it’s hard to believe that as small team at Chrome couldn’t implement MathML very quickly. Suggesting something other that MathML for HTML is neither necessary or helpful at this point (even though it’s a lot of fun to speculate what would have happened if HTML 3.2 had kept a limited math tag and people had actually embraced it, developed new forms of communicating mathematics using a restricted means of layout).
* [Pingback](http://aperiodical.com/2013/11/dark-days-for-mathml-support-in-browsers/)
