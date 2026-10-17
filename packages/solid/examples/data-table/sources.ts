import { EmptySource as Empty } from "./empty";
import { SortingSource as Sorting } from "./sorting";

export const imports = `import { DataTable } from "@pisagor/solid/data-table";`;

export const sources = {
  Empty,
  Sorting,
} as const;
