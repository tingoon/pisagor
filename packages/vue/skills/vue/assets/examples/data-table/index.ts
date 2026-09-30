import { stripVueExample } from "@pisagor/utils";
import emptyRaw from "./empty.ts?raw";
import sortingRaw from "./sorting.ts?raw";

export const imports = `import { DataTable } from "@pisagor/vue/data-table";`;

export const sources = {
  Empty: stripVueExample(emptyRaw),
  Sorting: stripVueExample(sortingRaw),
} as const;

export { Empty } from "./empty";
export { Sorting } from "./sorting";
