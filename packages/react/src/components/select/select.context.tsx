import type { SelectVariants } from "@pisagor/styles/ui/select";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";

export interface SelectRootContextValue extends WithTestId {
  /** Slot class recipes from `selectVariants`. */
  slots: SelectVariants;
}

export const { SelectRootContext, useSelectRoot } = createContext<SelectRootContextValue>()({
  name: "SelectRoot",
  strict: false,
});
