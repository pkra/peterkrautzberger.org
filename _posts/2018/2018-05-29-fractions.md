---
layout: post
title: "Experimenting with fractions for the web"
date: 2018-05-29
permalink: 0205/
published: true
---

I just got back from a week in San Jose at the [AIM workshop on web accessibility of mathematics](https://aimath.org/workshops/upcoming/webmath/). It was an intense week for me and there's a ton to write about.

This morning I came back to something I had drafted after Joanmarie Diggs proposed a session on a particular hack (but the group didn't end up focusing on this in the unconference style workshop setting).

## That's not a fraction. <em>That's</em> a fraction!

One of my [go](0199/)-[to](0196/) [examples](0192/) when explaining that Presentation MathML is devoid of semantics is the `<mfrac>` element. While it clearly hints at being a fraction, the spec itself [clearly states](https://www.w3.org/TR/2014/REC-MathML3-20140410/chapter3.html#presm.mfrac) that it is not, semantically, a fraction but that it may be used for completely different things that visually look like fractions, e.g., binomial coefficients or the Legendre symbol; in fact, you can find many even less fraction-like examples (such as logical deductions) in the wild because a vertical stack with a properly aligned line is simply a neat layout feature.

Since Presentation MathML never specifies semantics, let's look how Content MathML encodes fractions. The [spec](https://www.w3.org/TR/2014/REC-MathML3-20140410/chapter4.html#contm.cn) would have you write something like `<cn type="rational">22<sep/>7</cn>`. It's a terribly good example for how Content MathML is a bit too strong in its abstraction for human communication (also, check the transcription to Presentation MathML). As an aside, if you need more examples of why `<mfrac>` is not meaningful, just search that section.

## Hacking tips for accessibility experiments

Anyway, at the workshop Joanie had proposed the following. It turns out, Firefox is <s>too lazy</s> *ahem* too performance-oriented to sanitize invalid ARIA roles. This allows you to experiment with made-up properties fairly easily (assuming you can modify your screenreader of choice).

So for example, you could slap an `aria-math` attribute to your markup and this would show up in OS-level accessibility inspectors such as [aViewer](https://developer.paciellogroup.com/resources/aviewer/) or [accerciser](https://help.gnome.org/users/accerciser/stable/introduction.html.en). What Joanie had in mind (I believe) is that we could have tried to expose additional information this way so that Joanie could hack something into [ORCA](https://help.gnome.org/users/orca/stable/index.html.en) and then get Mick and Reef to modify [NVDA](https://www.nvaccess.org/) or David to modify [ChromeVox](http://www.chromevox.com/) (and maybe even hear what Glen thinks of it from a JAWS perspective). And yes, all these incredible people were actually there in person.

## To fractinity, and beyond!

Since an idea that I had proposed to the group (exploring web components for mathematical documents) also didn't stick, I thought I'd combine the two when I get the chance. Luckily, I had a long flight home.

<span lang="fr">Et voilà</span>, a custom element fraction that adds `aria-math` roles to itself magically (using `fraction`, `numerator`, `denominator` and`fraction-line`).

<p data-height="265" data-theme-id="0" data-slug-hash="MGdmQj" data-default-tab="html,result" data-user="pkra" data-embed-version="2" data-pen-title="AIM Workshop custom element: fraction" class="codepen">See the Pen <a href="https://codepen.io/pkra/pen/MGdmQj/">AIM Workshop custom element: fraction</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

It's not much and not really a "document"-level element as I was thinking about (then again, Joanie had hoped for improving an `<mfrac>` directly) but it's a nice (non-functional) concept, and perhaps helpful when thinking about ARIA `role-description`.
