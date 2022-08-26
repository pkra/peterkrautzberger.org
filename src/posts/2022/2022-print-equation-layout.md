---
layout: post
title: On Print Equation Layout
date: 2022-08-31
permalink: 0218/
latex: true
prism: true
---

This will probably be another thing that will get updates over the years.
Or maybe not, we'll see. This, above all, is for me, not you. 
For to gather my thoughts one last time.
For me to deal with stupid garbage and stupid garbage people which accumulated over the years. 
This is off the cuff, written for people who know this area.
If you want deep research results, feel free to contract my company - we do that kind of thing. 
Don't complain about free stuff.
## Introduction

10 years ago I joined the MathJax project, which forced me to think a
lot about how to put equations in web pages. Actually, I had already
spent quite a bit of time during my PhD and postdoc years thinking
(\*cough\* procrastinating) about the same thing, albeit from a
different perspective.

When I started writing on the web all 13 years ago, I quickly went
through a phase I've seen repeated by many people since:

"oh, there's something called MathML, I should use that"

followed by

"oh this does not work at all, let's not use that",

usually followed by choosing jsMath (if you're old enough) and later
MathJax because they ultimately remain - by far - the best tools for the
job.

After joining MathJax, my job was to profess the prowess of (read:
blindly advertise for) MathML, so I did. That was largely because
MathJax was formally part of Design Science at the time and they made
money with MathML. Luckily, the project moved to the AMS where we could
think about things more freely.

When the whole Chrome 24 debacle happened, there was this one comment
from a Googler (on Google+, naturally you might say). I can't find it
anymore but what I recall them saying is: "maybe it's a good format but
still a bad format for the web". I kept coming back to that thought for
a few years and, eventually, came to agree with it. (This piece is
basically summarizing that.)

In short, I realized that MathML is fundamentally a useful XML print
publishing tool but a bad technology for the web. So I tried to pivot
MathJax away from MathML and its toxic community towards actual web
standards and their underlying principles. We wrote a whitepaper, got
our sponsors on board, and started work on MathJax v3. (This is not what
v3 became but that's ok. I left around my position at MathJax around the
first beta which was a thrill and I'm grateful that Davide and Volker
enabled me to leave after that big leap forward.)

Towards the end of that period, I wrote a number of pieces here,
outlining MathML's many flaws and failures. But as I kept writing: it's
not MathML's fault. MathML does what it's supposed to; but what it's
supposed to do is a bad fit for the web. (Again, this piece is basically
re-iterating those pieces again. What do you expect from a recovering
academic.)

Anyway. In the past 5 years, I've worked primarily on the issue of
converting full mathematical (LaTeX) documents to web formats. If you
follow me on mastodon, you may have seen me use the CW "TeX in real
world production" sharing some of the "gems" from this experience.

All of this has led me to realize that there's a "deeper" problem and I
feel like it needs a (sort of) new name: print equation layout.

## Framing

Framing is important. What I call "print equation layout" is more
frequently called "math layout", "formula layout", or just "math"
(I find that last one somewhat insulting). The phrase "print equation
layout" may seem unnecessary or convoluted. To some degree, I agree. For
example, I don't believe we have seen "web equation layout" come into
existence during these first 30 years of the web. Nor, sadly, do I
expect to see it in the next 10.

But as a framing device "print equation layout" serves to ground the
conversation and keep aspects in focus that I find critical to many
discussions.

In my opinion, print equation layout is, ultimately, a flawed print
tradition that web technology should not have to make extra efforts to
support (e.g., as proposed by MathML's addition to HTML5 way back when).
The layout features are largely archaic with very few actual challenges
remaining in the context of contemporary (2022) web layout.

Furthermore, print equation layout is fundamentally inaccessible in the
sense of web accessibility. However - and this is where this part gets
very tricky - print accessibility traditions for print equation layout
do exist (at least in the US as well as a few other countries and of
course the US perspective always dominates these conversations). This
may seem like a contradiction - how can there be an accessibility
tradition that is bad in the context of the web - but it is really no
different from the visual layout traditions.

This is a key complication in the discussions (and myths) around this
topic: because print layout and print accessibility traditions exist,
people assume that they must be realized on the web - and in the same
way.

I want to argue that neither aspect of print equation layout - visual
layout traditions and accessibility traditions - is particularly good
or useful *on the web*. As a result, it is a particularly problematic
set of techniques because the contemporary web already has plenty of
good and useful features that solve print equation layout.

Adding an additional, separate feature layer for a problematic print
technology tradition does not make any sense, in fact it has a (by now
long) history of hurting the community.

### Interlude

In TeX, we can put punctuation after a table. In HTML, we cannot. Should
HTML change because this print tradition exists?

## What's in a word

Let's try to be a bit more specific.

Print equation layout is...

- what people think of when you say "math/formula/equation" 
  // what  MathML partially captures 
  // what math mode TeX usually produces
  // what MS Word formulas usually look like
- **an elaborate, two-dimensional form of abbreviated notation for compressed, highly complex, context dependent, abstract thought.**
  - even at an elementary level (e.g., long addition/multiplication/division, "explanatory" layout).
  - on research: exacerbated by 20th century content explosion combined with print page limits
- highly (highly!) ambiguous
- often integrated into additional complex notation (e.g., text annotation, graphical documents).
- a consequence: it is \"non-text content\" (in the sense of WCAG SC 1.1.1).
  - closer to "ascii art" than HTML traditions of "semantic markup"

Naturally, this does not apply to all instances of print equation layout - 1+1=2 is just fine.

It crucially applies where the actual problems occur - both in visual
and non-visual rendering. The problem is not to handle 1+1=2. The
problem is more

$$ \det(A)=\sum _{\begin{array}{c}k_{1},k_{2},\ldots ,k_{n}\geq 0\\k_{1}+2k_{2}+\cdots +nk_{n}=n\end{array}}\prod _{l=1}^{n}{\frac {(-1)^{k_{l}+1}}{l^{k_{l}}k_{l}!}}\operatorname {tr} \left(A^{l}\right)^{k_{l}}$$

## Visual print equation layout on the web

The problem of realizing print equation layout on the web has been
solved for almost two decades now. Well, 18 years to be exact.

Let that sink in for a bit. 18! years!

With CSS, this started as (client-side) JS only and span soup; we have
had that since 2004 (via jsmath, MathJax's precursor).

With SVG, we've had this since 2011. MathJax v2, first client-side but
quickly also server-side (via phantomjs and later via mathjax-node). 
[To some degree, various tools could produce SVG from, e.g., TeX, even
earlier that but they didn't generally understand or care about the web
as a use case, e.g., they wouldn't give you good vertical alignment to meet a
baseline.]

It has been possible to realize print equation layout with just CSS
(e.g., server-side generated span soup and CSS) since IE8 - IE8 damnit,
released in 2009 - and with just SVG since IE9 (2011). [To be fair,
MathJax was not the first to realize such an output, KaTeX was, but one
of my favorite successes while at MathJax was to prod Davide long enough
about a "fast Preview without JS" that he built the "CommonHTML" output
for v2.7 which added this. I'm also still fond of the previewHTML output
which preceded it and traded beauty for CSS simplicity.]

Visual print equation layout has been solved thrice over with a myriad
of smaller and larger tools doing it in varying ways, balancing code
simplicity with quality of layout. (mathquill, jqmath, math-ml etc)

[Aside. This is why a certain blog post from a few years ago about
"alternate realities" was so very much off base - CSS driven print
equation layout was first, SVG a close second, not some XML dialect
nobody was using for anything but print production. In the similar
situations the same people would (indeed did famously) argue that a
popular working solution should be considered the prime candidate to
move standardized forward, not some contrived academic proposal. But I
digress.]

So print equation layout solutions for the web have existed for a long time.

Are they perfect? No.

Are they still getting better? Hell yes - all the time. The ever
evolving CSS continues to make things easier (grids, container queries,
variable fonts, layers!). SVG is just rock solid and yet improves.

The most significant CSS challenge at this point are stretchy character
constructions - not a massive problem and one that could (and should) be
solved independently of any "mathematical" considerations since stretchy
constructions are frequently used in other design scenarios (e.g.,
stretchy braces around lists are pretty common).

In the nice-to-have category (for me), better control over glyph
bounding boxes might be neat. Right now, high quality print equation
layout realized with CSS depends on webfonts. This is not a particularly
critical consideration in my book - much high quality text layout on the
web relies on webfonts - and the bounding box problem also needs a more
general solution (and in fact there are proposals for better access to
font internals).

Now some people argue that the CSS and SVG layout solutions like MathJax
generate "convoluted" markup output. This is a red herring.

On the on hand, convoluted XML is not "better" if it says "math" in it.
On the other hand, nobody from CSS or SVG (spec) land has ever tried to
help. Simply put: the output looks a lot like Bootstrap's grid layout in
its early days - damn right they were convoluted - or an accessible date
picker markup today - extremely convoluted. In other words: it looks the
way it looks to get the job done. And it does. And if print equation
layout tools for the web would be heard the same way grid frameworks
were heard, we'd get less convoluted output easily AND in a way that
benefits the entire web stack.


### theoretical issues

Ultimately, the problem is: is this layout tradition a good fit for the
web platform. I think it is not. Even the simplest examples will
run into "fun" traditions like "single letter variables are italic,
multi-letter ones are upright", moveable limits  

TODO

###### To recap:

visual layout that matches print equation layout has been solved well
for over a decade. It's somewhat ridiculous to suggest the web has a
significant technology gap here that only a completely new set of markup
and layout features can fix.

This leaves non-visual-layout considerations regarding print equation
layout, in particular (web and print) accessibility considerations.

## Ambiguity

Let's talk about ambiguity.

### A different example

Let's start with a different example, [musicalnotation](https://en.wikipedia.org/wiki/Musical_notation).
In modern notation, a note is about as ambiguous on its own as a
[grapheme](https://en.wikipedia.org/wiki/Grapheme) in
text. For example, without a staff and other context the note itself
doesn't tell you much. You might know the value by looking at just the
note but even then this might not be enough (e.g., if you happen to miss
a subsequent dot or preceding accidentals). Even with a staff, you might
still have trouble, e.g., if all you have is a single measure you might
lack the key. Similarly for dynamics. Also, it might be part of music
that ranges from Opera to Jazz and you'll want to know that to adjust
your understanding.

It's hard to know when you have all the relevant information. A piece
may appear complete but lack information on, e.g., which instrument this
is for, what other voices there might be.

And this is for a fairly limited set of notational elements.

Now expand this to the ever changing mathematical notation, then expand
to engineering and sciences where there is no limit in generalization
and specialization. \[Of course, musicians can easily discuss a single
note as passionately and intricately as mathematicians discuss a single
number. But while this is much more interesting, it is unfortunately not
the topic here.\]

### Mathematical examples

- superscript 2 - is probably some sort of "squared" thingie? (Some sets of heuristics say yes)
- Binomial coefficient ("n choose k") cannot easily be distinguished from a 2-dim vector notation (similar examples for [Stirlingnumber](https://en.wikipedia.org/wiki/Stirling_number) exist)
- frequent use of space or punctuation to imbue layout with extra meaning 
  // to avoid having to add clarifying notation (e.g., `+a + -c + +b` vs, say, `++b` [https://whystartat.xyz/wiki/Space_is_significant](https://whystartat.xyz/wiki/Space_is_significant))
- "(a,b)" - open interval? point in the plane? bilinear form in a Hilbert space?
- `[a]` might be the sign of a // `[c, d]` might be a matrix // `A[b]` might be a ring
- `|...|` - absolute value, norm, determinant?
- `|` - evaluation of definite integral (alternatively `[ ... ]`)
- superscript -1 - so many meanings
- context, e.g.,"d" in `(a + bx\^3 + cx\^2 + dx = 0)` vs "d" in (`\int f(x) dx`)
- delta vs triangle
- the use of invisible operators (U+2062, U+2061) - where to even start?

For more "inspiration", check out [https://whystartat.xyz/wiki/Category:Ambiguities](https://whystartat.xyz/wiki/Category:Ambiguities)

Another favorite of mine: the [Legendre symbol](https://en.wikipedia.org/wiki/Legendre_symbol)
was first used before 1800) and yet apparently there's no decent way to read it out loud, see
[https://mathoverflow.net/questions/15447/is-there-a-standard-way-to-read-the-legendre-symbol](https://mathoverflow.net/questions/15447/is-there-a-standard-way-to-read-the-legendre-symbol)

We can also go the other way around. 

We can have the same voicing for different
notations. `|A|` and `det(A)` may read "determinant of A"; both `exp(x)` and
`e^x` may read as "exponential function at x". How would a non-visual user
know which notation was used when someone said this?

A separate problem is the abuse of the alphabet in varying typefaces to
convey context-dependent meaning. It's so easy to - visually - discern
italic from normal, serif from sans-serif, gothic from Sütterlin - well,
in truth it is not that easy but here we are anyway. In addition, foreign
alphabets are abused so much that mathematics has become reliant on
particular typeface designs (cf. [this source](http://web.archive.org/web/20120229131933/http://omega.enstb.org/yannis/pdf/boston99.pdf)).

The noise when differentiating these ("Upper German X") for non-visual
users is immense - or more often: the silence is immense.

And then we haven't even opened the box of notation that's specific to
engineering, physics and chemistry but realized using print equation
layout.

### Semantics or layout?

There's a moving goalpost (or perhaps gaslighting) issue that I've encountered
many times: should assistive technologies (AT) provide information
about layout or semantics when it comes to print equation layout?

A common stance in the general accessibility community is: it's not
about special treatment, it's about equal treatment. What does that mean
for print equation layout? Equal treatment would provide precise
information about layout.

But that's not what users actually expect (or are accustomed to).
Instead, "semantics" are desired. Take this simple example:

`f: X → Y`

Should it read

"lower italic f colon upper italic X right arrow upper italic Y"

or

"f maps from upper X to upper Y".

The latter is certainly easier and happens to be how humans speak.

However, print equation layout does not offer such semantic information.
Therefore, solutions turn to guesswork aka [heuristics](https://en.wikipedia.org/wiki/Heuristic).

These heuristics work reasonably ok for school-level print equation
layout and some, more "stable" parts of college education (e.g.,
engineering). But they easily and frequently fail even in these areas.

TOOD EXAMPLES?

To come back to our examples: yes, that superscript 2 is very likely
"squared" but then again it is, inevitably, far from always "squared".

Beyond the evident lack of semantics in print layout per se, the second
problem is the lack of contextual information. While MathJax once
had some grant money to allow research into the problem, no existing solution takes
even other equations into account (e.g., try to guess what a variable
that was used earlier might represent later). They surely do not try to
analyze the whole document context (e.g., [Bra-Ket notation](https://en.wikipedia.org/wiki/Bra%E2%80%93ket_notation)
in physics, P(X) in statistics, various arrows in category theory,
operations in tropical geometry, or, again, the Legendre symbol).

In simplest terms: think about `f(g+h)(x)`. Most mathematicians would
agree that there's a good chance that there's a function application (at
x) happening but it could also just be a multiplication with x after
some calculations within the parentheses, who knows. Fairly limited
contextual checks can probably help out here but without them we're
lost.

What's worse: today's heuristics also often do not work within an
equation, e.g.,

`|A| = {\begin{vmatrix} a&b \\ c&d \end{vmatrix}} = ad-bc.`

Speech Rule Engine's heuristics (the best around) will identify the
middle part as a matrix determinant but still treats `|A|` as absolute
value. And in fairness, A might still be some poorly named scalar.

Frequently, magical semantics from layout is what people (especially in
the MathML community) promise.

Yet when faced with the obvious, plentiful, and unsolvable problems, the goal post is
casually moved to "you need to give layout information" only so that
when you provide layout information, people go back to "oh, that's not the
idea, you should provide semantics".

Unfortunately, many people believe this empty promise.

## Problems from print layout traditions

There are both theoretical and practical problems arising from print
layout tradition.

#### Theoretical

Print equation layout has some traditions that add another layer of
problems.

For example, there is the concept of moveable limits. For example the
expression

`\sum_{i=0}^\infty`

would, at plain view, indicate we get Σ with a subscript of "i=0" and a
superscript of ∞.

However, this depends on the mode. In inline math mode, TeX will lay
this out as described. In display math mode, the sub- and superscripts
will become under- and overscripts.

This is of course convenient from an authoring perspective - you can
switch modes as you like, thus macros / copy&paste are much easier.

TODO make theoretical layout section
[From a layout perspective, this automatism wouldn't have to be built
in, but weirdly, MathML builds it in. In fact, it has a separate
operator dictionary which describes various layout rules instead of
focusing on the barebones of layout.]

This means, we have intentionally ambiguous layout instructions.

#### Practical

Given the nature of print products, authors are prone to abuse layout.

For example

Authors frequently make their content work purely visually, placing
elements side-by-side, relying on the fixed positions of print layout.

They will use tabular layout to split content apart so that it can fit
page dimensions (e.g., complex break up across lines), thereby making it
impossible to reflow in a dynamic environment and group correctly in a
non-visual semantic analysis.

Reversely, they will space content out to fill a page, impeding reflow
or resizing in dynamic environments.

They may "accidentally" rely on TeX's defaults, e.g., consecutive
display math blocks may align if those blocks are generally centered
(rather than explicitly grouped by aligned blocks); yet with different
alignment defaults, the alignment may fail unexpectedly.

## Visual print equation layout

From the AMS point of view, the most prominent visual layout tradition
is of course the one Donald Knuth enshrined in the TeX book.

It is worthwhile to note that recently the AMS has been leveraging a
re-interpretation of those rulesets by adopting xelatex which focuses on
equation layout using open type math table fonts (STIX2) which in turn
was designed for Microsoft Word (again, to follow the TeX book).

On the web (and in many publishing content / production pipelines),
abusing HTML markup is frequently favored (i.e., text superscripts,
tables, simple vertical alignments) alongside low quality (usually GIF)
rendering for inline math and high-quality (usually PNG) for display
content. Frequently, only the 'problematic' parts are rendered as images
leading to poor layout (e.g., tables with some equational content and a
text label in lieu of properly labeled equational content).

## Non-visual print equation layout

In several countries, print equation layout has some form of non-visual
accessibility tradition.

The US traditions are dominating in this context since MathML was
developed largely by US companies.

For print traditions in the US, the most known methods for non-visual
presentation were developed by [Abraham Nemeth](https://en.wikipedia.org/wiki/Abraham_Nemeth) -
the MathSpeak ruleset for voicing and the Nemeth Braille notation for
tactile presentation. A critical point is that both sets were designed
for human creation. MathSpeak, to enable a non-expert reader to read
mathematical publications to blind users; Nemeth Braille for a
specialist braille transcriber (and a trained reader).

According to Volker Sorge (who implemented support for both as part of
Speech Rule Engine and MathJax), neither MathSpeak nor Nemeth Braille
can be produced from input without extensive heuristics. They are in
fact not properly specified and can be contradictory according to
Volker.

I would argue this is by design - they could assume a human
orator/transcriber who can and should adjust rules on the fly to enhance
the simplistic heuristics. Even without understanding mathematics, it's
fairly easy to make a change on the fly, e.g., after initial feedback
from the blind user that, here, the superscripted 2 is not "squared"
but, say, a row or column vector.

It's probably worth noting that Nemeth Braille has not been revised
since the 1970s (though a revision has finally started a few years
back). This is a specialized Braille notation that describes visual
layout (sic!) and only partially linearizes the output (e.g., fractions
and scripts are linearized while tabular structure are not), leading to
many problems as contemporary refreshable braille displays for computers
are single-line devices.

## MathML

MathML does not provide sufficient quality, neither in theory nor in
practice.

### visually

**Practically**: visual rendering in browsers is poor, buggy, hard to
workaround, and not maintained by browser companies.

Bugs range from mildly annoying to problematic to mind bogglingly weird.

**Theoretically**: visual rendering is not actually specified (though
there is a new effort to change that, making all existing MathML
renderers invalid and breaking content without care).

This is after 25 years of MathML, 15 years of MathML in HTML5, ~10
years of MathML "support" in Firefox, ~8 years of MathML "support" in
Safari, neither of which are due to actually Mozilla or Apple 
spending resources but co-opted volunteer efforts. No amount of
Igalia newspeak will change that fact.

Optimistically, it will take a good decade to get reliable visual
rendering quality.

But the handful of people behind the implementations seem unable to grasp
what the real life problems are so they live in their little
bubble insisting that repeaing "but it's a standard" does anything for
users.

### non-visually

MathML captures abstracted, shared concepts of print equation layout
traditions. It suffers the consequences in terms of non-visual
rendition.

**Practically**, AT support is poor. MathML is not supported by
"simpler" systems (with many users) such as "read aloud" features in
browsers, voice assistants etc.

Only three screenreaders formally claim support and their support is
limited, buggy, and of poor quality - and the pieces are minimally
maintained by AT companies [cf. Brian Richwine's talk from ATHENs how
some AT doesn't say "end fraction/script" causing confusion, and
anecdata form Apple support "there's just enough users to warrant
fixes"\.

In addition, AT UX is often questionable, e.g., JAWS will not read
larger MathML fragments but just announce the presence of a math
fragment; users have to then open a separate viewer application to
actually read and explore the expression. (Fun fact: this is called
"Math Viewer" and actually uses MathJax for visual rendering, leading to
visual differences from the browser).

Similarly, VoiceOver on iOS will open pop-ups for exploration of MathML
fragments, creating a separate context and confusion. NVDA needs third
party plugins to do anything and has no visual component (i.e., highlighting while exploring)
leaving non-blind to guess what is going on.

**Theoretically**, MathML cannot be accessible in the web's sense.
Heuristics must be applied and now you frequently have 2 problems -
your MathML must work visually and you might have to work around
particularly dumb heuristics.

When I ran the W3C's Math on the web Community group, there was wide
consensus that MathML inevitably requires extensive heuristics to
provide non-visual (voice, tactile) renditions. The MathML people in
that CG later publicly stated the exact opposite to what they said in
those discussions, continuing the claim that MathML is the only viable
accessible solution - after stating previously that MathML cannot solve
this problem. The sad part is that the W3C's TAG fell for it. Because
they just don't care to dig deeper (and why should they, nobody seems to
and anyone sensible will just use MathJax).

At this point let's note that heuristics are something that web
accessibility eschews; heuristics are only used only to recover from
errors (e.g., parsing invalid markup into a valid document, making sense
of authoring errors).

Accessibility on the web revolves around the so-called "accessible name"
which is calculated for each element in the document. This calculation
works from the leafs up the document tree.

Print equation layout does not allow for recursive naming - just think
`n choose k`, or `^{-1}`.

MathML is even worse for this, as it is a stratified format for
rendering purposes; in TeX you can at least have author macros to try to
make sense.

Authors, especially with AMS, invent layout that requires new heuristics
- both large and small (e.g., abusing amsmath's sideset, creating custom glyphs,
tikzs-inside-math). Historically, this coincides with naming (cf.
[https://jeff560.tripod.com/calculus.html](https://jeff560.tripod.com/calculus.html)
for some historic examples such as nabla) but not always (cf. the Legendre earlier). [Authors also
regularly just hack layout badly (e.g., `\mathop{l\overline{og}}`) but
that's technically speaking a different problem.]

### Other aspects

#### localization

Another argument sometimes mentioned by MathML enthusiasts is that
MathML can be localized automatically. While that's true to some degree
(and we use Speech Rule Engine for articles in French to create
MathSpeak output in French), this is a questionable claim without any
research substantiating the positive effect.

In practice, the available localizations in AT is quite limited and
largely undocumented. This is even worse for Braille.

There are obvious obstacles for localizations. Many equations contain some
text elements which would not be localized. Similarly, common
terminology has different localizations/abbreviations. For example

- sine as "sen" (ES, IT) or "sin" (EN, DE)
- in geometry SAS/ASA/SSS (EN) vs SWS/WSW/SSS (DE)
- sin\^-1 (EN) vs arcsin (EU) (etc)
- repeating decimal notation (above, below / arc vs line)

While layout-relevant terms might have suitable automatic translations
(e.g., start/end fraction), layout traditions can also differ across
languages (long division, matrix notation, integral notation)

As discussed, print equation layout is fairly meaningless out of
context. It's difficult to imagine a reader that would read content in a
language they don't understand enough to make sense of generic
information like "begin/end fraction".

#### Don't worry about it

The MathML community likes to say "don't worry about the complicated
markup, MathML is something that should be generated, not handwritten"

This is a strange statement full of falsehoods.

MathML is also advertised as "something you can edit without
understanding it", e.g., while copy checking content, if an editor spots
a symbol that does not match the (author) PDF, then thanks to the
structured XML markup they can fix this. This example shows two
problems: conversion is not "easy" but riddled with errors, and having
an "agnostic" markup (as opposed to some author's TeX macros) is
actually a boon here.

Similarly, as described before, MathML supports "moveable limits"
(including magical dictionary-based behavior). These features show how
important it was for the MathML community to be compatible with
authoring traditions instead of focusing on the "pure" layout.

Finally, this line of argument is self-defeating. If the whole point is
to convert from some kind of "real source" to MathML, then it's only
natural to convert from that "real source" to HTML or SVG.

Why have an extra markup system that requires an extra rendering process
when you can just use what's already there? (MathML fans will argue that
it's better for accessibility or tangential affordances like copy &
paste. These invariably turn out to be false or very inaccurate claims.)

#### Limited support for MathML

Among screenreader, only Apple VoiceOver and Vispero's JAWS (windows)
claim to support for MathML. In reality, the implementations are full of
bugs and limitations. Bug reports are rarely responded to, far less
fixed. Apple has essentially communicated "it is what it is".

Nemeth Braille support has relied on the open source liblouis library -
which recently discontinued its support; it only ever converted MathML
to families of Nemeth/UEB and German/Dutch/Flamish braille notations 
and it did so quite poorly.

More importantly, no "light" assistive technology supports MathML,
i.e., "read aloud" features in smaller helpers, in epub reading
applications or voice assistants (Siri et al when reading out web
content). This lack of support impacts the largest portion of users,
since these tools are much more widely used than the more advanced,
full-fledged screenreaders like VoiceOver and JAWS.

## What do we do to address this inherent lack of accessibility?

Print equation layout is inherently not accessible in the sense of the
web. MathML is a red herring as it (at most) aims to reproduce
accessibility traditions from the print era but inherently cannot
reproduce it well since those traditions relied on human operators
(orators or transcribers). It also only works for English, or more 
precisely Nemeth users.

I invariably approach such problems by looking for guidance regarding
the web in general.

### The web's core principles

"users before author before implementors before theory"

From
[[https://www.w3.org/TR/design-principles/\#priority-of-constituencies]{.underline}](https://www.w3.org/TR/design-principles/#priority-of-constituencies):

"User needs come before the needs of web page authors, which come before
than the needs of user agent implementors, which come before than the
needs of specification writers, which come before theoretical purity."

### What do users want from print equation layout? And what do they actually need?

We simply don't know. There are too few AT users among the mathematical community
- support is so poor, few make it to college let alone research-level.

Anecdotally, the most common feedback I've seen in educational studies
comes down to "I want it to be read like my teacher/prof reads it in
class".

But for research? Who knows.

They probably want TeX annotations because research-level users know TeX
syntax. But is that what they **need**, e.g., when exploring a complex
expression?

This discussion is usually skewed by two major factors: US users and
blind users. Blind users (especially students) need to write assessments
in the tools their classes require. If they need to use MS Word, they'll
need something to paste into Word. MathML was originally conceived as
just such an exchange format for print equation layout - abstracting the
minimal common ground so that each engine could reasonably present it.

However, the authoring problem requires conversion. This usually goes
haywire. E.g., Libre office's "Math editor" digests MathML but converts
it into its own linearized syntax (\~Asciimath like) and while it
includes MathML in its file, that MathML will be generated from the
linearized format. This is a process full of bugs.

MS Word does the same thing but has a custom XML format for print
equation layout.

MathML-based wysiwyg editors exacerbate the problem (as wysiwyg is wont
to do) since they cannot easily discern logical structure of input // do
not make it apparent to users that they're doing something really
terrible (e.g., inserting random whitespace).

### What we want for our authors

We want to give our authors the ability to express themselves well.

And authors want to do that.

Just look at any "list of symbols" in a monograph, e.g., from GSM210

TODO ![](media/image1.png)

Despite using very ambiguous terms, the authors clearly have a strong
intent.

We want authors to bring their intent into the process.

We can barely do that with SRE. We cannot do that with MathML.

### What we want for our users

We want to take responsibility for our content.

We want high-quality consistent, robust rendering for all users.

We want visual layout that is robust against font issues (especially on
epub).

We want speech and braille alternatives.

We want consistent, reliable, robust exploration.

We want to be able to fix issues.

We want to provide additional features (e.g., convenient access to TeX
sources, customization options).

### What we do

We provide high-quality visual rendering using MathJax's SVG output,
alongside the high-quality heuristics in Speech Rule Engine to generate
non-visual rendering.

We generate fully explorable layout and descriptions that are the same
for everyone everywhere.If there's a problem, it is our fault, not the
user's. And we can fix it.

We use the MathSpeak ruleset for descriptions meant for voicing because
MathSpeak doesn't attempt to be as "smart" as other available heuristics
(optimized for school level mathematics).

We use Nemeth Braille because the AMS is publishing primarily content in
English. We are aware that SRE doesn't have any French braille support
so we accept that we need to use Nemeth there, too.

The speech descriptions work with all tools - from full-fledged
screenreaders and simple read-aloud tools. If there are issues (e.g.,
recent VoiceOver on iOS regression) we can work around it.

We know that the ARIA technique we use for exposing Braille alongside
speech-optimized text is cutting edge and not widely supported yet.

We provide a lightweight and robust exploration that falls back solidly
to a single description.

We embed TeX sources that automatically copy&paste.

We are able to add additional options to expose various formats (e.g.,
populating everything with TeX or loading full-on client-side MathJax,
and, even, generating MathML should we want to). \[In fact, we generate
MathML for crossref abstracts. We just consider it lower quality. Much
like we used to generate PNGs for Kindle production.\]

We do so with intent and deep knowledge of the problem space, the
capabilities of our solution and the flexibility to help our users.

## Tangents about MathML

### copy & paste

The MathML community will frequently point out how "easy" it supposedly
is to copy&paste MathML around.

The reality is that extremely few applications accept MathML, it's a
cumbersome process, and MathML is dropped in the process, replaced with
whatever internal format is used.

The primary reason why this myth holds is that MS Word digests MathML.
However nowadays, MS Word also accepts (reasonable math mode) TeX when
pasting into "equation fields" which shows both the limited usefulness
of MathML as well as the pervasiveness of (math mode) TeX. And of course
Word uses its custom markup syntax internally (and its home-grown
technology for braille and voice rendering instead of whatever ATs
provide).

More importantly, while copy&paste is a worthwhile challenge, it is also
a general challenge with web content. Copy&pasting website content into
any kind of text editor (word processor, email application, TeX sources)
is very poorly supported in general. While headings might survive, even
something as simple as a list can break, tables usually break and "true"
web design (e.g., anything CSS) does not survive. Even (inline) SVG
content is not supported widely (despite being a well supported,
self-contained graphics format).

This is not at all surprising given how most of the targets are meant to
create print layout - and struggle with web layout. Why then should
equation layout on the web be less complicated than the rest? Instead of
insisting on broken technology (like print equation layout and
specifically MathML), it would be better to think about the more general
problem that affects everyone.

### authoring and recreating

Related to copy&paste is the area of authoring and recreating print
equation layout.

Let's go back to the example of matrix determinants. Both `det(A)` vs
`|A|` would be voiced as "determinant of A" yet their authoring is quite
different.

Sometimes, readers have to (re)create content to match someone else's
example (e.g., in any educational setting).

Again, this is a general problem (color vs colour). For text, AT usually
provides character-by-character navigation (incidentally, I'm not sure
about graphemes more generally). For print equation layout this is
naturally trickier: on the one hand, we come back to the idea to "just"
give layout information, on the other hand layout may be insufficient
(e.g., table-like).

### Voice input/output

Voice input is becoming an important aspect of how users interact with
web content, both using AT (e.g., in combination with Dragon Naturally
Speaking) as well as using general purpose tools such as smart
assistants (Apple's Siri, Amazon's Alexa, Google's assistant).

Despite efforts from the MathML community, there has been not even a
slight progress for enabling print equation layout by voice input.

### Video Captioning

Providing accessible video media requires captions, in particular
transcripts, subtitles, and audio descriptions. This requires voice
recognition, image analysis, and conversion to speech (e.g., a
mathematical lecture with equations on a blackboard that the speaker
discusses). Since the standard formats (e.g., for subtitle functionality
in a video player) require plain text, MathML is of no use here. In
addition, TODO

### Search

Despite decades of research, search around MathML has never provided
tangible benefits despite clear needs to discover existing results in a
vastly expanded field, both to avoid and identify duplicate research.

Springer's discontinued LaTeX search or zbmath's MathML based system
are good examples of this failure. A large research corpus revolves
around analyzing MathML fragments, yet no actually useful system is available.

### Death of progress (ranty)

If only one things becomes crystal clear from all this: the MathML
people have actively worked against progress for equation layout on the
web, and mathematics as a larger issue.

Why do I say this? Because anyone who has followed this area closely in
the past decade (which, alas, is barely a handful of people) know that it's the
MathML fanatics who insist that MathML must be impemented at all costs,
actively damaging other approaches, even approaches with better results for users.

To these pursists, MathML is more important than users, authors, and
browsers.

As a result, projects that made actual progress (like MathJax, mathlive,
hell even the fools from KaTeX) are in danger of losing support from
their communities because people are being told "you should use MathML".

All the while, there's no indication that MathML development will speed
up at all, even if Chrome ships the new, cut-down, incompatible spec.
(Fun fact: Gecko removed perfectly functioning MathML 3 features. What
kind of idiot breaks backwards compatibility on the web FFS? MathML fanaticss, that's who.)

So if you ever again dare complain about the lack of improvements in this space, blame
the MathML fanatics. They are to blame. We could have made countless
small improvements to the platform that would have benefited everyone if
the MathML fanatics hadn't killed everything that didn't suit them.

Reversely, MathML is being held back where it actually shines. There's so much useful print
equation content (tikz alone) to consider for XML workflows and extending
MathML would be natural here. Instead, those people get nothing (or worse).

## mathml future scenarios

MathML is the zombie of web standards. Each decade brought 1 additional, differently broken implementations (Firefox, Safari, Chrome) and there's now a cut down spec; the mathml fanatics have silently removed existing features from browsers for whatever idiotic reasons (probably to argue they have 2 implemementations of the cut down spec). XML people can have fun with getting their garbage on the web in this scenario. Bugs are aplenty (I find a new one every time something forces me to look at native MathML), some are ridiculously bad (e.g., wiping out HTML parents), most go years without even bugs being filed (remember when Safari didn't draw mfrac lines reliably for over a year? No, you don't because nobody ever filed a bug).

For the web, the best case scenario is: nobody cares and nobody uses it. It will become font/center/marquee or whatever.

Even if the mathml fanatics were interested in moving the layout facilities into CSS, we'll get, at best, something like CSS tables. CSS tables were never able to suitably replace HTML table layout, they were super buggy for the longest time (and are still buggy despite years of improvements). But  most of all: people realized they acutally needed something completely different (i.e., CSS grid).

Accessibility wise, the shoddy implementations in JAWS and VoiceOver will continue to barely help English speaking blind users. Everyone else will continue to find themselves shit out of luck.

MathML and its community are fundamentally not willing or able to be a positive force. It's "MathML or die" all the way. The zombie continues.

## reader takeaway

So where does this leave us? 

I'm not saying you shouldn't put print equation layout on the web.

I am saying that you should consider two things when you do:

### even mildly complex print equation layout is simply a bad type of content. 

Find better ways to communicate. You don't need to go all "Kill math" about it. But for crying out loud experiment 

There are soooo many good people out there experimenting -- just check math teachers on twitter and you'll find wondersome and wonderful experimentation.

### if you do it, do it accessibly and that means do accessibility yourself

If you put print equation layout on the web, be aware that you're brining inaccessible content to the web.

Essentially, you're putting up a structured image. SVG is the best mental model here: if you generate a diagram with mermaidjs, you could use some of your input to enable accessibility. But you probably have to do a whole lot more.

Above all: be mindful what you want to do. If you want to provide TeX as non-visual presentation, do that; you are the author and it's your prerogative. If you want to provide more standardized descriptions, use Speech Rule Engine to generate them. You can provide braille-specific descriptions alongside speech-oriented. MathJax and SRE are the best there is for that kind of thing. If you can't use JS on the client, you can still do things server-side. If equation layout gets complex, use an ARIA tree or tree grid with a modicum of client-side JS. Keep an eye focusgroup.



### TODOs

* stupid layout: textContent influenced layout -- operator dictionary,  mi single vs multi letter; compare to years of debates around aligning table cells at decimals
* https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html#symbolic-text-characters  on how symbols are not characters (there's a part about equations later on in that page which is weird in its own right)
