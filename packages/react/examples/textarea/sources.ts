import autoresizeRaw from "./autoresize.tsx?raw";
import clearableRaw from "./clearable.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Textarea } from "@pisagor/react";`;

export const sources = {
  Autoresize: autoresizeRaw,
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Variants: variantsRaw,
} as const;
