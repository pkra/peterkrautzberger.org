---
layout: post
title: Red workbook, p13
date: 2014-03-25
categories:
- red workbook
- research notes archive
tags:
- collectionwise piecewise syndetic
- collectionwise thick
- minimal ideal
published: true
permalink: 0159/
latex: true
---

### Source

<figure>
  <a href="/assets/2014/red_workbook-p13-1.jpg">
    <img alt="red workbook, p13-1" src="/assets/2014/red_workbook-p13-1.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.13, part 1
  </figcaption>
</figure>

<figure>
  <a href="/assets/2014/red_workbook-p13-2.jpg">
    <img alt="red workbook, p13-2" src="/assets/2014/red_workbook-p13-2.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.13, part 2
  </figcaption>
</figure>


### Transcript

#### First page

*   _14\. Sept. 2006_
*   Fortsetzung Vortrag SK
*   _3._ collectionwise thick (cwt, cwdick), collectionwise pws (cwpws)
*   3.2 Notation. $\mathfrak{B} \subseteq \mathcal{P}(S), \mathfrak{V} := \{ D_e : e \in [\mathcal{B}]^{<\omega} \}$
    *   $\mathfrak{D}$ (-Suetterlin?), $D_e = \bigcap_{B\in e} B$
    *   Also: $\mathcal{B} \subseteq \mathfrak{V}$
*   3.1 Definition
    *   Fuer $\mathfrak{A} \subseteq \mathcal{P}(S): Y_ {\mathfrak{A}} = \bigcap_ {A\in\mathfrak{A}} \widehat{A} \subseteq \beta S$ abgeschlossen
        *   [in 3.2, dann $Y_ \mathfrak{B} = Y_ \mathfrak{D}$]
*   3.3 Satz & Def. Aequivalent:
    *   (a) $\exists q \in \beta S: \beta S \cdot q \subseteq Y_ \mathfrak{B}$ (natuerlich oBdA $q\in K(\beta S)$)
    *   (b) $\forall D \in \mathfrak{D}$ $D$ dick.
    *   Dann: heisst $\mathfrak{B}$ cwdick (cwd)
*   Beweis
    *   =>: $\beta S \cdot q \subseteq Y_ {\mathfrak{B}} = Y_ \mathfrak{D} \subseteq \widehat{D}$ fuer all $D\in \mathfrak{D}$
    *   <=: Fuer $e\in [\mathfrak{B}]^{<\omega}$ nimm $q_ e \in \beta S, \beta S \cdot q_ e \subseteq \widehat{D_ e}$
        *   OBdA, $q\in K(\beta S)$, ($q_e \in \beta S \cdot q_e \in \widehat{D_e}$ gilt ✓)
        *   Setze $ X_e := \{ q_f : e \subseteq f \in [ \mathfrak{B} ]^{< \omega} \} \subseteq \beta S$.

#### Second page

*   Damit $X_e \subseteq \widehat{D_e}$ [ $f\supseteq e \Rightarrow q_f \in \widehat{D_f} \subseteq \widehat{D_e}$]
*   $\{ X_e : e \in [\mathfrak{B}]^{< \omega} \}$ hat eDE (? check)
*   nimm $q\in \bigcap_{e \in [ \mathfrak{B} ]^{<\omega}} cl_{\beta S}(X_e)$
*   Beh. $\forall D \in \mathfrak{D}: \beta S \cdot q \subseteq \widehat{D}$
    *   [ $D = D_e, e\in [ \mathfrak{B}]^{< \omega} \Rightarrow X_e \subseteq \widehat{D_e}, q\in cl(X_e) \Rightarrow q \in D_e$
    *   $\forall S \in S, e \subseteq f, s\cdot q_f \underset{\beta S \cdot q_f \subseteq\widehat{D_f}}{\in} \widehat{D_f} \subseteq \widehat{D_e} \Rightarrow s\cdot X_e \subseteq \widehat{D_e}$
    *   $\Rightarrow s\cdot q \in \widehat{D_e} \Rightarrow \beta S \cdot q \subseteq \widehat{D_e}$]
    *   Damit folgt die Behauptung □
*   ["Aufgabe": konstruiere $q$ durch $p$-limiten?]
*   3.4 Satz & Def. Aequivalent
    *   (a) $\exists q\in K(\beta S)$ mit $\mathfrak{B} \subseteq q$
    *   (b) $\forall e \in [\mathfrak{B} ]^{<\omega} \exists g_e \in [S]^{< \omega}$ mit $\mathfrak{C} = { C_e: e \in [\mathfrak{B}]^{<\omega} }$ cwdick; hierbei $C_e = \bigcup_{x \in g_e x^{-1}} D_e$.
    *   Nenne $\mathfrak{B}$ dann cwpws.

