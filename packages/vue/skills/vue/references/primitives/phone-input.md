---
title: Phone Input
description: "Enters and formats international phone numbers with country selection."
api: closed
taxonomy: pattern
---

## When to use

- Enter international phone numbers with country selection and formatting.
- Prefer Phone Input when country codes matter; prefer a plain Input for local-only numbers.
- Keep the country popup reachable by keyboard and clear about the selected region.

## Import

```ts
import { PhoneInput } from "@pisagor/vue/phone-input";
```

Style with `@pisagor/recipes/phone-input` — no app-level `tv()`.

## Examples

### Default

Basic phone input with a default country and national formatting as the user types.

:::example Default

### Controlled

Manage state from the parent when other UI must stay in sync with this phone input. The value is E.164; the field shows a national format for the selected country.

:::example Controlled

### Custom Popup

Pass `popupProps` through to the country Combobox content (positioning and other content attrs).

:::example CustomPopup

### Disabled

Show that the phone input is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Invalid

Surface a validation or error state so users know the phone input needs attention before continuing.

:::example Invalid

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the phone input needs emphasis.

:::example Sizes

### Variants

Choose visual weight or emphasis so the phone input matches importance in the surrounding layout.

:::example Variants

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface
