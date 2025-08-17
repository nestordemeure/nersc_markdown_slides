---
marp: true
theme: nersc
paginate: true
---

<!-- _class: title -->

# **NERSC Markdown-based Slides**
## Documentation for Marp-based presentations
### NERSC Week 2025

<div class="authors">
<strong>Nestor Demeure</strong><br>
National Energy Research Scientific Computing Center, Berkeley CA, United-States
</div>

---

<!-- _class: question -->

# **Can we have version controlled NERSC slides?**

---

<!-- _class: section-title -->

# What is Marp? Understanding the Markdown Presentation Ecosystem
## Understanding the Markdown Presentation Ecosystem

---

# What is Marp?

* **Markdown Presentation Ecosystem** - Write slides in simple Markdown syntax
* **Separates Content from Form** - Content in Markdown, styling in single CSS file
* **Multiple Output Formats** - Generate HTML, PDF, and PowerPoint presentations
* **Current Style** - Emulates preferred NERSC style (PRs welcome for more standard NERSC style!)

```bash
# Example build command
marp slides.md --pdf --theme ./nersc-theme.css
```

---

# Marp Capabilities: Text and Images

Normal text works as expected, with support for **bold**, *italic*, and `inline code`.

You can also include images easily:

![w:928](https://raw.githubusercontent.com/nestordemeure/nersc_markdown_slides/refs/heads/main/slide_decks/docs/images/doudna.jpg)

*The Doudna building at NERSC*

---

# Marp Capabilities: Formulas

Mathematical formulas work great for HPC content:

$$\text{FLOPS} = \frac{\text{Number of Operations}}{\text{Execution Time}}$$

For a matrix multiplication $C = A \times B$ where $A$ is $m \times k$ and $B$ is $k \times n$:

$$\text{FLOPS} = \frac{2 \times m \times n \times k}{\text{time}}$$

---

# Marp Capabilities: Python Code

```python
# JAX linear algebra example
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

Code blocks support syntax highlighting for many languages.

---

# Marp Capabilities: Shell Commands

```bash
# SSH to Doudna and check system
ssh username@doudna.nersc.gov

# Check available modules
module avail

# Load your favorite compiler
module load gcc/11.2.0

# Run your HPC application
srun -N 4 -n 128 ./my_hpc_app
```

---

<!-- _class: section-title -->

# Getting Started
## Installation and Basic Usage

---

# Installation and Setup

**Install Marp CLI:**
```bash
npm install -g @marp-team/marp-core @marp-team/marp-cli
```

**Basic Commands:**
```bash
# Generate HTML
marp "slide_decks/docs/slides.md"

# Generate PDF
marp "slide_decks/docs/slides.md" --pdf

# Live editing with preview
marp --watch --preview "slide_decks/docs/slides.md"

# Debug mode for troubleshooting
marp --debug "slide_decks/docs/slides.md"
```

---

# Auto-deployment and Documentation

**GitHub Pages Integration:**
* Automatic deployment via GitHub Actions workflow
* Slides published automatically on push to main branch

**Documentation Resources:**
* **[marp.app](https://marp.app/)** - Marp's main page
* **[marp-cli](https://github.com/marp-team/marp-cli)** - Command line tool documentation  
* **[marpit.marp.app](https://marpit.marp.app/)** - Official Marpit documentation
* **[Context7 MCP](https://context7.com/?q=marp)** - For LLM assistance

---

<!-- _class: question -->

# **What are the trade-offs?**

---

<!-- _class: section-title -->

# Pros and Cons
## Evaluating the Markdown Slide Approach

---

# Pros and Cons

**Pros:**
+ **Version Control** - Full Git history for slides
+ **Pull Requests** - Collaborative review process for slide content
+ **LLM Assistance** - Spell check, clarity improvements, conciseness

**Cons:**
- **Loss of Interactivity** - No Google Slides collaborative editing
- **System Rigidity** - More structured approach required
- **Basic Template** - Current styling is minimal (PRs welcome!)

**Note:** Community contributions welcome to improve the template!

---

<!-- _class: section-title -->

# Conclusion
## Overview and Perspectives

---

# Overview

**What We've Covered:**
* Marp as a Markdown-to-slides solution
* Separation of content and presentation
* Rich formatting capabilities (text, images, formulas, code)
* Installation and basic usage workflows
* Trade-offs between flexibility and collaboration

**Key Benefits:**
* Version controlled presentation content
* Reproducible slide generation
* Integration with modern development workflows

---

# Perspectives

**Things Still To Do:**
* Enhance NERSC theme to match official branding guidelines
* Add more slide layout options (two-column, comparison slides)
* Improve mobile/responsive viewing experience
* Expand code syntax highlighting support
* Create slide template library for common presentation patterns

**Get Involved:**
* Fork the repository and create your own slide_decks
* Submit PRs to improve the NERSC theme
* Share feedback on workflow and usability

---

<!-- _class: thanks -->

# **Thank you!**

## [https://github.com/nestordemeure/<br>nersc_markdown_slides](https://github.com/nestordemeure/nersc_markdown_slides)

ndemeure@lbl.gov