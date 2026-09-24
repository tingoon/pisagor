import type { SheetRecipe } from "@pisagor/recipes/sheet";
import { createContext } from "../../utils";

interface SheetContextValue {
  slots: SheetRecipe;
}

export const { SheetContext, useSheet } = createContext<SheetContextValue>()({
  name: "Sheet",
});
