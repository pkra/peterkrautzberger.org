---
layout: post
title: Red workbook, p5
date: 2014-03-04 13:30:26.000000000 +01:00
categories:
- red workbook
- research notes archive
tags:
- Auslander-Ellis Theorem
- central set
- dynamical central set
- Hindman-Bergelson Theorem
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2014-03-04 21:30:26'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

[![red workbook, p5](assets/2014-02-26-23.37.16_cropped-719x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-02-26-23.37.16_cropped.jpg)

### Transcript

*   Satz (Auslander-Ellis) $X$ DS ueber $S$, $x\in X$ => $\exists y \in X: x \text{ prox } y$ & uniform rekurrent
    *   [Nimm $\epsilon \in E_\min(\beta S]$, setze $y= \epsilon \cdot x \stackrel{\text{Cor.}}{\rightarrow}$ dies tut's.]
*   Def. $C$ dyn. zentral $:\Leftrightarrow$ es ex. DS $X$ ueber S, $x,y \in X$, $x$ prox $y$, $y$ unif. rek., und $\exists U \in \mathfrak{U}(y): C = R(x,U)$.

*   Satz (Bergelson, Hindman etc) $C \subseteq S$ zentral <==> $C$ dyn. zentral.
    *   Beweis
        *   "<=": $ C = R(x,U)$ ($U\in \mathfrak{U}(y)$ etc)
        *   $\underset{\text{Cor. oben}}{\Rightarrow}$ ex. $\epsilon \in E_\min(\beta S): y = \epsilon \cdot x$ => $\underbrace{R(x,U)}_{=C} \in \epsilon$
        *   "=>": Setze $Q := \left\{ \begin{align} S & \text{ falls } 1_S \text{ ex} \\ S \cup {1_Q} & \text{ sonst } 1_Q \text( id.) \end{align}\right.$
        *   $X = 2^Q$ (siehe Beispiel) etc, $x = \chi_C$ (da $C \subseteq S \subseteq Q$)
        *   Nach Vors. waehle $\epsilon \in E_\min(\beta S)$ mit $C \in \epsilon$.
        *   setze $y:= \epsilon \cdot x$ => $x$ prox. $y$, $y$ unif. rekurrent
        *   Beh.: $y(1_Q) = 1$
            *   [sonst $=0$, $V  
                 :={ z : z(1_Q) = 0} \in \mathfrak{U}(y)$
                *   $y = \epsilon x$, also $R(x,V) \in \epsilon$
            *   => $C \cap R(x,V) \neq \emptyset$, say $s \in \ldots \cap \ldots$
            *   => $0 = s \cdot x(1_Q) \underset{\text{Def}}{=} x(1_Q \cdot s ) = x(s) = 1$ ↯ ]
        *   Nimm $U = { z \in X: z(1_Q) = 1}$ clopen, $\in \mathfrak{U}(y)$.
        *   Nach Beispiel $C = R(x,U)$. ☐

### partial Translation

*   Theorem (Auslander-Ellis) $X$ dynamical system over $S$, $x\in X$ => $\exists y \in X: x \text{ proximal } y$ & uniformly recurrent
    *   [Take $\epsilon \in E_\min(\beta S]$, and let $y= \epsilon \cdot x \stackrel{\text{Corollary}}{\rightarrow}$ confirm that this works.]
*   Definition. $C$ dynanmically central $:\Leftrightarrow$ there exists. dynamical system $X$ over S, $x,y \in X$, $x$ proximal $y$, $y$ unif. recurrent, and $\exists U \in \mathfrak{U}(y): C = R(x,U)$.

*   Theorem (Bergelson, Hindman etc) $C \subseteq S$ central <==> $C$ dyn. central.
    *   Proof.
        *   "<=": $ C = R(x,U)$ ($U\in \mathfrak{U}$ etc)
        *   $\underset{\text{Cor. above}}{\Rightarrow}$ there exists $\epsilon \in E_\min(\beta S): y = \epsilon \cdot x$ => $\underbrace{R(x,U)}_{=C} \in \epsilon$
        *   "=>": Let $Q := \left\{ \begin{align} S & \text{ if } 1_S \text{ ex} \\ S \cup {1_Q} & \text{ else } 1_Q \text( identity ) \end{align}\right.$
        *   $X = 2^Q$ (see example earlier) etc, $x = \chi_C$ (since $C \subseteq S \subseteq Q$)
        *   By our assumptions choose $\epsilon \in E_\min(\beta S)$ with $C \in \epsilon$.
        *   let $y:= \epsilon \cdot x$ => $x$ proximal $y$, $y$ uniformly recurrent
        *   Claim: $y(1_Q) = 1$
            *   [else $=0$, $V :={ z : z(1_Q) = 0} \in \mathfrak{U}(y)$
                *   $y = \epsilon x$, therefore $R(x,V) \in \epsilon$
            *   => $C \cap R(x,V) \neq \emptyset$, say $s \in \ldots \cap \ldots$
            *   => $0 = s \cdot x(1_Q) \underset{\text{Def}}{=} x(1_Q \cdot s ) = x(s) = 1$ ↯ ]
        *   Take $U = { z \in X: z(1_Q) = 1}$ clopen, $\in \mathfrak{U}(y)$.
        *   As in the example: $C = R(x,U)$. ☐

### Notes

This is the continuation of lecture with notes on the previous pages and contains the next notes from the next lecture.

This lecture starts where the last one left off, reaping the rewards -- the famous theorem by Auslander-Ellis now looks almost distressingly easy, with a terribly arbitrary choice of $\epsilon$.

The theorem by Hindman and Bergelson (citation needed) is less known perhaps. It greatly simplifies thinking about central sets and is really quite central (pardon the pun).