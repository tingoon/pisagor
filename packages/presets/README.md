# @pisagor/presets

Named `tailwind-variants` (`tv`) recipe presets (skins) for Pisagor components.

```text
src/contracts/   recipe modules (shared surface)
src/pisagor.ts   default Pisagor skin entry — re-exports contracts
src/styles.css   Tailwind `@source` entry for recipe class scanning
```

```ts
import { buttonRecipe } from "@pisagor/presets/pisagor";
// or via the stable injection point:
import { buttonRecipe } from "@pisagor/recipes";
```

**`@pisagor/recipes`** re-exports `pisagor` (JS) and `styles` (CSS → `@pisagor/presets/styles`) so framework packages keep a stable import.

### Swap skins

Do **not** alias `@pisagor/recipes` to a JS-only path such as `@pisagor/presets/pisagor` — that breaks `@pisagor/recipes/styles`.

Preferred (monorepo / maintainers): point the recipes package at the active skin in both files:

```ts
// packages/recipes/src/index.ts
export * from "@pisagor/presets/pisagor"; // or another skin entry
```

```css
/* packages/recipes/src/styles.css */
@import "@pisagor/presets/styles"; /* matching skin styles */
```

App-level Vite aliases must cover **both** entries when used:

```ts
// vite.config.ts
import path from "node:path";

resolve: {
  alias: {
    "@pisagor/recipes/styles": path.resolve(
      "node_modules/@pisagor/presets/src/styles.css",
    ),
    "@pisagor/recipes": path.resolve(
      "node_modules/@pisagor/presets/src/pisagor.ts",
    ),
  },
},
```

**Consumers:** import theme CSS from a framework package (e.g. `@import "@pisagor/react/styles"`). Do not `@source` presets from apps — UI packages import `@pisagor/recipes/styles`. Form packages (`@pisagor/*-form`) are logic wrappers with no styles entry.

**Maintainers:** framework style entries import the recipes styles entry:

```css
@import "@pisagor/recipes/styles";
```

Block demos own their recipes under `apps/docs/src/recipes/blocks/` — not this package.
