import { numberInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useNumberInput,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "NumberInput",
  recipe: numberInputRecipe,
});
