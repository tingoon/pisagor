import compoundRaw from "./compound.astro?raw";
import defaultRaw from "./default.astro?raw";
import horizontalRaw from "./horizontal.astro?raw";

export const imports = `---
import { Timeline } from "@pisagor/astro";
---`;

export const sources = {
  Compound: compoundRaw,
  Default: defaultRaw,
  Horizontal: horizontalRaw,
} as const;
