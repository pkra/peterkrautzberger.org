---
layout: post
title: epub, mathjax and the iPad -- another attempt
date: 2011-10-17
categories:
- technology
tags:
- calibre
- ecub
- epub
- iPad
- mathjax
- mathml
- pandoc
published: true
permalink: 0087/
---

It's a funny thing. I don't even own an iPad. But a lot of people are interested in [getting an epub file with mathjax working](/0064/) on the iPad.

Why is that? Well, as far as I could find out the iPad remains the only "hardware" that does not block javascript within an epub file (epub uses html for its content but javascript is designated "should not" in the epub2 standard). Of course it's really the software, iBooks, but mentioning the iPad will be much better SEO. ;)

Incidentally, the only other software I know that is not blocking javascript is the fantastic [Calibre](http://calibre-ebook.com/). Calibre's reader seems to not care at all about enforcing the epub standard, it just render everything it finds (but I'll get to that later).

## So what happened?

A while ago, after an email exchange which is now [mostly available online](http://groups.google.com/group/mathjax-dev/browse_thread/thread/1190dc76b7b88a02?hl=en), I finally created an epub with a complete mathjax installation. Unfortunately, it was a fluke. The file was was not reliably rendered on the iPad, most likely because of its size (MathJax has 30.000 files for ~20MB unzipped). So [Davide Cervone](http://www.math.union.edu/~dpvc/) suggested to cut down on unnecessary files which iBooks should not need.

This led to a result that rendered reliably -- unfortunately it rendered in a most irritating fashion: half a line below the intended one, writing happily across any other text on the next line, trailing out of the margin etc. That's far from perfect, obviously.

In the mean time, Davide was able to use my epub file to run some tests -- and [yesterday told us](http://groups.google.com/group/mathjax-dev/browse_thread/thread/1190dc76b7b88a02/ed1882e29659678c?hl=en&) that things are looking much better now that he can work on the issues.

Of course, iOS5 was released last week. It's not clear to me if iBooks already supports epub3, but I know that Safari now supports (some) MathML so there's a chance that iBooks would (since it uses the webkit variant of Safari to render html). So when I had a quick chance last Friday to get my hands on a friend's freshly updated iPad, I cooked up a quick test file and it rendered; it wasn't perfect but not totally bad either. With my luck, of course, this will also be a fluke and I won't know before I get my hands on that iPad again...

In the mean time, and for posterity, here's how I create epub files. (for the Pros: get ready to laugh at a dilettante).

## The tools

Get your hands on

*   [MathJax](http://www.mathjax.org/) (duh!)
*   [pandoc](http://johnmacfarlane.net/pandoc/) or [ecub](http://www.juliansmart.com/ecub)
*   [calibre](http://calibre-ebook.com/)

That's it. (Well, unless you don't know what those are and how to use them -- I won't cover how to install and run these).

All but ecub is open source, ecub is at least free for personal use -- and of course everything runs on Linux, MacOS and Windows (I mostly use linux and sometimes a Mac; I can't make guarantees for Windows).

## Creating a minimal epub file with pandoc

I love pandoc (ecub was a great help, too, more about that later) so I'll focus on it.

[As you may know](/0070/), here at Booles' Ring I write using markdown and MathJax. I use pandoc whenever I want to convert this kind of content into something else (like LaTeX). But pandoc (as its name suggest) can handle much more.

So hit it! Take your favorite test html file ([I use this post](/0082/)).

```bash
  pandoc test.html -o test.epub
```

That should give you a working epub file -- it ain't fancy, but it'll do for testing. Be warned that pandoc does not check if your (x)html actually validates. Since the iPad is picky about having valid epub files you should double check (I totally failed the first time and it took me ages to remember this...).

Fortunately, you installed calibre which includes a binary of epub-fix from the [epub-tools](http://code.google.com/p/epub-tools/) by the fabulous people over at [threepress](http://threepress.org/).

So you find the epub-fix binary and run

```bash
  epub-fix --epubcheck test.epub
```

If epub-fix finds errors, fix them: go into the epub file (which is just a zip file) and fix the (most likely html) file that throws an error; in the post I use, the html should complain about a part of the vimeo embedding.

When epub-fix is happy, send the file over to the iPad for a test spin (I use Dropbox for ease of sync). If even a simple test file does not work, throw your epub into [threepress's online validator](http://threepress.org/document/epub-validate) just to be sure.

Oh, one more thing: remember to always delete your file from iBooks before your load its updated version. In my experience, iBooks does not update the file when something with the same metadata is already in the iBooks library (or maybe just sometimes, I don't know, just watch out for that).

## Slimming down mathjax

Well, right now we have a nice epub. But if you view it anywhere it will have your typical LaTeX commands all over the place -- we need to add mathjax!

Davide Cervone gave me some advice to reduce a mathjax installation to a mere 1.3MB.

*   remove the MathJax/fonts/HTML-CSS/TeX/eot, svg, and png directories
*   remove the two OFT-files that start with "MathJax_Win" (guess why...)
*   remove the MathJax/unpacked, test, and docs directories
*   If you are only using TeX input (not MathML), then use the TeX-AMS_HTML-full configuration file.
*   In that case, remove the MathJax/jax/input/MathML, MathJax/jax/output/NativeMML directories, the MathJax/extensions/mml2jax.js and MathJax/extensions/jsMath2jax.js .
*   remove the "FontWarnings" and "v1.0-warnings" extensions, as well as all the configuration files you are not using.
*   remove the MathJax/jax/output/HTML-CSS/fonts/STIX directory

Now that your MathJax installation is small and tidy, just copy the remaining files into a suitable folder (how about "mathjax"?) inside the epub -- an epub file is simply a zip file after all.

While you're at it, you should add a suitable MathJax configuration to the html files in your epub file. If you're using my post from above, you should add

```html
  <script type="text/x-mathjax-config">  
    MathJax.Hub.Config({  
      tex2jax: {  
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],  
      displayMath: [ ['$$','$$'], ["\\[","\\]"] ],  
      processEscapes: true  
      },  
    });  
  </script>  
  <script type="text/javascript" src="mathjax/MathJax.js?config=TeX-AMS_HTML-full"> </script>
```

If you don't use dollar signs for inline math, just take the last line.

## Fixing your epub.

After this copying, we'll have to repair our epub file. An important fact about epub: all files must be listed in the manifest (OPF) file. Since we don't want to do that manually, we use epub-check again.

```bash
  epub-fix --unmanifested --epubcheck test.epub
```

The "unmanifested" option (you guessed it) will ensure that all files will be added to the manifest. Beware: don't try this on a full MathJax! Epub-fix will slow down after the first 1.000 files...

Now transfer your file to the iPad and low and behold some mathjax will render! Of course, you'll find that this is not working: the rendering is broken right now. (As mentioned earlier, Davide is working on it)

## iOS5 to the rescue?

Now this post gets flaky. As I wrote earlier, I have only had one test run with an iOS5 iPad, so this might not work. But the process is worthwhile documenting.

As I said above, the thing about iOS5 is that Safari and hence iBooks finally has some MathML support.

Since pandoc is incredibly versatile you won't be surprised that it can produce MathML and that it is aware of MathJax. So all we have to do is modify our earlier command.

```bash
  pandoc test.html --mathml -o test.epub
```

This way, the html now has mathml instead of the LaTeX commands. Just shoot this over to your iPad and see how it renders. What I remember from my quick test with my post mentioned earlier was that some characters would render twice (which I had seen with that unreliable full install of MathJax I mentioned earlier). Also, MathJax's support for commands like \\color obviously won't work without adding MathJax again.

Alternatively, you could try using MathJax's mathml-rendering and see what happens (I hope to test that next week).

## But what if I want to have it all?

As I wrote, I also created an epub file that had a full mathjax install inside of it. This is a terrible idea because a) it rendered only sometimes on the iPad b) every other ebook viewer rejected it or crashed.

But if you cannot resist (or want to modify my approach), here's the a hurried how-to. Since epub-fix will come to a grinding halt adding 30.000 files to a manifest, use ecub instead.

Start ecub and use the new-project wizard, it's pretty self-explanatory. Two points might be worth pointing out:

*   At "Choose import method" you'll want "from an existing html file".
*   At "Convert text files" check only "add any HTML file found" and "Also find files in folders under your project folder" (this step will take a short while).

After you're back at the main window, you'll still need to "compile" your epub file. This will take a **long** time. So long, in fact, you'll think ecub is hanging. To convince yourself that it isn't go to the project folder you designated in the wizard and watch the 30.000 files be copied into the folder and then watch content.opf grow in size (end result is ~3.5MB).

## Where do we stand?

So for now, we have two broken ways to display mathematical content in an epub file on the iPad: use slimmed down MathJax or use MathML directly. Neither works perfectly but the key point is: they work in principle. Now we can look into the specifics to make things work better. Davide is looking into the mathjax side of things and with webkit (hence Safari, hence iBooks) there's reason to hope that mathml support will improve, too.

Of course, what I really want is an Android reader with javascript or mathml support...

And that's it for today. Any questions?

* * *

Addendum

Here are two files at your disposal.

*   [An epub with a slim mathjax installation](http://dl.dropbox.com/u/4999562/flat_slimmathjax_ecub.epub) (created with ecub).
*   [An epub with mathml, no mathjax](http://dl.dropbox.com/u/4999562/flat_mathml_pandoc.epub) (created with pandoc).
