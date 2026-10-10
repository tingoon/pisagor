import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_timeoutRaw from "./custom-timeout.svelte?raw";
import different_iconRaw from "./different-icon.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_labelRaw from "./with-label.svelte?raw";

export const imports = `import { Clipboard } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  CustomTimeout: custom_timeoutRaw,
  DifferentIcon: different_iconRaw,
  Variants: variantsRaw,
  WithLabel: with_labelRaw,
} as const;
