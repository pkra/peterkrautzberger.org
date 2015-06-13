---
layout: post
title: Red workbook, p14
date: 2014-03-26
categories:
- red workbook
- research notes archive
tags:
- collectionwise piecewise syndetic
- collectionwise thick
published: true
permalink: 0160/
---

### Source


<figure>
  <a href="/assets/2014/red_workbook-p14.jpg">
    <img alt="red workbook, p14" src="/assets/2014/red_workbook-p14.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.14
  </figcaption>
</figure>

### Transcript

*   Beweis: (a) => (b): $\mathfrak{B} \subseteq q \Rightarrow \mathfrak{D} = \{ D_e : e \in [ \mathfrak{B} ]^{< \omega} \} \subseteq q$
    *   Nimm $g_e \in [S^{< \omega}]$ mit $\beta S \cdot q \subseteq \bigcup_{x \in g_e} \widehat{ x^{-1} D_e} = \widehat{C_e}$
    *   [ Verfeinerung von pws: $A$ pws $\in q \in K(\beta S) \Rightarrow \exists e \in [S^{<\omega}]: \beta S \cdot q \subseteq \bigcup x^{-1} A$]
    *   $\Rightarrow \beta S \cdot q \subseteq \bigcap_{C \in \mathfrak{C}} \widehat{C_e} = Y_e \stackrel{3.3}{\Rightarrow} $ Beh.
*   (b) => (a): seien $g_e, C_e, \mathfrak{C}$ wie in (b).
    *   Nimm $p \in \beta S$ mit $L := \beta S \cdot p \subseteq Y_{\mathfrak{C}}$ oBdA $p\in K(\beta S)$.
    *   $\Rightarrow p\in L$.
    *   Fuer $e \in [\mathfrak{B}]^{<\omega}: p \in \widehat{C_e} = \bigcup_{x\in g_e} \widehat{x^{-1} D_e}$
    *   $\Rightarrow \exists x_e \in g_e: p \in \widehat{ x_e^{-1}D_e}$.
*   ((?) wieso eDe?) Nimm $w\in \beta S$ mit $S_e := \{ x_f : f \supseteq e, f \in [ \mathfrak{B}]^{<\omega} \} \underset{?}{\in} \omega (\forall e \in \beta S)$
*   Setze $q = w \cdot p \Rightarrow q \in \beta S \cdot p \subseteq K(\beta S)$ und
*   es ist $\mathfrak{B} \subseteq q$ [$B\in \mathfrak{B}$ zeige: $B\in q = w\cdot p$. Aber $e:{B} \in [\mathfrak{B}]^{\omega}$
    *   $D_e = B, S_e \in \omega$; Fuer alle $f\supseteq e: x_f \cdot p \in \widehat{D_f}$
    *   $\widehat{D_f} \subseteq \widehat{D_e} = \widehat{B} \Rightarrow S_e \cdot p \subseteq \widehat{B}$
    *   $\Rightarrow w \cdot p \in \widehat{B}$]
*   Also folgt die Behauptung.□

### partial Translation

*   Proof:
*   (a) => (b):
    *   $\mathfrak{B} \subseteq q \Rightarrow \mathfrak{D} = \{ D_e : e \in [ \mathfrak{B} ]^{< \omega} \} \subseteq q$
    *   Take $g_e \in [S^{< \omega}]$ with $\beta S \cdot q \subseteq \bigcup_{x \in g_e} \widehat{ x^{-1} D_e} = \widehat{C_e}$
        *   [$A$ pws, $A \in q \in K(\beta S) \Rightarrow \exists e \in [S^{<\omega}]: \beta S \cdot q \subseteq \bigcup_{x\in e} x^{-1} A$]
    *   $\Rightarrow \beta S \cdot q \subseteq \bigcap_{C \in \mathfrak{C}} \widehat{C_e} = Y_e \stackrel{3.3}{\Rightarrow} $ the claim.
*   (b) => (a): let $g_e, C_e, \mathfrak{C}$ as in (b).
    *   Then take $p \in \beta S$ mit $L := \beta S \cdot p \subseteq Y_{\mathfrak{C}}$; without loss $p\in K(\beta S)$.
    *   $\Rightarrow p\in L$.
    *   For $e \in [\mathfrak{B}]^{<\omega}: p \in \widehat{C_e} = \bigcup_{x\in g_e} \widehat{x^{-1} D_e}$
    *   $\Rightarrow \exists x_e \in g_e: p \in \widehat{ x_e^{-1}D_e}$.
    *   Take $w\in \beta S$ with $S_e := \{ x_f : f \supseteq e, f \in [ \mathfrak{B}]^{<\omega} \} \in \omega (\forall e \in \beta S)$
    *   Now define $q = w \cdot p \Rightarrow q \in \beta S \cdot p \subseteq K(\beta S)$ and
    *   since $\mathfrak{B} \subseteq q$
        *   [$B\in \mathfrak{B}$ show: $B\in q = w\cdot p$. But $e:{B} \in [\mathfrak{B}]^{\omega}$
        *   $D_e = B, S_e \in \omega$; For all $f\supseteq e: x_f \cdot p \in \widehat{D_f}$
        *   $\widehat{D_f} \subseteq \widehat{D_e} = \widehat{B} \Rightarrow S_e \cdot p \subseteq \widehat{B}$
        *   $\Rightarrow w \cdot p \in \widehat{B}$]
    *   The claim follows.

### Notes

This page contains the proof of Theorem 3.4 of the previous part (I guess I should've included that yesterday). I can't really make much of it. It's the dull of writing up a new notion. But if you look closer, you might stumble over a few details (as I did when I took these notes). Writing this up just now I find the choice of $w$ quite striking.
