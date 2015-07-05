---
layout: post
title: Working on the workflow
date: 2009-12-22
categories:
- technology
- thelazyscience@blogspot
tags:
- pdf
- svg
- tikz
published: true
permalink: 0005/
---

Since I do want to try to post something once a week, I’ll recap my work towards a reasonable workflow. As I hinted at [before](/0002/), I’m currently aiming at a workflow of [LaTeX](http://en.wikipedia.org/wiki/LaTeX) via [tex4ht](http://en.wikipedia.org/wiki/TeX4ht) to [mathml](http://en.wikipedia.org/wiki/Mathematical_Markup_Language) to blogspot. I have encountered a couple of problems, some of which I could overcome, some of which I could not and some of them turned out to be bugs or missing features.

The main problem is that my LaTeX style is too complicated for tex4ht. Now obviously this is somewhat my fault and I should (and will) simplify and update my current style of typesetting. But I intend to experiment here and it would be much easier (and possible in a more consistent fashion) if I could “just” convert my LaTeX experiments to blog experiments. In any case, it bugs me whenever I cannot find the reason why some things fail but not others, so let me recount what I could figure out.

One problem that I could find an explanation for is the [<span class="caps">SVG</span>](http://en.wikipedia.org/wiki/Svg) generation of [TikZ](http://en.wikipedia.org/wiki/PGF/TikZ) code via tex4ht. In particular this combination cannot handle more complex text (mathematics or not) inside an svg, e.g., minipages within tikZ pictures are simply ignored entirely. Admittedly, this is documented in a short paragraph in the TikZ manual but it took me a while to find that…

Speaking of manuals. I finally stumbled upon this [part of the tex4ht manual](http://tug.org/applications/tex4ht/mml.html#mml-prob) where some of the common problems and restrictions of tex4ht are described. This helped a lot with a couple of small errors like the missing \bigcap in the [Matrices vs Idempotents](/0004/) post. Most importantly, I now know where to look these things up, so maybe there’s hope for me after all.

To make up for this and as a generally easy part of the workflow I added the first <span class="caps">PDF</span> via the very nice [issuu](http://issuu.com/) . This is really no extra effort since issuu offers the code for embedding in blogspot — and I really like the viewer (as opposed to scribd).

For the future I like the idea to include audio and video as well, especially after the accessibility discussion on What’s new. It seems simple enough these days to upload some flash based or html5 based audio and video based on a post and I hope to find time to experiment with such media. Up until now I used SciVee a bit for a seminar. But since they went commercial a while ago I have to see if scivee’s plans are reasonable given the competition — they seem to focus more on large entities like universities and buying bulk accounts (open access like).

All in all, it’s going alright, even though the flow is far from what I want it to be. Let’s see what the holidays will lead to.
