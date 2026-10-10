import both_directionsRaw from "./both-directions.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import horizontalRaw from "./horizontal.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import scroll_fadeRaw from "./scroll-fade.tsx?raw";

export const imports = `import { ScrollArea } from "@pisagor/react";`;

export const sources = {
  BothDirections: both_directionsRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Horizontal: horizontalRaw,
  Nested: nestedRaw,
  ScrollFade: scroll_fadeRaw,
} as const;
