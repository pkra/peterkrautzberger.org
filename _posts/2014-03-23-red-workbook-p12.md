---
layout: post
title: Red workbook, p12
date: 2014-03-23 14:10:24.000000000 +01:00
categories:
- red workbook
- research notes archive
tags:
- open problems
- sums of ultrafilters
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2014-03-23 21:14:18'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
  _wpas_skip_5613678: '1'
  _wpas_skip_5613660: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

### Source

[![red workbook, p12](assets/2014-03-23-22.02.56_cropped-727x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-03-23-22.02.56_cropped.jpg)

### Transcript

*   WA $\stackrel{p = q + r}{\Longrightarrow}$ (i) $\forall k \in \mathbb{N}, W_v \in r: | W_v \cap W_v+k| < \omega$
*   [struck through] (ii) $\forall k \in \mathbb{N}: k \in V \rightarrow 2k \notin V$ ($k$ und $2k$ haben versch. $W_v$)
*   ---
*   Beweis: $ p = q+r$ beide in $\mathbb{N}^*$, $A\in p$.
    *   => $ \displaystyle A = \bigcup_{\underset{\in p}{v\in V}} v + \underset{\in r}{W_v}$ => $\exists v, k: v, v+k \in V$
        *   [ $q \in \mathbb{N}^*$]
    *   => $W_v \cap W_{v+k} =: W \in r$, also unendlich
    *   => $\underbrace{v+W} ,v+k+W \in A$
        *   => $v+k+W \in A+k$ => Beh.
*   Notiz: es gibt kofinal viele solche $k$'s! □
*   (2) Ein solches $k$ liefert mit Aufzaehlung von $A \cap A+k$
    *   eine kofinale Folge, so dass $|a_{n_k} - a_{n_j -1}| \leq k$.
    *   Also kann keine Aufzaehlung jede Schranke auf Endstuecken uebertrefeen.
*   ---
*   Gilt <= ? d.h. $p\in \mathbb{N}^* \forall A\in p: \underset{\text{unendl}}{ \{ k: A \cap A+k \text{ unendl.} \}}$
    *   => $p \in \mathbb{N}^* + \mathbb{N}^*$

### partial Translation

*   Assume to the contrary. $\stackrel{p = q + r}{\Longrightarrow}$ (i) $\forall k \in \mathbb{N}, W_v \in r: | W_v \cap W_v+k| < \omega$
*   [struck through] (uu) $\forall k \in \mathbb{N}: k \in V \rightarrow 2k \notin V$ ($k$ and $2k$ have different. $W_v$)
*   ---
*   Proof: $ p = q+r$ both in $\mathbb{N}^*$, $A\in p$.
    *   => $ \displaystyle A = \bigcup_{\underset{\in p}{v\in V}} v + \underset{\in r}{W_v}$ => $\exists v, k: v, v+k \in V$ [[since]] $q \in \mathbb{N}^*$ [[ $V$ is infinite, thus contains two elements]]
    *   => $W_v \cap W_{v+k} =: W \in r$, hence infinite
    *   => $\underbrace{v+W} ,v+k+W \subseteq A$
        *   and $v+k+W \in A+k$ => Claim.
*   Remark: there are cofinal many such $k$! □
*   (2) With such $k$ we can find an enumeration $A \cap A+k$ and some cofinal enumeration $|a_{n_k} - a_{n_j -1}| \leq k$.
    *   Hence no enumeration can exceed an arbitrary bound on end pieces
*   ---
*   Does <= hold? d.h. $p\in \mathbb{N}^* \forall A\in p: \underbrace{ \{ k: A \cap A+k \text{ infinite}\}}_{\text{infinite}}$
    *   => $p \in \mathbb{N}^* + \mathbb{N}^*$

### Notes

This finishes the attempts to solve 4.1.7 from Hindman&Strauss (successfully). Given the nice write up of the solution, I'm guessing I worked the proof out someplace else (blackboard, separate piece of paper etc). This reminds me that in the office I was working in at the time I found this wonderful stack of thick letter size paper (letter size! in Germany!). I loved writing on the paper for rough drafts, preparing talks/lecture notes etc. But it clashed with my desire to keep notebooks.

This page is extremely fascinating for me because of the final question. It's always easy to ask yourself if the reverse of a proposition holds; that's just standard. In this case, the answer should be a pretty straight forward "no"; however, I don't think I ever worked out a counterexample.

But that's not what makes this so fascinating for me. What is fascinating is that I spent a lot of time during my postdoc to solve a very similar problem (and failed) which I consider one of the most interesting questions about idempotent filters. Unfortunately, I was unable to solve the question. I don't want to go into detail here and it will take months until we get to that (a teaser never hurts, right?). It's fascinating to see that I was very nearly thinking about the very same problem this early in my PhD (and, not surprisingly, missed the actually interesting question at this point).

### Open questions

*   If $p\in \mathbb{N}^*$ and $\forall A\in p: \underbrace{ \{ k: A \cap A+k \text{ infinite}\}}_{\text{infinite}}$, does it follow that $p \in \mathbb{N}^* + \mathbb{N}^*$?
    *   Probably no -- there needs to be more additive structure, in a coherent/filter fashion; just infinite seems too weak.