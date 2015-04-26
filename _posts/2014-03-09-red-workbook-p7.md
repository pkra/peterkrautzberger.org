---
layout: post
title: Red workbook, p7
date: 2014-03-09 12:04:49.000000000 +01:00
categories:
- red workbook
- research notes archive
tags:
- central set
- minimal left ideal
- piecewise syndetic set
- thick set
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2014-03-09 19:04:49'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
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

[![red workbook, p7](assets/2014-03-09-12.44.25_cropped-709x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-03-09-12.44.25_cropped.jpg)

### Transcript

*   **Kapitel 2** Dicke Teilmengen von $S$
*   **Def**: $T\subseteq S$ dick <=> $\{ x^{-1}T : x\in S \}$ hat eDe
*   **Prop**: Aeq: (a) $T$ dick; (b) $\forall e \subseteq_e S \exists y \in S: ( y \in \bigcap_{x\in e} x^{-1} T ) \Longleftrightarrow \stackrel{\stackrel{\text{punktweise}}{\downarrow}}{e \cdot y} \subseteq T)$  
     (c) ex. $L \subseteq \widehat{T}$ (min) LID.
    *   [proof]
    *   a <=> c: $x\in S, p\in \beta S: x^{-1} T \in p \stackrel{\text{Skript}}{\Leftrightarrow} T\in x\cdot p \Leftrightarrow x\cdot p \in \widehat{T}$
    *   also $T \text{ dick} \Leftrightarrow \exists p \in \beta S: S\cdot p \subseteq \widehat{T} \stackrel{\text{stetig & closed}}{\Longleftrightarrow} \exists p \in \beta S: \beta S \cdot p \subseteq \widehat{T} \Leftrightarrow \text{Beh.}$
*   **Bem.** $A$ dick => $A$ zentral.
    *   [$A$ dick => $\exists L \text{ min. LID} \subseteq \widehat{A} \Rightarrow \exists \epsilon: E_\min \cap L \subseteq \widehat{A} \Rightarrow A \in \epsilon$.
*   **Bem.** (a) $A \subseteq (\omega, +)$ dick <=> $A$ enthaelt beliebig lange Intervalle
    *   (b) dick $\stackrel{\not \Rightarrow}{\not \Leftarrow}$ synd.
    *   [proof]
        *   Betrachte $\omega = \bigcup_{n \in \omega} I_n$, $|I_n| = n$, $0\in I_0 << I_1 << \ldots $
        *   1) $A := \bigcup_{2 \in \omega} I_{2n}, B = \bigcup_{n\in \omega} I_{2n+1} \rightarrow A, B$ dick, nicht syndetisch.
        *   2) $A = 2 \cdot \mathbb{N}$ synd, $A$ nicht dick.
    *   (c) $A \subseteq \text{ pws} \Leftrightarrow \exists g \subseteq_e S { t^{-1} \bigcup_{x \in g} x^{-1}A : t \in S} \text{ eDE} \Leftrightarrow \exists g \subseteq_e : \bigcup_{x \in g} x^{-1}A \text{ dick.}$
    *   (d) $A$ dick (pws, synd) => $x^{-1} A$ dick (pws, synd)
    *   $A$ synd => $x\cdot A$ synd.

### Translation

*   **Chapter 2** Thick subsets of $S$
*   **Definition**: $T\subseteq S$ thick <=> $ \{ x^{-1}T : x\in S \}$ has the finite intersection property (FIP)
*   **Proposition**: TFAE
    *   (a) $T$ thick;
    *   (b) $\forall e \subseteq S \text{ finite } \exists y \in S: ( y \in \bigcap_{x\in e} x^{-1} T) \Longleftrightarrow \stackrel{\stackrel{\text{pointwise}}{\downarrow}}{e \cdot y} \subseteq T)$
    *   (c) $\exists L \subseteq \widehat{T}$ (minimal) left ideal (LID).
    *   [proof of a <=> c]
        *   note: $x\in S, p\in \beta S: x^{-1} T \in p \Leftrightarrow T\in x\cdot p \Leftrightarrow x\cdot p \in \widehat{T}$
        *   therefore: $T \text{ thick} \Leftrightarrow \exists p \in \beta S: S\cdot p \subseteq \widehat{T} \stackrel{\text{continuous & closed}}{\Longleftrightarrow} \exists p \in \beta S: \beta S \cdot p \subseteq \widehat{T} \Leftrightarrow \text{ the claim}$.
*   **Remark** $A$ thick => $A$ central.
    *   proof. $A$ central => $\exists L \text{ min. LID} \subseteq \widehat{A} \Rightarrow \exists \epsilon: E_\min \cap L \subseteq \widehat{A} \Rightarrow A \in \epsilon$.
*   **Remark.**
    *   (a) $A \subseteq (\omega, +)$ thick <=> $A$ contains arbitrarily long intervals
    *   (b) thick $\not \Rightarrow$ syndetic, thick $\not \Leftarrow$ syndetic.
    *   [proof]
        *   Consider a partition $\omega = \bigcup_{n \in \omega} I_n$, $|I_n| = n+1$ with $0\in I_0 << I_1 << \ldots $
        *   1) $A := \bigcup_{2 \in \omega} I_{2n}, B = \bigcup_{n\in \omega} I_{2n+1} \rightarrow A, B$ thick, not syndetic.
        *   2) $A = 2 \cdot \mathbb{N}$ syndetic, $A$ not thick.
    *   (c) $A \subseteq \text{ piecewise syndetic (pws)} \Leftrightarrow \exists g \subseteq S \text{ finite } { t^{-1} \bigcup_{x \in g} x^{-1}A : t \in S} \text{ eDE} \Leftrightarrow \exists g \subseteq S \text{ finite} : \bigcup_{x \in g} x^{-1}A \text{ thick.}$
    *   (d) $A$ thick (pws, synd) => $x^{-1} A$ thick (pws, synd)
    *   $A$ synd => $x\cdot A$ synd.

### Notes

Same lecture, new chapter. This is the first of two pages on the basics of thick sets.

"Thick" is an odd notion. It always seems a little made up to me, something stated after the fact (after asking "what does a set look like that covers a left ideal?"). On the other hand, for $\omega$, I can imagine that the notion "a set that contains arbitrarily long intervals" might actually come up independently of ultrafilters. However, I don't know the history of the notion, so I'm probably wrong here (if you know anything about this, please leave a comment).

A technical note. I realized that using the section heading "partial translation" was a bit misleading; as would be "augmented/corrected translation". In fact, I do both -- leave some things out (negligible comments etc), clear up the layout, and add corrections (e.g. $|I_n| = n+1$ instead of $n$). So I will just call it "translation" from now on.