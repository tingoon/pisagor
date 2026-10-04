import defaultRaw from "./default.astro?raw";

export const imports = `---
import { Breadcrumb } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
} as const;

export { default as Default } from "./default.astro";
