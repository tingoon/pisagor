import autohighlightRaw from "./autohighlight.vue?raw";
import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import groupRaw from "./group.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_clear_buttonRaw from "./with-clear-button.vue?raw";
import with_scrollRaw from "./with-scroll.vue?raw";
import with_start_iconRaw from "./with-start-icon.vue?raw";

export const imports = `import { Combobox } from "@pisagor/vue";`;

export const sources = {
  Autohighlight: autohighlightRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Group: groupRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithClearButton: with_clear_buttonRaw,
  WithScroll: with_scrollRaw,
  WithStartIcon: with_start_iconRaw,
} as const;
