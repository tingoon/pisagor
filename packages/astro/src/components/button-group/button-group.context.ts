import { buttonGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  useStyles: useButtonGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ButtonGroup",
  recipe: buttonGroupRecipe,
});
