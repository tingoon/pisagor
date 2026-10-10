import emptyRaw from "./empty.svelte?raw";
import sortingRaw from "./sorting.svelte?raw";

export const imports = `import { DataTable } from "@pisagor/svelte/data-table";`;

export const sources = {
  Empty: emptyRaw,
  Sorting: sortingRaw,
} as const;
