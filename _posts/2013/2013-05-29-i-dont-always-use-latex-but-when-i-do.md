---
layout: post
title: I don't always use LaTeX, but when I do…
date: 2013-05-29
categories:
- scientific community
- technology
tags: []
published: true
permalink: 0136/
---

Since I haven't published anything in almost two months, let me jot down one thought that has come to mind frequently over the past few months.

## If you use LaTeX …

Well, first of all, are you sure you _have to_ use LaTeX? By which I mean, are you sure you can't use Markdown+MathJax or textile+MathJax or restructuredText+MathJax? Especially if you're teaching your students, are you absolutely sure you are completely and utterly unable to use something simpler? Something that is more modern than learning a hundred bits of print typesetting that your student will never, ever need? Ok, just checking. So…

## If you (have to) use LaTeX, then make HTML your primary output.

By which I mean: don't just produce PDFs that nobody can read on small screens, PDFs that nobody can read accessibly, PDFs that nobody will want to read in 5 years.

Make HTML your first output. It's important. HTML is the future engine for mathematical and scientific content. If you can't produce HTML, then ur doin it rong. If you don't produce HTML, you won't ever help all the people working on pushing math on the web forward.

It won't be trivial but easier than you think. Install [LaTeXML](http://dlmf.nist.gov/LaTeXML/a) and learn how to use it. (Alternatively you probably have a copy of tex4ht installed with your TeX.) How hard is it? This hard:

      latexml --dest=mydoc.xml mydoc.tex
      latexmlpost --dest=mydoc.html --format=html5 mydoc.xml

And when you run into LaTeXML limitations, then get over it, [report them back](http://dlmf.nist.gov/LaTeXML/contact.html), help make it better. If you run into problems with MathJax, [report them](https://github.com/mathjax/mathjax/issues), help make it better. You need graphics? Check out [xyjax](https://github.com/sonoisa/XyJax). You need pstricks? Check out [mathapedia](http://mathapedia.com). You need computations? Check out [Sage cell server](http://www.sagemath.org/eval.html). It's all there, but you have to get started. To it today.

But if you've ever wanted math to be native on the web, then you have to realize that it **won't happen without your help**.

If you're too lazy for converting (e.g., when you're teaching), then use something that compiles to both TeX and HTML (like markdown+MathJax etc). Pick a decent tool for it, like [Qute](http://www.inkcode.net/qute), [ReText](http://sourceforge.net/projects/retext/), write on the web with [FidusWriter](http://fiduswriter.com/) or [Authorea.com](http://authorea.com), write in your favorite Mac-editor with [Marked](http://markedapp.com/), or [extend sublimetext](https://github.com/revolunet/sublimetext-markdown-preview), on an iPad app use [Writing Kit](https://itunes.apple.com/us/app/writing-kit-research-write/id426208994) -- and that's just off the top of my head; there are many more editing environments that offer good syntax and MathJax integration. Many can save to TeX documents, anything can be converted via [pandoc](http://johnmacfarlane.net/pandoc/). It's not perfect yet but it won't get better unless you give everybody some feedback.

So, if you can, don't author LaTeX, author _into_ LaTeX. And whatever you do, compile it to HTML. It's important.

<figure>
  <a href="/assets/2013/mostinterestingman_meme.jpg">
    <img alt="I don't always use LaTeX but when I do, I compile to HTML" src="/assets/2013/mostinterestingman_meme.jpg"/>
  </a>
  <figcaption>
  credit: <a href="http://www.quickmeme.com/meme/3umuyt/">quickmeme.com</a>
  </figcaption>
</figure>
