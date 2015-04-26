---
layout: post
title: Red workbook, p3
date: 2014-02-26 14:23:13.000000000 +01:00
categories:
- red workbook
- research notes archive
tags:
- minimal left ideal
- proximal
- uniform recurrent
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2014-02-26 22:23:13'
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

[![red workbook, p3](assets/2014-02-26-22.11.00-1-706x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/02/2014-02-26-22.11.00-1.jpg)

### Transcript

*   Def.  
     \begin{align} x,y \text{ proximal} & \Leftrightarrow \forall V \in \mathfrak{U}(\overbrace{\Delta}^{\text{Diag. in $X\times X$}}) \exists s \in S: (sx, sy) \in V \\ & \underbrace{\Leftrightarrow}_{\text{topologie: diese Ueberd. bilden Umg.basis von $\Delta$ in $X^2$}} \forall (U_i)_{i=1}^m, \bigcup U_i = X \text{ offen} \exists s \in S, i \leq m: sx, sy \in U_i \end{align}
*   Satz
    *   $ x,y \text{ prox.} \Leftrightarrow \exists p \in \beta S: px = py$.
*   Bsp 2 (fortg)
    *   Sei $S\leq Q, 1_Q \in Q$ mit $1_q \cdot s = s \cdot 1_Q = s \forall s \in S$
    *   $U: = { z \in X: z(1_Q) = 1}$. Also $U\subseteq X$ clopen [klar?]
    *   Sei $C\subseteq S: x:= \chi_C$ (char. Fkt.)
    *   Dann $R(x,U) = C$
        *   [proof] $s\in R(x,U) \Leftrightarrow s \cdot x \in U \Leftrightarrow s \cdot x (1_Q) = 1 \Leftrightarrow x(1_Q s) = 1 \Leftrightarrow x(s) = 1 \Leftrightarrow X \in C$
    *   ! Also: jede Teilmanege als Rueckkehrmenge darstellbar.
*   Def. $x$ unif. rekurrent $\Leftrightarrow R(x,U) \text{ synd. } \forall U \in \mathfrak{U}$
*   Satz. $X$ DS ueber $S$, $y\in X$, $L\subseteq \beta S$ min. LID  
     a. $y$ unif. rekurrent;  
     b. $\exists p \in L: p\cdot y = y$  
     c. $\exists \epsilon \in L\cap E(\beta S): \epsilon \cdot y = y$  
     d. $\exists \epsilon \in L \cap E(\beta S), x\in X: \epsilon \cdot x = y$  
     e. $y\in \bigcup_{M \text{min US}} M$  
     f. $y \in L \cdot y$.
*   Beweis
    *   c=> a
        *   $U \in \mathfrak{U}(y), V\subseteq \bar{V} \subseteq U \text{ offen}, A=R(y,V) \in \epsilon $ [$\epsilon y = y$]
        *   $B = {s: s\cdot \epsilon \in \hat{A}} \subseteq S \text{ syndetisch [HS 4.39]} \Rightarrow B \subseteq R(y,U)$ [$s \epsilon \in \hat{A} \Rightarrow s\epsilon y = s y \in \bar{V} \subseteq U$]

### partial translation

*   Definition.  
     \begin{align} x,y \text{ proximal} & \Leftrightarrow \forall V \in \mathfrak{U}(\Delta) \exists s \in S: (sx, sy) \in V \\ & \Leftrightarrow \forall (U_i)_{i=1}^m, \bigcup U_i = X \text{ open} \exists s \in S, i \leq m: sx, sy \in U_i \end{align}  
     where $\Delta$ is the diagonal in $X\times X$; note that these coverings form a neighborhood basis of $\Delta$ in $X^2$
*   Theorem
    *   $ x,y \text{ proximal} \Leftrightarrow \exists p \in \beta S: px = py$.
*   Example 2 (continued)
    *   Let $S\leq Q, 1_Q \in Q$ with $1_q \cdot s = s \cdot 1_Q = s \forall s \in S$
    *   $U: = { z \in X: z(1_Q) = 1}$. Then $U\subseteq X$ is clopen
    *   Let $C\subseteq S: x:= \chi_C$ (characteristic function)
    *   Then $R(x,U) = C$
        *   [proof] $s\in R(x,U) \Leftrightarrow s \cdot x \in U \Leftrightarrow s \cdot x (1_Q) = 1 \Leftrightarrow x(1_Q s) = 1 \Leftrightarrow x(s) = 1 \Leftrightarrow X \in C$
    *   ! Therefore: every subset can be a return set
*   Definition. $x$ unif. recurrent $\Leftrightarrow R(x,U) \text{ syndetic } \forall U \in \mathfrak{U}$
*   Theorem. $X$ dynamical system on $S$, $y\in X$, $L\subseteq \beta S$ minimal left ideal. TFAE:  
     a. $y$ unif. recurrent;  
     b. $\exists p \in L: p\cdot y = y$  
     c. $\exists \epsilon \in L\cap E(\beta S): \epsilon \cdot y = y$  
     d. $\exists \epsilon \in L \cap E(\beta S), x\in X: \epsilon \cdot x = y$  
     e. $y\in \bigcup_{M \text{ minimal subsystem}} M$  
     f. $y \in L \cdot y$.
*   Proof
    *   c=> a
        *   $U \in \mathfrak{U}(y), V\subseteq \bar{V} \subseteq U \text{ offen}, A=R(y,V) \in \epsilon $ [$\epsilon y = y$]
        *   $B = {s: s\cdot \epsilon \in \hat{A}} \subseteq S \text{ syndetic [HS 4.39]} \Rightarrow B \subseteq R(y,U)$ [$s \epsilon \in \hat{A} \Rightarrow s\epsilon y = s y \in \bar{V} \subseteq U$]

### Notes

The talk/lecture from the previous page continues, tackling proximality with its basic characterization in terms of $\beta S$ and starting the proof of the characterization of uniform recurrence. That's fairly basic stuff (in the sense of necessary knowledge, not "trivial" or "easy"). The notes are a bit incomplete overall -- not sure if I was too lazy (likely) or if Sabine Koppelberg jumped a bit to get to the interesting bits.

The proof that begins at the bottom of the page is, for me, a typical cases of a proof that prevents one from learning; a picture perfect proof that throws elegant arguments around but keeps from its reader the beautiful messiness of coming up with it in the first place.

The reference [HS 4.39] is alomst certainly whatever is numbered 4.39 in Hindman & Strauss, "Algebra in the Stone-Cech compactification". (I can't check the actual detail since my copy of H&S is still on route from LA.)

I forgot to mention in the first post that I substituted \mathfrak for Sutterlin in the transcription -- Sutterlin is too hard to come by (Sutterlin U is used to indicate the neighborhood filter).