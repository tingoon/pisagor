# @pisagor/presets

Named `tailwind-variants` (`tv`) recipe presets (skins) for Pisagor components.

```text
src/contracts/   recipe modules (shared surface)
src/pisagor.ts   default Pisagor skin entry — re-exports contracts
```

```ts
import { buttonRecipe } from "@pisagor/presets/pisagor";
// or via the stable injection point:
import { buttonRecipe } from "@pisagor/recipes";
```

**`@pisagor/recipes`** re-exports `pisagor` so framework packages keep a stable import. Swap skins with a bundler alias:

```ts
// vite.config.ts
resolve: {
  alias: {
    "@pisagor/recipes": "@pisagor/presets/pisagor", // or a future skin
  },
},
```

**Consumers:** import theme CSS from a framework package (e.g. `@import "@pisagor/react/styles"`). Do not `@source` this package from apps — each UI package already scans presets.

**Maintainers:** framework style entries must `@source` this package:

```css
@source "../../presets/src/**/*.ts";
```

Block demos own their recipes under `apps/docs/src/recipes/blocks/` — not this package.
