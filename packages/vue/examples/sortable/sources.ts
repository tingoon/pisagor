import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import Horizontal from "./horizontal.vue?raw";
import WithoutHandle from "./without-handle.vue?raw";

export const imports = `import { Sortable } from "@pisagor/vue";`;

export const sources = {
  Default,
  Disabled,
  Horizontal,
  WithoutHandle,
} as const;
