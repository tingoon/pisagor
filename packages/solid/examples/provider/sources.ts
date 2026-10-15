import defaultRaw from "./default.tsx?raw";
import messagesRaw from "./messages.tsx?raw";

export const imports = `import { Provider } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
  Messages: messagesRaw,
} as const;
