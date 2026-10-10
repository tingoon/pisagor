## Import

```tsx
import { Combobox } from "@pisagor/solid";
```

## Examples

### Default

Search and pick from a filterable list with low-level composition control.

:::example Default

### Variants

Choose visual weight or emphasis so the combobox matches importance in the surrounding layout.

:::example Variants

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the combobox needs emphasis.

:::example Sizes

### With Start Icon

Add a leading icon to signal search or category.

:::example WithStartIcon

### With Clear Button

Let users clear the query and selection in one press.

:::example WithClearButton

### Multiple

Allow more than one open or selected item when users need several at once.

:::example Multiple

### Grouped

Group related items so related choices stay visually and semantically together.

:::example Group

### With Scroll

Add scrolling when the list of items can grow beyond the available height.

:::example WithScroll

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Manage state from the parent when other UI must stay in sync with this combobox.

:::example Controlled

### Disabled

Show that the combobox is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the combobox needs attention before continuing.

:::example Invalid

### Autohighlight

Highlight the first match automatically as the user types.

:::example Autohighlight

## Customization

### Custom recipe

Extend `comboboxRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
