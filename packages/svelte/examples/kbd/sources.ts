import custom_recipeRaw from "./custom-recipe.svelte?raw";
import kbd_groupRaw from "./kbd-group.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_buttonRaw from "./with-button.svelte?raw";
import with_tooltipRaw from "./with-tooltip.svelte?raw";

export const imports = `import { Kbd } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  KbdGroup: kbd_groupRaw,
  Variants: variantsRaw,
  WithButton: with_buttonRaw,
  WithTooltip: with_tooltipRaw,
} as const;
