import { imageCropperRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useImageCropper,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ImageCropper",
  recipe: imageCropperRecipe,
});
