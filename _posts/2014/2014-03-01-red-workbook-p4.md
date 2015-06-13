---
layout: post
title: Red workbook, p4
date: 2014-03-01
categories:
- red workbook
- research notes archive
tags:
- minimal ideal
- uniformly recurrent
published: true
permalink: 0150/
---

### Source

<figure>
  <a href="/assets/2014/red_workbook-p4.jpg">
    <img alt="red workbook, p4" src="/assets/2014/red_workbook-p4.jpg"/>
  </a>
  <figcaption>
    Red Workbook, page 4
  </figcaption>
</figure>

### Transcript

*   (a)=> (b)
    *   $U\in \mathfrak{U}(y)$, $R(y,U)$ synd, $S = \bigcup_{t\in F_u} t^{-1}R(y,U)$
    *   Sei $v\in L$ => $\exists t_U: t_U^{-1} R(y,U) \in v \Rightarrow t_u \cdot v \in \widehat{R(y,U)}$
    *   Nimm $p\in L$ Limes von $\underbrace{ \{ t_U \cdot v: U\in \mathfrak{U}(y) \}}_{\text{Netz bzg} (\mathfrak{U}(y), \supseteq) \stackrel{L \text{ kompakt}}{\Rightarrow} \exists \text{ Limes}} \subseteq L$
    *   $\Rightarrow p\cdot y = y$
        *   $t_u \cdot v \cdot y \in U, t_u \cdot v \rightarrow p \Rightarrow p\cdot y = y$
*   (f) => (a)
    *   $L \cdot y$ ist min. US [!] (abg. klar; US klar; jeder Orbit enhaelt $y$)
*   (e) => (a)
    *   $y\in M = \beta S \cdot y \text{ min., } y = p \cdot y \Rightarrow \exists L' \text{min. LID}: L' \cdot y \subseteq M \text{ US}$
    *   $\Rightarrow L' = M \ni y \Rightarrow$ wie (b)=>(e) die Beh.
    *   [Rest einfach bis trivial]
*   [**Corollar** $x$ prox $y$ => $\exists L \text{ min LID} \forall p \in L: px = py$
    *   Bew: $M = \{ p \in \beta S : px = py \} \neq \emptyset, MLID$ => Beh. ]
*   **Corollar** $x$ prox $y$, $y$ unif. rek. => ex $\epsilon \in E_{\min}(\beta S): \epsilon x = y (= \epsilon y)$
    *   "<=" Cor & Satz zuvor
    *   "=>" Cor -> L -> (Satz(e)) $\epsilon$ wirkt wie $id$ auf $y$.
*   **Corollar**/Notiz: $y$ unif. <=> $\forall \epsilon \in E_{\min}(\beta S): \epsilon y = y$.
*   {Mittwoch 10 Uhr]

### partial Translation

*   (a)=> (b)
    *   $U\in \mathfrak{U}(y)$, $R(y,U)$ syndetic => $S = \bigcup_{t\in F_u} t^{-1}R(y,U)$
    *   Let $v\in L$ => $\exists t_U: t_U^{-1} R(y,U) \in v \Rightarrow t_u \cdot v \in \widehat{R(y,U)}$
    *   Let $p\in L$ be the limit of $\underbrace{ \{ t_U \cdot v: U\in \mathfrak{U}(y) \}}_{\text{ is a net with respect to} (\mathfrak{U}(y), \supseteq) \stackrel{L \text{ compact}}{\Rightarrow} \exists \text{ limit }} \subseteq L$
    *   $\Rightarrow p\cdot y = y$
        *   $t_u \cdot v \cdot y \in U, t_u \cdot v \rightarrow p \Rightarrow p\cdot y = y$
*   (f) => (e)
    *   $L \cdot y$ is a minimal subsystem
        *   obviously closed and a subsystem. Also, every orbit contains $y$.
*   (e) => (a)
    *   $y\in M = \beta S \cdot y \text{ min.} => \exists p: y = p \cdot y \Rightarrow \exists L' \text{ minimal LID}: L' \cdot y \subseteq M \text{ subsystem}$
    *   $\Rightarrow L' = M \ni y$
    *   now proceed as in (b)=>(a).
*   [**Corollary** $x$ proximal to $y$ => $\exists L \text{ min. LID} \forall p \in L: px = py$
    *   Bew: $M = \{ p \in \beta S : px = py \} \neq \emptyset, \text{ min. LID}$ => Claim. ]
*   **Corollary** $x$ proximal to $y$, $y$ uniformly recurrent => ex $\epsilon \in E_{\min}(\beta S): \epsilon x = y (= \epsilon y)$
    *   "<=" by previous Corollary & Theorem
    *   "=>" previous corollary yields min. LID L => (Theorem part (e)) => $\epsilon$ operates like $id$ on $y$.
*   **Corollary**/Note: $y$ unif. recurrent <=> $\forall \epsilon \in E_{\min}(\beta S): \epsilon y = y$.

### Notes

Not much to say here; just finishing the proof of the theorem with some simple corollaries. The notes are very short on details but it seems to be all there.

This finishes the first lecture in the workbook (the next one was apparently scheduled for Wednesday, 10am).

In a sense it's a very "normal" proof in this field. That isn't to say it's easy but while the proof is a bit of a grind (a and b being the really only interesting part), the arguments are typical arguments that appear frequently; e.g., how to use syndeticity to build an ultrafilter (in this case using a net), the powerful properties of minimal left ideals (and their somewhat horrific lack of discernable structure).
