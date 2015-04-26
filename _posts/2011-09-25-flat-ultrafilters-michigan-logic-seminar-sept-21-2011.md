---
layout: post
title: Flat Ultrafilters (Michigan Logic Seminar Sept 21, 2011)
date: 2011-09-25 15:36:37.000000000 +02:00
categories:
- research
- talk
tags:
- andreas blass
- Calkin Algebra
- flat ultrafilter
- Francois Dorais
- Ilijas Farah
- Juris Steprans
- N. Christopher Philips
- Operator Algebra
- P-point
- rapid ultrafilter
- ultrafilter
- ultrapower
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown: '1'
  dsq_thread_id: '593133198'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

Remember how our about page says that [Booles' Rings is about best practices](http://boolesrings.org/about/) for an acacdemic homepage? Ok, let's try one: making notes to talks available.

## Some introductory remarks

> Skip this section if you only want mathematics.

Wednesday, I gave a short talk about flat ultrafilters at our Logic Seminar here at the University of Michigan (as [announced on Set Theory Talks](http://settheorytalks.wordpress.com/2011/09/16/michigan-logic-seminar/), the talk was recorded and the video <del datetime="2011-09-29T15:47:26+00:00">will be online eventually</del> is [now online](http://vimeo.com/29738390)).

* * *

* * *

[Flat Ultrafilters (2011/09/21 University of Michigan Logic Seminar)](http://vimeo.com/29738390) from [Peter Krautzberger](http://vimeo.com/user2937952) on [Vimeo](http://vimeo.com).

* * *

* * *

When [I visited Toronto in](http://www.fields.utoronto.ca/programs/scientific/10-11/set_theory/) June, [Ilijas Farah](http://www.math.yorku.ca/~ifarah/) introduced me to this somewhat strange new type of utrafilter on $\omega$. My talk this week was mostly about the results from a [2009 paper by Ilijas Farah, N. Christopher Philips and Juris Steprans](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) [cite source='doi']10.1007/s00208-009-0448-z[/cite], but some of what I am going to write are insights I gained while discussing this notion with François Dorais and Andreas Blass. So, actually, this post is attempting another best practice: notes from reading a paper.

I would like to explain something about the result that P-points are not flat. When I started looking at [their paper](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) with Francois Dorais, we first re-proved that selective ultrafilters are not flat -- instead of the (possibly stronger) functional analytic result from the paper we used the combinatorial definition of flat ultrafilters. Then we worked on improving that proof and, with Andreas's help, got it to work for P-points.

Only after all of this happened did we notice that at the very end, [the paper](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) had already announced that they have a proof that P-points are not flat. Last week, Ilijas kindly send me [some slides](http://db.tt/O2kyK0m) with further results on flat ultrafilters; even though the proof for P-points isn't in there I would guess from the formulation on the slides that our proofs are essentially the same.

Long story short, the proof "P-points are not flat" below is "our" proof even though the result (and most likely the proof) should be credited to at least Steprans (according to [the slides](http://db.tt/O2kyK0m)).

I will focus on my own interpretation of these notions, i.e., my rephrasing of the definition of flat ultrafilters; they might look different from what you'll find in [their paper](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) even though it is formally the same notion.

Alright, nuff said. My talk was designed to first sketch the main functional analysis result of their paper. So the first two sections will be void of much explanations or proofs. But they motivate why the notion of flat ultrafilter is as strange as it is -- it simply came out of those considerations.

## Some functional analysis

Let $H$ be a (the) separable, infinite dimensional Hilbert space, i.e., $$H\cong l_2(\omega) = \{ s: \omega \rightarrow \mathbb{C}, \sum_{n\in \omega} |s_n|^2 < \infty \}.$$

Then $B(H)$ is the space of bounded, linear operators, i.e.,

$$ B(H) = \{ T: H\rightarrow H: T \mbox{ linear }, (\exists M)(\forall v\in H) ||Tv|| \leq M||v|| \},$$

and $K(H)$ the space of compact operators

$$K(H) = cl( \{ T \in B(H): T[H] \mbox{ finite dimensional } \}).$$

Finally, the [Calkin Algebra](http://en.wikipedia.org/wiki/Calkin_algebra) is the quotient $C(H) = B(H) / K(H)$.

Farah, Philips and Steprans were interested in the relative commutant of subalgebras $A\subseteq B$: $$F_A(B) = \{ a\in A: (\forall b\in B) ab=ba \}.$$

## The relative commutant in the ultrapower

If $p \in \beta \omega $ is an ultrafilter, we can consider the norm-ultrapowers of $B(H)$ and $C(H)$ which I'll denote by $B(H)^p, C(H)^p$. That is $$ B(H)^p = \ell_\infty(B(H) / \{c \in \ell_\infty(B(H)): \lim_p ||c|| = 0\}.$$ (Similarly for $C(H)^p$.)

Kirchberg had shown that $F_{C(H)^p}(C(H)) = \mathbb{C} \cdot 1$ regardless of $p$ and asked it the analogous statement might be true of $B(H)$.

As a response, Farah, Philips and Steprans showed that $F_{B(H)^p}(B(H))$ depends on the choice of $p$ (under CH); the results from [their paper](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) relevant to this talk are as follows.

> **Theorem** ([Farah, Philips, Steprans](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf))
> 
> *   If $p$ is a _flat_ ultrafilter (see below), then $F_{B(H)^p}(B(H)) \neq \mathbb{C} \cdot 1$.
>     
>     
> *   If $p$ is selective, then $F_{B(H)^p}(B(H)) = \mathbb{C} \cdot 1$; in particular, selective ultrafilters are not flat.
>     
>     
> *   Flat ultrafilters exist under ZFC.
>     
>     
> *   It was announced that P-points are not flat.

Curious fact: under CH all ultrapowers of $B(H)$ are isomorphic (via model theoretic arguments). Yet, by the above, if we take a flat and a selective ultrafilter, no such isomoprhism can map $B(H)$ to $B(H)$ (or else the relative commutants would be isomorphic). This is an odd situation.

> If you look at the recording you will, as usual, see lots of confusion on my part. In particular, I remembered that the first result in the theorem was an equivalence. It turned out that the paper does not say so and this is an open question. In my defence, the slides did give it as an equivalence.

I'll only give the proofs of the last two statements as well as some further observations on flat ultrafilters.

## Flat ultrafilters

What are flat ultrafilters? Well, let's first introduce the assisting structure of a flatness scale, a set of sequences in $[0,1]$.

> **Definition**  
>  A _flatness scale_ H is a countable subset of $$\{ h:\omega \rightarrow [0,1]: h(0) =1, \lim_{i \rightarrow \infty} h(i)=0 \}.$$
> 
> > **Addendum** Nothing spectacular so far -- a flatness scale is just a bunch of sequences converging to $0$. As such they can have some wild behavior along the way -- but flat ultrafilters tame them.  
> > [![](assets/flatness-scale.jpg "flatness scale")](http://boolesrings.org/krautzberger/files/2011/09/flatness-scale.jpg)

The original definition of flat ultrafilters is then phrased as follows.

> **Definition** [[Farah, Philips, Steprans](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf)]  
>  An ultrafilter $p$ is _flat_ if there is a flatness scale $H = (h_n: n\in \omega)$ such that for every increasing $f: \omega \rightarrow \omega $ with $f(0) > 0$  
>  $$\lim_{n\to p} ||(h_n - h_n \circ f)||_\infty = 0.$$  
>  In other words, for every $f$ as above and every $\varepsilon>0$, we have $$\{n\in \omega: \sup_i |h_n(i) - h_n(f(i))| < \varepsilon \} \in p .$$  
>  We then say that $H$ is a **flatness scale for p**.

One of the goals was to find out how I can best think about the notion of flat ultrafilters.

> **Addendum** What to make of this? The first observation is that flat ultrafilters have a flatness scale such that, given $\varepsilon$, almost all of the sequences (with respect to the ultrafilter) drop by at most $\varepsilon$. That's slow, but it's even slower! The functions $f$ in the definition should be thought of as vastly increasing (think: dominating family) and they code huge intervals of the form $[n,f(n)]$. But even given those vast intervals, still almost all sequences of the flatness scale drop only by $\varepsilon$ on such long intervals. In other words, they never really drop by much, yet they converge to $0$.  
> [![](assets/flatness-ultrafilter.jpg "flat ultrafilter")](http://boolesrings.org/krautzberger/files/2011/09/flatness-ultrafilter.jpg)

One of the things I found irritating was to think of them as ultrafilters on $\omega$. Thankfully, the enumeration of $H$ does not matter much. In other words, I don't have to think of $p$ as an ultrafilter on $\omega$ that just happens to come with a map to a flatness scale $H$ -- I can really think of $p$ to be an ultrafilter on $H$. So allow me to re-phrase.

> **Definition** [reformulation] Given a flatness scale $H$ and an ultrafilter $p$ on $H$, we say that $p$ is _flat_, if for every increasing $f:\omega\to\omega$ with $f(0) > 0$ and every $\varepsilon>0$, $$\{ h \in H: \sup_i |h(i) - h (f(i))| < \varepsilon \} \in p .$$  
>  In other words, $$\lim_{p} ||(h - h \circ f)||_\infty = 0.$$ Here $\lim_p$ is the usual limit along the ultrafilter $p$.

You might wonder if we're not loosing too much information -- after all, the original definition did not forbid repititions. We'll see later that this is not a problem. For now, I will simply stick to the reformulation.

First there's an obvious question about how complicated a flatness scale can be. So let me show you [their construction](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) of flat ultrafilters.

## Constructing Flat Ultrafilters

### A simple observation

For the construction of flat ultrafilters, the key observation is as follows: all we have to do is **find a flatness scale** $H$ such that the sets $$X_{f,\varepsilon} = \{h \in H : \sup_i|h(i) - h (f(i)| < \varepsilon \}$$  
 are **infinite** for every increasing $f:\omega\to\omega$ with $f(0) > 0$ and every $\varepsilon > 0$.

Once we have this, we get the finite intersection property for free since $$X_{\max(f_1,f_2),\min(\varepsilon_1,\varepsilon_2)} \subseteq X_{f_1,\varepsilon_1} \cap X_{f_2,\varepsilon_2}.$$

In other words, any ultrafilter $p$ containing all the sets $X_{f,\varepsilon}$ is flat -- witnessed by the flatness scale $H$.

Luckily, It turns out that there is an extremely simple flatness scale with this property.

> **Proposition** [[Farah, Philips, Steprans](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf)] There is a flatness scale $H$ such that the set  
>  $$X_{f,\varepsilon} = \{h \in H : \sup_i |h(i) - h(f(i)| < \varepsilon \}$$  
>  is infinite for every increasing $f:\omega\to\omega$ with $f(0) > 0$ and every $\varepsilon > 0$.

**Proof**

*   Consider the finite subsets of $\omega$, $[\omega]^{<\omega}$.
*   We can think of $s\in [\omega]^{<\omega}$ as encoding a simple step function, dropping by $1/|s|$ at each of the elements of $s$; in other words, we define $h_s : \omega \rightarrow [0,1]$ by  
     $$ h_s(i) = 1- \frac{|s\cap i|}{|s|}.$$

*   Clearly, $H_S := \{ h_s: s \in [\omega]^{<\omega} \}$ is a flatness scale (starting at $1$ and converging to zero, in fact being eventually zero).

*   Now imagine we're given some increasing $f:\omega\to\omega$ with $f(0) > 0$ as well as some $\varepsilon >0$.

*   Then we can easily find infinitely many $s \in [\omega]^{<\omega}$ with the following properties:
    *   $1/|s| < \varepsilon$
    *   With the natural enumeration of $(s_i)_{i\in |s|}$ of $s$, $$s(i+1) \geq f(s(i))$$ for each $i < |s|$.
*   But this means that for all $i$, $$h_s(f(i)) \geq h_s(i+1) = \frac{1-|s\cap (i+1)|}{|s|}.$$

*   It follows that $\sup_i |h_s(i) - h_s(f(i))| \leq 1/|s| < \varepsilon$.

*   Since we can find infinitely many such $s$, the sets $X_{f,\varepsilon}$ are all infinite.

Combining this with the previous observation we have.

**Corollary** ([Farah, Philips, Steprans](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf))  
 There is a flat ultrafilter via the above flatness scale $H_S$. (Let's keep that name.)

## Some easy observations

Let's try to get a feel for what we can actually expect from a flat ultrafilter.

For example, a **flat ultrafilter must be non-principal** -- otherwise the flatness scale is just one map and it's easy to find $f:\omega \rightarrow \omega$ that drops faster than a single sequence $h$!

### Flatness scales are simple

The above results from [Farah, Philips and Steprans](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) is surprising: at first since the flatness scale is extremely simple! It's only natural to ask how complicated flatness scales can really be. Luckily, it's always this easy!

> **Proposition** If $p$ is flat, then $H_S$ as above is a flatness scale for $p$.

**Proof**

*   Assume we have a flatness scale for $p$, say $H = (h_n: n\in \omega)$ with some fixed enumeration of $H$.

*   We can define another flatness scale as follows: simply choose $h'_n(i)$ to be a multiple of $1/n$ closest to $h_n(i)$, i.e., minimize $|h_n(i) - j/n|$.

*   Clearly, $h'_n \in H_S$.

*   Then $(h'_n : n\in \omega)$ (and hence $H_S$) is a flatness scale for $p$!
    *   For $f,\varepsilon$ as in the defintion for flatness, we know $$\{ n: \sup_i |h_n(i) - h_n(f(i)| < \varepsilon / 3 \} \in p.$$
    *   But $|h'_n(i) - h'_n(f(i))| \leq | h_n(i) - h_n(f(i)| + 2/n$.
    *   Since all but finitely many $n$ have $1 / n < \epsilon / 3$ we have $$\{ h_n: \sup_i |h'_n(i) - h'_n(f(i)| < \varepsilon \} \supseteq^* \{ h_n: \sup_i |h_n(i) - h_n(f(i)| < \varepsilon / 3 \}.$$
    *   In other words, both sets lie in $p$ -- as desired.

The above proposition tells us that we can now think of flat ultrafilters as simply living on $[\omega]^{<\omega}$, extending a certain filter -- I don't know about you, but for me that's much easier to picture. We can, therefore, re-phrase our definitions.

> **Definition revisited**. An ultrafilter $p\in \beta( [\omega]^{<\omega}) \cong \beta \omega$ is flat if for all $f:\omega \rightarrow \omega$ with $f(0)>0$ and $\varepsilon>0$,  
>  $$\{ s \in [\omega]^{<\omega}: \sup_i |h_s (i) - h_s(f(i))| < \varepsilon \} \in p .$$

We're still sort of hiding the fact that we can vary the bijection between $[\omega]^{<\omega}$ and $\omega$. But I still think this phrasing simplifies things a little.

### Convergence in the colums

The next important observation is that in each coordinate $i$, the values of the flatness scale at $i$ for a flat ultrafilter must converge to $1$ (along the ultrafilter).

> **Lemma** If $p$ is flat, then $\lim_{s\rightarrow p} h_s(k) = 1$ for all $k \in \omega$.

_Proof_

*   Suppose $\lim_{s\to p} h_s(k) < 1 - \varepsilon$ for some $k \in \omega$ and $1> \varepsilon > 0$.

*   In other words, $X := \{ s: h_s(k) < 1 - \varepsilon \} \in p$.

*   Pick some $f:\omega\to\omega$, increasing with $f(0) = k$ (note $k > 0$ since $h_s(0) = 1$).

*   Then  
     $$ \sup_i|h_s(i) - h_s (f(i)) | \geq |h_s(0) - h_s(k)| = 1 \geq \varepsilon $$  
     for every $n \in X$.

*   In other words, $ X \subseteq \{ s \in [\omega]^{<\omega}: \sup_i |h_s (i) - h_s(f(i))| \geq \varepsilon \}$

*   But this contradics $\{ s \in [\omega]^{<\omega}: \sup_i |h_s (i) - h_s(f(i))| < \varepsilon \} \in p$.

## A proof that P-points are not flat.

> In [their paper](http://www.math.yorku.ca/~ifarah/Ftp/208_2009_448_OnlinePDF.pdf) Farah, Philips and Steprans announced that P-points are not flat. Francois, Andreas and I overlooked that statement and re-proved the result as follows. (See also the comments at the beginning as well as later.)

Suppose for this section that $p$ is a flat $P$-point as witnessed by $H_S$.

As the first step, we will improve the p-convergence from earlier to actual convergence, i.e., $p$ contains $H\subseteq H_S$ that satisfies $\lim_{s\in H} h_s(k) = 1$ for every $k$.

In the second step, we will show that no ultrafilter can have such a flatness scale.

> **Lemma** If $p$ is a flat P-point, then $p$ contains $H\subseteq H_S$ that satisfies $\lim_{s\in H} h_s(k) = 1$ for every $k$.

**Proof**

*   Since $\lim_{s\to p} h_s(k) = 1$ for all $k$ we know that $$X_{k,l} := \{ s: h_s(k) \geq 1 - 2^{-l} \} \in p,$$ for all $k,l \in \omega$.
*   Since $p$ is a P-point, we find $H \in p$ such that $H \subseteq^* X_{k,l}$ for all $k, l \in \omega$.
*   But that means precisely that $H$ has $\lim_{s\in H} h_s(k) = 1$ for every $k$.
*   Of course, restricting to $H$ does not change the fact that $$\lim_{n\to p} \sup_i|h_s(i) - h_s(f(i))| = 0$$ holds for every increasing function $f:\omega\to\omega$ with $f(0) > 0$ -- so we're done.

We may thus suppose that our original flatness scale satisfies $\lim_{n\to\infty} h_n(k) = 1$ for every $k$. But this is impossible for any ultrafilter!

> **Lemma** No ultrafilter $p$ has a flatness scale $H$ with $\lim_{h\in H} h(k) = 1$.

_Proof._

*   Else, for any fixed $\color{red}k$, there are only finitely many $\color{blue}h$ such that $h(k) < 3/4$.

*   For these finitely many $\color{blue}h$, there is a common $\color{yellow}\ell$ (depending only on $\color{red}k$) such that $\color{blue}h(\color{yellow}\ell) = 0$, and thus $h(m) =0$ for all $m \geq \color{yellow}\ell$.

*   In other words, we can define $\color{yellow}f:\omega\to\omega$ be an increasing function with $\color{yellow}f(0) > 0$ such that if $h(k) < 3/4$ then $h(\color{yellow}f(k)) = 0$.

*   Since $H$ is a flatness scale, we have that $$\{h : (\forall k)(h(k) - h(\color{yellow}f(k)) \leq 1/4)\} \in p.$$

*   So pick one of those $\color{blue}h$, i.e., with $\color{blue}h(k)-\color{blue}h(\color{yellow}f(k)) \leq 1/4$ for all $k$.

*   For this fixed $\color{blue}h$ we can, of course, find the first $\color{red}k$such that $\color{blue}h(\color{red}k) < 3/4$. (Note that $\color{red} k > 0$ since $\color{blue}h(0) = 1$.)

*   Since $\color{blue}h(\color{red}k-1) \geq 3/4$ and $\color{yellow}f(\color{red}k-1) \geq \color{red}k$, we see that $$\color{blue}h(\color{blue}k-1) - \color{blue}h(\color{red}k) \leq \color{blue}h(\color{red}k-1) - \color{blue}h(\color{yellow}f(\color{red}k-1)) \leq 1/4$$ by our choice of $h$.

*   Therefore, $\color{blue}h(\color{red}k) \geq 1/2$.

*   By choice of $\color{yellow}f$, we have that $\color{blue}h(\color{yellow}f(\color{red}k)) < 1/4$ and hence $\color{blue}h(\color{red}k) - \color{blue}h(\color{yellow}f(\color{red}k)) > 1/2 - 1/4 = 1/4$ -- which contradicts our choice of $h$!

## Flat ultrafilter and rapidity

Since selective ultrafilters are not flat, I was for the longest time under the impression that Q-points and, more generally, rapid ultrafilters might be connected.

(Un)fortunately, this is not the case. An easy argument yields flat but rapid ultrafilters.

> **Proposition** If $p$ is flat and $p \leq_{RK} q$, then $q$ is flat. By contraposition, if $q$ is not flat, then $p$ is not flat.

**Proof**

*   If $H_S$ is a flatness scale for $p$ and $g:[\omega]^{<\omega} \rightarrow [\omega]^{<\omega}$ with $g(q)=p$, then $H_{g[S]}:=\{ h_{g(s)} :s \in \omega^{<\omega} \}$ is a flatness scale for $q$.
    *   Given $f$ and $\varepsilon$, simply calculate $$\{ s : \sup_i |h_{g(s)}(i) - h_{g(s)}(f(i))| < \varepsilon \} = g^{-1} [ \{ s : \sup_i |h_s(i) - h_s(f(i))| < \varepsilon \}] \in q. $$

This is all we need.

> **Proposition** If there exists a rapid ultrafilter, there exists an ultrafilter both flat and rapid.

*   Take $p$ rapid, and $q$ flat.
*   Then $q \otimes p$ is rapid and flat
    *   Flat, since $q\otimes p \geq_{RK} q$.
    *   By a folklore exercise, if $p$ is rapid, then any $q\otimes p$ is rapid.

> That's about all I actually covered in my talk. There might be a continuation at a later point.

* * *

**2011/09/29** I added some badly drawn pictures and additional comments (preceded by "Addendum")