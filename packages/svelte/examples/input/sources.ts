import clearableRaw from "./clearable.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import fileRaw from "./file.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Input } from "@pisagor/svelte";`;

export const sources = {
  Clearable: clearableRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  File: fileRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;
