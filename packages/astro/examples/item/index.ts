import defaultRaw from "./default.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import { Item } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Variants: variantsRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Variants } from "./variants.astro";
