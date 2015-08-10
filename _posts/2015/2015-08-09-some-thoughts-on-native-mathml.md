---
layout: post
title:  Some thoughts on Native MathML
date: 2015-08-09
permalink: 0182/
---

> Do not worry about your difficulties with MathML; I can assure you that mine are still greater.
>
> — [not Albert Einstein](http://en.wikiquote.org/wiki/Albert_Einstein#1940s).

I have written about why [I care about MathML](/0175/) and why I care about [Native MathML](/0176/). Time to talk about some of the problems I see.

This piece reflects my personal opinion and is not indicative of the position of any project I might work on. It is meant as a conversation starter.

I care very much about MathML and in particular the mission of the W3C Math Working Group [to facilitate and promote the use of the Web for mathematical and scientific communication](http://www.w3.org/Math/Documents/Charter2006.html). Yet, while MathML has succeeded everywhere else, it struggles on the web. That worries me.

## The rise and fall of MathML

MathML did not start out as an XML language but as the `<math>` tag in HTML3. It was the browser vendors (Microsoft, Netscape) who rejected it; as a result, `<math>` went into XML "exile" (where it was immensely successful) and returned to HTML in HTML5.

Still, all OWP technologies stand and fall with the support and adoption from browser vendors. It does not matter how good (or bad) a web standard is or how well it works elsewhere. Browser vendor adoption is the only relevant measure.

## No news is not good news

It's been two years since I started to write ["MathML forges on"](http://radar.oreilly.com/2013/11/mathml-forges-on.html).

Back then, native browser support seemed to be on the tipping point. Dave Barton had done amazing work on improving Alex Milowski's WebKit code, the deactivation in Chrome seemed to be a hiccup due to one single bug (that already had a fix). It seemed, with a little luck, Gecko/Firefox and WebKit/Safari would have made it to the 80/20 point within a year, hopefully in turn get the Blink/Chrome team to re-enable MathML; then we'd watch as Trident/IE (now Edge) would hurry to integrate the math support from LineServices.

Two years later, Gecko has moved sideways, WebKit has barely moved, Trident/Edge remains a mystery, and Blink is "the villain" (for dropping the WebKit MathML code). MathML is still the only viable markup language for mathematics (recently reaffirmed by its ISO standardization), and yet, native browser support seems just as far away as ever.

Why?

## Who implements native MathML support?

Gecko's and WebKit's (still quite partial) support has been almost exclusively implemented by volunteer contributors (and mostly unpaid volunteers at that).

Effectively, no browser vendor has ever worked on MathML support in their browser. (Yes, that's a bit unfair to Mozilla devs who are great -- sorry. There are also good people at Apple, Google, Microsoft; still, the companies all fail to invest in MathML browser support.)

The volunteers, on the other hand, come and go. Nobody is able to find significant funding and development is, once again, effectively dead.

At this point, I don't see how we can ever get sufficient native MathML support in browsers; the volunteer method does not work and the vendors remain uninterested.

## Where could we go instead?

The fact that browser vendors do not implement MathML says virtually nothing about MathML. Studying past discussions, it's clear that there isn't a lot of knowledge about the spec or the requirements of mathematical layout. (Again, this is a little unfair to some Mozilla devs.)

So I see no reason to give up on MathML, let alone math and science notation on the web. Because one thing has not changed: it's still the best markup for math -- and education, industry, and research need a good markup that works on the web.

While I don't think native browser implementations is a realistic goal at this point, I think MathML can still be a trail blazer, especially for scientific notation. It is, after all, a long standing W3C standard and we know it works very well in a browser context (even if you need polyfills).

I think there are two problems we can focus on that are just as useful to move scientific markup (and the web in general) forward:

1. how to do mathematical layout using the web standards that are widely implemented (and how to improve both)
2. how to expose the underlying markup to all tools that understand it

As opposed to native browser support for MathML, both of these are extremely feasible.

For the first, it recently became clear to that modern browsers (IE9+) are actually good enough for layout; that is, you can write converters from MathML to HTML or SVG markup so that the result is stable, i.e., provides the same layout on all browsers (comparable to TeX quality but naturally integrated into the page context). To be clear, this is not (just) about client-side rendering like MathJax (in fact, MathJax does not provide this yet).

The biggest problem is that the necessary markup itself is messy, making it hard to generate (just look at the spans-spans-spans that MathJax currently generates).

But is this unusual? I think this situation is not unlike how grids using Bootstrap or Foundation are overly complicated compared to grids using css-grid layout. Or how doing flexbox-like layout is horribly complicated without flexbox.

I think we should focus on widely implemented standards and work on improving them so that the markup you need for good math layout becomes cleaner and thus easier to generate (both in terms of structure/semantics and performance).

For the second point, looking at the developments of the semantic web, it's obviously not being realized in terms of mandated HTML tags or CSS properties. It is being realized via ARIA roles, RDFa, microdata etc. I'm not saying these approaches work for the semantic structure of MathML (let alone STEM in general) but something along those lines seems achievable.

Frankly, I'm a bit tired of waiting for <del>Godot</del> native browser support for MathML. MathML is frozen because we're all waiting for browsers to catch up. It is simply not happening. Let's look for ways to move forward.

---

_Comments_

* **gimsieke**, 2015-08-10

  > Nobody is able to find significant funding

  MathJax has managed to attract a significant network of donors. Why don’t they either encourage their “investors” to also invest in native math rendering, or why don’t they use the proceeds to fund native development directly? This shouldn’t be beyond their bylaws.

  * **Peter**, 2015-08-10

    > Why don’t they either encourage their “investors” to also invest in native math rendering,

    The "nobody" includes MathJax. Of course, the fact that we failed does not say much. The fact that everybody failed so far, might.

    > why don’t they use the proceeds to fund native development directly

    Because then we wouldn't be able to develop MathJax itself.

    > This shouldn’t be beyond their bylaws.

    Sure. Neither would be curing cancer.
