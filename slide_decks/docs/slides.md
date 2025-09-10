---
marp: true
theme: nersc
paginate: true
---

<!-- _class: title -->

# **Markdown-based Slides**
## Writing NERSC slide decks in Markdown
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
* Using a custom CSS style following my NERSC theme.

Marp is **customizable**, but focuses on **raw Markdown** syntax.

---

<!-- _class: question -->

# **Why bother?**

---

<!-- _class: section-title -->

# Motivations
## Markdown is Code

---

# Version Control

Bringing **version control** to shared slide decks:

+ Keeping a history of all previous versions,
+ Branches,
+ Issues,
+ Pull requests.

Particularly interesting for *shared, long-lived, decks* (user-training?).

---

# Accessible to Coding Assistants

Easily modified by **coding assistants** (i.e., Claude Code):

+ Grammar / spell check,
  *"Make sure I used the same acronym on all slides."*
+ Deck-wide modifications,
  *"We reran everything on this new hardware, update the specs slide and all corresponding mentions."*
+ Complex content,
  *"Here is a CSV, integrate a violin plot of the data, colored by the Framework column."*
+ Translation.
  *"Translate this workshop from English to French."*

Great to write slides while holding a baby in one hand!

---

# Markdown is Code

All benefits of dealing with **code** apply:

+ Fitting the tool to our specific needs,
  Code, formulas, plots, etc.
+ Standardizing style over all slide decks,
  And keep it updated.
+ Testing code blocks at build / push time.
  The Rust documentation does that, do we want to?

No limits to our **pre/post-processing** abilities.

---

<!-- _class: question -->

# **What *can* we do?**

---

<!-- _class: section-title -->

# Marp
## Syntax and Capabilities

---

# Marp

Marp slides are written as a `---` separated **Markdown file**.

You can define various slide types and **styles in CSS**.

And plug into its **Javascript compiler** to add advanced capabilities.

---

<!-- _class: code -->

```md
# Marp

Marp slides are written as a `---` separated **Markdown file**.

You can define various slide types and **styles in CSS**.

And plug into its **Javascript compiler** to add advanced capabilities.
```

---

# Pictures

[**The Doudna supercomputer**](https://www.nersc.gov/what-we-do/computing-for-science/doudna-system) is already accelerating innovation:

![w:550](https://raw.githubusercontent.com/nestordemeure/nersc_markdown_slides/refs/heads/main/slide_decks/docs/images/doudna.jpg)

---

<!-- _class: code -->

```md
# Pictures

[**The Doudna supercomputer**](https://www.nersc.gov/what-we-do/computing-for-science/doudna-system) is already accelerating innovation:

![w:550](https://raw.githubusercontent.com/nestordemeure/nersc_markdown_slides/refs/heads/main/slide_decks/docs/images/doudna.jpg)
```

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

<!-- _class: code -->

```md
# Code

With **syntax highlighting**!

'''python
# Import JAX
import jax.numpy as jnp
from jax import random

# Create random matrices
key = random.PRNGKey(42)
A = random.normal(key, (1000, 1000))
B = random.normal(key, (1000, 1000))
'''
```

---

# Formulas

The *time-dependent Schrödinger equation* in [**MathJax**](https://www.mathjax.org/):

$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

---

<!-- _class: code -->

```md
# Formulas

The *time-dependent Schrödinger equation* in [**MathJax**](https://www.mathjax.org/):

$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$
```

---

# Plots

Generated **from a CSV file**, easily updated!

<iframe src="images/jax_kernel_sizes.html" width="100%" height="500" frameborder="0"></iframe>

---

<!-- _class: code -->

```md
# Plots

Generated **from a CSV file**, easily updated!

<iframe src="images/jax_kernel_sizes.html" width="100%" height="500" frameborder="0"></iframe>
```

---

# Diagrams

- **Mermaid** *is* possible, but people report troubles with it...
+ **SVG**, and **embedded HTML** work out of the box:  

<br>

<iframe style="width:100%; border:none;" src="images/jax_xla_schematics.html"></iframe>

---

<!-- _class: code -->

```md
# Diagrams

- **Mermaid** *is* possible, but people report troubles with it...
+ **SVG**, and **embedded HTML** work out of the box:  

<iframe style="width:100%; border:none;" src="images/jax_xla_schematics.html"></iframe>
```

---

# And More!

+ **Anything you can do in HTML**, you can embed in an iframe,
  * diagrams,
  * plots,
  * etc.
+ The **syntax can be extended** by pluggin-in the compiler.
  * special QR codes syntax,
  * colored pro / con bullets,
  * etc.

---

# Check the full code

![qr width:400px](https://github.com/nestordemeure/nersc_markdown_slides/blob/main/slide_decks/docs/slides.md)

---

<!-- _class: code -->

```md
# Check the full code

![qr width:400px](https://github.com/nestordemeure/nersc_markdown_slides/blob/main/slide_decks/docs/slides.md)
```

---

<!-- _class: question -->

# **Okay, what are we losing?**

---

# Shortcomings

- **No real-time interactions**,
  - No Google Slides-style interactions.
- **Limited control** on item placement,
  - No last minute overlay of a block of text,
  + Standardized "okay" style out of the box.
- **Less approachable** to non-technical people,
  - Compiled,
  - Git versioned,
  + Markdown.
- Some benefits do not apply to **private decks**.
  - HTML export requires publicly accessible images,
  - Coding assistant should not be run on non-disclosure-agrement decks,
  + it *does* work fully offline.

---

<!-- _class: section-title -->

# Conclusion
## Overview and Perspectives

---

# Overview

**It works!**

* The current slides are [written with Marp](https://github.com/nestordemeure/nersc_markdown_slides/blob/main/slide_decks/docs/slides.md),
* I ported my (non-trivial) [JAX workshop slides](https://github.com/nestordemeure/nersc_markdown_slides/blob/main/slide_decks/JAX_Workshop/slides.md),
* I will use it for my upcoming slide decks.

---

# Perspectives

This is very much a **proof of concept**:

* **Porting other people's slides** would be a good exercise in feasibility,
* We should put together an **official(-looking) theme**,
* Feel free to **play with it**, submit issues and PRs!

---

<!-- _class: thanks -->

# **Thank you!**

## [https://github.com/nestordemeure/<br>nersc_markdown_slides](https://github.com/nestordemeure/nersc_markdown_slides)

ndemeure@lbl.gov