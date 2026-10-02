---
title: Input
description: "Captures a single line of text for names, search terms, and other short values."
api: compound
taxonomy: primitive
---

## When to use

- Capture a single line of text for names, search, and short values.
- Prefer Input inside Field when label and error text are required.
- Use Clearable for search-like fields where resetting quickly matters.

## Import

```ts
import { Input } from "@pisagor/vue";
```

Style with `@pisagor/recipes/input` — no app-level `tv()`.

## Examples

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the input needs emphasis.

:::example Sizes

### Variants

Choose visual weight or emphasis so the input matches importance in the surrounding layout.

:::example Variants

### Clearable

Offer a clear control for search-like fields where resetting quickly matters.

:::example Clearable

### Disabled

Show that the input is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation or error state so users know the input needs attention before continuing.

:::example Invalid

### File

Use a file-styled input when the control picks a file path or upload target.

:::example File

### Controlled

Manage state from the parent when other UI must stay in sync with this input.

:::example Controlled

### Default

The single-line text field for short values.

:::example Default

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface

### With Field

Wrap the control in a field for label, description, and error messaging.

:::example WithField
