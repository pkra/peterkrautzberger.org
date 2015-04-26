---
layout: post
title: Red workbook, p8
date: 2014-03-11 15:31:22.000000000 +01:00
categories:
- red workbook
- research notes archive
tags:
- central set
- piecewise syndetic set
- thick set
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2014-03-11 22:31:22'
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

[![red workbook, p8](assets/2014-03-09-12.44.41_cropped-711x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-03-09-12.44.41_cropped.jpg)

### Transcript

*   **Lemma** $A \subseteq S$ (a) $A \in p \in K(\beta S)$ (also pws) => $\exists g \subseteq_e S: \stackrel{\stackrel{[unreadable]}{\downarrow}}{\beta S \cdot p} \subseteq \widehat{ \bigcup_{x \in g} x^{-1} A }$
    *   (b) $T := \bigcup_{x \in g} x^{-1} A$ dick, $g \subseteq_e S$ (also $A$ pws)
        *   => $\beta S \cdot q \subseteq \widehat{T}$ fuer ein $q \in \beta S$
        *   => $A \in x \cdot q$ fuer ein $q\in \beta S$, ein $x\in g$
*   **Beweis**
    *   (b): $q \in K(\beta S)$ mit $\beta S \cdot q \subseteq \widehat{T}$ (Prop)
        *   $q \in \beta S \cdot q \subseteq \widehat{T} \Rightarrow \exists x \in g: x^{-1}A \in q \Rightarrow x \cdot q \in \widehat{A}$
    *   (a) $L := \beta S \cdot p$ min. LID , $p \in L$.
        *   **Beh**: $L \subseteq \bigcup_{t \in S} \widehat{t^{-1}A }$ [ $x \in L, p \in \beta S \cdot x = cl_{\beta S} (s \cdot x)$
            *   da $p\in \widehat{A}$ offen => $\exists t \in S: t\cdot x \in \widehat{A} \Rightarrow x \in \widehat{t^{-1}A}$]
        *   $L$ kompakt, also $\underset{\stackrel{=}{\beta S \cdot p} }{L} \subseteq \bigcup_{t \in g} \widehat{ t^{-1}A}$ fuer ein $g \subseteq_e S$. □
*   **Prop** $A\subseteq S$; AeQ: (a) $A$ pws (b) $\exists y \in S: y^{-1}A$ zentral
    *   (c) $\exists D \subseteq S \text{ synd} \forall d \in D: d^{-1}A$ zentral
*   **Beweis**
    *   (b) => (a): nimm $\epsilon \in E_\min(\beta S): y^{-1}A \in \epsilon \Rightarrow A \in y \cdot \epsilon \in K(\beta S)$
    *   (a) => (c): Sei $e \subseteq_e S$ mit $\bigcup_{t \in e} t^{-1}A = T$ dick;
        *   sei $L\subseteq \widehat{T}$ min LID, sei $\epsilon \in L \cap E(\beta S)$
        *   Sei $y\in \epsilon$ mit $\epsilon \in \widehat{ y^{-1} A }$. Im DS $\beta S$:
        *   $\epsilon$ uniform rekurrent, $B = R(\epsilon, \widehat{ y^{-1}}A)$ syndetisch
        *   $D: y \cdot B$ (syndetisch! (Bem.)) und
        *   $\forall d\in D: d^{-1}A \in \epsilon$ (also zentral) [$d = y\cdot b$ fuer ein $b \in B$, $b\epsilon \in y^{-1}A$
            *   $y b \epsilon \in \widehat{A}, d\epsilon \in \widehat{A}, d^{-1}A \in \epsilon$]

### partial Translation

*   **Lemma** $A \subseteq S$
    *   (a) $A \in p \in K(\beta S)$ (hence piecewise syndetic (pws)) => $\exists g \subseteq_e S: \beta S \cdot p \subseteq \widehat{ \bigcup_{x \in g} x^{-1} A }$ [[so this union is thick!]]
    *   (b) $T := \bigcup_{x \in g} x^{-1} A$ thick, $g \subseteq S$ finite (so $A$ is pws)
        *   => $\beta S \cdot q \subseteq \widehat{T}$ for some $q \in \beta S$
        *   => $A \in x \cdot q$ for some $q\in \beta S$ and some $x\in g$
*   **Proof**
    *   (b): $q \in K(\beta S)$ with $\beta S \cdot q \subseteq \widehat{T}$ (by the previous proposition) [[workbook p 7]]
        *   $q \in \beta S \cdot q \subseteq \widehat{T} \Rightarrow \exists x \in g: x^{-1}A \in q \Rightarrow x \cdot q \in \widehat{A}$
    *   (a) $L := \beta S \cdot p$ minimal left ideal (LID) , $p \in L$.
        *   **Claim**: $L \subseteq \bigcup_{t \in S} \widehat{t^{-1}A }$
            *   $x \in L, p \in \beta S \cdot x = cl_{\beta S} (s \cdot x)$ since $p\in \widehat{A}$ open => $\exists t \in S: t\cdot x \in \widehat{A} \Rightarrow x \in \widehat{t^{-1}A}$]
        *   $L$ compact, hence $\underset{\stackrel{=}{\beta S \cdot p} }{L} \subseteq \bigcup_{t \in g} \widehat{ t^{-1}A}$ for some finite $g \subseteq S$. □
*   **Proposition** $A\subseteq S$; TFAE
    *   (a) $A$ pws
    *   (b) $\exists y \in S: y^{-1}A$ central
    *   (c) $\exists D \subseteq S \text{ syndetic} \forall d \in D: d^{-1}A$ central
*   **Proof**
    *   (b) => (a): take $\epsilon \in E_\min(\beta S): y^{-1}A \in \epsilon \Rightarrow A \in y \cdot \epsilon \in K(\beta S)$
    *   (a) => (c): Let $e \subseteq S$ finite with $\bigcup_{t \in e} t^{-1}A = T$ thick;
        *   Let $L\subseteq \widehat{T}$ min. LID, let $\epsilon \in L \cap E(\beta S)$
        *   Let $y\in \epsilon$ with $\epsilon \in \widehat{ y^{-1} A }$. In the dynamical system $\beta S$:
        *   $\epsilon$ is uniformly recurrent, $B = R(\epsilon, \widehat{ y^{-1}}A)$ syndetic
        *   $D: y \cdot B$ (syndetic! (by the above remark.)) undand
        *   $\forall d\in D: d^{-1}A \in \epsilon$ (hence central)
            *   [proof]: $d = y\cdot b$ for some $b \in B$, $b\epsilon \in y^{-1}A$, $y b \epsilon \in \widehat{A}, d\epsilon \in \widehat{A}, d^{-1}A \in \epsilon$

### Notes

More wonderful stuff about thick, piecewise syndetics, and central sets.

The lemma tells us that pws could be called "almost thick" -- a finite set of translations is enough to make a pws set thick. The proposition on the other hand tells us that pws is surprisingly close to being central -- just one translation! (just keep in mind they are very much not the same notion). In addition, such a translation happens very, very frequently (a syndetic set!).

Somehow, I find this to be a lot of fun even if it's not particularly surprising -- minimal idempotent ultrafilters are just so incredibly rich.