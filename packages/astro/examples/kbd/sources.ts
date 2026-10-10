import custom_recipeRaw from "./custom-recipe.astro?raw";
import kbd_groupRaw from "./kbd-group.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_buttonRaw from "./with-button.astro?raw";

export const imports = `---
import { Kbd } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  KbdGroup: kbd_groupRaw,
  Variants: variantsRaw,
  WithButton: with_buttonRaw,
} as const;
