import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Switch } from "@pisagor/react/switch";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
