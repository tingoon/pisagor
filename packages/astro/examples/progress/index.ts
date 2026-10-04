import { stripAstroExample } from "@pisagor/utils";
import defaultRaw from "./default.astro?raw";
import indeterminateRaw from "./indeterminate.astro?raw";
import with_labelRaw from "./with-label.astro?raw";

export const imports = `---
import { Progress } from "@pisagor/astro/progress";
---`;

export const sources = {
  Default: stripAstroExample(defaultRaw),
  Indeterminate: stripAstroExample(indeterminateRaw),
  WithLabel: stripAstroExample(with_labelRaw),
} as const;

export { default as Default } from "./default.astro";
export { default as Indeterminate } from "./indeterminate.astro";
export { default as WithLabel } from "./with-label.astro";
