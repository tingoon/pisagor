---
title: Accordion
description: Expand and collapse sections of related content.
api: compound-shorthand
taxonomy: standard
aliases:
  - disclosure
---

## When to use

- Lets users expand and collapse sections so they can scan headings and open only what they need.
- Prefer the shorthand `items` API for simple FAQ-style lists; use compound parts for custom triggers or nested layout.

## Import

```ts
import { Accordion } from "@pisagor/svelte";
```

Prefer shorthand `items` for FAQ lists; use `Accordion.Root` for custom structure. Style with `@pisagor/recipes/accordion` — no app-level `tv()`.

Live examples below match `assets/examples/accordion/`.

## Examples

### Default

:::example Default
