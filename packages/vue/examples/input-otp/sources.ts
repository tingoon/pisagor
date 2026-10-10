import blur_on_completeRaw from "./blur-on-complete.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_sizeRaw from "./custom-size.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import four_digitsRaw from "./four-digits.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import maskRaw from "./mask.vue?raw";
import separatorRaw from "./separator.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_placeholderRaw from "./with-placeholder.vue?raw";

export const imports = `import { InputOTP } from "@pisagor/vue";`;

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
