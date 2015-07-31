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

---

_Comments_

* **michalh21**, 2013/05/30
  For LaTeX to html conversion, I would really recommend tex4ht, its problem is fragmentation of documentation, some information is completely missing, but on the other side it can convert any LaTeX document, it can be even configured to convert tikz pictures to svg, or to output math as <a href="http://www.albany.edu/~hammond/demos/Html5/arXiv/" rel="nofollow">mathml with mathjax rendering</a>
  I think it is a good idea to output html for people who wants to read on tablets or smart phones, but personally, I still prefer to read PDFs, even on my laptop or PC. For me, PDF has advantage in better readability. HTML even with most recent trends like web fonts and responsive typography is still far behind PDF in this regard. Other advantage is pagination, it helps me with orientation in document. Maybe not so many readers pay attention to such things today, but I think majority of writers in LaTeX wouldn't like how bad their documents look in HTML.
  And last point :) I don't really think LaTeX is hard. For things that markdown etc. supports, like sections, tables, links or footnotes, it is only few commands to learn, every editor today supports snippets for fast inserting these commands, you can use templates for document preamble etc. And when you want to use things like referencing, bibliographies, indexing, glossaries etc, using LaTeX is much easier. Plus, for new functionality, you can write your own macros, which is easier than modifying markdown parser and inventing new syntax :)
  * **Peter**, 2013/06/06
  Thanks for your comments. tex4ht is certainly a nice and powerful tool. But there’s a fundamental difference: it’s really a dvi-to-html converter, not a LaTeX-to-html one. That allows it to circumvent a lot of problems (by letting the TeX binary do all the hard work) but also comes with losses since LaTeX is semantically richer than TeX/DVI (something that’s visible in the quality of the MathML output last time I tried it).
  I understand that most people find PDFs better. IMO, HTML has much more potential than PDF to provide a better reading experience, with rich content and easy interaction with other web content (and of course PDFs are virtually inaccessible). My main point was merely that we won’t get there if we don’t get started. Authors, in any case, should care more about their readers than their own reading experience. They can, after all, produce whatever they like for themselves whereas a reader rarely has that option. (Personally, I prefer my handwritten notes but that won’t help anyone given my illegible hand writing)
  I’m definitely not trying to tell people what they should use. Certainly, an experienced user often finds LaTeX the most flexible and powerful tool (TeX is a programming language, after all). But this power brings an awful lot of problems with it and in almost all situation that power is not needed. So I do like to argue for the right tool for the job instead, especially in educational settings — and above all, I would like to argue for conversion. No tool or format is perfect. But any content that cannot be converted to something else is (for better or worse) at a dead end.
* **Norman Lewis Perlmutter**, 2013/06/04
  Given that LaTeX already compiles into pdf, might it be better to use or develop a pdf to html converter? This would have the added benefit of being able to convert pdf files not generated by LaTeX into html.
  * **Peter**, 2013/06/06
  The short answer is: no. PDF is a very “loss-ful” format. The only way to extract e.g. mathematical content is by using heuristics, i.e., guessing from the placement what kind of expression was actually used. While converters like pdf.js do a good job at reproducing the layout, they do not really convert to HTML, they merely render it (much like a printer) — the output is inaccessible, doesn’t reflow well etc. TeX to HTML is already very solid and used in big publishing houses. Automatic conversion is perhaps at 95% — but to get to 100% (which is needed), the open source projects out there need feedback.
  Since the conversion from for strictly mathematical TeX to MathML is very solid, it’s much easier to go directly anyway. The only remaining problem are the messy packages, in particular the graphical packages that could either be converted to static graphics (like LaTeXML or tex4ht do) or re-implemented in javascript (like xyjax or mathapedia).
* **jessemckeown**. 2013/06/06
  Well, I’m doing my very little bit, then; since you mention it, though, is there any plan to eventually absorb xyjax into the main mathjax? AMScd does do the arrows nicer than putting `\to` and `\downarrow` in a `\begin{array}\end{array}`, but…
  * **jessemckeown**, 2013/06/06
  Oh, I forgot to make sure of the right website…
