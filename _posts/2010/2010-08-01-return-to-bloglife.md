---
layout: post
title: Return to bloglife
date: 2010-08-01
categories:
- research
- thelazyscience@peter.krautzberger.info
- updates
tags:
- dominating real
- Francois Dorais
- Mathias forcing
- Michael Canjar
- P-point
published: true
permalink: 0029/
latex: true
---

Maybe it was the summer heat, maybe the summer break at the UofM or something else. In any case, I did not feel like blogging the last couple of weeks. But this must change! So to get me back to writing I’ll start with something <del>small</del> tiny.

## Unforeseen

I have the great pleasure of spending my PostDoc at the University of Michigan. After spending a winter here 2/3 years ago, I knew a lot of things I could look forwards to — like the amazing grad students.

One of the unforeseen pleasures so far has been to meet [Francois Dorais](http://dorais.org) of [MathOverflow-Admin](http://mathoverflow.net/users/2000/francois-g-dorais) fame. Last Friday <del>we talked</del> he told me about [a proof by Michael Canjar](http://doi.org/10.2307/2047620) (sorry for linking to a paywall) on Mathias forcing and there is this small observation that I think is really cool.

## (non) P-points

I mentioned them before, but repetition is never a bad thing.

An ultrafilter $p$ on $\omega$ is called a **P-point** if for every $f: \omega \rightarrow \omega$ there is $A\in p$ such that $f$ restricted to $A$ is either finite-to-one or constant.

P-points are truly classical ultrafilters having been studied since the dawn of <del>time</del> ultrafilters. They carry interesting properties and Shelah proved that they might not exist (though they do under reasonably weak assumptions like very weak versions of [Martin’s Axiom](http://en.wikipedia.org/wiki/Martin%27s_axiom)).

The property of P-points somehow tells us that functions drastically ‘changes speed’ on a set in the ultrafilter. If you take a function which is ‘nowhere’ finite-to-one, i.e., every point has an infinite preimage, then a P-point either slows it down completely (by making it constant on a set) or speeds it up extremely (by making it finite-to-one).

But the cool thing Francois showed me (from Canjar’s proof) is what non P-points (so possibly all ultrafilters) can do. They can force any function to slow down in a weird fashion.

## Slowing to identity.

Even though the argument I want to mention holds for arbitrary functions, you should think of quickly growing functions, i.e., strictly increasing functions. So let us pick some $g: \omega \rightarrow \omega$.

Now if $p \in \beta \mathbb{N}$ is not a P-point, then there exists a function $f: \omega \rightarrow \omega$ which is not constant or finite-to-one on any set $A \in p$.

So what about $I_g := \\{ n \in \mathbb{N} \ \vert \ g(f(n)) < n \\}$?

On this set, $g \circ f$ is dominated by the identity. That’s slow!!! Just imagine $g$ was the [Ackermann function](http://en.wikipedia.org/wiki/Ackermann_function) or faster thatn all recursive functions! Suddenly, its only as fast as the identity? Wow…

And now the crazy part.

$I_g \in p$.

That’s right! On a set in $p$, $g\circ f$ slows down like that. That’s crazy!

**Proof**.

*   $f$ is finite-to-one on $\omega \setminus I_g$.
    *   For $k\in \omega$, $f^{-1}(k) \cap (\omega \setminus I_k) = \\{ i \in \omega \ \vert \ g(k)= g(f(i)) \geq i \\}$
    *   But this is a finite set for any $k$.
    *   In other words, $f$ is finite-to-one.
*   Therefore $\omega \setminus I_g \notin p$.
*   Since $p$ is a maximal filter, $I_g \in p$.

That’s all.

### What you can do with this.

[Michael Canjar used this fact](http://doi.org/10.2307/2047620) to show that Mathias forcing with a non P-point adjoins a dominating real. This is not too difficult now since it is easy to see that a Mathias real will dominate all sets in the ultrafilter. But that’s all for today.
