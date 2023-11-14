---
layout: post
title: Web components for (mathematical) writing, a first problem
date: 2023-11-14
permalink: 0220/
---

So a while back - checks notes - *ahem*, 6 years ago [Sam](https://scoskey.org/) gifted me with some of his precious time to do [a fun little experiment](https://github.com/pkra/laml/) around writing mathematical long form using the web. With "using the web", I don't mean writing markdown or LaTeX (or whatever) and converting that to HTML. Instead, I had this weird idea that we could actually use the web platform - HTML, CSS, JS - to write content. Sounds crazy, right?  

Well, it kind of was. We gave up after a few months (due to life in general but also after getting stuck on paragraphs of all things) and I have been meaning to come back to it ever since.  At the end of October I was finally of a mind to do just that. 

Back then I had already wanted to restart this as an experiment in [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components), getting a chance to do more than write a few dummy components.  I'm not very far along but there have already been a few lessons for me. Instead of [spending](/0218) [years](/0220) on a blog post, I thought I'd try to jot down a first problem I ran into. If only because then I'd document my thoughts a little.

One of the many reasons that Sam was relentelessly helpful back then is that he is a working mathematician (as opposed to myself). So when I think about a possible user experience for writing long form mathematical documents he is the kind of user I'd turn to -  knowledgeable and open to exploring new ideas. Obviously, we both grew up mathematically with LaTeX so that was a base line in terms of UX. You might think LaTeX would not be a high bar but of course muscle memory for any system develops a UX of its own. I mean, you'd think just showing someone [emmet](https://docs.emmet.io/) and modern linting&debugging tools would be amazing for people stuck in TeX's Chomsky-Type-1-maybe-0-hell. 

Perhaps needless to say but just because we started out from the point of view of a working mathematician doesn't mean that there's not something to be found that benefits a wider audience.

Anyway. Let me focus on my first steps starting fresh. So. The idea is to write some web components that magically solve particular challenges or pain points. Let's collect a few.

A central item for mathematical writing is first-class support for *enunciations* (as the [AMS style guide](https://www.ams.org/arc/styleguide/index.html) lovingly calls them), that is definitions, theorems, propositions, lemmata, remarks etc. - and the ever problematic proof environment.

Another item that makes TeX great is automation around counters. A particular key to magically populating labels of various things - sectioning elements, figures, enunciations, and equations - with (sometimes too much) control for resetting and adjusting them.

Finally, a central item is magic around referencing - just specify the ID and you get a lot of magic to fill those references. Even more so if you use fancier packages like cleverref.

As a first test, those felt like a good set of items: enunciations, automatic labeling and magical cross-references.

## Generating content with web components

We want our HTML simple. In emmet terms: type `thm->p`, then hit <kbd>TAB</kbd>, finally write the first paragraph. 

```html
<thm->
    <p>This is amazing</p>
</thm->
```

That's nice. [Fun fact: custom elements need a dash and `thm-` is valid - though `-thm` is not.] 

But where's our label? Well, we can generate it automatically. Since I know I'll have plenty of variation, I start with a simple base element:

```js
// enunciation base
class enunciation extends HTMLElement {
  // no boilerplate to keep this short
  connectedCallback(name = 'Enunciation') {
    // this.setAttribute('role', '???'); // let's get to that another time
    this.insertAdjacentHTML('afterbegin', `<enunciation-label>${name}</enunciation-label`)
  }
}
customElements.define('enunciation-', enunciation);
```

Long names are ok, I think, since this element is not meant to be used directly; verbosity is not the problem here but hopefully helps with understanding the output. [Or not, let's not tie ourselves down this early.]

When this element is enters the DOM (or more likely: gets upgraded), it will generate a label, containing a customizable name. (Should I use templates and slots? Should I look into mixins? Way too early to answer, I think. Let's stay naive as long as we can.)

Anyway, the key thing is that we can pass an argument to `connectedCallback` which we do in our actual theorem element:

```js
// theorem
class theorem extends enunciation {
  connectedCallback() {
    super.connectedCallback('Theorem');
  }
}
customElements.define('thm-', theorem);
```

Fair enough, we have generated our label - and a prototype to base other enunciations on. Let's move on.

## CSS counters are sooo lovely (until they aren't)

For automatic counters, CSS goes very well with our components.

Just add

```css
thm- {
  counter-increment: thmCounter;
}
thm- > enunciation-label::after {
  content: " " counter(thmCounter) ". ";
}
```

Sweet. This seems super simple.

Resetting CSS counters is also trivial; typical variations in mathematical writing such as adding a title alongside the label or an option to surpress the label would be straight forward next steps. 

However, let's ignore these tempting side quests and move on again so we can run into trouble.

### Call me by my label

At first, the third item seem equally easy: magic cross references with web components.

Obviously, we need a point of reference and a reference to it. Let's adjust our theorem example; in emmet terms: `thm#thm>p`. Also, add a paragraph with a cross-reference to that ID, maybe (in emmet) `ref[target=thm]`.

```html
<thm- id="thm">
    <p>This is amazing</p>
</thm->

<p>Have you heard about <ref- target="thm"></ref->?</p>
```

Could be that `target` is too long but I like readable strings. In any case: what should `ref-` do? Well, just find the label of the theorem and use that, obvs.

```js
class crossreference extends HTMLElement {
  connectedCallback() {
    const targetId = this.getAttribute('target');
    this.innerHTML = `<a href="#${targetId}">${document.getElementById(targetId)?.querySelector('enunciation-label')?.innerHTML || targetId}</a>`; // maybe prepend so authors can add parenthetical notes?
  }
}
customElements.define('ref-', crossreference);
```

Finally, I run into trouble. The resulting link just says "Theorem", not "Theorem 1". That's not super helpful (and clearly fails [WCAG 2.4.4](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#link-purpose-in-context)). But of course that's my mistake - the `innerHTML` is "Theorem", after all. 

So how do you get the pseudo-element's content? As you might do, I hit the usual search engines to figure out if it can be done. In the process, I found some ancient stackoverflow posts - but it's not too helpful to know this didn't work in 2008. 

I eventually remembered that getComputedStyle can look up pseudo elements. But unfortunately it gives us `" " counter(thmCounter) ". "`- very much correct and very much not what I want. (Reminds me of an old joke about mathematicians, fog and a hot air balloon, actually.)

So [I asked my fedi bubble](https://bonn.social/@pkra/111314587141501059) and kind people helped - only to confirm that it's [not doable today](https://github.com/w3c/csswg-drafts/issues/5879), despite having been [discussed by relevant people (approvingly) 9 years ago](https://discourse.wicg.io/t/query-live-counter-values-via-cssom/415/13). 

Shucks.

### This is why we can't have nice things

I guess we'll have to realize the wonders of CSS counters in our custom elements instead. Hold my beer? 

Ok, maybe just a counter for what we need? Either way, then we can populate the label with the actual counter directly, and references will start to work. A quick & dirty solution might be something like this

```js
class enunciation extends HTMLElement {
  connectedCallback(name = 'Enunciation', counter) {
    this.insertAdjacentHTML('afterbegin', `<enunciation-label>${name}${(counter ? ` ${counter}.` : '')}</enunciation-label`)
  }
}

class theorem extends enunciation {
  connectedCallback() {
    this.counter = ++theorem.counter;
    super.connectedCallback('Theorem', this.counter);
  }
}
theorem.counter = 0;
```

Well, that feels quick and dirty. But it also raises some questions.

As I already mentioned, CSS counters offer a lovely resetting mechanism - just something like 

```css
section {
    counter-reset: thmCounter;
}
```

to reset the theorem counter at the start of each section. I need something for that as well.

I guess if I have a custom sectioning element, say `chapter-`, I could try resetting this:

```js
class chapter extends HTMLElement {
  connectedCallback() {
    this.setAttribute('role', 'doc-chapter');
    theorem.counter = 0; // (don't do this)
  }
}
```

Even if I make that work, what would I do for a regular HTML sectioning element like `article` or `section`? Well, I can't. Instead, I'll have to exclusively use custom elements for sectioning (`sec-` maybe?), so I can do this kind of a reset. [Though maybe that's not a real problem since I probably want `ref-`s pointing to sections.]

It was funny how dirty this reset felt to me. I mean, it is how CSS does it, right? Then again, perhaps `counter-reset` is an excellent footgun on the CSS end? I admit I've never used it outside of lists.

Anyway.

To keep the counter logic in the theorem element, I need to find out how many theorems precede the current one. Maybe a quick&dirty while-loop along `previousElementSibling` is enough - if you're a super clean author and theorems with related counter values are surely siblings, good for you, I'm probably not. I could also go full on DOM treewalker to walk up the DOM to find the previous theorem, read its counter, increment it (with some break condition to match the counter reset desires).

As with everything I've written here, I have no answer, but at least a few ideas. For now I'm taking what feels like the middle ground - find a closest ancestor of my (reset-)liking, look at the reset's descendants, use the current element's index therein.

```js
const siblings = [...this.closest('section').querySelectorAll(this.tagName)];
super.connectedCallback('Theorem', siblings.indexOf(this)+1);
``` 

The end result seems good enough for now; easy to muck about, learn, try something. 

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="rNPeBKR" data-preview="true" data-user="pkra" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/pkra/pen/rNPeBKR">
  Theorems with counters, part 1</a> by Peter Krautzberger (<a href="https://codepen.io/pkra">@pkra</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

The code is so trivial that I can throw it away once I've learned more (e.g., how about "Theorem 2.1"? should that label be inside the first paragraph? What role to use?).

As an aside, the links earlier point to [target-counter](https://drafts.csswg.org/css-content/#target-counter) from the CSS Generated Content Level 3 spec where you'll also find target-text. Besides not having gained any traction I admit I find those three oddly unappealing. It seems more natural to me to have "getComputedText" to access the actual pseudo-element value, e.g., when `attr()` is involved. But perhaps I'm too JS-oriented here; it just seems to me like people would need this anyway to cover more ground. And maybe it's lower hanging fruit.

In any case, surely there's more trouble ahead. On the bright side, I know this will continue to work for a very (very) long time thanks to the backward compatibility of the web platform. (Definitely longer than the LaTeX stylesheets from my PhD thesis.) And once counters catch up, I can simplify.

In the end, this first set of experiments has worked out as I'd hoped. It got me thinking (and learning) about web components again, about limitations of the web platform, and about writing itself. More than I expected to get to in a few evenings.

In the mean time, I've continued this journey a bit further. But that's another story for another time perhaps.
