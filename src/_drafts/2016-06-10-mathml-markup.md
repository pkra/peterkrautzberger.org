---
layout: post
title: "Why I've become opposed to MathML on the web"
date: 2016-12-31
permalink: 0190/
published: true
---

This might turn into a rant. You have been warned. Let's go.

**Quick reminder 1/n:** I don't think there's anything wrong with MathML in an XML context. It's purely in the context of the web that I've come to the point where I believe it needs to be deprecated.

**Quick reminder 2:** if you don't know it, MathML markup comes in two forms: Presentation MathML and Content MathML. The former is for layout, the latter is for semantics; I think of this as [a lie to children](https://en.wikipedia.org/wiki/Lie-to-children) (because you can never quote The *Science of Discworld* enough). Only Presentation MathML has ever found widespread use (either in XMLland or on the web). So when I write "MathML" without context, I mean "Presentation MathML".

## Ephemeralities

Where to begin? Actually, I know pretty well where or maybe I knew because I am unable to find the original quote. And you might say I've merley convinced myself that a particular comment years ago put the seed of doubt in my mind, to question my MathML zealotry, made me wonder if I had been uncritical when clamoring for support of MathML. Anyway, it was, too my recollection, a discussion years ago, I'd say around the time Chrome disabled MathML support. I'm pretty sure it was on Google+ and I'm also reasonably sure (getting pretty vague, am I?) that it was a Googler (of course) who compared MathML's situation to that of some image standard from the early days of the web that just never saw traction, despite being superior to other formats that did.

Earlier this year, I criticized MathML for being a failed web standard. While it shows up in various comments of mine, I never really tried to make a case for MathML being a bad web standard. I think I still had the hope that parts of MathML could be salvaged for the web. But the more I thought about such a salvage (salvation?) operation, the more I realized there's nothing there to salvage.

## Presentation MathML is not for layout

In the introduction, I wrote (Presentation) MathML is for layout. But I don't think that is actually what it's for. To quote [the spec's introduction](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_presm.intro):

> This chapter specifies the "presentation" elements of MathML, which can be used to describe the layout structure of mathematical notation.

Obviously, it is unfair to take this quote out of context but I kept coming back to this bit: "the layout structure of mathematical notation". While the introduction makes several problematic claims (which we'll get o), I feel this opening piece must have been written with care. I admit I did not inquire into the history of this snippet then again that's relatively unimportant since I want to write down what it inspired me to think about.

It does not say "layout of mathematical notation", instead "layout structure". Now it might be that this is just meant synonymously but if you combine with one of those problematic claims:

> MathML presentation elements only suggest (i.e. do not require) specific ways of rendering

In other words, MathML intentionally does not specify rendering. Instead, it provides "layout structure".

From the limited amount of understanding I have for the history of MathML, this fits well into the narrative that the MathWG has pursued for 18 years. The group was always dominated by people coming from existing math rendering implementations (TeX, Mathematica, Word etc). They did not set out to specify how math layout should work on the web as such. Rather, they devised a "document language" that would abstractly describe the layout problems each rendering engine was solving already. In other words, they wrote a nice abstraction of existing implementations to have a decent exchange format for mathematical layout.

And I think they succeeded with this. If you have already a math rendering engine, chances are you'll find MathML easy to implement both as an input and as an output, i.e., as an exchange format.

I also think that this is why it didn't work out on the web. If browsers had had layout engines for math, then MathML may have been a suitable format to standardize on (much like SVG or canvas back in the day). But they didn't. Also, the web is a convolution of technologies that, due to their success, could get away with doing things in unusual (dare I say, bogus) ways (`<blink>`, anyone?). Even the successful web technologies were often flawed in some way or another but theirs continued success speaks for itself.

But I think the intentional vagueness is the really problematic part, an unacceptable "feature" for a web standard (even though an extremely useful feature for an XML format). It's bad enough how utterly rubbish browser maintainers are at quality control. Straight forward bugs can stick around for literally decades while many developers raerly report more subtle bugs. (Because who in their right mind spends time on creating a minimal use case for a bug that only occurs in relatively complex layout conditions if they see that browser maintainers can't even fix the obvious ones? You find an alternative and you move on.)

Beyond QA, specs regularly require clarification, especially when bug reports show differences across implementations. Quite a bit of energy seems to go into sorting such things out even if only an elite group seems to be able to trigger such events). But I'm not too worried. While combining old and new standards can often break in unexpected ways, I have the impression that recent specs are getting more robust implementations. It's only human that browser maintainers would rather work on fixing issues related to new specs.

