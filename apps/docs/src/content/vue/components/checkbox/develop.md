## Import

```ts
import { Checkbox } from "@pisagor/vue";
```

## Examples

### Default

A single option users can turn on or off.

:::example Default

### Sizes

Use `size` to pick the sm, md or lg scale. `md` is the default.

:::example Sizes

### Variants

Choose visual weight to match surrounding form controls.

:::example Variants

### Checkbox Group

Group related checkboxes so multi-select options stay together.

:::example CheckboxGroup

### Compound

Compose `Checkbox.Root`, `Checkbox.Control`, `Checkbox.Label` and `Checkbox.HiddenInput` for full control over layout.

:::example Compound

### Controlled

Drive checked state from the parent when other UI depends on it.

:::example Controlled

### Disabled

Show that the option cannot change.

:::example Disabled

### Invalid

Surface a validation error when the choice is required or not allowed.

:::example Invalid

### Indeterminate

Mark a parent checkbox when only some child options are selected.

:::example Indeterminate

## Customization

### Custom recipe

Extend `checkboxRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
