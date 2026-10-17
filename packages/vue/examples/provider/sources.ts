import Default from "./default.vue?raw";
import Messages from "./messages.vue?raw";

export const imports = `import { Provider } from "@pisagor/vue";`;

export const sources = {
  Default,
  Messages,
} as const;
