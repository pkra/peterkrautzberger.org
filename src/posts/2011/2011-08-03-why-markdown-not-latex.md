---
layout: post
title: Why markdown, not $\rm\LaTeX$?
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
latex: true
---

Coming from $\rm\LaTeX$ and its text-editor driven writing style, working with wordpress can seem a step back -- after all, most people, if they get excited about $\rm\TeX$, very much despise the wysiwyg approach to writing.

### Its greatest strength, its greatest weakness

One solution is to continue working with $\rm\LaTeX$ regardless. This is possible. There are tools to convert $\rm\LaTeX$ to html such as tex4ht and more specific tools for converting to wordpress such as latex2wp and latex-to-wordpress (yes, two distinct projects). The problem, from what I can grasp about the technical side, is that $\rm\LaTeX$ is only good at one thing: producing material typset for print -- dvi, ps, pdf. Of course, $\rm\LaTeX$ is really, really good at that. But converting to other forms of publication seems to be its weakness.

When it comes to the web (and especially wordpress) it is useful to approach writing with a multitude of formats in mind. This is, in my opinion, a natural point of view for any researcher; our works are intended to become public and it serves our interests best if it is easy to view them whichever way is best for the person viewing it -- be it in print, on an ebook reader, a giant display or a tiny smartphone screen. With this in mind it seems better to write in a format that can be easily converted to other forms. The alternative could, of course, be to rely on specialized viewing software capable of adapting print output to such extreme circumstances. To me this seems rather absurd, espcially with respect to compatibility with future technologies.

Now if you are trained in the art of $\rm\LaTeX$ anyway you probably appreciate its (rather special) take on separating structure from content. So for the writing for the web a similar approach makes sense. And this is where markdown and other lightweight markup languages come into the picture.

### Light as a feather, strong as steel

