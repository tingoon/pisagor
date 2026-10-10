## Import

```ts
import { Select } from "@pisagor/svelte";
```

## Examples

### Default

Choose one option from a dropdown list.

:::example Default

### Variants

Choose visual weight or emphasis so the select matches importance in the surrounding layout.

:::example Variants

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the select needs emphasis.

:::example Sizes

### Multiple

Allow more than one open or selected item when users need several at once.

:::example Multiple

### Grouped

Group options under labels for long lists.

:::example Grouping

### With Scroll

Add scrolling when the list of items can grow beyond the available height.

:::example WithScroll

### Empty

Show an empty list presentation when there are no options yet.

:::example Empty

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Manage state from the parent when other UI must stay in sync with this select.

:::example Controlled

### Disabled

Show that the select is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the select needs attention before continuing.

:::example Invalid

### Max Selection

Cap how many options can be selected in multi-select mode.

:::example MaxSelection

## Customization

### Custom recipe

Extend `selectRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
