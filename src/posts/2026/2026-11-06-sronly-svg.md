---
layout: post
title: "Screenreader-only text without CSS? Hold my beer."
date: 2026-11-06
permalink: 0227/
---

Last year I wrote 2 articles, a 100% increase from the year before. This year, I've written 2 articles. So let's do the obvious - make numbers go up by writing needlessly.

## Don't do this

Let's start with the actually obvious fact: screenreader-only text should be avoided. I still find [Scott's article from 2023](https://www.scottohara.me/blog/2023/03/21/visually-hidden-hack.html) quite convincing: this is a hack and the typical use cases need proper solutions instead of giving up and enshrining a hack for eternity.

## New hacks for old hacks

If you're an old hack, you might be skeptical that a new version is worth you while. I tend to agree. But earlier this year [David Bushell wrote up](https://dbushell.com/2026/02/20/visually-hidden/) a deep dive into past and present approaches. 

That article includes minimalistic versions which benefit from the fact that [NVDA recently stopped pruning 0px content](https://www.nvaccess.org/post/in-process-10th-february/). My favorite would be [Scott's example (codepen)](https://codepen.io/scottohara/pen/QWVOqNY) which is just `position: absolute; transform: scale(0)` - mind-blowingly short (and I trust Scott's quick testing more than most people's in-depth testing notes).

## No CSS? Inconceivable!

However, part of my dayjob is producing epub output. As I lamented on [workingdraft 732 (in German)](https://workingdraft.de/732/), epub is a miserable format. Since epub3 came out 15 years ago, the only improvements (from a web/book development point of view) have been accidental - the web platform has added new features which are not as easily broken by epub reading software. The spec and its community seem incapable of improving the ecosystem.

One of the key problems with epub reading software is their tendency to overwrite or straight-up remove author CSS. Even established user agent styles may not be reliable in reading software.

In other words, sometimes the clever CSS to visually hide text is revealed as what it is - a hack.

When I was writing up [no. 225](/0225/) I stumbled upon a variant that did not require CSS - but SVG. Without further ado:

```html
<svg role="none" width="0" height="0"><text>Hidden text</text></svg>
```


Here it is live in the DOM: now you see me, <svg role="none" width="0" height="0"><text>now you don't</text></svg>.

To take it apart

- The role removes extraneous (and inconsistent) announcements of SVG semantics
- width and height avoid visual rendering
- `<text>` provides text semantics

An incomplete list of caveats - because this is still a hack:

- be mindful of surrounding whitespace
- `width` and `height` kinda work like styles but they are sometimes more robust
- common CSS resets do silly things like `svg {display: block}`

And it's certainly less efficient markup (though compression will help). 

Ceterum censeo: it's a hack.
