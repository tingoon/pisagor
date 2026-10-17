import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomStyle from "./custom-style.svelte?raw";
import Default from "./default.svelte?raw";
import Multiple from "./multiple.svelte?raw";
import SearchQuery from "./search-query.svelte?raw";
import Squiggle from "./squiggle.svelte?raw";

export const imports = `import { Highlight } from "@pisagor/svelte";`;

export const sources = {
  CustomRecipe,
  CustomStyle,
  Default,
  Multiple,
  SearchQuery,
  Squiggle,
} as const;
