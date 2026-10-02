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

```tsx
import { Kbd } from "@pisagor/solid";
```

Style with `@pisagor/recipes/kbd` — no app-level `tv()`.

## Examples

### Variants

Choose visual weight or emphasis so the keyboard badge matches importance in the surrounding layout.

:::example Variants

### With Button

Place the badge next to a button that performs the same action.

:::example WithButton

### Kbd Group

Group several keys when the shortcut is a chord.

:::example KbdGroup

### With Tooltip

Explain the shortcut with a short tooltip when the keys alone are unclear.

:::example WithTooltip

### Default

Show a keyboard key in a monospace badge.

:::example Default
