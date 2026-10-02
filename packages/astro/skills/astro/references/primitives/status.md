---
title: Status
description: "Signals state with a small colored dot so users can see availability or severity at a glance."
api: closed
taxonomy: primitive
---

## When to use

- Signal availability or severity with a small colored indicator.
- Prefer Status for compact state; prefer Badge when a text label is also required.
- Do not rely on color alone — pair with text for accessibility.

## Import

```ts
import { Status } from "@pisagor/astro";
```

Style with `@pisagor/recipes/status` — no app-level `tv()`.

## Examples

### Default

A compact status dot for presence or general state.

:::example Default

### Variants

Choose color tone for availability or severity. Pair with text for accessibility.

:::example Variants

### Sizes

Match size to the surrounding chrome.

:::example Sizes
