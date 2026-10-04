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

export * from "./controlled";
export * from "./custom-popup";
export * from "./disabled";
export * from "./invalid";
export * from "./sizes";
export * from "./variants";
