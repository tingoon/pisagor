import type { SelectRecipe } from "@pisagor/recipes/select";
import { createContext } from "../../utils/create-context";

export interface SelectRootContextValue {
  slots: SelectRecipe;
}

const ctx = createContext<SelectRootContextValue | undefined>({
  defaultValue: undefined,
  name: "SelectRoot",
  strict: false,
});

export const setSelectRootContext = ctx.setContext;
export const useSelectRoot = ctx.getContext;
