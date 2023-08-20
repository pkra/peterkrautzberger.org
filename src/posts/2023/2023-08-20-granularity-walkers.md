---
layout: post
title: Granularity walkers for textual descriptions
date: 2023-08-20
permalink: 0219/
---

I started volunteering at an elementary school this year, helping kids learning to read. I'm not an elementary school teacher (and no amount of university teaching would save me) but luckily anyone who can read can help; it's all about patience and the simple reality of being present for a child. One of the textbooks typesets syllables in different colors to help the inexperienced readers. This simple typograhic tool reminded me of a problem I've been thinking about for a while now: enabling users on the web to adjust the granularity of textual descriptions.

Before we get started, let me give you a quick overview over what to expect in this awfully long bit of rambling on my part. First, I'll try to give you a rough outline of the thinking behind this idea, followed by a couple of code examples and the reasoning behind their evolution. Finally, there'll be a more fully fledge example, including demos on the authoring experience and the user experience (across major screenreaders).

When I have to provide a textual description, it often helps me to strike up a conversation with someone without access to the object or context (e.g., over the phone). Rubber-ducking such a conversation works, too, e.g., think about it as a form of conversational chatbot (well, if such a thing actually existed without irreperable damage to society). Reversely, you could try and coax a description out of a child. Anyways.

What happens naturally in my experience is that you'll start from a coarse description (say, "it's a photo of a cat") and then naturally progress towards finer and finer details. For example, "it's a black and white photo, a cat appears in close-up, with black fur but white paws, prowling right-to-left through a grass field; the background is out of focus but appears to show a clear sky above a winter landscape of a snowy field with snow-laden conifers far off to the right").

Now such results may not be good advice for when you're asked to create a bespoke textual description because, e.g., in the context of WCAG, textual alternatives are there to serve the same purpose as what they describe. However, often you can tweak this approach to fit the relevant context. So if it's, say, a picture shown to exemplify a particular cat breed, then you'd focus on more and more details relevant to differentiating cat breeds such as coat length and pattern.

