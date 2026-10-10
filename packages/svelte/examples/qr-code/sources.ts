import compoundRaw from "./compound.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import downloadRaw from "./download.svelte?raw";
import error_correctionRaw from "./error-correction.svelte?raw";
import overlayRaw from "./overlay.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";

export const imports = `import { QrCode } from "@pisagor/svelte";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Download: downloadRaw,
  ErrorCorrection: error_correctionRaw,
  Overlay: overlayRaw,
  Sizes: sizesRaw,
} as const;
