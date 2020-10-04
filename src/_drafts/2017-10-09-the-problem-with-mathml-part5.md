---
layout: post
title: "The problem with MathML as a web standard (part 5)"
date: 2017-09-29
permalink: 0200/
published: true
---

Time to follow up [part 4](/0200/) and wrap up the 10,000 ft point of view, the 5 top-level problems with MathML as a web standard.

## Prelude

This is a bit of a repetition as I've written about it in [#0185](/0185/), [#0186](/0186/), and [#0192](/0192/). But let's see if I've gotten a bit better at explaining this.

## The fifth problem: MathML is fundamentally not accessible

You may have heard assitive technology (AT) vendors such as NVDA, JAWS, VoiceOver claim MathML support. Thus, it must be accessible and I'm lying. If that's the way you want to think about this, great; you can stop reading now and call me a liar.

If your users have complaint to you that things suck anyway and you want to digg a little deeper as to why things suck, you've come to the right place.

### on a word

Before we continue, let's talk words real quick, specifically my use of *fundamentally*. By this I mean that markup holds insufficient information to provide an accessible rendering by itself. So an `h1` tag with text content is accessible but SVG and `img` tags are also fundamentally not accessible in that sense (of course real life is messy and the lines blur easily).

That doesn't mean you cannot *make* things accesible. You can slap some alt text on an `img` or labels on SVG `path`s, you can even use computer vision to generate those, you might even want that in your assistive technologies. That's all fine. It just doesn't make the content itself accessible.

### quality

So what's the problem? In simple terms, MathML is **at its best** a poor solution for accessibility on the web.

By this I mean the following. Even if in the perfect scenario - high-quality MathML sources, bugfree browser and AT support - universal rendering of MathML content is going to remain mediocre, i.e., it gives users a mediocre experience, no matter what tools they use.

Furthermore, in reality this perfect scenario is never met. Most frequently, this fails at the authoring (and authoring tool) level - garbage in, garbage out. But of course it is even more heavily influenced by buggy to non-existent browser and AT support (and we'll talk about AT support later). In real life, the end result is consistently miserable for the person we should care about: the user and reader.

Substantiating this claim would be pointless if there was no better alternative. Luckily, there is: well-supported web standards such as HTML, SVG, and ARIA.

For these, the situation is different. In real life, the accessibility of an average web page is mediocre. However, best practices for very good (if not excellent) experiences not only exist but continually get easier to implement and thus grow in adoption.

I don't see a reason why equation content should not aim for this level of mediocre-to-excellent instead of miserable-to-mediocre. Since general web technology provides this higher level, the focus should be there, in particular as the widest possible audience would benefit from improvements.

There's naturally the question of feasibility, i.e., can we expect to author such high-quality content. Spoilers: I believe so. Furthermore, we already have open-source tools that provide a up-conversion from low-quality legacy content such as MathML and TeX to high-quality formats. Since such upgrading necessarily applies heuristics, it is not perfect but open-source tools are the gold standard already so we have a solid base to work with.

MathML is like table-based web design: yes it sort of works and yes it was necessary, actually even sort of brilliant at the time, decades ago. But if you're using table-based web design today, you might want to re-evaluate your life.

## where do we start?

A good point might be to start at [207](/0207) where I outline a baseline for accessibility. Essentially, MathML fails on all of the points discussed there.

### What do we mean by "accessible"?

To understand why MathML cannot provide more than mediocre accessibility, we have to dive a little deeper.

In the past few years of thinking about accessibility and MathML, I've come across a variety of ideas about accessibility of equation layout. Unfortunately, they tend to be more or less contradictory which does not stop fans of MathML of using any and all of these ideas to claim that MathML is the best format available.

#### Semantic accessibility

The typical approach to accessibility on the web is driven by notions of *semantic markup*: markup should convery the meaning of the content in the same way as visual styling might help convey it for visual users. This way, the content is machine readable and assistive technologies can provide an equivalent (and sometimes improved) experience. For example headings should be marked up using `<h1>` through `<h6>` (and you can use `aria-level` beyond that) to convey something you might just do by visual elements (e.g., large bold text) otherwise.

As I explained in [???](/???), MathML does not provide semantics in a usable way. Thus it is impossible for MathML to help provide this approach to accessibility.

#### Visual accessibility

An opinion I've heard from especially non-visual users is that they are not interested in tricks regarding accessibility. They don't want more than the visual user have access to but they want access. So instead of trying to convey semantics, this leads to an approach where assistive technologies convey the visual layout.

This is actually difficult to encounter on the web; even SVG accessibility is usually not approached that way (even if some screenreaders such as VoiceOver will take the visual layout into account when exploring an SVG document). But the main idea is simple: just describe the visual layout, where the various characters are, how they relate to each other visually.

The first trouble with this is of course that MathML does not specify layout sufficiently. Even if you fix an implementation, you may have secondary effects (e.g. does a font have the necessary glyphs to build a stretchy construction).

The second trouble is that nobody does this. No assistive technology that handles MathML will tell you how tall or wide a brace stretches, no AT will tell you *superscript 2* but, inevitably, *squared*, no AT will voice under/overscripts around operators from the operator dictionary as positions etc etc.

So besides this not being possible with MathML nobody wants this. Moving on.

#### Historic accessibility

There's a third piece of this puzzle: historic precedent.

That

### Common claims on MathML's prowess (and actual problems on the web)

* Localization
* Braille


## Coda

This wraps up the 10,000 ft view, the 5 high level, fundamental problems I see with MathML as a <i>web standard</i>, i.e., something that browsers should implement natively. I need a break but I hope to dive deeper into some aspects, e.g., the problems due to MathML's approach to layout, the problems due to existing browser implementations, and the problem of working towards usable semantics.


---

Misconceptions of accessibility

* single equation accessibility
* Localization/internationalization
* specialized Braille syntax
