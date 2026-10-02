---
title: Pagination
description: "Moves through long lists or result sets page by page with previous, next, and page controls."
api: compound
taxonomy: standard
aliases:
  - pager
---

## When to use

- Move through long result sets one page at a time.
- Prefer Pagination when total count is known; prefer infinite scroll only when pages are unbounded.
- Expose page range and links when users need to jump more than one step.

## Import

```ts
import { Pagination } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/pagination` — no app-level `tv()`.

## Examples

### Links

Render items as links when navigation is the primary action.

:::example Links

### Page Range

Show a window of page numbers when jumping more than one step matters.

:::example PageRange

### Custom Composition

Compose pagination parts when the shorthand layout is not enough.

:::example CustomComposition

### Controlled

Manage state from the parent when other UI must stay in sync with this pagination.

:::example Controlled

### Default

Move through pages with previous, next, and page controls.

:::example Default

