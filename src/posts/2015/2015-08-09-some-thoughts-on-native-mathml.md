---
layout: post
title:  Some thoughts on Native MathML
date: 2015-08-09
permalink: 0182/
---

> Do not worry about your difficulties with MathML; I can assure you that mine are still greater.
>
> — [not Albert Einstein](http://en.wikiquote.org/wiki/Albert_Einstein#1940s).

I have written about why [I care about MathML](/0175/) and why I care about [Native MathML](/0176/). Time to talk about some of the problems I see.

This piece reflects my personal opinion and is not indicative of the position of any project I might work on. It is meant as a conversation starter.

I care very much about MathML and in particular the mission of the W3C Math Working Group [to facilitate and promote the use of the Web for mathematical and scientific communication](http://www.w3.org/Math/Documents/Charter2006.html). Yet, while MathML has succeeded everywhere else, it struggles on the web. That worries me.

## The rise and fall of MathML

MathML did not start out as an XML language but as the `<math>` tag in HTML3. It was the browser vendors (Microsoft, Netscape) who rejected it; as a result, `<math>` went into XML "exile" (where it was immensely successful) and returned to HTML in HTML5.

Still, all OWP technologies stand and fall with the support and adoption from browser vendors. It does not matter how good (or bad) a web standard is or how well it works elsewhere. Browser vendor adoption is the only relevant measure.

## No news is not good news

It's been two years since I started to write ["MathML forges on"](http://radar.oreilly.com/2013/11/mathml-forges-on.html).

Back then, native browser support seemed to be on the tipping point. Dave Barton had done amazing work on improving Alex Milowski's WebKit code, the deactivation in Chrome seemed to be a hiccup due to one single bug (that already had a fix). It seemed, with a little luck, Gecko/Firefox and WebKit/Safari would have made it to the 80/20 point within a year, hopefully in turn get the Blink/Chrome team to re-enable MathML; then we'd watch as Trident/IE (now Edge) would hurry to integrate the math support from LineServices.

Two years later, Gecko has moved sideways, WebKit has barely moved, Trident/Edge remains a mystery, and Blink is "the villain" (for dropping the WebKit MathML code). MathML is still the only viable markup language for mathematics (recently reaffirmed by its ISO standardization), and yet, native browser support seems just as far away as ever.

Why?

## Who implements native MathML support?

Gecko's and WebKit's (still quite partial) support has been almost exclusively implemented by volunteer contributors (and mostly unpaid volunteers at that).

Effectively, no browser vendor has ever worked on MathML support in their browser. (Yes, that's a bit unfair to Mozilla devs who are great -- sorry. There are also good people at Apple, Google, Microsoft; still, the companies all fail to invest in MathML browser support.)

The volunteers, on the other hand, come and go. Nobody is able to find significant funding and development is, once again, effectively dead.

At this point, I don't see how we can ever get sufficient native MathML support in browsers; the volunteer method does not work and the vendors remain uninterested.

## Where could we go instead?

The fact that browser vendors do not implement MathML says virtually nothing about MathML. Studying past discussions, it's clear that there isn't a lot of knowledge about the spec or the requirements of mathematical layout. (Again, this is a little unfair to some Mozilla devs.)

So I see no reason to give up on MathML, let alone math and science notation on the web. Because one thing has not changed: it's still the best markup for math -- and education, industry, and research need a good markup that works on the web.

While I don't think native browser implementations is a realistic goal at this point, I think MathML can still be a trail blazer, especially for scientific notation. It is, after all, a long standing W3C standard and we know it works very well in a browser context (even if you need polyfills).

I think there are two problems we can focus on that are just as useful to move scientific markup (and the web in general) forward:

1. how to do mathematical layout using the web standards that are widely implemented (and how to improve both)
2. how to expose the underlying markup to all tools that understand it

As opposed to native browser support for MathML, both of these are extremely feasible.

For the first, it recently became clear to that modern browsers (IE9+) are actually good enough for layout; that is, you can write converters from MathML to HTML or SVG markup so that the result is stable, i.e., provides the same layout on all browsers (comparable to TeX quality but naturally integrated into the page context). To be clear, this is not (just) about client-side rendering like MathJax (in fact, MathJax does not provide this yet).

The biggest problem is that the necessary markup itself is messy, making it hard to generate (just look at the spans-spans-spans that MathJax currently generates).

But is this unusual? I think this situation is not unlike how grids using Bootstrap or Foundation are overly complicated compared to grids using css-grid layout. Or how doing flexbox-like layout is horribly complicated without flexbox.

I think we should focus on widely implemented standards and work on improving them so that the markup you need for good math layout becomes cleaner and thus easier to generate (both in terms of structure/semantics and performance).

For the second point, looking at the developments of the semantic web, it's obviously not being realized in terms of mandated HTML tags or CSS properties. It is being realized via ARIA roles, RDFa, microdata etc. I'm not saying these approaches work for the semantic structure of MathML (let alone STEM in general) but something along those lines seems achievable.

Frankly, I'm a bit tired of waiting for <del>Godot</del> native browser support for MathML. MathML is frozen because we're all waiting for browsers to catch up. It is simply not happening. Let's look for ways to move forward.

---

_Comments_

* **gimsieke**, 2015-08-10

  > Nobody is able to find significant funding

  MathJax has managed to attract a significant network of donors. Why don’t they either encourage their “investors” to also invest in native math rendering, or why don’t they use the proceeds to fund native development directly? This shouldn’t be beyond their bylaws.

  * **Peter**, 2015-08-10

    > Why don’t they either encourage their “investors” to also invest in native math rendering,

    The "nobody" includes MathJax. Of course, the fact that we failed does not say much. The fact that everybody failed so far, might.

    > why don’t they use the proceeds to fund native development directly

    Because then we wouldn't be able to develop MathJax itself.

    > This shouldn’t be beyond their bylaws.

    Sure. Neither would be curing cancer.

* **Bruce Miller**, 2015-08-10

  Interesting blog post!  I've two comments to make.

  Easy one first: I feel like you are unnecessarily harsh on the quality of Gecko's MathML support.  While I understand your pride in MathJax, I'd still put Gecko at 90/10 or better rather than 80/20 or below.  It certainly can use improvement and is more variable, depending on system fonts, etc, and I'd definitely appreciate more official support from Mozilla. But it gets all the essentials and with the right fonts looks virtually as good as MathJax --- and it's blindingly fast in comparison.

  This is more than a fanboy stance: I think there's a psychological factor to this as well, when the message seems to be that no matter what is done, it's never good enough.

  The second issue is a bit more subtle. On the one hand, you  advocate strongly for MathML; on the other, you propose to focus on "widely implemented standards" for doing mathematical layout. There seems a big ambiguity there: Are you suggesting that authors should create & serve MathML in their web pages and that the way forward is in improving and using the better supported standards as a way of rendering the MathML?  Or are you suggesting using whatever technology is available to render something that looks like math, whether or not the representation is MathML? I suspect the former, hope for it, but whichever stance you take, I'd prefer to see it more explicit.  The ambiguity just feeds the suspicions about MathJax in some and provides an excuse to abandon MathML in others.

  Thanks for the thought provoking article;
  bruce

  * **Peter**, 2015-08-11

    > While I understand your pride in MathJax, [...]

    This post is really not about MathJax. In many ways, the opposite. But the only ones who could claim pride in MathJax would be Davide and Robert; certainly not me.

    > I'd still put Gecko at 90/10 or better rather than 80/20 or below

    I've often described Gecko as the baseline for MathML feature support. If you can't make your MathML work in Gecko, you probably shouldn't be using it.  

    But I also understand why people disagree with that. In my experience, you need to be quite knowledgeable about Gecko's implementation (at least from the outside) to avoid running into layout quirks or missing features; watching the MediaWiki math extension feedback is a good example for this.

    Of course, this is nothing special, the same is true about MathJax. But the problem is that no large scale MathML adopter I've ever talked to is willing or able to spend the resource on optimizing their content for Firefox.

    > [...] depending on system fonts [...]

    That's not a minor issue though. The switch to MATH tables has brought quite a few problems in terms of layout and more importantly developer burden.

    While MATH tables seem to be the way to go, they can only be leveraged by native implementations (and there aren't exactly many fonts with MATH tables, nor would I expect that expensive niche to grow much soon).

    This adds to the burden of front end developers who would have to provide two sets of webfonts -- one for Gecko and one for everyone else (i.e., polyfills). It's another case of a good standard being useless because it's not widely implemented. But it's made worse because polyfills cannot leverage it so there's no positive feedback loop.

    > it's blindingly fast in comparison.

    Sure. That's why I'm not talking about client-side rendering here but for the generation of HTML with CSS. This includes tools like LaTeXML or pandoc or any XML workflow tool.

    (But fun fact: we've seen edge cases of client-side MathJax outperforming Firefox by a clear margin. I got lucky and was able to mention it to Rob O'Callahan personally and [Gecko got improvements](https://bugzilla.mozilla.org/show_bug.cgi?id=1139709).)

    > I think there's a psychological factor to this as well, when the message seems to be that no matter what is done, it's never good enough.

    I don't think the problem is "never good enough". MathJax is certainly not "good enough" for many people (in particular in terms of performance, but also layout, feature support etc).

    I think the problem is rather "no chance of getting better". There is no interest from the browser companies; that's what would have to change.

    I think even a limited implementation would be interesting if developers had the promise that bugs will get fixed and implementations moved forward. This is not some kind of chicken-and-egg problem, it's simply a failure of browser vendors (and just to repeat myself: not of individual browser developers!).

    > Are you suggesting that authors should create & serve MathML in their web pages and that the way forward is in improving and using the better supported standards as a way of rendering the MathML?
    > Or are you suggesting using whatever technology is available to render something that looks like math, whether or not the representation is MathML?

    Neither and both. Authors should use whatever works for them. If that's asciimath during authoring or even in the final page, that's fine; I don't lose sleep over it. (Just like nobody loses sleep over somebody converting markdown in the page.) I do think that authoring tools and converters should *not* stop at MathML but think further because waiting for MathML support to come around is not helping.

    I would like to see those tools move MathML forward by making it the best markup for rendering math on the OWP. But I'm not thinking of something that "just" looks like math but about HTML or SVG markup that is enriched to be just as powerful as its underlying MathML. That's currently not possible for lack of, e.g., aria roles. But I think wecould quickly get to a point where a fully equivalent "interpretation" (or "transpilation" to use a fashionable term) in HTML or SVG does not require client-side rendering.

    > The ambiguity just feeds the suspicions about MathJax in some and provides an excuse to abandon MathML in others.

    This reads like FUD to me.

    My piece opens with "This piece reflects my personal opinion and is not indicative of the position of any project I might work on." This obviously includes MathJax.

    MathJax is a MathML rendering engine. I'm proposing to something based on MathML and my hope is to move MathML forward despite the lack of interest from browser vendors.

    But if somebody needs an excuse to "abandon" MathML, I'd prefer to convince them by showing them how great MathML is rather than saying "oh, just wait a few more years and browser vendors will finally get it and implement it". MathML deserves better!

  * **Bruce**, 2015-08-12

    > This post is really not about MathJax.

    Understood. But really my point was that both Gecko & MathJax, while both imperfect, do pretty decent math typography, at least by the measure of web typography generally.

    > Sure. That's why I'm not talking about client-side rendering here but for the generation of HTML with CSS. This includes tools like LaTeXML or pandoc or any XML workflow tool.

    ... and ...

    > I would like to see those tools move MathML forward by making it the best markup for rendering math on the OWP. But I'm not thinking of something that "just" looks like math but about HTML or SVG markup that is enriched to be just as powerful as its underlying MathML. That's currently not possible for lack of, e.g., aria roles. But I think we could quickly get to a point where a fully equivalent "interpretation" (or "transpilation" to use a fashionable term) in HTML or SVG does not require client-side rendering.

    ...

    > > The ambiguity just feeds the suspicions about MathJax in some and provides an excuse to abandon MathML in others.

    > This reads like FUD to me.

    FUD? Perhaps, but the fact that I'm paranoid, doesn't mean that I'm not being followed. :>

    MathML offers a representation of math in such a form as to enable: high-quality rendering; accessibility; reuse (especially content). One would have hoped for gradual adoption & implementation of MathML, starting with the aspects that are both "easiest" and most in demand: rendering first; increasing support for accessibility; and eventually support for reuse. That seems to me a critical evolutionary path if true accessibility and reuse of mathematics will ever be achieved.

    Alas, math is a niche; generating good MathML and rendering it is non-trivial, content moreso. And, as you point out, browser support seems stalled, at best.

    While your proposed solution of improving HTML+CSS, RDF and aria seems practical and innocent, without a strong and simultaneous call for continued improvement of native MathML support in browsers and its generation by authors as well as the actual serving of MathML, there's the danger of undermining that evolutionary path of MathML support. I don't believe that's your intention, but the implication that authors need only serve HTML+CSS for rendering, imagining they'll someday add aria annotation, eliminates the most pressing reasons for wanting MathML in the first place. Reuse of mathematics, or even truly useful accessibility remain mere pipe-dreams.

    ...

    > But if somebody needs an excuse to "abandon" MathML, I'd prefer to convince them by showing them how great MathML is rather than saying "oh, just wait a few more years and browser vendors will finally get it and implement it". MathML deserves better!

    Thanks; That's what I was hoping to hear. I just want to make sure that message doesn't get lost in the shuffle. If we give the impression that rendering and a modicum of accessibility is "good enough", we may as well just leverage the browser's improvements in image rescaling, attach little tape-recordings to the images, and call it done.

  * **Peter**, 2015-08-12

    Thanks, Bruce.

    > While your proposed solution of improving HTML+CSS, RDF and aria seems practical and innocent, without a strong and simultaneous call for continued improvement of native MathML support in browsers and its generation by authors as well as the actual serving of MathML, there's the danger of undermining that evolutionary path of MathML support.

    I disagree. As I wrote, I don't see any practical interest from vendors towards implementing MathML. So calling for improvements is pointless -- they are not doing anything.

    I'd be thrilled to be wrong and see browser vendors dedicate the necessary resources to MathML development (and maybe join the MathWG to help move the spec forward).

    But if I'm not wrong, then "Waiting for Improvements" will be worthy of Beckett.

    As much as I care about MathML, I care even more about mathematics on the web. Since native MathML support is not happening, I think MathML needs to evolve into something that can be native. My suggestion voiced here is that it should evolve towards HTML and CSS.

    > but the implication that authors need only serve HTML+CSS for rendering, imagining they'll someday add aria annotation, eliminates the most pressing reasons for wanting MathML in the first place.

    I think "eliminates" is misleading. First, I disagree because you cannot "eliminate" what's not there. MathML is not usable on the web (without polyfills) because browser vendors are not supporting it.

    Secondly, I disagree because I believe that only MathML will allow us to move towards "HTML as powerful as MathML".

    That's the whole point of this piece, really: imho browser support will not happen, so let's think about ways how the spec (and maybe even the MathWG) can evolve to fulfill its mission.  

    And I obviously and strongly believe that MathML is the best basis for doing so.

    But unless somebody can get browser vendors to dedicate the necessary resources, then I find it unhelpful to sit around and pretend like MathML is working out on the web. Instead, we should think hard about how it can be made to help math and science on the web (without native MathML implementations).

    > Reuse of mathematics, or even truly useful accessibility remain mere pipe-dreams.

    Again, I disagree. On the one hand, it is really pretty easy to achieve exposure of the underlying MathML -- just look at what ChromeVox did already years ago with MathJax, leveraging the internal MathML to enable fully accessible exploration of the visual output.

    On the other hand, I think "reuse of mathematics" is too broad. I think quite a few use cases that people hope for are unrealistic (e.g., copy&paste has so many challenges on the web, with or without MathML). And the realistic ones (e.g., accessibility, search) can be achieved in HTMLified-MathML (pretty easily, I think).

    As much as I care about MathML, I care even more about mathematics on the web. Since native MathML support is not happening, I think MathML needs to evolve into something that can be native. My suggestion voiced here is that it should evolve towards HTML and CSS.

  * **Bruce**, 2015-08-12

    > As much as I care about MathML, I care even more about mathematics on the web. Since native MathML support is not happening, I think MathML needs to evolve into something that can be native. My suggestion voiced here is that it should evolve towards HTML and CSS.

    Just to be sure I understand, you're suggesting that rather than

    `<mfrac><mi>a</mi><mi>b</mi></mfrac>`

    the "New MathML" would be

    `<span class="mfrac"><span class="mi">a</span><span class="mi">b</span></span>`

    with perhaps a few `style="..."`` thrown in?
    thanks;
    bruce

  * **Peter**, 2015-08-02

    No. But probably for very different reasons than you might think.

    But I'm not very interested in discussing technical details here. This is a conversation starter, not a technical document. If MathWG wants to consider this direction, then I think we need to bring together practitioners first. And that's practitioners who deal with rendering MathML in a web context; that's not exactly a strong suit of the WG today.

    I also need to slightly correct (or extend) my previous comment to include what I mentioned in the post: I might prefer HTML but I also think SVG should be an equal target. For example, your LaTeXML can already generate SVGs for MathML; why make it less useful than it could be if you already have good underlying data in the form of MathML?
