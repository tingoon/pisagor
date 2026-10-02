---
title: Rich Text Editor
description: "Compose rich text with formatting controls for documents and messages."
api: compound-shorthand
taxonomy: standard
aliases:
  - wysiwyg
  - rte
---

## When to use

- Compose formatted text with a toolbar for documents and messages.
- Prefer Rich Text Editor when structure and emphasis matter; prefer Textarea for plain notes.
- Keep the toolbar focused on the formats your product actually supports.

## Import

```ts
import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";
```

Style with `@pisagor/recipes/rich-text-editor` — no app-level `tv()`.

## Examples

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Drive editor value from the parent when form state lives above.

:::example Controlled

### Disabled

Show that editing is unavailable. Prefer explaining why nearby.

:::example Disabled

### Invalid

Surface a validation error when content is missing or not allowed.

:::example Invalid

### Default

A formatted text surface with a toolbar for common marks.

:::example Default

