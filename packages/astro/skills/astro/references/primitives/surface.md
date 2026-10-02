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

```ts
import { Surface } from "@pisagor/astro";
```

Style with `@pisagor/recipes/surface` — no app-level `tv()`.

## Examples

### Default

Apply a semantic background layer for grouped content.

:::example Default

### Nested

Nest another surface when hierarchy or layered structure is part of the content.

:::example Nested

### Variants

Choose surface elevation or tone to match hierarchy.

:::example Variants

### Padding

Adjust padding to match the density of the surrounding layout.

:::example Padding
