---
layout: post
title: Grigorieff forcing collapsing the continuum
date: 2011-10-16
categories:
- research
tags:
- Grigorieff forcing
published: true
permalink: 0086/
---

This is a short technical post, more a note-to-self so that I know where to look this up if I ever need it again. It is also somewhat of a correction of something I said during my talk in Toronto in June.

### Grigorieff forcing

If you don't remember, here's the quick and dirty (i.e. traditional) way to define Grigorieff (or Gregorieff depending on your choice of latinization) forcing: it consists of partial functions on $\omega$ which are defined on a "small" set, i.e., a set in the dual ideal of a filter. For simplicity, let's focus on ultrafilters. asd s

> **Grigorieff Forcing** Given a ultrafilter $U$ on $\omega$, let $$\mathbb{P}_U = \{ f: A \rightarrow \omega : \omega \setminus A \in U \}.$$  
>  Partially order such functions by $f\leq g$ iff $f \supseteq g$, i.e., $f$ has more information.

You can think of Grigorieff conditions as perfect binary trees with complete branching on an ultrafilter set and "parallel movement" elsewhere. But I said quick and dirty is enough here, so let's not worry too much.

Grigorieff forcing is famous for being the forcing that Shelah used for the first model without P-points. One of the reasons this is possible is as follows.

> **Theorem (Shelah)** If $U$ is a [P-point](http://en.wikipedia.org/wiki/Ultrafilter#Ultrafilters_on_.CF.89), then $\mathbb{P}_U$ is proper and $\omega^\omega$-bounding. In particular, $\mathbb{P}_U$ does not collapse $\omega_1$.

Last week, David Chodounsky let me know that Bohuslav Balcar showed him the following "folklore" result.

> **Optimality** If $U$ is not a P-point, then $\mathbb{P}_U$ collapses the continuum.

This result is mentioned in Jech's Multiple Forcing book, but without proof and I have never seen one published. (Which, to tell the truth, is the reason I thought it was wrong but more about that later).

#### a proof

*   If $U$ is not a P-point, then there exists a partition $\bigcup_{n \in \omega} I_n$ such that every $A\in U$ intersects infinitely many $I_n$ in an infinite set.
*   In particular, no $I_n \in U$ and, without loss, all $I_n$ are infinite.
*   In the ground model $V$, let's enumerate each $P(I_n)$ as $(A^\alpha_n)_{\alpha < \mathfrak{c}}$ (bijectively).
*   **First observation** The generic $\dot G \subseteq \omega$ has $$\Vdash I_n \cap \dot G \in V$$ for every $n$.
    *   Fix $n$.
    *   Since $I_n\notin U$, we can decide any condition $f$ arbitrarily on $I_n$.
    *   In other words, there's a dense set of conditions $g$ with $dom(g) \supseteq I_n$.
    *   But any condition in this dense set forces what we want, i.e., $g \Vdash \dot G \cap I_n = g^{-1}(1) \cap I_n$ -- which is a set in the ground model.
*   So let $G$ be a generic over $V$.
*   **Second observation** In $V[G]$, we can define a map $H: \omega \rightarrow (2^\omega)^V$, mapping $n$ to $\alpha$ with $A^n_\alpha = G \cap I_n$.
    *   Check that this is possible because this intersection is a ground model set, hence appears in the enumerations we fixed earlier.
*   **Third Observation** $H$ is cofinal.
    *   Given any $\alpha$, we want to find $n$ such that $H(n) > \alpha$.
    *   For a density argument, fix any condition $f$.
    *   Since $dom(f)$ is a small set, we can find $n$ such that $$\left\vert I_n \cap \omega \setminus dom(f) \right\vert  = \omega.$$
    *   Therefore, we can find $A \subseteq I_n \cap \omega \setminus dom(f)$ such that $A \cup f^{-1}(1) = A^n_\beta$ for some $\beta > \alpha$.
    *   Extend $f$ to all of $I_n$ such that $f^{-1}(1) = A$.
    *   Then $f \Vdash \dot G \cap I_n = A^n_\beta$ -- as desired.

### An honest mistake

David and I thought we had a proof that Grigorieff forcing with a stable ordered union ultrafilter is proper and $\omega^\omega$-bounding. This is, of course, impossible -- and with this knowledge we could find the mistake in our proof. We still think that "morally" speaking there should be an analogue forcing for the union filter world. But that's a different story.

---

_Comments_.

* **François**, 2011/10/16
  That's a neat argument! I always find situations like this where you only show that $cf(\mathfrak{c}^V) = \omega$ a little strange. Is there any hope to get a nice surjection from $\omega$ onto $\mathfrak{c}^V$?
  (There is a small typo where you have $2^\mathfrak{c}$ instead of $2^\omega$ or $\mathfrak{c}$.)
  * **Peter**, 2011/10/16
  Well, Andreas thought of one when I talked to him about this but writing this post I felt it didn't work (I'll ask again).
  He wanted to enumerate $P(I_n) / fin$ instead of $P(I_n)$ but I didn't see how this helps, i.e., I don't see how $f$ can be extended to be equal mod fin to $A^n_\alpha$.
  (Thanks, I'll fix the typo.)
  * **François**, 2011/10/17
    Right, that trick would work if you knew that $\operatorname{dom}(f) \cap I_n$ is finite for some $n$, but I don't see why that would be the case...
    * **Peter**, 2011/10/20
      Ah! I forgot to update this -- Francois, Andreas fixed it. It's not hard, really: instead of a regular enumeration just pick a map so that the power set of every infinite subset of $\omega$ has full range. Proceed as in the proof and after finding $n$, choose the subset with number $\alpha$.
      * **François**, 2011/10/21
        Full range?
        * **Peter**, 2011/10/29
        Surjective range. Inductively build a map $P(\mathbb{N}) \rightarrow \mathfrak{c}$ in such a way that for every infinite $A \subseteq \mathbb{N}$, we get that the restriction of our map to $P(A)$ is still surjective.
        Then we can use the above argument: as before we find an $I_n$ where our condition has left out an infinite set. Now pick from the power set of that infinite set a suitable candidate for $\alpha$ -- done.
        Does that make more sense?
