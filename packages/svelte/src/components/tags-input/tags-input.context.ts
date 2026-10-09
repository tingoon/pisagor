import { tagsInputItemRecipe, tagsInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  Context: TagsInputStylesContext,
  useStyles: useTagsInput,
  withContext: withTagsInputContext,
  withProvider: withTagsInputProvider,
} = createSlotRecipeContext({
  name: "TagsInput",
  recipe: tagsInputRecipe,
});

export const {
  Context: TagsInputItemStylesContext,
  useStyles: useTagsInputItem,
  withContext: withTagsInputItemContext,
  withProvider: withTagsInputItemProvider,
} = createSlotRecipeContext({
  name: "TagsInput",
  recipe: tagsInputItemRecipe,
});
