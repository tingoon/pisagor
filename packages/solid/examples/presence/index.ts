import defaultRaw from "./default.tsx?raw";

export const imports = `import { Presence } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
} as const;

export * from "./default";
