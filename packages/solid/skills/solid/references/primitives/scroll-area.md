---
title: Scroll Area
description: "Scrolls overflow content with styled scrollbars and optional fade edges that match the theme."
api: closed
taxonomy: standard
---

## When to use

- Scroll overflow content with styled scrollbars that match the theme.
- Prefer Scroll Area when native scrollbars break the visual design.
- Use fade edges to hint that more content exists beyond the viewport.

## Import

```tsx
import { ScrollArea } from "@pisagor/solid";
```

Style with `@pisagor/recipes/scroll-area` — no app-level `tv()`.

## Examples

### Horizontal

Use a horizontal layout when the scroll area should read left to right.

:::example Horizontal

### Scroll Fade

Fade edges to hint that more content exists beyond the viewport.

:::example ScrollFade

### Both Directions

Allow scrolling both horizontally and vertically when content overflows in two axes.

:::example BothDirections

### Nested

Nest another scroll area when hierarchy or layered structure is part of the content.

:::example Nested

### Default

Scroll overflow content with styled scrollbars.

:::example Default
