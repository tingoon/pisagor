---
title: Badge
description: "Labels content with a compact status, category, or count so users can scan it quickly."
api: closed
taxonomy: primitive
---

## When to use

- Label status, category, or count in a compact chip next to related content.
- Prefer Badge over a full Alert when the signal is secondary metadata, not a page-level message.
- Keep labels short so the badge stays scannable in dense layouts.

## Import

```ts
import { Badge } from "@pisagor/vue";
```

Style with `@pisagor/recipes/badge` — no app-level `tv()`.

## Examples

### Default

The compact badge for status, category, or count.

:::example Default

### Sizes

Match badge size to nearby text and controls.

:::example Sizes

### Variants

Choose tone so the badge reflects status severity or category.

:::example Variants

### Custom Color

Override the fill when a brand or contextual color matters more than the theme default. Keep contrast readable.

:::example CustomColor

### Pill

Use a fully rounded shape when softer, chip-like geometry fits the layout.

:::example Pill

### With Link

Make the badge navigate when the label itself is a destination.

:::example WithLink

### With Spinner

Show a spinner inside the badge when the status is still loading.

:::example WithSpinner
