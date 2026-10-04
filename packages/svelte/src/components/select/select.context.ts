import type { SelectRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface SelectRootContextValue {
  slots: SelectRecipe;
}

const ctx = createContext("SelectRoot")<SelectRootContextValue | undefined>({
  defaultValue: undefined,
  strict: false,
});

export const setSelectRootContext = ctx.setContext;
export const useSelectRoot = ctx.getContext;
