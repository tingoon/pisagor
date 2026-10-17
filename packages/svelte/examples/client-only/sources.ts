import Default from "./default.svelte?raw";
import Fallback from "./fallback.svelte?raw";

export const imports = `import { ClientOnly } from "@pisagor/svelte";`;

export const sources = {
  Default,
  Fallback,
} as const;
