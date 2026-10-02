---
title: Number Input
description: "Captures numeric values with optional steppers and validation for quantities and measurements."
api: compound
taxonomy: standard
---

## When to use

- Enter quantities and measurements with optional steppers and bounds.
- Prefer Number Input over a plain text Input when min, max, or step matter.
- Use scrub or mouse wheel when rapid adjustment fits the task.

## Import

```ts
import { NumberInput } from "@pisagor/vue";
```

Style with `@pisagor/recipes/number-input` — no app-level `tv()`.

## Examples

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the number input needs emphasis.

:::example Sizes

### Variants

Choose visual weight or emphasis so the number input matches importance in the surrounding layout.

:::example Variants

### Field Only

Render the field without extra chrome when the surrounding layout provides labels.

:::example FieldOnly

### Formatted

Display a formatted value when units or grouping aid reading.

:::example Formatted

### Mouse Wheel

Adjust the value with the mouse wheel when rapid changes fit the task.

:::example MouseWheel

### Range

Select a start and end value when the task needs a span rather than a single point.

:::example Range

### Step

Snap changes to a step interval when values should move in fixed increments.

:::example Step

### Disabled

Show that the number input is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation or error state so users know the number input needs attention before continuing.

:::example Invalid

### Controlled

Manage state from the parent when other UI must stay in sync with this number input.

:::example Controlled

### Default

Enter a number with optional steppers.

:::example Default

### Compound

Compose Number Input parts yourself when the shorthand API cannot express the layout you need.

:::example Compound

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface

### With Field

Wrap the control in a field for label, description, and error messaging.

:::example WithField

### With Scrubber

Drag to scrub the value when fine adjustment by pointer is faster than typing.

:::example WithScrubber
