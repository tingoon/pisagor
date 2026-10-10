## Import

```tsx
import { ToggleGroup } from "@pisagor/solid";
```

## Examples

### Variants

Choose visual weight or emphasis so the toggle group matches importance in the surrounding layout.

:::example Variants

### Sizes

Match size to the surrounding layout — smaller in compact chrome, larger where the toggle group needs emphasis.

:::example Sizes

### Horizontal

Use a horizontal layout when the toggle group should read left to right.

:::example Horizontal

### Vertical

Use a vertical layout when the toggle group should read top to bottom.

:::example Vertical

### Spacing

Adjust gaps between parts when density needs to match the surrounding UI.

:::example Spacing

### Font Weight

Use the group for font-weight choices in a formatting toolbar.

:::example FontWeight

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Manage state from the parent when other UI must stay in sync with this toggle group.

:::example Controlled

### Disabled

Show that the toggle group is unavailable.

:::example Disabled

### Disabled Item

Show that a specific toggle is unavailable.

:::example DisabledItem

### Single

Allow only one pressed toggle when options are mutually exclusive.

:::example Single

## Customization

### Custom recipe

Extend `toggleGroupRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
