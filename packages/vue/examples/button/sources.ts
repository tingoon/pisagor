import as_childRaw from "./as-child.vue?raw";
import custom_colorRaw from "./custom-color.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import iconRaw from "./icon.vue?raw";
import loadingRaw from "./loading.vue?raw";
import no_click_effectRaw from "./no-click-effect.vue?raw";
import pillRaw from "./pill.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_iconRaw from "./with-icon.vue?raw";

export const imports = `import { Button } from "@pisagor/vue";`;

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
