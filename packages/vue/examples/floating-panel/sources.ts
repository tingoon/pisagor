import controlled_positionRaw from "./controlled-position.vue?raw";
import controlled_sizeRaw from "./controlled-size.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_spacingRaw from "./custom-spacing.vue?raw";
import defaultRaw from "./default.vue?raw";

export const imports = `import { FloatingPanel } from "@pisagor/vue";`;

export const sources = {
  ControlledPosition: controlled_positionRaw,
  ControlledSize: controlled_sizeRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSpacing: custom_spacingRaw,
  Default: defaultRaw,
} as const;
