import checkbox_groupRaw from "./checkbox-group.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import indeterminateRaw from "./indeterminate.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import variantsRaw from "./variants.vue?raw";

export const imports = `import { Checkbox } from "@pisagor/vue";`;

export const sources = {
  CheckboxGroup: checkbox_groupRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Indeterminate: indeterminateRaw,
  Invalid: invalidRaw,
  Variants: variantsRaw,
} as const;
