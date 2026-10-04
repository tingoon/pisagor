import type { TableRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface TableContextValue {
  slots: TableRecipe;
}

export const { TableContext, useTable } =
  createContext("Table")<TableContextValue>();
