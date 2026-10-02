---
title: Command
description: "Offers a searchable command palette for jumping to actions, pages, or settings from the keyboard."
api: compound
taxonomy: pattern
aliases:
  - command-palette
---

## When to use

- Offer a keyboard-first palette for jumping to actions, pages, or settings.
- Prefer Command when power users need speed; keep primary navigation visible for everyone else.
- Group items and show shortcuts so scanning stays fast.

## Import

```ts
import { Command } from "@pisagor/vue";
```

Style with `@pisagor/recipes/command` — no app-level `tv()`.

## Examples

### Scrollable

Allow the command list to scroll when items exceed the panel height.

:::example Scrollable

### Shortcuts

Show keyboard shortcuts beside commands for faster recall.

:::example Shortcuts

### With Dialog

Host the palette in a dialog when it should take focus as a modal layer.

:::example WithDialog

### Groups

Group commands under labels so long palettes stay scannable.

:::example Groups

### With Footer

Add a footer for hints or secondary actions under the command list.

:::example WithFooter

### Default

Open a searchable palette for actions, pages, or settings.

:::example Default
