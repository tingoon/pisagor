import controlledRaw from "./controlled.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import indeterminateRaw from "./indeterminate.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import thicknessRaw from "./thickness.svelte?raw";
import with_valueRaw from "./with-value.svelte?raw";

export const imports = `import { CircularProgress } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  Default: defaultRaw,
  Indeterminate: indeterminateRaw,
  Sizes: sizesRaw,
  Thickness: thicknessRaw,
  WithValue: with_valueRaw,
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Default } from "./default.svelte";
export { default as Indeterminate } from "./indeterminate.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Thickness } from "./thickness.svelte";
export { default as WithValue } from "./with-value.svelte";
