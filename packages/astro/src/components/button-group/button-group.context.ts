import { buttonGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const {
  useStyles: useButtonGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ButtonGroup",
  recipe: buttonGroupRecipe,
});
