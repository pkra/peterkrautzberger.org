---
layout: post
title: Matrices vs. idempotent ultrafilters part 2.5
date: 2010-01-11
categories:
- research
- thelazyscience@blogspot
tags:
- finite semigroup
- idempotent
- Macaulay
- semigroup
- Stone–Čech compactification
published: true
permalink: 0007/
latex: true
---

Note: there seems to be some problematic interaction between the javascripts I use and blogspot’s javascripts which prevents longer posts from being displayed correctly. As long as I don’t understand how to fix this, I will simply split the posts.

We can also describe size and the algebraic structure.

1.  $A$ with $F_1$ ($F_2$) generates a [right (left) zero semigroup](http://en.wikipedia.org/wiki/Null_semigroup) (hence of size $2$, except for $x=0$).
2.  $A$ with $F_3$ or $F_4$ generates a semigroup with $AB$ [nilpotent](http://en.wikipedia.org/wiki/Nilpotent_matrix) (of size $4$, except for $x=0$, where we have the null semigroup of size $3$).
3.  $A$ with $G_i$ generate (isomorphic) semigroups of size $8$. These contain two disjoint right ideals, two disjoint left ideals generated by $A$ and $B$ respectively.

Luckily enough, we get something very similar from our alternative for $A$.

**Proposition** In case $A = \begin{pmatrix} 1 & 1 \\\ 0 & 0 \end{pmatrix}$ the solutions for $B$ being of rank one consist of five one – dimensional families namely (for $x\in \mathbb{Q}$)
 $$
\displaylines{ H_1(x) = \begin{pmatrix} 1 & x \\ 0 & 0 \end{pmatrix},  \\
 H_2(x) = \begin{pmatrix} x+1 & x \\ ( – x – 1) & – x \end{pmatrix},  \\
 H_3(x) = \begin{pmatrix} 0 & x \\ 0 & 1 \end{pmatrix},  \\
 H_4(x) = \begin{pmatrix} ( – x+1) & ( – x+1) \\ x & x \end{pmatrix},  \\
 H_5(x) = \begin{pmatrix} ( – x+1) & ( – x – 1 – \frac{2}{x – 2}) \\ x – 2 & x \end{pmatrix} , x \neq 2.}
 $$

As before we can describe size and structure.

1.  $A$ with $H_1$ ($H_2$) generates a right (left) zero semigroup (as before).
2.  $A$ with $H_3$ or $H_4$ generates a semigroup with $AB$ nilpotent (as before).
3.  $A$ with $H_5$ generates the same $8$ element semigroup (as before).

Finally, it might be worthwhile to mention that the seemingly missing copies of the $8$ element semigroup are also dealt with; e.g. $– G_i$ generates the same semigroup as $G_i$ etc.

It is striking to see that the orders of all finite semigroups generated by rational idempotent two by two matrices are either $2^k,2^k + 1$ or $2^k + 2$.

At first sight it seems strange that we cannot find other semigroups with two generators like this. As another friend commented, there’s just not enough space in the plane. I would love to get some geometric idea of what’s happening since my intuition is very poor. But that’s all for today. [pdf](/assets/2010/matrices2.pdf)
