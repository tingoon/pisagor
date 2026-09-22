import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";

export const imports = `---
import { Table } from "@pisagor/astro/table";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
} as const;

export { default as Default } from "./default.astro";
