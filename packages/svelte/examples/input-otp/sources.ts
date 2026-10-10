import blur_on_completeRaw from "./blur-on-complete.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_sizeRaw from "./custom-size.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import four_digitsRaw from "./four-digits.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import maskRaw from "./mask.svelte?raw";
import separatorRaw from "./separator.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_placeholderRaw from "./with-placeholder.svelte?raw";

export const imports = `import { InputOtp } from "@pisagor/svelte";`;

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
