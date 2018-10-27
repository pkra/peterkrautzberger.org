---
layout: post
title: Experimenting with pug.js
date: 2017-05-04
permalink: 0194/
published: true
---

Sam and I hang out regularly via the intertubez to do silly things (like running Booles' Rings and mathblogging.org).

Recently, I told Sam how I had realized how TeX will die within a generation. If you insist on me sharing my kitchen-psychology, this will happen for two reasons: the web and the aging TeX community.

For the former, rendering PDF using web technology is currently the hot shit and many publishers are moving towards it thanks to a new generation of tools such as Vivliostyle. While TeX will remain a superior engine for print in general, the 80/20 point will be soon upon us. That's partially because the web is the dominant medium already (for access, discovery etc) so you need a web-based rendering of your content (even more so for the next generation). Already, few people care about print copies of scientific content, it's not a significant step to think the next generation will rarely grabe the PDF (since it built its reading skills for and with the web).

The latter is an easily ignored part since TeX as a technology is so fiendishly robust. But if you look at the community, it's aging rapidly, no matter if you check tex.SE or TUG. The next generation will easily skip to another tool and anything that creates web content will be sufficient for decent PDF rendering soon.

Of course, a faint trace of TeX will survive, e.g, through tools like MathJax that are "faux" TeX and thus its baroque syntax will survive much beyond TeX itself (until somebody develops better Unicode input support via keyboards, I suppose).


## The problem

Now Sam rebuked me. A while back, he wanted nothing more than his students to use TeX. But the tools weren't there -- it was hard to share, collaborate, and coordinate student work with TeX; but he really wanted to. But eventually Sam changes his mind - because for crying out loud creating web content is a better skill for students than learning TeX. But behold, now there are the tools -- sharelatex, overleaf etc -- and how can he not suggest them.

Because the big issue Sam had with web content creation is the tool chain. You either go all out (raw HTML in your emacs/vi) or all in (wyswiyg editors of horrors, Google Docs etc). Neither is sufficient.

So Sam posed a problem: is there a way to write HTML the way people are accustomed to writing TeX?

Some requirements

* works in a plain text editor
* does not require raw HTML
* is efficient (cf. TeX macros, environments)
* can be extended
*