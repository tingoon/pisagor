import { collapsibleRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useCollapsible,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
