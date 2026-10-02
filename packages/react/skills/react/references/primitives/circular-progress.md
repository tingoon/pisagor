---
title: Circular Progress
description: "Shows how far along a task is on a circular track, including indeterminate loading when progress is unknown."
api: closed
taxonomy: primitive
---

## When to use

- Show task completion on a circular track when a ring fits the layout better than a bar.
- Prefer indeterminate when progress cannot be measured yet.
- Prefer Spinner for brief waits with no meaningful percentage.

## Import

```tsx
import { CircularProgress } from "@pisagor/react";
```

Style with `@pisagor/recipes/circular-progress` — no app-level `tv()`.

## Examples

### Sizes

Match ring size to available space and importance.

:::example Sizes

### Thickness

Adjust stroke thickness for visibility at the chosen size.

:::example Thickness

### With Value

Display the numeric percentage next to or inside the ring.

:::example WithValue

### Indeterminate

Animate without a value when progress cannot be measured yet.

:::example Indeterminate

### Controlled

Drive the value from the parent while async work runs.

:::example Controlled

### Default

Show completion on a circular track.

:::example Default
