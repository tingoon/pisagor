---
title: Client Only
description: "Renders content only in the browser so server output stays stable when a feature needs client APIs."
api: closed
taxonomy: primitive
---

## When to use

- Defer browser-only UI so server-rendered markup stays consistent.
- Prefer Client Only when a feature depends on window, media, or other client APIs.
- Provide a Fallback when empty space during hydration would feel broken.

## Import

```tsx
import { ClientOnly } from "@pisagor/solid";
```

## Examples

### Default

Render children only after the component mounts in the browser.

:::example Default

### Fallback

Show fallback content during server render and hydration so the layout does not collapse.

:::example Fallback
