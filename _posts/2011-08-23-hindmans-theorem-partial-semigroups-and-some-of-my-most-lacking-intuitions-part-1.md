---
layout: post
title: Hindman's Theorem, partial semigroups and some of my most lacking intuitions
  (part 1)
date: 2011-08-23 09:21:59.000000000 +02:00
categories:
- expository
- research
tags:
- Hindman's Theorem
- Issai Schur
- Neil Hindman
- partial semigroups
- partition regular
- Ramsey theory
- Schur's Theorem
- semigroups
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown: '1'
  dsq_thread_id: '593133369'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

> If you remember, [I mentioned](http://boolesrings.org/krautzberger/2011/08/19/a-short-reflection-on-google/) that I was working on a post on some research and it was getting out of hand. Well, it is still not finished, but long enough to start posting a series of posts.

It's no secret that I love the mathematical world surrounding [Hindman's Theorem](http://en.wikipedia.org/wiki/IP_set#Hindman.27s_Theorem). Recently, I have been revisiting an old draft of mine. To get back into it, I want to jot down some informal notes about one of the research directions I think are worth pursuing -- even though I have no proof of this (pardon the pun). At the heart of this line of thought lies the notion of partial semigroups and, especially, my ideas for weaker forms of that notion. To fully make sense of it I have to take you from the elementary algebraic structures to less known structures to ultrafilters on those and finally to filters related to all of this.

But let me start at the beginning so that you can still enjoy reading a little bit of what I want to express without being lost after 5 minutes.

[Hindman's Theorem](http://en.wikipedia.org/wiki/IP_set#Hindman.27s_Theorem) is a typical Ramsey-type theorem, i.e., it tells us about a certain richness in some fixed mathematical structure (such as a graph in the original [theorem by Ramsey](http://en.wikipedia.org/wiki/Ramsey%27s_theorem)), a richness which is [partition regular](http://en.wikipedia.org/wiki/Partition_regular):

> **Partition regular notions of richness** If the structure is partitioned in to finitely many pieces (equivalently colored with finitely many colors), one piece (color) will have this kind of richness.

More concretely, Hindman's Theorem is about algebraic structures, namely, semigroups. Semigroups, if you don't remember, are simply sets with an associative operation

$$ (a \cdot b) \cdot c = a \cdot (b \cdot c).$$

## semigroups? that's easy! subsemigroups!

If you are looking for partition regular notions and you meet a semigroup, you can, of course, ask yourself:

> Are semigroups partition regular?

(Un)fortunately, that's not going to work.

To give you a counterexample, let's look at the natural numbers, $\mathbb{N}$, with the usual addition. Unlike [other research into semigroups](http://en.wikipedia.org/wiki/Semigroup#Special_classes_of_semigroups), almost all of the work in this Ramsey-theoretic area is connected to $\mathbb{N}$.

Ah, I just noticed: I have made a mistake. If you're a set theorist and $\mathbb{N} = \omega$, then actually, this is going to work because $0$ generates a subsemigroup ($\{0\}$), so whenever we partition $\omega$, one part will include a subsemigroup. (more generally, monoids will do this and even more generally, semigroups with idempotent elements.)

Oh well. But that's "clearly" not the point (especially if you're a set theorist). You'll most likely be interested in large, hopefully infinite structures -- and in any case, you're not interested in trivial solutions by idempotent elements...

To get back to our example, we'll ignore $0$ by adopting the convention most people in this area use:

$$\mathbb{N} = \omega \setminus \{0\}$$

## subsemigroup #Fail.

Subsemigroups have a nice property: they contain sets of 'multiples'. Given any element in the subsemigroup, we find all its 'multiples' since we can add it to itself repeatedly. Of course, for $(\mathbb{N},+)$ this really means we're talking about multiples in the natural sense.

If we have (thanks to the heading of this section) the suspicion that semigroups are not partition regular, we need to find a partition such that no part contains a set of multiples.

When I was lying in bed a couple of days ago, falling asleep but trying to put the ideas together for this post , it took me a while to come up with a partition. Since at the end I was actually asleep, I don't really remember how I got there. So I'm afraid I can't lead you to it, cannot communicate what intuitions about partitions of natural numbers came up in the process. If I would venture a guess, I probably just remembered the solution for a more complicated (i.e., weaker) structure. Not a grand revelation, I admit.

So how do we do this? Well, the thing about multiples is that they are evenly spaced. So if the parts of our partition have a large interval missing, say larger than some given number $a$, then that number's multiples will 'hit' that interval, i.e., there'll be a multiple of $a$ in that interval, not in our part of the partition.

So if we partition $\mathbb{N}$ into quickly increasing intervals, say for simplicity

$$ [1,10), [10,100), [100,1000) \ldots$$

we can do the following: Collect every other interval, i.e.,

$$A_0 := \bigcup_{i\in \omega} [10^{2i},10^{2i+1})$$

and make $A_1$ its complement $A_1 = \bigcup_{i\in \omega} [10^{2i+1},10^{2i+2})$.

Then both $A_0$ and $A_1$ have increasingly large gaps, arbitrarily large gaps.

Now if we had a number in $A_0$, then it will lie in one of the intervals. But it's multiples cannot skip the next interval -- it's far too big for that. I mean, if you start in $[100,1000)$, then you're best chance really is $999$ -- and of course $1998$ is far from being in the interval $[10000,100000)$... Of course the same argument goes through for any other number (and also for $A_1$), just look at the highest multiple still in the interval and then double it.

In other words, for any given number, not all multiples lie in the same part of the partition, i.e., neither $A_0$ nor $A_1$ contain a set of multiples -- in particular, neither contains a subsemigroup of $\mathbb{N}$ -- #Fail.

## I'm not just messing with you

Now you can ask yourself if this hope for partition regular structures within semigroups was all but a dream and there's simply no algebraic structure that survives.

Luckily there's evidence dating back all the way to 1917 guaranteeing that at least _a tiny little bit_ of algebraic structure will survive partitioning. [Issai Schur proved](http://en.wikipedia.org/wiki/Schur%27s_theorem#Ramsey_theory) that if you partition $\mathbb{N}$ into finitely many pieces, you will always find two numbers $x,y$ such that $x, y$ and $x+y$ are in the same piece. (Of course, you'll find infinitely many such pairs.)

> It's not important, but the proof is quite simple actually, using Ramsey's Theorem (the original thing). Given a coloring of $\mathbb{N}$, use that coloring to define a coloring of all unordered pairs of natural numbers: give $\{x,y\}$ (with $x < y$) the color of $y-x$. By Ramsey's Theorem, there exists a homogeneous infinite set. Pick any three numbers $x < y < z$ in that homogeneous set. Then $z - y, z - x$ and $y - x$ all have the same color -- which solves our problem, since $z-y + y-x = z-x$ -- and notice how associativiy comes into play.

### outlook

In the next post, I'll try to point out how far we can push this search for algebraic structures.