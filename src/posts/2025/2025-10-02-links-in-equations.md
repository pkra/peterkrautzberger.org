---
layout: post
title: Probably don't put equation layout in links
date: 2025-10-02
permalink: 0224/
---

Links with complex content are a long standing accessibility challenge, essentially ever since HTML opened up the `a` tag to contain virtually anything else. Equation layout [is not accessible](/0218) and there is no single ARIA pattern that will help you make it so. So you need to adjust your approach as the situation requires - and, above all, as your users require.

One of my old sturdy helpers (to make mathjax and sre actually useful server-side) was having [a bit of a problem](https://github.com/krautzource/sre-to-tree/issues/41) recently. (You may think this is about links inside equation layout but it's actually about links wrapping around equation layout; it doesn't matter if the link is in or outside the equation layout wrapper.)

It took me forever to decide how I wanted to resolve this. Luckily, real world data came to the rescue: this simply doesn't seem to happen a lot in practical content. Or rather, this mostly happens when the equation layout is really just flat text (e.g., a number or letter or word). That's the trivial case - because that's not actually equation layout - and easy to resolve as it presents none of the actual complications commonly found in equation layout (i.e. highly compressed, ambiguous notation in 2-dimensional layout). However, every once in a while (in this data: 0.1% of the time) authors will put something non-trivial inside such links. 

And that's a problem. Elementary accessibility advice will tell you: don't nest interactive elements. One reason why equation layout is not accessible is that it usually requires complex interactive exploration to reach a minimal level of accessibility. When that's in a link, we have a problem. You don't have to hit [ACT rule 307n5z](https://act-rules.github.io/rules/307n5z) but there's generally a very good chance that the interaction models will interfere with each other, causing user confusion and developer headaches.

Now you could go the (client-side) mathjax/sre-way and just nuke the whole thing and build every interaction from scratch; who needs a platform when you have endless spans and javascript? Or you could join the fanatical purists and expect ATs to magically resolve this for you (because they are not part of the platform so you won't have to prove it actually works - win/win!). 

I'm a fan of the platform. Yes, it sometimes (often?) sucks because it's still so young and limited, especially when it comes to accessibility. You may have to push it to move things forward but [going against the grain](https://frankchimero.com/blog/2015/the-webs-grain/) is unwise. ARIA patterns in particular are fairly limited - but at least they are part of the platform. On my end, user testing has always shown a clear preference among users for standard ARIA patterns. Even if no pattern fits, giving users a pattern they know how to operate removes a significant barrier for them; that's what it's about. Users don't have a problem seeing a pattern used out of its typical context - they've probably seen so much worse - as long as it operates like that pattern should. 

Even if it's not going to be a perfect or even a great fit at least you're not forcing them to first figure out your magical ideas about UI or the gazillion shortcuts you put in. Seriously, who has time for that when they just want to read something that's difficult enough to grok as it is? (And yes, of course it makes it worse that accessibility traditions for equation layout remain are still stuck in the print era.)

So what to do with my little problem? Honestly, I got lucky. The real world data I'm dealing with showed that the non-trivial equation layout inside links was still pretty simple equations, e.g. a simple fraction or a simple base with short superscript. So adapting the simplest of patterns - a flat label - was sufficient. Don't overthink it, make it usable.

Of course that leaves the reverse case - links inside equation layout. Whaddayaknow, that's a hot mess, too, for effectively the same reasons. Let's see what the real world usage tells me when I get to improving that part.

All I'm saying is, maybe don't put equation layout in links. And when you have to, keep them simple so they can be flattened. Don't mess up your readers for no good reason. Texts with equation layout are usually hard enough. Bonus points: your underlined link ([because they should be](https://webaim.org/techniques/hypertext/link_text#underlining)) won't run into the trouble of (most likely) losing the underline under that equation layout (giving you a WCAG failure).
