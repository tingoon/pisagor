import both_directionsRaw from "./both-directions.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";
import nestedRaw from "./nested.vue?raw";
import scroll_fadeRaw from "./scroll-fade.vue?raw";

export const imports = `import { ScrollArea } from "@pisagor/vue";`;

export const sources = {
  BothDirections: both_directionsRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Horizontal: horizontalRaw,
  Nested: nestedRaw,
  ScrollFade: scroll_fadeRaw,
} as const;
