---
layout: post
title: kids, exponential growth and 42
date: 2013-02-24
categories:
- Teaching
tags:
- example
- exponential growth
- NYC
- paper
published: true
permalink: 0133/
---

Last week, I was lucky enough to attend the [W3C workshop on ebooks](http://www.w3.org/2012/08/electronic-books/) in NYC. This allowed me to visit some old and very dear friends. In a conversation with one of their kids, I pulled out a classic that I like very much.

Today, I did some fact checking and -- lo and behold -- the answer was not 52 but [42](https://en.wikipedia.org/wiki/42_(number))! That is, of course, [fantastic](https://en.wikipedia.org/wiki/Answer_to_The_Ultimate_Question_of_Life,_the_Universe,_and_Everything#Answer_to_the_Ultimate_Question_of_Life.2C_the_Universe.2C_and_Everything_.2842.29).

Anyway, the question I asked was: how thick is an piece of regular office paper if you fold it <del>52</del> 42 times?

The answer is: it would reach all the way to the moon!

That usually surprises kids (and non-kids) and is a nice example for the surprises of [exponential growth](https://en.wikipedia.org/wiki/Exponential_growth#Exponential_stories). In fact, it also surprises me and I'm always somewhat nervous when a kid takes me up on the offer of checking that the number is actually correct.

For this you first have to decide what paper you're looking at. A piece of [A4 paper](https://en.wikipedia.org/wiki/Paper_size#A_series) (I'm German after all) is on average 0.1 mm. That's actually hard to estimate but it's what I eventually found [on the interwebs](http://hypertextbook.com/facts/2001/JuliaSherlis.shtml); if you have the time, I invite you to delve into the art of [density and calipers](https://en.wikipedia.org/wiki/Paper_density#Caliper).

When you fold it 42 times, it's as if you stacked <span>test</span> $2^{42}$ pieces of paper on top of each other. So the thickness is $2^{42}$ x 0.1mm, which is ~439,804 km (and a kilometer is 1,000,000 milimeter).

The [moon](https://en.wikipedia.org/wiki/Moon) is on average 384,400km from earth, and 405,410km at its farthest -- so we'll get there no matter what day. If, that is, we could fold a piece of paper 42 times.

For what it's worth, the world record for folding paper is 13 times -- achieved by [high schoolers on MIT's campus](http://www.boston.com/yourtown/news/cambridge/2011/12/toilet_paper_used_to_break_pap.html) in 2011.

---

_Comments_

* **Dirk Lorenz**, 2013/02/25
  You don’t need to google to estimate the thickness of one piece of paper: Just imagine a usual pack of 500 sheets. A rough estimate is that it is between 4cm and 8cm high which leads to a thickness of about 0.08mm and 0.16mm which is the right order of magnitude.
  * **Peter**, 2013/02/25
  I don’t have such things as stacks of paper at home anymore :(
     * **Dirk Lorenz**, 2013/02/26
     You could also make a very rough estimate of how high 500 sheets of paper are either from memory (as vague as it may be) or from the size of printers or their paper trays. To be off by factor of 10 would not be too bad. Anyway, nobody would think that 500 sheets are less than 0.5 cm high or more that 50 cm high. By the way: “How many piano tuners are there in Chicago?”
     * **Peter**, 2013/02/26
       Nice, but I didn’t want to turn this into a Fermi problem.
* **Asaf Karagila**, 2013/02/25
  That is awesome. MythBusters did a paper folding myth once. They prepared a sheet of paper the size of a hanger and used heavy machinery to help them fold it into halves. I think they got to 11 or something like that.
* **Frédéric Wang**, 2013/02/25
  I hope you didn’t forget to explain to the kids why the aspect ratio of A4 papers is much better than the one of U.S. paper sizes… And since I mention this, here is a related “MathML” problem: what is the minimal possible size for the bounding box of the element below, such that the ellipse drawn does not overlap the inner element?
