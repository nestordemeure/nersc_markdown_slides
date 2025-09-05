# Markdown-based Slides
## Writing slide decks in Markdown.

---

Question: Can we write slides in Markdown? And why bother?

---

# Marp!

Those slides are produced with [Marp](link)!

* written in markdown,
* compiled to html / pdf / pptx / etc.,
* using a custom style following my personnal NERSC theme.

There *are* [alternatives](https://sli.dev/) but Marp is customizeable, and focuses on raw markdown syntax.

---

Question: Why bother?

---

# Motivations
## Why Markdown?

---

# Version Control

Bringing version control to shared slide decks:

* Keeping an history of all previous versions,
* branches,
* issues,
* PRs.

Particularly interesting for shared, long-lived, (user-training?) decks.

---

# Accesible to Coding Assistants

Easily modified by coding assistants (ie claude code):

* grammar / spell check,
  "make sure I used the same acronym on all slides"
* deck-wide modifications,
  "we reran everything on this new hardware, update the specs slide and all corresponding mentions."
* translation,
  "translate this workshop from English to French",
* great to write slides while holding a baby in one hand!

---

# And More!

* We could test included code blocks at build / push time,
  the Rust documentation does that, do we want to?
* Easily standardize style over all slide decks,
  not sure I like that, given that I use a non-standard style...
* The tool can be fitted to our specific needs:
  code, formula, plots, etc

---

Question: What can we do with it?

---

# Marp
## Syntax and Capabilities

---

# Slide Types

You can define various slide types and styles (as you saw in the previous slides).

Here is one I added for this deck...

---

# Pictures

TODO: doudna picture here

---

# Code

With automatic colors!

```py
TODO: some jax code here
```

---

# Formulas

In mathjax (TODO: check):

TODO: a take on schrodingers equation here

---

# Plots

Generated from a CSV file in the repo, easily updated!

TODO: bar plot here

---

# Diagram?

* I have used an embedded HTML diagram in my JAX slides,
* SVG is easily included
* Mermaid is apparently possible (but people report troubles with that)

---

# And More

The compiler can be moded fairly easily for our needs:
* QR codes!
* colored 
  + pro
  - con
  * bullets!
* etc!

---

# Go check it for yourself

All of the code for the current slides is here:

TODO: QR code to this file.

---

Question: Okay, what are we losing?

---

# Shortcomings

- no real-time interaction
  - no easy way to replace Google-slides style interactions
- less fine-grained control on individual item placement
  + standardized "no-thinking" style
  - no last minute overlay of a block of text
- less approacheable to non tech people
  + its markdown
  - and git versionned
- some benefits do not apply to NDA decks
  - HTML export requires publicly accesible image
  - coding assistant should not be run on NDA decks

---

# Conclusion
## Overview and Perspective

---

# Overview

It works!

* the current slides are [written with it](link to markdown file),
* I ported my (non trivial) [JAX workshop slides](link to those) to it,
* I will try and use it for my upcoming slide decks.

---

# Perspectives

It is very much a proof of concept:

* porting other people's slides would be a good exercice in feasability
  my JAX workshop is fully ported [here](link)
* we should put together an official(-looking) theme
  the current one mimicks my prefered google slides theme
* feel free to play with it, submit issues and PR!

---

<!-- _class: thanks -->

# **Thank you!**

## [https://github.com/nestordemeure/<br>nersc_markdown_slides](https://github.com/nestordemeure/nersc_markdown_slides)

ndemeure@lbl.gov