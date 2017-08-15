---
layout: post
title: "The problem with MathML as a web standard (part 2)"
date: 2017-08-15
permalink: 0198/
published: true
---

Time to continue from [part 1](/0197/). This is one is about a minor problem but a problem which keeps coming up.

## Prelude

One advantage of MathML on the web is that it's XML, i.e., it looks a lot like HTML and SVG and does not require a lot of extra tooling (e.g., parsers). In addition since you can preserve its structure when converting to HTML or SVG, you can can hack MathML markup to improve the result on the web, e.g., by adding CSS or [ARIA](/0192/).

Still, being XML is obviously not enough to make anything a good web standard.

## The second problem: MathML vs. other equation input formats

Obviously this depends a lot on what qualities you are after but I've found it to be a common misconception that MathML is somehow universally superior to other ways of marking up equations. That misconception is getting it backwards.

Like any exchange format, MathML's design is more that of a least common denominator between document systems and, in particular, between visual rendering engines for equational content. By definition, this means it is the least expressive, least flexible, and least powerful format.

A good exchange format would of course be a great thing to have and it can still be very powerful if the ecosystem's diversity is not too great. Unfortunately, that's not the case for MathML where rendering engines for equational content exist and vary considerably between ancients like troff or TeX, modern word processors, computer algebra systems, and more.

So while it is easy to create MathML from other equation input formats it is effectively dumbed down in the process. Reversely, it is not easily interpreted in another system without significant loss of information. This is of course nothing special, just look at binary image formats or text processing. But this is a problem for MathML because it is designed for this purpose; however, it neither reaches the quality of, say, SVG as an exchange for vector graphics, nor does it provide real-life advantages over, say, subsets of LaTeX notation (e.g., in [jats4reuse](http://jats4r.org/math)) or even ASCII-style notation.

A particular example of this loss of information is that importing MathML into other systems, while often possible, is rarely re-usable. This is a bit like importing a binary image format into another editor; yes it works, but there are limits to how well you can edit the import without re-doing the whole thing. To give a simple example, David Carlisle's [pmml2tex](https://github.com/davidcarlisle/web-xslt/tree/master/pmml2tex) provides perfectly nice visual output in print but rather unusual TeX markup.

The fact that after 20 years there are virtually no rendering systems out there that use MathML internally indicates that MathML fails to provide a decent solution for another basic use case.

## Coda

After these basic, to some degree <i>social</i> problems, let's talk about core problems of the spec itself next.
