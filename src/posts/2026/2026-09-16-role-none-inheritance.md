---
layout: post
title: "Can this go? On role presentation inheritance."
date: 2026-09-16
permalink: 0226/
---

As co-editor I often feel like the janitor of the ARIA specification. I tend to spend time on things that feel like going into the basement, full of stuff nobody remembers putting there, much of it questionable, and very little that can just be thrown out.

## As small dent

A few weeks months, I stumbled upon [this thread on axe's tracker](https://github.com/dequelabs/axe-core/pull/5171#discussion_r3435303382) where they were discussing test cases for ARIA markup in invalid HTML. I was fairly certain that no ARIA spec says much about invalid HTML markup but off I went to double check the basement.

This brought me to the spec's section discussing ARIA's concept of [Presentational Role Inheritance](https://www.w3.org/TR/wai-aria-1.3/#presentational-role-inheritance). If you don't know this concept, here's the gist: if you have complex markup that turns out to not deserve semantics, then it can be cumbersome to remove its semantics (by adding role `none`). Take a big HTML table that turns out to be for layout, not data. Adding role `none` to not just the `table` element but to its caption, body, each row and each cell - that's just a drag (and error prone). So ARIA wants to make things easier for authors: slap the role on the `table` root and the rest is inherited. 

Sounds nice - and it is: disable semantics of a complex HTML snippet with a single use of role. What's not to like?

Now what caught my eyes was the following language (in the current ED):

> When an explicit or inherited role of none/presentation is applied to an element with the implicit semantic of a WAI-ARIA role that has Allowed Accessibility Child Roles, in addition to the element with the explicit role of none/presentation, the user agent MUST apply an inherited role of none to any accessibility descendants that do not have an explicit role defined.

The last bit about **any accessibility descendants** struck me as too broad and - as it turned out - this had only referred to owned elements until [a recent search&replace to introduce this new terminology](https://github.com/w3c/aria/commit/bb6baf146e227498a503825a30cbc5d8cc6844d5#diff-0eb547304658805aad788d320f10bf1f292797b5e6d745a3bf617584da017051R506) so it should probably read **accessibility children**. 

The janitor in me was happy - just a small <s>dent</s> typo to fix. Issue filed, ARIA WG triage agreed, add it to the list.

## What's behind this wall?

When I looked again a few weeks ago, however, I became confused. Here's how the spec currently continues:

> Also, when an explicit or inherited role of none/presentation is applied to a host language element which has specifically allowed children as defined by the host language specification, in addition to the element with the explicit role of none/presentation, the user agent MUST apply an inherited role of none to any specifically allowed children that do not have an explicit role defined. 

On the one hand, this confirms that we didn't need to talk about descendants since the concept is applied recursively to **specifically allowed children**.

Unfortunately, it's unclear what the phrase *specifically allowed children* means here (just like Allowed Accessibility Child Roles doesn't really make sense in the earlier quote).

This stems in part from [another wider terminology change](https://github.com/w3c/aria/pull/1454) in ARIA 1.3 replacing "required children" with "allowed accessibility child roles".

Going back to ARIA 1.2, here's the equivalent part (within [ARIA 1.2 role presentation](https://www.w3.org/TR/wai-aria-1.2/#presentation)):

> Also, when an explicit or inherited role of presentation is applied to a host language element which has required children as defined by the host language specification, in addition to the element with the explicit role of presentation, the user agent MUST apply an inherited role of presentation to any required children that do not have an explicit role defined.

This seems better at first. Plain "children" make more sense in a host language context. However, the phrase "required children as described by the host language" does not. 

Intuitively, you know what it means. As the spec puts it

> Some elements are only complete when additional descendant elements are provided. 

A table needs rows and cells to be complete. A list needs list items. Obvs.

Unfortunately, that's not actually true. The closest matching concept is probably the content model. But HTML does not require any children or descendants for, say, a table element. Nor for virtually any other element. Sure, it might make no sense and cause accessibility issues but it's perfectly valid. So how could we decide when something is required?

## Does this old projector even work?

One idea might be to invert this then. Some elements do require particular parents. Maybe those work? At this point I was too suspicious and a reality check seemed in order. 

So [I tested some simple snippets](https://github.com/w3c/aria/issues/2832#issuecomment-5507424740) outside the given examples of table and list. For example, `figcaption` can only occur withing `figure` and `summary` only in `details`. So what happens when you add role `none` to `figure` and `summary`? 

While HTML-ARIA doesn't allow role `none`, it seems browser happily make these elements presentational - but neither `figcaption` nor `summary` then inherit this role. (Thankfully neither would any other content alongside them such as an image in a `figure` or the contents of a `details`).

Perhaps a better example is `hgroup`. [HTML-ARIA allows any role](https://w3c.github.io/html-aria/#el-hgroup) and [its content model](https://html.spec.whatwg.org/#the-hgroup-element) is fairly restrictive - essentially only one heading and surrounding paragraphs are allowed. Lo and behold, if you set role none to an `hgroup`, its children's roles remain untouched. 

And that seems like a good thing! I'd hate to lose a perfectly good heading this way. More generally it makes little sense to inherit role `none` when the content model allows all flow or phrasing content.

## Is there room in the other building?

So [I went through all HTML elements to look at their content models](https://github.com/w3c/aria/issues/2832#issuecomment-5631222828) and there really isn't much left, especially once you take into account what HTML-ARIA already prevents (by not allowing role `none` on some elements). Maybe `canvas` will need an update as part the [html-in-canvas proposal](https://github.com/w3c/aria/issues/2758). Maybe `audio` and `video` need a look because they are not fully spec'ed on the ARIA end. But beyond that?

Looking at SVG only muddies the water further. Very few SVG elements allow any roles and their content models are in most cases extremely limited (e.g. `circle`, `ellipse`, `line`) and otherwise extremely broad (e.g. `svg`, `g`, `symbol`, `use`). Given how SVG is in a poor state regarding ARIA, it wouldn't really mean much anyway.

Given all that, tables and lists still make sense to me. Those are very old HTML elements and we need a workaround for legacy table/list layouts. Thankfully, for these elements inheritance also seems to work. (Well, mostly anyway  - Safari does not seem to inherit onto list items.)

But keeping a complicated general rule for inheritance because two elements have been used poorly in the past? Not a great idea. 

Instead, this fits much better with host-language integration. HTML-ARIA and HTML-AAM already handle orphaned elements. It seems straight forward to me that we can extend this language to role `none` inheritance where needed (i.e. tables and lists ). Any other host language is free to do the same. If we ever come to a point where this is so abundant that a simplification is needed, then a new mechanism for this is probably the wiser choice. (I admit I lack the imagination for this.)

## Trash day

So I think this part of the ARIA spec could just g?. Would be nice to clear that room in the basement. We'll have to see what the <s>teachers</s> WG will say.
