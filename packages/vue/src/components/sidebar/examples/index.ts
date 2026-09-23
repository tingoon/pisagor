import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.ts?raw";

export const imports = `import { Sidebar } from "@pisagor/vue/sidebar";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
} as const;

export { default as Default } from "./default";
