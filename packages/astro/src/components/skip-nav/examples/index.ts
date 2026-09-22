import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";

export const imports = `---
import { SkipNav } from "@pisagor/astro/skip-nav";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
} as const;

export { default as Default } from "./default.astro";
