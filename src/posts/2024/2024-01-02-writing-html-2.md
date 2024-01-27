---
layout: post
title: Web components for (mathematical) writing, continued
date: 2024-01-27
permalink: 0221/
---

After sharing the [first interesting problem I had run into](./0220/), Sam and I spent a few more days working on this experiment. I had hoped to finish this write up before [attending JMM 2024](https://www.jointmathematicsmeetings.org/meetings/national/jmm2024/2300_program_thursday.html#2300:AMSCOEPAN) but life was more important. In any case, time for an update.

If you want to skip to the end, here's [a link to the (now public) repository](https://github.com/pkra/laml-wc/). You can just browse through the git history if you prefer - I stopped at [this commit](https://github.com/pkra/laml-wc/commits/main/?before=52c8ee52dacc396b208492bcd947f406e4866935+35) when finishing up.

## unexpected pains

An overly large chunk of work went into fixing up the example document. That was probably inevitable. I wanted to start with a pre-existing source to avoid the trap of writing content to fit the tools. As a consequence, I had to hunt down markup inconsistencies from 6 years ago including times when I had to just shake my head at my former self (`role="bla blub"` - I don't even).

Along similar lines: Sam at some point decided to rename all custom element tags. That was an easy challenge and a good reminder of real world editing with co-authors.

## that counter problem

As I wrote [last time](./0220/), counters turned out to be a slightly curious problem so I adjusted the code with the knowledge I had gained around CSS counter issues. Another "fun" fact I learned is that `display: contents` breaks counter increments - which is one of those "makes sense and yet I'm annoyed" moments. Since I was using contents to fake sub-grids, that particular case would resolve itself easily in 2024.

Anyway, for theorems, I ended up going with the simplest approach of using `this.closest(bla).querySelectorAll(this.tagName)` to find the index and magically populated cross references with that. Performance wasn't an issue even on this reasonably large (~80pp) document - and even less of an issue for reasons given below.

## wasting time

I also wasted a modicum of time customizing the enunciation element to allow proofs to re-use it, only to realize that I don't like this at all. A proof and its label are different to me (in more than one way) so now they have their own, simpler custom element inserting `<proof-label>Proof.</proof-label>` if no such element exists.

Of course there were plenty of bugs to fix in the new code. You might say it's because I was just fooling around instead of doing it "properly", say via test driven development ([which you should totally go an learn from Baldur](https://www.baldurbjarnason.com/courses/uncluttered/)). But that was kind of the point of this. I wanted many "oops, this was stupid"-moments. In the end, a lot of that work came from re-using our source of our 6-year-old experiment instead of starting with a clean slate. However, I would like to think that it gave some grounding - and serendipity.

## a little bit design

After I had done the first bit of work on elements, it was time to think a little bit about design. Just something small, to get things going. And somehow I started to think about print (of all things) because I was doing something similar at work. So I dragged out [pagedjs](https://pagedjs.org/) and started tweaking print styles. While it started out fun, I fairly quickly hit a mental wall. What was I doing looking up LaTeX class files (of all things)? The idea was to do something for&on the web! 

So I stepped away for a while. I dreamed up a few cool things (sequential diagrams! scroll linked animations! interactive highlighting!) and then faced the reality of the effort that would take, especially during a normal messy daycare/school fall (one germ hitting the family after the other).

I finally settled on something simple - a few flashy colors, a lot of grid, vertical writing, sticky positioning, silly borders for various enunciations. And yes, some traditional print styles are in there. All this should eventually hint at how different the presentation can be.

At some point pagedjs starting crashing on me so there currently isn't a flashy pagedjs print demo. I think I know the problem so I hope I find time to add this back (stay tuned for another update?). What I really want is time to explore print CSS more seriously.

Is the design well thought out? Not in the slightest. Are there bugs in the design? Yeah! Plenty. But, again, still not the point right now. Polish can come later (if ever).

## that sweet SSR magic

Here's the weird thing. When people think of web components, they think of something interactive. Because, after all, isn't HTML enough for "just content"? And really, should you be relying on JavaScript when you can just ship static HTML?

I agree. But the point of this experiment is not (just) the final content, it is also the creation thereof. There's plenty of writing about the perils of favoring developer experience over user experience. And using web components for writing content seems like just such a DX trap. 

I hope to avoid it by thinking about server-side-rendering (SSR) from the start. In the end, a custom tag is valid whether or not it is ever registered as a custom element.

So the ideas is to use SSR to magically render components out of existence, or rather: compile them out so that the document no longer needs JavaScript just for the static content. (I definitely don't want to get rid of the custom tags.)

That's easy enough. I love [linkedom](https://github.com/WebReflection/linkedom) for this kind of thing - it's small, it's  fast, it's simple to use - and we can just dynamically import our web component code:

```js
import { parseHTML } from 'linkedom';
import fs from 'node:fs';
const {
    document, customElements,
    HTMLElement
} = parseHTML(fs.readFileSync('./m522.html').toString());
// make some globals so customelements.js can find it
globalThis.HTMLElement = HTMLElement;
globalThis.customElements = customElements;
globalThis.document =  document;
// upgrade/render our elements
await import('./customelements.js');
// save
fs.writeFileSync('ssr.html', document.toString());
```

Done. 

Naturally, I can't stop there. I love MathJax most when I use it in an SSR setting so [I added that as well](https://github.com/pkra/laml-wc/blob/52c8ee52dacc396b208492bcd947f406e4866935/mj.js). Well actually. It turned out to be slightly harder. Because I was lazy and the way MathJax detaches nodes, my components were connecting twice, causing duplication. That took a second to work around lazily. I also found a bug which Andrea rejected a while back (I like his opinionated OSS style!) so I added a polyfill and [let the MathJax folks know](https://github.com/mathjax/MathJax/issues/3134). Another second gone.

Next on my list was building a dedicated pagedjs output but as mentioned, pagedjs started crashing on me so I haven't returned to it. It's just as simple, obviously.

## bits and pieces

While wrapping things up at the end of last year, I did a few other tweaks. I DRYed up the code to generate enunciation variations. I renamed `name-` elements to `h-` because at this point they were only serving as headings. I renamed Sam's lovely `blame-` tag to `e-title` (which probably should become `enunciation-title` for clarity) because I've grown accustomed to this use for the words label and title. 

Finally, Sam asked for a table of contents so I add simplistic toc- element that populates itself. Speaking of conversations, Sam was surprised that I turned almost all cases of `*...*` markdown syntax into `dfn` elements. That's somewhat unusual since you'd usually choose `i` or `em` for this. However, I noticed that almost always these were used for "inline definitions", e.g., in proofs. We have [a tag exactly for that](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn); we should use it. And maybe one day Volker will do what we wanted to do years ago and teach speech-rule-engine to pick up definitions to leverage in its heuristics.

## what's next

So there you have it. A first somewhat longer experiment. And always more to do.

For example, I need to rewrite the cross-references code to emit from the target element. The reason is twofold. First, the target may not yet be in the DOM when the reference connects, thus things get complicated; that's only half a reason because the same argument applies the other way around.  Second, the code for cross references would otherwise become weird - so far it's only been enunciations but when sectioning, figures, equations come into play, the code would become this convoluted list of separate cases.  I think I'd much rather keep the code for links with the code for targets. As a result, we won't need a custom element anymore - an `a` tag will do just fine.

Next there are some accessibility considerations to take care of. For example, our generic heading element should label its sectioning element. I also prefer enunciations as figures with captions; it fits well semantically and AT provides nice affordances around them. I'll probably just use ARIA directly here but maybe I'd really like to have time to see how `extends` holds up. Maybe more ideas will stop by. And I think I already spotted some unfortunate limitations in the current state of the AOM so that will be fun to dive into.

Then there's the bibliography. The sample lecture notes didn't have one so I disabled the old code for now. We need to try things out in a document that has them (or add some for testing). 

At this point, I still feel pretty good about this. It developed the way I expected and new ideas are still becoming apparent. Complexity is still low (~100 lines of JS, ~500 lines of CSS, both pretty simple stuff). Pop over to [the code](https://github.com/pkra/laml-wc/commits/main/?before=52c8ee52dacc396b208492bcd947f406e4866935+35) or just [the live demo](https://pkra.github.io/laml-wc/) if you like and let me know what you think.

I hope I have more time and inspiration to work on this. Why, Sam even threatened to write something with these components. Now wouldn't that be something.
