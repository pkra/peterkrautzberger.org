---
layout: post
title: 'MathJax best practices; avoid display:none'
date: 2014-07-12
categories:
- mathjax
tags:
- CSS
- mathjax best practices
published: true
permalink: 0165/
---

At MathJax we often get questions about specific examples of content / web design. Most of the time, people will show up on the [MathJax User Group](https://groups.google.com/forum/#!forum/mathjax-users) (the preferred choice), [StackOverflow](http://stackoverflow.com) (semi-officially supported), and through our contact form on mathjax.org (not the right choice but sometimes necessary for restricted users who can't post to either of the above).

Almost always, the problems are easy to track down (e.g., the infamous [15s delay](https://groups.google.com/forum/#!searchin/mathjax-users/15$20seconds/mathjax-users/iIvf2RkNdF4/Bi_TFDR3AsUJ) if a custom configuration/extension/etc has an incorrect `loadComplete` call), sometimes they are bugs (e.g., the recent [Chrome/WebKit webfont loading bug](https://groups.google.com/forum/#!searchin/mathjax-users/chrome$20bold$20italic/mathjax-users/S5x-RQDPJrI/Tn31F4NjcTcJ)), but of course every so often they hit on the subtleties that make what MathJax does so hard (ex/em matching, webfont detection etc.).

A surprising recent example for the latter revolves around the use of `display:none`. It usually comes up in reports of broken layout but the other day there was an interesting performance issue. To understand the second, it helps to understand the first.

### The layout trouble with `display:none`

The rendering issues sometimes seen for content which starts off with CSS `display:none` and later made visible stem from a simple problem: browser engines won't actually layout elements with `display:none`. MathJax on the other hand, needs to take a few vital measurements (basically widths and heights) to produce a correct layout -- and these measurements are not available when the content wasn't laid out by the browser.

To work around this predicament, we could just leave it to the author to work as if content with `display:none` was dynamically loaded content -- and force them to trigger a manual typeset when the content is revealed. But that's silly because the content is _there_, we should damn well use it.

So to work around `display:none`, MathJax does something quite simple: it moves the content into an invisible element that **does** get laid out -- using `visibility:hidden` with zero dimensions. Then MathJax can take the measurements, produce good rendering and put the rendered output back to the original location.

Now there's an obvious problem with that approach: where would you move the content to do the rendering? After all, just because something is `display:none` doesn't mean it has no context. It might be in a completely different CSS context (think: hints to a homework problem, sidebar content, menus), or the context might change once it becomes visible (think: popup footnotes/references, knowls). In other words, MathJax output in some other context might get screwed up when put back into the original context (e.g., matching font sizes correctly, dealing with inherited CSS). Of course, more often than not, this will work well but it is a general problem and should be avoided.

(Another way might be to use [mutation observers](http://caniuse.com/#feat=mutationobserver). Besides supported being limited, I think there's an argument to be made that layout should happen right away if possible. But it should probably become an option via an extension.)

### a surprising performance issue

Recently, we saw a sample where all this magic had a very different side effect: serious performance issues. In that sample, hundreds of equations were hidden away with `display:none`. This meant that MathJax had to shift those around in the DOM -- and especially mobile browsers did not like that at all. What made matters worse was that the MathJax status messages gave no useful indication of what was going on, instead hanging at unrelated points -- because MathJax currently doesn't have a signal to catch a delay for such a "simple" action like laying out `display:none`. In the end, the sample (with 2000+ equations) left the user with the impression that their mobile browsers were hanging/crashing -- just because of all these necessary layout shenanigans! Darn!

### the moral

The moral of the story is: use `visibility:hidden`, e.g., `position: absolute; top: 0, left:0; width:0, height:0, overflow: hidden; visibility: hidden;`), or tell MathJax to skip the content and [manually queue a typesetting call](http://docs.mathjax.org/en/latest/typeset.html) when you reveal hidden content. If you want to put in some extra work, use `visibility:hidden`, let MathJax skip the hidden content and then queue a typesetting call for the hidden content after MathJax is loaded; that way the hidden content will be typeset only after the visible content is done (on MathJax's initial pass).

Any which way, don't get caught in bad layout or performance issues related to `display:none`!
