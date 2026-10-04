import controlledRaw from "./controlled.svelte?raw";
import custom_compositionRaw from "./custom-composition.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import linksRaw from "./links.svelte?raw";
import page_rangeRaw from "./page-range.svelte?raw";

export const imports = `import { Pagination } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  CustomComposition: custom_compositionRaw,
  Default: defaultRaw,
  Links: linksRaw,
  PageRange: page_rangeRaw,
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as CustomComposition } from "./custom-composition.svelte";
export { default as Default } from "./default.svelte";
export { default as Links } from "./links.svelte";
export { default as PageRange } from "./page-range.svelte";
