import Compound from "./compound.vue?raw";
import Default from "./default.vue?raw";
import Horizontal from "./horizontal.vue?raw";

export const imports = `import { Timeline } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Default,
  Horizontal,
} as const;
