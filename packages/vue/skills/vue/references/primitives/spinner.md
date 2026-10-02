---
title: Spinner
description: "Shows that something is loading when the wait is short and a progress value is not available."
api: closed
taxonomy: primitive
---

## When to use

- Show a short indeterminate wait when progress cannot be measured.
- Prefer Spinner for brief loads; prefer Progress when completion can be tracked.
- Keep spinners small and near the action that started the wait.

## Import

```ts
import { Spinner } from "@pisagor/vue";
```

Style with `@pisagor/recipes/spinner` — no app-level `tv()`.

## Examples

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the spinner needs emphasis.

:::example Sizes

### Default

A compact indeterminate spinner for short waits without a progress value.

:::example Default
