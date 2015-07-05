---
layout: post
title: A posting on wordpress-for-scientists
date: 2011-10-15
categories:
- Booles' Rings
- technology
tags:
- bibtex
- citations
- reference manager
- wordpress for scientists
published: true
permalink: 0085/
---

> I just finished [a long posting at the mailing list/google group Wordpress For Scientist](http://groups.google.com/group/wordpress-for-scientists/browse_thread/thread/f263df8e98cb440a?hl=en). This was spawned by today's meeting with Sam and [this week's trouble with the papercite plugin](http://boolesrings.org/blog/2011/08/16/citations-two-new-plugins-to-try/). We really need to find a different solution. So I'm hoping both for a discussion here at Booles' Rings as well as some help from the smart people on the mailing list.

Hello.

I was hoping for some advice and discussion regarding citation related plugins.

Since this has gotten a little longer: I will first describe the problem and then add some questions.

Over at boolesrings.org we have had some problems this week. At Booles' Rings we're experimenting with wordpress for academic homepages (of mathematicians). We're essentially trying to find out what is useful and/or necessary for an academic web presence via wordpress.

Obviously, citations are important for documenting our own work and writing about other people's work.

Since we're all mathematicians, there's the strong need for bibtex import which is why papercite is popular -- it makes the move from BibTeX to wordpress very easy. Unfortunately, papercite is very buggy and we would like to replace it.

We're faced with the question:

### What do we need a citation plugin to do?

Practically speaking,

1.  bibtex import (but no dependence/sync)
    *   We have to start somewhere and that's where most people (in mathematics) come from.
2.  personal IDs for shortcode use
    *   we're human and we like to write ThatFamousPaper instead cryptic ids  
         (I think mathematical writing is very different from scientific writing in this respect -- papers can be holy objects...)
3.  a GUI to look up/search for new citations
    *   Sometimes, you barely remember the paper's title.
    *   DOIs are cumbersome to look up anyway
    *   Searching multiple sources (google scholar, mendeley, mathscinet, pubmed) would be nice while writing a post
    *   Maybe even links-to-citation functionality when quoting online sources (blogs, mathoverflow etc)
4.  Reversibility
    *   the citation in html (in a post) should include some form of metadata that can be processed automatically (pingbacks, aggregation, citation counts etc)

### QUESTION 1: Do we have such a plugin?

1b) What plugins have which functionality?

*   Kcite is excellent when you have the DOI (well, depends on the DOI actually)
*   bibtex-importer does a great job using links giving a local search GUI -- but shoudn't citations be pages or a taxonomy?
*   papercite offers the familiarity of keeping on as we do in LaTeX
*   wpcitulike, bibliplugin seem to offer good external reference sources
*   zotpress seems to have almost everything, but requires zotero
*   teachpress and scholarpress have too much overhead  
     1c) is there a plugin that uses Mendeley's api?

### QUESTION 2: How do we want citations to work?

Ok, this is in hopes for a discussion. My amateur thoughts.

*   reference management should be done by professionals not through personally hacked bibtex files (we mathematicians have a bad habit...)
*   references should be stored professionally, i.e., in the wp-database or in a professional outside tool (mendeley, zotero, citeulike) (take papercite as a terrible example relying on some random bibtex file somewhere)
*   even if an outside tools is used, actually referenced citations should always be stored in the database.
*   citations should be hardcoded into the post (when I review a preprint, I don't want the reference to change to the published version later)

Well, this has become more of a blog post... I guess I'll cross post it at boolesrings.org/krautzberger...

In any case, I hope I made a little bit of sense. Any help is greatly appreciated!

Best,  
 Peter.
