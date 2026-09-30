---
title: Accordion
description: Expand and collapse sections of related content.
api: compound-shorthand
taxonomy: standard
aliases:
  - disclosure
examples:
  - id: default
    title: Default
    exportName: Default
  - id: multiple
    title: Multiple
    exportName: Multiple
  - id: non-collapsible
    title: Non-collapsible
    exportName: NonCollapsible
  - id: disabled
    title: Disabled
    exportName: Disabled
  - id: controlled
    title: Controlled
    exportName: Controlled
  - id: compound
    title: Compound
    exportName: Compound
  - id: with-card
    title: With Card
    exportName: WithCard
---

## When to use

- Lets users expand and collapse sections so they can scan headings and open only what they need.
- Prefer the shorthand `items` API for simple FAQ-style lists; use compound parts for custom triggers or nested layout.

## Import

```tsx
import { Accordion } from "@pisagor/react/accordion";
```

Prefer shorthand `items` for FAQ lists; use `Accordion.Root` for custom structure. Style with `@pisagor/recipes/accordion` — no app-level `tv()`.

Live examples below match `assets/examples/accordion/`.

