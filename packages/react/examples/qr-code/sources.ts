import { CompoundSource as Compound } from "./compound";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DownloadSource as Download } from "./download";
import { ErrorCorrectionSource as ErrorCorrection } from "./error-correction";
import { OverlaySource as Overlay } from "./overlay";
import { SizesSource as Sizes } from "./sizes";

export const imports = `import { QrCode } from "@pisagor/react";`;

export const sources = {
  Compound,
  CustomRecipe,
  Default,
  Download,
  ErrorCorrection,
  Overlay,
  Sizes,
} as const;
