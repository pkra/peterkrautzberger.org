---
layout: post
title: Red workbook, p11
date: 2014-03-18
categories:
- red workbook
- research notes archive
tags:
- Hindman&amp;Strauss
- sums of ultrafilters
published: true
permalink: 0157/
latex: true
---

### Source

<figure>
  <a href="/assets/2014/red_workbook-p11-1.jpg">
    <img alt="red workbook, p11-1" src="/assets/2014/red_workbook-p11-1.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.11, part 1
  </figcaption>
</figure>

<figure>
  <a href="/assets/2014/red_workbook-p11-2.jpg">
    <img alt="red workbook, p11-2" src="/assets/2014/red_workbook-p11-2.jpg"/>
  </a>
  <figcaption>
    Red Workbook, p.11, part 2
  </figcaption>
</figure>


### Transcript

#### Left page

*    Bestanden bei: 60% Uebungen
*    Korrektur d. Klausur mit SK
*    Hindman & Strauss:
*    4.1.7: $A \in p \in \mathbb{N}^* +\mathbb{N}^* $
    *    => $\exists k: \left\vert A \cap (A+k)\right\vert  = \omega$
    *    ?=> $A$ kann nicht aufgezaehlt werden, so dass $a_ {n+1} - a_ n \to \infty (n \to \infty)$
*    vgl. van Douwen Artikel zu $\beta \mathbb{N}$.

#### Right page

