import { stripTsxExample } from "@pisagor/utils";
import compositionRaw from "./composition.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import variantsRaw from "./variants.tsx?raw";

export const imports = `import { AlertDialog } from "@pisagor/react/alert-dialog";`;

export const sources = {
  Composition: stripTsxExample(compositionRaw),
  Default: stripTsxExample(defaultRaw),
  Variants: stripTsxExample(variantsRaw),
} as const;

export { Composition } from "./composition";
export { Default } from "./default";
export { Variants } from "./variants";
