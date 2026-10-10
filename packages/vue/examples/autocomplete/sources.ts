import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import groupRaw from "./group.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_clear_buttonRaw from "./with-clear-button.vue?raw";
import with_start_iconRaw from "./with-start-icon.vue?raw";
import with_triggerRaw from "./with-trigger.vue?raw";

export const imports = `import { Autocomplete } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Group: groupRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithClearButton: with_clear_buttonRaw,
  WithStartIcon: with_start_iconRaw,
  WithTrigger: with_triggerRaw,
} as const;
