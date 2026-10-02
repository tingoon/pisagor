---
title: Hover Card
description: "Reveals richer preview content when the user pauses over a trigger, without opening a full dialog."
api: compound
taxonomy: standard
aliases:
  - popover-card
---

## When to use

- Preview richer detail on hover or focus without opening a dialog.
- Prefer Hover Card for previews; prefer Dialog when the user must interact deeply.
- Tune trigger delays so accidental passes do not flash content.

## Import

```tsx
import { HoverCard } from "@pisagor/solid";
```

Style with `@pisagor/recipes/hover-card` — no app-level `tv()`.

## Examples

### Default

Preview richer content on hover or focus without a dialog.

:::example Default

### Disabled

Show that the hover card is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Triggers Delays

Tune open and close delays so accidental passes do not flash content.

:::example TriggersDelays

### Controlled

Manage state from the parent when other UI must stay in sync with this hover card.

:::example Controlled

### Placements

Choose placement so the hover card stays near its trigger without covering critical content.

:::example Placements
