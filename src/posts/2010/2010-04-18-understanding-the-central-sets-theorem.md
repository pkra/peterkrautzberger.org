---
layout: post
title: Understanding the Central Sets Theorem
date: 2010-04-18
categories:
- research
- thelazyscience@peter.krautzberger.info
tags:
- algebra in the Stone–Čech compactification
- central set
- central set theorem
- Dona Strauss
- FS-set
- Hillel Furstenberg
- Neil Hindman
- partial semigroup
- Stone–Čech compactification
published: true
permalink: 0015/
latex: true
---

To write the first post on the new domain I thought I might just write a little about what I’ve been studying recently — the Central Sets Theorem.

This theorem dates back to the 70s and the original formulation and proof are due to [Hillel Furstenberg](http://en.wikipedia.org/wiki/Hillel_Furstenberg). In its current form as found say in [De, Hindman, Strauss](http://nhindman.us/research/newcentral.pdf) ([DOI](http://doi.org/10.4064/fm199-2-5)) it is probably the strongest algebraic partition theorem around. I had encountered the theorem many times before, in books, lectures, papers and talks but I never truly developed an understanding for it. Since I recently felt it might give me an edge in a problem I’m working on I decided to take a better look.

### Detour 1 — metamathematics

How do you achieve an understanding of a theorem? In an incomplete list I would include the following

* Understand its most important application or corollary
* Understand its statement
* Understand its proof
* Improve its proof
* Understand how to come up with the proof
* Give a different proof
* Improve the theorem

I would say this list is in increasing order of understanding but that’s open for discussion.

I might write about the history (and applications) of the Central Sets Theorem some other time, but here I want to focus on its formulation; in fact, I don’t even want to write about what it means to be [central](http://en.wikipedia.org/wiki/Partition_regularity) (sorry) except that it is a [partition regular](http://en.wikipedia.org/wiki/Partition_regularity) notion.

### Formulation

So, what does the usual formulation look like?

**Central Sets Theorem**
 Imagine you are given finitely many sequences in a commutative semigroup $(S,+)$, say $\mathbf{y^0}, \ldots, \mathbf{y^\alpha}$ as well as a central set $C \subseteq S$.
 Then you can find a sequence $\mathbf{a}$ in $S$ as well as a sequence $\mathbf{h}$ of non-empty, disjoint and finite subsets of $\mathbb{N}$ such that for $\beta \leq \alpha$

 $$ FS ( {a_n} + {\sum_{i \in h_n} y_i^\beta} ) \subseteq C. $$

Complicated, no? I mean, a random bunch of sequences, some strange set and you find some other sequence and some weird subsets of of the natural numbers and then the [IP-set](http://en.wikipedia.org/wiki/IP_set) of some strange sums are in that strange set — **ye what?**

Let’s cut it down a little and just consider the case $\alpha = 0$.

**simple Central Sets Theorem**
 Imagine you are given a sequence $\mathbf{y}$ in a commutative semigroup $(S,+)$ as well as a central set $C \subseteq S$.
 Then you can find a sequence $\mathbf{a}$ in $S$ as well as a sequence $\mathbf{h}$ of non-empty, disjoint and finite subsets of $\mathbb{N}$ such that

<!-- TODO broken walker -->
 $$FS ( {a_n} + {\sum_{i \in h_n} y_i} ) \subseteq C.$$

### Detour 2 — oversimplification

Even this special case of the standard formulation somehow focuses on aspects that get me sidetracked. So I attempted to formulate it in a way that gives (me) better focus.

Now, the theorem says all kinds of complicated things about the existence of a sequence of disjoint finite subsets of $\mathbb{N}$. Can I get around this? I thought I should be able to. Let’s start with a much weaker version of the theorem.

**A weak simple Central Sets Theorem**
 Imagine you are given a subsemigroup $T \subseteq \mathbb{N}$ as well as a central set $C \subseteq \mathbb{N}$.
 Then you can find a sequence $\mathbf{a}$ in $\mathbb{N}$ as well as a sequence $\mathbf{b}$ in $T$ so that

 $$ FS ( {a_n} + {b_n} ) \subseteq C. $$

I find this weaker version much easier to understand. It just says that I can always translate infinitely many elements from a given subsemigroup into the central set; additionally the finite sums stay within the set.

This is much weaker than the statement before. Of course, given a sequence $\mathbf{y}$ we could consider the generated subsemigroup and use the weaker version. But this would not guarantee the result of applying the Central Sets Theorem — Furstenberg’s theorem gives much more control over which elements are picked since there are no repititions in the sums of the generators.

### Partial Semigroups

So where does this leave us? Well, when I hear finite subsets of $\mathbb{N}$ I think of my favourite structure — in fact the favourite structure for a lot of algebra in the [Stone–Čech compactification](http://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification#Addition_on_the_Stone.E2.80.93.C4.8Cech_compactification_of_the_naturals) on $\mathbb{N}$, the semigroup $\delta \mathbb{F}$. But let’s step back a little. The best way to think about $\delta \mathbb{F}$ is in terms of partial semigroups.

**(Adequate) Partial Semigroups**
 A _partial semigroup_ operation on a set $S$ is a map $\cdot: S \times S \rightarrow S$ such that associativity $s \cdot (t \cdot u) = (s \cdot t) \cdot u$ holds in the sense that if one side is defined so is the other and they are equal. A partial semigroup is _adequate_ if the sets

$$ \sigma(s) := \left\{ t\in S : {s \cdot t} \text{ is defined} \right\}$$

generate a filter, i.e., finitely many elements have a common compatible element.

This notion was introduced by [Bergelson, Blass and Hindman](http://www.math.lsa.umich.edu/~ablass/bbh.pdf) ([DOI](http://doi.org/10.1112/plms/s3-68.3.449)) in the 90s. It tells us that the operation, although partial, is associative in a strong way. Additionally, it makes sure the operation is not just empty but defined for many elements (well, ok it could be just one for all, but that’s not the point).

For ultrafilters the critical point is the following.

**The semigroup $\delta S$**
 Given an adequate partial semigroup and $p,q$ ultrafilters containing all $\sigma(s)$. Then the operation

$$ p \cdot q = \left\{ A \subseteq S : \left\{ s : \left\{ t : s \cdot t \in A \right\} \in q \right\} \in p \right\}
$$

is well-defined and associative and semi-continuous. In other words, $\delta S$ is a closed semi-continuous semigroup.

Now this is somewhat surprising. Even though our operation is partial, these ultrafilters are a full semigroup! With all the bells and whistles it takes to do algebra in the Stone–Čech compactification.

What does this have to do with the Central Sets Theorem?

Denote the non-empty, finite subsets of $\mathbb{N}$ by $\mathbb{F}$. Consider the restriction of $\cup$ on $\mathbb{F}$ defined by

$$ s + t \text{ defined } \Longleftrightarrow \max(s) \cap \min(t) = \emptyset.
$$

Then in fact this constitutes a partial semigroup, adequate at that.

This partial semigroup structure could be called the free partial semigroup in the following sense: given any sequence $\mathbf{s}$ in any semigroup $S$ we can consider the induced partial semigroup on the set of finite sums ${FS( \mathbf{s} ) }$: we only allow sums where the index sets are disjoint (so that we are closed under our partial operation). Then all $FS$-sets are naturally isomorphic (in the appropriate sense of partial semigroups).

### The weak version revisited

To come back to the weak version of the Central sets theorem — partial semigroups are exactly what it talks about. So let us reformulate,

**simple Central Sets Theorem**
 Imagine we are given a partial subsemigroup $T$ of $(S,+)$ as well as a central set $C \subseteq \mathbb{N}$. Then we find sequences $\mathbf{a}$ in $\mathbb{N}$ and $\mathbf{t} \in T$ such that $FS ( {t_n} ) \subseteq T$ and

$$  {FS( a_ {n} + t_{n}) \in C.}$$

Now this sounds much closer to the original theorem. Since any sequence generates a partial semigroup on its $FS$-set (isomorphic to $\mathbb{F}$), this is in fact the Central Sets Theorem for just one sequence.

### Leaving the simplification

However, the actual theorem is more than just some kind of induction on the above version. It is considerably stronger and here it is time to let go of the simplifications of partial semigroups again. For the theorem really does talk about $FS$-sets, i.e., partial semigroups isomorphic to $\mathbb{F}$. The strength lies in the fact that the infinite sequences can be chosen uniformly in the sense that we pick from the different partial semigroups in the same prescribed way.

**Central Sets Theorem**
 Imagine you are given finitely many $FS$-sets in a commutative semigroup $(S,+)$, say ${FS( {\mathbf{y^0}} )}, {\ldots}, {FS( {\mathbf{y^\alpha}} )}$ as well as a central set $C \subseteq S$.
 Then you can find a sequence $\mathbf{a}$ in $S$ as well as one disjoint sequence $\mathbf{h}$ in $\mathbb{F}$ such that for all $\beta \leq \alpha$

 $$FS ( {a_n} + {\sum_{i \in h_n} y_i^\beta} ) \subseteq C. $$

To see this strength at work it is time to look at the classical application.

**Central sets in $( \mathbb{N},+)$ contain arbitrarily long arithmetic progressions**
 Take $\mathbf{y^\beta}$ to be the multiples of $\beta$ (for $\beta \leq \alpha$). Then the central set theorem guarantees we find $a_1, h_1$ such that for all $\beta \leq \alpha$

 $$ (a_1 + \beta \cdot \sum_{i\in h_1} i) \in C.$$

For this application is obviously critical that the to-be-translated elements can be chosen uniformly. That’s all for now but I hope I can write a follow up some other time.
