---
title: Swap
description: "Swaps between two pieces of content with a transition, such as play and pause icons."
api: closed
taxonomy: primitive
---

## When to use

- Crossfade or swap between two content states, such as play and pause.
- Prefer Swap when both states share the same space; prefer conditional render when no transition is needed.
- Keep the transition short so it supports recognition rather than decoration.

## Import

```ts
import { Swap } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/swap` — no app-level `tv()`.

## Examples

### Variants

Choose visual weight or emphasis so the swap matches importance in the surrounding layout.

:::example Variants

### Default

Crossfade between two content states that share the same space.

:::example Default

