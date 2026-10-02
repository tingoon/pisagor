---
title: Tabs
description: "Organizes related content into panels that users switch between without leaving the page."
api: compound-shorthand
taxonomy: standard
aliases:
  - tablist
---

## When to use

- Switch between related panels without leaving the page.
- Prefer Tabs when content is peer sections; prefer Accordion when multiple sections may stay open.
- Keep tab labels short and stable so orientation is clear.

## Import

```ts
import { Tabs } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/tabs` — no app-level `tv()`.

## Examples

### Variants

Choose tab emphasis to match the surface.

:::example Variants

### Orientation Horizontal

Lay tabs in a row for the common panel switcher.

:::example OrientationHorizontal

### Orientation Vertical

Stack tabs vertically when the layout favors a side rail.

:::example OrientationVertical

### Disabled

Show that the tabs is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### With Icons

Lead tabs with icons when symbols speed recognition.

:::example WithIcons

### Controlled

Drive the active tab from the parent when other UI depends on it.

:::example Controlled

### Compound

Compose tab list and panels from parts for a custom layout.

:::example Compound

### Default

Switch between related panels without leaving the page.

:::example Default

