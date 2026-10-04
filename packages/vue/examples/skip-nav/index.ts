import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";

export const imports = `import { SkipNav } from "@pisagor/vue/skip-nav";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
} as const;

export { default as Default } from "./default.vue";
