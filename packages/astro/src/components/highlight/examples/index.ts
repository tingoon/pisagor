import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import multipleRaw from "./multiple.astro?raw";

export const imports = `---
import { Highlight } from "@pisagor/astro/highlight";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Multiple: stripAstroExample(multipleRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Multiple } from "./multiple.astro";
