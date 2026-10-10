import variantsRaw from "./variants.svelte?raw";

export const imports = `import { Swap } from "@pisagor/svelte";`;

export const sources = {
  Variants: variantsRaw,
} as const;
