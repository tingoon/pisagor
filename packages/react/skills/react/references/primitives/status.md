---
title: Status
description: "Signals state with a small colored dot so users can see availability or severity at a glance."
api: closed
taxonomy: primitive
---

## When to use

- Signal availability or severity with a small colored indicator.
- Prefer Status for compact state; prefer Badge when a text label is also required.
- Do not rely on color alone — pair with text for accessibility.

## Import

```tsx
import { Status } from "@pisagor/react";
```

Style with `@pisagor/recipes/status` — no app-level `tv()`.

## Examples

### Variants

Choose color tone for availability or severity. Pair with text for accessibility.

:::example Variants

### Custom Color

Override the fill or accent when a brand or contextual color matters more than the theme default. Keep contrast readable.

:::example CustomColor

### Custom Size

Resize the indicator to match nearby text and density.

:::example CustomSize

### With Icon

Pair an icon with the label to reinforce meaning. Prefer a leading icon for recognition.

:::example WithIcon

### Sizes

Match size to the surrounding chrome.

:::example Sizes
