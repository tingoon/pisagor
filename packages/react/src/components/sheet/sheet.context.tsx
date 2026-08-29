import type { SheetSlots } from "@pisagor/recipes/sheet";
import { createContext } from "../../internal/utils";

interface SheetContextValue {
  /** Slot class recipes from `sheetRecipe`. */
  slots: SheetSlots;
}

export const { SheetContext, useSheet } = createContext<SheetContextValue>()({
  name: "Sheet",
});
