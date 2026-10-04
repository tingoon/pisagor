import { stripVueExample } from "@pisagor/utils";
import compoundRaw from "./compound.vue?raw";
import defaultRaw from "./default.vue?raw";
import with_actionsRaw from "./with-actions.ts?raw";

export const imports = `import { File } from "@pisagor/vue/file";`;

export const sources = {
  Compound: stripVueExample(compoundRaw),
  Default: stripVueExample(defaultRaw),
  WithActions: stripVueExample(with_actionsRaw),
} as const;

export { default as Compound } from "./compound.vue";
export { default as Default } from "./default.vue";
export { default as WithActions } from "./with-actions";
