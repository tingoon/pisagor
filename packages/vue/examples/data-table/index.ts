import emptyRaw from "./empty.ts?raw";
import sortingRaw from "./sorting.ts?raw";

export const imports = `import { DataTable } from "@pisagor/vue/data-table";`;

export const sources = {
  Empty: emptyRaw,
  Sorting: sortingRaw,
} as const;

export * from "./empty";
export * from "./sorting";
