---
title: Signature Pad
description: "Captures a handwritten signature on a canvas for approvals and forms."
api: closed
taxonomy: standard
---

## When to use

- Capture a handwritten signature for approvals and agreements.
- Prefer Signature Pad when a drawn mark is required; prefer typed name when a legal signature image is not needed.
- Offer clear and preview so users can redo before submitting.

## Import

```tsx
import { SignaturePad } from "@pisagor/react";
```

Style with `@pisagor/recipes/signature-pad` — no app-level `tv()`.

## Examples

### Invalid

Surface a validation or error state so users know the signature pad needs attention before continuing.

:::example Invalid

### Disabled

Show that signing is unavailable. Prefer explaining why nearby.

:::example Disabled

### Controlled

Drive stroke data from the parent when signature state lives above.

:::example Controlled

### Image Preview

Preview the signature image before submit.

:::example ImagePreview
