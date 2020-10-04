---
layout: post
title: Van Douwen spaces
date: 2010-04-25
categories:
- research
- thelazyscience@peter.krautzberger.info
tags:
- Alan Dow
- algebra in the Stone–Čech compactification
- Eric van Douwen
- idempotent
- Stone–Čech compactification
- strongly right maximal idempotent
- van Douwen space
published: true
permalink: 0016/
latex: true
---

At the [winterschool](http://www.winterschool.eu) [Alan Dow](http://math.uncc.edu/~adow/) gave quite challenging tutorials. He also mentioned something about van Douwen spaces.

### Van Douwen Spaces

As formulated [here](http://math.uncc.edu/~adow/vDspace.pdf)

**van Douwen space** A countable $S$ is a _van Douwen space_ if it is crowded (i.e. has no isolated points) and there is a 1-to-1 function from $\mathbb{N}$ to $S$ that extends to a $\leq 2$-to-1 function from $\beta \mathbb{N}$ to $\beta S$.

What caught my interest was that there is an example that has something to do with [idempotent](http://en.wikipedia.org/wiki/Idempotency) [ultrafilters](http://en.wikipedia.org/wiki/Ultrafilter). Let me introduce something first.

**A partial order** On the idempotent ultrafilters (on $\mathbb{N}$) define a partial ordering by

 $$ p \leq_r q \Leftrightarrow q + p =p. $$

### Digressing

This partial order (as well as its left counterpart and their intersection) is quite important in the algebra in the Stone–Čech-compactification. Mostly because this order has minimal idempotents which are central to the field. <s>(pardon the pun)</s> Oops, after ignoring its definition [in my last post](/0015/) this is not a pun. So let me add: a set is in fact central if it is an element of a minimal idempotent. Central, get it? Ah, well…

### Strongly right maximal

For van Douwen spaces it is useful to go in the other direction. There exist many right-maximal elements in this order, but even more can be said.

**Strongly right maximal idempotents** An idempotent ultrafilters $p \in \beta \mathbb{N}$ is _strongly right maximal_ if

 $$ q+ p =p \Rightarrow q= p. $$

Yevhen Zelenyuk once gave an example of a right-maximal that is not strongly right maximal assuming CH or MA (and even less). In any case these idempotents are very nice and thanks to Igor Protasov exist under ZFC alone. Nevertheless it is an open question whether consistenly all right-maximal idempotents are strongly right-maximal, i.e., if non-strongly but right-maximal idempotents exist under ZFC alone.

### Back to van Douwen spaces

Anyhow, the main point is that strongly right maximal idempotents have an orbit that is a van Douwen space!

Let $p$ be strongly right maximal. Then $\mathbb{N} + p$ is a van Douwen space.

And this is what Alan Dow mentioned. Ignoring the crowdedness, this is really easy for in fact more holds in this case.

If $p$ is strongly right maximal, then

$$ \rho_p: \mathbb{N} \rightarrow \beta \mathbb{N}, n \mapsto n+ p $$

 is injective, hence also its continuous extension to $\beta \mathbb{N}$ (which is naturally onto the orbit $\mathbb{N} +p$).

So in fact, it is not just a $\leq 2$-to-one function, but an injective function. Strange, isn’t it? Strongly right maximality really only speaks of injectivity at $p$, but this is already enough.

#### Proof

The proof needs some basic stuff such as ‘multiplication with fixed right hand side is continuous’. Oh, and you need to know that natural numbers are cancelative…

*   Since $( \mathbb{N} , + )$ is cancelative, the maps $\lambda_{n} = n + \cdot$ are injective for all $n$.
*   Since $\lambda_n$ is continuous (on a discrete space), its extension to $\beta \mathbb{N}$ is injective as well.
*   Then $\rho_p$ is injective on $\mathbb{N}$.
    *   If $n < k \in \mathbb{N}$ had $n+ p = k + p$, then by the above steps $k-n + p = p$.
    *   Since $p$ is strongly right maximal, this would imply $n-k = p$ — which is absurd since $p$ is idempotent, hence free.
*   But then by continuity the whole of $\rho_p$ is injective.

I like that. Now, my favourite kind of idempotent ultrafilters are strongly summable ultrafilters. Those were the first examples of strongly right maximal idempotents, however their existence is independent of ZFC. On the other hand, they have much stronger properties and I would not be surprised if this affected their orbit, i.e., if that van Douwen space is not special somehow.
