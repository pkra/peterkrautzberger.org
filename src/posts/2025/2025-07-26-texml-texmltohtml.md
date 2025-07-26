---
layout: post
title: On texml and texml-to-html
date: 2025-07-26
permalink: 0223/
---

For the past, uhm, decade? (wut?) I've been helping the AMS to build its tooling for TeX to HTML conversion. The first two parts were made open-source in 2022 (texml) and 2023 (texml-to-html). And yet, I've never written about them once. Let's change that.

There are plenty of tool for TeX-to-HTML conversion, so why another? The reason is fairly trivial: it already existed. The AMS had done some of this for a very long time (e.g. to populate abstract pages and MathSciNet reviews). Since their tooling wasn't built by some script kiddie trying to hack around TeX but by the AMS's in-house TeX expert, this turned out to be a great basis.

When I joined the AMS for a bit in 2013 (while running MathJax), David was more than ready to expand this tooling to full-text publications. I was knowledgeable enough in MathJax to help "outsourcing" math mode layout to MathJax. So we started to experiment.

David made texml a TeX-to-XML converter (with the output roughly following jats/bits). After a few experiments with with O'Reilly's htmlbook and eLife's(/substance's) Lens, I pitched the AMS that I could build the HTML side of things from scratch. All of this went well enough and we scaled steadily from 2 tiny journals and a few books to all journals and (hopefully soon) all books.

Now a curious thing happened a while back. Somebody became interested enough to try to get those two open pieces to run. This was honestly surprising given that there's virtually no documentation alongside two quick youtube videos I had recorded for Sam a while back.

In a recent conversation, the inescapable question came up: why use texml/texml-to-html rather than all the other tools out there? I generally don't like "elevator pitch" questions. But I sometimes teach using TeX-to-HTML tools (and how to get something accessible out them).

When I teach these courses, I tend to expose people to pandoc and make4ht. It's not that they're great - honestly, no tooling in this space is particularly great. However, they're easy to install and they represent the two broad tendencies in this space: staying close to TeX and reaching close to the web.

I've found pandoc to be decent when your priority is the quality of HTML. It's generally clean, well structured, malleable. But I found its consideration for TeX to be lacking when TeX is the input. Since pandoc seems uninterested in deeply re-implementing TeX's input (whoever would?), it can struggle with fairly basic TeX constructs.

This is a decent tradeoff. And given its large community, there is a great variety of additional tooling you can hook up (e.g. custom filters) to get yourself further along. Combined with a strong support for HTML, you can then get really nice side-effects (e.g., customization). It becomes a steep learning curve however.

On the other end there's make4ht (the modern tex4ht) which stays very close to TeX, leveraging dvi to get around some of the messiness of TeX as an input. The trade off here is that the resulting HTML is often capturing (and getting stuck reproducing) print layout rather than helping you build good web content (and design). Again, that's a good trade off in many situation. And if you can hack TeX, you can learn to hack a make4ht config file.

Since I cheered for it way back when, I feel like I should mention latexml. I haven't looked at it in great detail in a while but my last evaluation left me thinking that it still suffers from its historic twists. Going from building the DLMF with custom XML semantics to converting all of the arXiv to "vain" HTML leaves a mark. While latxml's approach appears to be more like pandoc's on the surface, I've always found its output to be more like make4ht - a lot of TeX-derived layout, noisy markup and some core decisions I strongly dislike.

I also want to mention to plastex. I liked it whenever I gave it a spin but I don't feel comfortable enough in python to enjoy it (or to suggest in workshops, except for people who are comfortable with python). Still, it has one huge plus in my book: Christian's Chirun builds on it.

Anyway, so what about texml and texml-to-html?

I would say the main thing about texml, texml-to-html, and the rest of the AMS toolchain is that it's opinionated: texml does not want to support everything under the sun, it supports what AMS publications need - and some things are supported but maybe in intentionally limited or unexpected ways (e.g. to improve HTML output or layout on the web).

At first sight this may seem no different than the other tools I just described the difference is control.

You can get away with this when you control the source. The AMS runs an essentially self-sufficient publishing operation. This gives them great control over the production process and helps enforce reasonable standards during production. 

This is a massive shortcut for any tools having to deal with the resulting TeX sources. The amounts of maddening hacks these tools need to support is very limited. You want to hack `\relax`? No thank you. Your minipage-infested layout hackery? Goes out the window (or into a graphic). You want tikz to draw across your page? Nope.

The second cornerstone is that the toolchain was devised for HTML production. Because TeX continues to be in charge of producing the PDF output, you don't worry about XML-to-print workflows. HTML is where it's at. This gives you the freedom to re-interpret TeX packages in a way that makes better HTML.

The third cornerstone is: MathJax-first. Texml handles math mode in a way that optimizes the result for MathJax's TeX input. Macros get resolved far enough to make sense to MathJax (and ideally no further). IDs are generated and integrated to match text and math mode (e.g., links to tagged expressions), generated graphics (e.g. tikz) are extracted but integrated into TeX input for MathJax to re-combine. Additionally, the work has led to half a dozen MathJax extensions, some of which made their way back into MathJax proper.

I think that's the main gist. I suppose the other question is: should you use it?

I don't know. Like all tools in this space, it's easy to point out its many flaws and failings. Even more so, given how specialized it is. I also don't write much LaTeX myself these days. Nor do I have to deal with students (who are probably using LLMs to generate questionable TeX sources). And I would always tell you: to create web content, learn HTML and CSS (and maybe [web components](/0221)).

Still, I would say this: if you've tried "all the tools" and were never quite satisfied, give these a try. If you think "oh, this drives AMS publications, interesting!", give them a try. [Here's a demo on codeberg](https://codeberg.org/krautzource/texml2html-demo) you can poke. Let me know how it goes.
