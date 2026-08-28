import type { TableVariants } from "@pisagor/recipes/table";
import { createContext } from "../../internal/utils";

interface TableContextValue {
  slots: TableVariants;
}

export const { TableContext, useTable } = createContext<TableContextValue>()({
  name: "Table",
});
