import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_styleRaw from "./custom-style.vue?raw";
import defaultRaw from "./default.vue?raw";
import multipleRaw from "./multiple.vue?raw";
import search_queryRaw from "./search-query.vue?raw";
import squiggleRaw from "./squiggle.vue?raw";

export const imports = `import { Highlight } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomStyle: custom_styleRaw,
  Default: defaultRaw,
  Multiple: multipleRaw,
  SearchQuery: search_queryRaw,
  Squiggle: squiggleRaw,
} as const;
