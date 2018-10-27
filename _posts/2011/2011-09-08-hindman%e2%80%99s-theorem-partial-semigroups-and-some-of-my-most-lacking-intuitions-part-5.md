---
layout: post
title: Hindman’s Theorem, partial semigroups and some of my most lacking intuitions (part 5)
date: 2011-09-08
categories:
- expository
- research
tags:
- central set
- central set theorem
- condensation
- Hillel Furstenberg
- Ramsey theory
- semigroups
published: true
permalink: 0079/
latex: true
---

> [Last time](/0078/), I left you hanging -- I promised the Central Sets Theorem, but only bothered you with some more stuff on partial semigroup, i.e., condensations. Let me make it up to you.

## The Central Sets Theorems

So what is this mysterious theorem that, even though ergodic in origin is so close to the heart of algebra in the Stone–Čech compactification? It is not easy to formulate, but luckily [I kept bugging you](/0078/) with $\mathbb{F}$ and condensations, so we are well prepared.

Since there are many different versions of the theorem as it has been improved and generalized over the last 30 years, the most general formulations are quite something to process. As you might remember, this series started out as an expository piece, so let's write down a very simple version first, even weaker than the very first version proved by Fürstenberg (but who knows, maybe that's the version he first noticed). Remember that central sets are some kind of partition regular sets (that I haven't even properly defined yet but who cares).

> **Central Sets Theorem (simple version)** Let $A\subseteq \mathbb{N}$ be a central set. Imagine I'm giving you some abitrary $FS(x_n)$. Then you can find a $FS(a_n) \subseteq A$ and $(s_n: n\in \omega)$ in $\mathbb{F}$ such that
>  $$ FS(a_n + \sum_{i\in s_n} x_i) \subseteq A. $$
>  Just to repeat: if we set $y_n = \sum_{i\in s_n} x_i$, then
>  $$ FS(a_n + y_n) \subseteq A. $$

This is quite odd, no? Even though the sequence $(x_n : n\in \omega)$ has nothing to do with $A$, the central set can "gobble it up". As is to be expected, $A$ cannot "gobble it" up all of it, but there's a full condensation that can be translated into $A$ in a rather peculiar fashion. Somehow, $A$ is able to reproduce a shifted version of the algebraic structure of the FS-set.

Well, it gets even better. The original theorem allows us to "iterate" this result in a strong way.

> **Central Sets Theorem (less simple version)** Let $A$ be a central set. This time, I'm giving you finitely many $FS(x_n^0),\ldots FS(x_n^k)$. Not only can you get the above version for each sequence, but you can get them "together":
>
> You can find a single $FS(a_n) \subseteq A$ and a single $(s_n: n\in \omega)$ in $\mathbb{F}$ such that for all $ j < k$ simultaneously $$ FS(a_n + \sum_{i\in s_n} x_i^j) \subseteq A. $$
>  Again repeat: if we set $y_n^j = \sum_{i\in s_n} x_i^j$, then for all $j<k$
>  $$ FS(a_n + y_n^j) \subseteq A. $$

The crucial strength is that all the $y_n^j$ are constructed using the one fixed sequence of $s_n$'s -- regardless of the given sequences! That's crazy! Even though the sequences $(x_n^j)$ are completely unrelated, we will find condensations uniformly and translate by the same sequence of $a_n$'s.

Ok, maybe this difference is a bit subtle at first, but it is quite potent. For example, we immediately get van der Waerden's Theorem!

> **van der Waerden's Theorem (sort of)** If $A$ is central and some $l\in \omega$ given, we can find an an arithmetic progression of length $l$ in $A$, i.e., there exists $a\in A$ and $d\in \mathbb{N}$ such that $$ a, a+d, \ldots, a+ l\cdot d \in A.$$
>  In fact, we can find the increment $d$ in any prescribed FS-set!

This last sentence is kind of cool: you want the increment to be a multiple of 10? 42? A gazillion? No problem!

Let's derive this from the Central Sets Theorem. I know it's a bit meaningless without having seen the proof of the Central Sets Theorem (which is, by the way, very elegant using ultrafilters and I hope I'll get around to it)

**Proof.** Well, the "in fact" should be taken as a hint. So I give you some length $l$ for the arithemetic progression and as well as one FS-set, say $FS(x_n)$; you want to find an arithmetic progression in $A$ by some increment $d\in FS(x_n)$.

In other words, you're trying to make $d, 2d, \ldots, d \cdot l$ work. The idea is to look at the sequences $(j\cdot x_n: n \in \omega)$ to apply the version of the Central Sets Theorem that allows for finitely many FS-sets.

What does it give you? Well, you get a lot of $a\in A, s\in \mathbb{F}$ (a sequence/FS-/FP-set whatever, but let's just take one of each) such that
 $$a + \sum_{i \in s} j\cdot x_i = a +j \sum_{i\in s} x_i \in A$$ for each $j < l $ -- oh but that's an arithmetic progression with increment $d= \sum_{i\in s} x_i$, so we're **done**!

Look at how much more we have, though. We can predescribe the FS-set to pick from, we get an FS-set (induced by the FP-set) we get an FS-set of starting points and so forth.

This was but a first taste. The Central Sets Theorem can be pushed much further. With some restrictions a central set can "gobble up" infinitely many FS-sets, it can be proved for commutative semigroups and, in a much more complicated version, for non-commutative semigroups. But we'll stop here for now.
