---
title: Textarea Field
description: "Collects multiple lines of text with a label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/solid-form"
---

## When to use

- Collect longer text such as bios, notes, or messages over multiple lines.
- Prefer over a bare Textarea when you need a label, description, or error text with the control.
- Surface validation errors when input fails checks; show unavailable when editing is not allowed.

## Import

```tsx
import { TextareaField } from "@pisagor/solid-form";
```

Part of `@pisagor/solid-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the textarea is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
