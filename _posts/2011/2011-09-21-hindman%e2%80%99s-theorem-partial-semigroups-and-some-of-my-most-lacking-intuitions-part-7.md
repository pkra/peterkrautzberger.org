---
layout: post
title: Hindman’s Theorem, partial semigroups and some of my most lacking intuitions
  (part 7)
date: 2011-09-21 21:27:16.000000000 +02:00
categories:
- expository
- research
tags:
- adequate partial semigroup
- partial semigroup
- Ramsey theory
- semigroups
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown: '1'
  dsq_thread_id: '594963075'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

> Hm, my writing process is slowing down a little (and on top of that I forgot to publish this draft) and there are other posts that I really want to write. I'm not really sure how I will proceed, but let's keep pushing a little further for now. [Last time](http://boolesrings.org/krautzberger/2011/09/15/hindman%E2%80%99s-theorem-partial-semigroups-and-some-of-my-most-lacking-intuitions-part-6/) I tried to build a bridge from central sets via idempotent ultrafilters back to partial semigroups. This is one of the key points of this series: connecting central sets and partial semigroups.

## Back to partial semigroups

Here we are, lots of great results in our back, yet missing the perfect correspondence between Ramsey-type theorems and partition regular sets (or put differently, ultrafilters). I started out with the notion of (adequate) partial semigroups and now, I think, is the time to return to it.

I believe that a notion of partial semigroup could help solve this mysterious question. The goal of this entire series is to investigate a potential relationship between partial semigroups and central sets.

### Minimal partial semigroups

[I tried to convince you earlier](http://boolesrings.org/krautzberger/2011/08/25/hindman%E2%80%99s-theorem-partial-semigroups-and-some-of-my-most-lacking-intuitions-part-3/) that FS-sets are partial semigroups. They are, in fact, the minimal partial subsemigroups of $(\mathbb{N},+)$. Why is this? It's by a rather simple induction argument

*   Say $(S,\cdot)$ is an adequate partial semigroup.
*   Take any $s_0\in S$.
*   Inductively, $FP(s_0,\ldots, s_n)$ has all products defined.
*   Pick $s_{n+1} \in \bigcap_{t \in FP(s_0,\ldots,s_n)} \sigma(t)$ ([remember those $\sigma(t)$?](http://boolesrings.org/krautzberger/2011/08/24/hindman%E2%80%99s-theorem-partial-semigroups-and-some-of-my-most-lacking-intuitions-part-2/)) -- since $S$ was a partial semigroup, this intersection will never be empty.
*   Then all finite products of the $(s_i : i\in \omega)$ are defined.
*   In other words, $FP(s_i) \subseteq S$ in the fullest sense.

I don't think I ever mentioned that "to include an FS-set" (or FP-set) has an established abbreviation; such sets are called _IP-set_.

> Most people will find it important to point out that "IP" does not abbreviate "idempotent" (for idempotent ultrafilters) but was originally meant to abbreviate "infinite parallelepiped" (which makes sense if you think of FS-sets in vector spaces until you realize that this still means "includes an infinite parallelepiped").

So it seems that we could add some general nonsense by saying "partial semigroup" instead of "IP-set/includes and FS-set". Unfortunately, this is not the case. Even though every partial semigroup contains and FS-set, not every set that contains an FS-set has a (compatible) partial semigroup structure.

> Oh dear, I just notice something and I hope I haven't made this mistake too often. I'm talking about FS-sets and $(\mathbb{N},+)$ here. So when I write "partial semigroup" for $A\subseteq \mathbb{N}$, then I mean "partial subsemigroup" in the sense that the usual addition restricted to $A$ forms a partial subsemigroup (as is the case for FS-sets). Oh well, I guess this series is getting too long after all and I'm beginning to loose track of what I've already written. I hope you might just enjoy reading it anyhow.

## Weak partial semigroups

I think the key to partial semigroups will be to weaken the notion further. I think I will call those "weak partial semigroups" (even though I'd love to call them "very partial semigroups"...).

> What I'm about to do is, I think, somewhat bad style. Let me alleviate this by some comments. Of course, the ideas in this series do not come out of nowhere. They stem from my studies in this area over the last 5 years (gee, has it really been that long?). Because of this, they are based on structures that you can frequently encounter in this area. So if you know the research area you will hopefully find all of this very familiar and think "why does he make such a fuss about this standard thing?". That's great! And if you're not, rest assured there's a method to my madness. I'm not sure I will get there anytime soon, but there's still hope.

In my silly demonstration above that partial semigroups contain FS-sets you may have noticed that we didn't really see strong associativity -- especially, since we're starting with a full semigroup anyway and have no worries about associativity.

What was however crucial is finite intersection property. And that's already all there is to this "new" notion.

> **Weak partial (sub)semigroup** If $(S,\cdot)$ is a semigroup, then $A\subseteq S$ is a _weak partial subsemigroup_, if the restriction of the partial semigroup operation to $A$ is adequate, i.e., the sets of the form  
>  $$ \sigma_A(a) := \{ b\in A : a\cdot b \in A\}$$ generate a filter.
> 
> > Note: I just made up that $\sigma_A(a)$ notation to possibly help your understanding by making the connection to $\sigma(a)$.. I will get to a more classical formulation in a second.

In other words, the operation restricted to (a partial operation on) $A$ is, to some extent, a partial semigroup. We might not have the luxury of full associativity: a, b,c, abc, ab might be in such an A, but not bc (this actually happens in real life btw) -- so we cannot compare $a(bc)$ with anything, in particular not with $(ab)c$.

But for any $a$ we will find many (a filter set of) $b$'s and for each of those $b$'s we will find a filter set of $c$'s such that $a,b,c,ab,bc, abc \in A$. That's pretty good, don't you think?

> I'm not sure what I'll do next. There are many paths to choose at this point. I'm not sure which one is best and I might just settle for the one that seems most easily self-contained. But don't worry even if the next post is on a different topic.