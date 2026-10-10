import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import nestedRaw from "./nested.tsx?raw";
import partial_collapseRaw from "./partial-collapse.tsx?raw";

export const imports = `import { Collapsible } from "@pisagor/react";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Nested: nestedRaw,
  PartialCollapse: partial_collapseRaw,
} as const;
