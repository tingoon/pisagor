import controlledRaw from "./controlled.svelte?raw";
import custom_compositionRaw from "./custom-composition.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import linksRaw from "./links.svelte?raw";
import page_rangeRaw from "./page-range.svelte?raw";

export const imports = `import { Pagination } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  CustomComposition: custom_compositionRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Links: linksRaw,
  PageRange: page_rangeRaw,
} as const;
