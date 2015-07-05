---
layout: post
title: Red workbook, p6
date: 2014-03-05
categories:
- red workbook
- research notes archive
tags:
- analytic sets
- central set
- open problems
- proximal
- uniformly recurrent
published: true
permalink: 0152/
---

### Source

<figure>
  <a href="/assets/2014/red_workbook-p6-1.jpg">
    <img alt="red workbook, p6-1" src="/assets/2014/red_workbook-p6-1.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.6, part 1
  </figcaption>
</figure>

<figure>
  <a href="/assets/2014/red_workbook-p6-2.jpg">
    <img alt="red workbook, p6-2" src="/assets/2014/red_workbook-p6-2.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.6, part 2
  </figcaption>
</figure>


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