Sometimes you are also simply in luck and you have extremely detailed descriptions for the exact purpose at hand. This happens, for example, with content that is generated from rich, heavily annotated (or annotatable) data such as [archival images](https://iiif.harvard.edu/mirador-viewer/), [data visualization](https://jupyter.org/), [diagrammatic content](https://mermaid.js.org/), or [print equation layout](/0218).

In such situations (or, you know, when the kid you're talking to is very chatty) you can easily have an *overwhelming* amount of information that could be useful but is probably confusing for users if you use all of it as textual description. That's why we have [an abundance of techniques around long form descriptions](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html#non-text-content-situation-1).

While it's great to have textual descriptions available to everyone, I think there is a specific boon to annotating <em lang="la">in situ</em>, so to speak. That means, not just having concise descriptions at the location of non-textual content but have overly verbose ones there, too. The former enables users to efficiently access the context as whole, the latter enables them to deeply dive into the particulars of the content that is being described, immerse themselves, relish in the details.

Ideally the levels of detail are malleable so that you enable the user to decide which level of detail they need in the flow.

## web accessibility for complex content isn't great

This might be a bit controversial but I think web accessibility doesn't really do much for complex content. HTML deals with "documents", whatever that means, but provides only a fairly minimal set of content structure - sectioning, headings, lists, figures, tables - before you grab a generic element. Even in contemporary HTML there isn't much for complex, non-interactive content. Sure, tables are kind of neat from an accessibility point of view - but they are for data. Figures have some nice logic with grouping and captioning at least, but are very specific in scope. When I think of contemporary HTML improvements, I think of dialog, popup, select menu. All are important, none of them are helping with complex "static" content. I always feel that SVG is overlooked in this context but it does provide a notion of graphic document and it does cover basic geometric shapes.

ARIA doesn't go much beyond HTML when it comes to content. Yes, there's the dpub-aria module which in my eyes suffers too much from its epub history to be useful to users. You might say it's simply in the name: ARIA stands for accessible rich internet applications, after all. If you've followed the recent discussion arount aria-flowto, you'll have noticed that a fair number of experts feel that ARIA provides too little for complex diagrammatic content such as flow charts. The same is true for many data visualizations or simply complex drawings, collages, annotated archival images etc. All of these are "static" (even if easily responsive these days) but their exploration is usually very complex.

Just take the classic meme with a pin board detailing a conspiracy theory, full of photos, newspaper clips, and notes, chaotically connected by strings across the board. How would you make that into an accessible piece of content on the web?

One good answer is indeed: applications. Maps are a good example for that because they've embraced the dynamic abilities of the web. Digital maps have moved so far away from their print origins - it's hard to actually get a decent print product out of them again (not the least of which are the many many options you have nowadays).

Another good answer is: use the infinite canvas of the web to simplify through deconstruction. What I mean by that is that much complex content comes from print traditions where you have to cram a lot of information into the limited dimensions of print formats. On the web, you can often untangle content into smaller pieces that are more usable (and accessible). Perhaps you do this by breaking the complexity down into several steps. For example, a school-level geometric construction in a print publication (or, sadly, on the web) is often overlaying many steps at once rather than creating many diagrams for the individual steps. Such a series of diagrams would be far less complex to convey non-visually as the individual step's description can focus on a small amount of changes, despite the overall complexity. You can even still combine these back to a single graphic if you need.

So, at the very least in theory, I believe we could often use the infinite size of a web page or even a series of web pages to achieve an accessible presentation where the print equivalent would be nigh impossible to make accessible.

And yet, when push comes to shove, it's not easy. We lack traditions. As a result, it's easier to build an accessible, vastly complex autocomplete searchbox today than to build an accessible version of Gray's Anatomy or Byrne's version of Euclid's elements.


## Users before authors before implementors

Call me oldfashioned but I put my trust in authors. Maybe it's out of desperation; without authors, there's nothing for users and implementors can implement all they like, it doesn't matter without authors. [Shout out to all the web developers still building with floats and jquery today!]

So if we lack traditions, we must build them. No amount of wishing for magical solutions from the print era will help us. Yes, a braille embossable version of a complex diagram is a fantastic achievement to pull off from the same source as your print content. But does that help us move everyone forward?

For me this also means that those who build tools should build them so that they're easy to be adapted by authors. Education, it's a thing. 

Obligatory Baldur Bjarnason quote:

> Idle thought: most Open Source Software, certainly most OSS on npm, shouldn’t be OSS but should instead be educational resources 
> https://notes.baldurbjarnason.com/2021/05/03/idle-thought-most.html

## trees, may be too complex

But I digress. If you have followed my previous attempts at exploring accessibility patterns for complex content, then you might ask: Peter, didn't you say the ARIA tree pattern is the great solution? (If you don't, here's a quick recap: way back when, I got David Tseng, Volker Sorge, and Davide Cervone to create a minimal version of the ChromeVox/Speech-Rule-Engine/MathJax's walker that would work on server-side rendered MathJax output. Later, Volker helped me stabilize that into a small library and I continued to "dismantle" it so that it [became more of a multi-purpose tool](https://github.com/krautzource/aria-tree-walker).)

Anyway, I'm pretty sure I never said or wrote that but, clearly, I found many benefits from re-purposing this traditional ARIA pattern to complex content fragments. The tree pattern is well supported and comes with many nice conveniences for users. Hoever, I struggled for quite some time now to get where I really wanted to get with this pattern. 

Firstly, mobile support has proven elusive. Right now, I'm at a point where I think I understand things well enough to say that mobile AT is simply too limited to allow for how I re-purposed the tree pattern.

Secondly, it seems it's still too complex. Even MathJax v4's alpha failed to properly adopt it (despite my help) and I've seen few people trying to build on, say, the tikz examples in the code base, let alone any interesting different kinds of content (e.g., musical staff or chord notation, physics content such as Feynman diagrams).

Thirdly, the walker's focus management is a bit heavy handed - only one tree item is ever accessible - which feels like going against the grain of tree patterns (pardon the pun). Tree patterns should expose a more complex structure (even though I'd also say it doesn't do a great job in best real life scenarios either).

So, on and off over the past year or so - or 2 years since the first draft of this line is from 2023-02-03 - I've been thinking about starting fresh. Is there perhaps a better pattern out there? Maybe not an ARIA pattern but perhaps one that fits better nevertheless.

## granularity

There is a core feature of most assistive technologies that I kept returning to: changing the granularity of AT output. Any screenreader or read-aloud tool worth their salt will allow users to change the granularity at which they can explore the content. Usually, this goes from "everything" to paragraphs (or some form of chunking) and on to words and ultimately to characters.

This is obviously a good idea and a key feature to make web pages more understandable - form the big picture problem down to the smallest ambiguities such as homophones, heteronyms, or just plain spelling.

In other words, this is a good strategy for dealing with regular but complex text fragments - and if it's good enough for web pages globally, then it seems a decent assumption that a similar approach could help users locally, i.e., with highly structured, non-textual, content fragments. 

Users need to dive into some details but not others while at the same time we want to preserve a consistent structure across the content fragment. In other words, they want to change the granularity of the description. While some content fragments might indeed match other existing patterns (such as a trees), I think this might be one of the most basic constructs:

* finer and finer granularity when users want it
* with minimal changes, i.e., while keeping a good integration into the overall document flow
* without exploration ending up in isolation

I must admit to a feeling of retconning things when I originally added this section. There's a decent chance that I'm rationalizing post-hoc. At the same time, the affordances offered by AT to navigate plain text was very much a driving paradigm as soon as I realized the parallel.

Obligatory [abstruse goose comic #230 on writing proofs](https://abstrusegoose.com/230) (warning: no textual description there).

## naive attempts

How hard can it be? Well, really not hard at all. Especially if you don't care about accessibility right away.

The requisites

* a DOM fragment (e.g., an inline SVG, some HTML overlapping a graphic, or just some HTML), focusable so as to allow keyboard accessibility [I wished we had a way to create "light" interactivity without adding to the taborder but that's just not how things are right now.]
* annotated with some kind of consistent "level" information, i.e., some nodes have "levels", some of their descendants might have lower "levels".
* each element with a level has a good accessible name. [We'll see how this gets tricky but again that's just not how things are right now.]

I realize that "level" is a confusing word here (what with aria-level being a thing). You can call it whatever you like - granularity or chunk.

If we think about basic keyboard operations, then we could start with just up and down arrows. If our fragment is focused, hitting the down key should "unwrap" it to expose the level below it. If we hit the up arrow key, we should wrap the closest ancestor.

That's doable in a few dozen lines of code, depending on how much error handling you want to do. Here's an example - again, please be warned that this is not actually very accessible yet. To summarize, you can focus the DOM node, then use up and down arrows to change granularity - but the tab key will always move you around all chunks of the fragment (which might be at varying degress of refinement).

<!-- [experiment #3] -->

<svg style="max-width: 100%" width="640" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="experiment1" viewBox="0 0 640 300" style="max-width:100%;height: auto;" tabindex="0" aria-label="a rectangle containing several nested rectangles" data-level="0">
<script style="display:block">
function move1(event) {
  if (![38, 40].includes(event.keyCode)) return; // Only move on up/down arrow
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level")) return; // Only move if the currently focused element is the target and part of the game
  event.preventDefault(); // Avoid scrolling away
  changeLevel1(event.keyCode, event.target); // Do the thing
}
function changeLevel1(keyCode, activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (keyCode === 40){ //down 
    const newLevel = activeNodeLevel + 1; //increase granularity / switch to descendants
    if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
    activeNode.setAttribute("tabindex", "-1"); // take current node out of taborder
    activeNode
      .querySelectorAll(`[data-level="${newLevel}"]`)
      .forEach((currentLevelChild) =>
        currentLevelChild.setAttribute("tabindex", "0")
      );// add next level descendants to taborder
    activeNode.querySelector(`[data-level="${newLevel}"]`).focus(); // move focus to first descendant
  } else if (keyCode === 38) {  // up 
    if (activeNodeLevel < 1) return;
    const newLevel = Math.max(activeNodeLevel - 1, 0); // decrease granularity / switch to ancestor
    const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
    ancestor.setAttribute("tabindex", "0"); // add ancestor to taborder
    ancestor
      .querySelectorAll('[tabindex="0"]')
      .forEach((descendant) => descendant.setAttribute("tabindex", "-1")); // take "siblings" out of taborder
    ancestor.focus(); // focus ancestor
  }
}
experiment1.addEventListener("keydown", move1);
</script>
 <g>
  <g aria-label="The first inner rectangle containing other rectangles" data-level="1">
   <rect fill-opacity="0" height="290" stroke="#000000" width="310" x="3" y="5"/>
   <g>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="10" y="100"  aria-label="In the first inner rectangle, another smaller rectangle on the left" data-level="2"/>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="150" y="164.5" aria-label="followed by another smaller rectangle to its lower right, also within the first inner rectangle" data-level="2"/>
   </g>
  </g>
  <g aria-label="Then the second inner rectangle containing other rectangles, to the right of the first one." data-level="1">
   <rect fill-opacity="0" height="290" stroke="#000000" width="320" x="317" y="5"/>
   <g>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="330" y="200" aria-label="In the second inner rectangle, another, smaller rectangle in the low left" data-level="2"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="420" y="100" aria-label="followed by a second, smaller rectangle in the relative center" data-level="2"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="550" y="30" aria-label="followed by a third, smaller rectangle in the upper right of the second inner triangle." data-level="2"/>
   </g>
  </g>
 </g></svg>


There are obviously more clever ways of doing this, depending on your situation. For example, you might find it neat to avoid level values, opting to cleverly filter out lower descendants instead; or you could prefer to use just 2 alternating types of levels; or or or.

For my other goal, a key part is that ~30 lines of code seem fairly manageable to any user with a bit of JS knowledge. 

```javascript
function move(event) {
  if (![38, 40].includes(event.keyCode)) return; // Only move on up/down arrow
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level")) return; // Only move if the currently focused element is the target and part of the game
  event.preventDefault(); // Avoid scrolling away
  changeLevel(event.keyCode, event.target); // Do the thing
}
function changeLevel(keyCode, activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (keyCode === 40){ //down 
    const newLevel = activeNodeLevel + 1; //increase granularity / switch to descendants
    if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
    activeNode.setAttribute("tabindex", "-1"); // take current node out of taborder
    activeNode
      .querySelectorAll(`[data-level="${newLevel}"]`)
      .forEach((currentLevelChild) =>
        currentLevelChild.setAttribute("tabindex", "0")
      );// add next level descendants to taborder
    activeNode.querySelector(`[data-level="${newLevel}"]`).focus(); // move focus to first descendant
  } else if (keyCode === 38) {  // up 
    if (activeNodeLevel < 1) return;
    const newLevel = Math.max(activeNodeLevel - 1, 0); // decrease granularity / switch to ancestor
    const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
    ancestor.setAttribute("tabindex", "0"); // add ancestor to taborder
    ancestor
      .querySelectorAll('[tabindex="0"]')
      .forEach((descendant) => descendant.setAttribute("tabindex", "-1")); // take "siblings" out of taborder
    ancestor.focus(); // focus ancestor
  }
}

document.addEventListener("keydown", move); // add keydown listener
```

And of course the user experience relies on very simple primitives: up/down and tabbing.

## less naive attempts

What's missing here? On the one hand, usability, on the other accessibility (which are, in the end, one and the same).

In terms of usability, adding right/left to accompany tabbing seems rather straight forward. 

<!-- [ experiment #4 ] -->

<svg style="max-width: 100%" width="640" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="experiment2" viewBox="0 0 640 300" style="max-width:100%;height: auto;" tabindex="0" aria-label="a rectangle containing several nested rectangles" data-level="0">
<script style="display:block">
function move2(event) {
  if (![37, 38, 39, 40].includes(event.keyCode)) return; // only move on arrow keys
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level"))
    return;
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left
      moveHorizontally2(event.target, true);
      break;
    case 38: //up
      moveUp2(event.target);
      break;
    case 39: //right
      moveHorizontally2(event.target, false);
      break;
    case 40: //down
      moveDown2(event.target);
      break;
    default:
      break;
  }
}
function moveDown2(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.setAttribute("tabindex", "-1");
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) =>
      currentLevelChild.setAttribute("tabindex", "0")
    );
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
}
function moveUp2(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => descendant.setAttribute("tabindex", "-1"));
  ancestor.focus();
}
// the new thing: moving left/right
function moveHorizontally2(activeNode, isReversed) {
  const increment = isReversed ? -1 : 1; // forwards or backwards?
  const currentNodes = [
    ...activeNode.closest('[data-level="0"]').querySelectorAll('[tabindex="0"]')
  ];// grab all active siblings
  currentNodes[currentNodes.indexOf(activeNode) + increment]?.focus();//move focus forwards/backwards
}
experiment2.addEventListener("keydown", move2);
</script>
 <g>
  <g aria-label="The first inner rectangle containing other rectangles" data-level="1">
   <rect fill-opacity="0" height="290" stroke="#000000" width="310" x="3" y="5"/>
   <g>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="10" y="100"  aria-label="In the first inner rectangle, another smaller rectangle on the left" data-level="2"/>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="150" y="164.5" aria-label="followed by another smaller rectangle to its lower right, also within the first inner rectangle" data-level="2"/>
   </g>
  </g>
  <g aria-label="Then the second inner rectangle containing other rectangles, to the right of the first one." data-level="1">
   <rect fill-opacity="0" height="290" stroke="#000000" width="320" x="317" y="5"/>
   <g>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="330" y="200" aria-label="In the second inner rectangle, another, smaller rectangle in the low left" data-level="2"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="420" y="100" aria-label="followed by a second, smaller rectangle in the relative center" data-level="2"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="550" y="30" aria-label="followed by a third, smaller rectangle in the upper right of the second inner triangle." data-level="2"/>
   </g>
  </g>
 </g></svg>

With a bit of a refactoring, the additional functionality moves us up to ~60 lines of code.


```javascript
function move(event) {
  if (![37, 38, 39, 40].includes(event.keyCode)) return; // only move on arrow keys
  if (event.target !== document.activeElement ||!event.target.hasAttribute("[data-level]"))
    return;
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left
      moveHorizontally(event.target, true);
      break;
    case 38: //up
      moveUp(event.target);
      break;
    case 39: //right
      moveHorizontally(event.target, false);
      break;
    case 40: //down
      moveDown(event.target);
      break;
    default:
      break;
  }
}

function moveDown(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.setAttribute("tabindex", "-1");
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) =>
      currentLevelChild.setAttribute("tabindex", "0")
    );
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
}

function moveUp(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => descendant.setAttribute("tabindex", "-1"));
  ancestor.focus();
}
// the new thing: moving left/right
function moveHorizontally(activeNode, isReversed) {
  const increment = isReversed ? -1 : 1; // forwards or backwards?
  const currentNodes = [
    ...activeNode.closest('[data-level="0"]').querySelectorAll('[tabindex="0"]')
  ];// grab all active siblings
  currentNodes[currentNodes.indexOf(activeNode) + increment]?.focus();//move focus forwards/backwards
}

document.addEventListener("keydown", move); // add keydown listener
```

As a next step, let's go down a dead end. In some way, all of this originated with the idea to support click (or more specficially: tap) as an interaction method. Initially, I had hoped to get away with single click for down, double-click for up:

<!-- [ experiment #5 ] -->

<svg style="max-width: 100%" width="640" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="experiment3" viewBox="0 0 640 300" style="max-width:100%;height: auto;" tabindex="0" aria-label="a rectangle containing several nested rectangles" data-level="0">
<script style="display:block">
function move2(event) {
  if (![37, 38, 39, 40].includes(event.keyCode)) return; // only move on arrow keys
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level"))
    return;
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left
      moveHorizontally2(event.target, true);
      break;
    case 38: //up
      moveUp2(event.target);
      break;
    case 39: //right
      moveHorizontally2(event.target, false);
      break;
    case 40: //down
      moveDown2(event.target);
      break;
    default:
      break;
  }
}
function moveDown2(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.setAttribute("tabindex", "-1");
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) =>
      currentLevelChild.setAttribute("tabindex", "0")
    );
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
}
function moveUp2(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => descendant.setAttribute("tabindex", "-1"));
  ancestor.focus();
}
// the new thing: moving left/right
function moveHorizontally2(activeNode, isReversed) {
  const increment = isReversed ? -1 : 1; // forwards or backwards?
  const currentNodes = [
    ...activeNode.closest('[data-level="0"]').querySelectorAll('[tabindex="0"]')
  ];// grab all active siblings
  currentNodes[currentNodes.indexOf(activeNode) + increment]?.focus();//move focus forwards/backwards
}
experiment3.addEventListener("keydown", move2);
// the new thing: click
let isSingleClick = false; // quick&dirty global flag to identify single clicks
function handleClick3(event) {
  const realTarget = event.target.closest("[data-level]"); // Spoiler: what might be a problem with this?
  if (!realTarget) return;
  const activeAncestor = realTarget.closest('[tabindex="0"]');
  console.log(isSingleClick);
  if (event.detail == 1) {
    // it's a singleclick
    isSingleClick = true;
    setTimeout(() => {
      // wait for potential double click
      if (isSingleClick) {
        //if the flag is still set after the delay
        moveDown2(activeAncestor);
      }
    }, 200); // common delay advice from the intertubes
  } else if (event.detail == 2) {
    isSingleClick = false;
    moveUp2(activeAncestor);
  }
}
experiment3.addEventListener("click", handleClick3);

</script>
 <g>
  <g aria-label="The first inner rectangle containing other rectangles" data-level="1">
   <rect fill-opacity="0" height="290" stroke="#000000" width="310" x="3" y="5"/>
   <g>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="10" y="100"  aria-label="In the first inner rectangle, another smaller rectangle on the left" data-level="2"/>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="150" y="164.5" aria-label="followed by another smaller rectangle to its lower right, also within the first inner rectangle" data-level="2"/>
   </g>
  </g>
  <g aria-label="Then the second inner rectangle containing other rectangles, to the right of the first one." data-level="1">
   <rect fill-opacity="0" height="290" stroke="#000000" width="320" x="317" y="5"/>
   <g>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="330" y="200" aria-label="In the second inner rectangle, another, smaller rectangle in the low left" data-level="2"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="420" y="100" aria-label="followed by a second, smaller rectangle in the relative center" data-level="2"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="550" y="30" aria-label="followed by a third, smaller rectangle in the upper right of the second inner triangle." data-level="2"/>
   </g>
  </g>
 </g></svg>

Using click here is so poor, it's hard to call it functional. You have to hit the target you want to dive in or out of and that's hard.  But at least it wasn't a huge increase in code to test it out.


```javascript
// the new thing: click
let isSingleClick = false; // quick&dirty global flag to identify single clicks
function handleClick(event) {
  const realTarget = event.target.closest("[data-level]"); // Spoiler: what might be a problem with this?
  if (!realTarget) return;
  const activeAncestor = realTarget.closest('[tabindex="0"]');
  console.log(isSingleClick);
  if (event.detail == 1) {
    // it's a singleclick
    isSingleClick = true;
    setTimeout(() => {
      // wait for potential double click
      if (isSingleClick) {
        //if the flag is still set after the delay
        moveDown(activeAncestor);
      }
    }, 200); // common delay advice from the intertubes
  } else if (event.detail == 2) {
    isSingleClick = false;
    moveUp2(activeAncestor);
  }
}

function move(event) {
  // snip! same as before
}

function moveDown(activeNode) {
  // snip! same as before
}

function moveUp(activeNode) {
  // snip! same as before
}

function moveHorizontally(activeNode, isReversed) {
  // snip! same as before
}

document.addEventListener("click", handleClick);// add click listener
document.addEventListener("keydown", move); // add keydown listener
```

My driving motivation here was actually mobile AT users. The assumption being that they're focused on an element and triggering a synthetic click to explore. 

But as far as I know, I can't really access more than single-tap on mobile AT (in a browser). Sure, talkback can do a bit more if you expect two-finger input (so you could theoretically pick up on gestures). And sure, VoiceOver has its weird double-tap-and-hold mechanism for direct input (if you're able to pull that off as a user). 

