---
title: Card
description: "Groups related content and actions into a contained surface that people can scan as one unit."
api: compound
taxonomy: standard
---

## When to use

- Group related content and actions into one scannable surface.
- Prefer Card when the block is a peer among other cards; prefer Surface for background-only layering.
- Avoid nesting too many interactive controls that compete for attention.

## Import

```ts
import { Card } from "@pisagor/astro";
```

Style with `@pisagor/recipes/card` — no app-level `tv()`.

## Examples

### Default

A contained surface for related content and actions.

:::example Default

### Product

Compose media, title, and actions for a product-style card.

:::example Product

### Icon

Lead with an icon when the card category should be recognizable at a glance.

:::example Icon
