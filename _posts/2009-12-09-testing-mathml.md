---
layout: post
title: Testing MathML
date: 2009-12-09 10:00:00.000000000 +01:00
categories:
- technology
- test
- thelazyscience@blogspot
tags:
- mathml
- tex4ht
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _wpas_skip_5613678: '1'
  _wpas_skip_5613660: '1'
author:
  login: admin
  email: peter.krautzberger@gmx.net
  display_name: admin
  first_name: ''
  last_name: ''
excerpt: !ruby/object:Hpricot::Doc
  options: {}
---

One of the tools I want to use in this blog will be MathML. I think MathML is so far the best solution to present mathematical content on the web even though the [discussion](http://terrytao.wordpress.com/2009/10/29/displaying-mathematics-on-the-web/) on Terence Tao’s blog shows that MathML has its own deficits, especially when it comes to accessibility.

Nevertheless, tex4ht allows me to wait for a good standard to develop while working with one “generator”, namely LaTeX, to produce multiple outputs.

I chose blogger especially because I wanted to use MathML, e.g.

\[  
 x=\frac{-b \pm \sqrt{b^{2}-4ac}}{2a}  
 \]

Of course, blogger does not make it easy, but thanks to [David Carlisle](http://dpcarlisle.blogspot.com/2007/04/as-mentioned-in-earlier-post-im.html) a good friend of mine was able to hack enough for me to work on for now. Unfortunately, I will now have to add to the header that you really need firefox with javascript, but is that too much to ask these days?

By the way, this tag will hopefully lead to more techological experiments in the future.