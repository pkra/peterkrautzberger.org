---
layout: post
title: " A media query for MathML is pointless"
date: 2016-06-16
permalink: 0190/
published: true
---

So I attended [TPAC](https://www.w3.org/2016/09/TPAC/) for the first time. TPAC has that oddly familiar conference feeling -- a bunch of specialists crowded in a relatively small space, most of them pretty weird people (and slightly more diverse than a math conference, not that that's a compliment). But it also had a very unfamiliar feeling: web standards invariably mean politics more directly.

Anyway.

## O to be a query...

There was a joint meeting of CSSWG and DPUB IG on Monday and I was running late (discussing math-on-web things with Daniel Marques actually), so I missed the first 15 minutes. My mind was blown when, within 2 minutes of me sitting down, a motion was accepted to task Florian with spec'ing (specing? speccing?) out a media query for MathML support (as well as an API to flip it). I didn't feel I was in a position to speak up, so I just sat there wondering what just happened.

The motivation seems rather natural, I suppose. As long as there's no universal browser support for MathML, people are still stuck with providing fallbacks. In situation where they cannot load a JS library themselves (e.g., in ebooks), they have to use a fallback even if they could provide MathML.

If there was a media query, people could add both fallbacks and MathML in a standardized fashion, hiding one or the other depending on the result of that media query. In addition, an API would enable JS libraries to leverage a universal way to progressively enhance content; it wasn't quite clear in the end, but some people seemed to hope that API could additionally be triggered by assistive technology.

This discussion started (I think) on the epub3 end, where the IDPF is currently discussing epub 3.1 and best practices; as usual, MathML features in a painfully prominent role. In epub land, the dream seems to be: you create an epub3 file once and some day down the line, when a user's reading system finally picks up MathML support, the old content will magically improve -- progressive enhancements so to speak.

Naturally, `@supports` is already very helpful in all sorts of ways today which probably made it a no-brainer (and thus the quick decision). Unfortunately, I think a "media query for MathML" does not solve a single problem.

I was so late to the meeting so when the question for "any objections" came out, I did not feel I was in a position to do so. Still, in a breakout meeting later that day (about epub specifically), I voiced my criticisms to both epub, accessibility, and CSS people.

So this is, if you will, the written version of my opinion. (In case you missed that you are on my personal website, please note the use of "my" here.)

## ... of silkworm size

A single media query for MathML won't help me as content provider (author, publisher, technology specialist); I also find it generally unhelpful for the web as a whole.

The problem with a single query is simple: when would a browser respond positively? When should a browser legitimately claim to have MathML support? I honestly don't know.

MathML is a huge (and pretty vague) spec. There's not a single browser or library that could claim complete support. MathJax is the [top scorer with 85%](https://www.w3.org/Math/testsuite/results/tests.html) on the MathML test suite (since MathPlayer was kicked out by IE) but that's not saying much since the test suite is highly biased -- whoever feels like it can submit the data, and in MathJax's case that was me (who is obviously biased).

I can't see how a single media query for all of MathML could provide people with any kind of reliable information on the front-end. Most likely, Gecko and WebKit implementations will immediately turn it on which does not help one bit -- people will still have to test their content on those engines in detail.

Personally, I have already done that too many times (and keep a close eye on them) and I always come to the same conclusion: I cannot recommend using them to anyone since they are too unreliable. So I'm still stuck the same way I was before. Similarly, any publicly available crawler data I've seen indicates that nobody is using native MathML on Gecko and WebKit in the wild, so my position does not seem to be unique.

## ... or immense

Of course, the CSSWG might spec out a whole set of individual media queries for every single MathML features. As unlikely as that seems, we'd just end up deeper in the rabbit hole: MathML is still extremely vague so few features are specified in enough detail (compared to CSS or SVG anyway). To take a simple example, while Gecko and WebKit might claim support for `mfrac` (fractions), it's not helping me if those fractions are laid out badly as soon as I put something mildly complex in them. So again, I'll end up not using it.

In terms of accessibility, it seemed an API that assitive technology could trigger would not be as easy to implement in browsers (yet "easy" seemed a pre-requisite given the comments from browser reps in the CSSWG). Since AT tends not to inject scripts (JAWS craziness notwithstanding), they'd need a more sophisticated feature (which is, I think, also being discussed by CSSWG, but considered much harder, i.e., unlikely).

Besides, this assumes that MathML significantly benefits accessibility. After MathJax getting deeply involved in building a suitable tool, I find this argument questionable. Talking to a11y folks, it usually comes down to "but MathPlayer!" and while MathPlayer was pretty good (albeit dead in the water now) it didn't actually use MathML but a proprietary internal format representing the result of semantic heuristics; this makes it kind of hard to use it as an example for how great MathML is for accessibility.

I think it's unrealistic to expect every single assistive technology to invest as much in a niche like math. I'd estimate that, at any one point in time over the past 18 years, the number of actively maintained accessibility tools with MathML support was 1 (no, neither JAWS nor VoiceOver count as "maintained" when it comes to MathML).

Further, not a single tool has ever used MathML as an internal format because it is *simply insufficient* -- it is a XML document language for layout and is grossly unsemantic (and don't say "but ContentMathML" now).

If people feel like exposing MathML to AT, then they can use one of the many standard tricks to ARIA-hide the fallback content and visually hide the MathML. Again, in my opinion, that's a disservice for your readers, but nobody stops you.

## the 800 pound query

For me, the weirdest thing about this whole decision was its speed: that the CSSWG signed off on this idea in under 20 minutes just makes me a teeny tiny bit skeptical. It feels a lot like one big "whatevs" -- browsers don't really care but, hey, a media query is little work and if it keeps these math people off our backs, all the more reason.

The real problem remains with or without a media query: where is MathML going? As Romain commented on twitter:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/pkrautz">@pkrautz</a> it&#39;s real progress going on<br>1999 → hope MathML gets implemented<br>2016 → hope a declaration of non-implementation gets implemented</p>&mdash; Romain Deltour (@rdeltour) <a href="https://twitter.com/rdeltour/status/777895491719852033">September 19, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Browser vendors have never worked on MathML support, MathML is no longer maintained as a spec, the MathWG is no more ([did you notice?](/0186/)), and MathML is a bad web standard for both layout (another post) and [accessibility](/0185/).

### fool me once, shame on you.

I think it's time to realize that after 18 years of not succeeding on the web, the problem might just lie with MathML itself. We don't need it on the web (CSS and SVG are better for layout and ARIA better for accessibility) and we should stop giving browser vendors an excuse not to do anything that actually helps those developers who realize math on the web in its myriad forms today. (And the XML document world, where MathML succeeded, would be better off as well.)

Don't get me wrong, there are many problems left for math on the web but MathML is not a silver bullet, in fact, it solves none of them. Even if it was implemented widely, we'd still need CSS and ARIA features to match. Instead of waiting for others (i.e., browsers) to solve their problems by magic, the few people with an interest (and the resources to match) will have to solve this niche problems on their own and in a way that moves the web forward as a whole.

Either way, a media query for MathML is pointless.
