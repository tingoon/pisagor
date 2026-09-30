import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import indeterminateRaw from "./indeterminate.astro?raw";
import with_valueRaw from "./with-value.astro?raw";

export const imports = `---
import { CircularProgress } from "@pisagor/astro/circular-progress";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Indeterminate: stripAstroExample(indeterminateRaw),
  WithValue: stripAstroExample(with_valueRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Indeterminate } from "./indeterminate.astro";
export { default as WithValue } from "./with-value.astro";
