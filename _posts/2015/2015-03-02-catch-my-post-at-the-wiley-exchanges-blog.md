---
layout: post
title: catch my post at the Wiley Exchanges blog
date: 2015-03-02
categories:
- crossposting
- mathml
tags: []
published: true
permalink: 0178/
redirect_from: "krautzberger/2015/03/02/catch-my-post-at-the-wiley-exchanges-blog/"
---

It's been quiet around here -- too much work behind the scenes -- BUT you can still read some of my usual incessant babbling over at the [Wiley Exchanges Blog](http://exchanges.wiley.com/blog/) where I write about MathML and its role in [Making math and science first class citizen's on the web](http://exchanges.wiley.com/blog/2015/03/02/making-math-and-science-first-class-citizens-on-the-web/).

* * *

> For posterity, here's the version I submitted, including typos

# Making math&science first-class citizens on the web

![img](assets/keep-calm-and-love-math-and-science-2.png)

> Without mathematics, there's nothing you can do. Everything around you is mathematics.  
>  [Shakuntala Devi](https://en.wikipedia.org/wiki/Shakuntala_Devi)

It has always surprised me a little that the web -- created at CERN by a trained physicist turned computer scientist -- was born without much consideration for math and science. Of course, it isn't all that surprising since the original HTML lacked more basic things (such as support for tables or images). Either way, people did see the need early on and in 1995 [the draft of HTML 3 proposed a `<math>` tag](http://www.w3.org/MarkUp/html3/maths.html), adding basic math support in HTML. Unfortunately, HTML 3 was rejected by browser vendors, and its more fortunate successor, HTML 3.2, [dropped the `<math>` tag](http://en.wikipedia.org/wiki/HTML#HTML_versions_timeline) (among other things). As was the fashion of the time, the `<math>` tag was turned into a separate XML specification and within a year [MathML was born](http://www.w3.org/TR/1998/REC-MathML-19980407/). Problem solved? Not quite.

MathML did turn out to be hugely successful in the XML world. Authoring and conversion tools quickly made MathML easy to create and edit while publishers adopted MathML in their XML workflows. The main reason was that MathML provided a robust, exchangeable, and reusable format for rendering and archiving equational content. However, XML did not succeed as much on the open web and the XML legacy made it difficult to use MathML in HTML itself. This meant that mathematics (and in extension scientific notation) remained a second-class citizen. Surprisingly, MathML did not simply fade away like other web standards but made a comeback in HTML 5, where we can now use like any other tag. Problem solved? Not quite.

Despite its success, its rich ecosystem, and its importance for research and education, MathML continues to struggle on the most critical front: browser adoption. So far, not a single browser vendor has actively developed their MathML implementation. While Internet Explorer and Chrome lack MathML support entirely, Firefox and Safari at least accepted code contributed by volunteers (and in Mozilla's case actively supported the code base). To compensate, the [MathJax](http://www.mathjax.org) project (disclaimer: which I work for) developed an open-source JavaScript solution that authors and publishers can easily drop into their content. MathJax renders MathML on the fly, providing high-quality output that works everywhere out of the box, using only web standards such as HTML and CSS. A joint venture of the [American Mathematical Society](http://www.ams.org) and the [Society for Industrial and Applied Mathematics](http://www.siam.org) with the support from [numerous sponsors, including Wiley](http://www.mathjax.org/#sponsors), MathJax has become the gold standard for math on the web with our free CDN service alone registering 35 million daily visitors. Problem solved? Not quite.

While we are proud of our accomplishments at MathJax, we know that we can only provide half the solution: native browser support must be the goal. Only native browser support can make MathML universal, helping everyone and allowing people to push the envelope for math and science on the web further. I believe a crucial role lies with publishers. Taking a cue [from Forbes](http://www.forbes.com/sites/techonomy/2011/11/30/now-every-company-is-a-software-company/), now every publishing company is a web technology company. Not being involved in the development and implementation of web standards is a bit like printing books but not caring about literacy rates -- if you build it, they still can't come! When it comes to the development of the web, scientific publishers can become the bridge between authors and standards bodies and they can be instrumental in supporting the development of tools and processes that push everyone forward. Problem solved? Not quite but if you build _this_...

The re-integration of MathML into HTML5 was a huge step towards math and science becoming first class citizens on the web. MathML is not only a fully accessible exchange format for mathematics but it is also part of other scientific markup such as the [Chemistry Markup Language](https://en.wikipedia.org/wiki/Chemical_Markup_Language) and the [Cell Markup Language](https://en.wikipedia.org/wiki/CellML). The future of MathML in browsers will determine the future of scientific markup on the open web. In the end, a chemical reaction or a data plot has no more reason to be a binary image than an equation -- we need markup that is alive in the page and can adapt to the needs of the users. Only this will allow us to develop new forms of expressing scientific thought, forms that are leveraging the full breadth of the open web platform, that are truly native to this amazing medium called the web. And that would be an exciting problem to have.

* * *

> The comments were also interesting.

*   Kaveh Bazargan • 23 days ago

Thank you Peter for your accurate and witty post, and thank you for MathJax which has served as a beautiful solution to math on the web. The lack of support from browsers has been pathetic and shameful, and you are right that the only real solution is that MathML (and other MLs) are supported natively supported as the definitive content. We should not really have to resort to "tricks" such as MathJax, however well executed those tricks might might be!

*   Peter Krautzberger re Kaveh Bazargan • 23 days ago

Thanks, Kaveh. As I wrote, Firefox and Safari do have some support for MathML and of course MathJax is also not yet complete in its implementation (there's only so much room in a non-technical post).

In my humble opinion, it's an achievable goal for a publisher to produce MathML that renders fine on Firefox's native support (while I don't think the same can be said about Safari at this point).

*   Kaveh Bazargan Peter Krautzberger • 23 days ago

Of course in practice we simply cannot restrict users to browsers these days, so until there is native support of MathML in all popular browsers, we'll continue with MathJax which _does_ work on all. ;-)

*   Peter Krautzberger Kaveh Bazargan • 23 days ago

Here's hoping that one day, we won't have to. Wouldn't that be a nice problem to have?

*   Robert O'Callahan • 23 days ago

The best way to get all browsers to support MathML natively is to push math users to use Firefox for its native MathML support. That will get the attention of the other browser vendors. Unfortunately, even in this post you didn't clearly commend Firefox for being the only browser with native MathML.

*   Peter Krautzberger re Robert O'Callahan • 23 days ago

Thanks for the comment, Robert. I'm not sure who you have in mind with "users". I would agree that authors should ensure that their MathML renders well on Firefox natively.

I wouldn't quite agree to call Gecko/Firefox the only browser with MathML support. WebKit/Safari made a lot of progress last year thanks to Fred Wang's work even if it's behind Firefox in its implementation.

*   Robert O'Callahan re Peter Krautzberger • 23 days ago

By "users" I mean people producing and viewing math content.

I'm glad Safari is making progress. Feel free to recommend it too. The important thing is to create market pressure for browser vendors to implement native MathML, and that means users/developers choosing one browser over another because of MathML.

As you probably realize, MathJax being so good has actually reduced that pressure; it's easy for browser vendors to say "hey, MathJax works fine in our browser, so why bother investing in native MathML". Even in this post, you haven't clearly identified reasons why native MathML is better than MathJax fallback.

*   Peter Krautzberger re Robert O'Callahan • 22 days ago

I fully agree that users should choose browsers for their features and Firefox's MathML support is, to me, a huge factor, especially in an educational setting. (In fact, I just recently had an interesting situation where I helped a student struggling with a school project about HTML that required some math -- and naturally he chose MathML since they were using Firefox and he wasn't even aware of browser support issues -- bliss ;-) ).

I've encountered the "MathJax is holding back browser implementations" argument a couple of times now and it feels like a Catch-22 to me. Without MathJax (I think) there wouldn't be significant amounts of MathML on the open web and thus no incentive to implement MathML support natively. Now, with MathJax, there's lots of MathML, yet there's still no incentive. I suspect the reasons lie elsewhere. (And from speaking to Gecko, WebKit and Blink developers it does not lie with the developers).

The reason why I didn't go into technical details about why native support is so important is that it didn't fit in this forum (both in length and audience). But you're right that perhaps I should have tried better. Some basic notes can be found on my personal blog at http://boolesrings.org/krautzb...

*   JonRimmer • 22 days ago

You and others here say MathJax isn't an adequate solution. But you don't explain why? It seems like a very successful project, and a far better approach from an software engineering perspective than native browser support.

Adding MathML support into every browser requires duplication of development effort and places responsibility for maintenance in the hands of browser vendor employees for whom MathML is neither a priority nor an area of expertise. Each implementation will vary in its performance, bugs and feature-set, and authors will need to know these differences in order to produce content that is compatible across all browsers. Future versions of the MathML spec will require development and deployment across all browsers, increasing the cost and delay in making new features available.

In contrast, keeping MathML support within a library allows development to proceed at its own pace, handled by those for whom it is both a priority and an area of expertise, and removes the cross-browser compatibility burden. MathML users then only have to deal with a single set of features and bugs, and can upgrade to newer versions of the library as and when they need to, instead of being beholden to browser development and upgrade cycles.

It seems like browser vendors would be better off concentrating on providing powerful, general low-level APIs for things like parsing, layout and rendering, in order to help the implementation and use of libraries like MathJax. That way, the web can scale to support custom rendering of not just MathML, but also Chemistry ML, Cell ML, and the many other useful markup languages and formats, while reducing the centralisation of effort and complexity within the browsers themselves.

*   Peter Krautzberger re JonRimmer • 22 days ago

> But you don't explain why?

See my other comments on this.

As for the other points your raise, they seem to apply to any newer web standard so I don't quite see how they're relevant to MathML specifically.

But yes, certain low-level APIs could make MathML polyfilling much easier; no surprise there. However, their implementation seems even less likely -- especially since some of them have been rejected in the past.

Besides, MathML is not rocket science. It adds a few basic constructs to HTML/CSS such as multiscripts, stretchy characters and better table alignments. If you look at Gecko and WebKit it's clear that it's not a huge burden to maintain.

*   JonRimmer re Peter Krautzberger • 22 days ago

I don't see any concrete technical reasons in any of your other comments for the inadequacy of MathJax. Could you be more specific about which comments you mean?

As for other new web standards, you are absolutely right that same points apply to them. The web has to get away from the situation where features must be implemented natively in the browser in order to avoid feeling second-class. That is the only way the web will be able to regain competitiveness with native platforms like iOS and Android. As it stands, the web is losing ground quickly to these platforms, because the need to implement features natively results in an unacceptable bottleneck in innovation.

Fortunately, while there may have been resistance in the past to making low-level capabilities available to library authors, that is changing. For example, there W3C CSS Working Group has recently created the Houdini Task Force [1] which aims to design low-level APIs for parsing, layout, content fragmentation and font metrics. I am certain that they and others would be very interested in hearing what APIs would help in implementing MathJax and equivalent libraries. The Extensible Web Manifesto [2] also covers similar ground.

[1] https://wiki.css-houdini.org/  
 [2] https://extensiblewebmanifesto...

−

*   Peter Krautzberger re JonRimmer • 22 days ago

Thanks, I'm well aware of Houdini and the extensible web manifesto and these are great initiatives with excellent people involved (such as Rob who commented here as well).

Personally, I think reports of the imminent death of the web are exaggerated. But even so, I'd argue that abandoning important and established web standards will do nothing but speed that up.

As for the technical issues, they are (again) nothing particular to MathML. Polyfilling a textual rendering component -- be it math or bidi or linebreaking -- always happens too late in the game, i.e., after the page renders because good layout will depend deeply on the surrounding context. Similarly, inserting large amounts of content fragments (easily in the thousands) into the DOM will always come with issues, especially performance.

More importantly, relying on a polyfill will prevent universal use. Developers will always have to make a conscious decision to add support, adding complexity and risking instability. In reality, we could never expect to be able to use mathematics in something as basic as a webmailer or a social network.

The thing is: the "if" is not even the problem. When you ask actual browser developers (be it Mozilla or Google or Apple or Microsoft) they in favor of MathML. The problem lies much more on the management side.

Ultimately, it comes down to how important mathematics is. (Why not kick bidi? SVG? flexbox? tables?)

The web is the most important medium for human communication and mathematics is one of the oldest and most universal forms of expression. Every school kid (worldwide) engages in mathematics (often for many years) and soon will do so in an HTML context. In particular, students will have to actively communicate (author, share, digest) mathematics and this will primarily happen on the web. To me, that makes it pretty important to have math natively on the web.
