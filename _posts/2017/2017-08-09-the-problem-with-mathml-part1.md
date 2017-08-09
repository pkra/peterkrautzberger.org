---
layout: post
title: "The problem with MathML as a web standard (part 1)"
date: 2017-08-09
permalink: 0197/
published: true
---

Time to wrap things up.

## Prelude

After finishing [MathML as a failed web standard](/0186/) last year, I've been meaning to write a follow-up to discuss fundamental issues I see with MathML as a web standard. I found it very difficult, even painful to do so. Over the past few years I realized that most people simply don't know much about <em>both</em> MathML and modern web technology. I don't claim I'm a great expert myself but running [MathJax](https://www.mathjax.org) for the past 5 years has given me some ideas.

<em>Caveat Emptor</em>. The problems I hope to outline may seem to be a general rejection of MathML as a whole; that's not what I'm after. It'd actually be silly to try to bash MathML because it is simply too successful. I also actually kind of like MathML, despite its many horrors; I think it was a great idea [20 years](https://en.wikipedia.org/wiki/MathML#History) ago and it's still useful to hack it to get to better things.

Primarily, what follows is the result of me trying to understand why MathML failed on the web. I think there are a few key reasons for its failure. My motivation is to form an opinion on whether MathML is salvageable as a web standard or fundamentally unfit to be part of today's web technology (and should then best be deprecated).

The success outside of the web is an important factor as it limits how much MathML can realistic change. So let's start there.


## The first problem: not <i>of the web</i>

MathML is the dominant format for storing equations in XML document workflows today. It's a reasonable assumption that the vast majority of equational content today is available in (or ready to convert to) MathML: virtually all STEM publishers use MathML in their workflows, major tools like Microsoft Word (favored throughout education) use formats intentionally close to MathML, and most other forms of equation input can be converted more or less easily.

MathML has a [long history](https://en.wikipedia.org/wiki/HTML#HTML_versions_timeline) as a W3C standard and it's natural to think that MathML's success is somehow connected to the web's success.

However, that's not the case (except perhaps by making an ultimately empty promise). The`<math>` tag was first proposed in HTML 3.0 in 1995 but was remove from HTML 3.2 in 1997. It was transformed into one of the first XML applications and MathML was born in 1998 and lived in XML/XHTML limbo for the next decade. Finally, MathML returned to HTML proper with HTML 5 in 2014.

It should seem obvious that because MathML was not part of HTML (or any other web standard implemented by browsers), it could not have succeeded because of the web's success. Instead, it was MathML's success _outside_ of the web that allowed it to survive and eventually make it back into HTML5.

So there naturally was a disconnect. Unfortunately, even when MathML came back in HTML5, that disconnect remained effectively unchanged. A simple example is the timeline. MathML 3's first public working draft was published in 2007, the year [HTML WG was just being re-chartered](https://www.w3.org/2007/03/HTML-WG-charter.html) to bring together HTML5 (which took 7 years). The difference between the early working drafts of MathML 3 and the eventual REC (in 2010) seems to include little fundamental change (lots of details being hashed out but the core seems in place pretty early on). Only a handful of changes were made between 2010 and 2016 (when the Math Working Group shut down). It seems only mild hyperbole to say that MathML 3 was effectively done before the HTML5 was really getting started.

Overall, it seems clear from the various specs that the return to HTML5 had not much influence on MathML &mdash; or vice versa. For example, there is no hint of giving MathML the "CSS treatment" that HTML got (e.g., clarifying HTML layouts like tables via CSS) nor is there a sign that HTML and CSS ever considered what MathML brought to the table in terms of semantics and layout. This disconnect (and the lack of interest in overcoming it later on) is likely the root cause for MathML's failure.

I think one of the reasons why this disconnect was not overcome is the success of MathML and where that success occurred.

If you speak to early adopters of MathML, you will notice that MathML's success was due to its efficacy in print workflows (with rendering to binary images perhaps being a nice extra in the pitch). That's what XML workflows were producing and while the web was a nice thing to hope for, if MathML hadn't done a good job in print, it would not have gone anywhere in XML-land. This also means that MathML suffers from the [general problem of equational content](/0196/) (shameless self-plug).

I suspect this success made the MathML community a bit blind to the fact that the web platform was moving away from any common ancestry there may have been, especially on the implementation level but perhaps more importantly in terms of being a rapidly growing technology being practiced by a similarly growing group of specialists (aka web developers).

A sign of this effect is that (especially among non-experts) it seems many people confused the hopes of MathML in HTML5 with a promise and in extreme cases some sort of moral obligation for browser vendors to implement MathML support natively. In retrospect, I think there may have been a short window where things could have turned out differently (and I hope I'll get to that idea later on). More likely, my brain is playing tricks on me because I [shared that hope](http://radar.oreilly.com/2013/11/mathml-forges-on.html).

In any case I find the history to be rather odd, overall. A failed web standard became successful in print production and that success was so significant that it was reintroduced to HTML.

What I think is often missed when discussing MathML is how the success outside the web took its toll on the MathML specification. Its development was focused almost entirely on legacy (print) content and completely detached from the <s>direction</s> random twists and turns of the more successful web standards (first and foremost HTML and CSS). Still, MathML neither tried to align its own direction with the platform nor did it try to take inspiration or to influence those developments.

Finally, I think the particulars of print (and image) rendering of MathML has produced a crucial misconception about MathML: the fact that MathML works well in those settings does not imply that MathML works well as a web technology.

### Coda

Next I'll try to step a bit back and maybe talk about some of the basics of the spec.
