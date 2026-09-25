import type { SelectRecipe } from "@pisagor/recipes/select";
import { createContext } from "../../utils";

export interface SelectRootContextValue {
  slots: SelectRecipe;
}

export const { SelectRootContext, useSelectRoot } =
  createContext<SelectRootContextValue>()({
    name: "SelectRoot",
    strict: false,
  });
