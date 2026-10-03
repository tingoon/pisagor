import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import sizesRaw from "./sizes.astro?raw";

export const imports = `---
import { Spinner } from "@pisagor/astro/spinner";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Sizes: stripAstroExample(sizesRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Sizes } from "./sizes.astro";
