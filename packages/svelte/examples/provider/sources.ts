import defaultRaw from "./default.svelte?raw";
import messagesRaw from "./messages.svelte?raw";

export const imports = `import { Provider } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Messages: messagesRaw,
} as const;
