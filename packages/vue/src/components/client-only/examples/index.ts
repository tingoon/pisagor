import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";
import fallbackRaw from "./fallback.vue?raw";

export const imports = `import { ClientOnly } from "@pisagor/vue/client-only";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
  Fallback: stripVueExample(fallbackRaw),
} as const;

export { default as Default } from "./default.vue";
export { default as Fallback } from "./fallback.vue";
