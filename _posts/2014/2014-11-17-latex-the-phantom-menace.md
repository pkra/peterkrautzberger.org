---
layout: post
title: LaTeX The Phantom Menace
date: 2014-11-17
categories:
- technology
tags:
- LaTeX
- mathml
- TeX
published: true
permalink: 0171/
---

_(Week 2 of the challenge.)_

> LaTeX is the path to the dark side. LaTeX leads to TeX. TeX leads to DVI. DVI leads to suffering.  
>  -- not Yoda.

Ever since joining MathJax, MathML has been a major part of my professional life. It's a slightly unhealthy relationship: wide-eyed enthusiasm and bottomless despair are frequent companions (although, I think, I'm becoming slightly more stable). Among the web standards of the W3C, MathML is, I think, unique and this is both good and bad (and topic for another post).

One thing that comes up regularly in discussions is how the use of LaTeX notation on the web is somehow evil. I believe this is a phantom menace.

# Five(-ish) reasons why TeX/LaTeX is no threat to MathML

*   Full TeX/LaTeX is so messy

You might say that comparing full TeX/LaTeX and MathML is comparing apples and orange -- at most, I should be comparing math-mode TeX/LaTeX to MathML. But the problem is that the difference is tricky since mixing math and tex mode is all too common in the real world. Since TeX is a programming language and lacks enforceable best practices, there will never be a "good" subset of TeX/LaTeX that could provide reasonable markup constraints. The reality of how people use TeX/LaTeX is just too messy.

*   on the web, "LaTeX" doesn't exist

Quite literally, there is no such thing as "LaTeX" on the web. What is really being compared is a bunch of TeX-like input languages. If you think Markdown is bad off (yay CommonMark!) take a look at the number of easily incompatible TeX-like input on the web. MathJax's TeX-input vs Wikipedia's texvc vs iTeXMML vs pandoc vs ... -- they are all different on some level.

And even if you think: oh well, one day there'll be one standard LaTeX subset for the web ([right?](https://xkcd.com/927/)), then there's still no threat here. Markdown, wikitext etc have never threatened HTML; raphaeljs, d3.js etc have never threatened SVG; threejs, pixi.js etc have never threatened WebGL. Instead, these tools pushed the use and thereby the standards forward. Pretending that TeX-like input (or asciimath or jqmath) has any other affect is a phantom.

*   in the DOM, LaTeX does not make sense

While you might still wish to speculate that LaTeX could somehow be coaxed into being playing nice with HTML, CSS etc, the story really ends at the DOM. LaTeX does not fit in the DOM; period.

*   MathML is TeX for the web

There is a reason why MathML is so damn good for mathematics -- it was created by people with a huge amount of experience, in particular in TeX and CAS. So in many ways, MathML is the natural continuation of the insights gained from TeX, applied to the web.

*   MathML is better

While at first sight MathML appears verbose (just like HTML or SVG might appear), it ultimately has one huge advantage over TeX: it is clean, self-contained, and stable. MathML provides a clear-cut presentation of equational content. It is infinitely easier to understand someone else's MathML than it is to understand someone else's TeX. (And you also cannot redefine `\relax` in MathML...)

*   MathML has won already

Fun fact: for roughly a decade, almost all new mathematics has been stored as MathML. Mathematicians are usually surprised by this -- doesn't every math journal accept TeX submissions? That's true and nobody would claim that the majority of mathematics is _authored_ in MathML (come to think of it, that one probably goes to MS Word). But unless you publish with a very math-specific publisher (e.g., the AMS), your content is invariably converted into XML and your equational content into MathML. So even in pure math research (which is a miniscule amount of mathematics published compared to STEM in general) the authoritative format is MathML.

*   If MathML failed because of math-mode LaTeX, that would be pathetic

So LaTeX as a web standard is just not practical. Which brings me to my final point. If MathML fails because of a bunch math-mode LaTeX-like input thingies, then I think we deserve to fail. These are such a weak contender, MathML would have to be truly a miserable standard to loose out. By contraposition, the fact that MathML is far from miserable (as its success demonstrates every day) means it will not fail no matter how many web pages include TeX/LaTeX in their HTML.

### Where is this phantom menace coming from?

The more interesting question for me is where this phantom originates from. I suspect this is really about the lack of browser implementations. It's always easier to look for a scapegoat. Making up a phantom like TeX will distract us from the important discussion: what's really holding back browser implementation? It's definitely not the math end where MathML simply rocks. And then the really interesting question can be: what could MathML 4 and MathML 5 look like?

---

_Comments_

* **Asaf Karagila**, 2014/11/17
  Join the dark side. We have cookies. Although in this context, it seems that you guys have cookies, to remember rendering preferences as needed. :-)
  I agree that the reality of LaTeX is messy. People are too used to MS Word and other “what you see” editors that they just want “something that works”, and learning the basic amount of LaTeX so the compilation is (1) without warnings, (2) looks professional to professionals is too much for most people.
  In other words: http://xkcd.com/1015/ I did this to myself with LaTeX (and kerning).
  * **Peter**, 2014/11/18
    Hm. You’re the second person now. It seems I have not been able to communicate this well (I blame the 30min time limit). This post is not a criticism of TeX/LaTeX, neither real TeX/LaTeX nor TeX-like stuff on the web. This is merely about the fact that TeX/LaTeX will never ever be a threat to any web standard, in particular MathML.
    * **Asaf Karagila**, 2014/11/18
    I think that I understood that. I just felt the need to write that comment burning in my throat. Maybe it’s that cold I’ve got the past few days. My comment does feel as if I verbally sneezed on the page. :-)
    In either case, I see it as a case why MathML and web-based mathematics should be invested in, not as a replacement for LaTeX but as a companion. And I agree with that. But I felt the need to point out why LaTeX is still great, if you have a sensitive eye for these things. I don’t know, I’m just typing now into the comment box. Zoobitido. Blorgcups. I’ll stop. Now. Honestly! There, I stopped. :-)
* **Paul Topping**, 2014/11/18
  TeX (or LaTeX) is a perfectly fine input language, something that MathML is not and never was meant to be. It is always fine to keep around input language along with a representation generated from it so embedding TeX in a web page is fine too. As you say, Peter, the menace is phantom! MathML and TeX can live together in harmony but one cooks and the other does dishes.
