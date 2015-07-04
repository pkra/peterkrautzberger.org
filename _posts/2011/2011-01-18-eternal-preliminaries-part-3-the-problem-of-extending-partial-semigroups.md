---
layout: post
title: Eternal preliminaries part 3, the problem of extending partial semigroups
date: 2011-01-18
categories:
- eternal preliminaries
- research
- thelazyscience@peter.krautzberger.info
tags:
- "$\\delta S$"
- partial semigroup
published: true
permalink: 0050/
---

[In the previous post](/0047/) I have totally ignored my focus from the first post, namely that I want to focus on partial semigroups, not full semigroups. As [mentioned in the first part](/0042/) this is not really a problem as any partial semigroup operation is in essence a restriction of a full semigroup operation. So the full semigroup is always a neat thing to fall back to when you’re in doubt. Nevertheless, if, as I claimed, it is an advantage to work with partial semigroups, can we not get around this problem?

## Extending a partial operation to $\beta S$.

Luckily, it is very much possible to do extend a partial operation. (Un)fortunately, [nobody’s perfect](https://www.youtube.com/watch?v=qWS2NVX6VP0) that is I don’t know how to get all the theory to run smoothly so in what follows I might have to fall back for some things. We’ll see.

So how do you extend the operation? Easy! Use the brute force method!

**Extending the operation to $\beta S$** For $p,q \in \beta S$, consider those $A\subseteq S$ with $A^{-q} \in p$. These sets may or may not yield an ultrafilter. If they do, we call it $p \cdot q$.

Ok, that’s a bit weird. The way I wrote it there is no reason to believe that such $A$ will ever form a filter, let alone an ultrafilter! Now, since the operation is partial, we had to expect a little bit of weirdness. But accept (or ignore) the unreasonable definition at this point and I’ll try to explain why this could work.

First to note is: watch out! Maybe I’m trying to trick you with the definition, hiding behind the weirdness. As I wrote in the last post, the $A^{-q}$-notation is a “general nonsense” notation (even worse, I came up with it myself…), a simplified notation that hides complicated structures (though, hopefully, to a later advantage). So we better check it in detail.

* First, for semigroups we had defined $A^{-q} = \\{ s \in S: s^{-1}A \in q\\}$ — this still seems to work fine, we’re just checking if some set is in $q$.
* But what kind of set are we checking? Going into detail, we find $s^{-1}A = \\{ t \in S: s \cdot t \in A\\}$ — and this not clear at all! Remember, $s\cdot t$ might not be defined. What do we do then? Do we want to include or exclude those incompatible $t$?

But, assuming you’re a forgiving reader, I think it still makes sense: just make $s\cdot t$ to mean “$s \cdot t$ and it is defined”. In other words, the original definition should really read \\[ s^{-1}A := \\{ t\in \sigma(s) : s \cdot t \in A\\}. \\]  
 This is fine from the point of view of a full semigroup (since always $\sigma(s) =S$) and it really captures what we want to capture: those $t$ that $s$ maps to $A$. Of course, the convention that $s\cdot t$ entails $t\in \sigma(s)$ is really standard ever since the paper by Bergelson, Blass and Hindman. So I’m luckily in good company. To finish the introduction, we get the same phenomenon as we did before.

$A \in p\cdot q$ if and only if there exists $V \in p, {( {W_ v} )}_ {v \in V} \in q$ such that $\bigcup_ {v\in V} v \cdot W_ v \subseteq A$.

Again, with the analogous convention that $v\cdot W_ v = v \cdot (W_ v \cap \sigma(v))$.

## The most important observation

So after this short delay, we can say we have defined a partial operation on $\beta S$ where the product is $p\cdot q$ as defined in the previous part but only if the definition yields an ultrafilter. One question is rather immediate.

* What can go wrong to prevent the multiplication from being defined?
* That is, which $p, q$ actually yield an ultrafilter $p \cdot q$?
* In other words, how rich is the multiplication?

Luckily, this question can be answered rather easily. But let me begin with the most crucial observation and the goal of the rest of this post.

**The semigroup $\delta S$** Given an (adequate) partial semigroup $(S,\cdot)$ and the above extension of the operation to $\beta S$, it turns out that $\delta S$ is a full semigroup.

Kaboom! This is extremely nice. Even though our operation is partial, we get a relatively good piece of $\beta S$ that is a full, compact, and (we’ll see later) right-topological semigroup — the three key properties for the next part of these preliminaries. This will be our motivation for the rest of this post. Luckily, the proof is essentially done by answering the above questions.

## The partial semigroup $\beta S$.

As the heading says, the nicest thing about this extension is that it yields a partial semigroup. This is positively surprising because strong associativity seems difficult to conserve. The key observation is the following.

**Proposition** For $p,q \in \beta S$, the product $p \cdot q$ is defined if and only if $ \\{ s\in S: \sigma(s) \in q \\} \in p$.

This is a pretty natural observation. You’d expect the product to work out on the ultrafilters if they contain sets where the multiplication behaves nicely. This is, of course, a common phenomenon with ultrafilters: properties of an ultrafilter are often reflected by its elements and vice versa.

**Proof.**

* Like any good ultrafilter proof, we start with a partition: $S= \\{ s\in S: \sigma(s) \in q\\} \cup \\{ s\in S: \sigma(s) \notin q\\} \in p$.
* Since $p$ is an ultrafilter, one part is in $p$.
* If the second part is in $q$, then $p \cdot q$ is not a filter, i.e., the forward direction of our equivalence holds by contraposition.
  * Assume $A= \\{ s\in S: \sigma(s) \notin q\\} \in p$.
  * Since $q$ is an ultrafilter, for any $a\in A$ we get $S \setminus \sigma(a) \in q$.
  * But then $\bigcup_ {a\in A} a \cdot S\setminus \sigma(a) = \emptyset$, so $p \cdot q$ is not a filter.
* If the first part, call it $B$ is in $p$, then $p \cdot q$ is an ultrafilter.
  * The only problematic case (i.e., the one deviating from the proof of the brute definition for full semigroups) is that $\emptyset \notin p \cdot q$.
    * To see this realise that $\bigcup_ {v\in V} v \cdot W \supseteq \bigcup_ {v \in V \cap B} v \cdot (W \cap \sigma(v)) \neq \emptyset$ since $V \cap B \in p$ and each $W\cap \sigma(v) \in q$.
  * The rest is straight forward and not really fulfilling.
  * Closure under taking supersets and finite intersection is just as easy to check.
  * $p \cdot q$ is prime.
    * Let $C_ 0 \dot\cup C_ 1 = C \in p\cdot q$.
    * Now easily $s^{-1} C = s^{-1} (C_ 0 \dot\cup C_ 1) = s^{-1}C_ 0 \dot\cup s^{-1}C_ 1$.
    * Since $q$ is prime, exactly one part is in $q$.
    * In other words, $C^{-q}= C_ 0^{-q} \dot\cup C_ 1^{-q} (\in p)$.
    * Since $p$ is prime, exactly one part is in $p$, say $C_ i^{-q} \in p$.
    * But this means by definition that $C_ i \in p \cdot q$, as desired.

And once again, I have taken the liberty of skipping a little bit ahead. In fact, I will spend the bigger part of the next post talking about other tricks like $(C_ 0 \cup C_ 1)^{-q} = C_ 0^{-q} \cup C_ 1^{-q}$ that the notation has to offer.

But with this we can actually claim.

**Theorem** $\beta S$ is a partial semigroup.

The proof is long and rather boring. Using the previous proposition you can compare what it means for say $p (q \cdot r)$ and $(p \cdot q) \cdot r$ to be defined. Unsurprisingly, this comparison boils down to a comparison of elements in $S$ — where, of course, we have strong associatitivity. I’ll gladly update this post if there’s interest and you can find it as [Proposition B.3 in my thesis](http://www.diss.fu-berlin.de/diss/receive/FUDISS_thesis_000000014327).

It’s almost midnight and I’m getting tired so let’s wrap up the proof of the supposedly important observation.

**Proof that $\delta S$ is a semigroup.**

* By the proposition, we know that the multiplication is defined for all $p,q \in \delta S$ because $q$ contains all $\sigma(s)$. (yeah, only $q$ – you can see some more general observations looming around, right?)
* So the question is, whether the product is again in $\delta S$.
* But for that we just check that $\left(\bigcup_ {t \in \sigma(s)} t \cdot \left(\sigma(t) \cap \sigma(s\cdot t) \right)\right) \subseteq \sigma(s)$ by strong associativity.
* So $\sigma(s) \in p\cdot q$ for all $s\in S$, as desired.

Ok, after this small detour, we’re ready for some ancient and brilliant theorems. Ellis’s Lemma and Hindman’s Theorem coming right up.
