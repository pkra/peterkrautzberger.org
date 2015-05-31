---
layout: post
title: 'Another silly experiment: mobile apps for content delivery'
date: 2013-03-30 20:21:59.000000000 +01:00
categories:
- publishing
- technology
tags:
- adobe
- mobile apps
- phonegap
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _cws_is_markdown_gmt: '2013-03-31 03:38:18'
  _cws_is_markdown: '2'
  _wpas_done_all: '1'
author:
  login: krautzberger
  email: p.krautzberger@gmail.com
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger


---

> Here's another post from the category "yet another silly idea" or "don't try this at home". Keep in mind that I have absolutely no idea about app development. In short, I don't know what I'm doing or what I'm talking about. But here it goes.

I've written in the past about the problems of mathematical content in ebooks (well, epub3 anyway). Ideally, we should all start producing epub3 files right now and use PDFs only for legacy. Of course, even if we had good workflows for this (which we don't), we'd still face the problems that our readers couldn't use our content as ubiquitously as PDFs. Which is a tragedy given how crappy PDFs perform on mobile devices -- which are slowly but surely becoming my favorite reading devices. (And even print media does [nothing but advertise](http://carta.info/51526/die-unterschwellige-botschaft-der-printmedien-hort-auf-uns-zu-lesen/) it)

So I wrote about how you could [include MathJax in an epub3 file](http://boolesrings.org/krautzberger/2013/01/13/how-to-include-mathjax-in-an-epub3-file-to-work-with-ibooks-and-possibly-others/) and hope for the best. But this is stupid. We can reliably create mathematical content in a mobile browser thanks to MathJax, but we can't easily do so in an offline, deliverable, stand-alone format.

Well, of course you can. MathJax is used in lots of mobile applications and there are even open source sample apps for developers to understand how to do this. Yet, authors don't want to be app developers. (Though especially $\LaTeX$-affine communities seriously need to make HTML the primary output format -- not print.)

Luckily for us, app developers these days have a similar problem and there is much innovation in mobile app frameworks that (aims to) make app development a "design once, compile everywhere" kind of thing.

Why don't we go for a two pronged approach? Especially one that has been used successfully already: let's develop our content for standards like epub3, offer it as such -- DRM free, leaving it to the competent (possibly trained) user to use that file -- but also provide a comfortable version by wrapping an app around our (standard-driven) content? (And really, why not offer both for the same price.) In other words, why not do what [O'Reilly has done for years](http://www.aldiko.com/blog/28-oreilly-books-now-available-as-android-apps-using-aldiko-technology).

Instead of waiting for yet another awesome but proprietary framework (like iBooks Author or Inkling), let's use an open source, standards oriented framework.

How hard would that be? Well, I decided to give it a try (warning: silliness levels rising).

I chose [Phonegap](https://en.wikipedia.org/wiki/PhoneGap) -- using HTML+CSS+javascript to develop hybrid apps seems fitting. Even more after hearing a wonderful quote an Adobe expert (Adobe bought PhoneGap): "the goal of Phonegap is to standardize itself out of existence". But really because of [Adobe PhoneGap Build](https://build.phonegap.com/) (honestly, I would never have imagined I'd get excited over an Adobe product, ever.)

Because even though you're using PhoneGap you'll (naturally) still need a complete development environment -- for each platform. That's a pain to set up. Thinking (not only) as an author, you just don't want to have to do that, you want to author and just wrap an app around it. Which is where PhoneGap Build comes in: a cloud compilation service. With a free account, you get one private project and infinitely many open source projects (and the peace of mind that you can always take your code home and compile it where you want). In fact, you can also simply link to a github repository to build an app (and [build your own webhook](http://www.mattgifford.co.uk/phonegap-build-github-post-commit-hooks)). Simple as that. (Of course, if you want to get an iOS version, you have to pay Apple for a developer license etc but let's ignore that.)

So how hard is it?

Well, if we want to start with a really, really simple example, we start with a [real example](https://github.com/phonegap/phonegap-start) and simplify it. Then you end up with something this "hard":

*   Create a file `config.xml`.

    <?xml version="1.0" encoding="UTF-8"?>
    <widget xmlns     = "http://www.w3.org/ns/widgets"
            xmlns:gap = "http://phonegap.com/ns/1.0"
            id        = "com.phonegap.peter-hello"
            version   = "2.2.0">
        <name>Peter's Hello</name>

        <description>
            Peter says hello.
        </description>

        <author href="http://boolesrings.org/krautzberger" email="admin@test.com">
            Peter
        </author>

        <feature name="http://api.phonegap.com/1.0/device" />

        <preference name="phonegap-version" value="2.2.0" />
        <preference name="orientation"      value="default" />
        <preference name="target-device"    value="universal" />
        <preference name="fullscreen"       value="false" />

    </widget>

I hope it's clear what you might want to modify.

*   Create a file `index.html`

    <!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
            <title>Peter's Hello</title>
        </head>
        <body>
          <h1> Hello!<h1>
        </body>
    </html>

Again, I think it's pretty clear, no?

*   Zip those two files up and upload the archive to PhoneGap Build.
*   Wait a bit.
*   Download and install your compiled app.
*   Done.

Well, actually, now you have to author your content. Some people call that the hard part ;) But when you're done authoring, you zip it up, upload it (or push to your github repo) and you got yourself an app.

Of course, you can now do all the crazy stuff you'd be stupid enough to do on the web itself. Knock yourself out! Here's an [example wrapping an old post of mine](https://build.phonegap.com/apps/323285/builds), adding some [reveal.js](https://github.com/hakimel/reveal.js) sparkle. Shiny, mostly useless -- but something you can't reliably produce in an epub3 right now (and nobody stops you from shipping an epub3 file of your content for download out of the app).

Of course, there's a lot (A LOT) that's wrong with this approach. I have no idea if this approach is feasible beyond very basic content. I have no idea how quickly you'll run into performance, memory or other hazardous problems. Nevertheless, this is not nothing. It shows what could be done and _should_ be done, by professionals.

In short, it shows why we don't have to take no for an answer when we ask for better mathematical content on mobile devices today.

* * *

Small edit: linked to the phonegap, corrected the Win8 comment.