[Lightweight markup languages](http://en.wikipedia.org/wiki/Lightweight_markup_language) are a beautiful tool. They focus on two objectives: simple syntax and human readability. The first ensures a mulititude of conversion tools but the second one is historically even more important since their history goes at least back to the text consoles of the 80s.

Personally, I love the aesthetics of these markup languages. The human readability is pure pleasure. I think every experienced $\rm\LaTeX$ user can agree that, much like any code, reading $\rm\TeX$, especially somebody elses $\rm\TeX$ can be its own private little hell. The syntax is complicated, cumbersome and cluttered -- and that's just the plain old $\rm\LaTeX$ syntax without the added horror of thousands of packages and personal style files...

Instead, [markdown](http://daringfireball.net/projects/markdown/) for example is always readable (well, structurally anyway...). It excels at separating content from structure. It is fast to learn and to write (much faster than $\rm\LaTeX$) and all this at essentially no cost compared to plain text writing.

Markdown is also incredibly strong. Thanks to programs such as the amazing [pandoc](http://johnmacfarlane.net/pandoc/), you can, after your actual writing is done, convert it to anything you want -- open office documents, $\rm\LaTeX$, html, epub etc. So when you're interested in "typesetting", you can choose your tools for further processing -- or just leave it to the professionals.

### Reduce to the max

But markdown and its cousins do not come without drawbacks. You do not have the amount of options you have in $\rm\LaTeX$, you don't have your extra packages, your private little hacks for typesetting at your disposal. You're forced to author your work with structural elements that can only be described as elementary (unless you move to middleweight languages like asciidoc or know some html wizardry).

I have experimented with $\rm\LaTeX$ a lot over the years. I love typesetting and the potential of visually ingenious mathematical typesetting that helps the understanding of the reader. I often dream of meeting an Edward Tufte of mathematics -- no luck so far.

When I started writing on the web, I began employing simpler and simpler tools for writing mathematics. At first, because there was no other way (presenting mathematics online before MathJax was very hard) and after a while because writing is hard. Damn hard. And any technical distraction seemd unwarranted.

The minimal style forced upon you by a tool like markdown makes one thing crystal clear: nothing will save you when you write badly. No fancy diagrams, no clever equation numbering, no colorful plots.

I believe this reduction has helped me become a better writer, mathematical and otherwise. When there's your word and your word alone to convey a mathematical idea, a line of thought, a delicate proof, you will find the core of your mathematical writing talent, the true heart of how you write your mathematics well.

### But what about mathematics?

So I invite you to try out markdown or one of its cousins. They are easy to learn, great to work with and easy to convert to whatever ends your writing leads.

If you choose markdown and you write mathematical content you may have already had the experience of combining these when you posted on mathoverflow, math.stackexchange or other stackexchange communities. The textbox they use combines markdown and mathjax. In that sense, mathematics is extremely easy to handle. You just write $\rm\TeX$ code as you're used to with the restriction of the (ever growing) set of mathjax commands.

If, like me, you like to write 'offline' there's no reason not to. A good friend of mine has written a wonderful little text editor called [Qute](http://www.inkcode.net/qute) that allows you to write markdown and mathjax on Mac/Linux/Windows with ease. It gives you the pleasure of editing plain text files with human readable markup while producing a live preview of the content. On top of that you profit from his uncanny talents of producing visually brilliant (and healthy) interfaces. Give it a try. Needless to say that this piece was written on Qute.

### Where to go from here

I'm not saying that any of the lightweight markup languages are the end all and be all -- they are not. I am saying that $\rm\LaTeX$ isn't either (even though it is treated as such). What I attempted with this little piece is to open you up to the possiblity that your writing, and your mathematical writing at that, can benefit greatly from using tools that are backward compatible to whatever writing tools you feel safe with while allowing your writing to expand, intrinsically for yourself as well as toward reaching a greater variety of form.

And I cannot tell you how much I would enjoy hearing about your experience should you try it out.

---

_Comments_.

* **Felix**, 2011/08/24
  Thanks for the mention of <a href="http://www.inkcode.net/qute" rel="nofollow">Qute</a>! Of course, this is one of my favorite topics, so I cannot resist adding a few points. :)
  I totally agree that lightweight markup languages have great potential. But for my taste Markdown is a bit too lightweight. I think *some* layout can help a great deal when communicating an idea, and here lightweight markup languages such as Textile can offer a bit more power without sacrificing readability.
  I would also like to point out that while these lightweight markup languages are great for writing they are *not* that easy to transform from a programmer's point of view - XML and especially Lisp's S-expressions are much more amenable to transformation. As a result lightweight markup languages are not that easily *extensible*.
  TeX was built to be extensible. In fact, AFAIK, Knuth intended for TeX to be a programming language for writing document formatting languages. Only, users just used TeX directly. And this resulted in the mess (La)TeX users are currently in. One reason for the headaches LaTeX packages frequently cause is that - for a markup language - TeX is very *bad* at separating content from layout. In fact, TeX is not a markup language at all, but a programming language - an imperative one, even! As Joris van der Hoeven put it once (IIRC): TeX is a great programming language, but a terrible file format.
  The web standards - XML, CSS, XSLT - excell at separating content from layout. There is one language for *writing* the document (XML), a separate (functional) language for *programming* extensions to the language (XSLT) and a convenient language for styling documents (CSS). The downside, of course, that this beautiful separation of concerns came at the expense of human readability - or at least human *write*ability.
  But one should be aware that XML was never intended to be written by hand. There were always supposed to be editors that did the job for you! Only, these editors never reached the critical mass necessary to change the way people write. Nonetheless, editors that are WYSIWYG *and* extensible *and* make the structure of the document transparent to the user are possible. If you have never used <a href="http://www.texmacs.org" rel="nofollow">TeXmacs</a>, you should try it out! I think, in the long run, structured WYSIWYG editors are the way to go. In the meantime, I think writing markup is the way to go, and as we have to do it by hand, the language should be lightweight.
  This leaves the issue of extensibility. This is of course only an issue for power users - but LaTeX users who write their own stylesheets fall in this category. Also, extensibility becomes an issue, e.g., when integrating Markdown with TeX syntax.
  I think the best way to go is to empower people to cook up their own markup languages (so they can *write* documents in any way they see fit) and to give them the tools to develop the compilers necessary to transform their documents into any other format (so they can *publish* documents in standard formats). <a href="http://tinlizzie.org/ometa/" rel="nofollow">OMeta</a> is one example of such a tool. It put special emphasis on extensibility and the <a href="http://www.vpri.org/pdf/tr2010004_steps10.pdf" rel="nofollow">STEPS</a> project of <a href="https://web.archive.org/web/20121020134318/http://www.viewpointsresearch.org/">VPRI [Wayback Machine]</a> has demonstrated that it can be used to write nontrivial compilers in few readable lines of code. (Of course, at this point, you may call me crazy. Encouraging *authors* to write *compilers*! Seriously!?! Well, (La)TeX is doing the same thing! Only we should try to do it better.)
  Well, I will stop for now. :) But I will blog about this in the future.
* **Felix**, 2011/08/24
  One more concrete question: Have you ever used pandoc to convert Markdown + TeX to PDF? If yes, what exact workflow did you use? What were your experiences?
  (I am asking, because I noticed that printing MathJax-formatted TeX from webbrowsers often sucks.)
  *  **Mclearc**, 2012/03/15
  the current version of pandoc (1.9.1.2) seems to integrate latex commands pretty seamlessly into its markdown and then passes them through to pdflatex or whathaveyou. Anything between “$$” will be treated as TEX math. And I regularly incorporate header/footer info as well as other little bits and bobs into my markdown. If all you’re doing is sending it to PDF it should work seamlessly from the command line. No need to even open TexShop (or whatever).
* **Peter**, 2011/08/24
@Felix, thanks for your long and detailed comment. Fascinating to read your comment on the technical aspects of TeX.
Regarding the “markdown is too light”. I must disagree with you. I stand by what I wrote: if you cannot write well with markdown+MathJax, you cannot write well. Simple as that. This does not mean that there isn’t a point to refined typesetting as a final step. But this step should be done in cooperation with professionals, not on our own (the arrogance!).
Personally, I have read too many papers hiding bad writing behind fancy diagrams. I have had too many conversations about hipster TeX packages that give teh-awesomsauce-TM!!!11!eleventy!1! — you will remember that I was once just like that…
I know it is easy to be blinded by the technology and I think it appeals greatly to many mathematicians. I sympathize with the feeling. If you invest so much time in mastering these tools and, above all, into finding ways to express you ideas with them, it’s hard to admit that this actually does not facilitate communication with others.
  * **Felix**, 2011/08/26
  @Peter: I agree that professional typesetting is something every text can benefit from (I you can afford it) and that you have to work on your *writing* no matter what *layout* skills you have. I think layout is still relevant, though. Just a few days ago, I read a classic book by Minkowski which was all "Fließtext" without any modern layout at all - and this was simply hard to parse, for me! But I like the way you use a subtle CSS styles together with Markdown's blockquotes on your blog to emphasize text blocks. This may well be all I need.
  I have to protest against your diss'ing diagrams though. :) I frimly believe that mathematics would benefit a lot, if people tried harder to visualize the objects they are dealing with and to communicate their visual intuition. If I thought otherwise, I would not have just started a <a href="http://blog.felixbreuer.net/2011/08/23/visualising-numbers-part1.html" rel="nofollow">lecture series</a> on the subject. But maybe I am just too focused on visualization and that's why I could never get my arms around set theory... ;)
