---
title: Kbd
description: "Displays keyboard shortcuts in a monospace badge so users know which keys to press."
api: compound
taxonomy: primitive
---

## When to use

- Show keyboard shortcuts in a monospace badge next to commands or hints.
- Prefer Kbd Group when a chord uses several keys.
- Pair with Tooltip when the shortcut needs a short prose explanation.

## Import

```ts
import { Kbd } from "@pisagor/astro";
```

Style with `@pisagor/recipes/kbd` — no app-level `tv()`.

## Examples

### Default

Show a keyboard key in a monospace badge.

:::example Default

### Group

Show a key combination by grouping related keys in order.

:::example Group
