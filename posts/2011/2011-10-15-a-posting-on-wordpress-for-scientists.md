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

---

_Comments_.

* **François**, 2011/10/15
  I hadn’t noticed zotpress before. I just downloaded the standalone version of zotero to experiment. The fact that it is both standalone and a browser plugin makes it much more attractive than its counterparts. So far, I’m actually impressed by its features. However, the bibtex it exports isn’t up to my standards and it clearly doesn’t understand tex at all. Sigh!
  I wonder what kind of responses you will get from question 2. Do you think that the citation needs across sciences is uniform enough to come up with a definite answer?
  * **Peter**, 2011/10/15
    Francois, about uniformity. I think there’s a misunderstanding. The mailing list I posted this too is about using wordpress (for scientists). So that question is more about how other (more professional) people in that community see it.
    So yes, I even think we *must* find common ground for the technical aspects of making a citation in wordpress (hard-coded vs dynamic for example). We want to be serious about this, no?
    * **François**, 2011/10/15
      There was no misunderstanding. My uniformity question was precisely that: I have no idea if physicists, chemists, or paleontologists need the same things I do. I’m much more hopeful that we, at Booles’ Rings, can find some common ground…
      I don’t really understand all hard-coding issue you present, but that might be a lack of enlightenment about the possibilities. If the references come from a local database, then they won’t change unless you explicitly change them. External databases may change. However, doi are directly linked to the publisher, so if something there changes, you probably do want that change to occur. Other sources can be less reliable (e.g. user updated databases) but I wouldn’t use those under any circumstances.
      As far as we’re concerned and as far as published works are concerned, a tool that just extracts the relevant info using MR Lookup would be fantastic.
      * **François**, 2011/10/15
      Maybe there was a misunderstanding… Did you mean to ask “How do you want citations to work?” instead of “How do we want citations to work?”?
        * **Peer**, 2011/10/15
          * I’m not sure what you mean with “what I need”. I was thinking about the technical realization of citations in wordpress — how would they differ? Citations on paper also have strict standards.
          * I don’t want to find a solution just for Booles’ Rings.
          * The hardcoding problem is that once papercite breaks or the bibtex file you uploaded is manipulated or deleted, your posts have no citation information anymore. (Also, check out the front page and how bad your own posts look there because the widget reads only the source.)
          * MR is bad because it’s paywalled.
          * **François**, 2011/10/15
            Trying to match your bullet points…
            * Paper citations have (sometimes strict) standards that must be met. Why would BR be any different? Both are final output media after all…
            * Why not? That’s all I need…
            * I still don’t understand the issue. How would a paper citation be changed in a way that I can’t predict (or postdict, in the case of local file changes)?
            The widget issue is not at all the same. It has to do with wordpress and how it loads various plugins. I actually find the raw output desirable from time to time so I can see what other people are doing to shape their posts.
            * MathReviews is paywalled, but I think MR Lookup is free (or some part of it is free). That’s why you actually get useful information (not the review) when looking up an MR number.
            * **Peter**, 2011/10/15
              Regarding the third point.
              With papercite any change in the bibtex file will effect your content — whether intended or not.
              I can empathize with wanting to know how other people do things, but that can’t have higher priority than content integrity. Asking seems better practice (but also, separate access to the source is conceivable).
              “Hard-coded” is more reliable, efficient and is better to export. It should be the default.
              * **François**, 2011/10/15
                I’ve just confirmed that MR Lookup is indeed free though the functionality is limited compared to full math reviews.
                * **Peter**,2011/10/15
                  Nice! Reference? You do need access to find the reference numbers?
                  **François**, 2011/10/15
                  Sorry, I should have included those links in my last comment:
                  [MR Lookup](http://www.ams.org/mrlookup)
                  [MR Lookup Help](http://www.ams.org/mathscinet/help/mr_lookup_help.html)
* **Joel David Hamkins**, 2011/10/15
  Peter, I don’t agree with the last bullet on question 2. I would think that we would want all our citations whenever we make them to be updated to the best/current version of the paper without our having to do anything. If you are reviewing a preliminary version of a paper, just say so in the review. Meanwhile, your readers will want to read the updated/corrected version, regardless of your review.
  * **Peter**, 2011/10/15
  Joel, I’m happy to disagree. Technically speaking, if I give you, say, a DOI of a preprint, that DOI should be (wherever it was created) linked to the published version. But that doesn’t change my citation — I didn’t cite the other version and I want integrity in my posts.
  This of course does not exclude some fancy technology that comes with both a static and dynamic aspect.
  * **François**, 2011/10/15
    I don’t understand the issue here. How can you get a doi for a preprint?
    * **Peter**, 2011/10/15
      Good point. I should have said:
      * Example arxiv: if the paper is updated, I still want to link to the old version, if a link to a published version is added (as arxiv now requests), it should still link to the preprint
      * Example local: if there’s a local database and an entry is manually changed to a published version
      * Example publisher: if the paper is updated (say because of criticism later), if the paper is retracted, I still want to link to the original
      * **Peter**, 2011/10/15
        Also, I should have said GUID instead of DOI.
        * **François**, 2011/10/15
          Trying to match your bullet points…
          * The arxiv includes all revisions and the pointers to the print version (if any) are very clear. I still don’t see the problem.
          * Why wouldn’t you want that update to occur?
          * Retractions don’t erase the papers, they amend them (in a very negative way). The doi should still point to the actual paper. (Lookup the rules for doi, they are very strict.) In any case, if the doi also includes info on the retraction, that is desirable information.
          * **Peter**, 2011/10/15
            Take a paper I read last winter. The original preprint is terrible, the changes in the updated version extensive. I would want to link to the one I write about. What doesn’t make sense about that?
            (Thanks for the info on DOIs. I’m not an expert — that’s why I wrote to the other mailing list)
            * **Joel David Hamkins**, 2011/10/15
              I still disagree about updating the citations. Your “integrity in posts” makes sense in the very rare kind of case you describe, but by far the usual case will mean that your links will often be pointing at an expired version of the article, when readers would greatly prefer to have the published version. This is often not available at the arxiv, and often no indication given there where to find it. In my opinion, this is one thing that papercite gets right: it provides links to all the versions that are present in the bibtex entry. This method seems to preserve what you want (the arxiv link is still there), while also making DOI available if that information is available.
              * **Peter**, 2011/10/15
              I agree that it’s a rare case. I agree that the abstract reference-entity should be structured in such a way that it can survive an update (like bibtex). I agree that more information in the metadata is better.
              I would still want to be able to keep my intended citation, i.e., even if the reference-entity changes and, say, there’s an automatic update changing the metadata in the post’s html, I would want my citation to make it clear what was referenced at the time of writing. (Did I mention that I loathe shortcodes?)
              I guess I am worried about how to implement this. To accept honest historic inaccuracies seems much better.
* **Joel David Hamkins**, 2011/10/15
  Here are a few things I would like in a citation tool:
  * citation objects can be created and managed with GUI, managed something like how links,pages and posts are in WP.
  * these citation objects can be updated by means of an uploaded bibtex file, that is, without having to edit them individually
  * one can insert citation objects into posts and pages, and control how they appear
  * flexible options for how the citation appears by default
  * citation objects can be upgraded to have a full post-like status, where one can add text and abstract and discussion, etc.
  * reverse bibtex file generation, so that one can download a bibtex file of all or selected parts of the citation database.
  * **sam**, 2011/10/16
  Joel: I think this is needed as well. Peter and I would like to try to write such a plugin (by combining several existing plugins) but it will take some time.
  Meanwhile, I think we will have to phase out the use of papercite. For folks using just a few inline references, I think it’s ok but should be treated as very fragile. For Joel, sadly, I think this means replacing all of the shortcodes with the static html…
* **Peter**, 2011/10/15
  Joel, I like those features.
  But I’m more interested in the abstraction level.
  * no matter how you make it look, there must be metadata to allow clean identification/reconstruction of citations.
  * the content integrity must not be compromised — if I cite a paper, then the only way to change the resulting metadata should be to edit the post.
  * you shouldn’t (have to) mess with a bibtex file — that should be generated out of a professional reference manager and a professional reference database.
  Ideally, I would like to add to wordpress a generic interface to connect to a real reference manager. In the mean time, we’ll look into the other part: a reference manager type interface.
  I would also like to add: there are three different issues as far as I see at the moment.
  * presenting our own work vs citing in our online writing
    * our own work should really be pages or their own wp-taxonomy
    * formal citations should be nothing but links (citations are pointers) (the writing surrounding a citation is a different matter)
  * citation storage/handling locally
    * I would love a good wordpress gui element
    * database storage
  * interacting with reference mangement outside of wordpress
    * I feel that “real” reference management should lie outside of my wordpress installation, with a professional tool/service.
    * I would love to have a search interface within wordpress (just as I have it in my reference manager)
    * I would prefer that search interface to update my external tool first and then import it via an import interface
  I wish I had time for this…
  * **François**, 2011/10/15
  There are too many bullet points for me to try to match them… I hope you can make sense of the following…
  Are there any professional reference managers? In the case of print media, yes: MR and ZBL do a great job for math (and so do others). For non-print media, there is no reliable source. Just look at MO cite bibtex output. We had to implement triple redundancy to make sure that we were understood. Even then, we still had to cheat some with the author info since we don’t require users to use their real names. The whole thing is ridiculous, and we can’t hope to fix that right away…
  As far as presenting the bibliographic info, I really like what papercite does. With a single click, you can get the original bibtex (with all the ignored fields). Even if that’s not enough info for you in that case, that’s usually enough info to lookup what you’re missing.
  * **Peter**, 2011/10/15
  I don’t know what MO cite bibtex refers to.
  With reference managers I only meant tools like Mendeley. Mendeley, Google scholar, MS Academic Search are growing databases.
  I personally don’t like papercite’s output. For me, a reference should be nothing but a link. But who cares, anything goes in looks — as long as reliable metadata is available.
* **Peter**, 2011/10/15
  Wow, I must admit this is my first lengthy discussion as a host. It’s quite exhausting and I feel that I’m not making myself very well understood. It’s hard…
  I have learned so far that I need to stress my focus on the abstract layer.
  How should references (i.e., bibtex-like things) be stored, added, updated, looked up. I cannot shake the feeling that researchers should not create reference-entities directly — ever. We should rely on professionals.
  But this is probably one of the biggest issues about moving scientific activity online. So I shouldn’t be surprised that it’s hard…
  * **Joel David Hamkins**, 2011/10/15

  > researchers should not create reference-entitities directly – ever”

  Almost all of my bibtex entries for my own papers are born, created by hand by me, before the article exists in any form except as an (incomplete, in progress) file on my computer. But I need to create the bibtex entry because the paper is being cited in another paper I am writing, or in a grant proposal or whatever. So in this case, there seems to be no alternative to creating the entry myself. And then it is gradually updated, first by adding the arxiv entry when it is contributed there, and then when it is accepted at the journal, etc. Eventually, I suppose, the professionally prepared bibtex entry is available, such as by the journal, but these often don’t include the arxiv data and other data that I might want. So by hand I combine the data together in my bibtex entry.

  * **Peter**, 2011/10/15
  Thanks Joel, that’s a very good. point. At first I wanted to write “presenting our own work is different”, but you say much more. The new generation of services like Mendeley, Google Scholar, MS Academic Search seem to get this problem — they try to catch all sources/version of an article. I guess that’s why I like them.
* **Peter**, 2011/10/16
  In case the discussion continues, let me stress that my post here was intended for a different audience: not us here at Booles’ Rings but the experts over at the wp4scientist mailing list.
  In one comment, Francois pointed out my confusing choice of words “what do we need a citation plugin to do”. This was aimed at that audience.
  If you are interested in the much bigger problem of citations in the online world let me throw in some links.
  [http://blogs.plos.org/mfenner/2011/03/07/the-trouble-with-bibliographies/](http://blogs.plos.org/mfenner/2011/03/07/the-trouble-with-bibliographies/)
  [http://scholarlyhtml.org/](http://scholarlyhtml.org/)
  [http://blogs.plos.org/mfenner/2011/02/14/how-to-use-citation-typing-ontology-cito-in-your-blog-posts/](http://blogs.plos.org/mfenner/2011/02/14/how-to-use-citation-typing-ontology-cito-in-your-blog-posts/)
  We should discuss practical solutions for citations on Booles’ Rings. But there’s also a much bigger, abstract issue in the background, one that develops quickly — and I will always have that one on my mind, too.
