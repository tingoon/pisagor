import defaultRaw from "./default.svelte?raw";
import fallbackRaw from "./fallback.svelte?raw";

export const imports = `import { ClientOnly } from "@pisagor/svelte";`;

export const sources = {
  Default: defaultRaw,
  Fallback: fallbackRaw,
} as const;
