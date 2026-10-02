---
title: Item
description: "Lays out a row of media, title, description, and actions for lists, menus, and pickers."
api: compound
taxonomy: standard
---

## When to use

- Lay out media, title, description, and actions as one list or menu row.
- Prefer Item for consistent rows across lists, pickers, and menus.
- Use Link when the whole row navigates; keep nested buttons for secondary actions.

## Import

```ts
import { Item } from "@pisagor/astro";
```

Style with `@pisagor/recipes/item` — no app-level `tv()`.

## Examples

### Default

Lay out media, title, description, and actions as one row.

:::example Default

### Variants

Choose emphasis to match list density.

:::example Variants
