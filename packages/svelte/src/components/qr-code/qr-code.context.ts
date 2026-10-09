import { qrCodeRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useQrCode,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "QrCode",
  recipe: qrCodeRecipe,
});
