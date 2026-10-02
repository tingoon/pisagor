---
title: Announcement
description: "Draws attention to a short product or marketing message without blocking the rest of the page."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Call out a short product, promo, or changelog message without interrupting the main task.
- Prefer Announcement over Alert when the tone is marketing or news rather than system status.
- Keep copy brief and link out for details instead of packing a full story into the bar.

## Import

```tsx
import { Announcement } from "@pisagor/react";
```

Style with `@pisagor/recipes/announcement` — no app-level `tv()`.

## Examples

### Variants

Choose emphasis so the announcement matches how urgent or promotional the message is.

:::example Variants

### With Icon

Add an icon when a symbol helps users recognize the announcement type quickly.

:::example WithIcon

### With Link

Link through to details when the bar should stay short and the full story lives elsewhere.

:::example WithLink

### Without Badge

Drop the badge treatment when a plain text callout is enough.

:::example WithoutBadge

### Compound

Assemble parts when you need a custom announcement layout.

:::example Compound

### Default

A compact product or marketing callout that sits with the page content.

:::example Default
