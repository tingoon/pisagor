import checkboxesRaw from "./checkboxes.vue?raw";
import defaultRaw from "./default.vue?raw";

export const imports = `import { ContextMenu } from "@pisagor/vue";`;

export const sources = {
  Checkboxes: checkboxesRaw,
  Default: defaultRaw,
} as const;
