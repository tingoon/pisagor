---
title: Collapsible
description: "Hides and reveals a section behind a trigger so dense layouts stay scannable until detail is needed."
api: compound
taxonomy: standard
---

## When to use

- Hide detail behind a trigger when the resting layout should stay compact.
- Prefer Collapsible for a single section; prefer Accordion for several related sections.
- Use Partial Collapse when a preview of the content should remain visible.

## Import

```tsx
import { Collapsible } from "@pisagor/solid";
```

Style with `@pisagor/recipes/collapsible` — no app-level `tv()`.

## Examples

### Default

Reveal and hide a section behind a trigger.

:::example Default

### Partial Collapse

Leave a preview visible when users should sense content below the fold.

:::example PartialCollapse

### Disabled

Show that the section cannot expand. Prefer explaining why nearby.

:::example Disabled

### Nested

Nest collapsibles when content has deeper hierarchy.

:::example Nested

### Controlled

Drive open state from the parent when other UI depends on it.

:::example Controlled
