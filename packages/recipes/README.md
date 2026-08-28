# @pisagor/recipes

Shared `tailwind-variants` (`tv`) recipes for Pisagor components.

```text
src/ui/   component recipes — `@pisagor/recipes` / `@pisagor/recipes/<name>`
```

```ts
import { buttonVariants } from "@pisagor/recipes";
// or a tight import:
import { buttonVariants } from "@pisagor/recipes/button";

cn(buttonVariants({ variant: "outline", size: "sm" }), className);
```

Prefer `@pisagor/recipes/<name>` when you need a tight import graph; use `@pisagor/recipes` when importing several recipes.

**Tailwind scan:** framework style entries must `@source` this package so utilities used in recipes are generated:

```css
@source "../../../node_modules/@pisagor/recipes/src/ui/**/*.ts";
```

**Z-index:** use theme utilities (`z-popover`, `z-modal`, `z-toast`) — not hardcoded `z-50`.

**Naming:** export `{component}Variants` (e.g. `checkboxVariants`, `numberInputVariants`).

Optional peer: `tailwind-merge` >=3 (Tailwind Variants v3 merge support).
