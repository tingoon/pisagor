import type { TableRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface TableContextValue {
  slots: TableRecipe;
}

const ctx = createContext("Table")<TableContextValue>();
export const setTableContext = ctx.setContext;
export const useTable = ctx.getContext;
