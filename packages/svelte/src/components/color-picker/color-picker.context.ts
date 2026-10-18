import { colorPickerRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useColorPicker,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ColorPicker",
  recipe: colorPickerRecipe,
});
