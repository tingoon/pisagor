import type { TableVariants } from "@pisagor/styles/ui/table";
import { createContext } from "../../utils";

interface TableContextValue {
  slots: TableVariants;
}

export const { TableContext, useTable } = createContext<TableContextValue>()({
  name: "Table",
});
