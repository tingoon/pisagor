import as_childRaw from "./as-child.svelte?raw";
import custom_colorRaw from "./custom-color.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import iconRaw from "./icon.svelte?raw";
import loadingRaw from "./loading.svelte?raw";
import no_click_effectRaw from "./no-click-effect.svelte?raw";
import pillRaw from "./pill.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_iconRaw from "./with-icon.svelte?raw";

export const imports = `import { Button } from "@pisagor/svelte";`;

export const sources = {
  AsChild: as_childRaw,
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
