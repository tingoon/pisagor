import { imageCropperRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "ImageCropper",
    recipe: imageCropperRecipe,
  });