### partial Translation

#### First page

*   September 14, 2006
*   Continuation: Talk by Sabine Koppelberg
*   _3._ collectionwise thick (cwt), collectionwise piecewise syndetic (cwpws)
*   3.2 Notation. $\mathfrak{B} \subseteq \mathcal{P}(S), \mathfrak{V} := \{ D_e : e \in [\mathcal{B}]^{<\omega} \}$
    *   $D_ e = \bigcap_ {B\in e} B$
    *   In particular, $\mathcal{B} \subseteq \mathfrak{V}$
*   3.1 Definition
    *   For $\mathfrak{A} \subseteq \mathcal{P}(S)$ let $Y_ {\mathfrak{A}} := \bigcap_ {A\in\mathfrak{A}} \widehat{A} \subseteq \beta S$ (closed)
        *   [in the setup of 3.2, then $Y_ \mathfrak{B} = Y_ \mathfrak{D}$]
*   3.3 Theorem & Definition. TFAE:
    *   (a) $\exists q \in \beta S: \beta S \cdot q \subseteq Y_ \mathfrak{B}$ (without loss of generality, $q\in K(\beta S)$)
    *   (b) $\forall D \in \mathfrak{D}$ $D$ thick.
    *   We then call $\mathfrak{B}$ collectionwise thick (cwthick, cwt)
*   Proof:
    *   =>: $\beta S \cdot q \subseteq Y_ {\mathfrak{B}} = Y_ \mathfrak{D} \subseteq \widehat{D}$ for any $D\in \mathfrak{D}$
    *   <=: For $e\in [\mathfrak{B}]^{<\omega}$ take $q_e \in \beta S, \beta S \cdot q_e \subseteq \widehat{D_ e}$
        *   Without loss $q\in K(\beta S)$,
            *   (since $q_ e \in \beta S \cdot q_ e \in \widehat{D_ e}$ holds ✓)
        *   Let $ X_ e := \{ q_ f : e \subseteq f \in [ \mathfrak{B} ]^{< \omega} \} \subseteq \beta S$.

#### Second page

*   Then $X_ e \subseteq \widehat{D_ e}$
    *   [since $f\supseteq e \Rightarrow q_ f \in \widehat{D_ f} \subseteq \widehat{D_ e}$]
*   $\{ X_ e : e \in [\mathfrak{B}]^{< \omega} \}$ has the finite intersection property.
*   So take $q\in \bigcap_ {e \in [ \mathfrak{B} ]^{<\omega}} cl_ {\beta S}(X_ e)$
*   Claim: $\forall D \in \mathfrak{D}: \beta S \cdot q \subseteq \widehat{D}$
    *   [proof]
    *   $D = D_ e, e\in [ \mathfrak{B}]^{< \omega} \Rightarrow X_ e \subseteq \widehat{D_ e}, q\in cl(X_ e) \Rightarrow q \in D_ e$
    *   $\forall S \in S, e \subseteq f, s\cdot q_ f \underset{\beta S \cdot q_ f \subseteq\widehat{D_ f}}{\in} \widehat{D_ f} \subseteq \widehat{D_ e} \Rightarrow s\cdot X_ e \subseteq \widehat{D_ e}$
    *   $\Rightarrow s\cdot q \in \widehat{D_ e} \Rightarrow \beta S \cdot q \subseteq \widehat{D_ e}$
    *   The claim follows. □
*   ["Exercise": construct $q$ as $p$-limit]
*   3.4 Theorem & Definition. TFAE:
    *   (a) $\exists q\in K(\beta S)$ with $\mathfrak{B} \subseteq q$
    *   (b) $\forall e \in [\mathfrak{B} ]^{<\omega} \exists g_ e \in [S]^{< \omega}$ mit $\mathfrak{C} = { C_ e: e \in [\mathfrak{B}]^{<\omega} }$ cwthick; where $C_ e = \bigcup_ {x \in g_ e x^{-1}} D_ e$.
    *   We then call $\mathfrak{B}$ collectionwise piecewise syndetic (cwpws).

### Notes

We're back to Sabine Koppelberg's talks about basic $\beta S$ results (with four more pages to come). This time, tackling the not-so-basic notions of collectionwise thick/pws sets. These notions are cricital for analysing sets the minimal ideal -- and equally elusive.

I'm not very happy with notation here; it seems to sacrifice accessibility over corrrectness. A sloppier notation might be helpful. In addition, "collectionwise" is a cumbersome prefix. I'd go for "uniformly" or "coherently" as they are often used in the context of filters (and this is what "collectionwise" is all about). But it probably wouldn't help to add yet another terminology.

Funny thing. I actually spent my last few weeks in Michigan thinking about these notions.

* * *
