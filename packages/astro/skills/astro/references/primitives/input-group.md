---
title: Input Group
description: "Combines inputs with icons, buttons, or labels in one control so related actions stay attached."
api: compound
taxonomy: primitive
---

## When to use

- Attach icons, buttons, badges, or shortcuts to an input as one control.
- Prefer Input Group when addons belong to the field; prefer separate Button when the action is independent.
- Align addons to the start or end of the field to match reading direction and affordance.

## Import

```ts
import { InputGroup } from "@pisagor/astro";
```

Style with `@pisagor/recipes/input-group` — no app-level `tv()`.

## Examples

### Default

Combine an input with attached addons as one control.

:::example Default

### Sizes

Match size to form density.

:::example Sizes

### Variants

Choose emphasis to match surrounding inputs.

:::example Variants
