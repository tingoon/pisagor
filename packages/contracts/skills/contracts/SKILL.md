---
name: contracts
description: >-
  Pisagor shared prop contracts (`@pisagor/contracts`). Use when editing framework-agnostic
  component contract types and TSDoc. Not a UI component package — components live in
  `@pisagor/react`, `@pisagor/vue`, and the other framework packages.
metadata:
  package: "@pisagor/contracts"
---

# @pisagor/contracts

Framework-agnostic component prop contracts (TSDoc). Excludes native HTML attributes.

This package owns contract-type modules only (`src/<component>.ts`). It does not own React/Vue/Solid/Svelte implementations or form fields.

```ts
import type { ButtonProps } from "@pisagor/contracts";
```
