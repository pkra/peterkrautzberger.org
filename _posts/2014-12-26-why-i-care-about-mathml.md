---
layout: post
title: Why I care about MathML
date: 2014-12-26 03:09:34.000000000 +01:00
categories:
- technology
- web
tags:
- mathml
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _publicize_twitter_user: "@pkrautz"
  _cws_is_markdown_gmt: '2014-12-26 11:09:34'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

[This is week 6~7? Mpf, I missed one (and a half?), bummer. I'll try to make up for it.]

When I started this writing challenge, I had listed a couple of potential blog post titles. One of them was "Why you should care about MathML". I realized later that I really didn't want to pretend I could even try to tell my two readers what they should or should not care about. Instead, I want to jot down (remember: 30mins time limt) a few reasons why I started to care about MathML, [alot](http://hyperboleandahalf.blogspot.de/2010/04/alot-is-better-than-you-at-everything.html).

[![I care about this Alot](assets/ALOT2.png)](http://hyperboleandahalf.blogspot.de/2010/04/alot-is-better-than-you-at-everything.html)

> © Ellie Brosh

Unsurprisingly, it was in many ways a story of my education. Here are two quotes from yours truly.

> I think MathML is so far the best solution to present mathematical content on the web  
>  -- [actually me](http://thelazyscience.blogspot.de/2009/12/testing-mathml.html), Dec. 2009

Actually, more stuff wrong on my post; also, referencing Terry Tao's blog, weird.

> But mathml sucks [...]  
>  -- [also actually me](http://blogs.plos.org/mfenner/2011/01/23/beyond-the-pdf-is-epub/#comment-2489), Feb. 2011

(In my defence, I probably meant authoring tools and browser support.)

So as you can see, I flip-flopped a bit there (and, in a fundamentally different way, I still do). So here are five short reasons why I care about MathML.

### a stable exchange format

When I started using MathJax on a personal blog (thanks to the above quote I realize I started blogging [5 years ago this month](http://thelazyscience.blogspot.de/2009/12/welcome.html), ([local copy](http://boolesrings.org/krautzberger/2009/12/07/welcome-2/)), although I think I started to blog a year ealier on scivee.tv (though this seems lost)), I was first annoyed and then very happy to not use macros. Obviously, you can use macros with MathJax but I started to avoid personalized macros at all costs. Ultimately, they prevented me from writing mathematics elsewhere and they limited re-use of my writing by other people (well, ok, that's more hope than reality I suppose).

MathML does not suffer any of these complications (well, technically Content MathML could if anyone used it). Instead, MathML provides a truly stable format for storing equational content while still allowing for re-use. Granted, it's not exactly easy to write by hand but neither are SVG or HTML/CSS (certainly not as soon as you want to express something more complex). Still, I'd encourage anyone to spend some time with it (e.g., try copy-editing a random piece of MathML and compare that to copy-editing some macro-filled LaTeX horror). In any case, creating MathML is straight forward, especially for those knowing LaTeX syntax (even if we could use a a good open-source MathML editor). Ultimately, MathML is more readable in isolation thanks to its nature of being actually a mark-up language and not a programming language.

### a focus beyond research

What struck me early on was how successful MathML was outside of research. Research mathematicians (and scientists) tend to think their habits are vital for the longevity of mathematical writing. However, technical writing (such as industrial (think aerospace) documentation), engineering, and most importantly school-level mathematics are arguably more important -- and have benefited enormously from a mathematical markup that is easily handled by researchers and non-researchers alike. MathML has brought high quality rendering together with easy authoring to an incredibly wide and diverse community; a huge accomplishment.

### accessibility, for real

What I also learned early on (in crass contrast to my 2009 self above) was that MathML has turned out to be critical for having truly accessible mathematics.

Of course, TV Raman's AsTeR voiced TeX/LaTeX long before MathPlayer, ChromeVox or VoiceOver voiced MathML. But besides the refinements (which later tools could so easily provide), the notion of accessibility stretches far beyond voicing and visually impaired users. Features like synchronized highlighting would be much harder in TeX (just think about identifying subexpressions in a complex TeX macro, let alone in poorly authored TeX) but they are critical for helping people with learning or physical disabilities. Even more advanced features like summarization and semantic analysis are much more straight forward in a markup language like MathML than in TeX. And so is search whose importance can hardly be overstated in times of ever increasing publication pressure; without search mathematical knowledge won't be accessible to us in the long run.

### the DOM (etc)

The main reason why MathML is irreplaceable on the web is its compatibility with the DOM. This allows web developers to apply the full breadth of their tools to make mathematical content truly native instead of copying print-based layout. We cannot re-invent everything as Knuth did because web "typography" is far from finished and communicating on the web will probably change drastically every couple of years for the foreseeable future (just like communicating using the printing press did in another age). Having a naturally fitting technology allows mathematics to continually evolve its expression alongside other forms of expression on the web -- an incredible benefit (and challenge!).

### an open future to revolutionize how we "speak" mathematics

This leads me straight to the last and probably main reason why I care for MathML. What the web has already done for regular language (all over the world), it can do for the language of mathematics: transform the way we communicate; expand, enhance, deepen, and lighten the way we express mathematical thought. You don't have to be Bret Victor to believe that in 30 years we will have developed new forms of expressions that truly leverage web technology and eliminate baroque limitations of black-and-white, print layout. We should strive to do so much better and I believe MathML is an important step in this direction.