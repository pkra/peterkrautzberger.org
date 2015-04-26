---
layout: post
title: Red workbook, p6
date: 2014-03-05 14:15:03.000000000 +01:00
categories:
- red workbook
- research notes archive
tags:
- analytic sets
- central set
- open problems
- proximal
- uniformly recurrent
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2014-03-23 21:13:55'
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

[![red workbook, p6-1](assets/2014-02-26-23.38.06_cropped-663x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-02-26-23.38.06_cropped.jpg)

[![red workbook, p6-1](assets/2014-02-26-23.38.17_cropped-721x1024.jpg)](http://boolesrings.org/krautzberger/files/2014/03/2014-02-26-23.38.17_cropped.jpg)

### Transcript

*   Folgerung: Ann. $1_S$ ex., $X = 2^S$.
    *   Prop. $C\subseteq x = \chi_C \in X$:
        *   $C$ zentral <=> ex $y \in X: y$ prox. $x$, unif. rek, $y(1_S) = q$
            *   ["=>" wie Satz/Beweis; "<=" Setze $U = { z: z(1_Q) = 1} \in y$
            *   $\underset{Bsp.2}{\Rightarrow}$ $R(x,U) = C \stackrel{\text{Def}}{\underset{\text{Satz}}{\Rightarrow}} C$ zentral]
*   $S = (\omega, +)$
*   Wir wissen
    *   (a) $x,y \in X$ prox. <=> $x,y$ stimmen auf bel. langen Int. von $\omega$ ueberein
    *   (b) $y \in X$ unif. rekurrent $\Longleftrightarrow \forall U \in \mathfrak{U}(y): R(y,U)$ synd.
        *   $\Longleftrightarrow \forall U_N \text{ (Basis offen) } R(y,U_n)$ syndetisch
        *   $\Longleftrightarrow \forall n \exists b \forall l \exists k (l \leq k \leq l+b \text{ und } y \upharpoonright [k,k+n] = y \upharpoonright n$
*   Fuer $C \subseteq \omega$:
    *   $C$ zentral $\Leftrightarrow \exists y \in 2^\omega: y$ unif. rek. und $y$ prox. $\chi_C $
    *   und $y(0)=1$
*   **Also zentrale Mengen analytisch!**
*   Frage: echt analytisch? SK: wahrscheinlich.

*   Notiz: Rand Oben: ?: Dieses DS in irgendeinem Sinn universell?

*   Notiz: gegenueberliegende Seite:
    *   anders: )offenbar ist) die eigetnlich Def. dadurch verbessert, dass klar wird, dass Obermengen wieder zentral sind
    *   Frage: kann ich im selben DS bleiben, um die Def. fuer eine Obermenge zu verifizieren?
        *   orig/anders: Laesst sich die Konstruktion in $2^Q$ hinueberretten durch eine geeignete Abbildung?

### partial Translation

*   Conclusion: Assume an identity $1_S$ exists, $X = 2^S$.
    *   (Side note: is this dynamical system universal in some sense?)
    *   Proposition. $C\subseteq x = \chi_C \in X$:
        *   $C$ central <=> ex $y \in X: y$ proximal $x$, uniformly recurrent, $y(1_S) = q$
            *   ["=>" as in the proof of the theorem; "<=" Let $U = { z: z(1_Q) = 1} \in y$
            *   $\underset{Example 2}{\Rightarrow}$ $R(x,U) = C \stackrel{\text{Definition}}{\underset{\text{Theorem}}{\Rightarrow}} C$ central]
*   $S = (\omega, +)$
*   We know
    *   (a) $x,y \in X$ proximal <=> $x,y$ agree on arbitrarily long Intervals of $\omega$
    *   (b) $y \in X$ unif. recurrent $\Longleftrightarrow \forall U \in \mathfrak{U}(y): R(y,U)$ syndetic
        *   $\Longleftrightarrow \forall U_N \text{ (basic open) } R(y,U_n)$ syndetic
        *   $\Longleftrightarrow \forall n \exists b \forall l \exists k (l \leq k \leq l+b \text{ und } y \upharpoonright [k,k+n] = y \upharpoonright n$
*   For $C \subseteq \omega$:
    *   $C$ central $\Leftrightarrow \exists y \in 2^\omega: y$ unif. rec. and $y$ prox. $\chi_C $
    *   and $y(0)=1$
*   **So central Sets are analytic!**
*   Question: properly analytic? Sabine Koppelberg: probably.

*   Note (across the page)
    *   to put it differenlty: this clearly improved the initial Definition as it is now clear that supersets of central sets are central.
    *   Question: can we stay in the same dynamical system to verify that supersets of a central set are central?
        *   to put it differently: can we find a map to transfer the constructions in $2^Q$ over to an arbitrary DS?

### Notes

This is a curious (double) page. I don't know why Sabine Koppelberg thought it was important to add the observation that the set of central sets of $\omega$ is analytic (and I'm wondering if the question about "properly analytic" came from my PhD-sibling Gido Scharfenberger-Fabian). I don't think I've ever seen this fact used in the wild. It is a nice observation though and lets me add the first entry in this transcription project with the following subsection:

### Open problems

*   Is the set of central subsets of $\omega$ properly analytic? (Sabine Koppelberg was apparently leaning towards "yes!".)