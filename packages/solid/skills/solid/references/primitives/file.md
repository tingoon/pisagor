---
title: File
description: "Represents a file such as an upload or download with name, meta, and optional actions."
api: compound-shorthand
taxonomy: standard
aliases:
  - attachment
  - file-row
---

## When to use

- Represent a single file with name, meta, and optional actions in lists and upload UIs.
- Prefer File with actions when download, remove, or preview sit next to the file.
- Keep the filename readable; truncate thoughtfully on narrow layouts.

## Import

```tsx
import { File } from "@pisagor/solid";
```

Style with `@pisagor/recipes/file` — no app-level `tv()`.

## Examples

### With Actions

Add download, remove, or preview actions beside the file.

:::example WithActions

### Compound

Compose file parts for a custom attachment row.

:::example Compound

### Default

Represent a file with name and metadata.

:::example Default
