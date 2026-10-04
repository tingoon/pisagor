# @pisagor/recipes

Shared `tailwind-variants` (`tv`) recipes for Pisagor components.

```text
src/         component recipes — import from `@pisagor/recipes`
src/blocks/  block recipes — `@pisagor/recipes/blocks/<name>` only
```

```ts
import { buttonRecipe } from "@pisagor/recipes";

cn(buttonRecipe({ variant: "outline", size: "sm" }).base(), className);
```

Use the root barrel for component recipes. Keep `blocks/` on subpaths.

**Consumers:** import theme CSS from a framework package (e.g. `@import "@pisagor/react/styles"`). Do not `@source` this package from apps — each UI package already scans recipes.

**Maintainers:** framework style entries must `@source` this package so utilities used in recipes are generated:

```css
@source "../../recipes/src/**/*.ts";
```

**Z-index:** use theme utilities (`z-popover`, `z-modal`, `z-toast`) — not hardcoded `z-50`.

**Naming:** export `{component}Recipe` (e.g. `checkboxRecipe`, `numberInputRecipe`), plus `{Name}VariantProps`, `{Name}Recipe`, and `{Name}RecipeSlot` as needed.
