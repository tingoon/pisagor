import defaultRaw from "./default.tsx?raw";
import fallbackRaw from "./fallback.tsx?raw";

export const imports = `import { ClientOnly } from "@pisagor/react";`;

export const sources = {
  Default: defaultRaw,
  Fallback: fallbackRaw,
} as const;

export * from "./default";
export * from "./fallback";
