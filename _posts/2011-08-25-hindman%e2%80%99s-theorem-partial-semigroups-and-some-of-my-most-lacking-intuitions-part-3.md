---
layout: post
title: Hindman’s Theorem, partial semigroups and some of my most lacking intuitions
  (part 3)
date: 2011-08-25 17:00:50.000000000 +02:00
categories:
- expository
- research
tags:
- Fred Galvin
- Galvin-Glazer Theorem
- Hindman's Theorem
- Neil Hindman
- partial semigroups
- partition regular
- Ramsey theory
- semigroups
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown: '2'
  dsq_thread_id: '593133274'
  _cws_is_markdown_gmt: '2013-06-06 12:10:12'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

> Ok, time for part 3\. We're not close to an end but I must apologize that I won't be able to post in the next week. But let's recap. In the [first part](http://boolesrings.org/krautzberger/2011/08/23/hindmans-theorem-partial-semigroups-and-some-of-my-most-lacking-intuitions-part-1/) I simply explained why semigroups are not partition regular and in the [second part](http://boolesrings.org/krautzberger/2011/08/24/hindman%E2%80%99s-theorem-partial-semigroups-and-some-of-my-most-lacking-intuitions-part-2/) I wrote about FS-sets and, finally, introduced partial semigroups. One of the headings promised that partial semigroups will help us talk about FS-sets.

## Are we there yet?

At this point you might also ask why I talked about partial semigroups so much when I wanted to give you an easy description of FS-sets.

Well, it's because I did. FS-sets **are** partial semigroups, in fact, they are a lot like $\mathbb{F}$!

Why? Because for a sequence $(x_i: i < N)$ (for some $N\leq \omega$)

$$FS(x_n) := { \sum_{i \in s} x_i: s \in \mathbb{F} }.$$

So we have an induced partial operation on $FS(x_n)$.

> A word of warning: an FS-set can have more structure than $\mathbb{F}$ induces -- just look at $FS(2^n) (= \mathbb{N})$ or in a different form, look at $FS(n)$ -- same set, but much messier when it comes to the relationship between the generating sequence and the sets of finite sums!

In general, we cannot assume that each element of an FS-set has a unique description via some $s\in \mathbb{F}$ nor can we assume that the $\mathbb{F}$-induced operation captures all allowable sums. So, really, the whole affair is far from optimal!

Nevertheless, if we look at the partial semigroup operation on an FS-set induced by $\mathbb{F}$, we get a very natural partial semigroups structure with plenty of structure, even if we don't catch all aspects.

From this point of view, we could re-phrase Hindman's Theorem as follows.

> **Hindman's Theorem (bad version)** Partial semigroups are partition regular.

This is, of course, a most horrible example of [general nonsense](http://en.wikipedia.org/wiki/Abstract_nonsense): hiding a concrete structure by using an abstract notion. We're not getting an arbitrary kind of partial semigroup, we're getting FS-sets, plain and simple.

The reason why I am writing this exposition is that, as much as I believe the preceding paragraph, I think there could something valuable in this formulation: if we could develop the notion of partial semigroup, we might just end up solving one of the big unknowns in this field. But before I can take you in that direction, we need to talk about ultrafilters.

## Ultrafilters on semigroups

When it comes to infinite (and sometimes even finite) Ramsey-type theorems, it is often easy (or at least nice) to give a proof via [ultrafilters](http://en.wikipedia.org/wiki/Ultrafilter). The reason is very simple: if we partition a set into finitely many piece, an ultrafilter contains exactly one of the pieces. This allows for a simplistic strategy: construct the right kind of ultrafilter and it will do all the work for you!

In case of FS-sets and Hindman's Theorem there is an even closer relation to ultrafilters, idempotent ultrafilters to be exact. I don't want to prove anything here, so whatever idempotent ultrafilters are, they are a special kind of ultrafilter on semigroups (but [one that exists in ZFC](http://en.wikipedia.org/wiki/Ellis%E2%80%93Nakamura_lemma)). They come up in the most popular proof of Hindman's Theorem, the so-called Galvin-Glazer Theorem (so-called since neither of them were involved in getting the proof published and the way I'll write it it's really Galvin's).

> **Galvin-Glazer Theorem** If $p \in \beta \mathbb{N}$ is an idempotent ultrafilter, $A\in p$, then $A$ contains an FS-set.

Hindman's Theorem is then an immediate corollary.

I love the odd history of Hindman's Theorem, so allow me to digress. Around 1970 Galvin actually had the proof but didn't know if idempotent ultrafilters existed (and he had a different name because he was thinking about them the "wrong" way). Then in 1972 Hindman used CH and, assuming "his" theorem, built an ultrafilter as Galvin needed. Then in 1974 Hindman proved "his" theorem combinatorially. Yet in 1975 Galvin met Glazer who told him that idempotents exist (which, looked at the "right" way had been known since the 1958!).

Coming back to the relation between FS-sets and ultrafilters, there's also a reverse:

> If $A$ contains an FS-set, then $A$ is in an idempotent ultrafilter.
> 
> In other words, $A$ contains an FS-set iff $A$ is in an idempotent ultrafilter.

Again, the proof is not important right now (don't worry I'll probably get back to it later). What is important is that, in this sense, the structure of FS-sets and idempotent ultrafilters is immediately connected.

And the point, in fact the point of this whole series, is that this relationship is missing for stronger algebraic Ramsey Theorems.

> If you read this far, my thanks. I won't be able to post anything next week, but there's more to follow (and written but not yet prepped for posting). So stay tuned!