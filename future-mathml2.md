[Sorry for the delay](/0169).


> Do not worry about your difficulties with MathML; I can assure you that mine are still greater.
>
> — [not Albert Einstein](http://en.wikiquote.org/wiki/Albert_Einstein#1940s).

I have written about why [I care about MathML](http://www.peterkrautzberger.org/0175/) and why I care about [Native MathML](http://www.peterkrautzberger.org/0176/).

Time to talk about some of the problems I have with MathML.  Please note I'm a member of the Math Working Group and I care deeply about MathML.

The problems I see are entirely focused on the web, the only domain where MathML struggles.

## HTML

MathML did not start out not as an XML language but as the `<math>` tag in HTML3. It was the browser vendors (Microsoft and Netscape) who rejected it so `<math>` went into XML exile and returned to HTML in HTML5.

But all OWP technologies stand and fall with the support and adoption from browser vendors. It does not matter how good (or bad) a web standard is or how well it works elsewhere. Browser vendor adoption is the only relevant measure.

# No news is not good news

It's been almost two years since I started to write ["MathML forges on"](http://radar.oreilly.com/2013/11/mathml-forges-on.html).

Back then, native browser support seemed to be on the tipping point. Dave Barton had done amazing work on improving Alex Milowski's WebKit code, the deactivation in Chrome seemed to be a hiccup that was quickly fixed. It seemed, with a little luck, Gecko and WebKit would have made it to the 80/20 point within a year, hopefully in turn get the Blink team to reconsider dropping the WebKit code and then watch as Trident (now Edge) would hurry to integrate the math support from Line Services.

Two years later, MathML is still the only viable markup language for mathematics on the web (recently reaffirmed by its ISO standardization), and yet, native browser support seems just as far away as ever. Gecko hasn't moved forward much, WebKit has barely moved, Trident/Edge remains a mystery, and Blink is "the villain".

Why?

## Who implements native MathML support?

The reason is banal. WebKit's and Gecko's (still quite partial) support has been almost exclusively implemented by volunteer contributors (mostly unpaid volunteers at that).

No browser vendor has ever worked on MathML support in their browser. (Yes, that's a bit unfair to Mozilla devs who are great -- sorry. I also know good people at Apple, Google, Microsoft; but those companies still all fail.)

The volunteers, on the other hand, come and go. Nobody is able to find significant funding and development is once again effectively dead.

I don't see how we can ever get native MathML support in browsers. The volunteer method does not work, the vendors are not interested.

## Where could we go instead?

The fact that browser vendors do not implement MathML says virtually nothing about MathML. Studying past discussions, it's clear that they barely know the spec, let alone the requirements of mathematical layout. (Again, a little unfair to individual devs.)

So there's no reason to give up on MathML, let alone math and science notation on the web. Because something has not changed: it's still the best markup for math on the web and education, industry, and research need good markup that works on the web.

Even without considering native implementations a goal, I think MathML will still be a trail blazer for scientific notation because it is, after all, a W3C standard and we know it works very well in the browser.

I think there are two directions that are necessary to explore:

1) how to do mathematical layout with the standards that are actually being implemented
2) how to leverage powerful underlying scientific formats such as MathML.
