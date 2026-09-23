import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.ts?raw";
import variantsRaw from "./variants.ts?raw";

export const imports = `import { AlertDialog } from "@pisagor/vue/alert-dialog";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Variants: stripVueExample(variantsRaw),
} as const;

export { default as Default } from "./default";
export { default as Variants } from "./variants";
