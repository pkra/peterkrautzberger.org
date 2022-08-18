---
layout: post
title: On Print Equation Layout
date: 2022-08-31
permalink: 0218/
latex: true
prism: true
---

## Introduction

Framing is important. What I call \"print equation layout\" is more
frequently called \"math layout\", \"formula layout\", or just \"math\"
(I find that last one somewhat insulting). My phrasing may seem
unnecessary or convoluted. To some degree, I agree. In fact, I don\'t
believe we have seen \"web equation layout\" come into existence during
these first 30 years of the web.

But as a framing device "print equation layout" serves to ground the
conversation and keep aspects in focus that I find critical to the
discussion.

In my opinion, print equation layout is, ultimately, a flawed print
tradition that web technology should not have to make extra efforts to
support (e.g., as proposed by MathML). The layout features are largely
archaic with very few interesting challenges for modern web layout

Furthermore, print equation layout is fundamentally inaccessible in the
sense of web accessibility. However, print accessibility traditions
exist (in the US).

This is a key complication in the discussions (and myths) around this
topic: because print layout and print accessibility traditions exist,
people assume that they must be realized the same way on the web. Yet
neither aspect of print equation layout is particularly good or useful.

## What's in a word

Let's try to be a bit more specific.

Print equation layout is...

- \*\*an elaborate, two-dimensional form of abbreviated notation for

  > compressed, highly complex, context dependent, abstract thought.\*\*

  - even at an elementary level (e.g., long

    > addition/multiplication/division, "explanatory" layout).

  - on research: exacerbated by 20th century content explosion
    > combined with print page limits

- highly (highly!) ambiguous

- often integrated into additional complex notation (e.g., text

  > annotation, graphical documents).

- a consequence: it is \"non-text content\" (in the sense of WCAG SC

  > 1.1.1).

  - closer to "ascii art" than HTML traditions of "semantic markup"

Naturally, this does not apply to all instances of print equation layout

- \$n\$ is just fine.

But it crucially applies where the actual problems occur - both in
visual and non-visual rendering. The problem is not to handle 1+1=2.

## Visual print equation layout on the web

