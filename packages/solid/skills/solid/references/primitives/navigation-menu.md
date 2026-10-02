---
title: Navigation Menu
description: "Displays navigation links so users can move between top-level sections of a site or app."
api: compound
taxonomy: pattern
---

## When to use

- Present top-level site or app destinations in a horizontal navigation set.
- Prefer Navigation Menu for marketing and multi-section sites with flyouts.
- Prefer Tabs when switching panels on the same page rather than navigating away.

## Import

```tsx
import { NavigationMenu } from "@pisagor/solid";
```

Style with `@pisagor/recipes/navigation-menu` — no app-level `tv()`.

## Examples

### Default

Horizontal navigation across top-level sections.

:::example Default

### Wrapping

Allow items to wrap when the viewport is too narrow for a single row.

:::example Wrapping
