import type { SelectRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

export interface SelectRootContextValue {
  slots: SelectRecipe;
}

export const { SelectRootContext, useSelectRoot } = createContext(
  "SelectRoot",
)<SelectRootContextValue>({ strict: false });