This problem has been solved with JS+CSS since 2004 (via jsmath,
MathJax's precursor) and with SVG since 2011 (MathJax v2).

It was possible with just CSS since IE8 and with just SVG since IE9.

Visual print equation layout has been solved thrice over with a myriad
of smaller and larger tools doing it in varying ways, balancing code
simplicity with quality of layout.

The ever evolving CSS standard continues to make things easier. The only
significant challenge at this point are stretchy constructions, not a
massive problem that could and should be solved independently of any
"mathematical" considerations as stretchy constructions are frequently
used in other designs.

## Ambiguity

Let's talk about ambiguity.

### A different example

Let's take [[musical
notation]{.underline}](https://en.wikipedia.org/wiki/Musical_notation).
In modern notation, a note is very ambiguous on its own, e.g.,, without
a staff or other context. You might know the value by looking at just
the note but even then this might not be enough, e.g., if you happen to
miss a subsequent dot or a preceding accidental(s). Even with a staff,
you might still have trouble, e.g., if all you have is a measure, you
lack the key. Similarly for dynamics. Also, it might be anything from
Opera to Jazz and you'll want to adjust to that.

It's hard to know when you have all the relevant information. A piece
may seem complete but lack information on, e.g., which instrument this
is for, what other voices there might be.

And this is for a fairly limited set of notational elements.

Now expand this to the ever changing mathematical notation, expand to
engineering and sciences. There is no limit.

### Mathematical examples

- superscript 2 = "squared"? (MathSpeak heuristics say yes)

- "n choose k" vs 2-dim vector (related: [[Stirling

  > number]{.underline}](https://en.wikipedia.org/wiki/Stirling_number))

- invisible operators - where to even start

- frequent use of space or punctuation to imbue layout with extra

  > meaning // to avoid having to add clarifying notation (e.g., +a +
  > -c + +b vs, say, ++b,
  > [[https://whystartat.xyz/wiki/Space_is_significant]{.underline}](https://whystartat.xyz/wiki/Space_is_significant)
  > )

- "(a,b)" - open interval? point in the plane? bilinear form in a

  > hilbert space?

- \[a\] might be the sign of a // \[c, d\] might be a matrix // A\[b\]

  > might be a ring

- \|\...\| - absolute value, norm, determinant?

- \| \-- evaluation of definite integral (alternatively \[ ... \])

- superscript -1 - so many meanings

- context, e.g.,"d" in (a + bx\^3 + cx\^2 + dx = 0) vs "d" in (\\int

  > f(x) dx)

- delta vs triangle

more:
[[https://whystartat.xyz/wiki/Category:Ambiguities]{.underline}](https://whystartat.xyz/wiki/Category:Ambiguities)

Another favorite of mine: the [[Legendre
symbol]{.underline}](https://en.wikipedia.org/wiki/Legendre_symbol)
(first use before 1800) and yet apparently there's no decent way to read
it out loud:
[[https://mathoverflow.net/questions/15447/is-there-a-standard-way-to-read-the-legendre-symbol]{.underline}](https://mathoverflow.net/questions/15447/is-there-a-standard-way-to-read-the-legendre-symbol)

Also the other way around: We can have the same voicing for different
notations.

\|A\| and det(A) may read "determinant of A"

exp(x) and e\^x may read as "exponential function at x"

How will a non-visual user know which notation was used?

A separate problem is the abuse of the alphabet in varying typefaces to
convey context-dependent meaning. It's so easy to - visually - discern
italic from normal, serif from sans-serif, gothic from Sutterlin - well,
in truth it is not that easy but here we are. In addition, foreign
alphabets are abused so much that mathematics has become reliant on
particular typeface designs (cf. [[this
source]{.underline}](http://web.archive.org/web/20120229131933/http://omega.enstb.org/yannis/pdf/boston99.pdf)).

The noise when differentiating these ("Upper German X") for non-visual
users is immense - or more often: the silence is immense.

### Semantics or layout?

There's a moving goalpost / gaslighting issue: should AT provide
information about layout or semantics when it comes to print equation
layout?

A common stance in the general accessibility community is: I don't need
special treatment, I need equal treatment.

What does that mean for print equation layout? Equal treatment would
provide precise information about layout.

But that's not what users actually expect (or are accustomed to).
Instead, "semantics" is desired:

f: X -\> Y

"lower italic f colon upper italic X right arrow upper italic Y"

vs "f maps from upper X to upper Y".

However, print equation layout does not offer such semantic information.
Therefore, solutions turn to guesswork aka heuristics.

These heuristics work reasonably ok for school-level print equation
layout and some, more "stable" parts of college education (e.g.,
engineering). But they easily and frequently fail even in these areas.

Beyond the evident lack of semantics, the second problem is the lack of
contextual information. While MathJax's Simons grant allowed some
research into the problem, no existing solution takes other equations
into account - let alone the whole document context (e.g., bra ket
notation in physics, P(X) in statistics, various arrows in category
theory, tropical geometry, legendre symbol).

Think about f(g+h)(x).

Heuristics are also often not work within an equation, e.g.,

\$\|A\| = {\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}}=ad-bc.\$ Speech
Rule Engine's heuristics will identify the latter part as a matrix
determinant but still treat \|A\| as absolute value.

Frequently, magical semantics from layout is what people (especially in
the MathML community) promise.

Yet when faced with the obvious and plentiful problems, the goal post is
casually moved to "you need to give layout information" and when you
provide layout information back to "you should provide semantics".

Unfortunately, many people believe this promise.

## Problems from layout traditions

Print equation layout has some traditions that add another layer of
problems.

For example, there is the concept of moveable limits. For example the
expression

\\sum\_{i=0}\^\\infty

would at plain view indicate we get Σ with a subscript of "i=0" and a
superscript of ∞.

However, this depends on the math mode. In inline math mode, TeX will
lay this out as expected. In display math mode, the sub- and superscript
will become under- and overscripts.

This is of course quite convenient from an authoring perspective \-- you
can switch modes as you like, thus macros / copy&paste are much easier.

From a layout perspective, this wouldn't have to be built in, but
weirdly, MathML builds it in. In fact, it has a separate operator
dictionary which describes various layout rules instead of focusing on
the barebones of layout.

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
leading to poor layout (e.g., tables with some math and a text label in
lieu of proper labeled equations).

## Non-visual print equation layout

In some countries, print equation layout has some form of accessibility
tradition.

The US traditions are dominating in this context since MathML was
developed largely by US companies.

For print traditions in the US, the most known methods for non-visual
presentation were developed by [[Abraham
Nemeth]{.underline}](https://en.wikipedia.org/wiki/Abraham_Nemeth) \--
the MathSpeak ruleset for voicing and the Nemeth Braille notation for
tactile. Both sets were designed for human creation. MathSpeak, to
enable a non-expert reader to read mathematical publications to a blind
users; Nemeth Braille for a braille transcriber.

According to Volker Sorge (who implemented support for both as part of
Speech Rule Engine and MathJax), neither MathSpeak nor Nemeth Braille
can be produced from input without extensive heuristics. They are in
fact not properly specified and can be contradictory according to Volker
Sorge.

I would argue this is by design - they could assume a human
orator/transcriber who can and should adjust rules on the fly to enhance
simplistic heuristics. Even without understanding mathematics, it's
fairly easy to make a change on the fly, e.g., after initial feedback
from the blind user that, here, the superscripted 2 is not "squared"
but, say, a row or column vector.

It's worth noting that Nemeth Braille has not been revised since the
1970s (though a revision has finally started a few years back). This is
a specialized Braille notation that describes layout (sic!) and only
partially linearizes the output (fractions and scripts are linearized
while tabular structure are not), leading to many problems as
contemporary refreshable braille displays for computers are single-line
devices.

## MathML

MathML does not provide sufficient quality, neither in theory nor in
practice.

### visually

**Practically**: visual rendering in browsers is poor, buggy, hard to
workaround, and not maintained by browser companies.

Bugs range from mildly annoying to mind bogglingly weird

**Theoretically**: visual rendering is not actually specified (though
there is a new effort to change that, making all MathML renderers
invalid).

This is after 25 years of MathML, 15 years of MathML in HTML5, \~10
years of MathML "support" in Firefox, \~8 years of MathML "support" in
Safari.

Optimistically, it will take another decade to get reliable visual
rendering quality.

### non-visually

MathML captures abstracted, shared concepts of print equation layout
traditions. It suffers the consequences in terms of non-visual
rendition.

**Practically**, AT support is poor. MathML is not supported by
"simpler" systems (with many users) such as "read aloud" features in
browsers, voice assistants etc.

Only three screenreaders formally claim support and their support is
limited, buggy, and of poor quality \-- and the pieces are minimally
maintained by AT companies \[cf. Richard's talk from ATHENs how some AT
doesn't say "end fraction/script" causing confusion, anecdata: Apple
support: there's just enough users to warrant fixes\].

In addition, their UX is often questionable, e.g., JAWS will not read
larger MathML fragments but just announce the presence of a math
fragment, leaving it to users to open the separate viewer application to
actually read and explore the expression (fun fact: this is called "Math
Viewer" and actually uses MathJax for visual rendering, leading to
visual differences). Similarly, VoiceOver on iOS will open pop-ups for
exploration of MathML fragments. NVDA needs third party plugins to do
anything and has no visual component.

**Theoretically**, MathML cannot be accessible in the web's sense.
Heuristics must be applied and now you have 2 problems \-- providing
MathML that works visually and works around particular heuristics.

When I ran the W3C's Math on the web Community group, there was
consensus that MathML requires extensive heuristics to provide
non-visual (voice, tactile) renditions. The MathML people on that group
later publicly stated the exact opposite to what they said in those
discussions, continuing the claim that MathML is the only viable
accessible solution - after stating previously that MathML cannot solve
this problem.

It's important to note that heuristics are something that web
accessibility eschews; heuristics are only used only to recover from
author errors (e.g., parsing invalid markup into a valid document).

Accessibility on the web revolves around the so-called "accessible name"
which is calculated for each element in the document. This calculation
works recursively form the leafs up the document tree.

Print equation layout does not allow for recursive naming \-- just think
"n choose k", or \^{-1}.

MathML is even worse for this, as it is a stratified format for
rendering purposes (in TeX you can at least have author macros to try to
make sense).

Authors, especially with AMS, invent layout that requires new heuristics
\-- both large and small (e.g., \[recent sideset issue\], custom glyphs,
tikzs-inside-math). Historically, this coincides with naming (cf.
[[https://jeff560.tripod.com/calculus.html]{.underline}](https://jeff560.tripod.com/calculus.html)
for e.g., nabla) but not always (cf. lagrange earlier). \[Authors also
regularly just hack layout badly (e.g., \\mathop{l\\overline{og}}) but
that's formally a different problem.\]

### Other aspects

#### localization

Another argument sometimes mentioned by MathML enthusiasts is that
MathML can be localized automatically. While that's true to some degree
(and we use Speech Rule Engine for articles in French to create
MathSpeak output in French), this is a questionable claim without any
research substantiating the positive effect.

In practice, the available localizations in AT is quite limited and
largely undocumented. This is even worse for Braille.

There are obvious blocks for localizations. Many equations contain some
"plain text" elements which would not be localized. Similarly, common
terminology has different localizations/abbreviations (e.g.,

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
to Nemeth/UEB and some German/Dutch/Flamish braille notations and did so
quite poorly.

More importantly, no "lighter" assistive technology supports MathML,
i.e., "read aloud" features in smaller helpers, in epub reading
applications or voice assistants (Siri et al when reading out web
content). This lack of support impacts the largest portion of users,
since these tools are much more widely used than the more advanced,
full-fledged screenreaders like VoiceOver and JAWS.

## What do we do to address this inherent lack of accessibility?

Print equation layout is inherently not accessible in the sense of the
web. MathML is a red herring as it at most aims to reproduce
accessibility traditions from the print era, but inherently cannot
reproduce it well since those traditions relied on human operators
(orators or transcribers).

I invariably approach such problems by looking for guidance regarding
the web in general.

## The web's core principles

"users before author before implementors before theory"

From
[[https://www.w3.org/TR/design-principles/\#priority-of-constituencies]{.underline}](https://www.w3.org/TR/design-principles/#priority-of-constituencies):

"User needs come before the needs of web page authors, which come before
than the needs of user agent implementors, which come before than the
needs of specification writers, which come before theoretical purity."

### What do AMS users want from print equation layout? And what do they actually need?

We don't know. Too few AT users among the community \-- support is so
poor, they won't make it to research-level.

Anecdotally, the most common feedback I've seen in educational studies
comes down to "I want it to be read like my teacher/prof reads it in
class".

But for research? Who knows.

They probably want TeX annotations because research-level users know TeX
syntax. But is that what they need, e.g., when exploring a complex
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

### What we want for our users

We want to take responsibility for our content.

We want high-quality consistent, robust rendering for all users.

We want visual layout that is robust against font issues (especially on
epub).

We want speech and braille alternatives.

We want consistent exploration.

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

Let's go back to the example of matrix determinants. Both det(A) vs
\|A\| would be voiced as "determinant of A" yet their authoring is quite
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
addition,

### Search

Despite decades of research, search around MathML has never provided
tangible benefits despite clear needs to discover existing results in a
vastly expanded field, both to avoid and identify duplicate research.

Springer\'s discontinued LaTeX search or zbmath's MathML based system
are good examples of this failure. A large research corpus revolves
around analyzing MathML fragments, yet no efficient system is available.

\[Disclosure: I have some ideas on how to do this somewhat easily.\]
