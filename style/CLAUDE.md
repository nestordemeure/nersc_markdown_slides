# Theme Development Guide

Updates to the style should be reflected in both the specification and CSS file.
Changing one should come with changing the other, and vice versa, unless a change is meant to get them in sync (i.e. the CSS not behaving as specified by the specification).

Do not test your visual fixes. Instead, invite the human user to build and check the result manually.

## Debugging CSS

To better understand the compiled HTML structure for CSS decisions, examine the generated HTML files in slide deck folders (e.g., `slide_decks/docs/slides.html`). These files show exactly how Marp compiles the Markdown into HTML elements, making it easier to write targeted CSS selectors.

When making changes to normal slides (content type), ensure changes are carefully tailored to not impact other slide types (title, section-title, question, thanks). Use specific selectors or scope changes appropriately.