---
title: Avatar
description: "Shows who a user is — usually a photo, or initials or an icon when no image is available."
api: closed
taxonomy: primitive
---

## When to use

- Identify a person with a photo, initials, or icon in lists, headers, and comments.
- Prefer Avatar Group when several people share a row and space is tight.
- Always provide an accessible name when the image alone is not enough.

## Import

```ts
import { Avatar } from "@pisagor/astro";
```

Style with `@pisagor/recipes/avatar` — no app-level `tv()`.

## Examples

### Default

The standard avatar for a single person.

:::example Default

### Sizes

Match avatar size to list density — smaller in dense rows, larger in profiles.

:::example Sizes

### With Image

A photo avatar with alt text for a named person.

:::example WithImage
