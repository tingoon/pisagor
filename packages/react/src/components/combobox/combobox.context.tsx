import type { ComboboxVariants } from "@pisagor/styles/ui/combobox";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";

export interface ComboboxRootContextValue extends WithTestId {
  /** Slot class recipes from `comboboxVariants`. */
  slots: ComboboxVariants;
}

export const { ComboboxRootContext, useComboboxRoot } = createContext<ComboboxRootContextValue>()({
  name: "ComboboxRoot",
  strict: false,
});
