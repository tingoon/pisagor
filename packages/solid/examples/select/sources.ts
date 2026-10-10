import compoundRaw from "./compound.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import emptyRaw from "./empty.tsx?raw";
import groupingRaw from "./grouping.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import max_selectionRaw from "./max-selection.tsx?raw";
import multipleRaw from "./multiple.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_scrollRaw from "./with-scroll.tsx?raw";

export const imports = `import { Select } from "@pisagor/solid";`;

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
