import defaultRaw from "./default.vue?raw";
import messagesRaw from "./messages.vue?raw";

export const imports = `import { Provider } from "@pisagor/vue";`;

export const sources = {
  Default: defaultRaw,
  Messages: messagesRaw,
} as const;
