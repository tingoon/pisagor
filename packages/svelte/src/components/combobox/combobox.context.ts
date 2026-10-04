import type { ComboboxRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface ComboboxRootContextValue {
  slots: ComboboxRecipe;
}

const ctx = createContext("ComboboxRoot")<ComboboxRootContextValue | undefined>(
  {
    defaultValue: undefined,
    strict: false,
  },
);

export const setComboboxRootContext = ctx.setContext;
export const useComboboxRoot = ctx.getContext;
