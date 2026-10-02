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

```ts
import { CircularProgress } from "@pisagor/astro";
```

Style with `@pisagor/recipes/circular-progress` — no app-level `tv()`.

## Examples

### Default

Show completion on a circular track.

:::example Default

### With Value

Display the numeric percentage next to or inside the ring.

:::example WithValue

### Indeterminate

Animate without a value when progress cannot be measured yet.

:::example Indeterminate

### Sizes

Match ring size to available space and importance.

:::example Sizes
