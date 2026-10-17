import Compound from "./compound.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Default from "./default.svelte?raw";
import Download from "./download.svelte?raw";
import ErrorCorrection from "./error-correction.svelte?raw";
import Overlay from "./overlay.svelte?raw";
import Sizes from "./sizes.svelte?raw";

export const imports = `import { QrCode } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Download,
  ErrorCorrection,
  Overlay,
  Sizes,
} as const;
