---
layout: post
title: Responses to "MathML is a failed web standard".
date: 2016-04-07
permalink: 0187/
published: true
---

This blog doesn't see a lot of traffic (funny how that works when you post every  6 months) but I was surprised to see how few responses there have been to "MathML is a failed web standard", especially from the MathML enthusiasts.

I don't have any analytics on this site beyond what CloudFlare collects passively. There was spike of ~800 unique visitors and then higher-than-usual traffic afterwards, it might not be completely unreasonable to guess that 1000 people opened the post back then -- until somebody posted it to Hacker News today (no link to save your sanity from reading HN comments) so now it's more like 20,000 people have clicked a link to that piece.  Of course, few of those will have read it, fewer still will have carefully read it. My best guess is: 3 people have read it. Does that sound about right?

Most responses were basically "meh" (especially on [the twitters](https://twitter.com/search?q=mathml)). [Steve Faulkner](https://twitter.com/stevefaulkner) is, of course, to blame for much of that twitter attention (thanks Steve!). I also received a few kind emails with responses, thanks for those. Elsewhere, [Jesse McKeown](http://jessecmckeown.tumblr.com/post/141734737315/musings-on-web-mathml-and-some-of-our) wrote a short tumblr; as a former mathematician I'll formally (get it?) object to the use of Gödel's work.

[Paul Topping's "response"](https://medium.com/@PaulTopping/response-to-peter-krautzberger-s-mathml-is-a-failed-web-standard-179ab8ffa24b) was mostly focused on his own ideas which have little to do with what I wrote. Let me respond to those few points that were about my piece. Let's do this inline.

> The first thing to note in his post is that he says that MathML is a failed **web** standard. By this, I believe he is only saying that it has failed as a language supported by browsers.

I had hoped my glorious `<s>` tag was making the point clear. But I guess not.

> He acknowledges that it is in heavy use in education, publishing, and elsewhere but I wish he’d made this distinction a bit more strongly.

Ignoring the point that I didn't actually mention education (or "elsewhere"), I thought I had fulfilled this "wish" when I wrote: <q>It’s also clearly a success in the XML publishing world, serving an important role in standards such as JATS and BITS. The problem is: MathML has failed on the web.</q>.

I'm not sure how much clearer I can make that distinction -- success here, failure there.

> The browser makers ignore MathML so getting rid of it won’t affect them much. Perhaps Peter is directing his message to the MathML community itself.

For what it's worth (and before anyone needs to speculate), my piece was very broadly directed at the web community. I was probably looking for readers who follow current trends in browser standards and their development. (Shout out to Chaals!)

> This one’s easy. MathML isn’t implemented in most browsers so its not used.

That argument seems rather simplistic to me. Looking at any successful new web standard out there today (e.g., picture, flexbox, grid, animation), even a partial, behind-a-flag implementation does not mean the standard is not being used. Instead, there's a positive feedback loop with (often seemingly small groups of) developers. Even at the best of times (e.g., Dave Barton pushing WebKit forward for a year, Fred Wang's crowd-funded months), developer feedback for MathML was (and is) non-existent (cf. my example of serious bugs not even being reported).

> Sure but imagine if MathML specified layout to the level that TeX does.

This is a) ignoring how badly Presentation MathML does not specify layout (in particular, compared to CSS) and b) a red herring (TeX).

> This might well be the case but what’s the point here? If CSS now has what math layout needs, we’re done, right?

Yes. That's the main point, actually.

> Perhaps, but even if Presentation MathML provided sufficient semantics, most authors wouldn’t add them. The fact is MathML already provides recommended markup patterns for expressing a lot of math semantics but authors aren’t interested in adding such patterns to their math. Authors generally stop tweaking their math as soon as it looks right and can be read by a fellow human. I don’t think this will change. Even publishers are less and less interested in spending resources on marking up math with the required level of semantics. This won’t change even if MathML added missing semantics constructs and the necessary editing tools were available. Instead, everyone is moving in the opposite direction, spending less and less time and money on careful authoring.

An elegant straw man argument is still a straw man argument. I did not write about authoring or extending MathML. Good points though.

> Peter acknowledges Neil Soiffer’s work on algorithmically extracting semantic information from Presentation MathML but seems to think it has hit a brick wall.

Another case of putting words in my mouth. A bit far-fetched this time, since MathJax is actively doing research in this area.

> In technology, when someone has a better idea how to do something they should just do it and let the market decide whether their solution is really an improvement.

To quote myself:

* <q>Today, lots of tools will let you render mathematics using CSS.</q>
* <q>It’s possible to generate HTML+CSS or SVG that renders any MathML content [...] on the server.</q> [And obviously on the client as well.]
* <q>Since layout is practically solved [...]</q>.

I tried to make a point that CSS and SVG already provide various solutions today. I also tried to make a point that MathML is not used significantly in the wild (except by conversion to HTML/CSS or SVG of course). So it seems to me that I argued that "the market" has chosen these solutions over MathML.

But I guess I wasn't clear enough. Oh well.

> No problem but a lot of work needs to be done first.

No, see above.

> Peter claims MathML’s mere existence is blocking discussions. What discussions did it block?

That's a good point even though Paul's piece is a nice example of the point I was trying to make. Calling on the community (who is that again?) to magically fix MathML after 10 years without development instead of making room for successful solutions? That is an elegant block.

Anyway, one problem for me is that many discussions I have in mind happened privately, especially with web standards experts. But that's no excuse for not spending a few minutes thinking about public examples; for some reasons, this example [the discussion on mozilla.dev.platform](https://groups.google.com/forum/#!topic/mozilla.dev.platform/96dZw1jXTvM) is the first to come to mind (man, I was feeling righteous back then).

Another example are the specs themselves. The ARIA spec basically has [a big glaring hole where math should be](https://www.w3.org/TR/wai-aria-1.1/#math). Similarly, take a look at the suggestions in the [ARIA best practices](https://www.w3.org/TR/wai-aria-practices/#math) spec and the [epub3 spec](http://www.idpf.org/epub/301/spec/epub-contentdocs.html#sec-xhtml-mathml-alt). All of them focus entirely on MathML-based solutions without any reflection on whether these actually work in real life. The ARIA practices spec even discourages working solutions like HTML-math using dubious arguments about the semantics of Presentation MathML. Moving on.

Paul goes on to write about generating semantic information. It's not quite a straw man but nevertheless has little to do with my concerns about exposing semantic information on the web.

To wrap up.

> Of course, Peter doesn’t believe automated semantics recognition can do the job.

See above.

> Do we want that math to look identically in every browser? I believe the answer is generally “no”.

I have the impression people generally expect consistent rendering across browsers. But anecdotal evidence is, well, anecdotal.

And that's all folks. I'll add more as they come along.

---

And stay tuned for more.
