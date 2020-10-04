---
layout: post
title: Rapid idempotent ultrafilters
date: 2012-04-08
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
published: true
permalink: 0104/
latex: true
---

Welcome back to the second (and final) part on why [strongly summable ultrafilters are rapid](/0103/).

Why the new title? Well, first, I needed another one (I've had too many posts with "Part X" in them, I think). Second, after I proved the results I mentioned last time, I quickly found an additional, somewhat more general observation regarding idempotents.

Here's the problem with this post though. I want to give the argument. But you know how it is in mathematics: standing on the shoulders of <del datetime="2012-04-06T14:42:13+00:00">the huddled masses</del> giants and all that. All work relies on established results. In the first post, I gave a lot of "unnecessary" proofs to motivate the story behind the result. In this post, I'll get to the actual proof and I'm torn, I'm not sure how much to quote and how much to prove. So bear with me and leave comments whenever I screw up.

### Strongly summables are rapid.

Why could this be true? On the one hand, because we already established partial results [last time](/0103/). On the other hand there's an old result attributed to Pierre Matet which, for now, I can only state in a obfuscated fashion.

> **Theorem** ([Matet 87](http://dx.doi.org/10.2307/2274523))
>  If $p$ is a [strongly summable ultrafilter](/0026/), then there exists a function "$\max$" such that $\max(p)$ is rapid.

So you see, strongly summable ultrafilters imply the existence of rapid ultrafilters -- via a very simple $\max$-function.

What's $\max$, you're asking?

Ah yes, I should talk about $\max$...

### $\max$ to the Max.

For [FS-sets](/0026/), there is a natural notion of maximum. If you have a bunch of elements summed up, then it makes sense to call the largest summand the maximum. So intuitively, the maximum should simply map each element in the FS-set to the largest generator involved in producing it. This might not appear very well defined but bear with me.

Consider an [FS-set](/0026/), let's keep calling it $FS(x_ n)$. If we're lucky, there is a _unique_ way to write each $y \in FS(x_ n)$ as a sum of $x_ i$ (or should I write $x_ n$? indices are hard...). For example, the sequence $(2^n)_  {n\in \omega}$ has this property while $(n)_ {n\in \mathbb{N}}$ fails to have this property (quite badly, I suppose).

It turns out that there's an easy property to ensure this: the sequence just has to grow quickly.

> **Proposition** (folklore? can be found in [Blass, Hindman 87](http://dx.doi.org/10.1090/S0002-9947-1987-0906807-4#sthash.YLoWoL89.dpuf))
>  If $x_ n > \sum_ {i<n} x_ i$ for all $n$, then
> $$\sum_ {i\in s} x_ i = \sum_ {i \in t} x_ i \Rightarrow s=t. $$
>  In other words, each element in $FS(x_ n)$ has a _unique representation_.

[Edit May 22, 2012: modified attribution]

The proof is an easy induction on $\left\vert s\right\vert, \left\vert t\right\vert$, using the growth factor to argue that the maximal element of $s$ and $t$ must be equal.

*   If $\left\vert s\right\vert  = \left\vert t\right\vert  = 1$, then $s = t$ follows immediately from the growth assumption.
*   Now assume inductively that we've proved the claim for smaller sets.
*   Let $n$ be the maximum of $s\cup t$.
*   Wlog, $n\in s$.
*   Then we must also have $n\in t$ -- otherwise
  $$ \sum_ {i \in s} x_ i \geq x_ n > \sum_ {i < n} x_ i \geq \sum_ {i \in t} x_ i, $$
a contradiction to the assumed equality of both sums.
*   But if both $s$ and $t$ contain $n$, we also have $\sum_ {s \setminus \{n\}} x_ i = \sum_ {t \setminus \{n\}} x_ i$.
*   Using our induction hypothesis, we have $s \setminus \{n\} = t \setminus \{n\}$, hence $s=t$.

So _if_ we have unique representations of elements in $FS(x_ n)$, we can define a function
$$\max: FS(x_ n) \rightarrow \mathbb{N}, \max(y) := x_ {\max s} \text{ where } \sum_ {i \in s} x_ i = y. $$

### Growth, growth, growth and more growth

Unfortunately, we need to tweak this a little bit more. Remember that FS-sets are all about sums. Very often $y, z \in FS(x_ n)$ will have $y+z \in FS(x_ n)$. So assuming growth, $y,z , y+z$ each have a unique representation in terms of the $x_ i$.

It's natural to assume that there's some kind of connection between the representations of $y,z, y+z$. For one thing, we know that if $s \cap t = \emptyset$, then $\sum_ {i\in s} x_ i + \sum_ {i \in t} x_ i \in FS(x_ n)$. The growth as above does not guarantee the reverse, though (just consider $FS(2^n)$), and the reverse often simplifies things. Fortunately, all we have to do is improve the growth!

> **Proposition** ([Hindman, Blass 87](http://dx.doi.org/10.1090/S0002-9947-1987-0906807-4#sthash.YLoWoL89.dpuf))
>  If $x_ n > 2\cdot \sum_ {i < n} x_ i$, then $\sum_ {i\in s} x_ i + \sum_ {i \in t} x_ i = \sum_ {i\in v} x_ i$ if and only if $s \cap t = \emptyset$ and $v = s \cup t$.

The proof is much like the earlier proof.

*   Again, we're doing an induction on $\left\vert s\cup t \cup v\right\vert$.
*   If $\left\vert s \cup t \cup v\right\vert  = 1$, then $s$ or $t$ must be empty and the growth condition does the rest.
*   For the inductive step, let $n := \max(s,t,v)$.
*   Due to the growth condition, $n$ must be in $v$.
*   But it must also lie in $s\cup t$.
    *   Else $\sum_ {i\in v} x_ i \geq x_ n > 2 \sum_ {i < n} x_ i \geq \sum_ {i\in s} x_ i + \sum_ {i\in t} x_ i$.
*   But it can't be in both $s$ and $t$.
    *   Else $\sum_ {i \in v} x_ i < 2 x_ n < \sum_ {i\in s} x_ i + \sum_ {i \in t} x_ i$.
*   Wlog $n\in s$
*   Th $\sum_ {i \in s\setminus{n}} x_ i + \sum_ {i\in t} x_ o = \sum_ {i \in v\setminus{n}} x_ i$.
*   Applying our induction hypothesis to $\left\vert (s \setminus \{n\}) \cup t \cup (v\setminus \{n\})\right\vert$, we get $s\setminus {n} \cap t = \emptyset$ and $(s \setminus \{n\}) \cup t = v \setminus \{n\}$.
*   This in turn gives us $s \cap t = \emptyset$ (as $n \notin t$) and $s\cup t = v$ -- as desired.

Why all this trouble? Well, there are many uses for this. For what's coming below, it simplifies an important calculation. In general, it is extremely important since it allows us to switch from the addition of numbers to the union of disjoint, finite sets. (I don't know about you, but I find the union operation on disjoint sets much easier to comprehend.)

> **Corollary**
>  If $FS(x_ n)$ has growth as above, then if we ever have $y, z, y+z \in FS(x_ n)$ (and we will), then, assuming $y < z$, we have $\max(y+z) = \max(z)$.
>  In particular, if $FS(y_ n) \subseteq FS(x_ n)$, then $\max[FS(y_ n)] = \max[\{ y_ n: n\in \omega\}]$.

### Strongly summable ultrafitlers are rapid -- the proof.

Anyway, let's get back to where we started. First, we should make a connection to strongly summable ultrafilters.

> **Lemma** ([Blass, Hindman 87](http://dx.doi.org/10.1090/S0002-9947-1987-0906807-4#sthash.YLoWoL89.dpuf))
>  If $p$ is strongly summable, then $p$ has a base of FS-sets whose sequences satisfy the growth condition (the stronger one with factor $2$, of course).

This is a great lemma (though maybe not a [true lemma](http://www.math.rutgers.edu/~zeilberg/Opinion82.html)) and the reason why I spend so much time above talking about growth conditions -- it comes in handy in many situations and really tells us something about strongly summable ultrafilters and the sets they contain. The proof, however, is weird so I'll skip it (unless you insist in the comments).

And now it makes sense to state the initial theorem.

> **Theorem** ([Matet, 87](http://dx.doi.org/10.1017/S0022481200028450) / [Blass, Hindman 87](http://dx.doi.org/10.1090/S0002-9947-1987-0906807-4#sthash.YLoWoL89.dpuf))
>  Let $p$ be a strongly summable ultrafilter and $FS(x_ n) \in p$ with growth (or just unique representations); fix the $\max$-function for $FS(x_ n)$ as above. Then $\max(p)$ is a rapid P-point.

[Edit on May 21, 2012: I rephrased the theorem to improve clarity -- thanks to the comment-by-email who suggested it!]

You can skip the proof if you like because it's not important to us (and I'm cheating a little on the important part, rapidity). But I find the argument appealing and since I've had to go through all the trouble to introduce the growth condition and so forth, I think I might as well include this, too. It's a typical proof for strongly summable ultrafilters -- just write down a good partition and let it do the work for you.

*   Fix $f:\mathbb{N} \rightarrow \mathbb{N}$.
*   We will prove that $f$ is either constant on a set in $\max(p)$ or it is finite-to-one.
*   Pick any $FS(x_ n) \in p$ with $x_ n > 2\sum_ {i<n} x_ i$.
*   Let $\min$ be the minimum function analogous to $\max$.
*   Now partition $FS(x_ n)$ into
     $$ \{ y\in FS(x_ n) : f(\max(y)) < \min(y)\}$$
     and
     $$ \{ y\in FS(x_ n) : f(\max(y)) \geq \min(y)\} . $$
*   Our strongly sumable ultrafilter will give us $FS(y_ n)$ (with the usual growth condition) included in one of these two parts.
*   If $FS(y_ n)$ is included in the first part, then $f$ is bounded on $\max[FS(y_ n)] = \max[\{ y_ n: n\in \omega\}]$. (In particular, $f$ is constant on a set in $\max(p)$.)
    *   Consider $y_ 0$ and pick any other $y_ n$.
    *   Due to the growth condition, we have $\max(y_ n) = \max(y_ 0 + y_ n)$ and reversely $\min(y_ 0 + y_ n) = \min(y_ 0)$.
    *   In particular, $f(\max(y_ n) = f(\max(y_ 0 + y_ n)) < \min(y_ 0+y_ n) = \min(y_ 0)$.
    *   So $f$ is bounded on $\max[FS(y_ n)]$ and we find a
*   If $FS(y_ n)$ is included in the second part, then $f$ is finite-to-one on $\max[FS(y_ n)] = \max(\{ y_ n: n\in \omega \})$.
    *   Consider some point in the image of $f$, say $k$.
    *   If for some $y_ n$ we have $f(\max(y_ n)) = k$, then $k = f(\max(y_ n)) \geq \min(y_ n)$ by our assumption.
    *   But how many $y_ n$ can there be with $\min(y_ n) \leq k$? At most $k$-many!
        *   The $y_ n$ will have pairwise distinct minima. Why?
        *   Remember that for $n\neq m$ we naturally have $y_ m + y_ n \in FS(y_ n)\subseteq FS(x_ n)$.
        *   By the growth condition of the $x_ n$, we know that $y_ n$ and $y_ m$ are sums of disjoint sets of $x_ n$'s.
        *   In particular, their minima will differ!
    *   Therefore, $f$ is finite-to-one.
*   And now the cheating: the last argument shows that $f^{-1}(k)$ is at most size $k$. To be able to make any finite-to-one function an $k$-to-one function is, in fact, equivalent to being a rapid ultrafilter. It's a nice exercise, but feel free to insist in the comments.

This theorem is the reason I originally (back in 2010, in my conversations with Jana at BLAST) thought there's a chance that all strongly summable ultrafilters are rapid. First, $\max$ is a finite-to-one function. It's an old, probably folklore result (cf. [Miller, 1980](http://dx.doi.org/10.1090/S0002-9939-1980-0548093-2#sthash.ygG3UBVz.dpuf)) that the finite-to-one image of a rapid ultrafilter is again rapid. Now the reverse is not true _but_ our function $\max$ is so easy that it's possible to prove this.

[Edit May 22, 2012: modified attribution]

> **Theorem** (Krautzberger (yep, this is it))
>  If $p$ is strongly summable, then $p$ is rapid.

Here's the gist: the trick is simple: speed up functions by $2^n$ and let that sped-up function be dominated in the rapid image. Then we pick an FS-set in our strongly summable ultrafilter that witnesses this domination, in particular, it's generating sequence will dominate that sped-up function. Finally, just as in our initial observations in the first post, the FS-set will still grow fast enough to dominate the original function.

*   By Matet's theorem pick $FS(x_ n) \in p$ such that $\max(p)$ is rapid.
*   Now pick any $f: \mathbb{N} \rightarrow \mathbb{N}$.
*   We may assume that $f$ is strictly monotone (that's all the functions we need to dominate).
*   By Matet's theorem we can find a set $A \in \max(p)$ that dominates $f \circ 2^{n+1}$.
*   Now fix $FS(y_ n) \subseteq FS(x_ n), FS(y_ n) \in p$ such that $\max[FS(y_ n)] \subseteq A$; for simplicity, we can assume that the $(y_ n)_ {n\in \omega}$ also satisfy the growth condition.
*   Then $FS(y_ n)$ dominates $f$.
    *   Let $i\in \mathbb{N}$. We'll show that $\left\vert FS(y_ n) \cap f(i)\right\vert  < i$.
    *   Pick the maximal $y_ k < f(i)$.
    *   So $f(i) \cap FS(y_ n) \subseteq f(i) \cap FS(y_ 0,\ldots, y_ k)$, i.e., we only need to find out how large $k$ is.
    *   Of course, $f(i) > y_ k \geq \max(y_ k)$.
    *   Now $\max[FS(y_ n)] = \max[\{ y_ n: n \in \omega\} ] \subseteq A$, so $\max(y_ k)$ is greater or equal to the $k$-th element of $A$.
    *   Since the $A$ dominates $f\circ (2^{n+1})$, this gives us $\max(y_ k) > f(2^{k+1})$.
    *   By $f$'s monotonicity, $i > 2^{k+1}$,
    *   But the set $FS(y_ 0,\ldots, y_ k)$ contains exactly $2^{k+1}$-many elements, i.e., less than $i$-many elements -- precisely as desired.

Whew, ok. That's done.

### Jana asked one more question

After I got around to writing my argument up properly after the conference, Jana asked me whether there are could be other rapid idempotent ultrafilters. In particular, could there be so-called _minimal idempotents_ which are rapid? This, again, sounded rather drastic to me. Minimal idempotents have extremely rich algebraic properties, in particular, any set in them is central and thus all versions of the Central Sets Theorem hold for such sets (as opposed to FS-sets where no FS-set with the growth condition satisfies even the simplest [Central Sets Theorem](/0079/)).

But, of course, by now I was skeptical of my own skepticism.

To understand this question, we have to go back to strongly summable ultafilters for a second. Due to Matet's result, we know that the existence of stongly summable ultrafilters imply the existence of rapid P-points. In particular, the existence of strongly summable ultrafilters cannot be proved using ZFC alone.

But speaking of P-points and rapidity, it is a famous open problems whether there is a model with neither P-points nor Q-points. We can achieve a model without P-points and a model without Q-points, but incidentally not both. (As a taste of the problem: the continuum must at least be $\omega_ 3$ in such a model.)

On top of that, there exists a model without rapid ultrafilters (hence without Q-points), but disturbingly, afaik, nobody has a model without Q-points but with rapid ultrafilters! In other words, all known models without Q-points are without rapid ultrafilters (but with P-points).

Also, as a consequence of the big open question, any known model without P-points has Q-points, hence rapid ultrafilters.

What I'm trying to say is that Jana's question leads to a whole bunch of interesting and classical open problems. So it was very much worth thinking about.

If there are other rapid idempotents, how do we get them? It turns out we can get the possibly strongest positive answer to this question.

> **Theorem** (Krautzberger (yippie, another micro-contribution))
>  If there exists a rapid ultrafilter, then there exist rapid idempotent ultrafilters. In fact, then there exists a whole closed left ideal of rapid ultrafilters, in particular there are minimal idempotents which are rapid.

As it turns out this follows easily from two well-known results on rapid ultrafilters which give us the following:

> **Proposition**
>  If $p$ is rapid, $q$ any ultrafilter, then $q+p$ is rapid.

*   Since $p$ is rapid, the tensor product $q\otimes p$ is rapid (this can be found in [Miller, 1980](http://dx.doi.org/10.1090/S0002-9939-1980-0548093-2#sthash.ygG3UBVz.dpuf)).
*   Also, the finite-to-one image of a rapid ultrafilter is rapid (again, see [Miller, 1980](http://dx.doi.org/10.1090/S0002-9939-1980-0548093-2#sthash.ygG3UBVz.dpuf)).
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

There are two obvious related orders, $p\leq_ R q$ iff $q+p=p$, and $\leq_ L$ (guess how it's defined). It's an easy exercise (really), that minimality in either partial order is minimality in all others.

An old result is that strongly summable ultrafilters are right maximal (in fact, strongly right maximal: $x+p=p$ has only one solution, $x=p$).

This means that assuming we have strongly summable ultrafilters, then we have a "full spectrum" of rapid idempotents -- from right maximal all the way to (right) minimal.

* * *

Well, and that's all folks. I hope you enjoyed my little experiment as much as I have. I'll certainly write a follow-up post when I've decided where to put a fixed copy of this.

Please let me know if you find any errors in the proof and, more importantly, if you think I should clarify certain parts.

---

_Comments_

* **Andreas Blass**, 2012/04/15
  I think you’re giving me (and Neil Hindman) more credit than we deserve.  In the theorem that you attribute to us and to Pierre Matet, the part about rapidity of max is, if I remember correctly, due solely to Matet.  I believe the only occurrence of “rapid” in that joint paper by Neil and me is in the paragraph acknowledging Pierre’s work.
  Also, at the end of the proof of that theorem, you get that the function f can take any value k at most k times on the y’s.  But it’s the FS set generated by the y’s that is in the ultrafilter, and on that set it seems that f can take the value k about $2^k$ times.  That does no real harm; this weaker conclusion still implies rapidity because you can compose f with an exponential function.
  * **Andreas Blass**, 2012/04/15
  Ignore (or better delete) the second half of my previous comment.  I was thinking too much about your theorem and not about Matet’s.
    * **Peter**, 2012/05/21
    I’m sorry for not responding to this. If you insist, I will delete it.
  * **Peter**, 2012/04/18
  Thank you for your comments, Andreas! Why I give you and Neil credit is because the proof is from your paper. It’s just that your paper doesn’t actually mention that the proof therein shows rapidity, instead refers to Matet.
  On the other hand, I couldn’t reconstruct Matet’s proof from his paper. I remember that I once understood it and that back then I thought both proofs are the same but looking at Matet’s paper again for this post I found it hard to get back into his notation of filters on partitions.
* **Neil Hindman**, 2012/05/21
  I have not yet understood the proof that strongly summable ultrafilters are rapid.  But I have gone through the proof that if there are rapid ultrafilters, then there is a closed left ideal consisting of such things.  You are way too modest in calling it a micro contribution.  The proof is, indeed, very simple.  But you should be congratulated for coming up with it, and Jana should be congratulated for asking the question.  It is to me very shocking that such things can be found in the smallest ideal.  Had Jana asked me — and who knows, maybe she did — I would have said “of course not” without thinking.
  * **Peter**, 2012/05/21
  Thank you for your kind words, Neil.
  I hope I can clarify any questions you may have about the other result.
* **David Fernandez**, 2013/10/17
  Hi Peter! I just went through your proof that strongly summable ultrafilters are rapid (the one that you uploaded to the arXiv). There's a little detail that bothers me, and it's your way of phrasing Theorem 1, which is a result of Blass and Hindman. It seems to me that you do need to explicitly state that the sequence $x_n$ given by this Theorem satisfies $x_n < \sum_{k < n}x_k$ for every $n$ (you do so here in the blog post, but not in the arXiv paper). Because afterwards, in the proof of Theorem 3 (which is the same proof that appears here), once you've got your sequence $y_k$ (it's also worth noting that we assume $y_k$ is increasing, by the way), you're implicitly using the fact that if $k < l$ then $x_n-\mathrm{max}(y_k) < x_n-\mathrm{max}(y_l)$ (i.e. that bigger members of the sequence $y_k$ must have bigger $x_n$-maximum). This seems to me to be crucial for the step where you say that any $x_n-\mathrm{max}(y_k)$ is greater than or equal to the $k$-th element of $A$. At least I don't see how else to justify this step without the stronger assumption on $x_n$, which in any case doesn't affect either the veracity of the theorem nor the main ideas of its proof.
  On another note, I have to say that I don't agree with a sentence that you wrote on the second paragraph of Section 1: that <q>it should be straighforward to extend the two results to countable semigroups with finite-to-one multiplication maps in general</q>. I don't think this is straighforward at all! The core of the issue is again the same Theorem 1, of Blass and Hindman, saying that a strongly summable ultrafilter has a base of sets $\mathrm{FS}(x_n)$ where the addition <q>behaves like disjoint union</q>. This is a theorem that was only recently generalized to most abelian groups, but fails badly for example in the Boolean group $([\omega]^{ < \omega},\bigtriangleup)$ (those are results of mine, hehe) (and I don't think anyone has any idea of what happens in non-abelian semigroups, though in a recent paper of Hindman and Lakeshia Legette Jones the case of the free semigroup is partially dealt with). In fact, it's possible to construct, on the Boolean group, a strongly summable ultrafilter that's not additively isomorphic to any union ultrafilter, so this is as far as one can get from <q>sums behaving like disjoint unions</q> (this is all in here: http://arxiv.org/abs/1306.5421 ). I believe it would be interesting to see if this crazy ultrafilter is rapid or not...
  * **David Fernandez**, 2014/02/11
  Hi again, Peter.
  It’s been some months since I posted my comment above. Now I can say that your result is also true for strongly summable ultrafilters on the Boolean group (I just proved it, and I plan to add it to my preprint linked to above). That, together with your result, takes care of all abelian groups: so rapidity follows from strong summability in any such group (hence in any abelian cancellative semigroup as well).
  * **Peter**, 2014/02/16
    David that’s great news! I’m sorry I never got around replying to your earlier comment (let alone think about your question). I’m glad to hear that this side comment turned into an interesting result! By the way, will you be in Bonn for the INFTY conference in March?
    * **David Fernandez**, 2014/03/07
    No, it looks like I’m not going to that side of the pond anytime soon… but it would be good if we talk (maybe skype, or something) about this sometime (and include David (Chodounski)).
