# NERSC Markdown-based Slides

This repository contains the style information, as well as a number of demo slide decks, for NERSC's Markdown-based slides.

We are using [marp](https://marp.app/) as our engine.

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

Run these commands from the repository root directory:

**Build slide deck to PDF:**
```sh
marp "slide decks/demo/demo-slides.md" --pdf --theme "style/nersc-theme.css" --allow-local-files
```

**Build slides for web presentation:**
```sh
marp "slide decks/demo/demo-slides.md" --html --theme "style/nersc-theme.css" --allow-local-files
```

**Live preview during development:**
```sh
marp "slide decks/demo/demo-slides.md" --watch --theme "style/nersc-theme.css" --allow-local-files
```

**For other slide decks**, replace the path accordingly:
```sh
marp "slide decks/your-deck/slides.md" --pdf --theme "style/nersc-theme.css" --allow-local-files
```

The `--allow-local-files` flag is required to access local images and assets referenced in the slides.

## Development and Testing

### Debug Build Process

For theme development and testing, use the provided debug build script:

```sh
./build-debug.sh
```

This script will:
1. Build the demo slide deck to PDF
2. Convert each PDF page to individual PNG files in the `debug/` folder
3. Generate comparison files: `debug/slide-1.png`, `debug/slide-2.png`, etc.

**Prerequisites:**
- Marp CLI installed (`npm install -g @marp-team/marp-cli`)
- Either `pdftoppm` (poppler-utils) or `convert` (ImageMagick) for PDF to PNG conversion:
  - Ubuntu/Debian: `sudo apt install poppler-utils`
  - macOS: `brew install poppler`

**Development Workflow:**
1. Edit theme files in `style/`
2. Run `./build-debug.sh` to regenerate test output
3. Compare generated PNGs (`debug/slide-*.png`) with reference examples (`style/example slides/*.png`)
4. Iterate until theme matches specification

The `debug/` folder is git-ignored and used only for development testing.

### Slide Types

The NERSC theme provides 5 slide types that follow Berkeley Lab visual identity guidelines:

1. **Title Slide** (`<!-- _class: title -->`): Dark blue sidebar with Berkeley Lab and NERSC logos, NERSC building background
2. **Section Title** (`<!-- _class: section-title -->`): Split layout with orange section title on dark blue background  
3. **Basic Content** (default): Dark blue header with Berkeley Lab logo, white body with orange square bullets
4. **Question Slide** (`<!-- _class: question -->`): Centered large question text
5. **Thanks Slide** (`<!-- _class: thanks -->`): Split layout with contact information

See the demo deck (`slide decks/demo/demo-slides.md`) for examples of each slide type.

## Marp Documentation

Here are some useful links on using `marp`:

* [marp.app](https://marp.app/): Marp's official page
* [marp-cli](https://github.com/marp-team/marp-cli): Marp's command line tool
* [marpit.marp.app](https://marpit.marp.app/): Marp's official documentation (including [a page on custom CSS themes](https://marpit.marp.app/theme-css))
* [marp-vscode](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode): Official VScode extension
* For LLM use, the [Context7 MCP](https://context7.com/?q=marp) has [Marpit](https://context7.com/marp-team/marpit) and [Marp-CLI](https://context7.com/marp-team/marp-cli) pages.

Marp was picked as, once we have styling in place, it emphasize writting slides in straight Markdown.
However, if we ever find it too limited for our need, [sli.dev](https://sli.dev/) might be a solid alternative.

## TODO

* simplify debug script
  * use marp --images option for images output for debug purposes
* file file paths issues
* add page numbers to pages
* improve readme
  * streamline
  * clean up demos