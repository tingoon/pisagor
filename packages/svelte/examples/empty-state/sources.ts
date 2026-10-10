import compactRaw from "./compact.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";

export const imports = `import { EmptyState } from "@pisagor/svelte";`;

export const sources = {
  Compact: compactRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
} as const;
