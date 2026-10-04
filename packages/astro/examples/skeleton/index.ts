import circleRaw from "./circle.astro?raw";
import compositionRaw from "./composition.astro?raw";
import defaultRaw from "./default.astro?raw";
import textRaw from "./text.astro?raw";

export const imports = `---
import { Skeleton } from "@pisagor/astro";
---`;

export const sources = {
  Circle: circleRaw,
  Composition: compositionRaw,
  Default: defaultRaw,
  Text: textRaw,
} as const;

export { default as Circle } from "./circle.astro";
export { default as Composition } from "./composition.astro";
export { default as Default } from "./default.astro";
export { default as Text } from "./text.astro";
