---
layout: post
title: Privilege-based Open Source
date: 2017-04-01
permalink: 0193/
published: true
---

<small>(Another one from the drafts.)</small> A while back I ranted on twitter about privilege-based open-source and Patrick Honner asked me what I meant with it.

A surprisingly large number of open-source software (OSS) projects is run by volunteers. And I don't mean that "hello world" code you pushed to GitHub (which probably makes up 99% of all OSS repositories), I mean the many successful open-source projects that provide the fertile soil other (small and large) software projects are built on.

In other words, the majority of OSS is run by people privileged enough to spend hours on end to produce something that they then give a way for free. Whether or not OSS developers do it out of conviction, it's often a problem when people end up using privilege-based OSS without realizing it.

## Houston, we have a problem

The most obvious problem is that privilege-based OSS can essentially go away at any moment. You don't have to look to extreme cases (left-pad, anyone?) to see this happen; projects simply slowly die. You might praise OSS for the fact that anyone can pick up the code and fork it if need be, but in reality dead, privilege-based OSS is more like an unfinished construction site; it's easier to start from scratch and thus the cycle repeats. 

However, this is so obvious, it's not really a problem, I think. In any case it's not what I mean.

## Toxicity

There's a lot to be said in favor of developing OSS out of conviction. It frequently helps people and adds diversity to the ecosystem. The trouble is that privilege-based OSS can be highly toxic.

One toxic variant is "Silicon Valley style OSS" where developers do not act out of conviction but more out of necessity to get ahead in a questionable job market ("GitHub is your resume"-kind-of-thing). If your hipster company hires people only due to their volunteer OSS credentials, then you are effectively hiring them by their privilege, creating a toxic environment and reducing diversity.

Reversely, you have the toxicity of people relying on OSS software not being willing to contribute to the development of OSS because privileged people make it work. Just the other day I was talking with a potential client who described how they use pandoc in production. If you do this at scale, then you're basing the integrity of your production workflow on how much John MacFarlane could procrastinate over the years.

For OSS developer, this can turn into a toxic reality because users often think they deserve access to the developer's privilege. That is, they can become highly aggressive when they find a bug in the OSS software they're using, especially when it impacts them. This gets extreme when we're talking about companies and use of privilege-based OSS in production. Company employees quickly try to exert pressure on OSS projects to fix things -- yet refuse to actually contribute to development any which way or even acknowledging the work that went into a piece of software that they themselves chose to build upon.

Obviously, there are other ways of doing OSS software development. There's transparency-driven OSS (e.g., security related tools, browsers), there's shared-burden OSS (e.g., joining forces to lower costs), there's donation-based, crowd-sourced, and bounty-driven OSS and many others -- Nadia Eghbal lists a few in her [lemonade-stand on GitHub](https://github.com/nayafia/lemonade-stand). Also ask about [governance models](http://oss-watch.ac.uk/resources/governancemodels).

Long story short, if you're using open-source software, especially in a professional context, make sure to check what model it's based on. Also, don't be toxic.

## Reading list

These thoughts were far from original.

* Ian Cordasco, [Corporations and OSS Do Not Mix](http://www.coglib.com/~icordasc/blog/2015/11/corporations-and-oss-do-not-mix.html)
* Jan Lehnardt, [Sustainable Open Source](http://writing.jan.io/2015/11/20/sustainable-open-source.html), especially the section "Money".
* Marijn Haverbeke [More Money For Better Open-Source Software](http://marijnhaverbeke.nl/blog/sustainable-maintenance.html)
* Noah Kantrowitz, [Funding FOSS](https://coderanger.net/funding-foss/)
* Isaacs, [Money and Open Source](https://medium.com/open-source-life/money-and-open-source-d44a1953749c)
* David Heinemeier Hansson, [The perils of mixing open source and money](http://david.heinemeierhansson.com/2013/the-perils-of-mixing-open-source-and-money.html)
* Nadia Eghbal [What success really looks like in open source](https://medium.com/@nayafia/what-success-really-looks-like-in-open-source-2dd1facaf91c)
* [StackOverflow survey 2017](https://stackoverflow.com/insights/survey/2017/), privilege in all its glory.
* <blockquote><p lang="en" dir="ltr">This is where I have an issue with the &quot;hire people for their side projects&quot; mentality.</p>&mdash; Stewart Scott-Curran (@stewartsc) <a href="https://twitter.com/stewartsc/status/735273897721921536">May 25 2016</a></blockquote>
* The reverse opinion: [Dissecting The Myth That Open Source Software Is Not Commercial](http://blog.ieeesoftware.org/2016/04/dissecting-myth-that-open-source.html) on the IEEE software blog makes several good points but I think misses how many key projects are effectively run by privileged developers (even if those might be involved in large commercial open-source projects at the same time).

Wider scope

* PPK touches on entitlement and privilege in [The web’s original sin](http://www.quirksmode.org/blog/archives/2016/03/the_webs_origin.html).
* William Stein ["If you were new faculty, would you start something like SageMathCloud sooner?"](http://sagemath.blogspot.de/2016/02/if-you-were-new-faculty-member-again.html)
  > Overall, the mathematical community does not value open source mathematical software in proportion to its value, and doesn't understand its importance to mathematical research and education. I would like to say that things have got a lot better over the last decade, but I don't think they have. My personal experience is that much of the "next generation" of mathematicians who would have changed how the math community approaches open source software are now in industry, or soon will be, and hence they have no impact on academic mathematical culture. Every one of my Ph.D. students are now at Google/Facebook/etc.
* Cameron Neylon, [Beyond the culture clash: Developing leadership for open organisations](http://cameronneylon.net/blog/beyond-the-culture-clash-developing-leadership-for-open-organisations/)
  > Organisations in “the open space” are often community driven. Groups come together to solve a problem, and in a few cases they succeed. Most fail, and most fail pretty early. Those that survive the initial phase often experience massive growth, sometimes beyond the wildest dreams of those who started them. This brings some challenges.
  > Sustainability is a big one: too many of these organisations lurch from grant to grant, depending on the largesse of philanthropists or government funders. Most of these eventually fail or stagnate. Some negotiate this transition by turning private and obtaining VC or Angel funds. Eventually most of these are sold off to incumbent players, and gradually lose the central thread of openness and just becoming part of the service background in their space. Nothing wrong with that but they’re no longer really part of the open community at the end of this process.
  > But some organisations succeed and find a model: donations, memberships, advertising, fee for service have all been successful in different spaces. These can grow to be sizeable companies, ones that need professional staff and business discipline to manage complex operations, significant infrastructures, and substantial financial flows and reporting. No multi-million dollar a year organisation is going to run for very long on volunteer labour, at least not where those volunteers need to work for a living.
  > Passion can also be a problem, as well as being a driver. Without that passion and without that community nothing gets done. Indeed without the passion many not-for-profit organisations wouldn’t be able to attract staff at the rates that they can reasonably pay. The community is a core asset.
