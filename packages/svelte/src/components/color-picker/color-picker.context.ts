import { colorPickerRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useColorPicker,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ColorPicker",
  recipe: colorPickerRecipe,
});
