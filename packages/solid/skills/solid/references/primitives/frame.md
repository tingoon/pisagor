---
title: Frame
description: "Embeds external content in a framed viewport with consistent chrome around it."
api: compound
taxonomy: standard
---

## When to use

- Embed external or isolated content inside consistent chrome.
- Use Separated Panels when multiple framed regions share a workspace.
- Prefer Frame when the embed needs a clear boundary from surrounding UI.

## Import

```tsx
import { Frame } from "@pisagor/solid";
```

Style with `@pisagor/recipes/frame` — no app-level `tv()`.

## Examples

### Default

Embed content inside consistent framed chrome.

:::example Default

### Separated Panels

Show multiple framed regions when the workspace splits embeds.

:::example SeparatedPanels

### With Form Controls

Host form controls inside the frame when the embed includes settings.

:::example WithFormControls
