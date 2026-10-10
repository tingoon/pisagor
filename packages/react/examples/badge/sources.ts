import custom_colorRaw from "./custom-color.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import pillRaw from "./pill.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_linkRaw from "./with-link.tsx?raw";
import with_spinnerRaw from "./with-spinner.tsx?raw";

export const imports = `import { Badge } from "@pisagor/react";`;

export const sources = {
  CustomColor: custom_colorRaw,
  CustomRecipe: custom_recipeRaw,
  Pill: pillRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithLink: with_linkRaw,
  WithSpinner: with_spinnerRaw,
} as const;
