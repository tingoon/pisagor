import defaultRaw from "./default.tsx?raw";
import fallbackRaw from "./fallback.tsx?raw";

export const imports = `import { ClientOnly } from "@pisagor/solid";`;

export const sources = {
  Default: defaultRaw,
  Fallback: fallbackRaw,
} as const;
