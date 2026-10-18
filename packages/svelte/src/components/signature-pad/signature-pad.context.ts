import { signaturePadRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useSignaturePad,
  withContext,
} = createSlotRecipeContext({
  name: "SignaturePad",
  recipe: signaturePadRecipe,
});
