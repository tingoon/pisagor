import type { SheetRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface SheetContextValue {
  slots: SheetRecipe;
}

export const { setContext: setSheetContext, getContext: useSheet } =
  createContext("Sheet")<SheetContextValue>();
