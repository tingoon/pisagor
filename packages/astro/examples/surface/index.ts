import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import nestedRaw from "./nested.astro?raw";
import paddingRaw from "./padding.astro?raw";
import variantsRaw from "./variants.astro?raw";

export const imports = `---
import { Surface } from "@pisagor/astro/surface";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Nested: stripAstroExample(nestedRaw),
  Padding: stripAstroExample(paddingRaw),
  Variants: stripAstroExample(variantsRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Nested } from "./nested.astro";
export { default as Padding } from "./padding.astro";
export { default as Variants } from "./variants.astro";
