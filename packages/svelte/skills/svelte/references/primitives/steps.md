---
title: Steps
description: "Guides users through a multi-step flow and shows which stage they are on."
api: compound
taxonomy: pattern
aliases:
  - stepper
  - wizard
---

## When to use

- Guide users through a multi-step flow and show where they are.
- Prefer Steps for linear wizards; prefer Tabs when steps are peer panels without order.
- Keep step titles short and update status as each stage completes.

## Import

```ts
import { Steps } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/steps` — no app-level `tv()`.

## Examples

### Icon

Lead steps with icons when symbols speed recognition.

:::example Icon

### Vertical

Use a vertical layout when the steps should read top to bottom.

:::example Vertical

### Loading

Show a loading step while async work finishes before continuing.

:::example Loading

### Description

Add step descriptions when titles alone are not enough.

:::example Description

### Title

Emphasize step titles for scannable wizard chrome.

:::example Title

### Controlled

Manage state from the parent when other UI must stay in sync with this steps.

:::example Controlled

### Default

Show progress through a linear multi-step flow.

:::example Default

