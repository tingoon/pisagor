---
title: Textarea
description: "Captures longer text such as messages, notes, and descriptions over multiple lines."
api: closed
taxonomy: primitive
---

## When to use

- Capture multi-line text for messages, notes, and descriptions.
- Prefer Textarea over Input when line breaks matter.
- Use autoresize when the field should grow with content instead of showing an inner scrollbar early.

## Import

```tsx
import { Textarea } from "@pisagor/react";
```

Style with `@pisagor/recipes/textarea` — no app-level `tv()`.

## Examples

### Variants

Choose emphasis to match surrounding inputs.

:::example Variants

### Autoresize

Grow with content instead of showing an inner scrollbar early.

:::example Autoresize

### Disabled

Show that editing is unavailable. Prefer explaining why nearby.

:::example Disabled

### Invalid

Surface a validation error when the text is missing or not allowed.

:::example Invalid

### Controlled

Manage state from the parent when other UI must stay in sync with this textarea.

:::example Controlled

### Default

Capture multi-line text for messages and notes.

:::example Default
