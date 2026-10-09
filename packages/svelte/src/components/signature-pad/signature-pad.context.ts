import { signaturePadRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useSignaturePad,
  withContext,
} = createSlotRecipeContext({
  name: "SignaturePad",
  recipe: signaturePadRecipe,
});
