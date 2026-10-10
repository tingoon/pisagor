import defaultRaw from "./default.astro?raw";

export const imports = `---
import { SkipNav } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
} as const;
