import defaultRaw from "./default.tsx?raw";

export const imports = `import { Presence } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
} as const;
