---
layout: post
title: Red workbook, p13
date: 2014-03-25 15:18:08.000000000 +01:00
categories:
- red workbook
- research notes archive
tags:
- collectionwise piecewise syndetic
- collectionwise thick
- minimal ideal
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2014-03-25 22:19:45'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
  _wpas_skip_5613678: '1'
  _wpas_skip_5613660: '1'
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

[![red workbook, p13-1](assets/2014-03-25-10.27.34_cropped-744x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-03-25-10.27.34_cropped.jpg)

[![red workbook, p13-2](assets/2014-03-25-10.27.14_cropped-757x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-03-25-10.27.14_cropped.jpg)

### Transcript

#### First page

*   _14\. Sept. 2006_
*   Fortsetzung Vortrag SK
*   _3._ collectionwise thick (cwt, cwdick), collectionwise pws (cwpws)
*   3.2 Notation. $\mathfrak{B} \subseteq \mathcal{P}(S), \mathfrak{V} := \{ D_e : e \in [\mathcal{B}]^{<\omega} \}$
    *   $\mathfrak{D}$ (-Suetterlin?), $D_e = \bigcap_{B\in e} B$
    *   Also: $\mathcal{B} \subseteq \mathfrak{V}$
*   3.1 Definition
    *   Fuer $\mathfrak{A} \subseteq \mathcal{P}(S): Y_{\mathfrak{A}} = \bigcap_{A\in\mathfrak{A}} \widehat{A} \subseteq \beta S$ abgeschlossen
        *   [in 3.2, dann $Y_\mathfrak{B} = Y_\mathfrak{D}$]
*   3.3 Satz & Def. Aequivalent:
    *   (a) $\exists q \in \beta S: \beta S \cdot q \subseteq Y_\mathfrak{B}$ (natuerlich oBdA $q\in K(\beta S)$)
    *   (b) $\forall D \in \mathfrak{D}$ $D$ dick.
    *   Dann: heisst $\mathfrak{B}$ cwdick (cwd)
*   Beweis
    *   =>: $\beta S \cdot q \subseteq Y_{\mathfrak{B}} = Y_\mathfrak{D} \subseteq \widehat{D}$ fuer all $D\in \mathfrak{D}$
    *   <=: Fuer $e\in [\mathfrak{B}]^{<\omega}$ nimm $q_e \in \beta S, \beta S \cdot q_e \subseteq \widehat{D_e}$
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
    *   $D_e = \bigcap_{B\in e} B$
    *   In particular, $\mathcal{B} \subseteq \mathfrak{V}$
*   3.1 Definition
    *   For $\mathfrak{A} \subseteq \mathcal{P}(S)$ let $Y_{\mathfrak{A}} := \bigcap_{A\in\mathfrak{A}} \widehat{A} \subseteq \beta S$ (closed)
        *   [in the setup of 3.2, then $Y_\mathfrak{B} = Y_\mathfrak{D}$]
*   3.3 Theorem & Definition. TFAE:
    *   (a) $\exists q \in \beta S: \beta S \cdot q \subseteq Y_\mathfrak{B}$ (without loss of generality, $q\in K(\beta S)$)
    *   (b) $\forall D \in \mathfrak{D}$ $D$ thick.
    *   We then call $\mathfrak{B}$ collectionwise thick (cwthick, cwt)
*   Proof:
    *   =>: $\beta S \cdot q \subseteq Y_{\mathfrak{B}} = Y_\mathfrak{D} \subseteq \widehat{D}$ for any $D\in \mathfrak{D}$
    *   <=: For $e\in [\mathfrak{B}]^{<\omega}$ take $q_e \in \beta S, \beta S \cdot q_e \subseteq \widehat{D_e}$
        *   Without loss $q\in K(\beta S)$,
            *   (since $q_e \in \beta S \cdot q_e \in \widehat{D_e}$ holds ✓)
        *   Let $ X_e := \{ q_f : e \subseteq f \in [ \mathfrak{B} ]^{< \omega} \} \subseteq \beta S$.

#### Second page

*   Then $X_e \subseteq \widehat{D_e}$
    *   [since $f\supseteq e \Rightarrow q_f \in \widehat{D_f} \subseteq \widehat{D_e}$]
*   $\{ X_e : e \in [\mathfrak{B}]^{< \omega} \}$ has the finite intersection property.
*   So take $q\in \bigcap_{e \in [ \mathfrak{B} ]^{<\omega}} cl_{\beta S}(X_e)$
*   Claim: $\forall D \in \mathfrak{D}: \beta S \cdot q \subseteq \widehat{D}$
    *   [proof]
    *   $D = D_e, e\in [ \mathfrak{B}]^{< \omega} \Rightarrow X_e \subseteq \widehat{D_e}, q\in cl(X_e) \Rightarrow q \in D_e$
    *   $\forall S \in S, e \subseteq f, s\cdot q_f \underset{\beta S \cdot q_f \subseteq\widehat{D_f}}{\in} \widehat{D_f} \subseteq \widehat{D_e} \Rightarrow s\cdot X_e \subseteq \widehat{D_e}$
    *   $\Rightarrow s\cdot q \in \widehat{D_e} \Rightarrow \beta S \cdot q \subseteq \widehat{D_e}$
    *   The claim follows. □
*   ["Exercise": construct $q$ as $p$-limit]
*   3.4 Theorem & Definition. TFAE:
    *   (a) $\exists q\in K(\beta S)$ with $\mathfrak{B} \subseteq q$
    *   (b) $\forall e \in [\mathfrak{B} ]^{<\omega} \exists g_e \in [S]^{< \omega}$ mit $\mathfrak{C} = { C_e: e \in [\mathfrak{B}]^{<\omega} }$ cwthick; where $C_e = \bigcup_{x \in g_e x^{-1}} D_e$.
    *   We then call $\mathfrak{B}$ collectionwise piecewise syndetic (cwpws).

### Notes

We're back to Sabine Koppelberg's talks about basic $\beta S$ results (with four more pages to come). This time, tackling the not-so-basic notions of collectionwise thick/pws sets. These notions are cricital for analysing sets the minimal ideal -- and equally elusive.

I'm not very happy with notation here; it seems to sacrifice accessibility over corrrectness. A sloppier notation might be helpful. In addition, "collectionwise" is a cumbersome prefix. I'd go for "uniformly" or "coherently" as they are often used in the context of filters (and this is what "collectionwise" is all about). But it probably wouldn't help to add yet another terminology.

Funny thing. I actually spent my last few weeks in Michigan thinking about these notions.

* * *