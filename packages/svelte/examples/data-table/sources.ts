import Empty from "./empty.svelte?raw";
import Sorting from "./sorting.svelte?raw";

export const imports = `import { DataTable } from "@pisagor/svelte/data-table";`;

export const sources = {
  Empty,
  Sorting,
} as const;
