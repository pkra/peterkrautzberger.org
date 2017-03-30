---
layout: post
title: Experiments with ARIA in math rendering
date: 2017-03-30
permalink: 0192/
published: true
---

It's been almost a year since we launched the [W3C Math-on-web Community Group](https://w3c.github.io/mathonwebpages/). The initial meetings were a bit all over the place and as you might expect, there are far too few people who have the resources (and inclination) to think about math on the web openly.

Still, there's now a small but clear core within the CG together with a useful group of "lurkers". I think this year we're entering the productive stage for this community group.

The dominant interest of the core group (i.e., the people actually doing work) is accessibility. What surprised me somewhat was that the core group seems to be in agreement that MathML is not suitable for accessibility, not just because it is effectively deprecated on the web but also because of its inherent limitations. (If you care for nuance and read on, this doesn't mean MathML isn't a decent intermediary for creating accessible web content.)

My own focus has been on "deep labels" which will now tie nicely into our work at MathJax for our recent [grant from the Simons Foundation](https://www.mathjax.org/simons-grant-2017/). The idea is quite simple, really. 

* Math on the web today is effectively void of semantic information that could be passed to [the accessibility tree](http://whatsock.com/training/). (This includes MathML even if tools like [speech-rule-engine](https://github.com/zorkow/speech-rule-engine) will convert MathML into another, semantic format using heuristics.)
* In the real world, math on the web is represented as HTML and SVG representations, producing suitable visual layout and information for the accessibility tree.
* ARIA provides the tools for enriching HTML and SVG in a way that improves the rendering to the accessibility tree.

Thus I've been building and testing demos that work with what we've got -- HTML and SVG enriched via ARIA.

While I'm currently building manual prototypes, obviously one eye is on our work on the speech-rule-engine, i.e., keeping automation of the process in mind. Similarly, I've been trying to think about potential improvements to standards that might give us much larger improvements / simplifications (but that's for another post).

At the same time, while automated analysis of content will only improve, I think manual overrides will continue to be critical. Whether it's to fix a poor result from the heuristics or whether it is to customize content (e.g., to match author preferences).

Obviously, I didn't want to enrich the output but the input. Given that these demos work with MathJax, the natural starting point is MathML (since that's MathJax's internal format). But MathML isn't really special or better than any other format; whatever input format your favorite tool uses, the same methods should be applicable (though some things will undoubtedly be harder/easier to do in other formats).

MathML in itself lacks the means to provide meaningful information to the accessibility tree; at most, it can present (pretty vague) layout information, combined with some misleading information on semantics (e.g., thinking that `<mfrac>` always indicates some kind of fraction). But MathML has the benefit of being XML so we can easily add ARIA attributes without running into practical issues.

Here's a very simple but typical example: a common notation for the derivative of a function is a dot above it. In MathML, this is usually realized as an `<mover>`.

```
<math>
    <mover>
        <mi>x</mi>
        <mo>&#x02D9;<!-- ˙ --></mo>
    </mover>
</math>
```

You might be tempted to think that the "real" solution would be some kind of semantic markup (e.g., using [`<diff>`](https://www.w3.org/Math/draft-spec/mathml.html#chapter4_contm.diff)) but in the real world, the content is what it is and you want to enhance it. 

Now even the simplest MathML accessibility tool should have the sense to voice the Unicode content ("x, dot above") but it might also try to convey the layout information of an `mover` ("x with dot over it"). But it shouldn't try anything beyond that because the markup does not provide more information than that. In reality, those few tools with decent heuristics will easily cause issues, e.g., any superscripted 2 is read as "squared".

Unfortunately, a dot above can mean other things besides "derivative of", depending on the context and content -- if you ever run into a dot above an equal sign or a digit you'll probably guess that the dot does not represent the concept of a derivative of (then again someone probably used it that way so have fun figuring that one out).

So it's a mess.

Let's use what ARIA has given us to make it less of a mess: a simple and efficient means of providing meaningful textual alternatives for visual presentation:

```
<math>
    <mover aria-label="derivative of x">
        <mi>x</mi>
        <mo>&#x02D9;<!-- ˙ --></mo>
    </mover>
</math>
```

This is obviously a very simple example. The most immediate questions are probably:

- Can you enrich arbitrary MathML constructions this way?
- Does this have the desired effect in the wild, in particular, if MathML is converted to HTML or SVG?

I believe the answer to both is yes.


### The real world

The main demo I built is work in progress. It is available [on Codepen](https://codepen.io/pkra/pen/xRBZjq) and I recently started versioning it [as a gist](https://gist.github.com/pkra/3dc56add129faa2def1452602985983d).

The demo covers several examples that hopefully already cover many common situations and I'll continue to work on them. 

A lot of tweaking happened once I started to test this in screenreaders in earnest. 

#### hacks

One of the first problems I ran into is what James Teh described in [Woe-ARIA](http://blog.jantrid.net/2015/12/woe-aria-surprisingly-but-ridiculously.html): it's not always clear what AT should expose when we muck about by aria-labeling things like this.

Inevitably, I also needed a common accessibility hack,  "off-screen" rendering of content. As a simple but extremely important example, you need this when facing the fact that, in MathML's `<mfrac>` the fraction bar is only implicit and thus lacks an node we could attach a label to (arguably the biggest <s>WTF</s> collision between traditional math rendering aka print and web markup). 

I currently favor a somewhat convoluted solution:

```
<mrow aria-label="screen-reader only"><mpadded width="-1em"><mphantom><mtext>M</mtext></mphantom></mpadded></mrow>
```

The main advantage is backward  compatibility and re-usability because this should render in any MathML renderer without (many) side-effects. It also (in part) gets us around the "ARIA-woe" or the fact that an empty `<span>` with `aria-label` should be ignored.


#### Testing

So far I've tested NVDA, JAWS, VoiceOver, Orca, and ChromeVox in several browsers. Some recordings are already available in [a dedicate playlist](https://www.youtube.com/playlist?list=PL1ATLkPgTEBqYOb7CYz7Kv6gNHh_pXbQq) on MathJax's YouTube channel. Since I didn't want to add commentary, they are a bit difficult to follow so the summary below should be helpful.


##### NVDA

* SVG
  * IE 11 (Windows 7) 
    * reads whole expression
    * allows exploration
    * repetitive voicing "graphics" and "outer graphics" during exploration; I believe that's caused by browser/OS.
* HTML 
  * IE 11 (Windows 7)
    * reads whole expression
    * allows exploration
    * ignores `aria-label`s completely

###### VoiceOver 

OSX El Capitan

* SVG
  * Safari 10 
    * does not read whole expression
    * reads first label in SVG when trying to explore
  * Chrome 54
    * content not exposed (complains about missing title)
  * Firefox 51
    * does not read whole expression (just "unknown")
    * allows exploration 
    * reads "unknown" following each exploration step
* HTML-CSS 
  * Safari 10, Chrome 54
    * reads whole expression
    * allows exploration
    * with duplicate content in label, repetitive voicing "group" (which gets to be nagging during exploration)
    * character exploration leads to double voicing if aria-label duplicates the text content
  * Firefox 51
    * breaks all the things (all it voices after rendering is 'busy')
* original MathML
  * Safari 10, Firefox 50
    * ignores aria-labels (just provides VO MathML voicing)
  * Chrome 54
    * content not exposed (bug in Chrome)

###### Orca

Orca 3.20, Ubuntu 16.10

* SVG
  * Firefox 51
    * reads only first label when reaching SVG
    * allows for exploration
* HTML-CSS
  * Firefox 51
    * ignores aria-labels
    * reads Unicode content
* MathML
  * Firefox 51
    * ignores aria-labels (just provides ORCA MathML voicing)
 

#### JAWS

JAWS 17, Windows 7

* SVG 
  * IE11
    * reads whole expression
    * allows exploration
    * reads content very poorly, e.g., "derivative of x" gobbled together as "derivativeofks".
  * Firefox 51
* HTML-CSS
  * IE 11
    * ignores aria-label content
    * reads Unicode content
  * Firefox 51
    * 
* MathML
  * IE11, Firefox 51
    * reads "error describing element with math content" on every expression

#### ChromeVox

ChromeVox v53

* SVG 
  * Chrome 54
    * reads whole expression 
    * does not allow exploration
* HTML-CSS 
  * Chrome 54
    * reads whole expression 
    * allows exploration 
    * reads content poorly, e.g., ("x y" as "xi")
    * during exploration, just reads Unicode content (not labels)
* MathML
  * Chrome 54
    * ignores aria-label (provides ChromeVox MathML voicing)


##### Recap

As you can see, the results are mixed. For each combination of AT+browser+OS, there's some combination that works roughly as expected but that's about it. SVG seems a clear winner despite VO's reluctance; I need to explore`title`/`desc` a bit further (which has different support levels).

Still, I think the situation is already better than what MathML can give you today, in particular because the few significant issues are nothing particular to MathML or math, they're just annoying SVG or HTML accessibility issues, many of which can be easily fixed (as opposed to implementing good math support based on MathML). The fact that MathML accessiblity tools fail to support aria-labels is not surprising, of course, and a typical example of how MathML support (as little as it is) continues to fall further and further behind HTML and SVG. And that's a good thing.


Now some might see this "fixed" enrichment as a step back compared to MathJax's Accessibility Extensions (using speech-rule-engine on the client) because the extensions can provide numerous speech rules and verbosity settings as well as summary information. I would disagree. I've never been a fan of varying speech rules (just like I wouldn't be a fan of AT re-arranging a sentence). Also, speech rules mostly differ by newer ones being more refined than older ones. 

Verbosity is simply a general accessibility problem and it should be dealt with in generality (as it already is, e.g., for punctuation). Summary information is a great problem but really a limitation of current web technology and something that's just as needed for infographics or data visualization as it is for mathematics. We do not need isolated solutions here either.


### What's next

Simple: more testing.

On the one hand, testing more AT combinations and evaluating other approaches. On the other hand, creating more and complex samples.

Others on the MathOnWeb CG have tried different approaches and so we will also work on getting feedback from the accessibility community in general, in particular figuring out how improved standards might help us.

For me personally, the goal is to develop a strategy for next year's work at MathJax where we want the speech-rule-engine to add deep labels directly. I think that would solve the last major piece of the puzzle for math on the web in its current form. Then we can finally leave the legacy approaches with isolated standards and tools behind to focus on moving the web forward as a whole.
