import { listboxItemRecipe, listboxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  Context: ListboxStylesContext,
  useStyles,
  withContext: withListboxContext,
} = createSlotRecipeContext({
  name: "Listbox",
  recipe: listboxRecipe,
});

export const {
  withContext: withListboxItemContext,
  withProvider: withListboxItemProvider,
} = createSlotRecipeContext({
  name: "Listbox",
  recipe: listboxItemRecipe,
});
