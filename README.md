# NERSC Markdown-based Slides

This repository contains the style information, as well as a number of slide decks, for NERSC's Markdown-based slides.

## Repository Structure

We are using [marp](https://marp.app/) as our Markdown-to-slides engine.
The corresponding project files are organized as follows:

```
/
├── .github/                         # GitHub configuration
│   └── workflows/                   # GitHub Actions workflows
│       └── deploy-pages.yml         # Auto-deploy docs slides to GitHub Pages
├── README.md                        # Project overview, installation, and usage instructions
├── package.json                     # Project configuration for Marp CLI
├── slide decks/                     # Slide decks
│   ├── docs/                        # Documentation presentation
│   └── ...                          # Other slide decks
└── style/                           # Slide styling and themes
    ├── specification.md             # Reference spec for slide style
    ├── nersc-theme.css              # Theme file
    └── images/                      # Branding images for styling
        ├── LBNL-logo-horizontal.png # Berkeley Lab horizontal logo
        ├── LBNL-logo-vertical.png   # Berkeley Lab vertical logo
        ├── nersc-logo.png           # NERSC logo
        └── nersc-building.jpg       # NERSC building photo for slides
```

## Usage

Install `marp` as follows:

```sh
npm install -g @marp-team/marp-core @marp-team/marp-cli
```

The following commands will build a given deck to HTML / PDF (picking up on our style via `package.json`):

```sh
# Convert a specific deck to HTML
marp "slide decks/docs/slides.md"

# Convert to PDF
marp "slide decks/docs/slides.md" --pdf
```

You might want to use the `--debug` flag when debugging warning and error messages.

## Marp Documentation

Here are some useful links on using `marp`:

* [marp.app](https://marp.app/): Marp's official page
* [marp-cli](https://github.com/marp-team/marp-cli): Marp's command line tool
* [marpit.marp.app](https://marpit.marp.app/): Marp's official documentation (including [a page on custom CSS themes](https://marpit.marp.app/theme-css))
* [marp-vscode](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode): Official VScode extension
* For LLM use, the [Context7 MCP](https://context7.com/?q=marp) has [Marpit](https://context7.com/marp-team/marpit) and [Marp-CLI](https://context7.com/marp-team/marp-cli) pages.

Marp was picked as it emphasizes writing slides in straight Markdown once we have defined our CSS style.
However, if we ever find it too limiting for our needs, [sli.dev](https://sli.dev/) might be a solid alternative.

## TODO

* improve style to fit reference:
  * title:
    * fix vertical spacing of titles
    * fix NERSC logo positions
    * remove page number
  * base:
    * text is way too small
    * text zone appear small too?
  * section title:
  * question: DONE!
  * thanks:

* write slides
  * write docs slides
    illustrating various capabilities (image, latex formulas, python code, shell code, etc.)
  * port some of my slides as proof of concept (jax workshop, documentation chatbot, etc)

* slides can be surprisingly heavy
  re-check once the style is finalized