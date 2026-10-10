import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_styleRaw from "./custom-style.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import search_queryRaw from "./search-query.svelte?raw";
import squiggleRaw from "./squiggle.svelte?raw";

export const imports = `import { Highlight } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomStyle: custom_styleRaw,
  Default: defaultRaw,
  Multiple: multipleRaw,
  SearchQuery: search_queryRaw,
  Squiggle: squiggleRaw,
} as const;
