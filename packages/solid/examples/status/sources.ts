import custom_colorRaw from "./custom-color.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_sizeRaw from "./custom-size.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_iconRaw from "./with-icon.tsx?raw";

export const imports = `import { Status } from "@pisagor/solid";`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSize: custom_sizeRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithIcon: with_iconRaw,
} as const;
