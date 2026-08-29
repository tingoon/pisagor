import type { SelectSlots } from "@pisagor/recipes/select";
import { createContext } from "../../internal/utils";

export interface SelectRootContextValue {
  /** Slot class recipes from `selectRecipe`. */
  slots: SelectSlots;
}

export const { SelectRootContext, useSelectRoot } = createContext<SelectRootContextValue>()({
  name: "SelectRoot",
  strict: false,
});
