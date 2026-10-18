import { tableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useTable,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
