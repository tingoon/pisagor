import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import custom_popupRaw from "./custom-popup.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { PhoneInput } from "@pisagor/react/phone-input";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  CustomPopup: stripTsxExample(custom_popupRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Controlled } from "./controlled";
export { CustomPopup } from "./custom-popup";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
