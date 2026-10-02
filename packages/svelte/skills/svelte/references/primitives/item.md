---
title: Item
description: "Lays out a row of media, title, description, and actions for lists, menus, and pickers."
api: compound
taxonomy: standard
---

## When to use

- Lay out media, title, description, and actions as one list or menu row.
- Prefer Item for consistent rows across lists, pickers, and menus.
- Use Link when the whole row navigates; keep nested buttons for secondary actions.

## Import

```ts
import { Item } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/item` — no app-level `tv()`.

## Examples

### Default

Lay out media, title, description, and actions as one row.

:::example Default

### Variants

Choose emphasis to match list density.

:::example Variants

### Icon

Lead with an icon when a symbol is enough.

:::example Icon

### Custom Spacing

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### With Media

Lead with media when imagery helps recognition.

:::example WithMedia

### With Avatar

Lead with an avatar when the row represents a person.

:::example WithAvatar

### Image

Use a larger image treatment for media-forward rows.

:::example Image

### Link

Navigate when the whole row is a destination.

:::example Link

### Group

Group related items so related choices stay visually and semantically together.

:::example Group

### Header

Use item header layout for section introductions in a list.

:::example Header

