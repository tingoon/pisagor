import clearableRaw from "./clearable.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import fileRaw from "./file.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Input } from "@pisagor/vue";`;

export const sources = {
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  File: fileRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;
