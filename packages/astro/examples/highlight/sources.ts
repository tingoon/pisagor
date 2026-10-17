import CustomRecipe from "./custom-recipe.astro?raw";
import CustomStyle from "./custom-style.astro?raw";
import Default from "./default.astro?raw";
import Multiple from "./multiple.astro?raw";

export const imports = `---
import { Highlight } from "@pisagor/astro";
---`;

export const sources = {
  CustomRecipe,
  CustomStyle,
  Default,
  Multiple,
} as const;
