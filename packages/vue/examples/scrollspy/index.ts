import defaultRaw from "./default.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";

export const imports = `import { Scrollspy } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Horizontal: horizontalRaw,
} as const;

export { default as Default } from "./default.vue";
export { default as Horizontal } from "./horizontal.vue";
