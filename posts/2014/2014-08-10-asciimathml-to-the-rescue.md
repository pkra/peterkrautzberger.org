---
layout: post
title: ASCIIMathML to the rescue
date: 2014-08-10
categories:
- mathjax
- mathml
tags: []
published: true
permalink: 0167/
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

---

_Comments_

* **Kasper Peulen**, 2014/09/15
  I absolutely do agree that asciimath deserves the title “markdown for math”. However it seems that many mathematicians don't take anything serious that is ¬LaTeX.
  I'm really curious where your next blog post will be about. I do think that TeX is ultimately holding math on the web back. I think the web have seriously failed if in 10 year time, it is still the standard to use LaTeX code for a (good looking) mathematical chat. Or other forms of quick mathematical communcation on the web.
  But I'm not seeing ASCIIMath as the holy grail (yet). One reason that people may not take ASCIIMath seriously, is because it doesn't look the same as LaTeX. Not having a different mode for inline and display style math is something that arguably doesn't look so professional. I don't see people use ASCIIMath for writing a mathematical blog in this way.
  The lack of <code>\begin{align} \end{align}</code> like environements is also a downside of ASCIIMath. I use align environments all the time. I agree that ASCIIMathML aim shouldn't be to be feature complete. But I do think it should be able to generate 90 percent of what a mathematician uses. In other words 90 percent  of what is used at math.stackexchange for example.
  The last point I don't like about ASCIIMathML is its name. Being ASCII focussed is not what I envision for a future mathematical language. I think the language should be unicode focussed. Because unicode symbols are ultimately the easiest to read.  
  For example take this LaTeX code:
  <code>$W^{3\beta}_{\delta_1\rho_1\sigma_2}$</code>
  The ASCII variant:
  <code>`W_(delta_1rho_1sigma_2)^(3beta}`</code>
  I think for the ultimate readable mathematical language, a hybrid of ASCIIMath and Murray Sargant's math language would be perfect: http://www.unicode.org/notes/tn28/UTN28-PlainTextMath-v3.pdf
  In that language, you would have:
  <code>W_δ₁₂ρ₁σ₁^3β</code>
  Which is the best readable of the three I think. (I see that ASCIIMathML does render some unicode symbols, but ₁ or ₂ or not rendered (what I would think is) correct.
  The problem of unicode symbols is of course that they are not easy to write in any plain html textarea input (or even ace editor). That is some real obstacle I try to battle with this little tool: http://kasperpeulen.github.io/PressAndHold/
  Ultimately, I think it should be possible to have unicode symbols be labeled "easy to write". For example writing these unicode symbols <code>(W_δ₁₂ρ₁σ₁^3β)</code> in this comment box, was allmost trivial using that tool (which can be used as a bookmarklet script).
  Another way would be just mapping the ASCII macros already to their unicode symbols in the textarea element. Why should you convert beta to β only in the output? Why not converting it in the input while you are typing it ?
  I guess I want a language that could be described as "ASCIIMathML with less ASCII" Because, really, why not write α  or ϕ for alpha or phi ?
