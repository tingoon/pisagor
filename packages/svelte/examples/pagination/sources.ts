import Controlled from "./controlled.svelte?raw";
import CustomComposition from "./custom-composition.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Links from "./links.svelte?raw";
import LinkUrls from "./link-urls.svelte?raw";
import PageRange from "./page-range.svelte?raw";

export const imports = `import { Pagination } from "@pisagor/svelte";`;

export const sources = {
  Controlled,
  CustomComposition,
  CustomRecipe,
  Default,
  Links,
  LinkUrls,
  PageRange,
} as const;
