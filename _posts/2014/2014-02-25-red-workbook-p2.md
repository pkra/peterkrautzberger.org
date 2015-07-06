---
layout: post
title: Red workbook, p2
date: 2014-02-25
categories:
- red workbook
- research notes archive
tags:
- central set
- dynamical system
- dynamically central
- sabine koppelberg
published: true
permalink: 0148/
---

### Source


<figure>
  <a href="/assets/2014/red_workbook-p2.jpg">
    <img alt="red workbook, p2" src="/assets/2014/red_workbook-p2.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.2
  </figcaption>
</figure>

### Transcript

*   **Koppelberg** 20\. Aug. 2006
    *   Wied. \begin{split} C \subseteq S \text{ zentral} & :\Longleftrightarrow & \exists p \in E(\beta S) \cap K(\beta S): C \in p \\\\ & \phantom{:}\Longleftrightarrow & C \text{ IP-Menge & PWS}\end{split}
*   **1\. Dyn. System**
    *   Ziel: zentral = dyn. zentral
    *   Def.: DS $(X,\varphi)$ mit $X$ kompatk, $T_ 2$, $\varphi$ Op. von S auf X (stetig in komp. $(S,X)$), schreibe einfach $s\cdot x$ statt $\varphi(s,x)$.
    *   Bsp:
        1.  $W$ ($ \to t^n$), $S \to \beta S$
        2.  $S\leq Q$, $X=2^Q$ (Prod.raumder diskreten ${0,1}$),
        *   $s\cdot x = x (q\cdot s) \forall s \in S, q\in Q, x\in X$
        *   **?** stetig & assoziativ (nachrechnen / klar)
        *   [z.B. $S=Q=W$, $shift$ -> Kap. 8 Skript]
    *   Def.
        *   Untersystem, min US, $\exists$ US min.
        *   $\beta S$ operiert auch auf $X$ (wie immer)
        *   aber **nicht** DS [Stetigkeit!)  
             a. $p\mapsto p \cdot x$ stetig, aber nicht $x \mapsto p \cdot x$!  
             b. $(p \cdot q) \cdot x = p \cdot (q \cdot z)$ gilt. (i.A.)
    *   Bsp. $Y\subseteq \beta S$ (als DS). $Y \beta S\text{-invariant} \Leftrightarrow Y \text{ Linksid. von } \beta S$
    *   $Y \text{ min. } US \Leftrightarrow Y \text{min. LID}$
*   [margin note, top]
    *   Notizen: $S_ 0={e_ 0}, e_ 0 \cdot e_ 0 = e_ 0$
    *   $S_ {i+1} = S_ i \cup {e_ {i+1}}$ mit $e_ {i+1}$ Identitaet dazu
    *   [also immer Idenitaeten adjungieren] $\Rightarrow \bigcup S_ i \equiv (\mathbb{N}, \vee)$ (sup)
*   Hawaiian earring als DS => wie sehen zentrale aus?
*   [margin note, right]
    *   Notiz?Prod. top = nur endlich viele
    *   **entweder** 0 oder 1
    *   sonst Umgebung $= {0,1}$
    *   -> "Wie $2^{\mathbb{N}}$" Stetigkeit.

### partial translation

*   **Koppelberg** 20\. Aug. 2006
    *   Repetition. \begin{split} C \subseteq S \text{ central} & :\Longleftrightarrow & \exists p \in E(\beta S) \cap K(\beta S): C \in p \\\\ & \phantom{:}\Longleftrightarrow & C \text{ IP-set & piecewise syndetic}\end{split}
*   **1\. Dynamical System** (DS)
    *   Goal: central = dynamically central
    *   Def.: DS $(X,\varphi)$ with $X$ compact, $T_ 2$, $\varphi$ Op. from S to X (cts, in compact $(S,X)$), we write $s\cdot x$ (short for $\varphi(s,x)$).
    *   Ex:
        1.  $W$ ($ \to t^n$), $S \to \beta S$
        2.  $S\leq Q$, $X=2^Q$ (with Prod.topology),
        *   $s\cdot x = x (q\cdot s) \forall s \in S, q\in Q, x\in X$
        *   **?** cts & associative (obvious)
        *   [e.g. $S=Q=W$, $shift$ -> Ch. 8 lecture notes]
    *   Def.
        *   dyn. subsystem, min. subsystem, $\exists$ min. subsystem.
        *   $\beta S$ operates on $X$ (as usual)
        *   but **not** DS [continuity!)  
             a. $p\mapsto p \cdot x$ cts, but not $x \mapsto p \cdot x$!  
             b. $(p \cdot q) \cdot x = p \cdot (q \cdot z)$ gilt. (i.A.)
    *   Example: $Y\subseteq \beta S$ (as DS). $Y \beta S\text{-invariant} \Leftrightarrow Y \text{ left ideal (LID) of } \beta S$
    *   $Y \text{ min. subsystem} \Leftrightarrow Y \text{mininmal LID}$
*   [margin note, top]
    *   Notes: $S_ 0={e_ 0}, e_ 0 \cdot e_ 0 = e_ 0$
    *   $S_ {i+1} = S_ i \cup {e_ {i+1}}$ mit $e_ {i+1}$ Identitaet dazu
    *   kepe adjoining identities => $\bigcup S_ i \equiv (\mathbb{N}, \vee)$ (sup)
    *   Hawaiian earring as DS => what do central sets look like?

### Notes

My first workbook starts likemost would -- with lecture notes.

IIRC, these notes come from series of talks Sabine Koppelberg (my PhD advisor at FU Berlin) gave over the summer 2006 to a small audience (possibly just me? I don't remember). These talks followed her lecture notes for the course "Ultrafilter, Topologie und Kombinatorik" [she gave in the previous semester](https://www.mi.fu-berlin.de/kvv/lecturer.htm?id=318) on all things $\beta S$. The content is mainly based on [Hindman, Strauss, Algebra in the Stone–Čech Compactification](http://www.degruyter.com/view/product/47147), greatly improved by Sabine's own style.

The next two pages will continue this talk and ~20 pages will follow on the subject (interrupted by exercises and other notes). The topic are dynamical systems and recurrence, the famous Bergelman-Hindman result (as indicated: central = dynamically central), some notes on thick, pieceswise syndetic and the combinatorial description of central as well as the Central Sets Theorem.

It's funny to see how very inexperienced I was, e.g., the note on the product topology -- I really didn't know that? Wow. Then again, I never took a topology course while getting my Diplom (I could have used a better advisory infrastructure).

It's also funny (and somewhat alarming) to see how many subjects came up this early. But we'll get to that...
