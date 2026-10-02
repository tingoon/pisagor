---
title: Tour
description: "Walks new users through key parts of the interface step by step with guided highlights."
api: compound
taxonomy: pattern
---

## When to use

- Guide new users through key UI with step-by-step highlights.
- Prefer Tour for first-run education; avoid repeating it after users know the product.
- Support skip and wait-for interactions so the tour can follow real user pace.

## Import

```ts
import { Tour } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/tour` — no app-level `tv()`.

## Examples

### Custom Spacing

Override spacing when the default does not fit the surrounding layout.

:::example CustomSpacing

### Async

Load or advance steps asynchronously when targets appear later.

:::example Async

### Events

Hook step lifecycle events to analytics or custom logic.

:::example Events

### Keyboard Navigation

Move between steps with the keyboard.

:::example KeyboardNavigation

### Progress

Show how far through the tour the user has gone.

:::example Progress

### Skip

Let users exit the tour without finishing every step.

:::example Skip

### Step Types

Use different step presentations for varied teaching moments.

:::example StepTypes

### Wait For Click

Pause until the user clicks a target before continuing.

:::example WaitForClick

### Wait For Element

Wait until a target exists in the DOM before highlighting it.

:::example WaitForElement

### Wait For Input

Wait for input in a field before advancing.

:::example WaitForInput

### Default

Walk through key UI with guided highlight steps.

:::example Default

