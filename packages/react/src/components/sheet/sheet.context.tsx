import type { SheetVariants } from "@pisagor/styles/ui/sheet";
import { createContext } from "../../utils";

interface SheetContextValue {
  /** Slot class recipes from `sheetVariants`. */
  slots: SheetVariants;
}

export const { SheetContext, useSheet } = createContext<SheetContextValue>()({
  name: "Sheet",
});
