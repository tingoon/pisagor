---
title: Bottom Navigation
description: "Gives mobile users quick access to main app sections from a bar fixed to the bottom of the screen."
api: compound
taxonomy: pattern
---

## When to use

- Give mobile users three to five primary destinations fixed to the bottom of the screen.
- Prefer Bottom Navigation over a top navbar when thumbs need one-handed reach.
- Avoid packing secondary or rare destinations into the bar — put those in overflow menus.

## Import

```tsx
import { BottomNavigation } from "@pisagor/react";
```

Style with `@pisagor/recipes/bottom-navigation` — no app-level `tv()`.

## Examples

### Default

Fixed bottom destinations for primary mobile sections.

:::example Default

### Icon Only

Use icons alone when labels would crowd a narrow bar. Provide accessible names.

:::example IconOnly

### With Links

Render destinations as links when each item navigates to a route.

:::example WithLinks
