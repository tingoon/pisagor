import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import separated_panelsRaw from "./separated-panels.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import with_form_controlsRaw from "./with-form-controls.vue?raw";

export const imports = `import { Frame } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  SeparatedPanels: separated_panelsRaw,
  Sizes: sizesRaw,
  WithFormControls: with_form_controlsRaw,
} as const;
