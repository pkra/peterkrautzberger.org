---
layout: post
title: "The problem with MathML as a web standard (part 3)"
date: 2017-08-28
permalink: 0199/
published: true
---

Let's continue from [part 2](/0198/).

## Prelude

This one's slightly tricky. And I also have a confession to make. In the first two parts I've pretend I've written about MathML when I really only wrote with half of it in mind.

One problem of the MathML spec in general is that it's really two, quite distinct specs: [Presentation MathML](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_) and [Content MathML](https://www.w3.org/Math/draft-spec/mathml.html#chapter4_).

Now the common description is: Presentation describes layout and Content describes semantics. I think one of the problems for MathML in general is that it is not that easy.

## The third problem: MathML does not specify semantics

So obviously that's wrong. After all there is Content MathML and it specifies an enormous amount of semantics. Such an enormous amount actually that you can express lambda calculus. You also get a whole bunch of fantastic elements (for `<reals>`) and on top of that built-in, infinite extensibility via content dictionaries. So you can do quite literally everything in Content MathML.

So what's the problem?

<figure><a href="https://commons.wikimedia.org/wiki/File:Tumbeasts_sign1.png#/media/File:Tumbeasts_sign1.png"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Tumbeasts_sign1.png" alt="Tumbeasts sign1.png"></a><figcaption>By <a href="https://en.wikipedia.org/wiki/Matthew_Inman" class="extiw" title="en:Matthew Inman">Matthew Inman</a> - <a rel="nofollow" class="external free" href="http://theoatmeal.com/comics/state_web_summer#tumblr">http://theoatmeal.com/comics/state_web_summer#tumblr</a>, <a href="http://creativecommons.org/licenses/by/3.0" title="Creative Commons Attribution 3.0">CC BY 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=38250223">via Wikimedia Commons</a></figcaption></figure>

It's the simplest and most practical problem: Content MathML plays no significant role in real world documents. You can find it in niche projects (such as NISTS's hand-crafted [DLMF](http://dlmf.nist.gov/)), you can find it hidden in commercial enclosures (such as Pearson's assessment system where I wonder why you'd need its expressiveness), you can also get it by exportig it from computational tools (Maple, Mathematica etc.). But in real world documents, it's non-existent.

I can't really tell you why that is. Perhaps like most formal abstractions of mathematical knowledge, it ignores the practicalities of humans communicating knowledge. Perhaps, when it comes to its computational prowess, it probably fails on the web because it cannot compete with the practicality of JavaScript or server-based computation (<i lang="fr">à la</i> Jupyter Notebooks).

I also have heard repeatedly that it's simply too difficult to create. And from my limited experience with MathJax users it doesn't help that [the spec itself](https://www.w3.org/Math/draft-spec/mathml.html#chapter4_id.4.1.1) warns people that it encodes structure <q>without regard to how it is presented aurally or visually</q>, i.e., it's sometimes not clear how Content MathML should be rendered.

Ultimately, lack of content (pardon the pun) makes Content MathML of little relevance on the web. (An interesting but separate question might be whether the way Content MathML expresses semantics fits into the style that HTML has adopted in recent years; another time perhaps.)

### The third-and-a-half problem

But there's actually a second problem for MathML and semantics on the web here: <em>Presentation MathML</em>.

It's easy to think that Presentation MathML specifies at least some semantics. And if it specifies some, maybe it's a good basis to build upon. After all, how semantic was HTML really, back in the day?

For example, there's the [`<mfrac>`](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_presm.mfrac) element and you might think it specifies a fraction. Unfortunately, you'd be wrong. The spec itself speaks of <q>fraction-like objects such as binomial coefficients and Legendre symbol</q> which are about as far from fractions as you can think of. Of course you can find even more egregious examples in the wild such as plain vectors encoded with `mfrac`. Similarly, `<msqrt>` does not represent <i>square root</i> but <i>root without index</i> and it is used accordingly in the wild (while `<mroot><mrow>...</mrow><none/></mroot>` constructions are practically unheard of).

The point is that you can't complain about some kind of abuse of markup because Presentation MathML does not make this kind of a distinction.

<figure>
<a href="https://commons.wikimedia.org/wiki/File%3AAurelia-aurita-3-0009.jpg"><img width="512" alt="Photo of Aurelia aurita after applying ten iterations of DeepDream" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Aurelia-aurita-3-0009.jpg/512px-Aurelia-aurita-3-0009.jpg"/></a><figcaption>By MartinThoma (Own work) [CC0], via Wikimedia Commons</figcaption></figure>

Now for a long time, I thought there might just be enough semantics in Presentation MathML to get away with. Working with Volker Sorge and his [speech-rule-engine](https://github.com/zorkow/speech-rule-engine) and integrating SRE's semantic analysis into MathJax meant a deep dive into what kind o structure you can find in Presentation MathML. And as amazing as its heuristics are, it becomes clear how brittle they remain and how quickly you find (real world) examples that break things. This isn't to say you can't guess the meaning of a large selection of real world content. It just makes it clear that you are working with a format void of semantic information. (And we're not talking about [tricking machine learning models](https://arxiv.org/abs/1707.08945) here, just run of the mill content.)

When you get down to it, I would say that there are effectively only two elements in Presentation MathML that appear reliably semantic in the real world:  `<mn>` and `<mroot>`. And even these examples are stretching it. For for the former, [the spec suggests](https://www.w3.org/Math/draft-spec/mathml.html#chapter3_presm.mn.examples) that `<mn>twenty one</mn>` is sensible markup. For the latter, it seems to be mostly accidental that roots simply haven't been sufficiently abused in the literature (yet) and thereby retain a unique place of being a visual layout feature that is used consistently to describe (many different concepts of) "rootness". (For the record, there's also `<merror>` which is pretty solid, semantically speaking; just not very mathematical.)

## Coda

There are other, more indirect signs of the failure of MathML to specify semantics. For example the absence of typical benefits of semantic content such as usable search engines or knowledge management tools. But that's a very different problem to discuss.

Anyway, so MathML that specifies semantics could exist but does not. On to layout.
