---
layout: post
title: MathML Forges On -- notes, AAP leftovers, and a summary
date: 2013-11-02 19:21:05.000000000 +01:00
categories:
- mathjax
- mathml
- technology
tags:
- AAP
- AAP epub3 initiative
- epub3
- O'Reilly
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2013-11-03 04:10:26'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

["The end (tm)" of MathML in Chrome this week](http://boolesrings.org/krautzberger/2013/10/29/thoughts-on-the-end-tm-of-mathml-in-chromechromium/) happened to coincide with a piece I had been working on for a while now and which was published at O'Reilly's Programming blog (["MathML Forges On"](http://programming.oreilly.com/2013/11/mathml-forges-on.html)) yesterday. Originally, I had meant to write something for O'Reilly's TOC blog earlier this year, but then the TOC conference was retired (and so was the blog) so things got delayed.

Then in the summer, the ever fantastic [Tzviya Siegmann](https://twitter.com/tzviyasiegman) pulled me into the [AAP's EPUB implementation project](http://publishers.org/epub3implementationproject/) and so I had a chance to be active in both the features and the accessibility groups. It was an extremely interesting experience all around so just two points. First, I am amazed at the work of the group leaders, handling the difficulties of running such a complex project, in a very short time, with a highly diverse group of participants. Second, it was an experience to, well, experience anti-trust concerns like that. While frustrating at times, I didn't find this tragic in the end; there was more to lose than to gain. But it felt strange to be on the other end of the stick, so to speak, wanting to drive publishers and reading systems to close collaboration so that we can finally get decent support for math & science in ebooks. The [AAP white paper came out](http://publishers.org/press/117/) this week.

During that time I also wrote the first drafts for "MathML Forges On" (the title was a suggestion of Simon St. Laurent who has been a great editor). I want to thank Fred Wang, David Carlisle, Neil Soiffer and Dave Barton for many helpful comments and Sanders Kleinfeld for being a matchmaker, twice.

During the AAP project, I also summarized the technical details a little with suggestions for the short term. This wasn't useful to the AAP project but there's no reason to throw it away -- so here it is.

## A sort of summary

> **Note.** This was written with the following question in mind: how can we speed up MathML adoption in epub3? Well, one way would be to understand what level of support can be achieved in the short term. Since full MathML 3 support is simply not available, compromises have to be made. This means creating guidelines for publishers to ensure their content can be supported and for reading systems to understand how they can support that level. And for both sides to push each other -- publishers, pushing reading systems by pointing out an achievable level of support; reading systems pushing publishers to create reasonable MathML.

Native MathML support in browser is limited to partial support in Firefox and Safari; JavaScript polyfills are available and have been used in reading systems.

**Recommendation**: "Firefox 24"-level MathML support is a good baseline in the short term (6-12 months). This amount of MathML support covers most publishing needs and any ePub3 reading system can realistically provide this level of support via Gecko or polyfills within 6 months. The open source STIX and Asana fonts should be the default math fonts since technical limitations make them the only widely supported fonts in web environments.

### Browser support

*   Firefox: production ready. Good support for MathML, details at [https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Status](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Status). Notably missing: linebreaking, elementary math, mtable labels and some mtable alignment attributes.
*   Safari/WebKit: not production ready. Partial MathML support, details [https://trac.webkit.org/wiki/MathML%20Status](https://trac.webkit.org/wiki/MathML%20Status). Notably limited/missing: horizontal stretch characters, multiscripts, RTL, linebreaking, elementary math, most mtable attributes.
*   IE: no support for MathML. For older IE versions (6-9), the MathPlayer plugin offers virtually complete MathML support.
*   Chrome: no support for MathML.

### Polyfill support

*   MathJax: good MathML support, high rendering quality, details at [http://docs.mathjax.org/en/latest/mathml.html](http://docs.mathjax.org/en/latest/mathml.html). Notably missing are RTL, elementary math, and advanced mtable alignments.

MathJax is modular, its primary output options are HTML and SVG, where it implements the TeX layout algorithm. MathJax can also augment native MathML output in Safari and Firefox (trading speed for layout quality). MathJax offers accessibility features (zoom, scale, copy&paste) and works well with existing math accessibility solutions (MathPlayer, ChromeVox). MathJax has been integrated into epub3 reading systems such as Readium, Vitalsource Bookshelf, Azardi and IDEAL reader.

*   Jqmath: MathML support is undocumented but will cover MathML 2; it exceeds WebKit/Safari and can render low-complexity content on par with Firefox, see [http://mathscribe.com/author/jqmath.html](http://mathscribe.com/author/jqmath.html).

Jqmath tweaks browser layout instead of implementing a separate algorithm, trading speed for layout quality. Jqmath tries to be font agnostic and assumes browsers can access the necessary fonts and unicode points. Since its developer contributed to WebKit's MathML support, it works particularly well on Safari (augmenting the MathML output).

### Fonts

Fonts are a particularly complex issue for mathematics and MathML. Here are a few problems:

*   most fonts do not contain mathematical characters and cannot be used.
*   many mathematical and scientific characters lie outside the unicode BMP but only very recent browser versions support non-BMP codepoints.
*   MathML requires stretchy characters build out of multiple glyphs (such as parenthesis, braces, root signs etc); some of these do not have unicode points associated with them. To work around these issues:
    *   Gecko/Firefox has hardcoded support for some fonts. Fully supported are only STIX and Asana Math, see [https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Fonts](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Fonts)
    *   Safari only supports some stretchy constructions with unicode glyphs.
    *   MathJax provides fontdata for its own webfonts as well as STIX fonts. The upcoming MathJax v2.3 release will add custom webfonts for STIX, Asana Math, Neo Euler, and Gyre-Pagella.
    *   MathPlayer supports a number of the legacy 8 bit fonts (symbol, Euclid, Mathematica fonts, ...) that it knows how to map and should support all modern "unicode" fonts (fonts whose characters are in their Unicode spots). It only deals with plane 0 characters at the moment. For stretchy characters, MathPlayer needs to know what extension characters go with what characters. Again, it support a number of legacy 8 bit fonts as well as the STIX fonts.
*   Microsoft has developed (but not officially released) the OpenType MATH table extension which could eventually resolve these problems. However, no browser supports MATH tables; in addition, this kind of font data is not accessible to JavaScript. See also [https://www.tug.org/TUGboat/tb30-1/tb94vieth.pdf](https://www.tug.org/TUGboat/tb30-1/tb94vieth.pdf)