import CustomRecipe from "./custom-recipe.vue?raw";
import CustomStyle from "./custom-style.vue?raw";
import Default from "./default.vue?raw";
import Multiple from "./multiple.vue?raw";
import SearchQuery from "./search-query.vue?raw";
import Squiggle from "./squiggle.vue?raw";

export const imports = `import { Highlight } from "@pisagor/vue";`;

export const sources = {
  CustomRecipe,
  CustomStyle,
  Default,
  Multiple,
  SearchQuery,
  Squiggle,
} as const;
