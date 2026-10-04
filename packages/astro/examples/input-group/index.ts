import defaultRaw from "./default.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import { InputGroup } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Sizes } from "./sizes.astro";
export { default as Variants } from "./variants.astro";
