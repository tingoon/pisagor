## Import

```tsx
import { Autocomplete } from "@pisagor/solid";
```

## Examples

### Default

Type to filter and pick one suggestion from a long list.

:::example Default

### Variants

Choose field emphasis to match other inputs in the form.

:::example Variants

### Sizes

Match field size to surrounding form density.

:::example Sizes

### With Start Icon

Add a leading icon to signal search or category.

:::example WithStartIcon

### With Clear Button

Let users clear the query and selection in one press.

:::example WithClearButton

### With Trigger

Open the list from an explicit trigger when typing alone is not the only entry point.

:::example WithTrigger

### Grouped

Group suggestions so related options are easier to scan.

:::example Group

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Drive value and open state from the parent when other UI depends on the selection.

:::example Controlled

### Disabled

Show that suggestions cannot be opened.

:::example Disabled

### Invalid

Surface a validation error when the value is missing or not allowed.

:::example Invalid

## Customization

### Custom recipe

Extend `comboboxRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
