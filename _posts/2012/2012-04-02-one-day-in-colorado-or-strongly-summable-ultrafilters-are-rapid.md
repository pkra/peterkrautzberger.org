---
layout: post
title: One day in Colorado or Strongly summable ultrafilters are rapid
date: 2012-04-02
categories:
- experimental
- expository
- research
tags:
- andreas blass
- BLAST 2010
- idempotent ultrafilters
- Jana Flašková
- microcontribution
- P-point
- Q-point
- rapid ultrafilter
- ultrafilters
published: true
permalink: 0103/
---

Picking up from [the prelude about micro-contributions](/0102/), let me tell you the story of a small result I would like to share with you. (Before you frantically scroll down to find the proof, it's not really here but will be in the follow-up post).

Please keep in mind that this is not a mathematical paper (hm... did I really have to write this?). I'll mostly delay (or forget) defining (or referencing) terminology. I hope my explanations will suffice when they are needed but this more of a story than a formal proof. In any case, if you find a notion that's not defined, keep reading or ask for clarification through a comment.

Thankfully, Jana Flašková was kind enough to read through the draft correcting a few mistakes; fortunately, her recollection of this story does not greatly disagree with mine.

### Results have stories, too

In 2010, I had the pleasure of visiting [BLAST 2010 [Wayback Machine]](https://web.archive.org/web/20121203234019/http://euclid.colorado.edu/~kasterma/blast/index.php) in Boulder, Colorado. It was a great experience (I wrote a [couple](/0023/) of [blog](/0024/) [posts](/0025/) back then). One afternoon, I was sitting somewhere on campus with [Jana Flašková](http://home.zcu.cz/~flaskova/english/) and she asked me if [idempotent ultrafilters](/0088/) could be rapid.

My initial reaction was "Of course not!". My intuition said, rapid ultrafilters are just as bad as Q-points! they have too many gaps! they can't be sums! But Jana insisted. And she was, of course, right. So let me take a step back and talk about these notions.

### P-points, Q-points and sums of ultrafilters

Coming from set theory, one of the things that initially attracted me to (and annoyed me about) [Algebra in the Stone-Čech compactification](http://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_ compactification#Addition_ on_ the_ Stone.E2.80.93.C4.8Cech_ compactification_ of_ the_ naturals) (of $\mathbb{N}$) was the fact that those [ultrafilters on $\omega$](http://en.wikipedia.org/wiki/Ultrafilter#Ultrafilters_ on_ .CF.89) studied in set theory have (almost) no relevance in the field. The reason (usually) is that those ultrafilters (for example P-points and Q-points) cannot be sums of ultrafilters -- and Algebra in the Stone-Čech compactification is all about sums of ultrafilters (well, or products if you work in an arbitrary semigroup).

This isn't terribly surprising, in the sense that almost _nothing_ is a sum of ultrafilters, i.e., it is well known that

> **Folklore** ([van Douwen](http://dx.doi.org/10.1016/0166-8641(91)90074-V)?) $ \mathbb{N}^* + \mathbb{N}^* $ is nowhere dense in $ \mathbb{N}^*$ (the Stone–Čech remainder $ \beta \mathbb{N} \setminus \mathbb{N}$).

So from a [Baire category](https://en.wikipedia.org/wiki/First_ category) point of view, you shouldn't expect any ultrafilter to be a sum of ultrafilters.

But the reason goes deeper because the argument for this topological observations resembles arguments you frequently see for P- and Q-points. In fact, let's see how you prove this folklore result:

*   consider a basic open set, i.e., take an infinite $A\subseteq \mathbb{N}$ and induce a basic open set $\hat A := \{ p \in \beta \mathbb{N}: A\in p\}$
*   thin out $A$ to an infinite $B \subseteq A$ with larger and larger gaps between the elements of $B$, i.e., such that $\lim_ {n \to \infty} b_ {n+1} - b_ n = \infty$ (where the $b_ n$ form the natural enumeration of $B$).
*   In other words, you make sure that $B$ has larger and larger gaps between its elements.
*   Then the induced open set $ \hat B $ misses all sums of free ultrafilters.

Why? Well, no sum of free ultrafilters can have a set with these kinds of increasing gaps. Instead, there will always be many small gaps. This simply is due to the natural base of a sum of ultrafilters:

*   A [sum of ultrafilters](http://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_ compactification#Addition_ on_ the_ Stone.E2.80.93.C4.8Cech_ compactification_ of_ the_ naturals) $p+q$ has a base consisting of sets of the form $$\bigcup_ {v\in V} v + W_ v$$ where $V\in p$ and all the $W_ v \in q$.

How does that base help produce small gaps?

*   Take $v_ 1 \neq v_ 2 \in V$
*   then $ W_ {v_ 1} \cap W_ {v_ 2} \in q$
*   But then $v_ 1 + (W_ {v_ 1} \cap W_ {v_ 2}) \cup v_ 2 + (W_ {v_ 1} \cap W_ {v_ 2})$ (a subset of our base set) will have infinitely pairs $v_ 1 +w, v_ 2+w$, hence infinitely many gaps of size at most $\left\vert v_ 2 - v_ 1\right\vert $.
*   In other words, no set in our base can be in a set with increasing gaps!

Ok, I drifted off topic for a minute. What you should take with you from this is that sums have sets that aren't "thin" like $B$.

### P-points, Q-points, for real this time

Now back to P-points and Q-points. Why can't they be sums of ultrafilters? Guess what? They always contain "thin" sets!

For Q-points, this is relatively easy. Just look at the set $$ \bigcup_ {n\in \omega} [10^{2n}, 10^{2n+1}).$$

or its complement, whichever is in our Q-point -- they do look very much alike. A **Q-point**, by definition, can turn any finite-to-one function into a one-to-one function on a set in the Q-point. The above partition can be viewed as the finite-to-one function answering "which interval do you lie in?". But a set where this function is one-to-one, well, such as set shares at most one point with each interval -- hence such a set has $\lim a_ {n+1} - a_ n = \infty$.

For P-points the argument is different and I hesitate to put it here -- it might do more harm than good since it's unimportant in what follows. But I guess you can decide for yourself if you'd rather skip it.

> Take a set $A$ in a P-point; let's enumerate it again naturally by $ ( a_ n : n \in \omega) $. Now define a map $ f: A \rightarrow \mathbb{N} $ by $$ f(a_ n) = (a_ {n+1} - a_ n) .$$ In other words, by the size of the gap following $ a_ n $.
>
> Since we're dealing with a **P-point**, there's an ultrafilter set $B\subseteq A$ such that $f$ restricted to $B$ is finite-to-one or constant.  
>  It can't be constant, since either $ \bigcup_ {n\in \omega} [10^{2n},10^{2n+1})$ or its complement is in our P-point. So it's finite-to-one -- and this should be enough to verify that our set $B$ has $ \lim_ {n \to \infty} b_ {n+1} - b_ n = \infty$, right?  
>  Ok, let's take a look. After finitely many steps, the differences will be larger than any prescribed bound (just be careful here, because our function $f$ compared $a_ n$ with $a_ {n+1}$, while here we compare $b_ n$ with $b_ {n+1}$ which is not the "successor" in $A$, but in $B$ -- but that isn't a problem since the "successor" in $B$ is at least as far away as the successor in $A$). (Hm... there should be an easier argument, maybe? (and less need for parantheses?))

Anway, I hope I've given some evidence to the claim that the usual crowd of set theoretically interesting ultrafilters turn out to be incompatible with the idea of a sum of ultrafilter. That's somewhat annoying, wouldn't you agree?

### Back to our story

So sitting in the shade by a pond on a sunny day in Colorado, Jana asked me this question: can idempotent ultrafilters be rapid? And I answered that I wouldn't expect there to be rapid idempotents because the set theoretic properties (rapidity in this case) never turn out to be possible for sums because they would have too many gaps. But Jana replied "yes, they have gaps -- but they do not have to have gaps everywhere!"

At this point, I should probably explain what a **rapid ultrafilter** is, shouldn't I? It's quite easy, really.

If you identity a subset $ A\subseteq \mathbb{N} $ with its natural enumeration $n\mapsto a_ n$ (as hopefully, you're willing to do at this point), a rapid ultrafilter is simply a (free) ultrafilter that happens to be a **dominating family** (in $\mathbb{N}^\mathbb{N}$), i.e., a cofinal family in the partial order $$f\leq^* g \text{ iff } f(n)\leq g(n) \text{ for all but finitely many } n.$$ (Since rapid ultrafilters are required to be free, we can drop the "all but finitely many" since we could modify our infinite sets to dominate everywhere but "almost everywhere" is the usual partial order.)

> You could try and check that Q-points are always rapid, but there's a small trick, a change of perspective, a different characterization of Q-points that might trip you up -- oh, and the reverse is [not always true](http://dml.cz/dmlcz/701258).

So you see, given any function $f:\mathbb{N} \rightarrow \mathbb{N}$, we find a set $A$ in the rapid ultrafilter, such that $f(n)<a_ n$ for all $n$ (and assuming the $a_ n$ again form the natural enumeration).

Now, I wasn't completely wrong that rapid ultrafilters must have huge gaps -- just imagine a set dominating the [Ackermann function](http://en.wikipedia.org/wiki/Ackermann_ function) or an incomputable function that dominates all computable functions!

But the point Jana was making is that even though for every function $f$ we need a set $A$ dominating $f$, it could "take a break" from dominating. That is, $a_ n$ could be much bigger than $f(n)$, say it could be bigger than $f(2^n)$ -- and suddenly $a_ {n+1}$ can be very close to $a_ n$, no need for a gap at all!

So we sat in the Colorado sun and I thought (idealizing my memory ever so slightly here) if there's any chance for a rapid idempotent ultrafilter, then we must be able to construct a strongly summabe ultrafilter that is rapid.

### Strongly summable ultrafilter FTW!

What are strongly summable ultrafilter, you ask? Well, I've written plenty about FS-sets, but it never hurts to repeat. FS-sets are simple: Take a sequence $(x_ n)_ {n\in \omega}$ in $\mathbb{N}$ and then take all finite sums of the $x_ i$ -- but no repetitions allowed! More formally,

$$ FS(x_ n) := \{ \sum_ {i\in s} x_ i : s \in [\omega]^{<\omega}, s \neq \emptyset \}.$$

Now a [_strongly summable ultrafilter_](/0026/) is an ultrafilter that has _a base of such FS-sets_, i.e., every set in the ultrafilter contains an FS-set **which is also in the ultrafilter**. The last part is really the key. The [Galvin-Glazer Theorem](/0077/) tells us that any idempotent ultrafilter has the property that any set in it, contains an FS-set -- but the FS-set will not (in general) be in the ultrafilter! So strongly summable ultrafilter are very special that way. (Another way they are special is that they were the first and still the most important type of idempotent ultrafilters whose existence is independent of ZFC.) They are the purest idempotents if you like which often makes them the simplest to deal with.

### Quick and dirty with CH

Why would I think that, if anything, I should try and build a strongly summable ultrafilter that is rapid? The reason is quite naive, really: given a function, we can choose an FS-set to dominate it with. At first, this doesn't seem obvious. Sure, the generating sequence can easily be chosen to dominate any given function -- but then all these sums come in and who knows what might happen?

Luckily, we know precisely what happens!

Imagine we have been given the generating sequence $(x_ n)$, with larger and larger gaps. The only problem for the set $FS(x_ n)$ appears after each $x_ k$ -- it is followed by the translates of $ x_ k $ by sums of elements below $ x_ k $ before we (presumably) have another big jump to $x_ {k+1}$. So yes, there's a problem -- lots of elements close together -- **but** we know how many elements are problematic before the next jump, $2^k$-many!

In other words, given some (strictly monotone) $f$ we replace it with $f \circ 2^n$ (see what I did there?). Then pick a sequence $(x_ n)_ {n\in \omega}$ dominating $f\circ 2^n$ -- lo and behold, $FS(x_ n)$ will still dominate $f$!

After this thought came up in my discussion with Jana, the initial argument was easy: just assume CH and build a strongly summable ultrafilter that is rapid by the usual transfinite induction!

### Lunch break is over

The story continues, fortunately enough. After all, the title of this post indicates that all strongly summable ultrafilters are rapid, not just that I could construct one. How did we continue?

After our little proof in the park, I went to a talk and sat down next to Andreas Blass, my supervisor at Michigan. I told him about this fun question and the initial result that under CH some strongly summable ultrafilters are rapid.

I don't remember who was giving the talk but I feel like I must apologize since I might have caused Andreas not to pay enough attention -- right after the talk Andreas told me that he'd just shown that, in fact, an important class of strongly summable ultrafilters is rapid (iirc, he showed that all stable ordered union ultrafilters are rapid, but let's not go there). This clear improvement in turn boosted my interest in re-claiming the result and later that day I found an argument that **all** strongly summable ultrafilters are rapid.

But here is a good point to stop the first post. In the second post, I will give the argument and an additional observation which proved to be far too easy.

* * *

I hope you enjoyed this a little. I think it is a common theme for small results: If you're an expert in your area (however small that area might be), there are a ton of question that you simply won't think of but nevertheless can answer relatively quickly. Sometimes, I get the feeling that I should be a little ashamed of such results. They come to quickly. There's a meme in popular culture that mathematics has to be produced "the Wiles way", in secret, laboring for years. We all know that's not accurate at all, but I think some of us prefer to leave that impression. After all, if the argument is sufficiently transparent, it's often hard to tell if took a short or a long time.

Anyway, stay tuned for part 2.

---

_Comments_

* **Andreas Blass**, 2012/04/15
  Your conjecture, that you caused me to pay insufficient attention to the next BLAST talk, is correct, at least to the extent that I don’t remember what talk that was.
  * **Peter**, 2012/04/18
    Thanks for supporting my memory somewhat on this :)
* **Andreas Blass**, 2012/04/15
  I like your direct argument that sums can’t be P-points.  As you surely know, but other readers might not, I generally view this fact as a consequence of the fact that a sum, p+q, is the limit, with respect to p, of the translates n+q of q (by finite numbers n).  A P-point, on the other hand, is never a limit point of a countable set of other ultrafilters.  (Indeed, this is the definition of “weak P-point,” and it follows immediately from the characterization of P-points in terms of countable intersections of neighborhoods in beta(N).)
 * **Peter**, 2012/04/18
 Thanks, Andreas. I agree that this is more elegant for people who know P-points well enough. I admit I simply didn’t think of it at the time of writing.
 Of course, doing it this way would mean discussing the topological definition of addition and also the fact that the $(n+q)_ {n \in \omega}$ actually are different ultrafilters — and this would have complicated things. Oh well, maybe next time :)
