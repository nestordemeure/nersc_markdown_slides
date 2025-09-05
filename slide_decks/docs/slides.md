---
marp: true
theme: nersc
paginate: true
---

<!-- _class: title -->

# **Markdown-based Slides**
## Writing slide decks in Markdown
### Documentation and Tutorial

<div class="authors">
<strong>Nestor Demeure</strong><br>
National Energy Research Scientific Computing Center, Berkeley CA, United-States
</div>

---

<!-- _class: question -->

# **Can we write slides in Markdown? And why bother?**

---

# Marp!

These slides are produced with [**Marp**](https://marp.app/)!

* Written in Markdown,
* Compiled to HTML / PDF / PPTX / etc.,
* Using a custom style following my NERSC theme.

Marp is **customizable** and focuses on **raw Markdown** syntax, 
but there *are* [alternatives](https://sli.dev/).

---

<!-- _class: question -->

# **Why bother?**

---

<!-- _class: section-title -->

# Motivations
## Why Markdown?

---

# Version Control

Bringing **version control** to shared slide decks:

+ Keeping a history of all previous versions,
+ Branches,
+ Issues,
+ PRs.

Particularly interesting for *shared, long-lived, (user-training?) decks*.

---

# Accessible to Coding Assistants

Easily modified by **coding assistants** (i.e., Claude Code):

+ **Grammar / spell check**,
  *"Make sure I used the same acronym on all slides."*
+ **Deck-wide modifications**,
  *"We reran everything on this new hardware, update the specs slide and all corresponding mentions."*
+ **Translation**,
  *"Translate this workshop from English to French."*
+ **Great to write slides while holding a baby in one hand!**

---

# And More!

* We *could* **test code blocks** at build / push time,
  The Rust documentation does that, do we want to?
* Easily **standardize style** over all slide decks,
  Not sure I like that, given that I use a non-standard style...
* The tool can be **fitted to our specific needs**:
  Code, formulas, plots, etc.

---

<!-- _class: question -->

# **What *can* we do with it?**

---

<!-- _class: section-title -->

# Marp
## Syntax and Capabilities

---

# Slide Types

You can **define various slide types and styles**, as you saw in the previous slides.

Here is one I added for this deck...

---

# Pictures

Some [**Doudna** system advertisement](https://www.nersc.gov/what-we-do/computing-for-science/doudna-system):

![w:550](https://raw.githubusercontent.com/nestordemeure/nersc_markdown_slides/refs/heads/main/slide_decks/docs/images/doudna.jpg)

---

# Code

With **syntax highlighting**!

```python
# Import JAX
import jax.numpy as jnp
from jax import random

# Create random matrices
key = random.PRNGKey(42)
A = random.normal(key, (1000, 1000))
B = random.normal(key, (1000, 1000))

# Matrix multiplication
C = jnp.dot(A, B)
print(f"Result shape: {C.shape}")
```

---

# Formulas

In [**MathJax**](https://www.mathjax.org/):

$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

---

# Plots

Generated from a CSV file in the repo, easily updated!

**TODO: bar plot here**

---

# Diagram?

* I have used an embedded HTML diagram [in my JAX slides](TODO),
* SVG is easily included,
* Mermaid is possible (but people report troubles with that).

---

# And More

The compiler can be modified fairly easily for our needs:
* QR codes!
* Colored 
  + pro
  - con
  * bullets!
* etc!

---

# Go check it for yourself

All of the code for these slides is here:

![qr width:400px](https://github.com/nestordemeure/nersc_markdown_slides/blob/main/slide_decks/docs/slides.md)

---

<!-- _class: question -->

# **Okay, what are we losing?**

---

# Shortcomings

- No real-time interaction
  - No easy way to replace Google Slides style interactions
- Less fine-grained control on individual item placement
  + Standardized "no-thinking" style
  - No last minute overlay of a block of text
- Less approachable to non-tech people
  + It's Markdown
  - And Git versioned
- Some benefits do not apply to NDA decks
  - HTML export requires publicly accessible images
  - Coding assistant should not be run on NDA decks

---

<!-- _class: section-title -->

# Conclusion
## Overview and Perspectives

---

# Overview

It works!

* These current slides are [written with it](https://github.com/nestordemeure/nersc_markdown_slides/blob/main/slide_decks/docs/slides.md),
* I ported my (non-trivial) [JAX workshop slides](https://github.com/nestordemeure/nersc_markdown_slides/tree/main/slide_decks/jax) to it,
* I will try and use it for my upcoming slide decks.

---

# Perspectives

It is very much a proof of concept:

* Porting other people's slides would be a good exercise in feasibility
  my JAX workshop is fully ported [here](https://github.com/nestordemeure/nersc_markdown_slides/tree/main/slide_decks/jax),
* We should put together an official(-looking) theme
  the current one mimics my preferred Google Slides theme,
* Feel free to play with it, submit issues and PRs!

---

<!-- _class: thanks -->

# **Thank you!**

## [https://github.com/nestordemeure/<br>nersc_markdown_slides](https://github.com/nestordemeure/nersc_markdown_slides)

ndemeure@lbl.gov