import {
  bottomNavigationItemRecipe,
  bottomNavigationRecipe,
} from "@pisagor/recipes";
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
