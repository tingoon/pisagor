---
title: Avatar
description: Shows who a user is in the interface — usually a profile photo, or initials or an icon when there is no image or it has not loaded yet.
api: closed
taxonomy: primitive
examples:
  - id: default
    title: Default
    exportName: Default
  - id: sizes
    title: Sizes
    exportName: Sizes
  - id: with-image
    title: With Image
    exportName: WithImage
---

## When to use

- Shows a user or entity with an image or fallback initials.

## Import

```ts
import { Avatar } from "@pisagor/astro/avatar";
```

Style with `@pisagor/recipes/avatar` — no app-level `tv()`.

Live examples below match `assets/examples/avatar/`.
