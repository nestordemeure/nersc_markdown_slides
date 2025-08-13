# Slide Decks Writing Guide

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

### Bullet Lists

**Normal lists:**

```markdown
- First item
- Second item
- Third item
```

**Green and red bullets** for pros/cons:

```markdown
<!-- _class: pros -->
- Pro point 1
- Pro point 2

<!-- _class: cons -->
- Con point 1  
- Con point 2
```
