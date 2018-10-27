---
layout: post
title: "Links in equational content"
date: 2018-07-21
permalink: 0207/
published: true
---

For the AMS, I recently started implementing a missing feature in the production workflow we're builing -- links in equational content. A small feature, you might think, but it became quite the rabbit hole. This may sound a bit odd so let me explain.

Oversimplified, the production starts with TeX sources from authors, going through various clean up stages (the AMS is uniquely amazing her) and eventually we create an HTML representation. In the HTML, equational content is ultimately represented as SVGs (primarily via mathjax-node-sre). Using MathJax leads to an interesting design problem as it means leaving the equational content alone until rather late in the process. This is rarely a real problem as print traditions produce a fairly strict boundary between equational and non-equational styles so you can usually handle them independently -- just match the base fonts for text and equations reasonably well and you're 99% there.

Links, however, are a different matter. Cross-references connect the document and thus you need to process them as early as possible and as fully as possible. Early on in the development of this workflow, we actually didn't have content with links inside of equational content, so naturally we didn't waste time cooking something up. Once they turned up, we simply stripped the markup out of the equational content before passing it to MathJax. (A secondary reason for this was that the tool chain is shared with a production flow for Kindle; since Amazon cannot even handle SVG well, you end up with binary images anyway so the links would be lost either way.)

As we are covering more ground now, I finally thought it's time to do this right.
