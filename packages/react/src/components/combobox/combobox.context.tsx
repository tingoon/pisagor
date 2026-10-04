import type { ComboboxRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

export interface ComboboxRootContextValue {
  /** Slot class recipes from `comboboxRecipe`. */
  slots: ComboboxRecipe;
}

export const { ComboboxRootContext, useComboboxRoot } = createContext(
  "ComboboxRoot",
)<ComboboxRootContextValue>({ strict: false });
