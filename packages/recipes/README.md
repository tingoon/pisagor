# @pisagor/recipes

Shared `tailwind-variants` (`tv`) recipes for Pisagor components.

```text
src/ui/   component recipes — `@pisagor/recipes` / `@pisagor/recipes/<name>`
```

```ts
import { buttonRecipe } from "@pisagor/recipes";
// or a tight import:
import { buttonRecipe } from "@pisagor/recipes/button";

cn(buttonRecipe({ variant: "outline", size: "sm" }).base(), className);
```

Prefer `@pisagor/recipes/<name>` when you need a tight import graph; use `@pisagor/recipes` when importing several recipes.

**Tailwind scan:** framework style entries must `@source` this package so utilities used in recipes are generated:

```css
@source "../../recipes/src/ui/**/*.ts";
```

**Z-index:** use theme utilities (`z-popover`, `z-modal`, `z-toast`) — not hardcoded `z-50`.

**Naming:** export `{component}Recipe` (e.g. `checkboxRecipe`, `numberInputRecipe`), plus `{Name}VariantProps`, `{Name}Recipe`, and `{Name}RecipeSlot` as needed.
