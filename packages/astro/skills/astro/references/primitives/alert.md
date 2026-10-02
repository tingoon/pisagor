---
title: Alert
description: "Shows a brief in-page message for updates, warnings, or errors with an optional title, icon, and actions."
api: compound-shorthand
taxonomy: standard
---

## When to use

- Show an in-page message for success, warning, info, or error that should stay visible until dismissed or resolved.
- Prefer Alert over Toast when the message must remain in context next to related content.
- Prefer Alert Dialog when the user must confirm before continuing.

## Import

```ts
import { Alert } from "@pisagor/astro";
```

Style with `@pisagor/recipes/alert` — no app-level `tv()`.

## Examples

### Default

The standard in-page alert for status messages that stay in context.

:::example Default

### Variants

Choose info, success, warning, or error to match the severity of the message.

:::example Variants

### Compound

Compose title, description, and actions from parts for a custom alert layout.

:::example Compound

### With Icon

Reinforce meaning with an icon that matches the alert status.

:::example WithIcon

### Custom Color

Override accent when a brand or contextual color matters more than the status token. Keep contrast readable.

:::example CustomColor
