[Sorry for the delay](/0169).


> Do not worry about your difficulties with MathML; I can assure you that mine are still greater.
>
> — [not Albert Einstein](http://en.wikiquote.org/wiki/Albert_Einstein#1940s).

I have written about why [I care about MathML](http://www.peterkrautzberger.org/0175/) and why I care about [Native MathML](http://www.peterkrautzberger.org/0176/).

Time to talk about some of the problems I have with MathML.

These are personal thoughts, not indicative of the position of any project I might work on, in particular not the thoughts of the MathJax team.

So before you start thinking "this guys says MathML is bad, OMG it must be so bad / he must be so evil", please note that I'm a member of the [W3C Math Working Group](http://www.w3.org/Math/) and I care deeply about MathML and the mission of the Math Working Group [to facilitate and promote the use of the Web for mathematical and scientific communication](http://www.w3.org/Math/Documents/Charter2006.html).

Also note that the problems I see are entirely focused on the web, the only domain where MathML continues to struggle.

## The rise and fall of MathML

MathML did not start out not as an XML language but as the `<math>` tag in HTML3. It was the browser vendors (Microsoft, Netscape) who rejected it so `<math>` went into XML exile and returned to HTML in HTML5.

But all OWP technologies stand and fall with the support and adoption from browser vendors. It does not matter how good (or bad) a web standard is or how well it works elsewhere. Browser vendor adoption is the only relevant measure.

# No news is not good news

It's been almost two years since I started to write ["MathML forges on"](http://radar.oreilly.com/2013/11/mathml-forges-on.html).

Back then, native browser support seemed to be on the tipping point. Dave Barton had done amazing work on improving Alex Milowski's WebKit code, the deactivation in Chrome seemed to be a hiccup that was quickly fixed. It seemed, with a little luck, Gecko and WebKit would have made it to the 80/20 point within a year, hopefully in turn get the Blink team to reconsider dropping the WebKit code and then watch as Trident (now Edge) would hurry to integrate the math support from Line Services.

Two years later, MathML is still the only viable markup language for mathematics on the web (recently reaffirmed by its ISO standardization), and yet, native browser support seems just as far away as ever. Gecko hasn't moved forward much, WebKit has barely moved, Trident/Edge remains a mystery, and Blink is "the villain".

Why?

## Who implements native MathML support?

WebKit's and Gecko's (still quite partial) support has been almost exclusively implemented by volunteer contributors (mostly unpaid volunteers at that).

No browser vendor has ever worked on MathML support in their browser. (Yes, that's a bit unfair to Mozilla devs who are great -- sorry. I also know good people at Apple, Google, Microsoft; but those companies still all fail.)

The volunteers, on the other hand, come and go. Nobody is able to find significant funding and development is once again effectively dead.

I don't see how we can ever get native MathML support in browsers. The volunteer method does not work, the vendors are not interested.

## Where could we go instead?

The fact that browser vendors do not implement MathML says virtually nothing about MathML. Studying past discussions, it's clear that they barely know the spec, let alone the requirements of mathematical layout. (Again, a little unfair to individual devs.)

So there's no reason to give up on MathML, let alone math and science notation on the web. Because something has not changed: it's still the best markup for math on the web and education, industry, and research need good markup that works on the web.

Even without considering native implementations a goal, I think MathML will still be a trail blazer for scientific notation because it is, after all, a W3C standard and we know it works very well in the browser.

I think there are two problems we can focus on that are just as useful

1) how to do mathematical layout using the web standards that are actually being implemented and how to improve both
2) how to expose the underlying scientific formats such as MathML (but also CML, PhyloXML, CellML etc).

And both of these are nearly solved already.

For 1), we now know that current browser rendering engines are good enough for math layout. And I don't mean client-side rendering via polyfills. Modern browsers (think IE9+) are good enough to allow you to convert MathML "statically" into HTML or SVG markup so that the result (think of a static HTML page here) provides TeX-level layout on all browsers.

The only problem is that the markup itself is horribly complicated and hard to generate -- just look at what MathJax generates spans spans spans. Still, I think this situation is no different from Bootstrap or Foundation grids "sucking" in terms of layout compared to css-grid layout grids.

I think we can and should build on the currently-possible markup  and work on improving the actually implemented web standards so that the layout you need for good math layout becomes cleaner and thus easier to generate (both in terms of structure and performance).

For 2), if you look at the semantic web, it is not being realized in terms of HTML tags. It's being realized via aria roles, RDFa and microformats. I'm not sure any of those are fitting for the semantic structure of MathML but I'm sure something sufficient can be created.
