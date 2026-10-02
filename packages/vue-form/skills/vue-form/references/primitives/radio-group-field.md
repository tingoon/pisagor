---
title: Radio Group Field
description: "Lets the user pick one option from a short list with an optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/vue-form"
---

## When to use

- Pick exactly one option from a short, related set that fits on screen at once.
- Prefer over SelectField when comparing choices side by side matters more than saving space.
- Prefer over a bare RadioGroup when you need a label, description, or error text with the group.

## Import

```ts
import { RadioGroupField } from "@pisagor/vue-form";
```

Part of `@pisagor/vue-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the radio group is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
