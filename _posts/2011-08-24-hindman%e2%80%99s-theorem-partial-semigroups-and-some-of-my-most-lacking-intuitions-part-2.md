---
layout: post
title: Hindman’s Theorem, partial semigroups and some of my most lacking intuitions
  (part 2)
date: 2011-08-24 12:21:27.000000000 +02:00
categories:
- expository
- research
tags:
- Hindman's Theorem
- Neil Hindman
- partial semigroups
- partition regular
- Ramsey theory
- semigroups
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown: '1'
  dsq_thread_id: '593133177'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

> Yesterday I finally [started this short series](http://boolesrings.org/krautzberger/2011/08/23/hindmans-theorem-partial-semigroups-and-some-of-my-most-lacking-intuitions-part-1/) with some small thoughts regarding partial semigroups. If you don't remember, all I did yesterday was to explain why semigroups are not, in general, partition regular using a simple partition of $\mathbb{N}$. I was trying to keep your hopes up by pointing out Schur's Theorem.

## So how far can we push?

There are essentially two paths to choose from here. The next step in a decent text book would probably tell you about [van der Waerden's Theorem](http://en.wikipedia.org/wiki/Van_der_Waerden's_theorem) (1927), [Rado's Theorem](http://en.wikipedia.org/wiki/Rado%27s_theorem_(Ramsey_theory)) (1970) or the [Folkman-Rado-Sanders Theorem](http://en.wikipedia.org/wiki/Folkman's_theorem) (Sanders being the first to publish it in his PhD thesis (<del datetime="2012-08-23T21:14:57+00:00">1969</del>1968, see Jon Sanders's comment below) but usually the last to be mentioned because Folkman had some "private communication" with Graham and Rothschild).

The first two theorems lead down a different path, towards partition regular matrices which, from the point of view of Schur's Theorem, could be described as "getting more linear combinations". The last one on the other hand could be described as "getting some algebraic closure" and this is where we came from in the last post. But I would like to skip ahead or else we'll still be sitting here <del datetime="2011-08-24T13:25:58+00:00">tomorrow</del> next week.

Let me get back to talking to you about [Hindman's Theorem](http://en.wikipedia.org/wiki/Hindman%27s_theorem#Hindman.27s_Theorem). Skipping its curious history, let's see where Schur left us. We have sums of two elements -- very often. But what about three? Or any finite number? Well, we know that repetition is a problem -- after all, that's what prevented subsemigroups from being a partition regular notion. So we have to drop repetitions. What does that leave us with? Distinct sums.

> **FS-set** Given a sequence $(x_n: n<N)$ (with $N \leq \omega$, but we're really intersted in $\omega$) let's denote the set of distinct finite sums of elements from this sequence by $FS(x_n)$, i.e., $$FS(x_n) = \{ x_{i_0} + \ldots x_{i_k} : i_0, \ldots i_k<N \mbox{ pairwise different} \}.$$

So we collect all results of summing elements from our sequence without doing any repetitions. Fair enough. This seems to be as far as we can get without getting at an actual subsemigroup.

If we're really trying to look at this structure, we should do a reality check. How rich are such sets? Well, first of all, $FS(2^n) = \mathbb{N}$, so, yeah, they can be pretty rich. On the other hand, you have the potential of huge gaps -- $FS(10^n)$ has $1, 10, 11, 100, 101, 110, 111, 1000$ and so forth -- immense gaps will appear, but at each new element from the sequence, we'll see a large cluster of numbers at relatively close distance. That's not bad given our counterxample for subsemigroups.

The surprising thing is that this property -- to contain an FS-set -- is actually partition regular. And this is exactly what Hindman showed in 1974.

> **Hindman's Theorem** FS-sets are partition regular.

What a great theorem! All we had to do was drop repetitions and we immediately get partition regularity. That's a good deal. And yet, it begs the question: can we formalize the kind of algebraic closure appearing in an FS-set?

## Is there an easy way to describe FS-sets?

The thing with FS-sets is that they look awefully like subsemigroups. You can almost always add two elements together. And not just those from the underlying sequence. Given an element of an FS-set, all but finitely many elements for the underlying sequence can be added to it.

But also when we have two different sums chances aren't too bad that we can add them -- the only restriction is that the two sums must have been built from pairwise different elements from the underlying sequence.

Thankfully, we can describe this messy business efficiently by introducing one of my favorite and one of the most important structures: $\mathbb{F}$.

What is $\mathbb{F}$? Following other researchers (especially [Andreas Blass](http://www.math.lsa.umich.edu/~ablass/)) I will denote the finite non-empty subsets of $\omega$ by $\mathbb{F}$.

> $$ \mathbb{F} := [\omega]^{<\omega} \setminus \{ \emptyset \}.$$

Why on earth would I introduce a new notation for such a standard set-theoretic object, you ask? Well, mostly because I didn't -- others did. But it makes sense becaus our interest is in a certain algebraic structure on $\mathbb{F}$. (Personally, I also like the blackboard boldface F -- it's pretty.)

So what structure? There already exists a very well known and important algebraic structure on $[\omega]^{<\omega}$ -- the group operation of symmetric difference $\Delta$. This operation gives us the countable Boolean group: every element is its own inverse, i.e., we're talking about $\otimes_{i \in\omega} \mathbb{Z}_2$ here.

On the other hand, $[\omega]^{<\omega}$ has a very (I mean **_very_**) natural semigroup operation: taking the union, $\cup$. This operation is, of course, as far away from being a group operation as seems possible; every element is idempotent!

It's not historically relevant (as far as I know), but the part that is interesting here is the "intersection" of these operations, i.e., when these two different operations agree.

Yes, I am making all this fuss just to talk about disjoint unions. You'll say, that's ridiculous! Disjoint unions are _easy_! Well, you're right. And that's exactly the point, actually. Addition is such a pain! It is subtle and messy (all that carrying over). Disjoint unions are soooo much easier, right?

> (Right. Just you wait.)

So what about disjoint unions? Isn't that a pretty tough restriction? If I was trying to do the usual mathematicians-love-obfuscation thing, I could probably make big deal out of the fact that restricting our operations to disjoint unions eliminates all multiples (which is, like, super important, because I was, like, talking about that all the time, right??? -- that is, of course, getting it backwards, so don't think that way, please!).

The thing that is interesting is that disjoint unions still have a kind of associativity law (warning: I'm going to use $\cdot$ now -- don't freak out -- but we're not <del datetime="2011-08-24T14:33:02+00:00">in Kansas</del> in $(\mathbb{N},+)$ anymore)

> $$ (a \cdot b) \cdot c = a \cdot (b \cdot c)$$  
>  in the sense that, if one side is defined, so is the other and they are equal.

Of course, "they are equal" is not the point here -- after all, we have restricted a (semi)group operation -- so for us the key should be: if one side is defined then so is the other. In other words, our operation is relatively rich.

This is what [Bergelson, Blass and Hindman](http://www.math.lsa.umich.edu/~ablass/bbh.pdf) dubbed "strong associativity" for in their seminal paper. Altogether, a set with a partial operation satisfying strong associativity, they called a **_partial semigroup_**.

We have a slight problem though: the empty operation would vacuously be strongly associative, so "rich" was really an exaggeration. That's why you'd always want to assume that there's really something going on. A pretty natural richness condition (which disjoint unions have) is the following.

> Given finitely many elements, there's another one that can be multiplied to any of them.

We might not be able to multiply two elements, but at least each element has some of elements it can be multiplied with.

What we're looking at is simply a finite-intersection-property. Namely, the family of sets "can be multiplied with $x$" has the finite intersection property. (What we really want is the infinite finite intersection property, but that's not too important right now.) For historical reference, if we have this, it's called a _adequate partial semigroup_ -- and we're not interested in anything else.

> Technically, we will need to say from where we multiply. I usually prefer "from the right" and write the set as $\sigma(x) := \{ y : x\cdot y \mbox{ defined } \}$.

## Are you messing with me (again)?

After I have forced this new notion upon you, here's the thing: every partial semigroup can be extended to a semigroup. All you have to do is to add one element, say $U$, which takes all the "undefined" values and otherwise acts as a multiplicative zero, i.e., $a \cdot U = U \cdot a = U$. It's easy to check that, thanks to strong associativity, this operation is really associative.

What's the point then? Partial semigroups have a huge advantage: they allow us to focus on the part of our algebraic semigroup structure that is important for us. Just like disjoint unions are the important structure for $\mathbb{F}$ because they eliminate, e.g., the irrelevant idempotency of individual elements under $\cup$. In addition, we will see that partial subsemigroups are much more abundant and, in my eyes, one key for understanding Hindman's Theorem and its generalizations.

In the next part I will try to convince you that partial semigroups are indeed a good answer to the question "What kind of of structure is flexible enough to be survive partitioning"?