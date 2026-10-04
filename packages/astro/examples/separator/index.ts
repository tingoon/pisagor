import defaultRaw from "./default.astro?raw";
import verticalRaw from "./vertical.astro?raw";

export const imports = `---
import { Separator } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Vertical: verticalRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Vertical } from "./vertical.astro";
