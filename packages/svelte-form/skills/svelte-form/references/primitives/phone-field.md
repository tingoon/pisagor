---
title: Phone Field
description: "Collects a phone number with country selection and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/svelte-form"
---

## When to use

- Collect a phone number with country selection when international formats matter.
- Prefer over a bare PhoneInput when you need a label, description, or error text with the control.
- Surface errors for missing or malformed numbers; show unavailable when the number cannot change.

## Import

```tsx
import { PhoneField } from "@pisagor/svelte-form";
```

Part of `@pisagor/svelte-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the phone field is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
