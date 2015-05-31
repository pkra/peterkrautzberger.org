---
layout: post
title: Special union ultrafiters are sparse and vice versa
date: 2013-05-10
categories:
- updates
published: false
---

There are a lot of notes from mathematical research I still sit on. These will likely never get published in the traditional way (save one or two), so it's time to start publish them on the web some other way. In the long run, I plan to put all my notebooks online, delayed <a href="">open-notebook science</a> if you will.

Let's start with something else. In the last year there have been two papers I've refused to read so far. Mostly, because I know they will cause me emotional pain as they represent the failure on my part to connect with my own research community at the time.

ABout a

$)_{}$ some text $)_{}$

$(y_n)_{n\in \omega} $ enumerate $ (y_n)_{n\in \omega}$

${ x_i: i \in \bigcup_{n\in \omega} A_n} $

$y_{n},z_{n},j_{n},k_n$

### Definitions

**From Neil, Dona, Juris** $p \in \beta S$ is a _sparse_ strongly summable ultrafilter on $S$ if and only if for every  
 $A \in p$, there exist $X \subseteq S$ and $Y \subseteq X$ such that $X \setminus Y$ is infinite, $FS(Y ) \in p$, and  
 $F S(X) \subseteq A$.

### From http://arxiv.org/abs/1006.3816

$p \in \beta \mathbb{N}$ is special iff

there exists $FS(x_n)\in p$ with $x_n > 2 \sum_{i<n} x_i$ such that:

$$ (\forall L\in [\omega]^\omega) (\exists (y_n)_{n\in \omega} )\mbox{ such that} $$

$$FS(y_n) \in p, \quad FS(y_n)\subseteq FS(x_n), \quad L \setminus \bigcup_{n\in \omega} xsupp(y_n) \mbox{ is infinite} $$

Here $$xsupp (y_n) := s \mbox { with }\sum_{i\in s} x_i = y_n$$ (due to the ``growth'' of the $x_n$, this is well-defined).

We then say that $p$ is special wrt $(x_n)_{n\in\omega}$.

* * *

As to be expected with ultrafilters, the specific $x_n$ do not matter much -- any condensation will do the same:

### Proposition 3.6 in http://arxiv.org/abs/1006.3816

If a strongly summable ultrafilter $p$ is special with respect to $(x_n: n\in\omega)$ and $FS(y_n) \subseteq FS(x_n)$ with $FS(y_n) \in p$, then $p$ is special with respect to $(y_n)_{n\in\omega}$.

I'll skip the proof (not hard).

### Proposition: Special implies sparse

If a strongly summable $p\in \beta \mathbb{N}$ is special, then it is sparse.

**proof**.

*   Pick $A\in p$.
*   wlog $A = FS(x_n)$ (since $p$ is strongly summable) [goal: $X= {x_n: n\in \omega}$ will witness "sparse" -- we will have to thin it out while "staying in $p$"]
*   wlog, $p$ is special wrt $(x_n)_{n\in\omega}$ (applying the above proposition)
*   Now let $L = \omega$.
*   Applying specialness, we find $(z_n)$ with  
     $$ FS(z_n) \in p, FS(z_n)\subseteq FS(x_n), L \setminus \bigcup_{n\in \omega} xsupp(z_n) \mbox{ is infinite} $$
*   Let $(y_n : n\in \omega)$ enumerate ${ x_i: i \in \bigcup_{n\in \omega} xsupp(z_n)} $.
*   Then we can check ``sparse'':
*   $FS(x_n) \subseteq A$ by choice.
*   ${ y_n: n\in \omega} \subseteq {x_n : n\in \omega}$ by choice.
*   Since $FS(z_n) \subseteq FS(y_n)$ we get $FS(y_n) \in p$.
*   And ${ x_n: n \in \omega } \setminus { y_n: n \in \omega} = { x_i : i\in L\setminus \bigcup_{n\in \omega} xsupp(z_n) }$ is infinite.
