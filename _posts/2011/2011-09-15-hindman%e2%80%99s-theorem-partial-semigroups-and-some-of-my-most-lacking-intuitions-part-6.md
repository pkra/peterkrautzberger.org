---
layout: post
title: Hindman’s Theorem, partial semigroups and some of my most lacking intuitions
  (part 6)
date: 2011-09-15
categories:
- expository
- research
tags:
- central set
- central set theorem
- Hillel Furstenberg
- Neil Hindman
- Ramsey theory
- semigroups
- Vitaly Bergelson
published: true
permalink: 0080/
latex: true
---

> I know, I know, it's part 6 already. [Last time](/0079/) I finally formulated the Central Sets Theorem. This part will just be a small bridge. But at least you'll finally know why on earth I am writing this, i.e., what big open question I'm actually trying to build some intuitions for.

## Central Sets and ultrafilters

Before we can move on in this series I should tell you a little bit about the relationship between ultrafilters and central sets -- and finally give you something close to a definition.

If you [already believed me](/0077/) that idempotent ultrafilters exist, you might also believe me that there's a special kind of idempotent ultrafilters, they are called **minimal idempotents**. The reason for the name "minimal" is a partial order on idempotents coming from ring theory. Yet again, we'll skip the definition -- I would first have to convince you that $\beta \mathbb{N}$ is actually a semigroup and, again, I don't want to go there right now.

In any case, there are those idempotent ultrafilters which are minimal idempotents. As [I mentioned before](/0078/), Hillel Furstenberg had introduced the notion of central set via recurrence in dynamical systems. It took a couple of years until [in 1990 Vitaly Bergelson and Neil Hindman](http://dx.doi.org/10.1090/S0002-9947-1990-0982232-5) helped establish that centrality can be framed extremely well in terms of ultrafilters.

> **Theorem (Bergelson, Hindman)** $A\subseteq \mathbb{N}$ is _central_ iff $A$ is in a minimal idempotent ultrafilter.

This was, I think, quite a crazy and beautiful result at the time and its simplicity is still stunning (although, arguably, you won't agree since I didn't give you the complicated definition in terms of dynamics).

This leaves us with the following situation:

*   central sets and minimal idempotents correspond neatly and
*   we have a Ramsey-type theorem (the Central Sets Theorem) that central sets fulfil

This is not as optimal as it could be! If you remember, we were even better off with Hindman's Theorem:

> A set is contained in an idempotent ultrafilter if and only if it "satisfies" Hindman's Theorem (i.e., includes an FS-set).
>
> **In fact**, a set is an FS-set if and only if it is contained in an idempotent ultrafilter.

Hindman's Theorem and idempotent ultrafilters corresponded directly. The unfortunate situation for central sets is that (as far as I know) no version of the Central Sets Theorem is able to accomplish a correspondence of the form

> **Wanted** "A set is included in a minimal idempotent ultrafilter (i.e., is a central set) if and only if it fulfills the following Central Sets Theorem"

This would be the dream, I think. And this is, in a manner of speaking, the whole point of this series. How can we get to this? As you may have guessed, I believe partial semigroups can help shed light on this. So I will return to them in the continuation.
