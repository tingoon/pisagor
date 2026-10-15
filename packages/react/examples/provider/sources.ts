import defaultRaw from "./default.tsx?raw";
import messagesRaw from "./messages.tsx?raw";

export const imports = `import { Breadcrumb, Provider } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Messages: messagesRaw,
} as const;
