import { stripTsxExample } from "@pisagor/utils";
import clearableRaw from "./clearable.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import fileRaw from "./file.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Input } from "@pisagor/react/input";`;

export const sources = {
  Clearable: stripTsxExample(clearableRaw),
  Controlled: stripTsxExample(controlledRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  File: stripTsxExample(fileRaw),
  Invalid: stripTsxExample(invalidRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Clearable } from "./clearable";
export { Controlled } from "./controlled";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { File } from "./file";
export { Invalid } from "./invalid";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
