import { toastItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { useStyles: useToastItem, withProvider } =
  createSlotRecipeContext({
    name: "Toast",
    recipe: toastItemRecipe,
  });
