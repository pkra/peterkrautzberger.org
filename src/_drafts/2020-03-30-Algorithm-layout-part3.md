---
layout: post
title: Algorithms in HTML and CSS Part 3. Moar grids.
date: 2020-03-30
permalink: 0216/
---

This continues [part 1](/214/) and [part 2](/215/) about experiments realizing (print) "algorithm layout" in the tradition of print layout on the web. Again, the following image captures a good starting point.

<img src="/assets/2020/euclid.png" alt="Euclid's algorithm typeset using LaTeX's algorithmicx package">

In Part 1, I started at the wrong end, if you will: I looked at existing solutions that aim to stay close to print, both in authoring "convenience" and layout design. In Part 2, I went through a rought draft of realizing a simlar layout in CSS "properly".

Now, let's try to let go

## Where we left off

Again, we keep to the the classics and Euclid's algorithm.


---
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

Some random thoughts when looking at this:

- we should obviously use a figure with figcaption element for HTML; maybe sprinkle some aria-roledescription in there.
- CSS pseudo-content seems an obvious choice for "Procedure" and "While...do / done".
- why don't those comments align? Seems worth changing.
- As I mentioned last time, I like the nesting (Procedure/EndProcedure, While/EndWhile). We should find a way to keep it. But it also seems hard
- This layout is obviously a case for grid

## head on

So let's try not to overthink this, let's try not to take more than inspiration from the source, let's try to think about the web's grain.

What do we need at first sight?

