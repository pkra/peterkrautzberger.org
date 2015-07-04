---
layout: post
title: Why markdown, not $\LaTeX$?
date: 2011-08-03
categories:
- mathjax
- technology
- thoughts on mathematics
tags:
- LaTeX
- markdown
- mathjax
- pandoc
- Qute
published: true
permalink: 0070/
---

Coming from $\LaTeX$ and its text-editor driven writing style, working with wordpress can seem a step back -- after all, most people, if they get excited about $\TeX$, very much despise the wysiwyg approach to writing.

### Its greatest strength, its greatest weakness

One solution is to continue working with $\LaTeX$ regardless. This is possible. There are tools to convert $\LaTeX$ to html such as tex4ht and more specific tools for converting to wordpress such as latex2wp and latex-to-wordpress (yes, two distinct projects). The problem, from what I can grasp about the technical side, is that $\LaTeX$ is only good at one thing: producing material typset for print -- dvi, ps, pdf. Of course, $\LaTeX$ is really, really good at that. But converting to other forms of publication seems to be its weakness.

When it comes to the web (and especially wordpress) it is useful to approach writing with a multitude of formats in mind. This is, in my opinion, a natural point of view for any researcher; our works are intended to become public and it serves our interests best if it is easy to view them whichever way is best for the person viewing it -- be it in print, on an ebook reader, a giant display or a tiny smartphone screen. With this in mind it seems better to write in a format that can be easily converted to other forms. The alternative could, of course, be to rely on specialized viewing software capable of adapting print output to such extreme circumstances. To me this seems rather absurd, espcially with respect to compatibility with future technologies.

Now if you are trained in the art of $\LaTeX$ anyway you probably appreciate its (rather special) take on separating structure from content. So for the writing for the web a similar approach makes sense. And this is where markdown and other lightweight markup languages come into the picture.

### Light as a feather, strong as steel

[Lightweight markup languages](http://en.wikipedia.org/wiki/Lightweight_markup_language) are a beautiful tool. They focus on two objectives: simple syntax and human readability. The first ensures a mulititude of conversion tools but the second one is historically even more important since their history goes at least back to the text consoles of the 80s.

Personally, I love the aesthetics of these markup languages. The human readability is pure pleasure. I think every experienced $\LaTeX$ user can agree that, much like any code, reading $\TeX$, especially somebody elses $\TeX$ can be its own private little hell. The syntax is complicated, cumbersome and cluttered -- and that's just the plain old $\LaTeX$ syntax without the added horror of thousands of packages and personal style files...

Instead, [markdown](http://daringfireball.net/projects/markdown/) for example is always readable (well, structurally anyway...). It excels at separating content from structure. It is fast to learn and to write (much faster than $\LaTeX$) and all this at essentially no cost compared to plain text writing.

Markdown is also incredibly strong. Thanks to programs such as the amazing [pandoc](http://johnmacfarlane.net/pandoc/), you can, after your actual writing is done, convert it to anything you want -- open office documents, $\LaTeX$, html, epub etc. So when you're interested in "typesetting", you can choose your tools for further processing -- or just leave it to the professionals.

### Reduce to the max

But markdown and its cousins do not come without drawbacks. You do not have the amount of options you have in $\LaTeX$, you don't have your extra packages, your private little hacks for typesetting at your disposal. You're forced to author your work with structural elements that can only be described as elementary (unless you move to middleweight languages like asciidoc or know some html wizardry).

I have experimented with $\LaTeX$ a lot over the years. I love typesetting and the potential of visually ingenious mathematical typesetting that helps the understanding of the reader. I often dream of meeting an Edward Tufte of mathematics -- no luck so far.

When I started writing on the web, I began employing simpler and simpler tools for writing mathematics. At first, because there was no other way (presenting mathematics online before MathJax was very hard) and after a while because writing is hard. Damn hard. And any technical distraction seemd unwarranted.

The minimal style forced upon you by a tool like markdown makes one thing crystal clear: nothing will save you when you write badly. No fancy diagrams, no clever equation numbering, no colorful plots.

I believe this reduction has helped me become a better writer, mathematical and otherwise. When there's your word and your word alone to convey a mathematical idea, a line of thought, a delicate proof, you will find the core of your mathematical writing talent, the true heart of how you write your mathematics well.

### But what about mathematics?

So I invite you to try out markdown or one of its cousins. They are easy to learn, great to work with and easy to convert to whatever ends your writing leads.

If you choose markdown and you write mathematical content you may have already had the experience of combining these when you posted on mathoverflow, math.stackexchange or other stackexchange communities. The textbox they use combines markdown and mathjax. In that sense, mathematics is extremely easy to handle. You just write $\TeX$ code as you're used to with the restriction of the (ever growing) set of mathjax commands.

If, like me, you like to write 'offline' there's no reason not to. A good friend of mine has written a wonderful little text editor called [Qute](http://www.inkcode.net/qute) that allows you to write markdown and mathjax on Mac/Linux/Windows with ease. It gives you the pleasure of editing plain text files with human readable markup while producing a live preview of the content. On top of that you profit from his uncanny talents of producing visually brilliant (and healthy) interfaces. Give it a try. Needless to say that this piece was written on Qute.

### Where to go from here

I'm not saying that any of the lightweight markup languages are the end all and be all -- they are not. I am saying that $\LaTeX$ isn't either (even though it is treated as such). What I attempted with this little piece is to open you up to the possiblity that your writing, and your mathematical writing at that, can benefit greatly from using tools that are backward compatible to whatever writing tools you feel safe with while allowing your writing to expand, intrinsically for yourself as well as toward reaching a greater variety of form.

And I cannot tell you how much I would enjoy hearing about your experience should you try it out.