I really wished we could have the equivalent of "focus mode" on mobile, too.

## well actually, accessibility

Anyway, let's leave click input for now and turn to non-visual accessiblity. As it turns out, there are a couple of problems we have to deal with. Namely, if you, say, use a screenreader in browse mode you might be annoyed that every single label is actually presented to you. Oops.

A particular goal for me here is to create a good user experience no matter the state of the fragment. The idea behind this is that users will know best what state is good for them. And whichever state of granularity they prefer should integrate smoothly into the surrounding content. 

Another goal stems form one of the reasons I went with an ARIA tree pattern before: the AT experience of easy access to focus-mode while transitioning through text in browse mode is really good, even for inline content (some weird Firefox bugs notwithstanding). Users can just hit enter while the content label is voiced or braille-displayed to jump to focus mode and then they can hit ESC whenever to get back into browse mode.

Now with trees, there's a certain level of focus management expected of developers, whether roving tabindex or active descendant management, and since you control the position so tightly, you might not have to worry much about the rest of the tree items. In the case of the tree walker, I opted keep users restricted to their current branch so all I had to do was reset the tree to its root when the user leaves the fragment. That way all content is present in the accessibility tree while also avoiding having a mess of tree items around for users in browse mode. 

In this approach I'd like to keep the state when leaving, which is slightly more complex. Because we leave multiple chunks in the accessibility tree, we need to clean up better.

