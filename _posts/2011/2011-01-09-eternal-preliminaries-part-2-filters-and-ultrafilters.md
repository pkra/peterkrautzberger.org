---
layout: post
title: Eternal preliminaries part 2, filters and ultrafilters
date: 2011-01-09
categories:
- eternal preliminaries
- research
- thelazyscience@peter.krautzberger.info
tags:
- filter
- semigroup
- Stone-Cech compactification
- tensor product of filters
- ultrafilter
published: true
permalink: 0047/
---

[Last time](/0042/) I wrote about the basic structures, (partial) semigroups. But algebra in the Stone-Cech compactification deals, well, with the Stone-Cech compactification. I will try to ignore the general theory of compactifications because we only deal with a very simple case — discrete spaces. Suffice it to say that any elementary topology book should have a chapter on compactifications if you want to read more.

## Filters and ultrafilters

Already at the [end of the first part](/0042/), I needed to refer to the notions of filters. I don’t want to talk too much about [filters](https://en.wikipedia.org/wiki/Filter_ (mathematics)) or [ultrafilters](https://en.wikipedia.org/wiki/Ultrafilter) formally because a) we’re going to talk about them all the time anyway and b) wikipedia (to which I link) is much better at giving you a concise but broad overview than I am. Let me give you a cheat sheet though.

*   A family of subsets of $S$ is a **filter** if it does not contain $\emptyset$, is closed under taking finite intersections and supersets.
*   A family of subsets of $S$ has the **(strong or infinite) finite intersection property or (i)<span class="caps">FIP</span>** if the intersection of any finite subfamily is non-empty (infinite).
*   A family with (i)<span class="caps">FIP</span> generates a (free) filter by closing it under finite intersections and supersets.
*   A filter $F$ is an ultrafilter iff it is a **maximal** filter (with respect to inclusion) iff it is **prime** $(A\cup B \in F \leftrightarrow A \in F \mbox{or} B\in F)$ iff $(\forall A\subseteq S) A\in F \mbox{or} S\setminus A \in F$.
*   We identify $s\in S$ with the principal ultrafilter $\\{ A\subseteq S : s\in A\\}$.

Filters can be considered as 0-1-valued, finitely-additive measures (or rather the measure 1 sets of such a measure) in which case ultrafilters are complete measures which is an idea I might use in “prose” every once in a while. You can also consider them as a form of universal quantifiers which gives another intuition. A useful shorthand will be “almost all (with respect to some ultrafilter $p$)” or “$p$-many” or “$p$-large” etc. instead of, say, “there exists a set in the filter such that for every element in that set…”.

We’ll get back to this later. One final note, $F,G,H$ are usually denoting filters, $p,q,u$ ultrafilters. We’ll discuss many filters explicitly later (and in part 1 we already considered the filter $\sigma(S)$) but the existence of ultrafilters is a tricky business that requires quite a bit of the axiom of choice.

**The Ultrafilter Lemma** Every filter can be extended to an ultrafilter.

**Proof**.

*   The set of filters is partially ordered by inclusion.
*   The union of any chain of filters is a filter.
*   Apply Zorn’s Lemma to find a maximal element.

[This theorem](https://secure.wikimedia.org/wikipedia/en/wiki/Boolean_ prime_ ideal_ theorem) is weaker than the axiom of choice, but very strong already in itself (looking up that link I just learned that Tarski himself proved the existence of non-principal ultrafilters in 1930; wikipedia. awesome.). Of course, the real power lies in the three characterizations of ultrafilters in the cheat sheet, so let’s prove the difficult one

A filter $F$ is maximal iff $F$ is prime, i.e., $(\forall A\subseteq S) A\in F \mbox{ or } S\setminus A \in F$  
 **Proof**.

*   If $F$ is maximal, $A\subseteq S$, then either $A \in F$ or $S\setminus A \in F$.
    *   If there exists $B\in F$ such that $A \cap B = \emptyset$, then $B \subseteq S\setminus A$, so $S\setminus A \in F$ and we’re done.
    *   Otherwise every $B\in F$ has $A \cap B \neq \emptyset$ in which case $F\cup \\{A\\}$ has the <span class="caps">FIP</span>, hence generates a filter.
    *   But $F$ was maximal, so the generated filter cannot gain new elements.
    *   In other words, $A\in F$.
*   If $F$ is prime, then $F$ is maximal.
    *   Consider any family $G$ such that $F \subseteq G$, but there exists $A \in G \setminus F$.
    *   Since $A \notin F$, then by primeness of $F$, $S \setminus A \in F$.
    *   Therefore, $A, S\setminus A$ are both in $G$.
    *   In other words, $G$ is not a filter — in other words, $F$ is maximal.

## The Stone-Cech compactification (apologies for missing haceks)

The set of ultrafilters is often denoted by $\beta S$ and it turns out to be the [Stone-Cech compactification](https://secure.wikimedia.org/wikipedia/en/wiki/Stone%E2%80%93%C4%8Cech_ compactification), i.e., the maximal compactification of $S$, because $S$ is discrete. There’s a gazillion things to be said about $\beta S$. To get started, we should celebrate the most practical and in fact characterizing property of the Stone-Cech compactification.

**Universal Property of $\beta S$** If $X$ is compact and Hausdorff, $f: S \rightarrow X$ continuous (in our case, any map is), then there exists a unique continuous map $\beta f: \beta S \rightarrow X$ that extends $f$. We usually identify $\beta f$ with $f$ for convenience.

The easiest way to do this in our setting, is to [take the limit along ultrafilters](http://www.tricki.org/article/How_ to_ use_ ultrafilters). But for now we don’t need to.

**An interlude about extensions** If $f: S \rightarrow S$, then we can describe the image quite nicely, namely \\[ f(p) = \\{ B : (\exists A \in p) f[A] \subseteq B \\}. \\]

Often this definition is given by $ f(p)= \\{ B: f^{-1}[B] \in p\\}$ but I think this is a perfect example of the stupid tendency of mathematicians to write a definition as efficiently as possible even though the compression does more harm than good — as a student it always confused the hell out of me and I mixed it up with preimage filters (which are more difficult to define unless $f$ is surjective). To remember: $f(p)$ is the unique ultrafilter generated by the family $ (f[A])_ {A\in p}$, the filter generated by the images. Yes, it’s longer to write down, it’s not as self-contained a definition, but really: it does make more sense that way, no? And who’d think the self-contained definition in itself helps anyone understand anything anyway…

## Extending the semigroup operation

We want to extend our (partial) semigroup operation to $\beta S$. The trouble is that the extension won’t be unique and from a theoretical point of view each of those non-unique extensions can be defined using different techniques (resulting in the same kind of extension). The problem of uniqueness also leads to four different descriptions when it comes to the continuity of the operation, but let’s first get started.

I “grew up” with the book by Neil Hindman and Dona Strauss, so I tend to follow their set up (regarding which kind of extension we want).

### **Using the universal property of $\beta S$**

*   For each $s\in S$, we can consider $\lambda_ s: S \rightarrow S\subseteq \beta S, t\mapsto s \cdot t$, i.e., multiplication with a fixed left-hand side.
*   This is a continuous map (since any map on $S$ is), so we can extend it to $\beta \lambda_ s : \beta S \rightarrow \beta S$; we simply write $s \cdot q$ for this.
*   Now switch it around and for $q\in \beta S$ consider this extended multiplication with $q$ fixed on the right hand side, i.e., the map $\rho_ q: S \rightarrow \beta S, q \mapsto s \cdot q$.
*   Again this is a continuous map (since any map on $S$ is), so we can extend it to $\beta \rho_ q : \beta S \rightarrow \beta S$; and for this we write $\rho_ q(p) = p \cdot q$.
*   Tada, we have our operation.

Of course, this gives us no tangible clue as to what such a product of ultrafilters actually looks like. But at least one thing is easy — multiplication with a fixed right hand side is continuous! I call this **right-topological**. You can see that we might start symmetrically and then we end up with a different operation (though very similar to our own). Also, some people like to call the above continuity left-topological (because its continuous in the left hand argument). So, lots of confusion… we’ll stick to this one.

### **The brute force definition**

There’s thankfully a way to give the same definition by brute force (which is my favourite way to write it down), but let’s think about it naively. We have two ultrafilters $p,q$ and we have our operation $\cdot$. So why not just take $A \in p$ and $B\in q$ and look at all possible products $A \cdot B$? Collect all these $\\{ A \cdot B: A \in p, B \in q\\}$ and we get a nice little filter. Are we done? Well, the problem is that this will pretty much never give you an ultrafilter (if it does you either have a very simple operation or (say in $\mathbb{N}$) very, very special ultrafilters).

So what do we need to do? We need to complicate things (and if you try to write down to check where the above attempt of a definition fails, this complication comes naturally). Later I’ll introduce some notation to make nicer general nonsense, but let’s take a look first.

**Extending multiplication to $\beta S$** For a semigroup $(S, \cdot) $ and $p,q \in \beta S$ we define the product $p \cdot q$ by \\[ A \in p\cdot q \Leftrightarrow (\exists V\in p)(\exists {(W_ v)}_ {v\in V} \mbox{ in } q) \bigcup_ {v\in V} v \cdot W_ v \subseteq A. \\]

Ok, quite a beast. Don’t despair! Remember what we tried first: sets of the form $V \cdot W = \bigcup_ {v\in V} v \cdot W$. What the above definition tells us is that we need to allow the $W$ to be more flexible — possibly different for each $v$!

There is a different angle to look at this: the tensor (or Fubini) product of ultrafilters.

**Tensor product of ultrafilters** For $p,q \in \beta S$ define $p \otimes q \in \beta (S \times S)$ by \\[ A\in p\otimes q \Leftrightarrow \\{ s: \\{ t : (s,t) \in A \\} \in p \\} \in q \\]

Not much better, eh? Let’s take a look though: the tensor product is contains sets $A$ such that the first projection of $A$ lies in $p$ and additionally almost all fibers (in the sense of $p$) of the first projection lie in $q$. So you might say that the sets are $p$-large horizontally and $q$-large vertically.

What has this to do with the product we defined before? Well, the tensor product live on $S \times S$ and the multiplication is a map from $S \times S$ to $S$. So looking at the continuous extension $\beta \cdot$, i.e., the extension to $\beta (S\times S)$ (which is different from $\beta S \times \beta S$ btw) we can simply take the image, $\beta \cdot(p \otimes q)$. If you look at the “interlude” earlier regarding such images, you’ll notice that we get exactly the ultrafilter described in the brute force definition.

Still not happy? Yeah, I know that feeling… Ok, let me offer my favourite general nonsense notation.

*   For $s \in S, A\subseteq S$ define $s^{-1}A := \\{ t \in S: st \in A\\}$ (note: don’t have to be able to invert to define this…)
*   For $A\subseteq S, q \in \beta S$ define $A^{-q} := \\{ s \in S: s^{-1}A \in q \\}$
*   Then $A \in p \cdot q$ if and only if $A^{-q} \in p$.

Alright, much shorter now. But does it help? I don’t know. I certainly don’t claim to “really” understand this operation (but there’s a certain limit since, well, it’s on ultrafilters after all…). My notation for the set $A^{-q}$ is not standard (but there’s no notation, so I made it up for my thesis). This set consists of those elements that (inverse-)shift $A$ to make it an element of $q$. If $p$ contains it, we can expect elements in $p$ to contain elements that shift elements of $q$ into $A$ — which is maybe an idea.

One advantage is that you can check a few things more easily with the brute force definition.

*   The operation is right-continuous — $A^{-q}$ is exactly the neighbourhood that shows the continuity of $\rho_ q$ with respect to $A$.
*   The operation is associative — just write it out.

Phew, that was a lot. But we’re finally ready to get to some real theorems!
