import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import icon_groupRaw from "./icon-group.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Toggle } from "@pisagor/solid";`;

export const sources = {
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  Disabled: disabledRaw,
  IconGroup: icon_groupRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;
