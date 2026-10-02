---
title: Qr Code
description: "Displays a scannable QR code so users can open links or share data with a phone camera."
api: compound
taxonomy: standard
aliases:
  - qrcode
---

## When to use

- Show a scannable code for links or shareable data.
- Prefer higher error correction when the code may be partially covered or printed small.
- Offer download when users need to save or print the code.

## Import

```ts
import { QrCode } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/qr-code` — no app-level `tv()`.

## Examples

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the QR code needs emphasis.

:::example Sizes

### Error Correction

Raise error correction when the code may be partially covered or printed small.

:::example ErrorCorrection

### Overlay

Overlay a mark on the code when branding sits in the center.

:::example Overlay

### Download

Offer download when users need to save or print the code.

:::example Download

### Default

Display a scannable QR code for a link or payload.

:::example Default

