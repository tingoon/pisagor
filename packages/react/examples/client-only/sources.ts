import { DefaultSource as Default } from "./default";
import { FallbackSource as Fallback } from "./fallback";

export const imports = `import { ClientOnly } from "@pisagor/react";`;

export const sources = {
  Default,
  Fallback,
} as const;
