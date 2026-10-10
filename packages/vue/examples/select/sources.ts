import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import emptyRaw from "./empty.vue?raw";
import groupingRaw from "./grouping.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import max_selectionRaw from "./max-selection.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_scrollRaw from "./with-scroll.vue?raw";

export const imports = `import { Select } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Empty: emptyRaw,
  Grouping: groupingRaw,
  Invalid: invalidRaw,
  MaxSelection: max_selectionRaw,
  Multiple: multipleRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithScroll: with_scrollRaw,
} as const;
