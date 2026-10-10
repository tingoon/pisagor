import { listboxItemRecipe, listboxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  Context: ListboxStylesContext,
  useStyles: useListbox,
  withContext: withListboxContext,
  withProvider: withListboxProvider,
} = createSlotRecipeContext({
  name: "Listbox",
  recipe: listboxRecipe,
});

export const {
  Context: ListboxItemStylesContext,
  withContext: withListboxItemContext,
  withProvider: withListboxItemProvider,
} = createSlotRecipeContext({
  name: "Listbox",
  recipe: listboxItemRecipe,
});

/** Optional read (`undefined` outside the provider). */
export function useListboxItem() {
  return ListboxItemStylesContext.get();
}
