import type { SheetVariants } from "@pisagor/recipes/sheet";
import { createContext } from "../../utils";

interface SheetContextValue {
  /** Slot class recipes from `sheetVariants`. */
  slots: SheetVariants;
}

export const { SheetContext, useSheet } = createContext<SheetContextValue>()({
  name: "Sheet",
});
