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
import { Breadcrumb } from "@pisagor/astro";
```

Style with `@pisagor/recipes/breadcrumb` — no app-level `tv()`.

## Examples

### Default

The full path from root to the current page.

:::example Default
