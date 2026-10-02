---
title: Date Field
description: "Picks a date from a calendar with label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/vue-form"
---

## When to use

- Pick a single date from a calendar when free-typed strings would be error-prone.
- Prefer over a bare DatePicker when you need a label, description, or error text with the control.
- Surface errors for missing or out-of-range dates; show unavailable when the date cannot change.

## Import

```ts
import { DateField } from "@pisagor/vue-form";
```

Part of `@pisagor/vue-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the date field is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