But the first step is similar to the tree walker: we have to hide and reveal our content on the accessibility tree. This is pretty straight forward: ahead of time, we add aria-hidden to everything we want to keep hidden (i.e. the lower levels); then we un-hide what we want when we want it to be accessible:

<!-- [ experiment #8 ] -->

<svg style="max-width: 100%" width="640" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="experiment4" viewBox="0 0 640 300" style="max-width:100%;height: auto;" tabindex="0" aria-label="a rectangle containing several nested rectangles" data-level="0">
<script style="display:block">
function move4(event) {
  if (![37, 38, 39, 40].includes(event.keyCode)) return; // only move on arrow keys
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level"))
    return;
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left
      moveHorizontally4(event.target, true);
      break;
    case 38: //up
      moveUp4(event.target);
      break;
    case 39: //right
      moveHorizontally4(event.target, false);
      break;
    case 40: //down
      moveDown4(event.target);
      break;
    default:
      break;
  }
}
function moveDown4(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.removeAttribute("tabindex");
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) => {
      currentLevelChild.setAttribute("tabindex", "0");
      currentLevelChild.removeAttribute("aria-hidden");
    });
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
}
function moveUp4(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => {
        descendant.removeAttribute('tabindex');
        descendant.setAttribute("aria-hidden", "true");
    });
  ancestor.focus();
}
// the new thing: moving left/right
function moveHorizontally4(activeNode, isReversed) {
  const increment = isReversed ? -1 : 1; // forwards or backwards?
  const currentNodes = [
    ...activeNode.closest('[data-level="0"]').querySelectorAll('[tabindex="0"]')
  ];// grab all active siblings
  currentNodes[currentNodes.indexOf(activeNode) + increment]?.focus();//move focus forwards/backwards
}
experiment4.addEventListener("keydown", move4);
// the new thing: click
let isSingleClick4 = false; // quick&dirty global flag to identify single clicks
function handleClick4(event) {
  const realTarget = event.target.closest("[data-level]"); // Spoiler: what might be a problem with this?
  if (!realTarget) return;
  const activeAncestor = realTarget.closest('[tabindex="0"]');
  console.log(isSingleClick4);
  if (event.detail == 1) {
    // it's a singleclick
    isSingleClick4 = true;
    setTimeout(() => {
      // wait for potential double click
      if (isSingleClick) {
        //if the flag is still set after the delay
        moveDown4(activeAncestor);
      }
    }, 200); // common delay advice from the intertubes
  } else if (event.detail == 2) {
    isSingleClick4 = false;
    moveUp2(activeAncestor);
  }
}
experiment4.addEventListener("click", handleClick4);
</script>
 <g>
  <g aria-label="The first inner rectangle containing other rectangles" data-level="1" aria-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="310" x="3" y="5"/>
   <g>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="10" y="100"  aria-label="In the first inner rectangle, another smaller rectangle on the left" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="150" y="164.5" aria-label="followed by another smaller rectangle to its lower right, also within the first inner rectangle" data-level="2" aria-hidden="true"/>
   </g>
  </g>
  <g aria-label="Then the second inner rectangle containing other rectangles, to the right of the first one." data-level="1" aria-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="320" x="317" y="5"/>
   <g>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="330" y="200" aria-label="In the second inner rectangle, another, smaller rectangle in the low left" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="420" y="100" aria-label="followed by a second, smaller rectangle in the relative center" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="550" y="30" aria-label="followed by a third, smaller rectangle in the upper right of the second inner triangle." data-level="2" aria-hidden="true"/>
   </g>
  </g>
 </g></svg>

The modifications are adding a handful of lines:


```javascript
// we'll fix you later
function handleClick(event) {
// snip
}

function move(event) {
  // snip! same as before
}

function moveDown(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.removeAttribute("tabindex"); // NEW: a bit stronger than before
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) => {
      currentLevelChild.setAttribute("tabindex", "0");
      currentLevelChild.removeAttribute("aria-hidden"); // NEW: un-hide descendants
    });
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
}
function moveUp(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => {
        descendant.removeAttribute('tabindex'); // NEW: a bit stronger than before
        descendant.setAttribute("aria-hidden", "true"); // NEW: hide descendants again
    });
  ancestor.focus();
}

function moveHorizontally(activeNode, isReversed) {
  // snip! same as before
}

document.addEventListener("click", handleClick);// add click listener
document.addEventListener("keydown", move); // add keydown listener
```

However, we now have a different problem: the upper layers are still around. Depending on the roles you use - and you can check the raw experiments to see which ones I'd tried - you can get anything from losing content to triggering noisy heuristics in AT tryng to fix what they (not incorrectly) perceive as broken markup.

