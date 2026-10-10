import defaultRaw from "./default.tsx?raw";

export const imports = `import { SkipNav } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
} as const;
