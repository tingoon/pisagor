import blur_on_completeRaw from "./blur-on-complete.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_sizeRaw from "./custom-size.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import four_digitsRaw from "./four-digits.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import maskRaw from "./mask.tsx?raw";
import separatorRaw from "./separator.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_placeholderRaw from "./with-placeholder.tsx?raw";

export const imports = `import { InputOTP } from "@pisagor/react";`;

export const sources = {
  BlurOnComplete: blur_on_completeRaw,
  Controlled: controlledRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSize: custom_sizeRaw,
  Disabled: disabledRaw,
  FourDigits: four_digitsRaw,
  Invalid: invalidRaw,
  Mask: maskRaw,
  Separator: separatorRaw,
  Variants: variantsRaw,
  WithPlaceholder: with_placeholderRaw,
} as const;
