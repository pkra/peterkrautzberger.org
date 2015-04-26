---
layout: post
title: Grigorieff forcing collapsing the continuum
date: 2011-10-16 01:19:20.000000000 +02:00
categories:
- research
tags:
- Grigorieff forcing
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown: '1'
  dsq_thread_id: '593133282'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

This is a short technical post, more a note-to-self so that I know where to look this up if I ever need it again. It is also somewhat of a correction of something I said during my talk in Toronto in June.

### Grigorieff forcing

If you don't remember, here's the quick and dirty (i.e. traditional) way to define Grigorieff (or Gregorieff depending on your choice of latinization) forcing: it consists of partial functions on $\omega$ which are defined on a "small" set, i.e., a set in the dual ideal of a filter. For simplicity, let's focus on ultrafilters. asd s

> **Grigorieff Forcing** Given a ultrafilter $U$ on $\omega$, let $$\mathbb{P}_U = { f: A \rightarrow \omega : \omega \setminus A \in U }.$$  
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
    *   Since $dom(f)$ is a small set, we can find $n$ such that $$|I_n \cap \omega \setminus dom(f)| = \omega.$$
    *   Therefore, we can find $A \subseteq I_n \cap \omega \setminus dom(f)$ such that $A \cup f^{-1}(1) = A^n_\beta$ for some $\beta > \alpha$.
    *   Extend $f$ to all of $I_n$ such that $f^{-1}(1) = A$.
    *   Then $f \Vdash \dot G \cap I_n = A^n_\beta$ -- as desired.

### An honest mistake

David and I thought we had a proof that Grigorieff forcing with a stable ordered union ultrafilter is proper and $\omega^\omega$-bounding. This is, of course, impossible -- and with this knowledge we could find the mistake in our proof. We still think that "morally" speaking there should be an analogue forcing for the union filter world. But that's a different story.