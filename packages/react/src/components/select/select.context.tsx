import type { SelectRecipe } from "@pisagor/recipes/select";
import { createContext } from "../../utils";

export interface SelectRootContextValue {
  /** Slot class recipes from `selectRecipe`. */
  slots: SelectRecipe;
}

export const { SelectRootContext, useSelectRoot } = createContext<SelectRootContextValue>()({
  name: "SelectRoot",
  strict: false,
});
