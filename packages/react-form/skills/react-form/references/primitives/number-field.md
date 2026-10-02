---
title: Number Field
description: "Adjusts a numeric value with steppers, label, and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/react-form"
---

## When to use

- Collect a number with steppers when min, max, or step bounds matter.
- Prefer over a bare NumberInput when you need a label, description, or error text with the control.
- Surface out-of-range errors in validation; show unavailable when the quantity cannot change.

## Import

```tsx
import { NumberField } from "@pisagor/react-form";
```

Part of `@pisagor/react-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the number field is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
