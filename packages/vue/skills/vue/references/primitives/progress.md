---
title: Progress
description: "Shows how complete a task is along a track, including indeterminate loading when progress is unknown."
api: closed
taxonomy: primitive
---

## When to use

- Show how complete a task is along a linear track.
- Prefer determinate progress when you can measure completion; prefer indeterminate when you cannot.
- Prefer Spinner for very short waits with no track.

## Import

```ts
import { Progress } from "@pisagor/vue";
```

Style with `@pisagor/recipes/progress` — no app-level `tv()`.

## Examples

### Orientation Horizontal

Lay out the progress bar horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the progress bar vertically when items should read in a column.

:::example OrientationVertical

### With Label

Label the progress so the percentage or status is readable.

:::example WithLabel

### Indeterminate

Show an indeterminate state when progress or selection is partial or unknown.

:::example Indeterminate

### Controlled

Manage state from the parent when other UI must stay in sync with this progress bar.

:::example Controlled

### Default

Show completion along a linear track.

:::example Default
