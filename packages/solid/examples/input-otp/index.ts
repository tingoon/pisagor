import blur_on_completeRaw from "./blur-on-complete.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import custom_sizeRaw from "./custom-size.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import four_digitsRaw from "./four-digits.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import maskRaw from "./mask.tsx?raw";
import separatorRaw from "./separator.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_placeholderRaw from "./with-placeholder.tsx?raw";

export const imports = `import { InputOtp } from "@pisagor/solid";`;

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

export * from "./blur-on-complete";
export * from "./controlled";
export * from "./custom-size";
export * from "./default";
export * from "./disabled";
export * from "./four-digits";
export * from "./invalid";
export * from "./mask";
export * from "./separator";
export * from "./variants";
export * from "./with-placeholder";
