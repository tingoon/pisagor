---
name: utils
description: >-
  Pisagor `@pisagor/utils` — `cn()` (clsx + tailwind-merge) and `ClassValue`. Use when merging
  Tailwind class names in Pisagor apps or packages. Ships inside the npm package for Intent.
  Prefer MCP when working on UI components; use this skill for class-helper questions.
compatibility: >-
  Framework-agnostic. Consumers of @pisagor/utils or this monorepo.
---

# @pisagor/utils

Tree-shakeable class helpers (`"sideEffects": false`).

## Install

```bash
bun add @pisagor/utils
```

## API

```ts
import { cn, type ClassValue } from "@pisagor/utils";

cn("px-2", condition && "bg-muted", props.className);
```

- Prefer `cn()` over string concat for conditional / merged Tailwind classes.
- Do not reimplement clsx + tailwind-merge in apps.

## Source

`@pisagor/utils` → `src/` (`cn.ts`, `index.ts`)
