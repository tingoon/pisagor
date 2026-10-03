import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { Swap } from "@pisagor/react/swap";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Default } from "./default";
export { Variants } from "./variants";
