import { stripAstroExample } from "@pisagor/utils";
import circleRaw from "./circle.astro?raw";
import compositionRaw from "./composition.astro?raw";
import defaultRaw from "./default.astro?raw";
import textRaw from "./text.astro?raw";

export const imports = `---
import { Skeleton } from "@pisagor/astro/skeleton";
---`;

export const sources = {
  Circle: stripAstroExample(circleRaw),
  Composition: stripAstroExample(compositionRaw),
  Default: stripAstroExample(defaultRaw),
  Text: stripAstroExample(textRaw),
} as const;

export { default as Circle } from "./circle.astro";
export { default as Composition } from "./composition.astro";
export { default as Default } from "./default.astro";
export { default as Text } from "./text.astro";
