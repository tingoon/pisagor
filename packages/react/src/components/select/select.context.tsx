import type { SelectVariants } from "@pisagor/recipes/select";
import { createContext } from "../../internal/utils";

export interface SelectRootContextValue {
  /** Slot class recipes from `selectVariants`. */
  slots: SelectVariants;
}

export const { SelectRootContext, useSelectRoot } = createContext<SelectRootContextValue>()({
  name: "SelectRoot",
  strict: false,
});
