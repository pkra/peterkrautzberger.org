---
layout: post
title: What's the best TeX-to-HTML or TeX-to-ePUB converter?
date: 2013-01-05
categories:
- crossposting
- technology
tags:
- epub3
- LaTeX
- latexml
- mathml
- pandoc
- tex4ht
published: true
permalink: 0127/
---

> What do I do when I don't find the time to properly write here? I needlessly double post stuff I've written elsewhere.

[Somebody asked the title question on LinkedIn](http://www.linkedin.com/groups/Whats-best-TeXtoHTML-TeXtoePUB-converter-3772588.S.200461734). My reply was as follows (well, I'll do the links properly here).

## What's the best TeX-to-HTML or TeX-to-ePUB converter?

I don't have that much experience with this, but it might be better than nothing.

I think the two main contenders for TeX-to-html are TeX4ht (which most LaTeX distributions ship) and [LaTeXML](http://dlmf.nist.gov/LaTeXML/).

TeX4ht is really a dvi-to-html converter so it behaves accordingly. In my limited experience, it is easier to get results.

LaTeXML seems more powerful, but I could never get it to produce results from "arbitrary" TeX (again, not a lot of time spent on this). On the other hand, LaTeXML is used systematically to convert the arXiv with reasonable success rates.

With respect to epub3 (ignoring html-to-epub3), I'm only aware of [pandoc](http://www.johnmacfarlane.net/pandoc/) (disclaimer: my personal favorite).

The current development branch has an epub3 writer with MathML support. This works reliably in a handful of tests. Pandoc does not have complete TeX support but John McFarlane is just a fantastic guy who built a strong community around pandoc -- something the two others seem to lack.

Addendum: [TeX.SE](http://tex.stackexchange.com/) has lots of expertise on tex4ht and latexml, of course. See [this example](http://tex.stackexchange.com/questions/43847/why-havent-any-tex-html-converters-been-updated-to-use-current-web-standards-s)

* * *

Since the blog has to have something extra

### Bonus links from TeX.SE:

*   [http://tex.stackexchange.com/questions/19928/how-can-i-use-latex-to-build-my-website/](http://tex.stackexchange.com/questions/19928/how-can-i-use-latex-to-build-my-website/)
*   [http://tex.stackexchange.com/questions/68916/convert-latex-to-mathjax-html/](http://tex.stackexchange.com/questions/68916/convert-latex-to-mathjax-html/)
*   [http://tex.stackexchange.com/questions/49208/why-is-latex-used-as-the-defacto-standard-for-math-equations/49228#49228](http://tex.stackexchange.com/questions/49208/why-is-latex-used-as-the-defacto-standard-for-math-equations/49228#49228) (I'll have to come back to that one)

### Super Bonus links

*   [https://github.com/coolwanglu/pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) (via TeX.SE) which simultaneously amazes & freaks me out. (Look into the source of the example with formulas... brrr...)
*   [http://www.albany.edu/~hammond/demos/Html5/arXiv/](http://www.albany.edu/~hammond/demos/Html5/arXiv/) how I started with tex4ht.

### Bonus observation

the two posts that regularly drive traffic this way are about Markdown and epub. Just saying.

### Bonus bonus

That last sentence about John McFarlane got shortened too much and doesn't quite make sense anymore. So I finally have a reason to embed the most important comic strip on the internet.


<figure>
  <a href="http://xkcd.com/386/">
    <img alt="Are you coming to bed? -- I can't. This is important. -- What?  -- Someone is _wrong_ on the internet." src="/assets/2013/duty_calls.png"/>
  </a>
  <figcaption>
  <a href="http://xkcd.com/386/">Duty Calls</a> (&copy;  xkcd, cc-by-nc).
  </figcaption>
</figure>
