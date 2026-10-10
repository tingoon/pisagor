## Import

```ts
import { ButtonGroup } from "@pisagor/astro";
```

## Examples

### Default

Related actions clustered as one visual group.

:::example Default

### Orientation Horizontal

Lay actions in a row for toolbars and footers.

:::example OrientationHorizontal

### Orientation Vertical

Stack actions when the group sits in a narrow column.

:::example OrientationVertical

### Nested

Nest groups when primary and secondary clusters share one control strip.

:::example Nested

### With Separator

Separate subgroups so distinct action sets stay scannable.

:::example WithSeparator

## Customization

### Custom recipe

Extend `buttonGroupRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
