import defaultRaw from "./default.ts?raw";
import variantsRaw from "./variants.ts?raw";

export const imports = `import { AlertDialog } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Variants: variantsRaw,
} as const;

export { default as Default } from "./default";
export { default as Variants } from "./variants";
