---
layout: post
title: Preprint 'On union ultrafilters'
date: 2010-12-21
categories:
- paper
- preprint
- research
- thelazyscience@peter.krautzberger.info
tags:
- almost ordered union ultrafilter
- BLAST 2010
- stable union ultrafilters
- union ultrafilters
published: true
permalink: 0044/
---

Remember back in summer when I was at <span class="caps">BLAST</span>? I promised that I’d upload that paper to the arXiv soon. Well, it took me a while longer, but it finally is uploaded to the [arXiv](http://arxiv.org/pdf/1012.4532) (after submitting it to the <span class="caps">BLAST</span> proceedings in November).

### What it’s about

The paper is a sibling to [the one already mentioned](/0026/). This time, instead of the strongly summable ultrafilter world, I focused on the union ultrafilter world.

*   An ultrafilter on $\mathbb{F}$, the non-empty subsets of $\omega$, is a **union ultrafilter** if it has a base of FU-set, i.e., sets of the form $FU ( \mathbf{s} ) $ where $\mathbf{s}= (s_i)_{i \in \omega}$ is a sequence of pairwise disjoint elements.
*   A union ultrafilter is **ordered** if there is a base of FU-sets such that the sequences are **ordered**, i.e., $\max(s_i) < \min(s_{i+1})$.
*   A union ultrafilter is stable if for a sequence of elements $FU ( \mathbf{s}^\alpha ) $ (where $\alpha < \omega$) it contains an element $FU ( \mathbf{t} ) $ such that $\\{ t_i : i< \omega \\} \subseteq^* FU ( \mathbf{s}^\alpha ) $ for all $\alpha$. Such a $ \mathbf{t} $ is a **pseudo condensation**.

[Back when Andreas Blass introduced union ultrafilter](http://www.math.lsa.umich.edu/~ablass/uf-hindman.pdf) ([MR](http://www.ams.org/mathscinet-getitem?mr=891244)) he studied mostly ordered union ultrafilters. The results in my preprint try to make some progress as how to differentiate the different notions. The terminology for stability is akin to P-points and their pseudo intersections, in fact the name is borrowed from the french term for P-points — $\delta$-stable.

### Stability for union ultrafilters

Andreas ended his incredibly rich paper introducing union ultrafilters with a huge theorem which characterizes stability for ordered union ultrafilters in 6 different ways. The first part of the preprint analyses whether the orderedness can be dropped. Orderedness is a very strong condition to add to union ultrafilters and it is similar to the difference between P-points and Ramsey/selective ultrafilters.

Even though [Andreas Blass and Neil Hindman later constructed a union ultrafilter that is not ordered](http://dx.doi.org/10.1090/S0002-9947-1987-0906807-4), the nature of ‘unorderedness’ remained unclear. So I wanted to check if stability might actually imply orderedness. Unfortunately, not a lot can be said. Some of Andreas’s stability characterizations hold for unordered union ultafilters in a similar way, some others imply stability, but whether one of those properties can imply orderedness is still open. The key result in this regard is the following.

**Theorem** A union ultrafilter is stable iff whenever the ordered pairs $\mathbb{F}^2_< = \\{ (s,t) : \max(s) < \min(t) \\}$ are finitely coloured, there exists a homogeneous set in the ultrafilter.

This characterization (which works for any other power up to and including $\omega$) is very surprising if you like the analogy to P-points and Ramsey ultrafilters. Indeed, back when Andreas proved it he used it to imply that the image of a stable ordered union ultrafilter under the minimum and maximum functions are Ramsey ultrafilter (he had shown that they are Q-points and the stability easily shows that the images are P-points) which was really surprising at the time — you took a P-point like property and out came that min and max are Ramsey ultrafilters! However, shortly thereafter (in the above paper of Andreas Blass and Neil Hindman), it turned out that union ultrafilters always have min and max as P-points ultrafilters. This leads back to the true mystery: how does stability have such a Miliken-Taylor-Theorem like Ramsey property?

### Unordered, but almost as good as ordered.

The other half of the paper contains a construction that settles another question related to orderedness. As I mentioned, Andreas and Neil had constructed a union ultrafilter that is not ordered. The way they did it was by preventing min and max to map it to a Q-point — since Andreas had shown that ordered union ultrafilters map to Q-points that way, this meant a fortiori that the union ultrafilter is not ordered. When I first studied that construction, the trouble was (for me) that this construction does not really tell you what ‘unorderedness’ look like. In the spirit of the first part, trying to check the differneces between ordered and unordered union ultrafilters, I wanted to settle the question whether the properties of the images und min and max can have an influence on the orderedness. Namely, it was open whether a union ultrafilter that maps to Ramsey ultrafilters must be ordered. This turned out not to be the case.

**Theorem** There consistently exists union ultrafilters that are not ordered union ultrafilters but their min and max are Ramsey ultrafilter.

It looks like a silly theorem, doesn’t it? So technical, just a slight difference to what was known etc etc. For me the interesting part was what happened in the proof. One key was to consider what I call the meshing graph.

Fix some pairwise disjoint sequence $\mathbf{s}$. If $\mathbf{t} \subseteq FU(\mathbf{s}) $, then **the meshing graph** on the vertices $\mathbf{t}$ is defined by edges between some $t_i,t_j$ if there exist $s_k \subseteq t_i, s_l \subseteq t_j$ such that neither $\min( s_k ) < \max( s_l )$ nor $\min ( s_l ) < \max ( s_k ) $.

In other words an edge represents that two elements are not ordered, they mesh. But it’s actually important that they do not just mesh, but they mesh because they contain elements in $\mathbf{s}$ mesh. The reason is that for a union ultrafilter not to be ordered requires some special FU-set (in this case $FU ( \mathbf{s} ) $) that is never refined to an **ordered** FU-set.

For that it’s not enough to look at the meshing graph with edges when the $t_i$ mesh; it could be that they mesh but in such a way that we are later forced to condense $\mathbf{s}$ to something ordered. To put it differently, it’s not difficult to take an ordered union ultrafilter and write down a base of not-ordered FU-sets (just merge every second element of a sequence). The difficulty is to guarantee that no ordered base exists.

The idea of the construction (which is done assuming CH, but essentially just requires iterated Cohen forcing, so MA-variants suffice) is to string together big batches of finite sequences with a complete meshing graph (in respect to some nicely behaving special sequence $\mathbf{s})$. So the meshing appears in big blobs of larger and larger cliques — which then turn out to be strung together in an ordered fashion (the blobs that is). For details, check the preprint.

Why do try to describe this? Well, it seems to give a good idea of what meshing in an unordered union ultrafilter should look like — each sequence for an FU-set should have larger and larger segments that mesh perfectly, but those segments come up in an ordered fashion. Now if only somebody could prove that meshing always looks like that — it would simplify many proofs and open up new approaches…
