---
title: Provider
description: "Wraps the app with locale, icons, and toast context shared by Pisagor components."
api: closed
taxonomy: primitive
---

## When to use

- Wrap the application once with locale, icon, and toast context.
- Place Provider near the root so descendant Pisagor components share configuration.
- Avoid nesting multiple providers unless isolated trees need different defaults.

## Import

```tsx
import { Provider } from "@pisagor/react";
```

## Examples

### Default

Wrap the app once so locale, icons, and toasts are shared by child components.

:::example Default
