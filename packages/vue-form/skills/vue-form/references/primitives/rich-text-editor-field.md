---
title: Rich Text Editor Field
description: "Edits formatted text with a toolbar, label, and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/vue-form"
---

## When to use

- Compose formatted text with a toolbar when plain TextareaField is not enough.
- Prefer over a bare RichTextEditor when you need a label, description, or error text with the control.
- Prefer TextareaField for plain notes where formatting controls would distract.

## Import

```ts
import { RichTextEditorField } from "@pisagor/vue-form";
```

Part of `@pisagor/vue-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the editor is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
