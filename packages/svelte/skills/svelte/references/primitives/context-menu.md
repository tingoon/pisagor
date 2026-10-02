---
title: Context Menu
description: "Opens a menu of actions at the pointer so users can act on an item in its surrounding context."
api: compound
taxonomy: pattern
aliases:
  - right-click-menu
---

## When to use

- Offer actions at the pointer for the item under the cursor or focus.
- Prefer Context Menu for secondary actions; keep primary actions visible without a right-click.
- Mirror critical actions elsewhere so touch and keyboard users are not blocked.

## Import

```ts
import { ContextMenu } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/context-menu` — no app-level `tv()`.

## Examples

### Default

Open actions at the pointer for the item under the cursor or focus.

:::example Default

