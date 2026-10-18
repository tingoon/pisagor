import { numberInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useNumberInput,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "NumberInput",
  recipe: numberInputRecipe,
});
