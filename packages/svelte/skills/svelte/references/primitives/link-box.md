---
title: Link Box
description: "Makes an entire card or tile clickable while keeping nested buttons usable underneath."
api: compound
taxonomy: primitive
---

## When to use

- Make an entire surface clickable while nested controls remain usable.
- Prefer Link Box for cards and tiles that primarily navigate.
- Keep nested buttons for actions that must not trigger the parent link.

## Import

```ts
import { LinkBox } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/link-box` — no app-level `tv()`.

## Examples

### Default

Make the whole surface clickable while nested controls stay usable.

:::example Default

### Article

Wrap article-style content so the card navigates as one destination.

:::example Article

### With Link

Render the link box as or with a link when the control should navigate.

:::example WithLink

