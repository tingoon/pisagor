import compositionRaw from "./composition.vue?raw";
import variantsRaw from "./variants.ts?raw";

export const imports = `import { AlertDialog } from "@pisagor/vue";`;

export const sources = {
  Composition: compositionRaw,
  Variants: variantsRaw,
} as const;
