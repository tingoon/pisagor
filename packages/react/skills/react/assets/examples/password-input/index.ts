import { stripTsxExample } from "@pisagor/utils";
import auto_hideRaw from "./auto-hide.tsx?raw";
import autocompleteRaw from "./autocomplete.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import controlled_visibilityRaw from "./controlled-visibility.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { PasswordInput } from "@pisagor/react/password-input";`;

export const sources = {
  Autocomplete: stripTsxExample(autocompleteRaw),
  AutoHide: stripTsxExample(auto_hideRaw),
  Controlled: stripTsxExample(controlledRaw),
  ControlledVisibility: stripTsxExample(controlled_visibilityRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Sizes: stripTsxExample(sizesRaw),
} as const;

export { AutoHide } from "./auto-hide";
export { Autocomplete } from "./autocomplete";
export { Controlled } from "./controlled";
export { ControlledVisibility } from "./controlled-visibility";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { Sizes } from "./sizes";
