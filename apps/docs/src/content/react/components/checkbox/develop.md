## Import

```tsx
import { Checkbox } from "@pisagor/react";
```

## Examples

### Default

A single option users can turn on or off.

:::example Default

### Variants

Choose visual weight to match surrounding form controls.

:::example Variants

### Checkbox Group

Group related checkboxes so multi-select options stay together.

:::example CheckboxGroup

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
