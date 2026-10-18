import { editableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useEditable,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Editable",
  recipe: editableRecipe,
});
