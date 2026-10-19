import { editableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { useStyles, withContext, withProvider } = createSlotRecipeContext(
  {
    name: "Editable",
    recipe: editableRecipe,
  },
);
