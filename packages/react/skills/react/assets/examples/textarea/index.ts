import { stripTsxExample } from "@pisagor/utils";
import autoresizeRaw from "./autoresize.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Textarea } from "@pisagor/react/textarea";`;

export const sources = {
  Autoresize: stripTsxExample(autoresizeRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Autoresize } from "./autoresize";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { Variants } from "./variants";
