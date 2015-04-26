---
layout: post
title: Quo vadis, mathematical markup?
date: 2013-02-10 09:25:16.000000000 +01:00
categories:
- updates
tags: []
status: draft
type: post
published: false
meta:
  _edit_last: '3'
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2013-02-10 17:25:16'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

I've been wanting to write a post about mathematical markup for a while. But in my mind it got bigger and bigger, stretching from "formula markup" to document markup to input tools to semantic tools. And on paper it grew smaller and smaller, leading to oneliners that sound smart but mean nothing to me when I revisit them a few days later. And then Martin Fenner starts a new discussion about markdown.

Oh man, I really have forgotten how to write these days.

Anyway. This is also a good time to mention that I work for MathJax now. That's pretty much a dream come true. Mathematics, technology, web, innovative content, and typesetting -- browsing through my blog should tell you that all of these are high on my list of interests.

## What do you mean, mathematical markup?

Yeah, this is not as trivial as you might think. So let's narrow it down: just formula markup. I'd love to talk about the structure of proofs but will send you over to Felix's blog. I'm not ready for graphical things like diagrams either (well, actually... but that's a different story).

So what I mean is

*   math mode TeX (and its derivatives like iTeX, MathJax, Wikipedia-tex etc pp)
*   MathML
*   asciimath
*   jqmath
*   others (I'm sure there are)

It's a curious bunch, no? You heard of TeX. You probably heard of MathML (and probably have preconceptions about it).Asciimath, jqmath, probably need an introduction. But let's start with TeX.

## (La)TeX, the battle: binary vs markup

One of the biggest problems when talking to people is the lack of distinction between TeX as a markup language and TeX as a binary. Of course, it's inevitable since they are oh so tragically intertwined.

So let's forget TeX. Most people on the web have. By which I mean: there's no TeX on the web (well... unless you mix [crazy crazy](https://github.com/manuels/pdftex.js) with [crazy cool](https://github.com/mozilla/pdf.js)).

So TeX on the web mostly exists in form of markup-language dialects like MathJax, iTeX, texvc etc. This is eerily familiar to the situation mardkown finds itself in, but we'll get to that.

So when I write TeX, I don't mean TeX. I always mean one of those variants.

### MathML: the new kid that's old

MathML is a curious one. Most mathematicians don't consider it a serious contender just because it's a machine language. There's boundless confusion about how "bad" it is, how misguided etc bla bla.

MathML is an XML application, so it is complex and powerful. Above all, it's part of HTML5 and epub3 and will be the default exchange format of the future (yes, exchange, as in: you can get your TeX out of it, too). But MathML is also old, it's development started in the mid 1990s and it has been adopted in publishing workflows for a long time.

Personally, I like MathML. Not enthusiastically, not without a grain of salt (because XML is what it is: an industry-grade standard, making it robust and powerful but also difficult to adopt when you can't throw a few 100k away). Above all, you have to admire MathML by which I mean the efforts of the W3C's MathWG -- they made it to HTML5 -- it's incredible, really.

For a long time I thought the scientists were structurally ahead when it came to the web. They were out there, discussing their data. Clearly, scientists are still way ahead when it comes to using the internet to organize their community (scio anyone?).

But recently, it dawned on me that scientists are not ahead when it comes to being native to the web. That would be math -- thanks to MathML and (being totally unbiased) MathJax. They have enabled us to leave the crutch of image rendering behind. Science? Not so much a box plot, a molecule rendering or a dna sequence -- you will find nothing but image renderings even though it makes no more sense than a formula as an image: they should be raw data in HTML, rendered by a browser.

So before you complain about MathML, read up on it, ask your concerned questions and see them resolved (or not). And then let's talk.

### asciimath & jqmath

You may never have heard of them, so listen up.

Asciimath is the brainchild of Peter Jipsen whom I happened to share a room with at BLAST 2010 without knowing that he's behind asciimath. How foolish.

Asciimath is trying to be the markdown of mathematical markup: it's not trying to do everything, but to do well. In particular, it tries to make it easy to handle and human readable. This is a blessing I never really understood even though I fell in love with markdown for the very reason.

Jqmath is a similar yet different beast. It's very powerful as it is essentially serialized MathML. Like asciimath, jqmath focuses on UTF input because that is human readable.

> I mean, is `f: X \to Y, x \mapsto f(x)` really more human readable then `f:X→Y,x↦y` (note: not everybody speaks English).