## Import

```ts
import { Toolbar } from "@pisagor/svelte";
```

## Examples

### Default

Place a local heading with related actions in one row.

:::example Default

### Wrapped Actions

Wrap actions when horizontal space is tight.

:::example WrappedActions

### Compound

Compose toolbar parts for a custom chrome layout.

:::example Compound

## Customization

### Custom recipe

Extend `toolbarRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
