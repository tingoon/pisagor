---
name: tokens
description: >-
  Pisagor `@pisagor/tokens` — design tokens and Tailwind v4 theme CSS. Use when wiring theme,
  semantic colors, motion, elevation, or dark mode for Pisagor apps. Ships inside the npm package
  for Intent. Prefer MCP for component work; use this skill for token / theme setup.
compatibility: >-
  Requires Tailwind CSS v4. Consumers of @pisagor/tokens or this monorepo.
---

# @pisagor/tokens

Shared CSS theme (`@theme inline`) for Pisagor packages.

## Install

```bash
bun add @pisagor/tokens
```

## Usage

Import once in the app stylesheet (order matters — before component styles):

```css
@import "@pisagor/tokens/styles";
```

## Rules

- Prefer **semantic** colors (`bg-background`, `text-foreground`, `bg-primary`, …) over raw palette utilities.
- Do not hardcode overlay z-index — use token layers (`z-index-dropdown`, `z-index-modal`, …).
- Motion durations / easings come from tokens (`duration-fast`, `ease-emphasized`, …).

## Source

`@pisagor/tokens/styles`
