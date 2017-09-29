---
layout: post
title: "The problem with MathML as a web standard (part 4)"
date: 2017-09-29
permalink: 0200/
published: true
---

Let's continue from [part 3](/0199/) (after some traveling of mine).

## Prelude

As I wrote last time, the usual way to describe MathML's double-spec is this: <q>[Presentation MathML](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_) is for layout and [Content MathML](https://www.w3.org/Math/draft-spec/mathml.html#chapter4_) is for semantics.</q>

Last time I wrote about how semantics are effectively absent from MathML on the web. Unfortunately, layout does not fare much better.


## The fourth problem: MathML does not specify layout

So at first the spec will tell you that's absolutely not true:

>  Presentation markup [...] is used to display mathematical expressions; and Content markup [...] is used to convey mathematical meaning.
> <footer><a href="https://www.w3.org/Math/draft-spec/mathml.html#chapter1_intro.overview">1.3 Overview</a></footer>

So you will naturally start by thinking Presentation MathML is what you're after regarding equation layout ([<em>not</em> mathematics](/0196/)).

The spec, however, throws you a curveball:

> MathML presentation elements only recommend (i.e., do not require) specific ways of rendering; this is in order to allow for medium-dependent rendering and for individual preferences of style.
> <footer><a href="https://www.w3.org/Math/draft-spec/mathml.html#chapter2_fund.renderingmodel">2.1.4 MathML and Rendering</a></footer>

So Presentation MathML spec is about layout but not actually specifying how that should work.

This is obviously a problem when you want to see standards-compliant implementations in all major web browsers (even if it's just 4 engines). Usually (say with CSS or SVG), you can assume that a standard ensures developers that they are able to get consistent results across systems. Of course any standard will have gaps and edge cases but then, at least, specs can be clarified and either fixed in both standards and implementations or a standard can be identified as problematic (and ideally a less inconsistent standard can replace it).

However, this is not some kind of accident and you can easily find many statements in the same vein throughout the spec. For example, the section for [`<mfrac>`](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_presm.mfrac) says effectively nothing about the spacing between numerator, fraction line, and denominator.

Or you get gems like this one from [`<mscarries>`](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_id.3.6.5.1)

> This means that the second row, even if it does not draw, visually uses some (undefined by this specification) amount of space when displayed.

In contrast, start with any random part of contemporary CSS, e.g., [flex container](https://www.w3.org/TR/css-flexbox-1/#box-model) to start down the rabbit hole that are the result of quite meticulous discussions of layout specifics.

In other words, Presentation MathML does not even <em>want</em> to give you the same (messy) path to improvements as we're used to on the web (and we're still ignoring the practical problem that the Working Group is dead in the water so no fixes can be made).

At this point you might be wondering how that could be possible. After all, ther are plenty of equation rendering enginens out there that handle MathML. How do you reconcile this?

I think it is fairly simple (yet no less problematic). Presentation MathML assumes an implementor already knows how equation layout is supposed to work, in fact reading the spec you will get the feeling that it assumes you already have an equation layout engine at your disposal and you are merely adding MathML support, interpreting it in your engine.

in other words, Presentation MathML does not specify layout but is an abstraction layer, an exchange format for equation layout engines, a format that a rendering engine can (easily) make sense of within its already existing system.

(And yes, you could troll MathML enthusiasts by saying that Chrome and Edge support all layout requirements of the MathML spec. But [please don't](http://dontbeadickday.com/).)


### The fourth-and-a-half problem

Since I considered the value of Presentation MathML's semantics in the previous post, it's only prudent to double check the value of Content MathML for layout. Unsuprisingly, Content MathML really does not want to help either. The spec speaks quite clearly:

> [...] encoding the underlying mathematical structure explicitly, without regard to how it is presented aurally or visually,
> <footer><a href="https://www.w3.org/Math/draft-spec/mathml.html#chapter4_contm.intro">4.1.1 The Intent of Content Markup</a></footer>

So no visual layout nowhere.

By the way, it seems easy to misunderstand this point in the spec. Of course we can render MathML content - lots of tools do. But what no tool can rely on is the MathML spec when it comes to deciding on how to render Content MathML content visually. As I already mentioned, few rendering engines are "MathML-based" because they literally cannot be, they need to base their layout decisions on a more reliable source.

The other side of that coin is that you might disagree how to visually render Content MathML. In real life (at MathJax), we've actually had one or two complaints over the year how our Content-to-Presentation conversion is <q>wrong</q>.


## Coda

This is really just the core, the fundamental issue around MathML layout on the web. Even if you make the assumption that an equation layout engine should be added to browsers, there are more problems. And then we're still not talking about the problems of the shoddy implementations in Gecko and WebKit. Let's see if I'll get around to that. For now, let's continue the 10,000 ft view a bit longer.
