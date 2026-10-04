import defaultRaw from "./default.astro?raw";
import groupRaw from "./group.astro?raw";

export const imports = `---
import { Kbd } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Group: groupRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Group } from "./group.astro";
