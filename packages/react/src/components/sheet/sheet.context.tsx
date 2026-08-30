import type { SheetRecipe } from "@pisagor/recipes/sheet";
import { createContext } from "../../utils";

interface SheetContextValue {
  /** Slot class recipes from `sheetRecipe`. */
  slots: SheetRecipe;
}

export const { SheetContext, useSheet } = createContext<SheetContextValue>()({
  name: "Sheet",
});
