import defaultRaw from "./default.vue?raw";

export const imports = `import { Provider } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
} as const;
