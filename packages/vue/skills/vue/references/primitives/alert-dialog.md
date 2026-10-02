---
title: Alert Dialog
description: "Interrupts the user with a focused confirmation before a destructive or irreversible action."
api: compound-shorthand
taxonomy: pattern
---

## When to use

- Confirm a destructive or irreversible action before it runs.
- Prefer Alert Dialog over a quiet inline warning when the cost of a mistake is high.
- Prefer a non-blocking Alert or Toast when the message is informational and does not need a decision.

## Import

```ts
import { AlertDialog } from "@pisagor/vue";
```

Style with `@pisagor/recipes/alert-dialog` — no app-level `tv()`.

## Examples

### Default

Confirm a destructive or irreversible action before it runs.

:::example Default

### Variants

Match tone to severity — informative for caution, destructive for irreversible work.

:::example Variants
