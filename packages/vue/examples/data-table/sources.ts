import emptyRaw from "./empty.vue?raw";
import sortingRaw from "./sorting.vue?raw";

export const imports = `import { DataTable } from "@pisagor/vue/data-table";`;

export const sources = {
  Empty: emptyRaw,
  Sorting: sortingRaw,
} as const;
