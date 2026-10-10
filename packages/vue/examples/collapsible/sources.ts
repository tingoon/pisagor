import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import nestedRaw from "./nested.vue?raw";
import partial_collapseRaw from "./partial-collapse.vue?raw";

export const imports = `import { Collapsible } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Nested: nestedRaw,
  PartialCollapse: partial_collapseRaw,
} as const;
