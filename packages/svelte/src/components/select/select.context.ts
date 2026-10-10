import {
  type FormControlShellVariantProps,
  selectRecipe,
} from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const { Context, withContext, withProvider } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});

/** Optional read (`undefined` outside the provider). */
export function useSelectRoot() {
  return Context.get();
}

/** Root-level control props (`variant`, `size`) read by the Select control part. */
const controlCtx = createContext("SelectControl")<FormControlShellVariantProps>(
  {
    defaultValue: {},
    strict: false,
  },
);
export const setSelectControlContext = controlCtx.setContext;
export const useSelectControl = controlCtx.getContext;
