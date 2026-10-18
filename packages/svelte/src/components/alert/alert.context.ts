import { alertRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  useStyles: useAlert,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Alert",
  recipe: alertRecipe,
});
