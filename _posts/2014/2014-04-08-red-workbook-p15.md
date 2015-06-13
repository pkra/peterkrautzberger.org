---
layout: post
title: Red workbook, p15
date: 2014-04-08
categories:
- red workbook
- research notes archive
tags:
- "*-tree"
- central
- collectionwise piecewise syndetic
published: true
permalink: 0161/
---

### Source

<figure>
  <a href="/assets/2014/red_workbook-p15-1.jpg">
    <img alt="red workbook, p15-1" src="/assets/2014/red_workbook-p15-1.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.15, part 1
  </figcaption>
</figure>

<figure>
  <a href="/assets/2014/red_workbook-p15-2.jpg">
    <img alt="red workbook, p15-2" src="/assets/2014/red_workbook-p15-2.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.15, part 2
  </figcaption>
</figure>

### Transcript

#### Left page

*   Forcing möglich?
*   Für strongly summable? kaputtmachen???????
*   Bem (* [[circled]]) [[boxed]]

#### Right page

*   [4.] Eine "elementare" Charakterisierung von "zentral"
*   4.1 Def. $A\subseteq S$ Setze
    *   (a) $T_ A = \{ (a_ 0, \ldots, a_ {n-1} ) \in S^{< \omega} : FP(a_ i)_ {i=0}^{n-1} \subseteq A \}$
    *   $T_A$ Teilbaum von $S^{< \omega}$.
    *   Notiz:
        *   $A$ IP <=> $T_A$ hat unendlichen Zweig
        *   tatsaechlich bei konstruktion von IP-Menge zeigt man,
        *   dass es sehr viele unendliche Zweige gibt
        *   SK: sogar perfekter Baum
    *   (b) Fuer $R \subseteq S^{<\omega}$ Teilbaum, $r \in R$ setze
        *   $N_r := N_r^R := \{ a \in S : r^a \in R \} (\subseteq S)$ [[a diagram: the tree $R$ and the set of successors $N_r$]]
*   4.2 Satz [14.25 in HS]
    *   Fuer $A\subseteq S$ aequivalent: (a) $A$ zentral
        *   (b) $\exists R \subseteq T(A)$ Teilbaum mit (2) $\{ N_r^R: r \in R\}$ cwpws
            *   (1) $r\in R, a \in N_r \Rightarrow a\cdot N_{r \hat{} a} \subseteq N_r$
        *   Solches $R$ heisst $\star$-tree [in HS].

### partial Translation

#### Left page

*   Forcing possible?
*   For strongly summable? destroying???????

#### Right page

*   [4.] An "elementary" Characterization of "central"
*   4.1 Definition. For $A\subseteq S$ define:
    *   (a) $T_ A = \{ (a_ 0, \ldots, a_ {n-1} ) \in S^{< \omega} : FP(a_i)_ {i=0}^{n-1} \subseteq A \}$
    *   $T_A$ subtree of $S^{< \omega}$.
    *   Note:
        *   $A$ IP <=> $T_A$ includes an infinite branch
        *   in fact, in the construction of IP-set one shows that there are many infinite branches
        *   Sabine Koppelberg: in fact, a perfect subtree.
    *   (b) For $R \subseteq S^{<\omega}$ subtree, $r \in R$ define
        *   $N_r := N_r^R := \{ a \in S : r^a \in R \} (\subseteq S)$ [[the successor set]]
*   4.2 Theorem [14.25 in HS]
    *   For $A\subseteq S$ TFAE:
        *   (a) $A$ central
        *   (b) $\exists R \subseteq T(A)$ subtree with
            *   (2) $\{ N_r^R: r \in R\}$ cwpws (collectionwise piecewise syndetic)
            *   (1) $r\in R, a \in N_r \Rightarrow a\cdot N_{r \hat{} a} \subseteq N_r$
        *   Such $R$ is called $\star$-tree [in HS].

### Notes

We're getting to some serious results here. The "tree characterization" of centrality is, I think, not known (or not appreciated) widely enough. It might be a lot to wrap your mind around as a student but this might be one of the better ways of providing some insights into the notion of cwpws sets.

This page is very amusing. The random note on destroying strongly summable ultrafilters is what occupied a large part of my postdoctoral research. Apparently it took me a while to realize this is an interesting question. Come to think of it, Francois and I also spent quite a bit of time on the tree characterization; makes me want to skip ahead to a postdoc notebook...
