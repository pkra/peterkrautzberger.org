---
layout: post
title: 'Another silly experiment&#58; mobile apps for content delivery'
date: 2013-03-30
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
permalink: 0135/
---

> Here's another post from the category "yet another silly idea" or "don't try this at home". Keep in mind that I have absolutely no idea about app development. In short, I don't know what I'm doing or what I'm talking about. But here it goes.

I've written in the past about the problems of mathematical content in ebooks (well, epub3 anyway). Ideally, we should all start producing epub3 files right now and use PDFs only for legacy. Of course, even if we had good workflows for this (which we don't), we'd still face the problems that our readers couldn't use our content as ubiquitously as PDFs. Which is a tragedy given how crappy PDFs perform on mobile devices -- which are slowly but surely becoming my favorite reading devices. (And even print media does [nothing but advertise](http://carta.info/51526/die-unterschwellige-botschaft-der-printmedien-hort-auf-uns-zu-lesen/) it)

So I wrote about how you could [include MathJax in an epub3 file](/0129/) and hope for the best. But this is stupid. We can reliably create mathematical content in a mobile browser thanks to MathJax, but we can't easily do so in an offline, deliverable, stand-alone format.

Well, of course you can. MathJax is used in lots of mobile applications and there are even open source sample apps for developers to understand how to do this. Yet, authors don't want to be app developers. (Though especially LaTeX-affine communities seriously need to make HTML the primary output format -- not print.)

Luckily for us, app developers these days have a similar problem and there is much innovation in mobile app frameworks that (aims to) make app development a "design once, compile everywhere" kind of thing.

Why don't we go for a two pronged approach? Especially one that has been used successfully already: let's develop our content for standards like epub3, offer it as such -- DRM free, leaving it to the competent (possibly trained) user to use that file -- but also provide a comfortable version by wrapping an app around our (standard-driven) content? (And really, why not offer both for the same price.) In other words, why not do what [O'Reilly has done for years [Wayback Machine]](https://web.archive.org/web/20130310082142/http://www.aldiko.com/blog/28-oreilly-books-now-available-as-android-apps-using-aldiko-technology).

Instead of waiting for yet another awesome but proprietary framework (like iBooks Author or Inkling), let's use an open source, standards oriented framework.

How hard would that be? Well, I decided to give it a try (warning: silliness levels rising).

I chose [Phonegap](https://en.wikipedia.org/wiki/PhoneGap) -- using HTML+CSS+javascript to develop hybrid apps seems fitting. Even more after hearing a wonderful quote an Adobe expert (Adobe bought PhoneGap): "the goal of Phonegap is to standardize itself out of existence". But really because of [Adobe PhoneGap Build](https://build.phonegap.com/) (honestly, I would never have imagined I'd get excited over an Adobe product, ever.)

Because even though you're using PhoneGap you'll (naturally) still need a complete development environment -- for each platform. That's a pain to set up. Thinking (not only) as an author, you just don't want to have to do that, you want to author and just wrap an app around it. Which is where PhoneGap Build comes in: a cloud compilation service. With a free account, you get one private project and infinitely many open source projects (and the peace of mind that you can always take your code home and compile it where you want). In fact, you can also simply link to a github repository to build an app (and [build your own webhook](http://www.mattgifford.co.uk/phonegap-build-github-post-commit-hooks)). Simple as that. (Of course, if you want to get an iOS version, you have to pay Apple for a developer license etc but let's ignore that.)

So how hard is it?

Well, if we want to start with a really, really simple example, we start with a [real example](https://github.com/phonegap/phonegap-start) and simplify it. Then you end up with something this "hard":

*   Create a file `config.xml`.

```xml
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
```

I hope it's clear what you might want to modify.

*   Create a file `index.html`

```html
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
```
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

---

_Comments_

* **Dana Ernst**, 2013/03/30
  Thanks for spending the time playing around. What is supposed to be done with the example .apk file that you link? That is, what am I supposed to use to open it?
  * **Peter**, 2013/03/30
  Oh yeah, I’ll edit it. That’s an Android app file. Just download it with an Android device and it will (after disabling some security setting) allow you to install it.
    * **Dana Ernst**, 2013/03/30
    Oh, I’ve only got iOS devices.
      * **Peter**, 2013/03/30
      Ah, sorry — iOS compilation needs an iOS developer license which costs money I don’t want to spend. You can try Windows and Symbian 😉 Or androvm with virtualbox (which everybody should have).
      * **Peter**. 2013/03/30
      You could unzip the file and look at the content in a browser.
* **Asaf Karagila**, 2013/03/31
  I should point out that sometimes (and recently more often than not) when loading math.SE or MO pages full with MathJax the browser on my iPhone 4 hangs, crashes, and sometimes loads the page on the next load. Less common, but not unfamiliar are Atom Z2670 (x86) hangs (which completely paralyze my poor tablet, despite being top of the line), and also familiar are the x64 hangs on my linux, but these are much much more rare (nowadays anyway).
  Whether or not it’s the SE software or not, I can’t say that I trust MathJax fully for a 20, 50, or 150 pages long paper. PDF may be somewhat slow, but it works just fine most of the time. Despite not being a big fan of change, I am willing to try the new formats on my Win 8 tablet, but I am also concerned about the stability of such experiment (not the whole system, just local to the application) if many large files are opened simultaneously.
  * **Peter**, 2013/03/31
  Sorry to hear that. We’ve heard stories like yours but nothing re-producible. Be sure to let me know if you find something we could track! It might be bugs in mobile Safari 6 and IE10 that we’re not yet aware of.
  Performance is not really a problem after MathJax has run. So for example, in a mobile app a good programmer/author would store the rendering in localstorage, so that MathJax really only ran once — after that it would all be “looking at HTML”. Similarly, if you want to store large documents, you’d chop them up and only load parts etc. So while all my attempts are naive, I have seen enough smart people (especially among the MathJax sponsors) do a lot of awesome stuff.
  One key problem with PDF is that it’s not accessible. Since accessibility actually benefits everyone (because you have do do better design to be accessible), that alone should be a reason to leave it behind. But more importantly: we need to experiment! I don’t think anyone believes the web will suddenly be re-written in TeX. HTML is where it’s at. Yet we don’t even know what “mathematics native on the web” could be. Currently, all mathematics is like ebooks: a faithful copy of what was done in the print past — it just happens to be a digital copy (PDF being the prime example but most other forms of online mathematics are that way, including MathOverflow and math.SE). It’s not surprising. The printing press output was essentially “scroll reproductions” for the first hundred years. We need to really start experimenting what math in the times of the web will become. Bret Victor has some interesting examples (the small networks paper, not the kill math stuff), mathbox is another cool one. But also mathematical storytelling, creation and collaboration has ways to go.
  * **Asaf Karagila**, 2013/04/01
  I only did one thing with IE10 when I got the tablet. I opened the Mozilla site and downloaded Firefox… :-)
  As for mathematics on the web, I agree. Now that I have a Wacom digitizer pen I stopped scribbling math (at least serious math) on paper. I have been looking for a chance to collaborate with someone digitally, but that didn’t happen yet.
  I think that the problem is that currently PDF is pretty much the only format I can write into the document in a relatively smooth and working way (at least without paying a lot of money for a software which may or may not work). This is huge. It means that I really don’t have to print something, I can just write remarks into a paper I am reading. When I’m grading papers I do it like that, and it’s great.
  The future holds many secrets, but I have a hunch that digital pens will become ever more popular, and that collaboration on the web should be prepared for that. Not just HTML/JS/MathJax sort of collaborations, that for itself is nice, but won’t be enough in the long run.
  Lastly, for the hanging math pages, I think that the correct solution would be to develop some downloadable MathJax compilation server, that would “hijack” the calls to the web and do things on the computer. Yes, somewhat like downloading the JS scripts in advance, and redirecting the traffic from the web to your computer. While debugging on the iPhone is really impossible, I suspect that this may be – at least to some extent – the culprit in the case of my tablet.
* **John P. Wheeler**, 2013/10/28
  Thanks for this article! I really like the disclaimer you included in the beginning. I’m thinking of playing around with it as well.
  * **Peter**, 2013/10/30
  Thanks, John, glad to hear this is of use. Let me know how it goes!
