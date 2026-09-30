---
title: Password Input
description: Collects passwords with a show-hide control so users can enter credentials securely and verify them.
api: closed
taxonomy: standard
---

## When to use

- Collects passwords with a show-hide control so users can enter credentials securely and verify them.

## Import

```tsx
import { PasswordInput } from "@pisagor/react";
```

Style with `@pisagor/recipes/password-input` — no app-level `tv()`.

Live examples below match `assets/examples/password-input/`.

## Examples

### Sizes

:::example Sizes

### Disabled

:::example Disabled

### Invalid

:::example Invalid

### Autocomplete

Uses `current-password` and `new-password` autocomplete values so password managers fill the correct field.

:::example Autocomplete

### Auto Hide

Shows the password briefly when revealed, then hides it again after a short delay.

:::example AutoHide

### Controlled Visibility

Controls show/hide from outside the input with `visible` and visibility change callbacks.

:::example ControlledVisibility

### Controlled

Keeps the password string in component state with a controlled value and change handler.

:::example Controlled

### Default

:::example Default
