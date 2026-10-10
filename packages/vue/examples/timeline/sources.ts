import compoundRaw from "./compound.vue?raw";
import defaultRaw from "./default.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";

export const imports = `import { Timeline } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  Horizontal: horizontalRaw,
} as const;
