---
title: Highlight
description: "Emphasizes matching words inside text so search results and queries are easier to spot."
api: closed
taxonomy: primitive
---

## When to use

- Emphasize matching substrings in search results and filtered lists.
- Prefer Highlight over bolding whole strings so matches stay precise.
- Use Squiggle or custom style when the match needs a distinct visual treatment.

## Import

```ts
import { Highlight } from "@pisagor/vue";
```

Style with `@pisagor/recipes/highlight` — no app-level `tv()`.

## Examples

### Multiple

Allow more than one open or selected item when users need several at once.

:::example Multiple

### Custom Style

Override highlight style when brand treatment differs from the default.

:::example CustomStyle

### Search Query

Highlight query matches in search results.

:::example SearchQuery

### Squiggle

Use a squiggle emphasis when the match needs a distinct treatment.

:::example Squiggle

### Default

Emphasize matching substrings in text.

:::example Default

### Multiple Queries

Use this highlight pattern when the scenario matches multiple queries.

:::example MultipleQueries
