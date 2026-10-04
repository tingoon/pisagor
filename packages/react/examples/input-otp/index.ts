import { stripTsxExample } from "@pisagor/utils";
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

export const imports = `import { InputOTP } from "@pisagor/react/input-otp";`;

export const sources = {
  BlurOnComplete: stripTsxExample(blur_on_completeRaw),
  Controlled: stripTsxExample(controlledRaw),
  CustomSize: stripTsxExample(custom_sizeRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  FourDigits: stripTsxExample(four_digitsRaw),
  Invalid: stripTsxExample(invalidRaw),
  Mask: stripTsxExample(maskRaw),
  Separator: stripTsxExample(separatorRaw),
  Variants: stripTsxExample(variantsRaw),
  WithPlaceholder: stripTsxExample(with_placeholderRaw),
} as const;

export { BlurOnComplete } from "./blur-on-complete";
export { Controlled } from "./controlled";
export { CustomSize } from "./custom-size";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { FourDigits } from "./four-digits";
export { Invalid } from "./invalid";
export { Mask } from "./mask";
export { Separator } from "./separator";
export { Variants } from "./variants";
export { WithPlaceholder } from "./with-placeholder";
