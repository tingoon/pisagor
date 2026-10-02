---
title: File Field
description: "Uploads one or more files with a label and optional validation message."
api: closed
taxonomy: standard
packageName: "@pisagor/solid-form"
---

## When to use

- Upload one or more files with a visible label and optional helper or error text.
- Prefer over a bare FileInput or FileUpload when the field must sit in a labeled form layout.
- Surface an error when a file is required or the type is wrong; show unavailable when upload is blocked.

## Import

```tsx
import { FileField } from "@pisagor/solid-form";
```

Part of `@pisagor/solid-form`. Style with recipes where available — no app-level `tv()`.

## Examples

### Disabled

Show that the file field is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation error under the field so the user knows what to fix before submitting.

:::example Invalid
