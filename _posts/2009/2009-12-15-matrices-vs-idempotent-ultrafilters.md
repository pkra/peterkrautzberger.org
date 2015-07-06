---
layout: post
title: Matrices vs. idempotent ultrafilters
date: 2009-12-15
categories:
- research
- thelazyscience@blogspot
tags:
- finite
- idempotent
- semigroup
- Stone–Čech compactification
published: true
permalink: 0004/
---

Note: as you can see I am not yet in control of how to convert LaTeX to mathml — bear with me, but I thought I should kick myself and start posting…

The other day I was looking for someone to chat about an interesting example of ﬁnite [semigroups](http://en.wikipedia.org/wiki/Semigroup) . So <del>yesterday</del> last week I finally met up with a friend who offered to do just that. The ‘results’ of the morning we spent chatting are perfect blogging material: quite simple, mostly elementary, easily open for discussion and still carry some interest. However, it is much too long, so I’ll split it into a series of posts.

So to start: what’s the example?

**Example** The [matrices](http://en.wikipedia.org/wiki/Matrix_(mathematics))  
$$  
 A= \begin{pmatrix} 1&0\\ 0&0 \end{pmatrix}, B=\begin{pmatrix} -1&-2\\ 1&2 \end{pmatrix}  
$$  
 generate an 8-element (multiplicative) subsemigroup. Its elements are $A,B,AB, BA, ABA, BAB, ABAB, BABA$.

So what? Well, what is interesting is that although both $A$ and $B$ are [idempotent](http://en.wikipedia.org/wiki/Idempotence) (i.e. $A\cdot A=A, B\cdot B = B$), their product is not, since

$$
 AB = \begin{pmatrix} {-1} & {-2} \\ 0&0 \end{pmatrix}, AB\cdot AB = \begin{pmatrix} 1&2\\ 0&0 \end{pmatrix} = -AB  
$$

Still, why is it interesting? Well, this example is of interest for people working with [ultrafilters](http://en.wikipedia.org/wiki/Ultrafilter) on semigroups, in particular on $\mathbb{N}$ — one reason following from the following lemma.

**Lemma** Every finite (discrete) semigroup is the image of the closed subsemigroup $\mathbb{H} := \bigcap_{n \in \mathbb{N}} cl({2^n\mathbb{N}})$ under a continuous homomorphism.

This can be found as Corollary 6.5 in the book ’Algebra in the [Stone–Čech compactification](http://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification)’ by [Neil Hindman](http://nhindman.us) and [Dona Strauss](http://www.genealogy.math.ndsu.nodak.edu/id.php?id=38708). What can we do with this?

**Corollary** There are idempotent elements in $\beta \mathbb{N}$ whose sum is not idempotent.

**Proof**  

* Step 1 Consider the (discrete) finite semigroup generated by $A$ and $B$.  
* Step 2 By the previous lemma, it is a continuous, homomorphic image of $\mathbb{H}$.  
* Step 3 The preimage of both $A$ and $B$ is a closed (by continuity) semigroup (by homomorphy) of $\beta \mathbb{N}$.  
* Step 4 Conversely, the preimage of $AB$ cannot contain an idempotent (or else the image of that idempotent, $AB$, would be idempotent by homomorphy).  
* Step 5 In particular, by the Ellis-Numakura Lemma, both preimages contain idempotents $a,b \in \beta \mathbb{N}$.
* Step 6 But $ab$ is in the preimage of $AB$, hence not idempotent.

One can easily show more, i.e., $a,b$ can even be minimal idempotents and their product is not even in the closure of idempotents, but let’s leave it at that.

Now of course one can look at finite semigroups abstractly. But the advantage of matrix representations is that it puts some flesh to the bones of abstraction.

Update: since fighting with mathml is tough for the time being, here is something to make up for that.  [pdf](/assets/2009/matrices1.pdf)