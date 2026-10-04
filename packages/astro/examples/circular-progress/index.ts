import defaultRaw from "./default.astro?raw";
import indeterminateRaw from "./indeterminate.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import with_valueRaw from "./with-value.astro?raw";

export const imports = `---
import { CircularProgress } from "@pisagor/astro";
---`;

export const sources = {
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  Sizes: sizesRaw,
  WithValue: with_valueRaw,
} as const;

export { default as Default } from "./default.astro";
export { default as Indeterminate } from "./indeterminate.astro";
export { default as Sizes } from "./sizes.astro";
export { default as WithValue } from "./with-value.astro";
