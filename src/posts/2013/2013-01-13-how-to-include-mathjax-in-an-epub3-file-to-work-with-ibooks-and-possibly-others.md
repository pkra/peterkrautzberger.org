---
layout: post
title: How to include MathJax in an epub3 file to work with iBooks (and possibly others)
date: 2013-01-13
categories:
- conference
- mathjax
- technology
tags:
- epub
- epub3
- iBooks
- joint mathematics meetings
- joint mathematics meetings 2013
- Lila Roberts
- mathml
published: true
permalink: 0129/
tex: true
---

At the Joint Mathematics Meetings [Present and Future of Mathematics on the Web](http://jointmathematicsmeetings.org/meetings/national/jmm2013/2141_program_ss62.html) session, Lila Roberts presented an excellent demo of the good stuff you can do with iBooks author. The demo included MathJax and jsxgraph, and combined both with iBooks Author's easy, pretty layout tools. Of course, the drawback is that iBooks Author is

*   a proprietary format
*   restricted to iPads (not just iOS)
*   you're not allowed to sell an iBooks Author file except through iTunes.
*   iBooks Author is not transparent about how its formula editor produces SVGs out of TeX but pastes MathML directly into a page, leading to inconsistent renderings of equivalent mathematics
*   MathML support of iBooks on iOS5 devices is severly broken (and will likely never be fixed) thanks to a mobile Safari bug that screws up the use of STIX fonts.

Anyway, I mentioned in the session that you can actually include MathJax in epub3 files directly to get much of the same. Well, you have to do the pretty layouts yourself and you'll depend on a javascript-enabled epub3 reading software (like iBooks) but at least you're using an open standard and retain your rights.

## Let's get started!

If you're lazy, grab the file at the end of the post and hack from there. But I'll walk you through it.

*   If you want to learn something, grab a copy of [MathJax](http://github.com/mathjax/mathjax)
*   slim it down as described [here](https://github.com/mathjax/MathJax/wiki/Shrinking-MathJax-for-%22local%22-installation)
*   I went all the way and restricted output to SVG -- to minimize things and to make it work. HTML output should work on iOS5, but last I checked Apple changed something on iOS6 that I couldn't track down for lack of devices.

Alright, that's the basics. You now have a copy of MathJax that works on any reasonably recent webkit browser, including most Android and iOS versions.

You have all inputs (LaTeX, asciimath, MathML) available but only SVG output (well, and native MathML but if that worked we wouldn't be here...).

## What's next?

Create your document. That's actually hard if you don't have a workflow already and don't want to afford InDesign, Blue Griffon etc.

Personally, I will always try pandoc first. It's the most versatile tool there is and John McFarlane is just fantastic. Its TeX implementation is enough if you are writing TeX with HTML/epub output in mind, I'm sure you won't run into trouble.

If you can, consider to go through the Haskell-cabal-pain of installing the current development version -- see the instructions [at the pandoc github wiki](https://github.com/jgm/pandoc/wiki/Installing-the-development-version-of-pandoc-1.10). That will get you the new epub3 writer and things should be easy.

Of course, you can hack the example file below and just use a current version of pandoc or whatever you like to generate some xHTML5 (yes, xhtml, not html if you want your file to validate). You'll have to modify the manifest etc by hand.

Anyway, let's daringly assume you have an epub3 with your xhtml+mathml content.

## Adding MathJax.

*   add the slim down version of MathJax to your epub file using your favoriate tool for adding content to a zip file. (Don't unzip/rezip unless you know what epub needs when zipping...)
*   Assuming you're using the copy as in the attachement, add the following to your manifest (modify paths and id's if needed)
     ```
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/BasicLatin.js" id="id0" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/MiscMathSymbolsB.js" id="id1" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/d.js" id="id2" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/jax.js" id="id3" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/cancel.js" id="id4" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/a.js" id="id5" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/AsciiMath/jax.js" id="id6" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/ms.js" id="id7" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/mathchoice.js" id="id8" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Script/Regular/Main.js" id="id9" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/extpfeil.js" id="id10" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/AsciiMath/config.js" id="id11" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/Arrows.js" id="id12" media-type="application/x-javascript"/>
     <item href="mathjax/images/CloseX-31.png" id="id13" media-type="image/png"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/LatinExtendedA.js" id="id14" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Italic/Other.js" id="id15" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Size3/Regular/Main.js" id="id16" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Size2/Regular/Main.js" id="id17" media-type="application/x-javascript"/>
     <item href="mathjax/images/MenuArrow-15.png" id="id18" media-type="image/png"/>
     <item href="mathjax/jax/input/TeX/jax.js" id="id19" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Size1/Regular/Main.js" id="id20" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/h.js" id="id21" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/l.js" id="id22" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Bold/PUA.js" id="id23" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/AMSsymbols.js" id="id24" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/CombDiacritMarks.js" id="id25" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Regular/PUA.js" id="id26" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/GreekAndCoptic.js" id="id27" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/LatinExtendedB.js" id="id28" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/LatinExtendedA.js" id="id29" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/MiscSymbols.js" id="id30" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/scr.js" id="id31" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/MiscSymbols.js" id="id32" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/MiscTechnical.js" id="id33" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/newcommand.js" id="id34" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/mmultiscripts.js" id="id35" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/p.js" id="id36" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Typewriter/Regular/Main.js" id="id37" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/o.js" id="id38" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/annotation-xml.js" id="id39" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/u.js" id="id40" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Bold/BasicLatin.js" id="id41" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Regular/BasicLatin.js" id="id42" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Size4/Regular/Main.js" id="id43" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/noUndefined.js" id="id44" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/k.js" id="id45" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/LetterlikeSymbols.js" id="id46" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/HTML.js" id="id47" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Regular/Main.js" id="id49" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/MiscSymbolsAndArrows.js" id="id50" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Bold/BasicLatin.js" id="id51" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/GeometricShapes.js" id="id52" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/GeometricShapes.js" id="id53" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/config.js" id="id54" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/enclose.js" id="id55" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/EnclosedAlphanum.js" id="id56" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/mhchem.js" id="id57" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/verb.js" id="id58" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/GeneralPunctuation.js" id="id59" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/MathMenu.js" id="id60" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/GeometricShapes.js" id="id61" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/PUA.js" id="id62" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/LetterlikeSymbols.js" id="id63" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/z.js" id="id64" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Bold/Main.js" id="id65" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/SpacingModLetters.js" id="id66" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Bold/Other.js" id="id67" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/autoload-all.js" id="id68" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Bold/CombDiacritMarks.js" id="id69" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/noErrors.js" id="id70" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/g.js" id="id71" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Regular/BasicLatin.js" id="id72" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/SpacingModLetters.js" id="id73" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/MiscSymbols.js" id="id74" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/GreekAndCoptic.js" id="id75" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/Main.js" id="id76" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/mml2jax.js" id="id77" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/GeometricShapes.js" id="id78" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/i.js" id="id79" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/q.js" id="id80" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/toMathML.js" id="id81" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/NativeMML/config.js" id="id82" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/BasicLatin.js" id="id83" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/boldsymbol.js" id="id84" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Typewriter/Regular/Other.js" id="id85" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/BoxDrawing.js" id="id86" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/begingroup.js" id="id87" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/v.js" id="id88" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/MiscMathSymbolsA.js" id="id89" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Math/BoldItalic/Main.js" id="id90" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Bold/Other.js" id="id91" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/menclose.js" id="id92" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/LetterlikeSymbols.js" id="id93" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Typewriter/Regular/CombDiacritMarks.js" id="id94" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/GeneralPunctuation.js" id="id95" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/MiscMathSymbolsB.js" id="id96" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/x.js" id="id97" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Regular/Other.js" id="id98" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/j.js" id="id99" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/MathZoom.js" id="id100" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/MiscMathSymbolsA.js" id="id101" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/unicode.js" id="id102" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/c.js" id="id103" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/NativeMML/jax.js" id="id104" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/SupplementalArrowsB.js" id="id105" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/autobold.js" id="id106" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/SuppMathOperators.js" id="id107" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Regular/Main.js" id="id108" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/action.js" id="id109" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/fr.js" id="id110" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/Dingbats.js" id="id111" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/Dingbats.js" id="id112" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Italic/CombDiacritMarks.js" id="id113" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/Arrows.js" id="id114" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/MathEvents.js" id="id115" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/MathOperators.js" id="id116" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Caligraphic/Bold/Main.js" id="id117" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/MathOperators.js" id="id118" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/Latin1Supplement.js" id="id119" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/CombDiacritMarks.js" id="id120" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/f.js" id="id121" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/Main.js" id="id122" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/bbox.js" id="id123" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/config.js" id="id124" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/CombDiactForSymbols.js" id="id125" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Regular/CombDiacritMarks.js" id="id126" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/Arrows.js" id="id127" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/SupplementalArrowsA.js" id="id128" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/r.js" id="id129" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/GeneralPunctuation.js" id="id130" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Italic/BasicLatin.js" id="id131" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/SuppMathOperators.js" id="id132" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/opf.js" id="id133" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/fontdata.js" id="id134" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/SpacingModLetters.js" id="id135" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/mglyph.js" id="id136" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/MathOperators.js" id="id137" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/GreekAndCoptic.js" id="id138" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/CombDiactForSymbols.js" id="id139" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Bold/Main.js" id="id140" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/w.js" id="id141" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/MiscTechnical.js" id="id142" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/Latin1Supplement.js" id="id143" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/MathOperators.js" id="id144" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/LetterlikeSymbols.js" id="id146" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/m.js" id="id147" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/GeneralPunctuation.js" id="id148" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/multiline.js" id="id149" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/LatinExtendedA.js" id="id150" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/mtable.js" id="id151" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/LatinExtendedA.js" id="id152" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/SansSerif/Italic/Main.js" id="id153" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/asciimath2jax.js" id="id154" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/jax.js" id="id155" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/AMSmath.js" id="id156" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/b.js" id="id157" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/fontdata-extra.js" id="id158" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/SuppMathOperators.js" id="id159" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/MathOperators.js" id="id160" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/s.js" id="id161" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Script/Regular/BasicLatin.js" id="id162" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Caligraphic/Regular/Main.js" id="id163" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/SpacingModLetters.js" id="id164" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/GreekAndCoptic.js" id="id165" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/BasicLatin.js" id="id166" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/SupplementalArrowsA.js" id="id167" media-type="application/x-javascript"/>
     <item href="mathjax/MathJax.js" id="id168" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/TeX/config.js" id="id169" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/BasicLatin.js" id="id170" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/CombDiacritMarks.js" id="id171" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/TeX/color.js" id="id172" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/Main.js" id="id173" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/LatinExtendedB.js" id="id174" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Italic/CombDiacritMarks.js" id="id175" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Fraktur/Regular/Other.js" id="id176" media-type="application/x-javascript"/>
     <item href="mathjax/extensions/tex2jax.js" id="id177" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/MiscTechnical.js" id="id178" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/autoload/maction.js" id="id179" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/GreekAndCoptic.js" id="id180" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Bold/LatinExtendedB.js" id="id181" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/n.js" id="id182" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/t.js" id="id183" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Typewriter/Regular/BasicLatin.js" id="id184" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/SuppMathOperators.js" id="id185" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/y.js" id="id186" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/jax.js" id="id187" media-type="application/x-javascript"/>
     <item href="mathjax/jax/input/MathML/entities/e.js" id="id188" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/LetterlikeSymbols.js" id="id189" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/AMS/Regular/Latin1Supplement.js" id="id190" media-type="application/x-javascript"/>
     <item href="mathjax/jax/element/mml/optable/CombDiacritMarks.js" id="id191" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Math/Italic/Main.js" id="id192" media-type="application/x-javascript"/>
     <item href="mathjax/jax/output/SVG/fonts/TeX/Main/Regular/Main.js" id="id193" media-type="application/x-javascript"/>
     ```
*   To each xhtml file that contains MathML, add
     ```
     <script type="text/x-mathjax-config">
     MathJax.Hub.Config({
     jax: ["input/TeX","input/MathML","output/SVG"],
     extensions: ["tex2jax.js","mml2jax.js","MathEvents.js"],
     TeX: {
     extensions: ["noErrors.js","noUndefined.js","autoload-all.js"]
     },
     MathMenu: {
     showRenderer: false
     },
     menuSettings: {
     zoom: "Click"
     },
     messageStyle: "none"
     });
     </script>
     <script type="text/javascript" src="../mathjax/MathJax.js"> </script>
     ```
*   I have not activated automatic linebreaking because there's currently [a bug](http://github.com/mathjax/mathjax/issues/368) in MathJax on iOS6. If MathJax detects the need to break the line, you'll get Math Processing errors instead.
*   For each xhtml file with the above we'll have to modify the `properties`-part in the manifest to have both `mathml scripted`, e.g., in the sample file you'll see
    *   `<item id="c3" media-type="application/xhtml+xml" href="xhtml/ch1.html" properties="mathml scripted"/>`
*   And then you can include wonderful MathML and even webkit deficiencies or the horrible iOS5 Safari+STIX bug will be meaningless to your epub file and you can actually publish a mathematical epub file to be read on iBooks.
  $\widehat{x}+\widehat{xy} + \widehat{xyz}$

* * *

This text is [available as an epub3 file](/assets/2013/How%20to%20include%20MathJax%20in%20an%20epub3%20file%20to%20work%20with%20iBooks%20%28and%20possibly%20others%29.epub) which includes MathJax and should run on iOS devices.

---

_Comments_

* **Lila Roberts**, 2013/01/15
  I’d like to try to create an epub file–I must admit the opf file is quite intimidating. pandoc looks nice; but I do have inDesign and BlueGriffon. I’ll keep you posted. Thanks, Peter!
  * **Peter**, 2013/01/15
  yes, creating opf files is a pain. For experiments, you can just hack the sample file from the post. iBooks doesn’t complain if the opf is incomplete, so you can just add jsxgraph etc to the file, too.
* **AndrewMcDermott**, 2013/01/25
  Hi Peter
  Great post, I’ll give this a go in the next week or so hopefully, if things calm down a little on our project. Will let you know how I get on!
  * **Peter**, 2013/01/25
    great! let me know how it goes.
* **Peter**, 2013/02/14
  Hi Andrew. I think this was caught in moderation — sorry. Great to hear it works for you. I hope we can get HTML output running again since that behaves better wrt to CSS.
  You can of course include both images and MathML and have MathJax replace the images with its rendering. That way you can support all systems using the same file.
* **Johannes Wilm**, 2013/05/04
  nice one! We have included this in our javascript based epub generator at [http://www.fiduswriter.com](http://www.fiduswriter.com). I must admit though that I haven't found any ereaders that can make use of this. Is there a list somewhere of what readers support javascript? I noticed thatyou guys are really against prerendering things, but I wonder if maybe thatis needed anyway. So at first I tried looking at the style declarations that are being included in the -section by mathjax. The most important thing missing there seems to be the font-face declarations. I haven'tlooked too much into whether they can be recreated some way.
  The other way one could go would be to try to convert the rendered SVG to a canvas element and from there to an img, which could be saved within the epub. I haven't tried it, but was thinking of something like [https://code.google.com/p/canvg/](https://github.com/gabelerner/canvg).
  Are there any other recommentations you have?
  * **Peter**, 2013/05/05
    Hi Johannes, sorry that this was stuck in the moderation queue. Somehow I didn’t get the notification… This warrants a longer reply, as your comment is hitting on many problems and misconceptions at once 😀 (not you personal, just the way the comment can be misunderstood).
  * **Peter**, 2013/05/05
  Ok, here’s a longer attempt.
  The solution was only tested on iBooks. There are hardly any other javascript-enabled readers out there since epub3 does not require javascript support (although it at least premits it as opposed to epub2). I try to keep [docs.mathjax.org/en/latest/misc/epub.html](http://docs.mathjax.org/en/latest/misc/epub.html) up to date but I know a number of Android apps are missing (one of which actually supports javscript).
  Why MathJax people often appear to be “against” pre-rendering is simple: that’s what MathJax set out to eliminate! Especially in professional publishing there’s a long history of rendering MathML as images (for over a decade now). We need to get beyond that. Another reason is that the MathJax team tries to get another point across: there’s no need anymore! Every epub3 reader out there uses a modern browser engine underneath that MathJax supports. So they can all integrate MathJax internally to get MathML support. Also, by now, there’s a MathML capable epub3 reader for every platform. Of course that’s not enough for professional publishing, but they are far too conservative anyway.
  Also, MathML is the only way to get accessible mathematics right now. Alt-text is simply wrong (except when it’s MathML I guess) — it is not adequate in today’s a11y world where several groups need drastically different rendering, mixed modes and verbosity levels (blind, low vision, learning disabilities etc).
  Now image renderings (well, SVG anyway) would be ok if anybody supported epub3’s switch element — then at least, publishing could develop forward.
  Sp you’re right: if fiduswriter wants to do epub3 production that works everywhere today, then image renderings are the only stable choice — as much as it pains me to say. At the same time, make sure you’re not stuck at that (too many math solutions are). A generally bad but here fitting example is the proprietary horror that is the iBooks Author format. If you use TeX input in iBA2, then you’ll end up with SVG and MathML in the file, likely so that Apple can switch to MathML once Safari supports MathML properly (which may never be the case since they have never paid anyone to actually develop it…). For a wonderful example of inconsistency: iBA2 also accepts MathML input, which gets copied as is — so won’t display properly when the MathML is beyond Safari’s limited MathML support… Way to push MathML, Apple…
  Finally, MathJax output cannot be very well pre-rendered, even as SVG. The HTML-CSS output depends strongly on the viewport configuration at the time of rendering. Which means reflow (which is basically the point of ebooks) easily screws it up, especially when fancy new CSS tricks comes into play at that point. Even the SVG output cannot be pre-produced on the level of real MathJax rendering, linebreaking and other tricks break (besides it blows when it comes to simple things like night mode and more generally at accessibility).
  PS: a canvas output is in our backlog.
* **Johannes Wilm**, 2013/05/05
  I see. The epub with mathjax in it worked fine in IBooks, while in Adobe Digital Editings (installed via Wine) and my Nook Glow Light, it just doesn't run the Javascript. It seems to crash the ebook reading app that comes with Calibre.
  Epubs themselves may have a limited lifespan, as ebook readers will get fullblown browsers with time, and once there is MathML support everywhere, we may just need a smaller script of some kind to translate Tex-based maths to MathML... The point is that the landscape is changing rapidly and that one needs to adjust one's solutions quite a lot over the next few years.
  So, I was thinking: To get smething that is working with today's devices, instead of this:
  `$X=Y^2$`
  which is rendered fine on only some devices, have something like this:
  &nbsp;
  Then the ebook readers that cannot run jaascript will show the image and those that can (IBooks) can calculate the mathjax formula. Of course, mathjax has to be run manually with some javascript, as it cannot find the equation it should render as easily, but I'm sure this can be done.
  As for SVG vs. IMG -- I didn't look enough at the svg-canvas library, but assuming that it permits me to copy an already rendered SVG to a canvas, that should mean that I should be able to create a canvas which easily can be converted to an IMG and then saved inside the epub.
  But you would maybe argue that it is preferable to just include the SVG directly? For that I assume I would copy the SVG code from the DOM, copy the extra style information that has been added to the header, and find the fonts that have been added through some other trick (cannot find them in hte header) and add those to the mix as well. Right?
* **Johannes Wilm**, 2013/05/05
  Ah, this system ate most of my code examples. let me try again:
  So, I was thinking: To get something that is working with today’s devices, instead of this:
  `<span class="equation"><MATH>X=Y^2</MATH></span>`
  which is rendered fine on only some devices, have something like this:
  `<span class="equation" data-equation="X=Y^2"><IMG src="..." alt="an equation showing X=Y^2"/></span>`
  * **Peter**, 2013/05/05
  As I wrote, ideally, you would produce some kind of image fallback and use the epub-switch element. Unfortunately, very few epub3  reading systems support it. Even worse, they often react the wrong way to it: using MahtML instead of the image :(
  Unfortunately, your "once there's MathML support everywhere" makes me cry a little as I just replied to https://groups.google.com/forum/?fromgroups=#!topic/mozilla.dev.platform/96dZw1jXTvM. There's currently zero development going into browsers. I hope we can change that, but this will be a while.
  Anyway, yes, MathJax can easily replace images by rendering embedded code. Case in point: bookmarklets for doing that on Wordpress.com and Wikipedia https://gist.github.com/pkra
  You can use SVG -- both canvas and SVG are part of epub3. Grabbing MathJax output is certainly possible, but with constraints. Making MathJax work also outside the DOM (with those constraints) is in our backlog, but has been for a while. You might find https://github.com/agrbin/svgtex interesting.