*    Aufgabe 4.1.7
*    $p \in \mathbb{N}^* +\mathbb{N}^*  (\subseteq \mathbb{N}^* ), A\in p \Rightarrow \exists k \in \mathbb{N}: \left\vert A \cap (A+k)\right\vert  = \omega$
    *    WA: $\forall k \in \mathbb{N}: \left\vert A \cap A+k\right\vert  < \omega$
    *    [struck through: $\underset{p \in \mathbb{N}^* }{\Rightarrow} \mathbb{N} \setminus A' \in p$] $\Rightarrow \mathbb{N} - (A+k) \in p$
    *    $\Rightarrow \exists V^k, (W_ v^k)_ {v \in V^k}$ unendlich $\bigcup_ {v\in V_ k} v+ W_ v^k \subseteq N - (A-k)$
        *    ?? Nutzen? $\bigcap V_ k$? $\bigcap W_ v^k$?
*    $\mathbb{N} \rightarrow \mathbb{Z}_ n \overset{\text{Homo}}{\rightarrow} \rightarrow \beta \mathbb{N} \rightarrow \mathbb{Z}_ n$ Homo
    *    $\Rightarrow p = q+r \Rightarrow p \bmod n = q \bmod n + r \bmod n$
    *    [struck out: [illegible] $= -p +\bmod n \in \mathbb{Z}_ p = {0, \ldots, n-1}$
*    $A \in p \in \mathbb{N}^* +\mathbb{N}^*  \Rightarrow p = \overset{\overset{\mathbb{N}^* }{\ni \ \ \in}}{q+r} \Rightarrow A \supseteq \bigcup_ {v\in V \in q} v+ \overset{\in r}{W_ v}$
*    [struck out: WA $\forall k \in \mathbb{N}: \left\vert A \cap A+k\right\vert  < \omega \Rightarrow \forall k \in \mathbb{N}: k+p \notin \widehat{A}$]
*    WA $\forall k \in \mathbb{N}: \left\vert A \cap A+k\right\vert  < \omega \underset{p = q+r}{\Longrightarrow} \forall k \in \mathbb{N}: \left\vert k+W_ v \cap W_ v \right\vert  < \omega$
*    $\Rightarrow \forall k \in \mathbb{N} k+r \notin \widehat{W_ v}$ [struckout: $\Rightarrow: \forall k\in \mathbb{N}: k+r \notin \bigcup_ {v\in V} \widehat{W_ v}$]
*    $\Rightarrow q + r \notin \widehat{W_ v} \Rightarrow q+r \notin \bigcup \widehat{W_ v}$

### partial Translation

#### Left page

*    [some notes on grading a course]
*    Hindman & Strauss:
*    4.1.7: $A \in p \in \mathbb{N}^* +\mathbb{N}^* $
    *    => $\exists k: \left\vert A \cap (A+k)\right\vert  = \omega$
    *    ?=> $A$ can not be enumerated such that $a_ {n+1} - a_ n \to \infty (n \to \infty)$
*    cf. van Douwen article about $\beta \mathbb{N}$.

#### Right page

*    Exercise 4.1.7
*    [first try] $p \in \mathbb{N}^* +\mathbb{N}^*  (\subseteq \mathbb{N}^* ), A\in p \Rightarrow \exists k \in \mathbb{N}: \left\vert A \cap (A+k)\right\vert  = \omega$
    *    Assume to the contrary: $\forall k \in \mathbb{N}: \left\vert A \cap A+k\right\vert  < \omega$
    *    [struck through: $\underset{p \in \mathbb{N}^* }{\Rightarrow} \mathbb{N} \setminus A' \in p$] $\Rightarrow \mathbb{N} - (A+k) \in p$
    *    $\Rightarrow \exists V^k, (W_ v^k)_ {v \in V^k}$ infinite $\bigcup_ {v\in V_ k} v+ W_ v^k \subseteq N - (A-k)$
        *    ?? Useful? $\bigcap V_ k$? $\bigcap W_ v^k$?
*    [second try] $\mathbb{N} \rightarrow \mathbb{Z}_ n \overset{\text{Homomorphism}}{\Longrightarrow} \beta \mathbb{N} \rightarrow \mathbb{Z}_ n$ Homomorphism
    *    $\Rightarrow p = q+r \Rightarrow p \bmod n = q \bmod n + r \bmod n$
    *    [struck out: [something illegible] $= -p +\bmod n \in \mathbb{Z}_ p = {0, \ldots, n-1}$
*    [third try] $A \in p \in \mathbb{N}^* +\mathbb{N}^*  \Rightarrow p = q+r (\text{both in } \mathbb{N}^* ) \Rightarrow A \supseteq \bigcup_ {v\in V \in q} v+ \overset{\in r}{W_ v}$
*    [struck out: Assume to the contrary $\forall k \in \mathbb{N}: \left\vert A \cap A+k\right\vert  < \omega \Rightarrow \forall k \in \mathbb{N}: k+p \notin \widehat{A}$]
*    [fourth try] Assume to the contrary $\forall k \in \mathbb{N}: \left\vert A \cap A+k\right\vert  < \omega \underset{p = q+r}{\Longrightarrow} \forall k \in \mathbb{N}: \left\vert k+W_ v \cap W_ v \right\vert  < \omega$
*    $\Rightarrow \forall k \in \mathbb{N} k+r \notin \widehat{W_ v}$ [struckout: $\Rightarrow: \forall k\in \mathbb{N}: k+r \notin \bigcup_ {v\in V} \widehat{W_ v}$]
*    $\Rightarrow q + r \notin \widehat{W_ v} \Rightarrow q+r \notin \bigcup \widehat{W_ V}$

### Notes

I find this double page (and the one following it) quite interesting. Mathematically speaking, there's very little going. If I recall correctly, it was Stefan Geschke (or else Sabine Koppelberg) who had mentioned the fact to me that sets in ultrafilters that are sums have too many small gaps, i.e., the size of gaps in their enumeration does not have an (improper) limit. So I found the exercise in Hindman&Strauss and tried to solve it.

What's interesting is how I went about solving it. I would call this the "formalist approach", i.e., by manipulation of symbols following simple logic since I have no intuition of the subject. Of course, I fail, repeatedly; the solution will be found on the next page.

By the way, the first two lines are about the grading of a set theory course (the previous page contains more but I did not reproduce it). I will skip a rant about how PhD students are often forced into TA duties without being paid; in a logical twist, they often "cannot" be paid because they are on grant money and most grants directly prohibit teaching duties.
