# NERSC Markdown Slides

This is a NERSC markdown-based slides repository using [Marp](https://marp.app/) as the slide generation engine. The repository contains style definitions, assets, and slide_decks following Berkeley Lab/NERSC visual identity guidelines.

Use the [Context7 MCP](https://context7.com/) to get documentation on using `marp-cli` (the command line tool we use to build the slides, Context7 ID: `/marp-team/marp-cli`) and `marpit` (the format used to write the slides and the CSS styling, Context7 ID: `/marp-team/marpit`). 

## Repository Structure

```
/
├── README.md                        # Project overview, installation, and usage instructions
├── package.json                     # Project configuration for Marp CLI
├── slide_decks/                     # Slide decks
│   ├── README.md                    # Slide deck writing guide
│   ├── docs/                        # Documentation presentation
│   └── ...                          # Other slide_decks
├── style/                           # Slide styling and themes
│   ├── specification.md             # Reference spec for slide style
│   ├── nersc-theme.css              # Theme file
│   └── images/                      # Branding images and logos for styling
│       ├── LBNL-logo-horizontal.png # Berkeley Lab horizontal logo
│       ├── LBNL-logo-vertical.png   # Berkeley Lab vertical logo
│       ├── nersc-logo.png           # NERSC logo
│       └── nersc-building.jpg       # NERSC building photo for slides
├── src/                             # Custom engine extensions
│   ├── README.md                    # Engine documentation
│   └── custom-engine.js             # Custom Marp engine with additional features
└── .github/                         # GitHub configuration
    └── workflows/                   # GitHub Actions workflows
        └── deploy-pages.yml         # Auto-deploy docs slides to GitHub Pages
```

The code is organized around strong separation of concerns: the `slide_decks` folder is all about slide content and does not discuss or codify appearances, the `style` folder is all about appearances, and the `src` folder is all about any additional logic that might be required to produce the slides as desired.

## Basic Usage Information

The following commands will build a given deck to HTML / PDF, picking up on our style and engine via `package.json`:

```sh
# Convert a specific deck to HTML
marp "slide_decks/docs/slides.md"

# Convert to PDF
marp "slide_decks/docs/slides.md" --pdf
```

The documentation slides (`slide_decks/docs/slides.md`) serve as our test deck and feature demonstration.

Marp has a `--debug` flag you can use to get fine-grained details on the build process and error messages.
Use it whenever you debug a Marp warning or error message.