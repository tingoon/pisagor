---
title: Editable
description: "Turns static text into inline editing so users can update a value where it already appears."
api: compound
taxonomy: standard
---

## When to use

- Edit a value inline where it already appears instead of opening a separate form.
- Prefer Editable for sparse, in-place updates; prefer a Field for multi-input forms.
- Choose activation (click, double-click, focus) to match how accidental edits should be prevented.

## Import

```ts
import { Editable } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/editable` — no app-level `tv()`.

## Examples

### Invalid

Surface validation when the edited value is not allowed.

:::example Invalid

### Disabled

Show that editing is unavailable. Prefer explaining why nearby.

:::example Disabled

### Sizes

Match control size to surrounding text density.

:::example Sizes

### Variants

Choose field emphasis for the inline editor.

:::example Variants

### Dblclick

Require double-click to edit when accidental single clicks are common.

:::example Dblclick

### Orientation Horizontal

Lay out the editable horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the editable vertically when items should read in a column.

:::example OrientationVertical

### With Textarea

Edit multi-line values inline.

:::example WithTextarea

### Without Controls

Hide explicit save/cancel when commit-on-blur is enough.

:::example WithoutControls

### Activation Click

Begin editing on single click.

:::example ActivationClick

### Activation Focus

Begin editing when the value receives focus.

:::example ActivationFocus

### Activation None

Start editing only from an explicit programmatic trigger.

:::example ActivationNone

### Controlled

Drive value and edit state from the parent.

:::example Controlled

### Default

Click to edit a value inline where it already appears.

:::example Default

