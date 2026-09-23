import { stripAstroExample } from "@pisagor/utils";
import compoundRaw from "./compound.astro?raw";
import defaultRaw from "./default.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import { Alert } from "@pisagor/astro/alert";
---`;

export const sources = {
  Compound: stripAstroExample(compoundRaw),
  Default: stripAstroExample(defaultRaw),
  Variants: stripAstroExample(variantsRaw),
} as const;

export { default as Compound } from "./compound.astro";
export { default as Default } from "./default.astro";
export { default as Variants } from "./variants.astro";
