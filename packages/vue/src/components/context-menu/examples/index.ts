import { stripVueExample } from "@pisagor/utils";
import defaultRaw from "./default.vue?raw";

export const imports = `import { ContextMenu } from "@pisagor/vue/context-menu";`;

export const sources = {
  Default: stripVueExample(defaultRaw),
} as const;

export { default as Default } from "./default.vue";
