import autoresizeRaw from "./autoresize.vue?raw";
import clearableRaw from "./clearable.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Textarea } from "@pisagor/vue";`;

export const sources = {
  Autoresize: autoresizeRaw,
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Variants: variantsRaw,
} as const;
