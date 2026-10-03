import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import fallbackRaw from "./fallback.tsx?raw";

export const imports = `import { ClientOnly } from "@pisagor/react/client-only";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Fallback: stripTsxExample(fallbackRaw),
} as const;

export { Default } from "./default";
export { Fallback } from "./fallback";
