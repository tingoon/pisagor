import emptyRaw from "./empty.tsx?raw";
import sortingRaw from "./sorting.tsx?raw";

export const imports = `import { DataTable } from "@pisagor/solid/data-table";`;

export const sources = {
  Empty: emptyRaw,
  Sorting: sortingRaw,
} as const;
