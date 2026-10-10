import custom_recipeRaw from "./custom-recipe.vue?raw";
import nestedRaw from "./nested.vue?raw";
import paddingRaw from "./padding.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_form_controlsRaw from "./with-form-controls.vue?raw";

export const imports = `import { Surface } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Nested: nestedRaw,
  Padding: paddingRaw,
  Variants: variantsRaw,
  WithFormControls: with_form_controlsRaw,
} as const;
