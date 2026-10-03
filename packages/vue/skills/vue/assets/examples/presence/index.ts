import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.ts?raw";

export const imports = `import { Presence } from "@pisagor/vue/presence";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
} as const;

export { default as Default } from "./default";
