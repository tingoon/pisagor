import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import nestedRaw from "./nested.astro?raw";

export const imports = `---
import { Surface } from "@pisagor/astro/surface";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Nested: stripAstroExample(nestedRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Nested } from "./nested.astro";
