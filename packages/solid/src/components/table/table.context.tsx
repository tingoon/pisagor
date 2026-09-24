import type { TableRecipe } from "@pisagor/recipes/table";
import { createContext } from "../../utils";

interface TableContextValue {
  slots: TableRecipe;
}

export const { TableContext, useTable } = createContext<TableContextValue>()({
  name: "Table",
});
