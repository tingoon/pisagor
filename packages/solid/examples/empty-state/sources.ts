import compactRaw from "./compact.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";

export const imports = `import { EmptyState } from "@pisagor/solid";`;

export const sources = {
  Compact: compactRaw,
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
} as const;
