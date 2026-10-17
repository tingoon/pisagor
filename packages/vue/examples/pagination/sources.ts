import Controlled from "./controlled.vue?raw";
import CustomComposition from "./custom-composition.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Links from "./links.vue?raw";
import LinkUrls from "./link-urls.vue?raw";
import PageRange from "./page-range.vue?raw";

export const imports = `import { Pagination } from "@pisagor/vue";`;

export const sources = {
  Controlled,
  CustomComposition,
  CustomRecipe,
  Default,
  Links,
  LinkUrls,
  PageRange,
} as const;
