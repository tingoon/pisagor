---
title: Password Input
description: "Collects passwords with a show-hide control so users can enter credentials confidently."
api: closed
taxonomy: standard
---

## When to use

- Collect credentials with a show-hide control.
- Prefer Password Input over a plain Input type password when visibility toggle and theming matter.
- Use autocomplete attributes so browsers can fill safely.

## Import

```ts
import { PasswordInput } from "@pisagor/vue";
```

Style with `@pisagor/recipes/password-input` — no app-level `tv()`.

## Examples

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the password input needs emphasis.

:::example Sizes

### Disabled

Show that the password input is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation or error state so users know the password input needs attention before continuing.

:::example Invalid

### Autocomplete

Set autocomplete attributes so browsers can fill credentials safely.

:::example Autocomplete

### Auto Hide

Hide the password again after a delay when brief visibility is enough.

:::example AutoHide

### Clearable

Offer a clear control when the value is optional and users may want to start over.

:::example Clearable

### Controlled Visibility

Drive show-hide state from the parent when visibility is coordinated elsewhere.

:::example ControlledVisibility

### Controlled

Manage state from the parent when other UI must stay in sync with this password input.

:::example Controlled

### Default

Collect a password with a show-hide control.

:::example Default

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface
