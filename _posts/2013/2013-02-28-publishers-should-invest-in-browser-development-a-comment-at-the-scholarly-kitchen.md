---
layout: post
title: Publishers should invest in browser development (a comment at  the scholarly
  kitchen)
date: 2013-02-28
categories:
- crossposting
- publishing
- scientific community
- technology
tags:
- Gecko
- mathml
- the scholarly kitchen
- Trident
- WebKit
published: true
permalink: 0134/
---

> In the tradition of posting stuff I write elsewhere, here's [a comment I just posted at _the scholarly kitchen_](http://scholarlykitchen.sspnet.org/2013/02/28/ignorance-as-argument-a-chemist-alleges-publishers-exploit-typography-for-money/#comment-85434). It's not really about the article.

On a slightly different note. Despite many investments in typesetting technologies in (and of) the past, publishers are investing very little in the primary typesetting technology of the future: HTML rendering engines.

A good example (though I'm biased) is MathML, the W3C standard for mathematical markup. Despite being used in XML publishing workflows for over a decade, and becoming part of HTML5, no browser vendor has ever spent any money on MathML development. Accordingly, browser typesetting "quality" is highly unreliable (unless you use MathJax -- which is where I get my bias from).

Trident (Internet Explorer) has no native support (but the excellent MathPlayer plugin), Gecko (Mozilla/Firefox) has good support thanks to volunteer work and WebKit (Chrome, Safari, and now Opera) has partial support -- again solely due to volunteer work. (Unfortunately, only Safari is actually using that code; Google recently yanked it out of Chrome after one release.)

This isn't surprising from a business perspective -- for the longest time, there was simply no MathML content on the web. But of course, this was a chicken-and-egg problem: no browser support => no content => no browser support => ... And it ignores the impact MathML support would have on the entire educational and scientific sector where it would enable interactivity, accessibility, re-usability, and searchability of mathematical and scientific content. (Including ebooks -- MathML is part of the epub3 standard.)

Now you might say MathML is just math, a niche at best. But very likely its success will determine if other scientific markup languages will become native to the web -- languages like CellML, ChemML, and data visualization languages. These will probably see even less interest from browser vendors but will have enormous relevance to the scientific community.

Right now, scientific publishers (in my experience) have neither expertise nor interest in browser engine development. Unfortunately, they also don't put pressure on browser vendors to improve typesetting (whether scientific or otherwise). That's very short sighted, I think. Given that Gecko and WebKit are open source, a joint effort of publishers could very well fix things -- and show the community that publishers have their eyes on the future rather than the past.
