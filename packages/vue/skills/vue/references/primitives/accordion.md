---
title: Accordion
description: "Expand and collapse sections of related content so users can scan headings and open only what they need."
api: compound-shorthand
taxonomy: standard
aliases:
  - disclosure
---

## When to use

- Organize related sections behind headings when users need to scan titles and open only what matters.
- Prefer Accordion over always-expanded stacks when vertical space is limited.
- Prefer Tabs when sections are peers users switch between often rather than expand independently.

## Import

```ts
import { Accordion } from "@pisagor/vue";
```

Prefer shorthand `items` for FAQ lists; use `Accordion.Root` for custom structure. Style with `@pisagor/recipes/accordion` — no app-level `tv()`.

## Examples

### Default

A single expandable section for grouping related content under a heading.

:::example Default

### Multiple

Allow several sections open at once when users compare content across panels.

:::example Multiple

### Non-collapsible

Keep at least one section open when collapsing everything would hide required content.

:::example NonCollapsible

### Disabled

Show that a section cannot be opened. Prefer explaining why nearby.

:::example Disabled

### Controlled

Drive open state from the parent when other UI depends on which section is expanded.

:::example Controlled

### Compound

Compose trigger and content parts when you need a custom section layout.

:::example Compound

### With Card

Place accordion sections inside a card surface when the group should read as one unit.

:::example WithCard
