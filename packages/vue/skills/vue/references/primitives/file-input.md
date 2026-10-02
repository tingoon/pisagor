---
title: File Input
description: "Captures one or more files with native file-picker styling aligned to other form controls."
api: closed
taxonomy: primitive
---

## When to use

- Capture files with a control that matches other form inputs.
- Prefer File Input for a compact picker control; prefer File Upload when drag-and-drop and previews matter.
- Set Accept so users only see suitable file types.

## Import

```ts
import { FileInput } from "@pisagor/vue";
```

Style with `@pisagor/recipes/file-input` — no app-level `tv()`.

## Examples

### Default

Capture files with a control aligned to other form inputs.

:::example Default

### Variants

Choose emphasis to match surrounding inputs.

:::example Variants

### Multiple

Allow more than one file in a single pick.

:::example Multiple

### Accept

Limit selectable types so users only see suitable files.

:::example Accept

### Disabled

Show that file picking is unavailable. Prefer explaining why nearby.

:::example Disabled

### Invalid

Surface a validation error when the file is missing or not allowed.

:::example Invalid

### On Files Change

Handle file changes when parent logic must react to each selection.

:::example OnFilesChange

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the file input needs emphasis.

:::example Sizes

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface
