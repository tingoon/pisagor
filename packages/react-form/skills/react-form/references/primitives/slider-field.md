---
title: Slider Field
description: "Sets a value along a range with a label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/react-form"
---

## When to use

- Set a value along a continuous range when approximate precision is enough.
- Prefer over a bare Slider when you need a label, description, or error text with the control.
- Prefer NumberField when the exact number must be typed rather than dragged.

## Import

```tsx
import { SliderField } from "@pisagor/react-form";
```

Part of `@pisagor/react-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the slider is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
