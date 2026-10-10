# @pisagor/recipes

Stable recipe import for Pisagor UI packages. Re-exports the default skin from `@pisagor/presets/pisagor` and forwards `@pisagor/presets/styles` for Tailwind scanning.

```ts
import { buttonRecipe } from "@pisagor/recipes";
```

```css
/* Framework styles.css — scan active skin recipe classes */
@import "@pisagor/recipes/styles";
```

To use another preset, change this package’s JS and CSS re-exports together (see `@pisagor/presets` README — do not alias only the JS entry). Do not put block recipes here — they live in `apps/docs/src/recipes/blocks/`.
