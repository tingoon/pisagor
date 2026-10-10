import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import emptyRaw from "./empty.svelte?raw";
import groupingRaw from "./grouping.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import max_selectionRaw from "./max-selection.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_scrollRaw from "./with-scroll.svelte?raw";

export const imports = `import { Select } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Empty: emptyRaw,
  Grouping: groupingRaw,
  Invalid: invalidRaw,
  MaxSelection: max_selectionRaw,
  Multiple: multipleRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithScroll: with_scrollRaw,
} as const;
