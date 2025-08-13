# Berkeley Lab Slides Styling Specification

The Berkeley Lab visual identity is described [here](https://creative.lbl.gov/visual-identity/), but all relevant information is included here.

## Fundamentals

### Fonts

- **Arial** is the default typeface for all text (body text, headlines, and titles)

**Note:** All font sizes mentioned in this specification are from Google Slides and may need conversion to appropriate Marp sizes.

### Colors

**Primary Palette:**

- **DARK BLUE** (Primary brand color)
  - RGB: 0, 49, 60
  - HTML: #00313C
  - Used for headers, banners, and accent areas

- **TEAL** 
  - RGB: 0, 118, 129
  - HTML: #007681

- **LIGHT GRAY**
  - RGB: 89, 89, 89
  - HTML: #595959
  - Used for subtext and secondary information

- **DARK GRAY**
  - RGB: 67, 67, 67
  - HTML: #434343
  - Used for main body text

**Secondary Palette:**

- **ORANGE** (Accent color)
  - RGB: 213, 120, 0
  - HTML: #D57800
  - Used for bullet points and highlighting

- **GREEN** (Pros)
  - RGB: 76, 175, 80
  - HTML: #4CAF50
  - Used for "pro" items in lists

- **RED** (Cons)
  - RGB: 244, 67, 54
  - HTML: #F44336
  - Used for "con" items in lists

- **YELLOW**, **RED**, **BLUE**, **PURPLE**, etc.
  - Available for specific use cases like pros/cons lists

### Text Colors

- **Dark gray** (#63666A) for main text on white backgrounds
- **Light gray** (#B1B3B3) for secondary text and subheadings
- **White** for text on dark blue backgrounds
- **Orange** (#D57800) for section titles and emphasis

## Slide Elements

- **Bullet Lists:**
  - Default bullets are **square and orange** (use `*` in markdown)
  - **Green bullets for pros** (use `+` in markdown)
  - **Red bullets for cons** (use `-` in markdown)
  - Text is justified and typically size 18
- **Page Numbers:** All slides except title slides have page numbers in bottom right corner
- **Hyperlinks:** Shown in blue/teal color and clickeable
- **Code/technical text:** Appears in monospace font in gray boxes
- **Emphasis:** Text can use different weights/colors for hierarchy

## Slide Types

### Title Slide
- **Left side (1/4):** Dark blue background with Berkeley Lab and NERSC logos stacked vertically
- **Right side (3/4):** NERSC building background image
- **Text overlay on image (white with dark shadow fo readability):**
  - Title (bold, ~size 23)
  - Subtitle (~size 21)  
  - Event name (~size 18)
  - Authors and institutions (size 12, bottom)

### Section Title Slide
- **Left side (1/3):** White background
- **Right side (2/3):** Dark blue background
- **Text on dark blue side:**
  - Section title (bold, orange, ~size 24)
  - Section subtitle (white, ~size 20)

### Basic Content Slide
- **Top banner (1/5 height):** Dark blue background
  - Berkeley Lab horizontal logo on left
  - Slide title (bold, white, ~size 22)
- **Body (4/5 height):** White background
  - Body text justified, ~size 18
  - Orange square bullets for lists

### Question Slide
- **Full white background**
- **Centered question in bold, large text** (~size 36)

### Thanks Slide
- **Left side (2/3):** White background with centered content:
  - "Thank you!" (bold, ~size 36)
  - Optional link/reference (~size 24)
  - Email contact (~size 18)
- **Right side (1/3):** Dark blue background

## Images Used

- **Berkeley Lab building icon (`berkeley_lab_icon.png`):** Used in content slide headers (top-left on dark blue banner)
- **Berkeley Lab vertical logo (`berkeley_lab_vertical.png`):** Used on title slides in the dark blue sidebar section
- **NERSC logo (`nersc_logo.png`):** Appears with Berkeley Lab vertical logo on title slides, positioned below the Berkeley Lab logo
- **NERSC building photo (`nersc_building.jpg`):** Used as background image for the right portion of title slides

All logos should maintain their aspect ratios but can be scaled depending on positions.