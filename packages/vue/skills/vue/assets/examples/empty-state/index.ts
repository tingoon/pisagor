import { stripVueExample } from "@pisagor/utils";
import compactRaw from "./compact.vue?raw";
import compoundRaw from "./compound.vue?raw";
import defaultRaw from "./default.vue?raw";

export const imports = `import { EmptyState } from "@pisagor/vue/empty-state";`;

export const sources = {
  Compact: stripVueExample(compactRaw),
  Compound: stripVueExample(compoundRaw),
  Default: stripVueExample(defaultRaw),
} as const;

export { default as Compact } from "./compact.vue";
export { default as Compound } from "./compound.vue";
export { default as Default } from "./default.vue";
