---
name: props
description: >-
  Pisagor shared prop types (`@pisagor/props`). Use when editing framework-agnostic
  component prop types and TSDoc. Not a UI component package — components live in
  `@pisagor/react`, `@pisagor/vue`, and the other framework packages.
metadata:
  package: "@pisagor/props"
---

# @pisagor/props

Framework-agnostic component prop types (TSDoc). Excludes native HTML attributes.

This package owns prop-type modules only (`src/<component>.ts`). It does not own React/Vue/Solid/Svelte implementations or form fields.

```ts
import type { ButtonProps } from "@pisagor/props";
```
