---
layout: post
title: Epub and mathematics
date: 2011-07-13
categories:
- blogosphere
- technology
- thelazyscience@peter.krautzberger.info
tags:
- epub
- markdown
- pandoc
published: true
permalink: 0064/
---

A while ago [Martin Fenner had written about the BeyondPDF workshop](http://blogs.plos.org/mfenner/2011/01/23/beyond-the-pdf-%E2%80%A6-is-epub/) and [released his epub export plugin for wordpress](http://blogs.plos.org/mfenner/2011/02/01/epub-wordpress-plugin-released-today/) and [started the Wordpress For Scientist Google group](http://blogs.plos.org/mfenner/2011/02/04/discussing-wordpress-for-scientists/).

I had joined that group right away and had wanted to do some experiments for a while now. I have been falling in love with wordpress more and more and I will probably switch rather sooner than later. Then [last week Lieven le Bruin released some of his posts as PDF](http://www.neverendingbooks.org/ebook-geometry-and-the-absolute-point-v0-1) and, upon my comments, also experimented with epub. But the discussion on his blog brought back the issue of mathematics in epub.

By the way, I’m also starting another experiment – writing a paper collaboratively using wordpress! This will hopefully mean I can share more experiences. The main tool for this is [pandoc](http://johnmacfarlane.net/pandoc/) – a great tool for document conversion, especially if, like me, you love [markdown](http://daringfireball.net/projects/markdown/). Pandoc will eventually help me convert markdown to LaTeX (for the final touches). I’ll write more about that at some other point.

Anyway, today I finally got around to experimenting with epub and wrote the following lines on the google group.

> Hi.  
>  I have been experimenting with Martin’s epub-export plugin and, as a mathematician, can’t really be happy. There seems to be no good way to export mathematics in the sense that I (and most others online) are too used to LaTeX syntax and MathJax these days.  
>  From what I understand, the current situation is that the epub standard has a “should not”-rule for javascript inclusion and almost all applications block javascripts.  
>  This might possibly change in the future since the epub3 draft contains a “could”-rule for javascript. From a math(jax) point of view, javascript would solve a lot of issues. So I had wanted to experiment for some time and finally got around to it – so I thought I should share this.
>
> A while ago I found [a promising story about javascript in epub](http://www.pigsgourdsandwikis.com/2011/06/javascript-accepted-in-ibookstore.html). In particular, javascript seems to work in the iPad’s ebook app.  
>  Today, I tried to use this knowledge to create some easy mathematics in epub and testing this with a friend’s iPad.
>
> *   [Asciimathml](http://www1.chapman.edu/~jipsen/mathml/asciimath.html) inclusion “just worked” in the sense that adding the javascript file and adding the suitable line in the header of my test epub’s chap1.xhtml worked in the iPad app.
> *   [MathJax inclusion via the CDN](http://docs.mathjax.org/en/latest/configuration.html#loading-mathjax-from-the-cdn) worked – that’s great news, since it keeps the file small (but somewhat disturbing since it means all kinds of evils are possible via external javascript)
> *   MathJax inclusion in the epub file failed. This is unfortunate. The size of the epub increases significantly (and the process takes ages with the 30.000 mathjax files), but from what I understand the file limit is 2GB, not 16MB…
>
> So I have three questions:
>
> 1.  Could anybody try to reproduce this?
> 2.  Does anybody have thoughts on the problem of actual inclusion of mathjax?
> 3.  Does anybody know an ebook reader outside of the ipad that tolerates javascript?
>
> Thanks for any suggestions! Peter.