* **Peter**,  2011/08/24
Oh, and something like
  `pandoc -f markdown -t latex –mathjax`
works quite well.
* [Pingback](http://ptsefton.com/2011/10/18/worddown-word-to-html5-conversion-tool.htm), 2011/10/18
* **John Baker**, 2012/03/06,
  Thanks for your thoughtful remarks.  I wish I had come across them before working through a project to convert WordPress Blogs to LaTeX+PDF and EPUB and MOBI formats:
  http://wp.me/pDcwA-EC
  In the process I stumbled upon pandoc and markdown and even though I am a longtime LaTeX user I completely agree with your points.
  One additional point in markdown’s favor is it’s inherent archival quality. As long as we can edit text files we can read it. This is not true of binary formats, ODT, DOCX and even PDF.  In my  lifetime I’ve already experienced “bit-loss” due to ever changing word processing files.  For a format to survive over the long run (centuries) it has to be human readable, open and beyond the control of software companies and governments.
  * **Peter**, 2012/03/08
  I agree, the archival value is impressive even though I’m not as worried about stability of open formats, HTML in particular.
* **Carl Mummert**, 2012/03/13
  In my opinion, the main thing that MathJax lacks is not layout.  I typically just ignore the layout when I write in LaTeX, although the typesetting will still end up much better than in a web browser. The main thing that I don’t get from MathJax is automatically numbered theoremlike environments and a way to refer back to them by name in the source code of my article. This is also the main problem that Microsoft Word has, by the way.  I can live with the bad typesetting in a browser, but it is a real step backward to have type “Theorem 1″ directly into my source code, as if I am using a typewriter.
  * **Peter**, 2012/03/13
  My perspective is a little different.
  On the one hand, ref and label work in version 2.0. But theorem environments do not exist (and  might never arrive) because MathJax focuses on mathematics, not text.
  From my point of view, it is actually better to keep the two separated. I would prefer to have an html source that does not rely on MathJax to do something as simple as have a number next to a theorem.
  Which doesn’t mean I don’t want theorem numbering. It just needs to come from somewhere else, preferably in pre-production, i.e., use tex4ht to generate html+mathml and have MathJax render it or extend the markdown syntax or choose a higher level markup language etc.
    * **Carl Mummert**, 2012/03/13
     Mental error – when I wrote “MathJax”, I meant “Markdown”. At the moment when I write HTML text on my blog I have to type the numbers manually myself, and as far as I can tell Markdown would have the same problem. I have been looking into using XSLT to fix this but it’s a steep learning curve.
     * **Peter**, 2012/03/14
     Ah, ok!
     Do you need more than CSS counters? I mean, if you want to do it properly, you theorems should have their own css and then https://developer.mozilla.org/en/CSS_Counters will get you some counters.
       * **Carl Mummert**, 2012/03/16
       With CSS counters, is it possible to reference the counter somewhere else in the HTML, as the ref command would do in latex?  Of course this could all be implemented in JavaScript instead of CSS or XSLT, and since MathJax is already using JavaSscript that may be a better way to go. My spring break is coming up, so I may have some time to try this out.
         * **Peter Krautzberger**, 2012/03/16
          iiuc, you should be able to add arbitrary content via css, in particular counters and anchors.
          I can’t help but say that this is asking for more than what LaTeX does (without the help of packages) — it’s a sore point in many discussions that people want MathJax to do work that LaTeX doesn’t…As I said, MathJax most likely won’t ever add this because it’s not a math issue, it’s a general authoring problem that should be solved elsewhere. (Well, actually, thanks to the sponsor AMS desiring it, MathJax 2.0 offers ref and label so Davide might be convinced to add this and people can always write their own extensions of MathJax…)
* [Pingback](https://stevencarlislewalker.wordpress.com/2012/07/21/two-beautiful-things-mathjax-markdown/), 2012/07/21
* [Pingback](http://fransdejonge.com/2013/11/pandoc-markdown-over-straight-latex/), 2013/11/07