But intentional vagueness as exhibited by MathML is, I think, unacceptable for today's web.

## What's there to salvage?

All I've written is not that important. After all, browser implementations could start agreeing on how to render MathML and everything would be dandy. But there's a second reason why I think MathML is a bad web standard: the actual markup.

Here's an assumption: math is text. I don't think many people would object to this, even fewer people when restricting math to what MathML can represent. Of course, on the web text layout is done (primarily) in CSS. And in fact the existing browser implementations for MathML build on CSS.

But from the point of view of CSS, MathML markup is almost entirely redundant and where it isn't redundant, it's problematic.

Let's walk through the [MathML element reference](https://developer.mozilla.org/en-US/docs/Web/MathML/Element).

To start off, the only element worth salvaging is `<math>`, the root element. This element could actually be useful on the web if it indicated a change in semantics for HTML content. For example, I could imagine assistive technologies to switch their voicing patterns (e.g., voicing punctuation).

Let's check out the rest

### Styling

The following elements are more or less obviously redundant from a CSS point of view.

* `<mstyle>` An element to apply styling. Yes, you read that right. Comes with an assorted mix of attributes, e.g., `mathbackground`,`mathcolor`. Sigh.
* `<merror>` An element to convey a warning. So I've been lying. This is beautifully semantic, isn't it? It would actually be nice to have an `error` element in HTML (there's already an ARIA role). But it is neither math-specific nor does it do anything for math layout.
* `<mpadded>` An element to does padding.
* `<mspace>` You guessed it: an element for inserting space.
* `<msline>` Did you want another `hr` element? You got it.
* `<menclose>` A bunch of fancy borders.
* `<msqrt>`, `<mroot>` An element for drawing a square root and a general root. Until recently, I called these semantic because I could not find an example where they were used for anything other than mathematical concepts related to roots (or hacks where people abused them typographically). But the thing is that `msqrt` is in fact constantly abused in real-world content to indicate a generic "root of some mathematical object" where one should really use
* `<mfenced>` Layout for expressions with fences (such as parentheses, brackets). While basically just generated content they are at the heart of the biggest issue in math layout: stretchy characters.

### Grouping

* `<mrow>`, `<msrow>`, `<msgroup>` These three elements group things in various situations. They are already redundant in MathML, let alone HTML.

### Token elements

* `<mglyph>`. An element for using images, i.e., `<img>`.
* `<mi>`. An "identifier" (e.g., variables). Semantically pointless and stylistically mostly redundant.
* `<mn>`. A "number". It sounds semantic and I'd say a `<number>` element in HTML makes a lot of sense but since Content MathML has `<cn>` for "semantic" numbers, for "layout" it's largely pointless.
* `<mo>`. An operator. Semantically pointless but deeply entangled in math layout shenanigans. Highly problematic as its layout often depends on its text content.
* `<ms>`. An element for strings but again we have `<cs>` in Content MathML os this is just meant for layout of strings (usually just means monospaced font / `pre`, `code`).
* `<mtext>`. An element for text. Yes.

### Scripts

* `<msub>`, `<msup>` Elements for scripts. A different structure than HTML scripts but similarly no semantics.
* `<msubsup>` An element for aligned super- and subscripts. Genuinely missing from CSS; no semantics attached.
* `<mmultiscripts>`. An element for scripts in all four positions. Again, genuinely missing from CSS, no semantics attached.

### Tables

* `<mtable>`,`<mtr>`, `<mtd>`. Another set of tables -- just what the web needs. The spec is both less and more powerful than HTML tables and also in parts incompatible. And just like HTML tables, this has no semantics but brings plenty of problematic legacy content to the table.

* `<maligngroup>`, `<malignmark>` In-table alignments. Genuinely missing from CSS but grid seems to be a step in the right direction.

### Vertical stacking

* `<mfrac>` An element for a vertical stack of two, with potentially a line in between. You might think this is semantic but [the spec itself says](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_presm.mfrac) says <q>it can also be used to mark up fraction-like objects such as binomial coefficients and Legendre symbols.</q>, i.e., really just a vertical stack.
* `<mover>`, `<munder>`, `<munderover>` For placing things above and below other things. Since it also applies to accent, lots of bad interaction with font-engine driven layout (such as combining characters). Also, can totally not be what you expect if you don't understand math layout traditions for moveable limits.
* `<mstack>`,`<mlongdiv>`. Elements for vertical stacking to easily author written addition, multiplication, and long division.

### the weird stuff

* `<mscarries>`/`<mscarry>`. Basically table rows/elements that affect the following table row's elements in a multitude of ways. Very weird.
* `<maction>` "Interactive" elements. The available `actiontypes` are: `statusline`, `tooltip`, `toggle`. Nothing semantic and defintely nothing matheamtical here.



### annotations

* `<semantics>`, `<annotation>`, `<annotation-xml>`. Elements to extend MathML to allow inclusion of arbitrary content, either as "annotation" or in itself.

### Notable attributes

There are a bunch of attributes and most of them disappear alongside their associated elements. But the following two are worth pointing out.

* `<math>`-specific attributes
  * `overflow` Yet another CSS property enshrined as an attribute. A thing of the passed in HTML-land but if you design layout without CSS I guess it's what you end up with. It's time to let go.
    * The fact that `linebreak` is mentioned as the default is quite telling of the state of mathematical layout in general.
    * If `elide` wasn't so incredibly vague and wouldn't require far more semantic information than Presentation MathML can reasonably provide, it would be cool. But it is so it's a waste of time.
    * `scale` I actually like. The trouble is that there's no research that could tell us if this is a good idea for the end user. Also, the vague description about adjusting font-sizes seems weird to me; on the web, CSS transforms make much more sense. Luckily, CSS now has a proposal for a `viewBox`/`view-box` which will solves the problem for the entire web, i.e., "properly". I actually implemented something like scale for a client a while a go; here's an early prototype.
    * `truncate`, `scroll`. Sigh...
  * `altimg`, `altimg-width`, `altimg-height`, `altimg-valign` these attributes allow you to specify a fallback image.
  * `alttext`, an attribute for text altenratives,  not called `alt` for some reason (wtf-check: `<mlgyph>` has an `alt` attribute for text alternative)
* `display`/`displaystyle`. You can only set `display` on `<math>` elements and `displaystyle` is its little cousin which can be set anywhere. `display=block/inline` // `displaystyle=true/false` changes the rendering significantly. Math layout people will know the tradition behind this (movable limits, scriptsizes etc) but is it appropriate on the web? I have my doubts. I think most people knowing CSS would probably surprised at the extensive effects. They are both typical examples of holding on to traditions of math print layout in favor of moving the web forward. They also cause lots of headaches by requiring lookups while rendering children instead of building on the CSS cascade; what you get back is a small advantage of re-using children -- I don't think it's worth it.

## I've just lied to you.

So if you haven't noticed, most of the above is a lie. Of course, whenever I claim redundancy the concepts do not map perfectly to CSS, in fact they're often in conflict.


HTML tables  For example, you are supposed to get really good inline tables with these (with awesome baseline alignment), you can have labeled rows via `<mlabeledtr>` with some nicely subtle behavior when screen real estate is tight. But you have to give up the progress that HTML tables have seen, moving from attributes over to CSS and now to grid. And of course there are some subtle incompatibilities (e.g., when it comes to calculating relative and fixed widths columns).
