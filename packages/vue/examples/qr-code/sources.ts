import compoundRaw from "./compound.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import defaultRaw from "./default.vue?raw";
import downloadRaw from "./download.vue?raw";
import error_correctionRaw from "./error-correction.vue?raw";
import overlayRaw from "./overlay.vue?raw";
import sizesRaw from "./sizes.vue?raw";

export const imports = `import { QrCode } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  CustomRecipe: custom_recipeRaw,
  Default: defaultRaw,
  Download: downloadRaw,
  ErrorCorrection: error_correctionRaw,
  Overlay: overlayRaw,
  Sizes: sizesRaw,
} as const;
