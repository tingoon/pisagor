import { toastItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { useStyles: useToastItem, withProvider } =
  createSlotRecipeContext({
    name: "Toast",
    recipe: toastItemRecipe,
  });
