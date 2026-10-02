---
title: Skip Nav
description: "Lets keyboard users jump past repetitive navigation straight to the main content."
api: compound
taxonomy: standard
---

## When to use

- Let keyboard users skip repeated navigation and reach main content quickly.
- Place Skip Nav as the first focusable control in the page.
- Ensure the target id matches the main content landmark.

## Import

```tsx
import { SkipNav } from "@pisagor/solid";
```

Style with `@pisagor/recipes/skip-nav` — no app-level `tv()`.

## Examples

### Default

Skip repeated navigation and move keyboard focus to main content.

:::example Default
