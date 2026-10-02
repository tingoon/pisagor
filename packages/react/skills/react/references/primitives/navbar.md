---
title: Navbar
description: "Top application bar with brand, navigation, and action slots."
api: compound
taxonomy: pattern
---

## When to use

- Place brand, primary navigation, and key actions in a top application bar.
- Prefer Navbar for desktop and wide layouts; pair with Bottom Navigation on small screens when needed.
- Keep actions few so the bar does not compete with page content.

## Import

```tsx
import { Navbar } from "@pisagor/react";
```

Style with `@pisagor/recipes/navbar` — no app-level `tv()`.

## Examples

### Default

Top bar with brand, navigation, and action slots.

:::example Default

### With Sidebar

Pair the navbar with a sidebar when primary nav lives on the side.

:::example WithSidebar
