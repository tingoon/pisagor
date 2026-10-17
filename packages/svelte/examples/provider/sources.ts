import Default from "./default.svelte?raw";
import Messages from "./messages.svelte?raw";

export const imports = `import { Provider } from "@pisagor/svelte";`;

export const sources = {
  Default,
  Messages,
} as const;
