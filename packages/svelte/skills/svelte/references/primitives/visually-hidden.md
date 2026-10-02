---
title: Visually Hidden
description: "Hides text from the screen while keeping it available to screen readers and other assistive tech."
api: closed
taxonomy: primitive
---

## When to use

- Provide text for assistive tech without showing it visually.
- Prefer Visually Hidden for accessible names on icon-only controls.
- Do not use it to hide critical information sighted users also need.

## Import

```ts
import { VisuallyHidden } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/visually-hidden` — no app-level `tv()`.

## Examples

### Default

Expose text to assistive tech without showing it on screen.

:::example Default

