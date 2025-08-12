---
marp: true
theme: nersc
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

<div class="nersc-logo"></div>

# **NERSC Markdown Slides Demo**

## Documentation for Marp-based presentations

### NERSC User Meeting 2024

<div class="authors">
<strong>Nestor Demeure, NERSC</strong><br>
Lawrence Berkeley National Laboratory
</div>

---

<!-- _class: section-title -->

# Introduction

## Overview of our slide system

---

# What is Marp?

- **Markdown Presentation Ecosystem** - Write slides in simple Markdown syntax
- **Multiple Output Formats** - Generate HTML, PDF, and PowerPoint presentations
- **Consistent Styling** - CSS-based themes ensure visual consistency
- **Version Control Friendly** - Plain text format works great with Git
- **Automated Workflows** - Easy to integrate into CI/CD pipelines

Key benefits for scientific presentations:
- Easy to include code snippets and technical content
- Mathematical formulas with LaTeX support
- Reproducible and collaborative workflow

---

# NERSC Slide Features

Our custom theme implements the Berkeley Lab visual identity:

- **Color Palette** - Dark blue (#00313C), teal (#007681), orange (#D57800)
- **Typography** - Arial for body text, Franklin Gothic for headlines
- **Branding** - Consistent logo placement and NERSC building imagery
- **Slide Types** - Title, section, content, question, and thanks layouts

```bash
# Example build command
marp slides.md --pdf --theme ../../style/nersc-theme.css
```

---

<!-- _class: question -->

# **Questions?**

---

<!-- _class: thanks -->

<div class="content">

# **Thank you!**

## [https://github.com/NERSC/nersc-markdown-slides](https://github.com/NERSC/nersc-markdown-slides)

**nestor@nersc.gov**

</div>