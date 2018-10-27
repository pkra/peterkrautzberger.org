---
layout: post
title: Hindman's Theorem, partial semigroups and some of my most lacking intuitions
  (part 4)
date: 2011-09-07
categories:
- expository
- research
tags:
- central set
- central set theorem
- condensation
- Hillel Furstenberg
- Hindman's Theorem
- Neil Hindman
- partial semigroups
- partition regular
- Ramsey theory
- semigroups
- Vitaly Bergelson
published: true
permalink: 0078/
latex: true
---

> Well, I hope you didn't miss me while I was on my first summer vacation in three years. So let's continue this series. If you remember, [part 3](/0077/) consisted mainly of the observation that FS-sets have a partial semigroup structure induced by $\mathbb{F}$ as well as me telling you that there's a immediate correspondence between FS-sets and idempotent ultrafilters.

I'm slowly getting where I wanted to head all along with this series. When I write "my most lacking intuitions" in the title, I have my intuitions about central sets in mind. They are most lacking, I assure you. But with this series I wanted to clear my head a little. So let's head down the rabbit hole, no questions asked.

## Towards the Central Sets Theorem

The Central Sets Theorem was conceived by [Hillel Fürstenberg](http://en.wikipedia.org/wiki/Hillel_F%C3%BCrstenberg). I know relatively little about its history so I am still amazed by the fact that anyone could come up with it -- it's such a strange creature. Fürstenberg proved it for $\mathbb{Z}$ (but I'll keep considering $\mathbb{N}$, the two situations are equivalent anyway). The notion of centrality has its origins in ergodic theory -- unsurprisingly for Furstenberg. As fascinating and fruitful as the connection between ergodic Ramsey theory and Algebra in the Stone–Čech compactification is, I don't plan to introduce the technology in this series, because it will take us too far from the path I have in mind (mind you, I haven't even introduced the semigroup structure on $\beta \mathbb{N}$, so really, I shouldn't introduce the ergodic point of view of which I know far less).

Fürstenberg devised the notion of **central set** (for subsets of $\mathbb{N}$) which was determined by recurrence phenomena in dynamical systems. Again, I don't want to discuss the dynamical point of view but I'll give the ultrafilter characterization later. The key for a connection to Ramsey theory was simple.

> **Theorem (Fürstenberg)** Central sets (whatever they are) are partition regular.

Whatever central sets are (sorry for being temporarily mysterious), it is shocking how much algebraic structure central sets have to offer -- which is what the Central Sets Theorem is all about. It took a while and until Neil Hindman and Vitaly Bergelson made the connection between the algebraic/ultrafilter side and the ergodic side apparent. Nevertheless, the precise level of the algebraic closure of central sets is still a mystery. And this mystery is the reason for this series.

## A detour: FP-sets and their condensations

One thing we should do before formulating the theorem is the following. What does an FS-set mean in the context of $\mathbb{F}$? Generally speaking, in a (partial) semigroup we have FP-sets ("finite products" instead of "finite sums"): given a sequence $(x_n: n\in \omega)$ we write

> $$ FP(x_n) = { \prod_{i \in s} x_i: s \in \mathbb{F} }. $$

Of course, in the partial semigroup scenario, we should also think of this as a statement restricted to defined products. However, usually (e.g., in Hindman's Theorem) all products will be defined. Also, in the non-commutative case (which I wholeheartedly ignore in this series), this notation is supposed to be read "in order", i.e., the products are in the natural order of $s \subseteq \omega$.

For a crucial example, consider $\mathbb{F}$ itself.

If we have a sequence $(s_n : n\in \omega)$ in $\mathbb{F}$ such that the $s_n$ are pairwise disjoint, then the FP-set will be just fine -- all products are defined in our partial semigroup.

This is a critical example also because we can transfer such partial subsemigroups easily: If $FP(s_n) \subseteq \mathbb{F}$ and we have some $FS(x_n) \subseteq \mathbb{N}$, then we can consider $y_n := \sum_{i\in s_n} x_i$. As long as the $s_n$ are pairwise disjoint, we get

> $$ FS(y_n) \subseteq FS(x_n).$$

So we have a partial subsemigroup of $FS(x_n)$ induced by a partial subsemigroup of $\mathbb{F}$!

And this is actually a typical phenomenon thanks to Hindman's Theorem. Remember,

> **Hindman's Theorem** If we partition an FS-set into finitely many pieces, one piece will contain an FS-set.

### Condensations and Intuitions

There's one important question when it comes to developing an intuition: what should we expect when we partition again and again? One typical phenomenon is the following: if we take some $FS(x_n)$ and partition into two pieces where one piece contains exactly the elements of the generating sequence ${ x_n : n \in \omega }$. By Hindman's Theorem, one part of the partition will contain an FS-set -- but that's not going to be ${ x_n : n \in \omega }$! Consider the case $x_n = 2^n$, then ${ 2^n : n \in \omega }$ certainly does not contain an FS-set, it does not even satisfy Schur's Theorem!

So what happens in this case? Well, we can easily describe many FS-sets in the other part of the partition; e.g., take every other generator and add: $y_n= x_{2n} +x_{2n+1}$. Then $FS(y_n)$ is good for the second part of the partition.

More generally, we could take any pairwise disjoint $(s_n : n\in \omega)$ in $\mathbb{F}$, just make sure that no $s_n$ is a singleton. Then as above, $FP(s_n)$ induces an FS-subset of $FS(x_n)$ -- which will lie completely in the "large" part of the partition.

> A word of caution: in a certain sense, partitions as the one above are unusually simple because one part does not contain an FS-set. In general, you should expect all parts to contain FS-sets (for example, when separating different idempotent ultrafilters). Nevertheless, I would say that a huge chunk of arguments regarding [strongly summable ultrafilters](/0026/) relies on such "simple" partitions -- so they are extremely useful.

The point I'm trying to make is that whenever we repeatedly partition an FS-set, Hindman's Theorem will give us homogeneous FS-sets -- but you should expect the elements in the generating sequence to be sums of _many_ elements of the original generators!

> This is why a sequence $(y_n: n \in \omega)$ in some $FS(x_n)$ with $FS(y_n)\subseteq FS(x_n)$ is called a **condensation** of $(x_n :n \in \omega)$ -- because generally speaking _many_ elements from $x_n$ are condensed into one of the $y_n$ (of course, some $x_n$ might just be dropped completely). The term "condensation" is also used in arbitrary (partial) semigroups.

Oh and to be absolutely clear:

> Sequences in $\mathbb{F}$ are **always assumed to be pairwise disjoint** (so that they are pairwise compatible in our partial operation)

Alright, that's enough for this part, I think. Next time, I'll finally talk about the Central Sets Theorem.
