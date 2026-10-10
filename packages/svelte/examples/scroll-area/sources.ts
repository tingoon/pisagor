import both_directionsRaw from "./both-directions.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import horizontalRaw from "./horizontal.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import scroll_fadeRaw from "./scroll-fade.svelte?raw";

export const imports = `import { ScrollArea } from "@pisagor/svelte";`;

export const sources = {
  BothDirections: both_directionsRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Horizontal: horizontalRaw,
  Nested: nestedRaw,
  ScrollFade: scroll_fadeRaw,
} as const;
