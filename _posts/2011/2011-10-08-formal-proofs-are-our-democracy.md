---
layout: post
title: Formal proofs are our democracy
date: 2011-10-08
categories:
- scientific community
- thoughts on mathematics
tags:
- formal proof
- intuition
- Winston Churchill
published: true
permalink: 0084/
---

Reading papers can lead to horrible acts. Today, I felt like mutilating [a famous quote](http://en.wikiquote.org/wiki/Winston_Churchill#Post-war_years_.281944_-_1955.29).

<figure>
    <img alt="Sir Winston Churchill" src="/assets/2011/Sir_Winston_S_Churchill.jpg"/>
  <figcaption>
   Sir Winston Churchill. Source: Library of Congress, via <a href="http://en.wikipedia.org/wiki/File:Sir_Winston_S_Churchill.jpg">Wikipedia</a>.
  </figcaption>
</figure>

> Many forms of communicating mathematics have been tried and will be tried in this world of sin and woe. No one pretends that formal proofs are perfect or all-wise. Indeed, it has been said that formal proofs are the worst form of communicating mathematics except all those other forms that have been tried from time to time.

When I come up with a mathematical result, I have the strong urge to share it, to communicate it. As a trained mathematician, I resort to the established mode of communication, formal proof.

This has two problems.

### Formalizing is tricky

On the one hand, I <del datetime="2011-10-08T15:30:12+00:00">might</del> will make a mistake formalizing my thoughts. Of course, we mathematicians are in the terrible habit of finding that perfectly acceptable (have you noticed that there are [no retractions](http://retractionwatch.wordpress.com/category/by-subject/math-retractions/) in mathematics because of mistakes?). Almost all the time, even though a formal proof might be wrong or incomplete, it's considered fixable and the result "essentially" correct (case in point: Perelman). It seems a majority agrees that there's much more to a mathematician's result than what might be written on paper.

In the same vein but much worse is the effect of formal proof on mathematical writing. Most papers are badly written and most proofs are written the wrong way around (like $\varepsilon$-$\delta$ proofs that start with a choice of $\delta$) or badly structured in other ways. It seems a lot of people are not aware that a formal proof is a miserable tool for communicating mathematics and has to be used [very carefully](http://www.math.upenn.edu/~ghrist/preprints/ATSN.pdf) to facilitate communication. Such care would, of course, clash with the all-encompassing publish-or-perish pressure that has led to the terrible style of "getting the least publishable unit passed a referee with minimal effort".

All of the above is really just one big problem and luckily it is one that could be fixed by a functioning scientific community (unluckily, it most likely won't be fixed).

### Formalizing is impossible

The second problem however seems intrinsic and unsurmountable.

<figure>
    <img alt="Moby Dick attacking a skiff" src="/assets/2011/Moby_Dick_p510_illustration.jpg"/>
  <figcaption>
   <q>Both Jaws, like enormous shears, bit the craft completely in twain. — Page 510.</q> Source: <a href="http://en.wikipedia.org/wiki/File:Moby_Dick_p510_illustration.jpg">Wikipedia</a>.
  </figcaption>
</figure>


Formal proofs cannot capture what I think when I think mathematics. The problem is that I cannot share my mathematical insights in their entirety since they are a complex combination of rational and emotional thought, intuitions, memory, successful failures and so on.

There might be a way to overcome this problem. Then again, there might be a better form of government than democracy.

---

_Comments_.

* **sam**, 2011/10/08
  To me, "formal proof" means something even stronger: that it is written in a formal logic and that a simple computer can verify it.  Since this is out of the question for 99% of mathematics, the only thing we can do is choose a target audience and make ourselves as clear as possible to that audience.
  After that, it doesn't seem to me that there are any rules, only guidelines.  For instance, if you want to write "a similar argument can be used to show..." then go ahead, as long as it's really the case!
  * **Peter**, 2011/10/09
    Sam, I guess I should have written "proof" instead of "formal proof" so as not to lead logicians astray ;)
    What I'm after is a different. The concept of communicating mathematics among mathematicians is currently reduced to writing down proofs (and barely verifiable proofs as <a href="https://boolesrings.org/scoskey/peer-review-failure/">you pointed out</a>).
    But I think that's a bad situation. It is almost as bad as if describing a work of Picasso by saying "he drew a black line here, then a red one there, then shaded some yellow in that area etc" or by describing Bach's Cello Suite No 1 in terms of sheet music. It does not facilitate communication, understanding.
    I think the complexity of contemporary mathematics needs more than proofs. Proofs are a bad tool even if they are the best we have.
    * **sam**, 2011/10/09
      Maybe we should start a list of things that are missing from a purely theorem-proof style exposition. Motivation and history would certainly be on the list. But I would also include a discussion of how to find the proof. Sometimes this is easy to extract from an argument, but not always.
        * **Peter**, 2011/10/10
          Sam, that’s a fantastic idea!
* **Felix Breuer**, 2011/10/10
  Hi Peter! I share your critical view of "formal" proofs as a tool for communicating mathematics on many levels. If I understand you correctly, then "all ways of communicating mathematics suck - formal proofs just suck less", which is why we use them. (That quote originally referred to the mail client mutt.) However, I do not think that formal proofs are the way to communicate mathematics that "sucks least".
  While teaching <a href="http://blog.felixbreuer.net/2011/08/23/visualising-numbers-part1.html" rel="nofollow">my course</a>, I have put in a great deal of work to make every proof intuitively convincing and I like to believe that I have been at least occasionally successful. Of course, sometimes what was "intuitive" to me, was not intuitive at all to my students. In these cases, however, substituting a formal proof for my intuitive explanation was no help at all.
  I view "formal" proofs as one end of a spectrum, with "handwaving" being the other end. In a good proof, the "formal version" and the "handwaving intuition" will be close together, and so the proof will communicate both the correctness of the assertion in question as well as provide some intution that it is true. Coming up with good proofs is much harder even than coming up with proofs at all! So in many cases, all you can do is pick a point somewhere in the middle of this interval.
  You may want to err on the side of formality in two cases: 1) You want to make sure that nobody can say your result is false. (This is what happens often in research talks and papers. 2) Your intuition about the subject is so far away from your audience's intution that communication becomes too error prone. (Using formalism is the only way that you can avoid misunderstandings.)
  I think there are many "good proofs" out there and I believe that many classic text-book proofs can be made "better" in this sense. However, I am thinking about geometry, mostly, which is close to human intuition to begin with. In set theory, I can well imagine that formalism truly is mathematics' "democracy".
  I just came across a nice quote by Joe Hurd that summarizes these sentiments nicely: "Mathematics is no more about formulas than astronomy is about telescopes." See <a href="http://www.gilith.com/research/talks/ignite2010.pdf" rel="nofollow">here</a>.
  * **Peter**, 2011/10/10
    Felix, so many ideas in this stream of yours. It might make a new post to reply to all of them.
    Let me first defend semi-formal proofs as they are common in papers. They serve their purpose much like experimental data in science: they are neutral, “objective” (well, not really either — just like experimental data…). I want to get rid of them as little as I want to get rid of democracy. But I wouldn’t mind putting them in the appendix.
    I got somewhat confused by your use of “proof” in your comment — it appears in all kinds of contexts. As you know I despise the whole “proofs from the book” idea. But I like hand-waving (especially yours). You also wrote that it’s hard to come up with good proofs. I agree! But I’m more after what Sam mentioned: additional tools that help bridge the gap between us.
    What I really want is to counteract the phenomenon you describe: students having to fall back to a formal proof because their intuitions are not on par with yours yet. How silly is it that we teach students formalized proofs instead of building their intuitions? Much like school, we’re doing it backwards. Understanding one result truly is worth more than cramming a hundred results.
    PS: I took the liberty of editing your comment (some obvious typos).
    * **Felix Breuer**, 2011/11/04
      Just had a great discussion with two of my students! We spent an hour trying to come up with the right picture for illustrating *one* theorem. That is the way to go! :)
      So, yes, I agree completely: We should focus on building students’ intuition!
* **Becky!**, 2011/10/11
  Wow, the mobile version of this site is looking awesome, P.!
  Anyway, Will and I were just talking about something similar Sunday afternoon. It is really frustrating when papers have errors in them (that we grad students are too dumb to catch ^^;). PDFs of the original papers should link to errata or something… It can’t be that difficult to do, can it? Maybe I’m just naive.
  * **Peter**, 2011/10/11
    Thanks for the feedback Becky :)
    I think you’re making a very good point. You’re right that PDFs could easily include errata. Maybe we’re too eager in that it was hard enough to get jstor running and processing errata (if they actualy exist in a sensible form) might still be too much to ask.
    But that this is also the case with current papers is, I think, just another sign that publishing industry is still stuck in 1990. So even if it’s naivity it is more than called for since it reflects what’s possible today (and has been for a decade).
* **Thilo**, 2011/10/17
  I would like to add a quote and a personal viewpoint. The quote is by the late third Earl Russell(Mysticism&Logic&other essays/Mathematics&Metaphysicians) and goes like that:

  > It is not easy for the lay mind to realize the importance of symbolism in discussing the foundations of mathematics, and the explanation may perhaps seem strangely paradoxical. The fact is that symbolism is useful because it makes things difficult. What we wish to know is, what can be deduced from what. Now, in the beginnings, everything is self-evident; and it is very hard to see whether one self-evident proposition follows from another or not. Obviousness is always the enemy to correctness. Hence we invent some new and difficult symbolism, in which nothing seems obvious.
  To me this seems to be true not only when speaking about the foundations of mathematics(which is what Russell did) but in fact in a far more general sense. My impression is that it is far more difficult for the right side of my brain to explain some mathematical insight to the left side than for the left side to explain it to someone else(‘s left side ;-)). However how do you communicate if not by language which seems to be pretty inherently linear and not holistic. So in a sense I think there is a problem here which we cannot solve without severe changes to our brain-organisation. I also think that this time-consuming process of translation of a linguistic description of a mathematical fact into a picture and back is really at the heart of the training of a mathematician. My impression also is that in cases where intuition and formalism are somewhat not on a par, i.e. one has proof but not a “nice” proof I find the result all the more interesting.

  Apart from this slight criticism I tend to fully agree with what has been said.
  Also I would be interested in what exactly you, Peter, mean by “I despise the whole “proofs from the book”-idea. I would like to know whether I agree or disgree with you.
  Disclaimer: I’m not a neurologist and apologize for any misinterpretations resluting from misunderstandings.

  * **Peter**, 2011/10/17
    Thanks for the comment, Thilo. As I wrote, proofs are the best we have — but they often suck which, I think, reflects a fundamental flaw not random chance.
    Regarding your question, I do hope to write about the whole beauty/elegance/proofs-from-the-book topic sometime.
    PS: I edited your comment to reflect which part is a quote.
