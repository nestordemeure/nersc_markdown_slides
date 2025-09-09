# Custom Marp Engine

A custom Marp engine extends the base [Marp Core](https://github.com/marp-team/marp-core) with additional markdown-it plugins to enable custom features.
It's configured in `package.json` under the `engine` property.

## Features

### QR Code Generation ([qr-code-plugin.js](qr-code-plugin.js))

Automatically generates QR codes from URLs using `![qr](url)` syntax. Supports standard Marpit image sizing and custom alt text.

### Colored Bullets ([list-marker-plugin.js](list-marker-plugin.js), [list-coalescing-plugin.js](list-coalescing-plugin.js))

Preserves markdown list markers (`*`, `+`, `-`) as `data-marker` attributes for CSS styling - enabling orange (default), green (pros), and red (cons) bullets. List coalescing merges adjacent bullet lists to allow mixing different marker types within the same visual list.

### List Item Sub-lines ([list-item-subline-plugin.js](list-item-subline-plugin.js))

Wraps text after soft breaks in list items with sub-line span elements for enhanced styling control.

### Disabled Fragmented Lists

Removes Marpit's fragmented list behavior by stripping `data-marpit-fragment` and `data-marpit-fragments` attributes from the rendered HTML. This allows using `*` bullet markers without triggering the one-by-one list item animation.

**Rationale**: We prioritize colored bullet styling over fragmented animations. The fragmented list feature conflicts with our goal of having visually distinct bullet types (`*`, `+`, `-`) that render as complete lists rather than animated sequences.