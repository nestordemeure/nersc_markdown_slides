# NERSC Markdown-based Slides

This repository contains the style information, as well as a number of demo slide decks, for NERSC's Markdown-based slides.

## Repository Structure

We are using [marp](https://marp.app/) as our Markdown-to-slides engine.
The corresponding project files are organized as follows:

```
/
├── README.md                        # Project overview, installation, and usage instructions
├── package.json                     # Project configuration for Marp CLI
├── slide decks/                     # Slide decks
│   ├── demo/                        # Demo presentation
│   └── ...                          # Other slide decks
└── style/                           # Slide styling and themes
    ├── specification.md             # Reference spec for slide style
    ├── nersc-theme.css              # Theme file
    ├── images/                      # Branding images for styling
    │   ├── LBNL-logo-horizontal.png # Berkeley Lab horizontal logo
    │   ├── LBNL-logo-vertical.png   # Berkeley Lab vertical logo
    │   ├── nersc-logo.png           # NERSC logo
    │   └── nersc-building.jpg       # NERSC building photo for slides
    └── example slides/              # Example images for each slide type
```

## Usage

Install `marp` as follows:

```sh
npm install -g @marp-team/marp-core @marp-team/marp-cli
```

The following commands will build a given deck to HTML / PDF (picking up on our style via `package.json`):

```sh
# Convert a specific deck to HTML
marp "slide decks/demo/slides.md"

# Convert to PDF
marp "slide decks/demo/slides.md" --pdf
```

Also, you might want to use the `--debug` flag to debug warning and error messages.


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

* fix file file paths issues when building
  * point at github urls of our images instead of using local ones

* have the github page for this repo link to the demo deck
