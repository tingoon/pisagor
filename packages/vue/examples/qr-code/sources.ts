import Compound from "./compound.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import Default from "./default.vue?raw";
import Download from "./download.vue?raw";
import ErrorCorrection from "./error-correction.vue?raw";
import Overlay from "./overlay.vue?raw";
import Sizes from "./sizes.vue?raw";

export const imports = `import { QrCode } from "@pisagor/vue";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Download,
  ErrorCorrection,
  Overlay,
  Sizes,
} as const;
