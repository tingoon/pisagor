import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import groupRaw from "./group.astro?raw";

export const imports = `---
import { Kbd } from "@pisagor/astro/kbd";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Group: stripAstroExample(groupRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Group } from "./group.astro";
