import compoundRaw from "./compound.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import with_actionsRaw from "./with-actions.tsx?raw";

export const imports = `import { File } from "@pisagor/solid";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  WithActions: with_actionsRaw,
} as const;
