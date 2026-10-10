import compoundRaw from "./compound.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import wrapped_actionsRaw from "./wrapped-actions.tsx?raw";

export const imports = `import { Toolbar } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WrappedActions: wrapped_actionsRaw,
} as const;
