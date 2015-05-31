---
layout: post
title: Eternal preliminaries part 1, semigroups and such
date: 2010-12-12
categories:
- eternal preliminaries
- research
- thelazyscience@peter.krautzberger.info
tags:
- "$\\delta S$"
- "$\\mathbb{F}$"
- adequate partial semigroup
- FP-set
- partial semigroup
- semigroup
published: true
permalink: 0041/
redirect_from: "krautzberger/2010/12/12/eternal-preliminaries-part-1-semigroups-and-such/"
---

My thesis was a (somewhat) coherent structure and hence had one big chapter of preliminaries. It was rather painful (and in retrospect stupid) to create preliminaries for each paper based on the results from the thesis by taking that chapter and reducing it to only those terms necessary in each respective paper. To (over)compensate, I have been thinking for a while to write down some ‘eternal preliminaries’ here.

## Semigroups and such

In the field that is often called ‘algebra in the Stone-Cech (sorry about the missing hacek) compactification’ (or ‘Hindman stuff’ for short), the structures of interest are infinite [semigroups](http://en.wikipedia.org/wiki/Semigroup) $(S,\cdot)$, i.e., $\cdot: S\times S \rightarrow S$ is associative.

However, ever since the amazingly rich [paper by Vitaly Bergelson, Andreas Blass, and Neil Hindman on located words](http://www.math.lsa.umich.edu/~ablass/bbh.pdf) we have the notion of a partial semigroup. I like this more general notion for several reason which is why I will formulate everything in terms of partial semigroups here.

**Definition** Following the above paper, I’ll call $(S,\cdot)$ a **partial semigroup** if the map $\cdot$ is a partial binary operation for which equations of the type $(s \cdot t) \cdot u = s \cdot (t \cdot u)$ hold in the sense that whenever one side is defined, so is the other and they are equal.  
 This is often called strong associativity.

The most important example of a partial semigroup consists of the finite, non-empty subsets of $\omega$,  
 \[ \mathbb{F} := \{ s \subseteq \omega : 0 < |s| < \omega \} \]  
 with the partial operation  
 \[ s \cdot t = s \cup t \mbox{ iff } \max(s) < \min(t),\]  
 in other words restricting the union operation to so called **ordered unions**. Sometimes, another operation is interesting, the more general restriction to disjoint unions, but most of the time the difference between the two restriction won’t matter much to us so we’ll stick to the ordered unions for now. This example is useful right here because it shows two important properties that are typical for partial semigroups, the first resulting in the following observation.

**Proposition** Every partial semigroup can be extended to a full semigroup: For every partial semigroup $(S,\cdot)$ there is a full semigroup $(T,\star)$ such that $S\subseteq T, \cdot \subseteq \star$.

**Proof.**

*   Given a partial semigroup $(S,\cdot)$, simply adjoin a new zero element.
*   I.e., let $T: = S \dot\cup \{ 0 \}$ (wherer $0$ is a new element) and define $v \star w = v\cdot w$ if defined in $S$ and $v \star w = 0$ otherwise.
*   It’s easy to check that the operation is associative (thanks to strong associativity).

Even though partial subsemigroups are much more abundant than subsemigroups (which is why I like them so much), the above fact is extremely useful when it comes to the background theory of partial semigroups (especially, ultrafilters on them which will be our main goal for the next section): we can simply pretend that we have a full semigroup and use that well-developed theory to help us along, after which we can restrict our interests again to the partial subsemigroup.

Actually, most of the time we really are in a situation like $(\mathbb{F},\cdot)$ — we mostly start with a full operation which we reduce to a partial semigroup operation so as to simplify the algebra (as in the case of $\mathbf{F}$). Before I get to the first important property of partial semigroups that must be assumed for all that follows, let me give you the most important class of examples of partial subsemigroups — FP-sets.

**Examples** Given any (partial) semigroup $(S,\cdot)$ and a sequence $\mathbf{x}$ in $S$ the **FP-set** of $\mathbf{s}$, $FP := \{ \prod_{i \in s} x_i : s \in \mathbb{F} \}$ (where products are always in increasing order of indices) has a partial semigroup structure induced by $(\mathbb{F},\cdot)$:  
 \[ \prod_{i \in s} x_i \cdot \prod_{i\in t} x_i = \prod_{i \in s\cup t} x_i \mbox{ iff } \max(s) < \min(t).\]  
 In case our (partial) semigroup is written additively, we write FS-set etc.  
 Note that for commutative (partial) semigroups we can also consider the partial semigroup structure induced by disjoint unions rather than ordered unions since the products/sums still make sense in the commutative world.

These examples are essentially my favorite reason for thinking primarily in partial semigroups — FP-sets with this partial semigroup structure are such a critical component of algebra in the Stone-Cech compactification that we might as well make this explicit. It also has a certain slickness to it — Hindman’s Theorem (one of our main goals here) could be formulated very nicely with this terminology — but that slickness is somewhat misleading; let’s discuss that when we get there (when I would love to weaken the notion further…)

The main problem with partial semigroups is, of course, their partiality; they could be so partial that they are meaningless, i.e., the operation could have empty domain or a very small domain. Thankfully, the examples above have a very rich partial structure: for any finite number of elements we find (many) elements that are compatible with all those finitely many. That’s why I usually assume the following property for partial semigroups.

**Definition and convention** Consider a partial semigroup $(S,\cdot)$.  
 For each $s \in S$ we denote the set of (right-)compatible elements by $\sigma(s) := \{ t \in S: s\cdot t \mbox{ is defined} \}$.  
 We say that $S$ is **adequate** if ${(\sigma(s))}_{s\in S}$ has the [infinite (or strong) finite intersection property](http://en.wikipedia.org/wiki/Finite_intersection_property) and we denote the generated [filter](http://en.wikipedia.org/wiki/Filter_%28mathematics%29) by $\sigma(S)$. Unless specifically stated otherwise partial semigroups are adequate.

For most theoretical things it’s not really important that the filter contains only infinite sets, but that’s what we’re really interested in in our applications, so we might as well assume it. On a side note, it is useful **not** to assume that the filter $\sigma(S)$ is [free](http://en.wikipedia.org/wiki/Filter_%28mathematics%29), for example when we have an identity in the partial semigroup. The name adequate (without the infinity assumption) is again taken from the paper by Bergelson, Blass and Hindman.

And that’s about all you need to know about partial semigroups for now. In the next post of this series-to-be I will continue with ultrafilters on (partial) semigroups.
