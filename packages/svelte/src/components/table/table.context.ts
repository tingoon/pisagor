import type { TableRecipe } from "@pisagor/recipes/table";
import { createContext } from "../../utils/create-context";

interface TableContextValue {
  slots: TableRecipe;
}

const ctx = createContext<TableContextValue>({ name: "Table" });
export const setTableContext = ctx.setContext;
export const useTable = ctx.getContext;
