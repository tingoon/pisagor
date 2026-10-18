import { colorPickerRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "ColorPicker",
    recipe: colorPickerRecipe,
  });
