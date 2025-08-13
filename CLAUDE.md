# CLAUDE.md

This is a NERSC markdown-based slides repository using [Marp](https://marp.app/) as the slide generation engine. The repository contains style definitions, assets, and slide decks following Berkeley Lab/NERSC visual identity guidelines.

Use the [Context7 MCP](https://context7.com/) to get documentation on using `marp-cli` (the command line tool we use to build the slides) and `marpit` (the format used to write the slides and the CSS styling). 

## Repository Structure

```
/
├── .github/                         # GitHub configuration
│   └── workflows/                   # GitHub Actions workflows
│       └── deploy-pages.yml         # Auto-deploy docs slides to GitHub Pages
├── README.md                        # Project overview, installation, and usage instructions
├── package.json                     # Project configuration for Marp CLI
├── slide decks/                     # Slide decks
│   ├── README.md                    # Slide deck writing guide
│   ├── docs/                        # Documentation presentation
│   └── ...                          # Other slide decks
├── src/                             # Custom engine extensions
│   ├── custom-engine.js             # Custom Marp engine with additional features
│   └── README.md                    # Engine documentation
└── style/                           # Slide styling and themes
    ├── specification.md             # Reference spec for slide style
    ├── nersc-theme.css              # Theme file
    └── images/                      # Branding images for styling
        ├── LBNL-logo-horizontal.png # Berkeley Lab horizontal logo
        ├── LBNL-logo-vertical.png   # Berkeley Lab vertical logo
        ├── nersc-logo.png           # NERSC logo
        └── nersc-building.jpg       # NERSC building photo for slides
```

## Basic Usage Information

The following commands will build a given deck to HTML / PDF, picking up on our style and engine via `package.json`:

```sh
# Convert a specific deck to HTML
marp "slide decks/docs/slides.md"

# Convert to PDF
marp "slide decks/docs/slides.md" --pdf
```

The documentation slides (`slide decks/docs/slides.md`) serve as our test deck and feature demonstration.

Marp has a `--debug` flag you can use to get fine-grained details on the build process and error messages.
Use it whenever you debug a Marp warning or error message.