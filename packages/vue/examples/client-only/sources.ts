import defaultRaw from "./default.vue?raw";
import fallbackRaw from "./fallback.vue?raw";

export const imports = `import { ClientOnly } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Fallback: fallbackRaw,
} as const;
