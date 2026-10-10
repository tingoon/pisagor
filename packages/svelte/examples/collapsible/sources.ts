import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import nestedRaw from "./nested.svelte?raw";
import partial_collapseRaw from "./partial-collapse.svelte?raw";

export const imports = `import { Collapsible } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Nested: nestedRaw,
  PartialCollapse: partial_collapseRaw,
} as const;