So we have to be more precise and hide the "upper" layers more actively. One way to approach this is to stash labels (and possibly roles) of "upper" layers. For this, we start without labels (and roles), i.e., move them into a neutral position.

<!-- [ experiment #10 ] -->


<svg style="max-width: 100%" width="640" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="experiment5" viewBox="0 0 640 300" style="max-width:100%;height: auto;" tabindex="0" aria-label="a rectangle containing several nested rectangles" data-label="a rectangle containing several nested rectangles" data-level="0">
<script>
function move5(event) {
  if (![37, 38, 39, 40].includes(event.keyCode)) return; // only move on arrow keys
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level"))
    return;
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left
      moveHorizontally5(event.target, true);
      break;
    case 38: //up
      moveUp5(event.target);
      break;
    case 39: //right
      moveHorizontally5(event.target, false);
      break;
    case 40: //down
      moveDown5(event.target);
      break;
    default:
      break;
  }
}
function moveDown5(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.removeAttribute("tabindex");
  activeNode.removeAttribute("aria-label");
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) => {
      currentLevelChild.setAttribute("tabindex", "0");
      currentLevelChild.removeAttribute("aria-hidden");
      currentLevelChild.setAttribute("aria-label", currentLevelChild.getAttribute("data-label"));
    });
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
}
function moveUp5(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor.setAttribute("aria-label", ancestor.getAttribute("data-label"));
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => {
        descendant.removeAttribute('tabindex');
        descendant.setAttribute("aria-hidden", "true");
        descendant.removeAttribute("aria-label");
    });
  ancestor.focus();
}
// the new thing: moving left/right
function moveHorizontally5(activeNode, isReversed) {
  const increment = isReversed ? -1 : 1; // forwards or backwards?
  const currentNodes = [
    ...activeNode.closest('[data-level="0"]').querySelectorAll('[tabindex="0"]')
  ];// grab all active siblings
  currentNodes[currentNodes.indexOf(activeNode) + increment]?.focus();//move focus forwards/backwards
}
experiment5.addEventListener("keydown", move5);
// the new thing: click
let isSingleClick5 = false; // quick&dirty global flag to identify single clicks
function handleClick5(event) {
  const realTarget = event.target.closest("[data-level]"); // Spoiler: what might be a problem with this?
  if (!realTarget) return;
  const activeAncestor = realTarget.closest('[tabindex="0"]');
  console.log(isSingleClick5);
  if (event.detail == 1) {
    // it's a singleclick
    isSingleClick5 = true;
    setTimeout(() => {
      // wait for potential double click
      if (isSingleClick) {
        //if the flag is still set after the delay
        moveDown5(activeAncestor);
      }
    }, 200); // common delay advice from the intertubes
  } else if (event.detail == 2) {
    isSingleClick5 = false;
    moveUp2(activeAncestor);
  }
}
experiment5.addEventListener("click", handleClick5);
</script>
 <g>
  <g data-label="The first inner rectangle containing other rectangles" data-level="1" data-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="310" x="3" y="5"/>
   <g>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="10" y="100"  data-label="In the first inner rectangle, another smaller rectangle on the left" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="150" y="164.5" data-label="followed by another smaller rectangle to its lower right, also within the first inner rectangle" data-level="2" aria-hidden="true"/>
   </g>
  </g>
  <g data-label="Then the second inner rectangle containing other rectangles, to the right of the first one." data-level="1" aria-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="320" x="317" y="5"/>
   <g>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="330" y="200" data-label="In the second inner rectangle, another, smaller rectangle in the low left" data-level="2" data-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="420" y="100" data-label="followed by a second, smaller rectangle in the relative center" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="550" y="30" data-label="followed by a third, smaller rectangle in the upper right of the second inner triangle." data-level="2" aria-hidden="true"/>
   </g>
  </g>
 </g></svg>

