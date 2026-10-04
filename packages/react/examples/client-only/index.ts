import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import fallbackRaw from "./fallback.tsx?raw";

export const imports = `import { ClientOnly } from "@pisagor/react";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Fallback: stripTsxExample(fallbackRaw),
} as const;

export * from "./default";
export * from "./fallback";
