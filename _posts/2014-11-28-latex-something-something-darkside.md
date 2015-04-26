---
layout: post
title: LaTeX Something Something Darkside
date: 2014-11-28 04:06:17.000000000 +01:00
categories:
- scientific community
- technology
tags:
- Bret Victor
- felix breuer
- IPython
- LaTeX
- Mike Bostock
- TeX
- web
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _publicize_twitter_user: "@pkrautz"
  _cws_is_markdown_gmt: '2014-11-28 12:06:17'
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

[This is week 3 of the challenge. Ok, I'm stretching "every week" a bit here. I blame somebody's first cold or alternatively Turkeys. Also, I cheated; this took longer than 30mins.]

https://www.youtube.com/watch?v=Wk2cd_x9Ta8

> Darth Vader/Stewie: Oh, come on, Luke, come join the Dark Side! It's really cool!  
>  Luke/Chris: Well I don't know. Whose on it?  
>  Darth Vader/Stewie: Well um... there's me, the Emperor, this guy Scott. You'll like him, he's awesome...

* * *

Where my previous post was more about TeX-like syntax, this is about TeX/LaTeX proper. If you're a TeX/LaTeX enthusiast, don't go all crazy on me (I mean, have you seen my thesis?). This is about me feeling a growing awkwardness towards TeX/LaTeX. And this has little to do with TeX/LaTeX itself.

### If all you have is a hammer, everything looks like a nail

TeX/LaTeX is a tool. It is a tool designed by Knuth to solve a problem in print layout. The trouble is: print is becoming less and less relevant and I think this holds for most TeX users (when was the last time you went to a library to look at the printed copy of a _current_ journal issue?). What is not obsolete is PDF and TeX is, of course, very good when it comes to generating PDF.

However, this "Portable Document Format" is really quite useless in the one place where people consume more and more information: the web. (I admit I'm of the conviction that the web won't go away; crazy talk, I know.) And for the web, TeX/LaTeX is the wrong tool. Yes, there are about a gazillion projects out there that try to bridge that gap, try to create HTML out of LaTeX. But if you try them out you'll soon notice that you'll have to restrict yourself quite a bit to make conversion work.

Turn this around and you'll realize that the community as whole has a serious problem: almost nobody writes TeX/LaTeX that way which means almost all TeX/LaTeX will never convert to web formats well. To put it differently, there's a reason for a large market of blackbox vendors that specialize in TeX to XML/HTML conversion for professional publishers (and this often involves re-keying).

This is, of course, in no way a fault of TeX/LaTeX itself which was designed for print, in 1978\. But it is a problem we are facing today.

### Everything is nothing

Now TeX is Turing complete and this means we can do everything with TeX (even [toast](http://tex.blogoverflow.com/2012/10/i-tex-therefore-i-toast/)). So a universal output for the web is theoretically possible. However, everything is nothing if we can't make it practical. Perhaps one day, we'll be lucky to find another Leslie Lamport who will give us "HTMLTeX", i.e., a set of macros that work and rapidly become the de-facto standard for authors. I doubt it. (And not just because I know mathematicians who don't upload to the arXiv because their ancient TeX template won't compile there.)

I doubt it because there's no problem to solve here. Where Knuth (and Lamport) solved imminent problems, there is no problem when it comes to authoring for the web -- a gazillion tools do it, on every level of professionalism. TeX is neither needed for this nor does it help.

### Waste of resources

> "The best minds of my generation are thinking about how to write TeX packages."  
>  -- not Jeff Hammerbacher.

Another part of my awkwardness towards TeX/LaTeX these days lies in the resources the community invests in it. It feels like every day, my filter bubble gives me a new post about somebody teaching their students LaTeX. These make me wonder. How many students will need LaTeX after leaving academia? How many would benefit from learning how to author for the web?

And then there's actual development. How many packages on CTAN are younger than 1/2/5 years? How many of those imitate the web by using computational software in the background or proprietary features such as JS-in-PDF (and who on earth writes a package like that)?

To me, this seems like an unfortunate waste of resources because we need people to move the web forward. If we remain stuck in PDF-first LaTeX-land, we miss a chance to create a web where math & science are first class citizens, not just by name but by technology and adoption from its community.

If only a part of the TeX/LaTeX community would spend an effort on web technologies like IPython Notebook, BioJS (or even MathJax) it would make a huge impact.

### Professional?

This brings me to my last awkward feeling about LaTeX for today which comes on strongly whenever somebody points out that LaTeX output is typographically superior.

I understand why somebody would say it but once again LaTeX is a merely tool. The reality of publishing is that almost all LaTeX documents are poorly authored, leading to poor typesetting. In addition, actual typographers will easily point out that good typography is not limited to Knuth's preferences enshrined in TeX.

So while I can understand why somebody would claim that their documents are well typeset, this is not very relevant. As long as we cannot enforce good practices (let alone best ones), the body of TeX/LaTeX documents will remain a barely usable mess (for anything but PDF generation).

On the other hand, publishers demonstrate every day that you can create beautiful print rendering out of XML workflows, no matter if you give them TeX or MS Word documents. Even MS Word has made huge progress in terms of rendering quality and nowadays ships with a very neat math input language, very decent handwriting recognition and other useful tools.

The web is typographically different. On the one hand, much of its standards (let alone browser implementations) is not on the level of established print practices. On the other hand, its typographic needs are very different from print for many reasons (reflow, reading on screens etc). And even though some of print's advantages will eventually be integrated, I suspect we will develop a different form of communication for STEM content on the web than we have in print because we have a much more powerful platform.

Ultimately, PDFs have stopped looking professional to me. Instead, [Felix's recent slides](http://blog.felixbreuer.net/2014/11/20/geometry-of-restricted-partitions-talk-slides-threejs.html), [Mike Bostock's "Visualizing Algorithms"](http://bost.ocks.org/mike/algorithms/), and [Bret Victor's Tangle](http://worrydream.com/Tangle/) are examples where you'll see my face light up, thinking about how we can build authoring tools to turn these experiments into tools for the average user.