The modifications are yet another handful of lines (for now, we don't change the roles):


```javascript
// we'll fix you later
function handleClick(event) {
// snip
}

function move(event) {
  // snip! same as before
}

function moveDown(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.removeAttribute("tabindex");
  activeNode.removeAttribute("aria-label"); // NEW: remove label
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) => {
      currentLevelChild.setAttribute("tabindex", "0");
      currentLevelChild.removeAttribute("aria-hidden");
      currentLevelChild.setAttribute("aria-label", currentLevelChild.getAttribute("data-label")); // NEW: add label
    });
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
}
function moveUp(activeNode) { // refactored
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor.setAttribute("aria-label", ancestor.getAttribute("data-label")); // NEW: add label
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => {
        descendant.removeAttribute('tabindex');
        descendant.setAttribute("aria-hidden", "true");
        descendant.removeAttribute("aria-label"); // NEW: remove label
    });
  ancestor.focus();
}
function moveHorizontally(activeNode, isReversed) {
  // snip! same as before
}

document.addEventListener("click", handleClick);// add click listener
document.addEventListener("keydown", move); // add keydown listener
```

With this we've almost reached 100 lines of code; then again, we've come a long way.

We no longer have duplicate content being announced but instead the level of granularity decided by the user is honored in browse mode. Relatively speaking it's significant work but in the end we still have a fairly simple piece of code.

## pick a role, why don't you?!

As I mentioned, I tried a few different roles in my experiments. When coming up with a pattern like this, I inevitably face the trouble that there's no obvious ARIA role for me to use. 

Ideally, a role would fit in both the semantics as well as AT behavior. 

With tree patterns, you have a good balance, I think. In the end, any DOM is a tree (even if tree patterns are derived from file trees), and the UX (as mentioned earlier) is quite nice. Most importantly, it tested well with users, even when it's used for content like this.

But I wanted to test out some alternatives here. On the one hand, I'm not sure how disorienting the unwrapping would be in the context of tree patterns. On the other hand, it's good to try new things.

The most straight forward role might be image. Especially when dealing with actual images, it's obviously perfect semantically. The UX is ok, too: once you explore, you get a bunch of images. You'd have to modify the code to switch the role on and off because role=image sets children to be presentational, i.e., ignored. Something like

```javascript
    ...
    activeNode.setAttribute("role", "none");
    ...
    currentLevelChild.setAttribute("aria-label", currentLevelChild.getAttribute("data-label"));
    currentLevelChild.setAttribute("role", "img");
    // and later...
    ancestor.setAttribute("role", "img"); 
    ...
    descendant.removeAttribute("aria-label"); 
    descendant.setAttribute("role", "none");
```

The only trouble is that images are historically static so the discoverability is problematic - why would you try to interact with an image?  I guess role descriptions can help but it's always best to avoid them.

Thinking about such content fragments more broadly, I once again tested with using the group role - and of course the abstract SVG is just full of groups. Again, semantically this seems very apt. It offers decent UX and is highly discoverable as AT users expect to explore groups. I really like that many ATs announce entering and leaving groups but unfortunately this gets very noisy when you're deep in the content where AT announces every single higher-up group that you're leaving or entering.

Even a mix of the two - an outermost group, say, with a role-description, and then just image roles inside - comes out too noisily for my taste when going through a granular state in browse mode.

And of course the tree role remains a good option. In the end, user testing should decide where to go.

## so about that click (and other nasty details)

As I mentioned, click-based exploration in experiment #5 was not good. In particular, mobile ATs actually don't provide double clicking in browsers (naturally).

Somebody kindly pointed out on mastodon, a virtual dpad is one possible way to solve this. That's a super robust solution and I was grateful for the discussion. But I wanted to try something minimalistic.

The best idea I've come up with so far is stolen from good old physical device UX. If you have only a single button to set some kind of level in discrete steps (e.g., volume, speed, temperature), then one common UX pattern is as follows: pressing the button will start at one end of the scale, step through the levels and upon reaching the other end of the scale, the button's behavior will reverse, so we can step in reverse until we're back at the starting point. 

I think there's a good chance this can work for users because realistically content that's so complex that this becomes cumbersome, is likely too complex (read: flawed) to begin with. But as always, user testing will tell you if it works with your content for your users. (For example, another UX patterns from: jump immediately to the starting level instead of reversing direction.)

<!-- [ experiment #11 ] -->

<svg style="max-width: 100%" width="640" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="experiment6" viewBox="0 0 640 300" style="max-width:100%;height: auto;" tabindex="0" aria-label="a rectangle containing several nested rectangles" data-label="a rectangle containing several nested rectangles" data-level="0">
<script>
function move6(event) {
  if (![37, 38, 39, 40].includes(event.keyCode)) return; // only move on arrow keys
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level"))
    return;
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left
      moveHorizontally6(event.target, true);
      break;
    case 38: //up
      moveUp6(event.target);
      break;
    case 39: //right
      moveHorizontally6(event.target, false);
      break;
    case 40: //down
      moveDown6(event.target);
      break;
    default:
      break;
  }
}
function moveDown6(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.removeAttribute("tabindex");
  activeNode.removeAttribute("aria-label");
  activeNode.setAttribute("role", "none");
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) => {
      currentLevelChild.setAttribute("tabindex", "0");
      currentLevelChild.removeAttribute("aria-hidden");
      currentLevelChild.setAttribute("aria-label", currentLevelChild.getAttribute("data-label"));
      currentLevelChild.setAttribute("role", "img"); 
    });
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
  return activeNode; //NEW: help with click
}
function moveUp6(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor.setAttribute("aria-label", ancestor.getAttribute("data-label"));
  ancestor.setAttribute("role", "img"); 
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => {
        descendant.removeAttribute('tabindex');
        descendant.setAttribute("aria-hidden", "true");
        descendant.removeAttribute("aria-label");
        descendant.setAttribute("role", "none");
    });
  ancestor.focus();
}
function moveHorizontally6(activeNode, isReversed) {
  const increment = isReversed ? -1 : 1; // forwards or backwards?
  const currentNodes = [
    ...activeNode.closest('[data-level="0"]').querySelectorAll('[tabindex="0"]')
  ];// grab all active siblings
  currentNodes[currentNodes.indexOf(activeNode) + increment]?.focus();//move focus forwards/backwards
}
experiment6.addEventListener("keydown", move6);
// the new thing: single-click exploration
function handleClick6(event) {
  if (!event.target.closest("[data-level]")) return;
  const activeAncestor = event.target.closest('[tabindex="0"]');
  if (!activeAncestor) return;
  // If we're in reverse, move up
  if (
    activeAncestor.getAttribute("data-reverse") === "true" ||
    activeAncestor.querySelector('[data-reverse="true"]')
  ) {
    let newActiveNode = moveUp6(activeAncestor);
    if (!newActiveNode)
      activeAncestor
        .querySelectorAll('[data-reverse="true"]')
        .forEach((node) => node.removeAttribute("data-reverse"));
    return;
  }
  // Otherwise, try moving down, if it fails, set to reverse
  let newActiveNode = moveDown6(activeAncestor);
  if (!newActiveNode) activeAncestor.setAttribute("data-reverse", "true");
}
experiment6.addEventListener("click", handleClick6);
</script>
 <g>
  <g data-label="The first inner rectangle containing other rectangles" data-level="1" aria-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="310" x="3" y="5"/>
   <g>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="10" y="100"  data-label="In the first inner rectangle, another smaller rectangle on the left" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="150" y="164.5" data-label="followed by another smaller rectangle to its lower right, also within the first inner rectangle" data-level="2" aria-hidden="true"/>
   </g>
  </g>
  <g data-label="Then the second inner rectangle containing other rectangles, to the right of the first one." data-level="1" aria-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="320" x="317" y="5"/>
   <g>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="330" y="200" data-label="In the second inner rectangle, another, smaller rectangle in the low left" data-level="2" data-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="420" y="100" data-label="followed by a second, smaller rectangle in the relative center" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="550" y="30" data-label="followed by a third, smaller rectangle in the upper right of the second inner triangle." data-level="2" aria-hidden="true"/>
   </g>
  </g>
 </g></svg>

This change doesn't do much in terms of our code length, since we traded double click handling against the reversing logic.


```javascript
...
function handleClick(event) {
  if (!event.target.closest("[data-level]")) return;
  const activeAncestor = event.target.closest('[tabindex="0"]');
  if (!activeAncestor) return;
  // If we're in reverse, move up
  if (
    activeAncestor.getAttribute("data-reverse") === "true" ||
    activeAncestor.querySelector('[data-reverse="true"]')
  ) {
    let newActiveNode = moveUp(activeAncestor);
    if (!newActiveNode)
      activeAncestor
        .querySelectorAll('[data-reverse="true"]')
        .forEach((node) => node.removeAttribute("data-reverse"));
    return;
  }
  // Otherwise, try moving down, if it fails, set to reverse
  let newActiveNode = moveDown(activeAncestor);
  if (!newActiveNode) activeAncestor.setAttribute("data-reverse", "true");
}

function move(event) {
  // snip! same as before
}

function moveDown(activeNode) {
  // snip!
  return activeNode; //NEW: helps with click handling
}
function moveUp(activeNode) { // refactored
  // snip! same as before
}
function moveHorizontally(activeNode, isReversed) {
  // snip! same as before
}

document.addEventListener("click", handleClick);// add click listener
document.addEventListener("keydown", move); // add keydown listener
```

While the UX for AT users seems reasonable, it comes at the price of rather opaque behavior for non-AT users. Clicking around the SVG does not seem very intuitive to me. There's also the question on making it a bit more clever, e.g., you might want to drop out of reverse mode if the user moves away horizontally as they might not remember the state if they come back. Alternatively you might want to provide a cue which mode the user is in (e.g., an earcon, pre/suffix).

To some degree this relates to a nastly little snag I eventually hit on (mobile) AT: the synthetic click event that's triggered by AT when double tapping can miss the target (or more specifically: appear to miss the target). 

Namely, if you have an SVG, then the synthetic click seems to land on the first pixel of the element's bounding box. If the node you're on does not have any paint at that position, this won't register with the child but with whatever ancestor is considered to be painting that pixel. Thus, when an AT user triggers a click on the focused element, that click might register for simply the SVG root - and our users will never be able to explore. 

Of course you get the same problem with a mouse click - you'll have to make sure you hit a path to get the expected result. But I guess visual users are more likely to automatically for a painted path.

This is of course not a new problem - clicking SVGs being iffy is just the way it is. One workaround is to add a transparent rectangle that covers the relevant nodes (and remove them again when levels change). As annoying as that is, it's not a huge lot of code to maintain - and comes with the benefit of much simpler highlighting. 

