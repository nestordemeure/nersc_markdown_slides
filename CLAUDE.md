# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a NERSC markdown-based slides repository using [Marp](https://marp.app/) as the slide generation engine. The repository contains style definitions, assets, and demo slide decks following Berkeley Lab/NERSC visual identity guidelines.

## Installation & Setup

Install Marp CLI globally:
```sh
npm install -g @marp-team/marp-cli
```

## Common Commands

**Build slides to PDF:**
```sh
marp slide-deck.md --pdf --theme style/nersc-theme.css
```

**Build slides to HTML:**
```sh
marp slide-deck.md --html --theme style/nersc-theme.css
```

**Watch mode for development:**
```sh
marp slide-deck.md --watch --theme style/nersc-theme.css
```

## Repository Structure

```
/
├── README.md                    # Project overview and installation
├── style/
│   ├── specification.md         # Complete Berkeley Lab visual identity spec
│   ├── images/                  # Logo assets and branding images
│   │   ├── LBNL-logo-*.png     # Berkeley Lab logos (horizontal/vertical)
│   │   ├── nersc-logo.png      # NERSC logo
│   │   └── nersc-building.jpg  # Background image for title slides
│   └── example slides/          # PNG examples of each slide type
└── slide decks/                 # Actual slide deck implementations
    ├── demo/                    # Demo presentation
    └── documentation chatbot/   # Example presentation
```

## Visual Identity & Style Requirements

All slides must follow Berkeley Lab visual identity (detailed in `style/specification.md:1`):

**Colors:**
- Dark Blue (#00313C) - headers, banners
- Teal (#007681) - secondary brand color  
- Orange (#D57800) - bullet points, section titles
- Dark Gray (#63666A) - main body text
- Light Gray (#B1B3B3) - secondary text

**Fonts:**
- Arial - default body text
- ITC Franklin Gothic Std - headlines/titles

**Slide Types:**
1. **Title Slide** - Dark blue sidebar with logos, NERSC building background
2. **Section Title** - Split layout with orange section title on dark blue
3. **Basic Content** - Dark blue header banner with white body content
4. **Question Slide** - Centered large question text
5. **Thanks Slide** - Split layout with contact information

## Key Assets

Logo files in `style/images/`:
- `LBNL-logo-horizontal.png` - For content slide headers
- `LBNL-logo-vertical.png` - For title slide sidebar
- `nersc-logo.png` - Paired with Berkeley Lab logo on title slides
- `nersc-building.jpg` - Title slide background image

Reference examples in `style/example slides/` show proper implementation of each slide type.

## Development Notes

- The project is in early development stage (README shows TODO items)
- No existing Marp theme file yet - this needs to be created based on the specification
- Slide content should be written in standard Markdown with Marp directives
- All slides except title slides should have page numbers in bottom right
- Orange square bullets are default for lists
- Code blocks should appear in gray boxes with monospace font