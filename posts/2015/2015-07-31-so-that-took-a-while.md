---
layout: post
title:  So that took a while
date: 2015-07-31
permalink: 0181/
---

I finally completed the blog migration I started a few months ago. Moving away from WordPress forced me to re-think a few parts and re-work a lot of content by hand. This was tedious but forced a worthwhile bit of introspection.

## Permalinks

Oh, permalinks. The name is so clean and yet so misleading. WordPress is so forgiving to both admins, authors and visitors. But leaving that paradise is fun, too. At one point I had renamed all posts in a way which led to a site with zero posts; hilarious.

I've switched to the simplest permalink structure -- enumeration. But then the question was: how many digits (I like my numbers to be the same string length)? I ended up with four digits. This is No.181 after 5 years of writing on the web, so it seems rather unlikely I'll reach 9999 in my life time. And if I do, I'd be happy to revisit this (@future self: sorry! it'll be a pain!).

## Comments.

I've been discussing the changes with Sam over the past few months. The biggest point of disagreement has been comments. Jekyll can't provide comments (obviously) and I am not interested in going back to Disqus (for various reasons). I also had the impression that comments were not doing it for me anymore. The ratio spam / useful comment was about 1000 to 1. Sure, Akismet took care of this and Disqus could, too. In addition, I'd get comments from other places (twitter, g+ or plain email) and since <del>I'm not a cool indieweb dev</del> it's never that many, I manually added them to posts.

In other words, I started to feel like comments are just not that useful anymore (caveat lector: see below) and that having a special technology for it seems overkill.

So for now, I'm going with comments-by-email, with a simple link at the end of each post, prepped with a subject line for you. Comments will then be added by myself. I'm hoping anybody willing to comment is willing to send me an email (anonymous or not). Maybe I'm wrong. I'll also pull in comments from other places (e.g., twitter). There's currently a hypothes.is opt-in as well. Not sure if I'll keep it though. Feedback would be nice.

As always, [xkcd.com/1357](http://xkcd.com/1357/) applies. If you really feel the need to comment, please do it on your own site.

## Reviewing my content

Having to do a lot of manual editing of my own work was a healthy experience. Yes, it drained time and varied from cringeworthy to depressing. But it also showed me that, once in a while, I still like my old writing. It also showed me some horrible crap, including one troll post which I'm keeping to remind me never to troll again. I hope it's the only one 😞.

I was surprised about the number of comments. One reason to go with email comments was the general lack of comments. Why keep extra technology on the site when I only get spam comments? But I admit I was surprised by the many (real) comments I have from my postdoc days and especially from other Booles' Ringers and mathblogging folks. You people are the best!

Oh, and it took me a while to realize that I had actually been on Jekyll before moving to WordPress. Guess that means I'm going back to WordPress in a few years. (@future self: again, very sorry! Let's wait until we hit 9999 posts, ok?) One thing I regret losing is the post-specific history from WordPress; couldn't get that to survive this migration (but will back the database up for myself). Hopefully git will improve this (with some auto-committing).

## Broken links

With Jekyll I switched on [some basic CI](https://travis-ci.org/pkra/peterkrautzberger.org) (thanks, Travis CI!), including html-proofer. With ~1000 links right now, it's no surprise that some of them are dead. Fixing the internal ones along the way of my review was easy enough. And for the rest (but not that many), I used the [Wayback Machine](https://archive.org/web/web.php); a handful are actually lost forever.

What was surprising to me was which links needed the Wayback Machine. It's not surprising that some random app on appspot goes down. But something on Harvard.edu or publishers.org? That's somewhat funny (and painful). Small niche blogs? They were solid. You are all awesome!

## What's next

Being on such a long hiatus (also caused by having other writing projects that bled me out), I want to get back into writing here. Since this site is now a git repo, you can file bugs on the [GitHub copy](https://github.com/pkra/peterkrautzberger.org) but also fin ideas for posts I put down as issues.

I was thinking about some technical posts on math on the web. And there's one post that's been in the works for months; I should finish that one. Or give it a few more months maybe; you know how these things go.
