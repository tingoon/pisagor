import auto_hideRaw from "./auto-hide.tsx?raw";
import autocompleteRaw from "./autocomplete.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import controlled_visibilityRaw from "./controlled-visibility.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";

export const imports = `import { PasswordInput } from "@pisagor/solid";`;

export const sources = {
  Autocomplete: autocompleteRaw,
  AutoHide: auto_hideRaw,
  Controlled: controlledRaw,
  ControlledVisibility: controlled_visibilityRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
} as const;
