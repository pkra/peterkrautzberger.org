---
layout: post
title: "Elusive semantics"
date: 2017-06-24
permalink: 0195/
published: true
---

I don't like "semantics zealots", people who claim that content always can (let alone always must) be "fully semantic" (for whatever value of "semantic" they favor). In the same vein, I also don't like the thinking that any format can fully separate semantics and presentation - human thought is to fickle a beast to tolerate such confinement. You may blame my old training as a set theorist, but the gray area of neither true nor false is much more important to me.

Still, the things you can do well, you obviously should. And yet, every once in a while, somebody throws you a curveball and you just have to shout: <q><em>This</em> is why we can't have good things!</q>.

## where did you come from, where did you go

The other day on a client project, the QA specialist pointed out that the content was consistently using `<em>` where it should be using `<i>`. Can we fix that?

The semantics of these and related HTML5 tags is a bit subtle, but there is a difference and it should be easy to just replace one with the other, right? Right? Famous last words.

At first sight, this was easy. The HTML came out of some JATS-like XML, which was using `<italic>` elements. So map to `<i>`, right? But hold on, you'll say, HTML5 reinterpreted `<i>` to no longer indicate layout but semantics; it now indicates a <i>change of voice</i>. Unfortunately, JATS's `<italic>` is focused on the typographic aspects, so it does not really help. The again, it could help a little bit more because `<italic>` allows for a `toggle` attribute to indicate <em>emphasis</em>. Sadly, the actual XML did not provide that information.

Since the piece of the tool chain that turned `<italic>` into `<em>` was actually my doing, I was clearly at fault. <em>However</em>, I had my reasons. Namely, that all of this came from a LaTeX source and in this real world LaTeX content, `\emph{}` and its brethren were the dominant source for `<italic>`. So <i>clearly</i> that should be `<em>` in the end?

Now of course, almost all LaTeX authors don't give a damn beyond getting that PDF to look how they want it, so while they mostly use `\emph{}`-like macros, they mix it freely (and inconsistently) with `\textit{}` and its brethren. So the conversion (written by an absolute expert) rightly says <q>screw it, all I can say is it wants italics here</q>, thus merging them both together.

## where the wild things are

It's my job to dig deeper than that so I took the time to look through the actual content available. Not the TeX, not the XML but the actual writing.

Lo and behold, the actual text use is pretty different: by far, most occurrences of `<em>` happened in the context of quick, inline definitions. Invariably, you find these in introductions of mathematical research articles where you include commonly known definitions from a field so as not to cause bloat (because publishers and editorial boards continue to care more about page numbers than well documented research results).

## there's an <s>app</s> element for that.

A definition does not really fit either `<i>` or `<em>`. The closest you get [in the spec](https://www.w3.org/TR/html5/text-level-semantics.html#the-i-element), is an example of using `<i>` to reference a past definition.

> `<p>The term <i>prose content</i> is defined above.</p>`

To make matters worse, there is of course [an entirely different element](https://www.w3.org/TR/html5/text-level-semantics.html#the-dfn-element) that fits perfectly:

> The `<dfn>` element represents the defining instance of a term.

Perfect match for the vast majority of the content in question. So we should switch everything over, right?

The answer is, of course, no. Not because some content would end up with the wrong semantics (scroll to top) but because that was not the only use I found:  almost without exception, the samples includes the use as a definition alongside the use as `<em>` or `<i>`.

And that is why we can't have good things.

## who cares, you suck

All of this is about as surprising as finding a handwritten table of contents in a Word document. TeX is for print layout and font styles are used for all manners of cruelty. The question I had to answer with my client was: can we do anything about it?

In the end, beauty lies in the eye of the beholder and semantics in the eyes of the reader. We did, in fact, switch to `<i>` with the plan to expose more information from the original source regarding emphasis so we can gather more data on its usage. Fundamentally, this won't help because it doesn't solve the problem of inline definitions. Still, some analysis might reveal pragmatic improvements down the line.

In the end, it's not hard to argue that a definition that is well known in the field and that is done inline in the introduction of an article is more like the kind of reference to a definition as in the above example from the spec (in fact, often enough it is done in the vicinity of a bibliographic reference). Of course, we're still conflating `\emph` and `\textit`.

## coda

Now <s>zealots</s> idealists will argue that authors "just" have to learn to use semantic macros in TeX. After all, there are plenty of "semantic" LaTeX packages out there; just start writing good markup already!

Besides the lack of pragmatism, the only viable solution I can see would be a LaTeX package matching specifically HTML5 markup. After all, we have the tags and they have established definitions; any "semantics" beyond that will only cause issues down the line (what if a tag is introduced to HTML but with a slightly different meaning?). Even then, it doesn't solve the social problem at the heart of so many publishing technology issues: who would make the effort and use it? It's extra work and does nothing for print; why would an author do extra work when they think print rules?

I think only someone interested in creating HTML output would make the effort. And at that point you have to ask: Why would those authors bother with an archaic programming language like TeX to write HTML? They will find it invariably easier to just write HTML or their favorite lightweight markup for creating HTML, especially given the speed at which HTML-to-PDF solutions are improving). Building tools for LaTeX to solve this would just create extra work but help nobody. Just build better tools for writing HTML.

<i lang="de">Doch das ist eine andere Geschichte und soll ein andermal erzählt werden.</i>

