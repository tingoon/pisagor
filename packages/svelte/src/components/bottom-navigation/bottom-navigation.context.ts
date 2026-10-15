import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
import { getContext, setContext } from "svelte";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  Context: BottomNavigationStylesContext,
  useStyles: useBottomNavigation,
  withContext: withBottomNavigationContext,
  withProvider: withBottomNavigationProvider,
} = createSlotRecipeContext({
  name: "BottomNavigation",
  recipe: bottomNavigationRecipe,
});

export const {
  Context: BottomNavigationItemStylesContext,
  useStyles: useBottomNavigationItem,
  withContext: withBottomNavigationItemContext,
  withProvider: withBottomNavigationItemProvider,
} = createSlotRecipeContext({
  name: "BottomNavigation",
  recipe: bottomNavigationItemRecipe,
});

const VALUE_KEY = Symbol("BottomNavigationValue");

export function setBottomNavigationValue(get: () => string | undefined) {
  setContext(VALUE_KEY, get);
}

export function useBottomNavigationValue(): () => string | undefined {
  return (
    getContext<(() => string | undefined) | undefined>(VALUE_KEY) ??
    (() => undefined)
  );
}
