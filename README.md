# NERSC Markdown-based Slides

This repository contains the style information, as well as a number of demo slide decks, for NERSC's Markdown-based slides.

We are using [marp](https://marp.app/) as our engine.
But, [sli.dev](https://sli.dev/) might also be a meaningful choice.

## Instalation

Install `marp` as follows:

```sh
npm install -g @marp-team/marp-cli
```

## Usage

The NERSC theme (`nersc`) is now available and implements the Berkeley Lab visual identity. All slide decks should use this theme in their frontmatter:

```yaml
---
marp: true
theme: nersc
paginate: true
---
```

### Build Commands

To build a slide deck to PDF (for example our demo deck):

```sh
cd "slide decks/demo"
marp demo-slides.md --pdf --theme ../../style/nersc-theme.css --allow-local-files
```

To build slides for web presentation:

```sh
cd "slide decks/demo"
marp demo-slides.md --html --theme ../../style/nersc-theme.css --allow-local-files
```

For live (in-browser) preview during development:

```sh
cd "slide decks/demo"
marp demo-slides.md --watch --theme ../../style/nersc-theme.css --allow-local-files
```

The `--allow-local-files` flag is required to access local images and assets referenced in the slides.

### Slide Types

The NERSC theme provides 5 slide types that follow Berkeley Lab visual identity guidelines:

1. **Title Slide** (`<!-- _class: title -->`): Dark blue sidebar with Berkeley Lab and NERSC logos, NERSC building background
2. **Section Title** (`<!-- _class: section-title -->`): Split layout with orange section title on dark blue background  
3. **Basic Content** (default): Dark blue header with Berkeley Lab logo, white body with orange square bullets
4. **Question Slide** (`<!-- _class: question -->`): Centered large question text
5. **Thanks Slide** (`<!-- _class: thanks -->`): Split layout with contact information

See the demo deck (`slide decks/demo/demo-slides.md`) for examples of each slide type.
