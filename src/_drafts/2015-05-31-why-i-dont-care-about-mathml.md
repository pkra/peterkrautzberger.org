---
layout: post
title: Why I don't really care about MathML
date: 2011-11-20
categories:
- thoughts on mathematics
tags:
- poem
published: false
---

Previously I wrote about why I care about MathML. Naturally, I don't have a problem to write this one now ([because Gödel](http://www.ams.org/notices/200703/rev-raatikainen.pdf), or, like, whatever).]

I'm not looking forward to having people misunderstand this piece. So if you're not in the mood for an unresolved or conflicted thought processes of mine, please do me a favor and leave. [Here are some kittens.](https://www.youtube.com/results?search_query=kittens)]. Please also note that I'm a member of the [W3C MathWG](http://www.w3.org/Math/).

> Do not worry about your difficulties with MathML; I can assure you that mine are still greater.
> -- [not Albert Einstein](http://en.wikiquote.org/wiki/Albert_Einstein#1940s).

Previously, I outlined a few reasons why [MathML is useful](http://boolesrings.org/krautzberger/2014/12/26/why-i-care-about-mathml/) and important and what it provides and how crucial it is to have the Open Web Platform and its [implementations provide support](http://boolesrings.org/krautzberger/2014/12/29/bonus-round-why-i-care-about-native-mathml/) for math and science. But here's the thing: I don't really care about MathML as such. Now nothing that will follow is in any way MathML's fault -- let alone the fault of the many people who helped shape MathML and turn it into such a resounding success.

What I care about is mathematical and scientific communication on the web. ([Funny thing that.](http://www.w3.org/Math/Documents/Charter2006.html#mission))

### XML yadayada

If you're into the whole HTML vs XML fight, you might think the problem is that MathML is XML. But a) that's not true and b) that's blaming the wrong party.

An XML serialization makes a lot of sense any which way but more importantly, MathML serves a very important purpose outside the web, where it's crucial also in print production and also serves as an exchange format for computational tools. HTML5 is just beginning its success outside the web and discarding the experience of MathML (both good and bad) would be foolish.

The thing is, MathML did not start as XML; it started as the `<math>` tag in the (doomed) HTML 3 spec and was pushed into "exile". What's amazing is that MathML survived this exile at all and was brought it back into the fold of plain HTML5. This can only be explained with it's incredible success outside of the open web which makes it even more foolish to blame its XML nature.

The only thing that is worth discussing about MathML's history is in how far the exile of `<math>` into XML has left scars. There are features that were -- out of necessity, mind you -- developed out of sync with a rapidly changing web standards. And I think we need to fix that.

## 1, 2, 3

[https://www.youtube.com/watch?v=N7yAe2MBIpE]

MathML is now at version 3. As much as I can argue that MathML needs to be native, at this point it seems difficult to say that we will see broad browser implementations within the next 5 years. This opens up the question what we can do to speed things up.

The curious discussion around Flipboard's canvas-based web app is a nice reminder that the open web platform has several rendering "systems" that to some (ever increasing) degree allow you to do the same thing: render complex documents. Besides the obvious HTML/CSS we have SVG and canvas; and in many ways (and, I think, due to its "exile") MathML [can be misconstrued](https://plus.google.com/+OjanVafai/posts/Czz9Aaw2L5z) into requiring yet another separate renderer. In other words, we have a lot of duplication in web technology.

At the same time, mathematics is just text.

### What's in a name.

So maybe I could say: I don't care about MathML, I care about the `<math>` tag.
