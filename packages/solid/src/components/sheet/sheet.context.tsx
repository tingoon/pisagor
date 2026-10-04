import type { SheetRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface SheetContextValue {
  slots: SheetRecipe;
}

export const { SheetContext, useSheet } =
  createContext("Sheet")<SheetContextValue>();
