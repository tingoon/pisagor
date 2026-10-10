import custom_colorRaw from "./custom-color.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import disabledRaw from "./disabled.astro?raw";
import iconRaw from "./icon.astro?raw";
import loadingRaw from "./loading.astro?raw";
import no_click_effectRaw from "./no-click-effect.astro?raw";
import pillRaw from "./pill.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_iconRaw from "./with-icon.astro?raw";

export const imports = `---
import { Button } from "@pisagor/astro";
---`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  Icon: iconRaw,
  Loading: loadingRaw,
  NoClickEffect: no_click_effectRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;
