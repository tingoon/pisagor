import Default from "./default.vue?raw";
import Fallback from "./fallback.vue?raw";

export const imports = `import { ClientOnly } from "@pisagor/vue";`;

export const sources = {
  Default,
  Fallback,
} as const;
