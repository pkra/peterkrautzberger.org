---
layout: post
title: Rapid idempotent ultrafilters
date: 2012-04-08 13:58:50.000000000 +02:00
categories:
- experimental
- research
tags:
- idempotent ultrafilters
- Jana Flašková
- microcontribution
- minimal idempotent ultrafilter
- rapid ultrafilter
- strongly right maximal idempotent
- strongly summable ultrafilter
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  dsq_thread_id: '641453428'
  _cws_is_markdown: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

Welcome back to the second (and final) part on why [strongly summable ultrafilters are rapid](http://boolesrings.org/krautzberger/2012/04/02/one-day-in-colorado-or-strongly-summable-ultrafilters-are-rapid/).

Why the new title? Well, first, I needed another one (I've had too many posts with "Part X" in them, I think). Second, after I proved the results I mentioned last time, I quickly found an additional, somewhat more general observation regarding idempotents.

Here's the problem with this post though. I want to give the argument. But you know how it is in mathematics: standing on the shoulders of <del datetime="2012-04-06T14:42:13+00:00">the huddled masses</del> giants and all that. All work relies on established results. In the first post, I gave a lot of "unnecessary" proofs to motivate the story behind the result. In this post, I'll get to the actual proof and I'm torn, I'm not sure how much to quote and how much to prove. So bear with me and leave comments whenever I screw up.

### Strongly summables are rapid.

Why could this be true? On the one hand, because we already established partial results [last time](http://boolesrings.org/krautzberger/2012/04/02/one-day-in-colorado-or-strongly-summable-ultrafilters-are-rapid/). On the other hand there's an old result attributed to Pierre Matet which, for now, I can only state in a obfuscated fashion.

> **Theorem** ([Matet 87](http://www.jstor.org/stable/2274523))  
>  If $p$ is a [strongly summable ultrafilter](http://peter.krautzberger.info/2010/06/On_strongly_summable_ultrafilters), then there exists a function "$\max$" such that $\max(p)$ is rapid.

So you see, strongly summable ultrafilters imply the existence of rapid ultrafilters -- via a very simple $\max$-function.

What's $\max$, you're asking?

Ah yes, I should talk about $\max$...

### $\max$ to the Max.

For [FS-sets](http://peter.krautzberger.info/2010/06/On_strongly_summable_ultrafilters), there is a natural notion of maximum. If you have a bunch of elements summed up, then it makes sense to call the largest summand the maximum. So intuitively, the maximum should simply map each element in the FS-set to the largest generator involved in producing it. This might not appear very well defined but bear with me.

Consider an [FS-set](http://peter.krautzberger.info/2010/06/On_strongly_summable_ultrafilters), let's keep calling it $FS(x_n)$. If we're lucky, there is a _unique_ way to write each $y \in FS(x_n)$ as a sum of $x_i$ (or should I write $x_n$? indices are hard...). For example, the sequence $ (2^n)_ {n\in \omega} $ has this property while $(n)_{n\in \mathbb{N}}$ fails to have this property (quite badly, I suppose).

It turns out that there's an easy property to ensure this: the sequence just has to grow quickly.

> **Proposition** (folklore? can be found in [Blass, Hindman 87](http://www.mendeley.com/research/on-strongly-summable-ultrafilters-and-union-ultrafilters/))  
>  If $x_n > \sum_{i<n} x_i$ for all $n$, then $$\sum_{i\in s} x_i = \sum_{i \in t} x_i \Rightarrow s=t. $$  
>  In other words, each element in $FS(x_n)$ has a _unique representation_.

[Edit May 22, 2012: modified attribution]

The proof is an easy induction on $|s|, |t|$, using the growth factor to argue that the maximal element of $s$ and $t$ must be equal.

*   If $|s| = |t| = 1$, then $s = t$ follows immediately from the growth assumption.
*   Now assume inductively that we've proved the claim for smaller sets.
*   Let $n$ be the maximum of $s\cup t$.
*   Wlog, $n\in s$.
*   Then we must also have $n\in t$ -- otherwise $$ \sum_{i \in s} x_i \geq x_n > \sum_{i <n} x_i \geq \sum_{i \in t} x_i, $$ a contradiction to the assumed equality of both sums.
*   But if both $s$ and $t$ contain $n$, we also have $\sum_{s \setminus \{n\}} x_i = \sum_{t \setminus \{n\}} x_i$.
*   Using our induction hypothesis, we have $ s \setminus \{n\} = t \setminus \{n\} $, hence $s=t$.

So _if_ we have unique representations of elements in $FS(x_n)$, we can define a function $$\max: FS(x_n) \rightarrow \mathbb{N}, \max(y) := x_{\max s} \text{ where } \sum_{i \in s} x_i = y. $$

### Growth, growth, growth and more growth

Unfortunately, we need to tweak this a little bit more. Remember that FS-sets are all about sums. Very often $y, z \in FS(x_n)$ will have $y+z \in FS(x_n)$. So assuming growth, $y,z , y+z$ each have a unique representation in terms of the $x_i$.

It's natural to assume that there's some kind of connection between the representations of $y,z, y+z$. For one thing, we know that if $s \cap t = \emptyset$, then $\sum_{i\in s} x_i + \sum_{i \in t} x_i \in FS(x_n)$. The growth as above does not guarantee the reverse, though (just consider $FS(2^n)$), and the reverse often simplifies things. Fortunately, all we have to do is improve the growth!

> **Proposition** ([Hindman, Blass 87](http://www.mendeley.com/research/on-strongly-summable-ultrafilters-and-union-ultrafilters/))  
>  If $x_n > 2\cdot \sum_{i<n} x_i$, then $\sum_{i\in s} x_i + \sum_{i \in t} x_i = \sum_{i\in v} x_i$ if and only if $s \cap t = \emptyset $ and $v = s \cup t$.

The proof is much like the earlier proof.

*   Again, we're doing an induction on $|s\cup t \cup v|$.
*   If $|s \cup t \cup v| = 1$, then $s$ or $t$ must be empty and the growth condition does the rest.
*   For the inductive step, let $n := \max(s,t,v)$.
*   Due to the growth condition, $n$ must be in $v$.
*   But it must also lie in $s\cup t$.
    *   Else $\sum_{i\in v} x_i \geq x_n > 2 \sum_{i <n} x_i \geq \sum_{i\in s} x_i + \sum_{i\in t} x_i$.
*   But it can't be in both $s$ and $t$.
    *   Else $\sum_{i \in v} x_i < 2 x_n < \sum_{i\in s} x_i + \sum_{i \in t} x_i$.
*   Wlog $n\in s$
*   Th $\sum_{i \in s\setminus{n}} x_i + \sum_{i\in t} x_o = \sum_{i \in v\setminus{n}} x_i$.
*   Applying our induction hypothesis to $|(s \setminus \{n\}) \cup t \cup (v\setminus \{n\})|$, we get $ s\setminus {n} \cap t = \emptyset$ and $(s \setminus \{n\}) \cup t = v \setminus \{n\}$.
*   This in turn gives us $s \cap t = \emptyset$ (as $n \notin t$) and $s\cup t = v$ -- as desired.

Why all this trouble? Well, there are many uses for this. For what's coming below, it simplifies an important calculation. In general, it is extremely important since it allows us to switch from the addition of numbers to the union of disjoint, finite sets. (I don't know about you, but I find the union operation on disjoint sets much easier to comprehend.)

> **Corollary**  
>  If $FS(x_n)$ has growth as above, then if we ever have $y, z, y+z \in FS(x_n)$ (and we will), then, assuming $y<z$, we have $\max(y+z) = \max(z)$.  
>  In particular, if $FS(y_n) \subseteq FS(x_n)$, then $\max[FS(y_n)] = \max[\{ y_n: n\in \omega\}]$.

### Strongly summable ultrafitlers are rapid -- the proof.

Anyway, let's get back to where we started. First, we should make a connection to strongly summable ultrafilters.

> **Lemma** ([Blass, Hindman 87](http://www.mendeley.com/research/on-strongly-summable-ultrafilters-and-union-ultrafilters/))  
>  If $p$ is strongly summable, then $p$ has a base of FS-sets whose sequences satisfy the growth condition (the stronger one with factor $2$, of course).

This is a great lemma (though maybe not a [true lemma](http://www.math.rutgers.edu/~zeilberg/Opinion82.html)) and the reason why I spend so much time above talking about growth conditions -- it comes in handy in many situations and really tells us something about strongly summable ultrafilters and the sets they contain. The proof, however, is weird so I'll skip it (unless you insist in the comments).

And now it makes sense to state the initial theorem.

> **Theorem** ([Matet, 87](http://www.jstor.org/stable/2274523) / [Blass, Hindman 87](http://www.mendeley.com/research/on-strongly-summable-ultrafilters-and-union-ultrafilters/))  
>  Let $p$ be a strongly summable ultrafilter and $FS(x_n) \in p$ with growth (or just unique representations); fix the $\max$-function for $FS(x_n)$ as above. Then $\max(p)$ is a rapid P-point.

[Edit on May 21, 2012: I rephrased the theorem to improve clarity -- thanks to the comment-by-email who suggested it!]

You can skip the proof if you like because it's not important to us (and I'm cheating a little on the important part, rapidity). But I find the argument appealing and since I've had to go through all the trouble to introduce the growth condition and so forth, I think I might as well include this, too. It's a typical proof for strongly summable ultrafilters -- just write down a good partition and let it do the work for you.

*   Fix $f:\mathbb{N} \rightarrow \mathbb{N}$.
*   We will prove that $f$ is either constant on a set in $\max(p)$ or it is finite-to-one.
*   Pick any $FS(x_n) \in p$ with $x_n > 2\sum_{i<n} x_i$.
*   Let $\min$ be the minimum function analogous to $\max$.
*   Now partition $FS(x_n)$ into  
     $$ \{ y\in FS(x_n) : f(\max(y)) < \min(y)\}$$ and $$ \{ y\in FS(x_n) : f(\max(y)) \geq \min(y)\} . $$
*   Our strongly sumable ultrafilter will give us $FS(y_n)$ (with the usual growth condition) included in one of these two parts.
*   If $FS(y_n)$ is included in the first part, then $f$ is bounded on $\max[FS(y_n)] = \max[\{ y_n: n\in \omega\}]$. (In particular, $f$ is constant on a set in $\max(p)$.)
    *   Consider $y_0$ and pick any other $y_n$.
    *   Due to the growth condition, we have $\max(y_n) = \max(y_0 + y_n)$ and reversely $\min(y_0 + y_n) = \min(y_0)$.
    *   In particular, $f(\max(y_n) = f(\max(y_0 + y_n)) < \min(y_0+y_n) = \min(y_0)$.
    *   So $f$ is bounded on $\max[FS(y_n)]$ and we find a
*   If $FS(y_n)$ is included in the second part, then $f$ is finite-to-one on $\max[FS(y_n)] = \max(\{ y_n: n\in \omega \})$.
    *   Consider some point in the image of $f$, say $k$.
    *   If for some $y_n$ we have $f(\max(y_n)) = k$, then $k = f(\max(y_n)) \geq \min(y_n)$ by our assumption.
    *   But how many $y_n$ can there be with $\min(y_n) \leq k$? At most $k$-many!
        *   The $y_n$ will have pairwise distinct minima. Why?
        *   Remember that for $n\neq m$ we naturally have $y_m + y_n \in FS(y_n)\subseteq FS(x_n)$.
        *   By the growth condition of the $x_n$, we know that $y_n$ and $y_m$ are sums of disjoint sets of $x_n$'s.
        *   In particular, their minima will differ!
    *   Therefore, $f$ is finite-to-one.
*   And now the cheating: the last argument shows that $f^{-1}(k)$ is at most size $k$. To be able to make any finite-to-one function an $k$-to-one function is, in fact, equivalent to being a rapid ultrafilter. It's a nice exercise, but feel free to insist in the comments.

This theorem is the reason I originally (back in 2010, in my conversations with Jana at BLAST) thought there's a chance that all strongly summable ultrafilters are rapid. First, $\max$ is a finite-to-one function. It's an old, probably folklore result (cf. [Miller, 1980](http://www.math.wisc.edu/~miller/res/laver.pdf)) that the finite-to-one image of a rapid ultrafilter is again rapid. Now the reverse is not true _but_ our function $\max$ is so easy that it's possible to prove this.

[Edit May 22, 2012: modified attribution]

> **Theorem** (Krautzberger (yep, this is it))  
>  If $p$ is strongly summable, then $p$ is rapid.

Here's the gist: the trick is simple: speed up functions by $ 2^n$ and let that sped-up function be dominated in the rapid image. Then we pick an FS-set in our strongly summable ultrafilter that witnesses this domination, in particular, it's generating sequence will dominate that sped-up function. Finally, just as in our initial observations in the first post, the FS-set will still grow fast enough to dominate the original function.

*   By Matet's theorem pick $FS(x_n) \in p$ such that $\max(p)$ is rapid.
*   Now pick any $f: \mathbb{N} \rightarrow \mathbb{N}$.
*   We may assume that $f$ is strictly monotone (that's all the functions we need to dominate).
*   By Matet's theorem we can find a set $A \in \max(p)$ that dominates $f \circ 2^{n+1} $.
*   Now fix $ FS(y_n) \subseteq FS(x_n), FS(y_n) \in p $ such that $\max[FS(y_n)] \subseteq A$; for simplicity, we can assume that the $(y_n)_{n\in \omega}$ also satisfy the growth condition.
*   Then $FS(y_n)$ dominates $f$.
    *   Let $i\in \mathbb{N}$. We'll show that $|FS(y_n) \cap f(i)| < i$.
    *   Pick the maximal $y_k < f(i)$.
    *   So $f(i) \cap FS(y_n) \subseteq f(i) \cap FS(y_0,\ldots, y_k)$, i.e., we only need to find out how large $k$ is.
    *   Of course, $f(i) > y_k \geq \max(y_k)$.
    *   Now $\max[FS(y_n)] = \max[\{ y_n: n \in \omega\} ] \subseteq A$, so $\max(y_k)$ is greater or equal to the $k$-th element of $A$.
    *   Since the $A$ dominates $f\circ (2^{n+1})$, this gives us $\max(y_k) > f(2^{k+1})$.
    *   By $f$'s monotonicity, $ i > 2^{k+1}$,
    *   But the set $FS(y_0,\ldots, y_k)$ contains exactly $ 2^{k+1}$-many elements, i.e., less than $i$-many elements -- precisely as desired.

Whew, ok. That's done.

### Jana asked one more question

After I got around to writing my argument up properly after the conference, Jana asked me whether there are could be other rapid idempotent ultrafilters. In particular, could there be so-called _minimal idempotents_ which are rapid? This, again, sounded rather drastic to me. Minimal idempotents have extremely rich algebraic properties, in particular, any set in them is central and thus all versions of the Central Sets Theorem hold for such sets (as opposed to FS-sets where no FS-set with the growth condition satisfies even the simplest [Central Sets Theorem](http://boolesrings.org/krautzberger/2011/09/08/hindman%E2%80%99s-theorem-partial-semigroups-and-some-of-my-most-lacking-intuitions-part-5/)).

But, of course, by now I was skeptical of my own skepticism.

To understand this question, we have to go back to strongly summable ultafilters for a second. Due to Matet's result, we know that the existence of stongly summable ultrafilters imply the existence of rapid P-points. In particular, the existence of strongly summable ultrafilters cannot be proved using ZFC alone.

But speaking of P-points and rapidity, it is a famous open problems whether there is a model with neither P-points nor Q-points. We can achieve a model without P-points and a model without Q-points, but incidentally not both. (As a taste of the problem: the continuum must at least be $\omega_3$ in such a model.)

On top of that, there exists a model without rapid ultrafilters (hence without Q-points), but disturbingly, afaik, nobody has a model without Q-points but with rapid ultrafilters! In other words, all known models without Q-points are without rapid ultrafilters (but with P-points).

Also, as a consequence of the big open question, any known model without P-points has Q-points, hence rapid ultrafilters.

What I'm trying to say is that Jana's question leads to a whole bunch of interesting and classical open problems. So it was very much worth thinking about.

If there are other rapid idempotents, how do we get them? It turns out we can get the possibly strongest positive answer to this question.

> **Theorem** (Krautzberger (yippie, another micro-contribution))  
>  If there exists a rapid ultrafilter, then there exist rapid idempotent ultrafilters. In fact, then there exists a whole closed left ideal of rapid ultrafilters, in particular there are minimal idempotents which are rapid.

As it turns out this follows easily from two well-known results on rapid ultrafilters which give us the following:

> **Proposition**  
>  If $p$ is rapid, $q$ any ultrafilter, then $q+p$ is rapid.

*   Since $p$ is rapid, the tensor product $q\otimes p$ is rapid (this can be found in [Miller, 1980](http://www.math.wisc.edu/~miller/res/laver.pdf)).
*   Also, the finite-to-one image of a rapid ultrafilter is rapid (again, see [Miller, 1980](http://www.math.wisc.edu/~miller/res/laver.pdf)).
*   But $q+p = +(q\otimes p)$ and addition is a finite-to-one map.
*   Hence $q+p$ is rapid.

Then the proof of the theorem is as follows:

*   Let $p$ be a rapid ultrafilter.
*   Then $\beta \mathbb{N} + p$ is a closed left ideal containing only rapid ultrafilters.
    *   This is a closed left ideal since $\cdot +p$ is a continuous map.
    *   If $q$ is any ultrafilter, then $q+p$ is rapid.
*   Every closed left ideal contains (by compactness) a minimal left ideal which in turn contains a minimal idempotent (that's one way of defining them, actually).

This theorem seems very strong to me. If I have one rapid, I have an entire closed left ideal of rapid ultrafilters -- that's one of the crucial structures in Algebra in the Stone–Čech compactification!

If you happen to have strongly summable ultrafilters, this gives an even nicer observation. You see, the definition of minimal idempotent can be given in terms of minimality in a certain partial order on the idempotents, namely

$$p \leq q \text{ iff } p+q = q+p = p. $$

There are two obvious related orders, $ p\leq_R q$ iff $q+p=p$, and $\leq_L$ (guess how it's defined). It's an easy exercise (really), that minimality in either partial order is minimality in all others.

An old result is that strongly summable ultrafilters are right maximal (in fact, strongly right maximal: $x+p=p$ has only one solution, $x=p$).

This means that assuming we have strongly summable ultrafilters, then we have a "full spectrum" of rapid idempotents -- from right maximal all the way to (right) minimal.

* * *

Well, and that's all folks. I hope you enjoyed my little experiment as much as I have. I'll certainly write a follow-up post when I've decided where to put a fixed copy of this.

Please let me know if you find any errors in the proof and, more importantly, if you think I should clarify certain parts.