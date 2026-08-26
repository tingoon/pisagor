import type { SelectVariants } from "@pisagor/styles/ui/select";
import { createContext } from "../../utils";

export interface SelectRootContextValue {
  /** Slot class recipes from `selectVariants`. */
  slots: SelectVariants;
}

export const { SelectRootContext, useSelectRoot } = createContext<SelectRootContextValue>()({
  name: "SelectRoot",
  strict: false,
});
