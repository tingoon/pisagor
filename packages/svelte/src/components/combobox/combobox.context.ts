import {
  comboboxRecipe,
  type FormControlGroupShellVariantProps,
} from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const { Context, withContext, withProvider } = createSlotRecipeContext({
  name: "Combobox",
  recipe: comboboxRecipe,
});

/** Optional read (`undefined` outside the provider). */
export function useComboboxRoot() {
  return Context.get();
}

/** Root-level control props (`variant`, `size`) read by the Combobox control part. */
const controlCtx = createContext(
  "ComboboxControl",
)<FormControlGroupShellVariantProps>({
  defaultValue: {},
  strict: false,
});
export const setComboboxControlContext = controlCtx.setContext;
export const useComboboxControl = controlCtx.getContext;
