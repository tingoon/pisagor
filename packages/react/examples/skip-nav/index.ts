import defaultRaw from "./default.tsx?raw";

export const imports = `import { SkipNav } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
} as const;

export * from "./default";
