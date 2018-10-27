---
layout: post
title: Red workbook, p7
date: 2014-03-09
categories:
- red workbook
- research notes archive
tags:
- central set
- minimal left ideal
- piecewise syndetic set
- thick set
published: true
permalink: 0153/
latex: true
---

### Source

<figure>
  <a href="/assets/2014/red_workbook-p7.jpg">
    <img alt="red workbook, p7" src="/assets/2014/red_workbook-p7.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.7
  </figcaption>
</figure>

### Transcript

* **Kapitel 2** Dicke Teilmengen von $S$
* **Def**: $T\subseteq S$ dick <=> $\{ x^{-1}T : x\in S \}$ hat eDe
* **Prop**: Aeq: (a) $T$ dick; (b) $\forall e \subseteq_ e S \exists y \in S: ( y \in \bigcap_ {x\in e} x^{-1} T ) \Longleftrightarrow \stackrel{\stackrel{\text{punktweise}}{\downarrow}}{e \cdot y} \subseteq T)$
     (c) ex. $L \subseteq \widehat{T}$ (min) LID.
    * [proof]
    * a <=> c: $x\in S, p\in \beta S: x^{-1} T \in p \stackrel{\text{Skript}}{\Leftrightarrow} T\in x\cdot p \Leftrightarrow x\cdot p \in \widehat{T}$
    * also $T \text{ dick} \Leftrightarrow \exists p \in \beta S: S\cdot p \subseteq \widehat{T} \stackrel{\text{stetig & closed}}{\Longleftrightarrow} \exists p \in \beta S: \beta S \cdot p \subseteq \widehat{T} \Leftrightarrow \text{Beh.}$
* **Bem.** $A$ dick => $A$ zentral.
    * [$A$ dick => $\exists L \text{ min. LID} \subseteq \widehat{A} \Rightarrow \exists \epsilon: E_ \min \cap L \subseteq \widehat{A} \Rightarrow A \in \epsilon$.
* **Bem.** (a) $A \subseteq (\omega, +)$ dick <=> $A$ enthaelt beliebig lange Intervalle
    * (b) dick $\stackrel{\not \Rightarrow}{\not \Leftarrow}$ synd.
    * [proof]
        * Betrachte $\omega = \bigcup_ {n \in \omega} I_ n$, $\left\vert I_ n\right\vert  = n$, $0\in I_ 0 << I_ 1 << \ldots $
        * 1) $A := \bigcup_ {2 \in \omega} I_ {2n}, B = \bigcup_ {n\in \omega} I_ {2n+1} \rightarrow A, B$ dick, nicht syndetisch.
        * 2) $A = 2 \cdot \mathbb{N}$ synd, $A$ nicht dick.
    * (c) $A \subseteq \text{ pws} \Leftrightarrow \exists g \subseteq_ e S { t^{-1} \bigcup_ {x \in g} x^{-1}A : t \in S} \text{ eDE} \Leftrightarrow \exists g \subseteq_ e : \bigcup_ {x \in g} x^{-1}A \text{ dick.}$
    * (d) $A$ dick (pws, synd) => $x^{-1} A$ dick (pws, synd)
    * $A$ synd => $x\cdot A$ synd.

### Translation

* **Chapter 2** Thick subsets of $S$
* **Definition**: $T\subseteq S$ thick <=> $ \{ x^{-1}T : x\in S \}$ has the finite intersection property (FIP)
* **Proposition**: TFAE
    * (a) $T$ thick;
    * (b) $\forall e \subseteq S \text{ finite } \exists y \in S: ( y \in \bigcap_ {x\in e} x^{-1} T) \Longleftrightarrow \stackrel{\stackrel{\text{pointwise}}{\downarrow}}{e \cdot y} \subseteq T)$
    * (c) $\exists L \subseteq \widehat{T}$ (minimal) left ideal (LID).
    * [proof of a <=> c]
        * note: $x\in S, p\in \beta S: x^{-1} T \in p \Leftrightarrow T\in x\cdot p \Leftrightarrow x\cdot p \in \widehat{T}$
        * therefore: $T \text{ thick} \Leftrightarrow \exists p \in \beta S: S\cdot p \subseteq \widehat{T} \stackrel{\text{continuous & closed}}{\Longleftrightarrow} \exists p \in \beta S: \beta S \cdot p \subseteq \widehat{T} \Leftrightarrow \text{ the claim}$.
* **Remark** $A$ thick => $A$ central.
    * proof. $A$ central => $\exists L \text{ min. LID} \subseteq \widehat{A} \Rightarrow \exists \epsilon: E_ \min \cap L \subseteq \widehat{A} \Rightarrow A \in \epsilon$.
* **Remark.**
    * (a) $A \subseteq (\omega, +)$ thick <=> $A$ contains arbitrarily long intervals
    * (b) thick $\not \Rightarrow$ syndetic, thick $\not \Leftarrow$ syndetic.
    * [proof]
        * Consider a partition $\omega = \bigcup_ {n \in \omega} I_ n$, $\vert I_ n\vert  = n+1$ with $0\in I_ 0 << I_ 1 << \ldots $
        * 1) $A := \bigcup_ {2 \in \omega} I_ {2n}, B = \bigcup_ {n\in \omega} I_ {2n+1} \rightarrow A, B$ thick, not syndetic.
        * 2) $A = 2 \cdot \mathbb{N}$ syndetic, $A$ not thick.
    * (c) $A \subseteq \text{ piecewise syndetic (pws)} \Leftrightarrow \exists g \subseteq S \text{ finite } { t^{-1} \bigcup_ {x \in g} x^{-1}A : t \in S} \text{ eDE} \Leftrightarrow \exists g \subseteq S \text{ finite} : \bigcup_ {x \in g} x^{-1}A \text{ thick.}$
    * (d) $A$ thick (pws, synd) => $x^{-1} A$ thick (pws, synd)
    * $A$ synd => $x\cdot A$ synd.

### Notes

Same lecture, new chapter. This is the first of two pages on the basics of thick sets.

"Thick" is an odd notion. It always seems a little made up to me, something stated after the fact (after asking "what does a set look like that covers a left ideal?"). On the other hand, for $\omega$, I can imagine that the notion "a set that contains arbitrarily long intervals" might actually come up independently of ultrafilters. However, I don't know the history of the notion, so I'm probably wrong here (if you know anything about this, please leave a comment).

A technical note. I realized that using the section heading "partial translation" was a bit misleading; as would be "augmented/corrected translation". In fact, I do both -- leave some things out (negligible comments etc), clear up the layout, and add corrections (e.g. $\vert I_ n\vert  = n+1$ instead of $n$). So I will just call it "translation" from now on.
