---
title: Skeleton
description: "Placeholder shapes that pulse while content loads so layouts feel stable instead of jumping."
api: compound
taxonomy: primitive
---

## When to use

- Reserve space with pulsing placeholders while content loads.
- Prefer Skeleton over a blank layout when structure should stay stable.
- Prefer Spinner only for tiny regions where a shape placeholder would not help.

## Import

```ts
import { Skeleton } from "@pisagor/vue";
```

Style with `@pisagor/recipes/skeleton` — no app-level `tv()`.

## Examples

### Default

Pulse placeholders while content loads.

:::example Default

### In Card

Place skeletons inside a card when that surface is loading.

:::example InCard

### Skeleton Text Story

Pulse text-shaped placeholders while copy is loading.

:::example SkeletonTextStory
