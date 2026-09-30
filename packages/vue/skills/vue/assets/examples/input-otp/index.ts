import { stripVueExample } from "@pisagor/utils";
import blur_on_completeRaw from "./blur-on-complete.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import custom_sizeRaw from "./custom-size.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import four_digitsRaw from "./four-digits.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import maskRaw from "./mask.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import separatorRaw from "./separator.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_placeholderRaw from "./with-placeholder.vue?raw";

export const imports = `import { InputOTP } from "@pisagor/vue/input-otp";`;

export const sources = {
  BlurOnComplete: stripVueExample(blur_on_completeRaw),
  Controlled: stripVueExample(controlledRaw),
  CustomSize: stripVueExample(custom_sizeRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  FourDigits: stripVueExample(four_digitsRaw),
  Invalid: stripVueExample(invalidRaw),
  Mask: stripVueExample(maskRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Separator: stripVueExample(separatorRaw),
  Variants: stripVueExample(variantsRaw),
  WithPlaceholder: stripVueExample(with_placeholderRaw),
} as const;

export { default as BlurOnComplete } from "./blur-on-complete.vue";
export { default as Controlled } from "./controlled.vue";
export { default as CustomSize } from "./custom-size.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as FourDigits } from "./four-digits.vue";
export { default as Invalid } from "./invalid.vue";
export { default as Mask } from "./mask.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Separator } from "./separator.vue";
export { default as Variants } from "./variants.vue";
export { default as WithPlaceholder } from "./with-placeholder.vue";
