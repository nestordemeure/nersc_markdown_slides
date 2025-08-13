# Documentation Slide Specification

This document outlines the specification for the documentation slide deck.

## Purpose

Present the concept of version-controlled NERSC slides using Marp, exploring the capabilities and trade-offs of this approach.

## Audience

NERSC staff - inviting them to try out the system, fork the repo, and make slides.

## Structure

1. **Title Slide** (existing - good to go)
2. **Leading Question Slide**
   - Main question: Can we have version controlled NERSC slides?
   - Secondary question: ~~Can Claude read my slides?~~ (joke, strikethrough)
3. **Section Title: What is Marp?**
4. **Marp Section**
   - What is Marp? (explanation)
     - Separates content (Markdown) from form (single CSS file)
     - Current style emulates preferred NERSC style (PRs welcome for more standard NERSC style)
   - Examples of capabilities:
     - Normal text
     - Images (using Doudna image from docs/images)
     - Formulas (HPC-relevant: FLOPS calculation)
     - Python code (JAX import + trivial linear algebra operation)
     - Shell code (SSH Doudna command)
5. **Section Title: Getting Started**
6. **Getting Started Section**
   - Install: `npm install -g @marp-team/marp-core @marp-team/marp-cli`
   - Run: `marp "slide decks/docs/slides.md"` (HTML) or `marp "slide decks/docs/slides.md" --pdf` (PDF)
   - Live editing: `marp --watch --preview "slide decks/docs/slides.md"`
   - Debug flag: `--debug` for warning/error messages
   - Auto-deployment: GitHub Pages integration from workflow
   - **Documentation Resources:**
     - [marp.app](https://marp.app/): Marp's main page
     - [marp-cli](https://github.com/marp-team/marp-cli): Marp's command line tool
     - [marpit.marp.app](https://marpit.marp.app/): Official documentation
     - [Context7 MCP](https://context7.com/?q=marp): For LLM use
7. **Trade-offs Question Slide**
   - What are the trade-offs?
8. **Section Title: Pros and Cons**
9. **Pros and Cons**
    - **Pros:**
      - Version control with Git
      - Pull requests on slides
      - LLM assistance (spell check, clarity, conciseness)
    - **Cons:**
      - Loss of Google Slides interactivity
      - Additional system rigidity
      - Basic template (PRs welcome!)
    - **Note:** People can submit PRs to improve the template
10. **Section Title: Conclusion**
    - Subtitle: Overview and Perspectives
11. **Overview Slide**
    - Summary of findings
12. **Perspectives Slide**
    - Things still to do
13. **Thanks Slide** (existing - good to go)

## Content Guidelines

- Keep explanations clear and concise
- Use practical examples to demonstrate Marp capabilities
- Balance technical details with accessibility
- Maintain a light tone (including the Claude joke)

## Visual Requirements

- Follow NERSC theme styling
- Include code examples with appropriate syntax highlighting
- Use clear section breaks between topics