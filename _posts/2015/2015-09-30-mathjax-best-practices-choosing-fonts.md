---
layout: post
title:  MathJax font matching and pairing.
date: 2015-09-30
permalink: 0183/
---

In the age old tradition of cross-posting stuff I've written elsewhere.

A while back Tim Arnold, the awesome person behind projects like [plastex](https://github.com/tiarno/plastex) and [mathjax-server](https://www.npmjs.com/package/mathjax-server) asked the following question on the [MathJax User Group](https://groups.google.com/forum/#!topic/mathjax-users/Ze2XsPXWz2Q).

> I am trying to decide what font to use for MathJax. The TeX font is the default, but I think I remember that the STIX-Web fonts have the best glyph coverage.
>
> I have a lot of math to support on all kinds of browsers. What factors should I consider when choosing the best font to use in MathJax?

Soon thereafter, fellow Booles' Ringer [Dana Ernst](http://dcernst.github.io/) asked me the very same thing. At that point, I was hooked and started this post. It only took me a month to actually get around to finishing it because I wanted to include a basic demo.

**tl;dr.** Font pairing is an art, is a pain, is an art. I've cooked up a small example on CodePen that allows you to test Google fonts with various MathJax fonts. Just grab a font name from Google Fonts, paste it in and check out how the available math fonts pair up. For screen-real-estate reasons you might want to head over to CodePen. Easy as that.

<p data-height="268" data-theme-id="0" data-slug-hash="pjzVej" data-default-tab="result" data-user="pkra" class='codepen'>See the Pen <a href='http://codepen.io/pkra/pen/pjzVej/'>MathJax Font lab</a> by Peter Krautzberger (<a href='http://codepen.io/pkra'>@pkra</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<hr>

It is a complex question because, essentially, font pairing is an art. If you [simply look at existing sites that try to help you with this](https://css-tricks.com/sites-for-browsing-type-pairings/), it's clear that many people are looking for solutions while fully realizing that this is highly arcane design knowledge. Alas, I have no such knowledge. What I can add is that it's also a compromise between overall design and the effects on MathJax functionality. So let me summarize some of the important details.

The biggest limitation is obviously that MathJax only supports a handful of fonts. That's a bummer and we hope to add support for more fonts so if you're savvy and interested in helping out, reach out!

The next thing worth pointing out is that MathJax already goes a long way by matching the ex-height and em-height of the surrounding font, that is the height of `x` and `m`. That's simply best practice but more work on the web.

However, it's usually still important to pair the math font with the surrounding font carefully to avoid disrupting the reader's flow between math and non-math (because ex/em-heights are often not enough matching, especially for upper case letters). Of course, you could use the math font for the surrounding text to avoid that but most people strongly favor their options for text more (and rightly so, mathematics should always serve the text in my opinion).

The next important thing is usually another piece of font functionality. That is, most people like to weigh their options with respect to font coverage, i.e., which Unicode points are covered by glyphs in the fonts. For that it's important to consider what happens if MathJax encounters a Unicode point that's not in the glyphs of the configured fonts.

For the default MathJax "TeX" fonts (for historic reasons), there's an additional feature: MathJax supports a wider range of Unicode than the fonts themselves might tell you upon inspection of their glyphs. That's because MathJax builds some characters on the fly (e.g., the TeX fonts do not include a quadruple integral but build it out of two double integrals; similarly for "negated" characters). If I recall correctly, we only do this for the "TeX" fonts (the release that added the additional webfonts was simply sub-par for various unfortunate reasons, I'm afraid, and we never got around fixing it).

Next, MathJax will run through a (pretty complex) fallback chain within the configure fonts (e.g., upright Greek will be substituted with italic Greek because we think that's better).

Next, MathJax will ask the browser for a glyph, i.e, fallback to system fonts. Side fact: this also triggers reflows as MathJax has to measure the actual glyph as best it can (for the configured fonts, we generate the relevant data during production and load them on the fly but there are no browser APIs to get the relevant metrics for unknown fonts/glyphs).

The lack of exact information about an unknown glyph means that the layout can't be as precise as it is with our supported fonts. However, in many situations this is not a huge issue as such glyphs are usually rare and not part of complex layout situations. Then again, e.g., placing sub/supscripts can be affected so your mileage may vary.

The bigger issue (speaking from the complaints we get) is the randomness of the system font. You can control that via the `undefinedFamily` configuration option of each MathJax output processor. You might then also add a separate webfont for that fallback (well, if you can find one that helps with your content and both fonts for math and text; a tall order usually).

Finally, by testing / pre-processing your content via MathJax-node (for QA or for actual output), you can gather up the information on the missing glyphs for your content.

In the future, we are hoping to find the resources to expand the fallback cascade. The idea is to enable you to specify other supported fonts before the system fonts are used (e.g., use TeX fonts but then be able to fallback to Latin Modern or STIX). This would resolve the problem of measurements / layout quality but adds load (both webfonts and fontmetric data). In that context, we would probably work on simplifying our dev tools so that developers can build their own cascade. Finally, we would also hope to simplify our tools for generating the fontmetrics data, i.e., enable developers to modify a copy of MathJax to use their own in-house fonts. But there are some technical requirements to the fonts and considerations for a smart fallback chain so that's highly non-trivial to set up.

In any case, you can play around with the pen and let me know what you think, either here or on CodePen.

<p data-height="268" data-theme-id="0" data-slug-hash="pjzVej" data-default-tab="result" data-user="pkra" class='codepen'>See the Pen <a href='http://codepen.io/pkra/pen/pjzVej/'>MathJax Font lab</a> by Peter Krautzberger (<a href='http://codepen.io/pkra'>@pkra</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
