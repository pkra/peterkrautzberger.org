---
layout: post
title: Tools for your online collaboration
date: 2010-02-14
categories:
- blogosphere
- conference
- research
- technology
- thelazyscience@blogspot
tags:
- arXiv
- bibtex
- dabbleboard
- dropbox
- ekiga
- facebook
- google book search
- google docs
- google scholar
- google talk
- instiki
- issuu
- itex2mml
- jsMath
- mathjax
- mathml
- mathoverflow
- mendeley
- MIT
- msri
- online whiteboard
- opencourseware
- papers
- polymath
- prezi
- referencer
- researchgate
- rss
- scriblink
- skype
- text4ht
- tokbox
- vimeo
- web meeting
- wordpress
- wordpress.com
- young set theory
- zotero
published: true
permalink: 0010/
---

So the [winter school in Hejnice](http://www.winterschool.eu/) <del>ended two weeks ago</del> is long past — and despite my intentions I did not find the time to blog. This is primarily a sign of the quality of the winter school, both scientifically and socially. I do admit I spent the lunch breaks walking in the beautiful surrounding mountains instead of blogging…

Anyway, on the last evening of the winter school a couple of people gathered together to exchange tools for collaborating via the [intertubes](http://en.wiktionary.org/wiki/Intertubes). I volunteered — also with the upcoming third [Young Set Theorists](http://www.math.uni-bonn.de/ag/logik/events/young-set-theory-2010/) meeting in mind — to make the discussion available online. Of course, the title refers to [this](http://info.tuwien.ac.at/goldstern/papers/tools.ps) wonderful paper by Goldstern and Judah which taught me the little bit of iterated forcing that I know.

For now I will restrict myself to [freemium](http://en.wikipedia.org/wiki/Freemium) services. Of course, this is an open list — drop me a comment to add to this list (hm, a google wave would be better, right?).

**Phones**

A much better tool than a phone is? A videophone! (especially for handwaving arguments). Namely, [skype](http://skype.com/) comes to mind, but there are alternatives like [tokbox](http://en.wikipedia.org/wiki/Tokbox) or [google talk](http://en.wikipedia.org/wiki/Google_Talk) which are web based. With possibly lower video quality they offer other useful things like actual video conferences (whereas skype restricts you afaik to 1-1 video calls) and invitation by link. There are also numerous true VoIP/SIP clients like [Ekiga](http://en.wikipedia.org/wiki/Ekiga). But they may have the need for some firewall configuring. For more general information, check out [wikipedia](http://en.wikipedia.org/wiki/List_of_video_telecommunication_services_and_product_brands).

**Whiteboards**

But what good is a (video)phone if you cannot write on a blackboard together? In any serious mathematical discussion, notation will become an issue sooner or later. A simple, but bandwidth friendly and flash based whiteboard is [scriblink](http://en.wikipedia.org/wiki/Paint_chat#Scriblink) — just go to the site and give your partner the invitation link. An alternative is [dabbleboard](https://web.archive.org/web/20100208022739/http://www.dabbleboard.com/) which offers some shape recognition and also allows multiple pages in the free version and — most importantly — PDFs as background images. However, it is a little heavy on the bandwidth, especially latency which often annoys my voip connection.

Of course, if you want to use an online whiteboard efficiently you need some kind of [tablet](http://en.wikipedia.org/wiki/Tablet_%28disambiguation%29) to write with. I personally have been very happy with a [graphics tablet](http://en.wikipedia.org/wiki/Graphics_tablet), a Wacom Bamboo to be exact. You can get tablets for 40€ and lower in Germany, but prices will differ regionally. Of course, I also use my Gigabyte M1028T [tablet pc](http://en.wikipedia.org/wiki/Tablet_PC) — although its tablet functionality is basic (no pressure sensitivity, only moving by clicking) making writing with it less suitable for real note taking — see the PDF section below.

<del>[Eierlegende Wollmilchsau](http://de.wikipedia.org/wiki/Eierlegende_Wollmilchsau)</del> [**Swiss Army Knives**](http://en.wikipedia.org/wiki/Swiss_Army_Knife)

There are of course those services which offer all of the above at once. A prime example would be [dimdim](http://en.wikipedia.org/wiki/Dimdim) which offers a nice, unified service including video conferencing, instant messaging, whiteboard, pdf viewing and collaborative websurfing — all of this available with a free account which is limited only in the number of participants (and there are premium services available, of course).  Additionally dimdim’s server technology is mostly open source, so you can set up your own server if you have the means. Unfortunately, I never got the video conference system to work correctly under linux. Although not quite with collaboration in mind there is also the awesome [TeamViewer](http://en.wikipedia.org/wiki/Teamviewer). It is a great remote assistance tool designed for efficient access to another computer screen. In that sense you could use it to access your home or office machine from anywhere — if your department allows that. But in the latest version (although windows only) Teamviewer also offers Video chat and a whiteboard to communicate. For further tools look [here](http://en.wikipedia.org/wiki/Comparison_of_web_conferencing_software).

**Instant Chat, Online Docs and Google Wave**

Personally, I have not used instant messaging for mathematics so far — video phones seem better. However, [Pidgin](http://en.wikipedia.org/wiki/Pidgin_%28software%29) has a [LaTeX](http://en.wikipedia.org/wiki/LaTeX) [plugin](http://sourceforge.net/projects/pidgin-latex/) to display basic TeX code. This is of course a useful feature. I’ll come back to the general problem of displaying mathematics on the web later.

I feel I must also mention [Google Wave](http://en.wikipedia.org/wiki/Google_wave) and [its competitors](http://en.wikipedia.org/wiki/List_of_collaborative_software). These are powerful tool mixing mail, chat, wikis and collaborative document editing. I have not tried any of these yet but if there’s someone to collaborate with it’s worth a try.

**PDFs I — what you can do with them**

PDFs is the somewhat dominant standard for (compiled) TeX documents (sorry, dvi and ps fans). Besides the next section there is another aspect which makes them worthwhile — [PDF annotation](http://en.wikipedia.org/wiki/PDF_annotation#Annotating_PDFs). If you are like me and like to take your notes with you (for all those typos and indices that drive you mad in some papers) there is nothing better than annotating a PDF directly — especially if you invested in a (graphics) tablet.

My favourite is the open source [Xournal](http://en.wikipedia.org/wiki/Xournal) with excellent tablet support on both linux and windows. Alternatives are [Jarnal](http://en.wikipedia.org/wiki/Jarnal) (which also works as real time whiteboard) and (for Mac users) [Skim](http://en.wikipedia.org/wiki/Skim_%28software%29).

Although it does not quite fit in here (or anywhere): if you feel that PDFs are inadequate to present mathematics, why don’t you take a look at [prezi](http://en.wikipedia.org/wiki/Prezi)? It offers a different angle on presentations altogether. I sometimes dream of having a prezi like ability to zoom into papers or rather proofs giving me details where I want them and letting me quickly browse through the main ideas dynamically whenever I choose to…

**PDFs II — Personal online libraries**

It is convenient to store papers and other materials online. If you cannot set up a decent [sftp](http://en.wikipedia.org/wiki/File_Transfer_Protocol#FTP_over_SSH_.28not_SFTP.29) or [a version control system](http://en.wikipedia.org/wiki/Comparison_of_open_source_software_hosting_facilities) on your university’s server, you might want to try [dropbox](http://en.wikipedia.org/wiki/Dropbox_%28storage_provider%29) [or](http://en.wikipedia.org/wiki/File_synchronization) [teamdrive](http://de.wikipedia.org/wiki/TeamDrive). If you frequently use public computers you might want to use something more web based like [google documents](http://en.wikipedia.org/wiki/Google_Documents) or the very pretty [isssu](http://en.wikipedia.org/wiki/Issuu) that I use from time to time on this blog.

**Community Sites**

Of course, all science is community driven but I think (pure) mathematics could profit more from an online community than any other science or (liberal) art. The biggest player is certainly [facebook](http://en.wikipedia.org/wiki/Facebook) — which already has a group for, of course, the [winterschool](http://www.facebook.com/group.php?gid=150548369161) itself. Facebook [attracts academia](http://www.danah.org/papers/essays/ClassDivisions.html) (as opposed to myspace), hence it is the more obvious place to connect — this does not mean that you shouldn’t worry about its privacy settings or rather the partial lack thereof.

On the other hand, there are a couple of science focused [community sites](http://en.wikipedia.org/wiki/List_of_social_networking_websites), among them [researchgate](http://en.wikipedia.org/wiki/Researchgate) which offer science specific tools like (p)reprint lists, online references, database searches etc. This might be better for purely professional intent but I have no experience using it.

A young and incredibly successful new site is [mathoverflow](http://mathoverflow.net/) — a mathematical version of the great [stackoverflow](http://en.wikipedia.org/wiki/Stackoverflow). You can ask and answer questions of all sorts in a very efficient manner — just don’t get lost in all the fun.

**Databases**

Of course the mother of all things is the [arXiv](http://arxiv.org/) — do I need to explain it? And then there are Google’s products [scholar](http://en.wikipedia.org/wiki/Google_scholar) and [book search](http://en.wikipedia.org/wiki/Google_book_search). A somewhat different database is [gigapedia](http://gigapedia.com/) where you can easily search for books and find free ones. In all things beware of legal issues though.

**LaTeX or displaying mathematics on the web**

Of course mathematicians are used to LaTeX. On the web the best way for displaying mathematics is (from a web standards point of view) [mathml](http://en.wikipedia.org/wiki/Mathml). The problem is that mathml is **a)** too difficult to write as code directly, **b)** difficult to view since not all browsers view them correctly and from a visually impaired point of view it seems to be a disaster, too (see the [discussion](http://terrytao.wordpress.com/2009/10/29/displaying-mathematics-on-the-web/) on Terry Tao’s blog) and **c)** it is difficult to convert back to LaTeX.

There are numerous workarounds. On the one hand you can (as I do) use [tex4ht](http://en.wikipedia.org/wiki/TeX4ht) to convert LaTeX to mathml. Of course, as my blog shows this is a rather tedious thing if you do not have (or want to have) control over the webserver. Alternatives are [jsMath](http://www.math.union.edu/~dpvc/jsMath/) which might be superseded by [mathjax](http://en.wikipedia.org/wiki/Mathjax). If you have a [wordpress](http://en.wikipedia.org/wiki/Wordpress) blog you can (even on your free account on [wordpress.com](http://en.wikipedia.org/wiki/Wordpress.com)) use [this plugin](http://wordpress.org/extend/plugins/wp-latex/) — which converts basic LaTeX commands into (rather ugly) PNGs.

The winner for best practices with mathml, I think, is the [n-Category Cafe](http://golem.ph.utexas.edu/category/). Besides being a very active group blog they have developed impressive technologies such as mathml inclusion, the LaTeX dialect itex, the itex capable [instiki](http://golem.ph.utexas.edu/wiki/instiki/show/HomePage) with [itex2mml](http://golem.ph.utexas.edu/~distler/blog/itex2MMLcommands.html) to convert tex to mathml on the fly and all of this available in the comments, too.

**Blogs, blogs, blogs**

Almost last but in no way least, there are blogs.  This would be worth an independent post and there are plenty of examples for this, but here we go.

They come in all colours, for an impressive list go [here [Wayback Machine]](http://web.archive.org/web/20100120025343/http://wiki.henryfarrell.net/wiki/index.php/Mathematics/Statistics). Also, go to any of those blogs and check their blogroll to find many more mathematics blogs. If you don’t understand what blogs are good for you might read [John Baez’s article](http://golem.ph.utexas.edu/category/2009/09/what_do_mathematicians_need_to_1.html). To name a few contenders for ‘most influential mathematical blogs’: [What’s new with Terence Tao](http://terrytao.wordpress.com/), the most active single user blog I know, [Timothy Gowers’s Weblog](http://gowers.wordpress.com/) and Gil Kallai’s [Combinatorics and more](http://gilkalai.wordpress.com/).

Of course, they are the ones that got me started with reading math blogs, but it’s the small blogs that got me hooked. The diversity is a challenge (I don’t understand half of what I read) but blogs form the best mathematics newspaper out there.

**Polymath**

At the moment the most hardcore project when it comes to online collaboration is clearly [Polymath](http://en.wikipedia.org/wiki/Polymath_project#Polymath_project). With [one paper](http://arxiv.org/abs/1002.0374) on the arxiv, two projects finished and three projects going it is the perfect show case. Driven by the “big three” — Tao, Gowers, Kallai — one may argue that their power makes sure that it works (and is protected from theft). Polymath is an exemplary web project. It follows [Jeff Jarvis’s rule](http://www.buzzmachine.com/2007/02/22/new-rule-cover-what-you-do-best-link-to-the-rest/) and shows the synergetic behaviour of web projects — using multiple technologies at once: there’s the [blog](http://polymathprojects.org/) for the main discussion, but also the authors individual blogs used partly to organize. Finally there’s the [wiki](http://michaelnielsen.org/polymath1/index.php?title=Main_Page) for fixing proper definitions and notational issues and finally they frequenly use mathoverflow to recruit new people by e.g. singling out distinct partial or dervitative questions.

But I believe it shows a glimpse of the future of mathematics. On the one hand, many problems have become too complex to be tackled by a single person or research group. On the other hand, although the techology might change considerably in the future, the idea of having researchers on all levels collaborate — with every contribution being valued — could be a prototype that values many soft skills, be it good writing, accessible presentation, social skills for bringing conversations to converge productively, taking a bird’s view of the process to assist or acquiring empirical experimentation and implementation. It is also a very flexible approach where people can help as much or as little as they find the time for while (with proper support like Gower’s current EDP posts) still being able to follow the flow and ideally being able to change their level of involvement as they please.\

That’s all for now. Let me know what I forgot.


_**Addenda**_

**2010-02-15**

**Unicode characters**

There was also a question regarding unicode characters and the like (instead of mathml). I just found [this chart [Wayback Machine]](http://web.archive.org/web/20080703175126/http://tlt.psu.edu/suggestions/international/bylanguage/mathchart.html) via [mathoverflow](http://mathoverflow.net/faq#latex) — maybe it helps.

**2010-02-17**

**Feeds and feed readers**

Feeds in either [Real simple syndication (RSS)](http://en.wikipedia.org/wiki/RSS) or [Atom](http://en.wikipedia.org/wiki/Atom_%28standard%29) from are worth mentioning on its own. As a tool for 1-to-infinity communication it’s an important technology for collaboration. You’ll find feeds for all kinds of newssites and blogs, but also [for each section of the arxiv](http://arxiv.org/help/rss). To read feeds you can use [lots of different programs](http://en.wikipedia.org/wiki/Comparison_of_feed_aggregators) and [web based services](http://en.wikipedia.org/wiki/Aggregator).

**Video sites**

Videos of research level mathematics are pretty rare. There is the [archive of the MSRI](http://www.msri.org/communications/vmath/index_html) and singular popular mathematics gems like [Gowers’s talk on multiplication](http://www.gresham.ac.uk/event.asp?PageId=45&EventId=607). Also, you should check out [MIT’s impressive youtube channel](http://www.youtube.com/user/MIT).

To put up a video you don’t need much these days, so it’s strange that there’s not more around — especially since (pure) mathematics seems easier to share than, say, complicated science experiments. There are [too many free video sites](http://en.wikipedia.org/wiki/Video_sharing_website) out there. Next to the already mentioned youtube I would point out the science video site [SciVee](http://en.wikipedia.org/wiki/SciVee) (with its strong, yet somewhat expensive premium service) and [Vimeo](http://en.wikipedia.org/wiki/Vimeo) with its focus on original content.

**Reference management**

Thanks to David for reminding me that I forgot one aspect of pdf management — [reference management (see the list on wikipedia)](http://en.wikipedia.org/wiki/Comparison_of_reference_management_software). Now there are many programs out there to get your citations, i.e., your BibTeX files organized. But there are also programs that connect the citations with the pdf, offer online database searches, tags, pdf annotation and social networking ideas.

A big list can (once again) be [found on wikipedia](http://en.wikipedia.org/wiki/Comparison_of_reference_management_software). To present a few. I personally use [referencer](http://en.wikipedia.org/wiki/Referencer) but David also mentioned [Mendeley](http://en.wikipedia.org/wiki/Mendeley) in his comment which has an impressive list of features including online access and social network aspects and I’ll probably try it out. To give credit where it is due a few of these programs name [Papers](http://www.papersapp.com/) as inspiration which unfortunately is Mac only. With a different flavour there are the web-only [Zotero](http://en.wikipedia.org/wiki/Zotero), a powerful Firefox addon, and [I, Librarian](https://en.wikipedia.org/wiki/Ilibrarian), a groupware tool.
