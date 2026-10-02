---
title: Json Tree View
description: "Explores nested JSON as an expandable tree so structured data is easier to inspect."
api: closed
taxonomy: pattern
---

## When to use

- Inspect nested JSON as an expandable tree in tools and debug UIs.
- Prefer JSON Tree View over a raw string dump when structure matters.
- Set expand depth so large payloads do not overwhelm the first view.

## Import

```ts
import { JsonTreeView } from "@pisagor/vue";
```

Style with `@pisagor/recipes/json-tree-view` — no app-level `tv()`.

## Examples

### Data Types

Highlight value types so structure is easier to scan.

:::example DataTypes

### Expand Depth

Open to a set depth so large payloads do not overwhelm the first view.

:::example ExpandDepth

### Map Set

Render Map and Set values when those structures appear in the data.

:::example MapSet

### Default

Inspect nested JSON as an expandable tree.

:::example Default
