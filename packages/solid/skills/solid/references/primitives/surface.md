---
title: Surface
description: "Provides a semantic background layer for grouped content such as cards and panels."
api: closed
taxonomy: primitive
---

## When to use

- Apply a semantic background layer for grouped content.
- Prefer Surface for elevation and background tokens; prefer Card when the block is a content unit with actions.
- Use padding variants to match density of the surrounding layout.

## Import

```tsx
import { Surface } from "@pisagor/solid";
```

Style with `@pisagor/recipes/surface` — no app-level `tv()`.

## Examples

### Variants

Choose surface elevation or tone to match hierarchy.

:::example Variants

### Padding

Adjust padding to match the density of the surrounding layout.

:::example Padding

### Nested

Nest another surface when hierarchy or layered structure is part of the content.

:::example Nested

### With Form Controls

Host form controls on a surface when the group needs a shared background.

:::example WithFormControls

### Default

Apply a semantic background layer for grouped content.

:::example Default
