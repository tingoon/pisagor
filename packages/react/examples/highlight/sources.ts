import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_styleRaw from "./custom-style.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import search_queryRaw from "./search-query.tsx?raw";
import squiggleRaw from "./squiggle.tsx?raw";

export const imports = `import { Highlight } from "@pisagor/react";`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  CustomStyle: custom_styleRaw,
  Default: defaultRaw,
  Multiple: multipleRaw,
  SearchQuery: search_queryRaw,
  Squiggle: squiggleRaw,
} as const;
