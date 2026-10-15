import checkbox_groupRaw from "./checkbox-group.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import indeterminateRaw from "./indeterminate.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Checkbox } from "@pisagor/svelte";`;

export const sources = {
  CheckboxGroup: checkbox_groupRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Indeterminate: indeterminateRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;
