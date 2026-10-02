---
title: Autocomplete
description: "Helps users pick one option from a long list by typing to filter suggestions as they go."
api: compound-shorthand
taxonomy: standard
aliases:
  - typeahead
---

## When to use

- Help users pick one option from a long list by typing to filter suggestions.
- Prefer Autocomplete over Select when scanning every option is harder than filtering by text.
- Prefer Combobox only when you need lower-level selection engine composition.

## Import

```ts
import { Autocomplete } from "@pisagor/vue";
```

## Examples

### Sizes

Match field size to surrounding form density.

:::example Sizes

### Variants

Choose field emphasis to match other inputs in the form.

:::example Variants

### Disabled

Show that suggestions cannot be opened. Prefer explaining why nearby.

:::example Disabled

### Invalid

Surface a validation error when the value is missing or not allowed.

:::example Invalid

### Group

Group suggestions so related options are easier to scan.

:::example Group

### With Clear Button

Let users clear the query and selection in one press.

:::example WithClearButton

### With Start Icon

Add a leading icon to signal search or category.

:::example WithStartIcon

### With Trigger

Open the list from an explicit trigger when typing alone is not the only entry point.

:::example WithTrigger

### Controlled

Drive value and open state from the parent when other UI depends on the selection.

:::example Controlled

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Default

Type to filter and pick one suggestion from a long list.

:::example Default

### On Surface

Tune appearance for controls that sit on a raised or tinted surface instead of the page background.

:::example OnSurface
