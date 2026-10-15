## Import

```tsx
import { Tabs } from "@pisagor/solid";
```

## Examples

### Default

Switch between related panels without leaving the page.

:::example Default

### Variants

Choose tab emphasis to match the surface.

:::example Variants

### Sizes

Use `size` to pick the sm, md or lg scale. `md` is the default.

:::example Sizes

### Orientation Horizontal

Lay tabs in a row for the common panel switcher.

:::example OrientationHorizontal

### Orientation Vertical

Stack tabs vertically when the layout favors a side rail.

:::example OrientationVertical

### Without Indicator

Hide the moving indicator when triggers style the active state on their own.

:::example WithoutIndicator

### With Icons

Lead tabs with icons when symbols speed recognition.

:::example WithIcons

### Compound

Compose tab list and panels from parts for a custom layout.

:::example Compound

### Controlled

Drive the active tab from the parent when other UI depends on it.

:::example Controlled

### Disabled

Show that the tabs is unavailable.

:::example Disabled

## Customization

### Custom recipe

Extend `tabsRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
