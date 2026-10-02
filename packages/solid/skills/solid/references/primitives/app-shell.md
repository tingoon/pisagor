---
title: App Shell
description: "Multi-region application layout with optional banner, navigation, rails, and draggable inspector panels."
api: compound
taxonomy: pattern
---

## When to use

- Build the durable frame of an application: header, navigation, main, and optional side regions.
- Use panels and inspectors when secondary tools should stay available beside the main workspace.
- Prefer simpler layout primitives when the product only needs a single column of content.

## Import

```tsx
import { AppShell } from "@pisagor/solid";
```

Style with `@pisagor/recipes/app-shell` — no app-level `tv()`.

## Examples

### Default

The full multi-region shell with the common layout slots wired together.

:::example Default

### Banner

Reserve a top banner region for system-wide notices.

:::example Banner

### Navigation

Place primary navigation in the shell's nav region.

:::example Navigation

### Inspectors

Add inspector panels for tools that sit beside the main workspace.

:::example Inspectors

### Panels

Use draggable panels when users rearrange secondary tools.

:::example Panels

### Rails

Provide side rails for persistent secondary chrome.

:::example Rails

### Header

Host brand and top-level actions in the header region.

:::example Header

### Main

Put the primary workspace content in the main region.

:::example Main

### Content

Fill the content slot with the page body inside the shell.

:::example Content
