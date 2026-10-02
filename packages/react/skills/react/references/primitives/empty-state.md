---
title: Empty State
description: "Shows a centered placeholder when a view has no data and points to the next useful action."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Explain that a view has no data and point to the next useful action.
- Prefer Empty State over a blank region when users might think something failed.
- Use Compact when the empty region is small, such as inside a card or panel.

## Import

```tsx
import { EmptyState } from "@pisagor/react";
```

Style with `@pisagor/recipes/empty-state` — no app-level `tv()`.

## Examples

### Compact

Use a denser empty state when the region is small.

:::example Compact

### Compound

Compose icon, title, and actions from parts for a custom empty layout.

:::example Compound

### Default

Explain that a view has no data and point to the next action.

:::example Default
