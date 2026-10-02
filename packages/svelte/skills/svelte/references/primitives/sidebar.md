---
title: Sidebar
description: "Provides a collapsible application sidebar with keyboard shortcut and mobile sheet behavior."
api: compound
taxonomy: pattern
aliases:
  - side-nav
---

## When to use

- Provide collapsible application navigation with desktop and mobile behaviors.
- Prefer Sidebar for durable app nav; prefer Navbar for lighter top chrome.
- Support keyboard shortcut and mobile sheet so navigation stays reachable.

## Import

```ts
import { Sidebar } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/sidebar` — no app-level `tv()`.

## Examples

### Default

Collapsible application navigation with desktop persistence and mobile sheet behavior.

:::example Default

