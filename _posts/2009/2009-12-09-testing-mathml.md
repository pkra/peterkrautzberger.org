---
layout: post
title: Testing MathML
date: 2009-12-09
categories:
- technology
- test
- thelazyscience@blogspot
tags:
- mathml
- tex4ht
permalink: 0002/
---

One of the tools I want to use in this blog will be MathML. I think MathML is so far the best solution to present mathematical content on the web even though the [discussion](http://terrytao.wordpress.com/2009/10/29/displaying-mathematics-on-the-web/) on Terence Tao’s blog shows that MathML has its own deficits, especially when it comes to accessibility.

Nevertheless, tex4ht allows me to wait for a good standard to develop while working with one “generator”, namely LaTeX, to produce multiple outputs.

I chose blogger especially because I wanted to use MathML, e.g.

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <semantics>
    <mrow>
      <mi>x</mi>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mo>&#x2212;<!-- − --></mo>
          <mi>b</mi>
          <mo>&#x00B1;<!-- ± --></mo>
          <msqrt>
            <msup>
              <mi>b</mi>
              <mrow class="MJX-TeXAtom-ORD">
                <mn>2</mn>
              </mrow>
            </msup>
            <mo>&#x2212;<!-- − --></mo>
            <mn>4</mn>
            <mi>a</mi>
            <mi>c</mi>
          </msqrt>
        </mrow>
        <mrow>
          <mn>2</mn>
          <mi>a</mi>
        </mrow>
      </mfrac>
    </mrow>
    <annotation encoding="application/x-tex">x=\frac{-b \pm \sqrt{b^{2}-4ac}}{2a}</annotation>
  </semantics>
</math>

Of course, blogger does not make it easy, but thanks to [David Carlisle](http://dpcarlisle.blogspot.com/2007/04/as-mentioned-in-earlier-post-im.html) a good friend of mine was able to hack enough for me to work on for now. Unfortunately, I will now have to add to the header that you really need firefox with javascript, but is that too much to ask these days?

By the way, this tag will hopefully lead to more techological experiments in the future.
