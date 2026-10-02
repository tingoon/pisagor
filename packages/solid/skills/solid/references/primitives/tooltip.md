---
title: Tooltip
description: "Explains a control or label on hover or focus with a short message that does not block the page."
api: closed
taxonomy: standard
---

## When to use

- Explain a control briefly on hover or focus without blocking the page.
- Prefer Tooltip for short hints; prefer Hover Card when the preview content is richer.
- Do not put essential information only in a tooltip — keep critical copy visible.

## Import

```tsx
import { Tooltip } from "@pisagor/solid";
```

Style with `@pisagor/recipes/tooltip` — no app-level `tv()`.

## Examples

### Disabled

Show that the tooltip is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### With Keyboard Shortcut

Include the shortcut in the tooltip when keys reinforce the action.

:::example WithKeyboardShortcut

### Placements

Place the tooltip so it stays near the trigger without covering critical UI.

:::example Placements

### Default

Explain a control briefly on hover or focus.

:::example Default
