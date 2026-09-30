import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import widescreenRaw from "./widescreen.astro?raw";

export const imports = `---
import { AspectRatio } from "@pisagor/astro/aspect-ratio";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Widescreen: stripAstroExample(widescreenRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Widescreen } from "./widescreen.astro";
