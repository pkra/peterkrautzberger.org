---
layout: post
title: Tiddlywiki or the end of my LaTeX notes
date: 2010-11-10
categories:
- technology
- thelazyscience@peter.krautzberger.info
tags:
- Edward Tufte
- LaTeX
- tiddlywiki
published: true
permalink: 0040/
---

How can I not even have mentioned this? The single greatest tool of the last three month is… [Tiddlywiki](http://tiddlywiki.com/)

### What is Tiddlywiki?

[Tiddlywiki](http://tiddlywiki.com/) is a wiki in a single html file. It can be full fledged wiki by lots and lots of fantastic javascript fancy. Hackers love it because, well, they can hack it. For me there are [tons of plugins](http://customize.tiddlyspace.com/) around (and of course [also lots of themes](http://customize.tiddlyspace.com/)). It’s bit weird getting used to the whole thing since the single-file technology works a little differently (plugin installation especially), but it’s so worth it!

### How can it replace your LaTeX notes?

For mathematicians (and scientists) the coolest thing about tiddlywiki is that you can write [LaTeX-code](http://en.wikipedia.org/wiki/LaTeX) in it! There is a jsmath plugin but I prefer the [mathsvg [Wayback Machine]](https://web.archive.org/web/20130707161357/http://www.math.ist.utl.pt/~psoares/MathSVG.html) plugin (based on asciimath) since it does not require any additional files (just fonts in the browser, like the styx fonts with firefox). So nowadays I write in a simple markup [much like textile](https://en.wikipedia.org/wiki/Textile_(markup_language)) (which this blog is written in). There are [plugins for almost any text markup [Wayback Machine]](https://web.archive.org/web/20110128204422/http://svn.tiddlywiki.org/Trunk/contributors/MartinBudden/formatters/), so if you prefer something else, knock yourself out. I don’t need much myself, to be honest, and unfortunately, the textile plugin I found deactivates mathsvg. Thankfully, tiddlywiki’s own markup and textile overlap a lot and I don’t do much fancy stuff anymore anyway.

### But I like to write in my fancy LaTeX style!

Oh, I do love fancy TeX styles! But after developing a lot of TeX extravaganza for my thesis, my LaTeX notebook and papers (just ask all those pissed off referees I’ve had) I have gone back to TeX’s roots: separate content from layout. I do believe there is desperate need for the development of better and creative mathematical writing (as in structuring mathematical thoughts in an better understandable way) as well as layout design — mathematical writing is in a bad state and my best guess is that this is thanks to the publish-or-perish pressure (the motto seems: just get the referee to ok it and don’t waste time on quality writing) as well as the journal system failing as a gatekeeper in that respect.

I nevertheless believe that it is not the mathematicians who should develop suitable layout and typesetting style, but typographic professionals (where’s the [Edward Tufte](http://www.edwardtufte.com/) of mathematical typesetting!?). With this in mind, my TeX has reverted back to the essentials: simple layout using elementary structures (lots of lists) that can easily manipulated by whoever actually wants to look at my stuff. The ‘restricted’ TeX available in tiddlywiki is more than enough for this (and really, I have not encountered a missing functionality so far).

Essentially, I want to write mathematical content in markup — and whoever wants to view it can generate the layout from the source, whichever way fits best, be it on a projector or a smartphone. Of course, this does not mean to stop thinking about good layout and good writing, it just means that I prefer to mark it up in a way that can be altered easily, preferably automatically.

#### But LaTeX is so much easier and flexible!

Well, not really. Sure, I still pride myself of the fact that my thesis’s source could easily fit on a floppy disc. But that’s really kidding myself — after all, I always need a LaTeX installation to make it work. I have fiddled with a gazillion ways of making TeX portable; virtual machines, live install, online editors, remote access, nothing really works. But a browser, well, a browser is something I will find at any computer with an internet connection; there’s even an android app for tiddlywiki.

And even if I eventually find a good portable LaTeX (though I doubt the need will arise again since there’s a textile to latex converter), I still have to compile stuff. To be honest, after using tiddlywiki for a while compiling LaTeX feels sooooo slow. Anybody who’s seen MathJax in action over at mathoverflow probably knows what I’m talking about. Sure, in the end, a real <span class="caps">PDF</span> would need to be typeset properly (if you really want to print something that is). But anytime before that, I just need a fast conversion and flexible, accessible raw data. So tiddlywiki is actually much nicer for writing TeX. Especially since I “combine” it with [dropbox](http://www.dropbox.com) — it is the perfect way to have my single file accessible anywhere (and share a secret tiddlywiki with Francois and Andreas).

So [unless there’s finally a professional markup developed for scientific and mathematical writing](http://blogs.plos.org/mfenner/2010/11/06/beyond-the-pdf-it-is-time-for-a-workshop/), I will keep my notes in tiddlywiki and make it LaTeX when something goes on the arXiv.
