---
title: Presence
description: "Animates elements in and out of the tree so enter and exit transitions stay smooth."
api: closed
taxonomy: primitive
---

## When to use

- Animate mount and unmount so enter and exit feel continuous.
- Prefer Presence when exit animation must finish before removal from the tree.
- Keep transitions short and interruptible so they do not block the next action.

## Import

```ts
import { Presence } from "@pisagor/vue";
```

## Examples

### Default

Animate mount and unmount so enter and exit transitions finish cleanly.

:::example Default
