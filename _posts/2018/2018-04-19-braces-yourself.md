---
layout: post
title: "Brace(s) yourself"
date: 2018-04-19
permalink: 0204/
published: true
---

I recently read [Why would you do that?](https://css-tricks.com/why-would-you-do-that-in-css/) on CSS Tricks and it reminded me that I had mean to write this post a month ago.

So [I recently wrote about a fragment of mathematical content](/0203/) and a big part of it was the problem of stretchy braces. After building the "plain" HTML+CSS example at the end (re-using an extremely clever solution from the upcoming MathJax v3), I kept thinking: this should be easier. Luckily, this year I'm dedicating a chunk of my spare time to the [MathOnWeb Community Group](https://w3c.github.io/mathonwebpages/)'s new task force focused on CSS, looking for (old and new) ideas that might help simplify equation layout using CSS.

So one thing led to another and I found myself coming back to an old thought of mine.

## What's in a name?

Stretchy characters like those braces, what are they *really*? Like, *really really*?

Let's look at what they are called. As a matter of fact, they are called various things but the most generic term is possibly [*bracket*](https://en.wikipedia.org/wiki/Bracket). However in the context of equation layout, the more common terminology might be *delimiter* and *fence*. In particular, MathML provides an `<mfenced>` tag (though for various reasons the equivalent `<mrow>`+`<mo>` constructions tend to be preferred by most tools).

Now both brackets, fences and delimiters sounds an awfully similar to a very common concept. Where do you usually put up a fence? Where do you delimit something? **At a border.** It's a small idea, obviously, but what if we could solve the problem of stretchy constructions using borders?

What if somebody else already has?


## Previous Art

Well, you could go visit codepen and [simply search for *brace*](https://codepen.io/search/pens?q=brace&page=1&order=popularity&depth=everything&show_forks=false) and lo and behold, you find 4 perfectly fine specimens in CSS. Turns out, designers love pretty things, who'd have thunk.

If you dig a little deeper, you'll end up with basically three approaches.

The first one (with several interesting forks) is by [Lauren Herda](https://codepen.io/lrenhrda/).

<p data-height="265" data-theme-id="0" data-slug-hash="hkLIe" data-default-tab="result" data-user="lrenhrda" data-embed-version="2" data-pen-title="Single-Element Curly Brace" class="codepen">See the Pen <a href="https://codepen.io/lrenhrda/pen/hkLIe/">Single-Element Curly Brace</a> by Lauren Herda (<a href="https://codepen.io/lrenhrda">@lrenhrda</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


It is really pretty -- look Ma, [a single div](https://a.singlediv.com/)! (Except that it doesn't quite work on Chrome since an `<hr>` gets `overflow:hidden` from the user agent style sheet.)

That was fun. Let's do two more: one from [Jakob Christoffersen](https://codepen.io/MasterThrasher/)

<p data-height="265" data-theme-id="0" data-slug-hash="mOEjoK" data-default-tab="result" data-user="MasterThrasher" data-embed-version="2" data-pen-title="curly braces css" class="codepen">See the Pen <a href="https://codepen.io/MasterThrasher/pen/mOEjoK/">curly braces css</a> by Jakob Christoffersen (<a href="https://codepen.io/MasterThrasher">@MasterThrasher</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

and one from [@mexn](https://codepen.io/mexn/):

<p data-height="265" data-theme-id="0" data-slug-hash="xegaF" data-default-tab="result" data-user="mexn" data-embed-version="2" data-pen-title="CSS Curly Brace" class="codepen">See the Pen <a href="https://codepen.io/mexn/pen/xegaF/">CSS Curly Brace</a> by Markus (<a href="https://codepen.io/mexn">@mexn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Both are slighly more complicated than the first one. Instead of the radial gradient for the middle piece, they both use 6 elements with border-radius (though the last one has only 2, plus pseudo-elements). If you dive into their forks, you'll find lots of interesting variations, too.

The point is: this problem has in a very real sense actually been solved in CSS and you can do lots of fun variations yourself.

Such as this one

<p data-height="265" data-theme-id="0" data-slug-hash="YagEJb" data-default-tab="result" data-user="pkra" data-embed-version="2" data-pen-title="stretchy brace " class="codepen">See the Pen <a href="https://codepen.io/pkra/pen/YagEJb/">stretchy brace </a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

or this one

<p data-height="265" data-theme-id="0" data-slug-hash="OvYeoq" data-default-tab="result" data-user="pkra" data-embed-version="2" data-pen-title="stretchy brace, single-div" class="codepen">See the Pen <a href="https://codepen.io/pkra/pen/OvYeoq/">stretchy brace, single-div</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

(Fun fact: using percentages in  the border radius leads to some really cute behavior across sizes.)


## Objection!

Now you might say it hasn't solve the *real* problem. Here are a couple of counter-arguments:

**It has no character!** Gasp! It's true that in typical print equation layout engines you'll still a character there. Well, you could just add a hidden one, no?

**It doesn't work well on small sizes!** In typical print equation layout, you'll see several sizes of a brace being used for smaller heights (with possibly slight design variations for readability) after which the layout would switch over to a stretchy constructions (made up of several glyphs stitched together). This is a very interesting problem to solve. And you know what? This touches on one of the hottest topics of CSS discussions in the past few years: it is a perfect use case for [container queries](https://github.com/WICG/container-queries/). Go add a use case and push the web forward for everyone!

But perhaps current CSS is sufficient and someone will find a clever approach to achieve a similar effect. As I mentioned above, percentages in border radius have a neat effect; there is a lot of room to play with once you stop thinking about everything in terms of print traditions.

**It's not semantic!** Gosh. What exactly does a (stretched) brace represent, semantically speaking? And, should you have decided to embue it with such rich meaning yourself, are you really unable to expose the relevant information using the web platform's rich accessibility stack? No? Excellent - you should file a bug with ARIA and help push the web forward for everyone!

**It can't look like font x!** Some fonts have a really tricky curly brace with basically an S shape in each half. I admit my CSS-foo is not good enough to do that. But besides the fact that a better designer might find a solution, I find the trade-off acceptable. And if there's a limitation in CSS, please file a bug with the CSS WG and help push the web forward for everyone!

**It can't do delimiter y!** There are [quite a few brackets](https://en.wikipedia.org/wiki/Bracket#Encoding_in_digital_media), some more complex than others (*Mathematical left white tortoise shell bracket* anyone?) but few of those are used in stretchy ways and fewer still occur often (for comparison, the STIX-2 fonts support ~30 delimiters). I really don't have a problem with such edge cases remaining difficult for the time being if we can solve a practical problem for 99% of use cases. And if you do, ... you know what to do.

## Moar fences!

So let's do two more, the most important ones:

Parentheses,

<p data-height="265" data-theme-id="0" data-slug-hash="pLWRwx" data-default-tab="result" data-user="pkra" data-embed-version="2" data-pen-title="Stretchy parenthesis" class="codepen">See the Pen <a href="https://codepen.io/pkra/pen/pLWRwx/">Stretchy parenthesis</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

and square brackets

<p data-height="265" data-theme-id="0" data-slug-hash="bvYBje" data-default-tab="result" data-user="pkra" data-embed-version="2" data-pen-title="Stretchy brackets" class="codepen">See the Pen <a href="https://codepen.io/pkra/pen/bvYBje/">Stretchy brackets</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

See now, that wasn't so hard?

## Coda

I suspect that if we work a bit harder to unstuck ourselves from the traditions of (print) equation layout engines, then we might just find a lot of interesting solutions like this; solutions that help make equation layout on the web as easy as as designing a good page layout with CSS; solutions that work *with* the grain of the web; solutions that perhaps even lack but help identify (and resolve) shortcomings in the web platform that affect a much wider community; solutions that help move the web forward.

PS: I've started [a little collection on codepen](https://codepen.io/collection/njBkMa/). Ping me if you see something that might fit!



