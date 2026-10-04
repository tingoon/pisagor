import { stripTsxExample } from "@pisagor/utils";
import defaultRaw from "./default.tsx?raw";
import emptyRaw from "./empty.tsx?raw";
import sortingRaw from "./sorting.tsx?raw";

export const imports = `import { DataTable } from "@pisagor/solid/data-table";`;

export const sources = {
  Default: stripTsxExample(defaultRaw),
  Empty: stripTsxExample(emptyRaw),
  Sorting: stripTsxExample(sortingRaw),
} as const;

export * from "./default";
export * from "./empty";
export * from "./sorting";
