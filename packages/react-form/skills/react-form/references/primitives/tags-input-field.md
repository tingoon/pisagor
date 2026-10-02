---
title: Tags Input Field
description: "Adds and removes multiple tags with a label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/react-form"
---

## When to use

- Build a list of tags or chips when users add and remove multiple short values.
- Prefer over a bare TagsInput when you need a label, description, or error text with the control.
- Surface an error when at least one tag is required; show unavailable when the list cannot change.

## Import

```tsx
import { TagsInputField } from "@pisagor/react-form";
```

Part of `@pisagor/react-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the tags input is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
