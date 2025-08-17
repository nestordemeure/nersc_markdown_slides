# Slide Writing Guide

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
```

## User-Specific Writing Guide

The following contains user-specific preferences and guidelines for slide writing:

@CLAUDE.local.md