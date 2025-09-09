# NERSC Markdown-based Slides

This repository contains the style information, as well as a number of slide_decks, for NERSC's Markdown-based slides.

## Repository Structure

We are using [marp](https://marp.app/) as our Markdown-to-slides engine.
The corresponding project files are organized as follows:

```
/
├── package.json                     # Project configuration for Marp CLI
├── slide_decks/                     # Slide decks
│   ├── README.md                    # Slide deck writing guide
│   ├── docs/                        # Documentation presentation
│   └── ...                          # Other slide_decks
├── style/                           # Slide styling and themes
│   ├── specification.md             # Reference spec for slide style
│   ├── nersc-theme.css              # Theme file
│   └── images/                      # Branding images and logos for styling
├── src/                             # Custom Marp engine with additional features
└── .github/                         # GitHub Action to auto-deploy docs slides to GitHub Pages
```

## Usage

Install `marp` as follows:

```sh
npm install -g @marp-team/marp-core @marp-team/marp-cli
```

The following commands will build a given deck to HTML / PDF (picking up on our style via `package.json`):

```sh
# Convert a specific deck to HTML
marp "slide_decks/docs/slides.md"

# Convert to PDF
marp "slide_decks/docs/slides.md" --allow-local-files --pdf
```

You might want to use the `--debug` flag when debugging warning and error messages.

For development purposes, you can use the watch mode to automatically rebuild slides when the source files change:

```sh
# Watch a specific slide deck and rebuild on changes with preview window
marp --watch --preview "slide_decks/docs/slides.md"
```

You can also use npm script `npm run build` to rebuild all slide decks to PDF.

## Marp Documentation

Here are some useful links on using [Marp](https://marp.app/):

* [marpit.marp.app](https://marpit.marp.app/): Marp's official documentation (including [a page on custom CSS themes](https://marpit.marp.app/theme-css))
* [marp-cli](https://github.com/marp-team/marp-cli): Marp's command line tool
* For LLM use, the [Context7 MCP](https://context7.com/?q=marp) has [Marpit](https://context7.com/marp-team/marpit) and [Marp-CLI](https://context7.com/marp-team/marp-cli) pages.

Marp was picked as it emphasizes writing slides in straight Markdown once we have defined our CSS style.
However, if we ever find it too limiting for our needs, [sli.dev](https://sli.dev/) might be a solid alternative.

## TODO

* write proper documentation slides
  * clean up format
  * diagram: import my JAX one
  * QR code should be clickeable links
  * chart HTML is not imported in github pages?

* marpit usage
  * how to center text when it makes sense?
  * how to make texlocally bigger for further emphasis?
  * dig into marpit specific CSS

* rename the `style` folder into `themes`
  * move the current content to a `nestor` subfolder (for Nestor's personal NERSC theme),
  * that way we can add alternative themes, including a proper (`nersc2025`?) official one
* add a `test` deck used solely for tests (with a readme stating so), demonstrating various feature and edge cases
* refactor around one repo per slide deck, with a style/engine git-submodule?