import type { TableSlots } from "@pisagor/recipes/table";
import { createContext } from "../../internal/utils";

interface TableContextValue {
  slots: TableSlots;
}

export const { TableContext, useTable } = createContext<TableContextValue>()({
  name: "Table",
});
