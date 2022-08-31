---
layout: post
title: Thoughts on Print Equation Layout
date: 2022-08-31
permalink: 0218/
latex: true
prism: true
---

This will possibly be another piece that will get updates in the future.Actually, I hope not but we'll see. This, above all, is for me. For me to gather my thoughts one (hopefully) last time.For me to deal with stupid garbage and stupid garbage people which have accumulated over the years. I'm not going into every detail, so if you don't follow, re-read the first few lines.If you want deeply detailed research results, feel free to contact my company - we do that kind of thing. Just don't be that guy complaining about free stuff.

## Introduction

10 years ago I joined the MathJax project, which forced me to think alot about how to put equations on web pages. Actually, I had alreadyspent quite a bit of time during my PhD and postdoc years thinking(\*cough\* procrastinating) about the same thing, albeit from adifferent perspective.

When I started writing on the web all 13 years ago, I quickly wentthrough a phase I've seen repeated by many people since:

"oh, there's something called MathML, I should use that"

followed by

"oh this does not work at all, let's not use that",

usually followed by choosing jsMath (if you're old enough) and laterMathJax because they ultimately remain - by far - the best tools for thejob.

After joining MathJax, my job was to profess the prowess of (read:blindly advertise for) MathML, so I did. That was largely becauseMathJax was formally part of Design Science at the time and they mademoney with MathML. Luckily, the project moved to the AMS where we couldthink about things more freely.

When the whole Chrome 24 debacle happened, there was this one commentfrom a Googler (on Google+, naturally you might say). I can't find itanymore but what I recall them saying is: "maybe it's a good format butstill a bad format for the web". I kept coming back to that thought fora few years and, eventually, came to agree with it. (This piece isbasically summarizing that.)

In short, I realized that MathML is fundamentally a useful XML printpublishing tool but a bad technology for the web. So I tried to pivotMathJax away from MathML and its toxic community towards actual webstandards and their underlying principles. We wrote a whitepaper, gotour sponsors on board, and started work on MathJax v3. (This is not whatv3 became but that's ok. I left my position at MathJax around thefirst beta which was a thrill and I'm grateful that Davide and Volkerenabled me to leave with that big leap forward having begun.)

Towards the end of that period, I wrote a number of pieces here,outlining MathML's many flaws and failures. But as I kept writing: it'snot MathML's fault. MathML does what it's supposed to; but what it'ssupposed to do is a bad fit for the web. (Again, this piece is basicallyre-iterating those pieces. What do you expect from a recoveringacademic.)

In the past 5 years, I've worked primarily on the issue ofconverting full mathematical (LaTeX) documents to web formats. If youfollow me on the fediverse, you may have seen me use the CW "TeX in realworld production" sharing some of the "gems" from this experience.

All of this has led me to realize that there's a "deeper" problem and Ifeel like it needs a (sort of) new name: print equation layout.

## Framing

Framing is important. What I call "print equation layout" is morefrequently called "math layout", "formula layout", or just "math"(I find that last one somewhat insulting). The phrase "print equationlayout" may seem unnecessary or convoluted. To some degree, I agree. Forexample, I don't believe we have seen "web equation layout" come intoexistence during these first 30 years of the web. Nor, sadly, do Iexpect to see it in the next 10.

But as a framing device "print equation layout" serves to ground theconversation and keep aspects in focus that I find critical to manydiscussions.

In my opinion, print equation layout is, ultimately, a flawed printtradition that web technology should not have to make extra efforts tosupport (e.g., as proposed by MathML's addition to HTML5 way back when).The layout features are largely archaic with very few actual challengesremaining in the context of contemporary (2022) web layout.

Furthermore, print equation layout is fundamentally inaccessible in thesense of web accessibility. However - and this is where this part getsvery tricky - print accessibility traditions for print equation layoutdo exist (at least in the US as well as a few other countries and ofcourse the US perspective always dominates these conversations). Thismay seem like a contradiction - how can there be an accessibilitytradition that is bad in the context of the web - but it is really nodifferent from the visual layout traditions.

This is a key complication in the discussions (and myths) around thistopic: because print layout and print accessibility traditions exist,people assume that they must be realized on the web - and in the sameway.

I want to argue that neither aspect of print equation layout - visuallayout traditions and accessibility traditions - is particularly goodor useful *on the web*. As a result, it is a particularly problematicset of techniques because the contemporary web already has plenty ofgood and useful features that solve print equation layout.

Adding an additional, separate feature layer for a problematic printtechnology tradition does not make any sense, in fact it has a (by nowlong) history of hurting the community.

### Interlude

In TeX, we can put punctuation after a table. In HTML, we cannot. ShouldHTML change because this print tradition exists?

## What's in a word

Let's try to be a bit more specific.

Print equation layout is...

- what people think of when you say "math/formula/equation"   // what  MathML partially captures   // what math mode TeX usually produces  // what MS Word formulas usually look like- **an elaborate, two-dimensional form of abbreviated notation for compressed, highly complex, context dependent, abstract thought.**  - even at an elementary level (e.g., long addition/multiplication/division, "explanatory" layout).  - on research: exacerbated by 20th century content explosion combined with print page limits- highly (highly!) ambiguous- often integrated into additional complex notation (e.g., text annotation, graphical documents).- a consequence: it is \"non-text content\" (in the sense of WCAG SC 1.1.1).  - closer to "ascii art" than HTML traditions of "semantic markup"

Naturally, this does not apply to all instances of print equation layout - 1+1=2 is just fine.

It crucially applies where the actual problems occur - both in visualand non-visual rendering. The problem is not to handle 1+1=2 (well, actually we'll get back to this). The problem is more:

$$ \det(A)=\sum _{\begin{array}{c}k_{1},k_{2},\ldots ,k_{n}\geq 0\\ k_{1}+2k_{2}+\cdots +nk_{n}=n\end{array}}\prod _{l=1}^{n}{\frac {(-1)^{k_{l}+1}}{l^{k_{l}}k_{l}!}}\operatorname {tr} \left(A^{l}\right)^{k_{l}}$$

This is a simple piece of print equation layout, something from the first few months at university. And it is packed.

## Visual print equation layout on the web

### practically

The problem of realizing print equation layout on the web has beensolved for almost two decades now. Well, 18 years to be exact.

Let that sink in for a bit. 18! years!

With CSS, this solution started as (client-side) JS only and span soup; we havehad that since 2004 (via [jsmath](https://www.math.union.edu/~dpvc/jsMath/), MathJax's precursor).

With SVG, we've had this since 2011. MathJax v2, at first client-side butquickly also server-side (via phantomjs and later via mathjax-node). [To some degree, various tools could produce SVG from, e.g., TeX, evenearlier that but they didn't generally care about the webas a use case, e.g., they wouldn't give you good vertical alignment to meet abaseline.]

It has been possible to realize print equation layout with just CSS(e.g., server-side generated span soup and CSS) since IE8 - IE8 damnit,released in 2009 - and with just SVG since IE9 (2011). [To be fair,MathJax was not the first to realize such an output, KaTeX was, but oneof my favorite successes while at MathJax was to prod Davide long enoughabout a "fast Preview without JS" that he built the "CommonHTML" outputfor v2.7 which added this. I'm also still fond of the previewHTML outputwhich preceded it and traded beauty for CSS simplicity.]

Visual print equation layout has been solved thrice over with a myriadof smaller and larger tools doing it in varying ways, balancing codesimplicity with quality of layout. (mathquill, jqmath, math-ml etc)

[Aside. This is why a certain blog post from a few years ago about"alternate timelines" was so very much off base - CSS driven printequation layout was first, SVG a close second, not some XML dialectnobody was using for anything but print production. In the similarsituations the same people would (indeed did famously) argue that aworking solutions should be considered the prime candidates tomove standardization forward, not some contrived academic proposal. But Idigress.]

So print equation layout solutions for the web have existed for a long time.

Are they perfect? No.

Are they still getting better? Hell yes - all the time. The everevolving CSS continues to make things easier (grids, container queries,variable fonts, layers!). SVG is just rock solid (for these purposes; and it improves, too).

The most significant CSS challenge at this point are stretchy characterconstructions - not a massive problem and one that could (and should) besolved independently of any "mathematical" considerations since stretchyconstructions are frequently used in other design scenarios (e.g.,stretchy braces around lists are pretty common design patterns).

In the nice-to-have category (for me), better control over glyphbounding boxes might be neat. Right now, high quality print equationlayout realized with CSS depends on webfonts. This is not a particularlycritical consideration in my book - much high quality text layout on theweb relies on webfonts - and the bounding box problem also needs a moregeneral solution (and in fact there are proposals for better access tofont internals).

Now some people argue that the CSS and SVG layout solutions like MathJaxgenerate "convoluted" markup output. This is a red herring.

On the on hand, convoluted XML is not "better" if it says "math" in it.On the other hand, nobody from CSS or SVG (spec) land has ever tried tohelp. Simply put: the output looks a lot like Bootstrap's grid layout inits early days - damn right they were convoluted - or an accessible datepicker markup today - extremely convoluted. In other words: it looks theway it looks to get the job done. And it does. And if print equationlayout tools for the web would be heard the same way grid frameworkswere heard, we'd get less convoluted output easily AND in a way thatbenefits the entire web stack.

### theoretically

Ultimately, the problem is: is this layout tradition a good fit for theweb platform? Take table layout. At first people thought it was a good fit.Now we don't.

I think print equation layout is a thoroughly bad fit, building it into the webactually damages the platform, just like tables have taken a two decadesto become unscrewed (ohi Google, still using tables for layout in some products).

Even the simplest examples, we run into "fun" traditions that are problematic.The easiest to understand are the many text-dependent behaviors, i.e.,layout behavior that changes depending on the specific text nodes present (beyond the obviouslayout changes from having different text nodes).

The simplest example is probably: single letter variables are italic, multi-letter ones are upright.This is pure tradition, i.e,. something a lot of people like to do. Obviously people sometimes don't do this. Obviously, there's no technical difficulty to make this happenAnd yet as a feature it is unlike any other text rendering we have.

A more complex example are moveable limits. For example theexpression `\sum_{i=0}^\infty` would, at plain view, indicate we get Σ (sigma) with a subscript of "i=0" and asuperscript of ∞.

However, this depends. As an inline expression, most print equation layout systems will laythis out as I just described. 

$\sum_{i=0}^\infty$

However, as a display/block expression, the sub- and superscriptswill become under- and overscripts.

$$\sum_{i=0}^\infty$$

This is of course convenient from an authoring perspective - you canswitch modes as you like, thus macros / copy&paste are much easier.

However, from a web design perspective it is a wild thing. Not the change as such (of course children change when a container switches from inline to block). But when you replace `\sum` with something else (say an "S" for "sum"),you will suddenly not get this behavior anymore.

From a layout perspective, this automatism wouldn't have to be builtin, but of course MathML, as a print equation layout system, builds it in.This means, we have intentionally ambiguous layout instructions.

From this we can take a step up and talk about the operator dictionary.Remember when I spoke about 1+1=2 not being the hard problem. Guess again, we made it hard!

Naturally, there are traditions around how you space things. 1+1=2? 1+1 = 2? 1 + 1 = 2?Or something more subtle? There are many traditions like this, the mostwell known being captured in Knuth's TeX book.

But that's just it - they are traditions. And people can and do (and should!) deviate from them.If there's one thing I've learned working in mathematical publishing production for a few yearsit's that authors are full of ideas for how these traditions should change.

I mean, look at [this weird theorem layout from 1940](https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/jlms/19.73_Part_1.28); thank goodness that didn't catch on.

Instead of giving them the tools that allow adjustments, most print equation layout systems(and MathML in particular), only hand them spacing hacks. Compare this to CSS where we have benefited from a system that allows resets and customizationclearly and cleanly; in comparison, a paradise of tools for designers,authors, and developers. 

None of this is to say that there aren't interesting aspects of print equation layout that are worth a look for the web; something as basic as multiscripts or something as complex as stretchy glyphs. But bringing them in a way that drags the baggage of 100 years of print equation layout alongis an obviously stupid idea (that can be explained but hardly forgiven). The operator dictionary is a good example for this. Doing layout based on text content is an interesting topic - we've had years of debates around aligning table cells at decimals. Yet trivial spacing like this - which authors want to customize anyway - is just a bit silly.

As related and similarly bad example are math alphabets. They are utter madness to begin with; they are fontface traditions, captured as Unicode codepoints. The recent addition of mathscripts to unicode makes the mind boggle because authors will not and do not stop. The other day, we had a paper with runes come through production. Should we add "math runes" to Unicode next? And what about [David Griffith's script r](https://github.com/stipub/stixfonts/issues/221), does he get a codepoint for himself? What about math emoji? And what about math alphabets when they're in text mode - do they have special meaning, too? (Other than making horribly inaccessible social media profiles?)

[It is worthwhile to note that in recent years the AMS has been leveraging are-interpretation of those rulesets by adopting xelatex which focuses onequation layout using open type math table fonts (STIX2) which in turnwas designed for Microsoft Word when they built their print equation layoutfacilities (again, following the TeX book yet frequently differently,making it hard to know if the bug is in the font, in MS Word, or in xelatex).]

### To recap 

The problem of creating visual layout that matches print equation layout has been solved for well over a decade. It's somewhat ridiculous to suggest the web has asignificant technology gap here that only a completely new set of markupand layout features can fix. Additionally, the theoretical structure of print equation layout enshrines problematic traditions that fit very badly, going against the web's grain.

This leaves non-visual-layout considerations regarding print equationlayout, in particular (web and print) accessibility considerations.

## Ambiguity

Let's talk about ambiguity.

### A different example

Let's start with a different example, [musicalnotation](https://en.wikipedia.org/wiki/Musical_notation).In modern notation, a note is about as ambiguous on its own as a[grapheme](https://en.wikipedia.org/wiki/Grapheme) intext. For example, without a staff and other context the note itselfdoesn't tell you much. You might know the value by looking at just thenote but even then this might not be enough (e.g., if you happen to missa subsequent dot or preceding accidentals). Even with a staff, you mightstill have trouble, e.g., if all you have is a single measure you mightlack the key. Similarly for dynamics. Also, it might be part of musicthat ranges from Opera to Jazz and you'll want to know that to adjustyour understanding.

It's hard to know when you have all the relevant information. A piecemay appear complete but lack information on, e.g., which instrument thisis for, what other voices there might be.

And this is for a fairly limited set of notational elements.

Now expand this to the ever changing mathematical notation, then expandto engineering and sciences where there is no limit in generalizationand specialization. \[Of course, musicians can easily discuss a singlenote as passionately and intricately as mathematicians discuss a singlenumber. But while this is much more interesting, it is unfortunately notthe topic here.\]

### Mathematical examples

- a superscript 2 (e.g., $x^2, f^2, \sin^2$) - is probably some sort of "squared" thingie? But is that always true? How about $A_1^2$?- Binomial coefficient ("n choose k") cannot easily be distinguished from a 2-dim vector notation - $n \choose k$ vs $\left(\begin{smallmatrix}{} n \\ k \end{smallmatrix}\right)$    (similarly examples for [Stirlingnumber](https://en.wikipedia.org/wiki/Stirling_number) exist)- frequent use of space or punctuation to imbue layout with extra meaning   // to avoid having to add clarifying notation (e.g., `+a + -c + +b` vs, say, `++b` [https://whystartat.xyz/wiki/Space_is_significant](https://whystartat.xyz/wiki/Space_is_significant))- "(a,b)" - open interval? point in the plane? bilinear form in a Hilbert space?- `[a]` might be the sign of a // `[c, d]` might be a matrix // `A[b]` might be a ring- `|...|` - absolute value, norm, determinant?- `|` - evaluation of definite integral (alternatively `[ ... ]` but that could also be a closed interval or a commutator)- superscript -1 - so many meanings!- context, e.g.,"d" in $(a + bx^3 + cx^2 + dx = 0)$ vs "d" in $\int f(x) dx$- delta vs triangle- the use of invisible operators (U+2062, U+2061) - where to even start?

For more "inspiration", check out [https://whystartat.xyz/wiki/Category:Ambiguities](https://whystartat.xyz/wiki/Category:Ambiguities)

Another favorite of mine: the [Legendre symbol](https://en.wikipedia.org/wiki/Legendre_symbol)was first used before 1800) and yet apparently there's no decent way to read it out loud, see[https://mathoverflow.net/questions/15447/is-there-a-standard-way-to-read-the-legendre-symbol](https://mathoverflow.net/questions/15447/is-there-a-standard-way-to-read-the-legendre-symbol)

We can also go the other way around. 

We can have the same voicing for differentnotations. `|A|` and `det(A)` may read "determinant of A"; both `exp(x)` and`e^x` may read as "exponential function at x". How would a non-visual userknow which notation was used when someone said this?

A separate problem is the abuse of the alphabet in varying typefaces toconvey context-dependent meaning. It's so easy to - visually - discernitalic from normal, serif from sans-serif, gothic from Sütterlin - well,in truth it is not that easy but here we are anyway. In addition, foreignalphabets are abused so much that mathematics has become reliant onparticular typeface designs (cf. [this source](http://web.archive.org/web/20120229131933/http://omega.enstb.org/yannis/pdf/boston99.pdf)).

The noise when differentiating these ("Upper German X") for non-visualusers is immense - or more often: the silence is immense.

And then we haven't even opened the box of notation that's specific toengineering, physics and chemistry but realized using print equationlayout.

### Semantics or layout?

There's a moving goalpost (or perhaps gaslighting) issue that I've encounteredmany times: should assistive technologies (AT) provide informationabout layout or semantics when it comes to print equation layout?

A common stance in the general accessibility community is: it's notabout special treatment, it's about equal treatment. What does that meanfor print equation layout? Equal treatment would provide preciseinformation about layout.

But that's not what users actually expect (or are accustomed to).Instead, "semantics" are desired. Take this simple example:

`f: X → Y`

Should it read

"lower italic f colon upper italic X right arrow upper italic Y"

or

"f maps from upper X to upper Y".

The latter is certainly easier and happens to be how humans speak.

However, print equation layout does not offer such semantic information.Therefore, solutions turn to guesswork aka [heuristics](https://en.wikipedia.org/wiki/Heuristic).

These heuristics work reasonably ok for school-level print equationlayout and some, more "stable" parts of college education (e.g.,engineering). But they easily and frequently fail even in these areas.

TOOD EXAMPLES?

To come back to our examples: yes, that superscript 2 is very likely"squared" but then again it is, inevitably, far from always "squared".

Beyond the evident lack of semantics in print layout per se, the secondproblem is the lack of contextual information. While MathJax oncehad some grant money to allow research into the problem, no existing solution takeseven other equations into account (e.g., try to guess what a variablethat was used earlier might represent later). They surely do not try toanalyze the whole document context (e.g., [Bra-Ket notation](https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation)in physics, P(X) in statistics, various arrows in category theory,operations in tropical geometry, or, again, the Legendre symbol).

In simplest terms: think about `f(g+h)(x)`. Most mathematicians wouldagree that there's a good chance that there's a function application (atx) happening but it could also just be a multiplication with x aftersome calculations within the parentheses, who knows. Fairly limitedcontextual checks can probably help out here but without them we'relost.

What's worse: today's heuristics also often do not work within anequation, e.g.,

`|A| = {\begin{vmatrix} a&b \\ c&d \end{vmatrix}} = ad-bc.`

Speech Rule Engine's heuristics (again, the best around) will identify themiddle part as a matrix determinant but still treats `|A|` as absolutevalue. And in fairness, A might still be some poorly named scalar.

Another interesting example is the treatment of horizontal and vertical space."Clearly", if you find `$(a \quad b)$` and `$(a\ b)$` near each other, they're different, right? But what can heuristics realistically do here? 

Print equation layout uses positive and negative space abundantlyand often confusingly. Some authors like things spaced out where otherslike them tightened up. This makes it impossible to leverage space inheuristics.

Similarly, one of the most important visual tools is completely absentfrom non-visual presentation: the size of stretchy glyphs. Thestretchiness is a key visual indicator, indicating both groupingand complexity of subexpressions. Authors frequently use it to explicitlyhighlight subexpressions because they realize their complexity. And yetnon-visual presentations provide no access to this information;the most you can hope for is Speech Rule Engine's ability to summarizea subexpression (along the lines of "a sum of 16 summands").

Frequently,  people (especially in the MathML community) promise magical semantics from print equation layout. Yet when faced with the obvious, plentiful, and unsolvable problems, the goal post iscasually moved to "you need to give layout information" only so thatwhen you provide layout information, people go back to "oh, that's not theidea, you should provide semantics".

Unfortunately, many people believe this empty promise.

## Problems from print layout traditions

There are both theoretical and practical problems arising from printlayout tradition.

#### Theoretical

Print equation layout has some traditions that add another layer ofproblems.

For example, there is the concept of moveable limits. For example theexpression

`\sum_{i=0}^\infty`

would, at plain view, indicate we get Σ with a subscript of "i=0" and asuperscript of ∞.

However, this depends on the mode. In inline math mode, TeX will laythis out as described. In display math mode, the sub- and superscriptswill become under- and overscripts.

This is of course convenient from an authoring perspective - you canswitch modes as you like, thus macros / copy&paste are much easier.

From a layout perspective, this automatism wouldn't have to be builtin, but weirdly, MathML builds it in. In fact, it has a separateoperator dictionary which describes various layout rules instead offocusing on just the necessary parts of layout.

This means, we have intentionally ambiguous layout instructions.

As a result, heuristics cheat in a non-visual context to make this ambiguity go away. Simply say "sum from ... to" - tada, problem solve! But of course now you have three new problems: a) what if it isn't a sum?b) what if it is a sum but using a different character for the summation operator?c) what if the authors want to use side- and overscripts to mean different things?

#### Practical

Given the nature of print products, authors are prone to abuse layout.

For example

Authors frequently make their content work purely visually, placingelements side-by-side, relying on the fixed positions of print layout.

They will use tabular layout to split content apart so that it can fitpage dimensions (e.g., complex break up across lines), thereby making itimpossible to reflow in a dynamic environment and group correctly in anon-visual semantic analysis.

Reversely, they will space content out to fill a page, impeding reflowor resizing in dynamic environments.

They may "accidentally" rely on TeX's defaults, e.g., consecutivedisplay math blocks may align if those blocks are generally centered(rather than explicitly grouped by aligned blocks); yet with differentalignment defaults, the alignment may fail unexpectedly. (Similarl withmulti-line environments or other manual and/or automatic linebreaks.)

### interlude

On the web (and in many publishing content / production pipelines),abusing HTML markup is frequently favored (i.e., text superscripts,tables, simple vertical alignments) alongside low quality (usually GIF)rendering for inline math and high-quality (usually PNG) for displaycontent. Frequently, only the 'problematic' parts are rendered as imagesleading to poor layout (e.g., tables with some equational content and atext label in lieu of properly labeled equational content).

## Non-visual print equation layout

In several countries, print equation layout has some form of non-visualaccessibility tradition.

The US traditions are dominating in this context since MathML wasdeveloped largely by US companies for a US audience.

For print traditions in the US, the most well-known methods for non-visualpresentation were developed by [Abraham Nemeth](https://en.wikipedia.org/wiki/Abraham_Nemeth) -the MathSpeak ruleset for voicing and the Nemeth Braille notation fortactile presentation. A critical point is that both sets were designedfor human creation. MathSpeak, to enable a non-expert reader to readmathematical publications to blind users; Nemeth Braille for aspecialist braille transcriber to transcribe (and a trained reader to read).

If you can catch him, Volker Sorge (who implemented support for both as part ofSpeech Rule Engine and MathJax) is happy to go into much detailtelling you how neither MathSpeak nor Nemeth Braillecan be produced from input without extensive heuristics. The rulesets are infact not properly specified and can be contradictoryVolker.

My impression is that this is by design - these rulesets could assume a humanorator/transcriber who can adjust rules on the fly to enhancethe simplistic heuristics. Even without understanding mathematics, it'sfairly easy to make a change on the fly, e.g., after initial feedbackfrom the user that in this particular pattern the superscripted 2 is not "squared"but, say, a row or column vector.

It's probably worth noting that Nemeth Braille has not been revisedsince the 1970s (though a revision has finally started a few yearsback). It is a specialized Braille notation that describes visuallayout and only partially linearizes the output (e.g., fractionsand scripts are linearized while tabular structure are not), leading tomany problems as contemporary refreshable braille displays for computersare single-line devices. And of course, if you're not a Braille user,then none of it helps you.

### heuristics are bad, non-recursive ones worse

At this point let me point out that heuristics are something that webaccessibility eschews; heuristics are only encouraged to recover fromerrors (e.g., turning invalid documents into a valid ones, making senseof authoring or connection errors, dealing with legacy code like table layout).

Accessibility on the web revolves around the so-called "accessible name"which is calculated for each element in the document. This calculationworks from the leafs up the document tree.

Print equation layout does not allow for recursive naming - just think`n choose k`, or `^{-1}`. It also depends on

MathML is even worse for this, as it is a stratified format forrendering purposes; in TeX you can at least have author macros to try tomake sense.

Authors, especially with AMS, invent layout that requires new heuristics- both large and small (e.g., abusing amsmath's sideset, creating custom glyphs,tikzs-inside-math). Historically, this coincides with naming (cf.[https://jeff560.tripod.com/calculus.html](https://jeff560.tripod.com/calculus.html)for some historic examples such as nabla) but not always (cf. the Legendre earlier). [Authors alsoregularly just hack layout badly (e.g., `\mathop{l\overline{og}}`) butthat's technically speaking a different problem.]

## MathML

MathML does not provide sufficient quality, neither in theory nor inpractice.

### visually

**Practically**: visual rendering in browsers is poor, buggy, hard toworkaround. It is not maintained by browser companies and never has been.

Bugs range from mildly annoying to problematic to terrifyingly bizarre. I stopped noting them publicly; it's too much fun to check every few years that even basic bugs do not get fixed or even reported.

**Theoretically**: visual rendering is not actually specified (thoughthere is a new effort to change that, making all existing MathMLrenderers invalid and breaking content without care).

This is where they are after 25 years of MathML, 15 years of MathML in HTML5, ~10years of MathML "support" in Firefox, ~8 years of MathML "support" inSafari, neither of which are due to actually Mozilla or Apple spending resources but co-opted volunteer efforts. No amount ofIgalia newspeak will change that fact. [Apologies to all the great people I know at Igalia. But the MathML fanboys are not a good look for you all.]

Optimistically, it will take a good decade to get reliable visualrendering quality. Certainly, CSS and SVG will move faster.

In any case, the handful of people behind the implementations seem unable to graspwhat the real life problems are so they live in their littlebubble insisting that repeating "but it's a standard" does anything forusers.

### non-visually

MathML captures abstracted, shared concepts of print equation layouttraditions. It suffers the consequences in terms of non-visualrendition.

**Practically**, MathML support is poor among screenreaders and is non-existing in"simpler" assistive technologies (with way more users) such as "read aloud" features inbrowsers, voice assistants etc.

Only three screenreaders formally claim support and their support islimited, buggy, and of poor quality - and the pieces are minimallymaintained by AT companies. Brian Richwine's talk at ATHENs documented many cases, e.g., howsome ATs don't voice "end fraction/script" causing confusion (my favorite part was theanecdata form Apple support saying "there's just not enough users to warrantfixes".)

In addition, the user experience of what little supprot screenreaders provide is often questionable, e.g., JAWS will not readlarger MathML fragments but just announce the presence of a mathfragment; users have to then open a separate viewer application toactually read and explore the expression. (Fun fact: this is called"Math Viewer" and actually uses MathJax for visual rendering, leading tovisual differences from the browser).

Similarly, VoiceOver on iOS will open pop-ups for exploration of MathMLfragments, creating a separate context and confusion. NVDA needs thirdparty plugins to do anything and has no visual component (i.e., highlighting while exploring)leaving non-blind to guess what is going on.

**Theoretically**, MathML cannot be accessible in the web's sense.Heuristics must be applied and now you (frequently) have 2 problems -your MathML must be hacked to work visually and then you might still have to work arounddumb heuristics.

Back at the W3C Math on the Web Community Group, there werefairly productive discussions with the MathML crowd and strongconsensus (with them) that MathML inevitably requires extensive heuristics toprovide non-visual (voice, tactile) renditions. Neverthelss, the same peoplelater publicly stated the exact opposite in wider W3C discussions, perpetuating the spurious claims that MathML is the only viableaccessible solution - after stating previously that MathML cannot solvethis problem. The sad part is that the W3C's TAG fell for it. Becausethey just don't care to dig deeper - and why should they, nobody seems toand anyone sensible will just use MathJax.

### Other aspects

#### localization

Another argument sometimes mentioned by MathML enthusiasts is thatMathML can be localized automatically. While that's true to some degree(and the AMS uses Speech Rule Engine for articles in French to createMathSpeak output in French), this is a questionable claim without anyresearch substantiating the positive effect.

In practice, the available localizations in AT is quite limited andlargely undocumented. This is even worse for Braille.

There are obvious obstacles for localizations. Many equations contain sometext elements which would not be localized. Similarly, commonterminology has different localizations/abbreviations. For example

- sine as "sen" (ES, IT) or "sin" (EN, DE)- in geometry SAS/ASA/SSS (EN) vs SWS/WSW/SSS (DE)- sin\^-1 (EN) vs arcsin (EU) (etc)- repeating decimal notation (above, below / arc vs line)- open intervals as `(...)` or  `]...[`

While layout-relevant terms might have suitable automatic translations(e.g., start/end fraction), layout traditions can also differ acrosslanguages (long division, matrix notation, integral notation).

As print equation layout is fairly meaningless without lots ofcontext, it's difficult to imagine a reader that would read content in alanguage they don't understand enough to make sense of genericinformation like "begin/end fraction".

#### The "Don't worry about it" argument

The MathML community likes to say "don't worry about the complicatedmarkup, MathML is something that should be generated, not handwritten"

This is a strange statement full of falsehoods.

For example, MathML is also advertised as "something you can edit withoutunderstanding it", e.g., while copy checking content, if an editor spotsa symbol that does not match the (author) PDF, then - thanks to thestructured XML markup - they can fix it. This example indicates twoproblems: conversion is not "easy" but riddled with errors, and havingan "agnostic" markup (as opposed to some author's TeX macros) isactually a boon here. And of course the same would be true for span soup.

Similarly, as described before, MathML supports "moveable limits"(including magical dictionary-based behavior). These features show howimportant it was for the MathML community to be compatible withauthoring traditions instead of focusing on the "pure" layout.

Finally, this line of argument is self-defeating. If the whole point isto convert from some kind of "real source" to MathML, then it's onlynatural to convert from that "real source" to HTML or SVG.

Why have an extra markup system that requires an extra rendering processwhen you can just use what's already there? (MathML fans will argue thatit's better for accessibility or tangential affordances like copy &paste. These invariably turn out to be false or misleadingly inaccurate claims.)

#### Limited support for MathML

Among screenreader, only Apple VoiceOver and Vispero's JAWS (windows)claim to support for MathML. In reality, the implementations are full ofbugs and limitations. Bug reports are rarely responded to, far lessfixed. Apple has essentially communicated "it is what it is".

Nemeth Braille support has relied on the open source liblouis library -which recently discontinued its support; it only ever converted MathMLto the Nemeth/UEB and German/Dutch/Flamish families braille notations - and it did so quite poorly.

More importantly, no "light" assistive technology supports MathML,e.g., "read aloud" features in smaller assistive helpers, in epub readingapplications or in voice assistants (Siri et al, e.g., when reading out webcontent). This lack of support impacts the largest portion of users,since these tools are much more widely used than the more advanced,full-fledged screenreaders like VoiceOver, JAWS, and NVDA.

## What do we do to address this inherent lack of accessibility?

Print equation layout is inherently not accessible in the sense of theweb. MathML is a red herring as it (at most) aims to reproduceaccessibility traditions from the print era but inherently cannotreproduce it well since those traditions relied on human operators(orators or transcribers). It also only works for English and, it seems, really only for Nemeth users.

I invariably approach such problems by looking for guidance regardingthe web in general. [The web's grain](https://frankchimero.com/blog/2015/the-webs-grain/), if you like.

### The web's core principles

"Users before author before implementors before theory"

From[https://www.w3.org/TR/design-principles/#priority-of-constituencies](https://www.w3.org/TR/design-principles/#priority-of-constituencies):

> User needs come before the needs of web page authors, which come beforethan the needs of user agent implementors, which come before than theneeds of specification writers, which come before theoretical purity.

### What do users want from print equation layout? And what do they actually need?

We simply don't know. 

Yes, most countries do *something* at the school level.But actual research is barely existent; what little there is, is usually limited to smallgroups and all the biases of simplistic educational studies.

My impression has been that there are too few AT users among the mathematical community - support is so poor, few make it to college let alone research-level. Accordingly, few have both the skills and the luxury to think freely about the problem. (T.V. Raman is one of the few exceptions and I'm still grateful he gave Davide and me the opportunity to work with the ChromeVox team for a week - and to meet Volker Sorge who was on sabbatical at Google Research back then.)

Anecdotally, the most consistent feedback I've seen in educational studiescomes down to "I want it to be read like my teacher/prof reads it inclass". That sounds an aweful lot like users want to have what authors want to say, and matches the core principles pretty well.

But even assuming I'm wrong in my assessment for lower level equation layout: for mathematically heavy research? There's absolutely nothing to base an opinion on.

They probably want TeX annotations because research-level users very likely know TeXsyntax. But is that what they **need**, e.g., when exploring a complexexpression? [Fun fact, some European communities favor presentingTeX strings in Braille - starting from first grade.]

### interlude

This discussion is usually skewed by two major factors: US users andblind users. As with most of the web, the US dominance has led to peopleignoring other factors. If it works for US users, it's fine, amiright. So the limited MathSpeakand Nemeth implementations in MathPlayer were enough to woothe US accessibility community and its influence wooed the rest.

To take an example. Blind users (especially students) need to write assessmentsusing the tools their classes require. If they need to use MS Word, they'llneed something to paste into Word. MathML was originally conceived asjust such an exchange format for print equation layout - abstracting theminimal common ground so that each engine could reasonably present it.

However, the authoring problem requires conversion. This easily goeshaywire. For example, Libre office's "Math editor" digests MathML but convertsit into its own linearized (~Asciimath like) syntax. And while itincludes MathML in its file, that MathML will be generated from thelinearized format. This is a process full of bugs.

MS Word does the same thing but has a custom XML format for printequation layout. Same approach, same problems. It doesn't help to addmore formats (such as TeX-like input). 

MathML-based wysiwyg editors exacerbate the problem (as wysiwyg is wontto do) since they cannot easily discern logical structure of input // donot make it apparent to users that they're doing something reallyterrible (e.g., inserting random whitespace).

However, if you are a blind user who knows Nemeth well, then that conversion process might just work sufficiently well for you because things were designed just for this use case. Ergo, you will say it's great and your influential community will prevent any discussion about whether this is actually a good trade off for other user needs. 

And the reality of all users is: the web is fairly bad at being copy&pasted elswhere. And that's an interesting, complex, and very broad problem. I'd love to see more movement in this direction but I don't think it makes sense to make copy&paste to MS Word a requirement for realizing print equation layout when nothing else can do it.

Ultimately, Braille is a print technology, and  in the context of a refreshable display there isn't even a page, let alone a multidimensional presentation that a dynamic webpage can provide. Again, this is a broad and interesting problem, again print equation layout is not a great case for special treatment.

### What to want for authors

I want to give authors the ability to express themselves well.

And authors **want** to do that.

Just look at any "list of symbols" in a monograph, e.g., from GSM210

![a screencapture from a list of notations with short definitions](/assets/2022/gsm210-notation.png)

Despite using very ambiguous terms, the authors clearly have a strongintent.

I want authors to bring their intent into the process.

We can (barely) do that with SRE. We cannot do that with MathML.

### What to want for our users

I want to take responsibility for my content.

I want high-quality consistent, robust rendering for all users.

I want visual layout that is robust against font issues (especially onepub).

I want speech and braille alternatives.

I want consistent, reliable, robust exploration.

I want to be able to fix issues.

I want to provide additional features (e.g., convenient access to TeXsources, customization options).

### What to do

Provide high-quality visual rendering using MathJax's SVG output,alongside the high-quality heuristics in Speech Rule Engine to generatenon-visual rendering.

Generate fully explorable layout and descriptions that are the samefor everyone everywhere.If there's a problem, it is our fault, not theuser's. And we can fix it.

Use the MathSpeak ruleset for descriptions meant for voicing becauseMathSpeak doesn't attempt to be as "smart" as other available heuristics(targeting school level mathematics).

Use Nemeth Braille because content is primarily inEnglish. For other languages, SRE doesn't have any braille supportso I accept that I need to use Nemeth there, too. If I want more, I'll make sure to help SRE get funding.

Have speech descriptions work with all tools - from full-fledgedscreenreaders and simple read-aloud tools. If there are issues (e.g.,a recent VoiceOver on iOS regression on trees), wework around it.

Yes, the ARIA technique for exposing Braille alongside speech-optimized text is cutting edge and not widely supported yet. But it will get there and help more than print equation layout.

Provide a lightweight and robust exploration that falls back solidly to a single description.

Embed TeX sources that automatically copy&paste.

A setup that allows for additional options to expose various formats (e.g.,populating everything with TeX or loading full-on client-side MathJax,and, even, generating MathML should user want to).

Do so with intent and deep knowledge of the problem space, thecapabilities of the solution and the flexibility to help users.

## Tangents about MathML

### copy & paste

The MathML community will frequently point out how "easy" it supposedlyis to copy&paste MathML around.

The reality is that extremely few applications accept MathML, it's acumbersome process, and MathML is dropped in the process, replaced withwhatever internal format is used.

The primary reason why this myth holds is that MS Word digests MathML.However nowadays, MS Word also accepts (reasonable math mode) TeX whenpasting into "equation fields" which shows both the limited usefulnessof MathML as well as the pervasiveness of (math mode) TeX. And of courseWord uses its custom markup syntax internally (and its home-growntechnology for braille and voice rendering instead of whatever ATsprovide).

More importantly, while copy&paste is a worthwhile challenge, it is alsoa general challenge with web content. Copy&pasting website content intoany kind of text editor (word processor, email application, TeX sources)is very poorly supported in general. While headings might survive, evensomething as simple as a list can break, tables usually break and "true"web design (e.g., anything CSS) does not survive. Even (inline) SVGcontent is not supported widely (despite being a well supported,self-contained graphics format).

This is not at all surprising given how most of the targets are meant tocreate print layout - and struggle with web layout. Why then shouldequation layout on the web be less complicated than the rest? Instead ofinsisting on broken technology (like print equation layout andspecifically MathML), it would be better to think about the more generalproblem that affects everyone.

### authoring and recreating

Related to copy&paste is the area of authoring and recreating printequation layout.

Let's go back to the example of matrix determinants. Both `det(A)` vs`|A|` would be voiced as "determinant of A" yet their authoring is quitedifferent.

Sometimes, readers have to (re)create content to match someone else'sexample (e.g., in any educational setting).

Again, this is a general problem (color vs colour). For text, AT usuallyprovides character-by-character navigation (incidentally, I'm not sureabout graphemes more generally). For print equation layout this isnaturally trickier: on the one hand, we come back to the idea to "just"give layout information, on the other hand layout may be insufficient(e.g., table-like).

### Voice input/output

Voice input is becoming an important aspect of how users interact withweb content, both using AT (e.g., in combination with Dragon NaturallySpeaking) as well as using general purpose tools such as smartassistants (Siri, Alexa etc).

Despite funded efforts, there has been not even aslight progress for enabling print equation layout by voice input.

### Video Captioning

Providing accessible video media requires captions, in particulartranscripts, subtitles, and audio descriptions. For content rich with print equation layout, automatic conversion requires voicerecognition, image analysis, and conversion to speech (e.g., amathematical lecture with equations on a blackboard that the speakerdiscusses). Since the standard formats (e.g., for subtitle functionalityin a video player) require plain text, MathML is of no use here. Inaddition, there are no tools nor traditions around speaking equation layout in such settings.

### Search

Despite decades of research, search around MathML has never providedtangible benefits despite clear user needs to discover existing results both to avoid and identify duplicate research. This is true for all of the ever expanding STEM fields.

Springer's discontinued LaTeX search or zbmath's MathML based systemare good examples of this failure. A sizeable research corpus revolvesaround analyzing MathML fragments, yet no actually useful system is available.

### Death of progress

Here's a very personal opinion: The MathML community has actively worked against progress for equation layout on the web, and mathematics as a larger issue.

Why do I say this? Because anyone who has followed this area closely inthe past decade (which, alas, is barely a handful of people) know that it's theMathML fanboys who insist that MathML must be impemented at all costs,actively damaging other approaches, even approaches with better results for users.

To these pursists, MathML is more important than users, authors, andbrowsers.

As a result, projects that made actual progress (like MathJax, mathlive,hell - even KaTeX) are in danger of losing support fromtheir communities because people are being told "you should use MathML". [Don't get me wrong, I can gripe about these projects but at least they move.]

All the while, there's no indication that MathML development will speedup at all, even if Chrome ships the new, cut-down, incompatible spec.(Fun fact: Gecko removed perfectly functioning MathML 3 features. Whatkind of idiot breaks backwards compatibility on the web? MathML fanboys, that's who.)

So if you ever again complain about the lack of improvements in this space, blamethe MathML fanboys. They are to blame. We could have made manysmall improvements to the platform that would have benefited everyone ifthe MathML fanboys hadn't killed everything that didn't suit them and drove away anyone who didn't agree with them.

Reversely, MathML is being held back where it actually shines - XML print production. There's so much useful printequation content to consider for XML workflows (tikz alone!); extendingMathML would be natural here. Instead, even the XML people get nothing (or worse - a cut down spec they can't use until JATS adopts it).

## mathml future scenarios

MathML is the zombie of web standards. Each decade brought 1 additional, differently broken implementation (first Firefox, then Safari, soon Chrome). The new cut down spec that will break a lot of content. The mathml fanboys have silently removed existing features from browsers (I'm guessing to be able to argue that they have 2 implemementations of the new cut down "spec"); what an extremely unusual thing in browsers that just goes toshow how few people use MathML. XML people will have "fun" with getting their garbage to work on the web in this scenario. Bugs in those three disjoint implementations are, of course, aplenty; I find a new one every time something forces me to look at native MathML implementations, some are ridiculously bad (wiping out HTML content is one of my favorites) and most bugs go for years without bugs even being filed (remember when Safari didn't draw fraction lines reliably for over a year? No, you don't because you don't use it and nobody even filed a bug).

For the web, the best case scenario is: nobody cares and nobody uses it. It will become the new font/center/marquee or whatever.

Even if the mathml fanboys were interested in moving the layout facilities into CSS, we'll get, at best, something like CSS tables. If you don't know the "joy" of working with CSS tables: to this day they are not able to suitably realize HTML table layout, they were super buggy for the longest time and are still buggy in many edge cases (despite years of active improvements). But  most of all: people realized they actually needed something completely different, i.e., CSS grid.

Accessibility wise, the shoddy implementations in JAWS and VoiceOver will continue to barely help English speaking blind users. Soiffer will try to push his weird MathPlayer clone into every AT so that he can continue to claim patently false things. No "intent" in the world will make print equation layout accessible in the sense of the web. Nemeth users might eventually get what they want - the rest? Not so much.

In other words, users will continue to find themselves out of luck. But hey, "it's a standard". They made you beg for it, then they begged you for money to pay instead of Apple and Google; now you have something you don't want, something that doesn't work and something that cannot work. It's what you wanted.

I think MathML (this of course means: its community) is fundamentally not willing and not able to be a positive force. It's "MathML or die" all the way. The zombie standard continues it shambling walk.

## interlude

The future will be different from what expect. The other day/month/year, our oldest started learning the piano.Of course, this means learning musical notation; it's one of the benefits, I'd say. But it's (inevitably) hard to motivate.

So being a stupid internet person, I searched around for fun apps that teach the piano.I found apps that, shockingly, didn't really use traditional musical notation. Instead, they had some barebeones resemblance(I'm guessing to enable later learning) but they took things in another direction by leveraging the medium, i.e., modern mobile applications.

These apps would listen via microphone, give immediate feedback on correctness in a range of properties (dynamically increasing tolerance for errors),They would use their infinite canvas to provide just-in-time context in large visuals to keep silly younglings focused and unconcerned about length. They would play along simple training material providing more complex arrangements so that even an early learner would not be facing dull pieces of repetitive notes. They would immediately get you to jump into contemporary pop songs, sync highlighting along the way, bringing enormous satisfaction.They were just generally being impressively awesome.None of this with traditional musical print notation.

## Quo vadis?

So where do we go from here?

I'm not saying you shouldn't put print equation layout on the web. I do it for a living; knock yourself out.

I am saying that you should consider two things when you do.

### even mildly complex print equation layout is simply a bad type of content. 

Find better ways to communicate better. You don't need to go all "Kill math" about it. But for crying out loud experiment, be creative. Or at the very least copy creative people.

There are soooo many good people out there experimenting -- just check math teachers on twitter and you'll find wondersome and wonderful experimentation.

Think about responsive arrangements of your equation layout. Think about animations of equation content.Think about mixing imagery with complex text content and only a touch of equation layout.Think about scrollytelling techniques.Think about using something else instead.And fail! Fail again! Fail well! Fail at failing until you fail to fail.

The web is a wonderous medium. It's grain is fantastic to work with, read its direction, feel it out, mess with it.

### if you do it, do it accessibly and that means do accessibility yourself

If you put print equation layout on the web, be aware that you're bringing inaccessible content to the web. I'm happy to point anyone to WCAG 1.1.1 because every print equation layout tradition clearly separates its use from text.

Essentially, you're putting up a structured image. SVG is the best mental model here: if you generate a diagram with mermaidjs, you could use some of your input to enable accessibility. But you probably have to do a whole lot more.

But you don't have to. Speech Rule Engine provides you the best heuristics on the market and a direct way to bring your own - whether you bring a plain label (that still offers SRE's heuristics and layout information) or you write your own heuristics, it's there to build upon.

Above all: be mindful what you want to do. If you want to provide TeX as non-visual presentation, do that; you are the author and it's your prerogative. If you want to provide more standardized descriptions, use Speech Rule Engine to generate them. You can provide braille-specific descriptions alongside speech-oriented. MathJax and SRE are the best there is for that kind of thing. If you don't use JS on the client, you can still do things server-side. If equation layout gets complex, use an ARIA tree or tree grid with a modicum of client-side JS; several solutions are being discussed that might avoid any client-side JS.
