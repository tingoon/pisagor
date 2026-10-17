import CustomRecipe from "./custom-recipe.astro?raw";
import Default from "./default.astro?raw";
import SeparatedPanels from "./separated-panels.astro?raw";
import Sizes from "./sizes.astro?raw";

export const imports = `---
import { Frame } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  Default,
  SeparatedPanels,
  Sizes,
} as const;
