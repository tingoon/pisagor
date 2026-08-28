import type { ComboboxVariants } from "@pisagor/recipes/combobox";
import { createContext } from "../../internal/utils";

export interface ComboboxRootContextValue {
  /** Slot class recipes from `comboboxVariants`. */
  slots: ComboboxVariants;
}

export const { ComboboxRootContext, useComboboxRoot } = createContext<ComboboxRootContextValue>()({
  name: "ComboboxRoot",
  strict: false,
});
