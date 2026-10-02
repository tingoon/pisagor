---
title: Breadcrumb
description: "Shows where the user is within a hierarchy and lets them jump back to earlier levels."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Show location in a hierarchy and let users jump back to parent pages.
- Prefer Breadcrumb when depth is two or more levels and the path itself is useful.
- Collapse middle segments when the path is long so the current page stays visible.

## Import

```ts
import { Breadcrumb } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/breadcrumb` — no app-level `tv()`.

## Examples

### Collapsed

Collapse middle segments when the path is long so the current page stays visible.

:::example Collapsed

### Custom Separator

Replace the default separator when brand or locale needs a different divider.

:::example CustomSeparator

### With Link

Link ancestors so users can jump back through the hierarchy.

:::example WithLink

### With Menu

Park overflow ancestors in a menu when the path cannot show every level.

:::example WithMenu

### Compound

Compose items and separators from parts for a custom breadcrumb layout.

:::example Compound

### Default

The full path from root to the current page.

:::example Default

