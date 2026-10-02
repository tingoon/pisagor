---
title: Toast
description: "Shows brief feedback messages that appear and dismiss automatically after an action."
api: compound
taxonomy: standard
aliases:
  - snackbar
---

## When to use

- Confirm an action with a brief message that dismisses on its own.
- Prefer Toast for non-blocking feedback; prefer Alert when the message must stay in page context.
- Use action and promise variants when the toast continues a follow-up or async result.

## Import

```ts
import { Toast } from "@pisagor/vue";
```

Style with `@pisagor/recipes/toast` — no app-level `tv()`.

## Examples

### Default

Brief feedback that appears and dismisses after an action.

:::example Default

### Variants

Choose visual weight or emphasis so the toast matches importance in the surrounding layout.

:::example Variants

### Duration

Control how long the toast stays visible.

:::example Duration

### Closable

Let users dismiss the toast before it expires.

:::example Closable

### Dedupe

Prevent duplicate toasts when the same message would otherwise stack.

:::example Dedupe

### Action

Offer a follow-up action when the message leads somewhere.

:::example Action

### With Promise

Tie the toast to a promise so pending, success, and error states stay in sync.

:::example WithPromise

### Placements

Choose placement so the toast stays near its trigger without covering critical content.

:::example Placements
