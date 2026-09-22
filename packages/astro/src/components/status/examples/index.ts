import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import { Status } from "@pisagor/astro/status";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Variants: stripAstroExample(variantsRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Variants } from "./variants.astro";
