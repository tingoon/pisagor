import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import placementsRaw from "./placements.tsx?raw";
import triggers_delaysRaw from "./triggers-delays.tsx?raw";

export const imports = `import { HoverCard } from "@pisagor/solid";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Placements: placementsRaw,
  TriggersDelays: triggers_delaysRaw,
} as const;
