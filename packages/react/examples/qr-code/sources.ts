import compoundRaw from "./compound.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import downloadRaw from "./download.tsx?raw";
import error_correctionRaw from "./error-correction.tsx?raw";
import overlayRaw from "./overlay.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { QrCode } from "@pisagor/react";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Download: downloadRaw,
  ErrorCorrection: error_correctionRaw,
  Overlay: overlayRaw,
  Sizes: sizesRaw,
} as const;
