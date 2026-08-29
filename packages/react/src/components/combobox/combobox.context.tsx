import type { ComboboxSlots } from "@pisagor/recipes/combobox";
import { createContext } from "../../internal/utils";

export interface ComboboxRootContextValue {
  /** Slot class recipes from `comboboxRecipe`. */
  slots: ComboboxSlots;
}

export const { ComboboxRootContext, useComboboxRoot } = createContext<ComboboxRootContextValue>()({
  name: "ComboboxRoot",
  strict: false,
});
