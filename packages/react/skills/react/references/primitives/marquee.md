---
title: Marquee
description: "Scrolls content horizontally in a continuous loop for logos, quotes, or promotional strips."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Scroll logos, quotes, or promos in a continuous horizontal loop.
- Prefer Marquee for ambient motion; avoid for critical content users must read carefully.
- Pause on hover and respect reduced motion so the strip stays controllable.

## Import

```tsx
import { Marquee } from "@pisagor/react";
```

Style with `@pisagor/recipes/marquee` — no app-level `tv()`.

## Examples

### Orientation Horizontal

Lay out the marquee horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the marquee vertically when items should read in a column.

:::example OrientationVertical

### Pause On Hover

Pause motion on hover so users can read or interact.

:::example PauseOnHover

### Reverse

Reverse direction when the strip should move the other way.

:::example Reverse

### Spacing

Adjust gaps between parts when density needs to match the surrounding UI.

:::example Spacing

### Autofill

Duplicate items to fill the track when the source list is short.

:::example Autofill

### Custom Speed

Override speed when ambient motion should be slower or faster.

:::example CustomSpeed

### Fade

Fade the edges so the loop feels less abrupt.

:::example Fade

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Default

Scroll content in a continuous horizontal loop.

:::example Default
