import controlledRaw from "./controlled.vue?raw";
import custom_compositionRaw from "./custom-composition.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import linksRaw from "./links.vue?raw";
import page_rangeRaw from "./page-range.vue?raw";

export const imports = `import { Pagination } from "@pisagor/vue";`;

export const sources = {
  Controlled: controlledRaw,
  CustomComposition: custom_compositionRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Links: linksRaw,
  PageRange: page_rangeRaw,
} as const;
