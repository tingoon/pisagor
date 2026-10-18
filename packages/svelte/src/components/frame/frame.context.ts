import { frameRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useFrame,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Frame",
  recipe: frameRecipe,
});
