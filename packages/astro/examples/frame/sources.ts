import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";
import separated_panelsRaw from "./separated-panels.astro?raw";

export const imports = `---
import { Frame } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  SeparatedPanels: separated_panelsRaw,
} as const;
