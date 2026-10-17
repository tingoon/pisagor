import BothDirections from "./both-directions.vue?raw";
import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Horizontal from "./horizontal.vue?raw";
import Nested from "./nested.vue?raw";
import ScrollFade from "./scroll-fade.vue?raw";

export const imports = `import { ScrollArea } from "@pisagor/vue";`;

export const sources = {
  BothDirections,
  Compound,
  CustomRecipe,
  Default,
  Horizontal,
  Nested,
  ScrollFade,
} as const;
