---
title: Date Picker
description: "Lets users pick a date or range from a calendar inside a field or popover."
api: compound
taxonomy: pattern
---

## When to use

- Pick a date or range from a calendar attached to a field or popover.
- Prefer Date Picker over free-typed strings when valid calendar dates matter.
- Add time, presets, or clear when those affordances match the task.

## Import

```ts
import { DatePicker } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/date-picker` — no app-level `tv()`.

## Examples

### Default

Pick a date from a calendar attached to a field or popover.

:::example Default

### Variants

Choose field emphasis to match surrounding inputs.

:::example Variants

### Range

Pick a start and end date for spans.

:::example Range

### Custom Format

Override display format when locale or product needs a specific pattern.

:::example CustomFormat

### Input

Type the date in an input when keyboard entry is faster than picking.

:::example Input

### Invalid

Surface a validation or error state so users know the date picker needs attention before continuing.

:::example Invalid

### Disabled

Show that the date cannot change. Prefer explaining why nearby.

:::example Disabled

### Clearable

Offer a clear control when the date is optional.

:::example Clearable

### Time

Include time when the value is a datetime rather than a day alone.

:::example Time

### With Presets

Offer common ranges so users can pick without hunting on the calendar.

:::example WithPresets

