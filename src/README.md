# Custom Marp Engine

A custom Marp engine extends the base [Marp Core](https://github.com/marp-team/marp-core) with additional markdown-it plugins to enable custom features.
It's configured in `package.json` under the `engine` property.

## Features

### Colored Bullets

Preserves markdown list markers (`*`, `+`, `-`) as `data-marker` attributes for CSS styling - enabling orange (default), green (pros), and red (cons) bullets.