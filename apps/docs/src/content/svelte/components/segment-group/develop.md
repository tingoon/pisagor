## Import

```ts
import { SegmentGroup } from "@pisagor/svelte";
```

## Examples

### Default

Switch between a few related modes in one compact control.

:::example Default

### Variants

Choose visual weight or emphasis so the segment group matches importance in the surrounding layout.

:::example Variants

### Orientation Horizontal

Lay out the segment group horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the segment group vertically when items should read in a column.

:::example OrientationVertical

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Manage state from the parent when other UI must stay in sync with this segment group.

:::example Controlled

### Disabled

Show that the segment group is unavailable.

:::example Disabled

### Disabled Item

Show that a specific segment is unavailable.

:::example DisabledItem

### Indicator On Hover

Preview the indicator on hover when discovering segments should feel responsive.

:::example IndicatorOnHover

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Customize the active indicator when brand motion or shape differs from the default.

:::example CustomIndicator

### Custom recipe

Extend `segmentGroupRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
