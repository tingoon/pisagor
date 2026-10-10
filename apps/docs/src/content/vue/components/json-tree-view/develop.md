## Import

```ts
import { JsonTreeView } from "@pisagor/vue";
```

## Examples

### Default

Inspect nested JSON as an expandable tree.

:::example Default

### Data Types

Highlight value types so structure is easier to scan.

:::example DataTypes

### Expand Depth

Open to a set depth so large payloads do not overwhelm the first view.

:::example ExpandDepth

### Map Set

Render Map and Set values when those structures appear in the data.

:::example MapSet

## Customization

### Custom recipe

Extend `jsonTreeViewRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
