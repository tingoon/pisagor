---
title: Avatar
description: Shows who a user is in the interface — usually a profile photo, or initials or an icon when there is no image or it has not loaded yet.
api: closed
taxonomy: primitive
examples:
  - id: compound
    title: Compound
    exportName: Compound
  - id: count
    title: Count
    exportName: Count
  - id: default
    title: Default
    exportName: Default
  - id: fallbacks
    title: Fallbacks
    exportName: Fallbacks
  - id: group
    title: Group
    exportName: Group
  - id: shapes
    title: Shapes
    exportName: Shapes
  - id: sizes
    title: Sizes
    exportName: Sizes
  - id: fallback-only
    title: Fallback Only
    exportName: FallbackOnly
---

## When to use

- Displays a user or entity image with a shaped fallback when the source is unavailable.

## Import

```ts
import { Avatar } from "@pisagor/vue/avatar";
```

Style with `@pisagor/recipes/avatar` — no app-level `tv()`.

Live examples below match `assets/examples/avatar/`.
