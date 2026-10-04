import custom_styleRaw from "./custom-style.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import multipleRaw from "./multiple.svelte?raw";
import search_queryRaw from "./search-query.svelte?raw";
import squiggleRaw from "./squiggle.svelte?raw";

export const imports = `import { Highlight } from "@pisagor/svelte";`;

export const sources = {
  CustomStyle: custom_styleRaw,
  Default: defaultRaw,
  Multiple: multipleRaw,
  SearchQuery: search_queryRaw,
  Squiggle: squiggleRaw,
} as const;

export { default as CustomStyle } from "./custom-style.svelte";
export { default as Default } from "./default.svelte";
export { default as Multiple } from "./multiple.svelte";
export { default as SearchQuery } from "./search-query.svelte";
export { default as Squiggle } from "./squiggle.svelte";
