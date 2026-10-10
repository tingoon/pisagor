import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import horizontalRaw from "./horizontal.vue?raw";
import without_handleRaw from "./without-handle.vue?raw";

export const imports = `import { Sortable } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Disabled: disabledRaw,
  Horizontal: horizontalRaw,
  WithoutHandle: without_handleRaw,
} as const;
