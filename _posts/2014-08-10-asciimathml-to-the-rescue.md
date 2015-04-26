---
layout: post
title: ASCIIMathML to the rescue
date: 2014-08-10 09:36:10.000000000 +02:00
categories:
- mathjax
- mathml
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _publicize_twitter_user: "@pkrautz"
  _cws_is_markdown_gmt: '2014-08-10 16:38:03'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
  _wpas_skip_5613678: '1'
  _wpas_skip_5613660: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

Doug Schepers recently asked me for some advice for HTMLizing some mathematics. [Doug](http://www.w3.org/People/Schepers/) is one of those exceptional people at the W3C who thrive in pushing the web and its standards forward. In this case, Doug was looking at [this bit of audio engineering](http://www.musicdsp.org/files/Audio-EQ-Cookbook.txt) in the context of the [Web Audio spec](http://www.w3.org/TR/webaudio/).

As you can see, that text file has some beautiful ascii-art mathematics. Of course, Doug wanted to code this up properly for the web which means using MathML and the question was: what's the easiest way to do so?

It's not hard to see why I suggested [ASCIIMathML](http://www1.chapman.edu/~jipsen/mathml/asciimath.html) (or asciimath). Asciimath was written by [Peter Jipsen](http://www1.chapman.edu/~jipsen/) with whom I happen to have two lucky personal connections -- first, I luckily shared a room with Peter at BLAST 2010 (way before I got involved with MathJax, see [these posts](http://boolesrings.org/krautzberger/tag/blast-2010/)), second I was lucky enough to enjoy his hospitality a couple of times while we lived in LA, including Peter taking me surfing for the first time in my life -- good times.

If I remember correctly, asciimath was born out of pure necessity -- finding a way for college students to write mathematics on the web. These kids were accustomed to graphing calculator style input, and Peter, of course, believed that MathML was the right way for an output on the web -- so in 2004 he started to write this beautiful JavaScript library to convert from one to the other.

Later on, [David Lippman](http://dlippman.imathas.com/) wrote a nice MathJax addon, which was ultimately re-written by David Cervone, and so nowadays you can use asciimathml in any browser by combining it with MathJax.

### Why Asciimath is awesome

First off, if you know some TeX I would probably describe asciimath as "TeX without backslashes". Because, really, why not write `alpha` or `phi` for %alpha, phi%? Similarly, why not just write `sin` for %sin%? (Oh, and let's have [a fun discussion](https://github.com/mathjax/MathJax/issues/353) about `phi` vs `varphi`, Unicode vs TeX. But not a problem, you can switch to whichever convention you like using MathJax.)

Second, if you know markdown, then I might describe asciimath as "markdown for math". It's not TeX in all its (infamous) glory or even MathJax's TeX-like input with its many advantages for the web. It's much more restricted and that's by design -- much like markdown is.

Given its target (MathML) and its general webbiness, asciimath works smoothly with Unicode, which adds to its readability and usability (and internationalization). Everyone will probably appreciate that `->` and `→` work interchangeably (both of which seem much saner to me than anything LaTeX would suggest). So `f: A -> B` and `f: A → B` produce identical MathML: %f: A -> B% and %f: A → B%.

Similarly, asciimath's minimal approach does not need TeX's cumbersome `\begin{} \end{}` environments, but many important tools are available in much simpler ascii/computing notation, e.g., `((a,b),(c,d))` for matrices: %((a,b),(c,d))%.

### Making asciimath better

Personally, I think asciimath probably deserves the title "markdown for math" although I think the title will go to TeX-like input after all (but that's another post).

What I'd really love to see is more people pushing asciimath further. The official [ASCIIMathML repository](https://github.com/mathjax/asciimathml) is now hosted on MathJax's GitHub account and we even grabbed a nice domain at [www.asciimath.org](http://www.asciimath.org/) to have an open page using Github pages for people to easily contribute enhancements to.

There's a lot of low hanging fruit in the form of improving the quality of the MathML (e.g., `a\\b` should probably produce `<mfrac bevelled="true"><mi>a</mi><mi>b</mi></mfrac>` instead of the problematic `<mi>a</mi><mo>/</mo><mi>b</mi>`) and of course asciimath by design should probably not strive to be feature complete (i.e., generate any kind of MathML) which means there should be situations where asciimath will simply fail and, much like markdown with HTML, it could perhaps gracefully mix MathML and asciimath.

But in any case, it's great to have this alternative to TeX-like inputs because TeX is ultimately holding math on the web back (but that's another post, for another time).