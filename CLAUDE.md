# CLAUDE.md

This is a NERSC markdown-based slides repository using [Marp](https://marp.app/) as the slide generation engine. The repository contains style definitions, assets, and slide decks following Berkeley Lab/NERSC visual identity guidelines.

Use the [Context7 MCP](https://context7.com/) to get documentation on using `marp-cli` (the command line tool we use to build the slides) and `marpit` (the format used to write the slides and the CSS styling). 

## Repository Structure

```
/
├── README.md                        # Project overview, installation, and usage instructions
├── package.json                     # Project configuration for Marp CLI
├── slide decks/                     # Slide decks
│   ├── demo/                        # Demo presentation
│   └── ...                          # Other slide decks
└── style/                           # Slide styling and themes
    ├── specification.md             # Reference spec for slide style
    ├── nersc-theme.css              # Main theme file; imports all other CSS
    ├── css/                         # Folder for partial CSS files
    │   ├── base.css                 # Base styling rules for all slides
    │   ├── content-slide.css        # CSS for standard content slides
    │   ├── question-slide.css       # CSS for "leading question" slide type
    │   ├── section-title.css        # CSS for section title slides
    │   ├── thanks-slide.css         # CSS for "thank you" slide type
    │   └── title-slide.css          # CSS for main title slide
    ├── images/                      # Branding images for styling
    │   ├── LBNL-logo-horizontal.png # Berkeley Lab horizontal logo
    │   ├── LBNL-logo-vertical.png   # Berkeley Lab vertical logo
    │   ├── nersc-logo.png           # NERSC logo
    │   └── nersc-building.jpg       # NERSC building photo for slides
    └── example slides/              # Example images for each slide type
```

## Basic Usage Information

The following commands will build a given deck to HTML / PDF, picking up on our style via `package.json`:

```sh
# Convert a specific deck to HTML
marp "slide decks/demo/slides.md" --allow-local-files

# Convert to PDF
marp "slide decks/demo/slides.md" --allow-local-files --pdf
```

Note the use of `--allow-local-files` to load local images (as part of our theme).