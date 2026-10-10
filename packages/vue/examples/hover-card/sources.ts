import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.ts?raw";
import disabledRaw from "./disabled.vue?raw";
import placementsRaw from "./placements.vue?raw";
import triggers_delaysRaw from "./triggers-delays.vue?raw";

export const imports = `import { HoverCard } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  TriggersDelays: triggers_delaysRaw,
} as const;
