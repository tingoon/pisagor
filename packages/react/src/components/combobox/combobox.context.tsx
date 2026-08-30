import type { ComboboxRecipe } from "@pisagor/recipes/combobox";
import { createContext } from "../../internal/utils";

export interface ComboboxRootContextValue {
  /** Slot class recipes from `comboboxRecipe`. */
  slots: ComboboxRecipe;
}

export const { ComboboxRootContext, useComboboxRoot } = createContext<ComboboxRootContextValue>()({
  name: "ComboboxRoot",
  strict: false,
});
