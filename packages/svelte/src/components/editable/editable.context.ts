import { editableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useEditable,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Editable",
  recipe: editableRecipe,
});
