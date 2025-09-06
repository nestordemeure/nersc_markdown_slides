# Slide Decks Writing Guide

## Folder Structure

By default, slide deck folders should follow this structure:
- **slides.md**: The main Marp slide file
- **images/**: Subfolder containing any images used in the slides

## Required Header

Every slide deck must start with this header:

```markdown
---
marp: true
theme: nersc
paginate: true
---
```

## Slide Types

Use `<!-- _class: type -->` to specify slide types:

### `title` - Opening slide
```markdown
<!-- _class: title -->
# **Main Title**
## Subtitle
### Event

<div class="authors">
<strong>Author Name</strong><br>
Affiliation
</div>
```

### `section-title` - Section dividers
```markdown
<!-- _class: section-title -->
# Section Title
## Subtitle
```

### `content` - Default slides (no class needed)
```markdown
# Slide Title
- Content
- Lists, code, images, etc.
```

### `question` - Audience engagement
```markdown
<!-- _class: question -->
# **Your question?**
```

### `thanks` - Closing slide
```markdown
<!-- _class: thanks -->
# **Thank you!**
## Repository Link
Contact information
```

### `compact` - Content slide with reduced spacing
```markdown
<!-- _class: compact -->
# Slide Title
- Content with tighter vertical spacing
- For slides that need to fit more content
```

### `code` - Large code block slide
```markdown
<!-- _class: code -->
```python
def example_function():
    return "Hello, World!"
```
```

## Graphical Elements

### Images

Local images only work in PDFs and local HTML. By default, use repository URLs:

```markdown
![alt text](https://github.com/nestordemeure/nersc_markdown_slides/raw/main/path/to/image.jpg)
```

Image size should be made relative to page size to ensure proper fitting (80% of the textwidth is a good default).
Use Marpit's sizing keywords:

```markdown
![width:200px](image.jpg)
![height:30cm](image.jpg)  
![width:200px height:30cm](image.jpg)
![w:32 h:32](image.jpg)
```

### QR Codes

QR codes can be generated automatically from URLs using the `qr` prefix in image alt text:

```markdown
![qr](https://example.com/link)
![qr width:200px](https://github.com/your-repo/exercise1)
![qr alt:Download Dataset](https://data.example.com/dataset.zip)
![qr w:150 alt:Exercise Link](mailto:contact@example.com)
```

**QR Code Syntax:**
- Start alt text with `qr` to trigger QR code generation
- Use standard Marpit image sizing (`width:`, `height:`, `w:`, `h:`, percentages)
- Use `alt:Custom Text` to override the default alt text
- The URL becomes the QR code content
- Generated as embedded data URLs (works in PDFs and all formats)

### Bullet Lists

Bullet symbols should default to `*`.
The type of markdown bullet symbol used will decide on the formating of the list:

```markdown
Normal lists:
* First item
* Second item
* Third item

Pro lists (green bullets):
+ Version control benefits
+ Collaborative review process
+ Integration workflows

Con lists (red bullets):
- Loss of real-time collaboration
- More rigid structure required
- Learning curve for new users

Mixed lists:
+ Positive aspect
* Normal bullet point
* Another normal point
- Negative consideration

Itemless sublists (sub-content without bullet markers):
- Main point with detailed explanation,
  this continues the explanation under the bullet
- Another main point,
  with its own detailed sub-content
- Third point with multiple sub-lines,
  first sub-line explaining details
  second sub-line with more context
```
