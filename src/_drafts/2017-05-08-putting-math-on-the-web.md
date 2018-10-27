---
layout: post
title: Putting math on the web
date: 2017-05-08
permalink: 0195/
published: true
---

Warning: opinionated.

So it's 2017 and you want to put some math (equations) on your webpage. How to go about it?

## Choose your native rendering technology

Today's web browsers come with various rendering components all combined into one. CSS, SVG, Canvas, WebGL and good old image formats -- so many options!

The best technologies by far are CSS and SVG.

I usually choose CSS if I need text in the page, in particular if I'm interested in creating PDFs that are to be read on a screen (since many PDF applications render text-like SVG paths horrendously).

My default choice is SVG these days. With SVGs you don't need fonts (though some SVG solutions use them), so you don't run into font/webfont issues or funky system overrides. You don't get funky CSS interactions when your clients' terrible CSS fuzzes with `*` selectors. You get good adaptivity by using `currentColor`.

SVG is also perfect for those cray-cray print traditionalists who believe equation layout needs to be isolated from textual as much as possible; personally, I think that's ridiculous (the web makes its own traditions and nobody gets confused by some math in.

<small>Pro tip: don't waste your time evaluating the unmaintained Gecko and WebKit implementations of MathML; it's not worth the effort.</small>

## Choose your rendering time

Whenever you have static content (like an article), the obvious choice is to pre-render on the server. So do it on the server whenever you can. If you want to get fancy, make several renditions to meet some breakpoints and add some responsiveness.

Why not reach first paint on a math-heavy page less than a second on a 2G on a shitty old device?

If you are rendering on the client, then be sure to limit this to parts that require interaction. And of course combine the two -- there's no shame in re-rendering on the client as long as you don't ruin your users' experience.

## Choose your rendering engine

Obviously, just use MathJax.

But you might requirements that prevent you from choosing the best quality so shop around - there are many decent solutions these days. Most of them fall short in terms of feature completeness, flexibility of quality  but they can still serve you well. Whether WIRIS's solutions,
