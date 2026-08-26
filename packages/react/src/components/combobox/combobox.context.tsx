import type { ComboboxVariants } from "@pisagor/styles/ui/combobox";
import { createContext } from "../../utils";

export interface ComboboxRootContextValue {
  /** Slot class recipes from `comboboxVariants`. */
  slots: ComboboxVariants;
}

export const { ComboboxRootContext, useComboboxRoot } = createContext<ComboboxRootContextValue>()({
  name: "ComboboxRoot",
  strict: false,
});
