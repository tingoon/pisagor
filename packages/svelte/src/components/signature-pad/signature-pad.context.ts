import { signaturePadRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext } = createSlotRecipeContext({
  name: "SignaturePad",
  recipe: signaturePadRecipe,
});
