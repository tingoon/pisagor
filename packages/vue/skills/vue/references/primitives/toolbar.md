---
title: Toolbar
description: "Organizes a section heading on the left and related actions on the right for local tool chrome."
api: compound-shorthand
taxonomy: pattern
---

## When to use

- Place a local heading with related actions in one horizontal chrome row.
- Prefer Toolbar for section-level actions; prefer Navbar for app-wide chrome.
- Wrap actions when space is tight so controls stay reachable.

## Import

```ts
import { Toolbar } from "@pisagor/vue";
```

Style with `@pisagor/recipes/toolbar` — no app-level `tv()`.

## Examples

### Wrapped Actions

Wrap actions when horizontal space is tight.

:::example WrappedActions

### Compound

Compose toolbar parts for a custom chrome layout.

:::example Compound

### Default

Place a local heading with related actions in one row.

:::example Default