<!-- [ experiment #12 ] -->

<svg style="max-width: 100%" width="640" height="300" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" id="experiment7" viewBox="0 0 640 300" style="max-width:100%;height: auto;" tabindex="0" aria-label="a rectangle containing several nested rectangles" data-label="a rectangle containing several nested rectangles" data-level="0">
<script>
// adding and removing rectangles
function addRect7(node) {
  if (node.tagName !== "g") return;
  const bbox = node.getBBox();
  node.insertAdjacentHTML(
    "afterbegin",
    `<rect x="${bbox.x}" y="${bbox.y}" width="${bbox.width}" height="${bbox.height}" data-rect="true" fill="transparent"/>`
  );
}
function clearRect7(node) {
  if (node.tagName !== "g") return;
  node.querySelectorAll("rect[data-rect]").forEach((node) => node.remove());
}
function move7(event) {
  if (![37, 38, 39, 40].includes(event.keyCode)) return; // only move on arrow keys
  if (event.target !== document.activeElement ||!event.target.hasAttribute("data-level"))
    return;
  event.preventDefault();
  switch (event.keyCode) {
    case 37: //left
      moveHorizontally7(event.target, true);
      break;
    case 38: //up
      moveUp7(event.target);
      break;
    case 39: //right
      moveHorizontally7(event.target, false);
      break;
    case 40: //down
      moveDown7(event.target);
      break;
    default:
      break;
  }
}
function moveDown7(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.removeAttribute("tabindex");
  activeNode.removeAttribute("aria-label");
  activeNode.setAttribute("role", "none");
  clearRect7(activeNode);
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) => {
      currentLevelChild.setAttribute("tabindex", "0");
      currentLevelChild.removeAttribute("aria-hidden");
      currentLevelChild.setAttribute("aria-label", currentLevelChild.getAttribute("data-label"));
      currentLevelChild.setAttribute("role", "img");
      addRect7(currentLevelChild);
    });
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
  return activeNode; //NEW: help with click
}
function moveUp7(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor.setAttribute("aria-label", ancestor.getAttribute("data-label"));
  ancestor.setAttribute("role", "img");
  addRect7(ancestor);
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => {
        descendant.removeAttribute('tabindex');
        descendant.setAttribute("aria-hidden", "true");
        descendant.removeAttribute("aria-label");
        descendant.setAttribute("role", "none");
        clearRect7(descendant);
    });
  ancestor.focus();
}
function moveHorizontally7(activeNode, isReversed) {
  const increment = isReversed ? -1 : 1; // forwards or backwards?
  const currentNodes = [
    ...activeNode.closest('[data-level="0"]').querySelectorAll('[tabindex="0"]')
  ];// grab all active siblings
  currentNodes[currentNodes.indexOf(activeNode) + increment]?.focus();//move focus forwards/backwards
}
experiment7.addEventListener("keydown", move7);
// the new thing: single-click exploration
function handleClick7(event) {
  if (!event.target.closest("[data-level]")) return;
  const activeAncestor = event.target.closest('[tabindex="0"]');
  if (!activeAncestor) return;
  // If we're in reverse, move up
  if (
    activeAncestor.getAttribute("data-reverse") === "true" ||
    activeAncestor.querySelector('[data-reverse="true"]')
  ) {
    let newActiveNode = moveUp7(activeAncestor);
    if (!newActiveNode)
      activeAncestor
        .querySelectorAll('[data-reverse="true"]')
        .forEach((node) => node.removeAttribute("data-reverse"));
    return;
  }
  // Otherwise, try moving down, if it fails, set to reverse
  let newActiveNode = moveDown7(activeAncestor);
  if (!newActiveNode) activeAncestor.setAttribute("data-reverse", "true");
}
experiment7.addEventListener("click", handleClick7);
</script>
 <g>
  <g data-label="The first inner rectangle containing other rectangles" data-level="1" data-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="310" x="3" y="5"/>
   <g>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="10" y="100"  data-label="In the first inner rectangle, another smaller rectangle on the left" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="100" stroke="#000000" width="100" x="150" y="164.5" data-label="followed by another smaller rectangle to its lower right, also within the first inner rectangle" data-level="2" aria-hidden="true"/>
   </g>
  </g>
  <g data-label="Then the second inner rectangle containing other rectangles, to the right of the first one." data-level="1" aria-hidden="true">
   <rect fill-opacity="0" height="290" stroke="#000000" width="320" x="317" y="5"/>
   <g>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="330" y="200" data-label="In the second inner rectangle, another, smaller rectangle in the low left" data-level="2" data-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="420" y="100" data-label="followed by a second, smaller rectangle in the relative center" data-level="2" aria-hidden="true"/>
    <rect fill-opacity="0" height="75" stroke="#000000" width="75" x="550" y="30" data-label="followed by a third, smaller rectangle in the upper right of the second inner triangle." data-level="2" aria-hidden="true"/>
   </g>
  </g>
 </g></svg>

This adds a bit of complexity, of course:


```javascript
// adding and removing rectangles
function addRect(node) {
  if (node.tagName !== "g") return;
  const bbox = node.getBBox();
  node.insertAdjacentHTML(
    "afterbegin",
    `<rect x="${bbox.x}" y="${bbox.y}" width="${bbox.width}" height="${bbox.height}" data-rect="true" fill="transparent"/>`
  );
}
function clearRect(node) {
  if (node.tagName !== "g") return;
  node.querySelectorAll("rect[data-rect]").forEach((node) => node.remove());
}
function move(event) {
//snip
}
function moveDown(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  const newLevel = activeNodeLevel + 1;
  if (!activeNode.querySelector(`[data-level="${newLevel}"]`)) return;
  activeNode.removeAttribute("tabindex");
  activeNode.removeAttribute("aria-label");
  activeNode.setAttribute("role", "none");
  clearRect(activeNode);
  activeNode
    .querySelectorAll(`[data-level="${newLevel}"]`)
    .forEach((currentLevelChild) => {
      currentLevelChild.setAttribute("tabindex", "0");
      currentLevelChild.removeAttribute("aria-hidden");
      currentLevelChild.setAttribute("aria-label", currentLevelChild.getAttribute("data-label"));
      currentLevelChild.setAttribute("role", "img");
      addRect(currentLevelChild);
    });
  activeNode.querySelector(`[data-level="${newLevel}"]`).focus();
  return activeNode; //NEW: help with click
}
function moveUp(activeNode) {
  const activeNodeLevel = parseInt(activeNode.getAttribute("data-level"));
  if (activeNodeLevel < 1) return;
  const newLevel = Math.max(activeNodeLevel - 1, 0);
  const ancestor = activeNode.closest(`[data-level="${newLevel}"]`);
  ancestor.setAttribute("tabindex", "0");
  ancestor.setAttribute("aria-label", ancestor.getAttribute("data-label"));
  ancestor.setAttribute("role", "img");
  addRect(ancestor);
  ancestor
    .querySelectorAll('[tabindex="0"]')
    .forEach((descendant) => {
        descendant.removeAttribute('tabindex');
        descendant.setAttribute("aria-hidden", "true");
        descendant.removeAttribute("aria-label");
        descendant.setAttribute("role", "none");
        clearRect(descendant);
    });
  ancestor.focus();
}
...
```

And it does not add a whole lot to our code: now at ~120 lines of code.

