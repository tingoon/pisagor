import BothDirections from "./both-directions.svelte?raw";
import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Horizontal from "./horizontal.svelte?raw";
import Nested from "./nested.svelte?raw";
import ScrollFade from "./scroll-fade.svelte?raw";

export const imports = `import { ScrollArea } from "@pisagor/svelte";`;

export const sources = {
  BothDirections,
  Compound,
  CustomRecipe,
  Default,
  Horizontal,
  Nested,
  ScrollFade,
} as const;
