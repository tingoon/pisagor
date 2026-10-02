---
title: Button Group
description: "Groups related actions so users can compare choices and pick one without hunting across the layout."
api: compound
taxonomy: primitive
---

## When to use

- Group related actions so users can compare choices in one visual cluster.
- Prefer Button Group when actions share a purpose; prefer Toolbar when heading and actions share a row.
- Keep one primary-looking action per group when possible.

## Import

```ts
import { ButtonGroup } from "@pisagor/vue";
```

Style with `@pisagor/recipes/button-group` — no app-level `tv()`.

## Examples

### Default

Related actions clustered as one visual group.

:::example Default

### Orientation Horizontal

Lay actions in a row for toolbars and footers.

:::example OrientationHorizontal

### Orientation Vertical

Stack actions when the group sits in a narrow column.

:::example OrientationVertical

### Nested

Nest groups when primary and secondary clusters share one control strip.

:::example Nested

### With Separator

Separate subgroups so distinct action sets stay scannable.

:::example WithSeparator
