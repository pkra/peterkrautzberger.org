---
layout: post
title: Red workbook, p5
date: 2014-03-04
categories:
- red workbook
- research notes archive
tags:
- Auslander-Ellis Theorem
- central set
- dynamical central set
- Hindman-Bergelson Theorem
published: true
permalink: 0151/
---

### Source

<figure>
  <a href="/assets/2014/red_workbook-p5.jpg">
    <img alt="red workbook, p5" src="/assets/2014/red_workbook-p5.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.5
  </figcaption>
</figure>

### Transcript

* Satz (Auslander-Ellis) $X$ DS ueber $S$, $x\in X$ => $\exists y \in X: x \text{ prox } y$ & uniform rekurrent
    * [Nimm $\epsilon \in E_ \min(\beta S)$, setze $y= \epsilon \cdot x \stackrel{\text{Cor.}}{\rightarrow}$ dies tut's.]
* Def. $C$ dyn. zentral $:\Leftrightarrow$ es ex. DS $X$ ueber S, $x,y \in X$, $x$ prox $y$, $y$ unif. rek., und $\exists U \in \mathfrak{U}(y): C = R(x,U)$.

* Satz (Bergelson, Hindman etc) $C \subseteq S$ zentral <==> $C$ dyn. zentral.
    * Beweis
        * "<=": $ C = R(x,U)$ ($U\in \mathfrak{U}(y)$ etc)
        * $\underset{\text{Cor. oben}}{\Rightarrow}$ ex. $\epsilon \in E_ \min(\beta S): y = \epsilon \cdot x$ => $\underbrace{R(x,U)}_ {=C} \in \epsilon$
        * "=>": Setze $Q := \begin{cases} S & \text{ falls } 1_ S \text{ ex} \\\\ S \cup {1_ Q} & \text{ sonst } 1_ Q \text( id.) \end{cases}$
        * $X = 2^Q$ (siehe Beispiel) etc, $x = \chi_ C$ (da $C \subseteq S \subseteq Q$)
        * Nach Vors. waehle $\epsilon \in E_ \min(\beta S)$ mit $C \in \epsilon$.
        * setze $y:= \epsilon \cdot x$ => $x$ prox. $y$, $y$ unif. rekurrent
        * Beh.: $y(1_ Q) = 1$
            * [sonst $=0$, $V  
                 :={ z : z(1_ Q) = 0} \in \mathfrak{U}(y)$
                * $y = \epsilon x$, also $R(x,V) \in \epsilon$
            * => $C \cap R(x,V) \neq \emptyset$, say $s \in \ldots \cap \ldots$
            * => $0 = s \cdot x(1_ Q) \underset{\text{Def}}{=} x(1_ Q \cdot s ) = x(s) = 1$ ↯ ]
        * Nimm $U = { z \in X: z(1_ Q) = 1}$ clopen, $\in \mathfrak{U}(y)$.
        * Nach Beispiel $C = R(x,U)$. ☐

### partial Translation

* Theorem (Auslander-Ellis) $X$ dynamical system over $S$, $x\in X$ => $\exists y \in X: x \text{ proximal } y$ & uniformly recurrent
    * [Take $\epsilon \in E_ \min(\beta S)$, and let $y= \epsilon \cdot x \stackrel{\text{Corollary}}{\rightarrow}$ confirm that this works.]
* Definition. $C$ dynanmically central $:\Leftrightarrow$ there exists. dynamical system $X$ over S, $x,y \in X$, $x$ proximal $y$, $y$ unif. recurrent, and $\exists U \in \mathfrak{U}(y): C = R(x,U)$.

* Theorem (Bergelson, Hindman etc) $C \subseteq S$ central <==> $C$ dyn. central.
    * Proof.
        * "<=": $ C = R(x,U)$ ($U\in \mathfrak{U}$ etc)
        * $\underset{\text{Cor. above}}{\Rightarrow}$ there exists $\epsilon \in E_ \min(\beta S): y = \epsilon \cdot x$ => $\underbrace{R(x,U)}_ {=C} \in \epsilon$
        * "=>": Let $Q := \begin{cases} S & \text{ if } 1_ S \text{ ex} \\\\ S \cup {1_ Q} & \text{ else } 1_ Q \text( identity ) \end{cases}$
        * $X = 2^Q$ (see example earlier) etc, $x = \chi_ C$ (since $C \subseteq S \subseteq Q$)
        * By our assumptions choose $\epsilon \in E_ \min(\beta S)$ with $C \in \epsilon$.
        * let $y:= \epsilon \cdot x$ => $x$ proximal $y$, $y$ uniformly recurrent
        * Claim: $y(1_ Q) = 1$
            * [else $=0$, $V :={ z : z(1_ Q) = 0} \in \mathfrak{U}(y)$
                * $y = \epsilon x$, therefore $R(x,V) \in \epsilon$
            * => $C \cap R(x,V) \neq \emptyset$, say $s \in \ldots \cap \ldots$
            * => $0 = s \cdot x(1_ Q) \underset{\text{Def}}{=} x(1_ Q \cdot s ) = x(s) = 1$ ↯ ]
        * Take $U = { z \in X: z(1_ Q) = 1}$ clopen, $\in \mathfrak{U}(y)$.
        * As in the example: $C = R(x,U)$. ☐

### Notes

This is the continuation of lecture with notes on the previous pages and contains the next notes from the next lecture.

This lecture starts where the last one left off, reaping the rewards -- the famous theorem by Auslander-Ellis now looks almost distressingly easy, with a terribly arbitrary choice of $\epsilon$.

The theorem by Hindman and Bergelson (citation needed) is less known perhaps. It greatly simplifies thinking about central sets and is really quite central (pardon the pun).
