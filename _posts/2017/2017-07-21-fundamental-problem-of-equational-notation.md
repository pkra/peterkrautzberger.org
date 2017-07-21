---
layout: post
title: "The fundamental problem of math on the web"
date: 2017-07-21
permalink: 0196/
published: true
---

I usually describe my interest as <i>all things math on the web</i>. I've come to realize that <i>math on the web</i> is mostly a misnomer. Actually, I realized this quite some time ago, but I always thought it wasn't such a big deal. Lately, I've started to think it actually is and I'm actively working to change my language (so damn hard!).


## what's in a name or political correct terminology


When people speak about <i>math content</i> in the context of the web they usually mean <i>equational content</i> (or simply <i>equations</i>). That is, they don't mean content in a mathematical field (which often enough does not qualify as equations), they simply mean <i>something that looks like an equation</i>.

Now you might argue that an equation in physics is still basically mathematical content but in reality both mathematician and physicist will frequently disagree with you (and each other, possibly explosively so). You quickly get to the edge when considering chemical equations and if you want to classify the nonsense notations in the life sciences you might question your sanity.

It's not hard to understand why this is. For example, most typesetting tools with support for equations will have some kind of <i>math mode</i> for them.  But I think it's worth while differentiating the two so I'll try my best to stick to <i>equational content</i>. On the one hand, the importance of <i>math on the web</i> is often exaggerated because it is really non-mathematical <i>equational content</i> that's the majority (and even that is a blip on the radar). On the other hand, it does not help to confuse a field of study with what effectively comes down to a layout tradition.

Also, sorry-not-sorry for misleading you with the title here.

The fundamental problem of equational content is that, well, that it's simply pretty terrible all around. It's convoluted,extremely compressed, archaic, and generally undecipherable. It destroys academic careers by the millions and it can often only be understood when you can see it written live (i.e., animated). At its best equations are like good abstract drawings, at worst (usually?) they're deafening gibberish.

## interlude

Stray thoughts.

One. I always thought Bret Victor's (in)famous [Kill math](http://worrydream.com/KillMath/) was largely wrong about the specifics of his criticism (for one, he seems to dismiss the incredible power of compression that differential equations exhibit - along with the obvious problems that stem from compression). But he is of course utterly right with his incredible work exploring how modern media like the web allow for a much richer expression of human thought, one that opens the content up to more people, often by adding means of interacting with it, especially means for untrained people (like tiny humans).

Two. Every once in a while I've wondered: what if Tim Berners-Lee had given the web some basic building blocks for equations. Just a fraction and a square root; maybe instead of image renditions of print equations we'd have immediately seen the same creativity applied to equations as there was with hacking general layout (1px GIF anyone?). Of course, that's hopelessly romanticizing the evolution of the web. Why can't I stop wondering.

Three. On and off (and I've come full circle on this several times) I've wondered whether math is ahead of other sciences on the web. I mean the `<math>` tag was proposed in fricking HTML 3. So is math ahead? Maybe. But then why is scientific content so much more vibrant and transformative on the web compared to math?

## 10 PRINT "Hello World!"; 20 GOTO 10


The most obvious flaw of equational content is that it's deeply rooted in print. Given the limitations of print technology, equational content has needed to adopt bad practices for such a long time that many people consider them good.

I'm not (just) thinking about the problem of general comprehension as it is too tainted by poorly trained practitioners on all levels. Sure, equational content is often more difficult to parse than necessary but that's not different from poorly phrased prose.

The main problem is the <i>tradition</i> of abusing print technology to get more and more variations of notation squeezed into the medium. The constant abuse of sub- and superscripts is a great example; if you need to add a variant of an object you've already introduced in your notation, just slap some sub/superscripts around it, et voilà, a new object.

The abuse of letters with different fonts is another horror in equational content. If you have ever run into a paper where a dozen variations of `G` appear, denoting a convoluted set of somewhat related concepts, you'll know this horror well. Unbelievably enough, Unicode has deemed this abuse of notation important enough that we now have such wonders as the Unicode point <i>mathematical bold italic G</i> in the [Mathematical Alphanumeric Symbols
 Block](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols).

Another historic accident are stylistic separations. For example, in print it's abhorred to make math content bold when the surrounding content is bold (e.g., in a heading) yet on the web people complain that an equation in a link doesn't get the <i>correct</i> text decoration (what would that be??).

Obviously, there's little point in criticizing the historic development of equational content. Given that print was mostly limited to (at best) grayscale with a limited character set, naturally people had to be creative. It is amazing what this accomplished.

The real problem comes up when pretending that this tradition should do more than vaguely inform a medium such as the web. The web so far developed without much influence from equational content. It has adopted a rather different approach to separating content and presentation and the traditions of equational content are essentially incompatible to the web's approach.

I can find no argument for why the web stack should not bend over backwards to accommodate these mostly quite bad traditions of equational content for print. This is perhaps similar to the situation of CSS paged media.

Obviously, it's not like you shouldn't be able to put traditional equational content on the web - you should (and you can very well today). But I've come to think it's perfectly fine, in fact, it is appropriate that this continues to be a difficult problem. For example, traditional equational content is almost always inaccessible (without heuristic algorithms, i.e., guessing around); it's basically a bunch of glyphs placed in a weird 2D patterns (like above and below a line which in turn is magically centered on some baseline and may or may not indicate it corresponds to the notion of a mathematical fraction). Pretending that this is a basis for accessible rendering on the web strikes me as foolish (or ridiculously zealous).

If you think that all equational content should be limited to the traditions of the print era, fine. I think on the web humanity can do better. We need to acknowledge that the (print) traditions enshrined in equational content are flawed and should (and invariably will) be replaced with better concepts and narratives that are appropriate for this medium.

