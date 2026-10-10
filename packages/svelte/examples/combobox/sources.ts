import autohighlightRaw from "./autohighlight.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import groupRaw from "./group.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_clear_buttonRaw from "./with-clear-button.svelte?raw";
import with_scrollRaw from "./with-scroll.svelte?raw";
import with_start_iconRaw from "./with-start-icon.svelte?raw";

export const imports = `import { Combobox } from "@pisagor/svelte";`;

export const sources = {
  Autohighlight: autohighlightRaw,
  Compound: compoundRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Group: groupRaw,
  Invalid: invalidRaw,
  Multiple: multipleRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithClearButton: with_clear_buttonRaw,
  WithScroll: with_scrollRaw,
  WithStartIcon: with_start_iconRaw,
} as const;
