---
layout: post
title: Algorithms in HTML and CSS Part 1. Prior art and the problem of content conversion
date: 2020-03-14
permalink: 0214/
---

A while ago I started to think about "algorithm layout". Not syntax highlighting of source code (such as [prism.js](https://prismjs.com/) handles nicely) but print traditions in the manner of the following image.

<img src="/assets/2020/euclid.png" alt="Euclid's algorithm typeset using LaTeX's algorithmicx package">

If you're familiar with LaTeX packages such as algorithmicx or algorithm2e you'll recognize this particular style of layout. As the names of those packages imply, this type of content is more about the abstract algorithms and less about implementation details in a specific language.

Realizing this specific style on the web is an interesting challenge. On the one hand, it's a problem of realizing print layout traditions on the web, an area I deal with professionally on a daily basis. On the other hand, there's an authoring problem behind this: realizing print layout is one thing, realizing it in a way that allows for a good (web!) reading and authoring experience is another.

When I started this side project, I only had had a quick look at some tools that solve this problem and before I wanted to write about what I did, I thought I should take another, closer look at them to provide context (and check my own work). I'm glad I didn't look too closely earlier since that may have sent me off in a completely different direction. It also reminded me of the pitfalls of authoring, in particular (print) content and its conversion.

## Prior art 1: algorithmicx

To pick an example, let's use a classic in every sense of the word: Euclid's algorithm.

Here's what you'd write in algorithmicx.

```
\begin{algorithm}
    \caption{Euclid's algorithm}\label{euclid}
    \begin{algorithmic}[1]
        \Procedure{Euclid}{$a,b$}\Comment{The g.c.d. of a and b}
            \State $r\gets a\bmod b$
            \While{$r\not=0$}\Comment{We have the answer if r is 0}
                \State $a\gets b$
                \State $b\gets r$
                \State $r\gets a\bmod b$
            \EndWhile\label{euclidendwhile}
            \State \textbf{return} $b$\Comment{The gcd is b}
        \EndProcedure
    \end{algorithmic}
\end{algorithm}
```

and you'd get the image from earlier.

## Pior art 2: latexml

While I personally no longer user it, latexml is an interesting option to consider because it is so heavily focues on extracting semantic structure from print documents.

Here's a codepen embedding of what you'd get from it:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="pkra" data-slug-hash="8c2d4358f4fd67d595c78e3e287af6e8" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Algorithms via LaTeXML">
  <span>See the Pen <a href="https://codepen.io/pkra/pen/8c2d4358f4fd67d595c78e3e287af6e8">
  Algorithms via LaTeXML</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


So to me this is a terrible mess of markup (and layout) but it's not surprising given what latexml focuses on. When you get into the business of generating HTML and CSS from things that are fairly far removed from HTML and CSS, in particular whole print documents, you are bound to create such a mess of markup. That's not even really a criticism; I think it's simply inevitable. After all, an author who uses latexml was not interested in authoring web content but in having some secondary piece of code, filled to the brim with clever heuristics, generate an approximation of the intended (print) product in HTML and CSS.

Nevertheless, there is a lot of noise in this which may make it hard to explore the example. Here's another codepen embedding with a more minimal version of the latexml output that has (hopefully) less noise and still exhibits th inherent issues of this approach towards authoring of web content.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="pkra" data-slug-hash="f6c5ff9db52d4e0f6cc903b288c21741" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Algorithms via LaTeXML, reduced">
  <span>See the Pen <a href="https://codepen.io/pkra/pen/f6c5ff9db52d4e0f6cc903b288c21741">
  Algorithms via LaTeXML, reduced</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

A quick list of things that spring to mind when going throught this.

* "functional" CSS (in the tailwind or tachyon sense), e.g., a border-top class, a small-caps class, a bold class - a natural concept for content conversion from a fairly structured format like TeX.
* inline styles - usually necessary when print layout is mimicked in detail (though somewhat surprising in this particular case which should be an obvious functional class when you think about it from a TeX point of view)
* the weird case of line 3 - it looks like a bug that the comment is wrapped in the bold part of the while...do construct and thus needs a font weight override
* right-floating comments overlap on small viewports
* line counters and comment markers (much worse in the original)
* divs and spans galore. Each "line" is a div but the line counter and state are wrapped together
* and the "highlight": multiple nbsp's to create indentation.

I'm not trying to complain too much here. Again, this is mostly what you'd expect when you build a tool like latexml. Print is just a shitty format to generate web content from and even good LaTeX can't save you from that fact.

## Prior art 2: pseudocode

The next example is a probably less known JS library called pseudocode.js.

Here's again a codepen embedding of what we might get.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="pkra" data-slug-hash="0d056d577e3891483c4e60adf83db41c" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="pseudocode.js">
  <span>See the Pen <a href="https://codepen.io/pkra/pen/0d056d577e3891483c4e60adf83db41c">
  pseudocode.js</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Cleaning it up a bit seems harder given. Maybe that's because it is closer to thinking in terms of web design (as opposed to print-reproduction). But we can delete the equation layout mess (which is weirdly inconsistent in the algorithmicx source anyway).

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="pkra" data-slug-hash="5d3a2662d84306e0dac071528e48d8ca" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="pseudocode.js, reduced">
  <span>See the Pen <a href="https://codepen.io/pkra/pen/5d3a2662d84306e0dac071528e48d8ca">
  pseudocode.js, reduced</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Again some random observations.

* moar divs. Not even a figure/figcaption (but a class `with-caption`); a bit disappointing.
* decent line-wrapping on small screens
* class names are less functional and more semantic (in the sense of layout), e.g., ps-line. That kind of intent seems appropriate.
* odd inline styles
  * canceling things out: `style="text-indent:-1.2em;padding-left:1.2em;"` is a funny extreme but probably just a side effect of the overall strategy to combine margin-right with negative text-indent.
  * rounding issues `style="margin-left:1.7999999999999998em;"` - just a bug but still.
* relative positioning. Feels weird to me for this kind of layout (of course it's how this particular approach works)
* nested substructures - that is right up my alley (more on that later hopefully). Stacking margin-left is neat but comes at the price of negative text-indent shenanigans for the line counters; I don't get why the margin is inline CSS rather than a class but there's possibly a decent reason for that (e.g., authoring).


## Coda

In both cases, the main reason why I find these approaches lacking lies, I think, in the the fact that they are the result of (print) content conversion. The disconnect between the authoring and the layout is too large to get one in touch with the other. This is a loss for both sides: the layout gets messy and the author comes no closer to understanding the medium they author for. A typical example is modifying the output; neither output can be re-arranged efficiently, all you can do is go to the source and convert again.

I'm not saying that some of the "bad" design decisions could be avoided; I definitely haven't found a way around every pain point. But my experience has been that the [law of the instrument](https://en.wikipedia.org/wiki/Law_of_the_instrument) is at the heart of the problem. Content conversion inevitably leads to certain types of hacks (such as meaningless DOM structures, class names and inline styles) to allow authors customizations without them having to think about the actual medium. If it's content conversion from a format meant for print, this is problem exacerbated because the media and their traditions often match poorly. But once those hacky instruments are in the tool belt, it's hard not to use them and you end up with hacks all the way down.

In the next part, I'll explore a different approach, also thinking about it from the perspective of the source material but hopefully with some level of detachment. After that, perhaps I'll find time to jot down some ideas on how to move towards authoring. But this piece has been more fun than I thought it would be; it's been interesting to dive a little deeper into these two after trying things on my own; good to see similarities and differences.