Of course, you might have more ideas. For example, creating a subtitle from the active node or using speech synthesis adds maybe another 10 lines each (see the [aria-tree-walker demos](https://krautzource.github.io/aria-tree-walker/) for an example), whatever helps your users.

## Where to go from here

Overall, I'm quite satisfied with these experiments. Despite the growth in complexity, the approach still feels appealingly simple at heart. I can add and remove complexity as use cases require/permit. I actually see a production use case for something like it - which might pave the way to more (user) testing.

I leave you with a real world example where I tested out the authoring experience form yself. This works with a diagram from [Wikipedia's article on the lever principle](https://en.wikipedia.org/wiki/Lever). Attribution for the referenced raster is: Jjw, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lever_Principle_3D.png).

To start out, I include a screencapture below. It was captured while I took that raster graphic into SVGEdit, then quickly drew some rectangles on top of of the various parts, followed by manipulating the SVG source in a text editor to add groups and the necessary attributes for our purposes. Apologies for the lack of audio or subtitles - I added this more as a decorative item so I hope this description suffices.

<video src="/assets/2023/wiki-boxen.mp4" style="max-width: 100%; height: auto" controls></video>

While it wasn't my first try working with the graphic, I think 10-15mins is a reasonable expectation for this kind of work, especially if you're the author of the graphic.

Here's the result integrated in to our final code. 

<svg style="max-width: 100%" width="512" height="291" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 291" aria-label="Diagram of the lever principle" data-label="Diagram of the lever principle" role="image" aria-roledescription="explorable graphic" tabindex="0" data-level="0" id="experiment8">
<script>
experiment8.addEventListener("keydown", move7);
experiment8.addEventListener("click", handleClick7);
</script>
  <image height="291" id="svg_3" width="512" x="0" href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lever_Principle_3D.png/512px-Lever_Principle_3D.png" y="0" role="none"/>
  <g data-level="1" data-label="the equation mass m 1 times distance a is equal to mass m 2 times distance b" aria-hidden="true">
  <rect fill="#000000" fill-opacity="0" height="35" width="186" x="131" y="3"/>
  </g>
  <g data-level="1" data-label="The lever with the mass m1 on the left side, the pivot and mass m2 on the right side" aria-hidden="true">
    <rect fill="#000000" fill-opacity="0" height="111" width="508" x="1" y="25"/>
    <g data-level="2" data-label="The lever with the larger mass m 1 on the shorter left side" aria-hidden="true" >
      <rect fill="#000000" fill-opacity="0" height="124" width="106" x="6" y="18"/>
    </g>
    <g data-level="2" data-label="followed by the pivot in the middle" aria-hidden="true">
      <rect fill="#000000" fill-opacity="0" height="82" width="99" x="157" y="64"/>
    </g>
    <g data-level="2" data-label="followed by the smaller mass m2 on the longer right side of the lever" aria-hidden="true">
     <rect fill="#000000" fill-opacity="0" height="88" width="96" x="402" y="44"/>
    </g>
  </g>
  <g data-level="1" data-label="Below the lever, two underbraces demarking distance A and distance b" aria-hidden="true">
    <rect fill="#000000" fill-opacity="0" height="127" width="462" x="16" y="157"/>
    <g data-level="2" data-label="Below the level, an underbrace from the left side to the pivot, demarking distance A" aria-hidden="true">
      <rect fill="#000000" fill-opacity="0" height="105" width="176" x="21" y="182"/>
    </g>
    <g data-level="2" data-label="followed by an underbrace from the pivot to the left end of the pivot, demarking distance B" aria-hidden="true">
      <rect fill="#000000" fill-opacity="0" height="88" width="261" x="201" y="197"/>
    </g>
 </g>
</svg>

Of course, "really" you want to automate this kind of thing. That might work if you're using a tool to generate such a diagram.

In case you can't use SVG but HTML with CSS: when I tried it the first time around, I started with divs in a CSS grid - here's [a slightly incomplete codepen](https://codepen.io/pkra/pen/zYMoLEY). This works the same from an accessibility perspective so you always have that option, too.


## test test test

To wrap things up, here are some rough screenreader demos of a simplified interaction.

First, the standard DPAD/arrow navigation on the desktops. I've tried to be consistent in the recordings but these are in no way polished. Ideally, you'll notice the following:

* starting at the paragraph just above the lever diagram
* use browse mode to read past it
* go back and explore a bit in focus mode
* back to browse mode, move back to the paragraph before the diagram and read the explored version

Again, apologies for lack of proper video subtitles. The active speech text display of each screenreader is hopefully sufficient to get a first impression. (I should really have found the time to add some subtitling to the code...).

First off, NVDA with Chrome which has some verbosity due to the role description being repeated alongside the proper role and some virtual buffer repetition when re-entering browse mode; as an aside, Firefox is similar but doesn't suffer from repeating role and outer role description:

<video src="/assets/2023/granularity-walker_nvda-chrome.mp4" style="max-width: 100%; height: auto" controls></video>


Next is JAWS with Chrome which has less verbosity but role description is voiced; again, Firefox is basically the same.

<video src="/assets/2023/granularity-walker_jaws-chrome.mp4" style="max-width: 100%; height: auto" controls></video>

Now ORCA on Chrome does not add extra verbosity but triggers a click / exploration when exiting focus mode (which looks like a bug).

<video src="/assets/2023/granularity-walker_orca-chrome.mp4" style="max-width: 100%; height: auto" controls></video>

Finally, VoiceOver on Mac with Safari. I hope the German Macbook VO reading English with a funky German accent doesn't throw you off too much. Functionally, the result on VO is much the same as the others. Notably, VO doesn't voice role descriptions (which is IIRC generally the case) so depending on your needs, you could try to replace role description with aria-description to see if that yields better results for your users.

<video src="../assets/2023/granularity-walker_voiceover_mac.mp4" style="max-width: 100%; height: auto" controls></video>

That wraps up desktop screenreaders. On mobile I've also tried to be consistent in what I'm doing in the demos. Here's hopefully what you'll notice:

* starting at the paragraph just above the lever diagram
* flick manually to read past it
* go back and explore a bit using double-tap (i.e., synthetic single click)
* move back to the paragraph before the diagram and let AT read continuously
* then go back to diagram and collapse it again, i.e., navigate down and up again

First off, VoiceOver on iOS. Again, role description won't work (and again aria-description is worth a test). Additionally, when flicking manually, VO adds its magic OCR output. To me, it adds noise but I'm guessing users either like it or disable it. On the bright side, the OCR magic doesn't show up during continuous reading.

<video src="/assets/2023/granularity-walker_voiceover_ios.mp4" style="max-width: 100%; height: auto" controls></video>

Lastly, Talkback. It behaves basically the same as all the others. Again, my German devices lead to funny results - the role description is read in a German voice (and of course instructional voicing and menus are in German); still, I hope you get the ist. Visually, it's a bit weird how it jumps around but it could be worse.

<video src="/assets/2023/granularity-walker_talkback_chrome.mp4" style="max-width: 100%; height: auto" controls></video>


Note that I didn't test the hardest use case: inline content. That is the trickiest part in my experience. It's often feasible to find patterns where AT can enter easily into a complex inline content fragments while in browse mode (again, trees are pretty great here as is this pattern). The tough part is exiting and continuing inline; AT tends to not do great here, i.e., loses its position, at minimum switching back to the starting of the browse mode buffer, but often losing its position quite badly. 

Again, I hope this pattern might make that easier because at least users can control what state the fragment is in when they next come across it, ideally enabling them to make it more usable. Do I think that sounds great? Not at all. But better is sometimes all I can aim for.

Finally, I cleaned up the code a bit and [left a copy on GitHub](https://github.com/krautzource/granularity-walker). This brings it back down to ~100 lines. Hopefully I've added enough warnings to the repository to make it clear that you should only use the idea, not really the code.

If you have a chance to try out this pattern, I'd love to hear about it. 

## ... and in the long run?

I can't shake the feeling that there's something more fundamental lurking in all of this, something that's worth considering on the platform layer. More experiments might help surface the relevant parts.

For example fairly late in writing this, I looked at the [graphics-aria specification](https://w3c.github.io/graphics-aria/) again. I admit I'd somewhat forgotten about it - it doesn't see a lot of activity. Coming from this exploration, the examples in the spec seemed pretty wild to me. Besides things like overly clever use of aria-labelledBy/describedBy it seems very odd to me how AT is working with these. I didn't have time to dig into what is really supposed to happen or where perhaps there are bugs or incomplete implementations stirring trouble. Perhaps this will be for another post. I'll just have to see.

