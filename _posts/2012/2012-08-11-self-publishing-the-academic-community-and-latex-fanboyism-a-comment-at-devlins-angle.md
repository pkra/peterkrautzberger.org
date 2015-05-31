---
layout: post
title: self-publishing, the academic community and LaTeX fanboyism -- a comment at
  Devlin's Angle
date: 2012-08-11 10:52:45.000000000 +02:00
categories:
- blogosphere
- scientific community
- technology
tags:
- epub3
- html5
- Keith Devlin
- LaTeX
- mathjax
- self-publishing
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  dsq_thread_id: '801544777'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

> Yet another one of those "Peter babbled too long on somebody else blog"-posts. This time at Keith Devlin's MAA column/blog [Devlin's Angle](http://devlinsangle.blogspot.com/2012/08/the-future-of-textbook-publishing-is-us.html)

A few comments.

About your reply to Corey's comment. "That will surely change very quickly" is something I've been hearing all my (academic) life but nothing is happening -- academia proves highly conservative. The main problem is that the young researchers willing to seriously experiment will often not gain enough "traditional" merit compared to those who just play the game -- and those who successfully play the game will rarely see the need to experiment later.

This is a serious problem that would deserve much more effort from the few established researchers that are both influential, established, and open to new ideas: help young researcher get the credit they deserve with their experiments such as self-publishing (can't help but add: and publish open-access or even open-source). Or in other words: it's great to hear that self-publishing worked for you, this time, but can somebody else reproduce it?

Finally, LaTeX (as a binary) is nice for producing print output -- but practically incapable of doing anything else (and actually, professional typesetters will easily complain about the quality of TeX's output).

As Peter Rowlett and yourself pointed out, even the best reflow-PDF viewers (Kindle, Nook) are quite limited. However, that is actually the author's fault. It's like trying to build an iPad with manufacturing equipment from 1978 (or for that matter, teaching a MOOC in 1978).

So instead of using LaTeX to do what it can't do -- produce content for an html environment -- authors need to take the next step and switch to authoring systems that can produce both good print and good html. That's hard right now, but worth an experimental effort (good keywords: pandoc, asciidoc, restructured-text, sphinx-doc -- and I'd volunteer right away to help actually.)

After all, with the adoption of MathML3 in two critical standards (html5 and epub3) and with technologies like MathJax, mathematical content in html finally makes sense.

(Disclaimer: I'm involved in the MathJax development)

* * *

> Thanks to [this discussion on g+](https://plus.google.com/u/0/102694188490946876191/posts/R7Kv6ZXdQsZ), here's I just had to add another comment

One small addendum. Here's such an experiment going all the way to XML: Rob Bezeer's Linear Algebra book http://linear.ups.edu/index.html which (due to it's flexibility) is part of IDPF's official ebpub3 sample repository https://code.google.com/p/epub-samples/