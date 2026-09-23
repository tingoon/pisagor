import { stripTsxExample } from "@pisagor/utils";
import emptyRaw from "./empty.tsx?raw";
import sortingRaw from "./sorting.tsx?raw";

export const imports = `import { DataTable } from "@pisagor/react/data-table";`;

export const sources = {
  Empty: stripTsxExample(emptyRaw),
  Sorting: stripTsxExample(sortingRaw),
} as const;

export { Empty } from "./empty";
export { Sorting } from "./sorting";
