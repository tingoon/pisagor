import { qrCodeRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useQrCode,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "QrCode",
  recipe: qrCodeRecipe,
});
