import { stripSvelteExample } from "@pisagor/utils";
import defaultRaw from "./default.svelte?raw";
import emptyRaw from "./empty.svelte?raw";
import sortingRaw from "./sorting.svelte?raw";

export const imports = `import { DataTable } from "@pisagor/svelte/data-table";`;

export const sources = {
  Default: stripSvelteExample(defaultRaw),
  Empty: stripSvelteExample(emptyRaw),
  Sorting: stripSvelteExample(sortingRaw),
} as const;

export { default as Default } from "./default.svelte";
export { default as Empty } from "./empty.svelte";
export { default as Sorting } from "./sorting.svelte";
