import blur_on_completeRaw from "./blur-on-complete.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import custom_sizeRaw from "./custom-size.svelte?raw";
import defaultRaw from "./default.svelte?raw";
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
  CustomSize: custom_sizeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  FourDigits: four_digitsRaw,
  Invalid: invalidRaw,
  Mask: maskRaw,
  Separator: separatorRaw,
  Variants: variantsRaw,
  WithPlaceholder: with_placeholderRaw,
} as const;

export { default as BlurOnComplete } from "./blur-on-complete.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as CustomSize } from "./custom-size.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as FourDigits } from "./four-digits.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Mask } from "./mask.svelte";
export { default as Separator } from "./separator.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithPlaceholder } from "./with-placeholder.svelte";
