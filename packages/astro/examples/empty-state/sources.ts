import compactRaw from "./compact.astro?raw";
import compoundRaw from "./compound.astro?raw";
import custom_recipeRaw from "./custom-recipe.astro?raw";
import defaultRaw from "./default.astro?raw";

export const imports = `---
import { Button, EmptyState } from "@pisagor/astro";
---`;

export const sources = {
  Compact: compactRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
} as const;
