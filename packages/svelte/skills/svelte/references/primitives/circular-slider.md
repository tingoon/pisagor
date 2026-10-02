---
title: Circular Slider
description: "Lets users choose a value by dragging around a circular control instead of a straight track."
api: compound
taxonomy: standard
---

## When to use

- Choose a continuous value by dragging around a ring when a circular metaphor fits the control.
- Prefer a linear Slider when precision and marks are easier on a straight track.
- Show the current value nearby so the gesture stays understandable.

## Import

```ts
import { CircularSlider } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/circular-slider` — no app-level `tv()`.

## Examples

### Sizes

Match control size to the surrounding layout.

:::example Sizes

### Step

Snap to increments when values should move in fixed steps.

:::example Step

### Thickness

Adjust track thickness for visibility and touch comfort.

:::example Thickness

### With Value

Show the current value so the gesture stays understandable.

:::example WithValue

### Disabled

Show that the control is unavailable. Prefer explaining why nearby.

:::example Disabled

### Custom Markers

Place custom markers when meaningful points sit on the ring.

:::example CustomMarkers

### With Markers

Show markers for key values along the circular track.

:::example WithMarkers

### Controlled

Drive the value from the parent when other UI depends on it.

:::example Controlled

### Default

Choose a value by dragging around a circular track.

:::example Default

