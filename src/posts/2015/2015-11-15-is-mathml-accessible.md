---
layout: post
title:  Is MathML accessible?
date: 2015-11-15
permalink: 0185/
tex: true
---

Last week I attended an excellent [conference on accessibility in higher education](http://www.studentenwerke.de/de/content/ibs-fachtagung). It was great to get a some insight into where things stand with the German higher-ed community. It also reminded me of something that keeps bugging me this year.

MathML is often presented as the single solution to all math accessibility problems. For example, the [ARIA spec](http://w3c.github.io/aria/aria/aria.html#math) says "Browsers that support native implementations of MathML are able to provide a more robust, accessible math experience than can be accomplished with plain text approximations of math", the [IDPF accessibility guidelines](http://www.idpf.org/accessibility/guidelines/) says "[...] a benefit of native MathML support [...] is the ability to provide voicing based on the markup [...]" (ok, they do suggest fallback speech text later only to go on and tell you that annotation-xml will work without, you know, some level of MathML support), even [PDF/UA suggests MathML](http://www.aiim.org/Research-and-Publications/standards/committees/PDFUA/Technical-Implementation-Guide).

While this might seem plausible for authors, I can't shake the feeling that saying "just use MathML" is a bit of a cheat, especially on the web.

On the one hand, there's the reality of the technology landscape. I'm not going to criticize browsers yet again but accessibility happens to include visual rendering (duh!); without it accessibility of mathematics on the web is fundamentally broken. Even more so since ARIA fall short in terms of enabling HTML or SVG rendering of mathematics to be accessible.

On the other, while a growing number of screenreaders happily tout MathML support, there are (please correct me) really just three solutions out there: The new kids are VoiceOver and ChromeVox whose quality might be summarized with "meh" (not terrible but really not yet great in terms of math support or, for that matter, active development of math support). The grand old lady of math accessibility is of course MathPlayer which, I'm guessing, is the origin of the "just use MathML" ("just use MathPlayer"?) attitude for accessibility both because of its quality and because it is what many screenreaders leverage (JAWS, NVDA, Texthelp etc). However, with MathPlayer being pushed out of IE and into the status of a third party library (and integration into screenreaders sometimes lacking) that line of argument is a thing of the past. Practically speaking, there is no real, productive competition today and thus no resources for improvements.

Anyway, the question I've been pondering is: why do most screenreaders rely on external tools rather than implement MathML support themselves?

I suspect the answer is the same as with browsers: because it is too hard to render MathML accessibly. That is, while building on MathML is much better than alternatives (I'm looking at you, TeX), it's still an awful lot of trouble to write a decent (let alone good) MathML accessibility solution. Too much work, too much of a niche, too many other things to do, yadayadayada.

Of course with MathML I mean Presentation MathML since Content MathML is too rare in the wild. Presentation MathML is a very good XML format to canonically represent most traditional (read: print) formula layout and is universally appreciated as an archival format. But Presentation MathML is not "trivially" accessible. Unlike, say, ARIA roles, there is no straight-forward process that will tell you how to, e.g., voice, sensibly explore or highlight a well-written MathML expression (let alone a shoddily-written one). Instead, existing tools end up guessing both the mathematical structure of an expression as well as its semantics.

On the one hand, there's the fundamental problem of context (e.g., to tell whether (a,b) describes an open interval, a point in the plane, or an inner product) and of compression ([Kill Math](http://worrydream.com/KillMath/) anyone?). But what's even more confusing about "just use MathML" is that, in fact, Presentation MathML can be pretty semantic -- with elements like `mfrac`, `mroot`, or `mlongdiv`, and things like `menclose` notation, fences, or the operator dictionary, all of which carry semantics despite Presentation MathML being "just" about layout.

So you might think that's not so bad after all. However, that's only half true. Besides the obvious problem of virtually everything missing in terms of notation, Presentation MathML is somewhat lacking in genuinely neutral layout features. So as an author, you'll have to use those semantic-but-really-layout elements. This way you end up finding suggestions in [the spec itself](http://www.w3.org/Math/draft-spec/mathml.html#chapter3_id.3.3.2.2) to use `mfrac` with `linethickness="0"` to represent a binomial coefficient.

$$n\choose k$$

Which is visually rather similar to doing a construction using an `mtable` (which might in turn be used to convey a vector/matrix).

$$\left(\begin{matrix}n \\ k\end{matrix}\right)$$

And then you could also hack something together using `mstack` which might sound like a fundamental math layout element (a vertical stack) but unfortunately is designed only for written addition, multiplication, and division.

As an accessibility tool you need to build in something that allows you to guess the semantic structure. And just to stress this again: not for the horribly broken markup you'll inevitably run into but for *high quality, spec-suggested markup*.

Don't get me wrong. It's great that such heuristics are actually not impossible for Presentation MathML (as opposed to handling a programming language like TeX) so you can at least cover the educational use cases pretty well. But we're a long way making math accessibility being an average task for screenreaders (which is what it should be, just like visual rendering should be a simple task for a browser). MathML is a step forward for math accessibility but it is, ultimately, a tiny step given the practical problems, especially on the web. Endlessly repeating "just use MathML" is not helping.

---

I feel like I should add a **Disclaimer** to this one. We're currently building an accessibility solution for MathJax based on improvements to ChromeVox's math engine so obviously I'm terribly biased and a horrible person. But you already knew that.
