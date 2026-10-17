import Composition from "./composition.vue?raw";
import Variants from "./variants.ts?raw";

export const imports = `import { AlertDialog } from "@pisagor/vue";`;

export const sources = {
  Composition,
  Variants,
} as const;
