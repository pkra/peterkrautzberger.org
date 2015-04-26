---
layout: post
title: 'Bonus round: Why I care about native MathML'
date: 2014-12-29 08:36:42.000000000 +01:00
categories:
- mathml
tags:
- browsers
- mathml
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _publicize_twitter_user: "@pkrautz"
  _cws_is_markdown_gmt: '2015-01-06 08:18:07'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
  _wpas_skip_5613678: '1'
  _wpas_skip_5613660: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

[This is week 7 of the challenge but really a post to make up for dropping the ball on week 5.]

https://www.youtube.com/watch?feature=player_detailpage&v=-uZL3qqDVK8

[Last week](http://boolesrings.org/krautzberger/2014/12/26/why-i-care-about-mathml/) I wrote about why I care about MathML in general. Given that I work for a project that serves as a MathML polyfill, it's worth while to to point out why native implementations matter; they matter an entire alot of mattering.

A while back, [Alex Miłowski](http://www.milowski.com/) asked me for some quotes about how native MathML implementations are important so luckily I can copy myself here.

#### It's important.

Some people say, "few people on the web need MathML support." This is true. Just like saying "few people need children's clothing".

Why is MathML important? Education, education, and education. Mathematics is a core skill and a vast amount of educational time and effort is spent on teaching children and adults to understand and apply math & science. Very soon, HTML will be the dominating delivery method for educational content across the world. This means mathematics must be HTML, viz. MathML.

#### HTML rendering should be native

Where should HTML rendering be implemented? In the browser!

MathML has been HTML from its inception and after a (forced) XML-detour, MathML is back where it belongs: a part of HTML5\. MathML layout is core HTML functionality, widely used in everything from web communities to professional publishers to educational startups. HTML and thus MathML rendering belongs in the browser.

#### Performance

While browser vendors show great interest in enabling polyfills to behave like native implementations, polyfills implementing layout standards (MathML, Flexbox etc), in the end, will not achieve native performance. The reason is simple: layout polyfills simply enter too late in the game -- after the browser layout is done, at a point where the user expects content, not additional rendering delays. Moore's Law helps a little but, ultimately, performance issues will prevent math and science from fulfilling their potential on the web.

#### Robustness

Even the most advanced polyfilling technology will remain a JavaScript solution. This increases the risk of problematic interactions with regular scripts for design, user interaction, and styling. Native support will always be more robust for web developers and consumers.

#### Ubiquity

Even the most ideal polyfill will require a conscious choice of the web developer to load it. This poses a grave restriction for end users and the emergence of new platforms for math and science on the web. From webmailer, to web based authoring, to social networks, all of these could turn out to be highly productive platforms -- but it's unlikely their developers will consider adding a polyfill for a perceived niche. With native MathML rendering, rendering MathML would be universal.

#### The Future

The web has revolutionized how we communicate. Not by magic but because thought leaders continually push the envelope, building new tools and platforms that transform how we work, speak, and think. These innovations feed back into standards development, enabling everyone to benefit and restarting the process, pushing us further.

MathML 3 captures traditional mathematical typography. Thanks to polyfills, we get a glimpse of how MathML might develop, how it can revolutionize the communication and dissemination of scientific knowledge. Yet without native implementations of MathML 3, we will never see MathML 4, 5 or 10, and the opportunities this will open up.

It took 50 years from Gutenberg's printing press to the first typeset mathematics book. We're 25 years into the web. Do we wait another 25 years or can browser vendors finally invest 1-2 developer years to get us there?

* * *

Update.

First, I changed the embedded video; it was previously [this one](https://www.youtube.com/watch?feature=player_detailpage&v=wHZHSt1CSgo#t=600).

Second, [over on Google+](https://plus.google.com/u/0/+PeterKrautzberger/posts/3zdytApQw6N), Harald Hanche-Olsen asked about the claim that MathML is a huge success. Here's what I responded with.

> Re success of MathML. Today, almost all equational content is stored as MathML. This is because almost all scientific (including mathematical) publishers have switched to XML workflows for production and archival where MathML fits in very naturally; similarly most technical writing (e.g., aerospace) is done in XML workflows.
> 
> For authoring, it's a bit more complicated. It is similar to, e.g., vector graphics where applications such as Adobe Illustrator have their own formats but when you save vector graphics for re-use you'll most likely export to SVG.
> 
> As I mentioned, there's definitely the need for a professional-grade, open source pure MathML editor (ideally HTML5). The only one I know of is MathFlow. But if you have ever used MathJax then you have authored MathML -- it's how MathJax works: convert any input to MathML and then leverage our MathML rendering engine.
> 
> Similarly, lots of other tools are able to output MathML -- besides converters from TeX (such as LaTeXML or tex4ht), Microsoft Word Equation editor can export to MathML, as does Open Office Math editor, MathType, MathMagic, the Windows Math Input Panel (handwriting recognition), MyScript (ditto), Maple, Mathematica and virtually any other tool you might have authored serious equational content in. (Oh well, I should've simply linked to http://www.w3.org/Math/wiki/Tools#Authoring_tools which I recently set up.)
> 
> Of course, Word is the big reason why most scientific and educational content ends up providing MathML. I don't claim (or believe) that people are aware of most of this which was one of the reasons I wrote about it.