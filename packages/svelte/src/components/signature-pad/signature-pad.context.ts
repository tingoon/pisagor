import { signaturePadRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { useStyles, withContext, withProvider } = createSlotRecipeContext(
  {
    name: "SignaturePad",
    recipe: signaturePadRecipe,
  },
);
