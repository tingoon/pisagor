import defaultRaw from "./default.ts?raw";

export const imports = `import { Presence } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
} as const;
