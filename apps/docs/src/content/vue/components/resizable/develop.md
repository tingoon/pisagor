## Import

```ts
import { Resizable } from "@pisagor/vue";
```

## Anatomy

```vue
<Resizable>
  <Resizable.Panel />
  <Resizable.ResizeTrigger />
  <Resizable.Panel />
</Resizable>
```

## Examples

### Default

Drag handles to resize adjacent panels.

:::example Default

### Orientation Horizontal

Lay out the resizable layout horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the resizable layout vertically when items should read in a column.

:::example OrientationVertical

### Handle

Emphasize the resize handle when the divider should be easy to grab.

:::example Handle

### Edge Handle

Place handles on edges when that affordance matches the layout.

:::example EdgeHandle

### Multiple Panels

Split more than two panels when the workspace has several regions.

:::example MultiplePanels

### Min Max

Clamp values to a minimum and maximum so users cannot pick out-of-range input.

:::example MinMax

### Collapsible

Allow a panel to collapse when users need maximum space for another region.

:::example Collapsible

## Customization

### Custom recipe

Extend `resizableRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
