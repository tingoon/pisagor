---
title: Separator
description: "Visually divides sections of content so grouped information is easier to scan."
api: closed
taxonomy: primitive
---

## When to use

- Divide related groups of content so structure is easier to scan.
- Prefer Separator for subtle structure; prefer headings when the break needs a label.
- Use orientation that matches the layout — horizontal between stacked blocks, vertical in rows.

## Import

```tsx
import { Separator } from "@pisagor/react";
```

Style with `@pisagor/recipes/separator` — no app-level `tv()`.

## Examples

### Default

Divide related groups of content.

:::example Default

### List

Separate list sections so groups stay scannable.

:::example List

### Inline Navigation

Separate inline nav items without looking like a heavy rule.

:::example InlineNavigation

### Vertical

Use a vertical layout when the separator should read top to bottom.

:::example Vertical
