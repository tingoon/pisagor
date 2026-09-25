import type { ComboboxRecipe } from "@pisagor/recipes/combobox";
import { createContext } from "../../utils/create-context";

export interface ComboboxRootContextValue {
  slots: ComboboxRecipe;
}

const ctx = createContext<ComboboxRootContextValue | undefined>({
  defaultValue: undefined,
  name: "ComboboxRoot",
  strict: false,
});

export const setComboboxRootContext = ctx.setContext;
export const useComboboxRoot = ctx.getContext;
