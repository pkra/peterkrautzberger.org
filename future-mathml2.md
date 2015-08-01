[Sorry for the delay](/0169).


> Do not worry about your difficulties with MathML; I can assure you that mine are still greater.
>
> — [not Albert Einstein](http://en.wikiquote.org/wiki/Albert_Einstein#1940s).

I have written about why [I care about MathML](http://www.peterkrautzberger.org/0175/) and why I care about [Native MathML](http://www.peterkrautzberger.org/0176/).

Time to talk about some of the problems I have with MathML.  Please note I'm a member of the Math Working Group and I care deeply about MathML.

The problems I see are entirely focused on the web, the only domain where MathML struggles.

## HTML

MathML did not start out not as an XML language but as the `<math>` tag in HTML3. It was the browser vendors (Microsoft and Netscape) who rejected it so `<math>` went into XML exile and returned as part of HTML in HTML5.

But all OWP technologies stand and fall with the support and adoption from browser vendors. It does not matter how good (or bad) a web standard is or how well it works elsewhere. Browser vendor adoption is the only relevant measure. (Don't get me wrong, I'm pretty open as to how we get to browser vendor adoption of standards, including regulation.)

# No news is not good news

It's been almost two years since I started to write ["MathML forges on"](http://radar.oreilly.com/2013/11/mathml-forges-on.html).

Back then, native browser support seemed to be on the tipping point. Dave Barton had done amazing work on improving Alex Milowski's WebKit code, the deactivation in Chrome seemed to be a hiccup that was quickly fixed.

With a little luck, Gecko and WebKit would have made it to 80/20 point, hopefully in turn get the Blink team to reconsider dropping the WebKit code and then watch as Trident (now Edge) would hurry to integrate the math support from Line Services.

Two years later, MathML is still the only viable markup language for mathematics on the web, recently reaffirmed by its ISO standardization. And yet, native browser support seems just as far away as ever.

In the last two years, Gecko hasn't moved forward much (some under the hood improvements in early 2014), WebKit has barely moved, Trident/Edge remains a mystery, and Blink is "the villain".

Why?

## Who implements native MathML support?

The reason is relatively banal. WebKit's and Gecko's (still quite partial) support has been almost exclusively implemented by volunteer contributors, mostly unpaid. Mozilla is really the only company that has ever actively supported volunteers (via GSoC, with bug fixes and with design decisions). I doubt anyone at Apple even knows the MathML code in WebKit well enough to tell you how it roughly works.

In short, no browser vendor has ever worked on MathML support in their browser. (Yes, that's a bit unfair to Mozilla devs who are great -- sorry. There are also good people at Apple, Google, Microsoft; but the companies fail.)

The volunteers, on the other hand, come and go. Nobody is able to find significant funding. And development has been effectively dead for over a year now.

So I'm giving up on native MathML support in browsers for now.

## Where could we go instead?

The fact that browser vendors do not implement MathML says virtually nothing about MathML because they and their developers barely know the spec or anything about mathematical layout. And that's ok.

So there's no reason to give up on MathML, let alone math and science notation on the web. Because something has not changed: it's still the best markup for math on the web.

I think there are two directions that are necessary to explore:

1) how to do mathematical layout with the standards that are actually being implemented
2) how to leverage powerful underlying scientific formats such as MathML.