- multiple lines of 3 columns: counter, content, comment
  - get nice alignment
  - try to avoid tables (for both layout and accessibility but it's complicated; maybe more on that later)
- a way to handle begin/end type of things (subroutines, loops etc)

Again, the obvious modern choice for two dimensional layouts is CSS grid. And CSS counters should help as well:

<style style="display: none;">
style {
  display: block;
  font-family: monospace;
  white-space: pre-wrap;
  margin-bottom: 1em;
  font-size: 0.8em;
}

section{
  margin-bottom: 1em;
  overflow: auto;
}

.sc {
  font-variant: small-caps;
}
</style>

<style>.algorithm {
  counter-reset: algolinecounter;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 1em;
}
</style>

To try it out, here's a dummy set of two "lines".

<section class="algorithm">
<div>Counter</div>
<div>Content</div>
<div>Comment</div>
<div>Counter</div>
<div>Content</div>
<div>Comment</div>
</section>


Nothing really to see yet, so let's move on.

To handle our line counters, we use the counters (obviously) but we also get some critical help from grid: since we might not have comments, we don't know whether the line is full. But that's not a problem with grid - we can just force our counter to always start in the first column

<style>.counter {
  grid-column-start: 1;
  counter-increment: algolinecounter;
}
.counter::before {
  content: counter(algolinecounter) ': ';
}
</style>

To try it out, here's two lines with only the second on having a comment.

<section class="algorithm">
<div class="counter"></div>
<div>Content</div>
<div class="counter"></div>
<div>Content</div>
<div>Comment</div>
</section>

This is a good point to think about accessiblity. CSS generated content is of course ok but we might want to add some ARIA attributes to indicate the visual effect of starting a line; then again, maybe that tends to be clear from context and we shouldn't add noise. It's tempting to aria-hide the counters and use table roles which would gives AT users the advantage of table walkers - a grid role would be more appropriate but then we'd have to write our own walker so definitely out of scope for a first draft. Anyway, we don't have to do this right now, we just have to keep it in mind.

Next up, let's deal with the other fixed property: comments. This is simple anyway:

<style>.comment {
  margin-left: 3em;
}
.comment::before {
  content: '▷ ';
}
</style>

This looks nice enough but we should probably hide that from non-visual users. We could indicate that it's a comment but again it might be enough to grok this from context. At least we know we can.

<section class="algorithm">
<div class="counter"></div>
<div>Content</div>
<div class="comment">Comment, longer</div>
<div class="counter"></div>
<div>Content</div>
<div class="comment">Comment</div>
</section>

Oooh, look at that alignment! Isn't it pretty?

So, 9 lines of CSS and our basic layout is done. Nice.

Since this is a first draft, let's continue not to over think this. The begin/end routines seem to always have, well, a beginning and an end. So let's just make that happen.

<style>.while::before,
.while::after {
  font-weight: bolder;
}
.while__start::before {
  content: 'while ';
}
.while__start::after {
  content: ' do';
}
.while__end::before {
  content: 'end while';
}
</style>

In action

<section class="algorithm">
<div class="counter"></div>
<div class="while while__start">
    Some condition
</div>
<div class="comment">
    Otherwise, we're done.
</div>
<div class="counter"></div>
<div>We do some work</div>
<div class="counter"></div>
<div class="while while__end"></div>
</section>

The final piece doesn't look very nice but neither does the original source.

There's a worse glitch though: if you look at the original, the part "inside" the loop is indented. This is slightly tricky since we don't have a good way of writing a selector for those kinds of elements. Luckily, this is a first draft and we're lazy, so let's just add a helper class.

<style>.ml1 {
  margin-left: 1em;
}
</style>

Problem solved:

<section class="algorithm">
<div class="counter"></div>
<div class="while while__start">
    Some condition
</div>
<div class="comment">
    Otherwise, we're done.
</div>
<div class="counter"></div>
<div class="ml1">We do some work</div>
<div class="counter"></div>
<div class="while while__end"></div>
</section>

Moving on to the last issue, nested subroutines, so let's copy and paste our loop.

<section class="algorithm">
<div class="counter"></div>
<div class="while while__start">
    Some condition
</div>
<div class="comment">
    Otherwise, we're done.
</div>
<div class="counter"></div>
<div class="while while__start">
    Some condition
</div>
<div class="comment">
    Otherwise, we're done.
</div>
<div class="counter"></div>
<div class="ml1">We do some work</div>
<div class="counter"></div>
<div class="while while__end"></div>
<div class="counter"></div>
<div class="while while__end"></div>
</section>

But of course now we have the same margin problem all over again, so we don't think too hard and add another helper.

<style>.ml2 {
  margin-left: 2em;
}
</style>

Then we can make it:

<section class="algorithm">
<div class="counter"></div>
<div class="while while__start">
    Some condition
</div>
<div class="comment">
    Otherwise, we're done.
</div>
<div class="counter"></div>
<div class="ml1 while while__start">
    Some condition
</div>
<div class="comment">
    Otherwise, we're done.
</div>
<div class="counter"></div>
<div class="ml2">We do some work</div>
<div class="counter"></div>
<div class="ml1 while while__end"></div>
<div class="counter"></div>
<div class="while while__end"></div>
</section>

At this point, it's clear that we have a lurking problem but luckily this was just a first draft and we can finish our example. Let's just add a procedure class as follows.

<style>.procedure::before {
  font-weight: bolder;
}
.procedure__start::before {
  content: 'procedure ';
}
.procedure__end::before {
  content: 'end procedure';
}
</style>

And it looks like we're there.

<section class="algorithm">
<div class="counter"></div>
<div class="procedure procedure__start">
    <span class="sc">Euclid</span><i>(a, b)</i>
</div>
<div class="comment">
    The g.c.d. of <i>a</i> and <i>b</i>
</div>
<div class="counter"></div>
<div class="state ml1"><i>r ← a </i>mod<i> b</i></div>
<div class="counter"></div>
<div class="while while__start ml1">
    <i>r ≠ </i>0
</div>
<div class="comment">
    We have the answer if <i>r</i> is 0
</div>
<div class="counter"></div>
<div class="ml2"><i>a ← b</i></div>
<div class="counter"></div>
<div class="state ml2"><i>b ← r</i></div>
<div class="counter"></div>
<div class="ml2"><i>r ← a </i>mod<i> b</i></div>
<div class="counter"></div>
<div class="while while__end  ml1"></div>
<div class="counter"></div>
<div class="ml1"><strong>return</strong> <i>b</i></div>
<div role="region" aria-label="comment" class="comment">
    The gcd is <i>b</i>
</div>
<div role="region" aria-label="line" class="counter"></div>
<div class="procedure procedure__end"></div>
</section>

## Coda

Not bad for a first draft. Grid makes so many things just easy, sprinkle some counters.

There are a couple of glaring issues at this point

* those helper classes feel like content conversion. Can we do better?
* grid soup - could subroutines be wrapped in a single element?
* responsivity - scrolling is not awesome.

Inevitably, these will lead us into the weeds.

